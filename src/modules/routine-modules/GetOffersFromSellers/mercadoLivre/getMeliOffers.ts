
//Responsabilidade: buscar (semanalmente) todas novas ofertas de lojistas
const axios = require('axios');
const url = 'http://localhost:3333';
const rotaSalesChannels = '/sellers/sales-channels';

class GetMeliOffers {

    static async getAllChannels() {
        
        
        const allChannels = 
            axios({
                method: "get",
                url: `${url}${rotaSalesChannels}`,
                data: {
                    sellerUUID: "",
                    channelName: "meli",
                }
            })
            // (await axios.get(`${url}${rotaSalesChannels}`))
            //     .data
        
        const allSellerIdsInMeliFromSeller =
            (await axios.get(`${url}${rotaSeller}${rotaSalesChannels}`))
        
    }
    //[] Recuperar todos canais do tipo Meli de sellers
    //[] Vai loopar por cada canal buscando todas ofertas
    //[] Vai checar se a oferta já existe no banco, se não existe, cria
}

export { GetMeliOffers }


// import axios from "axios";


//  GET /sellers/  
//     -> Lista todos sellers
// GET /sellers/sales-channels  
//    -> Recebe {sellerUUID, channelName} e lista todos sales channels


class RunMeliOffersRoutine {
    
    static async searchMeliOffers() {
        // const allOffersFromSeller;
        
        //=> Buscar todos selelers e Isolar UUID
        // const allSellersIds = 
        //     (await axios.get(`${url}${rotaSeller}`))
        //         .data
        //         .map(seller => seller.id);
        
        // const allSellerIdsInMeliFromSeller =
        //     (await axios.get(`${url}${rotaSeller}${rotaSalesChannels}`))
            
        //=> Busca sellerIdNoMeli de todos SalesChannels deste seller
        