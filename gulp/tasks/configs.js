import babel from 'gulp-babel';
import changed from 'gulp-changed';

// default task
gulp.task('configs', 'Copy your config files into dist folder.', [
  'configs:json', 'configs:make'
]);

// json
gulp.task('configs:json', false, () => {
  return gulp.src(`${cfg.src}/config/**/*.json`)
    .pipe(changed(`${cfg.dist}/config`))
    .pipe(gulp.dest(`${cfg.dist}/config`));
});

// make
gulp.task('configs:make', false, () => {
  return gulp.src(`${cfg.src}/config/index.js`)
    .pipe(changed(`${cfg.dist}/config`))
    .pipe(babel(cfg.babel))
    .pipe(gulp.dest(`${cfg.dist}/config`));
});
