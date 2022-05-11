import { ModuleMetadata, Provider, Type } from '@nestjs/common/interfaces';
import { TcpClientOptions } from '@nestjs/microservices';
export declare type ClientProvider = TcpClientOptions['options'];
export declare type ClientProviderOptions = ClientProvider & {
    glogal?: boolean;
};
export interface ClientsModuleOptionsFactory {
    createClientOptions(): Promise<ClientProvider> | ClientProvider;
}
export interface ClientsProviderAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    useExisting?: Type<ClientsModuleOptionsFactory>;
    useClass?: Type<ClientsModuleOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<ClientProvider> | ClientProvider;
    inject?: any[];
    extraProviders?: Provider[];
    global?: boolean;
}
