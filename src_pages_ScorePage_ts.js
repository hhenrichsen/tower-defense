(self["webpackChunkgamelib"] = self["webpackChunkgamelib"] || []).push([["src_pages_ScorePage_ts"],{

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

/***/ "./src/pages/ScorePage.ts":
/*!********************************!*\
  !*** ./src/pages/ScorePage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScorePage": () => (/* binding */ ScorePage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ScorePage = /*#__PURE__*/function () {
  function ScorePage() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ScorePage);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ScorePage, [{
    key: "load",
    value: function load(base, router, state) {
      var data = state.getData();
      var scores = data.scores;
      var header = document.createElement("h1");
      header.innerText = "High Scores";
      base.appendChild(header);

      if (router.transitionData !== undefined) {
        var score = router.transitionData.score;

        if (typeof score === "number") {
          var highScore = scores.some(function (it) {
            return Math.round(score) > it.score;
          }) || scores.length < 5;

          if (highScore) {
            var hsContainer = document.createElement("div");
            hsContainer.classList.add("container");
            var text = document.createElement("p");
            text.innerText = "You got a high score of ".concat(score.toFixed(0), "! Enter a name.");
            hsContainer.appendChild(text);
            var form = document.createElement("form");
            var input = document.createElement("input");
            input.type = "text";
            form.appendChild(input);
            var button = document.createElement("input");
            button.type = "submit";
            button.innerText = "Submit";
            form.append(button);

            form.onsubmit = function () {
              state.addScore({
                name: input.value,
                score: parseInt(score.toFixed(0))
              });
              state.router.requestTransition("scores", false);
            };

            hsContainer.append(form);
            base.append(hsContainer);
          }
        }
      }

      var scoreList = scores.sort(function (a, b) {
        return a.score - b.score;
      });

      var _iterator = _createForOfIteratorHelper(scoreList.reverse()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _score = _step.value;
          var scoreElement = document.createElement("p");
          scoreElement.innerText = "".concat(_score.score, " - ").concat(_score.name);
          base.appendChild(scoreElement);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

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
    value: function init(_router, _globalState) {
      return;
    }
  }, {
    key: "canTransition",
    value: function canTransition(_router, _) {
      return true;
    }
  }, {
    key: "cleanup",
    value: function cleanup(_router, _state) {
      return;
    }
  }]);

  return ScorePage;
}();

/***/ })

}]);
//# sourceMappingURL=src_pages_ScorePage_ts.js.map