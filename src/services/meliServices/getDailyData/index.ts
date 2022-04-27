import { MeliServices } from '@services/meliServices/meliServices'
import { CannotExecuteNotConnectedError } from 'typeorm';
import { OfferServices } from '@services/offerServices/offerServices'

const meliServices = new MeliServices();
const offerServices = new OfferServices();

async function getDailyData(){
    
    //Search all salesChannels and saves to array channelIds
        const res = await offerServices.getSalesChannels('na', 'meli');
        const mySalesChannels = res.data;
        const channelIds = [];
        for(let channel in mySalesChannels){
            channelIds.push(mySalesChannels[channel].channelSellerID);
        }
    // Get all offers MLBs from each salesChannel  
        var myMLBs = [];
        for(let salesChannel in channelIds){
            let currentChannel = channelIds[salesChannel];
            offerServices.getAllOffersBySalesChannelID(currentChannel)
                .then((response)=>{
                    for(let offer in response.data){
                        myMLBs.push(response.data[offer].offerID)
                    }
                    // console.log(myMLBs)
                }).then(()=>{
                    const offers = meliServices.multiGetBatchOfOffers(myMLBs.slice(1,123))
                    return offers
                        }).then((offers)=>{
                            console.log(`Got in total ${offers.length} offers from channel ${currentChannel}`)
                            console.log(`Type is ${typeof offers} `)
                            console.log(offers)

                        }).catch((e)=>{console.log(e)})
                
        } // End of for Loop   
            
    //   for(let channel in channelIds)
    // const offersFromMeli = await offerServices.getAllOffersBySalesChannelID
}
// Fatia e de 20 em 20 busca dados

// Transforma os dados no formato do endpoint datapoints

// Manda salvar no banco

//DEPOIS:
// - Criar restrição para não pode ter no mesmo dia dois offerIDs iguais salvos;
// - 



async function run(){
    await getDailyData();
}

run();