import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppDataSource } from "../../../../data-source";
import { Degree } from "../../entities/Degree";
import { CreateCourseUseCase } from "./CreateCourseUseCase";

export class CreateCourseController {
    async handle(req: Request, res: Response): Promise<Response> {
        const createCourseUseCase = container.resolve(CreateCourseUseCase);
        const { name, duration, degree } = req.body;
        const verifyDegree = await AppDataSource.manager.find(Degree, {
            where: {
                name: degree,
            },
        });
        if (!verifyDegree) {
            const course = await createCourseUseCase.execute({
                name,
                duration,
                degree,
            });
            return res.status(201).json(course);
        }
        const course = await createCourseUseCase.execute({
            name,
            duration,
            degree,
        });
        return res.status(201).json(course);
    }
}
