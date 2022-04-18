import { myUrls } from '../../shared/urls.ts';
import axios from 'axios';

async function listMeliCodeAndToken(){
    return axios.get(`${myUrls.appBaseUrl}/meliAuthentication/list-auth-info`)
}

async function getNewRefreshToken(){
    // const authInfo = await listMeliCodeAndToken();
    // const code = authInfo.data.meliAuthCode;
    
    // var options = {
    //     method: 'POST',
    //     url: `${myUrls.meliOAuthUrl}`,
    //     headers: {'Content-Type': 'application/json'},
    //     data: {
    //       grant_type: 'refresh_token',
    //       client_id: '2076599210990714',
    //       client_secret: 'nrVrt6dzYjTGFibMhJA5CqrFbrEpyoRH',
    //       refresh_token: 'TG-625c33b542bac7001b6865b5-473621462', //TG-625c328bed9fa8001ba19dd3-473621462
    //     }
    //   };
      

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


interface IPaging {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
}

//Return all existing offers in given channel
async function getOffersInMeli(channelSellerID){
    const meliAccessToken = await getNewRefreshToken(); // Trocar por get no refresh token na API
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
      while(currentOffset<150){     //!!!!!!!!!!!!!!!!!!!!!!!!!!!! alterar, deixei o cap baixo para rodar rapido os testes ||  while(currentOffset<paging.total){
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

//Cria novas ofertas que ainda não existem na base do canal
async function saveNewMeliOffers(){

}

//Atualiza campos de ofertas existentes no canal
async function updateMeliOffers(){ 

}


export { 
    listMeliCodeAndToken, 
    getNewRefreshToken, 
    getOffersInMeli, 
    saveNewMeliOffers,
    updateMeliOffers
}