"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanModule = void 0;
const common_1 = require("@nestjs/common");
const loan_service_1 = require("./loan.service");
const loan2_controller_1 = require("./infrastructure/presentation/loan2.controller");
let LoanModule = class LoanModule {
};
LoanModule = __decorate([
    (0, common_1.Module)({
        providers: [loan_service_1.LoanService],
        controllers: [loan2_controller_1.LoanController],
    })
], LoanModule);
exports.LoanModule = LoanModule;
//# sourceMappingURL=loan.module.js.map