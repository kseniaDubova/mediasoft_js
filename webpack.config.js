const path = require("path");

module.exports
{
    mode: 'development'
    entry: './src/index.js'
    output: 
    {
        filename: "main.js"
        path: path.resolve(__dirname, "disk")
    }
    devServer: 
    {
        static: 
        {
            directory: path.resolve(__dirname, "disk")
        }
        compress: true
        port: 9000
    }
};