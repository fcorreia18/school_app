import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateDegreeDTO } from "../../dtos/ICreateDegreeDTO";
import { Degree } from "../../entities/Degree";
import { IDegreeRepository } from "../../repositories/IDegreeRepository";

interface IResponse {
    degree: Degree | void;
}
@injectable()
export class UpdateDegreeUseCase {
    constructor(
        @inject("DegreeRepository")
        private degreeRepository: IDegreeRepository
    ) {}
    async execute(
        id: string,
        { name, courses }: ICreateDegreeDTO
    ): Promise<IResponse> {
        const degreeExist = await this.degreeRepository.findById(id);

        if (!degreeExist) {
            throw new AppError("Degree Does not Exist");
        }
        const updatedDegree = Object.assign(degreeExist, {
            name,
            courses,
        });
        const degree = await this.degreeRepository.update(updatedDegree);
        console.log(degreeExist, degree);

        const res: IResponse = {
            degree,
        };
        return res;
    }
}
