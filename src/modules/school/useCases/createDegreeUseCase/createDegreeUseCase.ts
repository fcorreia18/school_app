import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateDegreeDTO } from "../../dtos/ICreateDegreeDTO";
import { Degree } from "../../entities/Degree";
import { IDegreeRepository } from "../../repositories/IDegreeRepository";

interface IResponse {
    degree: Degree | void;
}
@injectable()
export class CreateDegreeUseCase {
    constructor(
        @inject("DegreeRepository")
        private degreeRepository: IDegreeRepository
    ) {}
    async execute({ name, courses }: ICreateDegreeDTO): Promise<IResponse> {
        const degreeAlreadyExist = await this.degreeRepository.findByName(
            name.toLocaleLowerCase()
        );

        if (degreeAlreadyExist) {
            throw new AppError("Degree Already Exists");
        }
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
