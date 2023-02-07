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
exports.MainBoardsBaseDto = void 0;
const base_common_core_dto_1 = require("../../common/dtos/base.common.core.dto");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class MainBoardsBaseDto extends base_common_core_dto_1.BaseCommonCoreDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
    }),
    __metadata("design:type", Number)
], MainBoardsBaseDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        default: "",
    }),
    __metadata("design:type", String)
], MainBoardsBaseDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        default: "",
    }),
    __metadata("design:type", String)
], MainBoardsBaseDto.prototype, "description", void 0);
exports.MainBoardsBaseDto = MainBoardsBaseDto;
//# sourceMappingURL=main.boards.base.dto.js.map