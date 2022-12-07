import { container } from "tsyringe";

import { SchoolRepository } from "../../modules/school/repositories/implementations/SchoolRepository";
import { ISchoolRepository } from "../../modules/school/repositories/ISchoolRepository";

container.registerSingleton<ISchoolRepository>(
    "SchoolRepository",
    SchoolRepository
);
