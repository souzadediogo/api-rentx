import { MeliServices } from '../meliServices';
import { MercadoLivreRequests } from '../../../requests/axios/mercadoLivre';

async function refreshToken(){
    const mercadoLivreRequests = new MercadoLivreRequests();
    const meliServices = new MeliServices();
    const accessToken = await meliServices.retrieveRefreshToken()
    const post = await mercadoLivreRequests.postMeliAccessTokenRequest(accessToken);
    // console.log(post)
}

refreshToken();

export { refreshToken }