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
        offerid,
        price, 
        basePrice,
        offerStatus,
        originalPrice,
        availableQty,
        soldQty
    }: IDatapointDTO): Promise<void> {

        await this.datapointsRepository.create({
            offerid,
            price, 
            basePrice,
            offerStatus,
            originalPrice,
            availableQty,
            soldQty
        });
    }
}



export { CreateDatapointUseCase }