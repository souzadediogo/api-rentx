
import ConcurrencyManager from "axios-concurrency";
import axios from "axios";


let apiBaseUrl = axios.create({
baseURL: "http://localhost:3333"
});
    


const myUrls = {
    appBaseUrl: 'http://localhost:3333',
    meliBaseUrl: 'https://api.mercadolibre.com/sites/',
    meliOAuthUrl: 'https://api.mercadolibre.com/oauth/token',
    meliRedirectUri: 'https://localhost:3000/'
}

export { myUrls, apiBaseUrl }