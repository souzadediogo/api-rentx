"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListSellersUseCase = void 0;

var _ISellersRepository = require("../../repositories/ISellersRepository");

var _tsyringe = require("tsyringe");

var _dec, _dec2, _dec3, _dec4, _class;

let ListSellersUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("SellersRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ISellersRepository.ISellersRepository === "undefined" ? Object : _ISellersRepository.ISellersRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListSellersUseCase {
  constructor(sellersRepository) {
    this.sellersRepository = sellersRepository;
  }

  async execute() {
    const sellers = await this.sellersRepository.list();
    return sellers;
  }

}) || _class) || _class) || _class) || _class);
exports.ListSellersUseCase = ListSellersUseCase;
;