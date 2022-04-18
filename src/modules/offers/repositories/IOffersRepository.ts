import { Offer } from "../entities/Offer";

interface ICreateOffersDTO {
    id?: string;
    seller: string;
    offerTitle: string;
    offerSubTitle: string;
    offerUrl: string;
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
    offer_created_date?: Date,
    offer_last_updated_date?: Date,
    created_at?: Date;
    updated_at?: Date;
}


interface IOffersRepository {
    findByOfferID(offerID: string): Promise<Offer>;
    list(): Promise<Offer[]>;
    create({
        offerTitle, 
        offerSubTitle, 
        offerUrl, 
        status, 
        categoryID, 
        offerID, 
        sellerID, 
        skuID, 
        alesChannel, 
        condition, 
        free_shipping, 
        catalog_listing, 
        catalog_product_id,
        listing_type_id}: ICreateOffersDTO): Promise<void>;
    updateByOfferId({      
        id,
        offerTitle, 
        offerSubTitle, 
        offerUrl, 
        status, 
        categoryID, 
        offerID, 
        sellerID, 
        skuID, 
        alesChannel, 
        condition, 
        free_shipping, 
        catalog_listing, 
        catalog_product_id,
        listing_type_id}: ICreateOffersDTO): Promise<void>;
    listOffersBySellerUUID(sellerUUID): Promise<Offer[]>;
};

export { IOffersRepository,  ICreateOffersDTO }

