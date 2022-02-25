import { Datapoint } from '../../entities/Datapoint';
import { IDatapointsRepository, IDatapointDTO } from '../IDatapointsRepository';
import { getRepository, Repository } from 'typeorm';


class DatapointsRepository implements IDatapointsRepository {

    private repository: Repository<Datapoint>;

    // private static INSTANCE: OffersRepository;

    constructor() {
        this.repository = getRepository(Datapoint);
    }
    async create({
        offerID,
        price, 
        basePrice,
        originalPrice,
        availableQty,
        soldQty
    }: IDatapointDTO): Promise<void> {
        const datapoint = this.repository.create({
            offerID,
            price, 
            basePrice,
            originalPrice,
            availableQty,
            soldQty
        })
        await this.repository.save(datapoint);
    }

    async findByID(id): Promise<Datapoint> {
        const datapoint = await this.repository.findOne(id);
        return datapoint;
    }   

    async listByOfferIdAndDateRange(offerID: string): Promise<Datapoint[]> { //, dateRange: Date[]
        const datapoints = await this.repository
            .createQueryBuilder("datapoints")
            .where("datapoints.offerID = offerID", {offerID: offerID})  // find({ offerID });
            .getMany();
            
        return datapoints;
    };
};

export { DatapointsRepository }