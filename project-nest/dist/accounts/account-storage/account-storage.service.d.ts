import { Account } from '../entities/account.entity';
import { AccountsService } from '../services/accounts.service';
export declare class AccountStorageService {
    private accountService;
    private _account;
    constructor(accountService: AccountsService);
    get account(): Account;
    setBy(token: string): Promise<void>;
}
