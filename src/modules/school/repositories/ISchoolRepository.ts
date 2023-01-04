import { ICreateSchoolDTO } from "../dtos/ICreateSchoolDTO";
import { School } from "../entities/School";
import { IGenericRepository } from "./IGenericRepository";

export interface ISchoolRepository
    extends IGenericRepository<School, ICreateSchoolDTO> {
    findByLocation({
        latitude,
        longitude,
    }: ICreateSchoolDTO): Promise<School[] | void>;
    findByName({ name }: ICreateSchoolDTO): Promise<School | void>;
}
