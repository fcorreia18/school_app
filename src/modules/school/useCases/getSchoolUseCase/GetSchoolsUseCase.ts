import { inject, injectable } from "tsyringe";

import { ICreateSchoolDTO } from "../../dtos/ICreateSchoolDTO";
import { School } from "../../entities/School";
import { ISchoolRepository } from "../../repositories/ISchoolRepository";

interface IResponse {
    schools: School[];
}
@injectable()
export class GetSchoolsUseCase {
    constructor(
        @inject("SchoolRepository")
        private schoolRepository: ISchoolRepository
    ) {}
    async execute(): Promise<IResponse> {
        const schools = await this.schoolRepository.list();
        if (schools) {
            const res: IResponse = {
                schools,
            };
            return res;
        }
    }
}
