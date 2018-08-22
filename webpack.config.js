const path = require('path');

module.exports = (env = {}) => {
    const inProduction = env.production;
    const loaders = ['babel-loader'];
    const entry = inProduction ? './src/PriorityQueueFacade.js' : './index.js';

    if(!inProduction) loaders.push('eslint-loader');

    const config = {
        entry: ['babel-polyfill', entry],
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'build.js',
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
        watch : true
    };

    if(inProduction) {
        config.output.library = 'priorityQueue';
        config.output.libraryExport = 'default';
        config.output.libraryTarget = 'commonjs2';
    }

    return config;
};
