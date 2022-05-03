import { AppError } from '@errors/AppError';
import { myUrls } from '@shared/urls';
import axios from 'axios';
import { IDatapointDTO } from "@modules/offers/repositories/IDatapointsRepository"

class IntelligenceSuiteRequests {
    async listMeliCodeAndToken(){
        try {
            return axios.get('http://localhost:3333/meliAuthentication/list-auth-info')
        }catch(e){
            console.log({
                message: "erro em listMeliCodeAndToken",
                erro: e
            })
            return {
                message: "erro em listMeliCodeAndToken",
                erro: e
            }
        } 
    }

    async getOfferByOfferID(offerID){  //Pelo MLB
        try{
            return axios.get(`${myUrls.appBaseUrl}/offers?offerID=${offerID}`)
        }catch(e){
            console.log({
                message: "erro em getOfferByOfferID",
                erro: e
            })
            return {
                message: "erro em getOfferByOfferID",
                erro: e
            }
        }
      }

      async saveBatchDailyDataRequest(batchOfDailyData: Array<IDatapointDTO>){  //Pelo MLB
        try{
            return axios.post(`${myUrls.appBaseUrl}/offers/datapoints`,{
                body: {
                    items: batchOfDailyData
                }
            })
        }catch(e){
            console.log({
                message: "erro em saveBatchDailyDataRequest",
                erro: e
            })
            return {
                message: "erro em saveBatchDailyDataRequest",
                erro: e
            }
        }
      }      

      async getOfferUUIDsTpuplesFromOfferIDs(offerIDs: Array<string>){  //Pelo MLB
        try{
            return axios.get(`${myUrls.appBaseUrl}/offers?offerID=${offerID}`)
        }catch(e){
            console.log({
                message: "erro em getOfferByOfferID",
                erro: e
            })
            return {
                message: "erro em getOfferByOfferID",
                erro: e
            }
        }
      }

}

export { IntelligenceSuiteRequests }
    //Preciso criar um endpoint que retorna uma oferta única
