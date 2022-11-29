import { Response } from "express";

import { ISchoolDTO } from "../dtos/ISchoolDTO";
import { School } from "../entitites/School";

export interface ISchoolRepository {
    create(data: ISchoolDTO): Promise<Response>;
    findAll({ location }: ISchoolDTO): Promise<School[] | void>;
    findByName(name: string): Promise<School | void>;
    update(data: ISchoolDTO): Promise<Response>;
    delete(id: string): Promise<Response>;
}
