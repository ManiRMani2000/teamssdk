const path = require('path');

module.exports = {
  mode: 'production',  // or 'development' if needed
  entry: './client.js',  // Replace with the actual path to your client.js
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // Output directory (create a 'dist' directory)
  },
  // Add other webpack configuration options as needed
};
