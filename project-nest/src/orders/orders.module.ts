import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrdersController } from './controllers/orders.controller';
import { Order } from './entities/order.entity';
import { OrdersService } from './services/orders.service';

@Module({
  imports: [SequelizeModule.forFeature([Order])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
