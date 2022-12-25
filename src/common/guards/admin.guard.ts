import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { UserDBService } from "../db_services/users/userDB.service";
import { JwtUser } from "../../types/jwtuser.type";

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private readonly userDBService: UserDBService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    context.getHandler()
    context.getClass()
    const req = context.switchToHttp().getRequest();
    const user: JwtUser = req.user;
    return await this.userDBService.is_admin(Number(user.id));
  }
}
