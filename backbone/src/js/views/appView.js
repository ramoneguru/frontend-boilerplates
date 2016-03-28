var app = app || {};

(function ($) {
  'use strict';

  app.AppView = Backbone.View.extend({

    el: 'body',

    initialize: function () {
      this.$helloEl = this.$('.main');
      this.hello = new app.HelloModel();
      this.render();
    },

    render: function () {
      this.$helloEl.text(this.hello.getValue());
    }
  });
})(jQuery);