System.register([], function (_export) {
  'use strict';

  var App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Aurelia';
            config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' }, { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' }, { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }]);

            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0Isa0JBQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUMsU0FBUyxDQUFDLEVBQUcsSUFBSSxFQUFFLFNBQVMsRUFBTyxRQUFRLEVBQUUsU0FBUyxFQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLFNBQVMsRUFBRSxFQUN0RyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQVUsSUFBSSxFQUFFLE9BQU8sRUFBUyxRQUFRLEVBQUUsT0FBTyxFQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLGNBQWMsRUFBRSxFQUMzRyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUcsSUFBSSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLGNBQWMsRUFBRSxDQUM1RyxDQUFDLENBQUM7O0FBRUgsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1dBQ3RCOzs7ZUFWVSxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcHAge1xyXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcil7XHJcbiAgICBjb25maWcudGl0bGUgPSAnQXVyZWxpYSc7XHJcbiAgICBjb25maWcubWFwKFtcclxuICAgICAgeyByb3V0ZTogWycnLCd3ZWxjb21lJ10sICBuYW1lOiAnd2VsY29tZScsICAgICAgbW9kdWxlSWQ6ICd3ZWxjb21lJywgICAgICBuYXY6IHRydWUsIHRpdGxlOidXZWxjb21lJyB9LFxyXG4gICAgICB7IHJvdXRlOiAndXNlcnMnLCAgICAgICAgIG5hbWU6ICd1c2VycycsICAgICAgICBtb2R1bGVJZDogJ3VzZXJzJywgICAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6J0dpdGh1YiBVc2VycycgfSxcclxuICAgICAgeyByb3V0ZTogJ2NoaWxkLXJvdXRlcicsICBuYW1lOiAnY2hpbGQtcm91dGVyJywgbW9kdWxlSWQ6ICdjaGlsZC1yb3V0ZXInLCBuYXY6IHRydWUsIHRpdGxlOidDaGlsZCBSb3V0ZXInIH1cclxuICAgIF0pO1xyXG5cclxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=