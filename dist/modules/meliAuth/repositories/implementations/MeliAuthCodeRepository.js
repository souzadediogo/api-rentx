"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeliAuthCodeRepository = void 0;

var _MeliAuthCode = require("../../entities/MeliAuthCode");

var _typeorm = require("typeorm");

//DTO -> Data 
class MeliAuthCodeRepository {
  // private static INSTANCE: OffersRepository;
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_MeliAuthCode.MeliAuthCode);
  }

  async createOrUpdateMeliAuthCode({
    meliAuthCode
  }) {
    const id = '1';
    const authCode = this.repository.create({
      id,
      meliAuthCode
    });
    await this.repository.save(authCode);
    return;
  }

  async listCode() {
    let id = "1";
    return await this.repository.findOne(id);
  }

}

exports.MeliAuthCodeRepository = MeliAuthCodeRepository;
;