# Dende Social Insight Intelligence — UAT Report

Date: 28 Sep 2026
Build: v4.0.0 / blue-yellow UAT data build
Scope: front-end/PWA prototype only; all credentials, social APIs, queues, notifications, AI responses, imports and backups are simulated locally for safe UAT.

## Result

**PASS**

- 31/31 primary routes rendered successfully with active navigation, meaningful synthetic data, no blank page, and no desktop page-level horizontal overflow.
- Browser interaction UAT passed for command search, alert drawer, sidebar collapse, dashboard period control, print simulation, table filtering, detail drawer/save persistence, connector enable/disable, import simulation, AI answer simulation, and settings persistence.
- Browser error collector reported 0 uncaught errors during the interaction scenario.
- Responsive UAT passed at 390 px phone and 820 px tablet for Dashboard and a dense table route (Workspaces); page-level horizontal overflow = false and mobile navigation control is visible.
- `npm run test` passed. It executes syntax checks for `app-v6.js`, `legacy-app.js`, `local-server.mjs`, `build.mjs`, `uat.mjs`, then the static UAT check.
- Static UAT output: `UAT STATIC PASS · 31/31 routes · demo data/action hooks present · cache versions aligned`.
- `npm run build` passed and produced the static site in `dist/`.

## Route coverage

Dashboard; Workspaces; Projects; Brands & Competitors; Social Sources; Import CSV / Excel; API Connections; Connectors; Post Monitoring; Comments; Deep Search; Keyword Monitoring; Sentiment & Topic; Competitive Intelligence; Reports; AI Assistant; Trend Detection; Suspicious Activity; TikTok Transcript; งานของฉัน; Team; Automations; MCP Server; ผู้ใช้งาน; บทบาทและสิทธิ์; Audit Log; AI Settings; Notifications; Queue & Scheduler; Backup; System Monitor.

## Test data added

Synthetic UAT datasets now cover workspaces, projects, brands, social sources, users, posts, comments, search matches, keywords, topics, competitors, reports, trend signals, suspicious accounts, transcripts, tasks, team members, automations, MCP clients, roles, audit events, notification events, queue items, backups and system integrations. Test form credentials remain masked and are not real secrets.

## Interaction behavior available for UAT

Search/filter tables; select filters; date/range tabs; global command palette; alerts drawer; add/edit drawer; local save markers; connector enable/disable; import result simulation; AI response simulation; connection/analyzer/notification test feedback; queue worker/cleanup; backup; refresh/rescan; dashboard print readiness; mobile menu; desktop sidebar collapse.

## Responsive evidence

| View | Route | Client width | Scroll width | Overflow |
| --- | --- | ---: | ---: | --- |
| Phone | Dashboard | 380 | 380 | No |
| Phone | Workspaces | 390 | 390 | No |
| Tablet | Dashboard | 810 | 810 | No |
| Tablet | Workspaces | 820 | 820 | No |

Dense tables intentionally use their own horizontal table container when needed; the page itself does not overflow horizontally.

## Production boundary

This UAT validates the client prototype and its simulated workflows. It does not claim live authentication, production database writes, private social API access, real notification delivery, real AI-provider calls, or real backup/restore execution. Those require production backend contracts and credentials.
