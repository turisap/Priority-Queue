const path = require('path');

module.exports = (env = {}) => {

    return {
        entry: ['babel-polyfill', './index.js'],
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'b.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ["babel-loader", 'eslint-loader']
                },

            ],
        },
        node : {
            fs : "empty",
            child_process : "empty",
            process : true
        },
        watch : true
    }
};
