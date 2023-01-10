import { Repository } from "typeorm";

import { AppDataSource } from "../../../../data-source";
import { ICreateSchoolCourseDTO } from "../../dtos/ICreateSchoolCourseDTO";
import { Course } from "../../entities/Course";
import { School } from "../../entities/School";
import { SchoolCourse } from "../../entities/SchoolCourse";
import { ISchoolCourseRepository } from "../ISchoolCourseRepository";

export class SchoolCourseRepository implements ISchoolCourseRepository {
    schoolCourseRepository: Repository<SchoolCourse>;
    constructor() {
        this.schoolCourseRepository = AppDataSource.getRepository(SchoolCourse);
    }

    async createSchoolCourse({
        schools,
        courses,
    }: ICreateSchoolCourseDTO): Promise<SchoolCourse[]> {
        const newSchoolCourse = courses.map((course) =>
            this.schoolCourseRepository.create({
                schools_id: schools,
                courses_id: course,
            })
        );

        const createSchoolCourse = await this.schoolCourseRepository.save(
            newSchoolCourse
        );
        return createSchoolCourse;
    }

    async list(): Promise<SchoolCourse[]> {
        const schoolsCourses = await AppDataSource.manager.find(SchoolCourse, {
            relations: {
                school: true,
                course: true,
            },
        });
        return schoolsCourses;
    }

    async genericFind({ province, degree, course }): Promise<{
        courses?: Course[];
        schools?: School[];
    } | void> {
        const courses = await AppDataSource.manager.find(Course, {
            where: {
                name: degree,
            },
            relations: {
                // courses: true,
                // courses: true,
            },
        });
        const result = await AppDataSource.manager.find(School, {
            where: {
                province,
            },
            relations: {
                images: true,
                // courses: true,
            },
        });
        if (courses && result) {
            return {
                courses,
                schools: result,
            };
        }
        // eslint-disable-next-line consistent-return, no-useless-return
        return;
    }
}
