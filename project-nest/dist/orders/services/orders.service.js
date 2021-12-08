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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_2 = require("sequelize");
const account_storage_service_1 = require("../../accounts/account-storage/account-storage.service");
const order_entity_1 = require("../entities/order.entity");
let OrdersService = class OrdersService {
    constructor(orderModel, accountStorageService) {
        this.orderModel = orderModel;
        this.accountStorageService = accountStorageService;
    }
    create(createOrderDto) {
        return this.orderModel.create(Object.assign(Object.assign({}, createOrderDto), { account_id: this.accountStorageService.account.id }));
    }
    findAll() {
        return this.orderModel.findAll({
            where: {
                account_id: this.accountStorageService.account.id,
            },
        });
    }
    findOne(id) {
        return this.orderModel.findOne({
            where: {
                id,
                account_id: this.accountStorageService.account.id,
            },
            rejectOnEmpty: new sequelize_2.EmptyResultError(`Order with ID ${id} not found`),
        });
    }
    async update(id, updateOrderDto) {
        const order = await this.findOne(id);
        return order.update(updateOrderDto);
    }
    async remove(id) {
        const order = await this.findOne(id);
        return order.destroy();
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(order_entity_1.Order)),
    __metadata("design:paramtypes", [Object, account_storage_service_1.AccountStorageService])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map