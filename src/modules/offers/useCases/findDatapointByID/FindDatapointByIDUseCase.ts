import { inject, injectable } from "tsyringe";
import { IDatapointsRepository } from "@modules/offers/repositories/IDatapointsRepository";
import { Datapoint } from "../../entities/Datapoint";

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