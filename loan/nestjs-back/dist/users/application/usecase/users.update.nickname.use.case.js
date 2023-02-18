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
exports.UsersUpdateNicknameUseCase = void 0;
const common_1 = require("@nestjs/common");
const _400_1 = require("../../../common/constants/http/errors/400");
let UsersUpdateNicknameUseCase = class UsersUpdateNicknameUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async updateNickname(dto) {
        const { nickname } = dto;
        if (nickname === "")
            throw new common_1.BadRequestException(_400_1.CONFIRM_REQUIRED_NICKNAME_INFORMATION);
        return await this.repository.updateNickname(dto);
    }
};
UsersUpdateNicknameUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("UPDATE_NICKNAME")),
    __metadata("design:paramtypes", [Object])
], UsersUpdateNicknameUseCase);
exports.UsersUpdateNicknameUseCase = UsersUpdateNicknameUseCase;
//# sourceMappingURL=users.update.nickname.use.case.js.map