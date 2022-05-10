"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Offer = void 0;

var _uuid = require("uuid");

var _typeorm = require("typeorm");

var _Seller = require("../../../../sellers/entities/Seller");

var _Datapoint = require("./Datapoint");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let Offer = (_dec = (0, _typeorm.Entity)("offers"), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec4 = (0, _typeorm.PrimaryColumn)('uuid'), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.ManyToOne)(() => _Seller.Seller, seller => seller.offers, {
  eager: true
}), _dec7 = (0, _typeorm.JoinColumn)({
  name: "sellerUUID"
}), _dec8 = Reflect.metadata("design:type", typeof _Seller.Seller === "undefined" ? Object : _Seller.Seller), _dec9 = (0, _typeorm.Column)({
  nullable: true
}), _dec10 = Reflect.metadata("design:type", String), _dec11 = (0, _typeorm.Column)({
  nullable: true
}), _dec12 = Reflect.metadata("design:type", String), _dec13 = (0, _typeorm.Column)(), _dec14 = Reflect.metadata("design:type", String), _dec15 = (0, _typeorm.Column)(), _dec16 = Reflect.metadata("design:type", String), _dec17 = (0, _typeorm.Column)(), _dec18 = Reflect.metadata("design:type", String), _dec19 = (0, _typeorm.Column)({
  nullable: true
}), _dec20 = Reflect.metadata("design:type", String), _dec21 = (0, _typeorm.Column)({
  length: 100,
  unique: true
}), _dec22 = Reflect.metadata("design:type", String), _dec23 = (0, _typeorm.Column)({
  nullable: true
}), _dec24 = Reflect.metadata("design:type", String), _dec25 = (0, _typeorm.Column)(), _dec26 = Reflect.metadata("design:type", String), _dec27 = (0, _typeorm.Column)(), _dec28 = Reflect.metadata("design:type", String), _dec29 = (0, _typeorm.Column)({
  nullable: true
}), _dec30 = Reflect.metadata("design:type", String), _dec31 = (0, _typeorm.Column)({
  nullable: true
}), _dec32 = Reflect.metadata("design:type", Boolean), _dec33 = (0, _typeorm.Column)({
  nullable: true
}), _dec34 = Reflect.metadata("design:type", Boolean), _dec35 = (0, _typeorm.OneToMany)(() => _Datapoint.Datapoint, datapoints => datapoints.offer), _dec36 = (0, _typeorm.JoinColumn)({
  name: "datapoints"
}), _dec37 = Reflect.metadata("design:type", Array), _dec38 = (0, _typeorm.Column)({
  nullable: true
}), _dec39 = Reflect.metadata("design:type", String), _dec40 = (0, _typeorm.Column)({
  nullable: true
}), _dec41 = Reflect.metadata("design:type", String), _dec42 = (0, _typeorm.CreateDateColumn)(), _dec43 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec44 = (0, _typeorm.CreateDateColumn)(), _dec45 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec46 = (0, _typeorm.CreateDateColumn)(), _dec47 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec48 = (0, _typeorm.UpdateDateColumn)(), _dec49 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class Offer {
  // @OneToMany(()=> Offer, offer => offer.seller)
  // @JoinColumn({name: "offers"})
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "seller", _descriptor2, this);

    _initializerDefineProperty(this, "brandInChannel", _descriptor3, this);

    _initializerDefineProperty(this, "modelInChannel", _descriptor4, this);

    _initializerDefineProperty(this, "sellerUUID", _descriptor5, this);

    _initializerDefineProperty(this, "offerTitle", _descriptor6, this);

    _initializerDefineProperty(this, "offerSubTitle", _descriptor7, this);

    _initializerDefineProperty(this, "offerUrl", _descriptor8, this);

    _initializerDefineProperty(this, "offerID", _descriptor9, this);

    _initializerDefineProperty(this, "skuID", _descriptor10, this);

    _initializerDefineProperty(this, "categoryID", _descriptor11, this);

    _initializerDefineProperty(this, "salesChannel", _descriptor12, this);

    _initializerDefineProperty(this, "condition", _descriptor13, this);

    _initializerDefineProperty(this, "free_shipping", _descriptor14, this);

    _initializerDefineProperty(this, "catalog_listing", _descriptor15, this);

    _initializerDefineProperty(this, "datapoints", _descriptor16, this);

    _initializerDefineProperty(this, "catalog_product_id", _descriptor17, this);

    _initializerDefineProperty(this, "listing_type_id", _descriptor18, this);

    _initializerDefineProperty(this, "offer_created_date", _descriptor19, this);

    _initializerDefineProperty(this, "offer_last_updated_date", _descriptor20, this);

    _initializerDefineProperty(this, "created_at", _descriptor21, this);

    _initializerDefineProperty(this, "updated_at", _descriptor22, this);

    if (!this.id) {
      this.id = (0, _uuid.v4)();
    }
  }

  addDatapoint(datapoint) {
    if (this.datapoints == null) {
      this.datapoints = new Array();
    }

    this.datapoints.push(datapoint);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "seller", [_dec6, _dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "brandInChannel", [_dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "modelInChannel", [_dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sellerUUID", [_dec13, _dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "offerTitle", [_dec15, _dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "offerSubTitle", [_dec17, _dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "offerUrl", [_dec19, _dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "offerID", [_dec21, _dec22], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "skuID", [_dec23, _dec24], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "categoryID", [_dec25, _dec26], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "salesChannel", [_dec27, _dec28], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "condition", [_dec29, _dec30], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "free_shipping", [_dec31, _dec32], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "catalog_listing", [_dec33, _dec34], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "datapoints", [_dec35, _dec36, _dec37], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "catalog_product_id", [_dec38, _dec39], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "listing_type_id", [_dec40, _dec41], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "offer_created_date", [_dec42, _dec43], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "offer_last_updated_date", [_dec44, _dec45], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "created_at", [_dec46, _dec47], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "updated_at", [_dec48, _dec49], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);
exports.Offer = Offer;