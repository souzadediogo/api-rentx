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
exports.ListDatapointsByOfferIdAndDateController = void 0;
const listDatapointsByOfferIdAndDaterangeUseCase_1 = require("@modules/offers/useCases/listDatapointByOfferIdAndDate/listDatapointsByOfferIdAndDaterangeUseCase");
const tsyringe_1 = require("tsyringe");
class ListDatapointsByOfferIdAndDateController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { offerid, beginDate, endDate } = req.body;
            const listDatapointsByOfferIdAndDaterangeUseCase = tsyringe_1.container.resolve(listDatapointsByOfferIdAndDaterangeUseCase_1.ListDatapointsByOfferIdAndDaterangeUseCase);
            const datapoints = yield listDatapointsByOfferIdAndDaterangeUseCase
                .execute({ offerid, beginDate, endDate });
            return res.status(201).json(datapoints).send();
        });
    }
}
exports.ListDatapointsByOfferIdAndDateController = ListDatapointsByOfferIdAndDateController;
