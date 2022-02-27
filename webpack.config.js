const path = require("path");
module.exports = {
    mode: "development",
    entry: "./src/lib/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "hx-vue-toast.bundle.js",
        libraryTarget: "umd", // umd 即支持 amd、commonjs、cmd window上挂载
        library: "hxVueToast",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        scss: "style-loader!css-loader!sass-loader",
                        // scss: ['style-loader','css-loader','sass-loader'],
                    },
                    sassOptions: {
                        strictMath: true,
                        noIeCompat: true,
                    },
                },
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: path.join(__dirname, "src"),
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [],
};
