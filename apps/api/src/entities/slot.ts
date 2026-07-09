import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { slotStatusSchema, type SlotStatus } from '@wls/shared';

@Entity({ name: 'slots' })
export class Slot {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'uuid' })
  providerId!: string;

  @Column({ type: 'uuid' })
  serviceId!: string;

  @Column({ type: 'timestamptz' })
  startTime!: Date;

  @Column({ type: 'timestamptz' })
  endTime!: Date;

  @Column({ type: 'enum', enum: slotStatusSchema.options })
  status!: SlotStatus;
}
