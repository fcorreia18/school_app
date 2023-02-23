import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterSchoolAddMoreFields1677143665976
    implements MigrationInterface
{
    name = "AlterSchoolAddMoreFields1677143665976";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "schools",
            new TableColumn({
                name: "responsible",
                type: "varchar",
                isNullable: true,
            })
        );

        await queryRunner.addColumn(
            "schools",
            new TableColumn({
                name: "responsible_number",
                type: "int",
                isNullable: true,
            })
        );

        await queryRunner.addColumn(
            "schools",
            new TableColumn({
                name: "responsible_identity",
                type: "varchar",
                isNullable: true,
            })
        );
        await queryRunner.addColumn(
            "schools",
            new TableColumn({
                name: "license",
                type: "varchar",
                isNullable: true,
            })
        );

        await queryRunner.addColumn(
            "schools",
            new TableColumn({
                name: "dispatch",
                type: "varchar",
                isNullable: true,
            })
        );

        await queryRunner.addColumn(
            "schools",
            new TableColumn({
                name: "regime",
                type: "varchar",
                isNullable: true,
            })
        );

        await queryRunner.addColumn(
            "schools",
            new TableColumn({
                name: "capacity",
                type: "int",
                isNullable: true,
            })
        );

        await queryRunner.addColumn(
            "schools",
            new TableColumn({
                name: "property",
                type: "varchar",
                isNullable: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("schools", [
            "responsible",
            "responsible_number",
            "responsible_identity",
            "license",
            "dispatch",
            "regime",
            "capacity",
            "property",
        ]);
    }
}
