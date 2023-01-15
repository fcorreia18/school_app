import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSchoolUseCase } from "./CreateSchoolUseCase";

export class CreateSchoolController {
    async handle(req: Request, res: Response): Promise<Response> {
        const createSchoolUseCase = container.resolve(CreateSchoolUseCase);
        const {
            name,
            province,
            county,
            contact,
            acronym,
            latitude,
            longitude,
            about,
            open_on_weekends,
            opening_hours,
            website,
        } = req.body;
        const requestImages = req.files as Express.Multer.File[];
        const images = requestImages.map((image) => ({ path: image.filename }));

        const school = await createSchoolUseCase.execute({
            name,
            province,
            county,
            contact,
            acronym,
            latitude,
            longitude,
            about,
            open_on_weekends,
            opening_hours,
            website,
            images,
        });
        return res.status(201).json(school);
    }
}
