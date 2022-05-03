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
exports.ListOffersController = void 0;
const ListUUIDsfromOfferIDsUseCase_1 = require("./ListUUIDsfromOfferIDsUseCase");
const tsyringe_1 = require("tsyringe");
class ListOffersController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listUUIDsfromOfferIDsUseCaseUseCase = tsyringe_1.container.resolve(ListUUIDsfromOfferIDsUseCase_1.ListUUIDsfromOfferIDsUseCaseUseCase);
            const data = req.body; //mudar para query, estava params -- params = offers/param/   query = offers?query=query
            const offerIDsArray = data.items;
            const responseArray = yield listUUIDsfromOfferIDsUseCaseUseCase.execute(offerIDsArray);
            return res.status(200).json(responseArray);
        });
    }
}
exports.ListOffersController = ListOffersController;
