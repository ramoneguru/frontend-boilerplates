var app = app || {};

(function ($) {
  'use strict';

  app.AppView = Backbone.View.extend({

    el: 'body',

    initialize: function () {
      this.$targetEl = this.$('.target');
      this.target = new app.Target();
      this.render();
    },

    render: function () {
      this.$targetEl.text(this.target.getValue());
    }
  });
})(jQuery);