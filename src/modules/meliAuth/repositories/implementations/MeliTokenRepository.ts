import { MeliToken } from '../../entities/MeliToken';
import { IMeliTokenDTO, IMeliTokenRepository, IMeliTokensDTO } from '../IMeliTokenRepository';
import { getRepository, Repository } from 'typeorm';
import { MeliToken } from '@modules/meliAuth/entities/MeliToken';
import { AppError } from '@errors/AppError';
//DTO -> Data 

class MeliTokenRepository implements IMeliTokenRepository {

    private repository: Repository<MeliToken>;

    // private static INSTANCE: OffersRepository;

    constructor() {
        this.repository = getRepository(MeliToken);
    }


    async createOrRefreshToken({ meliToken }: IMeliTokenDTO): Promise<void> {
        const id = '1';
        const token = this.repository.create({meliToken});
        await this.repository.save(token);
        return
     }
    
    async listToken(): Promise<IMeliTokenDTO> {
        let id = "1";
        return await this.repository.findOne(id);
     }
    }



    // REFATORAR AMBOS CHAMANDO SERVICO DO SALESCHANNELS
    

    // async listSellerSalesChannelsByChannelName(sellerID: string, channelName: string) {
    //     const seller = await this.repository.findOne({ sellerID });

    //     const channels = seller.salesChannels;
        
    //     const filteredChannels = channels.filter((channel)=> channel.channelName === channelName);
        
    //     return filteredChannels;
    // }
// };

export { MeliTokenRepository }