import { Offer } from "../../entities/Offer";
import { IOffersRepository } from "../../repositories/IOffersRepository";


class ListOffersUseCase {
    constructor(private offersRepository: IOffersRepository) {}
    
    execute(): Promise<Offer[]> {
        const offers = this.offersRepository.list();
        return offers;
    }
};

export { ListOffersUseCase };