import { SalesChannel } from "../entities/SalesChannels";
import { Seller } from "../entities/Seller";

interface ISalesChannelsDTO {
    id?: string;
    seller: string;
    channelName: string;        //name of sales channel, like "mercado-livre", "americanas.com" etc...
    sellerNameInChannel: string;
    channelSellerID: string;
    channelUrl: string;
}

interface ISalesChannelsRepository {
    create({seller, channelName, sellerNameInChannel, channelSellerID, channelUrl}: ISalesChannelsDTO): Promise<void>;
    list(): Promise<SalesChannel[]>;
    findByID(sellerUniqueID: string): Promise<SalesChannel[]>;
};

export { ISalesChannelsRepository,  ISalesChannelsDTO }



