const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/songyang/projects/Lynnes001.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-components-aboutme-js": hot(preferDefault(require("/Users/songyang/projects/Lynnes001.github.io/src/pages/components/aboutme.js"))),
  "component---src-pages-components-contents-js": hot(preferDefault(require("/Users/songyang/projects/Lynnes001.github.io/src/pages/components/contents.js"))),
  "component---src-pages-components-header-js": hot(preferDefault(require("/Users/songyang/projects/Lynnes001.github.io/src/pages/components/header.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/songyang/projects/Lynnes001.github.io/src/pages/index.js")))
}

