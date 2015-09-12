System.register([], function (_export) {
  'use strict';

  var ChildRouter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      ChildRouter = (function () {
        function ChildRouter() {
          _classCallCheck(this, ChildRouter);

          this.heading = 'Child Router';
        }

        _createClass(ChildRouter, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' }, { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' }, { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }]);

            this.router = router;
          }
        }]);

        return ChildRouter;
      })();

      _export('ChildRouter', ChildRouter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLXJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxXQUFXOzs7Ozs7Ozs7QUFBWCxpQkFBVztpQkFBWCxXQUFXO2dDQUFYLFdBQVc7O2VBQ3RCLE9BQU8sR0FBRyxjQUFjOzs7cUJBRGIsV0FBVzs7aUJBR1AseUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQztBQUM3QixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFDLFNBQVMsQ0FBQyxFQUFHLElBQUksRUFBRSxTQUFTLEVBQVEsUUFBUSxFQUFFLFNBQVMsRUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxTQUFTLEVBQUUsRUFDeEcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFVLElBQUksRUFBRSxPQUFPLEVBQVUsUUFBUSxFQUFFLE9BQU8sRUFBVSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxjQUFjLEVBQUUsRUFDN0csRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFHLElBQUksRUFBRSxjQUFjLEVBQUcsUUFBUSxFQUFFLGNBQWMsRUFBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxjQUFjLEVBQUUsQ0FDOUcsQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztXQUN0Qjs7O2VBWFUsV0FBVyIsImZpbGUiOiJjaGlsZC1yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2hpbGRSb3V0ZXJ7XHJcbiAgaGVhZGluZyA9ICdDaGlsZCBSb3V0ZXInO1xyXG5cclxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpe1xyXG4gICAgY29uZmlnLm1hcChbXHJcbiAgICAgIHsgcm91dGU6IFsnJywnd2VsY29tZSddLCAgbmFtZTogJ3dlbGNvbWUnLCAgICAgICBtb2R1bGVJZDogJ3dlbGNvbWUnLCAgICAgICBuYXY6IHRydWUsIHRpdGxlOidXZWxjb21lJyB9LFxyXG4gICAgICB7IHJvdXRlOiAndXNlcnMnLCAgICAgICAgIG5hbWU6ICd1c2VycycsICAgICAgICAgbW9kdWxlSWQ6ICd1c2VycycsICAgICAgICAgbmF2OiB0cnVlLCB0aXRsZTonR2l0aHViIFVzZXJzJyB9LFxyXG4gICAgICB7IHJvdXRlOiAnY2hpbGQtcm91dGVyJywgIG5hbWU6ICdjaGlsZC1yb3V0ZXInLCAgbW9kdWxlSWQ6ICdjaGlsZC1yb3V0ZXInLCAgbmF2OiB0cnVlLCB0aXRsZTonQ2hpbGQgUm91dGVyJyB9XHJcbiAgICBdKTtcclxuXHJcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9