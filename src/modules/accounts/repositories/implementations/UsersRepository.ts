import { Repository } from "typeorm";

import { AppDataSource } from "../../../../data-source";
import { AppError } from "../../../../errors/AppError";
import { School } from "../../../school/entities/School";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
    ormRepository: Repository<User>;
    metadata: unknown;
    constructor() {
        this.ormRepository = AppDataSource.getRepository(User);
        AppDataSource.getMetadata(School);
    }
    async create(user: ICreateUserDTO): Promise<void> {
        const newUser = this.ormRepository.create(user);
        await this.ormRepository.save(newUser);
    }
    list(): Promise<User[]> {
        throw new AppError("Method not implemented!", 405);
    }

    async findById(id: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOneBy({ id });
        return user;
    }
    async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOneBy({ email });
        return user;
    }
}
