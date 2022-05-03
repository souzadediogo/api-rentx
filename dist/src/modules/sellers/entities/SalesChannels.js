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
exports.SalesChannel = void 0;
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
const Seller_1 = require("./Seller");
let SalesChannel = class SalesChannel {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
    ;
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], SalesChannel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Seller_1.Seller, seller => seller.salesChannels, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: "sellerUUID" }),
    __metadata("design:type", Seller_1.Seller)
], SalesChannel.prototype, "seller", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SalesChannel.prototype, "sellerUUID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SalesChannel.prototype, "channelName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SalesChannel.prototype, "sellerNameInChannel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SalesChannel.prototype, "channelSellerID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SalesChannel.prototype, "channelUrl", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SalesChannel.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SalesChannel.prototype, "updated_at", void 0);
SalesChannel = __decorate([
    (0, typeorm_1.Entity)("salesChannels"),
    __metadata("design:paramtypes", [])
], SalesChannel);
exports.SalesChannel = SalesChannel;
