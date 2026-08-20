# NIPPON PET ID - Implementation Plan

## Product scope

NIPPON PET ID is a student MVP for pet owners to manage pet profiles, generate one QR identity per pet, mark a pet as lost, and let finders scan the QR page to contact the owner or submit a found-location report.

Out of scope: hospital, doctor, appointments, grooming, marketplace, loyalty, surveys, review map, medical-heavy records, telehealth, chat doctor.

## Route map

- `/` landing page
- `/login` demo login
- `/register` demo register
- `/dashboard` owner overview
- `/profile` owner contact profile
- `/pets` pet profiles and QR status
- `/lost-pets` public lost-pet board
- `/qr/[token]` public QR scan page and found-report form

## MVP data model

- `User`: owner account and contact data
- `Pet`: pet profile, status, QR token, health note, identifying marks
- `FoundReport`: finder contact/location/message
- `QrScanEvent`: optional scan analytics

## Backend/deploy recommendation

Recommended stack for deploy readiness:

- Next.js Route Handlers or Server Actions
- Prisma ORM
- PostgreSQL from Supabase or Neon
- Vercel deployment
- Simple cookie session auth for student MVP, then upgrade to Auth.js if needed

## Phases

### Phase 1 - frontend MVP with mock data

- Refocus UI to Pet Identity & Lost Pet Finder
- Remove unrelated modules/routes
- Keep owner dashboard, profile, pets, lost pets, QR public page
- Use mock data and client demo interactions

### Phase 2 - database foundation

- Add Prisma schema
- Configure `DATABASE_URL`
- Run migration to PostgreSQL
- Add seed data

### Phase 3 - API integration

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET/PUT /api/profile`
- `GET/POST /api/pets`
- `GET/PUT/DELETE /api/pets/[id]`
- `PATCH /api/pets/[id]/status`
- `GET /api/lost-pets`
- `GET /api/public/qr/[token]`
- `POST /api/public/qr/[token]/report-found`

### Phase 4 - deploy and polish

- Deploy to Vercel
- Connect Neon/Supabase Postgres
- Add loading/error states
- Test mobile QR flow
- Prepare README, ERD, slides and demo script