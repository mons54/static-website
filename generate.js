const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

const getDirectories = source => 
  readdirSync(source).map(name => 
    join(source, name)).filter(source => lstatSync(source).isDirectory());

const optimizeImage = source => {
  imagemin([join(source, '*.{jpg,png}')], source, {
      plugins: [
          imageminJpegtran(),
          imageminPngquant({quality: '65-80'})
      ]
  }).then(files => {
      console.log('Optimize images', files);
  });
};

const optimizeImages = source => {

  if (!source) {
    return;
  }

  optimizeImage(source);

  getDirectories(source).forEach(optimizeImages);
};

optimizeImages(join(__dirname, 'static'));
optimizeImages(join(__dirname, 'assets'));