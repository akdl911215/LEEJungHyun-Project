import { Dependencies, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../common/infrastructure/prisma/prisma.service';
import { NOTFOUND_USER } from '../../../common/constants/http/errors/404';
import { UsersFindByIdAdaptorOutputDto } from '../../outbound/dtos/users.find.by.id.adaptor.output.dto';
import { UsersFindByIdInterface } from '../token/interfaces/users.find.by.id.interface';
import { UsersFindByIdAdaptorInputDto } from '../../inbound/dtos/users.find.by.id.adaptor.input.dto';

@Injectable()
@Dependencies([PrismaService])
export class UsersFindByIdRepository implements UsersFindByIdInterface {
  constructor(private readonly prisma: PrismaService) {}

  public async usersFindById({
    id,
  }: UsersFindByIdAdaptorInputDto): Promise<UsersFindByIdAdaptorOutputDto> {
    const user = await this.prisma.users.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(NOTFOUND_USER);

    return { response: user };
  }
}
