"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSkuUseCase = void 0;

var _tsyringe = require("tsyringe");

var _ISkusRepository = require("../../interfaces/ISkusRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let CreateSkuUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("SkusRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ISkusRepository.ISkusRepository === "undefined" ? Object : _ISkusRepository.ISkusRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateSkuUseCase {
  constructor(skusRepository) {
    this.skusRepository = skusRepository;
  }

  async execute({
    // items
    name,
    skuID,
    brandName,
    category,
    description,
    photos,
    specification
  }) {
    await this.skusRepository.create({
      name,
      skuID,
      brandName,
      category,
      description,
      photos,
      specification,
      created_at: new Date(),
      updated_at: new Date()
    });
  }

}) || _class) || _class) || _class) || _class);
exports.CreateSkuUseCase = CreateSkuUseCase;