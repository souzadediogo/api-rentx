import { Brand } from '@modules/brands/infra/typeorm/entities/Brand';
import { Distributor } from '@modules/distributors/infra/typeorm/entities/Distributor';
import { Sku } from '@modules/skus/infra/typeorm/entities/sku';

interface ICreateBrandDTO {
    id?: string;
    brandName: string; 
    distributors?: Distributor[];
    skus?: Sku[];
    created_at?: Date;
    updated_at?: Date;
}

interface IBrandsRepository {
    create({brandName}: ICreateBrandDTO): Promise<void>;
    list(): Promise<Brand[]>;
    findByBrandName({brandName}: ICreateBrandDTO): Promise<Brand>;
    list(): Promise<Brand[]>;
};

export { IBrandsRepository,  ICreateBrandDTO }