import { Router } from 'express';
import { offersRoutes } from './offers.routes';
import { usersRoutes } from './users.routes';
import { authenticateRoutes } from "./authenticate.routes";

const router = Router();

router.use("/offers", offersRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);


export { router }