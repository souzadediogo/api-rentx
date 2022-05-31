import { Request, Response } from 'express';
import { ListMeliAuthInfoUseCase } from '@modules/meliAuth/useCases/listMeliAuthInfo/ListMeliAuthInfoUseCase';
import { container } from "tsyringe";

class ListMeliAuthInfoController {
    async handle(req: Request, res: Response): Promise<Response> {
        
        const listMeliAuthInfoUseCase = container.resolve(ListMeliAuthInfoUseCase);
        const token = await listMeliAuthInfoUseCase.execute();
    
        return res.status(200).json(token);
    }
}

export { ListMeliAuthInfoController }


// class CreateMeliAuthCodeController {
//     async handle(req: Request, res: Response): Promise<Response> {
//         const { meliAuthCode } = req.body;
        
//         const createMeliAuthCodeUseCase = container.resolve(CreateMeliAuthCodeUseCase);
//         await createMeliAuthCodeUseCase.execute({meliAuthCode});
    
//         return res.status(201).send();
//     }
// }

// export { CreateMeliAuthCodeController }