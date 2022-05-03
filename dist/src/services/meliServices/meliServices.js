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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeliServices = void 0;
const axios_1 = __importDefault(require("axios"));
const urls_ts_1 = require("@shared/urls.ts");
const mercadoLivre_1 = require("@requests/axios/mercadoLivre");
const offerServices_1 = require("@services/offerServices/offerServices");
const intelligenceSuiteAPI_1 = require("@requests/axios/intelligenceSuiteAPI");
class MeliServices {
    contructor() {
    }
    retrieveRefreshToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield (0, axios_1.default)({
                url: `${urls_ts_1.myUrls.meliOAuthUrl}`,
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                data: {
                    grant_type: 'refresh_token',
                    client_id: '2076599210990714',
                    client_secret: 'nrVrt6dzYjTGFibMhJA5CqrFbrEpyoRH',
                    refresh_token: 'TG-625c33b542bac7001b6865b5-473621462', //TG-625c328bed9fa8001ba19dd3-473621462
                }
            }).catch((e) => { console.log(e); });
            return res.data.access_token;
        });
    }
    //Return all existing offers from meli in given channel
    getOffersInMeli(channelSellerID) {
        return __awaiter(this, void 0, void 0, function* () {
            const mercadoLivreRequests = new mercadoLivre_1.MercadoLivreRequests();
            //Buscar resultados para ter paginação
            const results = yield axios_1.default.get(`${urls_ts_1.myUrls.meliBaseUrl}/MLB/search?seller_id=${channelSellerID}`);
            const paging = results.data.paging;
            let currentOffset = 0;
            var sellerOffers = [];
            while (currentOffset < 60) { //!! paging.total          
                var offers = yield mercadoLivreRequests.searchSellerOffers(channelSellerID, currentOffset);
                for (let offer in offers) {
                    if (offers[offer]) {
                        sellerOffers.push(offers[offer]);
                    }
                }
                currentOffset += 50;
            }
            console.log(`Seller offer has ${sellerOffers.length} offers`);
            return sellerOffers;
        });
    }
    fetchAdditionalOfferInfo(arrayOfMLBs) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    mapMeliOfferArrayToInterface(channelSellerID, sellerUUID, offerArray) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`In mapMeliOfferArrayToInterface`);
            const mercadoLivreRequests = new mercadoLivre_1.MercadoLivreRequests();
            let meliAccessToken = yield mercadoLivreRequests.listMeliAccessToken();
            const offerServices = new offerServices_1.OfferServices();
            const arrayOfMLBs = offerArray.map((offer) => {
                return offer.id;
            });
            ////////////////////////////////////////////////////
            var myOffersAdditionalInfo = [];
            let add = 20;
            for (let currentStartPosition = 0; currentStartPosition < arrayOfMLBs.length; currentStartPosition + add) {
                console.log(`Starting ${currentStartPosition}/${arrayOfMLBs.length}`);
                let currentStopPosition = currentStartPosition + add;
                console.log(`In 3 mapMeliOfferArrayToInterface`);
                if (arrayOfMLBs.length < add) {
                    let lastPositionInArray = arrayOfMLBs.length - 1;
                    let arrayToGet = arrayOfMLBs.slice(0, lastPositionInArray);
                    let stringifiedArrayToGet = arrayToGet.toString();
                    try {
                        let response = yield axios_1.default.get(`https://api.mercadolibre.com/items`, {
                            headers: {
                                'Content-Type': 'application/json',
                                "Authorization": `Bearer ${meliAccessToken}`
                            },
                            params: {
                                ids: stringifiedArrayToGet,
                                attributes: "id,attributes"
                            }
                        });
                        for (let meliOffer in response.data) {
                            myOffers.push(response.data[meliOffer].body);
                        }
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
                else {
                    // let currentStopPosition = currentStartPosition+add;
                    let arrayToGet = arrayOfMLBs.slice(currentStartPosition, currentStopPosition);
                    let stringifiedArrayToGet = arrayToGet.toString();
                    try {
                        let response = yield axios_1.default.get(`https://api.mercadolibre.com/items`, {
                            headers: {
                                'Content-Type': 'application/json',
                                "Authorization": `Bearer ${meliAccessToken}`
                            },
                            params: {
                                ids: stringifiedArrayToGet,
                                attributes: "id,attributes"
                            }
                        });
                        for (let meliOffer in response.data) {
                            myOffersAdditionalInfo.push(response.data[meliOffer].body);
                        }
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
                currentStartPosition += add;
                currentStopPosition += add;
            }
            let organizedNewInfo = [];
            for (let addInfo of myOffersAdditionalInfo) {
                // console.log(`addinfo:`, addInfo)
                let id = addInfo.id;
                let brand;
                let model;
                let gtin;
                let color;
                // Search attributes for desired offer
                for (let item of addInfo.attributes) {
                    if (item.id == 'BRAND') {
                        brand = item.value_name;
                    }
                    else if (item.id == 'MODEL') {
                        model = item.value_name;
                    }
                    else if (item.id == 'GTIN') {
                        gtin = item.value_name;
                    }
                    else if (item.id == 'COLOR') {
                        color = item.value_name;
                    }
                }
                organizedNewInfo.push({ id, brand, model, gtin, color });
            }
            // Map object with MLB and additional info from myOffersAdditionalInfo batch      
            //buscar offer UUID da ofertas
            let items = [];
            let count = 1;
            for (const meliOffer of offerArray) {
                //Matches additional info from current offer
                let currentAddInfo;
                for (let addInfo of organizedNewInfo) {
                    if (meliOffer.id == addInfo.id) {
                        currentAddInfo = addInfo;
                        break;
                    }
                }
                // console.log(`currentAddInfo`, currentAddInfo);
                // let offerUUID = await offer[0].id;
                console.log(`Retrieving UUID ${count}/${offerArray.length}`);
                let currentOffer = {
                    seller: { id: `${sellerUUID}` },
                    offerTitle: meliOffer.title,
                    offerSubTitle: "",
                    status: meliOffer.buying_mode,
                    offerUrl: meliOffer.permalink,
                    categoryID: meliOffer === null || meliOffer === void 0 ? void 0 : meliOffer.category_id,
                    offerID: meliOffer.id,
                    sellerID: meliOffer.seller_id,
                    salesChannel: channelSellerID,
                    condition: meliOffer === null || meliOffer === void 0 ? void 0 : meliOffer.condition,
                    free_shipping: (_a = meliOffer.shipping) === null || _a === void 0 ? void 0 : _a.free_shipping,
                    catalog_listing: meliOffer === null || meliOffer === void 0 ? void 0 : meliOffer.catalogue_listing,
                    catalog_product_id: meliOffer === null || meliOffer === void 0 ? void 0 : meliOffer.catalog_product_id,
                    listing_type_id: meliOffer === null || meliOffer === void 0 ? void 0 : meliOffer.listing_type_id,
                    brandInChannel: currentAddInfo.brand,
                    modelInChannel: currentAddInfo.model
                };
                items.push(currentOffer);
                count++;
            }
            console.log(`items length: ${items.length}`);
            console.log(`items`, items);
            return items;
        });
    }
    ;
    mapMeliOfferArrayToDailyDataInterface(channelSellerID, offerArray) {
        return __awaiter(this, void 0, void 0, function* () {
            const offerServices = new offerServices_1.OfferServices();
            //buscar offer UUID da ofertas
            let items = [];
            let count = 1;
            for (const meliOffer of offerArray) {
                let offer = yield offerServices.getOfferByOfferID(meliOffer.id); //offerArray[0].id
                let offerUUID = yield offer[0].id;
                console.log(`Retrieving UUID ${count}/${offerArray.length}`);
                let currentOffer = {
                    offer: { "id": `${yield offerUUID}` },
                    offerid: meliOffer.id,
                    price: meliOffer.price,
                    offerStatus: meliOffer.status,
                    basePrice: meliOffer === null || meliOffer === void 0 ? void 0 : meliOffer.base_price,
                    originalPrice: meliOffer === null || meliOffer === void 0 ? void 0 : meliOffer.original_price,
                    availableQty: meliOffer === null || meliOffer === void 0 ? void 0 : meliOffer.available_quantity,
                    soldQty: meliOffer === null || meliOffer === void 0 ? void 0 : meliOffer.sold_quantity,
                };
                items.push(currentOffer);
                count++;
            }
            console.log(`items length: ${items.length}`);
            return items;
        });
    }
    ;
    multiGetBatchOfOffers(arrayOfMLBs) {
        return __awaiter(this, void 0, void 0, function* () {
            const mercadoLivreRequests = new mercadoLivre_1.MercadoLivreRequests();
            let meliAccessToken = yield mercadoLivreRequests.listMeliAccessToken();
            console.log(`MeliToken: ${meliAccessToken}`);
            console.log(`Array has ${arrayOfMLBs.length} MLBs`);
            //Slice array and calls request passing 20 MLBs per cicle
            var myOffers = [];
            let add = 20;
            for (let currentStartPosition = 0; currentStartPosition < arrayOfMLBs.length; currentStartPosition + add) {
                console.log(`Starting ${currentStartPosition}/${arrayOfMLBs.length}`);
                let currentStopPosition = currentStartPosition + add;
                if (arrayOfMLBs.length < add) {
                    let lastPositionInArray = arrayOfMLBs.length - 1;
                    let arrayToGet = arrayOfMLBs.slice(0, lastPositionInArray);
                    let stringifiedArrayToGet = arrayToGet.toString();
                    try {
                        let response = yield axios_1.default.get(`https://api.mercadolibre.com/items`, {
                            headers: {
                                'Content-Type': 'application/json',
                                "Authorization": `Bearer ${meliAccessToken}`
                            },
                            params: {
                                ids: stringifiedArrayToGet,
                                attributes: "id,price,status,base_price,original_price,available_quantity,sold_quantity"
                            }
                        });
                        for (let meliOffer in response.data) {
                            myOffers.push(response.data[meliOffer].body);
                        }
                    }
                    catch (e) {
                        return e;
                    }
                }
                else {
                    // let currentStopPosition = currentStartPosition+add;
                    let arrayToGet = arrayOfMLBs.slice(currentStartPosition, currentStopPosition);
                    let stringifiedArrayToGet = arrayToGet.toString();
                    try {
                        let response = yield axios_1.default.get(`https://api.mercadolibre.com/items`, {
                            headers: {
                                'Content-Type': 'application/json',
                                "Authorization": `Bearer ${meliAccessToken}`
                            },
                            params: {
                                ids: stringifiedArrayToGet,
                                attributes: "id,price,status,base_price,original_price,available_quantity,sold_quantity"
                            }
                        });
                        for (let meliOffer in response.data) {
                            myOffers.push(response.data[meliOffer].body);
                        }
                    }
                    catch (e) {
                        return e;
                    }
                }
                currentStartPosition += add;
                currentStopPosition += add;
            }
            /////////
            return myOffers;
        });
    }
    saveBatchDailyData(batchOfDailyData) {
        return __awaiter(this, void 0, void 0, function* () {
            const intelligenceSuiteRequests = new intelligenceSuiteAPI_1.IntelligenceSuiteRequests();
            let add = 100;
            console.log(`Batch size: ${batchOfDailyData.length}`);
            for (let currentStartPosition = 0; currentStartPosition < batchOfDailyData.length; currentStartPosition + add) {
                let currentStopPosition = currentStartPosition + add;
                console.log(`Starting ${currentStartPosition}/${batchOfDailyData.length}`);
                if (batchOfDailyData.length < add) {
                    let lastPositionInArray = batchOfDailyData.length - 1;
                    let arrayToPost = batchOfDailyData.slice(0, lastPositionInArray);
                    try {
                        axios_1.default.post(`${urls_ts_1.myUrls.appBaseUrl}/offers/datapoints`, {
                            body: {
                                items: arrayToPost
                            }
                        });
                    }
                    catch (e) {
                        console.log({
                            message: "erro em saveBatchDailyDataRequest",
                            erro: e
                        });
                    }
                }
                else {
                    console.log(`Starting ${currentStartPosition}/${batchOfDailyData.length}`);
                    let arrayToPost = batchOfDailyData.slice(currentStartPosition, currentStopPosition);
                    try {
                        axios_1.default.post(`${urls_ts_1.myUrls.appBaseUrl}/offers/datapoints`, {
                            body: {
                                items: arrayToPost
                            }
                        });
                    }
                    catch (e) {
                        console.log({
                            message: "erro em saveBatchDailyDataRequest",
                            erro: e
                        });
                    }
                }
                currentStartPosition += add;
            }
            return;
        });
    }
}
exports.MeliServices = MeliServices;
