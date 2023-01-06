import { inject, injectable } from "tsyringe";

import { School } from "../../entities/School";
import { ISchoolRepository } from "../../repositories/ISchoolRepository";
// import GetSchoolsImagesUseCase from "./GetSchoolsImagesUseCase";

interface IResponse {
    schools: School[];
    image?: {
        id: string;
        url: string;
    }[];
}
@injectable()
export class GetSchoolsUseCase {
    constructor(
        @inject("SchoolRepository")
        private schoolRepository: ISchoolRepository
    ) {}
    async execute(): Promise<IResponse> {
        const schools = await this.schoolRepository.list();
        if (schools) {
            // const [image] = schools.map((school) => school.images);
            const res: IResponse = {
                schools,
                // image: GetSchoolsImagesUseCase.renderMany(image),
            };
            return res;
        }
    }
}
