import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { offerStatusSchema, type OfferStatus } from '@wls/shared';

@Entity({ name: 'offers' })
export class Offer {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'uuid' })
  slotId!: string;

  @Column({ type: 'uuid' })
  waitlistEntryId!: string;

  @Column({ type: 'enum', enum: offerStatusSchema.options })
  status!: OfferStatus;

  @Column({ type: 'timestamptz' })
  sentAt!: Date;

  @Column({ type: 'timestamptz' })
  expiresAt!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  respondedAt!: Date | null;
}
