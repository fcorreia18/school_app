import { inject, injectable } from "tsyringe";

import { SchoolCourse } from "../../entities/SchoolCourse";
import { ISchoolCourseRepository } from "../../repositories/ISchoolCourseRepository";

@injectable()
export class GetSchoolsCourseUseCase {
    constructor(
        @inject("SchoolCourseRepository")
        private schoolCourseRepository: ISchoolCourseRepository
    ) {}
    async execute(): Promise<SchoolCourse[] | void> {
        const schoolsCourses = await this.schoolCourseRepository.list();
        return schoolsCourses;
    }
}
