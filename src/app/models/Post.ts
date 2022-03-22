import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Teams from './Teams';

@Entity('Posts')
class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  post_image: string;

  @Column('uuid')
  team_id: string;

  @ManyToOne(() => Teams)
  @JoinColumn({ name: 'team_id' })
  team_id_ref: Teams;

  @Column()
  title: string;

  @Column()
  body: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Post;
