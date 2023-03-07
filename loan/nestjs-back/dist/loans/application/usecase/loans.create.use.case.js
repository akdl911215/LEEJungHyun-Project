"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoansCreateUseCase = void 0;
const common_1 = require("@nestjs/common");
const _400_1 = require("../../../_common/constants/http/errors/400");
let LoansCreateUseCase = class LoansCreateUseCase {
    constructor(repository, compareExistsDBLoanDebtorUniqueIdWith, compareExistsDBLoanCreditorUniqueIdWith) {
        this.repository = repository;
        this.compareExistsDBLoanDebtorUniqueIdWith = compareExistsDBLoanDebtorUniqueIdWith;
        this.compareExistsDBLoanCreditorUniqueIdWith = compareExistsDBLoanCreditorUniqueIdWith;
    }
    async create(dto) {
        const { creditorId, creditorUniqueId, debtorId, debtorUniqueId, totalAmountLoan, loanRepaymentDate, interest, } = dto;
        if (!creditorId)
            throw new common_1.BadRequestException(_400_1.CREDITOR_ID_REQUIRED);
        const { response: { existsLoanCreditorUniqueId }, } = await this.compareExistsDBLoanCreditorUniqueIdWith.existsLoanCreditorUniqueId({ creditorUniqueId });
        if (existsLoanCreditorUniqueId)
            throw new common_1.BadRequestException(_400_1.CREDITOR_UNIQUE_ID_REQUIRED);
        if (!debtorId)
            throw new common_1.BadRequestException(_400_1.DEBTOR_ID_REQUIRED);
        const { response: { existsLoanDebtorUniqueId }, } = await this.compareExistsDBLoanDebtorUniqueIdWith.existsLoanDebtorUniqueId({ debtorUniqueId });
        if (existsLoanDebtorUniqueId)
            throw new common_1.BadRequestException(_400_1.DEBTOR_UNIQUE_ID_REQUIRED);
        if (totalAmountLoan === 0)
            throw new common_1.BadRequestException(_400_1.LOAN_REQUIRED);
        if (!loanRepaymentDate)
            throw new common_1.BadRequestException(_400_1.LOAN_REPAYMENT_DATE_REQUIRED);
        if (interest <= 0)
            throw new common_1.BadRequestException(_400_1.LOAN_INTEREST_REQUIRED);
        return await this.repository.create(dto);
    }
};
LoansCreateUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("CREATE")),
    __param(1, (0, common_1.Inject)("EXISTS_LOAN_DEBTOR_UNIQUE_ID")),
    __param(2, (0, common_1.Inject)("EXISTS_LOAN_CREDITOR_UNIQUE_ID")),
    __metadata("design:paramtypes", [Object, Object, Object])
], LoansCreateUseCase);
exports.LoansCreateUseCase = LoansCreateUseCase;
//# sourceMappingURL=loans.create.use.case.js.map