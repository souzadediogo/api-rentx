import { Router } from 'express';
import { CreateSkuController } from "@modules/skus/useCases/createSku/CreateSkuController";
import { ListSkusController } from "@modules/skus/useCases/listSkus/ListSkusController";
import { GetBuyBoxesController } from '@modules/skus/useCases/getBuyBoxes/GetBuyBoxesController';

const skusRoutes = Router();

const createSkuController = new CreateSkuController();
const listSkuController = new ListSkusController();
const getBuyBoxesController = new GetBuyBoxesController();

skusRoutes.post("/", createSkuController.handle);
skusRoutes.get("/", listSkuController.handle);
skusRoutes.get("/buybox-from-skus", getBuyBoxesController.handle);

export { skusRoutes }