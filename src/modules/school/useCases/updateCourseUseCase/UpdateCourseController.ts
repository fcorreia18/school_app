import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCourseUseCase } from "./UpdateCourseUseCase";

export class UpdateCourseController {
    async handle(req: Request, res: Response): Promise<Response> {
        const createCourseUseCase = container.resolve(UpdateCourseUseCase);
        const { id } = req.params;
        const { name, duration } = req.body;

        const course = await createCourseUseCase.execute(id, {
            name,
            duration,
        });
        return res.status(201).json(course);
    }
}
