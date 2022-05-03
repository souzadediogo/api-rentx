import { OfferServices } from '@services/offerServices/offerServices';
import { MeliServices } from '@services/meliServices/meliServices'

async function updateOffersFromSellers(){
    // const token = await getNewRefreshToken();
    // if(token){console.log(`ok, token: ${token}`)}else{console.log(`not ok, token ${token}`)}
    // getOffersInMeli('93768777').then(response =>{console.log(response)})

    
    //BUSCA TODOS CANAIS DO MELI
    const offerServices = new OfferServices();
    const meliServices = new MeliServices();

    const res = await offerServices.getSalesChannels('na', 'meli');
    const mySalesChannels = res.data;
    let channelIds = mySalesChannels.map((channel)=>{
        return {
            channelSellerID: channel.channelSellerID,
            sellerUUID: channel.sellerUUID
        };
    });
        //PARA CADA CANAL, BUSCA OFERTAS NO MELI
            for(let id in channelIds){
                console.log(`Searching SellerID: ${channelIds[id].channelSellerID}`);
                meliServices.getOffersInMeli(channelIds[id].channelSellerID).then((response)=>{
                    //REMAPEIA ARRAY DE OFERTAS NO FORMATO QUE PRECISAMOS ENVIAR PARA A API
                        let sellerUniqueID = channelIds[id].sellerUUID;
                        let sellerChannelID = channelIds[id].channelSellerID;
                        meliServices.mapMeliOfferArrayToInterface(sellerChannelID, sellerUniqueID, response)
                        .then((mappedArray)=>{
                        //SEPARA AS OFERTAS QUE EXISTEM E DAS QUE NÃO EXISTEM
                            offerServices.getAllOffersBySalesChannelID(sellerChannelID).then((response)=>{
                                console.log(`sellerChannelID ${sellerChannelID} has ${response?.data.length} offers`);
                                let allOffersInDB = response.data;
                                let allExistingOffersIDsInDB = allOffersInDB.map((offer)=>{
                                    return offer.offerID;
                                });
                                let allExistingOffersIDsInMappedArray = mappedArray.map((offer)=>{
                                    return offer.offerID;
                                });
                                let existingOfferIDs = allExistingOffersIDsInDB.filter((id)=>{
                                    return allExistingOffersIDsInMappedArray.includes(id)
                                });

                                let newOfferIDs = [];
                                for(let id in allExistingOffersIDsInMappedArray){
                                    if(!allExistingOffersIDsInDB.includes(allExistingOffersIDsInMappedArray[id])){  //Se este ID do Meli não existe no db, add no array
                                        newOfferIDs.push(allExistingOffersIDsInMappedArray[id])
                                    }
                                }
                                
                                let mappedArrayOfExistingOffers = mappedArray.filter(offer => {
                                    return newOfferIDs.indexOf(offer.offerID) === -1;
                                });
                                let mappedArrayOfNewOffers = mappedArray.filter(offer => {
                                    return newOfferIDs.indexOf(offer.offerID) !== -1;
                                });
                                console.log(`New Offers to Create: ${mappedArrayOfNewOffers.length} `);
                                offerServices.saveNewMeliOffersInBatch(mappedArrayOfNewOffers)
                                console.log(`Offers to update: ${mappedArrayOfExistingOffers.length} `);
                        })
                    })
            }).catch((e)=>{
                console.log(e)
            })
            
        }
            

}


async function run (){
    await updateOffersFromSellers();
    console.log(`End of script`)
}

run();

export { updateOffersFromSellers }