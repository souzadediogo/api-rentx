import { Seller } from "../../entities/Seller";
import { ISellersRepository } from "../../repositories/ISellersRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    sellerUUID: string; 
    channelName: string;
}

@injectable()
class ListSellerSalesChannelsUseCase {
    constructor(
        @inject("SellersRepository")
        private sellersRepository: ISellersRepository) {}
    
    async execute({sellerUUID, channelName}: IRequest) {  //ID is unique key from seller
        
        
        if(channelName==="") {
            console.log(`Case: Channel name = ""`);
            return await this.sellersRepository.listSellerSalesChannels(sellerUUID);
        } else {
            console.log(`Case: Channel name <> ""`);
            return await this.sellersRepository.listSellerSalesChannelsByChannelName(sellerUUID, channelName);
        }
    }
};

export { ListSellerSalesChannelsUseCase };



// async execute({offerID, sellerID, skuID, salesChannel}: IRequest): Promise<void> {
//     const offerAlreadyExists = await this.offersRepository.findByOfferID(offerID);
