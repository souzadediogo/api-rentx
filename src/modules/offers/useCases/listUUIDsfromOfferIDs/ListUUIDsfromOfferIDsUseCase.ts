import { Offer } from '@modules/offers/infra/typeorm/entities/Offer';
import { IOfferIDandUUIDTuple, IOffersRepository } from "../../repositories/IOffersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListUUIDsfromOfferIDsUseCaseUseCase {
    constructor(
        @inject("OffersRepository")
        private offersRepository: IOffersRepository) {}
    
    async execute(offerIDsArray: Array<string>): Promise<IOfferIDandUUIDTuple> {

        if(offerIDsArray) {
             let offersTouple = await this.offersRepository.listUUIDsfromOfferIDs(offerIDsArray);
             return offersTouple;
        }else {
            return
        }

    }
};

export { ListUUIDsfromOfferIDsUseCaseUseCase };


