# TIKÈS — Frontend demo 🇭🇹

**TIKÈS — Pou moun ki pa vle rete kote yo te kòmanse.**

A polished, Haitian Creole-first business management dashboard built with **React 18, TypeScript, Tailwind CSS, Vite, React Router, Lucide and Recharts**.

## Install / run

```bash
npm install
npm run dev
```

Open http://localhost:5173. Build with `npm run build`.

## Routes

- `/` — marketing landing page
- `/dashboard` — business overview and warnings
- `/sales` — sales recording (deducts inventory) + CSV export
- `/inventory` — add, edit, remove stock items, low-stock warnings + CSV
- `/expenses` — personal vs business expenses + reports + CSV
- `/debts` — receivable / payable tracking, mark paid
- `/goals` — personal and business savings goals with progress
- `/reports` — charts, estimated profit, CSV export
- `/personal` — separate personal finance view
- `/settings` — business name, owner name, display currency, local JSON backup and demo reset
- `/guide` — explain how to use the frontend

## Demo behavior

- All changes are saved in **browser localStorage** under `tikes-demo-v1`. They do **not** sync between devices.
- Seed records are illustrative, not real business data.
- The dashboard, forms, charts and exports work from one React context/reducer store.
- Savings goals are **manual records**, not bank transfers or account balances.
- Estimated profit = recorded sales revenue − recorded cost of goods sold − recorded business expenses. Does not include all possible taxes/fees/returns and is **not** professional accounting advice.
- Currency setting **changes the displayed unit only**, not the underlying amounts. Do not use to convert currencies.
- There is **no authentication, backend, database, payment processing, secure cloud storage, or offline PWA** yet.
- **Do not enter sensitive customer or financial data** in this demo.

## Source structure

```
src/
  components/
    layout/       # Sidebar, header, shell
    charts/       # Recharts chart components
    ui/           # Reusable controls and modal
  context/        # React context, reducer, storage
  data/           # Seed products and transactions
  lib/            # Formatting, IDs and CSV
  pages/          # Route modules
  types/          # Strongly typed entities
  App.tsx         # Routes
  main.tsx        # Providers
  styles.css      # Tailwind + app styles
```

## Future FastAPI integration

1. Implement API routes for `products`, `sales`, `expenses`, `debts`, `goals`, `reports`, `users`, and `businesses`.
2. Add an `src/api/` folder with a typed client using `fetch` or Axios.
3. Replace reducer dispatches with async API mutations and refetch/invalidate relevant data.
4. Authenticate every endpoint, scope records to the active business/user, and enforce authorization server-side.
5. Use transactions to atomically save sales and deduct stock on the backend.
6. Create a proper accounting/data model for payments, refund handling, historical cost snapshots, and currency conversion.
7. Add real offline capabilities separately if they are required for Haitian market connectivity.

## Vercel deploy

Set Framework = **Vite** and Root Directory = the folder containing `package.json` (e.g. `frontend` if inside a monorepo). `vercel.json` includes an SPA fallback rewrite so refreshing `/dashboard` doesn't cause a 404.
