import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateCourseDTO } from "../../dtos/ICreateCourseDTO";
import { Course } from "../../entities/Course";
import { ICourseRepository } from "../../repositories/ICourseRepository";

interface IResponse {
    course: Course | void;
}
@injectable()
export class UpdateCourseUseCase {
    constructor(
        @inject("CourseRepository")
        private courseRepository: ICourseRepository
    ) {}
    async execute(
        id: string,
        { name, duration }: ICreateCourseDTO
    ): Promise<IResponse> {
        const courseExist = await this.courseRepository.findById(id);
        if (!courseExist) {
            throw new AppError("Course Does Not Exist");
        }
        const updateSchool = Object.assign(courseExist, {
            name,
            duration,
        });
        const course = await this.courseRepository.update(updateSchool);
        const res: IResponse = {
            course,
        };
        return res;
    }
}
