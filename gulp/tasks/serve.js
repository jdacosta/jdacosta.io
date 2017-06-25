import babel from 'gulp-babel';
import changed from 'gulp-changed';

gulp.task('serve', 'Build the server.', () => {
  return gulp.src(`${cfg.src}/server/**/*.js`)
    .pipe(changed(`${cfg.dist}/server`))
    .pipe(babel(cfg.babel))
    .pipe(gulp.dest(`${cfg.dist}/server`));
});
