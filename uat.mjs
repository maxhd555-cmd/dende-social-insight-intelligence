import fs from 'node:fs';

const app=fs.readFileSync(new URL('./app-v6.js',import.meta.url),'utf8');
const index=fs.readFileSync(new URL('./index.html',import.meta.url),'utf8');
const sw=fs.readFileSync(new URL('./sw.js',import.meta.url),'utf8');
const theme=fs.readFileSync(new URL('./theme-blue-yellow.css',import.meta.url),'utf8');
const routes=['dashboard','workspaces','projects','brands','sources','import','connections','connectors','posts','comments','search','keywords','insights','competitors','reports','ai','trends','suspicious','transcripts','tasks','team','automations','mcp-server','users','roles','audit','ai/settings','notifications/settings','system/queue','system/backups','system/monitor'];
const required=['routeSamples','dashProfiles','applyDashboardState','data-uat-table','filterRows','runLocalAction','localStorage','sidebar-collapsed','UAT PASS'];
const failures=[];
for(const route of routes)if(!app.includes(route))failures.push(`route missing: ${route}`);
for(const token of required)if(!(app+theme).includes(token))failures.push(`UAT behavior missing: ${token}`);
if(!index.includes('theme-blue-yellow.css?v=3'))failures.push('theme cache-bust v3 missing');
if(!index.includes('app-v6.js?v=15'))failures.push('app cache-bust v15 missing');
if(!sw.includes('dende-social-insight-v21-font-filters'))failures.push('service-worker font/filter cache missing');
if(failures.length){console.error(`UAT STATIC FAIL (${failures.length})`);for(const failure of failures)console.error(`- ${failure}`);process.exit(1)}
console.log(`UAT STATIC PASS · ${routes.length}/${routes.length} routes · demo data/action hooks present · cache versions aligned`);
