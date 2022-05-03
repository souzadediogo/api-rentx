import { Request, Response } from 'express';
import { CreateMeliAuthCodeUseCase } from './CreateMeliAuthCodeUseCase';
import { container } from "tsyringe";

class CreateMeliAuthCodeController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { meliAuthCode } = req.body;
        
        const createMeliAuthCodeUseCase = container.resolve(CreateMeliAuthCodeUseCase);
        await createMeliAuthCodeUseCase.execute({meliAuthCode});
    
        return res.status(201).send();
    }
}

export { CreateMeliAuthCodeController }