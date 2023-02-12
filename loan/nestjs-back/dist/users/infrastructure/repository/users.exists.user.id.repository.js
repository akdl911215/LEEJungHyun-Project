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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersExistsUserIdRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../common/infrastructures/prisma/prisma.service");
const _409_1 = require("../../../common/constants/http/errors/409");
let UsersExistsUserIdRepository = class UsersExistsUserIdRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async existsUserId(dto) {
        const { userId } = dto;
        const user = await this.prisma.users.findUnique({ where: { userId } });
        if (!!user)
            throw new common_1.ConflictException(_409_1.ALREADY_USER_ID_EXISTS);
        return { response: { validateUserId: !user } };
    }
};
UsersExistsUserIdRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Dependencies)([prisma_service_1.PrismaService]),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersExistsUserIdRepository);
exports.UsersExistsUserIdRepository = UsersExistsUserIdRepository;
//# sourceMappingURL=users.exists.user.id.repository.js.map