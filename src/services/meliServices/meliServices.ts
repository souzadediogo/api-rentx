import axios from 'axios';
import { IRequestOffer } from '@modules/offers/useCases/createOffer/CreateOfferUseCase'
import { AppError } from '@errors/AppError';
import { SimpleConsoleLogger } from 'typeorm';
import { ICreateOffersDTO } from '@modules/offers/interfaces/IOffersRepository';
import { IDatapointDTO } from '@modules/offers/interfaces/IDatapointsRepository';
import { MercadoLivreRequests } from '../../requests/axios/mercadoLivre';
import { OfferServices } from '../../services/offerServices/offerServices';
import { IntelligenceSuiteRequests } from '../../requests/axios/intelligenceSuiteAPI';
import { myUrls } from '@shared/urls';
import { ConcurrencyManager } from 'axios-concurrency';

interface IMeliOffer {
  id: string;                                //offerID
  title: string;                             //offerTitle
  permalink: string;                         //offerUrl
  buying_mode: string;                       //status
  category_id: string;                       //categoryID
  catalogue_listing: boolean;
  price?: number;
  base_price?: number;
  original_price?: number;
  available_quantity?: number;
  sold_quantity?: number;
  seller_id: string;
  catalog_product_id: string;
  listing_type_id: string;
  condition: string;
  shipping: {free_shipping: boolean}
}


interface IPaging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

class MeliServices {
  contructor(){
  }

    async retrieveRefreshToken(){

  
        const res = await axios({
          url: `${myUrls.meliOAuthUrl}`,
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          data: {
            grant_type: 'refresh_token',
            client_id: '2076599210990714',
            client_secret: 'nrVrt6dzYjTGFibMhJA5CqrFbrEpyoRH',
            refresh_token: 'TG-625c33b542bac7001b6865b5-473621462', //TG-625c328bed9fa8001ba19dd3-473621462
          }        
        })
        //.catch((e)=>{console.log(e)});
        return res.data.access_token;
    }

    //Return all existing offers from meli in given channel
    async getOffersInMeli(channelSellerID):Promise<IMeliOffer[]>{
      const mercadoLivreRequests = new MercadoLivreRequests();
      //Buscar resultados para ter paginação
      const results = await axios.get(`${myUrls.meliBaseUrl}/MLB/search?seller_id=${channelSellerID}`);
      const paging: IPaging = results.data.paging;
      let currentOffset = 0;
      var sellerOffers = [];
        while(currentOffset<2000 ){    //!! paging.total          

          var offers = await mercadoLivreRequests.searchSellerOffers(channelSellerID, currentOffset);
          for(let offer in offers){
                  if(offers[offer]){
                      sellerOffers.push(offers[offer])
                  }
              }              
          currentOffset+=50
        }
      console.log(`Seller offer has ${sellerOffers.length} offers`)
      return sellerOffers;
    }

    async fetchAdditionalOfferInfo(arrayOfMLBs: Array<string>){
      
    }

    async mapMeliOfferArrayToInterface(channelSellerID, sellerUUID, offerArray:Array<IMeliOffer>):Promise<ICreateOffersDTO[]>{
      // console.log(`In mapMeliOfferArrayToInterface`);
      const mercadoLivreRequests = new MercadoLivreRequests();
      let meliAccessToken = await  mercadoLivreRequests.listMeliAccessToken();
      const offerServices = new OfferServices();
      const arrayOfMLBs: Array<string> = offerArray.map((offer)=>{
        return offer.id;
      });

      ////////////////////////////////////////////////////
      var myOffersAdditionalInfo = [];
      let add = 20
        for(let currentStartPosition =0; currentStartPosition<arrayOfMLBs.length; currentStartPosition+add){
          let currentStopPosition = currentStartPosition+add;
            if(arrayOfMLBs.length<add){
                let lastPositionInArray = arrayOfMLBs.length-1;
                let arrayToGet = arrayOfMLBs.slice(0,lastPositionInArray);
                let stringifiedArrayToGet = arrayToGet.toString();
                try {
                  let response = await axios.get(`https://api.mercadolibre.com/items`,{
                      headers: {
                          'Content-Type': 'application/json',
                          "Authorization": `Bearer ${meliAccessToken}`
                      },
                      params: {
                          ids: stringifiedArrayToGet,
                          attributes: "id,attributes"
                      }
                  })
                  for(let meliOffer in response.data){
                    myOffersAdditionalInfo.push(response.data[meliOffer].body); 
                  }
              }catch(e){
                console.log(e);  
              }          
            } else {
                // let currentStopPosition = currentStartPosition+add;
                let arrayToGet = arrayOfMLBs.slice(currentStartPosition,currentStopPosition);
                let stringifiedArrayToGet = arrayToGet.toString();
                try {
                  let response = await axios.get(`https://api.mercadolibre.com/items`,{
                      headers: {
                          'Content-Type': 'application/json',
                          "Authorization": `Bearer ${meliAccessToken}`
                      },
                      params: {
                          ids: stringifiedArrayToGet,
                          attributes: "id,attributes"
                      }
                  })
                  for(let meliOffer in response.data){
                    myOffersAdditionalInfo.push(response.data[meliOffer].body); 
                  }
                  
              }catch(e){
                console.log(e);         
              }  
            }
            currentStartPosition+=add;
            currentStopPosition+=add;
        }
      let organizedNewInfo = [];
      for(let addInfo of myOffersAdditionalInfo){
        let id = addInfo?.id || null;
        let brand;
        let model;
        let gtin;
        let color;
        // Search attributes for desired offer

        // console.log(`addInfo.attributes`, addInfo.attributes)
        if(addInfo?.attributes){
          for(let item of addInfo.attributes){
            if(item.id =='BRAND'){
              brand = item.value_name;
            } else if(item.id =='MODEL'){
              model = item.value_name;
            }else if(item.id =='GTIN'){
              gtin = item.value_name;
            } else if(item.id =='COLOR'){
              color = item.value_name;
            }
          }          
        }
        organizedNewInfo.push({id,brand,model,gtin,color})
      }
      // Map object with MLB and additional info from myOffersAdditionalInfo batch      
      //buscar offer UUID da ofertas
      let items = []
      let count = 1;
      for(const meliOffer of offerArray){
        //Matches additional info from current offer
        let currentAddInfo;
        for(let addInfo of organizedNewInfo){
          if(meliOffer.id == addInfo.id){
            currentAddInfo = addInfo;
            break;
          } 
        }
        let currentOffer = {
          seller: {id: `${sellerUUID}`},
          offerTitle: meliOffer.title,
          offerSubTitle: "",
          status: meliOffer.buying_mode,
          offerUrl: meliOffer.permalink,
          categoryID: meliOffer?.category_id,
          offerID: meliOffer.id,
          sellerID: meliOffer.seller_id,
          salesChannel: channelSellerID,
          condition: meliOffer?.condition,
          free_shipping: meliOffer.shipping?.free_shipping,
          catalog_listing: meliOffer?.catalogue_listing,
          catalog_product_id: meliOffer?.catalog_product_id,
          listing_type_id: meliOffer?.listing_type_id,
          brandInChannel: currentAddInfo?.brand,
          modelInChannel: currentAddInfo?.model
        }
        items.push(currentOffer);
        count++
      }
      console.log(`items length: ${items.length}`);
      // console.log(`items`, items)
      return items;
    };

    async mapMeliOfferArrayToDailyDataInterface(channelSellerID, offerArray:Array<IMeliOffer>):Promise<IDatapointDTO[]>{
      const offerServices = new OfferServices();
      console.log(`Started mapping from channel ${channelSellerID}`)
      //buscar offer UUID da ofertas
      let count = 1;
      let offerArrayWithID = [];    
      let batchedArray = []; //This array will contain subarrays of N amount of offers to help retrieve them in batch below
//////////////////
      let add = 100
      //Separates offer into subArrays to retrieve UUIDs in batch
      for(let currentStartPosition =0; currentStartPosition<offerArray.length; currentStartPosition+add){
        let currentStopPosition = currentStartPosition+add;
          if(offerArray.length<add){
              let lastPositionInArray = offerArray.length-1;
              let arrayToGet = offerArray.slice(0,lastPositionInArray);
              let ids = arrayToGet.map((offer)=>{
                if(offer.id){
                  return offer.id
                }
              })
              // console.log(`Current Batch:`, arrayToGet);
              // console.log(`Current IDS:`, ids);
              batchedArray.push(ids);
          } else {
              let arrayToGet = offerArray.slice(currentStartPosition,currentStopPosition);
              let ids = arrayToGet.map((offer)=>{
                if(offer.id){
                  return offer.id
                }      
              })
              // console.log(`Current Batch:`, arrayToGet);
              // console.log(`Current IDS:`, ids);
              batchedArray.push(ids);
          }
          currentStartPosition+=add;
          currentStopPosition+=add;
      }

      
      let apiBaseUrl = axios.create({
        baseURL: myUrls.appBaseUrl
      });
      const MAX_CONCURRENT_REQUESTS = 20;
      const manager = ConcurrencyManager(apiBaseUrl, MAX_CONCURRENT_REQUESTS);
      
      let mappedItems = await Promise.all(
        batchedArray.map(subArray => apiBaseUrl.get(`/offers?offerID=${[...subArray]}`))
      )
        .then(responses =>{
          //Unifica os subarrays retornados acima
          let allOffersFromResponse = [];
          responses.forEach((subArray)=>{
            subArray.data.forEach((offer)=>{
              allOffersFromResponse.push(offer)
            });
          })
          //Created pairs of offerUUIDs and offerIDs
          let items = []
          allOffersFromResponse.forEach((offer)=>{
            offerArrayWithID.push({offerUUID: offer.id, offerID: offer.offerID})
          })
          //Generates offers to save
          for(const meliOffer of offerArray){
            let offerUUID;
            //Finds UUID for each offer 
            for(const offer of offerArrayWithID){
              if(offer.offerID == meliOffer.id){
                offerUUID = offer.offerUUID;
                break;
              }
            }
            let currentOffer = {
              offer: {"id": `${offerUUID}`},
              offerid: meliOffer.id,
              price: meliOffer.price,
              offerStatus: "no status available",
              basePrice: meliOffer?.base_price,
              originalPrice: meliOffer?.original_price,
              availableQty: meliOffer?.available_quantity,
              soldQty: meliOffer?.sold_quantity,
            }
          items.push(currentOffer);
          }
          return items
        })
      console.log(`Finished mapping from channel ${channelSellerID}`)
 
      return mappedItems;
      manager.detach()      
    };

    async multiGetBatchOfOffers(arrayOfMLBs: Array<string>):Promise<IMeliOffer[]>{
      const mercadoLivreRequests = new MercadoLivreRequests();
      let meliAccessToken = await  mercadoLivreRequests.listMeliAccessToken();
      // console.log(`MeliToken: ${meliAccessToken}`);
      // console.log(`Array has ${arrayOfMLBs.length} MLBs`)
      //Slice array and calls request passing 20 MLBs per cicle
      var myOffers = [];
      let add = 20
        for(let currentStartPosition =0; currentStartPosition<arrayOfMLBs.length; currentStartPosition+add){
          // console.log(`Starting ${currentStartPosition}/${arrayOfMLBs.length}`)  
          let currentStopPosition = currentStartPosition+add;


            if(arrayOfMLBs.length<add){
                let lastPositionInArray = arrayOfMLBs.length-1;
                let arrayToGet = arrayOfMLBs.slice(0,lastPositionInArray);
                let stringifiedArrayToGet = arrayToGet.toString();
                try {
                  let response = await axios.get(`https://api.mercadolibre.com/items`,{
                      headers: {
                          'Content-Type': 'application/json',
                          "Authorization": `Bearer ${meliAccessToken}`
                      },
                      params: {
                          ids: stringifiedArrayToGet,
                          attributes: "id,price,status,base_price,original_price,available_quantity,sold_quantity"
                      }
                  })
                  for(let meliOffer in response.data){
                    myOffers.push(response.data[meliOffer].body); 
                  }
              }catch(e){
                  return e
              }          
            } else {
                // let currentStopPosition = currentStartPosition+add;
                let arrayToGet = arrayOfMLBs.slice(currentStartPosition,currentStopPosition);
                let stringifiedArrayToGet = arrayToGet.toString();
                try {
                  let response = await axios.get(`https://api.mercadolibre.com/items`,{
                      headers: {
                          'Content-Type': 'application/json',
                          "Authorization": `Bearer ${meliAccessToken}`
                      },
                      params: {
                          ids: stringifiedArrayToGet,
                          attributes: "id,price,status,base_price,original_price,available_quantity,sold_quantity"
                      }
                  })
                  for(let meliOffer in response.data){
                    myOffers.push(response.data[meliOffer].body); 
                  }
                  
              }catch(e){
                return e  
              }  
            }
            currentStartPosition+=add;
            currentStopPosition+=add;
        }
      ///////
      return myOffers;
    }

    async saveBatchDailyData(batchOfDailyData: Array<IDatapointDTO>){
      const intelligenceSuiteRequests = new IntelligenceSuiteRequests();
        let add = 100
        console.log(`Batch size: ${batchOfDailyData.length}`)
        for(let currentStartPosition =0; 
          currentStartPosition<batchOfDailyData.length; 
          currentStartPosition+add){
            
            let currentStopPosition = currentStartPosition+add;
            // console.log(`Starting ${currentStartPosition}/${batchOfDailyData.length}`)  
            
            if(batchOfDailyData.length<add){
                let lastPositionInArray = batchOfDailyData.length-1;
                let arrayToPost = batchOfDailyData.slice(0,lastPositionInArray)

                try{
                  axios.post(`${myUrls.appBaseUrl}/offers/datapoints`,{
                      body: {
                          items: arrayToPost
                      }
                  })
                }catch(e){
                  console.log({
                      message: "erro em saveBatchDailyDataRequest",
                      erro: e
                  })
              }

            } else {
                // console.log(`Starting ${currentStartPosition}/${batchOfDailyData.length}`)  
                let arrayToPost = batchOfDailyData.slice(currentStartPosition,currentStopPosition)
                try{
                  axios.post(`${myUrls.appBaseUrl}/offers/datapoints`,{
                      body: {
                          items: arrayToPost
                      }
                  })
              }catch(e){
                  console.log({
                      message: "erro em saveBatchDailyDataRequest",
                      erro: e
                  })
              }
                  }
                currentStartPosition+=add;

        }
        return

    }


}

export { MeliServices, IMeliOffer }




// const LoadDataWithPromiseAll = async () => {
//   const promisses = arr.map((i)=>
//     fetch(`http://asdsada/${i}`)
//   );
//   const results = await Promise.all(promisses);
// }