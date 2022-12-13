import { getRepository, Repository } from "typeorm";

import { AppError } from "../../../../errors/AppError";
import { ICreateSchoolDTO } from "../../dtos/ICreateSchoolDTO";
import { School } from "../../entities/School";
import { ISchoolRepository } from "../ISchoolRepository";

export class SchoolRepository implements ISchoolRepository {
    schoolRepository: Repository<School>;
    constructor() {
        this.schoolRepository = getRepository(School);
    }

    async create(school: ICreateSchoolDTO): Promise<School> {
        const newSchool = this.schoolRepository.create(school);
        const createSchool = await this.schoolRepository.save(newSchool);
        return createSchool;
    }

    list(): Promise<School[]> {
        throw new AppError("Method not implemented!", 405);
    }
    async findById(id: string): Promise<School | undefined> {
        const school = await this.schoolRepository.findOne({ id });
        return school;
    }
    async findByName({ name }: ICreateSchoolDTO): Promise<School | undefined> {
        const school = await this.schoolRepository.findOne({ name });
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
