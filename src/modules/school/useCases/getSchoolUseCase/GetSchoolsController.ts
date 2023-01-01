import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetSchoolsUseCase } from "./GetSchoolsUseCase";

export class CreateSchoolController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getSchoolsUseCase = container.resolve(GetSchoolsUseCase);
       
        const schools = await getSchoolsUseCase.execute();
        return res.status(201).json(schools);
    }
}
