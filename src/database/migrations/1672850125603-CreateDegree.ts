import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDegree1672850125603 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "degrees",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                    },
                    {
                        name: "name",
                        type: "varchar",
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
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("degrees");
    }
}
