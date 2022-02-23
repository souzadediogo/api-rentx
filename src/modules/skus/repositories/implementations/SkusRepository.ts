import { Sku } from '../../entities/Sku';
import { ISkusRepository, ICreateSkusDTO } from '../ISkusRepository';
import { getRepository, Repository } from 'typeorm';
//DTO -> Data 


class SkusRepository implements ISkusRepository {

    private repository: Repository<Sku>;

    constructor() {
        this.repository = getRepository(Sku);
    }

    async create({
        name, 
        skuID, 
        brandName, 
        category, 
        description, 
        photos, 
        specification
    }: ICreateSkusDTO): Promise<void> {
        
        const sku = this.repository.create({
            name,
            skuID,
            brandName, 
            // Problema: imagino que seja pela relation
            // one-to-many do typeorm
            category,
            description,
            photos,
            specification,
            created_at: new Date(),
            updated_at: new Date()
        });
        await this.repository.save(sku);
    }

    async list(): Promise<Sku[]> {
        const skus = await this.repository.find();
        return skus;
    };

    async findBySkuID(skuID: string): Promise<Sku> {
        const sku = await this.repository.findOne({ skuID });
        return sku;
    };
};

export { SkusRepository }