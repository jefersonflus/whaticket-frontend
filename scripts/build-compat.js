#!/usr/bin/env node
"use strict";

const path = require("path");
const { spawnSync } = require("child_process");

const major = Number((process.versions.node || "0").split(".")[0]);
const reactBuildScript = path.join(
  __dirname,
  "..",
  "node_modules",
  "react-scripts",
  "scripts",
  "build.js"
);

const args = [];
if (major >= 17) {
  args.push("--openssl-legacy-provider");
}
args.push(reactBuildScript);

const env = { ...process.env };
if (!Object.prototype.hasOwnProperty.call(env, "GENERATE_SOURCEMAP")) {
  env.GENERATE_SOURCEMAP = "false";
}

const result = spawnSync(process.execPath, args, {
  stdio: "inherit",
  env
});

if (result.error) {
  console.error(result.error.message || result.error);
  process.exit(1);
}

process.exit(result.status == null ? 1 : result.status);
