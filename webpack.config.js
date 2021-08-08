const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports={
  entry: path.resolve(__dirname,'src','index.js'),
  output:{
    path: path.resolve(__dirname,'build'),
    filename: 'bundle[hash].js',
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'public','index.html')
    }),
    new CleanWebpackPlugin()
  ],
  module:{
    rules:[
      /* cada objeto é um loader */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer:{
    port: 3000,
  }
};


//é um regex
//test: /\.js$/,//só aceita arquivos que terminam exatamente com .js, é o que o $ indica