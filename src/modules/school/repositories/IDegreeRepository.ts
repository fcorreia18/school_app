import { Degree } from "../entities/Degree";
import { IGenericRepository } from "./IGenericRepository";

export interface IDegreeDTO extends IGenericRepository<Degree, IDegreeDTO> {
    list(): Promise<Degree[] | void>;
    create(args: IDegreeDTO): Promise<Degree>;
    findById(args: string): Promise<Degree | void>;
    delete?(args: string): Promise<void>;
    findByName(name: string): Promise<Degree>;
}
