"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListDatapointsByOfferIdAndDaterangeUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IDatapointsRepository = require("../../interfaces/IDatapointsRepository");

var _dec, _dec2, _dec3, _dec4, _class;

;
let ListDatapointsByOfferIdAndDaterangeUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("DatapointsRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IDatapointsRepository.IDatapointsRepository === "undefined" ? Object : _IDatapointsRepository.IDatapointsRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListDatapointsByOfferIdAndDaterangeUseCase {
  constructor(datapointsRepository) {
    this.datapointsRepository = datapointsRepository;
  }

  async execute({
    offerid,
    beginDate,
    endDate
  }) {
    return await this.datapointsRepository.listByOfferIdAndDateRange(offerid, beginDate, endDate);
  }

}) || _class) || _class) || _class) || _class);
exports.ListDatapointsByOfferIdAndDaterangeUseCase = ListDatapointsByOfferIdAndDaterangeUseCase;