const webpack = require("webpack");
const cssnano = require("cssnano");
const config = require("../config");
const debug = require("debug")("app:config");

const paths = config.utils_paths;

const __DEV__ = config.globals.__DEV__;
const __PROD__ = config.globals.__PROD__;
const __TEST__ = config.globals.__TEST__;

let webpackConfig = {
    name: "client",
    target: "web",
    context: paths.client(),
    module: {
    },
};

// ------------------------------------
// Resolve
// ------------------------------------
webpackConfig.resolve = {
    root: paths.client(),
    extensions: ["", ".js", ".jsx"],
},

// ------------------------------------
// Bundle entry
// ------------------------------------
webpackConfig.entry = ["whatwg-fetch", "main"];

// ------------------------------------
// Dev tools
// ------------------------------------
webpackConfig.devtool = config.compiler_devtool;

// ------------------------------------
// Bundle output
// ------------------------------------
webpackConfig.output = {
    path: paths.dist(),
    filename: "bundle.js",
    publicPath: config.compiler_public_path,
};

// ------------------------------------
// Loaders
// ------------------------------------
webpackConfig.module.loaders = [
    {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: config.compiler_babel,
    },
    {
        test: /\.json$/,
        loader: "json",
    },
];

// ------------------------------------
// Externals
// ------------------------------------
webpackConfig.externals = {};
webpackConfig.externals["react/lib/ExecutionEnvironment"] = true;
webpackConfig.externals["react/lib/ReactContext"] = true;
webpackConfig.externals["react/addons"] = true;

// ------------------------------------
// Dev Server
// ------------------------------------
if (__DEV__) {
    webpackConfig.devServer = {};
    webpackConfig.devServer.contentBase = [paths.public(), paths.dist()];
    webpackConfig.devServer.compress = false;
    webpackConfig.devServer.port = 9000;
    webpackConfig.devServer.historyApiFallback = {
        index: "index.html",
    };
}

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [
    new webpack.DefinePlugin(config.globals),
];

if (__DEV__) {
    debug("Enabling plugins for live development (HMR, NoErrors).");
    webpackConfig.plugins.push(
        new webpack.NoErrorsPlugin()
    );
} else if (__PROD__) {
    debug("Enabling plugins for production (OccurenceOrder, Dedupe & UglifyJS).");
    webpackConfig.plugins.push(
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false,
            }
        })
    );
}

// ------------------------------------
// Style Loaders
// ------------------------------------
// We use cssnano with the postcss loader, so we tell
// css-loader not to duplicate minimization.
const BASE_CSS_LOADER = "css?modules&importLoaders=1&localIdentName=[path]__[name]__[local]__[hash:base64:5]";

webpackConfig.module.loaders.push({
    test    : /\.scss$/,
    exclude : null,
    loaders : [
        "style",
        BASE_CSS_LOADER,
        "postcss",
        "sass?sourceMap"
    ]
});

webpackConfig.module.loaders.push({
    test    : /\.css$/,
    exclude : null,
    loaders : [
        "style",
        BASE_CSS_LOADER,
        "postcss"
    ]
});

webpackConfig.sassLoader = {
    includePaths : paths.client("styles")
};

webpackConfig.postcss = [
    cssnano({
        autoprefixer : {
            add      : true,
            remove   : true,
            browsers : ["last 2 versions"]
        },
        discardComments : {
            removeAll : true
        },
        discardUnused : false,
        mergeIdents   : false,
        reduceIdents  : false,
        safe          : true,
        sourcemap     : true
    })
];

// ------------------------------------
// File Loaders
// ------------------------------------
webpackConfig.module.loaders.push(
  { test: /\.woff(\?.*)?$/,  loader: "url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff" },
  { test: /\.woff2(\?.*)?$/, loader: "url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2" },
  { test: /\.otf(\?.*)?$/,   loader: "file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype" },
  { test: /\.ttf(\?.*)?$/,   loader: "url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream" },
  { test: /\.eot(\?.*)?$/,   loader: "file?prefix=fonts/&name=[path][name].[ext]" },
  { test: /\.svg(\?.*)?$/,   loader: "url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml" },
  { test: /\.(png|jpg)$/,    loader: "url?limit=8192" }
);

module.exports = webpackConfig;