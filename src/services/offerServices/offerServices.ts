import axios from 'axios';

const baseUrl = 'http://localhost:3333'
const meliUrl = 'https://api.mercadolibre.com/sites/'
const meliAccessToken = ''

class OfferServices {

    // Search sales channel in proprietary API
    getSalesChannels(sellerUUID, channelName){
        return axios.get(`${baseUrl}/sellers/sales-channels/${sellerUUID}/${channelName}`)
    }

// {
// 	"sellerUUID": "",
// 	"channelName": "meli"
// }


    //Return all existing offers in given channel
    getOffersInMeli(channelSellerID){
        return axios.get(`${meliUrl}/MLB/search?seller_id=${channelSellerID}`, {
            headers: {
                "Authorization": `Bearer ${meliAccessToken}`
            }
        })
    }

    //Cria novas ofertas que ainda não existem na base do canal
    saveNewMeliOffers(){

    }

    //Atualiza campos de ofertas existentes no canal
    updateMeliOffers(){ 

    }

}

export { OfferServices }