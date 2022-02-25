import { SalesChannel } from "../entities/SalesChannels";
import { Seller } from "../entities/Seller";


interface ISellersDTO {
    id?: string;
    name?: string; 
    sellerID: string;
    cnpj?: string;
    created_at: Date;
    updated_at?: Date;
};


interface ISellersRepository {
    create({name, sellerID, cnpj}: ISellersDTO): Promise<void>;
    list(): Promise<Seller[]>;
    findBySellerID(sellerID: string): Promise<Seller[]>;
    // listSellerSalesChannels(sellerID: string): Promise<SalesChannel[]>;
    // listSellerSalesChannelsByChannelName(sellerID: string, channelName: string): Promise<SalesChannel[]>;
};

export { ISellersRepository, ISellersDTO }