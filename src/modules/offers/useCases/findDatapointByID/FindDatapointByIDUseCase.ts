import { inject, injectable } from "tsyringe";
import { IDatapointsRepository } from "@modules/offers/repositories/IDatapointsRepository";

@injectable()
class FindDatapointByIDUseCase {
    constructor(
        @inject("DatapointsRepository")
        private datapointsRepository: IDatapointsRepository) {}
    
    async execute({ id }): Promise<void> {
        await this.datapointsRepository.findByID(id);
    }
}



export { FindDatapointByIDUseCase }