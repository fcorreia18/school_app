import { Repository } from "typeorm";

import { AppDataSource } from "../../../../data-source";
import { ICreateDegreeDTO } from "../../dtos/ICreateDegreeDTO";
import { Degree } from "../../entities/Degree";
import { IDegreeRepository } from "../IDegreeRepository";

export class DegreeRepository implements IDegreeRepository {
    degreeRepository: Repository<Degree>;
    constructor() {
        this.degreeRepository = AppDataSource.getRepository(Degree);
    }

    async create(degree: ICreateDegreeDTO): Promise<Degree> {
        const newDegree = this.degreeRepository.create(degree);
        const createDegree = await this.degreeRepository.save(newDegree);
        return createDegree;
    }
    async update(degree: Degree): Promise<Degree | void> {
        const updateDegree = await this.degreeRepository.save(degree);
        return updateDegree;
    }

    async list(): Promise<Degree[]> {
        const degrees = await AppDataSource.manager.find(Degree, {
            relations: { courses: true },
        }); // , {relations: { courses: true },}
        return degrees;
    }
    async findById(id: string): Promise<Degree | void> {
        const school = await this.degreeRepository.findOneBy({ id });
        return school;
    }
    async findByName(name: string): Promise<Degree | void> {
        const degree = await this.degreeRepository.findOneBy({ name });
        return degree;
    }
}
