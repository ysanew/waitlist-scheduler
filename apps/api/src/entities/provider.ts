import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'providers' })
export class Provider {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 100 })
  name!: string;
}
