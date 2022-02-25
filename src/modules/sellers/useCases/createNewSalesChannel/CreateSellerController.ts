import { Request, Response } from 'express';
import { CreateSalesChannelUseCase } from '@modules/sellers/useCases/createNewSalesChannel/CreateSalesChannelUseCase';
import { container } from "tsyringe";

class CreateSalesChannelController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { 
            //seller, 
            channelName, 
            sellerNameInChannel, 
            channelSellerID, 
            channelUrl 
        } = req.body;
        
        const createSellerUseCase = container.resolve(CreateSalesChannelUseCase);

        await createSellerUseCase.execute({
          //  seller, 
            channelName, 
            sellerNameInChannel, 
            channelSellerID, 
            channelUrl
        });
    
        return res.status(201).send();
    }
}

export { CreateSalesChannelController }