"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MasterModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const master_service_1 = require("./master.service");
let MasterModule = MasterModule_1 = class MasterModule {
    static register(clientOptions) {
        const client = {
            provide: 'CLIENT_MASTER',
            useValue: this.assignOnAppShutdownHook(new microservices_1.ClientTCP(clientOptions)),
        };
        return {
            global: clientOptions.glogal,
            module: MasterModule_1,
            providers: [client, master_service_1.MasterService],
            exports: [master_service_1.MasterService],
        };
    }
    static registerAsync(option) {
        return {
            global: option.global,
            module: MasterModule_1,
            imports: option.imports,
            providers: [
                ...this.createAsyncProviders(option).concat(option.extraProviders || []),
                master_service_1.MasterService,
            ],
            exports: [master_service_1.MasterService],
        };
    }
    static createAsyncProviders(options) {
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
    static createAsyncOptionsProvider(options) {
        if (options.useFactory) {
            return {
                provide: 'CLIENT_MASTER',
                useFactory: this.createFactoryWrapper(options.useFactory),
                inject: options.inject || [],
            };
        }
        return {
            provide: 'CLIENT_MASTER',
            useFactory: this.createFactoryWrapper((optionsFactory) => optionsFactory.createClientOptions()),
            inject: [options.useExisting || options.useClass],
        };
    }
    static createFactoryWrapper(useFactory) {
        return async (...args) => {
            const clientOptions = await useFactory(...args);
            const clientProxyRef = new microservices_1.ClientTCP(clientOptions);
            return this.assignOnAppShutdownHook(clientProxyRef);
        };
    }
    static assignOnAppShutdownHook(client) {
        client.onApplicationShutdown =
            client.close;
        return client;
    }
};
MasterModule = MasterModule_1 = __decorate([
    (0, common_1.Module)({})
], MasterModule);
exports.MasterModule = MasterModule;
//# sourceMappingURL=master.module.js.map