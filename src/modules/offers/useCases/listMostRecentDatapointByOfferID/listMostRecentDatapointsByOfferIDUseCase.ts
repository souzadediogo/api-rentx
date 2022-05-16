import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { IDatapointsRepository } from '@modules/offers/interfaces/IDatapointsRepository';
import { Datapoint } from "@modules/offers/infra/typeorm/entities/Datapoint";


@injectable()
class ListMostRecentDatapointsByOfferIDUseCase {
    constructor(
        @inject("DatapointsRepository")
        private datapointsRepository: IDatapointsRepository) {}
    
    async execute(ids: Array<string>): Promise<Datapoint> {
        console.log('ids - use case', ids);
        return await this.datapointsRepository
                            .listMostRecentDatapointsByOfferID(ids);

    }
}

export { ListMostRecentDatapointsByOfferIDUseCase }