import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class AccessTokenGuard extends AuthGuard("JWT-ACCESS-TOKEN") {
  canActivate(context: ExecutionContext) {
    console.log("context : ", context);
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    console.log(err, user);
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
