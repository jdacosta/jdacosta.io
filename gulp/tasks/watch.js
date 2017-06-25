import gutil from 'gulp-util';
import watch from 'gulp-watch';

gulp.task('watch', 'Watch all changes in source folder and execute task accordingly.', () => {

  // assets
  watch([
    `${cfg.src}/client/assets/*.txt`,
    `${cfg.src}/client/assets/datas/**/*`,
    `${cfg.src}/client/assets/videos/**/*`
  ], () => {
    gulp.start('assets');
  });

  // fonts
  watch(`${cfg.src}/client/assets/fonts/*.ttf`, () => {
    gulp.start('fonts');
  });

  // logo application
  watch(`${cfg.src}/client/assets/logo.png`, () => {
    gulp.start('images:favicons');
  });

  // images
  watch(`${cfg.src}/client/assets/images/**/*`, () => {
    gulp.start('images:optimization');
  });

  // styles
  watch(`${cfg.src}/client/styles/**/*.scss`, () => {
    gulp.start('styles:dev', 'markup:dev');
  });

  // scripts
  watch(`${cfg.src}/client/scripts/**/*.js`, () => {
    gulp.start('scripts:dev', 'markup:dev');
  });

  // views
  watch(`${cfg.src}/server/views/**/*.jade`, () => {
    gulp.start('markup:dev');
  });

  // serve
  watch(`${cfg.src}/server/**/*.js`, () => {
    gulp.start('serve');
  });

  // configs
  watch(`${cfg.src}/config/**/*.json`, () => {
    gulp.start('configs:json', 'markup:dev');
  });

  // log information
  gutil.log(gutil.colors.green('Watching mode: ✔ enabled'));
});
