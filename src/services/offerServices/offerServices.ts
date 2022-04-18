import axios from 'axios';
import { myUrls } from '@shared/urls';


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



}

export { OfferServices }