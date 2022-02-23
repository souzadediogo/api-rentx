import { Sku } from "../../entities/Sku";
import { ISkusRepository } from "../../repositories/ISkusRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListSkusUseCase {
    constructor(
        @inject("SkusRepository")
        private skusRepository: ISkusRepository) {}
        
    async execute(): Promise<Sku[]> {
        console.log('3');
        const skus = await this.skusRepository.list();
        console.log('4');
        return skus;
    }
};

export { ListSkusUseCase };


