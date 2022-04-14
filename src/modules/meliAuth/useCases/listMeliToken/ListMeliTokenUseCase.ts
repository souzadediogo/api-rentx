import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { IMeliTokenRepository } from "@modules/meliAuth/repositories/IMeliTokenRepository";
import { MeliToken } from "@modules/meliAuth/entities/MeliToken";


interface IMeliTokenDTO {
    meliToken: string;

}

@injectable()
class ListMeliTokenUseCase {
    constructor(
        @inject("MeliTokenRepository")
        private meliTokenRepository: IMeliTokenRepository) {}
    
    async execute(): Promise<MeliToken> {
        return await this.meliTokenRepository.listToken();
    }
}

export { ListMeliTokenUseCase }

