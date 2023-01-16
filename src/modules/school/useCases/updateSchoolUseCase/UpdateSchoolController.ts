import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateSchoolUseCase } from "./UpdateSchoolUseCase";

export class UpdateSchoolController {
    async handle(req: Request, res: Response): Promise<Response> {
        const updateSchoolUseCase = container.resolve(UpdateSchoolUseCase);
        const { id } = req.params;
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

        const school = await updateSchoolUseCase.execute(id, {
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
