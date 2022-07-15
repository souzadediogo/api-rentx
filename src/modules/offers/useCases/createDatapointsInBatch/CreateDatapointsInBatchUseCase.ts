import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { IDatapointsBatch, IDatapointsRepository } from "@modules/offers/interfaces/IDatapointsRepository";
import { IDatapointDTO } from "@modules/offers/interfaces/IDatapointsRepository";

@injectable()
class CreateDatapointsInBatchUseCase {
    constructor(
        @inject("DatapointsRepository")
        private datapointsRepository: IDatapointsRepository) {}
    async execute(items: IDatapointsBatch): Promise<void> {
        try {
            for(let offer of items){
                await this.datapointsRepository.create({
                    offer: offer.offer,
                    offerid: offer.offerid,
                    offerStatus: offer.offerStatus,
                    price: offer.price, 
                    basePrice: offer.basePrice,
                    originalPrice: offer.originalPrice,
                    availableQty: offer.availableQty,
                    soldQty: offer.soldQty
                });
            }
    
        }catch(e){
            console.log(e)
        }
    
    }
}

export { CreateDatapointsInBatchUseCase }