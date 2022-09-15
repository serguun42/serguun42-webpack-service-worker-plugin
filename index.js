/* eslint-disable class-methods-use-this */

class WebpackSWPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('Webpack ServiceWorker Plugin', (stats) => {
      console.log(stats);
    });
  }
}

module.exports = WebpackSWPlugin;
