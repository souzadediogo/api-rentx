import { Datapoint } from "../entities/Datapoint";

interface IDatapointDTO {
    id?: string;
    offerID: string;
    price: number; 
    basePrice: number;
    originalPrice: number;
    availableQty: number;
    soldQty: number;
}

interface IDatapointsRepository {
    create({
        offerID,
        price, 
        basePrice,
        originalPrice,
        availableQty,
        soldQty
    }: IDatapointDTO): Promise<void>;
    findByID(id: string): Promise<Datapoint>;
    listByOfferIdAndDateRange(offerID: string): Promise<Datapoint[]>; //, dateRange: Date[]
};

export { IDatapointsRepository,  IDatapointDTO }

// id?,
// offerID,
// price, 
// basePrice,
// originalPrice,
// availableQty,
// soldQty
