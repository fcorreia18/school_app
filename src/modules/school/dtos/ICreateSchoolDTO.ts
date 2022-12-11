import { SCHOOLDEGREE } from "../../../utils/schoolDegree";

export interface ICreateSchoolDTO {
    name: string;
    location: {
        long: string;
        lat: string;
    };
    description: string;
    degree: SCHOOLDEGREE;
    about?: string;
    opening_hours?: string;
    open_on_weekends?: boolean;
}
