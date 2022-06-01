"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListMeliAuthInfoUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IMeliTokenRepository = require("../../repositories/IMeliTokenRepository");

var _IMeliAuthCodeRepository = require("../../repositories/IMeliAuthCodeRepository");

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

let ListMeliAuthInfoUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("MeliTokenRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("MeliAuthCodeRepository")(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IMeliTokenRepository.IMeliTokenRepository === "undefined" ? Object : _IMeliTokenRepository.IMeliTokenRepository, typeof _IMeliAuthCodeRepository.IMeliAuthCodeRepository === "undefined" ? Object : _IMeliAuthCodeRepository.IMeliAuthCodeRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class ListMeliAuthInfoUseCase {
  constructor(meliTokenRepository, meliAuthCodeRepository) {
    this.meliTokenRepository = meliTokenRepository;
    this.meliAuthCodeRepository = meliAuthCodeRepository;
  }

  async execute() {
    const {
      meliToken
    } = await this.meliTokenRepository.listToken();
    const {
      meliAuthCode
    } = await this.meliAuthCodeRepository.listCode();
    return {
      meliToken,
      meliAuthCode
    };
  }

}) || _class) || _class) || _class) || _class) || _class);
exports.ListMeliAuthInfoUseCase = ListMeliAuthInfoUseCase;