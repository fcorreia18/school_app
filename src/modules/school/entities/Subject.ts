import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Course } from "./Course";

@Entity("subjects")
export class Subject {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    course_id: string;
    @ManyToOne(() => Course, (course) => course.subjects)
    @JoinColumn({ name: "course_id" })
    courses: Course[];

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
