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
exports.CreateOfferController = void 0;
const CreateOfferUseCase_1 = require("@modules/offers/useCases/createOffer/CreateOfferUseCase");
const tsyringe_1 = require("tsyringe");
class CreateOfferController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { seller, offerTitle, offerSubTitle, offerUrl, status, categoryID, offerID, sellerID, skuID, salesChannel, condition, free_shipping, catalog_listing, catalog_product_id, listing_type_id } = req.body;
            // console.log(`Controller array:`);
            // console.log(items);
            const createOfferUseCase = tsyringe_1.container.resolve(CreateOfferUseCase_1.CreateOfferUseCase);
            yield createOfferUseCase.execute({
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
        });
    }
}
exports.CreateOfferController = CreateOfferController;
