module.exports = {
    presets: [
      ["@babel/preset-env", { targets: { node: "current" } }], //current
      "@babel/preset-typescript",
    ],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@modules": "./src/modules",
            "@config": "./src/config",
            "@shared": "./src/shared",
            "@errors": "./src/shared/errors",
            "@utils": "./src/utils",
            "@database": "./src/database",
            "@src": "./src",
          },
        },
      ],
      "babel-plugin-transform-typescript-metadata",
      ["@babel/plugin-transform-reserved-words"],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
    ],
  };