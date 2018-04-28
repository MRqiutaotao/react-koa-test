const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        vender: [
            'react',
            'react-dom',
        ]
    },
    output: {
        path: path.join(__dirname, 'static'),
        filename: '[name].dll.js',
        library: '_dll_[name]'
    },
    plugins: [
        new webpack.DllPlugin({
          name: '_dll_[name]',
          path: path.join(__dirname, 'manifest.json'),
          context: __dirname,
        })
    ]
}