import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { IDatapointsBatch, IDatapointsRepository } from "@modules/offers/repositories/IDatapointsRepository";
import { IDatapointDTO } from "../../repositories/IDatapointsRepository";

@injectable()
class CreateDatapointsInBatchUseCase {
    constructor(
        @inject("DatapointsRepository")
        private datapointsRepository: IDatapointsRepository) {}
    async execute(items: IDatapointsBatch): Promise<void> {
        // console.log(`items ${typeof items}`)
        console.log(`here it goes:`, items[0])
        for(let offer of items){
            await this.datapointsRepository.create({
                offer: offer.offer,
                offerid: offer.offerid,
                price: offer.price, 
                basePrice: offer.basePrice,
                originalPrice: offer.originalPrice,
                availableQty: offer.availableQty,
                soldQty: offer.soldQty
            });
        }

    }
}



export { CreateDatapointsInBatchUseCase }