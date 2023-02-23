export interface ICreateSchoolDTO {
    name: string;
    province: string;
    county: string;
    contact?: number;
    acronym?: string;
    longitude: number;
    latitude: number;
    // degree: SCHOOLDEGREE;
    responsible?: string;
    responsible_number?: number;
    responsible_identity?: string;
    about?: string;
    license?: string;
    dispatch?: string;
    regime?: string;
    capacity?: number;
    property?: string;
    opening_hours?: string;
    open_on_weekends?: boolean;
    website?: string;
    images?: {
        path: string;
    }[];
}
