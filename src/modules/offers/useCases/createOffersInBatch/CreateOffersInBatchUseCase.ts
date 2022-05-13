import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { IOffersRepository } from '@modules/offers/interfaces/IOffersRepository';
import { ICreateOffersDTO } from '@modules/offers/interfaces/IOffersRepository'





@injectable()
class CreateOffersInBatchUseCase {
    constructor(
        @inject("OffersRepository")
        private offersRepository: IOffersRepository) {}
    
    async execute(items: IItems): Promise<void> {
        // const offerAlreadyExists = await this.offersRepository.findByOfferID(offerID);
        // console.log(`Use Case array:`);
        // console.log(items);
        // if(!offerAlreadyExists){
        await this.offersRepository.createBatch(
            items
        );
        // } else {
        //     throw new AppError("Offer already exists!", 401)
        // };
    }
}

export { CreateOffersInBatchUseCase }
