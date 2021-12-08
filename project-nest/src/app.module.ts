import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { Order } from './orders/entities/order.entity';
import { OrdersModule } from './orders/orders.module';
import { AccountsModule } from './accounts/accounts.module';
import { Account } from './accounts/entities/account.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: process.env.DB_CONNECTION as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_HOST),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadModels: true,
      sync: {
        alter: true,
        //force: true,
      },
      models: [Order, Account],
    }),
    /* SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, 'database.sqlite'),
      autoLoadModels: true,
      sync: {
        alter: true,
        //force: true,
      },
      models: [Order, Account],
    }), */
    OrdersModule,
    AccountsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
