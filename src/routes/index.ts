import { Router } from 'express';
import { offersRoutes } from './offers.routes';

const router = Router();

router.use("/offers", offersRoutes);

export { router }