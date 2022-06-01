"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateBrandUseCase = void 0;

var _tsyringe = require("tsyringe");

var _AppError = require("../../../../shared/errors/AppError");

var _IBrandsRepository = require("../../interfaces/IBrandsRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let CreateBrandUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("BrandsRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IBrandsRepository.IBrandsRepository === "undefined" ? Object : _IBrandsRepository.IBrandsRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateBrandUseCase {
  constructor(brandsRepository) {
    this.brandsRepository = brandsRepository;
  }

  async execute({
    brandName
  }) {
    const brandAlreadyExists = await this.brandsRepository.findByBrandName(brandName);

    if (!brandAlreadyExists) {
      await this.brandsRepository.create({
        brandName,
        created_at: new Date(),
        updated_at: new Date()
      });
    } else {
      throw new _AppError.AppError(`Brand ${brandName} already exists!`, 401);
    }

    ;
  }

}) || _class) || _class) || _class) || _class);
exports.CreateBrandUseCase = CreateBrandUseCase;