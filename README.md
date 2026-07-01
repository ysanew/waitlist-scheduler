# Waitlist Scheduler

> Fill last-minute openings automatically. When a booked slot is cancelled, Waitlist Scheduler ranks the
> best-matched people from the waitlist, sends a personalized invite, and rebooks the slot — hands-free.

**Status:** 🚧 In active development (portfolio project).

---

## Overview

Service businesses lose revenue every time a booked appointment is cancelled last-minute and the slot goes
unfilled. **Waitlist Scheduler** turns that waitlist into an automated rebooking engine:

1. Clients join a **waitlist** with their preferences (preferred provider, time windows, service, urgency).
2. When a slot **frees up**, a **matching engine** ranks waiting clients against that specific slot.
3. The best candidate gets a **personalized invite** (message drafted by an LLM, with a deterministic fallback).
4. They **confirm or decline**. On confirm → the slot is **booked**. On decline/timeout → the offer
   **cascades** to the next-best candidate automatically, handled by a background worker.

The domain is intentionally generic (any appointment-based business), not tied to any specific vertical.

## Tech Stack

| Layer      | Technology                                                |
| ---------- | --------------------------------------------------------- |
| Frontend   | React + Vite + MUI, TanStack Query, React Hook Form       |
| Backend    | Node.js + TypeScript, Express, TypeORM, PostgreSQL, Zod   |
| Async jobs | BullMQ + Redis (offer expiry, cascade, outreach dispatch) |
| Auth       | Firebase Auth                                             |
| AI         | Anthropic Claude (with a deterministic fallback)          |
| Testing    | Vitest (unit + integration), Supertest, Playwright (E2E)  |
| Tooling    | pnpm workspaces, ESLint, Prettier, Husky, commitlint      |
| Infra / CI | Docker Compose, GitHub Actions, free-tier cloud deploy    |

## Repository Structure

```txt
waitlist-scheduler/
├── apps/
│   ├── api/            # Express + TypeORM + BullMQ workers
│   └── web/            # React + Vite + MUI
├── packages/
│   └── shared/         # Zod schemas + inferred types (shared by api & web)
├── docker-compose.yml  # local Postgres + Redis
└── docs/               # architecture decisions, test plan, AI usage
```

## Getting Started

**Prerequisites:** Node.js ≥ 20, pnpm 10, Docker.

```bash
# 1. Install dependencies (all workspaces)
pnpm install

# 2. Create your local env file
cp .env.example .env

# 3. Start local infrastructure (Postgres + Redis)
docker compose up -d --wait
```

More app-level commands (`pnpm dev`, `pnpm test`) are added as the apps are built out.

## Development Workflow

- **Branches:** one branch per task (`feat/…`, `fix/…`, `chore/…`, `docs/…`).
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org), enforced by commitlint.
- **Pre-commit:** ESLint + Prettier run on staged files via Husky + lint-staged.
- **Merges:** squash-merge into `main` via Pull Request.

## License

Personal project.
