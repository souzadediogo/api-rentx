"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateOfferController = void 0;

var _CreateOfferUseCase = require("./CreateOfferUseCase");

var _tsyringe = require("tsyringe");

class CreateOfferController {
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
    } = req.body; // console.log(`Controller array:`);
    // console.log(items);

    const createOfferUseCase = _tsyringe.container.resolve(_CreateOfferUseCase.CreateOfferUseCase);

    await createOfferUseCase.execute({
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

exports.CreateOfferController = CreateOfferController;