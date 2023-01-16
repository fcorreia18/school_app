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
    async update({
        id,
        name,
        province,
        county,
        contact,
        acronym,
        latitude,
        longitude,
        about,
        open_on_weekends,
        opening_hours,
        website,
    }: School): Promise<void> {
        await this.schoolRepository.update(id, {
            name,
            province,
            county,
            contact,
            acronym,
            latitude,
            longitude,
            about,
            open_on_weekends,
            opening_hours,
            website,
        });
    }
    async findById(id: string): Promise<School | undefined> {
        const school = await this.schoolRepository.findOneBy({ id });
        return school;
    }
    async findByName(name: string): Promise<School | undefined> {
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

    async genericFind({
        province,
        degree,
        course,
    }: {
        province: string;
        degree: string;
        course: string;
    }): Promise<{
        degrees?: Degree[];
        schools?: School[];
    } | void> {
        //     const carsQuery = await this.repository
        //     .createQueryBuilder("c")
        //     .where("available = :available", { available: true });

        //   if (brand) {
        //     carsQuery.andWhere("brand = :brand", { brand });
        //   }

        //   if (name) {
        //     carsQuery.andWhere("name = :name", { name });
        //   }

        //   if (category_id) {
        //     carsQuery.andWhere("category_id = :category_id", { category_id });
        //   }

        //   const cars = await carsQuery.getMany();

        //   return cars;
        const slug = course.replace("-", " ");

        const degrees = await AppDataSource.manager.find(Degree, {
            where: {
                name: degree,
                courses: { name: slug, schools: { province } },
            },
            relations: {
                courses: {
                    schools: true,
                },
            },
        });

        if (degrees) {
            return {
                degrees,
            };
        }
        // eslint-disable-next-line consistent-return, no-useless-return
        return;
    }
}
