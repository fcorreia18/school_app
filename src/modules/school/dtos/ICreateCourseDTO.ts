import { Degree } from "../entities/Degree";

export interface ICreateCourseDTO {
    name: string;
    duration: number;
    degree?: {
        name: string;
    };
}
