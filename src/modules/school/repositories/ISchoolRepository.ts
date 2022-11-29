import { Response } from "express";

import { ISchoolDTO } from "../dtos/ISchoolDTO";

export interface ISchoolRepository {
    create(data: ISchoolDTO): Promise<Response>;
}
