import { Offer } from "../../entities/Offer";
import { IOffersRepository } from "../../repositories/IOffersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListOffersUseCase {
    constructor(
        @inject("OffersRepository")
        private offersRepository: IOffersRepository) {}
    
    async execute(sellerUUID, offerID): Promise<Offer[]> {
    //   console.log(`USECASE: SellerUUID: ${sellerUUID}`);
    //   console.log(`USECASE: offerID: ${offerID}`);

        if(sellerUUID){
            // console.log(`Case SellerUUID`);
            return await this.offersRepository.listOffersBySellerUUID(sellerUUID)
        
        } else if (offerID) {
            // console.log(`Case OfferID`);
             let offer = await this.offersRepository.listOfferByOfferID(offerID);
             return [offer];
        }else {
            // console.log(`Case all`);
            return await this.offersRepository.list();

        }

    }
};

export { ListOffersUseCase };
