import gutil from 'gulp-util';

// execute the default task
gulp.task('default', () => {
  if (gutil.env.env === 'prod') {
    gulp.start('build:prod');
  } else if (gutil.env.env === 'dev') {
    gulp.start('build:dev');
  } else {
    gutil.log(gutil.colors.red('--env flag should be either dev or prod'));
  }
});
