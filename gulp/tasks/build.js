import runSequence from 'run-sequence';

// build production
gulp.task('build:prod', 'Build the application for production.', () => {
  runSequence(
    'clean', 'configs',
    ['assets', 'images', 'fonts'],
    ['scripts:prod', 'styles:prod', 'markup:prod', 'serve']
  );
});

// build development
gulp.task('build:dev', 'Build the application for development.', () => {
  runSequence(
    'clean', 'configs',
    ['assets', 'images', 'fonts'],
    ['scripts:dev', 'styles:dev', 'markup:dev', 'serve'],
    'watch'
  );
});
