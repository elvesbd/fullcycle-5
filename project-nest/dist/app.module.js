"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const path_1 = require("path");
const order_entity_1 = require("./orders/entities/order.entity");
const orders_module_1 = require("./orders/orders.module");
const accounts_module_1 = require("./accounts/accounts.module");
const account_entity_1 = require("./accounts/entities/account.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'sqlite',
                host: (0, path_1.join)(__dirname, 'database.sqlite'),
                autoLoadModels: true,
                sync: {
                    alter: true,
                },
                models: [order_entity_1.Order, account_entity_1.Account],
            }),
            orders_module_1.OrdersModule,
            accounts_module_1.AccountsModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map