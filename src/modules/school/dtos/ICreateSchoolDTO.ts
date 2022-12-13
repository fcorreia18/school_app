import { SCHOOLDEGREE } from "../../../utils/schoolDegree";
import Image from "../entities/Image";

export interface ICreateSchoolDTO {
    name: string;
    longitude: number;
    latitude: number;
    degree: SCHOOLDEGREE;
    about?: string;
    opening_hours?: string;
    open_on_weekends?: boolean;
    images?: Image[];
}
