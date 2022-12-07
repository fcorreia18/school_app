import { Request, Response } from "express";
import { container } from "tsyringe";

import { AutenticateUserUseCase } from "./AutenticateUserUseCase";

export class AutenticateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;
        const createUserUseCase = container.resolve(AutenticateUserUseCase);
        const response = await createUserUseCase.execute({ email, password });
        return res.status(200).json(response);
    }
}
