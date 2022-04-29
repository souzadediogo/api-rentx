import axios from 'axios';
import { myUrls } from '@shared/urls.ts';
import { IRequestOffer } from '@modules/offers/useCases/createOffer/CreateOfferUseCase'
import { MercadoLivreRequests } from '@requests/axios/mercadoLivre'
import { AppError } from '@errors/AppError';
import { SimpleConsoleLogger } from 'typeorm';
import { ICreateOffersDTO } from '@modules/offers/repositories/IOffersRepository';
import { OfferServices } from '@services/offerServices/offerServices';
import { IDatapointDTO } from '@modules/offers/repositories/IDatapointsRepository';
import { IntelligenceSuiteRequests } from '@requests/axios/intelligenceSuiteAPI';

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
      console.log(`0`)

      
      console.log(`0.1`)
  
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
        }).catch((e)=>{console.log(e)});
        return res.data.meliToken;

        // var options = {
        //   method: 'GET',
        //   url: `${myUrls.appBaseUrl}/meliAuthentication/list-auth-info`,
        //   headers: {'Content-Type': 'application/json'}
        // };
      //   console.log(options)
      console.log(`0.2`);
      //   let token = await axios.get(`${myUrls.appBaseUrl}/meliAuthentication/list-auth-info`, {
      //     headers: {
      //         "Authorization": `Bearer ${meliAccessToken}`
      //     }
      // }).catch((e)=>{
      //   console.log(e)
      //   throw new AppError
      // })
      //   console.log(token)
      //   return token.data.meliToken;

          // let res = await axios.request(options).then(function (response) {
          //   console.log(`Access Token: ${response.data.meliToken}`);
          //   return response.data.meliToken;
          // }).catch(function (error) {
          //   console.error(error);
          // });   


          // console.log(`AcessToken: ${res.data.access_token}`)
      
      
          //   axios.post(`${myUrls.meliOAuthUrl}`,{options}).then(response=>{console.log(response)})
          // axios.request(options).then(function (response) {
          //     let access_token = response.data.access_token;
          //     console.log(`access_token is ${access_token}`)
          //     return access_token;
          //   }).catch(function (error) {
          //     console.error(error);
          //     return
          //   }); 
          
    }

    //Return all existing offers from meli in given channel
    async getOffersInMeli(channelSellerID):Promise<IMeliOffer[]>{
      const mercadoLivreRequests = new MercadoLivreRequests();
      //Buscar resultados para ter paginação
      const results = await axios.get(`${myUrls.meliBaseUrl}/MLB/search?seller_id=${channelSellerID}`);
      //!! const results = await this.mercadoLivreRequests.searchSellerResultsByChannelSellerID(channelSellerID);
      const paging: IPaging = results.data.paging;
      let currentOffset = 0;
      var sellerOffers = [];
      // console.log(paging.total)
      // if(paging.total>0){
        while(currentOffset<paging.total){    //!! paging.total
          // console.log(`Current offset = ${currentOffset}/${paging.total}`);
          

          var offers = await mercadoLivreRequests.searchSellerOffers(channelSellerID, currentOffset);
          // console.log(`sellerOffers currently had ${sellerOffers.length}`)
          for(let offer in offers){
                  if(offers[offer]){
                    // console.log(offers[offer])
                      sellerOffers.push(offers[offer])
                  }
              }              
          currentOffset+=50
        }
        console.log(`getOfferInMeli: 6`)
      console.log(`Seller offer has ${sellerOffers.length} offers`)
      // console.log(sellerOffers)
      console.log(`Returning seller offers`)
      return sellerOffers;
    }

    async mapMeliOfferArrayToInterface(channelSellerID, sellerUUID, offerArray:Array<IMeliOffer>):Promise<ICreateOffersDTO[]>{
    
      return offerArray.map((meliOffer)=>{
          return {
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
          }
        })
    };

    async mapMeliOfferArrayToDailyDataInterface(channelSellerID, offerArray:Array<IMeliOffer>):Promise<IDatapointDTO[]>{
      const offerServices = new OfferServices();

      //   interface IDatapointDTO {
    //     id?: string;
    //     offerid: string;
    //     price: number; 
    //     basePrice: number;
    //     originalPrice: number;
    //     availableQty: number;
    //     soldQty: number;
    // }
      //buscar offer UUID da ofertas
      let items = []
      // console.log(`offerUUID: ${offerUUID}`)
      
      for(const meliOffer of offerArray){
        let offer = await offerServices.getOfferByOfferID(meliOffer.id); //offerArray[0].id
        let offerUUID = await offer[0].id;
        // console.log(`offer`, offer[0]);
        // console.log(`id`, offerUUID);
        //console.log(`index: ${index}, MeliOffer: ${meliOffer}`);
        let currentOffer = {
          id: await offerUUID,
          offerid: meliOffer.id,
          price: meliOffer.price,
          basePrice: meliOffer?.base_price,
          originalPrice: meliOffer?.original_price,
          availableQty: meliOffer?.available_quantity,
          soldQty: meliOffer?.sold_quantity,
        }
        items.push(currentOffer);
      }
      // offerArray.forEach( async (meliOffer, index)=>{
        // console.log(`1`);
        // let offer = await offerServices.getOfferByOfferID(meliOffer.id); //offerArray[0].id
        // let offerUUID = await offer[0].id;
        // console.log(`2`);
        // // console.log(`offer`, offer[0]);
        // // console.log(`id`, offerUUID);
        // //console.log(`index: ${index}, MeliOffer: ${meliOffer}`);
        // let currentOffer = {
        //   id: await offerUUID,
        //   offerid: meliOffer.id,
        //   price: meliOffer.price,
        //   basePrice: meliOffer?.base_price,
        //   originalPrice: meliOffer?.original_price,
        //   availableQty: meliOffer?.available_quantity,
        //   soldQty: meliOffer?.sold_quantity,
        // }
        // console.log(`3`);
        // items.push(currentOffer);
        // console.log(`Current offer`, currentOffer)
        
      // })
      console.log(`4`);
      console.log(`items length: ${items.length}`);
      console.log(`items`, items)
      return items;
    };

    async multiGetBatchOfOffers(arrayOfMLBs: Array<string>):Promise<IMeliOffer[]>{
      const mercadoLivreRequests = new MercadoLivreRequests();
      let meliAccessToken = await  mercadoLivreRequests.listMeliAccessToken();
      console.log(`MeliToken: ${meliAccessToken}`);
      console.log(`Array has ${arrayOfMLBs.length} MLBs`)
      //Slice array and calls request passing 20 MLBs per cicle
      // let stringOfMLBs = arrayOfMLBs.toString();
      /////////
      var myOffers = [];
      let add = 20
        for(let currentStartPosition =0; currentStartPosition<arrayOfMLBs.length; currentStartPosition+add){
          console.log(`Starting ${currentStartPosition}/${arrayOfMLBs.length}`)  
          let currentStopPosition = currentStartPosition+add;


            if(arrayOfMLBs.length<add){
              // console.log(`Huyaa`)
                let lastPositionInArray = arrayOfMLBs.length-1;
                let arrayToGet = arrayOfMLBs.slice(0,lastPositionInArray);
                let stringifiedArrayToGet = arrayToGet.toString();
                // console.log(`Array to get: ${arrayToGet}`)
                // console.log(`currentStartPosition: ${currentStartPosition}`);
                // console.log(`currentStopPosition: ${currentStopPosition}`);
                // mercadoLivreRequests.saveNewOffers(adjustedArray)
                //     .catch((e)=>{console.log(e)})
                try {
                  let response = await axios.get(`https://api.mercadolibre.com/items`,{
                      headers: {
                          'Content-Type': 'application/json',
                          "Authorization": `Bearer ${meliAccessToken}`
                      },
                      params: {
                          ids: stringifiedArrayToGet
                      }
                  })
                  // console.log(`Current offset: ${offset} | Response has ${result.data.results.length} offers`);
                  // console.log(`Just got ${response.data.length} offers in ML`)
                  // return response.data;
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
                // console.log(`Array to get: ${arrayToGet}`)
                // console.log(`currentStartPosition: ${currentStartPosition}`);
                // console.log(`currentStopPosition: ${currentStopPosition}`);    
                try {
                  let response = await axios.get(`https://api.mercadolibre.com/items`,{
                      headers: {
                          'Content-Type': 'application/json',
                          "Authorization": `Bearer ${meliAccessToken}`
                      },
                      params: {
                          ids: stringifiedArrayToGet
                      }
                  })
                  // console.log(`Current offset: ${offset} | Response has ${result.data.results.length} offers`);
                  // console.log(`Just got ${response.data.length} offers in ML`)                  // return response.data;
                  // console.log(response.data);
                  for(let meliOffer in response.data){
                    myOffers.push(response.data[meliOffer].body); 
                  }
                  
              }catch(e){
                return e  
                // throw new AppError(`Error getting data from Meli `, 500)
              }  
            }
            currentStartPosition+=add;
            currentStopPosition+=add;
        }
      /////////
      return myOffers;
    }

    async saveBatchDailyData(batchOfDailyData: Array<IDatapointDTO>){
      const intelligenceSuiteRequests = new IntelligenceSuiteRequests();
      try {
        return intelligenceSuiteRequests.saveBatchDailyDataRequest(batchOfDailyData);
      }catch(e){
        console.log(e)
      }
      return
    }


}

export { MeliServices, IMeliOffer }