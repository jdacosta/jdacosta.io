import cache from 'gulp-cache';
import changed from 'gulp-changed';
import favicons from 'gulp-favicons';
import html2jade from 'gulp-html2jade';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import imagemin from 'gulp-imagemin';

// default task
gulp.task('images', 'Image processing (favicons and optimization).', [
  'images:favicons', 'images:optimization'
]);

// favicons
gulp.task('images:favicons', false, () => {
  return gulp.src(`${cfg.src}/client/assets/logo.png`)
    .pipe(favicons({
      version: cfg.images.favicons.version,
      appName: cfg.images.favicons.title,
      appDescription: cfg.images.favicons.description,
      developerName: cfg.images.favicons.author,
      developerURL: cfg.images.favicons.url,
      background: cfg.images.favicons.color,
      path: '/favicons/',
      url: '/images/main/share/',
      display: 'standalone',
      orientation: 'portrait',
      logging: false,
      online: false,
      html: '../../../server/views/partials/favicons.html',
      pipeHTML: true,
      replace: true,
      icons: cfg.images.favicons.icons
    })).on('error', gutil.log)
    .pipe(gulpif(/favicons\.html$/, html2jade({ bodyless: true })))
    .pipe(gulp.dest(`${cfg.dist}/client/assets/favicons`));
});

// optimization
gulp.task('images:optimization', false, () => {
  return gulp.src(`${cfg.src}/client/assets/images/**/*`)
    .pipe(changed(`${cfg.dist}/client/assets/images`))
    //.pipe(cache(imagemin(cfg.images.optimization)))
    .pipe(gulp.dest(`${cfg.dist}/client/assets/images`));
});
