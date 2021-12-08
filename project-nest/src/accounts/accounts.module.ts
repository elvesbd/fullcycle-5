import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AccountsController } from './controllers/accounts.controller';
import { Account } from './entities/account.entity';
import { AccountsService } from './services/accounts.service';
import { AccountStorageService } from './account-storage/account-storage.service';
import { TokenGuard } from './token.guard';

@Module({
  imports: [SequelizeModule.forFeature([Account])],
  controllers: [AccountsController],
  providers: [AccountsService, AccountStorageService, TokenGuard],
  exports: [AccountStorageService],
})
export class AccountsModule {}
