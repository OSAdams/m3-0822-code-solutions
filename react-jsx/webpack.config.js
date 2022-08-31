module.exports = {
  mode: 'none',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-react-jsx',
              '@babel/plugin-transform-arrow-functions',
              '@babel/plugin-transform-block-scoping'
            ]
          }
        }
      }
    ]
  },
  performance: {
    hints: false
  }
};
