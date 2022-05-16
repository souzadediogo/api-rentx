import { Brand } from '@modules/brands/infra/typeorm/entities/Brand';
import { IBrandsRepository, ICreateBrandDTO } from '@modules/brands/interfaces/IBrandsRepository';
import { getRepository, Repository } from 'typeorm';
//DTO -> Data 


class BrandsRepository implements IBrandsRepository {

    private repository: Repository<Brand>;

    constructor() {
        this.repository = getRepository(Brand);
    }

    async create(brandName: ICreateBrandDTO): Promise<void> {
        
        const brand = this.repository.create({
            brandName,
            created_at: new Date(),
            updated_at: new Date()
        });
        await this.repository.save(brand);
    }
    async list(): Promise<Brand[]> {
        const brands = await this.repository.find();
        return brands;
    };
    async findByBrandName({brandName}): Promise<Brand> {
        const brand = await this.repository.findOne(brandName);
        return brand;
    };
    

};

export { BrandsRepository }