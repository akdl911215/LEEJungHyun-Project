import { BaseOutputDto } from "../../../common/dtos/base.output.dto";
import { UsersModel } from "../../domain/entity/users.model";
export declare class UsersLoginAdaptorOutputDto extends BaseOutputDto<UsersModel & {
    readonly accessToken: string;
    readonly refreshToken: string;
}> {
}