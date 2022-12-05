import { Strategy } from "passport-jwt";
import { StrategyFindByIdInterface } from "../../../../users/interfaces/strategy.find.by.id.interface";
import { Request } from "express";
import { RefreshPayloadType } from "../type/refresh.token.payload.type";
import { ConfigService } from "@nestjs/config";
import { BaseOutputDto } from "../../../dtos/base.output.dto";
import { UsersBaseDto } from "../../../../users/dtos/users.base.dto";
import { TokenService } from "../token.service";
declare const RefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class RefreshTokenStrategy extends RefreshTokenStrategy_base {
    private readonly usersService;
    private readonly configService;
    private readonly jwtToken;
    constructor(usersService: StrategyFindByIdInterface, configService: ConfigService, jwtToken: TokenService);
    validate(request: Request, payload: RefreshPayloadType): Promise<BaseOutputDto<UsersBaseDto>>;
}
export {};
