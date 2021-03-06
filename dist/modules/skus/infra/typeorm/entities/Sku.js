"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sku = void 0;

var _uuid = require("uuid");

var _typeorm = require("typeorm");

var _Brand = require("../../../../brands/infra/typeorm/entities/Brand");

var _Offer = require("../../../../offers/infra/typeorm/entities/Offer");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let Sku = (_dec = (0, _typeorm.Entity)("skus"), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec4 = (0, _typeorm.PrimaryColumn)('uuid'), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.Column)({
  nullable: false
}), _dec7 = Reflect.metadata("design:type", String), _dec8 = (0, _typeorm.Column)(), _dec9 = Reflect.metadata("design:type", String), _dec10 = (0, _typeorm.OneToMany)(() => _Offer.Offer, offers => offers.skuID, {
  nullable: true
}), _dec11 = (0, _typeorm.JoinColumn)({
  name: "offersUUUD"
}), _dec12 = Reflect.metadata("design:type", Array), _dec13 = (0, _typeorm.ManyToOne)(() => _Brand.Brand, brandName => brandName.skus, {
  nullable: true
}), _dec14 = (0, _typeorm.JoinColumn)({
  name: "brands"
}), _dec15 = Reflect.metadata("design:type", typeof _Brand.Brand === "undefined" ? Object : _Brand.Brand), _dec16 = (0, _typeorm.Column)({
  nullable: true
}), _dec17 = Reflect.metadata("design:type", String), _dec18 = (0, _typeorm.Column)({
  nullable: true
}), _dec19 = Reflect.metadata("design:type", String), _dec20 = (0, _typeorm.Column)({
  nullable: true
}), _dec21 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec22 = (0, _typeorm.Column)({
  nullable: true
}), _dec23 = Reflect.metadata("design:type", String), _dec24 = (0, _typeorm.CreateDateColumn)(), _dec25 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec26 = (0, _typeorm.UpdateDateColumn)(), _dec27 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class Sku {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "name", _descriptor2, this);

    _initializerDefineProperty(this, "skuID", _descriptor3, this);

    _initializerDefineProperty(this, "offers", _descriptor4, this);

    _initializerDefineProperty(this, "brandName", _descriptor5, this);

    _initializerDefineProperty(this, "category", _descriptor6, this);

    _initializerDefineProperty(this, "description", _descriptor7, this);

    _initializerDefineProperty(this, "photos", _descriptor8, this);

    _initializerDefineProperty(this, "specification", _descriptor9, this);

    _initializerDefineProperty(this, "created_at", _descriptor10, this);

    _initializerDefineProperty(this, "updated_at", _descriptor11, this);

    if (!this.id) {
      this.id = (0, _uuid.v4)();
    }
  }

  addOffer(offer) {
    if (this.offers == null) {
      this.offers = new Array();
    }

    this.offers.push(offer);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "skuID", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "offers", [_dec10, _dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "brandName", [_dec13, _dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "category", [_dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "description", [_dec18, _dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "photos", [_dec20, _dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "specification", [_dec22, _dec23], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "created_at", [_dec24, _dec25], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "updated_at", [_dec26, _dec27], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);
exports.Sku = Sku;