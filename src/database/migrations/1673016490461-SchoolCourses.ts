import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class SchoolCourses1673016490461 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "school_courses",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: "schools_id",
                        type: "uuid",
                    },
                    {
                        name: "courses_id",
                        type: "uuid",
                    },
                ],
                foreignKeys: [
                    {
                        name: "School",
                        referencedTableName: "schools",
                        referencedColumnNames: ["id"],
                        columnNames: ["schools_id"],
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
        await queryRunner.dropTable("school_courses");
    }
}
