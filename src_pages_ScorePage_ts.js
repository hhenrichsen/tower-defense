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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lbGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2dhbWVsaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vZ2FtZWxpYi8uL3NyYy9wYWdlcy9TY29yZVBhZ2UudHMiXSwibmFtZXMiOlsiU2NvcmVQYWdlIiwiYmFzZSIsInJvdXRlciIsInN0YXRlIiwiZGF0YSIsImdldERhdGEiLCJzY29yZXMiLCJoZWFkZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCIsInRyYW5zaXRpb25EYXRhIiwidW5kZWZpbmVkIiwic2NvcmUiLCJoaWdoU2NvcmUiLCJzb21lIiwiaXQiLCJNYXRoIiwicm91bmQiLCJsZW5ndGgiLCJoc0NvbnRhaW5lciIsImNsYXNzTGlzdCIsImFkZCIsInRleHQiLCJ0b0ZpeGVkIiwiZm9ybSIsImlucHV0IiwidHlwZSIsImJ1dHRvbiIsImFwcGVuZCIsIm9uc3VibWl0IiwiYWRkU2NvcmUiLCJuYW1lIiwidmFsdWUiLCJwYXJzZUludCIsInJlcXVlc3RUcmFuc2l0aW9uIiwic2NvcmVMaXN0Iiwic29ydCIsImEiLCJiIiwicmV2ZXJzZSIsInNjb3JlRWxlbWVudCIsImhvbWUiLCJocmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9yb3V0ZXIiLCJfZ2xvYmFsU3RhdGUiLCJfIiwiX3N0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LFlBQVksR0FBR2xDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFyQjtBQUNBaUMsc0JBQVksQ0FBQ2hDLFNBQWIsYUFBNEJJLE1BQUssQ0FBQ0EsS0FBbEMsZ0JBQTZDQSxNQUFLLENBQUNtQixJQUFuRDtBQUNBaEMsY0FBSSxDQUFDVSxXQUFMLENBQWlCK0IsWUFBakI7QUFDRDtBQWhESztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtETixVQUFNQyxJQUFJLEdBQUduQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjtBQUNBa0MsVUFBSSxDQUFDQyxJQUFMLEdBQVksR0FBWjtBQUNBRCxVQUFJLENBQUNFLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQU07QUFDbkMxQyxhQUFLLENBQUNELE1BQU4sQ0FBYWtDLGlCQUFiLENBQStCLE1BQS9CO0FBQ0QsT0FGRDtBQUdBTyxVQUFJLENBQUNqQyxTQUFMLEdBQWlCLE1BQWpCO0FBQ0FULFVBQUksQ0FBQ1UsV0FBTCxDQUFpQmdDLElBQWpCO0FBQ0Q7QUE5REg7QUFBQTtBQUFBLFdBZ0VFLGNBQ0VHLE9BREYsRUFFRUMsWUFGRixFQUdRO0FBQ047QUFDRDtBQXJFSDtBQUFBO0FBQUEsV0F1RUUsdUJBQWNELE9BQWQsRUFBcUNFLENBQXJDLEVBQXlEO0FBQ3ZELGFBQU8sSUFBUDtBQUNEO0FBekVIO0FBQUE7QUFBQSxXQTJFRSxpQkFDRUYsT0FERixFQUVFRyxNQUZGLEVBR1E7QUFDTjtBQUNEO0FBaEZIOztBQUFBO0FBQUEsSSIsImZpbGUiOiJzcmNfcGFnZXNfU2NvcmVQYWdlX3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiaW1wb3J0IHsgQmFzZVBlcnNpc3RlZERhdGEgfSBmcm9tIFwiLi4vY29yZS9kYXRhL0Jhc2VQZXJzaXN0ZWREYXRhXCI7XG5pbXBvcnQgeyBHbG9iYWxTdGF0ZSB9IGZyb20gXCIuLi9jb3JlL21lbnVzL0dsb2JhbFN0YXRlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4uL2NvcmUvbWVudXMvUGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL2NvcmUvbWVudXMvUm91dGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBTY29yZVBhZ2UgaW1wbGVtZW50cyBQYWdlPEdsb2JhbFN0YXRlPEJhc2VQZXJzaXN0ZWREYXRhPj4ge1xuICBsb2FkKFxuICAgIGJhc2U6IEhUTUxFbGVtZW50LFxuICAgIHJvdXRlcjogUm91dGVyPEdsb2JhbFN0YXRlPEJhc2VQZXJzaXN0ZWREYXRhPj4sXG4gICAgc3RhdGU6IEdsb2JhbFN0YXRlPEJhc2VQZXJzaXN0ZWREYXRhPlxuICApOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuZ2V0RGF0YSgpO1xuICAgIGNvbnN0IHsgc2NvcmVzIH0gPSBkYXRhO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gXCJIaWdoIFNjb3Jlc1wiO1xuICAgIGJhc2UuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGlmIChyb3V0ZXIudHJhbnNpdGlvbkRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgeyBzY29yZSB9ID0gcm91dGVyLnRyYW5zaXRpb25EYXRhO1xuXG4gICAgICBpZiAodHlwZW9mIHNjb3JlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGNvbnN0IGhpZ2hTY29yZSA9XG4gICAgICAgICAgc2NvcmVzLnNvbWUoKGl0KSA9PiBNYXRoLnJvdW5kKHNjb3JlKSA+IGl0LnNjb3JlKSB8fFxuICAgICAgICAgIHNjb3Jlcy5sZW5ndGggPCA1O1xuICAgICAgICBpZiAoaGlnaFNjb3JlKSB7XG4gICAgICAgICAgY29uc3QgaHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGhzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgIHRleHQuaW5uZXJUZXh0ID0gYFlvdSBnb3QgYSBoaWdoIHNjb3JlIG9mICR7c2NvcmUudG9GaXhlZChcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApfSEgRW50ZXIgYSBuYW1lLmA7XG4gICAgICAgICAgaHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xuICAgICAgICAgIGZvcm0uYXBwZW5kKGJ1dHRvbik7XG4gICAgICAgICAgZm9ybS5vbnN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLmFkZFNjb3JlKHtcbiAgICAgICAgICAgICAgbmFtZTogaW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgIHNjb3JlOiBwYXJzZUludChzY29yZS50b0ZpeGVkKDApKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RhdGUucm91dGVyLnJlcXVlc3RUcmFuc2l0aW9uKFwic2NvcmVzXCIsIGZhbHNlKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGhzQ29udGFpbmVyLmFwcGVuZChmb3JtKTtcbiAgICAgICAgICBiYXNlLmFwcGVuZChoc0NvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzY29yZUxpc3QgPSBzY29yZXMuc29ydCgoYSwgYikgPT4gYS5zY29yZSAtIGIuc2NvcmUpO1xuICAgIGZvciAoY29uc3Qgc2NvcmUgb2Ygc2NvcmVMaXN0LnJldmVyc2UoKSkge1xuICAgICAgY29uc3Qgc2NvcmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBzY29yZUVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7c2NvcmUuc2NvcmV9IC0gJHtzY29yZS5uYW1lfWA7XG4gICAgICBiYXNlLmFwcGVuZENoaWxkKHNjb3JlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGhvbWUuaHJlZiA9IFwiI1wiO1xuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHN0YXRlLnJvdXRlci5yZXF1ZXN0VHJhbnNpdGlvbihcImhvbWVcIik7XG4gICAgfSk7XG4gICAgaG9tZS5pbm5lclRleHQgPSBcIkJhY2tcIjtcbiAgICBiYXNlLmFwcGVuZENoaWxkKGhvbWUpO1xuICB9XG5cbiAgaW5pdChcbiAgICBfcm91dGVyOiBSb3V0ZXI8R2xvYmFsU3RhdGU8QmFzZVBlcnNpc3RlZERhdGE+PixcbiAgICBfZ2xvYmFsU3RhdGU6IEdsb2JhbFN0YXRlPEJhc2VQZXJzaXN0ZWREYXRhPlxuICApOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjYW5UcmFuc2l0aW9uKF9yb3V0ZXI6IFJvdXRlcjxudWxsPiwgXzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjbGVhbnVwKFxuICAgIF9yb3V0ZXI6IFJvdXRlcjxHbG9iYWxTdGF0ZTxCYXNlUGVyc2lzdGVkRGF0YT4+LFxuICAgIF9zdGF0ZTogR2xvYmFsU3RhdGU8QmFzZVBlcnNpc3RlZERhdGE+XG4gICk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==