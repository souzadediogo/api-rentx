"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateOfferService_1 = __importDefault(require("./CreateOfferService"));
function createOffer(req, res) {
    CreateOfferService_1.default.execute({
        offerID: "123",
        sellerID: "idseller",
        skuID: "9990",
        salesChannel: "meli"
    });
    return res.send();
}
;
exports.default = createOffer;
