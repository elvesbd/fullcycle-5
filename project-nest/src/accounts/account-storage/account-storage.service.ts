import { Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Account } from '../entities/account.entity';
import { AccountsService } from '../services/accounts.service';

@Injectable({ scope: Scope.REQUEST })
export class AccountStorageService {
  private _account: Account | null = null;
  constructor(
    @InjectModel(Account)
    private accountService: AccountsService,
  ) {}

  get account() {
    return this._account;
  }

  async setBy(token: string) {
    this._account = await this.accountService.findOne(token);
  }
}
