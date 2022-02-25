import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { IOffersRepository } from '@modules/offers/repositories/IOffersRepository';

interface IRequest {
    offerID: string; 
    sellerID: string; 
    skuID: string; 
    salesChannel: string;
};


@injectable()
class CreateOfferUseCase {
    constructor(
        @inject("OffersRepository")
        private offersRepository: IOffersRepository) {}
    
    async execute({offerID, sellerID, skuID, salesChannel}: IRequest): Promise<void> {
        const offerAlreadyExists = await this.offersRepository.findByOfferID(offerID);

        if(!offerAlreadyExists){
            await this.offersRepository.create({
                offerID, 
                sellerID, 
                skuID, 
                salesChannel,
                created_at: new Date(),
                updated_at: new Date()
            });
        } else {
            throw new AppError("Offer already exists!", 401)
        };
    }
}

export { CreateOfferUseCase }