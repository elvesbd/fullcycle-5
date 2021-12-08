import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AccountStorageService } from './account-storage/account-storage.service';
export declare class TokenGuard implements CanActivate {
    private accountStorageService;
    constructor(accountStorageService: AccountStorageService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
