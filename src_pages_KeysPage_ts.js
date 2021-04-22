(self["webpackChunkgamelib"] = self["webpackChunkgamelib"] || []).push([["src_pages_KeysPage_ts"],{

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

/***/ "./src/pages/KeysPage.ts":
/*!*******************************!*\
  !*** ./src/pages/KeysPage.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeysPage": () => (/* binding */ KeysPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var KeysPage = /*#__PURE__*/function () {
  function KeysPage() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, KeysPage);

    this.listeningEvent = void 0;
    this.state = void 0;
    this.parent = void 0;
    this.updateKey = this.updateKey.bind(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(KeysPage, [{
    key: "load",
    value: function load(base, router, state) {
      var _this = this;

      this.state = state;
      this.parent = base;

      var _state$getData = state.getData(),
          actions = _state$getData.actions,
          keyMap = _state$getData.keyMap;

      var header = document.createElement("h1");
      header.innerText = "Key Configuration";
      base.appendChild(header);
      var container = document.createElement("div");
      container.classList.add("btn-container");

      var _iterator = _createForOfIteratorHelper(actions),
          _step;

      try {
        var _loop = function _loop() {
          var key = _step.value;
          var btn = document.createElement("button");
          btn.id = key;
          btn.innerText = "".concat(key.replace(/([a-z](?=[A-Z]))/g, "$1 "), " (").concat(keyMap[key], ")"); // CamelCase -> Camel Case

          btn.addEventListener("click", function () {
            _this.setListeningEvent(state, key);
          });
          container.appendChild(btn);
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      base.append(container);
      var home = document.createElement("a");
      home.href = "#";
      home.addEventListener("click", function () {
        state.router.requestTransition("home");
      });
      home.innerText = "Back";
      base.appendChild(home);
    }
  }, {
    key: "init",
    value: function init() {
      this.parent.addEventListener("keydown", this.updateKey);
      return;
    }
  }, {
    key: "canTransition",
    value: function canTransition() {
      return true;
    }
  }, {
    key: "setListeningEvent",
    value: function setListeningEvent(state, event) {
      document.querySelectorAll("button").forEach(function (it) {
        return it.classList.remove("waiting");
      });
      this.listeningEvent = event;
      var btn = document.getElementById(event);
      btn.classList.add("waiting");
      btn.innerText = "Waiting for keypress...";
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      document.removeEventListener("keydown", this.updateKey);
    }
  }, {
    key: "updateKey",
    value: function updateKey(event) {
      var persistence = this.state.getData();
      var keyMap = persistence.keyMap;

      if (event.key == "Escape") {
        event.stopPropagation();

        if (this.listeningEvent === "") {
          this.state.router.previous(this.state);
          return;
        }

        document.querySelectorAll("button").forEach(function (btn) {
          btn.innerText = "".concat(btn.id.replace(/([a-z](?=[A-Z]))/g, "$1 "), " (").concat(keyMap[btn.id], ")"); // CamelCase -> Camel Case

          btn.classList.remove("waiting");
        });
        this.listeningEvent = "";
        return;
      }

      if (this.listeningEvent && this.listeningEvent !== "") {
        event.preventDefault();

        if (event.key in Object.values(keyMap) && keyMap[this.listeningEvent] !== event.key) {
          return;
        }

        var action = this.listeningEvent;
        this.state.remapControl(action, event.key);
        var btn = document.getElementById(action);
        btn.innerText = "".concat(action.replace(/([a-z](?=[A-Z]))/g, "$1 "), " (").concat(keyMap[action], ")"); // CamelCase -> Camel Case

        this.listeningEvent = "";
        btn.classList.remove("waiting");
      }
    }
  }]);

  return KeysPage;
}();

/***/ })

}]);
//# sourceMappingURL=src_pages_KeysPage_ts.js.map