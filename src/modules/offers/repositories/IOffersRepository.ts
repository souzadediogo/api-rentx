import { Offer } from "../model/Offer";

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
    findByOfferID(offerID: string): Offer;
    list(): Offer[];
    create({offerID, sellerID, skuID, salesChannel}: ICreateOffersDTO);
};

export { IOffersRepository,  ICreateOffersDTO }