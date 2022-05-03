import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { IOffersRepository } from '@modules/offers/repositories/IOffersRepository';
import { ICreateOffersDTO } from '@modules/offers/repositories/IOffersRepository'

interface IRequestOffer {
    id?: string;
    offerTitle: string;
    offerSubTitle: string;
    categoryID: string;
    offerID: string;
    sellerID: string; 
    skuID?: string;
    salesChannel: string;
    condition: string;
    free_shipping: boolean;
    catalog_listing: boolean;
    catalog_product_id: string;
    listing_type_id: string;
};

@injectable()
class CreateOfferUseCase {
    constructor(
        @inject("OffersRepository")
        private offersRepository: IOffersRepository) {}
    
    async execute({
        // items
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
    }: ICreateOffersDTO): Promise<void> {
            await this.offersRepository.create(
                {
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
            }
            );
    }
}

export { CreateOfferUseCase, IRequestOffer, IItems }
