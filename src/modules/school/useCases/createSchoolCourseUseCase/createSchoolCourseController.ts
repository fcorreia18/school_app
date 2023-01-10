import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSchoolCourseUseCase } from "./CreateSchoolCourseUseCase";

export class CreateSchoolCourseController {
    async handle(req: Request, res: Response): Promise<Response> {
        const createSchoolCourseUseCase = container.resolve(
            CreateSchoolCourseUseCase
        );
        const { school: schools, courses } = req.body;

        const schoolCourses = await createSchoolCourseUseCase.execute({
            schools,
            courses,
        });
        return res.status(201).json(schoolCourses);
    }
}
