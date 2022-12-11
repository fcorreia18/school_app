import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSchoolUseCase } from "./CreateSchoolUseCase";

export class CreateSchoolController {
    async handle(req: Request, res: Response): Promise<Response> {
        const createSchoolUseCase = container.resolve(CreateSchoolUseCase);
        const {
            name,
            location: { lat, long },
            description,
            degree,
            about,
            open_on_weekends,
            opening_hours,
        } = req.body;

        return res.send();
    }
}

// async show(req: Request, res: Response) {
//     const { id } = req.params;
//     const orphanagesRepository = getRepository(Orphanages);
//     const orphanage = await orphanagesRepository.findOneOrFail(id, { relations: ['images'] });
//     return res.status(200).json(orphanages_view.render(orphanage));
// },

// async index(req: Request, res: Response) {
//     const orphanagesRepository = getRepository(Orphanages);
//     const orphanages = await orphanagesRepository.find({ relations: ['images'] });
//     return res.status(200).json(orphanages_view.renderMany(orphanages));
// },

// async create(req: Request, res: Response) {
//     const {
//         name,
//         longitude,
//         latitude,
//         open_on_weekends,
//         opening_hours,
//         instrutions,
//         about
//     } = req.body;
//     const orphanagesRepository = getRepository(Orphanages);

//     const requestImages = req.files as Express.Multer.File[];
//     const images = requestImages.map(image => { return { path: image.filename } })

//     const data = {
//         name,
//         longitude,
//         latitude,
//         open_on_weekends,
//         opening_hours,
//         instrutions,
//         about,
//         images
//     }

//     const schema = Yup.object().shape({
//         name: Yup.string().required('Nome é obrigatório'),
//         longitude: Yup.number().required(),
//         latitude: Yup.number().required(),
//         open_on_weekends: Yup.boolean().required(),
//         opening_hours: Yup.string().required(),
//         instrutions: Yup.string().required(),
//         about: Yup.string().required().max(300),
//         images: Yup.array(
//             Yup.object().shape({
//                 path: Yup.string().required()
//             }))
//     })
//     await schema.validate(data, {
//         abortEarly: false
//     })

//     const orphanage = orphanagesRepository.create(data);
//     await orphanagesRepository.save(orphanage);

//     res.status(201).json(orphanage);
// }
