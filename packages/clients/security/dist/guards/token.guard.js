"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TokenGuard_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenGuard = void 0;
const common_1 = require("@nestjs/common");
let TokenGuard = TokenGuard_1 = class TokenGuard {
    constructor() {
        this.logger = new common_1.Logger(TokenGuard_1.name);
    }
    async canActivate(context) {
        try {
            const request = context.switchToHttp().getRequest();
            if (!request.headers.authorization)
                throw new common_1.UnauthorizedException();
            const parts = request.headers.authorization.split(' ');
            if (parts.length == 2) {
                if (parts[0].toLowerCase() === 'bearer') {
                    this.logger.log(`${TokenGuard_1.name}::try-catch::${JSON.stringify(parts)}`);
                    return true;
                }
                throw new common_1.ForbiddenException();
            }
            throw new common_1.ForbiddenException();
        }
        catch (error) {
            this.logger.error(`${TokenGuard_1.name}::try-catch::`, error);
            throw new common_1.ForbiddenException();
        }
    }
};
TokenGuard = TokenGuard_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TokenGuard);
exports.TokenGuard = TokenGuard;
//# sourceMappingURL=token.guard.js.map