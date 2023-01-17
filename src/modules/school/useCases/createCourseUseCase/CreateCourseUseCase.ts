import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateCourseDTO } from "../../dtos/ICreateCourseDTO";
import { Course } from "../../entities/Course";
import { ICourseRepository } from "../../repositories/ICourseRepository";

interface IResponse {
    course: Course;
}
@injectable()
export class CreateCourseUseCase {
    constructor(
        @inject("CourseRepository")
        private courseRepository: ICourseRepository
    ) {}
    async execute({
        name,
        duration,
        degree,
    }: ICreateCourseDTO): Promise<IResponse> {
        const courseAlreadyExist = await this.courseRepository.findByName(
            name.toLocaleLowerCase()
        );

        if (courseAlreadyExist) {
            throw new AppError("Course Already Exists");
        }
        const course = await this.courseRepository.create({
            name,
            duration,
            degree,
        });
        const res: IResponse = {
            course,
        };
        return res;
    }
}
