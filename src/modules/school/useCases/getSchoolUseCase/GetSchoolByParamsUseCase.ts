import { inject, injectable } from "tsyringe";

import { Degree } from "../../entities/Degree";
import { School } from "../../entities/School";
import { ISchoolRepository } from "../../repositories/ISchoolRepository";

@injectable()
export class GetSchoolByParamsUseCase {
    constructor(
        @inject("SchoolRepository")
        private schoolRepository: ISchoolRepository
    ) {}
    async execute({ province, degree, course }): Promise<void | {
        degrees?: Degree[];
        schools?: School[];
    }> {
        // console.log(province, degree, course);

        const result = await this.schoolRepository.genericFind({
            province,
            degree,
            course,
        });

        return result;
    }
}
