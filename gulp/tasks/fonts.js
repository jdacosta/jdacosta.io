import fontmin from 'fontmin';
import rename from 'gulp-rename';

// default task
gulp.task('fonts', 'Convert ttf fonts to css @font-face formats.', [
  'fonts:build', 'fonts:css'
]);

// build
gulp.task('fonts:build', false, () => {
  const build = new fontmin()
    .src(`${cfg.src}/client/assets/fonts/*.ttf`)
    .use(fontmin.ttf2eot())
    .use(fontmin.ttf2woff())
    .use(fontmin.ttf2svg())
    .dest(`${cfg.dist}/client/assets/fonts`);

  return build.run((error, files, stream) => {
    if (error) {
      console.log(error);
    }
  });
});

// css
gulp.task('fonts:css', false, () => {
  const css = new fontmin()
    .src(`${cfg.src}/client/assets/fonts/*.ttf`)
    .use(fontmin.css({ fontPath: `/fonts/` }))
    .use(rename({ prefix: '_', extname: '.scss' }))
    .dest(`${cfg.src}/client/styles/base/fonts/`);

  return css.run((error, files, stream) => {
    if (error) {
      console.log(error);
    }
  });
});
