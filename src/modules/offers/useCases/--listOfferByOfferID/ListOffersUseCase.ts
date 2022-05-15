import { Offer } from '@modules/offers/infra/typeorm/entities/Offer';
import { IOffersRepository } from "../../interfaces/IOffersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListOffersUseCase {
    constructor(
        @inject("OffersRepository")
        private offersRepository: IOffersRepository) {}
    
    async execute(sellerUUID): Promise<Offer[]> {
      
        if(sellerUUID){
            return await this.offersRepository.listOffersBySellerUUID(sellerUUID)
        } else {
            return await this.offersRepository.list();
        }

    }
};

export { ListOffersUseCase };
