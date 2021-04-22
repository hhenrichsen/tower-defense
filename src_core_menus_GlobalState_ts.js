(self["webpackChunkgamelib"] = self["webpackChunkgamelib"] || []).push([["src_core_menus_GlobalState_ts"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./src/core/data/Persistence.ts":
/*!**************************************!*\
  !*** ./src/core/data/Persistence.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersistenceManager": () => (/* binding */ PersistenceManager)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


var PersistenceManager = /*#__PURE__*/function () {
  function PersistenceManager(name, initializer, typeGuard) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PersistenceManager);

    this.initializer = void 0;
    this.typeGuard = void 0;
    this.name = void 0;
    this.initializer = initializer;
    this.typeGuard = typeGuard;
    this.name = name;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PersistenceManager, [{
    key: "get",
    value: function get(state) {
      if (localStorage.getItem(this.name) === null) {
        return this.getDefault(state);
      } else {
        var val = JSON.parse(localStorage.getItem(this.name));

        if (this.typeGuard && !this.typeGuard(val)) {
          console.warn("Found invalid shape of persistent data ".concat(this.name, ", assigning to default."));

          var _res = Object.assign(this.getDefault(state), val);

          return _res;
        }

        var res = Object.assign(this.getDefault(state), val);
        return res;
      }
    }
  }, {
    key: "getDefault",
    value: function getDefault(state) {
      var initState = this.initializer(state);
      this.put(initState);
      return initState;
    }
  }, {
    key: "put",
    value: function put(value) {
      localStorage.setItem(this.name, JSON.stringify(value));
    }
  }]);

  return PersistenceManager;
}();

/***/ }),

/***/ "./src/core/menus/GlobalState.ts":
/*!***************************************!*\
  !*** ./src/core/menus/GlobalState.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseGlobalState": () => (/* binding */ BaseGlobalState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _data_Persistence__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/Persistence */ "./src/core/data/Persistence.ts");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router */ "./src/core/menus/Router.ts");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var BaseGlobalState = /*#__PURE__*/function () {
  function BaseGlobalState(name, defaultData) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, BaseGlobalState);

    this.router = void 0;
    this.persistence = void 0;
    this.data = void 0;
    this.router = new _Router__WEBPACK_IMPORTED_MODULE_4__.SimpleRouter(this);
    this.persistence = new _data_Persistence__WEBPACK_IMPORTED_MODULE_3__.PersistenceManager(name, function () {
      return defaultData;
    });
    this.data = this.persistence.get(this);
    this.persistence.put(this.data);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(BaseGlobalState, [{
    key: "addScore",
    value: function addScore(score) {
      this.data.scores.push(score);
      this.data.scores.sort(function (a, b) {
        return a.score - b.score;
      }).reverse();
      this.data.scores = this.data.scores.slice(0, 5);
      this.persistence.put(this.data);
    }
  }, {
    key: "remapControl",
    value: function remapControl(action, key) {
      this.data.keyMap[action] = key;
      this.persistence.put(this.data);
    }
  }, {
    key: "getData",
    value: function getData() {
      return _objectSpread({}, this.data);
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.data = data;
      this.persistence.put(data);
    }
  }]);

  return BaseGlobalState;
}();

/***/ }),

/***/ "./src/core/menus/Router.ts":
/*!**********************************!*\
  !*** ./src/core/menus/Router.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimpleRouter": () => (/* binding */ SimpleRouter)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


var SimpleRouter = /*#__PURE__*/function () {
  function SimpleRouter(state) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SimpleRouter);

    this._currentPage = undefined;
    this._transitionData = {};
    this._pages = {};
    this._history = [];
    this.requestTransition = void 0;
    this.requestTransition = this._requestTransition(state);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(SimpleRouter, [{
    key: "addPage",
    value: function addPage(id, page) {
      if (!(id in this._pages)) {
        this._pages[id] = page;
      } else {
        console.warn("Trying to register duplicate page ".concat(id, "!"));
      }
    }
  }, {
    key: "transitionData",
    get: function get() {
      return this._transitionData;
    }
  }, {
    key: "pages",
    get: function get() {
      return this._pages;
    }
  }, {
    key: "currentPage",
    get: function get() {
      return this._currentPage;
    }
  }, {
    key: "_requestTransition",
    value: function _requestTransition(state) {
      var fn = function fn(id) {
        var purge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var data = arguments.length > 2 ? arguments[2] : undefined;
        console.log("[ROUTER] Moving to ".concat(id));

        if (this._pages[id] === undefined || this._pages[id] === null) {
          return;
        }

        if (this._currentPage === undefined || this._currentPage.canTransition(this, id)) {
          if (purge) {
            this._history = [];
          }

          this._history.push(id);

          this._currentPage = this.pages[id];
          this._transitionData = data;
          var el = document.getElementById("main");
          el.innerHTML = "";
          el.classList.forEach(function (it) {
            return el.classList.remove(it);
          });
          el.classList.add(id);

          this._currentPage.load(el, this, state);

          this._currentPage.init(this, state);
        }
      };

      fn = fn.bind(this);
      return fn;
    }
  }, {
    key: "previous",
    value: function previous(state) {
      var prev = this._history.slice(-2)[0];

      if (prev !== undefined) {
        this._currentPage.cleanup(this, state);

        this._history.splice(-2, 2);

        this.requestTransition(prev, false);
      }
    }
  }]);

  return SimpleRouter;
}();

/***/ })

}]);
//# sourceMappingURL=src_core_menus_GlobalState_ts.js.map