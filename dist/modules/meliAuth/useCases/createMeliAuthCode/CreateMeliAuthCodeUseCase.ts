import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { IMeliAuthCodeRepository } from "@modules/meliAuth/repositories/IMeliAuthCodeRepository";

// import { Seller } from "@modules/sellers/entities/Seller";

interface IRequest {
    meliAuthCode: string; 

};

@injectable()
class CreateMeliAuthCodeUseCase {
    constructor(
        @inject("MeliAuthCodeRepository")
        private meliAuthCodeRepository: IMeliAuthCodeRepository) {}
    
    async execute({meliAuthCode}: IRequest): Promise<void> {
        await this.meliAuthCodeRepository.createOrUpdateMeliAuthCode({meliAuthCode});
    }
}

export { CreateMeliAuthCodeUseCase }


// async execute({offerID, sellerID, skuID, salesChannel}: IRequest): Promise<void> {
//     const offerAlreadyExists = await this.offersRepository.findByOfferID(offerID);

//     if(!offerAlreadyExists){
//         await this.offersRepository.create({offerID, sellerID, skuID, salesChannel});
//     } else {
//         throw new AppError("Offer already exists!", 401)
//     };
// }