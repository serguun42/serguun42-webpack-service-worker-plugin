const path = require('path');
const { EntryPlugin } = require('webpack');

class WebpackSWPlugin {
  /** @type {import("./index").WebpackSWPluginOptions} */
  static DEFAULT_OPTIONS = {
    source: 'src/service-worker.js',
    output: 'service-worker.js',
  };

  /** @type {import("./index").WebpackSWPluginOptions} */
  config = {};

  pluginName = WebpackSWPlugin.name;

  /**
   * @param {import('./index').WebpackSWPluginOptions} options
   */
  constructor(options = {}) {
    this.config = {
      ...WebpackSWPlugin.DEFAULT_OPTIONS,
      ...options,
    };
  }

  /** @param {import("webpack").Compiler} compiler */
  apply(compiler) {
    compiler.hooks.make.tapPromise(this.pluginName, (compilation) =>
      this.make(compilation, compiler).catch((error) => compilation.errors.push(error))
    );
  }

  /**
   * @param {import("webpack").Compilation} compilation
   * @param {import("webpack").Compiler} parentCompiler
   * @returns {Promise<void>}
   */
  make(compilation, parentCompiler) {
    const outputOptions = {
      path: parentCompiler.options.output.path,
      filename: this.config.output,
    };

    if (path.resolve(outputOptions.filename) === path.normalize(outputOptions.filename))
      outputOptions.filename = path.relative(outputOptions.path, outputOptions.filename);

    const childCompiler = compilation.createChildCompiler(this.pluginName, outputOptions, []);

    childCompiler.context = parentCompiler.context;
    childCompiler.inputFileSystem = parentCompiler.inputFileSystem;
    childCompiler.outputFileSystem = parentCompiler.outputFileSystem;

    new EntryPlugin(parentCompiler.context, this.config.source, this.pluginName).apply(childCompiler);

    return new Promise((resolve, reject) => {
      childCompiler.runAsChild((error, _entries, childCompilation) => {
        if (error) {
          reject(error);
        } else {
          compilation.warnings = compilation.warnings.concat(childCompilation?.warnings || []);
          compilation.errors = compilation.errors.concat(childCompilation?.errors || []);

          resolve();
        }
      });
    });
  }
}

module.exports = WebpackSWPlugin;
