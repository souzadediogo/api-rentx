import { Timestamp } from "typeorm";
import { Datapoint } from "../entities/Datapoint";

interface IDatapointDTO {
    id?: string;
    offerid: string;
    price: number; 
    basePrice: number;
    originalPrice: number;
    availableQty: number;
    soldQty: number;
}
interface IDatapointsBatch {
    items: Array<IDatapointDTO>
}

interface IDatapointsRepository {
    create({
        offerid,
        price, 
        basePrice,
        originalPrice,
        availableQty,
        soldQty
    }: IDatapointDTO): Promise<void>;
    findByID(id: string): Promise<Datapoint>;
    listByOfferIdAndDateRange(offerid: string, beginDate: Timestamp, endDate: Timestamp): Promise<Datapoint[]>; //, dateRange: Date[]
};

export { IDatapointsRepository,  IDatapointDTO, IDatapointsBatch }

// id?,
// offerID,
// price, 
// basePrice,
// originalPrice,
// availableQty,
// soldQty
