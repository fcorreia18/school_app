import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSubjects1673013887956 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "subjects",
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
                        name: "courses_id",
                        type: "uuid",
                    },
                ],
                foreignKeys: [
                    {
                        name: "Courses",
                        referencedTableName: "courses",
                        referencedColumnNames: ["id"],
                        columnNames: ["courses_id"],
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("subjects");
    }
}
