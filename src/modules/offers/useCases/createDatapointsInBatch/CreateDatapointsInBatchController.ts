import { Request, Response } from 'express';
import { CreateDatapointUseCase } from '@modules/offers/useCases/createDatapoint/CreateDatapointUseCase';
import { container } from "tsyringe";
import { IDatapointDTO, IDatapointsBatch } from '@modules/offers/interfaces/IDatapointsRepository';
import { CreateDatapointsInBatchUseCase } from './CreateDatapointsInBatchUseCase';

class CreateDatapointsInBatchController {
    async handle(req: Request, res: Response): Promise<Response> {
        const body: IDatapointsBatch = req.body;
        const items = body.body.items;
        const createDatapointsInBatchUseCase = container.resolve(CreateDatapointsInBatchUseCase);

        await createDatapointsInBatchUseCase.execute(items);
    
        return res.status(201).send();
    }
}

export { CreateDatapointsInBatchController }