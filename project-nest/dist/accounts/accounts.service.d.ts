import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
export declare class AccountsService {
    create(createAccountDto: CreateAccountDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAccountDto: UpdateAccountDto): string;
    remove(id: string): string;
}
