export interface ICreateSchoolDTO {
    name: string;
    province: string;
    county: string;
    longitude: number;
    latitude: number;
    // degree: SCHOOLDEGREE;
    about?: string;
    opening_hours?: string;
    open_on_weekends?: boolean;
    images?: {
        path: string;
    }[];
}
