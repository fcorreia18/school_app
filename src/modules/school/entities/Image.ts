import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { School } from "./School";

@Entity("images")
export default class Image {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    path: string;

    school_id: string;

    @ManyToOne(() => School, (school) => school.images)
    @JoinColumn({ name: "school_id" })
    school: School;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
