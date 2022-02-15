import { OffersRepository } from '../repositories/offersRepository';

interface IRequest {
    offerID: string; 
    sellerID: string; 
    skuID: string; 
    salesChannel: string;
}

class CreateOfferService {
    constructor(private offersRepository: OffersRepository) {}
    
    execute({offerID, sellerID, skuID, salesChannel}: IRequest): void {
        const offerAlreadyExists = this.offersRepository.findByOfferID(offerID);

        if(!offerAlreadyExists){
            this.offersRepository.create({offerID, sellerID, skuID, salesChannel});
        } else {
            throw new Error("Category already exists!")
        };
    }
}

export { CreateOfferService }