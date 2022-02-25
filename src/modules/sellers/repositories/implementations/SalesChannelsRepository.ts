import { SalesChannel } from '../../entities/SalesChannels';
import { getRepository, Repository } from 'typeorm';
import { ISalesChannelsRepository, ISalesChannelsDTO } from '../ISalesChannelsRepository';
//DTO -> Data 

class SalesChannelsRepository implements ISalesChannelsRepository {

    private repository: Repository<SalesChannel>;

    // private static INSTANCE: OffersRepository;

    constructor() {
        this.repository = getRepository(SalesChannel);
    }

    async create({
           seller, 
            channelName, 
            sellerNameInChannel, 
            channelSellerID, 
            channelUrl
        }: ISalesChannelsDTO): Promise<void> {
        
        const salesChannel = this.repository.create({
            seller,
            channelName, 
            sellerNameInChannel, 
            channelSellerID, 
            channelUrl
        });
        await this.repository.save(salesChannel);
    }

    async list(): Promise<SalesChannel[]> {
        const salesChannels = await this.repository.find();
        return salesChannels;
    };

    async findByID(sellerUUID: string): Promise<SalesChannel[]> {
        console.log(`Seller sellerUUID:`, sellerUUID)
        const id = sellerUUID;
        const salesChannels = await this.repository.find(id);
        return salesChannels;
    };

};

export { SalesChannelsRepository }