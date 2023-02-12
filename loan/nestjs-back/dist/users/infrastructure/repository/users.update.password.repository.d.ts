import { UsersModel } from "../../domain/entity/users.model";
import { HashEncodedService } from "../bcrypt/hash.encoded.service";
import { UsersUpdatePasswordAdaptorInputDto } from "../../inbound/dtos/users.update.password.adaptor.input.dto";
import { UsersUpdatePasswordAdaptorOutputDto } from "../../outbound/dtos/users.update.password.adaptor.output.dto";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { UsersUpdatePasswordAdaptor } from "../../domain/adaptor/users.update.password.adaptor";
export declare class UsersUpdatePasswordRepository implements UsersUpdatePasswordAdaptor {
    private readonly prisma;
    private readonly hash;
    constructor(prisma: PrismaService, hash: HashEncodedService);
    updatePassword(dto: {
        requestPassword: UsersUpdatePasswordAdaptorInputDto;
        user: UsersModel;
    }): Promise<UsersUpdatePasswordAdaptorOutputDto>;
}