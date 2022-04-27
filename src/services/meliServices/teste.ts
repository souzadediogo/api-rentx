import { MercadoLivreRequests } from '@requests/axios/mercadoLivre';


const mercadoLivreRequests = new MercadoLivreRequests();

async function goGetIt(){
    function success(response){console.log(response)};
    function failure(err){console.log(err)};
    mercadoLivreRequests.searchSellerOffers(252405774, 0)
        // .then(success, failure)
        .then((offers)=>{
            console.log(offers.length)
        }).catch((e)=>{
            console.log(e)
        });
}

goGetIt();

