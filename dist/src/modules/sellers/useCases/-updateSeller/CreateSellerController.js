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
exports.CreateSellerController = void 0;
const CreateSellerUseCase_1 = require("@modules/sellers/useCases/createSeller/CreateSellerUseCase");
const tsyringe_1 = require("tsyringe");
class CreateSellerController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, sellerID, cnpj, salesChannels } = req.body;
            const createSellerUseCase = tsyringe_1.container.resolve(CreateSellerUseCase_1.CreateSellerUseCase);
            yield createSellerUseCase.execute({ name, sellerID, cnpj, salesChannels });
            return res.status(201).send();
        });
    }
}
exports.CreateSellerController = CreateSellerController;
