import { Router } from 'express';
import { offersRoutes } from '@shared/infra/http/routes/offers.routes';
import { usersRoutes } from "@shared/infra/http/routes/users.routes";
import { sellersRoutes } from "@shared/infra/http/routes/sellers.routes";
import { skusRoutes } from "@shared/infra/http/routes/skus.routes"
import { meliAuthenticationRoutes } from "@shared/infra/http/routes/meliAuthentication.routes"
import { authenticateRoutes } from "@shared/infra/http/routes/authenticate.routes";
import { brandsRoutes } from '@shared/infra/http/routes/brands.routes';
const router = Router();

router.use("/offers", offersRoutes);
router.use("/users", usersRoutes);
router.use("/sellers", sellersRoutes);
router.use("/skus", skusRoutes);
router.use("/brands", brandsRoutes);
router.use("/meliAuthentication", meliAuthenticationRoutes);

//router.use(authenticateRoutes);

export { router }