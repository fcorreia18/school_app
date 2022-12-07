import { inject, injectable } from "tsyringe";

import { ISchoolDTO } from "../../dtos/ICreateSchoolDTO";
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
        level,
    }: ISchoolDTO): Promise<void> {
        await this.SchoolRepository.create({
            name,
            location: { lat, long },
            description,
            level,
        });
    }
}
