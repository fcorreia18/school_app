import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCourseUseCase } from "../createCourseUseCase/CreateCourseUseCase";

export class CreateSchoolCourseController {
    async handle(req: Request, res: Response): Promise<Response> {
        const createSchoolCourseUseCase =
            container.resolve(CreateCourseUseCase);
        const { name, province } = req.body;
        const requestImages = req.files as Express.Multer.File[];
        const images = requestImages.map((image) => ({ path: image.filename }));

        const school = await createSchoolCourseUseCase.execute({
            name,
            province,
        });
        return res.status(201).json(school);
    }
}
