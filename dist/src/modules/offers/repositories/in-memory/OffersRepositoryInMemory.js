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
exports.OffersRepositoryInMemory = void 0;
const Offer_1 = require("../../entities/Offer");
class OffersRepositoryInMemory {
    constructor() {
        this.offers = [];
    }
    findByOfferID(offerID) {
        return __awaiter(this, void 0, void 0, function* () {
            const offer = this.offers.find((offer) => offer.offerID === offerID);
            return offer;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const all = this.offers;
            return all;
        });
    }
    create({ offerID, sellerID, skuID, salesChannel }) {
        return __awaiter(this, void 0, void 0, function* () {
            const offer = new Offer_1.Offer();
            Object.assign(offer, {
                offerID,
                sellerID,
                skuID,
                salesChannel
            });
            this.offers.push(offer);
        });
    }
}
exports.OffersRepositoryInMemory = OffersRepositoryInMemory;
