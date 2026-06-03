const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
    entry: "./src/index.js",
    mode: "development",

    devServer: {
        port: 3000,
        historyApiFallback: true,
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
            name: "host",

            remotes: {
                remoteApp: "remoteApp@http://localhost:3001/remoteEntry.js",
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