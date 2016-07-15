module.exports = {
  entry: "./src/wrapper.js",
  output: {
    path: 'lib',
    filename: "avsc-js.min.js",
    library: "avsc",
    libraryTarget: "umd",
  },
  module: {
    loaders: [{
      test: /.*\.js$/,
      loader: "uglify"
    },{
      test: /\.js$/,
      loader: 'string-replace',
      query: {
        // Patch
        multiple: [
           { search: "(this\\.buf\\.)utf8Write(.*?)\\);", replace: "$1write$2, 'utf8');", flags: '' },
           { search: 'this.buf.utf8Slice', replace: 'this.buf.slice' }
        ]
      }
    }],
  },
  'uglify-loader': {
    compress: {
        warnings: false
    },
    mangle: true,
  },
  externals: [{
    'stream': 'stream-browserify',
    'buffer': 'buffer',
  }],
  node: {
    fs: "empty",
    process: false,
    stream: false,
    events: false,
    stream: false,
    buffer: false
  }
};
