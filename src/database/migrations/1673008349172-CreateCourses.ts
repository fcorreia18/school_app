import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCourses1673008349172 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "courses",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "duration",
                        type: "integer",
                    },
                    {
                        name: "degree_id",
                        type: "uuid",
                    },
                    {
                        name: "schools_id",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "DegreeCourses",
                        columnNames: ["degree_id"],
                        referencedTableName: "degrees",
                        referencedColumnNames: ["id"],
                    },
                    {
                        name: "Schools",
                        referencedTableName: "schools",
                        referencedColumnNames: ["id"],
                        columnNames: ["schools_id"],
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("courses");
    }
}
