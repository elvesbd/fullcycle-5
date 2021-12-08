import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AccountsModule } from 'src/accounts/accounts.module';
import { OrdersController } from './controllers/orders.controller';
import { Order } from './entities/order.entity';
import { OrdersService } from './services/orders.service';

@Module({
  imports: [SequelizeModule.forFeature([Order]), AccountsModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
