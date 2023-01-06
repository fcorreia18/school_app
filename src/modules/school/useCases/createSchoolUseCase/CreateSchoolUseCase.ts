import { inject, injectable } from "tsyringe";

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
        latitude,
        longitude,
        degree,
        about,
        open_on_weekends,
        opening_hours,
        images,
    }: ICreateSchoolDTO): Promise<IResponse> {
        const school = await this.schoolRepository.create({
            name,
            province,
            latitude,
            longitude,
            degree,
            about,
            open_on_weekends,
            opening_hours,
            images,
        });
        const res: IResponse = {
            school,
        };
        return res;
    }
}
