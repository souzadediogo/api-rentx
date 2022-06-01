import { inject, injectable } from "tsyringe";
import { ISkusRepository } from '@modules/skus/interfaces/ISkusRepository';
import { AppError } from "@errors/AppError";
import { ICreateSkusDTO } from '@modules/skus/interfaces/ISkusRepository'

@injectable()
class CreateSkuUseCase {
    constructor(
        @inject("SkusRepository")
        private skusRepository: ISkusRepository) {}
    
    async execute({
        // items
        name, 
        skuID,
        brandName, 
        category,
        description,
        photos,
        specification,
    }: ICreateSkusDTO): Promise<void> {
            await this.skusRepository.create({
                name, 
                skuID,
                brandName, 
                category,
                description,
                photos,
                specification,
                created_at: new Date(),
                updated_at: new Date()
            }
            );
    }
}

export { CreateSkuUseCase }
