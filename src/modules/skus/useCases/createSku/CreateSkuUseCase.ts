import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { ISkusRepository } from '@modules/skus/repositories/ISkusRepository';

interface IRequest {
    name: string; 
    skuID: string;
    brandName: string; 
    category: string;
    description: string; 
    photos: Array<string>;
    specification: string;
    created_at: Date;
    updated_at: Date;
};


@injectable()
class CreateSkuUseCase {
    constructor(
        @inject("SkusRepository")
        private skusRepository: ISkusRepository) {}
    
    async execute({
            name, 
            skuID,
            brandName, 
            category, 
            description, 
            photos, 
            specification
        }: IRequest): Promise<void> {
        const offerAlreadyExists = await this.skusRepository.findBySkuID(skuID);

        if(!offerAlreadyExists){
            await this.skusRepository.create(
                {
                name, 
                brandName, 
                category, 
                description, 
                photos, 
                specification,
                created_at: new Date(),
                updated_at: new Date()
                });
            } else {
                throw new AppError("Offer already exists!", 401)
        };
    }
}

export { CreateSkuUseCase }