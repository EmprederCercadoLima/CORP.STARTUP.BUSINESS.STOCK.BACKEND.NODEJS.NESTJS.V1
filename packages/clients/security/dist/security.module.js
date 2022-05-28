"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SecurityModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const security_service_1 = require("./security.service");
let SecurityModule = SecurityModule_1 = class SecurityModule {
    static register(clientOptions) {
        const client = {
            provide: 'CLIENT_SECURITY',
            useValue: this.assignOnAppShutdownHook(new microservices_1.ClientTCP(clientOptions)),
        };
        return {
            global: clientOptions.glogal,
            module: SecurityModule_1,
            providers: [client, security_service_1.SecurityService],
            exports: [security_service_1.SecurityService],
        };
    }
    static registerAsync(option) {
        return {
            global: option.global,
            module: SecurityModule_1,
            imports: option.imports,
            providers: [
                ...this.createAsyncProviders(option).concat(option.extraProviders || []),
                security_service_1.SecurityService,
            ],
            exports: [security_service_1.SecurityService],
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
                provide: 'CLIENT_SECURITY',
                useFactory: this.createFactoryWrapper(options.useFactory),
                inject: options.inject || [],
            };
        }
        return {
            provide: 'CLIENT_SECURITY',
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
SecurityModule = SecurityModule_1 = __decorate([
    (0, common_1.Module)({})
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=security.module.js.map