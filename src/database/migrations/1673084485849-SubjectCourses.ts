import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class SubjectCourses1673084485849 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "subject_courses",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: "subjects_id",
                        type: "uuid",
                    },
                    {
                        name: "courses_id",
                        type: "uuid",
                    },
                ],
                foreignKeys: [
                    {
                        name: "Subject",
                        referencedTableName: "subjects",
                        referencedColumnNames: ["id"],
                        columnNames: ["subjects_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "Course",
                        referencedTableName: "courses",
                        referencedColumnNames: ["id"],
                        columnNames: ["courses_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("subject_courses");
    }
}
