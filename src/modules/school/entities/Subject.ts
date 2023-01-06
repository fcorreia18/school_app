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

    @ManyToMany(() => Course, (course) => course.subjects)
    @JoinColumn({ name: "course_id" })
    courses: Course[];
    // @PrimaryColumn({ type: "int" })
    // skills_id: number;

    // @PrimaryColumn({ type: "int" })
    // heros_id: number;

    // @OneToOne(() => Hero)
    // @JoinTable()
    // hero: Hero;

    // @OneToOne(() => Skill)
    // @JoinTable()
    // skill: Skill;
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
