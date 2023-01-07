import { inject, injectable } from "tsyringe";

import { ICreateSchoolDTO } from "../../dtos/ICreateSchoolDTO";
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
    async execute({ name }: ICreateSchoolDTO): Promise<IResponse> {
        const degree = await this.degreeRepository.create({
            name,
        });
        const res: IResponse = {
            degree,
        };
        return res;
    }
}
