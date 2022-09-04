module.exports = {
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
              '@babel/plugin-transform-block-scoping',
              '@babel/plugin-transform-arrow-functions'
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
