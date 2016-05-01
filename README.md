# systems-hmr
Get React Hot Reloader working with systemjs

To reproduce:
- npm install -g jspm@beta
- npm install
- jspm install
- npm run bundle
- npm run start
- Browse to localhost:3000
- Wait for page to load (Will take a while as many files & not over HTTP 2)
- Modify Playground.js
- Observe state being destroyed
