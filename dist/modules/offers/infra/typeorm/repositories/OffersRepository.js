"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OffersRepository = void 0;

var _Offer = require("../entities/Offer");

var _typeorm = require("typeorm");

//DTO -> Data 
class OffersRepository {
  // private static INSTANCE: OffersRepository;
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_Offer.Offer);
  }

  async create({
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
    listing_type_id,
    brandInChannel,
    modelInChannel
  }) {
    //ICreateOffersDTO
    const offer = this.repository.create({
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
      listing_type_id,
      brandInChannel,
      modelInChannel
    });
    console.log("offer", offer);
    await this.repository.save(offer);
  }

  async createBatch(items) {
    const offerBatch = this.repository.create(items);
    await this.repository.save(offerBatch);
  }

  async updateByOfferId({
    id,
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
  }) {
    const offer = this.repository.create({
      id,
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
    await this.repository.save(offer);
  }

  async list() {
    const offers = await this.repository.find();
    return offers;
  }

  async listOfferByOfferID(offerID) {
    const offer = await this.repository.createQueryBuilder().select("offers").from(_Offer.Offer, "offers").where("offers.offerID = :offerID", {
      offerID: offerID
    }).getOne(); //findOne(offerID);

    return offer;
  }

  async listOffersBySellerUUID(sellerUUID) {
    const sellerOffers = await this.repository.find({
      seller: sellerUUID
    });
    return sellerOffers;
  }

  async listOffersBySalesChannelID(salesChannelID) {
    const salesChannelIdOffers = await this.repository.find({
      salesChannel: salesChannelID
    });
    return salesChannelIdOffers;
  }

  async listUUIDsfromOfferIDs(offerIDsArray) {
    let items = offerIDsArray.map(async offer => {
      return {
        offer: {
          offerID: offer,
          uuid: await this.listOfferByOfferID(offer)
        }
      };
    });
    return;
  }

}

exports.OffersRepository = OffersRepository;
;