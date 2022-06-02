import {
  DynamicModule,
  Module,
  Provider,
  OnApplicationShutdown,
} from '@nestjs/common';
import { ClientProxy, Closeable, ClientTCP } from '@nestjs/microservices';
import { NotificationService } from './notification.service';
import {
  ClientProviderOptions,
  ClientsModuleOptionsFactory,
  ClientsProviderAsyncOptions,
} from './interfaces';

@Module({})
export class NotificationModule {
  static register(clientOptions: ClientProviderOptions): DynamicModule {
    const client = {
      provide: 'CLIENT_NOTIFICATION',
      useValue: this.assignOnAppShutdownHook(new ClientTCP(clientOptions)),
    };
    return {
      global: clientOptions.glogal,
      module: NotificationModule,
      providers: [client, NotificationService],
      exports: [NotificationService],
    };
  }

  static registerAsync(option: ClientsProviderAsyncOptions): DynamicModule {
    return {
      global: option.global,
      module: NotificationModule,
      imports: option.imports,
      providers: [
        ...this.createAsyncProviders(option).concat(
          option.extraProviders || [],
        ),
        NotificationService,
      ],
      exports: [NotificationService],
    };
  }

  private static createAsyncProviders(
    options: ClientsProviderAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }
    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(
    options: ClientsProviderAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: 'CLIENT_NOTIFICATION',
        useFactory: this.createFactoryWrapper(options.useFactory),
        inject: options.inject || [],
      };
    }
    return {
      provide: 'CLIENT_NOTIFICATION',
      useFactory: this.createFactoryWrapper(
        (optionsFactory: ClientsModuleOptionsFactory) =>
          optionsFactory.createClientOptions(),
      ),
      inject: [options.useExisting || options.useClass],
    };
  }

  private static createFactoryWrapper(
    useFactory: ClientsProviderAsyncOptions['useFactory'],
  ) {
    return async (...args: any[]) => {
      const clientOptions = await useFactory(...args);
      const clientProxyRef = new ClientTCP(clientOptions);
      return this.assignOnAppShutdownHook(clientProxyRef);
    };
  }

  private static assignOnAppShutdownHook(
    client: ClientProxy & Closeable,
  ): ClientProxy & Closeable {
    (client as unknown as OnApplicationShutdown).onApplicationShutdown =
      client.close;
    return client;
  }
}
