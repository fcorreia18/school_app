import {
    Entity,
    JoinColumn,
    JoinTable,
    OneToOne,
    PrimaryColumn,
} from "typeorm";

import { Course } from "./Course";
import { School } from "./School";

@Entity("school_courses")
export class SchoolCourse {
    @PrimaryColumn({ type: "uuid" })
    schools_id: string;

    @PrimaryColumn({ type: "uuid" })
    courses_id: string;

    @OneToOne(() => School)
    @JoinColumn([{ name: "schools_id", referencedColumnName: "id" }])
    school: School;

    @OneToOne(() => Course)
    @JoinColumn([{ name: "courses_id", referencedColumnName: "id" }])
    course: Course;
}
