import { Datapoint } from '@modules/offers/infra/typeorm/entities/Datapoint';
import { IDatapointsRepository, IDatapointDTO } from '@modules/offers/infra/typeorm/entities/Datapoint';
import { Between, getRepository, LessThanOrEqual, MoreThan, MoreThanOrEqual, Repository } from 'typeorm';


class DatapointsRepository implements IDatapointsRepository {

    private repository: Repository<Datapoint>;

    // private static INSTANCE: OffersRepository;

    constructor() {
        this.repository = getRepository(Datapoint);
    }
    async create({
        offer,
        offerid,
        offerStatus,
        price, 
        basePrice,
        originalPrice,
        availableQty,
        soldQty
        }: IDatapointDTO): Promise<void> {
        const datapoint = this.repository.create({
            offer,
            offerid,
            offerStatus,
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
    async listMostRecentDatapointsByOfferID(offerIDs: Array<string>): Promise<Datapoint[]> {
        const datapoints = [];
        // console.log('ids repository', offerIDs);
        for(let id of offerIDs){
            // console.log('id of ids', id)
            const datapoint = await this.repository.findOne({
                where: {offerid: id},
                order: { created_at: 'DESC' }
            })
            if(!datapoint){
                //If there's no datapoint, undefined is returned
            } else {
                datapoints.push(datapoint);
            }
        }

                            // .createQueryBuilder("datapoints")
                            // .select("datapoints")
                            // .andWhere(`offerid = :offerid `, {offerid: `${offerid}`})
                            // .order(`created_at <= :end `, {end: `${endDate}`})
                            // .getMany()
        return datapoints;
    }
};

export { DatapointsRepository }