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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lbGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2dhbWVsaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vZ2FtZWxpYi8uL3NyYy9wYWdlcy9LZXlzUGFnZS50cyJdLCJuYW1lcyI6WyJLZXlzUGFnZSIsImxpc3RlbmluZ0V2ZW50Iiwic3RhdGUiLCJwYXJlbnQiLCJ1cGRhdGVLZXkiLCJiaW5kIiwiYmFzZSIsInJvdXRlciIsImdldERhdGEiLCJhY3Rpb25zIiwia2V5TWFwIiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJjb250YWluZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJrZXkiLCJidG4iLCJpZCIsInJlcGxhY2UiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0TGlzdGVuaW5nRXZlbnQiLCJhcHBlbmQiLCJob21lIiwiaHJlZiIsInJlcXVlc3RUcmFuc2l0aW9uIiwiZXZlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0IiwicmVtb3ZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGVyc2lzdGVuY2UiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2aW91cyIsInByZXZlbnREZWZhdWx0IiwiT2JqZWN0IiwidmFsdWVzIiwiYWN0aW9uIiwicmVtYXBDb250cm9sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7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Q0MsTUFBUCxDQUFjL0IsTUFBZCxDQUFiLElBQ0FBLE1BQU0sQ0FBQyxLQUFLVCxjQUFOLENBQU4sS0FBZ0M0QixLQUFLLENBQUNWLEdBRnhDLEVBR0U7QUFDQTtBQUNEOztBQUNELFlBQU11QixNQUFNLEdBQUcsS0FBS3pDLGNBQXBCO0FBQ0EsYUFBS0MsS0FBTCxDQUFXeUMsWUFBWCxDQUF3QkQsTUFBeEIsRUFBZ0NiLEtBQUssQ0FBQ1YsR0FBdEM7QUFDQSxZQUFNQyxHQUFHLEdBQUdSLFFBQVEsQ0FBQ3NCLGNBQVQsQ0FBd0JRLE1BQXhCLENBQVo7QUFDQXRCLFdBQUcsQ0FBQ04sU0FBSixhQUFtQjRCLE1BQU0sQ0FBQ3BCLE9BQVAsQ0FBZSxtQkFBZixFQUFvQyxLQUFwQyxDQUFuQixlQUNFWixNQUFNLENBQUNnQyxNQUFELENBRFIsT0FYcUQsQ0FhaEQ7O0FBQ0wsYUFBS3pDLGNBQUwsR0FBc0IsRUFBdEI7QUFDQW1CLFdBQUcsQ0FBQ0gsU0FBSixDQUFjZ0IsTUFBZCxDQUFxQixTQUFyQjtBQUNEO0FBQ0Y7QUEzR0g7O0FBQUE7QUFBQSxJIiwiZmlsZSI6InNyY19wYWdlc19LZXlzUGFnZV90cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImltcG9ydCB7IEJhc2VQZXJzaXN0ZWREYXRhIH0gZnJvbSBcIi4uL2NvcmUvZGF0YS9CYXNlUGVyc2lzdGVkRGF0YVwiO1xuaW1wb3J0IHsgR2xvYmFsU3RhdGUgfSBmcm9tIFwiLi4vY29yZS9tZW51cy9HbG9iYWxTdGF0ZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCIuLi9jb3JlL21lbnVzL1BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9jb3JlL21lbnVzL1JvdXRlclwiO1xuXG5leHBvcnQgY2xhc3MgS2V5c1BhZ2UgaW1wbGVtZW50cyBQYWdlPEdsb2JhbFN0YXRlPEJhc2VQZXJzaXN0ZWREYXRhPj4ge1xuICBwcml2YXRlIGxpc3RlbmluZ0V2ZW50OiBzdHJpbmc7XG4gIHByaXZhdGUgc3RhdGU6IEdsb2JhbFN0YXRlPEJhc2VQZXJzaXN0ZWREYXRhPjtcbiAgcHJpdmF0ZSBwYXJlbnQ6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXBkYXRlS2V5ID0gdGhpcy51cGRhdGVLZXkuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGxvYWQoXG4gICAgYmFzZTogSFRNTEVsZW1lbnQsXG4gICAgcm91dGVyOiBSb3V0ZXI8R2xvYmFsU3RhdGU8QmFzZVBlcnNpc3RlZERhdGE+PixcbiAgICBzdGF0ZTogR2xvYmFsU3RhdGU8QmFzZVBlcnNpc3RlZERhdGE+XG4gICk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnBhcmVudCA9IGJhc2U7XG4gICAgY29uc3QgeyBhY3Rpb25zLCBrZXlNYXAgfSA9IHN0YXRlLmdldERhdGEoKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IFwiS2V5IENvbmZpZ3VyYXRpb25cIjtcbiAgICBiYXNlLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnRuLWNvbnRhaW5lclwiKTtcblxuICAgIGZvciAoY29uc3Qga2V5IG9mIGFjdGlvbnMpIHtcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidG4uaWQgPSBrZXk7XG4gICAgICBidG4uaW5uZXJUZXh0ID0gYCR7a2V5LnJlcGxhY2UoLyhbYS16XSg/PVtBLVpdKSkvZywgXCIkMSBcIil9ICgke1xuICAgICAgICBrZXlNYXBba2V5XVxuICAgICAgfSlgOyAvLyBDYW1lbENhc2UgLT4gQ2FtZWwgQ2FzZVxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0TGlzdGVuaW5nRXZlbnQoc3RhdGUsIGtleSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xuICAgIH1cblxuICAgIGJhc2UuYXBwZW5kKGNvbnRhaW5lcik7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGhvbWUuaHJlZiA9IFwiI1wiO1xuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHN0YXRlLnJvdXRlci5yZXF1ZXN0VHJhbnNpdGlvbihcImhvbWVcIik7XG4gICAgfSk7XG4gICAgaG9tZS5pbm5lclRleHQgPSBcIkJhY2tcIjtcbiAgICBiYXNlLmFwcGVuZENoaWxkKGhvbWUpO1xuICB9XG5cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLnVwZGF0ZUtleSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY2FuVHJhbnNpdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldExpc3RlbmluZ0V2ZW50KFxuICAgIHN0YXRlOiBHbG9iYWxTdGF0ZTxCYXNlUGVyc2lzdGVkRGF0YT4sXG4gICAgZXZlbnQ6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIilcbiAgICAgIC5mb3JFYWNoKChpdCkgPT4gaXQuY2xhc3NMaXN0LnJlbW92ZShcIndhaXRpbmdcIikpO1xuICAgIHRoaXMubGlzdGVuaW5nRXZlbnQgPSBldmVudDtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudCk7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJ3YWl0aW5nXCIpO1xuICAgIGJ0bi5pbm5lclRleHQgPSBcIldhaXRpbmcgZm9yIGtleXByZXNzLi4uXCI7XG4gIH1cblxuICBjbGVhbnVwKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMudXBkYXRlS2V5KTtcbiAgfVxuXG4gIHVwZGF0ZUtleShldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHBlcnNpc3RlbmNlID0gdGhpcy5zdGF0ZS5nZXREYXRhKCk7XG4gICAgY29uc3QgeyBrZXlNYXAgfSA9IHBlcnNpc3RlbmNlO1xuICAgIGlmIChldmVudC5rZXkgPT0gXCJFc2NhcGVcIikge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAodGhpcy5saXN0ZW5pbmdFdmVudCA9PT0gXCJcIikge1xuICAgICAgICB0aGlzLnN0YXRlLnJvdXRlci5wcmV2aW91cyh0aGlzLnN0YXRlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKS5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLmlubmVyVGV4dCA9IGAke2J0bi5pZC5yZXBsYWNlKC8oW2Etel0oPz1bQS1aXSkpL2csIFwiJDEgXCIpfSAoJHtcbiAgICAgICAgICBrZXlNYXBbYnRuLmlkXVxuICAgICAgICB9KWA7IC8vIENhbWVsQ2FzZSAtPiBDYW1lbCBDYXNlXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwid2FpdGluZ1wiKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5saXN0ZW5pbmdFdmVudCA9IFwiXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmxpc3RlbmluZ0V2ZW50ICYmIHRoaXMubGlzdGVuaW5nRXZlbnQgIT09IFwiXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50LmtleSBpbiBPYmplY3QudmFsdWVzKGtleU1hcCkgJiZcbiAgICAgICAga2V5TWFwW3RoaXMubGlzdGVuaW5nRXZlbnRdICE9PSBldmVudC5rZXlcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmxpc3RlbmluZ0V2ZW50O1xuICAgICAgdGhpcy5zdGF0ZS5yZW1hcENvbnRyb2woYWN0aW9uLCBldmVudC5rZXkpO1xuICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYWN0aW9uKTtcbiAgICAgIGJ0bi5pbm5lclRleHQgPSBgJHthY3Rpb24ucmVwbGFjZSgvKFthLXpdKD89W0EtWl0pKS9nLCBcIiQxIFwiKX0gKCR7XG4gICAgICAgIGtleU1hcFthY3Rpb25dXG4gICAgICB9KWA7IC8vIENhbWVsQ2FzZSAtPiBDYW1lbCBDYXNlXG4gICAgICB0aGlzLmxpc3RlbmluZ0V2ZW50ID0gXCJcIjtcbiAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwid2FpdGluZ1wiKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=