import { Module } from '@nestjs/common';
import { ClientsModule, Transport, ClientKafka } from '@nestjs/microservices';
import { SequelizeModule } from '@nestjs/sequelize';
import { AccountsModule } from 'src/accounts/accounts.module';
import { OrdersController } from './controllers/orders.controller';
import { Order } from './entities/order.entity';
import { OrdersService } from './services/orders.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Order]),
    ClientsModule.registerAsync([
      {
        name: 'KAFKA_SERVICE',
        useFactory: () => ({
          transport: Transport.KAFKA,
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
    AccountsModule,
  ],
  controllers: [OrdersController],
  providers: [
    OrdersService,
    {
      provide: 'KAFKA_PRODUCER',
      useFactory: async (kafkaService: ClientKafka) => {
        return kafkaService.connect();
      },
      inject: ['KAFKA_SERVICE'],
    },
  ],
})
export class OrdersModule {}
