import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,    
    UpdateDateColumn,
    OneToMany,
  } from 'typeorm';

  import Teams from './Teams';
  import Aluno from './Aluno';
  
  @Entity('Classes')
  class Classes {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Teams)
    @JoinColumn({ name: 'team_id' })
    team_id_ref: Teams;
      
    @Column()
    team_id: string;  
  
    @Column()
    id_professor: string;

    //Aqui eu coloco que para 1 classe tem vários alunos.
    @OneToMany(()=> Aluno, aluno=> aluno.classes)
    @Column()
    aluno: Aluno[];

    @Column()
    semestre: string;
  
    @Column()
    ano: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Classes;
