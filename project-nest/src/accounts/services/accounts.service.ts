import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EmptyResultError } from 'sequelize';
import { Op } from 'sequelize';
import { CreateAccountDto } from '../dto/create-account.dto';
import { UpdateAccountDto } from '../dto/update-account.dto';
import { Account } from '../entities/account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account)
    private readonly orderModel: typeof Account,
  ) {}

  create(createAccountDto: CreateAccountDto) {
    return this.orderModel.create(createAccountDto);
  }

  findAll() {
    return this.orderModel.findAll();
  }

  findOne(idOrToken: string) {
    return this.orderModel.findOne({
      where: {
        [Op.or]: {
          id: idOrToken,
          token: idOrToken,
        },
      },
      rejectOnEmpty: new EmptyResultError(
        `Account with ID/Token ${idOrToken} not found`,
      ),
    });
  }

  async update(id: string, updateAccountDto: UpdateAccountDto) {
    const account = await this.findOne(id);
    return account.update(updateAccountDto);
  }

  async remove(id: string) {
    const account = await this.findOne(id);
    return account.destroy();
  }
}