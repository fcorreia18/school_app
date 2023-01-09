export interface ICreateDegreeDTO {
    name: string;
    courses?: {
        name: string;
        duration: number;
    }[];
}
