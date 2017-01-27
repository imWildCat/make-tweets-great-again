const path = require('path')

module.exports = {
  entry: './src/js/index.js',
  html: {
    template: './src/assets/index.html'
  },
  webpack: {
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          // yoou need to compile `src` folder and canvas-to-image-node package
          include: [
            path.join(__dirname, 'src'), 
            /node_modules\/canvas-to-image-node/
          ]
        }
      ]
    }
  }
}