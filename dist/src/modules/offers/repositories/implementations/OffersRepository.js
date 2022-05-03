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
exports.OffersRepository = void 0;
const Offer_1 = require("../../entities/Offer");
const typeorm_1 = require("typeorm");
//DTO -> Data 
class OffersRepository {
    // private static INSTANCE: OffersRepository;
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(Offer_1.Offer);
    }
    create({ seller, offerTitle, offerSubTitle, offerUrl, status, categoryID, offerID, sellerID, skuID, salesChannel, condition, free_shipping, catalog_listing, catalog_product_id, listing_type_id, brandInChannel, modelInChannel }) {
        return __awaiter(this, void 0, void 0, function* () {
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
            yield this.repository.save(offer);
        });
    }
    createBatch(items) {
        return __awaiter(this, void 0, void 0, function* () {
            const offerBatch = this.repository.create(items);
            yield this.repository.save(offerBatch);
        });
    }
    updateByOfferId({ id, seller, offerTitle, offerSubTitle, offerUrl, status, categoryID, offerID, sellerID, skuID, salesChannel, condition, free_shipping, catalog_listing, catalog_product_id, listing_type_id, }) {
        return __awaiter(this, void 0, void 0, function* () {
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
                listing_type_id,
            });
            yield this.repository.save(offer);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const offers = yield this.repository.find();
            return offers;
        });
    }
    ;
    listOfferByOfferID(offerID) {
        return __awaiter(this, void 0, void 0, function* () {
            const offer = yield this.repository
                .createQueryBuilder()
                .select("offers")
                .from(Offer_1.Offer, "offers")
                .where("offers.offerID = :offerID", { offerID: offerID })
                .getOne(); //findOne(offerID);
            return offer;
        });
    }
    ;
    listOffersBySellerUUID(sellerUUID) {
        return __awaiter(this, void 0, void 0, function* () {
            const sellerOffers = yield this.repository.find({ seller: sellerUUID });
            return sellerOffers;
        });
    }
    listOffersBySalesChannelID(salesChannelID) {
        return __awaiter(this, void 0, void 0, function* () {
            const salesChannelIdOffers = yield this.repository.find({ salesChannel: salesChannelID });
            return salesChannelIdOffers;
        });
    }
    listUUIDsfromOfferIDs(offerIDsArray) {
        return __awaiter(this, void 0, void 0, function* () {
            let items = offerIDsArray.map((offer) => __awaiter(this, void 0, void 0, function* () {
                return {
                    offer: {
                        offerID: offer,
                        uuid: yield this.listOfferByOfferID(offer)
                    }
                };
            }));
            return;
        });
    }
}
exports.OffersRepository = OffersRepository;
;
