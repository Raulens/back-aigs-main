import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
    UpdateDateColumn,
  } from 'typeorm';

  import Teams from './Teams';
  import Professor from './Professor'

  import {v4 as uuid} from 'uuid'

  
  @Entity('Decisoes')
  class Decisoes {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Teams)
    @JoinColumn({ name: 'team_id' })
    team_id_ref: Teams;

    @ManyToOne(() => Professor)
    @JoinColumn({ name: 'professor_id' })
    professor_id_ref: Professor;
  
    @Column()
    team_id: string;
  
    @Column()
    professor_id: string;

    @Column()
    buyer_alfa: string;
  
    @Column()
    buyer_beta: string;
  
    @Column()
    buyer_omega: string;

    @Column()
    client_deadline_alfa: string;

    @Column()
    client_deadline_beta: string;

    @Column()
    client_deadline_omega: string;

    @Column()
    comission: string;

    @Column()
    comments: string;

    @Column()
    comercial_budget_alfa: string;

    @Column()
    comercial_budget_beta: string;

    @Column()
    comercial_budget_omega: string;

    @Column()
    deadline_alfa: string;

    @Column()
    deadline_beta: string;

    @Column()
    deadline_omega: string;

    @Column()
    dividends: string;

    @Column()
    expected_sales_alfa: string;

    @Column()
    expected_sales_beta: string;

    @Column()
    expected_sales_omega: string;

    @Column()
    fired_workers: string;

    @Column()
    hired_workers: string;

    @Column()
    loan_quantity: string;

    @Column()
    machine_number: string;

    @Column()
    name: string;

    @Column()
    num_enterprise: string;

    @Column()
    num_period: string;

    @Column()
    other_expenses: string;

    @Column()
    other_recipes: string;

    @Column()
    prevision_alfa: string;

    @Column()
    prevision_beta: string;

    @Column()
    prevision_omega: string;

    @Column()
    price_alfa: string;

    @Column()
    price_beta: string;

    @Column()
    price_omega: string;

    @Column()
    production_alfa: string;

    @Column()
    production_beta: string;

    @Column()
    production_omega: string;

    @Column()
    promocional_budget_alfa: string;

    @Column()
    promocional_budget_beta: string;

    @Column()
    promocional_budget_omega: string;

    @Column()
    quantity_alfa: string;

    @Column()
    quantity_beta: string;

    @Column()
    quantity_omega: string;

    @Column()
    salary_index: string;

    @Column()
    sellers_number_alfa: string;

    @Column()
    sellers_number_beta: string;

    @Column()
    sellers_number_omega: string;

    @Column()
    sellers_salary: string;

    @Column()
    selling_price_alfa: string;

    @Column()
    selling_price_beta: string;

    @Column()
    selling_price_omega: string;

    @Column()
    machine_type: string;

    @Column()
    train_and_benefit: string;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
      if(!this.id) {
        this.id = uuid();
      }
    }
  }



  
  export default Decisoes;
