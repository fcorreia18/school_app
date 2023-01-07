import { ICreateCourseDTO } from "../dtos/ICreateCourseDTO";
import { Course } from "../entities/Course";
import { IGenericRepository } from "./IGenericRepository";

export interface ICourseRepository
    extends IGenericRepository<Course, ICreateCourseDTO> {
    findByName(name: string): Promise<Course>;
}
