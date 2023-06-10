import * as path from "path";
import { rm } from "node:fs/promises";

const PROJECT_ROOT = import.meta.dir;
const BUILD_DIR = path.resolve(PROJECT_ROOT, "build");

// fake watching
import("./src/main.tsx").catch((e) => e);

export const buildApp = async () =>
  rm(BUILD_DIR, { force: true, recursive: true }).then(() =>
    Bun.build({
      entrypoints: ["./src/main.tsx"],
      target: "browser",
      outdir: BUILD_DIR,
    })
      .then((output) => output)
      .catch((e) => {
        console.info("\n\n error in build", e);
      })
  );
