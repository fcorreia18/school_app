import { Repository } from "typeorm";

import { AppDataSource } from "../../../../data-source";
import { ICreateSchoolDTO } from "../../dtos/ICreateSchoolDTO";
import { School } from "../../entities/School";
import { ISchoolRepository } from "../ISchoolRepository";

export class SchoolRepository implements ISchoolRepository {
    schoolRepository: Repository<School>;
    constructor() {
        this.schoolRepository = AppDataSource.getRepository(School);
    }

    async create(school: ICreateSchoolDTO): Promise<School> {
        const newSchool = this.schoolRepository.create(school);
        const createSchool = await this.schoolRepository.save(newSchool);
        return createSchool;
    }

    async list(): Promise<School[]> {
        const schools = await AppDataSource.manager.find(School);
        return schools;
    }
    async findById(id: string): Promise<School | undefined> {
        const school = await this.schoolRepository.findOneBy({ id });
        return school;
    }
    async findByName({ name }: ICreateSchoolDTO): Promise<School | undefined> {
        const school = await this.schoolRepository.findOneBy({ name });
        return school;
    }
    async findByLocation({
        latitude,
        longitude,
    }: ICreateSchoolDTO): Promise<School[] | undefined> {
        const school = await this.schoolRepository.find({
            where: { latitude, longitude },
        });
        return school;
    }
}
