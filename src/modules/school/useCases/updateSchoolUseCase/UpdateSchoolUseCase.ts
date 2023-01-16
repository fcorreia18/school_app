import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateSchoolDTO } from "../../dtos/ICreateSchoolDTO";
import { School } from "../../entities/School";
import { ISchoolRepository } from "../../repositories/ISchoolRepository";

interface IResponse {
    school: School | void;
}
@injectable()
export class UpdateSchoolUseCase {
    constructor(
        @inject("SchoolRepository")
        private schoolRepository: ISchoolRepository
    ) {}
    async execute(
        id: string,
        {
            name,
            province,
            county,
            contact,
            acronym,
            latitude,
            longitude,
            about,
            open_on_weekends,
            opening_hours,
            website,
            images,
        }: ICreateSchoolDTO
    ): Promise<IResponse> {
        const schoolExist = await this.schoolRepository.findById(id);
        if (!schoolExist) {
            throw new AppError("School Does Not Exist");
        }
        const updateSchool = Object.assign(schoolExist, {
            name,
            province,
            county,
            contact,
            acronym,
            latitude,
            longitude,
            about,
            open_on_weekends,
            opening_hours,
            website,
            images,
        });
        const school = await this.schoolRepository.update(updateSchool);
        const res: IResponse = {
            school,
        };
        return res;
    }
}
