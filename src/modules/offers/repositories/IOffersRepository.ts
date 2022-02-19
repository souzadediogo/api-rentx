import { Offer } from "../entities/Offer";

interface ICreateOffersDTO {
    id?: string;
    offerID: string;
    sellerID: string; 
    skuID: string;
    salesChannel: string;
    created_at?: Date;
    updated_at?: Date;
}

interface IOffersRepository {
    findByOfferID(offerID: string): Promise<Offer>;
    list(): Promise<Offer[]>;
    create({offerID, sellerID, skuID, salesChannel}: ICreateOffersDTO): Promise<void>;
};

export { IOffersRepository,  ICreateOffersDTO }