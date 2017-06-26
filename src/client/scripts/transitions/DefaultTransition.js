import Barba from 'barba.js';
import { $document, $html } from '../utils/environment';

function DefaultTransition(options) {
  options = options || {};
  const startCallback = (typeof options.startCallback === 'function') ? options.startCallback : () => {};
  const overrideClass = (typeof options.overrideClass === 'string') ? options.overrideClass : '';

  return Barba.BaseTransition.extend({
    start() {
      $html
        .removeClass('dom-is-loaded dom-is-animated')
        .addClass(`dom-is-loading ${overrideClass}`);

      startCallback();

      setTimeout(() => {
        Promise
          .all([this.newContainerLoading])
          .then(this.finish.bind(this));
      }, 900);
    },

    finish() {
      this.done();

      const $el = $(this.newContainer);

      // Get the template name of the new container and set it to the DOM
      $html.attr('data-template', $el.data('template'));

      $document.triggerHandler({
        type: 'initModules.App',
        isBarba: true
      });

      $html
        .addClass('dom-is-loaded')
        .removeClass('dom-is-loading');

      setTimeout(() => {
        $html
          .removeClass(overrideClass)
          .addClass('dom-is-animated');
      }, 100);
    }
  });
}

export default DefaultTransition;
