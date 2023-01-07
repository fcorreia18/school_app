import { inject, injectable } from "tsyringe";

import { Course } from "../../entities/Course";
import { ICourseRepository } from "../../repositories/ICourseRepository";

@injectable()
export class GetCourseUseCase {
    constructor(
        @inject("CourseRepository")
        private courseRepository: ICourseRepository
    ) {}
    async execute(): Promise<Course[] | void> {
        const courses = await this.courseRepository.list();
        if (courses) {
            return courses;
        }
        return [];
    }
}
