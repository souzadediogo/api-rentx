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
exports.CreateDatapointController = void 0;
const CreateDatapointUseCase_1 = require("@modules/offers/useCases/createDatapoint/CreateDatapointUseCase");
const tsyringe_1 = require("tsyringe");
class CreateDatapointController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { offerid, price, offerStatus, basePrice, originalPrice, availableQty, soldQty } = req.body;
            const createDatapointUseCase = tsyringe_1.container.resolve(CreateDatapointUseCase_1.CreateDatapointUseCase);
            yield createDatapointUseCase.execute({
                offerid,
                price,
                offerStatus,
                basePrice,
                originalPrice,
                availableQty,
                soldQty
            });
            return res.status(201).send();
        });
    }
}
exports.CreateDatapointController = CreateDatapointController;
