import { MigrationInterface, QueryRunner, Table, Column } from "typeorm";

export class Initial1587490698554 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        queryRunner.dropTable('tools')
    }

}
