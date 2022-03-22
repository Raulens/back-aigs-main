import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateClasses1645388174667 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Classes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'team_id',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'id_professor',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'semestre',
            type: 'varchar',
            //isNullable: true,
          },
          {
            name: 'ano',
            type: 'varchar',
            //isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Classes');
  }
}
