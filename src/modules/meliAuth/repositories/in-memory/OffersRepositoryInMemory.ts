import { ISellersRepository, ICreateSellersDTO } from "../ISellersRepository";
import { Seller } from "../../entities/Seller";


class SellersRepositoryInMemory implements ISellersRepository {
    
    sellers: Seller[] = [];
    
    async findBySellerID(sellerID: string): Promise<Seller> {
        const seller = this.sellers.find((seller) => seller.sellerID === sellerID)
        return seller;
    }
    async list(): Promise<Seller[]> {
        const all = this.sellers;
        return all;
    }
    async create({ name, sellerID, cnpj, salesChannels }: ICreateSellersDTO): Promise<void> {
        const seller = new Seller();

        Object.assign(seller,{
            name,
            sellerID, 
            cnpj,
            salesChannels
        });
        this.sellers.push(seller);
    }
}

export { SellersRepositoryInMemory }