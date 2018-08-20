const path = require('path');

module.exports = (env = {}) => {
    const inProduction = env.production;
    const loaders = ['babel-loader'];

    if(!inProduction) loaders.push('eslint-loader');

    return {
        entry: ['babel-polyfill', './index.js'],
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'build.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: loaders
                },

            ],
        },
        node : {
            fs : "empty",
            child_process : "empty",
            process : true
        },
        watch : !inProduction
    }
};
