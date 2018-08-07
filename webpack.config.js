const path = require('path');

module.exports = (env = {}) => {

    return {
        entry: ['babel-polyfill', './index.js'],
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ["babel-loader", 'eslint-loader']
                },
            ]
        },
        watch : true
    }
};
