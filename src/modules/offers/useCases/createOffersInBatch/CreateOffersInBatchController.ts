import { Request, Response } from 'express';
import { CreateOffersInBatchUseCase } from '@modules/offers/useCases/createOffersInBatch/CreateOffersInBatchUseCase';
import { container } from "tsyringe";
import { IItems } from '@modules/offers/interfaces/IOffersRepository';




class CreateOffersInBatchController {
    async handle(req: Request, res: Response): Promise<Response> {
        
        const items: IItems = req.body;
        const createOffersInBatchUseCase = container.resolve(CreateOffersInBatchUseCase);

        await createOffersInBatchUseCase.execute(
            items
        );
        return res.status(201).send();
    }
}

export { CreateOffersInBatchController }