import express from 'express';
import { offersRoutes } from './routes/offers.routes';


const app = express();

app.use(express.json());
app.use("/offers", offersRoutes);

app.listen(3333, ()=>{console.log(`Server is running...`)});