import { BaseOutputDto } from "../../../common/dtos/base.output.dto";

export class UsersExistsNicknameOutputDto extends BaseOutputDto<{
  readonly validateNickname: boolean;
}> {}