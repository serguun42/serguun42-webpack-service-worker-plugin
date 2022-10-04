import webpack from 'webpack';

declare namespace WebpackSWPlugin {
  interface WebpackSWPluginOptions {
    /**
     * Path of Service Worker entry file relative to project's root
     * @default "src/service-worker.js"
     */
    source: string;
    /**
     * Path of minified, linked and built Service Worker file inside relative to build folder
     * @default "service-worker.js"
     */
    output: string;
  }
}

declare class WebpackSWPlugin {
  static DEFAULT_OPTIONS: WebpackSWPlugin.WebpackSWPluginOptions;

  config: WebpackSWPlugin.WebpackSWPluginOptions;

  pluginName: string;

  constructor(options?: WebpackSWPlugin.WebpackSWPluginOptions);

  apply(compiler: webpack.Compiler): void;

  handleMake(compilation: webpack.Compilation, parentCompiler: webpack.Compiler): Promise<void>;
}

export = WebpackSWPlugin;
