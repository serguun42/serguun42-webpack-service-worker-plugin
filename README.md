# serguun42 Webpack Service Worker Plugin

Plugin used to minify, link and build Service Worker for Webpack. Unlike `workbox-webpack-plugin`, this plugin's primary task is to compile existing Service Worker with all plugins – not to generate new SW or inject chunks of boilerplate code.

## Usage

Suitable for _webpack v4_ and _webpack v5_:

```json
"peerDependencies": {
	"webpack": "^4.4.0 || ^5.9.0"
}
```

1. Install with npm – `npm i github:serguun42/serguun42-webpack-service-worker-plugin`.
2. In webpack config (_usually `webpack.config.js`_):

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
			/** Relative to project's root */
			source: "src/service-worker.js",
			/** Relative to build/dist folder */
			output: "js/sw.js"
		}),
		…
	]
}
```

### Config

| name     | description/type                                                                       | default                 |
| -------- | -------------------------------------------------------------------------------------- | ----------------------- |
| `source` | Path of Service Worker entry/main/single file relative to project's root               | `src/service-worker.js` |
| `output` | Path of minified, linked and built Service Worker file inside relative to build folder | `service-worker.js`     |

Generally can be used to side-compile any non-SW code, just change these two parameters.

---

### [BSL-1.0 License](./LICENSE)
