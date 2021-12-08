import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { Order } from './orders/entities/order.entity';
import { OrdersModule } from './orders/orders.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, 'database.sqlite'),
      autoLoadModels: true,
      models: [Order],
    }),
    OrdersModule,
    AccountsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
