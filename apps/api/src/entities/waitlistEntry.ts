import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { urgencySchema, type Urgency } from '@wls/shared';

@Entity({ name: 'waitlist_entries' })
export class WaitlistEntry {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'uuid' })
  clientId!: string;

  @Column({ type: 'uuid' })
  serviceId!: string;

  @Column({ type: 'uuid', nullable: true })
  preferredProviderId!: string | null;

  @Column({ type: 'timestamptz' })
  earliestTime!: Date;

  @Column({ type: 'timestamptz' })
  latestTime!: Date;

  @Column({ type: 'enum', enum: urgencySchema.options })
  urgency!: Urgency;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;
}
