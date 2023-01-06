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
                        name: "degree",
                        type: "varchar",
                    },
                    {
                        name: "open_on_weekends",
                        type: "boolean",
                        default: false,
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
                    {
                        name: "heros_id",
                        type: "int",
                    },
                    {
                        name: "skills_id",
                        type: "int",
                    },
                ],
                foreignKeys: [
                    {
                        name: "Hero",
                        referencedTableName: "heros",
                        referencedColumnNames: ["id"],
                        columnNames: ["heros_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "Skill",
                        referencedTableName: "skills",
                        referencedColumnNames: ["id"],
                        columnNames: ["skills_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("schools");
    }
}
