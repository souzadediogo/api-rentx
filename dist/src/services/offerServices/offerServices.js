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
exports.OfferServices = void 0;
const axios_1 = __importDefault(require("axios"));
const urls_1 = require("@shared/urls");
const mercadoLivre_1 = require("@requests/axios/mercadoLivre");
const intelligenceSuiteAPI_1 = require("@requests/axios/intelligenceSuiteAPI");
class OfferServices {
    contructor() { }
    // Search sales channel in proprietary API
    getSalesChannels(sellerUUID, channelName) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get(`${urls_1.myUrls.appBaseUrl}/sellers/sales-channels/${sellerUUID}/${channelName}`);
        });
    }
    //Return all offers from sellerUUID ou all offers if no uuid sent
    getAllOffersBySellerUUID(sellerUUID) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get(`${urls_1.myUrls.appBaseUrl}/offers?sellerUUID=${sellerUUID}`);
        });
    }
    getOfferByOfferID(offerID) {
        return __awaiter(this, void 0, void 0, function* () {
            const intelligenceSuiteRequests = new intelligenceSuiteAPI_1.IntelligenceSuiteRequests();
            try {
                const offer = yield intelligenceSuiteRequests.getOfferByOfferID(offerID);
                return offer.data;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getAllOffersBySalesChannelID(salesChannelID) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get(`${urls_1.myUrls.appBaseUrl}/sellers/sales-channels/offers?salesChannelID=${salesChannelID}`);
        });
    }
    saveMeliOfferArrayInDatabase(sellerUUID, offerArray) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let offer in offerArray) {
                var options = {
                    method: 'POST',
                    url: `${urls_1.myUrls.appBaseUrl}/offers`,
                    headers: { 'Content-Type': 'application/json' },
                    data: {
                        "seller": { "id": `${sellerUUID}` },
                        "offerID": `${offerArray[offer].offerID}`,
                        "offerTitle": `${offerArray[offer].offerTitle}`,
                        "offerSubTitle": `${offerArray[offer].offerSubTitle}`,
                        "offerUrl": `${offerArray[offer].offerUrl}`,
                        "status": `${offerArray[offer].status}`,
                        "salesChannel": `${offerArray[offer].salesChannel}`,
                        "catalog_listing": `${offerArray[offer].catalog_listing}`,
                        "categoryID": `${offerArray[offer].categoryID}`,
                        "condition": `${offerArray[offer].condition}`,
                        "free_shipping": `${offerArray[offer].free_shipping}`,
                        "catalog_product_id": `${offerArray[offer].catalog_product_id}`,
                        "listing_type_id": `${offerArray[offer].listing_type_id}`,
                    }
                };
                let res = yield axios_1.default.request(options).then(function (response) {
                    console.log(`Posting offer ${offer} with ID: ${offerArray[offer].offerID}`);
                }).catch(function (error) {
                    console.error(error);
                });
            }
            return;
        });
    }
    //Cria novas ofertas que ainda não existem na base do canal
    saveNewMeliOffers(newOffersArray) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`newOffersArray has ${newOffersArray.length} offers to save`);
            for (let offer in newOffersArray) {
                let offerInfo = newOffersArray[offer];
                console.log(`Saving: ${newOffersArray[offer].offerID}`);
                var options = {
                    method: 'POST',
                    url: 'http://localhost:3333/offers',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDU2MTQ1MDIsImV4cCI6MTY0NTcwMDkwMiwic3ViIjoiMTc1YmNhNzYtMzE1Yy00Y2I2LTk1MTktY2ExMDNkM2JiYzNjIn0.8Qo5zYZabKFYsAmK5T2-6N-AXOYZd43P5gnUXfi2abc'
                    },
                    data: {
                        seller: { id: `${offerInfo.seller.id}` },
                        offerID: offerInfo.offerID,
                        offerTitle: offerInfo.offerTitle,
                        offerSubTitle: offerInfo.offerTitle,
                        offerUrl: offerInfo.offerUrl,
                        status: offerInfo.status,
                        salesChannel: offerInfo.salesChannel,
                        catalog_listing: offerInfo.catalog_listing,
                        categoryID: offerInfo.categoryID,
                        condition: offerInfo.condition,
                        free_shipping: offerInfo.free_shipping,
                        catalog_product_id: offerInfo.catalog_product_id,
                        listing_type_id: offerInfo.listing_type_id
                    }
                };
                axios_1.default.request(options).then(function (response) {
                    console.log(response.data);
                }).catch(function (error) {
                    console.error(error);
                });
            }
        });
    }
    //Cria novas ofertas que ainda não existem na base do canal
    saveNewMeliOffersInBatch(newOffersArray) {
        return __awaiter(this, void 0, void 0, function* () {
            const mercadoLivreRequests = new mercadoLivre_1.MercadoLivreRequests();
            let add = 100;
            for (let currentStartPosition = 0; currentStartPosition < newOffersArray.length; currentStartPosition + add) {
                let currentStopPosition = currentStartPosition + add;
                console.log(`currentStartPosition: ${currentStartPosition}`);
                console.log(`currentStopPosition: ${currentStopPosition}`);
                if (newOffersArray.length < add) {
                    let lastPositionInArray = newOffersArray.length - 1;
                    let arrayToPost = newOffersArray.slice(0, lastPositionInArray);
                    let adjustedArray = arrayToPost.map((offer) => {
                        return {
                            seller: { id: `${offer.seller.id}` },
                            offerID: offer.offerID,
                            offerTitle: offer.offerTitle,
                            offerSubTitle: offer.offerTitle,
                            offerUrl: offer.offerUrl,
                            sellerID: offer.sellerID,
                            status: offer.status,
                            salesChannel: offer.salesChannel,
                            catalog_listing: offer.catalog_listing,
                            categoryID: offer.categoryID,
                            condition: offer.condition,
                            free_shipping: offer.free_shipping,
                            catalog_product_id: offer.catalog_product_id,
                            listing_type_id: offer.listing_type_id,
                            brandInChannel: offer.brandInChannel,
                            modelInChannel: offer.modelInChannel,
                        };
                    });
                    // mercadoLivreRequests.saveNewOffers(adjustedArray)
                    //     .catch((e)=>{console.log(e)})
                    let options = {
                        method: 'POST',
                        url: 'http://localhost:3333/offers',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDU2MTQ1MDIsImV4cCI6MTY0NTcwMDkwMiwic3ViIjoiMTc1YmNhNzYtMzE1Yy00Y2I2LTk1MTktY2ExMDNkM2JiYzNjIn0.8Qo5zYZabKFYsAmK5T2-6N-AXOYZd43P5gnUXfi2abc'
                        },
                        data: {
                            items: adjustedArray
                        }
                    };
                    axios_1.default.request(options).then(function (response) {
                        console.log(response.data);
                    }).catch(function (error) {
                        console.error(error);
                    });
                }
                else {
                    let arrayToPost = newOffersArray.slice(currentStartPosition, currentStopPosition);
                    let adjustedArray = arrayToPost.map((offer) => {
                        return {
                            seller: { id: `${offer.seller.id}` },
                            offerID: offer.offerID,
                            offerTitle: offer.offerTitle,
                            offerSubTitle: offer.offerTitle,
                            offerUrl: offer.offerUrl,
                            status: offer.status,
                            sellerID: offer.sellerID,
                            salesChannel: offer.salesChannel,
                            catalog_listing: offer.catalog_listing,
                            categoryID: offer.categoryID,
                            condition: offer.condition,
                            free_shipping: offer.free_shipping,
                            catalog_product_id: offer.catalog_product_id,
                            listing_type_id: offer.listing_type_id
                        };
                    });
                    let options = {
                        method: 'POST',
                        url: 'http://localhost:3333/offers',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDU2MTQ1MDIsImV4cCI6MTY0NTcwMDkwMiwic3ViIjoiMTc1YmNhNzYtMzE1Yy00Y2I2LTk1MTktY2ExMDNkM2JiYzNjIn0.8Qo5zYZabKFYsAmK5T2-6N-AXOYZd43P5gnUXfi2abc'
                        },
                        data: {
                            items: adjustedArray
                        }
                    };
                    axios_1.default.request(options).then(function (response) {
                        console.log(response.data);
                    }).catch(function (error) {
                        console.error(error);
                    });
                }
                currentStartPosition += add;
                currentStopPosition += add;
            }
        });
    }
    //Atualiza campos de ofertas existentes no canal
    updateMeliOffers(existingOffersArray) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let offer in existingOffersArray) {
                let offerInfo = existingOffersArray[offer];
                var options = {
                    method: 'put',
                    url: 'http://localhost:3333/offers',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDU2MTQ1MDIsImV4cCI6MTY0NTcwMDkwMiwic3ViIjoiMTc1YmNhNzYtMzE1Yy00Y2I2LTk1MTktY2ExMDNkM2JiYzNjIn0.8Qo5zYZabKFYsAmK5T2-6N-AXOYZd43P5gnUXfi2abc'
                    },
                    data: {
                        seller: { id: `${offerInfo.seller.id}` },
                        offerID: offerInfo.offerID,
                        offerTitle: offerInfo.offerTitle,
                        offerSubTitle: offerInfo.offerTitle,
                        offerUrl: offerInfo.offerUrl,
                        status: offerInfo.status,
                        salesChannel: offerInfo.salesChannel,
                        catalog_listing: offerInfo.catalog_listing,
                        categoryID: offerInfo.categoryID,
                        condition: offerInfo.condition,
                        free_shipping: offerInfo.free_shipping,
                        catalog_product_id: offerInfo.catalog_product_id,
                        listing_type_id: offerInfo.listing_type_id
                    }
                };
                axios_1.default.request(options).then(function (response) {
                    console.log(response.data);
                }).catch(function (error) {
                    console.error(error);
                });
            }
            ;
        });
    }
    retrieveUUIDsFromOfferIDs(offerIDs) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
} //end of class
exports.OfferServices = OfferServices;
