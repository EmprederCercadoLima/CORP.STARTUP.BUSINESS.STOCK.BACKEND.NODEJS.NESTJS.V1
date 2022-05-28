import { DynamicModule } from '@nestjs/common';
import { ClientProviderOptions, ClientsProviderAsyncOptions } from './interfaces';
export declare class MasterModule {
    static register(clientOptions: ClientProviderOptions): DynamicModule;
    static registerAsync(option: ClientsProviderAsyncOptions): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
    private static createFactoryWrapper;
    private static assignOnAppShutdownHook;
}
