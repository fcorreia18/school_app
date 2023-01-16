import { Repository } from "typeorm";

import { AppDataSource } from "../../../../data-source";
import { ICreateCourseDTO } from "../../dtos/ICreateCourseDTO";
import { Course } from "../../entities/Course";
import { Degree } from "../../entities/Degree";
import { SchoolCourse } from "../../entities/SchoolCourse";
import { ICourseRepository } from "../ICourseRepository";

export class CourseRepository implements ICourseRepository {
    courseRepository: Repository<Course>;
    constructor() {
        this.courseRepository = AppDataSource.getRepository(Course);
    }

    async create({
        name,
        duration,
        degree: { name: degreeName },
    }: ICreateCourseDTO): Promise<Course> {
        const [verifyDegree] = await AppDataSource.manager.find(Degree, {
            where: {
                name: degreeName,
            },
        });
        const degreeRepository = AppDataSource.getRepository(Degree);
        if (!verifyDegree) {
            const degree = degreeRepository.create({ name: degreeName });
            await degreeRepository.save(degree);
        }
        const existingDegree = await degreeRepository.save(verifyDegree);
        const newCourse = this.courseRepository.create({
            name,
            duration,
        });
        newCourse.degree = verifyDegree;
        console.log(
            verifyDegree,
            "existing:",
            existingDegree,
            "novo curso",
            newCourse
        );
        const createCoursee = await this.courseRepository.save(newCourse);

        return createCoursee;
    }
    async update(course: Course): Promise<Course | void> {
        const updateCourse = await this.courseRepository.save(course);
        return updateCourse;
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
                schools: true,
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
