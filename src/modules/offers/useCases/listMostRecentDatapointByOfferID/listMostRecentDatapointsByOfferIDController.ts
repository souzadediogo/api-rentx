import { Request, Response } from 'express';
import { ListMostRecentDatapointsByOfferIDUseCase } from '@modules/offers/useCases/listMostRecentDatapointByOfferID/listMostRecentDatapointsByOfferIDUseCase';
import { container } from "tsyringe";

class ListMostRecentDatapointsByOfferIDController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { offerIDs } = req.query;
        let ids = offerIDs.split(",");
        console.log('ids controller', ids);
        const listMostRecentDatapointsByOfferIDUseCase = container.resolve(ListMostRecentDatapointsByOfferIDUseCase);

        const datapoints = await listMostRecentDatapointsByOfferIDUseCase
                                .execute(ids);
    
        return res.status(201).json(datapoints).send();
    }
}

export { ListMostRecentDatapointsByOfferIDController }