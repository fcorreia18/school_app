import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateSchoolDTO } from "../../dtos/ICreateSchoolDTO";
import { School } from "../../entities/School";
import { ISchoolRepository } from "../../repositories/ISchoolRepository";

interface IResponse {
    school: School;
}
@injectable()
export class CreateSchoolUseCase {
    constructor(
        @inject("SchoolRepository")
        private schoolRepository: ISchoolRepository
    ) {}
    async execute({
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
    }: ICreateSchoolDTO): Promise<IResponse> {
        const schoolAlreadyExist = await this.schoolRepository.findByName(name);
        if (schoolAlreadyExist) {
            throw new AppError("School Already Exist");
        }
        const school = await this.schoolRepository.create({
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
        const res: IResponse = {
            school,
        };
        return res;
    }
}
