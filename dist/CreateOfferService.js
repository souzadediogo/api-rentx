"use strict";
// ICreateOfferService {
Object.defineProperty(exports, "__esModule", { value: true });
class CreateOfferService {
    execute({ offerID, sellerID, skuID, salesChannel }) {
        console.log(offerID, sellerID, skuID, salesChannel);
    }
}
exports.default = new CreateOfferService();
