import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSchoolUseCase } from "./CreateSchoolUseCase";

export class CreateSchoolController {
    async handle(req: Request, res: Response): Promise<Response> {
        const createSchoolUseCase = container.resolve(CreateSchoolUseCase);
        const {
            name,
            location: { lat, long },
            degree,
            about,
            open_on_weekends,
            opening_hours,
        } = req.body;
        const requestImages = req.files as Express.Multer.File[];
        const images = requestImages.map((image) => ({ path: image.filename }));

        const school = createSchoolUseCase.execute({
            name,
            location: { lat, long },
            degree,
            about,
            open_on_weekends,
            opening_hours,
        });

        return res.status(201).json(school);
    }
}
