const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    TcN: './src/components/TcN',
    TcB: './src/components/TcB',
    FcN: './src/components/FcN',
    FcB: './src/components/FcB',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      },
    ]
  },
  externals: {
    'react': 'react',
  }
};
