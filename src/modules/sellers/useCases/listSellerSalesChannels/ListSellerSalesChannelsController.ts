import { Request, Response } from 'express';
import { ListSellerSalesChannelsUseCase } from './ListSellerSalesChannelsUseCase';
import { container } from "tsyringe";


class ListSellerSalesChannelsController {    
    async handle(req: Request, res: Response ): Promise<Response> {
        const { sellerUUID, channelName } = req.body;

        const listSellerSalesChannelsUseCase = container.resolve(ListSellerSalesChannelsUseCase);

        const salesChannels = await listSellerSalesChannelsUseCase.execute({sellerUUID, channelName});

        return res.status(200).json(salesChannels);
    }
}

export { ListSellerSalesChannelsController }

