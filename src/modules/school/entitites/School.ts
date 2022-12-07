import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("school")
export class School {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    location: string;

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
    @JoinColumn({ name: "orphanage_id" })
    images: Image[];
}
