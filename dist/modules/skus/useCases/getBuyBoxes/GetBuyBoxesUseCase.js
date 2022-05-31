"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetBuyBoxesUseCase = void 0;

var _ISkusRepository = require("../../interfaces/ISkusRepository");

var _IOffersRepository = require("../../../offers/interfaces/IOffersRepository");

var _IDatapointsRepository = require("../../../offers/interfaces/IDatapointsRepository");

var _tsyringe = require("tsyringe");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;

let GetBuyBoxesUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("SkusRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("OffersRepository")(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)("DatapointsRepository")(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _ISkusRepository.ISkusRepository === "undefined" ? Object : _ISkusRepository.ISkusRepository, typeof _IOffersRepository.IOffersRepository === "undefined" ? Object : _IOffersRepository.IOffersRepository, typeof _IDatapointsRepository.IDatapointsRepository === "undefined" ? Object : _IDatapointsRepository.IDatapointsRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class GetBuyBoxesUseCase {
  constructor(skusRepository, offersRepository, datapointsRepository) {
    this.skusRepository = skusRepository;
    this.offersRepository = offersRepository;
    this.datapointsRepository = datapointsRepository;
  }

  async execute(ids) {
    //const skus = await this.skusRepository.getBuyBox();
    //Busca todas ofertas
    const myBuyBoxes = []; // console.log(`ids [use-case]:`, ids);

    for (let id of ids) {
      // console.log('current ID', id);
      //Buscar UUID do skuID
      const {
        id: skuUUID
      } = await this.skusRepository.findBySkuID(id);
      const allSKUOffers = await this.offersRepository.listOffersBySkuUUID(skuUUID);
      const allOfferIDs = allSKUOffers.map(offer => {
        return offer.offerID;
      });
      const latestOffersDatapoints = await this.datapointsRepository.listMostRecentDatapointsByOfferID([...allOfferIDs]); //Removes undefined values
      // const filteredDatapoints = latestOffersDatapoints.filter(datapoint => datapoint !== false || undefined)

      console.log(); // console.log('latestOffersDatapoints', latestOffersDatapoints);
      // console.log('latestOffersDatapoints', latestOffersDatapoints);
      // console.log('filteredDatapoints', filteredDatapoints);

      let lowestOffer;

      for (let offer of latestOffersDatapoints) {
        if (!lowestOffer) {
          lowestOffer = offer;
        } else {
          if (offer.availableQty > 0) {
            if (offer.price < lowestOffer.price) {
              lowestOffer = offer;
            }
          }
        }
      }

      console.log(`For id ${id} lowest priced offer if`, lowestOffer);
    }

    return skus;
  }

}) || _class) || _class) || _class) || _class) || _class) || _class);
exports.GetBuyBoxesUseCase = GetBuyBoxesUseCase;
;