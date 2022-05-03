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
exports.SellersRepository = void 0;
const Seller_1 = require("../../entities/Seller");
const typeorm_1 = require("typeorm");
const AppError_1 = require("@errors/AppError");
//DTO -> Data 
class SellersRepository {
    // private static INSTANCE: OffersRepository;
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(Seller_1.Seller);
    }
    listSellerSalesChannels(sellerID) {
        throw new Error('Method not implemented.');
    }
    listSellerSalesChannelsByChannelName(sellerID, channelName) {
        throw new Error('Method not implemented.');
    }
    create({ name, sellerID, cnpj }) {
        return __awaiter(this, void 0, void 0, function* () {
            const sellerIdAlreadyExists = yield this.repository.findOne({ sellerID });
            if (!sellerIdAlreadyExists) {
                const seller = this.repository.create({
                    name,
                    sellerID,
                    cnpj,
                });
                yield this.repository.save(seller);
                return;
            }
            throw new AppError_1.AppError("SellerID already exists!", 401);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const sellers = yield this.repository.find();
            return sellers;
        });
    }
    ;
    findBySellerID(sellerID) {
        return __awaiter(this, void 0, void 0, function* () {
            const sellerAccounts = yield this.repository.find({ sellerID });
            return sellerAccounts;
        });
    }
    ;
}
exports.SellersRepository = SellersRepository;
;
