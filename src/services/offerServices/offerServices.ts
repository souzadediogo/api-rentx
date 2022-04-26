import axios from 'axios';
import { myUrls } from '@shared/urls';
import { IRequestOffer } from '@modules/offers/useCases/createOffer/CreateOfferUseCase'
import { AppError } from '@errors/AppError';

class OfferServices {
    contructor(){}
    // Search sales channel in proprietary API
    async getSalesChannels(sellerUUID, channelName){
        return axios.get(`${myUrls.appBaseUrl}/sellers/sales-channels/${sellerUUID}/${channelName}`)
    }
    //Return all offers from sellerUUID ou all offers if no uuid sent
    async getAllOffersBySellerUUID(sellerUUID){
        return axios.get(`${myUrls.appBaseUrl}/offers?sellerUUID=${sellerUUID}`)
    }
    async getAllOffersBySalesChannelID(salesChannelID){
                // console.log(`Requesting: ${myUrls.appBaseUrl}/sellers/sales-channels/offers?salesChannelID=${salesChannelID}`)
                return axios.get(`${myUrls.appBaseUrl}/sellers/sales-channels/offers?salesChannelID=${salesChannelID}`)
                // //.then((response)=>{
                //     return response
                // }).catch((err)=>{
                //  console.log(`Erro ao buscar ofertas do canall ${salesChannelID}`)
                // });            
    }

    async saveMeliOfferArrayInDatabase(sellerUUID, offerArray: Array<IRequestOffer>) {
        for(let offer in offerArray){
            var options = {
                method: 'POST',
                url: `${myUrls.appBaseUrl}/offers`,
                headers: {'Content-Type': 'application/json'},
                data: {
                        "seller" : {"id": `${sellerUUID}`},
                        "offerID": `${offerArray[offer].offerID}`,
                        "offerTitle": `${offerArray[offer].offerTitle}`,
                        "offerSubTitle": `${offerArray[offer].offerSubTitle}`,
                        "offerUrl":  `${offerArray[offer].offerUrl}`,
                        "status": `${offerArray[offer].status}`,
                        "salesChannel": `${offerArray[offer].salesChannel}`,
                        "catalog_listing": `${offerArray[offer].catalog_listing}`,
                        "categoryID": `${offerArray[offer].categoryID}`,
                        "condition": `${offerArray[offer].condition}`,
                        "free_shipping":`${offerArray[offer].free_shipping}`,
                        "catalog_product_id":`${offerArray[offer].catalog_product_id}`,
                        "listing_type_id":`${offerArray[offer].listing_type_id}`,
                }
              };
            
            let res = await axios.request(options).then(function (response) {
                  console.log(`Posting offer ${offer} with ID: ${offerArray[offer].offerID}`)       
              }).catch(function (error) {
                console.error(error);
              });            
        }
        return 
    }
    //Cria novas ofertas que ainda não existem na base do canal
    async saveNewMeliOffers(newOffersArray: Array<IRequestOffer>){
        console.log(`newOffersArray has ${newOffersArray.length} offers to save`)
        // console.log(newOffersArray[0])
        
        for(let offer in newOffersArray){
            let offerInfo = newOffersArray[offer];
            console.log(`Saving: ${newOffersArray[offer].offerID}`)

            var options = {
                method: 'POST',
                url: 'http://localhost:3333/offers',
                headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDU2MTQ1MDIsImV4cCI6MTY0NTcwMDkwMiwic3ViIjoiMTc1YmNhNzYtMzE1Yy00Y2I2LTk1MTktY2ExMDNkM2JiYzNjIn0.8Qo5zYZabKFYsAmK5T2-6N-AXOYZd43P5gnUXfi2abc'
                },
                data: {
                    seller: {id: `${offerInfo.seller.id}`},
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
            
            axios.request(options).then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });
            // return axios.post(`${myUrls.appBaseUrl}/offers`,{
            //     data: {
            //         seller: {id: `${offerInfo.seller.id}`},
            //         offerTitle: offerInfo.offerTitle,
            //         offerSubTitle: offerInfo.offerTitle,
            //         status: offerInfo.status,
            //         offerUrl: offerInfo.offerUrl,
            //         categoryID: offerInfo.categoryID,
            //         offerID: offerInfo.offerID,
            //         salesChannel: offerInfo.salesChannel,
            //         condition: offerInfo.condition,
            //         free_shipping: offerInfo.free_shipping,
            //         catalog_listing: offerInfo.catalog_listing,
            //         catalog_product_id: offerInfo.catalog_product_id,
            //         listing_type_id: offerInfo.listing_type_id,
            //     }
            // })
      }
    }

    //Cria novas ofertas que ainda não existem na base do canal
    async saveNewMeliOffersInBatch(newOffersArray: Array<IRequestOffer>){
        let add = 5

        for(
            let currentStartPosition =0; 
            currentStartPosition<newOffersArray.length; 
            currentStartPosition+add){
                let currentStopPosition = currentStartPosition+add;
        
        
                console.log(`currentStartPosition: ${currentStartPosition}`);
                console.log(`currentStopPosition: ${currentStopPosition}`);
                if(newOffersArray.length<add){
                    let lastPositionInArray = newOffersArray.length-1;
                    let arrayToPost = newOffersArray.slice(0,lastPositionInArray)
                    let adjustedArray = arrayToPost.map((offer)=>{
                        return {
                            seller: {id: `${offer.seller.id}`},
                            offerID: offer.offerID,
                            offerTitle: offer.offerTitle,
                            offerSubTitle: offer.offerTitle,
                            offerUrl: offer.offerUrl,
                            status: offer.status,
                            salesChannel: offer.salesChannel,
                            catalog_listing: offer.catalog_listing,
                            categoryID: offer.categoryID,
                            condition: offer.condition,
                            free_shipping: offer.free_shipping,
                            catalog_product_id: offer.catalog_product_id,
                            listing_type_id: offer.listing_type_id                    
                        }
                    })
                    var options = {
                        method: 'POST',
                        url: 'http://localhost:3333/offers',
                        headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDU2MTQ1MDIsImV4cCI6MTY0NTcwMDkwMiwic3ViIjoiMTc1YmNhNzYtMzE1Yy00Y2I2LTk1MTktY2ExMDNkM2JiYzNjIn0.8Qo5zYZabKFYsAmK5T2-6N-AXOYZd43P5gnUXfi2abc'
                        },
                        data: {
                            adjustedArray
                        }
                    };
                    
                    axios.request(options).then(function (response) {
                        console.log(response.data);
                    }).catch(function (error) {
                        console.error(error);
                    });        
                } else {
                    let arrayToPost = newOffersArray.slice(currentStartPosition,currentStopPosition)
                    let adjustedArray = arrayToPost.map((offer)=>{
                        return {
                            seller: {id: `${offer.seller.id}`},
                            offerID: offer.offerID,
                            offerTitle: offer.offerTitle,
                            offerSubTitle: offer.offerTitle,
                            offerUrl: offer.offerUrl,
                            status: offer.status,
                            salesChannel: offer.salesChannel,
                            catalog_listing: offer.catalog_listing,
                            categoryID: offer.categoryID,
                            condition: offer.condition,
                            free_shipping: offer.free_shipping,
                            catalog_product_id: offer.catalog_product_id,
                            listing_type_id: offer.listing_type_id                    
                        }
                    })
        

                    var options = {
                        method: 'POST',
                        url: 'http://localhost:3333/offers',
                        headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDU2MTQ1MDIsImV4cCI6MTY0NTcwMDkwMiwic3ViIjoiMTc1YmNhNzYtMzE1Yy00Y2I2LTk1MTktY2ExMDNkM2JiYzNjIn0.8Qo5zYZabKFYsAmK5T2-6N-AXOYZd43P5gnUXfi2abc'
                        },
                        data: {
                            adjustedArray
                        }
                    };
                    
                    axios.request(options).then(function (response) {
                        console.log(response.data);
                    }).catch(function (error) {
                        console.error(error);
                    });
                }
                // postArray()
                currentStartPosition+=add;
                currentStopPosition+=add;
        }

            // return axios.post(`${myUrls.appBaseUrl}/offers`,{
            //     data: {
            //         seller: {id: `${offerInfo.seller.id}`},
            //         offerTitle: offerInfo.offerTitle,
            //         offerSubTitle: offerInfo.offerTitle,
            //         status: offerInfo.status,
            //         offerUrl: offerInfo.offerUrl,
            //         categoryID: offerInfo.categoryID,
            //         offerID: offerInfo.offerID,
            //         salesChannel: offerInfo.salesChannel,
            //         condition: offerInfo.condition,
            //         free_shipping: offerInfo.free_shipping,
            //         catalog_listing: offerInfo.catalog_listing,
            //         catalog_product_id: offerInfo.catalog_product_id,
            //         listing_type_id: offerInfo.listing_type_id,
            //     }
            // })
      }
    


    //Atualiza campos de ofertas existentes no canal
    async updateMeliOffers(existingOffersArray: Array<IRequestOffer>){ 
        for(let offer in existingOffersArray){
            let offerInfo = existingOffersArray[offer];
            // console.log(offerInfo)
            console.log(`Updating: ${existingOffersArray[offer].offerID}`)
           
            var options = {
                method: 'put',
                url: 'http://localhost:3333/offers',
                headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDU2MTQ1MDIsImV4cCI6MTY0NTcwMDkwMiwic3ViIjoiMTc1YmNhNzYtMzE1Yy00Y2I2LTk1MTktY2ExMDNkM2JiYzNjIn0.8Qo5zYZabKFYsAmK5T2-6N-AXOYZd43P5gnUXfi2abc'
                },
                data: {
                    seller: {id: `${offerInfo.seller.id}`},
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
            axios.request(options).then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });

          };
    }  

    

} //end of class


export { OfferServices }