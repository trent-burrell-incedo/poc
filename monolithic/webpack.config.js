const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "monolithic"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({

      library: { type: "module" },

      // For remotes (please adjust)
      name: "monolithic",
      filename: "remoteEntry.js",
      exposes: {
        './web-components': './src/app/app.module.ts', // bootstrap --> main --> AppModule --> WebComp
      },

      // For hosts (please adjust)
      /*
      remotes: {
          'monolithic': "monolithic@http://localhost:3000/remoteEntry.js" 
      },
      */

      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};
