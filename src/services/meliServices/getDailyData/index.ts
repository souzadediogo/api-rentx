import { MeliServices } from '../../meliServices/meliServices'
import { CannotExecuteNotConnectedError } from 'typeorm';
import { OfferServices } from '../../offerServices/offerServices'
import { SalesChannel } from '@modules/sellers/entities/SalesChannels';
import fs from 'fs';

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

    async function runScript(salesChannel){
        return new Promise((resolve, reject)=>{
            const myMLBs = [];
            let currentChannel = salesChannel;//channelIds[salesChannel];
            let script = offerServices.getAllOffersBySalesChannelID(currentChannel).then((response)=>{
                for(let offer in response.data){
                    myMLBs.push(response.data[offer].offerID)
                }
                console.log(`Starting to fetch offers in Meli from channel ${currentChannel}`)
                fs.writeFile("1-myMLBs.txt", JSON.stringify(myMLBs), async function (err) {
                  
                })
                meliServices.multiGetBatchOfOffers(myMLBs).then( (res2) => {
                
                    fs.writeFile("2-multiGetBatchOfOffers.txt", JSON.stringify(res2), async function (err) {
                        
                    }) //93768777 channel com erro
                    // console.log('res2', `${res2.length}`)
                    console.log(`Finished fetching offers in Meli from channel ${currentChannel}`);
                    console.log(`Current Channel:`, currentChannel)
                    //Mapear Array<MeliOffer[]> para array de createdailydata
                    // console.log(`array in res2:`, res2)
                    meliServices.mapMeliOfferArrayToDailyDataInterface(currentChannel, res2).then((res3)=>{
                        console.log(`Mapping offers from channel ${currentChannel}`)
                        fs.writeFile("3-currentChannel.txt", JSON.stringify(currentChannel), async function (err) {
                        })
                        fs.writeFile("4-res2.txt", JSON.stringify(res2), async function (err) {
                        })
                        // console.log(res3)
                        console.log(`res3 in savebatch has ${res3.length} offers from channel ${currentChannel}`)
                        
                        meliServices.saveBatchDailyData(res3).then((res4)=>{
                            console.log(`Done saving channel ${currentChannel}`)
                            resolve({message: `Success retrieving daily data from ${currentChannel}`})
                            // return 
                        }, err =>{
                            console.log(err?.response?.status)
                        })
                    }, err =>{
                        fs.writeFile("logs-function.txt", JSON.stringify(err.message), async function (err) {
                        })
                        console.log(`erro em mapMeliOfferArrayToDailyDataInterface`, err?.response?.status);
                        

                        
                        reject({message: `seguindo adiante mesmo com erro em retrieving daily data from ${currentChannel}`})

                    })
                }, err => {
                    console.log(`erro em multiGetBatchOfOffers`, err?.response?.status)
                })
                
            }, err => {
                console.log("erro aqui no fim", err?.response?.status);
                reject("Failure") 
            })
            
            
    
        })//End of promisse
    
    }
    // let numOfSalesChannels = channelIds.length;
    // let currentSalesChannel = 0;
    // while(currentSalesChannel<channelIds.length){
    //     await runScript(currentSalesChannel, channelIds)
    //     currentSalesChannel++
    // }
    // for(let salesChannel of channelIds){
    //     console.log(`Go: $${salesChannel}`)
    //     await runScript(salesChannel)
    // }

    // channelIds.map(async (salesChannel)=>{
    for(let salesChannel of channelIds){
        try {
            let answer = await runScript(salesChannel) 
            console.log(answer.message)
        }catch(e){
            console.log(e)

        }
        
    }
}

async function run(){
    await getDailyData();
}

run();

export { getDailyData }