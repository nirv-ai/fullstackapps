import * as path from "path";
import type { ServeOptions } from "bun";
import { rm, stat } from "node:fs/promises";

const PROJECT_ROOT = import.meta.dir;
const PUBLIC_DIR = path.resolve(PROJECT_ROOT, "public");
const BUILD_DIR = path.resolve(PROJECT_ROOT, "build");

// TODO(noah): see if theres a `bun` way to do this
// ^ i think bun accepts all the esbuild options so there should be
await rm(BUILD_DIR, { force: true, recursive: true }).then(() =>
  Bun.build({
    entrypoints: ["./src/main.tsx"],
    outdir: BUILD_DIR,
  })
    .then((output) => {
      console.info("\n\n built output", output);
    })
    .catch((e) => {
      console.info("\n\n error in build", e);
    })
);

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
  async fetch(request) {
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
