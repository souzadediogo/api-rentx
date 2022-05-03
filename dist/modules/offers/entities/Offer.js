"use strict";

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Offer = void 0;
var uuid_1 = require("uuid");
var typeorm_1 = require("typeorm");
var Seller_1 = require("@modules/sellers/entities/Seller");
var Datapoint_1 = require("./Datapoint");
var Offer = /** @class */function () {
    function Offer() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
    Offer.prototype.addDatapoint = function (datapoint) {
        if (this.datapoints == null) {
            this.datapoints = new Array();
        }
        this.datapoints.push(datapoint);
    };
    __decorate([(0, typeorm_1.PrimaryColumn)('uuid')], Offer.prototype, "id");
    __decorate([(0, typeorm_1.ManyToOne)(function () {
        return Seller_1.Seller;
    }, function (seller) {
        return seller.offers;
    }, {
        eager: true
    }), (0, typeorm_1.JoinColumn)({ name: "sellerUUID" })], Offer.prototype, "seller");
    __decorate([(0, typeorm_1.Column)({ nullable: true })], Offer.prototype, "brandInChannel");
    __decorate([(0, typeorm_1.Column)({ nullable: true })], Offer.prototype, "modelInChannel");
    __decorate([(0, typeorm_1.Column)()], Offer.prototype, "sellerUUID");
    __decorate([(0, typeorm_1.Column)()], Offer.prototype, "offerTitle");
    __decorate([(0, typeorm_1.Column)()], Offer.prototype, "offerSubTitle");
    __decorate([(0, typeorm_1.Column)({ nullable: true })], Offer.prototype, "offerUrl");
    __decorate([(0, typeorm_1.Column)({ length: 100, unique: true })], Offer.prototype, "offerID");
    __decorate([(0, typeorm_1.Column)({ nullable: true })], Offer.prototype, "skuID");
    __decorate([(0, typeorm_1.Column)()], Offer.prototype, "categoryID");
    __decorate([(0, typeorm_1.Column)()], Offer.prototype, "salesChannel");
    __decorate([(0, typeorm_1.Column)({ nullable: true })], Offer.prototype, "condition");
    __decorate([(0, typeorm_1.Column)({ nullable: true })], Offer.prototype, "free_shipping");
    __decorate([(0, typeorm_1.Column)({ nullable: true })], Offer.prototype, "catalog_listing");
    __decorate([(0, typeorm_1.OneToMany)(function () {
        return Datapoint_1.Datapoint;
    }, function (datapoints) {
        return datapoints.offer;
    }), (0, typeorm_1.JoinColumn)({ name: "datapoints" })], Offer.prototype, "datapoints");
    __decorate([(0, typeorm_1.Column)({ nullable: true })], Offer.prototype, "catalog_product_id");
    __decorate([(0, typeorm_1.Column)({ nullable: true })], Offer.prototype, "listing_type_id");
    __decorate([(0, typeorm_1.CreateDateColumn)()], Offer.prototype, "offer_created_date");
    __decorate([(0, typeorm_1.CreateDateColumn)()], Offer.prototype, "offer_last_updated_date");
    __decorate([(0, typeorm_1.CreateDateColumn)()], Offer.prototype, "created_at");
    __decorate([(0, typeorm_1.UpdateDateColumn)()], Offer.prototype, "updated_at");
    Offer = __decorate([(0, typeorm_1.Entity)("offers")], Offer);
    return Offer;
}();
exports.Offer = Offer;