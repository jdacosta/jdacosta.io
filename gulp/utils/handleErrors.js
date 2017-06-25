import notify from 'gulp-notify';

export default function() {
  // send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, Array.prototype.slice.call(arguments));

  // keep gulp from hanging on this task
  this.emit('end');
}
