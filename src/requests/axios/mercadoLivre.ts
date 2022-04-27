import { AppError } from '@errors/AppError';
import { ICreateOffersDTO } from '@modules/offers/repositories/IOffersRepository';
import { myUrls } from '@shared/urls';
import { IMeliOffer } from '@services/meliServices/meliServices'

import axios from 'axios';

class MercadoLivreRequests {

    async listMeliCodeAndToken(){
        return axios.get('http://localhost:3333/meliAuthentication/list-auth-info')
      }

    async listMeliAccessToken(){
      const authInfo = await this.listMeliCodeAndToken(); // Trocar por get no refresh token na API
      if(!authInfo){
        throw new AppError("authInfo didn't return", 500)
      }
      var meliAccessToken = authInfo.data.meliToken;
      return meliAccessToken
    }      

    async searchSellerResultsByChannelSellerID(meliToken, channelSellerID){
        try {
            const results = await axios.get(`${myUrls.meliBaseUrl}/MLB/search?seller_id=${channelSellerID}`, {
            headers: {
                "Authorization": `Bearer ${meliToken}`
                }
            })
            return results
        }catch(e){
            throw new AppError("error", )
        }
    }

    async searchSellerOffers(channelSellerID, offset){
        let meliAccessToken = await this.listMeliAccessToken();
        // console.log(`Searching seller ${channelSellerID} and offset ${offset}`)
        // console.log(`Got it,  meliAccessToekn is ${meliAccessToken}`);
        
        // var options = {
        //     method: 'GET',
        //     url: `${myUrls.meliBaseUrl}/MLB/search?seller_id=${channelSellerID}&offset=${offset}&limit=50`,
        //     headers: {
        //         'Content-Type': 'application/json',
        //         "Authorization": `Bearer ${meliAccessToken}`
        //     }
        //   };
        try {
            let result = await axios.get(`${myUrls.meliBaseUrl}/MLB/search?seller_id=${channelSellerID}&offset=${offset}&limit=50`,{
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${meliAccessToken}`
                }
            })
            // console.log(`Current offset: ${offset} | Response has ${result.data.results.length} offers`);
            return result.data.results;
        }catch(e){
            throw new AppError(`Error fetching offers from ChannelSellerID ${channelSellerID} and offset ${offset} in Mercado Livre`, 500)
        }
        
        // .then((response) => {
        //     // console.log(response.data)
        //     console.log(response.data)
        //     return response.data;
        // });
        
        
        // axios.request(options).then(function (response) {     
        //     console.log(`Hey`)
        //     return response
        // }).catch(function (error) {
        //   console.error(error);
        // }); 

    }

    async saveNewOffers(arrayOfNewOffers: ICreateOffersDTO[]){
        try {
            await axios.post(`${myUrls.appBaseUrl}/offers`,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDU2MTQ1MDIsImV4cCI6MTY0NTcwMDkwMiwic3ViIjoiMTc1YmNhNzYtMzE1Yy00Y2I2LTk1MTktY2ExMDNkM2JiYzNjIn0.8Qo5zYZabKFYsAmK5T2-6N-AXOYZd43P5gnUXfi2abc'
                },
                data: {items: arrayOfNewOffers}
            })
            // console.log(`Current offset: ${offset} | Response has ${result.data.results.length} offers`);
            return
        }
        catch(e){
            return e
            // throw new AppError(`Error saving new batch of offers`, 500)
        }
    }
     
    async getMultipleOffersByMLB(arrayOfMLBs: Array<string>):Promise<IMeliOffer[]>{
        let meliAccessToken = await this.listMeliAccessToken();

        try {
            let response = await axios.get(`https://api.mercadolibre.com/items`,{
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${meliAccessToken}`
                },
                params: {
                    ids: arrayOfMLBs
                }
            })
            // console.log(`Current offset: ${offset} | Response has ${result.data.results.length} offers`);
            console.log(response.data)
            return response.data;
        }catch(e){
            throw new AppError(`Error fetching offers from ChannelSellerID ${channelSellerID} and offset ${offset} in Mercado Livre`, 500)
        }    
    }


} //End of class

export { MercadoLivreRequests }