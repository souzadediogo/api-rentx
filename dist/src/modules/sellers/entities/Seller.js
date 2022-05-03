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
exports.Seller = void 0;
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
const SalesChannels_1 = require("./SalesChannels");
const Offer_1 = require("@modules/offers/entities/Offer");
let Seller = class Seller {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
    ;
    addSalesChannel(salesChannel) {
        if (this.salesChannels == null) {
            this.salesChannels = new Array();
        }
        this.salesChannels.push(salesChannel);
    }
    addOffer(offer) {
        if (this.offers == null) {
            this.offers = new Array();
        }
        this.offers.push(offer);
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], Seller.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seller.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seller.prototype, "sellerID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seller.prototype, "cnpj", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => SalesChannels_1.SalesChannel, salesChannel => salesChannel.seller, {
        cascade: true,
        // eager: true
    }),
    (0, typeorm_1.JoinColumn)({ name: "salesChannels" }),
    __metadata("design:type", Array)
], Seller.prototype, "salesChannels", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Offer_1.Offer, offer => offer.seller),
    (0, typeorm_1.JoinColumn)({ name: "offers" }),
    __metadata("design:type", Array)
], Seller.prototype, "offers", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Seller.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Seller.prototype, "updated_at", void 0);
Seller = __decorate([
    (0, typeorm_1.Entity)("sellers"),
    __metadata("design:paramtypes", [])
], Seller);
exports.Seller = Seller;
