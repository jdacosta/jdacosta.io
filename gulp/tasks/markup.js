import changed from 'gulp-changed';
import preprocess from 'gulp-preprocess';

gulp.task('markup:dev', 'Process html files and copy them to dist folder.', () => {
  return gulp.src(`${cfg.src}/server/views/**/*`)
    .pipe(preprocess({ context:
      {
        app: {
          style: 'style.css',
          script: 'main.js',
          time: Math.round(new Date().getTime() / 1000),
        },
        datas: require('./../../src/config/dev/markup.json')
      }
    }))
    .pipe(gulp.dest(`${cfg.dist}/server/views`));
});

gulp.task('markup:prod', 'Process html files and copy them to dist folder.', () => {
  const time = Math.round(new Date().getTime() / 1000);
  return gulp.src(`${cfg.src}/server/views/**/*`)
    .pipe(preprocess({ context:
      {
        app: {
          style: 'style.min.css',
          script: 'main.min.js',
          time: Math.round(new Date().getTime() / 1000),
        },
        datas: require('./../../src/config/prod/markup.json')
      }
    }))
    .pipe(gulp.dest(`${cfg.dist}/server/views`));
});
