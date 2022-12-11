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
        level,
    }: ICreateSchoolDTO): Promise<void> {
        await this.SchoolRepository.create({
            name,
            location: { lat, long },
            description,
            level,
        });
    }
}
