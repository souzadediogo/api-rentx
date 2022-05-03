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
exports.CreateSalesChannelController = void 0;
const CreateSalesChannelUseCase_1 = require("@modules/sellers/useCases/createNewSalesChannel/CreateSalesChannelUseCase");
const tsyringe_1 = require("tsyringe");
class CreateSalesChannelController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { seller, channelName, sellerNameInChannel, channelSellerID, channelUrl } = req.body;
            const createSellerUseCase = tsyringe_1.container.resolve(CreateSalesChannelUseCase_1.CreateSalesChannelUseCase);
            yield createSellerUseCase.execute({
                seller,
                channelName,
                sellerNameInChannel,
                channelSellerID,
                channelUrl
            });
            return res.status(201).send();
        });
    }
}
exports.CreateSalesChannelController = CreateSalesChannelController;
