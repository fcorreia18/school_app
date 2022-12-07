import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateImages1670422448774 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "images",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: "path",
                        type: "varchar",
                    },
                    {
                        name: "school_id",
                        type: "uuid",
                    },
                ],
                foreignKeys: [
                    {
                        name: "ImageSchool",
                        columnNames: ["school_id"],
                        referencedTableName: "schools",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("images");
    }
}
