import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { IBrandsRepository } from '@modules/brands/interfaces/IBrandsRepository';
import { Brand } from '@modules/brands/infra/typeorm/entities/Brand';

@injectable()
class ListBrandsUseCase {
    constructor(
        @inject("BrandsRepository")
        private brandsRepository: IBrandsRepository) {}
    
    async execute(): Promise<Brand[]> {

    return await this.brandsRepository.list();
                //throw new AppError("Incorrect or missing data in request!", 401
    }
}

export { ListBrandsUseCase }