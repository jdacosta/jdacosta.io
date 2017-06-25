import pngquant from 'imagemin-pngquant';
import pkg from './../package.json';

export default {
  autoprefixer: {
    browsers: [ 'last 2 versions' ]
  },
  babel: {
    ignore: [ 'node_modules' ]
  },
  images: {
    favicons: {
      version: pkg.version,
      author: pkg.author,
      title: pkg.title,
      description: pkg.description,
      url: pkg.homepage,
      color: "#ffffff",
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: true,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        windows: true,
        yandex: false
      }
    },
    optimization: {
      optimizationLevel: 7,
      progressive: true,
      interlaced: true,
      multipass: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [ pngquant() ]
    }
  }
};
