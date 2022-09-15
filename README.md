# serguun42 Webpack ServiceWorker Plugin

Plugin used to minify, link and build Service Worker for Webpack. Unlike `workbox-webpack-plugin`, this plugin's primary task is to build not to generate new SW or inject large code blocks into existing one.

### Usage

Install with npm – `npm i github:serguun42/serguun42-webpack-service-worker-plugin`, use with Webpack 5+.

In webpack config (*usually `webpack.config.js`*):

```javascript
const WebpackSWPlugin = require("serguun42-webpack-service-worker-plugin");

module.exports = {
	entry: "…",
	output: {
		path: "…",,
		filename: "…",
	},
	…
	plugins: [
		…,
		new WebpackSWPlugin({
			/** Relative to webpack.config.js or project's root */
			source: "src/service-worker.js",
			/** Inside build folder */
			output: "js/sw.js"
		}),
		…
	]
}
```

### Config

| name     | description/type                                                                            | default                 |
| -------- | ------------------------------------------------------------------------------------------- | ----------------------- |
| `source` | Path of ServiceWorker entry (_main_) file relative to `webpack.config.js` or project's root | `src/service-worker.js` |
| `output` | Path of minified, linked and built ServiceWorker file inside of build folder                | `service-worker.js`     |

---

### [BSL-1.0 License](./LICENSE)
