import { MeliAuthCode } from '../../entities/MeliAuthCode';
import { getRepository, Repository } from 'typeorm';
import { IMeliAuthCodeRepository, IMeliAuthCodeDTO } from '../IMeliAuthCodeRepository';
//DTO -> Data 

class MeliAuthCodeRepository implements IMeliAuthCodeRepository {

    private repository: Repository<MeliAuthCode>;

    // private static INSTANCE: OffersRepository;

    constructor() {
        this.repository = getRepository(MeliAuthCode);
    }


    async createOrUpdateMeliAuthCode({ meliAuthCode }: IMeliAuthCodeDTO): Promise<void> {
       
        const id = '1';
        
        const authCode = this.repository.create({
            id, 
            meliAuthCode
        });
    
            await this.repository.save(authCode);
            return
     
    }

    async listCode(): Promise<IMeliAuthCodeDTO> {
        let id = "1";
        return await this.repository.findOne(id);
     }

};

export { MeliAuthCodeRepository }