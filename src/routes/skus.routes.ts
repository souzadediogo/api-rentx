import { Router } from 'express';
import { CreateSkuController } from "@modules/skus/useCases/createSku/CreateSkuController";
import { ListSkusController } from "@modules/skus/useCases/listSkus/ListSkusController"

const skusRoutes = Router();

const createSkuController = new CreateSkuController();
const listSkuController = new ListSkusController();

skusRoutes.post("/", createSkuController.handle);
skusRoutes.get("/", listSkuController.handle);

export { skusRoutes }