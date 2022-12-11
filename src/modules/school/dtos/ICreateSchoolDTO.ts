import { SCHOOLDEGREE } from "../../../utils/schoolDegree";
import Image from "../entitites/Image";

export interface ICreateSchoolDTO {
    name: string;
    location: {
        long: string;
        lat: string;
    };
    degree: SCHOOLDEGREE;
    about?: string;
    opening_hours?: string;
    open_on_weekends?: boolean;
    images?: Image[];
}
