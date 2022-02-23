import { Offer } from "../../entities/Offer";
import { IOffersRepository } from "../../repositories/IOffersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListOffersUseCase {
    constructor(
        @inject("OffersRepository")
        private offersRepository: IOffersRepository) {}
    
    async execute(): Promise<Offer[]> {
      
        const offers = await this.offersRepository.list();
  
        return offers;
    }
};

export { ListOffersUseCase };
