"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SecuenceNumberCommon_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecuenceNumberCommon = void 0;
const common_1 = require("@nestjs/common");
let SecuenceNumberCommon = SecuenceNumberCommon_1 = class SecuenceNumberCommon {
    static execute(secuenceCurrentValue, secuenceCurrentPrefix) {
        try {
            secuenceCurrentValue++;
            let secuenceNumber = secuenceCurrentPrefix;
            switch (true) {
                case secuenceCurrentValue < 10:
                    secuenceNumber = `${secuenceNumber}000${secuenceCurrentValue}`;
                    break;
                case secuenceCurrentValue < 99 && secuenceCurrentValue > 9:
                    secuenceNumber = `${secuenceNumber}00${secuenceCurrentValue}`;
                    break;
                case secuenceCurrentValue < 1000 && secuenceCurrentValue > 99:
                    secuenceNumber = `${secuenceNumber}0${secuenceCurrentValue}`;
                    break;
                default:
                    secuenceNumber = secuenceNumber + secuenceCurrentValue;
                    break;
            }
            this.logger.log(`${SecuenceNumberCommon_1.name}::execute::${secuenceNumber}`);
            return secuenceNumber;
        }
        catch (error) {
            this.logger.log(`Error::${SecuenceNumberCommon_1.name}::execute::`, error);
            throw new Error();
        }
    }
};
SecuenceNumberCommon.logger = new common_1.Logger(SecuenceNumberCommon_1.name);
SecuenceNumberCommon = SecuenceNumberCommon_1 = __decorate([
    (0, common_1.Injectable)()
], SecuenceNumberCommon);
exports.SecuenceNumberCommon = SecuenceNumberCommon;
//# sourceMappingURL=secuence-number.common.js.map