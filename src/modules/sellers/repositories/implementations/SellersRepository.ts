import { Seller } from '../../entities/Seller';
import { ISellersRepository, ICreateSellersDTO } from '../ISellersRepository';
import { getRepository, Repository } from 'typeorm';
//DTO -> Data 

class SellersRepository implements ISellersRepository {

    private repository: Repository<Seller>;

    // private static INSTANCE: OffersRepository;

    constructor() {
        this.repository = getRepository(Seller);
    }

    async create({name, sellerID, cnpj, salesChannels}: ICreateSellersDTO): Promise<void> {
        const seller = this.repository.create({
            name, 
            sellerID, 
            cnpj, 
            salesChannels, 
        });
        await this.repository.save(seller);
    }

    async list(): Promise<Seller[]> {
        const sellers = await this.repository.find();
        return sellers;
    };

    async findBySellerID(sellerID: string): Promise<Seller> {
        const seller = await this.repository.findOne({ sellerID });
        return seller;
    };
};

export { SellersRepository }