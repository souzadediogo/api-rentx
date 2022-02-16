import { Offer } from '../model/Offer'
import { IOffersRepository, ICreateOffersDTO } from '../repositories/IOffersRepository';
//DTO -> Data 




class OffersRepository implements IOffersRepository {
    private offers: Offer[];

    constructor() {
        this.offers = [];
    };

    create({offerID, sellerID, skuID, salesChannel}: ICreateOffersDTO): void {
        const offer = new Offer();
        Object.assign(offer, {
            offerID, 
            sellerID, 
            skuID, 
            salesChannel, 
            created_at: new Date(),
            updated_at: new Date()
        });
    
        this.offers.push(offer);
    }

    list(): Offer[] {
        return this.offers;
    };

    findByOfferID(offerID: string): Offer {
        const offer = this.offers.find(offer => offer.offerID === offerID);
        return offer;
    };
};

export { OffersRepository }