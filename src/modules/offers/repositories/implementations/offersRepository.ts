import { Offer } from '../../entities/Offer';
import { IOffersRepository, ICreateOffersDTO } from '../IOffersRepository';
import { getRepository, Repository } from 'typeorm';
//DTO -> Data 




class OffersRepository implements IOffersRepository {

    private repository: Repository<Offer>;

    // private static INSTANCE: OffersRepository;

    constructor() {
        this.repository = getRepository(Offer);
    }

    // public static getInstance(): OffersRepository {
    //     if(!OffersRepository.INSTANCE){
    //         OffersRepository.INSTANCE = new OffersRepository();
    //     }; 
    //     return OffersRepository.INSTANCE;
    // };

    async create({offerID, sellerID, skuID, salesChannel}: ICreateOffersDTO): Promise<void> {
        const offer = this.repository.create({
            offerID, 
            sellerID, 
            skuID, 
            salesChannel, 
        })
        await this.repository.save(offer);
    }

    async list(): Promise<Offer[]> {
        const offers = await this.repository.find();
        return offers;
    };

    async findByOfferID(offerID: string): Promise<Offer> {
        const offer = await this.repository.findOne({ offerID });
        return offer;
    };
};

export { OffersRepository }