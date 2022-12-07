import { Response } from "express";
import { getRepository, Repository } from "typeorm";

import { AppError } from "../../../../errors/AppError";
import { ICreateSchoolDTO } from "../../dtos/ICreateSchoolDTO";
import { School } from "../../entitites/School";
import { ISchoolRepository } from "../ISchoolRepository";

export class SchoolRepository implements ISchoolRepository {
    schoolRepository: Repository<School>;
    constructor() {
        this.schoolRepository = getRepository(School);
    }

    async create(data: ICreateSchoolDTO): Promise<void> {
        const newUser = this.schoolRepository.create(data);
        await this.schoolRepository.save(newUser);
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
        location: { lat, long },
    }: ICreateSchoolDTO): Promise<School[] | undefined> {
        const school = await this.schoolRepository.find({
            where: { lat, long },
        });
        return school;
    }
}
