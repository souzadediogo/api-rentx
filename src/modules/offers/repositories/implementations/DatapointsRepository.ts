import { Datapoint } from '../../entities/Datapoint';
import { IDatapointsRepository, IDatapointDTO } from '../IDatapointsRepository';
import { Between, getRepository, LessThanOrEqual, MoreThan, MoreThanOrEqual, Repository } from 'typeorm';


class DatapointsRepository implements IDatapointsRepository {

    private repository: Repository<Datapoint>;

    // private static INSTANCE: OffersRepository;

    constructor() {
        this.repository = getRepository(Datapoint);
    }
    async create({
        offerid,
        price, 
        basePrice,
        originalPrice,
        availableQty,
        soldQty
    }: IDatapointDTO): Promise<void> {
        const datapoint = this.repository.create({
            offerid,
            price, 
            basePrice,
            originalPrice,
            availableQty,
            soldQty
        })
        await this.repository.save(datapoint);
    }

    async findByID(id): Promise<Datapoint> {
        const datapoint = await this.repository.findOne({id});
        return datapoint;
    }   

    async listByOfferIdAndDateRange(offerid: string, beginDate, endDate): Promise<Datapoint[]> { 
        
        const datapoints = await this.repository
                            .createQueryBuilder("datapoints")
                            .select("datapoints")
                            .andWhere(`offerid = :offerid `, {offerid: `${offerid}`})
                            .andWhere(`created_at >= :begin `, {begin: `${beginDate}`})
                            .andWhere(`created_at <= :end `, {end: `${endDate}`})
                            .getMany()
        return datapoints;
    };
};

export { DatapointsRepository }