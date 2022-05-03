"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getMeliOffersUseCase_1 = require("./getMeliOffersUseCase");
// async function runAll(){
//     const all = await GetMeliOffers.getAllChannels();
//     console.log(all[0]['channelSellerID'])
// }
// runAll();
const getOffers = new getMeliOffersUseCase_1.GetOffers();
getOffers.getMeliSalesChannels('na', 'meli');
//sellerUUID, channelName
