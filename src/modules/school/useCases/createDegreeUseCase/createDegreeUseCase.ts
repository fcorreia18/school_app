import { inject, injectable } from "tsyringe";

import { ICreateDegreeDTO } from "../../dtos/ICreateDegreeDTO";
import { Course } from "../../entities/Course";
import { Degree } from "../../entities/Degree";
import { IDegreeRepository } from "../../repositories/IDegreeRepository";

interface IResponse {
    degree: Degree;
}
@injectable()
export class CreateDegreeUseCase {
    constructor(
        @inject("DegreeRepository")
        private degreeRepository: IDegreeRepository
    ) {}
    async execute({ name, courses }: ICreateDegreeDTO): Promise<IResponse> {
        const degree = await this.degreeRepository.create({
            name,
            courses,
        });
        const res: IResponse = {
            degree,
        };
        return res;
    }
}
