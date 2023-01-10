import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { ICourseRepository } from "../../modules/school/repositories/ICourseRepository";
import { IDegreeRepository } from "../../modules/school/repositories/IDegreeRepository";
import { CourseRepository } from "../../modules/school/repositories/implementations/CourseRepository";
import { DegreeRepository } from "../../modules/school/repositories/implementations/DegreeRepository";
import { SchoolCourseRepository } from "../../modules/school/repositories/implementations/SchoolCourseRepository";
import { SchoolRepository } from "../../modules/school/repositories/implementations/SchoolRepository";
import { ISchoolCourseRepository } from "../../modules/school/repositories/ISchoolCourseRepository";
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

container.registerSingleton<ICourseRepository>(
    "CourseRepository",
    CourseRepository
);

container.registerSingleton<ISchoolCourseRepository>(
    "SchoolCourseRepository",
    SchoolCourseRepository
);
