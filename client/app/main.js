if(Meteor.isClient){

  System.register(['bootstrap'], function (_export) {
    'use strict';

    _export('configure', configure);

    function configure(aurelia) {
      aurelia.use.standardConfiguration().developmentLogging();

      aurelia.start().then(function (a) {
        return a.setRoot();
      });
    }

    return {
      setters: [function (_bootstrap) {}],
      execute: function () {}
    };
  });

}
