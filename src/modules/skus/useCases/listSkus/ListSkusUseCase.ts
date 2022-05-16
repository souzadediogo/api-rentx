import { Sku } from "../../infra/typeorm/entities/Sku";
import { ISkusRepository } from "@modules/skus/interfaces/ISkusRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListSkusUseCase {
    constructor(
        @inject("SkusRepository")
        private skusRepository: ISkusRepository) {}
        
    async execute(): Promise<Sku[]> {
      
        const skus = await this.skusRepository.list();
     
        return skus;
    }
};

export { ListSkusUseCase };


