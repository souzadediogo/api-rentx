import { Seller } from '../../entities/Seller';
import { ISellersRepository, ISellersDTO } from '../ISellersRepository';
import { getRepository, Repository } from 'typeorm';
import { SalesChannel } from '@modules/sellers/entities/SalesChannels';
import { AppError } from '@errors/AppError';
//DTO -> Data 

class SellersRepository implements ISellersRepository {

    private repository: Repository<Seller>;

    // private static INSTANCE: OffersRepository;

    constructor() {
        this.repository = getRepository(Seller);
    }
    listSellerSalesChannels(sellerID: string): Promise<SalesChannel[]> {
        throw new Error('Method not implemented.');
    }
    listSellerSalesChannelsByChannelName(sellerID: string, channelName: string): Promise<SalesChannel[]> {
        throw new Error('Method not implemented.');
    }

    async create({name, sellerID, cnpj}: ISellersDTO): Promise<void> {
        
        const sellerIdAlreadyExists = await this.repository.findOne({sellerID});
        
        if(!sellerIdAlreadyExists) {
            const seller = this.repository.create({
                name, 
                sellerID, 
                cnpj,  
            });
            await this.repository.save(seller);
            return
        }
        throw new AppError("SellerID already exists!", 401);
    }

    async list(): Promise<Seller[]> {
        const sellers = await this.repository.find();
        return sellers;
    };

    async findBySellerID(sellerID: string): Promise<Seller[]> {
        const sellerAccounts = await this.repository.find({ sellerID });
        return sellerAccounts;
    };

    // REFATORAR AMBOS CHAMANDO SERVICO DO SALESCHANNELS
    

    // async listSellerSalesChannelsByChannelName(sellerID: string, channelName: string) {
    //     const seller = await this.repository.findOne({ sellerID });

    //     const channels = seller.salesChannels;
        
    //     const filteredChannels = channels.filter((channel)=> channel.channelName === channelName);
        
    //     return filteredChannels;
    // }
};

export { SellersRepository }