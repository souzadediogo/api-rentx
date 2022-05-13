import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { IOffersRepository, IItems } from '@modules/offers/interfaces/IOffersRepository';


interface ICreateOfferResponse{
    status: number;
    message: string;
}

@injectable()
class CreateOffersInBatchOneByOneUseCase {
    constructor(
        @inject("OffersRepository")
        private offersRepository: IOffersRepository) {}
    
    async execute(items: IItems): Promise<ICreateOfferResponse> {
        
        const existingIDsError = [];
        for(let offer in items.items){
            let offerAlreadyExists = await this.offersRepository.listOfferByOfferID(items.items[offer].offerID);
            if(!offerAlreadyExists){
                // console.log(items.items[offer])
                await this.offersRepository.create(
                    items.items[offer]
                );    
            } else {
                existingIDsError.push(items.items[offer].offerID)
            };
        }
        return {
            status: 201,
            message: 
                `${items.items.length - existingIDsError.length} offers successfully created.` +
                `${existingIDsError.length} offers already existed and were not created: ${existingIDsError.toString()}`
        }
    }

}
export { CreateOffersInBatchOneByOneUseCase, IItems }
