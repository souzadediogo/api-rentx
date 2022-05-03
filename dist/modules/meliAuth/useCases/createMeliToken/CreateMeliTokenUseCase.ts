import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { IMeliTokenRepository } from "@modules/meliAuth/repositories/IMeliTokenRepository";
import { MeliToken } from "@modules/meliAuth/entities/MeliToken";


interface IMeliTokenDTO {
    meliToken: string;

}

@injectable()
class CreateMeliTokenUseCase {
    constructor(
        @inject("MeliTokenRepository")
        private meliTokenRepository: IMeliTokenRepository) {}
    
    async execute({meliToken}: IMeliTokenDTO): Promise<void> {
            await this.meliTokenRepository.createOrRefreshToken({meliToken});
    }
}

export { CreateMeliTokenUseCase }

