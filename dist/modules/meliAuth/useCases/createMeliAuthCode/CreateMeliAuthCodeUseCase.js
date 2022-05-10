"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMeliAuthCodeUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IMeliAuthCodeRepository = require("../../repositories/IMeliAuthCodeRepository");

var _dec, _dec2, _dec3, _dec4, _class;

;
let CreateMeliAuthCodeUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("MeliAuthCodeRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IMeliAuthCodeRepository.IMeliAuthCodeRepository === "undefined" ? Object : _IMeliAuthCodeRepository.IMeliAuthCodeRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateMeliAuthCodeUseCase {
  constructor(meliAuthCodeRepository) {
    this.meliAuthCodeRepository = meliAuthCodeRepository;
  }

  async execute({
    meliAuthCode
  }) {
    await this.meliAuthCodeRepository.createOrUpdateMeliAuthCode({
      meliAuthCode
    });
  }

}) || _class) || _class) || _class) || _class); // async execute({offerID, sellerID, skuID, salesChannel}: IRequest): Promise<void> {
//     const offerAlreadyExists = await this.offersRepository.findByOfferID(offerID);
//     if(!offerAlreadyExists){
//         await this.offersRepository.create({offerID, sellerID, skuID, salesChannel});
//     } else {
//         throw new AppError("Offer already exists!", 401)
//     };
// }

exports.CreateMeliAuthCodeUseCase = CreateMeliAuthCodeUseCase;