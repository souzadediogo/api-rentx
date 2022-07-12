"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDailyData = getDailyData;

var _meliServices = require("../../meliServices/meliServices");

var _offerServices = require("../../offerServices/offerServices");

const meliServices = new _meliServices.MeliServices();
const offerServices = new _offerServices.OfferServices();

async function getDailyData() {
  //Search all salesChannels and saves to array channelIds
  const res = await offerServices.getSalesChannels('na', 'meli');
  const mySalesChannels = res.data;
  const channelIds = [];

  for (let channel in mySalesChannels) {
    channelIds.push(mySalesChannels[channel].channelSellerID);
  }

  console.log(`ChannelIDs`, channelIds); // Get all offers MLBs from each salesChannel

  async function runScript(salesChannel) {
    return new Promise((resolve, reject) => {
      const myMLBs = [];
      let currentChannel = salesChannel; //channelIds[salesChannel];

      let script = offerServices.getAllOffersBySalesChannelID(currentChannel).then(response => {
        for (let offer in response.data) {
          myMLBs.push(response.data[offer].offerID);
        }

        console.log(`Starting to fetch offers in Meli from channel ${currentChannel}`);
        meliServices.multiGetBatchOfOffers(myMLBs).then(res2 => {
          // console.log('res2', `${res2.length}`)
          console.log(`Finished fetching offers in Meli from channel ${currentChannel}`);
          console.log(`Current Channel:`, currentChannel); //Mapear Array<MeliOffer[]> para array de createdailydata
          // console.log(`array in res2:`, res2)

          meliServices.mapMeliOfferArrayToDailyDataInterface(currentChannel, res2).then(res3 => {
            console.log(`Mapping offers from channel ${currentChannel}`); // console.log(res3)

            console.log(`res3 in savebatch has ${res3.length} offers from channel ${currentChannel}`);
            meliServices.saveBatchDailyData(res3).then(res4 => {
              console.log(`Done saving channel ${currentChannel}`);
              resolve({
                message: `Success retrieving daily data from ${currentChannel}`
              }); // return 
            }, err => {
              console.log(err.status);
            });
          }, err => {
            console.log(`erro em mapMeliOfferArrayToDailyDataInterface`, err.status);
            reject({
              message: `seguindo adiante mesmo com erro em retrieving daily data from ${currentChannel}`
            });
          });
        }, err => {
          console.log(`erro em multiGetBatchOfOffers`, err.status);
        });
      }, err => {
        console.log("erro aqui no fim", err.status);
        reject("Failure");
      });
    }); //End of promisse
  } // let numOfSalesChannels = channelIds.length;
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


  for (let salesChannel of channelIds) {
    try {
      let answer = await runScript(salesChannel);
      console.log(answer.message);
    } catch (e) {
      console.log(e);
      break;
    }
  }
}

async function run() {
  await getDailyData();
}

run();