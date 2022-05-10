"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateOffersInBatchOneByOneUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IOffersRepository = require("../../repositories/IOffersRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let CreateOffersInBatchOneByOneUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("OffersRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IOffersRepository.IOffersRepository === "undefined" ? Object : _IOffersRepository.IOffersRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateOffersInBatchOneByOneUseCase {
  constructor(offersRepository) {
    this.offersRepository = offersRepository;
  }

  async execute(items) {
    const existingIDsError = [];

    for (let offer in items.items) {
      let offerAlreadyExists = await this.offersRepository.listOfferByOfferID(items.items[offer].offerID);

      if (!offerAlreadyExists) {
        console.log(items.items[offer]);
        await this.offersRepository.create(items.items[offer]);
      } else {
        existingIDsError.push(items.items[offer].offerID);
      }

      ;
    }

    return {
      status: 201,
      message: `${items.items.length - existingIDsError.length} offers successfully created.` + `${existingIDsError.length} offers already existed and were not created: ${existingIDsError.toString()}`
    };
  }

}) || _class) || _class) || _class) || _class);
exports.CreateOffersInBatchOneByOneUseCase = CreateOffersInBatchOneByOneUseCase;