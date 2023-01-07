import { Entity, JoinTable, OneToOne, PrimaryColumn } from "typeorm";

import { Course } from "./Course";
import { Subject } from "./Subject";

@Entity("subject_courses")
export class SubjectCourse {
    @PrimaryColumn({ type: "uuid" })
    subjects_id: string;

    @PrimaryColumn({ type: "uuid" })
    courses_id: string;

    @OneToOne(() => Subject)
    @JoinTable()
    subject: Subject;

    @OneToOne(() => Course)
    @JoinTable()
    course: Course;
}
