import { KafkaMessage } from '@nestjs/microservices/external/kafka.interface';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';
import { OrdersService } from '../services/orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<import("../entities/order.entity").Order>;
    findAll(): Promise<import("../entities/order.entity").Order[]>;
    findOne(id: string): Promise<import("../entities/order.entity").Order>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<import("../entities/order.entity").Order>;
    remove(id: string): Promise<void>;
    consumerUpdateStatus(message: KafkaMessage): void;
}
