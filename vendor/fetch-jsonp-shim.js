(function() {

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      if (typeof FastBoot === 'undefined') {
        return values;
      }
    });
  }

  generateModule('fetch-jsonp', { 'default': window.fetchJsonp });
})();
