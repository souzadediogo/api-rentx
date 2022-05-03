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
exports.getDailyData = void 0;
const meliServices_1 = require("@services/meliServices/meliServices");
const offerServices_1 = require("@services/offerServices/offerServices");
const meliServices = new meliServices_1.MeliServices();
const offerServices = new offerServices_1.OfferServices();
function getDailyData() {
    return __awaiter(this, void 0, void 0, function* () {
        //Search all salesChannels and saves to array channelIds
        const res = yield offerServices.getSalesChannels('na', 'meli');
        const mySalesChannels = res.data;
        const channelIds = [];
        for (let channel in mySalesChannels) {
            channelIds.push(mySalesChannels[channel].channelSellerID);
        }
        console.log(`ChannelIDs`, channelIds);
        // Get all offers MLBs from each salesChannel  
        for (let salesChannel in channelIds) {
            const myMLBs = [];
            let currentChannel = channelIds[salesChannel];
            offerServices.getAllOffersBySalesChannelID(currentChannel).then((response) => {
                for (let offer in response.data) {
                    myMLBs.push(response.data[offer].offerID);
                }
                console.log(`Starting to fetch offers in Meli from channel ${currentChannel}`);
                meliServices.multiGetBatchOfOffers(myMLBs).then((res2) => {
                    console.log('res2', `${res2.length}`);
                    console.log(`Finished fetching offers in Meli from channel ${currentChannel}`);
                    console.log(currentChannel);
                    //Mapear Array<MeliOffer[]> para array de createdailydata
                    meliServices.mapMeliOfferArrayToDailyDataInterface(currentChannel, res2).then((res3) => {
                        console.log(`res3 in savebatch has ${res3.length} offers`);
                        meliServices.saveBatchDailyData(res3).then((res4) => {
                            console.log(`Done saving`);
                        }, err => {
                            console.log(err);
                        });
                        console.log(`did que get here?`);
                    }, err => {
                        console.log(`erro em mapMeliOfferArrayToDailyDataInterface`, err);
                    });
                }, err => {
                    console.log(`erro em multiGetBatchOfOffers`, err);
                });
            }, err => {
                console.log("erro aqui no fim", err);
            });
        } // End of for Loop   
        //   for(let channel in channelIds)
        // const offersFromMeli = await offerServices.getAllOffersBySalesChannelID
    });
}
exports.getDailyData = getDailyData;
// Fatia e de 20 em 20 busca dados
// Transforma os dados no formato do endpoint datapoints
// Manda salvar no banco
//DEPOIS:
// - Criar restrição para não pode ter no mesmo dia dois offerIDs iguais salvos;
// - 
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        yield getDailyData();
    });
}
run();
