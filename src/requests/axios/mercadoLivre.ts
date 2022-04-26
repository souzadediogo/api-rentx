import axios from 'axios';

class MercadoLivreRequests {

    async searchSellerResultsByChannelSellerID(channelSellerID){
        try {
            const results = await axios.get(`${myUrls.meliBaseUrl}/MLB/search?seller_id=${channelSellerID}`, {
            headers: {
                "Authorization": `Bearer ${meliToken}`
                }
            })
        }catch(e){
            console.log(e)
        }
        return results
    }




} //End of class

export { MercadoLivreRequests }