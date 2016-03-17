
var app = app || {};

(function () {
  'use strict';

  app.Target = Backbone.Model.extend({
    getValue: function () {
      return 'World';
    }
  });
})();