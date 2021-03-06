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
exports.AccountsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_2 = require("sequelize");
const sequelize_3 = require("sequelize");
const account_entity_1 = require("../entities/account.entity");
let AccountsService = class AccountsService {
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    create(createAccountDto) {
        return this.orderModel.create(createAccountDto);
    }
    findAll() {
        return this.orderModel.findAll();
    }
    findOne(idOrToken) {
        return this.orderModel.findOne({
            where: {
                [sequelize_3.Op.or]: {
                    id: idOrToken,
                    token: idOrToken,
                },
            },
            rejectOnEmpty: new sequelize_2.EmptyResultError(`Account with ID/Token ${idOrToken} not found`),
        });
    }
    async update(id, updateAccountDto) {
        const account = await this.findOne(id);
        return account.update(updateAccountDto);
    }
    async remove(id) {
        const account = await this.findOne(id);
        return account.destroy();
    }
};
AccountsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(account_entity_1.Account)),
    __metadata("design:paramtypes", [Object])
], AccountsService);
exports.AccountsService = AccountsService;
//# sourceMappingURL=accounts.service.js.map