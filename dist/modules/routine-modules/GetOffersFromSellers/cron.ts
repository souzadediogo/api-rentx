import { GetMeliOffers } from './mercadoLivre/--getMeliOffers'
import { GetOffers } from './getMeliOffersUseCase'

// async function runAll(){
//     const all = await GetMeliOffers.getAllChannels();
//     console.log(all[0]['channelSellerID'])
// }

// runAll();
const getOffers = new GetOffers();

getOffers.getMeliSalesChannels('na','meli');
//sellerUUID, channelName