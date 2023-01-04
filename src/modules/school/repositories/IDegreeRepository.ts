import { Degree } from "../entities/Degree";
import { IGenericRepository } from "./IGenericRepository";

export interface IDegreeDTO extends IGenericRepository<Degree> {
    list(): Promise<Degree>;
    create(args: Degree): Promise<Degree>;
    findById(args: string): Promise<Degree | void>;
    delete?(args: string): Promise<Degree>;
    findByName(name: string): Promise<Degree>;
}
