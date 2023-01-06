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
import Image from "./Image";

@Entity("schools")
export class School {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    name: string;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
    latitude: number;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
    longitude: number;

    @Column()
    about: string;

    @Column()
    degree: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => Image, (image) => image.school, {
        cascade: ["insert", "update"],
    })
    @JoinColumn({ name: "school_id" })
    images: Image[];

    course_id: string;
    @ManyToMany(() => Course, (course) => course.schools)
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
