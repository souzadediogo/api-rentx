import { Request, Response } from 'express';
import { ListDatapointsByOfferIdAndDaterangeUseCase } from '@modules/offers/useCases/listDatapointByOfferIdAndDate/listDatapointsByOfferIdAndDaterangeUseCase';
import { container } from "tsyringe";

class ListDatapointsByOfferIdAndDateController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { offerid,  beginDate, endDate } = req.body;
        
        const listDatapointsByOfferIdAndDaterangeUseCase = container.resolve(ListDatapointsByOfferIdAndDaterangeUseCase);

        const datapoints = await listDatapointsByOfferIdAndDaterangeUseCase
            .execute({offerid,  beginDate, endDate});
    
        return res.status(201).json(datapoints).send();
    }
}

export { ListDatapointsByOfferIdAndDateController }