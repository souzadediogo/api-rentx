"use strict";

var _OffersRepositoryInMemory = require("../../repositories/in-memory/OffersRepositoryInMemory");

var _AppError = require("../../../../errors/AppError");

let createOfferUseCase;
let offersRepositoryInMemory;
describe("Create offer", () => {
  //Executa antes de todos os testes
  beforeEach(() => {
    offersRepositoryInMemory = new _OffersRepositoryInMemory.OffersRepositoryInMemory();
    createOfferUseCase = new CreateOfferUseCase(offersRepositoryInMemory);
  });
  it("should be able to create a new offer", async () => {
    const offer = {
      offerID: "MLB0001",
      sellerID: "1010",
      skuID: "SKU-BEH-1010",
      salesChannel: "mercado-livre"
    };
    await createOfferUseCase.execute({
      offerID: offer.offerID,
      sellerID: offer.sellerID,
      skuID: offer.skuID,
      salesChannel: offer.salesChannel
    });
    const offerCreated = await offersRepositoryInMemory.findByOfferID(offer.offerID);
    expect(offerCreated).toHaveProperty("offerID");
  });
  it("should not be able to create a new offer with duplicate offerID", async () => {
    expect(async () => {
      const offer = {
        offerID: "MLB0001",
        sellerID: "1010",
        skuID: "SKU-BEH-1010",
        salesChannel: "mercado-livre"
      };
      await createOfferUseCase.execute({
        offerID: offer.offerID,
        sellerID: offer.sellerID,
        skuID: offer.skuID,
        salesChannel: offer.salesChannel
      });
      await createOfferUseCase.execute({
        offerID: offer.offerID,
        sellerID: offer.sellerID,
        skuID: offer.skuID,
        salesChannel: offer.salesChannel
      });
    }).rejects.toBeInstanceOf(_AppError.AppError);
  });
}); // offerID: string;
// sellerID: string; 
// skuID: string;
// salesChannel: string;