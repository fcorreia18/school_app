import { ICreateDegreeDTO } from "../dtos/ICreateDegreeDTO";
import { Course } from "../entities/Course";
import { IGenericRepository } from "./IGenericRepository";

export interface ICourseRepository
    extends IGenericRepository<Course, ICreateDegreeDTO> {
    findByName(name: string): Promise<Course>;
}
