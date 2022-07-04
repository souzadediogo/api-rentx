"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfferServices = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _urls = require("../../shared/urls");

var _mercadoLivre = require("../../requests/axios/mercadoLivre");

var _intelligenceSuiteAPI = require("../../requests/axios/intelligenceSuiteAPI");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OfferServices {
  contructor() {} // Search sales channel in proprietary API


  async getSalesChannels(sellerUUID, channelName) {
    return _axios.default.get(`${_urls.myUrls.appBaseUrl}/sellers/sales-channels/${sellerUUID}/${channelName}`);
  } //Return all offers from sellerUUID ou all offers if no uuid sent


  async getAllOffersBySellerUUID(sellerUUID) {
    return _axios.default.get(`${_urls.myUrls.appBaseUrl}/offers?sellerUUID=${sellerUUID}`);
  }

  async getOfferByOfferID(offerID) {
    const intelligenceSuiteRequests = new _intelligenceSuiteAPI.IntelligenceSuiteRequests();

    try {
      // apiBaseUrl.get(`/offers?offerID=${meliOffer.id}`)
      const offer = await intelligenceSuiteRequests.getOfferByOfferID(offerID);
      return offer.data;
    } catch (e) {
      console.log(e);
    }
  }

  async getAllOffersBySalesChannelID(salesChannelID) {
    return _axios.default.get(`${_urls.myUrls.appBaseUrl}/sellers/sales-channels/offers?salesChannelID=${salesChannelID}`);
  }

  async saveMeliOfferArrayInDatabase(sellerUUID, offerArray) {
    for (let offer in offerArray) {
      var options = {
        method: 'POST',
        url: `${_urls.myUrls.appBaseUrl}/offers`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          "seller": {
            "id": `${sellerUUID}`
          },
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
          "listing_type_id": `${offerArray[offer].listing_type_id}`
        }
      };
      let res = await _axios.default.request(options).then(function (response) {
        console.log(`Posting offer ${offer} with ID: ${offerArray[offer].offerID}`);
      }).catch(function (error) {
        console.error(error);
      });
    }

    return;
  } //Cria novas ofertas que ainda não existem na base do canal


  async saveNewMeliOffers(newOffersArray) {
    // console.log(`newOffersArray has ${newOffersArray.length} offers to save`)
    for (let offer in newOffersArray) {
      let offerInfo = newOffersArray[offer]; // console.log(`Saving: ${newOffersArray[offer].offerID}`)

      var options = {
        method: 'POST',
        url: 'http://localhost:3333/offers',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDU2MTQ1MDIsImV4cCI6MTY0NTcwMDkwMiwic3ViIjoiMTc1YmNhNzYtMzE1Yy00Y2I2LTk1MTktY2ExMDNkM2JiYzNjIn0.8Qo5zYZabKFYsAmK5T2-6N-AXOYZd43P5gnUXfi2abc'
        },
        data: {
          seller: {
            id: `${offerInfo.seller.id}`
          },
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

      _axios.default.request(options).then(function (response) {// console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }
  } //Cria novas ofertas que ainda não existem na base do canal


  async saveNewMeliOffersInBatch(newOffersArray) {
    const mercadoLivreRequests = new _mercadoLivre.MercadoLivreRequests();
    let add = 100;

    for (let currentStartPosition = 0; currentStartPosition < newOffersArray.length; currentStartPosition + add) {
      let currentStopPosition = currentStartPosition + add; // console.log(`currentStartPosition: ${currentStartPosition}`);
      // console.log(`currentStopPosition: ${currentStopPosition}`);

      if (newOffersArray.length < add) {
        let lastPositionInArray = newOffersArray.length - 1;
        let arrayToPost = newOffersArray.slice(0, lastPositionInArray);
        let adjustedArray = arrayToPost.map(offer => {
          return {
            seller: {
              id: `${offer.seller.id}`
            },
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
            modelInChannel: offer.modelInChannel
          };
        }); // mercadoLivreRequests.saveNewOffers(adjustedArray)
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
        }; // console.log('data', adjustedArray);

        _axios.default.request(options).then(function (response) {// console.log(response.data);
        }).catch(function (error) {
          console.error(error);
        });
      } else {
        let arrayToPost = newOffersArray.slice(currentStartPosition, currentStopPosition);
        let adjustedArray = arrayToPost.map(offer => {
          return {
            seller: {
              id: `${offer.seller.id}`
            },
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
        }; // console.log('data', adjustedArray);

        _axios.default.request(options).then(function (response) {// console.log(response.data);
        }).catch(function (error) {
          console.error(error);
        });
      }

      currentStartPosition += add;
      currentStopPosition += add;
    }
  } //Atualiza campos de ofertas existentes no canal


  async updateMeliOffers(existingOffersArray) {
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
          seller: {
            id: `${offerInfo.seller.id}`
          },
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

      _axios.default.request(options).then(function (response) {// console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }

    ;
  }

  async retrieveUUIDsFromOfferIDs(offerIDs) {}

} //end of class


exports.OfferServices = OfferServices;