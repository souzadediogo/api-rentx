import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { IDatapointsRepository } from "@modules/offers/repositories/IDatapointsRepository";
import { IDatapointDTO } from "../../repositories/IDatapointsRepository";

@injectable()
class CreateDatapointUseCase {
    constructor(
        @inject("DatapointsRepository")
        private datapointsRepository: IDatapointsRepository) {}
    
    async execute({
        offerID,
        price, 
        basePrice,
        originalPrice,
        availableQty,
        soldQty
    }: IDatapointDTO): Promise<void> {

        await this.datapointsRepository.create({
            offerID,
            price, 
            basePrice,
            originalPrice,
            availableQty,
            soldQty
        });
    }
}



export { CreateDatapointUseCase }