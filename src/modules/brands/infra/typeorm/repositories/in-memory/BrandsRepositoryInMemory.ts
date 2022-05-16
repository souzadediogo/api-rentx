// import { 
//     ICreateOffersDTO, 
//     IOffersRepository 
// } from "../ISkusRepository";
// import { Offer } from "../../entities/Offer";


// class OffersRepositoryInMemory implements IOffersRepository {
    
//     offers: Offer[] = [];
    
//     async findByOfferID(offerID: string): Promise<Offer> {
//         const offer = this.offers.find((offer) => offer.offerID === offerID)
//         return offer;
//     }
//     async list(): Promise<Offer[]> {
//         const all = this.offers;
//         return all;
//     }
//     async create({ offerID, sellerID, skuID, salesChannel }: ICreateOffersDTO): Promise<void> {
//         const offer = new Offer();

//         Object.assign(offer,{
//             offerID,
//             sellerID, 
//             skuID,
//             salesChannel
//         });
//         this.offers.push(offer);
//     }
// }

// export { OffersRepositoryInMemory }