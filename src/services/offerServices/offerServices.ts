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

// {
// 	"sellerUUID": "",
// 	"channelName": "meli"
// }
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
        console.log(newOffersArray[0])
        
        for(let offer in newOffersArray){
            let offerInfo = newOffersArray[offer];
            console.log(`Saving: ${newOffersArray[offer].offerID}`)
            return axios.post(`${myUrls.appBaseUrl}/offers`,{
                data: offerInfo
            })
      }
    }

    //Atualiza campos de ofertas existentes no canal
    async updateMeliOffers(existingOffersArray: Array<IRequestOffer>){ 
        for(let offer in existingOffersArray){
            let offerInfo = existingOffersArray[offer];
            console.log(offerInfo)
            console.log(`Updating: ${existingOffersArray[offer].offerID}`)
            return axios.put(`${myUrls.appBaseUrl}/offers`,{
                data: offerInfo
            })
          }
    }    
}




export { OfferServices }