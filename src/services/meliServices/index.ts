import { getNewRefreshToken, getOffersInMeli }  from './meliServices';
import { OfferServices } from '@services/offerServices/offerServices';

async function getOffersNow(){
    // const token = await getNewRefreshToken();
    // if(token){console.log(`ok, token: ${token}`)}else{console.log(`not ok, token ${token}`)}
    // getOffersInMeli('93768777').then(response =>{console.log(response)})

    
    //BUSCA TODOS CANAIS DO MELI
    const offerServices = new OfferServices();
    const res = await offerServices.getSalesChannels('na', 'meli');
    const mySalesChannels = res.data;
    let channelIds = mySalesChannels.map((channel)=>{
        return channel.channelSellerID;
    });
    console.log(channelIds)
        //PARA CADA CANAL, BUSCA OFERTAS NO MELI
        for(let id in channelIds){
            console.log(`Searching SellerID: ${channelIds[id]}`);
            await getOffersInMeli(channelIds[id]).then((response)=>{
                console.log(response[0])
                // PARA CADA CANAL, MANDA SALVAR OFERTAS NO BANCO
            })
            
        }
            

}

// interface IRequest {
//     id?: string;
//     offerTitle: string;
//     offerSubTitle: string;
//     status: string;
//     categoryID: string;
//     offerID: string;
//     sellerID: string; 
//     skuID: string;
//     salesChannel: string;
// };



getOffersNow();