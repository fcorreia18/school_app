import { inject, injectable } from "tsyringe";

import { ICreateSchoolCourseDTO } from "../../dtos/ICreateSchoolCourseDTO";
import { SchoolCourse } from "../../entities/SchoolCourse";
import { ISchoolCourseRepository } from "../../repositories/ISchoolCourseRepository";

interface IResponse {
    schoolCourses: SchoolCourse[];
}
@injectable()
export class CreateSchoolCourseUseCase {
    constructor(
        @inject("SchoolCourseRepository")
        private schoolCourseRepository: ISchoolCourseRepository
    ) {}
    async execute({
        schools,
        courses,
    }: ICreateSchoolCourseDTO): Promise<IResponse> {
        const schoolCourses =
            await this.schoolCourseRepository.createSchoolCourse({
                schools,
                courses,
            });
        const res: IResponse = {
            schoolCourses,
        };
        return res;
    }
}
