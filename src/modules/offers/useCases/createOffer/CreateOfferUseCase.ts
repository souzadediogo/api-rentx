import { IOffersRepository } from '../../repositories/IOffersRepository';

interface IRequest {
    offerID: string; 
    sellerID: string; 
    skuID: string; 
    salesChannel: string;
};



class CreateOfferUseCase {
    constructor(private offersRepository: IOffersRepository) {}
    
    execute({offerID, sellerID, skuID, salesChannel}: IRequest): void {
        const offerAlreadyExists = this.offersRepository.findByOfferID(offerID);

        if(!offerAlreadyExists){
            this.offersRepository.create({offerID, sellerID, skuID, salesChannel});
        } else {
            throw new Error("Category already exists!")
        };
    }
}

export { CreateOfferUseCase }