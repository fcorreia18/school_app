import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterTableSchool1673635346584 implements MigrationInterface {
    name = "AlterTableSchool1673635346584";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "schools",
            new TableColumn({
                name: "contact",
                type: "int",
                isNullable: true,
            })
        );

        await queryRunner.addColumn(
            "schools",
            new TableColumn({
                name: "acronym",
                type: "varchar",
                isNullable: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("schools", ["contact", "acronym"]);
    }
}
