module.exports = {
  js: {
    expand: true,
    cwd: 'src/javascript/',
    src: '**',
    dest: 'public/javascript/',
  },
  img_misc: {
    expand: true,
    cwd: 'src/images/misc',
    src: '**',
    dest: 'public/images/',
  },
  img_icons: {
    expand: true,
    cwd: 'src/images/icons',
    src: '*.png',
    dest: 'public/images/icons',
  },
};
