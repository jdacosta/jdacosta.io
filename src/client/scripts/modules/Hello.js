import { $html, $window, $document, APP_NAME } from '../utils/environment';
import AbstractModule from './AbstractModule';

const DATA_KEY  = `${APP_NAME}.Hello`;
const EVENT_KEY = `.${DATA_KEY}`;

const Event = {
  CLICK: `click${EVENT_KEY}`,
};

export default class extends AbstractModule {
  constructor(options) {
    super(options);
  }

  init() {
    console.log('Hello world');
  }

  destroy() {
    $window.off(EVENT_KEY);
    $document.off(EVENT_KEY);
    this.$el.off();
  }
}
