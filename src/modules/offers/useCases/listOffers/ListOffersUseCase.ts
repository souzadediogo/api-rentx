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



////////

// import { inject, injectable } from "tsyringe";
// import { IOffersRepository } from '../../repositories/IOffersRepository';

// interface IRequest {
//     offerID: string; 
//     sellerID: string; 
//     skuID: string; 
//     salesChannel: string;
// };


// @injectable()
// class CreateOfferUseCase {
//     constructor(
//         @inject("OffersRepository")
//         private offersRepository: IOffersRepository) {}
    
//     async execute({offerID, sellerID, skuID, salesChannel}: IRequest): Promise<void> {
//         const offerAlreadyExists = await this.offersRepository.findByOfferID(offerID);

//         if(!offerAlreadyExists){
//             await this.offersRepository.create({offerID, sellerID, skuID, salesChannel});
//         } else {
//             throw new Error("Category already exists!")
//         };
//     }
// }

// export { CreateOfferUseCase }