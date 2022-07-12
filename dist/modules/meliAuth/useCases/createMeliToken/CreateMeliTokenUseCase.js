"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMeliTokenUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IMeliTokenRepository = require("../../repositories/IMeliTokenRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let CreateMeliTokenUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("MeliTokenRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IMeliTokenRepository.IMeliTokenRepository === "undefined" ? Object : _IMeliTokenRepository.IMeliTokenRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateMeliTokenUseCase {
  constructor(meliTokenRepository) {
    this.meliTokenRepository = meliTokenRepository;
  }

  async execute({
    meliToken
  }) {
    await this.meliTokenRepository.createOrRefreshToken({
      meliToken
    });
  }

}) || _class) || _class) || _class) || _class);
exports.CreateMeliTokenUseCase = CreateMeliTokenUseCase;