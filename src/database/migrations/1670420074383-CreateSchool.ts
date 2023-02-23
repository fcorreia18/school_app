import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSchool1670420074383 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "schools",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "opening_hours",
                        type: "varchar",
                    },
                    {
                        name: "province",
                        type: "varchar",
                    },
                    {
                        name: "county",
                        type: "varchar",
                    },
                    {
                        name: "longitude",
                        type: "float8",
                    },
                    {
                        name: "latitude",
                        type: "float8",
                    },
                    {
                        name: "about",
                        type: "text",
                    },
                    {
                        name: "degree",
                        type: "varchar",
                    },
                    {
                        name: "open_on_weekends",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "website",
                        type: "varchar",
                        isNullable: true,
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
                // foreignKeys: [
                //     {
                //         name: "Course",
                //         referencedTableName: "courses",
                //         referencedColumnNames: ["id"],
                //         columnNames: ["course_id"],
                //     },
                // ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("schools");
    }
}
