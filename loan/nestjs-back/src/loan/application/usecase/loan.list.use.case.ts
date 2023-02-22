import { Inject, Injectable } from "@nestjs/common";
import { LoanListAdaptor } from "../../domain/adaptor/loan.list.adaptor";
import { LoanListAdaptorInputDto } from "../../inbound/dtos/loan.list.adaptor.input.dto";
import { LoanListAdaptorOutputDto } from "../../outbound/dtos/loan.list.adaptor.output.dto";

@Injectable()
export class LoanListUseCase implements LoanListAdaptor {
  constructor(@Inject("LIST") private readonly repository: LoanListAdaptor) {}

  public async list(
    dto: LoanListAdaptorInputDto
  ): Promise<LoanListAdaptorOutputDto> {
    return Promise.resolve(undefined);
  }
}
