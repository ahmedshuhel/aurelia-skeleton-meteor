System.register(['aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (_export) {
  'use strict';

  var inject, HttpClient, Users;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }, function (_fetch) {}],
    execute: function () {
      Users = (function () {
        function Users(http) {
          _classCallCheck(this, _Users);

          this.heading = 'Github Users';
          this.users = [];

          http.configure(function (config) {
            config.useStandardConfiguration().withBaseUrl('https://api.github.com/');
          });

          this.http = http;
        }

        _createClass(Users, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.http.fetch('users').then(function (response) {
              return response.json();
            }).then(function (users) {
              return _this.users = users;
            });
          }
        }]);

        var _Users = Users;
        Users = inject(HttpClient)(Users) || Users;
        return Users;
      })();

      _export('Users', Users);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQkFLYSxLQUFLOzs7Ozs7OztpQ0FMVixNQUFNOzt1Q0FDTixVQUFVOzs7QUFJTCxXQUFLO0FBSUwsaUJBSkEsS0FBSyxDQUlKLElBQUksRUFBQzs7O2VBSGpCLE9BQU8sR0FBRyxjQUFjO2VBQ3hCLEtBQUssR0FBRyxFQUFFOztBQUdSLGNBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDdkIsa0JBQU0sQ0FDSCx3QkFBd0IsRUFBRSxDQUMxQixXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQztXQUMzQyxDQUFDLENBQUM7O0FBRUgsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7O3FCQVpVLEtBQUs7O2lCQWNSLG9CQUFFOzs7QUFDUixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FDNUIsSUFBSSxDQUFDLFVBQUEsUUFBUTtxQkFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2FBQUEsQ0FBQyxDQUNqQyxJQUFJLENBQUMsVUFBQSxLQUFLO3FCQUFJLE1BQUssS0FBSyxHQUFHLEtBQUs7YUFBQSxDQUFDLENBQUM7V0FDdEM7OztxQkFsQlUsS0FBSztBQUFMLGFBQUssR0FEakIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLEtBQUssS0FBTCxLQUFLO2VBQUwsS0FBSyIsImZpbGUiOiJ1c2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xyXG5pbXBvcnQgJ2ZldGNoJztcclxuXHJcbkBpbmplY3QoSHR0cENsaWVudClcclxuZXhwb3J0IGNsYXNzIFVzZXJze1xyXG4gIGhlYWRpbmcgPSAnR2l0aHViIFVzZXJzJztcclxuICB1c2VycyA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihodHRwKXtcclxuICAgIGh0dHAuY29uZmlndXJlKGNvbmZpZyA9PiB7XHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgICAgIC51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxyXG4gICAgICAgIC53aXRoQmFzZVVybCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS8nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZSgpe1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5mZXRjaCgndXNlcnMnKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKHVzZXJzID0+IHRoaXMudXNlcnMgPSB1c2Vycyk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==