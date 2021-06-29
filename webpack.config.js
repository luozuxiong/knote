const path = require('path');
module.exports = {
    mode: "production",
    entry: ['./index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        umdNamedDefine: true,
        library: {
            name: "kNote",
            type: "window"
        },
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }

};