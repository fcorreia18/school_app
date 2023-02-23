import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToMany,
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

    @Column()
    province: string;

    @Column()
    county: string;

    @Column()
    contact: number;

    @Column()
    acronym: string;

    @Column()
    website: string;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
    latitude: number;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
    longitude: number;

    @Column()
    responsible: string;

    @Column()
    responsible_number: number;

    @Column()
    responsible_identity: string;

    @Column()
    about: string;

    @Column()
    license: string;

    @Column()
    dispatch: string;

    @Column()
    regime: string;

    @Column()
    capacity: number;

    @Column()
    property: string;

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

    @ManyToMany(() => Course, (course) => course.schools)
    courses: Course[];

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
