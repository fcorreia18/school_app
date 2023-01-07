import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetDegreeUseCase } from "./GetDegreeUseCase";

export class GetDegreeController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getDegreeUseCase = container.resolve(GetDegreeUseCase);

        const degrees = await getDegreeUseCase.execute();
        return res.status(201).json(degrees);
    }
}
