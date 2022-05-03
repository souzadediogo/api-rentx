import { AppError } from '@errors/AppError';
import { ICreateOffersDTO } from '@modules/offers/repositories/IOffersRepository';
import { myUrls } from '@shared/urls';
import { IMeliOffer } from '@services/meliServices/meliServices'
import { IntelligenceSuiteRequests } from '@requests/axios/intelligenceSuiteAPI'
import axios from 'axios';

async getMultipleOffersByMLB(arrayOfMLBs: Array<string>):Promise<IMeliOffer[]>{
    let meliAccessToken = await this.listMeliAccessToken();

    try {
        let response = await axios.get(`https://api.mercadolibre.com/items`,{
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${meliAccessToken}`
            },
            params: {
                ids: arrayOfMLBs,
                attributes: "id,price,status,base_price,original_price,available_quantity,sold_quantity"

            }
        })
        console.log(response.data)
        return response.data;
    }catch(e){
        console.log({
            message: "erro em getMultipleOffersByMLB",
            erro: e
        })            
        throw new AppError(`Error fetching offers from ChannelSellerID ${channelSellerID} and offset ${offset} in Mercado Livre`, 500)
    }    
}



getMultipleOffersByMLB([MLB1794939067,MLB1824635707]);

