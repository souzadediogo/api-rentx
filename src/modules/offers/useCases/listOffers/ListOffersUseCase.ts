import { Offer } from "@modules/offers/infra/typeorm/entities/Offer";
import { IOffersRepository } from "../../interfaces/IOffersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListOffersUseCase {
    constructor(
        @inject("OffersRepository")
        private offersRepository: IOffersRepository) {}
    
    async execute(sellerUUID, offerID: Array<string>): Promise<Offer[]> {
    //   console.log(`USECASE: SellerUUID: ${sellerUUID}`);
    //   console.log(`USECASE: offerID: ${offerID}`);

        if(sellerUUID){
            // console.log(`Case SellerUUID`);
            console.log(`Case all selleroffers`)
            return await this.offersRepository.listOffersBySellerUUID(sellerUUID)
        
        } else if (offerID && offerID.length > 0) {
            // console.log(`Case OfferID`);
            let offers = []
            console.log(`Case all offerIDs`)
            // console.log(`array`, offerID)
            for(let id of offerID){
                let thisOffer = await this.offersRepository.listOfferByOfferID(id);
                // console.log('thisOffer', thisOffer);
                // console.log('id', id)
                offers.push(thisOffer);
            }
            // console.log('offers', offers)
             return offers;
        }else {
            // console.log(`Case all`);
            console.log(`Case all offers`)
            return await this.offersRepository.list();

        }

    }
};

export { ListOffersUseCase };
