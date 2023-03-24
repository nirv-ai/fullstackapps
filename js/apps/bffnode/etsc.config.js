// @see https://github.com/evanw/esbuild/issues/69
const define = {};

for (const k in process.env) {
  define[`process.env.${k}`] = JSON.stringify(process.env[k]);
}

export default {
  // Supports all esbuild.build options
  esbuild: {
    define,
    format: "esm",
    minify: false,
    target: "es2022",
  },
  // Prebuild hook
  prebuild: async () => {
    const rimraf = (await import("rimraf")).default;
    rimraf.sync("./dist"); // clean up dist folder
  },
  // Postbuild hook
  postbuild: async () => {
    console.log("postbuild");
    const cpy = (await import("cpy")).default;
    await cpy(
      [
        "src/**/*.json", // Copy all .json files
        "!src/**/*.{tsx,ts,js,jsx}", // Ignore already built files
      ],
      "dist/src"
    );
  },
};
