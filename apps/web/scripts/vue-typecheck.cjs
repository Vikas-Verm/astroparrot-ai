const path = require("node:path");

// Keep the web app on its own TypeScript version when npm hoists another
// workspace's TypeScript package to the repository root.
const vueTsc = require(path.resolve(__dirname, "../../../node_modules/vue-tsc"));
const localTypeScript = require.resolve("../node_modules/typescript/lib/tsc");

vueTsc.run(localTypeScript);
