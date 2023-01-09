import { ICreateSchoolDTO } from "../dtos/ICreateSchoolDTO";
import { Course } from "../entities/Course";
import { Degree } from "../entities/Degree";
import { School } from "../entities/School";
import { IGenericRepository } from "./IGenericRepository";

interface IRequest {
    province?: string;
    degree?: string;
    course?: string;
}
interface IResponse {
    degrees?: Degree[];
    schools?: School[];
}
export interface ISchoolRepository
    extends IGenericRepository<School, ICreateSchoolDTO> {
    findByLocation({
        latitude,
        longitude,
    }: ICreateSchoolDTO): Promise<School[] | void>;
    findByName({ name }: ICreateSchoolDTO): Promise<School | void>;
    genericFind(params: IRequest): Promise<IResponse | void>;
}
