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
        
        const salesChannels = await this.repository.find({id});
        console.log(salesChannels)
        return salesChannels;
    };

    async listSellerSalesChannels(sellerUUID: string): Promise<SalesChannel[]> {
        const id = sellerUUID;
        //If seller empty, returns all, else returns seller offers'
            const sellerSalesChannels = await this.repository
                .find({sellerUUID: id})
            return sellerSalesChannels
    }                 

    async listSellerSalesChannelsByChannelName(sellerUUID: string, channelName: string): Promise<SalesChannel[]> {
        const sellerSalesChannels = await this.repository
        .find({ where: { sellerUUID: sellerUUID, channelName: channelName } });
                            // .find({
                            //         where:{
                            //             sellerUUID: sellerUUID, 
                            //             channelName: channelName
                            //         })
                            // .createQueryBuilder("salesChannels")
                            // .select("salesChannels")
                            // .where(`sellerUUID = :sellerUUID`, {sellerUUID: `${sellerUUID}`})
                            // .andWhere(`channelName = :channelName `, {channelName: `${channelName}`})                          
                                    // .andWhere(`created_at >= :begin `, {begin: `${beginDate}`})
                            // .getMany()
        return sellerSalesChannels;    
    }
    async listAllSalesChannelsByChannelName(channelName: string): Promise<SalesChannel[]> {
        const allSalesChannels = await this.repository
                            .find({channelName: channelName})
                            // .createQueryBuilder("sellers")
                            // .select("sellers")
                            // .andWhere(`channelName = :channelName `, {channelName: `${channelName}`})
                            // // .andWhere(`created_at >= :begin `, {begin: `${beginDate}`})
                            // .getMany()
        return allSalesChannels;    
    }  

    async listAllSalesChannels(): Promise<SalesChannel[]> {
            const allSalesChannels = await this.repository
                .find()
            return allSalesChannels
    }   
    
};

export { SalesChannelsRepository }