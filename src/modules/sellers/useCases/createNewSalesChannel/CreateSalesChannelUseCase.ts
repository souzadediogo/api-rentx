import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { ISalesChannelsRepository } from "@modules/sellers/repositories/ISalesChannelsRepository";
import { SalesChannel } from "@modules/sellers/entities/SalesChannels";


interface ISalesChannelsDTO {
    id?: string;
    seller;
    channelName: string;        //name of sales channel, like "mercado-livre", "americanas.com" etc...
    sellerNameInChannel: string;
    channelSellerID: string;
    channelUrl: string;
}

@injectable()
class CreateSalesChannelUseCase {
    constructor(
        @inject("SalesChannelsRepository")
        private salesChannelsRepository: ISalesChannelsRepository) {}
    
    async execute({seller, channelName, sellerNameInChannel, channelSellerID,channelUrl}: ISalesChannelsDTO): Promise<void> {
       // const salesChannelAlreadyExists = await this.salesChannelsRepository.findByID(seller['id']);

       // if(!salesChannelAlreadyExists) {
            await this.salesChannelsRepository.create({
                seller,
                channelName, 
                sellerNameInChannel, 
                channelSellerID, 
                channelUrl,
                });
      //  } else {
      //      throw new AppError("Seller already exists!", 401);
      //  }
    }
}

export { CreateSalesChannelUseCase }


// async execute({offerID, sellerID, skuID, salesChannel}: IRequest): Promise<void> {
//     const offerAlreadyExists = await this.offersRepository.findByOfferID(offerID);

//     if(!offerAlreadyExists){
//         await this.offersRepository.create({offerID, sellerID, skuID, salesChannel});
//     } else {
//         throw new AppError("Offer already exists!", 401)
//     };
// }