import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'bookings' })
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'uuid' })
  slotId!: string;

  @Column({ type: 'uuid' })
  clientId!: string;

  @Column({ type: 'uuid' })
  offerId!: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;
}
