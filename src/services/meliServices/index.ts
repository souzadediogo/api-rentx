import { MeliServices }  from './meliServices';
import { OfferServices } from '@services/offerServices/offerServices';

async function getOffersNow(){
    // const token = await getNewRefreshToken();
    // if(token){console.log(`ok, token: ${token}`)}else{console.log(`not ok, token ${token}`)}
    // getOffersInMeli('93768777').then(response =>{console.log(response)})

    
    //BUSCA TODOS CANAIS DO MELI
    const offerServices = new OfferServices();
    const meliServices = new MeliServices();

    const res = await offerServices.getSalesChannels('na', 'meli');
    const mySalesChannels = res.data;
    // console.log(mySalesChannels);
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
                    console.log(`1`)
                    //REMAPEIA ARRAY DE OFERTAS NO FORMATO QUE PRECISAMOS ENVIAR PARA A API
                        console.log("2");
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
                                
                                // console.log(`allExistingOffersIDsInDB = ${allExistingOffersIDsInDB.length}`);
                                // console.log(`allExistingOffersIDsInMappedArray = ${allExistingOffersIDsInMappedArray.length}`);
                                // console.log(`existingOfferIDs = ${existingOfferIDs.length}`);
                                // console.log(`newOfferIDs = ${newOfferIDs.length}`);
                                // console.log(`newOfferIDs = ${newOfferIDs}`);
                                // console.log(`existingOfferIDs = ${existingOfferIDs}`);
                                let mappedArrayOfExistingOffers = mappedArray.filter(offer => {
                                    return newOfferIDs.indexOf(offer.offerID) === -1;
                                });
                                let mappedArrayOfNewOffers = mappedArray.filter(offer => {
                                    return newOfferIDs.indexOf(offer.offerID) !== -1;
                                });
                                // console.log(`mappedArrayOfExistingOffers = ${mappedArrayOfExistingOffers.length}`);
                                // console.log(`mappedArrayOfNewOffers = ${mappedArrayOfNewOffers.length}`);
                                console.log(`New Offers to Create: ${mappedArrayOfNewOffers.length} `);
                                offerServices.saveNewMeliOffersInBatch(mappedArrayOfNewOffers)
                                    // .catch((e)=>{console.log(e)}) //
                                //saveNewMeliOffersInBatch //saveNewMeliOffers //saveNewMeliOffersInBatch
                                console.log(`Offers to update: ${mappedArrayOfExistingOffers.length} `);
                                // clearofferServices.updateMeliOffers(mappedArrayOfExistingOffers);
                        })
                    })
            }).catch((e)=>{
                console.log(e)
            })
            
        }
            

}


async function runMeliServices (){
    await getOffersNow();
    console.log(`End of script`)
}

runMeliServices();
