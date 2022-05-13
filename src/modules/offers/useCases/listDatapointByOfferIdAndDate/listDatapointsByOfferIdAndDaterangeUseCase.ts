import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { IDatapointsRepository } from '@modules/offers/interfaces/IDatapointsRepository';
import { Datapoint } from "@modules/offers/infra/typeorm/entities/Datapoint";

interface IRequest {
    offerid: string; 
    sellerID: string; 
    skuID: string; 
    salesChannel: string;
};


@injectable()
class ListDatapointsByOfferIdAndDaterangeUseCase {
    constructor(
        @inject("DatapointsRepository")
        private datapointsRepository: IDatapointsRepository) {}
    
    async execute({offerid, beginDate, endDate}): Promise<Datapoint[]> {
        return await this.datapointsRepository
                .listByOfferIdAndDateRange(offerid, beginDate, endDate);

    }
}

export { ListDatapointsByOfferIdAndDaterangeUseCase }