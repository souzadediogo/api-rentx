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
exports.Sku = void 0;
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
let Sku = class Sku {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], Sku.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Sku.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Sku.prototype, "skuID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Sku.prototype, "brandName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Sku.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Sku.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)() //FK
    ,
    __metadata("design:type", Date)
], Sku.prototype, "photos", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Sku.prototype, "specification", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Sku.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Sku.prototype, "updated_at", void 0);
Sku = __decorate([
    (0, typeorm_1.Entity)("skus"),
    __metadata("design:paramtypes", [])
], Sku);
exports.Sku = Sku;
