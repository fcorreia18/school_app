import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetSchoolsCourseUseCase } from "./getSchoolCourseUseCase";

export class GetSchoolsCoursesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getSchoolsCourseUseCase = container.resolve(
            GetSchoolsCourseUseCase
        );

        const schoolsCourses = await getSchoolsCourseUseCase.execute();
        return res.status(201).json(schoolsCourses);
    }
}
