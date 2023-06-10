import * as path from "path";
import type { ServeOptions } from "bun";
import { stat } from "node:fs/promises";
import { buildApp } from "./devbuilder";

const PROJECT_ROOT = import.meta.dir;
const PUBLIC_DIR = path.resolve(PROJECT_ROOT, "public");
const BUILD_DIR = path.resolve(PROJECT_ROOT, "build");

// @see https://bun.sh/docs/bundler#outputs
const { outputs, success, logs, ...buildData } = await buildApp();

console.info(`built success ${success}: total files`, outputs.length);
// generally we want to figure out how to serve assets

async function serveFromDir(config: {
  directory: string;
  path: string;
}): Promise<Response | null> {
  let basePath = path.join(config.directory, config.path);
  const suffixes = ["", ".html", "index.html"];

  for (const suffix of suffixes) {
    try {
      const pathWithSuffix = path.join(basePath, suffix);
      const fd = await stat(pathWithSuffix);
      if (fd && fd.isFile()) {
        return new Response(Bun.file(pathWithSuffix));
      }
    } catch (err) {}
  }

  return null;
}

export default {
  development: true,
  error(e: Error) {
    // for server side errors
    return new Response(`<pre>${e}\n${e.stack}</pre>`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
  async fetch(request) {
    if (!success) {
      for (const message of logs) {
        // Bun will pretty print the message object
        console.error(message);
      }
      throw new Error(`build failed`);
    }

    let reqPath = new URL(request.url).pathname;
    console.log(request.method, reqPath);
    if (reqPath === "/") reqPath = "/index.html";

    // check public
    const publicResponse = await serveFromDir({
      directory: PUBLIC_DIR,
      path: reqPath,
    });
    if (publicResponse) return publicResponse;

    // check /.build
    const buildResponse = await serveFromDir({
      directory: BUILD_DIR,
      path: reqPath,
    });
    if (buildResponse) return buildResponse;

    return new Response("File not found", {
      status: 404,
    });
  },
} satisfies ServeOptions;
