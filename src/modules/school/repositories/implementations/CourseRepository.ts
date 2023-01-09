import { Repository } from "typeorm";

import { AppDataSource } from "../../../../data-source";
import { ICreateCourseDTO } from "../../dtos/ICreateCourseDTO";
import { Course } from "../../entities/Course";
import { SchoolCourse } from "../../entities/SchoolCourse";
import { ICourseRepository } from "../ICourseRepository";

export class CourseRepository implements ICourseRepository {
    courseRepository: Repository<Course>;
    constructor() {
        this.courseRepository = AppDataSource.getRepository(Course);
    }

    async create(Course: ICreateCourseDTO): Promise<Course> {
        const newCoursee = this.courseRepository.create(Course);
        const createCoursee = await this.courseRepository.save(newCoursee);
        return createCoursee;
    }

    async list(): Promise<Course[]> {
        // const schoolsCourses = await AppDataSource.manager.find(SchoolCourse, {
        //     relations: {
        //         school: true,
        //     },
        // });
        const courses = await AppDataSource.manager.find(Course, {
            relations: {
                degree: true,
                // schools: true,
            },
        }); // , {relations: { courses: true },}
        // console.log(schoolsCourses);
        return courses;
    }
    async findById(id: string): Promise<Course | undefined> {
        const school = await this.courseRepository.findOneBy({ id });
        return school;
    }
    async findByName(name: string): Promise<Course | undefined> {
        const course = await this.courseRepository.findOneBy({ name });
        return course;
    }
}
