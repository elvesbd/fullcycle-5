"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const sequelize_1 = require("@nestjs/sequelize");
const accounts_module_1 = require("../accounts/accounts.module");
const orders_controller_1 = require("./controllers/orders.controller");
const order_entity_1 = require("./entities/order.entity");
const orders_service_1 = require("./services/orders.service");
let OrdersModule = class OrdersModule {
};
OrdersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([order_entity_1.Order]),
            microservices_1.ClientsModule.registerAsync([
                {
                    name: 'KAFKA_SERVICE',
                    useFactory: () => ({
                        transport: microservices_1.Transport.KAFKA,
                        options: {
                            client: {
                                clientId: process.env.KAFKA_CLIENT_ID,
                                brokers: [process.env.KAFKA_HOST],
                                ssl: process.env.KAFKA_USE_SSL === 'true',
                            },
                            consumer: {
                                groupId: process.env.KAFKA_CONSUMER_GROUP_ID,
                            },
                        },
                    }),
                },
            ]),
            accounts_module_1.AccountsModule,
        ],
        controllers: [orders_controller_1.OrdersController],
        providers: [
            orders_service_1.OrdersService,
            {
                provide: 'KAFKA_PRODUCER',
                useFactory: async (kafkaService) => {
                    return kafkaService.connect();
                },
                inject: ['KAFKA_SERVICE'],
            },
        ],
    })
], OrdersModule);
exports.OrdersModule = OrdersModule;
//# sourceMappingURL=orders.module.js.map