"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateOfferController = void 0;

var _UpdateOfferUseCase = require("./UpdateOfferUseCase");

var _tsyringe = require("tsyringe");

class UpdateOfferController {
  async handle(req, res) {
    const {
      seller,
      offerTitle,
      offerSubTitle,
      offerUrl,
      status,
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
    } = req.body;

    const updateOfferUseCase = _tsyringe.container.resolve(_UpdateOfferUseCase.UpdateOfferUseCase);

    await updateOfferUseCase.execute({
      seller,
      offerTitle,
      offerSubTitle,
      offerUrl,
      status,
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
    });
    return res.status(201).send();
  }

}

exports.UpdateOfferController = UpdateOfferController;