import { Offer } from "../../entities/Offer";
import { IOfferIDandUUIDTuple, IOffersRepository } from "../../repositories/IOffersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListUUIDsfromOfferIDsUseCaseUseCase {
    constructor(
        @inject("OffersRepository")
        private offersRepository: IOffersRepository) {}
    
    async execute(offerIDsArray: Array<string>): Promise<IOfferIDandUUIDTuple> {
    //   console.log(`USECASE: SellerUUID: ${sellerUUID}`);
    //   console.log(`USECASE: offerID: ${offerID}`);


        if(offerIDsArray) {
            // console.log(`Case OfferID`);
             let offersTouple = await this.offersRepository.listUUIDsfromOfferIDs(offerIDsArray);
             return offersTouple;
        }else {
            // console.log(`Case all`);
            //return await this.offersRepository.list();
            return
        }

    }
};

export { ListUUIDsfromOfferIDsUseCaseUseCase };


// interface IOfferIDsArray {
//     items: Array<string>
// }

// interface IOfferIDandUUIDTuple {
//     offerID: {                 //É o próprio offerID
//         offerID: string,
//         uuid: string,
//         }
// }



// items = [
//         "MLB10293921": {                 //É o próprio offerID
//                     offerID: string,
//                     uuid: string,
//                  },
//         "MLB10293921": {                 //É o próprio offerID
//                         offerID: string,
//                         uuid: string,
//                         },                 
// ]