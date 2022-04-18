import { Request, Response } from 'express';
import { ListSalesChannelsOffersUseCase } from './ListSalesChannelsOffersUseCase';
import { container } from "tsyringe";


class ListSalesChannelsOffersController {    
    async handle(req: Request, res: Response ): Promise<Response> {
        const { salesChannelID } = req.query;
        console.log(`SalesChannelID = ${salesChannelID}`);

        const listSalesChannelsOffersUseCase = container.resolve(ListSalesChannelsOffersUseCase);

        const salesChannelsOffers = await listSalesChannelsOffersUseCase.execute({salesChannelID});

        return res.status(200).json(salesChannelsOffers);
    }
}

export { ListSalesChannelsOffersController }

