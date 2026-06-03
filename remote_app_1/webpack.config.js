const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
    entry: "./src/index.js",
    mode: "development",

    devServer: {
        port: 3001,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", { modules: "cjs" }],
                            "@babel/preset-react",
                        ],
                        cacheDirectory: false,
                    },
                },
            },
        ],
    },

    resolve: {
        extensions: [".js", ".jsx"],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "remoteApp",
            filename: "remoteEntry.js",

            exposes: {
                "./App": "./src/App.js",
            },

            shared: {
                react: {
                    singleton: true,
                    requiredVersion: false,
                    eager: true,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: false,
                    eager: true,
                },
            },
        }),

        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
