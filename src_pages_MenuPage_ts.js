(self["webpackChunkgamelib"] = self["webpackChunkgamelib"] || []).push([["src_pages_MenuPage_ts"],{

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

/***/ "./src/pages/MenuPage.ts":
/*!*******************************!*\
  !*** ./src/pages/MenuPage.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./src/index.ts");



var HomePage = /*#__PURE__*/function () {
  function HomePage(name) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, HomePage);

    this.playElement = void 0;
    this.controlsElement = void 0;
    this.scoresElement = void 0;
    this.creditsElement = void 0;
    this.router = void 0;
    this.name = void 0;
    this.firstTimeLoad = true;
    this.name = name;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(HomePage, [{
    key: "load",
    value: function load(base, router) {
      this.router = router;
      var header = document.createElement("h1");
      header.innerText = this.name;
      base.appendChild(header);
      var play = document.createElement("a");
      play.href = "#";
      play.id = "play";
      play.classList.add("inactive");
      base.appendChild(play);
      this.playElement = play;
      var gs = ___WEBPACK_IMPORTED_MODULE_2__.globalState.getData();
      var audio = document.createElement("a");
      audio.href = "#";
      audio.id = "audio";
      audio.innerText = gs.audio ? "Audio (On)" : "Audio (Off)";
      base.appendChild(audio);
      audio.addEventListener("click", function () {
        var data = ___WEBPACK_IMPORTED_MODULE_2__.globalState.getData();
        data.audio = !data.audio;
        ___WEBPACK_IMPORTED_MODULE_2__.globalState.setData(data);
        audio.innerText = data.audio ? "Audio (On)" : "Audio (Off)";
      });
      var controls = document.createElement("a");
      controls.href = "#";
      controls.id = "controls";
      controls.innerText = "Controls";
      controls.classList.add("inactive");
      base.appendChild(controls);
      this.controlsElement = controls;
      var scores = document.createElement("a");
      scores.href = "#";
      scores.id = "scores";
      scores.innerText = "High Scores";
      scores.classList.add("inactive");
      base.appendChild(scores);
      this.scoresElement = scores;
      var credits = document.createElement("a");
      credits.href = "#";
      credits.id = "credits";
      credits.innerText = "Credits";
      credits.classList.add("inactive");
      base.appendChild(credits);
      this.creditsElement = credits;

      if (!this.firstTimeLoad) {
        this.setPlayLoaded();
        this.setCreditsLoaded();
        this.setKeysLoaded();
        this.setScoresLoaded();
      }

      this.firstTimeLoad = false;
    }
  }, {
    key: "setPlayLoaded",
    value: function setPlayLoaded() {
      var _this = this;

      this.playElement.classList.remove("inactive");
      this.playElement.innerText = "Play";
      this.playElement.addEventListener("click", function () {
        _this.router.requestTransition("play", true, {
          level: 1
        });
      });
    }
  }, {
    key: "setCreditsLoaded",
    value: function setCreditsLoaded() {
      var _this2 = this;

      this.creditsElement.classList.remove("inactive");
      this.creditsElement.addEventListener("click", function () {
        _this2.router.requestTransition("credits");
      });
    }
  }, {
    key: "setScoresLoaded",
    value: function setScoresLoaded() {
      var _this3 = this;

      this.scoresElement.classList.remove("inactive");
      this.scoresElement.addEventListener("click", function () {
        _this3.router.requestTransition("scores");
      });
    }
  }, {
    key: "setKeysLoaded",
    value: function setKeysLoaded() {
      var _this4 = this;

      this.controlsElement.classList.remove("inactive");
      this.controlsElement.addEventListener("click", function () {
        _this4.router.requestTransition("keys");
      });
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

  return HomePage;
}();

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lbGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2dhbWVsaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vZ2FtZWxpYi8uL3NyYy9wYWdlcy9NZW51UGFnZS50cyJdLCJuYW1lcyI6WyJIb21lUGFnZSIsIm5hbWUiLCJwbGF5RWxlbWVudCIsImNvbnRyb2xzRWxlbWVudCIsInNjb3Jlc0VsZW1lbnQiLCJjcmVkaXRzRWxlbWVudCIsInJvdXRlciIsImZpcnN0VGltZUxvYWQiLCJiYXNlIiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJwbGF5IiwiaHJlZiIsImlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiZ3MiLCJnbG9iYWxTdGF0ZSIsImF1ZGlvIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRhdGEiLCJjb250cm9scyIsInNjb3JlcyIsImNyZWRpdHMiLCJzZXRQbGF5TG9hZGVkIiwic2V0Q3JlZGl0c0xvYWRlZCIsInNldEtleXNMb2FkZWQiLCJzZXRTY29yZXNMb2FkZWQiLCJyZW1vdmUiLCJyZXF1ZXN0VHJhbnNpdGlvbiIsImxldmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBT08sSUFBTUEsUUFBYjtBQVNFLG9CQUFZQyxJQUFaLEVBQTBCO0FBQUE7O0FBQUEsU0FSbEJDLFdBUWtCO0FBQUEsU0FQbEJDLGVBT2tCO0FB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T0FGRDtBQUdEO0FBOUZIO0FBQUE7QUFBQSxXQWdHRSx5QkFBNkI7QUFBQTs7QUFDM0IsV0FBSzdCLGVBQUwsQ0FBcUJjLFNBQXJCLENBQStCYyxNQUEvQixDQUFzQyxVQUF0QztBQUNBLFdBQUs1QixlQUFMLENBQXFCbUIsZ0JBQXJCLENBQXNDLE9BQXRDLEVBQStDLFlBQU07QUFDbkQsY0FBSSxDQUFDaEIsTUFBTCxDQUFZMEIsaUJBQVosQ0FBOEIsTUFBOUI7QUFDRCxPQUZEO0FBR0Q7QUFyR0g7QUFBQTtBQUFBLFdBdUdFLGdCQUFhO0FBQ1g7QUFDRDtBQXpHSDtBQUFBO0FBQUEsV0EyR0UseUJBQXlCO0FBQ3ZCLGFBQU8sSUFBUDtBQUNEO0FBN0dIO0FBQUE7QUFBQSxXQStHRSxtQkFBZ0I7QUFDZDtBQUNEO0FBakhIOztBQUFBO0FBQUEsSSIsImZpbGUiOiJzcmNfcGFnZXNfTWVudVBhZ2VfdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJpbXBvcnQgeyBnbG9iYWxTdGF0ZSB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgQmFzZVBlcnNpc3RlZERhdGEgfSBmcm9tIFwiLi4vY29yZS9kYXRhL0Jhc2VQZXJzaXN0ZWREYXRhXCI7XG5pbXBvcnQgeyBHbG9iYWxTdGF0ZSB9IGZyb20gXCIuLi9jb3JlL21lbnVzL0dsb2JhbFN0YXRlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4uL2NvcmUvbWVudXMvUGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL2NvcmUvbWVudXMvUm91dGVyXCI7XG5cbnR5cGUgR1MgPSBHbG9iYWxTdGF0ZTxCYXNlUGVyc2lzdGVkRGF0YT47XG5leHBvcnQgY2xhc3MgSG9tZVBhZ2UgaW1wbGVtZW50cyBQYWdlPEdTPiB7XG4gIHByaXZhdGUgcGxheUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGNvbnRyb2xzRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgc2NvcmVzRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgY3JlZGl0c0VsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHJvdXRlcjogUm91dGVyPEdTPjtcbiAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgZmlyc3RUaW1lTG9hZCA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGxvYWQoYmFzZTogSFRNTEVsZW1lbnQsIHJvdXRlcjogUm91dGVyPEdTPik6IHZvaWQge1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlci5pbm5lclRleHQgPSB0aGlzLm5hbWU7XG4gICAgYmFzZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHBsYXkuaHJlZiA9IFwiI1wiO1xuICAgIHBsYXkuaWQgPSBcInBsYXlcIjtcbiAgICBwbGF5LmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICBiYXNlLmFwcGVuZENoaWxkKHBsYXkpO1xuICAgIHRoaXMucGxheUVsZW1lbnQgPSBwbGF5O1xuXG4gICAgY29uc3QgZ3MgPSBnbG9iYWxTdGF0ZS5nZXREYXRhKCk7XG4gICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhdWRpby5ocmVmID0gXCIjXCI7XG4gICAgYXVkaW8uaWQgPSBcImF1ZGlvXCI7XG4gICAgYXVkaW8uaW5uZXJUZXh0ID0gZ3MuYXVkaW8gPyBcIkF1ZGlvIChPbilcIiA6IFwiQXVkaW8gKE9mZilcIjtcbiAgICBiYXNlLmFwcGVuZENoaWxkKGF1ZGlvKTtcblxuICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gZ2xvYmFsU3RhdGUuZ2V0RGF0YSgpO1xuICAgICAgZGF0YS5hdWRpbyA9ICFkYXRhLmF1ZGlvO1xuICAgICAgZ2xvYmFsU3RhdGUuc2V0RGF0YShkYXRhKTtcbiAgICAgIGF1ZGlvLmlubmVyVGV4dCA9IGRhdGEuYXVkaW8gPyBcIkF1ZGlvIChPbilcIiA6IFwiQXVkaW8gKE9mZilcIjtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29udHJvbHMuaHJlZiA9IFwiI1wiO1xuICAgIGNvbnRyb2xzLmlkID0gXCJjb250cm9sc1wiO1xuICAgIGNvbnRyb2xzLmlubmVyVGV4dCA9IFwiQ29udHJvbHNcIjtcbiAgICBjb250cm9scy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgYmFzZS5hcHBlbmRDaGlsZChjb250cm9scyk7XG4gICAgdGhpcy5jb250cm9sc0VsZW1lbnQgPSBjb250cm9scztcblxuICAgIGNvbnN0IHNjb3JlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHNjb3Jlcy5ocmVmID0gXCIjXCI7XG4gICAgc2NvcmVzLmlkID0gXCJzY29yZXNcIjtcbiAgICBzY29yZXMuaW5uZXJUZXh0ID0gXCJIaWdoIFNjb3Jlc1wiO1xuICAgIHNjb3Jlcy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgYmFzZS5hcHBlbmRDaGlsZChzY29yZXMpO1xuICAgIHRoaXMuc2NvcmVzRWxlbWVudCA9IHNjb3JlcztcblxuICAgIGNvbnN0IGNyZWRpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjcmVkaXRzLmhyZWYgPSBcIiNcIjtcbiAgICBjcmVkaXRzLmlkID0gXCJjcmVkaXRzXCI7XG4gICAgY3JlZGl0cy5pbm5lclRleHQgPSBcIkNyZWRpdHNcIjtcbiAgICBjcmVkaXRzLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICBiYXNlLmFwcGVuZENoaWxkKGNyZWRpdHMpO1xuICAgIHRoaXMuY3JlZGl0c0VsZW1lbnQgPSBjcmVkaXRzO1xuXG4gICAgaWYgKCF0aGlzLmZpcnN0VGltZUxvYWQpIHtcbiAgICAgIHRoaXMuc2V0UGxheUxvYWRlZCgpO1xuICAgICAgdGhpcy5zZXRDcmVkaXRzTG9hZGVkKCk7XG4gICAgICB0aGlzLnNldEtleXNMb2FkZWQoKTtcbiAgICAgIHRoaXMuc2V0U2NvcmVzTG9hZGVkKCk7XG4gICAgfVxuICAgIHRoaXMuZmlyc3RUaW1lTG9hZCA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHNldFBsYXlMb2FkZWQoKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gICAgdGhpcy5wbGF5RWxlbWVudC5pbm5lclRleHQgPSBcIlBsYXlcIjtcbiAgICB0aGlzLnBsYXlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5yZXF1ZXN0VHJhbnNpdGlvbihcInBsYXlcIiwgdHJ1ZSwgeyBsZXZlbDogMSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDcmVkaXRzTG9hZGVkKCk6IHZvaWQge1xuICAgIHRoaXMuY3JlZGl0c0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICAgIHRoaXMuY3JlZGl0c0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMucm91dGVyLnJlcXVlc3RUcmFuc2l0aW9uKFwiY3JlZGl0c1wiKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTY29yZXNMb2FkZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zY29yZXNFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgICB0aGlzLnNjb3Jlc0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMucm91dGVyLnJlcXVlc3RUcmFuc2l0aW9uKFwic2NvcmVzXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHNldEtleXNMb2FkZWQoKTogdm9pZCB7XG4gICAgdGhpcy5jb250cm9sc0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICAgIHRoaXMuY29udHJvbHNFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5yZXF1ZXN0VHJhbnNpdGlvbihcImtleXNcIik7XG4gICAgfSk7XG4gIH1cblxuICBpbml0KCk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNhblRyYW5zaXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjbGVhbnVwKCk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==