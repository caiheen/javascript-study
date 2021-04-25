const path = require("path");

module.exports = {
    mode: "development",
    entry: ["core-js/stable", "./src/js/main.js"],
    output: {
        path: path.resolve(__dirname + "/dist"),
        filename: "test.js"
    },
    target: ['es5'],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules | browser_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [[
                            "@babel/env", {
                                "useBuiltIns": "entry",
                                "corejs": 3,
                                "targets": {
                                    "browsers": ["last 3 versions", "ie >= 11"],
                                    "node":"current"
                                }
                            }
                        ]],
                        plugins: []
                    } 
                }
            }
        ]
    },
    devtool: 'source-map'
}
