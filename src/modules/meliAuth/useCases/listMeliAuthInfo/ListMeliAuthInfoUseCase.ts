import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { IMeliTokenRepository } from "@modules/meliAuth/repositories/IMeliTokenRepository";
import { IMeliAuthCodeRepository } from "@modules/meliAuth/repositories/IMeliAuthCodeRepository"
import { MeliToken } from "@modules/meliAuth/entities/MeliToken";



interface IMeliTokenDTO {
    meliToken: string;
}


interface IMeliAuthInfoDTO {
    meliToken: string;
    meliAuthCode: string;
}

@injectable()
class ListMeliAuthInfoUseCase {
    constructor(
        @inject("MeliTokenRepository")
        private meliTokenRepository: IMeliTokenRepository,

        @inject("MeliAuthCodeRepository")
        private meliAuthCodeRepository: IMeliAuthCodeRepository
    ){}

    async execute(): Promise<MeliToken> {
        const { meliToken } = await this.meliTokenRepository.listToken();
        const { meliAuthCode } = await this.meliAuthCodeRepository.listCode();
        
        return {
            meliToken,
            meliAuthCode
        }
    }
}

export { ListMeliAuthInfoUseCase }

