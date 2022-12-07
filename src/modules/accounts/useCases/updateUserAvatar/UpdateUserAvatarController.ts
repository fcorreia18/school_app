import { Request, Response } from "express";
import fs from "fs";
import { container } from "tsyringe";

import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

export class UpdateUserAvatarController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { file } = req;
        const { filename: avatar_file } = file;
        const { id: user_id } = req.user;

        const updateUserAvatarUseCase = container.resolve(
            UpdateUserAvatarUseCase
        );
        await updateUserAvatarUseCase.execute({ user_id, avatar_file });
        return res.status(204).json();
    }
}
