import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import handleErrors from '../utils/handleErrors';

gulp.task('styles:dev', 'Build styles for the development.', () => {
  return gulp.src(`${cfg.src}/client/styles/style.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', handleErrors))
    .pipe(postcss([ autoprefixer(cfg.autoprefixer) ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`${cfg.dist}/client/assets/css`));
});

gulp.task('styles:prod', 'Build styles for the production.', () => {
  return gulp.src(`${cfg.src}/client/styles/style.scss`)
  .pipe(sass({ outputStyle: 'compressed' }).on('error', handleErrors))
  .pipe(postcss([ autoprefixer(cfg.autoprefixer) ]))
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest(`${cfg.dist}/client/assets/css`));
});
