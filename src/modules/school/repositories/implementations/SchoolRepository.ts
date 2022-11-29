import { Response } from "express";
import { getRepository, Repository } from "typeorm";

import { ISchoolDTO } from "../../dtos/ISchoolDTO";
import { School } from "../../entitites/School";
import { ISchoolRepository } from "../ISchoolRepository";

export class SchoolRepository implements ISchoolRepository {
    schoolRepository: Repository<School>;
    constructor() {
        this.schoolRepository = getRepository(School);
    }
    create(data: ISchoolDTO): Promise<Response> {
        throw new Error("Method not implemented.");
    }
    findAll({ location }: ISchoolDTO): Promise<void | School[]> {
        throw new Error("Method not implemented.");
    }
    findByName(name: string): Promise<void | School> {
        throw new Error("Method not implemented.");
    }
    update(data: ISchoolDTO): Promise<Response> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<Response> {
        throw new Error("Method not implemented.");
    }
}
