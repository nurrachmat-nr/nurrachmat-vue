module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/nurrachmat-vue/" : "/",
  pages: {
    index: {
      entry: 'src/nr.js'
    }
  }
};