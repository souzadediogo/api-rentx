import { getNewRefreshToken, getOffersInMeli }  from './meliServices';
import { OfferServices } from './../'

async function getOffersNow(){
    // const token = await getNewRefreshToken();
    // if(token){console.log(`ok, token: ${token}`)}else{console.log(`not ok, token ${token}`)}
    // getOffersInMeli('93768777').then(response =>{console.log(response)})


    //BUSCA TODOS CANAIS DO MELI
    OfferServices. ('NA', 'meli')
        //PARA CADA CANAL, BUSCA OFERTAS NO MELI

            // PARA CADA CANAL, MANDA SALVAR OFERTAS NO BANCO

}


getOffersNow();