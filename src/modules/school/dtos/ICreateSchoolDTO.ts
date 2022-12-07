import { SCHOOLDEGREE } from "../../../utils/schoolDegree";

export interface ICreateSchoolDTO {
    name: string;
    location: {
        long: string;
        lat: string;
    };
    description: string;
    level: SCHOOLDEGREE;
}
