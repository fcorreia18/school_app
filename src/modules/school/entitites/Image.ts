import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
} from "typeorm";

import { School } from "./School";

@Entity("images")
export default class Image {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    path: string;

    school_id: number;

    @ManyToOne(() => School, (school) => school.images)
    @JoinColumn({ name: "school_id" })
    school: School;
}
