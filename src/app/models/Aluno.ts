import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToMany,
    ManyToOne,
  } from 'typeorm';

  import Classes from './Classes';
  
  @Entity('Alunos')
  class Aluno {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    username: string;
  
    @Column()
    password: string;
  
    @Column()
    avatar: string;

    @Column()
    name: string;
    
    //Onde eu coloco que um aluno pode estar em várias classes
    @ManyToOne (()=> Classes, classes=> classes.aluno)
    @Column()
    classes: Classes;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Aluno;