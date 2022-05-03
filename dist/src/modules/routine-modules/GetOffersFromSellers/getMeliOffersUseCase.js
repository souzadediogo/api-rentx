"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMeliOffersUseCase = void 0;
const offerServices_1 = require("../../../services/offerServices/offerServices");
const offerServices = new offerServices_1.OfferServices();
class GetMeliOffersUseCase {
    getMeliSalesChannels(sellerUUID, channelName) {
        return __awaiter(this, void 0, void 0, function* () {
            let channels = yield offerServices.getSalesChannels(sellerUUID, channelName);
            return channels;
        });
    }
    searchOffers(sellerUUID, channelSellerID) {
        return __awaiter(this, void 0, void 0, function* () {
            let offers = yield offerServices.getOffersInMeli(channelSellerID);
            return { sellerUUID, offers };
        });
    }
    saveNewOffersFromSeller(sellerUUID, offers) {
        return __awaiter(this, void 0, void 0, function* () {
            //Filter only offers not in database
            let allOfferIDs = '';
            let newOffers = offers.filter(offer => offer.offerID);
            let saveNewOffers = yield offerServices.saveNewMeliOffers(newOffers);
        });
    }
}
exports.GetMeliOffersUseCase = GetMeliOffersUseCase;
