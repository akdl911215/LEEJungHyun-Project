import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { UsersDeleteAdaptor } from "../../domain/adaptor/users.delete.adaptor";
import { UsersDeleteAdaptorInputDto } from "../../inbound/dtos/users.delete.adaptor.input.dto";
import { UsersDeleteAdaptorOutputDto } from "../../outbound/dtos/users.delete.adaptor.output.dto";
import { CONFIRM_REQUIRED_UNIQUE_ID_INFORMATION } from "../../../_common/constants/http/errors/400";

@Injectable()
export class UsersDeleteUseCase implements UsersDeleteAdaptor {
  constructor(
    @Inject("DELETE") private readonly repository: UsersDeleteAdaptor
  ) {}

  public async delete(
    dto: UsersDeleteAdaptorInputDto
  ): Promise<UsersDeleteAdaptorOutputDto> {
    const { id } = dto;

    if (id === "")
      throw new BadRequestException(CONFIRM_REQUIRED_UNIQUE_ID_INFORMATION);

    return await this.repository.delete(dto);
  }
}