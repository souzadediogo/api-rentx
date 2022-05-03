"use strict";

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Datapoint = void 0;
var uuid_1 = require("uuid");
var typeorm_1 = require("typeorm");
var Offer_1 = require("./Offer");
var Datapoint = /** @class */function () {
    function Datapoint() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
    __decorate([(0, typeorm_1.PrimaryColumn)('uuid')], Datapoint.prototype, "id");
    __decorate([(0, typeorm_1.Column)()], Datapoint.prototype, "offerid");
    __decorate([(0, typeorm_1.Column)({ nullable: true })], Datapoint.prototype, "offerStatus");
    __decorate([(0, typeorm_1.ManyToOne)(function () {
        return Offer_1.Offer;
    }, function (offer) {
        return offer.datapoints;
    }, {
        eager: true
    })
    // @JoinTable("offers")  

    , (0, typeorm_1.JoinColumn)({ name: "offerUUID" })], Datapoint.prototype, "offer");
    __decorate([(0, typeorm_1.Column)({ type: 'float' })], Datapoint.prototype, "price");
    __decorate([(0, typeorm_1.Column)({ type: 'float', nullable: true })], Datapoint.prototype, "basePrice");
    __decorate([(0, typeorm_1.Column)({ type: 'float', nullable: true })], Datapoint.prototype, "originalPrice");
    __decorate([(0, typeorm_1.Column)()], Datapoint.prototype, "availableQty");
    __decorate([(0, typeorm_1.Column)()], Datapoint.prototype, "soldQty");
    __decorate([(0, typeorm_1.CreateDateColumn)()], Datapoint.prototype, "created_at");
    Datapoint = __decorate([(0, typeorm_1.Entity)("datapoints")], Datapoint);
    return Datapoint;
}();
exports.Datapoint = Datapoint;