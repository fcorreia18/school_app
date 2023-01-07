import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Degree } from "./Degree";
import { School } from "./School";
import { Subject } from "./Subject";

@Entity("courses")
export class Course {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    name: string;

    @Column()
    duration: number;

    degree_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Degree, (degree) => degree.courses)
    degree: Degree;

    @ManyToMany(() => School, (school) => school.courses)
    @JoinTable({ name: "school_courses" })
    schools: School[];

    @OneToMany(() => Subject, (subject) => subject.courses, {
        cascade: ["insert", "update"],
    })
    @JoinColumn({ name: "course_id" })
    subjects: Subject[];

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
