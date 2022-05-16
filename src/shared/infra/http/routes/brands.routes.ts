import { Router } from 'express';
import { CreateBrandController } from '@modules/brands/useCases/createBrand/CreateBrandController';
import { ListBrandsController } from "@modules/brands/useCases/listBrands/ListBrandsController";

const brandsRoutes = Router();

const createBrandController = new CreateBrandController();
const listBrandsController = new ListBrandsController();

brandsRoutes.post("/", createBrandController.handle);
brandsRoutes.get("/", listBrandsController.handle);

export { brandsRoutes }