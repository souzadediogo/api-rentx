// import axios from "axios";
const axios = require('axios');

const url = 'http://localhost:3333';
const rotaSeller = '/sellers';
const rotaSalesChannels = '/sales-channels';

//  GET /sellers/  
//     -> Lista todos sellers
// GET /sellers/sales-channels  
//    -> Recebe {sellerUUID, channelName} e lista todos sales channels




class RunMeliOffersRoutine {


    
    static async searchMeliOffers() {
        // const allOffersFromSeller;
        
        //=> Buscar todos selelers e Isolar UUID
        const allSellersIds = 
            (await axios.get(`${url}${rotaSeller}`))
                .data
                .map(seller => seller.id);
        
        const allSellerIdsInMeliFromSeller =
            (await axios.get(`${url}${rotaSeller}${rotaSalesChannels}`))
            
        //=> Busca sellerIdNoMeli de todos SalesChannels deste seller

        
/* 
=> Busca sellerIdNoMeli de todos SalesChannels deste seller
    =====>sellerUUID, channelName
=> Para cada sellerIdNoMeli faz request loopando e buscando todas ofertas
=> Acumula ofertas de todos sellerIdNoMeli do seller atual num array
=> Retorna array de todas ofertas

Passo a passo:

[] Buscar todos saleschannel.sellerIdNoMelo do tipo mercado-livre
[] Montar objeto;

QUERO GARANTIR QUE TEREMOS UM ARRAY COM TODAS AS OFERTAS DESTE SELLER
*/
        return allSellerIdsInMeliFromSeller;
    };


    async updateMeliOffers(){
/* 
=> Recebe array de todas ofertas
=> Atualiza Offers [status, last_update, ]

Passo a passo:
[] 
[] 


QUERO GARANTIR QUE RECEBEREMOS TODAS OFERTAS, 
ATUALIZAREMOS AS EXISTENTES E ADICIONAREMOS AS NOVAS
*/
    }

    async createDatapoints() {     
/* 
=> Recebe array de todas ofertas ativas
=> Cria datapoints

Passo a passo:
[] 
[] 


QUERO GARANTIR QUE RECEBEREMOS TODAS OFERTAS ATIVAS, 
E CRIAREMOS DATAPOINTS
*/  
    }
}

// .get("/", listSellersController.handle);
// .post("/", createSellerController.handle);

// .get("/sales-channels", listSellerSalesChannelsController.handle);
// .post("/sales-channels", createSalesChannelController.handle);

RunMeliOffersRoutine.searchMeliOffers().then(v=>{console.log(v)});