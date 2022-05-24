import { Sku } from "../infra/typeorm/entities/Sku";

interface ICreateSkusDTO {
    id?: string;
    name: string; 
    skuID: string;
    brandName?: string; 
    category?: string;
    description?: string;
    photos?: Array<string>;
    specification?: string;
    created_at?: Date;
    updated_at?: Date;
}

interface IItemsSKU {
    items: Array<string>
}

interface ISkusRepository {
    findBySkuID(skuID: string): Promise<Sku>;
    list(): Promise<Sku[]>;
    create({
        name, 
        skuID, 
        brandName, 
        category, 
        description, 
        photos, 
        specification, 
        created_at, 
        updated_at
    }: ICreateSkusDTO): Promise<void>;
};

export { ISkusRepository,  ICreateSkusDTO, IItemsSKU }