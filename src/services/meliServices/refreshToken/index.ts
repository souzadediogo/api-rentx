import { MeliServices } from '@services/meliServices/meliServices';
import { MercadoLivreRequests } from '@requests/axios/mercadoLivre';

async function refreshToken(){
    const mercadoLivreRequests = new MercadoLivreRequests();
    const meliServices = new MeliServices();
    const accessToken = await meliServices.retrieveRefreshToken()
    // console.log(`token: ${accessToken}`);
    const post = await mercadoLivreRequests.postMeliAccessTokenRequest(await accessToken);
    if(post.status = 201){
        return "success"
    }
}

refreshToken();

export { refreshToken }