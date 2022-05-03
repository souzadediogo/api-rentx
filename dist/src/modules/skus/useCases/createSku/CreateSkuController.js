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
exports.CreateSkuController = void 0;
const CreateSkuUseCase_1 = require("@modules/skus/useCases/createSku/CreateSkuUseCase");
const tsyringe_1 = require("tsyringe");
class CreateSkuController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, skuID, brandName, category, description, photos, specification, created_at, updated_at } = req.body;
            const createSkuUseCase = tsyringe_1.container.resolve(CreateSkuUseCase_1.CreateSkuUseCase);
            yield createSkuUseCase.execute({ name, skuID, brandName, category, description, photos, specification, created_at, updated_at });
            return res.status(201).send();
        });
    }
}
exports.CreateSkuController = CreateSkuController;
