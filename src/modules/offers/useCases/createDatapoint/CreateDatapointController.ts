import { Request, Response } from 'express';
import { CreateDatapointUseCase } from '@modules/offers/useCases/createDatapoint/CreateDatapointUseCase';
import { container } from "tsyringe";

class CreateDatapointController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { 
            offerID,
            price, 
            basePrice,
            originalPrice,
            availableQty,
            soldQty
         } = req.body;
        
        const createDatapointUseCase = container.resolve(CreateDatapointUseCase);

        await createDatapointUseCase.execute({
            offerID,
            price, 
            basePrice,
            originalPrice,
            availableQty,
            soldQty
        });
    
        return res.status(201).send();
    }
}

export { CreateDatapointController }