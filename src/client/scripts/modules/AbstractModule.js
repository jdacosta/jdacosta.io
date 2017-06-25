let uid = 0;

/**
 * Abstract Module
 */
export default class {
  constructor(options) {
    this.$el = options.$el || null;
    this.el = options.el || null;

    // generate a unique module identifier
    this.uid = `m-${uid += 1}`;

    // use jQuery's data API to "store it in the DOM"
    this.$el.data('uid', this.uid);
  }

  init() {}

  destroy() {
    if (this.$el) {
      this.$el.removeData('uid');
    }
  }
}
