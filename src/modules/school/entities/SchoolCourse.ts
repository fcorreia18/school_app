import {
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Course } from "./Course";
import { School } from "./School";

@Entity("school_courses")
export class SchoolCourse {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

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

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
