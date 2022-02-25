import { Request, Response } from 'express';
import { FindDatapointByIDUseCase } from '@modules/offers/useCases/findDatapointByID/FindDatapointByIDUseCase';
import { container } from "tsyringe";

class FindDatapointByIDController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.body;
        
        const findDatapointByIDUseCase = container.resolve(FindDatapointByIDUseCase);

        const datapoint = await findDatapointByIDUseCase.execute({ id });
    
        return res.status(200).json(datapoint).send();
    }
}

export { FindDatapointByIDController }