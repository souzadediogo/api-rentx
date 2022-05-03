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
exports.SalesChannelsRepository = void 0;
const SalesChannels_1 = require("../../entities/SalesChannels");
const typeorm_1 = require("typeorm");
//DTO -> Data 
class SalesChannelsRepository {
    // private static INSTANCE: OffersRepository;
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(SalesChannels_1.SalesChannel);
    }
    create({ seller, channelName, sellerNameInChannel, channelSellerID, channelUrl }) {
        return __awaiter(this, void 0, void 0, function* () {
            const salesChannel = this.repository.create({
                seller,
                channelName,
                sellerNameInChannel,
                channelSellerID,
                channelUrl
            });
            yield this.repository.save(salesChannel);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const salesChannels = yield this.repository.find();
            return salesChannels;
        });
    }
    ;
    findByID(sellerUUID) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Seller sellerUUID:`, sellerUUID);
            const id = sellerUUID;
            const salesChannels = yield this.repository.find({ id });
            console.log(salesChannels);
            return salesChannels;
        });
    }
    ;
    listSellerSalesChannels(sellerUUID) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = sellerUUID;
            //If seller empty, returns all, else returns seller offers'
            const sellerSalesChannels = yield this.repository
                .find({ sellerUUID: id });
            return sellerSalesChannels;
        });
    }
    listSellerSalesChannelsByChannelName(sellerUUID, channelName) {
        return __awaiter(this, void 0, void 0, function* () {
            const sellerSalesChannels = yield this.repository
                .find({ where: { sellerUUID: sellerUUID, channelName: channelName } });
            // .find({
            //         where:{
            //             sellerUUID: sellerUUID, 
            //             channelName: channelName
            //         })
            // .createQueryBuilder("salesChannels")
            // .select("salesChannels")
            // .where(`sellerUUID = :sellerUUID`, {sellerUUID: `${sellerUUID}`})
            // .andWhere(`channelName = :channelName `, {channelName: `${channelName}`})                          
            // .andWhere(`created_at >= :begin `, {begin: `${beginDate}`})
            // .getMany()
            return sellerSalesChannels;
        });
    }
    listAllSalesChannelsByChannelName(channelName) {
        return __awaiter(this, void 0, void 0, function* () {
            const allSalesChannels = yield this.repository
                .find({ channelName: channelName });
            // .createQueryBuilder("sellers")
            // .select("sellers")
            // .andWhere(`channelName = :channelName `, {channelName: `${channelName}`})
            // // .andWhere(`created_at >= :begin `, {begin: `${beginDate}`})
            // .getMany()
            return allSalesChannels;
        });
    }
    listAllSalesChannels() {
        return __awaiter(this, void 0, void 0, function* () {
            const allSalesChannels = yield this.repository
                .find();
            return allSalesChannels;
        });
    }
}
exports.SalesChannelsRepository = SalesChannelsRepository;
;
