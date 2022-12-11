import { ICreateSchoolDTO } from "../dtos/ICreateSchoolDTO";
import { School } from "../entities/School";

export interface ISchoolRepository {
    create(school: ICreateSchoolDTO): Promise<void>;
    list(): Promise<School[] | void>;
    findByLocation({ location }: ICreateSchoolDTO): Promise<School[] | void>;
    findById(id: string): Promise<School | void>;
    findByName({ name }: ICreateSchoolDTO): Promise<School | void>;
    delete?(id: string): Promise<void>;
}
