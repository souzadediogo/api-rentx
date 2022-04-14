// import { SalesChannel } from "../entities/SalesChannels";
// import { Seller } from "../entities/Seller";


interface IMeliAuthCodeDTO {
    id?: string;
    meliAuthCode?: string; 
};


interface IMeliAuthCodeRepository {
    createOrUpdateMeliAuthCode({meliAuthCode}: IMeliAuthCodeDTO): Promise<void>;
    // list(): Promise<Seller[]>;
    // findBySellerID(sellerID: string): Promise<Seller[]>;
    // listSellerSalesChannels(sellerID: string): Promise<SalesChannel[]>;
    // listSellerSalesChannelsByChannelName(sellerID: string, channelName: string): Promise<SalesChannel[]>;
};

export { IMeliAuthCodeRepository, IMeliAuthCodeDTO }