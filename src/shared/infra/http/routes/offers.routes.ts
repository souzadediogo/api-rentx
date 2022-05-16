import { Router } from 'express';
import { CreateOfferController } from '@modules/offers/useCases/createOffer/CreateOfferController';
import { ListOffersController } from '@modules/offers/useCases/listOffers/ListOffersController';
import { CreateDatapointController } from '@modules/offers/useCases/createDatapoint/CreateDatapointController';
import { CreateDatapointsInBatchController } from '@modules/offers/useCases/createDatapointsInBatch/CreateDatapointsInBatchController';
import { FindDatapointByIDController } from '@modules/offers/useCases/findDatapointByID/FindDatapointByIDController';
import { ListDatapointsByOfferIdAndDateController } from "@modules/offers/useCases/listDatapointByOfferIdAndDate/listDatapointsByOfferIdAndDaterangeController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { UpdateOfferController } from "@modules/offers/useCases/updateOffer/UpdateOfferController";
import { CreateOffersInBatchController } from '@modules/offers/useCases/createOffersInBatch/CreateOffersInBatchController';
import { CreateOffersInBatchOneByOneController } from '@modules/offers/useCases/createOffersInBatchOneByOne/CreateOffersInBatchOneByOneController';
import { ListMostRecentDatapointsByOfferIDController } from '@modules/offers/useCases/listMostRecentDatapointByOfferID/listMostRecentDatapointsByOfferIDController';

const offersRoutes = Router();

//CONTROLLERS
    //Offers
    const createOfferController = new CreateOfferController();
    const listOffersController = new ListOffersController();
    const updateOfferController = new UpdateOfferController();
    const createOffersInBatchController = new CreateOffersInBatchController();
    const createOffersInBatchOneByOneController = new CreateOffersInBatchOneByOneController();
    const createDatapointsInBatchController = new CreateDatapointsInBatchController();

    //Datapoints
    const createDatapointController = new CreateDatapointController();
    const findDatapointByIDController = new FindDatapointByIDController();
    const listDatapointsByOfferIdAndDaterangeController = new ListDatapointsByOfferIdAndDateController();
    const listMostRecentDatapointsByOfferIDController = new ListMostRecentDatapointsByOfferIDController();

//ROUTES
    //Offers
    offersRoutes.get("/", listOffersController.handle);
    offersRoutes.post("/", createOffersInBatchOneByOneController.handle);
    offersRoutes.put("/", updateOfferController.handle);


    //Datapoints
    offersRoutes.post("/datapoints", createDatapointsInBatchController.handle);
    offersRoutes.get("/datapoints/find-by-id", findDatapointByIDController.handle);
    offersRoutes.get("/datapoints/find-by-offerid-and-daterange", listDatapointsByOfferIdAndDaterangeController.handle);
    offersRoutes.get("/datapoints/list-most-recent-by-ids", listMostRecentDatapointsByOfferIDController.handle);
// offersRoutes.use(ensureAuthenticated);

export { offersRoutes }