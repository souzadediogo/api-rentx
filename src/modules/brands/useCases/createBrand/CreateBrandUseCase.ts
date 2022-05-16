import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { IBrandsRepository } from '@modules/brands/interfaces/IBrandsRepository';
import { ICreateBrandDTO } from "../../interfaces/IBrandsRepository";



@injectable()
class CreateBrandUseCase {
    constructor(
        @inject("BrandsRepository")
        private brandsRepository: IBrandsRepository) {}
    
    async execute({brandName}: ICreateBrandDTO): Promise<void> {
        const brandAlreadyExists = await this.brandsRepository.findByBrandName(brandName);
        if(!brandAlreadyExists){
                await this.brandsRepository.create({                    
                    brandName, 
                    created_at: new Date(),
                    updated_at: new Date()
                });
            } else {
                throw new AppError(`Brand ${brandName} already exists!`, 401)
        };
    }
}

export { CreateBrandUseCase }