import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { SchoolRepository } from "../../modules/school/repositories/implementations/SchoolRepository";
import { ISchoolRepository } from "../../modules/school/repositories/ISchoolRepository";

container.registerSingleton<ISchoolRepository>(
    "SchoolRepository",
    SchoolRepository
);
container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);
