import { ICreateDegreeDTO } from "../dtos/ICreateDegreeDTO";
import { Degree } from "../entities/Degree";
import { IGenericRepository } from "./IGenericRepository";

export interface IDegreeRepository
    extends IGenericRepository<Degree, ICreateDegreeDTO> {
    findByName(name: string): Promise<Degree | void>;
}
