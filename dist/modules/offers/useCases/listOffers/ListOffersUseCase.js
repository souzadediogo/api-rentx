"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListOffersUseCase = void 0;

var _IOffersRepository = require("../../interfaces/IOffersRepository");

var _tsyringe = require("tsyringe");

var _dec, _dec2, _dec3, _dec4, _class;

let ListOffersUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("OffersRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IOffersRepository.IOffersRepository === "undefined" ? Object : _IOffersRepository.IOffersRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListOffersUseCase {
  constructor(offersRepository) {
    this.offersRepository = offersRepository;
  }

  async execute(sellerUUID, offerID) {
    //   console.log(`USECASE: SellerUUID: ${sellerUUID}`);
    //   console.log(`USECASE: offerID: ${offerID}`);
    if (sellerUUID) {
      // console.log(`Case SellerUUID`);
      // console.log(`Case all selleroffers`);
      return await this.offersRepository.listOffersBySellerUUID(sellerUUID);
    } else if (offerID && offerID.length > 0) {
      // console.log(`Case OfferID`);
      let offers = [];
      // console.log(`Case all offerIDs`); // console.log(`array`, offerID)

      for (let id of offerID) {
        let thisOffer = await this.offersRepository.listOfferByOfferID(id); // console.log('thisOffer', thisOffer);
        // console.log('id', id)

        offers.push(thisOffer);
      } // console.log('offers', offers)


      return offers;
    } else {
      // console.log(`Case all`);
      console.log(`Case all offers`);
      return await this.offersRepository.list();
    }
  }

}) || _class) || _class) || _class) || _class);
exports.ListOffersUseCase = ListOffersUseCase;
;