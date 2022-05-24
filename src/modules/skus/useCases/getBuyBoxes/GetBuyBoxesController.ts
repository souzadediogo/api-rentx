import { Request, Response } from 'express';
import { GetBuyBoxesUseCase } from '@modules/skus/useCases/getBuyBoxes/GetBuyBoxesUseCase';
import { IItemsSKU } from '@modules/skus/interfaces/ISkusRepository';
import { container } from "tsyringe";


class GetBuyBoxesController {    
    async handle(req: Request, res: Response ): Promise<Response> {
        const { skuIDs } = req.query;
        console.log(skuIDs);
        const ids = skuIDs.split(",");
        // console.log(`ids [controller]:`, ids);
        
        const getBuyBoxesUseCase = container.resolve(GetBuyBoxesUseCase);
        
        const winner = await getBuyBoxesUseCase.execute(ids);
        
        return res.status(200).json(winner);
    }
}

export { GetBuyBoxesController }
