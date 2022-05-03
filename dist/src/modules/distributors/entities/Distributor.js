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
var Distributor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Distributor = void 0;
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
const Brand_1 = require("@modules/brands/entities/Brand");
let Distributor = Distributor_1 = class Distributor {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
    addBrand(brand) {
        if (this.brands == null) {
            this.brands = new Array();
        }
        this.brands.push(brand);
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], Distributor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Distributor.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => Brand_1.Brand, distributors => Distributor_1),
    __metadata("design:type", Array)
], Distributor.prototype, "brands", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Distributor.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Distributor.prototype, "updated_at", void 0);
Distributor = Distributor_1 = __decorate([
    (0, typeorm_1.Entity)("distributors"),
    __metadata("design:paramtypes", [])
], Distributor);
exports.Distributor = Distributor;
