import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

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

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
