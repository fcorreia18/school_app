import { inject, injectable } from "tsyringe";

import { ICreateSchoolDTO } from "../../dtos/ICreateSchoolDTO";
import { ISchoolRepository } from "../../repositories/ISchoolRepository";

@injectable()
export class CreateSchoolUseCase {
    constructor(
        @inject("SchoolRepository")
        private schoolRepository: ISchoolRepository
    ) {}
    async execute({
        name,
        latitude,
        longitude,
        degree,
        about,
        open_on_weekends,
        opening_hours,
        images,
    }: ICreateSchoolDTO): Promise<void> {
        await this.schoolRepository.create({
            name,
            latitude,
            longitude,
            degree,
            about,
            open_on_weekends,
            opening_hours,
            images,
        });
    }
}
