import { Offer } from "../../model/Offer";
import { IOffersRepository } from "../../repositories/IOffersRepository";


class ListOffersUseCase {
    constructor(private offersRepository: IOffersRepository) {}
    
    execute(): Offer[] {
        const offers = this.offersRepository.list();
        return offers;
    }
};

export { ListOffersUseCase };