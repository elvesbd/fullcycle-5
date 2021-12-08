import { Model } from 'sequelize-typescript';
export declare enum OrderStatus {
    PENDING = "pending",
    APPROVED = "approved"
}
export declare class Order extends Model {
    id: string;
    amount: number;
    credit_card_number: string;
    credit_card_name: string;
    status: OrderStatus;
}