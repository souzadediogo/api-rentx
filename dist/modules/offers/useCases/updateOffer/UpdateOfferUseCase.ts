import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { IOffersRepository } from '@modules/offers/repositories/IOffersRepository';

interface IRequestOffer {
    id?: string;
    offerTitle: string;
    offerSubTitle: string;
    status: string;
    categoryID: string;
    offerID: string;
    sellerID: string; 
    skuID: string;
    salesChannel: string;
    condition: string;
    free_shipping: boolean;
    catalog_listing: boolean;
    catalog_product_id: string;
    listing_type_id: string;
};


@injectable()
class UpdateOfferUseCase {
    constructor(
        @inject("OffersRepository")
        private offersRepository: IOffersRepository) {}
    
    async execute({
        seller, //
        offerTitle,
        offerSubTitle,
        offerUrl,
        categoryID,
        offerID,
        sellerID, 
        skuID,
        salesChannel,
        condition,
        free_shipping,
        catalog_listing,
        catalog_product_id,
        listing_type_id,
      }: IRequestOffer): Promise<void> {
        const offerAlreadyExists = await this.offersRepository.findByOfferID(offerID);

        if(offerAlreadyExists){
            const offer = await this.offersRepository.findByOfferID(offerID);//Busca UUID da oferta        
            const id = offer.id;
            
            await this.offersRepository.updateByOfferId({
                id,
                seller,
                offerTitle,
                offerSubTitle,
                offerUrl,
                categoryID,
                offerID,
                sellerID, 
                skuID,
                salesChannel,
                condition,
                free_shipping,
                catalog_listing,
                catalog_product_id,
                listing_type_id,
                offer_created_date: new Date(),
                offer_last_updated_date: new Date(),
                created_at: new Date(),
                updated_at: new Date()
            });
        } else {
            throw new AppError("Could not update! Offer doesn't exist yet!", 401)
        };
    }
}

export { UpdateOfferUseCase, IRequest }
