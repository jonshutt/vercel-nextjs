# Portfolio

Personal portfolio built with the Next.js App Router.

## Environment configuration
- `.env.development`, `.env.staging`, and `.env.production` drive environment-specific values.
- Each file currently exposes `NEXT_PUBLIC_ENVIRONMENT_LABEL` so the UI can announce which environment is rendered.
- Vercel sets `VERCEL_ENV` to `development`, `preview`, or `production`. The Next.js config maps `preview` deployments to the staging env file.
- Vercel dashboard overrides take precedence. Add the same variable there if you prefer to manage it outside of the repo.
- `.env` contains shared secrets such as `DATABASE_URL` for Prisma.

## Database
- Prisma models live in `prisma/schema.prisma`; `Project` powers the projects page via a server action.
- Generate the schema and push it to Neon with `npx prisma db push`.
- Seed sample projects with `npm run seed` (executes `node prisma/seed.js`).
- `src/lib/prisma.js` wraps the Prisma client to reuse a single instance in server code.

## Local development
```bash
npm install
npx prisma generate
npx prisma db push
npm run seed
npm run dev
```
Navigate to http://localhost:3000 to verify the environment banner reads "Development" and the projects list renders seeded entries.

## Deployment workflow
- Pushing feature or release branches triggers a Vercel preview build which reads `.env.staging`.
- Merging to `main` creates the production deployment which reads `.env.production`.
- GitHub Actions currently runs linting on pull requests and pushes to `main`. Extend it with build or deployment jobs as needed.

## Useful scripts
- `npm run dev` – run the development server with Turbopack.
- `npm run build` – create an optimized production build.
- `npm run lint` – lint the project with ESLint.
- `npm run seed` – seed the database via Prisma.
