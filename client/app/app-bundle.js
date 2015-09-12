System.registerDynamic("welcome.html!github:systemjs/plugin-text@0.0.2", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<template>\r\n  <section class=\"au-animate\">\r\n    <h2>${heading}</h2>\r\n    <form role=\"form\" submit.delegate=\"submit()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"fn\">First Name</label>\r\n        <input type=\"text\" value.bind=\"firstName\" class=\"form-control\" id=\"fn\" placeholder=\"first name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"ln\">Last Name</label>\r\n        <input type=\"text\" value.bind=\"lastName\" class=\"form-control\" id=\"ln\" placeholder=\"last name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Full Name</label>\r\n        <p class=\"help-block\">${fullName | upper}</p>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n    </form>\r\n  </section>\r\n</template>\r\n";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("users.html!github:systemjs/plugin-text@0.0.2", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<template>\r\n  <require from=\"blur-image\"></require>\r\n\r\n  <section class=\"au-animate\">\r\n      <h2>${heading}</h2>\r\n      <div class=\"row au-stagger\">\r\n        <div class=\"col-sm-6 col-md-3 card-container au-animate\" repeat.for=\"user of users\">\r\n            <div class=\"card\">\r\n                <canvas class=\"header-bg\" width=\"250\" height=\"70\" blur-image.bind=\"image\"></canvas>\r\n                <div class=\"avatar\">\r\n                    <img src.bind=\"user.avatar_url\" crossorigin ref=\"image\"/>\r\n                </div>\r\n                <div class=\"content\">\r\n                    <p class=\"name\">${user.login}</p>\r\n                    <p><a target=\"_blank\" class=\"btn btn-default\" href.bind=\"user.html_url\">Contact</a></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n  </section>\r\n</template>\r\n";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("nav-bar.html!github:systemjs/plugin-text@0.0.2", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<template bindable=\"router\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Toggle Navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <i class=\"fa fa-home\"></i>\r\n        <span>${router.title}</span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\r\n          <a data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1.in\" href.bind=\"row.href\">${row.title}</a>\r\n        </li>\r\n      </ul>\r\n\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"loader\" if.bind=\"router.isNavigating\">\r\n          <i class=\"fa fa-spinner fa-spin fa-2x\"></i>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</template>\r\n";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("child-router.html!github:systemjs/plugin-text@0.0.2", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<template>\r\n  <section class=\"au-animate\">\r\n    <h2>${heading}</h2>\r\n    <div>\r\n      <div class=\"col-md-2\">\r\n        <ul class=\"well nav nav-pills nav-stacked\">\r\n          <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\r\n            <a href.bind=\"row.href\">${row.title}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-10\" style=\"padding: 0\">\r\n        <router-view></router-view>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</template>\r\n";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("app.html!github:systemjs/plugin-text@0.0.2", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<template>\r\n  <require from=\"nav-bar.html\"></require>\r\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\r\n\r\n  <nav-bar router.bind=\"router\"></nav-bar>\r\n\r\n  <div class=\"page-host\">\r\n    <router-view></router-view>\r\n  </div>\r\n</template>\r\n";
  global.define = __define;
  return module.exports;
});

//# sourceMappingURL=app-bundle.html.map