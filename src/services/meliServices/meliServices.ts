import axios from 'axios';
import { myUrls } from '../../shared/urls.ts';
import { IRequestOffer } from '@modules/offers/useCases/createOffer/CreateOfferUseCase'
import { MercadoLivreRequests } from '@requests/axios/mercadoLivre'

interface IMeliOffer {
  id: string;                                //offerID
  title: string;                             //offerTitle
  permalink: string;                         //offerUrl
  buying_mode: string;                       //status
  category_id: string;                       //categoryID
  catalogue_listing: boolean;
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
    const mercadoLivreRequests = new MercadoLivreRequests();
  }
    async listMeliCodeAndToken(){
      console.log(`Retrieving token`)
      var options = {method: 'GET', url: 'http://localhost:3333/meliAuthentication/list-auth-info'};

      axios.request(options).then(function (response) {
        console.log(`Inside ListMeliCode`)
        console.log(response.data);
        return response.data

      }).catch(function (error) {
        console.error(error);
        return error

      });
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

    //Return all existing offers in given channel
    async getOffersInMeli(channelSellerID){
      const meliAccessToken = 'APP_USR-2076599210990714-042615-3ea92996368145ac2c0e57b140875beb-473621462';//await this.listMeliCodeAndToken(); // Trocar por get no refresh token na API

      const sellerOffers = [];

      //Buscar resultados para ter paginação

      const results = await axios.get(`${myUrls.meliBaseUrl}/MLB/search?seller_id=${channelSellerID}`, {
        headers: {
            "Authorization": `Bearer ${meliAccessToken}`
        }
      })
      console.log(`1`)

      //!! const results = await this.mercadoLivreRequests.searchSellerResultsByChannelSellerID(channelSellerID);
      const paging: IPaging = results.data.paging;
        
      console.log(`2`)
      console.log(paging)
      let currentOffset = 0;
      
      if(paging.total>0){
        while(currentOffset<2){    //!! paging.total
          console.log(`Current offset = ${currentOffset}/${paging.total}`);

          
          var options = {
              method: 'GET',
              url: `${myUrls.meliBaseUrl}/MLB/search?seller_id=${channelSellerID}&offset=${currentOffset}&limit=50`,
              headers: {
                  'Content-Type': 'application/json',
                  "Authorization": `Bearer ${meliAccessToken}`
              }
            };
            let res = await axios.request(options).then(function (response) {
                  for(let offer in response.data.results){
                      if(response.data.results[offer]){
                          sellerOffers.push(response.data.results[offer])
                      }
                  }              
            }).catch(function (error) {
              // console.error(error);
            }); 

          currentOffset+=50
        }
      }

      return sellerOffers;
    }

    async mapMeliOfferArrayToInterface(channelSellerID, sellerUUID, offerArray:Array<IMeliOffer>):Array<IRequestOffer>{

      return offerArray.map((meliOffer)=>{
          return {
            seller: {id: `${sellerUUID}`},
            offerTitle: meliOffer.title,
            offerSubTitle: "",
            status: meliOffer.buying_mode,
            offerUrl: meliOffer.permalink,
            categoryID: meliOffer?.category_id,
            offerID: meliOffer.id,
            salesChannel: channelSellerID,
            condition: meliOffer?.condition,
            free_shipping: meliOffer.shipping?.free_shipping,
            catalog_listing: meliOffer?.catalogue_listing,
            catalog_product_id: meliOffer?.catalog_product_id,
            listing_type_id: meliOffer?.listing_type_id,
          }
        })
    };


}

export { MeliServices }