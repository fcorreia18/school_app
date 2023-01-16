import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetSchoolByParamsUseCase } from "./GetSchoolByParamsUseCase";

export class GetSchoolByParamsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getSchoolsUseCase = container.resolve(GetSchoolByParamsUseCase);
        const { province, degree, course } = req.params;
        const schools = await getSchoolsUseCase.execute({
            province,
            degree,
            course,
        });
        return res.status(201).json(schools);
    }
}
