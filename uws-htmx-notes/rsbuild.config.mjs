import { defineConfig, rspack } from "@rsbuild/core";

const node = {
  source: {
    entry: {
      index: "./src/server.js",
    },
  },
  output: {
    target: "node",
  },
};

const web = {
  source: {
    entry: {
      index: "./src/index.client.js",
    },
  },
  output: {
    target: "web",
  },
};

export default defineConfig({
  environments: {
    web,
    node,
  },

  // source: {
  //   entry: {
  //     index: "./src/index.js",
  //     dashboard: "./src/dashboard.js",
  //   },
  // },
  // output: {
  //   filename: {
  //     html: "[name].html",
  //   },
  // },
  // html: {
  //   template: "./public/template.html",
  //   templateParameters(defaultValue, { entryName }) {
  //     const params = {
  //       index: {
  //         ...defaultValue,
  //         type: "Foo",
  //         title: "foo",
  //       },
  //       dashboard: {
  //         ...defaultValue,
  //         type: "Bar",
  //         title: "foo",
  //         hello: "world",
  //       },
  //     };
  //     return params[entryName] || defaultValue;
  //   },
  // },

  module: {
    rules: [
      {
        test: /\.woff2$/,
        type: "asset",
      },
    ],
  },
});
