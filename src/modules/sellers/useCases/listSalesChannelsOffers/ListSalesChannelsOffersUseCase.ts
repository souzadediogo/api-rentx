import { Seller } from "../../entities/Seller";
import { IOffersRepository } from "@modules/offers/interfaces/IOffersRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    salesChannelID: string; 
}

@injectable()
class ListSalesChannelsOffersUseCase {
    constructor(
        @inject("OffersRepository")
        private offersRepository: IOffersRepository) {}
    
    async execute({salesChannelID}: IRequest) {  
        return await this.offersRepository.listOffersBySalesChannelID(salesChannelID);
    }
};

export { ListSalesChannelsOffersUseCase };


