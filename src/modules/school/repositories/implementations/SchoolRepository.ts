import { Repository } from "typeorm";

import { AppDataSource } from "../../../../data-source";
import { ICreateSchoolDTO } from "../../dtos/ICreateSchoolDTO";
import { Degree } from "../../entities/Degree";
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
        const schools = await AppDataSource.manager.find(School, {
            relations: {
                images: true,
                // courses: true,
            },
        });
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

    async genericFind({ province, degree, course }): Promise<{
        degrees?: Degree[];
        schools?: School[];
    } | void> {
        const degrees = await AppDataSource.manager.find(Degree, {
            where: {
                name: degree,
            },
            relations: {
                courses: true,
                // courses: true,
            },
        });
        const result = await AppDataSource.manager.find(School, {
            where: {
                province,
            },
            relations: {
                images: true,
                // courses: true,
            },
        });
        if (degrees && result) {
            return {
                degrees,
                schools: result,
            };
        }
        // eslint-disable-next-line consistent-return, no-useless-return
        return;
    }
}
