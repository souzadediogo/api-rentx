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
        let seller = null;
        let channel = null;
        sellerUUID !== "" ? seller = 'ok' : seller = 'not-ok';
        channelName !== "" ? channel = 'ok' : channel = 'not-ok';
        let mySwitch = `${seller}-${channel}`
        
        switch(mySwitch){
            case 'not-ok-not-ok':
                return await this.salesChannelsRepository.listAllSalesChannels();
                break;
            case 'ok-not-ok':
                return await this.salesChannelsRepository.listSellerSalesChannels(sellerUUID);
                break;
            case 'ok-ok':
                return await this.salesChannelsRepository.listSellerSalesChannelsByChannelName(sellerUUID, channelName);    
                break;                        
        }


        // if(sellerUUID !== false && sellerUUID !== "" && channelName==="" || channelName === false) {
        //     console.log(`Case: Channel name = ""`);
        //     return await this.salesChannelsRepository.listSellerSalesChannels(sellerUUID);
        // } else if(sellerUUID !== null && sellerUUID !== "" && channelName!=="" || channelName!==null ||channelName!== undefined) {
        //     console.log(`Case: Channel name <> ""`);
        //     return await this.salesChannelsRepository.listSellerSalesChannelsByChannelName(sellerUUID, channelName);
        // } else {
        //     console.log(`Case: Channel name  and uuid missing`);

        //     return await this.salesChannelsRepository.listAllSalesChannelsByChannelName();
        // }
    }
};

export { ListSellerSalesChannelsUseCase };



// async execute({offerID, sellerID, skuID, salesChannel}: IRequest): Promise<void> {
//     const offerAlreadyExists = await this.offersRepository.findByOfferID(offerID);
