import Barba from 'barba.js';
import { $document, $html, isDebug } from '../utils/environment';

import DefaultTransition from './DefaultTransition';

export default class {
  constructor() {
    let clickedLink = undefined;
    let transition = '';

    // jQuery ondomready
    $(() => { this.load(); });

    $document.on('goTo.PageTransitionManager', event => {
      if (!window.history.pushState) {
        window.location = event.options.location;
      } else {
        transition = event.options.transition;
        Barba.Pjax.goTo(event.options.location);
      }
    });

    // Define different page transitions
    Barba.Pjax.getTransition = function() {
      transition = (clickedLink instanceof Node) ?
        clickedLink.getAttribute('data-transition') :
        (typeof transition === 'string' ? transition : '');

      let TransitionObject;
      switch (transition) {
        case 'home-to-about':
          TransitionObject = DefaultTransition({
            overrideClass: 'is-home-to-about'
          });
          break;

        case 'about-to-home':
          TransitionObject = DefaultTransition({
            overrideClass: 'is-about-to-home'
          });
          break;

        default:
          TransitionObject = DefaultTransition({
            overrideClass: 'is-default-loading'
          });
      }

      clickedLink = undefined;
      transition = '';

      return TransitionObject;
    }

    Barba.Dispatcher.on('linkClicked', (HTMLElement, MouseEvent) => {
      clickedLink = HTMLElement;
    });

    Barba.Dispatcher.on('newPageReady', (currentStatus, prevStatus, container, currentHTML) => {
      // Fetch any inline script elements.
      const scripts = container.querySelectorAll('script.js-inline');

      if (scripts instanceof window.NodeList) {
        let i = 0;
        let len = scripts.length;
        for (; i < len; i++) {
          eval(scripts[i].innerHTML);
        }
      }

      /**
       * Execute any third party features.
       */

      // Google Analytics
      if (window.ga && !isDebug) {
        ga('send', 'pageview');
      }
    });

    Barba.Pjax.Dom.containerClass = 'js-barba-container';
    Barba.Pjax.Dom.wrapperId = 'js-barba-wrapper';

    Barba.Pjax.start();
  }

  /**
   * DOM is loaded
   *
   * @return {void}
   */
  load() {
    $html.addClass('dom-is-loaded');
    $html.removeClass('dom-is-loading');

    setTimeout(() => {
      $html.addClass('dom-is-animated');
    }, 2500);
  }
}
