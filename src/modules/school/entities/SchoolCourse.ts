import { Entity, JoinTable, OneToOne, PrimaryColumn } from "typeorm";

import { Course } from "./Course";
import { School } from "./School";

@Entity("school_courses")
export class SchoolCourse {
    @PrimaryColumn({ type: "uuid" })
    schools_id: string;

    @PrimaryColumn({ type: "uuid" })
    courses_id: string;

    @OneToOne(() => School)
    @JoinTable()
    school: School;

    @OneToOne(() => Course)
    @JoinTable()
    course: Course;
}
