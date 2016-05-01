SystemJS.config({
  transpiler: "plugin-babel",
  meta: {
    "*.js": {
      "babelOptions": {
        "stage1": true,
        "plugins": [
          [
            "react-hot-loader/babel"
          ]
        ]
      }
    }
  },
  packages: {
    "dibbs": {
      "main": "app.js"
    },
    "dibbs/actions": {
      "main": "index.js"
    },
    "dibbs/reducers": {
      "main": "index.js"
    },
    "dibbs/selectors": {
      "main": "index.js"
    },
    "dibbs/components": {
      "main": "index.js"
    },
    "dibbs/model": {
      "main": "models.js"
    },
    "dibbs/router": {
      "main": "router.js"
    },
    "dibbs/utils": {
      "main": "index.js"
    }
  },
  map: {
    "dibbs": "app",
    "dibbs/actions": "app/state/actions",
    "dibbs/model": "app/state/model",
    "dibbs/reducers": "app/state/reducers",
    "dibbs/selectors": "app/state/selectors",
    "dibbs/store": "app/state/store.js",
    "dibbs/views": "app/containers/Base/views"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "capaj/systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.5.6",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "classnames": "npm:classnames@2.2.3",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "deep-equal": "npm:deep-equal@1.0.1",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fbjs": "npm:fbjs@0.2.1",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "fuse.js": "npm:fuse.js@2.2.0",
    "history": "npm:history@1.17.0",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "invariant": "npm:invariant@2.2.1",
    "iscroll": "npm:iscroll@5.2.0",
    "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
    "js-cookie": "npm:js-cookie@2.1.0",
    "jsen": "npm:jsen@0.6.0",
    "json": "github:systemjs/plugin-json@0.1.0",
    "jss": "npm:jss@3.3.0",
    "lodash": "npm:lodash@4.11.1",
    "marked": "npm:marked@0.3.5",
    "modelizr": "npm:modelizr@0.4.14",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "moment": "npm:moment@2.12.0",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.9",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "react": "npm:react@15.0.1",
    "react-datepicker": "npm:react-datepicker@0.18.0",
    "react-dom": "npm:react-dom@15.0.0",
    "react-google-maps": "npm:react-google-maps@4.9.1",
    "react-hammerjs": "npm:react-hammerjs@0.4.5",
    "react-hot-loader": "npm:react-hot-loader@3.0.0-beta.0",
    "react-iscroll": "npm:react-iscroll@1.0.0",
    "react-motion": "npm:react-motion@0.4.2",
    "react-proxy": "npm:react-proxy@2.0.8",
    "react-redux": "npm:react-redux@4.4.2",
    "react-router": "npm:react-router@2.0.1",
    "react-router-redux": "npm:react-router-redux@4.0.0",
    "react-tap-event-plugin": "github:zilverline/react-tap-event-plugin@master",
    "react-transform": "npm:babel-plugin-react-transform@2.0.2",
    "react-transform-catch-errors": "npm:react-transform-catch-errors@1.0.2",
    "react-transform-jspm-hmr": "npm:react-transform-jspm-hmr@1.0.1",
    "react-virtualized": "npm:react-virtualized@6.0.8",
    "redbox-react": "npm:redbox-react@1.2.3",
    "redux": "npm:redux@3.4.0",
    "redux-devtools": "npm:redux-devtools@3.2.0",
    "redux-devtools-dispatch": "npm:redux-devtools-dispatch@2.0.1",
    "redux-devtools-dock-monitor": "npm:redux-devtools-dock-monitor@1.1.1",
    "redux-devtools-inspector": "npm:redux-devtools-inspector@0.3.1",
    "redux-devtools-log-monitor": "npm:redux-devtools-log-monitor@1.0.9",
    "redux-devtools-multiple-monitors": "npm:redux-devtools-multiple-monitors@1.0.0",
    "redux-thunk": "npm:redux-thunk@1.0.3",
    "seamless-immutable": "npm:seamless-immutable@4.1.1",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "text": "github:systemjs/plugin-text@0.0.4",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "github:capaj/systemjs-hot-reloader@0.5.6": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "socket.io-client": "github:socketio/socket.io-client@1.4.5",
        "weakee": "npm:weakee@1.0.0"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "github:jspm/nodelibs-domain@0.2.0-alpha": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.2.1"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:@alexkuz/react-json-tree@0.6.0-alpha1": {
      "map": {
        "babel-plugin-transform-runtime": "npm:babel-plugin-transform-runtime@6.6.0",
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "react": "npm:react@15.0.1",
        "react-mixin": "npm:react-mixin@1.7.0",
        "react-pure-render": "npm:react-pure-render@1.0.2"
      }
    },
    "npm:asap@2.0.3": {
      "map": {}
    },
    "npm:babel-code-frame@6.7.7": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "chalk": "npm:chalk@1.1.3",
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:babel-messages@6.7.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-react-transform@2.0.2": {
      "map": {
        "lodash": "npm:lodash@4.11.1"
      }
    },
    "npm:babel-plugin-syntax-decorators@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-syntax-flow@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-transform-decorators-legacy@1.3.4": {
      "map": {
        "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.5.0",
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "babel-template": "npm:babel-template@6.7.0"
      }
    },
    "npm:babel-plugin-transform-runtime@6.6.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-transform-runtime@6.7.5": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-runtime@5.8.38": {
      "map": {}
    },
    "npm:babel-runtime@6.6.1": {
      "map": {
        "core-js": "npm:core-js@2.2.2"
      }
    },
    "npm:babel-template@6.7.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-traverse": "npm:babel-traverse@6.7.6",
        "babel-types": "npm:babel-types@6.7.7",
        "babylon": "npm:babylon@6.7.0",
        "lodash": "npm:lodash@3.10.1"
      }
    },
    "npm:babel-traverse@6.7.6": {
      "map": {
        "babel-code-frame": "npm:babel-code-frame@6.7.7",
        "babel-messages": "npm:babel-messages@6.7.2",
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-types": "npm:babel-types@6.7.7",
        "babylon": "npm:babylon@6.7.0",
        "debug": "npm:debug@2.2.0",
        "globals": "npm:globals@8.18.0",
        "invariant": "npm:invariant@2.2.1",
        "lodash": "npm:lodash@3.10.1",
        "repeating": "npm:repeating@1.1.3"
      }
    },
    "npm:babel-types@6.7.7": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-traverse": "npm:babel-traverse@6.7.6",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@3.10.1",
        "to-fast-properties": "npm:to-fast-properties@1.0.2"
      }
    },
    "npm:babylon@6.7.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.8",
        "readable-stream": "npm:readable-stream@2.1.0"
      }
    },
    "npm:buffer@4.6.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:builtin-modules@1.1.1": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:camelcase-keys@2.1.0": {
      "map": {
        "camelcase": "npm:camelcase@2.1.1",
        "map-obj": "npm:map-obj@1.0.1"
      }
    },
    "npm:chalk@0.5.1": {
      "map": {
        "ansi-styles": "npm:ansi-styles@1.1.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@0.1.0",
        "strip-ansi": "npm:strip-ansi@0.3.0",
        "supports-color": "npm:supports-color@0.2.0"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:chance@1.0.1": {
      "map": {}
    },
    "npm:core-js@1.2.6": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:core-js@2.2.2": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:core-util-is@1.0.2": {
      "map": {}
    },
    "npm:css-vendor@0.3.2": {
      "map": {}
    },
    "npm:dateformat@1.0.12": {
      "map": {
        "get-stdin": "npm:get-stdin@4.0.1",
        "meow": "npm:meow@3.7.0"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:deep-extend@0.4.1": {
      "map": {}
    },
    "npm:deref@0.6.3": {
      "map": {
        "deep-extend": "npm:deep-extend@0.4.1"
      }
    },
    "npm:domain-browser@1.1.7": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "npm:error-ex@1.3.0": {
      "map": {
        "is-arrayish": "npm:is-arrayish@0.2.1"
      }
    },
    "npm:error-stack-parser@1.3.5": {
      "map": {
        "stackframe": "npm:stackframe@0.3.1"
      }
    },
    "npm:faker@3.1.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:falafel@1.2.0": {
      "map": {
        "acorn": "npm:acorn@1.2.2",
        "foreach": "npm:foreach@2.0.5",
        "isarray": "npm:isarray@0.0.1",
        "object-keys": "npm:object-keys@1.0.9"
      }
    },
    "npm:fbjs@0.2.1": {
      "map": {
        "core-js": "npm:core-js@1.2.6",
        "promise": "npm:promise@7.1.1",
        "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
      }
    },
    "npm:fbjs@0.8.1": {
      "map": {
        "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.5.0",
        "core-js": "npm:core-js@1.2.6",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "loose-envify": "npm:loose-envify@1.1.0",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.10"
      }
    },
    "npm:find-up@1.1.2": {
      "map": {
        "path-exists": "npm:path-exists@2.1.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.0"
      }
    },
    "npm:fuse.js@2.2.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:get-stdin@4.0.1": {
      "map": {}
    },
    "npm:global@4.3.0": {
      "map": {
        "min-document": "npm:min-document@2.18.0",
        "node-min-document": "npm:min-document@2.18.0",
        "process": "npm:process@0.5.2"
      }
    },
    "npm:graceful-fs@4.1.3": {
      "map": {}
    },
    "npm:hammerjs@2.0.6": {
      "map": {}
    },
    "npm:has-ansi@0.1.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@0.2.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:history@1.17.0": {
      "map": {
        "deep-equal": "npm:deep-equal@1.0.1",
        "invariant": "npm:invariant@2.2.1",
        "query-string": "npm:query-string@3.0.3",
        "warning": "npm:warning@2.1.0"
      }
    },
    "npm:history@2.0.1": {
      "map": {
        "deep-equal": "npm:deep-equal@1.0.1",
        "invariant": "npm:invariant@2.2.1",
        "query-string": "npm:query-string@3.0.3",
        "warning": "npm:warning@2.1.0"
      }
    },
    "npm:hosted-git-info@2.1.4": {
      "map": {}
    },
    "npm:iconv-lite@0.4.13": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:immutable@3.7.6": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:indent-string@2.1.0": {
      "map": {
        "repeating": "npm:repeating@2.0.0"
      }
    },
    "npm:inherits@2.0.1": {
      "map": {}
    },
    "npm:inline-process-browser@2.0.1": {
      "map": {
        "falafel": "npm:falafel@1.2.0",
        "through2": "npm:through2@0.6.5"
      }
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.1.0"
      }
    },
    "npm:is-builtin-module@1.0.0": {
      "map": {
        "builtin-modules": "npm:builtin-modules@1.1.1"
      }
    },
    "npm:is-finite@1.0.1": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:isarray@1.0.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:iscroll@5.2.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.5.1",
        "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
      }
    },
    "npm:javascript-stringify@1.1.0": {
      "map": {}
    },
    "npm:js-cookie@2.1.0": {
      "map": {}
    },
    "npm:jsen@0.6.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:json-schema-faker@0.2.15": {
      "map": {
        "chance": "npm:chance@1.0.1",
        "deref": "npm:deref@0.6.3",
        "faker": "npm:faker@3.1.0",
        "randexp": "npm:randexp@0.4.2"
      }
    },
    "npm:jsondiffpatch@0.1.41": {
      "map": {
        "chalk": "npm:chalk@0.5.1"
      }
    },
    "npm:jss-nested@1.0.3": {
      "map": {
        "jss": "npm:jss@3.3.0"
      }
    },
    "npm:jss-vendor-prefixer@1.0.1": {
      "map": {
        "css-vendor": "npm:css-vendor@0.3.2",
        "jss": "npm:jss@3.3.0"
      }
    },
    "npm:jss@3.3.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:load-json-file@1.1.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.3",
        "parse-json": "npm:parse-json@2.2.0",
        "pify": "npm:pify@2.3.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.0",
        "strip-bom": "npm:strip-bom@2.0.0"
      }
    },
    "npm:lodash._baseisequal@3.0.7": {
      "map": {
        "lodash.isarray": "npm:lodash.isarray@3.0.4",
        "lodash.istypedarray": "npm:lodash.istypedarray@3.0.5",
        "lodash.keys": "npm:lodash.keys@3.1.2"
      }
    },
    "npm:lodash.debounce@3.1.1": {
      "map": {
        "lodash._getnative": "npm:lodash._getnative@3.9.1"
      }
    },
    "npm:lodash.debounce@4.0.3": {
      "map": {}
    },
    "npm:lodash.isequal@3.0.4": {
      "map": {
        "lodash._baseisequal": "npm:lodash._baseisequal@3.0.7",
        "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1"
      }
    },
    "npm:lodash.keys@3.1.2": {
      "map": {
        "lodash._getnative": "npm:lodash._getnative@3.9.1",
        "lodash.isarguments": "npm:lodash.isarguments@3.0.8",
        "lodash.isarray": "npm:lodash.isarray@3.0.4"
      }
    },
    "npm:lodash@3.10.1": {
      "map": {}
    },
    "npm:loose-envify@1.1.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:loud-rejection@1.3.0": {
      "map": {
        "array-find-index": "npm:array-find-index@1.0.1",
        "signal-exit": "npm:signal-exit@2.1.2",
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:marker-clusterer-plus@2.1.2": {
      "map": {}
    },
    "npm:meow@3.7.0": {
      "map": {
        "camelcase-keys": "npm:camelcase-keys@2.1.0",
        "decamelize": "npm:decamelize@1.2.0",
        "loud-rejection": "npm:loud-rejection@1.3.0",
        "map-obj": "npm:map-obj@1.0.1",
        "minimist": "npm:minimist@1.2.0",
        "normalize-package-data": "npm:normalize-package-data@2.3.5",
        "object-assign": "npm:object-assign@4.0.1",
        "read-pkg-up": "npm:read-pkg-up@1.0.1",
        "redent": "npm:redent@1.0.0",
        "trim-newlines": "npm:trim-newlines@1.0.0"
      }
    },
    "npm:min-document@2.18.0": {
      "map": {
        "dom-walk": "npm:dom-walk@0.1.1"
      }
    },
    "npm:modelizr@0.4.14": {
      "map": {
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "json-schema-faker": "npm:json-schema-faker@0.2.15",
        "lodash": "npm:lodash@4.11.1",
        "normalizr": "npm:normalizr@2.0.1"
      }
    },
    "npm:moment@2.12.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:node-fetch@1.5.1": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:normalize-package-data@2.3.5": {
      "map": {
        "hosted-git-info": "npm:hosted-git-info@2.1.4",
        "is-builtin-module": "npm:is-builtin-module@1.0.0",
        "semver": "npm:semver@5.1.0",
        "systemjs-json": "github:systemjs/plugin-json@0.1.0",
        "validate-npm-package-license": "npm:validate-npm-package-license@3.0.1"
      }
    },
    "npm:normalizr@2.0.1": {
      "map": {
        "lodash": "npm:lodash@4.11.1"
      }
    },
    "npm:pako@0.2.8": {
      "map": {}
    },
    "npm:parse-json@2.2.0": {
      "map": {
        "error-ex": "npm:error-ex@1.3.0"
      }
    },
    "npm:path-exists@2.1.0": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.0"
      }
    },
    "npm:path-type@1.1.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.3",
        "pify": "npm:pify@2.3.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.0"
      }
    },
    "npm:performance-now@0.2.0": {
      "map": {}
    },
    "npm:pify@2.3.0": {
      "map": {}
    },
    "npm:pinkie-promise@2.0.0": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:process-nextick-args@1.0.6": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.3"
      }
    },
    "npm:punycode@1.3.2": {
      "map": {}
    },
    "npm:query-string@3.0.3": {
      "map": {
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "npm:raf@3.2.0": {
      "map": {
        "performance-now": "npm:performance-now@0.2.0"
      }
    },
    "npm:randexp@0.4.2": {
      "map": {
        "discontinuous-range": "npm:discontinuous-range@1.0.0",
        "ret": "npm:ret@0.1.11",
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:react-addons-shallow-compare@15.0.0-rc.2": {
      "map": {
        "react": "npm:react@15.0.1"
      }
    },
    "npm:react-datepicker@0.18.0": {
      "map": {
        "lodash": "npm:lodash@3.10.1",
        "moment": "npm:moment@2.12.0",
        "react": "npm:react@15.0.1",
        "react-onclickoutside": "npm:react-onclickoutside@4.5.0",
        "tether": "npm:tether@1.2.0"
      }
    },
    "npm:react-dock@0.2.3": {
      "map": {
        "lodash.debounce": "npm:lodash.debounce@3.1.1",
        "object-assign": "npm:object-assign@4.0.1",
        "react": "npm:react@15.0.1"
      }
    },
    "npm:react-dom@15.0.0": {
      "map": {
        "react": "npm:react@15.0.1"
      }
    },
    "npm:react-google-maps@4.9.1": {
      "map": {
        "can-use-dom": "npm:can-use-dom@0.1.0",
        "google-maps-infobox": "npm:google-maps-infobox@1.1.13",
        "invariant": "npm:invariant@2.2.1",
        "lodash.isequal": "npm:lodash.isequal@3.0.4",
        "marker-clusterer-plus": "npm:marker-clusterer-plus@2.1.2",
        "react": "npm:react@15.0.1",
        "react-dom": "npm:react-dom@15.0.0",
        "react-prop-types-element-of-type": "npm:react-prop-types-element-of-type@1.0.2",
        "scriptjs": "npm:scriptjs@2.5.8",
        "warning": "npm:warning@2.1.0"
      }
    },
    "npm:react-hammerjs@0.4.5": {
      "map": {
        "hammerjs": "npm:hammerjs@2.0.6",
        "react": "npm:react@15.0.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:react-hot-loader@3.0.0-beta.0": {
      "map": {
        "babel-template": "npm:babel-template@6.7.0",
        "react-deep-force-update": "npm:react-deep-force-update@2.0.1",
        "react-proxy": "npm:react-proxy@3.0.0-alpha.1",
        "redbox-react": "npm:redbox-react@1.2.3",
        "source-map": "npm:source-map@0.4.4"
      }
    },
    "npm:react-iscroll@1.0.0": {
      "map": {
        "deep-equal": "npm:deep-equal@1.0.1",
        "react": "npm:react@15.0.1",
        "react-dom": "npm:react-dom@15.0.0"
      }
    },
    "npm:react-json-tree@0.6.5": {
      "map": {
        "babel-plugin-transform-runtime": "npm:babel-plugin-transform-runtime@6.7.5",
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "react": "npm:react@15.0.1",
        "react-mixin": "npm:react-mixin@1.7.0",
        "react-pure-render": "npm:react-pure-render@1.0.2"
      }
    },
    "npm:react-mixin@1.7.0": {
      "map": {
        "object-assign": "npm:object-assign@2.1.1",
        "smart-mixin": "npm:smart-mixin@1.2.1"
      }
    },
    "npm:react-motion@0.4.2": {
      "map": {
        "performance-now": "npm:performance-now@0.2.0",
        "raf": "npm:raf@3.2.0",
        "react": "npm:react@15.0.1"
      }
    },
    "npm:react-onclickoutside@4.5.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:react-prop-types-element-of-type@1.0.2": {
      "map": {
        "invariant": "npm:invariant@2.2.1",
        "react": "npm:react@15.0.1"
      }
    },
    "npm:react-proxy@1.1.8": {
      "map": {
        "lodash": "npm:lodash@4.11.1",
        "react-deep-force-update": "npm:react-deep-force-update@1.0.1"
      }
    },
    "npm:react-proxy@2.0.8": {
      "map": {
        "lodash": "npm:lodash@4.11.1"
      }
    },
    "npm:react-proxy@3.0.0-alpha.1": {
      "map": {
        "lodash": "npm:lodash@4.11.1"
      }
    },
    "npm:react-redux@4.4.2": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.0.5",
        "invariant": "npm:invariant@2.2.1",
        "lodash": "npm:lodash@4.11.1",
        "loose-envify": "npm:loose-envify@1.1.0",
        "react": "npm:react@15.0.1",
        "redux": "npm:redux@3.4.0"
      }
    },
    "npm:react-router@2.0.1": {
      "map": {
        "history": "npm:history@2.0.1",
        "invariant": "npm:invariant@2.2.1",
        "warning": "npm:warning@2.1.0"
      }
    },
    "npm:react-themeable@1.0.1": {
      "map": {
        "object-assign": "npm:object-assign@3.0.0"
      }
    },
    "npm:react-transform-jspm-hmr@1.0.1": {
      "map": {
        "global": "npm:global@4.3.0",
        "react-proxy": "npm:react-proxy@1.1.8"
      }
    },
    "npm:react-virtualized@6.0.8": {
      "map": {
        "classnames": "npm:classnames@2.2.3",
        "dom-helpers": "npm:dom-helpers@2.4.0",
        "raf": "npm:raf@3.2.0",
        "react": "npm:react@15.0.1",
        "react-addons-shallow-compare": "npm:react-addons-shallow-compare@15.0.0-rc.2",
        "react-dom": "npm:react-dom@15.0.0"
      }
    },
    "npm:react@15.0.1": {
      "map": {
        "fbjs": "npm:fbjs@0.8.1",
        "loose-envify": "npm:loose-envify@1.1.0",
        "object-assign": "npm:object-assign@4.0.1"
      }
    },
    "npm:read-pkg-up@1.0.1": {
      "map": {
        "find-up": "npm:find-up@1.1.2",
        "read-pkg": "npm:read-pkg@1.1.0"
      }
    },
    "npm:read-pkg@1.1.0": {
      "map": {
        "load-json-file": "npm:load-json-file@1.1.0",
        "normalize-package-data": "npm:normalize-package-data@2.3.5",
        "path-type": "npm:path-type@1.1.0"
      }
    },
    "npm:readable-stream@1.0.34": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@0.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:readable-stream@2.1.0": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "inline-process-browser": "npm:inline-process-browser@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.6",
        "string_decoder": "npm:string_decoder@0.10.31",
        "unreachable-branch-transform": "npm:unreachable-branch-transform@0.5.1",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:recast@0.11.5": {
      "map": {
        "ast-types": "npm:ast-types@0.8.16",
        "esprima": "npm:esprima@2.7.2",
        "private": "npm:private@0.1.6",
        "source-map": "npm:source-map@0.5.3"
      }
    },
    "npm:redbox-react@1.2.3": {
      "map": {
        "error-stack-parser": "npm:error-stack-parser@1.3.5",
        "object-assign": "npm:object-assign@4.0.1"
      }
    },
    "npm:redent@1.0.0": {
      "map": {
        "indent-string": "npm:indent-string@2.1.0",
        "strip-indent": "npm:strip-indent@1.0.1"
      }
    },
    "npm:redux-devtools-dispatch@2.0.1": {
      "map": {
        "get-params": "npm:get-params@0.1.2",
        "react": "npm:react@15.0.1",
        "redux-devtools": "npm:redux-devtools@3.2.0",
        "redux-devtools-themes": "npm:redux-devtools-themes@1.0.0"
      }
    },
    "npm:redux-devtools-dock-monitor@1.1.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "parse-key": "npm:parse-key@0.2.1",
        "react": "npm:react@15.0.1",
        "react-dock": "npm:react-dock@0.2.3",
        "react-pure-render": "npm:react-pure-render@1.0.2",
        "redux-devtools": "npm:redux-devtools@3.2.0"
      }
    },
    "npm:redux-devtools-inspector@0.3.1": {
      "map": {
        "@alexkuz/react-json-tree": "npm:@alexkuz/react-json-tree@0.6.0-alpha1",
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "dateformat": "npm:dateformat@1.0.12",
        "immutable": "npm:immutable@3.7.6",
        "javascript-stringify": "npm:javascript-stringify@1.1.0",
        "jsondiffpatch": "npm:jsondiffpatch@0.1.41",
        "jss": "npm:jss@3.3.0",
        "jss-nested": "npm:jss-nested@1.0.3",
        "jss-vendor-prefixer": "npm:jss-vendor-prefixer@1.0.1",
        "lodash.debounce": "npm:lodash.debounce@4.0.3",
        "react": "npm:react@15.0.1",
        "react-pure-render": "npm:react-pure-render@1.0.2",
        "react-themeable": "npm:react-themeable@1.0.1",
        "redux-devtools-themes": "npm:redux-devtools-themes@1.0.0"
      }
    },
    "npm:redux-devtools-log-monitor@1.0.9": {
      "map": {
        "react": "npm:react@15.0.1",
        "react-json-tree": "npm:react-json-tree@0.6.5",
        "react-pure-render": "npm:react-pure-render@1.0.2",
        "redux-devtools": "npm:redux-devtools@3.2.0",
        "redux-devtools-themes": "npm:redux-devtools-themes@1.0.0"
      }
    },
    "npm:redux-devtools-multiple-monitors@1.0.0": {
      "map": {
        "react": "npm:react@15.0.1",
        "redux-devtools": "npm:redux-devtools@3.1.1"
      }
    },
    "npm:redux-devtools-themes@1.0.0": {
      "map": {
        "base16": "npm:base16@1.0.0"
      }
    },
    "npm:redux-devtools@3.1.1": {
      "map": {
        "lodash": "npm:lodash@4.11.1",
        "react": "npm:react@15.0.1",
        "react-redux": "npm:react-redux@4.4.2",
        "redux": "npm:redux@3.4.0"
      }
    },
    "npm:redux-devtools@3.2.0": {
      "map": {
        "lodash": "npm:lodash@4.11.1",
        "react": "npm:react@15.0.1",
        "react-redux": "npm:react-redux@4.4.2",
        "redux": "npm:redux@3.4.0"
      }
    },
    "npm:redux@3.4.0": {
      "map": {
        "lodash": "npm:lodash@4.11.1",
        "lodash-es": "npm:lodash-es@4.9.0",
        "loose-envify": "npm:loose-envify@1.1.0"
      }
    },
    "npm:repeating@1.1.3": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:repeating@2.0.0": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:scriptjs@2.5.8": {
      "map": {}
    },
    "npm:seamless-immutable@4.1.1": {
      "map": {}
    },
    "npm:semver@5.1.0": {
      "map": {}
    },
    "npm:signal-exit@2.1.2": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:smart-mixin@1.2.1": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:source-map@0.4.4": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:spdx-correct@1.0.2": {
      "map": {
        "spdx-license-ids": "npm:spdx-license-ids@1.2.0"
      }
    },
    "npm:spdx-expression-parse@1.0.2": {
      "map": {
        "spdx-exceptions": "npm:spdx-exceptions@1.0.4",
        "spdx-license-ids": "npm:spdx-license-ids@1.2.0"
      }
    },
    "npm:spdx-license-ids@1.2.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@1.0.34"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.0"
      }
    },
    "npm:stream-http@2.2.1": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "inherits": "npm:inherits@2.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:string_decoder@0.10.31": {
      "map": {}
    },
    "npm:strip-ansi@0.3.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@0.2.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:strip-bom@2.0.0": {
      "map": {
        "is-utf8": "npm:is-utf8@0.2.1"
      }
    },
    "npm:strip-indent@1.0.1": {
      "map": {
        "get-stdin": "npm:get-stdin@4.0.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:supports-color@0.2.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:tether@1.2.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:through2@0.6.5": {
      "map": {
        "readable-stream": "npm:readable-stream@1.0.34",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:ua-parser-js@0.7.10": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:unreachable-branch-transform@0.5.1": {
      "map": {
        "esmangle-evaluator": "npm:esmangle-evaluator@1.0.0",
        "recast": "npm:recast@0.11.5"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:util-deprecate@1.0.2": {
      "map": {}
    },
    "npm:validate-npm-package-license@3.0.1": {
      "map": {
        "spdx-correct": "npm:spdx-correct@1.0.2",
        "spdx-expression-parse": "npm:spdx-expression-parse@1.0.2"
      }
    },
    "npm:warning@2.1.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.1.0"
      }
    }
  }
});
