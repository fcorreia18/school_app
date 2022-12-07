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
                        name: "longitude",
                        type: "decimal",
                        scale: 10,
                        precision: 2,
                    },
                    {
                        name: "latitude",
                        type: "decimal",
                        scale: 10,
                        precision: 2,
                    },
                    {
                        name: "about",
                        type: "text",
                    },
                    {
                        name: "open_on_weekends",
                        type: "boolean",
                        default: false,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("schools");
    }
}
