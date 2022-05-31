"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateOfferUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IOffersRepository = require("../../interfaces/IOffersRepository");

var _dec, _dec2, _dec3, _dec4, _class;

;
let CreateOfferUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("OffersRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IOffersRepository.IOffersRepository === "undefined" ? Object : _IOffersRepository.IOffersRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateOfferUseCase {
  constructor(offersRepository) {
    this.offersRepository = offersRepository;
  }

  async execute({
    // items
    seller,
    //
    offerTitle,
    offerSubTitle,
    offerUrl,
    categoryID,
    offerID,
    sellerID,
    skuID,
    salesChannel,
    condition,
    free_shipping,
    catalog_listing,
    catalog_product_id,
    listing_type_id
  }) {
    await this.offersRepository.create({
      seller,
      offerTitle,
      offerSubTitle,
      offerUrl,
      categoryID,
      offerID,
      sellerID,
      skuID,
      salesChannel,
      condition,
      free_shipping,
      catalog_listing,
      catalog_product_id,
      listing_type_id,
      offer_created_date: new Date(),
      offer_last_updated_date: new Date(),
      created_at: new Date(),
      updated_at: new Date()
    });
  }

}) || _class) || _class) || _class) || _class);
exports.CreateOfferUseCase = CreateOfferUseCase;