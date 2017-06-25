import changed from 'gulp-changed';

// default task
gulp.task('assets', 'Copy your assets files into dist folder.', [
  'assets:configs', 'assets:datas'
]);

// configs
gulp.task('assets:configs', false, () => {
  return gulp.src(`${cfg.src}/client/assets/*.txt`)
    .pipe(changed(`${cfg.dist}/client/assets`))
    .pipe(gulp.dest(`${cfg.dist}/client/assets`));
});

// datas
gulp.task('assets:datas', false, () => {
  return gulp.src(`${cfg.src}/client/assets/datas/**/*`)
    .pipe(changed(`${cfg.dist}/client/assets/datas`))
    .pipe(gulp.dest(`${cfg.dist}/client/assets/datas`));
});
