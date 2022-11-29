import { SCHOOLLEVEL } from "../../../utils/schoolsLevel";

export interface ISchoolDTO {
    name: string;
    location: {
        long: string;
        lat: string;
    };
    description: string;
    level: SCHOOLLEVEL;
}
