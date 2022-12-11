import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute({
        name,
        email,
        password,
        isAdmin,
    }: ICreateUserDTO): Promise<void> {
        const userAlreadExist = await this.usersRepository.findByEmail(email);
        if (userAlreadExist) {
            throw new AppError("User Already Exist!");
        }

        const encriptedPassword = await hash(password, 10);
        await this.usersRepository.create({
            name,
            email,
            password: encriptedPassword,
            isAdmin,
        });
    }
}
