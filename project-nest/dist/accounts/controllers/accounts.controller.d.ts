import { CreateAccountDto } from '../dto/create-account.dto';
import { UpdateAccountDto } from '../dto/update-account.dto';
import { AccountsService } from '../services/accounts.service';
export declare class AccountsController {
    private readonly accountsService;
    constructor(accountsService: AccountsService);
    create(createAccountDto: CreateAccountDto): Promise<import("../entities/account.entity").Account>;
    findAll(): Promise<import("../entities/account.entity").Account[]>;
    findOne(id: string): Promise<import("../entities/account.entity").Account>;
    update(id: string, updateAccountDto: UpdateAccountDto): Promise<import("../entities/account.entity").Account>;
    remove(id: string): Promise<void>;
}
