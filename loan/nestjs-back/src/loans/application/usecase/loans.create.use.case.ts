import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { LoansCreateAdaptorOutputDto } from "../../outbound/dtos/loans.create.adaptor.output.dto";
import {
  CONFIRM_REQUIRED_CREDITOR_INFORMATION,
  CONFIRM_REQUIRED_DEBTOR_INFORMATION,
  CONFIRM_REQUIRED_LOAN_INFORMATION,
  CONFIRM_REQUIRED_LOAN_INTEREST_INFORMATION,
  CONFIRM_REQUIRED_LOAN_REPAYMENT_DATE_INFORMATION,
} from "../../../_common/constants/http/errors/400";
import { LoansCreateAdaptor } from "../../domain/adaptor/loans.create.adaptor";
import { LoansCreateAdaptorInputDto } from "../../inbound/dtos/loans.create.adaptor.input.dto";

@Injectable()
export class LoansCreateUseCase implements LoansCreateAdaptor {
  constructor(
    @Inject("CREATE") private readonly repository: LoansCreateAdaptor
  ) {}

  public async create(
    dto: LoansCreateAdaptorInputDto
  ): Promise<LoansCreateAdaptorOutputDto> {
    const {
      creditorId,
      creditor,
      debtorId,
      debtor,
      totalAmountLoan,
      loanRepaymentDate,
      interest,
    } = dto;

    function confirmCreditorInput(creditorId, creditor): boolean {
      if (!creditorId || !creditor) return true;
      else return false;
    }
    if (confirmCreditorInput(creditorId, creditor))
      throw new BadRequestException(CONFIRM_REQUIRED_CREDITOR_INFORMATION);

    function confirmDebtorInput(debtorId, debtor): boolean {
      if (!debtorId || !debtor) return true;
      else return false;
    }
    if (confirmDebtorInput(debtorId, debtor))
      throw new BadRequestException(CONFIRM_REQUIRED_DEBTOR_INFORMATION);

    function confirmTotalAmountLoanInput(totalAmountLoan): boolean {
      if (totalAmountLoan === 0) return true;
      else return false;
    }
    if (confirmTotalAmountLoanInput(totalAmountLoan))
      throw new BadRequestException(CONFIRM_REQUIRED_LOAN_INFORMATION);

    function confirmLoanRepaymentDate(loanRepaymentDate): boolean {
      if (!loanRepaymentDate) return true;
      else return false;
    }
    if (confirmLoanRepaymentDate(loanRepaymentDate))
      throw new BadRequestException(
        CONFIRM_REQUIRED_LOAN_REPAYMENT_DATE_INFORMATION
      );

    function confirmInterest(interest): boolean {
      if (interest <= 0) return true;
      else return false;
    }
    if (confirmInterest(interest))
      throw new BadRequestException(CONFIRM_REQUIRED_LOAN_INTEREST_INFORMATION);

    return await this.repository.create(dto);
  }
}