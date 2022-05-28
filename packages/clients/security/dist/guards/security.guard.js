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
var SecurityGuard_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityGuard = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const security_service_1 = require("../security.service");
let SecurityGuard = SecurityGuard_1 = class SecurityGuard {
    constructor(securityService) {
        this.securityService = securityService;
        this.logger = new common_1.Logger(SecurityGuard_1.name);
        this.decodeTokenForGrocer = (token) => {
            const decodeToken = Buffer.from((0, jsonwebtoken_1.decode)(token).toString(), 'base64').toString('utf8');
            return this.parseTokenForGrocer(decodeToken);
        };
        this.parseTokenForGrocer = (decodeToken) => {
            const decodeTokenParse = JSON.parse(decodeToken);
            this.logger.log(`${SecurityGuard_1.name}::canActivate::parseTokenForGrocer::${decodeTokenParse}`);
            return {
                email: decodeTokenParse["email"],
                firstName: decodeTokenParse["firstName"],
                lastName: decodeTokenParse["lastName"],
                idGrocer: decodeTokenParse["idGrocer"],
                permisions: decodeTokenParse["poermisions"]
            };
        };
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        if (!request.headers.authorization)
            throw new common_1.UnauthorizedException();
        const parts = request.headers.authorization.split(' ');
        if (parts.length !== 2)
            throw new common_1.ForbiddenException();
        if (parts[0].toLowerCase() !== 'bearer')
            throw new common_1.ForbiddenException();
        const isVerify = (0, jsonwebtoken_1.verify)(parts[1], 'CORP.STARTUP.BUSINESS.STOCK.BACKEND.NODEJS.NESTJS', { algorithms: ['HS256'] });
        const isValid = await this.securityService.validateToken({ token: parts[1] });
        if (!isValid)
            throw new common_1.UnauthorizedException();
        request.token = isVerify;
        return true;
    }
};
SecurityGuard = SecurityGuard_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [security_service_1.SecurityService])
], SecurityGuard);
exports.SecurityGuard = SecurityGuard;
//# sourceMappingURL=security.guard.js.map