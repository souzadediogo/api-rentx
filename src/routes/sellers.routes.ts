import { Router } from 'express';
import { CreateSellerController } from "@modules/sellers/useCases/createSeller/CreateSellerController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ListSellersController } from '@modules/sellers/useCases/listSeller/ListSellersController';

const sellersRoutes = Router();

const createSellerController = new CreateSellerController();
const listSellersController = new ListSellersController();

// sellersRoutes.use(ensureAuthenticated);

sellersRoutes.post("/", createSellerController.handle);
sellersRoutes.get("/", listSellersController.handle);

export { sellersRoutes }