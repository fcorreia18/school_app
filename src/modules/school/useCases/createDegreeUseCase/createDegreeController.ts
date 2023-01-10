import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDegreeUseCase } from "./createDegreeUseCase";


export class CreateDegreeController {
    async handle(req: Request, res: Response): Promise<Response> {
        const createDegreeUseCase = container.resolve(CreateDegreeUseCase);
        const { name, courses } = req.body;
        const degree = await createDegreeUseCase.execute({ name, courses });
        return res.status(201).json(degree);
    }
}
