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
exports.UsersUpdateNicknameRepository = void 0;
const common_1 = require("@nestjs/common");
const _404_1 = require("../../../common/constants/http/errors/404");
const prisma_service_1 = require("../../../common/infrastructures/prisma/prisma.service");
let UsersUpdateNicknameRepository = class UsersUpdateNicknameRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async updateNickname(dto) {
        const { nickname, id } = dto;
        const [dbUser] = await this.prisma.$transaction([
            this.prisma.users.findUnique({ where: { id } }),
        ]);
        if (!dbUser)
            throw new common_1.NotFoundException(_404_1.NOTFOUND_USER);
        try {
            const [updateUser] = await this.prisma.$transaction([
                this.prisma.users.update({
                    where: { id },
                    data: {
                        nickname,
                    },
                }),
            ]);
            return {
                response: updateUser,
            };
        }
        catch (e) {
            if (e instanceof common_1.InternalServerErrorException) {
                throw new common_1.InternalServerErrorException(e);
            }
            else {
                throw new Error(`${e}`);
            }
        }
    }
};
UsersUpdateNicknameRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Dependencies)([prisma_service_1.PrismaService]),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersUpdateNicknameRepository);
exports.UsersUpdateNicknameRepository = UsersUpdateNicknameRepository;
//# sourceMappingURL=users.update.nickname.repository.js.map