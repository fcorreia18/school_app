import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateDegreeUseCase } from "./CreateDegreeUseCase";

export class CreateDegreeController {
    async handle(req: Request, res: Response): Promise<Response> {
        const createDegreeUseCase = container.resolve(CreateDegreeUseCase);
        const { name } = req.body;
        const degree = await createDegreeUseCase.execute({ name });
        return res.status(201).json(degree);
    }
}
