webpackJsonp([21],{

/***/ "./.nuxt/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("./node_modules/_vue@2.5.16@vue/dist/vue.runtime.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_nuxt_loading_vue__ = __webpack_require__("./.nuxt/components/nuxt-loading.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_css_main_css__ = __webpack_require__("./assets/css/main.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_css_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_css_main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_quill_1_3_6_quill_dist_quill_snow_css__ = __webpack_require__("./node_modules/_quill@1.3.6@quill/dist/quill.snow.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_quill_1_3_6_quill_dist_quill_snow_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__node_modules_quill_1_3_6_quill_dist_quill_snow_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_quill_1_3_6_quill_dist_quill_bubble_css__ = __webpack_require__("./node_modules/_quill@1.3.6@quill/dist/quill.bubble.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_quill_1_3_6_quill_dist_quill_bubble_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__node_modules_quill_1_3_6_quill_dist_quill_bubble_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_quill_1_3_6_quill_dist_quill_core_css__ = __webpack_require__("./node_modules/_quill@1.3.6@quill/dist/quill.core.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_quill_1_3_6_quill_dist_quill_core_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__node_modules_quill_1_3_6_quill_dist_quill_core_css__);












var layouts = {

  "_default": function _default() {
    return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "./layouts/default.vue")).then(function (m) {
      return m.default || m;
    });
  }

};

var resolvedLayouts = {};

/* harmony default export */ __webpack_exports__["a"] = ({
  head: { "title": "直播客|打造直播乐园", "meta": [{ "charset": "utf-8" }, { "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "hid": "keywords", "name": "keywords", "content": "好玩的弹幕墙,直播新闻，主播汇集，赛事直播，王者荣耀数据缝隙，王者荣耀巅峰赛数据" }, { "hid": "description", "name": "description", "content": "好玩的弹幕墙,直播新闻，主播汇集，赛事直播，王者荣耀数据缝隙，王者荣耀巅峰赛数据" }], "link": [{ "rel": "icon", "type": 'image/x-icon', "href": '/favicon.ico' }], "style": [], "script": [] },
  render: function render(h, props) {
    var loadingEl = h('nuxt-loading', { ref: 'loading' });
    var layoutEl = h(this.layout || 'nuxt');
    var templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);

    var transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [templateEl]);

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: function data() {
    return {
      layout: null,
      layoutName: ''
    };
  },
  beforeCreate: function beforeCreate() {
    __WEBPACK_IMPORTED_MODULE_1_vue__["default"].util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created: function created() {
    // Add this.$nuxt in child instances
    __WEBPACK_IMPORTED_MODULE_1_vue__["default"].prototype.$nuxt = this;
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this;
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error;
  },
  mounted: function mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },

  methods: {
    errorChanged: function errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail();
        if (this.$loading.finish) this.$loading.finish();
      }
    },
    setLayout: function setLayout(layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default';
      this.layoutName = layout;
      var _layout = '_' + layout;
      this.layout = resolvedLayouts[_layout];
      return this.layout;
    },
    loadLayout: function loadLayout(layout) {
      var _this = this;

      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default';
      var _layout = '_' + layout;
      if (resolvedLayouts[_layout]) {
        return __WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default.a.resolve(resolvedLayouts[_layout]);
      }
      return layouts[_layout]().then(function (Component) {
        resolvedLayouts[_layout] = Component;
        delete layouts[_layout];
        return resolvedLayouts[_layout];
      }).catch(function (e) {
        if (_this.$nuxt) {
          return _this.$nuxt.error({ statusCode: 500, message: e.message });
        }
      });
    }
  },
  components: {
    NuxtLoading: __WEBPACK_IMPORTED_MODULE_2__components_nuxt_loading_vue__["a" /* default */]
  }
});

/***/ }),

/***/ "./.nuxt/client.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_typeof__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/typeof.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/json/stringify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/asyncToGenerator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_keys__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/keys.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_assign__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue__ = __webpack_require__("./node_modules/_vue@2.5.16@vue/dist/vue.runtime.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__middleware__ = __webpack_require__("./.nuxt/middleware.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index__ = __webpack_require__("./.nuxt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils__ = __webpack_require__("./.nuxt/utils.js");








var loadAsyncComponents = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_4__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(to, from, next) {
    var _this = this;

    var Components, startLoader, statusCode;
    return __WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Check if route path changed (this._pathChanged), only if the page is not an error (for validate())
            this._pathChanged = !!app.nuxt.err || from.path !== to.path;
            this._queryChanged = __WEBPACK_IMPORTED_MODULE_3__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_json_stringify___default()(to.query) !== __WEBPACK_IMPORTED_MODULE_3__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_json_stringify___default()(from.query);
            this._diffQuery = this._queryChanged ? Object(__WEBPACK_IMPORTED_MODULE_10__utils__["g" /* getQueryDiff */])(to.query, from.query) : [];

            if (this._pathChanged && this.$loading.start) {
              this.$loading.start();
            }

            _context.prev = 4;
            _context.next = 7;
            return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["k" /* resolveRouteComponents */])(to);

          case 7:
            Components = _context.sent;


            if (!this._pathChanged && this._queryChanged) {
              // Add a marker on each component that it needs to refresh or not
              startLoader = Components.some(function (Component) {
                var watchQuery = Component.options.watchQuery;
                if (watchQuery === true) return true;
                if (Array.isArray(watchQuery)) {
                  return watchQuery.some(function (key) {
                    return _this._diffQuery[key];
                  });
                }
                return false;
              });

              if (startLoader && this.$loading.start) {
                this.$loading.start();
              }
            }

            // Call next()
            next();
            _context.next = 19;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](4);

            _context.t0 = _context.t0 || {};
            statusCode = _context.t0.statusCode || _context.t0.status || _context.t0.response && _context.t0.response.status || 500;

            this.error({ statusCode: statusCode, message: _context.t0.message });
            this.$nuxt.$emit('routeChanged', to, from, _context.t0);
            next(false);

          case 19:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 12]]);
  }));

  return function loadAsyncComponents(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var render = function () {
  var _ref3 = __WEBPACK_IMPORTED_MODULE_4__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee3(to, from, next) {
    var _this4 = this;

    var nextCalled, _next, matches, Components, layout, _layout, isValid, _layout2;

    return __WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(this._pathChanged === false && this._queryChanged === false)) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt('return', next());

          case 2:

            // nextCalled is true when redirected
            nextCalled = false;

            _next = function _next(path) {
              if (from.path === path.path && _this4.$loading.finish) _this4.$loading.finish();
              if (from.path !== path.path && _this4.$loading.pause) _this4.$loading.pause();
              if (nextCalled) return;
              nextCalled = true;
              var matches = [];
              _lastPaths = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["e" /* getMatchedComponents */])(from, matches).map(function (Component, i) {
                return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["b" /* compile */])(from.matched[matches[i]].path)(from.params);
              });
              next(path);
            };

            // Update context


            _context3.next = 6;
            return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["m" /* setContext */])(app, {
              route: to,
              from: from,
              next: _next.bind(this)
            });

          case 6:
            this._dateLastError = app.nuxt.dateErr;
            this._hadError = !!app.nuxt.err;

            // Get route's matched components
            matches = [];
            Components = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["e" /* getMatchedComponents */])(to, matches);

            // If no Components matched, generate 404

            if (Components.length) {
              _context3.next = 24;
              break;
            }

            _context3.next = 13;
            return callMiddleware.call(this, Components, app.context);

          case 13:
            if (!nextCalled) {
              _context3.next = 15;
              break;
            }

            return _context3.abrupt('return');

          case 15:
            _context3.next = 17;
            return this.loadLayout(typeof __WEBPACK_IMPORTED_MODULE_9__index__["a" /* NuxtError */].layout === 'function' ? __WEBPACK_IMPORTED_MODULE_9__index__["a" /* NuxtError */].layout(app.context) : __WEBPACK_IMPORTED_MODULE_9__index__["a" /* NuxtError */].layout);

          case 17:
            layout = _context3.sent;
            _context3.next = 20;
            return callMiddleware.call(this, Components, app.context, layout);

          case 20:
            if (!nextCalled) {
              _context3.next = 22;
              break;
            }

            return _context3.abrupt('return');

          case 22:
            // Show error page
            app.context.error({ statusCode: 404, message: 'This page could not be found' });
            return _context3.abrupt('return', next());

          case 24:

            // Update ._data and other properties if hot reloaded
            Components.forEach(function (Component) {
              if (Component._Ctor && Component._Ctor.options) {
                Component.options.asyncData = Component._Ctor.options.asyncData;
                Component.options.fetch = Component._Ctor.options.fetch;
              }
            });

            // Apply transitions
            this.setTransitions(mapTransitions(Components, to, from));

            _context3.prev = 26;
            _context3.next = 29;
            return callMiddleware.call(this, Components, app.context);

          case 29:
            if (!nextCalled) {
              _context3.next = 31;
              break;
            }

            return _context3.abrupt('return');

          case 31:
            if (!app.context._errored) {
              _context3.next = 33;
              break;
            }

            return _context3.abrupt('return', next());

          case 33:

            // Set layout
            _layout = Components[0].options.layout;

            if (typeof _layout === 'function') {
              _layout = _layout(app.context);
            }
            _context3.next = 37;
            return this.loadLayout(_layout);

          case 37:
            _layout = _context3.sent;
            _context3.next = 40;
            return callMiddleware.call(this, Components, app.context, _layout);

          case 40:
            if (!nextCalled) {
              _context3.next = 42;
              break;
            }

            return _context3.abrupt('return');

          case 42:
            if (!app.context._errored) {
              _context3.next = 44;
              break;
            }

            return _context3.abrupt('return', next());

          case 44:

            // Call .validate()
            isValid = true;

            Components.forEach(function (Component) {
              if (!isValid) return;
              if (typeof Component.options.validate !== 'function') return;
              isValid = Component.options.validate({
                params: to.params || {},
                query: to.query || {}

              });
            });
            // ...If .validate() returned false

            if (isValid) {
              _context3.next = 49;
              break;
            }

            this.error({ statusCode: 404, message: 'This page could not be found' });
            return _context3.abrupt('return', next());

          case 49:
            _context3.next = 51;
            return __WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default.a.all(Components.map(function (Component, i) {
              // Check if only children route changed
              Component._path = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["b" /* compile */])(to.matched[matches[i]].path)(to.params);
              Component._dataRefresh = false;
              // Check if Component need to be refreshed (call asyncData & fetch)
              // Only if its slug has changed or is watch query changes
              if (_this4._pathChanged && Component._path !== _lastPaths[i]) {
                Component._dataRefresh = true;
              } else if (!_this4._pathChanged && _this4._queryChanged) {
                var watchQuery = Component.options.watchQuery;
                if (watchQuery === true) {
                  Component._dataRefresh = true;
                } else if (Array.isArray(watchQuery)) {
                  Component._dataRefresh = watchQuery.some(function (key) {
                    return _this4._diffQuery[key];
                  });
                }
              }
              if (!_this4._hadError && _this4._isMounted && !Component._dataRefresh) {
                return __WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default.a.resolve();
              }

              var promises = [];

              var hasAsyncData = Component.options.asyncData && typeof Component.options.asyncData === 'function';
              var hasFetch = !!Component.options.fetch;
              var loadingIncrease = hasAsyncData && hasFetch ? 30 : 45;

              // Call asyncData(context)
              if (hasAsyncData) {
                var promise = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["j" /* promisify */])(Component.options.asyncData, app.context).then(function (asyncDataResult) {
                  Object(__WEBPACK_IMPORTED_MODULE_10__utils__["a" /* applyAsyncData */])(Component, asyncDataResult);
                  if (_this4.$loading.increase) _this4.$loading.increase(loadingIncrease);
                });
                promises.push(promise);
              }

              // Call fetch(context)
              if (hasFetch) {
                var p = Component.options.fetch(app.context);
                if (!p || !(p instanceof __WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default.a) && typeof p.then !== 'function') {
                  p = __WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default.a.resolve(p);
                }
                p.then(function (fetchResult) {
                  if (_this4.$loading.increase) _this4.$loading.increase(loadingIncrease);
                });
                promises.push(p);
              }

              return __WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default.a.all(promises);
            }));

          case 51:

            // If not redirected
            if (!nextCalled) {
              if (this.$loading.finish) this.$loading.finish();
              _lastPaths = Components.map(function (Component, i) {
                return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["b" /* compile */])(to.matched[matches[i]].path)(to.params);
              });
              next();
            }

            _context3.next = 66;
            break;

          case 54:
            _context3.prev = 54;
            _context3.t0 = _context3['catch'](26);

            if (!_context3.t0) _context3.t0 = {};
            _lastPaths = [];
            _context3.t0.statusCode = _context3.t0.statusCode || _context3.t0.status || _context3.t0.response && _context3.t0.response.status || 500;

            // Load error layout
            _layout2 = __WEBPACK_IMPORTED_MODULE_9__index__["a" /* NuxtError */].layout;

            if (typeof _layout2 === 'function') {
              _layout2 = _layout2(app.context);
            }
            _context3.next = 63;
            return this.loadLayout(_layout2);

          case 63:

            this.error(_context3.t0);
            this.$nuxt.$emit('routeChanged', to, from, _context3.t0);
            next(false);

          case 66:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[26, 54]]);
  }));

  return function render(_x9, _x10, _x11) {
    return _ref3.apply(this, arguments);
  };
}();

// Fix components format in matched, it's due to code-splitting of vue-router


var mountApp = function () {
  var _ref5 = __WEBPACK_IMPORTED_MODULE_4__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee5(__app) {
    var Components, _app, layout, mount;

    return __WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            // Set global variables
            app = __app.app;
            router = __app.router;

            // Resolve route components
            _context5.next = 4;
            return __WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default.a.all(resolveComponents(router));

          case 4:
            Components = _context5.sent;


            // Create Vue instance
            _app = new __WEBPACK_IMPORTED_MODULE_7_vue__["default"](app);

            // Load layout

            layout = NUXT.layout || 'default';
            _context5.next = 9;
            return _app.loadLayout(layout);

          case 9:
            _app.setLayout(layout);

            // Mounts Vue app to DOM element

            mount = function mount() {
              _app.$mount('#__nuxt');

              // Listen for first Vue update
              __WEBPACK_IMPORTED_MODULE_7_vue__["default"].nextTick(function () {
                // Call window.onNuxtReady callbacks
                nuxtReady(_app);

                // Enable hot reloading
                hotReloadAPI(_app);
              });
            };

            // Enable transitions


            _app.setTransitions = _app.$options.nuxt.setTransitions.bind(_app);
            if (Components.length) {
              _app.setTransitions(mapTransitions(Components, router.currentRoute));
              _lastPaths = router.currentRoute.matched.map(function (route) {
                return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["b" /* compile */])(route.path)(router.currentRoute.params);
              });
            }

            // Initialize error handler
            _app.$loading = {}; // To avoid error while _app.$nuxt does not exist
            if (NUXT.error) _app.error(NUXT.error);

            // Add router hooks
            router.beforeEach(loadAsyncComponents.bind(_app));
            router.beforeEach(render.bind(_app));
            router.afterEach(normalizeComponents);
            router.afterEach(fixPrepatch.bind(_app));

            // If page already is server rendered

            if (!NUXT.serverRendered) {
              _context5.next = 22;
              break;
            }

            mount();
            return _context5.abrupt('return');

          case 22:

            // First render on client-side
            render.call(_app, router.currentRoute, router.currentRoute, function (path) {
              // If not redirected
              if (!path) {
                normalizeComponents(router.currentRoute, router.currentRoute);
                showNextPage.call(_app, router.currentRoute);
                // Dont call fixPrepatch.call(_app, router.currentRoute, router.currentRoute) since it's first render
                mount();
                return;
              }

              // Push the path and then mount app
              router.push(path, function () {
                return mount();
              }, function (err) {
                if (!err) return mount();
                console.error(err);
              });
            });

          case 23:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function mountApp(_x13) {
    return _ref5.apply(this, arguments);
  };
}();






var noopData = function noopData() {
  return {};
};
var noopFetch = function noopFetch() {};

// Global shared references
var _lastPaths = [];
var app = void 0;
var router = void 0;

// Try to rehydrate SSR data from window
var NUXT = window.__NUXT__ || {};

// Setup global Vue error handler
var defaultErrorHandler = __WEBPACK_IMPORTED_MODULE_7_vue__["default"].config.errorHandler;
__WEBPACK_IMPORTED_MODULE_7_vue__["default"].config.errorHandler = function (err, vm, info) {
  var nuxtError = {
    statusCode: err.statusCode || err.name || 'Whoops!',
    message: err.message || err.toString()

    // Show Nuxt Error Page
  };if (vm && vm.$root && vm.$root.$nuxt && vm.$root.$nuxt.error && info !== 'render function') {
    vm.$root.$nuxt.error(nuxtError);
  }

  // Call other handler if exist
  if (typeof defaultErrorHandler === 'function') {
    return defaultErrorHandler.apply(undefined, arguments);
  }

  // Log to console
  if (true) {
    console.error(err);
  } else {
    console.error(err.message || nuxtError.message);
  }
};

// Create and mount App
Object(__WEBPACK_IMPORTED_MODULE_9__index__["b" /* createApp */])().then(mountApp).catch(function (err) {
  if (err.message === 'ERR_REDIRECT') {
    return; // Wait for browser to redirect...
  }
  console.error('[nuxt] Error while initializing app', err);
});

function componentOption(component, key) {
  if (!component || !component.options || !component.options[key]) {
    return {};
  }
  var option = component.options[key];
  if (typeof option === 'function') {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return option.apply(undefined, args);
  }
  return option;
}

function mapTransitions(Components, to, from) {
  var componentTransitions = function componentTransitions(component) {
    var transition = componentOption(component, 'transition', to, from) || {};
    return typeof transition === 'string' ? { name: transition } : transition;
  };

  return Components.map(function (Component) {
    // Clone original object to prevent overrides
    var transitions = __WEBPACK_IMPORTED_MODULE_6__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_assign___default()({}, componentTransitions(Component));

    // Combine transitions & prefer `leave` transitions of 'from' route
    if (from && from.matched.length && from.matched[0].components.default) {
      var from_transitions = componentTransitions(from.matched[0].components.default);
      __WEBPACK_IMPORTED_MODULE_5__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_keys___default()(from_transitions).filter(function (key) {
        return from_transitions[key] && key.toLowerCase().indexOf('leave') !== -1;
      }).forEach(function (key) {
        transitions[key] = from_transitions[key];
      });
    }

    return transitions;
  });
}

function applySSRData(Component, ssrData) {
  if (NUXT.serverRendered && ssrData) {
    Object(__WEBPACK_IMPORTED_MODULE_10__utils__["a" /* applyAsyncData */])(Component, ssrData);
  }
  Component._Ctor = Component;
  return Component;
}

// Get matched components
function resolveComponents(router) {
  var _this2 = this;

  var path = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["d" /* getLocation */])(router.options.base, router.options.mode);

  return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["c" /* flatMapComponents */])(router.match(path), function () {
    var _ref2 = __WEBPACK_IMPORTED_MODULE_4__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(Component, _, match, key, index) {
      var _Component;

      return __WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(typeof Component === 'function' && !Component.options)) {
                _context2.next = 4;
                break;
              }

              _context2.next = 3;
              return Component();

            case 3:
              Component = _context2.sent;

            case 4:
              // Sanitize it and save it
              _Component = applySSRData(Object(__WEBPACK_IMPORTED_MODULE_10__utils__["l" /* sanitizeComponent */])(Component), NUXT.data ? NUXT.data[index] : null);

              match.components[key] = _Component;
              return _context2.abrupt('return', _Component);

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }));

    return function (_x4, _x5, _x6, _x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }());
}

function callMiddleware(Components, context, layout) {
  var _this3 = this;

  var midd = [];
  var unknownMiddleware = false;

  // If layout is undefined, only call global middleware
  if (typeof layout !== 'undefined') {
    midd = []; // Exclude global middleware if layout defined (already called before)
    if (layout.middleware) {
      midd = midd.concat(layout.middleware);
    }
    Components.forEach(function (Component) {
      if (Component.options.middleware) {
        midd = midd.concat(Component.options.middleware);
      }
    });
  }

  midd = midd.map(function (name) {
    if (typeof name === 'function') return name;
    if (typeof __WEBPACK_IMPORTED_MODULE_8__middleware__["a" /* default */][name] !== 'function') {
      unknownMiddleware = true;
      _this3.error({ statusCode: 500, message: 'Unknown middleware ' + name });
    }
    return __WEBPACK_IMPORTED_MODULE_8__middleware__["a" /* default */][name];
  });

  if (unknownMiddleware) return;
  return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["i" /* middlewareSeries */])(midd, context);
}

function normalizeComponents(to, ___) {
  Object(__WEBPACK_IMPORTED_MODULE_10__utils__["c" /* flatMapComponents */])(to, function (Component, _, match, key) {
    if ((typeof Component === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_typeof___default()(Component)) === 'object' && !Component.options) {
      // Updated via vue-router resolveAsyncComponents()
      Component = __WEBPACK_IMPORTED_MODULE_7_vue__["default"].extend(Component);
      Component._Ctor = Component;
      match.components[key] = Component;
    }
    return Component;
  });
}

function showNextPage(to) {
  // Hide error component if no error
  if (this._hadError && this._dateLastError === this.$options.nuxt.dateErr) {
    this.error();
  }

  // Set layout
  var layout = this.$options.nuxt.err ? __WEBPACK_IMPORTED_MODULE_9__index__["a" /* NuxtError */].layout : to.matched[0].components.default.options.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  this.setLayout(layout);
}

// When navigating on a different route but the same component is used, Vue.js
// Will not update the instance data, so we have to update $data ourselves
function fixPrepatch(to, ___) {
  var _this5 = this;

  if (this._pathChanged === false && this._queryChanged === false) return;

  __WEBPACK_IMPORTED_MODULE_7_vue__["default"].nextTick(function () {
    var matches = [];
    var instances = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["f" /* getMatchedComponentsInstances */])(to, matches);

    instances.forEach(function (instance, i) {
      if (!instance) return;
      // if (!this._queryChanged && to.matched[matches[i]].path.indexOf(':') === -1 && to.matched[matches[i]].path.indexOf('*') === -1) return // If not a dynamic route, skip
      if (instance.constructor._dataRefresh && _lastPaths[i] === instance.constructor._path && typeof instance.constructor.options.data === 'function') {
        var newData = instance.constructor.options.data.call(instance);
        for (var key in newData) {
          __WEBPACK_IMPORTED_MODULE_7_vue__["default"].set(instance.$data, key, newData[key]);
        }
      }
    });
    showNextPage.call(_this5, to);

    // Hot reloading
    setTimeout(function () {
      return hotReloadAPI(_this5);
    }, 100);
  });
}

function nuxtReady(_app) {
  window._nuxtReadyCbs.forEach(function (cb) {
    if (typeof cb === 'function') {
      cb(_app);
    }
  });
  // Special JSDOM
  if (typeof window._onNuxtLoaded === 'function') {
    window._onNuxtLoaded(_app);
  }
  // Add router hooks
  router.afterEach(function (to, from) {
    // Wait for fixPrepatch + $data updates
    __WEBPACK_IMPORTED_MODULE_7_vue__["default"].nextTick(function () {
      return _app.$nuxt.$emit('routeChanged', to, from);
    });
  });
}

// Special hot reload with asyncData(context)
function getNuxtChildComponents($parent) {
  var $components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  $parent.$children.forEach(function ($child) {
    if ($child.$vnode.data.nuxtChild && !$components.find(function (c) {
      return c.$options.__file === $child.$options.__file;
    })) {
      $components.push($child);
    }
    if ($child.$children && $child.$children.length) {
      getNuxtChildComponents($child, $components);
    }
  });

  return $components;
}

function hotReloadAPI(_app) {
  if (false) return;

  var $components = getNuxtChildComponents(_app.$nuxt, []);

  $components.forEach(addHotReload.bind(_app));
}

function addHotReload($component, depth) {
  var _this6 = this;

  if ($component.$vnode.data._hasHotReload) return;
  $component.$vnode.data._hasHotReload = true;

  var _forceUpdate = $component.$forceUpdate.bind($component.$parent);

  $component.$vnode.context.$forceUpdate = __WEBPACK_IMPORTED_MODULE_4__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
    var Components, Component, promises, next, context;
    return __WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            Components = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["e" /* getMatchedComponents */])(router.currentRoute);
            Component = Components[depth];

            if (Component) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt('return', _forceUpdate());

          case 4:
            if ((typeof Component === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_typeof___default()(Component)) === 'object' && !Component.options) {
              // Updated via vue-router resolveAsyncComponents()
              Component = __WEBPACK_IMPORTED_MODULE_7_vue__["default"].extend(Component);
              Component._Ctor = Component;
            }
            _this6.error();
            promises = [];

            next = function next(path) {
              this.$loading.finish && this.$loading.finish();
              router.push(path);
            };

            _context4.next = 10;
            return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["m" /* setContext */])(app, {
              route: router.currentRoute,
              isHMR: true,
              next: next.bind(_this6)
            });

          case 10:
            context = app.context;

            _this6.$loading.start && _this6.$loading.start();
            callMiddleware.call(_this6, Components, context).then(function () {
              // If layout changed
              if (depth !== 0) return __WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default.a.resolve();
              var layout = Component.options.layout || 'default';
              if (typeof layout === 'function') {
                layout = layout(context);
              }
              if (_this6.layoutName === layout) return __WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default.a.resolve();
              var promise = _this6.loadLayout(layout);
              promise.then(function () {
                _this6.setLayout(layout);
                __WEBPACK_IMPORTED_MODULE_7_vue__["default"].nextTick(function () {
                  return hotReloadAPI(_this6);
                });
              });
              return promise;
            }).then(function () {
              return callMiddleware.call(_this6, Components, context, _this6.layout);
            }).then(function () {
              // Call asyncData(context)
              var pAsyncData = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["j" /* promisify */])(Component.options.asyncData || noopData, context);
              pAsyncData.then(function (asyncDataResult) {
                Object(__WEBPACK_IMPORTED_MODULE_10__utils__["a" /* applyAsyncData */])(Component, asyncDataResult);
                _this6.$loading.increase && _this6.$loading.increase(30);
              });
              promises.push(pAsyncData);
              // Call fetch()
              Component.options.fetch = Component.options.fetch || noopFetch;
              var pFetch = Component.options.fetch(context);
              if (!pFetch || !(pFetch instanceof __WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default.a) && typeof pFetch.then !== 'function') {
                pFetch = __WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default.a.resolve(pFetch);
              }
              pFetch.then(function () {
                return _this6.$loading.increase && _this6.$loading.increase(30);
              });
              promises.push(pFetch);
              return __WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default.a.all(promises);
            }).then(function () {
              _this6.$loading.finish && _this6.$loading.finish();
              _forceUpdate();
              setTimeout(function () {
                return hotReloadAPI(_this6);
              }, 100);
            });

          case 13:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this6);
  }));
}

/***/ }),

/***/ "./.nuxt/components/no-ssr.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
** From https://github.com/egoist/vue-no-ssr
** With the authorization of @egoist
*/
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'no-ssr',
  props: ['placeholder'],
  data: function data() {
    return {
      canRender: false
    };
  },
  mounted: function mounted() {
    this.canRender = true;
  },
  render: function render(h) {
    if (this.canRender) {
      if ("development" === 'development' && this.$slots.default && this.$slots.default.length > 1) {
        throw new Error('<no-ssr> You cannot use multiple child components');
      }
      return this.$slots.default && this.$slots.default[0];
    }

    return h('div', {
      class: ['no-ssr-placeholder']
    }, this.$slots.placeholder || this.placeholder);
  }
});

/***/ }),

/***/ "./.nuxt/components/nuxt-child.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'nuxt-child',
  functional: true,
  props: ['keepAlive'],
  render: function render(h, _ref) {
    var parent = _ref.parent,
        data = _ref.data,
        props = _ref.props;

    data.nuxtChild = true;
    var _parent = parent;
    var transitions = parent.$nuxt.nuxt.transitions;
    var defaultTransition = parent.$nuxt.nuxt.defaultTransition;

    var depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    var transition = transitions[depth] || defaultTransition;
    var transitionProps = {};
    transitionsKeys.forEach(function (key) {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    var listeners = {};
    listenersKeys.forEach(function (key) {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    // Add triggerScroll event on beforeEnter (fix #1376)
    var beforeEnter = listeners.beforeEnter;
    listeners.beforeEnter = function (el) {
      window.$nuxt.$emit('triggerScroll');
      if (beforeEnter) return beforeEnter.call(_parent, el);
    };

    var routerView = [h('router-view', data)];
    if (typeof props.keepAlive !== 'undefined') {
      routerView = [h('keep-alive', routerView)];
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, routerView);
  }
});

var transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];

var listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];

/***/ }),

/***/ "./.nuxt/components/nuxt-link.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'nuxt-link',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children;

    return h('router-link', data, children);
  }
});

/***/ }),

/***/ "./.nuxt/components/nuxt-loading.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_true_presets_Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_preset_vue_app_2_0_0_babel_preset_vue_app_dist_index_common_js_targets_ie_9_uglify_true_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_nuxt_loading_vue__ = __webpack_require__("./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js?{\"babelrc\":false,\"cacheDirectory\":true,\"presets\":[[\"/Users/xiaochong/workspace/nuxt/nuxt_test2/node_modules/_babel-preset-vue-app@2.0.0@babel-preset-vue-app/dist/index.common.js\",{\"targets\":{\"ie\":9,\"uglify\":true}}]]}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=script&index=0!./.nuxt/components/nuxt-loading.vue");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_41c071cf_hasScoped_false_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_nuxt_loading_vue__ = __webpack_require__("./node_modules/_vue-loader@13.7.0@vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-41c071cf\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"object\":\"src\",\"embed\":\"src\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=template&index=0!./.nuxt/components/nuxt-loading.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/_vue-style-loader@3.1.2@vue-style-loader/index.js?{\"sourceMap\":true}!./node_modules/_css-loader@0.28.11@css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":0,\"alias\":{\"/assets\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/assets\",\"/static\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/static\"}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41c071cf\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./.nuxt/components/nuxt-loading.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/_vue-loader@13.7.0@vue-loader/lib/component-normalizer.js")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_true_presets_Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_preset_vue_app_2_0_0_babel_preset_vue_app_dist_index_common_js_targets_ie_9_uglify_true_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_nuxt_loading_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_41c071cf_hasScoped_false_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_nuxt_loading_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = ".nuxt/components/nuxt-loading.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__("./node_modules/_vue-hot-reload-api@2.3.0@vue-hot-reload-api/dist/index.js")
  hotAPI.install(__webpack_require__("./node_modules/_vue@2.5.16@vue/dist/vue.runtime.esm.js"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41c071cf", Component.options)
  } else {
    hotAPI.reload("data-v-41c071cf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "./.nuxt/components/nuxt.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/_vue@2.5.16@vue/dist/vue.runtime.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nuxt_child__ = __webpack_require__("./.nuxt/components/nuxt-child.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_error_vue__ = __webpack_require__("./layouts/error.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__("./.nuxt/utils.js");





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'nuxt',
  props: ['nuxtChildKey', 'keepAlive'],
  render: function render(h) {
    // If there is some error
    if (this.nuxt.err) {
      return h('nuxt-error', {
        props: {
          error: this.nuxt.err
        }
      });
    }
    // Directly return nuxt child
    return h('nuxt-child', {
      key: this.routerViewKey,
      props: this.$props
    });
  },
  beforeCreate: function beforeCreate() {
    __WEBPACK_IMPORTED_MODULE_0_vue__["default"].util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  computed: {
    routerViewKey: function routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* compile */])(this.$route.matched[0].path)(this.$route.params);
      }
      var Component = this.$route.matched[0] && this.$route.matched[0].components.default;
      if (Component && Component.options && Component.options.key) {
        return typeof Component.options.key === 'function' ? Component.options.key(this.$route) : Component.options.key;
      }
      return this.$route.path;
    }
  },
  components: {
    NuxtChild: __WEBPACK_IMPORTED_MODULE_1__nuxt_child__["a" /* default */],
    NuxtError: __WEBPACK_IMPORTED_MODULE_2__layouts_error_vue__["a" /* default */]
  }
});

/***/ }),

/***/ "./.nuxt/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_define_property__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/define-property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_assign__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/asyncToGenerator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_es6_promise_auto__ = __webpack_require__("./node_modules/_es6-promise@4.2.4@es6-promise/auto.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_es6_promise_auto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_es6_promise_auto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue__ = __webpack_require__("./node_modules/_vue@2.5.16@vue/dist/vue.runtime.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_meta__ = __webpack_require__("./node_modules/_vue-meta@1.5.0@vue-meta/lib/vue-meta.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_meta___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vue_meta__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__router_js__ = __webpack_require__("./.nuxt/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_no_ssr_js__ = __webpack_require__("./.nuxt/components/no-ssr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_nuxt_child_js__ = __webpack_require__("./.nuxt/components/nuxt-child.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_nuxt_link_js__ = __webpack_require__("./.nuxt/components/nuxt-link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layouts_error_vue__ = __webpack_require__("./layouts/error.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_nuxt_js__ = __webpack_require__("./.nuxt/components/nuxt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__App_js__ = __webpack_require__("./.nuxt/App.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils__ = __webpack_require__("./.nuxt/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_nuxt_plugin_elementui_72a9ed1c__ = __webpack_require__("./plugins/element-ui.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_nuxt_plugin_quilleditor_dc45d328__ = __webpack_require__("./plugins/quill-editor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_nuxt_plugin_vuesocketio_c77a20fe__ = __webpack_require__("./plugins/vue-socketio.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_nuxt_plugin_barrage_8ed8afe6__ = __webpack_require__("./plugins/barrage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_nuxt_plugin_dateformat_b059df92__ = __webpack_require__("./plugins/date-format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_nuxt_plugin_dateformat_b059df92___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_nuxt_plugin_dateformat_b059df92__);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_13__layouts_error_vue__["a"]; });







var createApp = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_5__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(ssrContext) {
    var _this = this;

    var router, app, next, route, path, inject;
    return __WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            router = Object(__WEBPACK_IMPORTED_MODULE_9__router_js__["a" /* createRouter */])(ssrContext);

            // Create Root instance
            // here we inject the router and store to all child components,
            // making them available everywhere as `this.$router` and `this.$store`.

            app = __WEBPACK_IMPORTED_MODULE_4__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_extends___default()({
              router: router,

              nuxt: {
                defaultTransition: defaultTransition,
                transitions: [defaultTransition],
                setTransitions: function setTransitions(transitions) {
                  if (!Array.isArray(transitions)) {
                    transitions = [transitions];
                  }
                  transitions = transitions.map(function (transition) {
                    if (!transition) {
                      transition = defaultTransition;
                    } else if (typeof transition === 'string') {
                      transition = __WEBPACK_IMPORTED_MODULE_3__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_assign___default()({}, defaultTransition, { name: transition });
                    } else {
                      transition = __WEBPACK_IMPORTED_MODULE_3__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_assign___default()({}, defaultTransition, transition);
                    }
                    return transition;
                  });
                  this.$options.nuxt.transitions = transitions;
                  return transitions;
                },

                err: null,
                dateErr: null,
                error: function error(err) {
                  err = err || null;
                  app.context._errored = !!err;
                  if (typeof err === 'string') err = { statusCode: 500, message: err };
                  var nuxt = this.nuxt || this.$options.nuxt;
                  nuxt.dateErr = Date.now();
                  nuxt.err = err;
                  // Used in lib/server.js
                  if (ssrContext) ssrContext.nuxt.error = err;
                  return err;
                }
              }
            }, __WEBPACK_IMPORTED_MODULE_15__App_js__["a" /* default */]);
            next = ssrContext ? ssrContext.next : function (location) {
              return app.router.push(location);
            };
            // Resolve route

            route = void 0;

            if (ssrContext) {
              route = router.resolve(ssrContext.url).route;
            } else {
              path = Object(__WEBPACK_IMPORTED_MODULE_16__utils__["d" /* getLocation */])(router.options.base);

              route = router.resolve(path).route;
            }

            // Set context to app.context
            _context2.next = 7;
            return Object(__WEBPACK_IMPORTED_MODULE_16__utils__["m" /* setContext */])(app, {
              route: route,
              next: next,
              error: app.nuxt.error.bind(app),

              payload: ssrContext ? ssrContext.payload : undefined,
              req: ssrContext ? ssrContext.req : undefined,
              res: ssrContext ? ssrContext.res : undefined,
              beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined
            });

          case 7:
            inject = function inject(key, value) {
              if (!key) throw new Error('inject(key, value) has no key provided');
              if (!value) throw new Error('inject(key, value) has no value provided');
              key = '$' + key;
              // Add into app
              app[key] = value;

              // Check if plugin not already installed
              var installKey = '__nuxt_' + key + '_installed__';
              if (__WEBPACK_IMPORTED_MODULE_7_vue__["default"][installKey]) return;
              __WEBPACK_IMPORTED_MODULE_7_vue__["default"][installKey] = true;
              // Call Vue.use() to install the plugin into vm
              __WEBPACK_IMPORTED_MODULE_7_vue__["default"].use(function () {
                if (!__WEBPACK_IMPORTED_MODULE_7_vue__["default"].prototype.hasOwnProperty(key)) {
                  __WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_define_property___default()(__WEBPACK_IMPORTED_MODULE_7_vue__["default"].prototype, key, {
                    get: function get() {
                      return this.$root.$options[key];
                    }
                  });
                }
              });
            };

            // Plugin execution

            if (!(typeof __WEBPACK_IMPORTED_MODULE_17_nuxt_plugin_elementui_72a9ed1c__["default"] === 'function')) {
              _context2.next = 11;
              break;
            }

            _context2.next = 11;
            return Object(__WEBPACK_IMPORTED_MODULE_17_nuxt_plugin_elementui_72a9ed1c__["default"])(app.context, inject);

          case 11:
            if (!(typeof __WEBPACK_IMPORTED_MODULE_21_nuxt_plugin_dateformat_b059df92___default.a === 'function')) {
              _context2.next = 14;
              break;
            }

            _context2.next = 14;
            return __WEBPACK_IMPORTED_MODULE_21_nuxt_plugin_dateformat_b059df92___default()(app.context, inject);

          case 14:
            if (false) {
              _context2.next = 24;
              break;
            }

            if (!(typeof __WEBPACK_IMPORTED_MODULE_18_nuxt_plugin_quilleditor_dc45d328__["default"] === 'function')) {
              _context2.next = 18;
              break;
            }

            _context2.next = 18;
            return Object(__WEBPACK_IMPORTED_MODULE_18_nuxt_plugin_quilleditor_dc45d328__["default"])(app.context, inject);

          case 18:
            if (!(typeof __WEBPACK_IMPORTED_MODULE_19_nuxt_plugin_vuesocketio_c77a20fe__["default"] === 'function')) {
              _context2.next = 21;
              break;
            }

            _context2.next = 21;
            return Object(__WEBPACK_IMPORTED_MODULE_19_nuxt_plugin_vuesocketio_c77a20fe__["default"])(app.context, inject);

          case 21:
            if (!(typeof __WEBPACK_IMPORTED_MODULE_20_nuxt_plugin_barrage_8ed8afe6__["default"] === 'function')) {
              _context2.next = 24;
              break;
            }

            _context2.next = 24;
            return Object(__WEBPACK_IMPORTED_MODULE_20_nuxt_plugin_barrage_8ed8afe6__["default"])(app.context, inject);

          case 24:
            if (true) {
              _context2.next = 27;
              break;
            }

            _context2.next = 27;
            return new __WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
              router.push(ssrContext.url, resolve, function () {
                // navigated to a different route in router guard
                var unregister = router.afterEach(function () {
                  var _ref2 = __WEBPACK_IMPORTED_MODULE_5__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(to, from, next) {
                    return __WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            ssrContext.url = to.fullPath;
                            _context.next = 3;
                            return Object(__WEBPACK_IMPORTED_MODULE_16__utils__["h" /* getRouteData */])(to);

                          case 3:
                            app.context.route = _context.sent;

                            app.context.params = to.params || {};
                            app.context.query = to.query || {};
                            unregister();
                            resolve();

                          case 8:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this);
                  }));

                  return function (_x2, _x3, _x4) {
                    return _ref2.apply(this, arguments);
                  };
                }());
              });
            });

          case 27:
            return _context2.abrupt('return', {
              app: app,
              router: router

            });

          case 28:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function createApp(_x) {
    return _ref.apply(this, arguments);
  };
}();













/* Plugins */
 // Source: ../plugins/element-ui.js
 // Source: ../plugins/quill-editor.js (ssr: false)
 // Source: ../plugins/vue-socketio.js (ssr: false)
 // Source: ../plugins/barrage.js (ssr: false)
 // Source: ../plugins/date-format.js


// Component: <no-ssr>
__WEBPACK_IMPORTED_MODULE_7_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_10__components_no_ssr_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_10__components_no_ssr_js__["a" /* default */]);

// Component: <nuxt-child>
__WEBPACK_IMPORTED_MODULE_7_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_11__components_nuxt_child_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_11__components_nuxt_child_js__["a" /* default */]);

// Component: <nuxt-link>
__WEBPACK_IMPORTED_MODULE_7_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_12__components_nuxt_link_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_12__components_nuxt_link_js__["a" /* default */]);

// Component: <nuxt>`
__WEBPACK_IMPORTED_MODULE_7_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_14__components_nuxt_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_14__components_nuxt_js__["a" /* default */]);

// vue-meta configuration
__WEBPACK_IMPORTED_MODULE_7_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_8_vue_meta___default.a, {
  keyName: 'head', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-n-head', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-n-head-ssr', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'hid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
});

var defaultTransition = { "name": "page", "mode": "out-in", "appear": false, "appearClass": "appear", "appearActiveClass": "appear-active", "appearToClass": "appear-to" };



/***/ }),

/***/ "./.nuxt/middleware.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ "./.nuxt/router.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createRouter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("./node_modules/_vue@2.5.16@vue/dist/vue.runtime.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__("./node_modules/_vue-router@3.0.1@vue-router/dist/vue-router.esm.js");




__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["default"]);

var _62475a7e = function _62475a7e() {
	return __webpack_require__.e/* import() */(15).then(__webpack_require__.bind(null, "./pages/site/competition/index.vue")).then(function (m) {
		return m.default || m;
	});
};
var _3ae7e500 = function _3ae7e500() {
	return __webpack_require__.e/* import() */(16).then(__webpack_require__.bind(null, "./pages/site/rank/index.vue")).then(function (m) {
		return m.default || m;
	});
};
var _629b51f0 = function _629b51f0() {
	return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "./pages/admin/upload.vue")).then(function (m) {
		return m.default || m;
	});
};
var _5e8ca2e1 = function _5e8ca2e1() {
	return __webpack_require__.e/* import() */(19).then(__webpack_require__.bind(null, "./pages/admin/Aside.vue")).then(function (m) {
		return m.default || m;
	});
};
var _f08d1ab0 = function _f08d1ab0() {
	return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, "./pages/admin/articleUpdate.vue")).then(function (m) {
		return m.default || m;
	});
};
var _2a0ced4a = function _2a0ced4a() {
	return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, "./pages/admin/articleCreate.vue")).then(function (m) {
		return m.default || m;
	});
};
var _57c23dbd = function _57c23dbd() {
	return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, "./pages/admin/articleList.vue")).then(function (m) {
		return m.default || m;
	});
};
var _14914af1 = function _14914af1() {
	return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, "./pages/admin/bannerList.vue")).then(function (m) {
		return m.default || m;
	});
};
var _1321825c = function _1321825c() {
	return __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, "./pages/site/download/index.vue")).then(function (m) {
		return m.default || m;
	});
};
var _859966dc = function _859966dc() {
	return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "./pages/admin/Login.vue")).then(function (m) {
		return m.default || m;
	});
};
var _cebc8f82 = function _cebc8f82() {
	return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, "./pages/admin/recommandList.vue")).then(function (m) {
		return m.default || m;
	});
};
var _fc7ef006 = function _fc7ef006() {
	return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, "./pages/admin/KingPeak.vue")).then(function (m) {
		return m.default || m;
	});
};
var _53fe19aa = function _53fe19aa() {
	return __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, "./pages/site/king/index.vue")).then(function (m) {
		return m.default || m;
	});
};
var _50ff643c = function _50ff643c() {
	return __webpack_require__.e/* import() */(17).then(__webpack_require__.bind(null, "./pages/site/bulletScreen/index.vue")).then(function (m) {
		return m.default || m;
	});
};
var _92dec2d8 = function _92dec2d8() {
	return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, "./pages/admin/hotList.vue")).then(function (m) {
		return m.default || m;
	});
};
var _c9d775e8 = function _c9d775e8() {
	return __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, "./pages/site/advice/index.vue")).then(function (m) {
		return m.default || m;
	});
};
var _373fab64 = function _373fab64() {
	return __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, "./pages/site/article/general.vue")).then(function (m) {
		return m.default || m;
	});
};
var _13fe6428 = function _13fe6428() {
	return __webpack_require__.e/* import() */(18).then(__webpack_require__.bind(null, "./pages/site/article/list.vue")).then(function (m) {
		return m.default || m;
	});
};
var _ad783dca = function _ad783dca() {
	return __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, "./pages/index.vue")).then(function (m) {
		return m.default || m;
	});
};

if (true) {
	window.history.scrollRestoration = 'manual';
}
var scrollBehavior = function scrollBehavior(to, from, savedPosition) {
	// if the returned position is falsy or an empty object,
	// will retain current scroll position.
	var position = false;

	// if no children detected
	if (to.matched.length < 2) {
		// scroll to the top of the page
		position = { x: 0, y: 0 };
	} else if (to.matched.some(function (r) {
		return r.components.default.options.scrollToTop;
	})) {
		// if one of the children has scrollToTop option set to true
		position = { x: 0, y: 0 };
	}

	// savedPosition is only available for popstate navigations (back button)
	if (savedPosition) {
		position = savedPosition;
	}

	return new __WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default.a(function (resolve) {
		// wait for the out transition to complete (if necessary)
		window.$nuxt.$once('triggerScroll', function () {
			// coords will be used if no selector is provided,
			// or if the selector didn't match any element.
			if (to.hash) {
				var hash = to.hash;
				// CSS.escape() is not supported with IE and Edge.
				if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
					hash = '#' + window.CSS.escape(hash.substr(1));
				}
				try {
					if (document.querySelector(hash)) {
						// scroll to anchor by returning the selector
						position = { selector: hash };
					}
				} catch (e) {
					console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
				}
			}
			resolve(position);
		});
	});
};

function createRouter() {
	return new __WEBPACK_IMPORTED_MODULE_2_vue_router__["default"]({
		mode: 'history',
		base: '/',
		linkActiveClass: 'nuxt-link-active',
		linkExactActiveClass: 'nuxt-link-exact-active',
		scrollBehavior: scrollBehavior,
		routes: [{
			path: "/site/competition",
			component: _62475a7e,
			name: "site-competition"
		}, {
			path: "/site/rank",
			component: _3ae7e500,
			name: "site-rank"
		}, {
			path: "/admin/upload",
			component: _629b51f0,
			name: "admin-upload"
		}, {
			path: "/admin/Aside",
			component: _5e8ca2e1,
			name: "admin-Aside"
		}, {
			path: "/admin/articleUpdate",
			component: _f08d1ab0,
			name: "admin-articleUpdate"
		}, {
			path: "/admin/articleCreate",
			component: _2a0ced4a,
			name: "admin-articleCreate"
		}, {
			path: "/admin/articleList",
			component: _57c23dbd,
			name: "admin-articleList"
		}, {
			path: "/admin/bannerList",
			component: _14914af1,
			name: "admin-bannerList"
		}, {
			path: "/site/download",
			component: _1321825c,
			name: "site-download"
		}, {
			path: "/admin/Login",
			component: _859966dc,
			name: "admin-Login"
		}, {
			path: "/admin/recommandList",
			component: _cebc8f82,
			name: "admin-recommandList"
		}, {
			path: "/admin/KingPeak",
			component: _fc7ef006,
			name: "admin-KingPeak"
		}, {
			path: "/site/king",
			component: _53fe19aa,
			name: "site-king"
		}, {
			path: "/site/bulletScreen",
			component: _50ff643c,
			name: "site-bulletScreen"
		}, {
			path: "/admin/hotList",
			component: _92dec2d8,
			name: "admin-hotList"
		}, {
			path: "/site/advice",
			component: _c9d775e8,
			name: "site-advice"
		}, {
			path: "/site/article/general",
			component: _373fab64,
			name: "site-article-general"
		}, {
			path: "/site/article/list",
			component: _13fe6428,
			name: "site-article-list"
		}, {
			path: "/",
			component: _ad783dca,
			name: "index"
		}],

		fallback: false
	});
}

/***/ }),

/***/ "./.nuxt/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyAsyncData;
/* harmony export (immutable) */ __webpack_exports__["l"] = sanitizeComponent;
/* harmony export (immutable) */ __webpack_exports__["e"] = getMatchedComponents;
/* harmony export (immutable) */ __webpack_exports__["f"] = getMatchedComponentsInstances;
/* harmony export (immutable) */ __webpack_exports__["c"] = flatMapComponents;
/* harmony export (immutable) */ __webpack_exports__["k"] = resolveRouteComponents;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getRouteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return setContext; });
/* harmony export (immutable) */ __webpack_exports__["i"] = middlewareSeries;
/* harmony export (immutable) */ __webpack_exports__["j"] = promisify;
/* harmony export (immutable) */ __webpack_exports__["d"] = getLocation;
/* unused harmony export urlJoin */
/* harmony export (immutable) */ __webpack_exports__["b"] = compile;
/* harmony export (immutable) */ __webpack_exports__["g"] = getQueryDiff;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/json/stringify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_typeof__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/typeof.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/asyncToGenerator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_keys__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/keys.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue__ = __webpack_require__("./node_modules/_vue@2.5.16@vue/dist/vue.runtime.esm.js");









var noopData = function noopData() {
  return {};
};

// window.onNuxtReady(() => console.log('Ready')) hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (true) {
  window._nuxtReadyCbs = [];
  window.onNuxtReady = function (cb) {
    window._nuxtReadyCbs.push(cb);
  };
}

function applyAsyncData(Component, asyncData) {
  var ComponentData = Component.options.data || noopData;
  // Prevent calling this method for each request on SSR context
  if (!asyncData && Component.options.hasAsyncData) {
    return;
  }
  Component.options.hasAsyncData = true;
  Component.options.data = function () {
    var data = ComponentData.call(this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return __WEBPACK_IMPORTED_MODULE_6__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_extends___default()({}, data, asyncData);
  };
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}

function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = __WEBPACK_IMPORTED_MODULE_7_vue__["default"].extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // For debugging purpose
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}

function getMatchedComponents(route) {
  var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return [].concat.apply([], route.matched.map(function (m, index) {
    return __WEBPACK_IMPORTED_MODULE_5__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_keys___default()(m.components).map(function (key) {
      matches && matches.push(index);
      return m.components[key];
    });
  }));
}

function getMatchedComponentsInstances(route) {
  var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return [].concat.apply([], route.matched.map(function (m, index) {
    return __WEBPACK_IMPORTED_MODULE_5__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_keys___default()(m.instances).map(function (key) {
      matches && matches.push(index);
      return m.instances[key];
    });
  }));
}

function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return __WEBPACK_IMPORTED_MODULE_5__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_keys___default()(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key, index);
    });
  }));
}

function resolveRouteComponents(route) {
  var _this = this;

  return __WEBPACK_IMPORTED_MODULE_4__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default.a.all(flatMapComponents(route, function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_3__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(Component, _, match, key) {
      return __WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof Component === 'function' && !Component.options)) {
                _context.next = 4;
                break;
              }

              _context.next = 3;
              return Component();

            case 3:
              Component = _context.sent;

            case 4:
              return _context.abrupt('return', match.components[key] = sanitizeComponent(Component));

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x3, _x4, _x5, _x6) {
      return _ref.apply(this, arguments);
    };
  }()));
}

var getRouteData = function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_3__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(route) {
    return __WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return resolveRouteComponents(route);

          case 2:
            return _context2.abrupt('return', __WEBPACK_IMPORTED_MODULE_6__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_extends___default()({}, route, {
              meta: getMatchedComponents(route).map(function (Component) {
                return Component.options.meta || {};
              })
            }));

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getRouteData(_x7) {
    return _ref2.apply(this, arguments);
  };
}();

var setContext = function () {
  var _ref3 = __WEBPACK_IMPORTED_MODULE_3__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee3(app, context) {
    var route;
    return __WEBPACK_IMPORTED_MODULE_2__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            route = context.to ? context.to : context.route;
            // If context not defined, create it

            if (app.context) {
              _context3.next = 13;
              break;
            }

            _context3.t0 = false;
            _context3.t1 = app;
            _context3.t2 = context.payload;
            _context3.t3 = context.error;
            _context3.t4 = {};
            app.context = {
              get isServer() {
                console.warn('context.isServer has been deprecated, please use process.server instead.');
                return false;
              },
              get isClient() {
                console.warn('context.isClient has been deprecated, please use process.client instead.');
                return true;
              },
              isStatic: _context3.t0,
              isDev: true,
              isHMR: false,
              app: _context3.t1,
              payload: _context3.t2,
              error: _context3.t3,
              base: '/',
              env: _context3.t4
            };

            if (context.req) app.context.req = context.req;
            if (context.res) app.context.res = context.res;
            app.context.redirect = function (status, path, query) {
              if (!status) return;
              app.context._redirected = true; // Used in middleware
              // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
              var pathType = typeof path === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_typeof___default()(path);
              if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
                query = path || {};
                path = status;
                pathType = typeof path === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_typeof___default()(path);
                status = 302;
              }
              if (pathType === 'object') {
                path = app.router.resolve(path).href;
              }
              // "/absolute/route", "./relative/route" or "../relative/route"
              if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
                app.context.next({
                  path: path,
                  query: query,
                  status: status
                });
              } else {
                path = formatUrl(path, query);
                if (false) {
                  app.context.next({
                    path: path,
                    status: status
                  });
                }
                if (true) {
                  // https://developer.mozilla.org/en-US/docs/Web/API/Location/replace
                  window.location.replace(path);

                  // Throw a redirect error
                  throw new Error('ERR_REDIRECT');
                }
              }
            };
            if (false) app.context.beforeNuxtRender = function (fn) {
              return context.beforeRenderFns.push(fn);
            };
            if (true) app.context.nuxtState = window.__NUXT__;

          case 13:
            // Dynamic keys
            app.context.next = context.next;
            app.context._redirected = false;
            app.context._errored = false;
            app.context.isHMR = !!context.isHMR;

            if (!context.route) {
              _context3.next = 21;
              break;
            }

            _context3.next = 20;
            return getRouteData(context.route);

          case 20:
            app.context.route = _context3.sent;

          case 21:
            app.context.params = app.context.route.params || {};
            app.context.query = app.context.route.query || {};

            if (!context.from) {
              _context3.next = 27;
              break;
            }

            _context3.next = 26;
            return getRouteData(context.from);

          case 26:
            app.context.from = _context3.sent;

          case 27:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function setContext(_x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return __WEBPACK_IMPORTED_MODULE_4__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default.a.resolve();
  }
  return promisify(promises[0], appContext).then(function () {
    return middlewareSeries(promises.slice(1), appContext);
  });
}

function promisify(fn, context) {
  var promise = void 0;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new __WEBPACK_IMPORTED_MODULE_4__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default.a(function (resolve) {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (!promise || !(promise instanceof __WEBPACK_IMPORTED_MODULE_4__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default.a) && typeof promise.then !== 'function') {
    promise = __WEBPACK_IMPORTED_MODULE_4__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_promise___default.a.resolve(promise);
  }
  return promise;
}

// Imported from vue-router
function getLocation(base, mode) {
  var path = window.location.pathname;
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/');
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

function getQueryDiff(toQuery, fromQuery) {
  var diff = {};
  var queries = __WEBPACK_IMPORTED_MODULE_6__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_extends___default()({}, toQuery, fromQuery);
  for (var k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (__WEBPACK_IMPORTED_MODULE_1__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_helpers_typeof___default()(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + __WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_json_stringify___default()(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + __WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_json_stringify___default()(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */
function formatUrl(url, query) {
  var protocol = void 0;
  var index = url.indexOf('://');
  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.indexOf('//') === 0) {
    url = url.substring(2);
  }

  var parts = url.split('/');
  var result = (protocol ? protocol + '://' : '//') + parts.shift();

  var path = parts.filter(Boolean).join('/');
  var hash = void 0;
  parts = path.split('#');
  if (parts.length === 2) {
    path = parts[0];
    hash = parts[1];
  }

  result += path ? '/' + path : '';

  if (query && __WEBPACK_IMPORTED_MODULE_0__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_json_stringify___default()(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }
  result += hash ? '#' + hash : '';

  return result;
}

/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */
function formatQuery(query) {
  return __WEBPACK_IMPORTED_MODULE_5__Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_runtime_6_26_0_babel_runtime_core_js_object_keys___default()(query).sort().map(function (key) {
    var val = query[key];
    if (val == null) {
      return '';
    }
    if (Array.isArray(val)) {
      return val.slice().map(function (val2) {
        return [key, '=', val2].join('');
      }).join('&');
    }
    return key + '=' + val;
  }).filter(Boolean).join('&');
}

/***/ }),

/***/ "./assets/css/main.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/index.js??ref--2-1!./node_modules/_postcss-loader@2.1.4@postcss-loader/lib/index.js??ref--2-2!./assets/css/main.css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/_vue-style-loader@3.1.2@vue-style-loader/lib/addStylesClient.js")("d3b5f97a", content, false, {"sourceMap":true});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("./node_modules/_css-loader@0.28.11@css-loader/index.js??ref--2-1!./node_modules/_postcss-loader@2.1.4@postcss-loader/lib/index.js??ref--2-2!./assets/css/main.css", function() {
     var newContent = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/index.js??ref--2-1!./node_modules/_postcss-loader@2.1.4@postcss-loader/lib/index.js??ref--2-2!./assets/css/main.css");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./layouts/error.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_true_presets_Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_preset_vue_app_2_0_0_babel_preset_vue_app_dist_index_common_js_targets_ie_9_uglify_true_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_error_vue__ = __webpack_require__("./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js?{\"babelrc\":false,\"cacheDirectory\":true,\"presets\":[[\"/Users/xiaochong/workspace/nuxt/nuxt_test2/node_modules/_babel-preset-vue-app@2.0.0@babel-preset-vue-app/dist/index.common.js\",{\"targets\":{\"ie\":9,\"uglify\":true}}]]}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=script&index=0!./layouts/error.vue");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_d5ea9138_hasScoped_true_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_error_vue__ = __webpack_require__("./node_modules/_vue-loader@13.7.0@vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d5ea9138\",\"hasScoped\":true,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"object\":\"src\",\"embed\":\"src\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=template&index=0!./layouts/error.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/_vue-style-loader@3.1.2@vue-style-loader/index.js?{\"sourceMap\":true}!./node_modules/_css-loader@0.28.11@css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":1,\"alias\":{\"/assets\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/assets\",\"/static\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/static\"}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d5ea9138\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?{\"sourceMap\":true}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./layouts/error.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/_vue-loader@13.7.0@vue-loader/lib/component-normalizer.js")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d5ea9138"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_true_presets_Users_xiaochong_workspace_nuxt_nuxt_test2_node_modules_babel_preset_vue_app_2_0_0_babel_preset_vue_app_dist_index_common_js_targets_ie_9_uglify_true_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_error_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_d5ea9138_hasScoped_true_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_error_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "layouts/error.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__("./node_modules/_vue-hot-reload-api@2.3.0@vue-hot-reload-api/dist/index.js")
  hotAPI.install(__webpack_require__("./node_modules/_vue@2.5.16@vue/dist/vue.runtime.esm.js"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d5ea9138", Component.options)
  } else {
    hotAPI.reload("data-v-d5ea9138", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js?{\"babelrc\":false,\"cacheDirectory\":true,\"presets\":[[\"/Users/xiaochong/workspace/nuxt/nuxt_test2/node_modules/_babel-preset-vue-app@2.0.0@babel-preset-vue-app/dist/index.common.js\",{\"targets\":{\"ie\":9,\"uglify\":true}}]]}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=script&index=0!./.nuxt/components/nuxt-loading.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/_vue@2.5.16@vue/dist/vue.runtime.esm.js");
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'nuxt-loading',
  data: function data() {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 5000,
      height: '2px',
      color: 'black',
      failedColor: 'red'
    };
  },

  methods: {
    start: function start() {
      var _this = this;

      this.show = true;
      this.canSuccess = true;
      if (this._timer) {
        clearInterval(this._timer);
        this.percent = 0;
      }
      this._cut = 10000 / Math.floor(this.duration);
      this._timer = setInterval(function () {
        _this.increase(_this._cut * Math.random());
        if (_this.percent > 95) {
          _this.finish();
        }
      }, 100);
      return this;
    },
    set: function set(num) {
      this.show = true;
      this.canSuccess = true;
      this.percent = Math.floor(num);
      return this;
    },
    get: function get() {
      return Math.floor(this.percent);
    },
    increase: function increase(num) {
      this.percent = this.percent + Math.floor(num);
      return this;
    },
    decrease: function decrease(num) {
      this.percent = this.percent - Math.floor(num);
      return this;
    },
    finish: function finish() {
      this.percent = 100;
      this.hide();
      return this;
    },
    pause: function pause() {
      clearInterval(this._timer);
      return this;
    },
    hide: function hide() {
      var _this2 = this;

      clearInterval(this._timer);
      this._timer = null;
      setTimeout(function () {
        _this2.show = false;
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].nextTick(function () {
          setTimeout(function () {
            _this2.percent = 0;
          }, 200);
        });
      }, 500);
      return this;
    },
    fail: function fail() {
      this.canSuccess = false;
      return this;
    }
  }
});

/***/ }),

/***/ "./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js?{\"babelrc\":false,\"cacheDirectory\":true,\"presets\":[[\"/Users/xiaochong/workspace/nuxt/nuxt_test2/node_modules/_babel-preset-vue-app@2.0.0@babel-preset-vue-app/dist/index.common.js\",{\"targets\":{\"ie\":9,\"uglify\":true}}]]}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=script&index=0!./layouts/error.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['error']
});

/***/ }),

/***/ "./node_modules/_css-loader@0.28.11@css-loader/index.js??ref--2-1!./node_modules/_postcss-loader@2.1.4@postcss-loader/lib/index.js??ref--2-2!./assets/css/main.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "html, body\n{\n    background-color: #f7f7f7;\n      color: #000;\n      letter-spacing: 0.5px;\n      font-family: \"Source Sans Pro\", Arial, sans-serif;\n      min-height: 100vh;\n      margin: 0;\n}\n\n/*html{*/\n\n/*height:100%;*/\n\n/*}*/\n\n/*body{*/\n\n/*position:relative;*/\n\n/*min-height:100%;*/\n\n/*}*/\n\n#__nuxt{\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-height: 100vh;\n  position: relative;\n  padding-bottom:360px;\n}\n\n#__layout>div>section{\n\n}\n\n/*a, a:hover, a:focus, a:visited*/\n\n/*{*/\n\n/*color: #000;*/\n\n/*}*/\n\na{\n  text-decoration:none;\n  color:#000;\n\n}\n\na:hover{\n  color:rgb(0, 0, 238);\n}\n\n.logo {\n  width: 100%;\n  height: auto;\n  max-width: 400px;\n  max-height: 289px;\n}\n\nul{\n  padding:0;\n  margin:0;\n}\n\nli{\n  list-style: none;\n}\n\np{\n  margin:15px 0;\n}\n", "", {"version":3,"sources":["/Users/xiaochong/workspace/nuxt/nuxt_test2/assets/css/main.css"],"names":[],"mappings":"AAAA;;IAEI,0BAA0B;MACxB,YAAY;MACZ,sBAAsB;MACtB,kDAAkD;MAClD,kBAAkB;MAClB,UAAU;CACf;;AAED,SAAS;;AACP,gBAAgB;;AAClB,KAAK;;AACL,SAAS;;AACP,sBAAsB;;AACtB,oBAAoB;;AACtB,KAAK;;AACL;EACE,+BAAuB;UAAvB,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,qBAAqB;CACtB;;AAED;;CAEC;;AAED,kCAAkC;;AAClC,KAAK;;AACH,gBAAgB;;AAClB,KAAK;;AACL;EACE,qBAAqB;EACrB,WAAW;;CAEZ;;AACD;EACE,qBAAqB;CACtB;;AAED;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,kBAAkB;CACnB;;AACD;EACE,UAAU;EACV,SAAS;CACV;;AACD;EACE,iBAAiB;CAClB;;AACD;EACE,cAAc;CACf","file":"main.css","sourcesContent":["html, body\n{\n    background-color: #f7f7f7;\n      color: #000;\n      letter-spacing: 0.5px;\n      font-family: \"Source Sans Pro\", Arial, sans-serif;\n      min-height: 100vh;\n      margin: 0;\n}\n\n/*html{*/\n  /*height:100%;*/\n/*}*/\n/*body{*/\n  /*position:relative;*/\n  /*min-height:100%;*/\n/*}*/\n#__nuxt{\n  box-sizing: border-box;\n  min-height: 100vh;\n  position: relative;\n  padding-bottom:360px;\n}\n\n#__layout>div>section{\n\n}\n\n/*a, a:hover, a:focus, a:visited*/\n/*{*/\n  /*color: #000;*/\n/*}*/\na{\n  text-decoration:none;\n  color:#000;\n\n}\na:hover{\n  color:rgb(0, 0, 238);\n}\n\n.logo {\n  width: 100%;\n  height: auto;\n  max-width: 400px;\n  max-height: 289px;\n}\nul{\n  padding:0;\n  margin:0;\n}\nli{\n  list-style: none;\n}\np{\n  margin:15px 0;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/_css-loader@0.28.11@css-loader/index.js??ref--2-1!./node_modules/_postcss-loader@2.1.4@postcss-loader/lib/index.js??ref--2-2!./node_modules/_quill@1.3.6@quill/dist/quill.bubble.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/*!\n * Quill Editor v1.3.6\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  -o-tab-size: 4;\n     tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0, 0, 0, .6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.ql-bubble.ql-toolbar:after,\n.ql-bubble .ql-toolbar:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-bubble.ql-toolbar button,\n.ql-bubble .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}\n.ql-bubble.ql-toolbar button svg,\n.ql-bubble .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}\n.ql-bubble.ql-toolbar button:active:hover,\n.ql-bubble .ql-toolbar button:active:hover {\n  outline: none;\n}\n.ql-bubble.ql-toolbar input.ql-image[type=file],\n.ql-bubble .ql-toolbar input.ql-image[type=file] {\n  display: none;\n}\n.ql-bubble.ql-toolbar button:hover,\n.ql-bubble .ql-toolbar button:hover,\n.ql-bubble.ql-toolbar button:focus,\n.ql-bubble .ql-toolbar button:focus,\n.ql-bubble.ql-toolbar button.ql-active,\n.ql-bubble .ql-toolbar button.ql-active,\n.ql-bubble.ql-toolbar .ql-picker-label:hover,\n.ql-bubble .ql-toolbar .ql-picker-label:hover,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active,\n.ql-bubble.ql-toolbar .ql-picker-item:hover,\n.ql-bubble .ql-toolbar .ql-picker-item:hover,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected {\n  color: #fff;\n}\n.ql-bubble.ql-toolbar button:hover .ql-fill,\n.ql-bubble .ql-toolbar button:hover .ql-fill,\n.ql-bubble.ql-toolbar button:focus .ql-fill,\n.ql-bubble .ql-toolbar button:focus .ql-fill,\n.ql-bubble.ql-toolbar button.ql-active .ql-fill,\n.ql-bubble .ql-toolbar button.ql-active .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-bubble.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: #fff;\n}\n.ql-bubble.ql-toolbar button:hover .ql-stroke,\n.ql-bubble .ql-toolbar button:hover .ql-stroke,\n.ql-bubble.ql-toolbar button:focus .ql-stroke,\n.ql-bubble .ql-toolbar button:focus .ql-stroke,\n.ql-bubble.ql-toolbar button.ql-active .ql-stroke,\n.ql-bubble .ql-toolbar button.ql-active .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-bubble.ql-toolbar button:hover .ql-stroke-miter,\n.ql-bubble .ql-toolbar button:hover .ql-stroke-miter,\n.ql-bubble.ql-toolbar button:focus .ql-stroke-miter,\n.ql-bubble .ql-toolbar button:focus .ql-stroke-miter,\n.ql-bubble.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-bubble .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #fff;\n}\n@media (pointer: coarse) {\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active),\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) {\n    color: #ccc;\n  }\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #ccc;\n  }\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #ccc;\n  }\n}\n.ql-bubble {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.ql-bubble * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.ql-bubble .ql-hidden {\n  display: none;\n}\n.ql-bubble .ql-out-bottom,\n.ql-bubble .ql-out-top {\n  visibility: hidden;\n}\n.ql-bubble .ql-tooltip {\n  position: absolute;\n  -webkit-transform: translateY(10px);\n          transform: translateY(10px);\n}\n.ql-bubble .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}\n.ql-bubble .ql-tooltip.ql-flip {\n  -webkit-transform: translateY(-10px);\n          transform: translateY(-10px);\n}\n.ql-bubble .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}\n.ql-bubble .ql-formats:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-bubble .ql-stroke {\n  fill: none;\n  stroke: #ccc;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n.ql-bubble .ql-stroke-miter {\n  fill: none;\n  stroke: #ccc;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}\n.ql-bubble .ql-fill,\n.ql-bubble .ql-stroke.ql-fill {\n  fill: #ccc;\n}\n.ql-bubble .ql-empty {\n  fill: none;\n}\n.ql-bubble .ql-even {\n  fill-rule: evenodd;\n}\n.ql-bubble .ql-thin,\n.ql-bubble .ql-stroke.ql-thin {\n  stroke-width: 1;\n}\n.ql-bubble .ql-transparent {\n  opacity: 0.4;\n}\n.ql-bubble .ql-direction svg:last-child {\n  display: none;\n}\n.ql-bubble .ql-direction.ql-active svg:last-child {\n  display: inline;\n}\n.ql-bubble .ql-direction.ql-active svg:first-child {\n  display: none;\n}\n.ql-bubble .ql-editor h1 {\n  font-size: 2em;\n}\n.ql-bubble .ql-editor h2 {\n  font-size: 1.5em;\n}\n.ql-bubble .ql-editor h3 {\n  font-size: 1.17em;\n}\n.ql-bubble .ql-editor h4 {\n  font-size: 1em;\n}\n.ql-bubble .ql-editor h5 {\n  font-size: 0.83em;\n}\n.ql-bubble .ql-editor h6 {\n  font-size: 0.67em;\n}\n.ql-bubble .ql-editor a {\n  text-decoration: underline;\n}\n.ql-bubble .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}\n.ql-bubble .ql-editor code,\n.ql-bubble .ql-editor pre {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}\n.ql-bubble .ql-editor pre {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}\n.ql-bubble .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}\n.ql-bubble .ql-editor pre.ql-syntax {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}\n.ql-bubble .ql-editor img {\n  max-width: 100%;\n}\n.ql-bubble .ql-picker {\n  color: #ccc;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}\n.ql-bubble .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n.ql-bubble .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}\n.ql-bubble .ql-picker-options {\n  background-color: #444;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n.ql-bubble .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n.ql-bubble .ql-picker.ql-expanded .ql-picker-label {\n  color: #777;\n  z-index: 2;\n}\n.ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #777;\n}\n.ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #777;\n}\n.ql-bubble .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n.ql-bubble .ql-color-picker,\n.ql-bubble .ql-icon-picker {\n  width: 28px;\n}\n.ql-bubble .ql-color-picker .ql-picker-label,\n.ql-bubble .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}\n.ql-bubble .ql-color-picker .ql-picker-label svg,\n.ql-bubble .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}\n.ql-bubble .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}\n.ql-bubble .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n.ql-bubble .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}\n.ql-bubble .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}\n.ql-bubble .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n  content: attr(data-label);\n}\n.ql-bubble .ql-picker.ql-header {\n  width: 98px;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: 'Heading 1';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: 'Heading 2';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: 'Heading 3';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: 'Heading 4';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: 'Heading 5';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: 'Heading 6';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2em;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5em;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17em;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1em;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83em;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67em;\n}\n.ql-bubble .ql-picker.ql-font {\n  width: 108px;\n}\n.ql-bubble .ql-picker.ql-font .ql-picker-label::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item::before {\n  content: 'Sans Serif';\n}\n.ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: 'Serif';\n}\n.ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: 'Monospace';\n}\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-bubble .ql-picker.ql-size {\n  width: 98px;\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-label::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: 'Small';\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: 'Large';\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: 'Huge';\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}\n.ql-bubble .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}\n.ql-bubble .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}\n.ql-bubble .ql-toolbar .ql-formats {\n  margin: 8px 12px 8px 0px;\n}\n.ql-bubble .ql-toolbar .ql-formats:first-child {\n  margin-left: 12px;\n}\n.ql-bubble .ql-color-picker svg {\n  margin: 1px;\n}\n.ql-bubble .ql-color-picker .ql-picker-item.ql-selected,\n.ql-bubble .ql-color-picker .ql-picker-item:hover {\n  border-color: #fff;\n}\n.ql-bubble .ql-tooltip {\n  background-color: #444;\n  border-radius: 25px;\n  color: #fff;\n}\n.ql-bubble .ql-tooltip-arrow {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  content: \" \";\n  display: block;\n  left: 50%;\n  margin-left: -6px;\n  position: absolute;\n}\n.ql-bubble .ql-tooltip:not(.ql-flip) .ql-tooltip-arrow {\n  border-bottom: 6px solid #444;\n  top: -6px;\n}\n.ql-bubble .ql-tooltip.ql-flip .ql-tooltip-arrow {\n  border-top: 6px solid #444;\n  bottom: -6px;\n}\n.ql-bubble .ql-tooltip.ql-editing .ql-tooltip-editor {\n  display: block;\n}\n.ql-bubble .ql-tooltip.ql-editing .ql-formats {\n  visibility: hidden;\n}\n.ql-bubble .ql-tooltip-editor {\n  display: none;\n}\n.ql-bubble .ql-tooltip-editor input[type=text] {\n  background: transparent;\n  border: none;\n  color: #fff;\n  font-size: 13px;\n  height: 100%;\n  outline: none;\n  padding: 10px 20px;\n  position: absolute;\n  width: 100%;\n}\n.ql-bubble .ql-tooltip-editor a {\n  top: 10px;\n  position: absolute;\n  right: 20px;\n}\n.ql-bubble .ql-tooltip-editor a:before {\n  color: #ccc;\n  content: \"\\D7\";\n  font-size: 16px;\n  font-weight: bold;\n}\n.ql-container.ql-bubble:not(.ql-disabled) a {\n  position: relative;\n  white-space: nowrap;\n}\n.ql-container.ql-bubble:not(.ql-disabled) a::before {\n  background-color: #444;\n  border-radius: 15px;\n  top: -5px;\n  font-size: 12px;\n  color: #fff;\n  content: attr(href);\n  font-weight: normal;\n  overflow: hidden;\n  padding: 5px 15px;\n  text-decoration: none;\n  z-index: 1;\n}\n.ql-container.ql-bubble:not(.ql-disabled) a::after {\n  border-top: 6px solid #444;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  top: 0;\n  content: \" \";\n  height: 0;\n  width: 0;\n}\n.ql-container.ql-bubble:not(.ql-disabled) a::before,\n.ql-container.ql-bubble:not(.ql-disabled) a::after {\n  left: 0;\n  margin-left: 50%;\n  position: absolute;\n  -webkit-transform: translate(-50%, -100%);\n          transform: translate(-50%, -100%);\n  -webkit-transition: visibility 0s ease 200ms;\n  transition: visibility 0s ease 200ms;\n  visibility: hidden;\n}\n.ql-container.ql-bubble:not(.ql-disabled) a:hover::before,\n.ql-container.ql-bubble:not(.ql-disabled) a:hover::after {\n  visibility: visible;\n}\n", "", {"version":3,"sources":["/Users/xiaochong/workspace/nuxt/nuxt_test2/node_modules/_quill@1.3.6@quill/dist/quill.bubble.css"],"names":[],"mappings":"AAAA;;;;;GAKG;AACH;EACE,+BAAuB;UAAvB,uBAAuB;EACvB,0CAA0C;EAC1C,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;CACV;AACD;EACE,UAAU;EACV,WAAW;CACZ;AACD;EACE,+BAAuB;UAAvB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,mBAAmB;EACnB,eAAY;KAAZ,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,sBAAsB;EACtB,sBAAsB;CACvB;AACD;EACE,aAAa;CACd;AACD;;;;;;;;;;;EAWE,UAAU;EACV,WAAW;EACX,8EAA8E;CAC/E;AACD;;EAEE,oBAAoB;CACrB;AACD;;EAEE,sBAAsB;CACvB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,qBAAqB;CACtB;AACD;;EAEE,oBAAoB;CACrB;AACD;;EAEE,YAAY;EACZ,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,sBAAsB;EACtB,oBAAoB;EACpB,aAAa;CACd;AACD;EACE,oBAAoB;EACpB,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,qBAAqB;CACtB;AACD;;EAEE,oBAAoB;CACrB;AACD;;EAEE,qBAAqB;CACtB;AACD;EACE,8EAA8E;EAC9E,0BAA0B;CAC3B;AACD;EACE,uCAAuC;CACxC;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,uEAAuE;CACxE;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,gEAAgE;CACjE;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,uCAAuC;CACxC;AACD;EACE,yDAAyD;CAC1D;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,kDAAkD;CACnD;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,uCAAuC;CACxC;AACD;EACE,oCAAoC;CACrC;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,sBAAsB;CACvB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,uCAAuC;CACxC;AACD;EACE,kBAAkB;CACnB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,YAAY;CACb;AACD;EACE,eAAe;CAChB;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,eAAe;CAChB;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,6CAA6C;CAC9C;AACD;EACE,4CAA4C;CAC7C;AACD;EACE,kBAAkB;CACnB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,yBAAuB;EACvB,gCAAgC;EAChC,mBAAmB;EACnB,WAAW;EACX,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;CACb;AACD;;EAEE,YAAY;EACZ,YAAY;EACZ,eAAe;CAChB;AACD;;EAEE,iBAAiB;EACjB,aAAa;EACb,gBAAgB;EAChB,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,YAAY;CACb;AACD;;EAEE,YAAY;EACZ,aAAa;CACd;AACD;;EAEE,cAAc;CACf;AACD;;EAEE,cAAc;CACf;AACD;;;;;;;;;;;;;;EAcE,YAAY;CACb;AACD;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA4BE,WAAW;CACZ;AACD;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA4BE,aAAa;CACd;AACD;EACE;;IAEE,YAAY;GACb;EACD;;;;IAIE,WAAW;GACZ;EACD;;;;IAIE,aAAa;GACd;CACF;AACD;EACE,+BAAuB;UAAvB,uBAAuB;CACxB;AACD;EACE,+BAAuB;UAAvB,uBAAuB;CACxB;AACD;EACE,cAAc;CACf;AACD;;EAEE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,oCAA4B;UAA5B,4BAA4B;CAC7B;AACD;EACE,gBAAgB;EAChB,sBAAsB;CACvB;AACD;EACE,qCAA6B;UAA7B,6BAA6B;CAC9B;AACD;EACE,sBAAsB;EACtB,uBAAuB;CACxB;AACD;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;CAChB;AACD;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,gBAAgB;CACjB;AACD;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,gBAAgB;CACjB;AACD;;EAEE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;AACD;EACE,mBAAmB;CACpB;AACD;;EAEE,gBAAgB;CACjB;AACD;EACE,aAAa;CACd;AACD;EACE,cAAc;CACf;AACD;EACE,gBAAgB;CACjB;AACD;EACE,cAAc;CACf;AACD;EACE,eAAe;CAChB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,eAAe;CAChB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,4BAA4B;EAC5B,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;CACpB;AACD;;EAEE,0BAA0B;EAC1B,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;CACnB;AACD;EACE,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,0BAA0B;EAC1B,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;CACxB;AACD;EACE,gBAAgB;EAChB,sBAAsB;EACtB,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,sBAAsB;EACtB,kBAAkB;CACnB;AACD;EACE,uBAAuB;EACvB,cAAc;EACd,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,eAAe;EACf,oBAAoB;EACpB,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,WAAW;CACZ;AACD;EACE,WAAW;CACZ;AACD;EACE,aAAa;CACd;AACD;EACE,eAAe;EACf,iBAAiB;EACjB,UAAU;EACV,WAAW;CACZ;AACD;;EAEE,YAAY;CACb;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,WAAW;CACZ;AACD;EACE,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,iBAAiB;EACjB,aAAa;CACd;AACD;EACE,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,aAAa;EACb,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,SAAS;EACT,SAAS;EACT,YAAY;CACb;AACD;;;;;;EAME,0BAA0B;CAC3B;AACD;EACE,YAAY;CACb;AACD;;EAEE,kBAAkB;CACnB;AACD;;EAEE,qBAAqB;CACtB;AACD;;EAEE,qBAAqB;CACtB;AACD;;EAEE,qBAAqB;CACtB;AACD;;EAEE,qBAAqB;CACtB;AACD;;EAEE,qBAAqB;CACtB;AACD;;EAEE,qBAAqB;CACtB;AACD;EACE,eAAe;CAChB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,eAAe;CAChB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,aAAa;CACd;AACD;;EAEE,sBAAsB;CACvB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,qBAAqB;CACtB;AACD;EACE,6CAA6C;CAC9C;AACD;EACE,4CAA4C;CAC7C;AACD;EACE,YAAY;CACb;AACD;;EAEE,kBAAkB;CACnB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,yBAAyB;CAC1B;AACD;EACE,kBAAkB;CACnB;AACD;EACE,YAAY;CACb;AACD;;EAEE,mBAAmB;CACpB;AACD;EACE,uBAAuB;EACvB,oBAAoB;EACpB,YAAY;CACb;AACD;EACE,mCAAmC;EACnC,oCAAoC;EACpC,aAAa;EACb,eAAe;EACf,UAAU;EACV,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,8BAA8B;EAC9B,UAAU;CACX;AACD;EACE,2BAA2B;EAC3B,aAAa;CACd;AACD;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,cAAc;CACf;AACD;EACE,wBAAwB;EACxB,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,UAAU;EACV,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,uBAAuB;EACvB,oBAAoB;EACpB,UAAU;EACV,gBAAgB;EAChB,YAAY;EACZ,oBAAoB;EACpB,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;EACtB,WAAW;CACZ;AACD;EACE,2BAA2B;EAC3B,mCAAmC;EACnC,oCAAoC;EACpC,OAAO;EACP,aAAa;EACb,UAAU;EACV,SAAS;CACV;AACD;;EAEE,QAAQ;EACR,iBAAiB;EACjB,mBAAmB;EACnB,0CAAkC;UAAlC,kCAAkC;EAClC,6CAAqC;EAArC,qCAAqC;EACrC,mBAAmB;CACpB;AACD;;EAEE,oBAAoB;CACrB","file":"quill.bubble.css","sourcesContent":["/*!\n * Quill Editor v1.3.6\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.ql-bubble.ql-toolbar:after,\n.ql-bubble .ql-toolbar:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-bubble.ql-toolbar button,\n.ql-bubble .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}\n.ql-bubble.ql-toolbar button svg,\n.ql-bubble .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}\n.ql-bubble.ql-toolbar button:active:hover,\n.ql-bubble .ql-toolbar button:active:hover {\n  outline: none;\n}\n.ql-bubble.ql-toolbar input.ql-image[type=file],\n.ql-bubble .ql-toolbar input.ql-image[type=file] {\n  display: none;\n}\n.ql-bubble.ql-toolbar button:hover,\n.ql-bubble .ql-toolbar button:hover,\n.ql-bubble.ql-toolbar button:focus,\n.ql-bubble .ql-toolbar button:focus,\n.ql-bubble.ql-toolbar button.ql-active,\n.ql-bubble .ql-toolbar button.ql-active,\n.ql-bubble.ql-toolbar .ql-picker-label:hover,\n.ql-bubble .ql-toolbar .ql-picker-label:hover,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active,\n.ql-bubble.ql-toolbar .ql-picker-item:hover,\n.ql-bubble .ql-toolbar .ql-picker-item:hover,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected {\n  color: #fff;\n}\n.ql-bubble.ql-toolbar button:hover .ql-fill,\n.ql-bubble .ql-toolbar button:hover .ql-fill,\n.ql-bubble.ql-toolbar button:focus .ql-fill,\n.ql-bubble .ql-toolbar button:focus .ql-fill,\n.ql-bubble.ql-toolbar button.ql-active .ql-fill,\n.ql-bubble .ql-toolbar button.ql-active .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-bubble.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: #fff;\n}\n.ql-bubble.ql-toolbar button:hover .ql-stroke,\n.ql-bubble .ql-toolbar button:hover .ql-stroke,\n.ql-bubble.ql-toolbar button:focus .ql-stroke,\n.ql-bubble .ql-toolbar button:focus .ql-stroke,\n.ql-bubble.ql-toolbar button.ql-active .ql-stroke,\n.ql-bubble .ql-toolbar button.ql-active .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-bubble.ql-toolbar button:hover .ql-stroke-miter,\n.ql-bubble .ql-toolbar button:hover .ql-stroke-miter,\n.ql-bubble.ql-toolbar button:focus .ql-stroke-miter,\n.ql-bubble .ql-toolbar button:focus .ql-stroke-miter,\n.ql-bubble.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-bubble .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #fff;\n}\n@media (pointer: coarse) {\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active),\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) {\n    color: #ccc;\n  }\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #ccc;\n  }\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #ccc;\n  }\n}\n.ql-bubble {\n  box-sizing: border-box;\n}\n.ql-bubble * {\n  box-sizing: border-box;\n}\n.ql-bubble .ql-hidden {\n  display: none;\n}\n.ql-bubble .ql-out-bottom,\n.ql-bubble .ql-out-top {\n  visibility: hidden;\n}\n.ql-bubble .ql-tooltip {\n  position: absolute;\n  transform: translateY(10px);\n}\n.ql-bubble .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}\n.ql-bubble .ql-tooltip.ql-flip {\n  transform: translateY(-10px);\n}\n.ql-bubble .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}\n.ql-bubble .ql-formats:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-bubble .ql-stroke {\n  fill: none;\n  stroke: #ccc;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n.ql-bubble .ql-stroke-miter {\n  fill: none;\n  stroke: #ccc;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}\n.ql-bubble .ql-fill,\n.ql-bubble .ql-stroke.ql-fill {\n  fill: #ccc;\n}\n.ql-bubble .ql-empty {\n  fill: none;\n}\n.ql-bubble .ql-even {\n  fill-rule: evenodd;\n}\n.ql-bubble .ql-thin,\n.ql-bubble .ql-stroke.ql-thin {\n  stroke-width: 1;\n}\n.ql-bubble .ql-transparent {\n  opacity: 0.4;\n}\n.ql-bubble .ql-direction svg:last-child {\n  display: none;\n}\n.ql-bubble .ql-direction.ql-active svg:last-child {\n  display: inline;\n}\n.ql-bubble .ql-direction.ql-active svg:first-child {\n  display: none;\n}\n.ql-bubble .ql-editor h1 {\n  font-size: 2em;\n}\n.ql-bubble .ql-editor h2 {\n  font-size: 1.5em;\n}\n.ql-bubble .ql-editor h3 {\n  font-size: 1.17em;\n}\n.ql-bubble .ql-editor h4 {\n  font-size: 1em;\n}\n.ql-bubble .ql-editor h5 {\n  font-size: 0.83em;\n}\n.ql-bubble .ql-editor h6 {\n  font-size: 0.67em;\n}\n.ql-bubble .ql-editor a {\n  text-decoration: underline;\n}\n.ql-bubble .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}\n.ql-bubble .ql-editor code,\n.ql-bubble .ql-editor pre {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}\n.ql-bubble .ql-editor pre {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}\n.ql-bubble .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}\n.ql-bubble .ql-editor pre.ql-syntax {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}\n.ql-bubble .ql-editor img {\n  max-width: 100%;\n}\n.ql-bubble .ql-picker {\n  color: #ccc;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}\n.ql-bubble .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n.ql-bubble .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}\n.ql-bubble .ql-picker-options {\n  background-color: #444;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n.ql-bubble .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n.ql-bubble .ql-picker.ql-expanded .ql-picker-label {\n  color: #777;\n  z-index: 2;\n}\n.ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #777;\n}\n.ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #777;\n}\n.ql-bubble .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n.ql-bubble .ql-color-picker,\n.ql-bubble .ql-icon-picker {\n  width: 28px;\n}\n.ql-bubble .ql-color-picker .ql-picker-label,\n.ql-bubble .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}\n.ql-bubble .ql-color-picker .ql-picker-label svg,\n.ql-bubble .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}\n.ql-bubble .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}\n.ql-bubble .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n.ql-bubble .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}\n.ql-bubble .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}\n.ql-bubble .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n  content: attr(data-label);\n}\n.ql-bubble .ql-picker.ql-header {\n  width: 98px;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: 'Heading 1';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: 'Heading 2';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: 'Heading 3';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: 'Heading 4';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: 'Heading 5';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: 'Heading 6';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2em;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5em;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17em;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1em;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83em;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67em;\n}\n.ql-bubble .ql-picker.ql-font {\n  width: 108px;\n}\n.ql-bubble .ql-picker.ql-font .ql-picker-label::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item::before {\n  content: 'Sans Serif';\n}\n.ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: 'Serif';\n}\n.ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: 'Monospace';\n}\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-bubble .ql-picker.ql-size {\n  width: 98px;\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-label::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: 'Small';\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: 'Large';\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: 'Huge';\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}\n.ql-bubble .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}\n.ql-bubble .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}\n.ql-bubble .ql-toolbar .ql-formats {\n  margin: 8px 12px 8px 0px;\n}\n.ql-bubble .ql-toolbar .ql-formats:first-child {\n  margin-left: 12px;\n}\n.ql-bubble .ql-color-picker svg {\n  margin: 1px;\n}\n.ql-bubble .ql-color-picker .ql-picker-item.ql-selected,\n.ql-bubble .ql-color-picker .ql-picker-item:hover {\n  border-color: #fff;\n}\n.ql-bubble .ql-tooltip {\n  background-color: #444;\n  border-radius: 25px;\n  color: #fff;\n}\n.ql-bubble .ql-tooltip-arrow {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  content: \" \";\n  display: block;\n  left: 50%;\n  margin-left: -6px;\n  position: absolute;\n}\n.ql-bubble .ql-tooltip:not(.ql-flip) .ql-tooltip-arrow {\n  border-bottom: 6px solid #444;\n  top: -6px;\n}\n.ql-bubble .ql-tooltip.ql-flip .ql-tooltip-arrow {\n  border-top: 6px solid #444;\n  bottom: -6px;\n}\n.ql-bubble .ql-tooltip.ql-editing .ql-tooltip-editor {\n  display: block;\n}\n.ql-bubble .ql-tooltip.ql-editing .ql-formats {\n  visibility: hidden;\n}\n.ql-bubble .ql-tooltip-editor {\n  display: none;\n}\n.ql-bubble .ql-tooltip-editor input[type=text] {\n  background: transparent;\n  border: none;\n  color: #fff;\n  font-size: 13px;\n  height: 100%;\n  outline: none;\n  padding: 10px 20px;\n  position: absolute;\n  width: 100%;\n}\n.ql-bubble .ql-tooltip-editor a {\n  top: 10px;\n  position: absolute;\n  right: 20px;\n}\n.ql-bubble .ql-tooltip-editor a:before {\n  color: #ccc;\n  content: \"\\D7\";\n  font-size: 16px;\n  font-weight: bold;\n}\n.ql-container.ql-bubble:not(.ql-disabled) a {\n  position: relative;\n  white-space: nowrap;\n}\n.ql-container.ql-bubble:not(.ql-disabled) a::before {\n  background-color: #444;\n  border-radius: 15px;\n  top: -5px;\n  font-size: 12px;\n  color: #fff;\n  content: attr(href);\n  font-weight: normal;\n  overflow: hidden;\n  padding: 5px 15px;\n  text-decoration: none;\n  z-index: 1;\n}\n.ql-container.ql-bubble:not(.ql-disabled) a::after {\n  border-top: 6px solid #444;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  top: 0;\n  content: \" \";\n  height: 0;\n  width: 0;\n}\n.ql-container.ql-bubble:not(.ql-disabled) a::before,\n.ql-container.ql-bubble:not(.ql-disabled) a::after {\n  left: 0;\n  margin-left: 50%;\n  position: absolute;\n  transform: translate(-50%, -100%);\n  transition: visibility 0s ease 200ms;\n  visibility: hidden;\n}\n.ql-container.ql-bubble:not(.ql-disabled) a:hover::before,\n.ql-container.ql-bubble:not(.ql-disabled) a:hover::after {\n  visibility: visible;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/_css-loader@0.28.11@css-loader/index.js??ref--2-1!./node_modules/_postcss-loader@2.1.4@postcss-loader/lib/index.js??ref--2-2!./node_modules/_quill@1.3.6@quill/dist/quill.core.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/*!\n * Quill Editor v1.3.6\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  -o-tab-size: 4;\n     tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0, 0, 0, .6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n", "", {"version":3,"sources":["/Users/xiaochong/workspace/nuxt/nuxt_test2/node_modules/_quill@1.3.6@quill/dist/quill.core.css"],"names":[],"mappings":"AAAA;;;;;GAKG;AACH;EACE,+BAAuB;UAAvB,uBAAuB;EACvB,0CAA0C;EAC1C,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;CACV;AACD;EACE,UAAU;EACV,WAAW;CACZ;AACD;EACE,+BAAuB;UAAvB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,mBAAmB;EACnB,eAAY;KAAZ,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,sBAAsB;EACtB,sBAAsB;CACvB;AACD;EACE,aAAa;CACd;AACD;;;;;;;;;;;EAWE,UAAU;EACV,WAAW;EACX,8EAA8E;CAC/E;AACD;;EAEE,oBAAoB;CACrB;AACD;;EAEE,sBAAsB;CACvB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,qBAAqB;CACtB;AACD;;EAEE,oBAAoB;CACrB;AACD;;EAEE,YAAY;EACZ,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,sBAAsB;EACtB,oBAAoB;EACpB,aAAa;CACd;AACD;EACE,oBAAoB;EACpB,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,qBAAqB;CACtB;AACD;;EAEE,oBAAoB;CACrB;AACD;;EAEE,qBAAqB;CACtB;AACD;EACE,8EAA8E;EAC9E,0BAA0B;CAC3B;AACD;EACE,uCAAuC;CACxC;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,uEAAuE;CACxE;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,gEAAgE;CACjE;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,uCAAuC;CACxC;AACD;EACE,yDAAyD;CAC1D;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,kDAAkD;CACnD;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,uCAAuC;CACxC;AACD;EACE,oCAAoC;CACrC;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,sBAAsB;CACvB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,uCAAuC;CACxC;AACD;EACE,kBAAkB;CACnB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,YAAY;CACb;AACD;EACE,eAAe;CAChB;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,eAAe;CAChB;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,6CAA6C;CAC9C;AACD;EACE,4CAA4C;CAC7C;AACD;EACE,kBAAkB;CACnB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,yBAAuB;EACvB,gCAAgC;EAChC,mBAAmB;EACnB,WAAW;EACX,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;CACb","file":"quill.core.css","sourcesContent":["/*!\n * Quill Editor v1.3.6\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/_css-loader@0.28.11@css-loader/index.js??ref--2-1!./node_modules/_postcss-loader@2.1.4@postcss-loader/lib/index.js??ref--2-2!./node_modules/_quill@1.3.6@quill/dist/quill.snow.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/*!\n * Quill Editor v1.3.6\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  -o-tab-size: 4;\n     tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0, 0, 0, .6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}\n.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}\n.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\n  outline: none;\n}\n.ql-snow.ql-toolbar input.ql-image[type=file],\n.ql-snow .ql-toolbar input.ql-image[type=file] {\n  display: none;\n}\n.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n  color: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #06c;\n}\n@media (pointer: coarse) {\n  .ql-snow.ql-toolbar button:hover:not(.ql-active),\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) {\n    color: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #444;\n  }\n}\n.ql-snow {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.ql-snow * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.ql-snow .ql-hidden {\n  display: none;\n}\n.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\n  visibility: hidden;\n}\n.ql-snow .ql-tooltip {\n  position: absolute;\n  -webkit-transform: translateY(10px);\n          transform: translateY(10px);\n}\n.ql-snow .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}\n.ql-snow .ql-tooltip.ql-flip {\n  -webkit-transform: translateY(-10px);\n          transform: translateY(-10px);\n}\n.ql-snow .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}\n.ql-snow .ql-formats:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-snow .ql-stroke {\n  fill: none;\n  stroke: #444;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n.ql-snow .ql-stroke-miter {\n  fill: none;\n  stroke: #444;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\n  fill: #444;\n}\n.ql-snow .ql-empty {\n  fill: none;\n}\n.ql-snow .ql-even {\n  fill-rule: evenodd;\n}\n.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\n  stroke-width: 1;\n}\n.ql-snow .ql-transparent {\n  opacity: 0.4;\n}\n.ql-snow .ql-direction svg:last-child {\n  display: none;\n}\n.ql-snow .ql-direction.ql-active svg:last-child {\n  display: inline;\n}\n.ql-snow .ql-direction.ql-active svg:first-child {\n  display: none;\n}\n.ql-snow .ql-editor h1 {\n  font-size: 2em;\n}\n.ql-snow .ql-editor h2 {\n  font-size: 1.5em;\n}\n.ql-snow .ql-editor h3 {\n  font-size: 1.17em;\n}\n.ql-snow .ql-editor h4 {\n  font-size: 1em;\n}\n.ql-snow .ql-editor h5 {\n  font-size: 0.83em;\n}\n.ql-snow .ql-editor h6 {\n  font-size: 0.67em;\n}\n.ql-snow .ql-editor a {\n  text-decoration: underline;\n}\n.ql-snow .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}\n.ql-snow .ql-editor code,\n.ql-snow .ql-editor pre {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}\n.ql-snow .ql-editor pre {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}\n.ql-snow .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}\n.ql-snow .ql-editor pre.ql-syntax {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}\n.ql-snow .ql-editor img {\n  max-width: 100%;\n}\n.ql-snow .ql-picker {\n  color: #444;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}\n.ql-snow .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n.ql-snow .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}\n.ql-snow .ql-picker-options {\n  background-color: #fff;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n.ql-snow .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  color: #ccc;\n  z-index: 2;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n  width: 28px;\n}\n.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}\n.ql-snow .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}\n.ql-snow .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}\n.ql-snow .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n  content: attr(data-label);\n}\n.ql-snow .ql-picker.ql-header {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: 'Heading 1';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: 'Heading 2';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: 'Heading 3';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: 'Heading 4';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: 'Heading 5';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: 'Heading 6';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67em;\n}\n.ql-snow .ql-picker.ql-font {\n  width: 108px;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n  content: 'Sans Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: 'Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: 'Monospace';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-snow .ql-picker.ql-size {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: 'Small';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: 'Large';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: 'Huge';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}\n.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}\n.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}\n.ql-toolbar.ql-snow {\n  border: 1px solid #ccc;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n  padding: 8px;\n}\n.ql-toolbar.ql-snow .ql-formats {\n  margin-right: 15px;\n}\n.ql-toolbar.ql-snow .ql-picker-label {\n  border: 1px solid transparent;\n}\n.ql-toolbar.ql-snow .ql-picker-options {\n  border: 1px solid transparent;\n  -webkit-box-shadow: rgba(0, 0, 0, .2) 0 2px 8px;\n          box-shadow: rgba(0, 0, 0, .2) 0 2px 8px;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n  border-color: #000;\n}\n.ql-toolbar.ql-snow + .ql-container.ql-snow {\n  border-top: 0px;\n}\n.ql-snow .ql-tooltip {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  -webkit-box-shadow: 0px 0px 5px #ddd;\n          box-shadow: 0px 0px 5px #ddd;\n  color: #444;\n  padding: 5px 12px;\n  white-space: nowrap;\n}\n.ql-snow .ql-tooltip::before {\n  content: \"Visit URL:\";\n  line-height: 26px;\n  margin-right: 8px;\n}\n.ql-snow .ql-tooltip input[type=text] {\n  display: none;\n  border: 1px solid #ccc;\n  font-size: 13px;\n  height: 26px;\n  margin: 0px;\n  padding: 3px 5px;\n  width: 170px;\n}\n.ql-snow .ql-tooltip a.ql-preview {\n  display: inline-block;\n  max-width: 200px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  vertical-align: top;\n}\n.ql-snow .ql-tooltip a.ql-action::after {\n  border-right: 1px solid #ccc;\n  content: 'Edit';\n  margin-left: 16px;\n  padding-right: 8px;\n}\n.ql-snow .ql-tooltip a.ql-remove::before {\n  content: 'Remove';\n  margin-left: 8px;\n}\n.ql-snow .ql-tooltip a {\n  line-height: 26px;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n  display: none;\n}\n.ql-snow .ql-tooltip.ql-editing input[type=text] {\n  display: inline-block;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n  border-right: 0px;\n  content: 'Save';\n  padding-right: 0px;\n}\n.ql-snow .ql-tooltip[data-mode=link]::before {\n  content: \"Enter link:\";\n}\n.ql-snow .ql-tooltip[data-mode=formula]::before {\n  content: \"Enter formula:\";\n}\n.ql-snow .ql-tooltip[data-mode=video]::before {\n  content: \"Enter video:\";\n}\n.ql-snow a {\n  color: #06c;\n}\n.ql-container.ql-snow {\n  border: 1px solid #ccc;\n}\n", "", {"version":3,"sources":["/Users/xiaochong/workspace/nuxt/nuxt_test2/node_modules/_quill@1.3.6@quill/dist/quill.snow.css"],"names":[],"mappings":"AAAA;;;;;GAKG;AACH;EACE,+BAAuB;UAAvB,uBAAuB;EACvB,0CAA0C;EAC1C,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;CACV;AACD;EACE,UAAU;EACV,WAAW;CACZ;AACD;EACE,+BAAuB;UAAvB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,mBAAmB;EACnB,eAAY;KAAZ,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,sBAAsB;EACtB,sBAAsB;CACvB;AACD;EACE,aAAa;CACd;AACD;;;;;;;;;;;EAWE,UAAU;EACV,WAAW;EACX,8EAA8E;CAC/E;AACD;;EAEE,oBAAoB;CACrB;AACD;;EAEE,sBAAsB;CACvB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,qBAAqB;CACtB;AACD;;EAEE,oBAAoB;CACrB;AACD;;EAEE,YAAY;EACZ,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,sBAAsB;EACtB,oBAAoB;EACpB,aAAa;CACd;AACD;EACE,oBAAoB;EACpB,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,qBAAqB;CACtB;AACD;;EAEE,oBAAoB;CACrB;AACD;;EAEE,qBAAqB;CACtB;AACD;EACE,8EAA8E;EAC9E,0BAA0B;CAC3B;AACD;EACE,uCAAuC;CACxC;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,uEAAuE;CACxE;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,gEAAgE;CACjE;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,uCAAuC;CACxC;AACD;EACE,yDAAyD;CAC1D;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,kDAAkD;CACnD;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,uCAAuC;CACxC;AACD;EACE,oCAAoC;CACrC;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,sBAAsB;CACvB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,uCAAuC;CACxC;AACD;EACE,kBAAkB;CACnB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,YAAY;CACb;AACD;EACE,eAAe;CAChB;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,eAAe;CAChB;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,6CAA6C;CAC9C;AACD;EACE,4CAA4C;CAC7C;AACD;EACE,kBAAkB;CACnB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,yBAAuB;EACvB,gCAAgC;EAChC,mBAAmB;EACnB,WAAW;EACX,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;CACb;AACD;;EAEE,YAAY;EACZ,YAAY;EACZ,eAAe;CAChB;AACD;;EAEE,iBAAiB;EACjB,aAAa;EACb,gBAAgB;EAChB,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,YAAY;CACb;AACD;;EAEE,YAAY;EACZ,aAAa;CACd;AACD;;EAEE,cAAc;CACf;AACD;;EAEE,cAAc;CACf;AACD;;;;;;;;;;;;;;EAcE,YAAY;CACb;AACD;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA4BE,WAAW;CACZ;AACD;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA4BE,aAAa;CACd;AACD;EACE;;IAEE,YAAY;GACb;EACD;;;;IAIE,WAAW;GACZ;EACD;;;;IAIE,aAAa;GACd;CACF;AACD;EACE,+BAAuB;UAAvB,uBAAuB;CACxB;AACD;EACE,+BAAuB;UAAvB,uBAAuB;CACxB;AACD;EACE,cAAc;CACf;AACD;;EAEE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,oCAA4B;UAA5B,4BAA4B;CAC7B;AACD;EACE,gBAAgB;EAChB,sBAAsB;CACvB;AACD;EACE,qCAA6B;UAA7B,6BAA6B;CAC9B;AACD;EACE,sBAAsB;EACtB,uBAAuB;CACxB;AACD;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;CAChB;AACD;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,gBAAgB;CACjB;AACD;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,gBAAgB;CACjB;AACD;;EAEE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;AACD;EACE,mBAAmB;CACpB;AACD;;EAEE,gBAAgB;CACjB;AACD;EACE,aAAa;CACd;AACD;EACE,cAAc;CACf;AACD;EACE,gBAAgB;CACjB;AACD;EACE,cAAc;CACf;AACD;EACE,eAAe;CAChB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,eAAe;CAChB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,4BAA4B;EAC5B,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;CACpB;AACD;;EAEE,0BAA0B;EAC1B,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;CACnB;AACD;EACE,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,0BAA0B;EAC1B,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;CACxB;AACD;EACE,gBAAgB;EAChB,sBAAsB;EACtB,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,sBAAsB;EACtB,kBAAkB;CACnB;AACD;EACE,uBAAuB;EACvB,cAAc;EACd,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,eAAe;EACf,oBAAoB;EACpB,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,WAAW;CACZ;AACD;EACE,WAAW;CACZ;AACD;EACE,aAAa;CACd;AACD;EACE,eAAe;EACf,iBAAiB;EACjB,UAAU;EACV,WAAW;CACZ;AACD;;EAEE,YAAY;CACb;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,WAAW;CACZ;AACD;EACE,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,iBAAiB;EACjB,aAAa;CACd;AACD;EACE,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,aAAa;EACb,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,SAAS;EACT,SAAS;EACT,YAAY;CACb;AACD;;;;;;EAME,0BAA0B;CAC3B;AACD;EACE,YAAY;CACb;AACD;;EAEE,kBAAkB;CACnB;AACD;;EAEE,qBAAqB;CACtB;AACD;;EAEE,qBAAqB;CACtB;AACD;;EAEE,qBAAqB;CACtB;AACD;;EAEE,qBAAqB;CACtB;AACD;;EAEE,qBAAqB;CACtB;AACD;;EAEE,qBAAqB;CACtB;AACD;EACE,eAAe;CAChB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,eAAe;CAChB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,aAAa;CACd;AACD;;EAEE,sBAAsB;CACvB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,qBAAqB;CACtB;AACD;EACE,6CAA6C;CAC9C;AACD;EACE,4CAA4C;CAC7C;AACD;EACE,YAAY;CACb;AACD;;EAEE,kBAAkB;CACnB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,uBAAuB;EACvB,+BAAuB;UAAvB,uBAAuB;EACvB,gEAAgE;EAChE,aAAa;CACd;AACD;EACE,mBAAmB;CACpB;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,8BAA8B;EAC9B,gDAAsC;UAAtC,wCAAsC;CACvC;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;;EAEE,mBAAmB;CACpB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,uBAAuB;EACvB,uBAAuB;EACvB,qCAA6B;UAA7B,6BAA6B;EAC7B,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;CACnB;AACD;EACE,cAAc;EACd,uBAAuB;EACvB,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,aAAa;CACd;AACD;EACE,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;EACnB,wBAAwB;EACxB,oBAAoB;CACrB;AACD;EACE,6BAA6B;EAC7B,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,kBAAkB;EAClB,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;;EAEE,cAAc;CACf;AACD;EACE,sBAAsB;CACvB;AACD;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,wBAAwB;CACzB;AACD;EACE,YAAY;CACb;AACD;EACE,uBAAuB;CACxB","file":"quill.snow.css","sourcesContent":["/*!\n * Quill Editor v1.3.6\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}\n.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}\n.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\n  outline: none;\n}\n.ql-snow.ql-toolbar input.ql-image[type=file],\n.ql-snow .ql-toolbar input.ql-image[type=file] {\n  display: none;\n}\n.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n  color: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #06c;\n}\n@media (pointer: coarse) {\n  .ql-snow.ql-toolbar button:hover:not(.ql-active),\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) {\n    color: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #444;\n  }\n}\n.ql-snow {\n  box-sizing: border-box;\n}\n.ql-snow * {\n  box-sizing: border-box;\n}\n.ql-snow .ql-hidden {\n  display: none;\n}\n.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\n  visibility: hidden;\n}\n.ql-snow .ql-tooltip {\n  position: absolute;\n  transform: translateY(10px);\n}\n.ql-snow .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}\n.ql-snow .ql-tooltip.ql-flip {\n  transform: translateY(-10px);\n}\n.ql-snow .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}\n.ql-snow .ql-formats:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-snow .ql-stroke {\n  fill: none;\n  stroke: #444;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n.ql-snow .ql-stroke-miter {\n  fill: none;\n  stroke: #444;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\n  fill: #444;\n}\n.ql-snow .ql-empty {\n  fill: none;\n}\n.ql-snow .ql-even {\n  fill-rule: evenodd;\n}\n.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\n  stroke-width: 1;\n}\n.ql-snow .ql-transparent {\n  opacity: 0.4;\n}\n.ql-snow .ql-direction svg:last-child {\n  display: none;\n}\n.ql-snow .ql-direction.ql-active svg:last-child {\n  display: inline;\n}\n.ql-snow .ql-direction.ql-active svg:first-child {\n  display: none;\n}\n.ql-snow .ql-editor h1 {\n  font-size: 2em;\n}\n.ql-snow .ql-editor h2 {\n  font-size: 1.5em;\n}\n.ql-snow .ql-editor h3 {\n  font-size: 1.17em;\n}\n.ql-snow .ql-editor h4 {\n  font-size: 1em;\n}\n.ql-snow .ql-editor h5 {\n  font-size: 0.83em;\n}\n.ql-snow .ql-editor h6 {\n  font-size: 0.67em;\n}\n.ql-snow .ql-editor a {\n  text-decoration: underline;\n}\n.ql-snow .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}\n.ql-snow .ql-editor code,\n.ql-snow .ql-editor pre {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}\n.ql-snow .ql-editor pre {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}\n.ql-snow .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}\n.ql-snow .ql-editor pre.ql-syntax {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}\n.ql-snow .ql-editor img {\n  max-width: 100%;\n}\n.ql-snow .ql-picker {\n  color: #444;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}\n.ql-snow .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n.ql-snow .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}\n.ql-snow .ql-picker-options {\n  background-color: #fff;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n.ql-snow .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  color: #ccc;\n  z-index: 2;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n  width: 28px;\n}\n.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}\n.ql-snow .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}\n.ql-snow .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}\n.ql-snow .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n  content: attr(data-label);\n}\n.ql-snow .ql-picker.ql-header {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: 'Heading 1';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: 'Heading 2';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: 'Heading 3';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: 'Heading 4';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: 'Heading 5';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: 'Heading 6';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67em;\n}\n.ql-snow .ql-picker.ql-font {\n  width: 108px;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n  content: 'Sans Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: 'Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: 'Monospace';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-snow .ql-picker.ql-size {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: 'Small';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: 'Large';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: 'Huge';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}\n.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}\n.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}\n.ql-toolbar.ql-snow {\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n  padding: 8px;\n}\n.ql-toolbar.ql-snow .ql-formats {\n  margin-right: 15px;\n}\n.ql-toolbar.ql-snow .ql-picker-label {\n  border: 1px solid transparent;\n}\n.ql-toolbar.ql-snow .ql-picker-options {\n  border: 1px solid transparent;\n  box-shadow: rgba(0,0,0,0.2) 0 2px 8px;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n  border-color: #000;\n}\n.ql-toolbar.ql-snow + .ql-container.ql-snow {\n  border-top: 0px;\n}\n.ql-snow .ql-tooltip {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: 0px 0px 5px #ddd;\n  color: #444;\n  padding: 5px 12px;\n  white-space: nowrap;\n}\n.ql-snow .ql-tooltip::before {\n  content: \"Visit URL:\";\n  line-height: 26px;\n  margin-right: 8px;\n}\n.ql-snow .ql-tooltip input[type=text] {\n  display: none;\n  border: 1px solid #ccc;\n  font-size: 13px;\n  height: 26px;\n  margin: 0px;\n  padding: 3px 5px;\n  width: 170px;\n}\n.ql-snow .ql-tooltip a.ql-preview {\n  display: inline-block;\n  max-width: 200px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  vertical-align: top;\n}\n.ql-snow .ql-tooltip a.ql-action::after {\n  border-right: 1px solid #ccc;\n  content: 'Edit';\n  margin-left: 16px;\n  padding-right: 8px;\n}\n.ql-snow .ql-tooltip a.ql-remove::before {\n  content: 'Remove';\n  margin-left: 8px;\n}\n.ql-snow .ql-tooltip a {\n  line-height: 26px;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n  display: none;\n}\n.ql-snow .ql-tooltip.ql-editing input[type=text] {\n  display: inline-block;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n  border-right: 0px;\n  content: 'Save';\n  padding-right: 0px;\n}\n.ql-snow .ql-tooltip[data-mode=link]::before {\n  content: \"Enter link:\";\n}\n.ql-snow .ql-tooltip[data-mode=formula]::before {\n  content: \"Enter formula:\";\n}\n.ql-snow .ql-tooltip[data-mode=video]::before {\n  content: \"Enter video:\";\n}\n.ql-snow a {\n  color: #06c;\n}\n.ql-container.ql-snow {\n  border: 1px solid #ccc;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/_css-loader@0.28.11@css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":0,\"alias\":{\"/assets\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/assets\",\"/static\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/static\"}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41c071cf\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./.nuxt/components/nuxt-loading.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  -webkit-transition: width 0.2s, opacity 0.4s;\n  transition: width 0.2s, opacity 0.4s;\n  opacity: 1;\n  background-color: #efc14e;\n  z-index: 999999;\n}\n", "", {"version":3,"sources":["/Users/xiaochong/workspace/nuxt/nuxt_test2/.nuxt/components/nuxt-loading.vue"],"names":[],"mappings":";AACA;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;EACZ,UAAU;EACV,6CAA6C;EAC7C,qCAAqC;EACrC,WAAW;EACX,0BAA0B;EAC1B,gBAAgB;CACjB","file":"nuxt-loading.vue","sourcesContent":["\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  -webkit-transition: width 0.2s, opacity 0.4s;\n  transition: width 0.2s, opacity 0.4s;\n  opacity: 1;\n  background-color: #efc14e;\n  z-index: 999999;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/_css-loader@0.28.11@css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":1,\"alias\":{\"/assets\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/assets\",\"/static\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/static\"}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d5ea9138\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?{\"sourceMap\":true}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./layouts/error.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.container[data-v-d5ea9138] {\n  width: 1200px;\n  margin: 30px auto 0;\n  text-align: center;\n}\n.title[data-v-d5ea9138] {\n  margin-top: 15px;\n  font-size: 5em;\n}\n.info[data-v-d5ea9138] {\n  font-weight: 300;\n  color: #9aabb1;\n  margin: 0;\n}\n.button[data-v-d5ea9138] {\n  margin-top: 50px;\n}\n", "", {"version":3,"sources":["/Users/xiaochong/workspace/nuxt/nuxt_test2/layouts/error.vue"],"names":[],"mappings":";AACA;EACE,cAAc;EACd,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,iBAAiB;EACjB,eAAe;EACf,UAAU;CACX;AACD;EACE,iBAAiB;CAClB","file":"error.vue","sourcesContent":["\n.container[data-v-d5ea9138] {\n  width: 1200px;\n  margin: 30px auto 0;\n  text-align: center;\n}\n.title[data-v-d5ea9138] {\n  margin-top: 15px;\n  font-size: 5em;\n}\n.info[data-v-d5ea9138] {\n  font-weight: 300;\n  color: #9aabb1;\n  margin: 0;\n}\n.button[data-v-d5ea9138] {\n  margin-top: 50px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/_quill@1.3.6@quill/dist/quill.bubble.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/index.js??ref--2-1!./node_modules/_postcss-loader@2.1.4@postcss-loader/lib/index.js??ref--2-2!./node_modules/_quill@1.3.6@quill/dist/quill.bubble.css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/_vue-style-loader@3.1.2@vue-style-loader/lib/addStylesClient.js")("0bea4292", content, false, {"sourceMap":true});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("./node_modules/_css-loader@0.28.11@css-loader/index.js??ref--2-1!./node_modules/_postcss-loader@2.1.4@postcss-loader/lib/index.js??ref--2-2!./node_modules/_quill@1.3.6@quill/dist/quill.bubble.css", function() {
     var newContent = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/index.js??ref--2-1!./node_modules/_postcss-loader@2.1.4@postcss-loader/lib/index.js??ref--2-2!./node_modules/_quill@1.3.6@quill/dist/quill.bubble.css");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/_quill@1.3.6@quill/dist/quill.core.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/index.js??ref--2-1!./node_modules/_postcss-loader@2.1.4@postcss-loader/lib/index.js??ref--2-2!./node_modules/_quill@1.3.6@quill/dist/quill.core.css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/_vue-style-loader@3.1.2@vue-style-loader/lib/addStylesClient.js")("d5c522c6", content, false, {"sourceMap":true});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("./node_modules/_css-loader@0.28.11@css-loader/index.js??ref--2-1!./node_modules/_postcss-loader@2.1.4@postcss-loader/lib/index.js??ref--2-2!./node_modules/_quill@1.3.6@quill/dist/quill.core.css", function() {
     var newContent = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/index.js??ref--2-1!./node_modules/_postcss-loader@2.1.4@postcss-loader/lib/index.js??ref--2-2!./node_modules/_quill@1.3.6@quill/dist/quill.core.css");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/_quill@1.3.6@quill/dist/quill.snow.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/index.js??ref--2-1!./node_modules/_postcss-loader@2.1.4@postcss-loader/lib/index.js??ref--2-2!./node_modules/_quill@1.3.6@quill/dist/quill.snow.css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/_vue-style-loader@3.1.2@vue-style-loader/lib/addStylesClient.js")("eb1e9d36", content, false, {"sourceMap":true});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("./node_modules/_css-loader@0.28.11@css-loader/index.js??ref--2-1!./node_modules/_postcss-loader@2.1.4@postcss-loader/lib/index.js??ref--2-2!./node_modules/_quill@1.3.6@quill/dist/quill.snow.css", function() {
     var newContent = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/index.js??ref--2-1!./node_modules/_postcss-loader@2.1.4@postcss-loader/lib/index.js??ref--2-2!./node_modules/_quill@1.3.6@quill/dist/quill.snow.css");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/_vue-loader@13.7.0@vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-41c071cf\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"object\":\"src\",\"embed\":\"src\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=template&index=0!./.nuxt/components/nuxt-loading.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    staticClass: "nuxt-progress",
    style: {
      width: _vm.percent + "%",
      height: _vm.height,
      "background-color": _vm.canSuccess ? _vm.color : _vm.failedColor,
      opacity: _vm.show ? 1 : 0
    }
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__("./node_modules/_vue-hot-reload-api@2.3.0@vue-hot-reload-api/dist/index.js")      .rerender("data-v-41c071cf", esExports)
  }
}

/***/ }),

/***/ "./node_modules/_vue-loader@13.7.0@vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d5ea9138\",\"hasScoped\":true,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"object\":\"src\",\"embed\":\"src\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=template&index=0!./layouts/error.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "container" },
    [
      _c("h1", { staticClass: "title" }, [
        _vm._v("\n    " + _vm._s(_vm.error.statusCode) + "\n  ")
      ]),
      _c("h2", { staticClass: "info" }, [
        _vm._v("\n    " + _vm._s(_vm.error.message) + "\n  ")
      ]),
      _vm.error.statusCode === 404
        ? _c("nuxt-link", { staticClass: "button", attrs: { to: "/" } }, [
            _vm._v("\n    Homepage\n  ")
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__("./node_modules/_vue-hot-reload-api@2.3.0@vue-hot-reload-api/dist/index.js")      .rerender("data-v-d5ea9138", esExports)
  }
}

/***/ }),

/***/ "./node_modules/_vue-style-loader@3.1.2@vue-style-loader/index.js?{\"sourceMap\":true}!./node_modules/_css-loader@0.28.11@css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":0,\"alias\":{\"/assets\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/assets\",\"/static\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/static\"}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41c071cf\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./.nuxt/components/nuxt-loading.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":0,\"alias\":{\"/assets\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/assets\",\"/static\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/static\"}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41c071cf\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./.nuxt/components/nuxt-loading.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/_vue-style-loader@3.1.2@vue-style-loader/lib/addStylesClient.js")("5fc97d6c", content, false, {"sourceMap":true});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("./node_modules/_css-loader@0.28.11@css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":0,\"alias\":{\"/assets\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/assets\",\"/static\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/static\"}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41c071cf\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./.nuxt/components/nuxt-loading.vue", function() {
     var newContent = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":0,\"alias\":{\"/assets\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/assets\",\"/static\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/static\"}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41c071cf\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./.nuxt/components/nuxt-loading.vue");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/_vue-style-loader@3.1.2@vue-style-loader/index.js?{\"sourceMap\":true}!./node_modules/_css-loader@0.28.11@css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":1,\"alias\":{\"/assets\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/assets\",\"/static\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/static\"}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d5ea9138\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?{\"sourceMap\":true}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./layouts/error.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":1,\"alias\":{\"/assets\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/assets\",\"/static\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/static\"}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d5ea9138\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?{\"sourceMap\":true}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./layouts/error.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/_vue-style-loader@3.1.2@vue-style-loader/lib/addStylesClient.js")("22454a76", content, false, {"sourceMap":true});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("./node_modules/_css-loader@0.28.11@css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":1,\"alias\":{\"/assets\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/assets\",\"/static\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/static\"}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d5ea9138\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?{\"sourceMap\":true}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./layouts/error.vue", function() {
     var newContent = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":1,\"alias\":{\"/assets\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/assets\",\"/static\":\"/Users/xiaochong/workspace/nuxt/nuxt_test2/static\"}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d5ea9138\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?{\"sourceMap\":true}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./layouts/error.vue");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./plugins/date-format.js":
/***/ (function(module, exports) {

Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return fmt;
};

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/_webpack-hot-middleware@2.22.1@webpack-hot-middleware/client.js?name=client&reload=true&timeout=30000&path=/__webpack_hmr");
module.exports = __webpack_require__("./.nuxt/client.js");


/***/ })

},[0]);
//# sourceMappingURL=app.js.map