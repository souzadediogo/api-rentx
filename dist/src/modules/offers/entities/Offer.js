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
exports.Offer = void 0;
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
const Seller_1 = require("@modules/sellers/entities/Seller");
const Datapoint_1 = require("./Datapoint");
let Offer = class Offer {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
    addDatapoint(datapoint) {
        if (this.datapoints == null) {
            this.datapoints = new Array();
        }
        this.datapoints.push(datapoint);
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], Offer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Seller_1.Seller, seller => seller.offers, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: "sellerUUID" }),
    __metadata("design:type", Seller_1.Seller)
], Offer.prototype, "seller", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Offer.prototype, "brandInChannel", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Offer.prototype, "modelInChannel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Offer.prototype, "sellerUUID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Offer.prototype, "offerTitle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Offer.prototype, "offerSubTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Offer.prototype, "offerUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, unique: true }),
    __metadata("design:type", String)
], Offer.prototype, "offerID", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Offer.prototype, "skuID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Offer.prototype, "categoryID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Offer.prototype, "salesChannel", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Offer.prototype, "condition", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Offer.prototype, "free_shipping", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Offer.prototype, "catalog_listing", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Datapoint_1.Datapoint, datapoints => datapoints.offer),
    (0, typeorm_1.JoinColumn)({ name: "datapoints" }),
    __metadata("design:type", Array)
], Offer.prototype, "datapoints", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Offer.prototype, "catalog_product_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Offer.prototype, "listing_type_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Offer.prototype, "offer_created_date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Offer.prototype, "offer_last_updated_date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Offer.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Offer.prototype, "updated_at", void 0);
Offer = __decorate([
    (0, typeorm_1.Entity)("offers"),
    __metadata("design:paramtypes", [])
], Offer);
exports.Offer = Offer;
