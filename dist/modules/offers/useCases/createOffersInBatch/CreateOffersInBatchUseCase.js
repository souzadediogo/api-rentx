"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateOffersInBatchUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IOffersRepository = require("../../interfaces/IOffersRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let CreateOffersInBatchUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("OffersRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IOffersRepository.IOffersRepository === "undefined" ? Object : _IOffersRepository.IOffersRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateOffersInBatchUseCase {
  constructor(offersRepository) {
    this.offersRepository = offersRepository;
  }

  async execute(items) {
    // const offerAlreadyExists = await this.offersRepository.findByOfferID(offerID);
    // console.log(`Use Case array:`);
    // console.log(items);
    // if(!offerAlreadyExists){
    await this.offersRepository.createBatch(items); // } else {
    //     throw new AppError("Offer already exists!", 401)
    // };
  }

}) || _class) || _class) || _class) || _class);
exports.CreateOffersInBatchUseCase = CreateOffersInBatchUseCase;