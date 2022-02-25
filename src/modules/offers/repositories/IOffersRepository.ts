import { Offer } from "../entities/Offer";

interface ICreateOffersDTO {
    id?: string;
    offerTitle: string;
    offerSubTitle: string;
    status: string;
    categoryID: string;
    offerID: string;
    sellerID: string; 
    skuID: string;
    salesChannel: string;
    offer_created_date?: Date,
    offer_last_updated_date?: Date,
    created_at?: Date;
    updated_at?: Date;
}

interface IOffersRepository {
    findByOfferID(offerID: string): Promise<Offer>;
    list(): Promise<Offer[]>;
    create({offerTitle, offerSubTitle, status, categoryID, offerID, sellerID, skuID, salesChannel}: ICreateOffersDTO): Promise<void>;
};

export { IOffersRepository,  ICreateOffersDTO }

