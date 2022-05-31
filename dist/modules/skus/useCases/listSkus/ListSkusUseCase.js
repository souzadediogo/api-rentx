"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListSkusUseCase = void 0;

var _ISkusRepository = require("../../interfaces/ISkusRepository");

var _tsyringe = require("tsyringe");

var _dec, _dec2, _dec3, _dec4, _class;

let ListSkusUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("SkusRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ISkusRepository.ISkusRepository === "undefined" ? Object : _ISkusRepository.ISkusRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListSkusUseCase {
  constructor(skusRepository) {
    this.skusRepository = skusRepository;
  }

  async execute() {
    const skus = await this.skusRepository.list();
    return skus;
  }

}) || _class) || _class) || _class) || _class);
exports.ListSkusUseCase = ListSkusUseCase;
;