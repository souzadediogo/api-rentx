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
var Brand_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brand = void 0;
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
const Distributor_1 = require("@modules/distributors/entities/Distributor");
let Brand = Brand_1 = class Brand {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
    addDistributor(distributor) {
        if (this.distributors == null) {
            this.distributors = new Array();
        }
        this.distributors.push(distributor);
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], Brand.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Brand.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Brand.prototype, "brandName", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => Distributor_1.Distributor, brands => Brand_1),
    __metadata("design:type", Array)
], Brand.prototype, "distributors", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Brand.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Brand.prototype, "updated_at", void 0);
Brand = Brand_1 = __decorate([
    (0, typeorm_1.Entity)("brands"),
    __metadata("design:paramtypes", [])
], Brand);
exports.Brand = Brand;
// ID: UID (PK)
// NAME: string
// DISTRIBUTOR: List (FK)
