(self["webpackChunkgamelib"] = self["webpackChunkgamelib"] || []).push([["src_pages_CreditsPage_ts"],{

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

/***/ "./src/pages/CreditsPage.ts":
/*!**********************************!*\
  !*** ./src/pages/CreditsPage.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreditsPage": () => (/* binding */ CreditsPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


var CreditsPage = /*#__PURE__*/function () {
  function CreditsPage() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, CreditsPage);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(CreditsPage, [{
    key: "load",
    value: function load(base, router, state) {
      var header = document.createElement("h1");
      header.innerText = "Credits";
      base.appendChild(header);
      var author = document.createElement("p");
      author.innerText = "Tower Defense by Hunter Henrichsen";
      var font = document.createElement("p");
      font.innerText = "Montserrat Font from Google Fonts";
      var music = document.createElement("p");
      music.innerText = "Music provided by ZapSplat.";
      base.appendChild(author);
      base.appendChild(font);
      base.appendChild(music);
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
      return;
    }
  }, {
    key: "canTransition",
    value: function canTransition() {
      return true;
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      return;
    }
  }]);

  return CreditsPage;
}();

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lbGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2dhbWVsaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vZ2FtZWxpYi8uL3NyYy9wYWdlcy9DcmVkaXRzUGFnZS50cyJdLCJuYW1lcyI6WyJDcmVkaXRzUGFnZSIsImJhc2UiLCJyb3V0ZXIiLCJzdGF0ZSIsImhlYWRlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwiYXV0aG9yIiwiZm9udCIsIm11c2ljIiwiaG9tZSIsImhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwicmVxdWVzdFRyYW5zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQTyxJQUFNQSxXQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxXQUNFLGNBQUtDLElBQUwsRUFBd0JDLE1BQXhCLEVBQTRDQyxLQUE1QyxFQUE2RDtBQUMzRCxVQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFmO0FBQ0FGLFlBQU0sQ0FBQ0csU0FBUCxHQUFtQixTQUFuQjtBQUNBTixVQUFJLENBQUNPLFdBQUwsQ0FBaUJKLE1BQWpCO0FBQ0EsVUFBTUssTUFBTSxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBZjtBQUNBRyxZQUFNLENBQUNGLFNBQVAsR0FBbUIsb0NBQW5CO0FBQ0EsVUFBTUcsSUFBSSxHQUFHTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjtBQUNBSSxVQUFJLENBQUNILFNBQUwsR0FBaUIsbUNBQWpCO0FBQ0EsVUFBTUksS0FBSyxHQUFHTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBZDtBQUNBSyxXQUFLLENBQUNKLFNBQU4sR0FBa0IsNkJBQWxCO0FBQ0FOLFVBQUksQ0FBQ08sV0FBTCxDQUFpQkMsTUFBakI7QUFDQVIsVUFBSSxDQUFDTyxXQUFMLENBQWlCRSxJQUFqQjtBQUNBVCxVQUFJLENBQUNPLFdBQUwsQ0FBaUJHLEtBQWpCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjtBQUNBTSxVQUFJLENBQUNDLElBQUwsR0FBWSxHQUFaO0FBQ0FELFVBQUksQ0FBQ0UsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtBQUNuQ1gsYUFBSyxDQUFDRCxNQUFOLENBQWFhLGlCQUFiLENBQStCLE1BQS9CO0FBQ0QsT0FGRDtBQUdBSCxVQUFJLENBQUNMLFNBQUwsR0FBaUIsTUFBakI7QUFDQU4sVUFBSSxDQUFDTyxXQUFMLENBQWlCSSxJQUFqQjtBQUNEO0FBckJIO0FBQUE7QUFBQSxXQXVCRSxnQkFBYTtBQUNYO0FBQ0Q7QUF6Qkg7QUFBQTtBQUFBLFdBMkJFLHlCQUF5QjtBQUN2QixhQUFPLElBQVA7QUFDRDtBQTdCSDtBQUFBO0FBQUEsV0ErQkUsbUJBQWdCO0FBQ2Q7QUFDRDtBQWpDSDs7QUFBQTtBQUFBLEkiLCJmaWxlIjoic3JjX3BhZ2VzX0NyZWRpdHNQYWdlX3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiaW1wb3J0IHsgQmFzZVBlcnNpc3RlZERhdGEgfSBmcm9tIFwiLi4vY29yZS9kYXRhL0Jhc2VQZXJzaXN0ZWREYXRhXCI7XG5pbXBvcnQgeyBHbG9iYWxTdGF0ZSB9IGZyb20gXCIuLi9jb3JlL21lbnVzL0dsb2JhbFN0YXRlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4uL2NvcmUvbWVudXMvUGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL2NvcmUvbWVudXMvUm91dGVyXCI7XG5cbnR5cGUgR1MgPSBHbG9iYWxTdGF0ZTxCYXNlUGVyc2lzdGVkRGF0YT47XG5cbmV4cG9ydCBjbGFzcyBDcmVkaXRzUGFnZSBpbXBsZW1lbnRzIFBhZ2U8R1M+IHtcbiAgbG9hZChiYXNlOiBIVE1MRWxlbWVudCwgcm91dGVyOiBSb3V0ZXI8R1M+LCBzdGF0ZTogR1MpOiB2b2lkIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IFwiQ3JlZGl0c1wiO1xuICAgIGJhc2UuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb25zdCBhdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBhdXRob3IuaW5uZXJUZXh0ID0gXCJUb3dlciBEZWZlbnNlIGJ5IEh1bnRlciBIZW5yaWNoc2VuXCI7XG4gICAgY29uc3QgZm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZvbnQuaW5uZXJUZXh0ID0gXCJNb250c2VycmF0IEZvbnQgZnJvbSBHb29nbGUgRm9udHNcIjtcbiAgICBjb25zdCBtdXNpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG11c2ljLmlubmVyVGV4dCA9IFwiTXVzaWMgcHJvdmlkZWQgYnkgWmFwU3BsYXQuXCI7XG4gICAgYmFzZS5hcHBlbmRDaGlsZChhdXRob3IpO1xuICAgIGJhc2UuYXBwZW5kQ2hpbGQoZm9udCk7XG4gICAgYmFzZS5hcHBlbmRDaGlsZChtdXNpYyk7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGhvbWUuaHJlZiA9IFwiI1wiO1xuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHN0YXRlLnJvdXRlci5yZXF1ZXN0VHJhbnNpdGlvbihcImhvbWVcIik7XG4gICAgfSk7XG4gICAgaG9tZS5pbm5lclRleHQgPSBcIkJhY2tcIjtcbiAgICBiYXNlLmFwcGVuZENoaWxkKGhvbWUpO1xuICB9XG5cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjYW5UcmFuc2l0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY2xlYW51cCgpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=