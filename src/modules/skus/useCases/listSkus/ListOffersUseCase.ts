import { Sku } from "../../entities/Sku";
import { ISkusRepository } from "../../repositories/ISkusRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListSkusUseCase {
    constructor(
        @inject("OffersRepository")
        private skusRepository: ISkusRepository) {}
    
    async execute(): Promise<Sku[]> {
        const skus = await this.skusRepository.list();
        return skus;
    }
};

export { ListSkusUseCase };
