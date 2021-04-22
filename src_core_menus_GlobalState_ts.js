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
        console.log(val);

        if (this.typeGuard && !this.typeGuard(val)) {
          console.warn("Found invalid shape of persistent data ".concat(this.name, ", assigning to default."));

          var _res = Object.assign(this.getDefault(state), val);

          console.log(_res);
          return _res;
        }

        var res = Object.assign(this.getDefault(state), val);
        console.log(res);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lbGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2dhbWVsaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vZ2FtZWxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9nYW1lbGliLy4vc3JjL2NvcmUvZGF0YS9QZXJzaXN0ZW5jZS50cyIsIndlYnBhY2s6Ly9nYW1lbGliLy4vc3JjL2NvcmUvbWVudXMvR2xvYmFsU3RhdGUudHMiLCJ3ZWJwYWNrOi8vZ2FtZWxpYi8uL3NyYy9jb3JlL21lbnVzL1JvdXRlci50cyJdLCJuYW1lcyI6WyJQZXJzaXN0ZW5jZU1hbmFnZXIiLCJuYW1lIiwiaW5pdGlhbGl6ZXIiLCJ0eXBlR3VhcmQiLCJzdGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXREZWZhdWx0IiwidmFsIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsIndhcm4iLCJyZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJpbml0U3RhdGUiLCJwdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJCYXNlR2xvYmFsU3RhdGUiLCJkZWZhdWx0RGF0YSIsInJvdXRlciIsInBlcnNpc3RlbmNlIiwiZGF0YSIsIlNpbXBsZVJvdXRlciIsImdldCIsInNjb3JlIiwic2NvcmVzIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsInJldmVyc2UiLCJzbGljZSIsImFjdGlvbiIsImtleSIsImtleU1hcCIsIl9jdXJyZW50UGFnZSIsInVuZGVmaW5lZCIsIl90cmFuc2l0aW9uRGF0YSIsIl9wYWdlcyIsIl9oaXN0b3J5IiwicmVxdWVzdFRyYW5zaXRpb24iLCJfcmVxdWVzdFRyYW5zaXRpb24iLCJpZCIsInBhZ2UiLCJmbiIsInB1cmdlIiwiY2FuVHJhbnNpdGlvbiIsInBhZ2VzIiwiZWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiY2xhc3NMaXN0IiwiZm9yRWFjaCIsIml0IiwicmVtb3ZlIiwiYWRkIiwibG9hZCIsImluaXQiLCJiaW5kIiwicHJldiIsImNsZWFudXAiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2RlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JPLElBQU1BLGtCQUFiO0FBS0UsOEJBQ0VDLElBREYsRUFFRUMsV0FGRixFQUdFQyxTQUhGLEVBSUU7QUFBQTs7QUFBQSxTQVJNRCxXQVFOO0FBQUEsU0FQTUMsU0FPTjtBQUFBLFNBTk1GLElBTU47QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7O0FBYkg7QUFBQTtBQUFBLFdBZUUsYUFBSUcsS0FBSixFQUFpQjtBQUNmLFVBQUlDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixLQUFLTCxJQUExQixNQUFvQyxJQUF4QyxFQUE4QztBQUM1QyxlQUFPLEtBQUtNLFVBQUwsQ0FBZ0JILEtBQWhCLENBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFNSSxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsS0FBS0wsSUFBMUIsQ0FBWCxD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LENBQW9CLENBQUMsQ0FBckIsRUFBd0IsQ0FBeEIsQ0FBYjs7QUFDQSxVQUFJNkIsSUFBSSxLQUFLeEIsU0FBYixFQUF3QjtBQUN0QixhQUFLRCxZQUFMLENBQWtCMEIsT0FBbEIsQ0FBMEIsSUFBMUIsRUFBZ0M5RCxLQUFoQzs7QUFDQSxhQUFLd0MsUUFBTCxDQUFjdUIsTUFBZCxDQUFxQixDQUFDLENBQXRCLEVBQXlCLENBQXpCOztBQUNBLGFBQUt0QixpQkFBTCxDQUF1Qm9CLElBQXZCLEVBQTZCLEtBQTdCO0FBQ0Q7QUFDRjtBQTFFSDs7QUFBQTtBQUFBLEkiLCJmaWxlIjoic3JjX2NvcmVfbWVudXNfR2xvYmFsU3RhdGVfdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgY2xhc3MgUGVyc2lzdGVuY2VNYW5hZ2VyPFQsIFI+IHtcbiAgcHJpdmF0ZSBpbml0aWFsaXplcjogKHN0YXRlOiBUKSA9PiBSO1xuICBwcml2YXRlIHR5cGVHdWFyZDogKG9iajogdW5rbm93bikgPT4gYm9vbGVhbjtcbiAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGluaXRpYWxpemVyOiAoc3RhdGU6IFQpID0+IFIsXG4gICAgdHlwZUd1YXJkPzogKG9iajogdW5rbm93bikgPT4gYm9vbGVhblxuICApIHtcbiAgICB0aGlzLmluaXRpYWxpemVyID0gaW5pdGlhbGl6ZXI7XG4gICAgdGhpcy50eXBlR3VhcmQgPSB0eXBlR3VhcmQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldChzdGF0ZTogVCk6IFIge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXREZWZhdWx0KHN0YXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpKTtcbiAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgICBpZiAodGhpcy50eXBlR3VhcmQgJiYgIXRoaXMudHlwZUd1YXJkKHZhbCkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBGb3VuZCBpbnZhbGlkIHNoYXBlIG9mIHBlcnNpc3RlbnQgZGF0YSAke3RoaXMubmFtZX0sIGFzc2lnbmluZyB0byBkZWZhdWx0LmBcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih0aGlzLmdldERlZmF1bHQoc3RhdGUpLCB2YWwpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih0aGlzLmdldERlZmF1bHQoc3RhdGUpLCB2YWwpO1xuICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZhdWx0KHN0YXRlOiBUKTogUiB7XG4gICAgY29uc3QgaW5pdFN0YXRlID0gdGhpcy5pbml0aWFsaXplcihzdGF0ZSkgYXMgUjtcbiAgICB0aGlzLnB1dChpbml0U3RhdGUpO1xuICAgIHJldHVybiBpbml0U3RhdGU7XG4gIH1cblxuICBwdXQodmFsdWU6IFIpOiB2b2lkIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJhc2VQZXJzaXN0ZWREYXRhLCBTY29yZSB9IGZyb20gXCIuLi9kYXRhL0Jhc2VQZXJzaXN0ZWREYXRhXCI7XG5pbXBvcnQgeyBQZXJzaXN0ZW5jZU1hbmFnZXIgfSBmcm9tIFwiLi4vZGF0YS9QZXJzaXN0ZW5jZVwiO1xuaW1wb3J0IHsgU2ltcGxlUm91dGVyIH0gZnJvbSBcIi4vUm91dGVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2xvYmFsU3RhdGU8VCBleHRlbmRzIEJhc2VQZXJzaXN0ZWREYXRhPiB7XG4gIHJvdXRlcjogU2ltcGxlUm91dGVyPEdsb2JhbFN0YXRlPFQ+PjtcbiAgcGVyc2lzdGVuY2U6IFBlcnNpc3RlbmNlTWFuYWdlcjxHbG9iYWxTdGF0ZTxUPiwgQmFzZVBlcnNpc3RlZERhdGE+O1xuICBhZGRTY29yZShzY29yZTogU2NvcmUpOiB2b2lkO1xuICByZW1hcENvbnRyb2woYWN0aW9uOiBzdHJpbmcsIGtleTogc3RyaW5nKTogdm9pZDtcbiAgZ2V0RGF0YSgpOiBUO1xuICBzZXREYXRhKGRhdGE6IFQpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgQmFzZUdsb2JhbFN0YXRlPFQgZXh0ZW5kcyBCYXNlUGVyc2lzdGVkRGF0YT5cbiAgaW1wbGVtZW50cyBHbG9iYWxTdGF0ZTxUPiB7XG4gIHB1YmxpYyByb3V0ZXI6IFNpbXBsZVJvdXRlcjxHbG9iYWxTdGF0ZTxUPj47XG4gIHB1YmxpYyBwZXJzaXN0ZW5jZTogUGVyc2lzdGVuY2VNYW5hZ2VyPEdsb2JhbFN0YXRlPFQ+LCBCYXNlUGVyc2lzdGVkRGF0YT47XG4gIHByaXZhdGUgZGF0YTogVDtcblxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRlZmF1bHREYXRhOiBUKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSBuZXcgU2ltcGxlUm91dGVyPEdsb2JhbFN0YXRlPFQ+Pih0aGlzKTtcbiAgICB0aGlzLnBlcnNpc3RlbmNlID0gbmV3IFBlcnNpc3RlbmNlTWFuYWdlcjxHbG9iYWxTdGF0ZTxUPiwgVD4oXG4gICAgICBuYW1lLFxuICAgICAgKCkgPT4gZGVmYXVsdERhdGFcbiAgICApO1xuICAgIHRoaXMuZGF0YSA9IHRoaXMucGVyc2lzdGVuY2UuZ2V0KHRoaXMpIGFzIFQ7XG4gICAgdGhpcy5wZXJzaXN0ZW5jZS5wdXQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRTY29yZShzY29yZTogU2NvcmUpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEuc2NvcmVzLnB1c2goc2NvcmUpO1xuICAgIHRoaXMuZGF0YS5zY29yZXMuc29ydCgoYSwgYikgPT4gYS5zY29yZSAtIGIuc2NvcmUpLnJldmVyc2UoKTtcbiAgICB0aGlzLmRhdGEuc2NvcmVzID0gdGhpcy5kYXRhLnNjb3Jlcy5zbGljZSgwLCA1KTtcbiAgICB0aGlzLnBlcnNpc3RlbmNlLnB1dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgcHVibGljIHJlbWFwQ29udHJvbChhY3Rpb246IHN0cmluZywga2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEua2V5TWFwW2FjdGlvbl0gPSBrZXk7XG4gICAgdGhpcy5wZXJzaXN0ZW5jZS5wdXQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXRhKCk6IFQge1xuICAgIHJldHVybiB7IC4uLnRoaXMuZGF0YSB9O1xuICB9XG5cbiAgcHVibGljIHNldERhdGEoZGF0YTogVCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5wZXJzaXN0ZW5jZS5wdXQoZGF0YSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi9QYWdlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVyPFQ+IHtcbiAgcGFnZXM6IFJlY29yZDxzdHJpbmcsIFBhZ2U8VD4+O1xuICBjdXJyZW50UGFnZTogUGFnZTxUPjtcbiAgdHJhbnNpdGlvbkRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICByZXF1ZXN0VHJhbnNpdGlvbihcbiAgICBpZDogc3RyaW5nLFxuICAgIHB1cmdlPzogYm9vbGVhbixcbiAgICBkYXRhPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgKTogdm9pZDtcbiAgcHJldmlvdXMoc3RhdGU6IFQpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgU2ltcGxlUm91dGVyPFQ+IGltcGxlbWVudHMgUm91dGVyPFQ+IHtcbiAgcHJpdmF0ZSBfY3VycmVudFBhZ2U6IFBhZ2U8VD4gPSB1bmRlZmluZWQgYXMgUGFnZTxUPjtcbiAgcHJpdmF0ZSBfdHJhbnNpdGlvbkRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG4gIHByaXZhdGUgX3BhZ2VzOiBSZWNvcmQ8c3RyaW5nLCBQYWdlPFQ+PiA9IHt9O1xuICBwcml2YXRlIF9oaXN0b3J5OiBBcnJheTxzdHJpbmc+ID0gW107XG4gIHJlcXVlc3RUcmFuc2l0aW9uOiAoXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwdXJnZT86IGJvb2xlYW4sXG4gICAgZGF0YT86IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihzdGF0ZTogVCkge1xuICAgIHRoaXMucmVxdWVzdFRyYW5zaXRpb24gPSB0aGlzLl9yZXF1ZXN0VHJhbnNpdGlvbihzdGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgYWRkUGFnZShpZDogc3RyaW5nLCBwYWdlOiBQYWdlPFQ+KTogdm9pZCB7XG4gICAgaWYgKCEoaWQgaW4gdGhpcy5fcGFnZXMpKSB7XG4gICAgICB0aGlzLl9wYWdlc1tpZF0gPSBwYWdlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oYFRyeWluZyB0byByZWdpc3RlciBkdXBsaWNhdGUgcGFnZSAke2lkfSFgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHRyYW5zaXRpb25EYXRhKCk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvbkRhdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhZ2VzKCk6IFJlY29yZDxzdHJpbmcsIFBhZ2U8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGN1cnJlbnRQYWdlKCk6IFBhZ2U8VD4ge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50UGFnZTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcXVlc3RUcmFuc2l0aW9uKHN0YXRlOiBUKSB7XG4gICAgbGV0IGZuID0gZnVuY3Rpb24gKFxuICAgICAgaWQ6IHN0cmluZyxcbiAgICAgIHB1cmdlID0gZmFsc2UsXG4gICAgICBkYXRhPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICApIHtcbiAgICAgIGNvbnNvbGUubG9nKGBbUk9VVEVSXSBNb3ZpbmcgdG8gJHtpZH1gKTtcbiAgICAgIGlmICh0aGlzLl9wYWdlc1tpZF0gPT09IHVuZGVmaW5lZCB8fCB0aGlzLl9wYWdlc1tpZF0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9jdXJyZW50UGFnZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIHRoaXMuX2N1cnJlbnRQYWdlLmNhblRyYW5zaXRpb24odGhpcywgaWQpXG4gICAgICApIHtcbiAgICAgICAgaWYgKHB1cmdlKSB7XG4gICAgICAgICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hpc3RvcnkucHVzaChpZCk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRQYWdlID0gdGhpcy5wYWdlc1tpZF07XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25EYXRhID0gZGF0YTtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5mb3JFYWNoKChpdCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShpdCkpO1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGlkKTtcbiAgICAgICAgdGhpcy5fY3VycmVudFBhZ2UubG9hZChlbCwgdGhpcywgc3RhdGUpO1xuICAgICAgICB0aGlzLl9jdXJyZW50UGFnZS5pbml0KHRoaXMsIHN0YXRlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZuID0gZm4uYmluZCh0aGlzKTtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBwcmV2aW91cyhzdGF0ZTogVCk6IHZvaWQge1xuICAgIGNvbnN0IHByZXYgPSB0aGlzLl9oaXN0b3J5LnNsaWNlKC0yKVswXTtcbiAgICBpZiAocHJldiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9jdXJyZW50UGFnZS5jbGVhbnVwKHRoaXMsIHN0YXRlKTtcbiAgICAgIHRoaXMuX2hpc3Rvcnkuc3BsaWNlKC0yLCAyKTtcbiAgICAgIHRoaXMucmVxdWVzdFRyYW5zaXRpb24ocHJldiwgZmFsc2UpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==