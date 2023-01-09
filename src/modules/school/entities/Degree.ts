import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Course } from "./Course";

@Entity("degrees")
export class Degree {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => Course, (course) => course.degree, {
        cascade: ["insert", "update"],
    })
    @JoinColumn({ name: "degree_id" })
    courses: Course[];

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
