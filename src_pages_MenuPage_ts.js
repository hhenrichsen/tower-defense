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
//# sourceMappingURL=src_pages_MenuPage_ts.js.map