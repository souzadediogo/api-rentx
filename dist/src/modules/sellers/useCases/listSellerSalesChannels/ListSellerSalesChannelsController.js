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
exports.ListSellerSalesChannelsController = void 0;
const ListSellerSalesChannelsUseCase_1 = require("./ListSellerSalesChannelsUseCase");
const tsyringe_1 = require("tsyringe");
class ListSellerSalesChannelsController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sellerUUID, channelName } = req.params;
            const listSellerSalesChannelsUseCase = tsyringe_1.container.resolve(ListSellerSalesChannelsUseCase_1.ListSellerSalesChannelsUseCase);
            const salesChannels = yield listSellerSalesChannelsUseCase.execute({ sellerUUID, channelName });
            return res.status(200).json(salesChannels);
        });
    }
}
exports.ListSellerSalesChannelsController = ListSellerSalesChannelsController;
