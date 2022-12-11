import { inject, injectable } from "tsyringe";

import { ICreateSchoolDTO } from "../../dtos/ICreateSchoolDTO";
import { ISchoolRepository } from "../../repositories/ISchoolRepository";

@injectable()
export class CreateSchoolUseCase {
    constructor(
        @inject("SchoolRepository") private SchoolRepository: ISchoolRepository
    ) {}

    async execute({
        name,
        location: { lat, long },
        description,
        degree,
        about,
        open_on_weekends,
        opening_hours,
    }: ICreateSchoolDTO): Promise<void> {
        await this.SchoolRepository.create({
            name,
            location: { lat, long },
            description,
            degree,
            about,
            open_on_weekends,
            opening_hours,
        });
    }
}
