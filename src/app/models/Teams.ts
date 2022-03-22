import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';

  import {v4 as uuid} from 'uuid'

  
  @Entity('Teams')
  class Teams {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    team_type: string;
    
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
  
  export default Teams;
  