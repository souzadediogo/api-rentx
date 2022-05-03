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
        console.log(`ChannelIDs`, channelIds)
    // Get all offers MLBs from each salesChannel  
        
        for(let salesChannel in channelIds){
            const myMLBs = [];
            let currentChannel = channelIds[salesChannel];
            offerServices.getAllOffersBySalesChannelID(currentChannel).then((response)=>{
                for(let offer in response.data){
                    myMLBs.push(response.data[offer].offerID)
                }
                console.log(`Starting to fetch offers in Meli from channel ${currentChannel}`)
                meliServices.multiGetBatchOfOffers(myMLBs).then( (res2) => {
                    console.log('res2', `${res2.length}`)
                    console.log(`Finished fetching offers in Meli from channel ${currentChannel}`);
                    console.log(currentChannel)
                    //Mapear Array<MeliOffer[]> para array de createdailydata
                    meliServices.mapMeliOfferArrayToDailyDataInterface(currentChannel, res2).then((res3)=>{
                        console.log(`res3 in savebatch has ${res3.length} offers`)
                        meliServices.saveBatchDailyData(res3).then((res4)=>{
                            console.log(`Done saving`)
                        }, err =>{
                            console.log(err)
                        })
                    }, err =>{
                        console.log(`erro em mapMeliOfferArrayToDailyDataInterface`, err)
                        })
                }, err => {
                    console.log(`erro em multiGetBatchOfOffers`, err)
                })
               
            }, err => {
                console.log("erro aqui no fim", err)
            })
                    

                        
                
        } // End of for Loop   
            
    //   for(let channel in channelIds)
    // const offersFromMeli = await offerServices.getAllOffersBySalesChannelID
}



async function run(){
    await getDailyData();
}

run();

export { getDailyData }