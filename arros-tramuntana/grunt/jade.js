module.exports = {
  compile: {
    options: {
      data: {debug: false}
    },
    files: {
      'public/index.html': ['src/templates/index.jade']
    }
  }
};
