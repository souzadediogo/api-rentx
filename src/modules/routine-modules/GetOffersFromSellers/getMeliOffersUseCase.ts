import { OfferServices } from '../../../services/offerServices/offerServices';
import { Offer } from '@modules/offers/entities/Offer'

const offerServices = new OfferServices();

class GetMeliOffersUseCase {
    
    async getMeliSalesChannels(sellerUUID, channelName){
        let channels = await offerServices.getSalesChannels(sellerUUID, channelName);
        return channels;
    }

    async searchOffers(sellerUUID, channelSellerID){
        let offers = await offerServices.getOffersInMeli(channelSellerID)
        return {sellerUUID , offers}
    }

    async saveNewOffersFromSeller(sellerUUID, offers: Offer[]): Promise<void>{
        //Filter only offers not in database

        let allOfferIDs = '';
        let newOffers = offers.filter(offer => offer.offerID)

        let saveNewOffers = await offerServices.saveNewMeliOffers(newOffers)
    }
    
}

export { GetMeliOffersUseCase }

 