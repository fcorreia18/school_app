import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { IDegreeRepository } from "../../modules/school/repositories/IDegreeRepository";
import { DegreeRepository } from "../../modules/school/repositories/implementations/DegreeRepository";
import { SchoolRepository } from "../../modules/school/repositories/implementations/SchoolRepository";
import { ISchoolRepository } from "../../modules/school/repositories/ISchoolRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<ISchoolRepository>(
    "SchoolRepository",
    SchoolRepository
);

container.registerSingleton<IDegreeRepository>(
    "DegreeRepository",
    DegreeRepository
);
