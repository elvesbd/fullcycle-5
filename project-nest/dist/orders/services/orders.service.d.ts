import { AccountStorageService } from 'src/accounts/account-storage/account-storage.service';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';
import { Order } from '../entities/order.entity';
export declare class OrdersService {
    private readonly orderModel;
    private readonly accountStorageService;
    constructor(orderModel: typeof Order, accountStorageService: AccountStorageService);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: string): Promise<Order>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<Order>;
    remove(id: string): Promise<void>;
}
