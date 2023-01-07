import { Repository } from "typeorm";

import { AppDataSource } from "../../../../data-source";
import { ICreateDegreeDTO } from "../../dtos/ICreateDegreeDTO";
import { Degree } from "../../entities/Degree";
import { IDegreeRepository } from "../IDegreeRepository";

export class DegreeRepository implements IDegreeRepository {
    degreRepository: Repository<Degree>;
    constructor() {
        this.degreRepository = AppDataSource.getRepository(Degree);
    }

    async create(degree: ICreateDegreeDTO): Promise<Degree> {
        const newDegree = this.degreRepository.create(degree);
        const createDegree = await this.degreRepository.save(newDegree);
        return createDegree;
    }

    async list(): Promise<Degree[]> {
        const degrees = await AppDataSource.manager.find(Degree, {
            relations: { courses: true },
        });
        return degrees;
    }
    async findById(id: string): Promise<Degree | undefined> {
        const school = await this.degreRepository.findOneBy({ id });
        return school;
    }
    async findByName(name: string): Promise<Degree | undefined> {
        const degree = await this.degreRepository.findOneBy({ name });
        return degree;
    }
}
