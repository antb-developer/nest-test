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
exports.ExpenseService = void 0;
const common_1 = require("@nestjs/common");
const expense_schema_1 = require("../schemas/expense.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ExpenseService = class ExpenseService {
    constructor(expenseModel) {
        this.expenseModel = expenseModel;
    }
    async create(createExpenseDto) {
        const expense = this.expenseModel.create(createExpenseDto);
        return expense;
    }
    async findAll() {
        return this.expenseModel.find().exec();
    }
};
exports.ExpenseService = ExpenseService;
exports.ExpenseService = ExpenseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(expense_schema_1.Expense.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ExpenseService);
//# sourceMappingURL=expense.service.js.map