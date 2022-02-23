import { Seller } from "../entities/Seller";
import { ISalesChannels } from "../entities/Seller"

interface ICreateSellersDTO {
    id?: string;
    name?: string;
    sellerID?: string; 
    cnpj?: string;
    salesChannels: Array<ISalesChannels>;
    created_at?: Date;
    updated_at?: Date;
}

interface ISellersRepository {
    findBySellerID(offerID: string): Promise<Seller>;
    list(): Promise<Seller[]>;
    create({name, sellerID, cnpj, salesChannels}: ICreateSellersDTO): Promise<void>;
};

export { ISellersRepository,  ICreateSellersDTO }



