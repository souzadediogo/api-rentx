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
exports.CreateOffersInBatchOneByOneController = void 0;
const createOffersInBatchOneByOneUseCase_1 = require("@modules/offers/useCases/createOffersInBatchOneByOne/createOffersInBatchOneByOneUseCase");
const tsyringe_1 = require("tsyringe");
class CreateOffersInBatchOneByOneController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = req.body;
            const createOffersInBatchOneByOneUseCaseUseCase = tsyringe_1.container.resolve(createOffersInBatchOneByOneUseCase_1.CreateOffersInBatchOneByOneUseCase);
            let result = yield createOffersInBatchOneByOneUseCaseUseCase.execute(items);
            return res.status(result.status).json(result.message).send();
        });
    }
}
exports.CreateOffersInBatchOneByOneController = CreateOffersInBatchOneByOneController;
