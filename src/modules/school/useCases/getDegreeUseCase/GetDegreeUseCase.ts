import { inject, injectable } from "tsyringe";

import { Degree } from "../../entities/Degree";
import { IDegreeRepository } from "../../repositories/IDegreeRepository";

@injectable()
export class GetDegreeUseCase {
    constructor(
        @inject("DegreeRepository")
        private degreeRepository: IDegreeRepository
    ) {}
    async execute(): Promise<Degree[] | void> {
        const degrees = await this.degreeRepository.list();
        if (degrees) {
            return degrees;
        }
    }
}
