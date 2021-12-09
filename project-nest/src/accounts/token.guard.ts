import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AccountStorageService } from './account-storage/account-storage.service';

@Injectable()
export class TokenGuard implements CanActivate {
  constructor(private accountStorageService: AccountStorageService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (context.getType() != 'http') {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = request.headers?.['x-token'] as string;

    if (token) {
      try {
        await this.accountStorageService.setBy(token);
        return true;
      } catch (e) {
        console.error(e);
        return false;
      }
    }
    return false;
  }
}
