import { Offer } from '@modules/offers/infra/typeorm/entities/Offer';
import { IOffersRepository, ICreateOffersDTO, IItems } from '@modules/offers/interfaces/IOffersRepository';
import { getRepository, Repository } from 'typeorm';
import { IOfferIDsTupleArray } from '@modules/offers/interfaces/IOffersRepository';

//DTO -> Data 




class OffersRepository implements IOffersRepository {

    private repository: Repository<Offer>;

    // private static INSTANCE: OffersRepository;

    constructor() {
        this.repository = getRepository(Offer);
    }

    async create(
            {
                seller,
                offerTitle, 
                offerSubTitle, 
                offerUrl,             
                status, 
                categoryID, 
                offerID, 
                sellerID, 
                skuID, 
                salesChannel,
                condition,
                free_shipping,
                catalog_listing,
                catalog_product_id,
                listing_type_id, 
                brandInChannel,
                modelInChannel            
             }
             : ICreateOffersDTO): Promise<void> { //ICreateOffersDTO
                
            const offer = this.repository.create(
                {
                    seller,
                    offerTitle, 
                    offerSubTitle, 
                    offerUrl,
                    status, 
                    categoryID, 
                    offerID, 
                    sellerID, 
                    skuID, 
                    salesChannel,
                    condition,
                    free_shipping,
                    catalog_listing,
                    catalog_product_id,
                    listing_type_id,
                    brandInChannel,
                    modelInChannel 
                }

            )
            // console.log("offer", offer)
            await this.repository.save(offer);
    }
    async createBatch(items: IItems): Promise<void> { 
        
        const offerBatch = this.repository.create(items)
        await this.repository.save(offerBatch);
    }
    async updateByOfferId({
        id,
        seller,
        offerTitle, 
        offerSubTitle, 
        offerUrl,
        status, 
        categoryID, 
        offerID, 
        sellerID, 
        skuID, 
        salesChannel,
        condition,
        free_shipping,
        catalog_listing,
        catalog_product_id,
        listing_type_id,
     }: ICreateOffersDTO): Promise<void> {
        
        const offer = this.repository.create({
            id,
            seller,
            offerTitle, 
            offerSubTitle, 
            offerUrl,
            status, 
            categoryID, 
            offerID, 
            sellerID, 
            skuID, 
            salesChannel,
            condition,
            free_shipping,
            catalog_listing,
            catalog_product_id,
            listing_type_id,
        })
            await this.repository.save(offer);
    }
    async list(): Promise<Offer[]> {
        const offers = await this.repository.find();
        return offers;
    };
    async listOfferByOfferID(offerID: string): Promise<Offer> {
        const offer = await this.repository
                                    .createQueryBuilder()
                                    .select("offers")
                                    .from(Offer, "offers")
                                    .where("offers.offerID = :offerID", { offerID: offerID })
                                    .getOne()            //findOne(offerID);
        
        return offer;
    };
    
    async listOffersBySkuUUID(skuUUID: string): Promise<Offer[]> {

        // console.log('skuID [repository]', skuUUID)
        const offers = await this.repository
                                    .createQueryBuilder()
                                    .select("offers")
                                    .from(Offer, "offers")
                                    .andWhere("offers.skuID = :skuID", { skuID: skuUUID })
                                    .getMany()            //findOne(offerID);
        
        return offers;
    };

    async listOffersBySellerUUID(sellerUUID: any): Promise<Offer[]> {
        const sellerOffers = await this.repository.find({ seller: sellerUUID });
        return sellerOffers;
    }
    
    async listOffersBySalesChannelID(salesChannelID: string): Promise<Offer[]> {
        const salesChannelIdOffers = await this.repository.find({ salesChannel: salesChannelID });
        return salesChannelIdOffers;
    }   

    async listUUIDsfromOfferIDs(offerIDsArray):Promise<IOfferIDsTupleArray>{
        
        let items = offerIDsArray.map(async (offer)=>{
            return {
                    offerID: offer,
                    uuid: await this.listOfferByOfferID(offer)
            }
        })
        return await items
    }
};

export { OffersRepository }
