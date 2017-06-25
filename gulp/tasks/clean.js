import cache from 'gulp-cache';
import del from 'del';

// default task
gulp.task('clean', 'Clean dist folder and gulp all caches.', [
  'clean:cache', 'clean:files'
]);

// clean cache
gulp.task('clean:cache', false, () => {
  return cache.clearAll();
});

// clean files
gulp.task('clean:files', false, () => {
  return del([
    `${cfg.dist}/*`,
    `${cfg.src}/client/styles/base/fonts/*.{scss,css}`
  ]);
});
