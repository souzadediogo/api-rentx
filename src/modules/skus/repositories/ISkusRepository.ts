import { Sku } from "../entities/Sku";

interface ICreateSkusDTO {
    id?: string;
    name: string; 
    skuID?: string;
    brandName?: string; 
    category: string;
    description: string;
    photos: Array<string>;
    specification: string;
    created_at: Date;
    updated_at: Date;
}

interface ISkusRepository {
    findBySkuID(skuID: string): Promise<Sku>;
    list(): Promise<Sku[]>;
    create({}: ICreateSkusDTO): Promise<void>;
};

export { ISkusRepository,  ICreateSkusDTO }