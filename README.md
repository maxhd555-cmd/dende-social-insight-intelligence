# SignalDesk — Social Intelligence Command Desk

SignalDesk is a from-scratch, production-style front-end/PWA reimagining of the referenced Social Intelligence product. It preserves the useful operating workflows and information architecture while using original synthetic data, original UI assets, and a modern Airtable-inspired editorial design system.

The current build is intentionally an **evidence-first client prototype**: it demonstrates the complete navigation model, investigation flows, responsive behavior, interaction states, local persistence, export, accessibility treatment, and PWA shell without pretending that private social APIs, production authentication, databases, or credentials are connected.

## Run locally

```bat
cd C:\WebApp\social-intelligence-airtable
npm start
```

Open:

```text
http://127.0.0.1:4173/#dashboard
```

No build step or third-party JavaScript dependency is required.

## What is implemented

- Full grouped navigation across **31 primary routes**: Overview, Workspace, Data Collection, Monitoring, Intelligence, AI & Detection, Team & Automation, and System.
- Redesigned **Social Intelligence Command Desk** dashboard centered on what changed → why it matters → evidence → action.
- Dedicated functional screens for Deep Search, Post Monitoring, Keyword Monitoring, Competitive Intelligence, Reports, and Automations.
- Route-specific operational surfaces for all remaining modules instead of a single repeated placeholder screen.
- KPI ribbon, engagement/comment movement chart, sentiment mix, Share of Voice, signal queue, evidence tables, activity feeds, and system/operation summaries.
- `Ctrl/Cmd + K` command palette for modules, evidence, and keywords.
- Alert drawer, evidence detail dialog, report/automation configuration dialogs, filters, date presets, search, and clear interaction feedback.
- Local persistence for demo state, saved search presets, generated reports, and created automation rules using `localStorage`.
- Real browser-side CSV export from the current filtered demo data.
- Keyboard-visible focus, focus movement/return for overlays, dialog/drawer focus trapping, semantic labels, and `prefers-reduced-motion` handling.
- Responsive desktop/tablet/mobile shell with an off-canvas navigation sheet and intentional horizontal scrolling only for dense data tables.
- PWA manifest, shortcuts, service worker, offline shell, and versioned/network-first script/style updating to avoid stale-code mismatches.

## Visual system

The shipped design is documented in [`DESIGN.md`](./DESIGN.md) and `.impeccable/design.json`. The system uses:

- IBM Plex Sans Thai / IBM Plex Sans typography.
- White work canvas with a cool paper-gray shell and near-black primary actions.
- Hairline separation and flat content surfaces by default.
- Coral, forest, cream, mint, peach, yellow, and mustard as selective full-surface analytical moments.
- A 6/10/12/16px radius hierarchy and a 4px-derived spacing rhythm.
- Shadows only for detached floating layers such as dialogs, command palette, and toasts.

## PWA update behavior

The service worker uses cache `signaldesk-v3`. Navigation is network-first with an offline HTML fallback. Same-origin JavaScript and CSS are also network-first with cache fallback, and the main assets are versioned (`app.js?v=3`, `styles.css?v=3`) so an updated HTML shell cannot silently pair with an older cached runtime.

## Validation performed

- `npm run check` / Node syntax validation for `app.js` and `server.js`.
- Browser traversal of all 31 navigation routes with active-route verification and no blocking desktop layout overflow.
- Deep Search filtering/count behavior.
- Alert drawer, Evidence dialog, Command Palette search, date presets, modal save flows, and local persistence.
- Report and Automation creation in the local demo store.
- Tablet validation at 820px and mobile validation at 390px, including off-canvas navigation and a modal fitting inside the mobile viewport.
- Service worker registration/control, manifest load, versioned asset responses, and single active `signaldesk-v3` cache.

## Production integration boundary

The current repository does **not** connect to a production database, real user authentication, private APIs, social network credentials, collectors, queues, notification providers, or proprietary source data. Those integrations require the actual backend contracts, deployment environment, permissions, and secrets. The front-end is structured so those services can replace the synthetic/local data layer without redesigning the user flows.

## Project files

- `index.html` — application shell and overlay roots.
- `styles.css` — design system, responsive rules, component states.
- `app.js` — routes, synthetic data, rendering, local interactions/persistence/export.
- `manifest.webmanifest` — PWA identity and shortcuts.
- `sw.js` — cache/update/offline behavior.
- `server.js` / `server.cjs` — local static server.
- `PRODUCT.md` — product scope and operating principles.
- `DESIGN.md` — shipped visual system.
- `.impeccable/surfaces/index-html.md` — chosen surface direction contract.
