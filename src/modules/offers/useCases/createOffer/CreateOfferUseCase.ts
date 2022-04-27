import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { IOffersRepository } from '@modules/offers/repositories/IOffersRepository';
import { ICreateOffersDTO } from '@modules/offers/repositories/IOffersRepository'

interface IRequestOffer {
    id?: string;
    offerTitle: string;
    offerSubTitle: string;
    status: string;
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
        status,
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
        // const offerAlreadyExists = await this.offersRepository.findByOfferID(offerID);
        // console.log(`Use Case array:`);
        // console.log(items);
        // if(!offerAlreadyExists){
            await this.offersRepository.create(
                // items
                {
                seller,
                offerTitle,
                offerSubTitle,
                offerUrl,
                status,
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
        // } else {
        //     throw new AppError("Offer already exists!", 401)
        // };
    }
}

export { CreateOfferUseCase, IRequestOffer, IItems }
