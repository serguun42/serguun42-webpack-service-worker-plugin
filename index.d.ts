import webpack from 'webpack';

declare namespace WebpackSWPlugin {
  interface WebpackSWPluginOptions {
    /**
     * Path of ServiceWorker entry (_main_) file relative to `webpack.config.js` or project's root
     * @default "src/service-worker.js"
     */
    source: string;
    /**
     * Path of minified, linked and built ServiceWorker file inside of build folder
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
