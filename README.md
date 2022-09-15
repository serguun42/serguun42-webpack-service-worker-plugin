# serguun42 Webpack ServiceWorker Plugin

Plugin used to minify, link and build Service Worker for Webpack.

Unlike `workbox-webpack-plugin`, this plugin's primary task is to build

### Usage

In webpack config (`webpack.config.js`):

```javascript
const WebpackSWPlugin = require("serguun42-webpack-service-worker-plugin")ж

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
			swSrc: "src/service-worker.js",
			/** Inside build folder */
			swOutput: "js/sw.js"
		}),
		…
	]
}
```

### Config

| name     | description/type                                                                            |
| -------- | ------------------------------------------------------------------------------------------- |
| `source` | Path of ServiceWorker entry (_main_) file relative to `webpack.config.js` or project's root |
| `output` | Path of minified, linked and built ServiceWorker file inside of build folder                |

---

### [BSL-1.0 License](./LICENSE)
