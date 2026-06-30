# Portfolio Frontend

React + Vite portfolio site with blog/admin. Deploys to Vercel.

## Run locally
    npm install
    cp .env.example .env
    npm run dev            # http://localhost:5173
(Needs the backend running separately for /blog and /admin.)

## Build (production)
    npm run build          # output: frontend/dist/public

## Deploy (Vercel)
Config in `vercel.json` (build, output dir, SPA rewrites). Set
`VITE_API_BASE_URL` to the deployed backend URL in Vercel env vars.
