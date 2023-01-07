import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class RemoveScoolDegreeField1673091044395 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("schools", "degree");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "schools",
            new TableColumn({
                name: "degree",
                type: "varchar",
            })
        );
    }
}
