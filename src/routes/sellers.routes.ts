import { Router } from 'express';
import { CreateSellerController } from "@modules/sellers/useCases/createSeller/CreateSellerController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ListSellersController } from '@modules/sellers/useCases/listSeller/ListSellersController';
import { ListSellerSalesChannelsController } from "@modules/sellers/useCases/listSellerSalesChannels/ListSellerSalesChannelsController";
import { CreateSalesChannelController } from "@modules/sellers/useCases/createNewSalesChannel/CreateSellerController";

const sellersRoutes = Router();

const createSellerController = new CreateSellerController();
const listSellersController = new ListSellersController();
const listSellerSalesChannelsController = new ListSellerSalesChannelsController();
const createSalesChannelController = new CreateSalesChannelController();

// sellersRoutes.use(ensureAuthenticated);

sellersRoutes.get("/", listSellersController.handle);
sellersRoutes.post("/", createSellerController.handle);

sellersRoutes.get("/sales-channels", listSellerSalesChannelsController.handle);
sellersRoutes.post("/sales-channels", createSalesChannelController.handle);

export { sellersRoutes }