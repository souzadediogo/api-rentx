"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSellerUseCase = void 0;

var _tsyringe = require("tsyringe");

var _AppError = require("../../../../shared/errors/AppError");

var _ISellersRepository = require("../../repositories/ISellersRepository");

var _dec, _dec2, _dec3, _dec4, _class;

;
let CreateSellerUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("SellersRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ISellersRepository.ISellersRepository === "undefined" ? Object : _ISellersRepository.ISellersRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateSellerUseCase {
  constructor(sellersRepository) {
    this.sellersRepository = sellersRepository;
  }

  async execute({
    name,
    sellerID,
    cnpj,
    salesChannels
  }) {
    const sellerAlreadyExists = await this.sellersRepository.findBySellerID(sellerID);

    if (!sellerAlreadyExists) {
      await this.sellersRepository.create({
        name,
        sellerID,
        cnpj,
        salesChannels,
        created_at: new Date(),
        updated_at: new Date()
      });
    } else {
      throw new _AppError.AppError("Seller already exists!", 401);
    }
  }

}) || _class) || _class) || _class) || _class); // async execute({offerID, sellerID, skuID, salesChannel}: IRequest): Promise<void> {
//     const offerAlreadyExists = await this.offersRepository.findByOfferID(offerID);
//     if(!offerAlreadyExists){
//         await this.offersRepository.create({offerID, sellerID, skuID, salesChannel});
//     } else {
//         throw new AppError("Offer already exists!", 401)
//     };
// }

exports.CreateSellerUseCase = CreateSellerUseCase;