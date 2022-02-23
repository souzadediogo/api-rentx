import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { ISellersRepository } from "@modules/sellers/repositories/ISellersRepository";
import { ISalesChannels } from "@modules/sellers/entities/Seller";
import { Seller } from "@modules/sellers/entities/Seller";

interface IRequest {
    name: string; 
    sellerID: string; 
    cnpj: string; 
    salesChannels: Array<ISalesChannels>;
};


@injectable()
class CreateSellerUseCase {
    constructor(
        @inject("SellersRepository")
        private sellersRepository: ISellersRepository) {}
    
    async execute({name, sellerID, cnpj, salesChannels}: IRequest): Promise<void> {
        const sellerAlreadyExists = await this.sellersRepository.findBySellerID(sellerID);

        if(!sellerAlreadyExists) {
            await this.sellersRepository.create({name, sellerID, cnpj, salesChannels});
        } else {
            throw new AppError("Seller already exists!", 401);
        }
    }
}

export { CreateSellerUseCase }


// async execute({offerID, sellerID, skuID, salesChannel}: IRequest): Promise<void> {
//     const offerAlreadyExists = await this.offersRepository.findByOfferID(offerID);

//     if(!offerAlreadyExists){
//         await this.offersRepository.create({offerID, sellerID, skuID, salesChannel});
//     } else {
//         throw new AppError("Offer already exists!", 401)
//     };
// }