import babelify from 'babelify';
import browserify from 'browserify';
import uglify from 'gulp-uglify';
import gutil from 'gulp-util';
import sourcemaps from 'gulp-sourcemaps';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import handleErrors from '../utils/handleErrors';

gulp.task('scripts:dev', 'Bundle scripts with browserify for the development.', () => {
  return browserify({ entries: `${cfg.src}/client/scripts/App.js`, debug: false })
    .transform(babelify.configure(cfg.babel))
    .bundle().on('error', handleErrors)
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`${cfg.dist}/client/assets/js`));
});

gulp.task('scripts:prod', 'Bundle scripts with browserify for the production.', () => {
  return browserify({ entries: `${cfg.src}/client/scripts/App.js`, debug: false })
    .transform(babelify.configure(cfg.babel))
    .bundle().on('error', handleErrors)
    .pipe(source('main.min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(`${cfg.dist}/client/assets/js`));
});
