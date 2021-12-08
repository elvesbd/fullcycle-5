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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenGuard = void 0;
const common_1 = require("@nestjs/common");
const account_storage_service_1 = require("./account-storage/account-storage.service");
let TokenGuard = class TokenGuard {
    constructor(accountStorageService) {
        this.accountStorageService = accountStorageService;
    }
    async canActivate(context) {
        var _a;
        const request = context.switchToHttp().getRequest();
        const token = (_a = request.headers) === null || _a === void 0 ? void 0 : _a['x-token'];
        if (token) {
            try {
                await this.accountStorageService.setBy(token);
                return true;
            }
            catch (e) {
                console.error(e);
                return false;
            }
        }
        return false;
    }
};
TokenGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [account_storage_service_1.AccountStorageService])
], TokenGuard);
exports.TokenGuard = TokenGuard;
//# sourceMappingURL=token.guard.js.map