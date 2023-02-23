import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetSchoolsByNameUseCase } from "./GetSchoolsByNameUseCase";

export class GetSchoolsByNameController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getSchoolsByNameUseCase = container.resolve(
            GetSchoolsByNameUseCase
        );
        const { name } = req.query;
        const schools = await getSchoolsByNameUseCase.execute(name);
        return res.status(201).json(schools);
    }
}
