import { Sku } from "../../infra/typeorm/entities/Sku";
import { ISkusRepository, IItemsSKU } from "@modules/skus/interfaces/ISkusRepository";
import { IOffersRepository } from '@modules/offers/interfaces/IOffersRepository';
import { IDatapointsRepository } from '@modules/offers/interfaces/IDatapointsRepository';
import { inject, injectable } from "tsyringe";

@injectable()
class GetBuyBoxesUseCase {
    constructor(
        @inject("SkusRepository")
        private skusRepository: ISkusRepository,

        @inject("OffersRepository")
        private offersRepository: IOffersRepository,

        @inject("DatapointsRepository")
        private datapointsRepository: IDatapointsRepository

        ) {}
        
    async execute(ids: IItemsSKU): Promise<Sku[]> {
      
        //const skus = await this.skusRepository.getBuyBox();
        //Busca todas ofertas
        const myBuyBoxes = [];
        // console.log(`ids [use-case]:`, ids);
        for(let id of ids){
            // console.log('current ID', id);
            //Buscar UUID do skuID
            const {id: skuUUID} = await this.skusRepository.findBySkuID(id);
            const allSKUOffers = await this.offersRepository.listOffersBySkuUUID(skuUUID);            
            const allOfferIDs = allSKUOffers.map((offer)=>{return offer.offerID});
            
            const latestOffersDatapoints = await this.datapointsRepository.listMostRecentDatapointsByOfferID([...allOfferIDs]);
            //Removes undefined values
            // const filteredDatapoints = latestOffersDatapoints.filter(datapoint => datapoint !== false || undefined)
            console.log()
            // console.log('latestOffersDatapoints', latestOffersDatapoints);
            // console.log('latestOffersDatapoints', latestOffersDatapoints);
            // console.log('filteredDatapoints', filteredDatapoints);
            let lowestOffer;

            for(let offer of latestOffersDatapoints){
                if(!lowestOffer){
                    lowestOffer = offer;
                }else{
                    if(offer.availableQty > 0){
                        if(offer.price < lowestOffer.price){
                            lowestOffer = offer;
                        }
                    }
                }

            }

            console.log(`For id ${id} lowest priced offer if`, lowestOffer);
        }


        return skus;
    }
};

export { GetBuyBoxesUseCase };


