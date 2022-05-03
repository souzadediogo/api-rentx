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
exports.Datapoint = void 0;
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
const Offer_1 = require("./Offer");
let Datapoint = class Datapoint {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], Datapoint.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Datapoint.prototype, "offerid", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Datapoint.prototype, "offerStatus", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Offer_1.Offer, offer => offer.datapoints, {
        eager: true,
    })
    // @JoinTable("offers")  
    ,
    (0, typeorm_1.JoinColumn)({ name: "offerUUID" }),
    __metadata("design:type", Offer_1.Offer)
], Datapoint.prototype, "offer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], Datapoint.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    __metadata("design:type", Number)
], Datapoint.prototype, "basePrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    __metadata("design:type", Number)
], Datapoint.prototype, "originalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Datapoint.prototype, "availableQty", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Datapoint.prototype, "soldQty", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Datapoint.prototype, "created_at", void 0);
Datapoint = __decorate([
    (0, typeorm_1.Entity)("datapoints"),
    __metadata("design:paramtypes", [])
], Datapoint);
exports.Datapoint = Datapoint;
