import { Seller } from "../../entities/Seller";
import { ISalesChannelsRepository } from "../../repositories/ISalesChannelsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    sellerUUID: string; 
    channelName: string;
}

@injectable()
class ListSellerSalesChannelsUseCase {
    constructor(
        @inject("SalesChannelsRepository")
        private salesChannelsRepository: ISalesChannelsRepository) {}
    
    async execute({sellerUUID, channelName}: IRequest) {  //ID is unique key from seller
        
        
        if(channelName==="") {
            console.log(`Case: Channel name = ""`);
            return await this.salesChannelsRepository.listSellerSalesChannels(sellerUUID);
        } else {
            console.log(`Case: Channel name <> ""`);
            return await this.salesChannelsRepository.listSellerSalesChannelsByChannelName(sellerUUID, channelName);
        }
    }
};

export { ListSellerSalesChannelsUseCase };



// async execute({offerID, sellerID, skuID, salesChannel}: IRequest): Promise<void> {
//     const offerAlreadyExists = await this.offersRepository.findByOfferID(offerID);
