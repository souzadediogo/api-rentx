import { Request, Response } from 'express';
import { FindDatapointByIDUseCase } from '@modules/offers/useCases/findDatapointByID/FindDatapointByIDUseCase';
import { container } from "tsyringe";

class FindDatapointByIDController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.body;
        
        const findDatapointByIDUseCase = container.resolve(FindDatapointByIDUseCase);

        await findDatapointByIDUseCase.execute({ id });
    
        return res.status(201).send();
    }
}

export { FindDatapointByIDController }