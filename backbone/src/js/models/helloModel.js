
var app = app || {};

(function () {
  'use strict';

  app.HelloModel = Backbone.Model.extend({
    getValue: function () {
      return 'Hello World';
    }
  });
})();