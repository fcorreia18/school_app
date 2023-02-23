import { inject, injectable } from "tsyringe";

import { School } from "../../entities/School";
import { ISchoolRepository } from "../../repositories/ISchoolRepository";

interface IResponse {
    school: School | void;
}
@injectable()
export class GetSchoolsByNameUseCase {
    constructor(
        @inject("SchoolRepository")
        private schoolRepository: ISchoolRepository
    ) {}
    async execute(name: string): Promise<IResponse> {
        const school: IResponse = await this.schoolRepository.findByName(name);
        return school;
    }
}
