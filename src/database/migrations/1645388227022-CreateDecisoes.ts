import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateDecisoes1645388227022 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'decisoes',
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
          },
          {
            name: 'professor_id',
            type: 'varchar',
          },
          {
            name: 'buyer_alfa',
            type: 'varchar',
          },
          {
            name: 'buyer_beta',
            type: 'varchar',
          },
          {
            name: 'buyer_omega',
            type: 'varchar',
          },
          {
            name: 'client_deadline_alfa',
            type: 'varchar',
          },
          {
            name: 'client_deadline_beta',
            type: 'varchar',
          },
          {
            name: 'client_deadline_omega',
            type: 'varchar',
          },
          {
            name: 'comission',
            type: 'varchar',
          },
          {
            name: 'coments',
            type: 'varchar',
          },
          {
            name: 'comercial_budget_alfa',
            type: 'varchar',
          },
          {
            name: 'comercial_budget_beta',
            type: 'varchar',
          },
          {
            name: 'comercial_budget_omega',
            type: 'varchar',
          },
          {
            name: 'deadline_alfa',
            type: 'varchar',
          },
          {
            name: 'deadline_beta',
            type: 'varchar',
          },
          {
            name: 'deadline_omega',
            type: 'varchar',
          },
          {
            name: 'dividends',
            type: 'varchar',
          },
          {
            name: 'expected_sales_alfa',
            type: 'varchar',
          },
          {
            name: 'expected_sales_beta',
            type: 'varchar',
          },
          {
            name: 'expected_sales_omega',
            type: 'varchar',
          },
          {
            name: 'fired_workers',
            type: 'varchar',
          },
          {
            name: 'hired_workers',
            type: 'varchar',
          },
          {
            name: 'loan_quantity',
            type: 'varchar',
          },
          {
            name: 'machine_number',
            type: 'varchar',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'num_enterprise',
            type: 'varchar',
          },
          {
            name: 'num_period',
            type: 'varchar',
          },
          {
            name: 'other_expenses',
            type: 'varchar',
          },
          {
            name: 'other_recipes',
            type: 'varchar',
          },
          {
            name: 'prevision_alfa',
            type: 'varchar',
          },
          {
            name: 'prevision_beta',
            type: 'varchar',
          },
          {
            name: 'prevision_omega',
            type: 'varchar',
          },
          {
            name: 'price_alfa',
            type: 'varchar',
          },
          {
            name: 'price_beta',
            type: 'varchar',
          },
          {
            name: 'price_omega',
            type: 'varchar',
          },
          {
            name: 'production_alfa',
            type: 'varchar',
          },
          {
            name: 'production_beta',
            type: 'varchar',
          },
          {
            name: 'production_omega',
            type: 'varchar',
          },
          {
            name: 'promocional_budget_alfa',
            type: 'varchar',
          },
          {
            name: 'promocional_budget_beta',
            type: 'varchar',
          },
          {
            name: 'promocional_budget_omega',
            type: 'varchar',
          },
          {
            name: 'quantity_alfa',
            type: 'varchar',
          },
          {
            name: 'quantity_beta',
            type: 'varchar',
          },
          {
            name: 'quantity_omega',
            type: 'varchar',
          },
          {
            name: 'salary_index',
            type: 'varchar',
          },
          {
            name: 'sellers_number_alfa',
            type: 'varchar',
          },
          {
            name: 'seller_number_beta',
            type: 'varchar',
          },
          {
            name: 'seller_number_omega',
            type: 'varchar',
          },
          {
            name: 'sellers_salary',
            type: 'varchar',
          },
          {
            name: 'selling_price_alfa',
            type: 'varchar',
          },
          {
            name: 'selling_price_beta',
            type: 'varchar',
          },
          {
            name: 'selling_price_omega',
            type: 'varchar',
          },
          {
            name: 'machine_type',
            type: 'varchar',
          },
          {
            name: 'train_and_benefit',
            type: 'varchar',
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
    await queryRunner.dropTable('decisoes');
  }
}
