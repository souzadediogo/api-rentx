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
const ListOffersUseCase_1 = require("./ListOffersUseCase");
const tsyringe_1 = require("tsyringe");
class ListOffersController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listOffersUseCase = tsyringe_1.container.resolve(ListOffersUseCase_1.ListOffersUseCase);
            const { sellerUUID, offerID } = req.query; //mudar para query, estava params -- params = offers/param/   query = offers?query=query
            // console.log(`CONTROLLER: params:`);
            // console.log(req.params)
            // console.log(`CONTROLLER: sellerUUID: ${sellerUUID}`);
            // console.log(`CONTROLLER: offerID: ${offerID}`);
            const all = yield listOffersUseCase.execute(sellerUUID, offerID);
            return res.status(200).json(all);
        });
    }
}
exports.ListOffersController = ListOffersController;
