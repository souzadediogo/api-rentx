import { Seller } from "../../entities/Seller";
import { ISellersRepository } from "../../repositories/ISellersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListSellersUseCase {
    constructor(
        @inject("SellersRepository")
        private sellersRepository: ISellersRepository) {}
    
    async execute(): Promise<Seller[]> {
        const sellers = await this.sellersRepository.list();
        return sellers;
    }
};

export { ListSellersUseCase };
