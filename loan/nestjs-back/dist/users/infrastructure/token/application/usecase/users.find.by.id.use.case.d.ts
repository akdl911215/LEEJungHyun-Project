import { UsersFindByIdInterface } from "../../interface/users.find.by.id.interface";
import { UsersFindByIdAdaptorOutputDto } from "../../../../outbound/dtos/users.find.by.id.adaptor.output.dto";
import { UsersFindByIdAdaptorInputDto } from "../../../../inbound/dtos/users.find.by.id.adaptor.input.dto";
export declare class UsersFindByIdUseCase implements UsersFindByIdInterface {
    private readonly repository;
    constructor(repository: UsersFindByIdInterface);
    usersFindById({ id, }: UsersFindByIdAdaptorInputDto): Promise<UsersFindByIdAdaptorOutputDto>;
}