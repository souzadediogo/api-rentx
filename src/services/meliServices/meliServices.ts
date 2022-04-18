import axios from 'axios';
import { myUrls } from '../../shared/urls.ts';
import { IRequestOffer } from '@modules/offers/useCases/createOffer/CreateOfferUseCase'


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
  contructor(){}
    async listMeliCodeAndToken(){
        return axios.get(`${myUrls.appBaseUrl}/meliAuthentication/list-auth-info`)
    }

    async getNewRefreshToken(){
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
          });
          return res.data.access_token;
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
        const meliAccessToken = await this.getNewRefreshToken(); // Trocar por get no refresh token na API
        // console.log(`meliAccessToken is ${meliAccessToken}`)

        const sellerOffers = [];

        const results = await axios.get(`${myUrls.meliBaseUrl}/MLB/search?seller_id=${channelSellerID}`, {
            headers: {
                "Authorization": `Bearer ${meliAccessToken}`
            }
        })
        const paging: IPaging = results.data.paging;
        // console.log(paging) //results.data.paging

        let currentOffset = 0;
        if(paging.total>0){
          while(currentOffset<200){     //!!!!!!!!!!!!!!!!!!!!!!!!!!!! alterar, deixei o cap baixo para rodar rapido os testes ||  while(currentOffset<paging.total){
            // console.log(`Current offset = ${currentOffset}`);

            ///
            var options = {
                method: 'GET',
                url: `${myUrls.meliBaseUrl}/MLB/search?seller_id=${channelSellerID}&offset=${currentOffset}&limit=50`,
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${meliAccessToken}`
                }
              };
            //   console.log(options)
              let res = await axios.request(options).then(function (response) {
                //   console.log(response.data.results)
                    for(let offer in response.data.results){
                        if(response.data.results[offer]){
                            sellerOffers.push(response.data.results[offer])
                        }
                    }              
              }).catch(function (error) {
                console.error(error);
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