export interface ICreateUserDTO {
    name: string;
    password: string;
    email: string;
    avatar?: string;
    isAdmin?: boolean;
}
