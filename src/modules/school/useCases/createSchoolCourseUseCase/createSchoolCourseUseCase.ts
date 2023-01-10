import { inject, injectable } from "tsyringe";

import { ICreateSchoolDTO } from "../../dtos/ICreateSchoolDTO";
import { School } from "../../entities/School";
import { ISchoolRepository } from "../../repositories/ISchoolRepository";

interface IResponse {
    school: School;
}
@injectable()
export class CreateSchoolCourseUseCase {
    constructor(
        @inject("SchoolRepository")
        private schoolRepository: ISchoolRepository
    ) {}
    async execute({ name, province }: ICreateSchoolDTO): Promise<IResponse> {
        const school = await this.schoolRepository.create({
            name,
            province,
        });
        const res: IResponse = {
            school,
        };
        return res;
    }
}
