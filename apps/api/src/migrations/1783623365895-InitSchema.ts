import type { MigrationInterface, QueryRunner } from 'typeorm';

export class InitSchema1783623365895 implements MigrationInterface {
  name = 'InitSchema1783623365895';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.query(
      `CREATE TABLE "services" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "durationMinutes" integer NOT NULL, CONSTRAINT "PK_ba2d347a3168a296416c6c5ccb2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "providers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, CONSTRAINT "PK_af13fc2ebf382fe0dad2e4793aa" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "clients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(255) NOT NULL, "phone" character varying(20) NOT NULL, CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."slots_status_enum" AS ENUM('open', 'held', 'booked', 'cancelled')`,
    );
    await queryRunner.query(
      `CREATE TABLE "slots" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "providerId" uuid NOT NULL, "serviceId" uuid NOT NULL, "startTime" TIMESTAMP WITH TIME ZONE NOT NULL, "endTime" TIMESTAMP WITH TIME ZONE NOT NULL, "status" "public"."slots_status_enum" NOT NULL, CONSTRAINT "PK_8b553bb1941663b63fd38405e42" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."waitlist_entries_urgency_enum" AS ENUM('low', 'normal', 'high')`,
    );
    await queryRunner.query(
      `CREATE TABLE "waitlist_entries" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "clientId" uuid NOT NULL, "serviceId" uuid NOT NULL, "preferredProviderId" uuid, "earliestTime" TIMESTAMP WITH TIME ZONE NOT NULL, "latestTime" TIMESTAMP WITH TIME ZONE NOT NULL, "urgency" "public"."waitlist_entries_urgency_enum" NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_bd0ef66fff81d3be7b7a1568a4d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."offers_status_enum" AS ENUM('pending', 'accepted', 'declined', 'expired')`,
    );
    await queryRunner.query(
      `CREATE TABLE "offers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "slotId" uuid NOT NULL, "waitlistEntryId" uuid NOT NULL, "status" "public"."offers_status_enum" NOT NULL, "sentAt" TIMESTAMP WITH TIME ZONE NOT NULL, "expiresAt" TIMESTAMP WITH TIME ZONE NOT NULL, "respondedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_4c88e956195bba85977da21b8f4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "bookings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "slotId" uuid NOT NULL, "clientId" uuid NOT NULL, "offerId" uuid NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_bee6805982cc1e248e94ce94957" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "bookings"`);
    await queryRunner.query(`DROP TABLE "offers"`);
    await queryRunner.query(`DROP TYPE "public"."offers_status_enum"`);
    await queryRunner.query(`DROP TABLE "waitlist_entries"`);
    await queryRunner.query(`DROP TYPE "public"."waitlist_entries_urgency_enum"`);
    await queryRunner.query(`DROP TABLE "slots"`);
    await queryRunner.query(`DROP TYPE "public"."slots_status_enum"`);
    await queryRunner.query(`DROP TABLE "clients"`);
    await queryRunner.query(`DROP TABLE "providers"`);
    await queryRunner.query(`DROP TABLE "services"`);
  }
}
