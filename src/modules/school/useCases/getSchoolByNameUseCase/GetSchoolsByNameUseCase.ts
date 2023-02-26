import { inject, injectable } from "tsyringe";

import { School } from "../../entities/School";
import { ISchoolRepository } from "../../repositories/ISchoolRepository";

@injectable()
export class GetSchoolsByNameUseCase {
    constructor(
        @inject("SchoolRepository")
        private schoolRepository: ISchoolRepository
    ) {}
    async execute(name: string): Promise<School | void> {
        const school = await this.schoolRepository.findByName(name);
        return school;
    }
}
