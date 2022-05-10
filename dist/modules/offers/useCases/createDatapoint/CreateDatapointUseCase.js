"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateDatapointUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IDatapointsRepository = require("../../repositories/IDatapointsRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let CreateDatapointUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("DatapointsRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IDatapointsRepository.IDatapointsRepository === "undefined" ? Object : _IDatapointsRepository.IDatapointsRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateDatapointUseCase {
  constructor(datapointsRepository) {
    this.datapointsRepository = datapointsRepository;
  }

  async execute({
    offerid,
    price,
    basePrice,
    offerStatus,
    originalPrice,
    availableQty,
    soldQty
  }) {
    await this.datapointsRepository.create({
      offerid,
      price,
      basePrice,
      offerStatus,
      originalPrice,
      availableQty,
      soldQty
    });
  }

}) || _class) || _class) || _class) || _class);
exports.CreateDatapointUseCase = CreateDatapointUseCase;