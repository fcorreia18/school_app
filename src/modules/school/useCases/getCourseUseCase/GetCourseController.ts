import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetCourseUseCase } from "./GetCourseUseCase";

export class GetCourseController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getCourseUseCase = container.resolve(GetCourseUseCase);

        const courses = await getCourseUseCase.execute();
        return res.status(201).json(courses);
    }
}
