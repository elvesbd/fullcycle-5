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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountStorageService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const account_entity_1 = require("../entities/account.entity");
const accounts_service_1 = require("../services/accounts.service");
let AccountStorageService = class AccountStorageService {
    constructor(accountService) {
        this.accountService = accountService;
        this._account = null;
    }
    get account() {
        return this._account;
    }
    async setBy(token) {
        this._account = await this.accountService.findOne(token);
    }
};
AccountStorageService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, sequelize_1.InjectModel)(account_entity_1.Account)),
    __metadata("design:paramtypes", [accounts_service_1.AccountsService])
], AccountStorageService);
exports.AccountStorageService = AccountStorageService;
//# sourceMappingURL=account-storage.service.js.map