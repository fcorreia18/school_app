import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateDegreeUseCase } from "./UpdateDegreeUseCase";

export class UpdateDegreeController {
    async handle(req: Request, res: Response): Promise<Response> {
        const updateDegreeUseCase = container.resolve(UpdateDegreeUseCase);
        const { id } = req.params;
        console.log(id, "aqui tem");
        const { name, courses } = req.body;
        const degree = await updateDegreeUseCase.execute(id, { name, courses });
        return res.status(201).json(degree);
    }
}
