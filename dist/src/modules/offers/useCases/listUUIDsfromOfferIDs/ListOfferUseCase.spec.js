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
const OffersRepositoryInMemory_1 = require("../../repositories/in-memory/OffersRepositoryInMemory");
const AppError_1 = require("../../../../errors/AppError");
let createOfferUseCase;
let offersRepositoryInMemory;
describe("Create offer", () => {
    //Executa antes de todos os testes
    beforeEach(() => {
        offersRepositoryInMemory = new OffersRepositoryInMemory_1.OffersRepositoryInMemory();
        createOfferUseCase = new CreateOfferUseCase(offersRepositoryInMemory);
    });
    it("should be able to create a new offer", () => __awaiter(void 0, void 0, void 0, function* () {
        const offer = {
            offerID: "MLB0001",
            sellerID: "1010",
            skuID: "SKU-BEH-1010",
            salesChannel: "mercado-livre"
        };
        yield createOfferUseCase.execute({
            offerID: offer.offerID,
            sellerID: offer.sellerID,
            skuID: offer.skuID,
            salesChannel: offer.salesChannel
        });
        const offerCreated = yield offersRepositoryInMemory.findByOfferID(offer.offerID);
        expect(offerCreated).toHaveProperty("offerID");
    }));
    it("should not be able to create a new offer with duplicate offerID", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => __awaiter(void 0, void 0, void 0, function* () {
            const offer = {
                offerID: "MLB0001",
                sellerID: "1010",
                skuID: "SKU-BEH-1010",
                salesChannel: "mercado-livre"
            };
            yield createOfferUseCase.execute({
                offerID: offer.offerID,
                sellerID: offer.sellerID,
                skuID: offer.skuID,
                salesChannel: offer.salesChannel
            });
            yield createOfferUseCase.execute({
                offerID: offer.offerID,
                sellerID: offer.sellerID,
                skuID: offer.skuID,
                salesChannel: offer.salesChannel
            });
        })).rejects.toBeInstanceOf(AppError_1.AppError);
    }));
});
// offerID: string;
// sellerID: string; 
// skuID: string;
// salesChannel: string;
