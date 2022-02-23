import { Router } from 'express';
import { offersRoutes } from './offers.routes';
import { usersRoutes } from "./users.routes";
import { sellersRoutes } from "./sellers.routes";
import { skusRoutes } from "./skus.routes"
import { authenticateRoutes } from "./authenticate.routes";

const router = Router();

router.use("/offers", offersRoutes);
router.use("/users", usersRoutes);
router.use("/sellers", sellersRoutes);
router.use("/skus", skusRoutes);

//router.use(authenticateRoutes);

export { router }