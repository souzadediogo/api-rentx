import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { IOffersRepository } from '@modules/offers/repositories/IOffersRepository';

interface IRequest {
    id?: string;
    offerTitle: string;
    offerSubTitle: string;
    status: string;
    categoryID: string;
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
    
    async execute({
        offerTitle,
        offerSubTitle,
        status,
        categoryID,
        offerID,
        sellerID, 
        skuID,
        salesChannel
    }: IRequest): Promise<void> {
        const offerAlreadyExists = await this.offersRepository.findByOfferID(offerID);

        if(!offerAlreadyExists){
            await this.offersRepository.create({
                seller,
                offerTitle,
                offerSubTitle,
                status,
                categoryID,
                offerID,
                sellerID, 
                skuID,
                salesChannel,
                offer_created_date: new Date(),
                offer_last_updated_date: new Date(),
                created_at: new Date(),
                updated_at: new Date()
            });
        } else {
            throw new AppError("Offer already exists!", 401)
        };
    }
}

export { CreateOfferUseCase, IRequest }
