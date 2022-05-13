import { inject, injectable } from "tsyringe";
import { IDatapointsRepository } from "@modules/offers/interfaces/IDatapointsRepository";
import { Datapoint } from "@modules/offers/infra/typeorm/entities/Datapoint";

@injectable()
class FindDatapointByIDUseCase {
    constructor(
        @inject("DatapointsRepository")
        private datapointsRepository: IDatapointsRepository) {}
    
    async execute({ id }): Promise<Datapoint> {
        return await this.datapointsRepository.findByID(id);
    }
}



export { FindDatapointByIDUseCase }