import { Offer } from "../entities/Offer";
import { IItems } from "@modules/offers/useCases/createOffer/CreateOfferUseCase"

interface ICreateOffersDTO {
    id?: string;
    seller: {id: string};
    offerTitle: string;
    offerSubTitle: string;
    offerUrl: string;
    status: string;
    categoryID: string;
    offerID: string;
    sellerID: string; 
    skuID?: string;
    salesChannel: string;
    condition: string;
    free_shipping: boolean;
    catalog_listing: boolean;
    catalog_product_id: string;
    listing_type_id: string;
    offer_created_date?: Date,
    offer_last_updated_date?: Date,
    created_at?: Date;
    updated_at?: Date;
    brandInChannel: string;
    modelInChannel: string;
}

interface IOfferIDsArray {
    items: Array<string>
}


interface IOfferIDandUUIDTuple {
    offerID: {                 //É o próprio offerID
        offerID: string,
        uuid: string,
        }
}

interface IOfferIDsTupleArray {
    items: Array<IOfferIDandUUIDTuple>
}

interface IOffersRepository {
    findByOfferID(offerID: string): Promise<Offer>;
    list(): Promise<Offer[]>;
    create({
        offerTitle, 
        offerSubTitle, 
        offerUrl, 
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
    }: ICreateOffersDTO): Promise<void>; //ICreateOffersDTO
    createBatch(items: IItems): Promise<void>; 
    updateByOfferId({      
        id,
        offerTitle, 
        offerSubTitle, 
        offerUrl, 
        categoryID, 
        offerID, 
        sellerID, 
        skuID, 
        alesChannel, 
        condition, 
        free_shipping, 
        catalog_listing, 
        catalog_product_id,
        listing_type_id
    }: ICreateOffersDTO): Promise<void>;
    listOffersBySellerUUID(sellerUUID): Promise<Offer[]>;
    listOfferByOfferID(offerID): Promise<Offer>;
    listUUIDsfromOfferIDs(offerIDsArray): Promise<IOfferIDsTupleArray>;
};

export { IOffersRepository,  ICreateOffersDTO, IOfferIDsArray, IOfferIDandUUIDTuple }

