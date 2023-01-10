import { ICreateSchoolCourseDTO } from "../dtos/ICreateSchoolCourseDTO";
import { Course } from "../entities/Course";
import { School } from "../entities/School";
import { SchoolCourse } from "../entities/SchoolCourse";
import { IGenericRepository } from "./IGenericRepository";

interface IRequest {
    course?: string;
}
interface IResponse {
    courses?: Course[];
    schools?: School[];
}
export interface ISchoolCourseRepository
    extends IGenericRepository<SchoolCourse, ICreateSchoolCourseDTO> {
    genericFind?(params: IRequest): Promise<IResponse | void>;
}
