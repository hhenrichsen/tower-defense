(self["webpackChunkgamelib"] = self["webpackChunkgamelib"] || []).push([["src_content_GameModel_ts"],{

/***/ "./src/content/GameModel.ts":
/*!**********************************!*\
  !*** ./src/content/GameModel.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameModel": () => (/* binding */ GameModel)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_components_data_Position__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/components/data/Rotation */ "./src/core/components/data/Rotation.ts");
/* harmony import */ var _core_data_ActionMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/data/ActionMap */ "./src/core/data/ActionMap.ts");
/* harmony import */ var _core_data_BaseGameModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/data/BaseGameModel */ "./src/core/data/BaseGameModel.ts");
/* harmony import */ var _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _core_rendering_ParticleManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/rendering/ParticleManager */ "./src/core/rendering/ParticleManager.ts");
/* harmony import */ var _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/rendering/Texture */ "./src/core/rendering/Texture.ts");
/* harmony import */ var _core_components_data_Footprint__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/components/data/Footprint */ "./src/core/components/data/Footprint.ts");
/* harmony import */ var _core_components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/components/rendering/Sprite */ "./src/core/components/rendering/Sprite.ts");
/* harmony import */ var _core_components_behavior_Lifetime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/components/behavior/Lifetime */ "./src/core/components/behavior/Lifetime.ts");
/* harmony import */ var _core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _core_components_marker_Sellable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/components/marker/Sellable */ "./src/core/components/marker/Sellable.ts");
/* harmony import */ var _systems_BaseRenderSystem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./systems/BaseRenderSystem */ "./src/content/systems/BaseRenderSystem.ts");
/* harmony import */ var _systems_WeaponSystem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./systems/WeaponSystem */ "./src/content/systems/WeaponSystem.ts");
/* harmony import */ var _systems_DamageTargetSystem__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./systems/DamageTargetSystem */ "./src/content/systems/DamageTargetSystem.ts");
/* harmony import */ var _systems_SplashDamageSystem__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./systems/SplashDamageSystem */ "./src/content/systems/SplashDamageSystem.ts");
/* harmony import */ var _towers_MinigunTower__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./towers/MinigunTower */ "./src/content/towers/MinigunTower.ts");
/* harmony import */ var _towers_MissileTower__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./towers/MissileTower */ "./src/content/towers/MissileTower.ts");
/* harmony import */ var _towers_SwarmerTower__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./towers/SwarmerTower */ "./src/content/towers/SwarmerTower.ts");
/* harmony import */ var _towers_SniperTower__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./towers/SniperTower */ "./src/content/towers/SniperTower.ts");
/* harmony import */ var _GameUI__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./GameUI */ "./src/content/GameUI.ts");
/* harmony import */ var _core_components_behavior_Upgrade__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../core/components/behavior/Upgrade */ "./src/core/components/behavior/Upgrade.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _core_components_behavior_Spawner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../core/components/behavior/Spawner */ "./src/core/components/behavior/Spawner.ts");
/* harmony import */ var _particles_Blood__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./particles/Blood */ "./src/content/particles/Blood.ts");
/* harmony import */ var _towers_TowerManager__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./towers/TowerManager */ "./src/content/towers/TowerManager.ts");
/* harmony import */ var _PathChecker__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./PathChecker */ "./src/content/PathChecker.ts");
/* harmony import */ var _core_components_rendering_LowSprite__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../core/components/rendering/LowSprite */ "./src/core/components/rendering/LowSprite.ts");
/* harmony import */ var _creeps_CreepManager__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./creeps/CreepManager */ "./src/content/creeps/CreepManager.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _core_components_data_Velocity__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../core/components/data/Velocity */ "./src/core/components/data/Velocity.ts");
/* harmony import */ var _core_components_ui_TextRender__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../core/components/ui/TextRender */ "./src/core/components/ui/TextRender.ts");
/* harmony import */ var _core_SoundEffect__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../core/SoundEffect */ "./src/core/SoundEffect.ts");
/* harmony import */ var _GlobalUtil__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./GlobalUtil */ "./src/content/GlobalUtil.ts");
/* harmony import */ var _core_SoundEffectPool__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../core/SoundEffectPool */ "./src/core/SoundEffectPool.ts");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




































var GameModel = /*#__PURE__*/function (_BaseGameModel) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(GameModel, _BaseGameModel);

  var _super = _createSuper(GameModel);

  function GameModel() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, GameModel);

    _this = _super.call(this, new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__.default(40, 30));
    _this.particleManager = void 0;
    _this.unstructured = void 0;
    _this.lives = 20;
    _this.money = 30;
    _this.wave = void 0;
    _this.waveSet = void 0;
    _this.persistence = void 0;
    _this._actionMap = void 0;
    _this.eastWestPath = [];
    _this.northSouthPath = void 0;
    _this.actionQueue = void 0;
    _this.mouseEntity = null;
    _this.towerManager = void 0;
    _this.pathChecker = void 0;
    _this.floorTile = new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_13__.Texture("assets/FloorTile.png");
    _this.creepManager = void 0;
    _this.activeTower = null;
    _this.northSpawnerID = -1;
    _this.eastSpawnerID = -1;
    _this.score = 0;
    _this.arrow = new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_13__.Texture("assets/Arrow.png");
    _this.getEastWestPath = void 0;
    _this.getNorthSouthPath = void 0;
    _this.first = true;
    _this.audioLoop = new _core_SoundEffect__WEBPACK_IMPORTED_MODULE_39__.SoundEffect("assets/loop.mp3", 147, true);
    _this.turretFireSound = new _core_SoundEffectPool__WEBPACK_IMPORTED_MODULE_41__.SoundEffectPool(10, "assets/gun.mp3", 0.6, 2);
    _this.sellSound = new _core_SoundEffectPool__WEBPACK_IMPORTED_MODULE_41__.SoundEffectPool(5, "assets/sell.mp3", 0, 3);
    _this.creepDeathSound = new _core_SoundEffectPool__WEBPACK_IMPORTED_MODULE_41__.SoundEffectPool(5, "assets/crunch.mp3", 0, 1);
    _this.creepEscapeSound = new _core_SoundEffectPool__WEBPACK_IMPORTED_MODULE_41__.SoundEffectPool(3, "assets/escape.mp3", 0, 1);
    _this.buildSound = new _core_SoundEffect__WEBPACK_IMPORTED_MODULE_39__.SoundEffect("assets/construction.mp3", 2);
    var persistedData = ___WEBPACK_IMPORTED_MODULE_36__.globalState.persistence.get((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    var keyMap = persistedData.keyMap;
    _this._actionMap = new _core_data_ActionMap__WEBPACK_IMPORTED_MODULE_9__.ActionMap();

    _this.initActions();

    _this.towerManager = new _towers_TowerManager__WEBPACK_IMPORTED_MODULE_32__.TowerManager((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), _this.ecs);
    _this.pathChecker = new _PathChecker__WEBPACK_IMPORTED_MODULE_33__.PathChecker((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    _this.getEastWestPath = _this._getEastWestPath.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    _this.getNorthSouthPath = _this._getNorthSouthPath.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    _this.creepManager = new _creeps_CreepManager__WEBPACK_IMPORTED_MODULE_35__.CreepManager((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    _this.particleManager = new _core_rendering_ParticleManager__WEBPACK_IMPORTED_MODULE_12__.ParticleManager();

    _this.initParticleEffects();

    _this.mouse.addListener(_this.handleClick.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this)));

    _this.towerManager.add("tower-1", _towers_MinigunTower__WEBPACK_IMPORTED_MODULE_23__.MinigunTower);

    _this.towerManager.add("tower-2", _towers_MissileTower__WEBPACK_IMPORTED_MODULE_24__.MissileTower);

    _this.towerManager.add("tower-3", _towers_SwarmerTower__WEBPACK_IMPORTED_MODULE_25__.SwarmerTower);

    _this.towerManager.add("tower-4", _towers_SniperTower__WEBPACK_IMPORTED_MODULE_26__.SniperTower);

    _this.ecs.listenEvent("weapon:fire", function (evt) {
      if ((0,_GlobalUtil__WEBPACK_IMPORTED_MODULE_40__.isAudioEnabled)()) {
        _this.turretFireSound.play();
      }
    });

    _this.ecs.listenEvent("sellable:sell", function (evt) {
      var extra = evt.extra;
      var position = extra.position;

      var ent = _this.ecs.createEntity();

      _this.ecs.addComponent(ent, _core_components_data_Position__WEBPACK_IMPORTED_MODULE_7__.PositionComponent, {
        position: position.position
      });

      _this.ecs.addComponent(ent, _core_components_behavior_Spawner__WEBPACK_IMPORTED_MODULE_30__.default, {
        producer: _particles_Blood__WEBPACK_IMPORTED_MODULE_31__.makeBlood,
        rate: 10,
        elapsed: 10,
        count: 30
      });

      _this.ecs.addComponent(ent, _core_components_behavior_Lifetime__WEBPACK_IMPORTED_MODULE_16__.LifetimeComponent, {
        lifetime: 1.5
      });

      if ((0,_GlobalUtil__WEBPACK_IMPORTED_MODULE_40__.isAudioEnabled)()) {
        _this.sellSound.play();
      }
    });

    _this.ecs.listenEvent("pathFollower:done", function (evt) {
      _this.lives--;

      _this.ecs.removeEntity(evt.entity);

      if ((0,_GlobalUtil__WEBPACK_IMPORTED_MODULE_40__.isAudioEnabled)()) {
        _this.creepEscapeSound.play();
      }

      if (_this.lives <= 0) {
        _this.running = false;

        _this.entityMap.clear();

        _this.audioLoop.stop();

        _this.ecs.clear();

        ___WEBPACK_IMPORTED_MODULE_36__.globalState.router.requestTransition("scores", false, {
          score: _this.score
        });
      }
    });

    _this.ecs.listenEvent("health:die", function (evt) {
      var extra = evt.extra;
      var position = extra.position;
      _this.money += 5;
      _this.score += 5;

      var ent = _this.ecs.createEntity();

      _this.ecs.addComponent(ent, _core_components_data_Position__WEBPACK_IMPORTED_MODULE_7__.PositionComponent, {
        position: position.position
      });

      _this.ecs.addComponent(ent, _core_components_data_Velocity__WEBPACK_IMPORTED_MODULE_37__.VelocityComponent, {
        velocity: new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__.default(0, -0.5)
      });

      _this.ecs.addComponent(ent, _core_components_ui_TextRender__WEBPACK_IMPORTED_MODULE_38__.default, {
        text: "+5",
        style: "#ffffff"
      });

      _this.ecs.addComponent(ent, _core_components_behavior_Spawner__WEBPACK_IMPORTED_MODULE_30__.default, {
        producer: _particles_Blood__WEBPACK_IMPORTED_MODULE_31__.makeBlood,
        rate: 10,
        elapsed: 10,
        count: 30
      });

      _this.ecs.addComponent(ent, _core_components_behavior_Lifetime__WEBPACK_IMPORTED_MODULE_16__.LifetimeComponent, {
        lifetime: 1.5
      });

      if ((0,_GlobalUtil__WEBPACK_IMPORTED_MODULE_40__.isAudioEnabled)()) {
        _this.creepDeathSound.play();
      }
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(GameModel, [{
    key: "sendWave",
    value: function sendWave() {
      var northSpawner = this.ecs.getEntity(this.northSpawnerID);
      var eastSpawner = this.ecs.getEntity(this.eastSpawnerID);
      var _northSpawner$data = northSpawner.data,
          northSpawnerData = _northSpawner$data.spawner,
          northSprite = _northSpawner$data.sprite;
      var _eastSpawner$data = eastSpawner.data,
          eastSpawnerData = _eastSpawner$data.spawner,
          eastSprite = _eastSpawner$data.sprite;

      if (northSpawnerData.total < northSpawnerData.limit) {
        return;
      }

      if (eastSpawnerData.total < eastSpawnerData.limit) {
        return;
      }

      var _this$creepManager$ge = this.creepManager.getEastWave(),
          eastCount = _this$creepManager$ge.count,
          eastEntity = _this$creepManager$ge.entity;

      eastSpawnerData.producer = eastEntity;
      eastSpawnerData.rate = 1 / this.creepManager.getStatModifier();
      eastSpawnerData.total = 0;
      eastSpawnerData.limit = eastCount;

      if (this.creepManager.nextEast()) {
        eastSprite.size = _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__.default.ONES;
      } else {
        eastSprite.size = _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__.default.ZERO;
      }

      console.log("East count " + eastCount);

      var _this$creepManager$ge2 = this.creepManager.getNorthWave(),
          northCount = _this$creepManager$ge2.count,
          northEntity = _this$creepManager$ge2.entity;

      northSpawnerData.producer = northEntity;
      northSpawnerData.rate = 1 / this.creepManager.getStatModifier();
      northSpawnerData.total = 0;
      northSpawnerData.limit = northCount;

      if (this.creepManager.nextNorth()) {
        northSprite.size = _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__.default.ONES;
      } else {
        northSprite.size = _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__.default.ZERO;
      }

      console.log("North count " + northCount);
      this.creepManager.nextWave();
    }
  }, {
    key: "initActions",
    value: function initActions() {
      this._actionMap.createAction("upgrade", true);

      this._actionMap.createAction("sell", true);

      this._actionMap.createAction("wave", true);

      this._actionMap.createAction("clear");

      this._actionMap.createAction("setTower");

      this._actionMap.createAction("exit");
    }
  }, {
    key: "initParticleEffects",
    value: function initParticleEffects() {
      this.particleManager.addEffectManager;
    }
  }, {
    key: "createSpawner",
    value: function createSpawner(position, east) {
      var eid = this.ecs.createEntity();
      this.ecs.addComponent(eid, _core_components_data_Position__WEBPACK_IMPORTED_MODULE_7__.PositionComponent, {
        position: position
      });
      this.ecs.addComponent(eid, _core_components_behavior_Spawner__WEBPACK_IMPORTED_MODULE_30__.default, {
        limit: 0,
        rate: 1,
        count: 1
      });
      this.ecs.addComponent(eid, _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_8__.RotationComponent);
      this.ecs.addComponent(eid, _core_components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_15__.default, {
        source: this.arrow,
        size: east ? _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__.default.ONES : _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__.default.ZERO,
        rotationOffset: east ? 0 : 90
      });
      return eid;
    }
  }, {
    key: "preStart",
    value: function preStart() {
      var _this2 = this;

      var persistedData = ___WEBPACK_IMPORTED_MODULE_36__.globalState.persistence.get(this);
      var keyMap = persistedData.keyMap;
      console.log(keyMap);

      this._actionMap.clearListeners();

      this.keys.clearListeners();

      var _loop = function _loop() {
        var action = _Object$keys[_i];

        _this2.keys.addKeyListener(keyMap[action], function (evt) {
          if (!evt.down) return;

          _this2._actionMap.invoke(action);
        });
      };

      for (var _i = 0, _Object$keys = Object.keys(keyMap); _i < _Object$keys.length; _i++) {
        _loop();
      }

      this.keys.addKeyListener("escape", function () {
        _this2._actionMap.invoke("clear");
      });
      this.keys.addKeyListener("]", function (evt) {
        if (!evt.down) return;
        _this2.paused = !_this2.paused;
      });
      this.timeScale = 1;
      this.keys.addKeyListener("[", function (evt) {
        if (!evt.down) return;

        if (_this2.timeScale < 2) {
          _this2.timeScale = 2;
        } else {
          _this2.timeScale = 1;
        }
      });

      this._actionMap.addHandler("sell", this.attemptSell.bind(this));

      this._actionMap.addHandler("wave", this.sendWave.bind(this));

      this._actionMap.addHandler("upgrade", this.attemptUpgrade.bind(this));

      this._actionMap.addHandler("clear", this.clearMouseMode.bind(this));

      this._actionMap.addHandler("setTower", this.setMouseMode.bind(this));

      this._actionMap.addHandler("exit", function () {
        _this2.running = false;

        _this2.entityMap.clear();

        _this2.audioLoop.stop();

        _this2.ecs.clear();

        ___WEBPACK_IMPORTED_MODULE_36__.globalState.router.requestTransition("home");
      });

      this.entityMap.clear();
      this.running = true;
      this.ecs.clear();
      this.money = 30;
      this.lives = 20;
      this.score = 0;

      if ((0,_GlobalUtil__WEBPACK_IMPORTED_MODULE_40__.isAudioEnabled)()) {
        this.audioLoop.play();
      } // if (!this.first) {
      //   return;
      // }


      this.first = false;
      (0,_GameUI__WEBPACK_IMPORTED_MODULE_27__.createUI)(this.ecs, this);
      this.northSouthPath = this.getPath().findNorthSouth(new Set());
      this.eastWestPath = this.getPath().findEastWest(new Set());
      this.northSpawnerID = this.createSpawner(new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__.default(25, 0), false);
      this.eastSpawnerID = this.createSpawner(new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__.default(10, 15), true);

      for (var y = 0; y < 30; y++) {
        for (var x = 10; x < 40; x++) {
          var floorTile = this.ecs.createEntity();
          this.ecs.addComponent(floorTile, _core_components_data_Position__WEBPACK_IMPORTED_MODULE_7__.PositionComponent, {
            position: new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__.default(x, y)
          });
          this.ecs.addComponent(floorTile, _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_8__.RotationComponent);
          this.ecs.addComponent(floorTile, _core_components_rendering_LowSprite__WEBPACK_IMPORTED_MODULE_34__.default, {
            source: this.floorTile
          });
        }
      }

      for (var i = 10; i < 40; i++) {
        if (i >= 23 && i <= 27) continue;
        this.createBlocker(new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__.default(i, 0));
        this.createBlocker(new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__.default(i, 29));
      }

      for (var _i2 = 1; _i2 < 29; _i2++) {
        if (_i2 >= 13 && _i2 <= 17) continue;
        this.createBlocker(new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__.default(10, _i2));
        this.createBlocker(new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__.default(39, _i2));
      }
    }
  }, {
    key: "addSystems",
    value: function addSystems() {
      this.ecs.createSystem(new _systems_WeaponSystem__WEBPACK_IMPORTED_MODULE_20__.WeaponSystem(), -1);
      this.ecs.createSystem(new _systems_BaseRenderSystem__WEBPACK_IMPORTED_MODULE_19__.TurretBaseRenderSystem(this.virtualCanvas), 47);
      this.ecs.createSystem(new _systems_DamageTargetSystem__WEBPACK_IMPORTED_MODULE_21__.DamageTargetSystem());
      this.ecs.createSystem(new _systems_SplashDamageSystem__WEBPACK_IMPORTED_MODULE_22__.SplashDamageSystem());
    }
  }, {
    key: "handleClick",
    value: function handleClick(interaction) {
      if (this.activeTower === null || !interaction.leftDown) return;
      this.buildTower(interaction.coordinate, this.activeTower);
    }
  }, {
    key: "clearMouseMode",
    value: function clearMouseMode() {
      if (this.mouseEntity === null) {
        return;
      }

      this.setSelection(-1);
      this.ecs.removeEntity(this.mouseEntity.id);
      this.mouseEntity = null;
      this.activeTower = null;
    }
  }, {
    key: "setMouseMode",
    value: function setMouseMode(_action, data) {
      console.log("Setting mouse mode");
      var towerName = data["tower"];
      this.activeTower = towerName;

      if (this.mouseEntity !== null) {
        this.clearMouseMode();
      }

      var id = this.towerManager.createDemoTower(this.getMousePosition, towerName);
      this.mouseEntity = this.ecs.getEntity(id);
      this.setSelection(id);
    }
  }, {
    key: "attemptSell",
    value: function attemptSell() {
      var entity = this.getSelection();

      if (entity === null) {
        return;
      }

      if (this.ecs.hasComponent(entity.id, _core_components_marker_Sellable__WEBPACK_IMPORTED_MODULE_18__.default)) {
        var value = entity.data.value.value;
        this.ecs.emitEvent("sellable:sell", entity, _objectSpread({}, entity.data));
        this.money += (0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_17__.getDynamic)(value);
        this.ecs.removeEntity(entity.id);
        this.invalidateSelection();
      }
    }
  }, {
    key: "attemptUpgrade",
    value: function attemptUpgrade() {
      console.log("Attempting upgrade...");
      var entity = this.getSelection();

      if (entity === null) {
        console.log("Selection is null");
        return;
      }

      if (!this.ecs.hasComponent(entity, _core_components_behavior_Upgrade__WEBPACK_IMPORTED_MODULE_28__.default)) {
        console.log("Cannot be upgraded.");
        return;
      }

      var targetEntity = entity;
      console.log(entity.data.upgrade);
      var cost = (0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_17__.getDynamic)(entity.data.upgrade.cost);

      if (cost > this.money) {
        console.log("Not enough money");
        return;
      }

      console.log("Upgrade done");
      this.money -= cost;
      targetEntity.data = (0,lodash__WEBPACK_IMPORTED_MODULE_29__.merge)(targetEntity.data, entity.data.upgrade.dataDelta);
    }
  }, {
    key: "buildTower",
    value: function buildTower(position, tower) {
      if (this.towerManager.canPlace((0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_17__.getDynamic)(position), tower)) {
        this.towerManager.createTower((0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_17__.getDynamic)(position), tower);
        this.money -= this.towerManager.getTower(tower).cost;

        if ((0,_GlobalUtil__WEBPACK_IMPORTED_MODULE_40__.isAudioEnabled)()) {
          this.buildSound.play();
        }
      }
    }
  }, {
    key: "createBlocker",
    value: function createBlocker(position) {
      var blockerID = this.ecs.createEntity();
      this.ecs.addComponent(blockerID, _core_components_data_Position__WEBPACK_IMPORTED_MODULE_7__.PositionComponent, {
        position: position.floor()
      });
      this.ecs.addComponent(blockerID, _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_8__.RotationComponent);
      this.ecs.addComponent(blockerID, _core_components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_15__.default, {
        source: new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_13__.Texture("assets/blocker.png")
      });
      this.ecs.addComponent(blockerID, _core_components_data_Footprint__WEBPACK_IMPORTED_MODULE_14__.FootprintComponent, {
        size: 1
      });
    }
  }, {
    key: "actionMap",
    get: function get() {
      return this._actionMap.asImmutable();
    }
  }, {
    key: "getMap",
    value: function getMap() {
      return this.entityMap;
    }
  }, {
    key: "getVirtualSize",
    value: function getVirtualSize() {
      return this.virtualSize;
    }
  }, {
    key: "setNorthSouthPath",
    value: function setNorthSouthPath(northSouthPath) {
      this.northSouthPath = northSouthPath;
    }
  }, {
    key: "setEastWestPath",
    value: function setEastWestPath(eastWestPath) {
      this.eastWestPath = eastWestPath;
    }
  }, {
    key: "_getEastWestPath",
    value: function _getEastWestPath() {
      return this.eastWestPath;
    }
  }, {
    key: "_getNorthSouthPath",
    value: function _getNorthSouthPath() {
      return this.northSouthPath;
    }
  }, {
    key: "getPath",
    value: function getPath() {
      return this.pathChecker;
    }
  }]);

  return GameModel;
}(_core_data_BaseGameModel__WEBPACK_IMPORTED_MODULE_10__.BaseGameModel);

/***/ }),

/***/ "./src/content/GameUI.ts":
/*!*******************************!*\
  !*** ./src/content/GameUI.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUI": () => (/* binding */ createUI)
/* harmony export */ });
/* harmony import */ var _core_components_behavior_click_AbstractClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/components/behavior/click/AbstractClick */ "./src/core/components/behavior/click/AbstractClick.ts");
/* harmony import */ var _core_components_behavior_click_Clickable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/components/behavior/click/Clickable */ "./src/core/components/behavior/click/Clickable.ts");
/* harmony import */ var _core_components_data_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _core_components_ui_ClickableDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/components/ui/ClickableDisplay */ "./src/core/components/ui/ClickableDisplay.ts");
/* harmony import */ var _core_components_ui_RegionRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/components/ui/RegionRender */ "./src/core/components/ui/RegionRender.ts");
/* harmony import */ var _core_components_ui_TextRender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/components/ui/TextRender */ "./src/core/components/ui/TextRender.ts");
/* harmony import */ var _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/geometry/Vector2 */ "./src/core/geometry/Vector2.ts");








function createUIText(ecs, position, text, style, size, align) {
  var el = ecs.createEntity();
  ecs.addComponent(el, _core_components_data_Position__WEBPACK_IMPORTED_MODULE_2__.PositionComponent, {
    position: position
  });
  ecs.addComponent(el, _core_components_ui_TextRender__WEBPACK_IMPORTED_MODULE_5__.default, {
    text: text,
    style: style,
    size: size,
    align: align
  });
}

function createUIRegion(ecs, position, delta) {
  var clickable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var action = arguments.length > 4 ? arguments[4] : undefined;
  var el = ecs.createEntity();
  ecs.addComponent(el, _core_components_data_Position__WEBPACK_IMPORTED_MODULE_2__.PositionComponent, {
    position: position
  });

  if (!clickable && delta) {
    ecs.addComponent(el, _core_components_ui_RegionRender__WEBPACK_IMPORTED_MODULE_4__.RegionComponent, {
      delta: delta
    });
  } else {
    ecs.addComponent(el, _core_components_behavior_click_Clickable__WEBPACK_IMPORTED_MODULE_1__.ClickableComponent, {
      delta: delta
    });
    ecs.addComponent(el, _core_components_behavior_click_AbstractClick__WEBPACK_IMPORTED_MODULE_0__.AbstractClickComponent, {
      action: action
    });
    ecs.addComponent(el, _core_components_ui_ClickableDisplay__WEBPACK_IMPORTED_MODULE_3__.ClickableDisplayComponent, {});
  }

  return el;
}

function createUI(ecs, model) {
  createUIRegion(ecs, new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(5, 15), new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(5, 15));
  createUIText(ecs, new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(5, 1), "Tower Defense", "#ffffff", 2);
  createUIText(ecs, new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(2.5, 2), function () {
    return "Lives: " + model.lives.toFixed(0);
  }, "#ffffff");
  createUIText(ecs, new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(7.5, 2), function () {
    return "Money: " + model.money.toFixed(0);
  }, "#ffffff");
  createUIText(ecs, new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(5, 4), "Towers", "#ffffff");
  var tower1 = createUIRegion(ecs, new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(2, 5), new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(0.5, 0.5), true, function () {
    return model.actionMap.invoke("setTower", {
      tower: "tower-1"
    });
  });
  ecs.addComponent(tower1, _core_components_ui_TextRender__WEBPACK_IMPORTED_MODULE_5__.default, {
    text: "1",
    style: "#ffffff"
  });
  var tower2 = createUIRegion(ecs, new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(4, 5), new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(0.5, 0.5), true, function () {
    return model.actionMap.invoke("setTower", {
      tower: "tower-2"
    });
  });
  ecs.addComponent(tower2, _core_components_ui_TextRender__WEBPACK_IMPORTED_MODULE_5__.default, {
    text: "2",
    style: "#ffffff"
  });
  var tower3 = createUIRegion(ecs, new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(6, 5), new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(0.5, 0.5), true, function () {
    return model.actionMap.invoke("setTower", {
      tower: "tower-3"
    });
  });
  ecs.addComponent(tower3, _core_components_ui_TextRender__WEBPACK_IMPORTED_MODULE_5__.default, {
    text: "3",
    style: "#ffffff"
  });
  var tower4 = createUIRegion(ecs, new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(8, 5), new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(0.5, 0.5), true, function () {
    return model.actionMap.invoke("setTower", {
      tower: "tower-4"
    });
  });
  ecs.addComponent(tower4, _core_components_ui_TextRender__WEBPACK_IMPORTED_MODULE_5__.default, {
    text: "4",
    style: "#ffffff"
  });
  createUIText(ecs, new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(5, 7), "Selected", "#ffffff");
  createUIText(ecs, new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(1, 8), function () {
    var sel = model.getSelection();

    if (sel !== null) {
      var val = "";

      if ("name" in sel.data) {
        val += sel.data.name.name + "\n";
      }

      if ("health" in sel.data) {
        val += "Health: " + sel.data.health.health.toFixed(0) + "\n";
      }

      if ("value" in sel.data) {
        val += "Value: " + sel.data.value.value.toFixed(0) + "\n";
      }

      if ("weapon" in sel.data) {
        var weapon = sel.data.weapon;
        val += "Ready to Fire: " + weapon.canFire + "\n";
        val += "Fire Rate: " + (1 / weapon.rate).toFixed(2) + " per second" + "\n";
        val += "Damage: " + weapon.projectileType.damage.toFixed(2) + "\n";
        val += "Can Target: " + weapon.tags.join(", ") + "\n";
      }

      if ("upgrade" in sel.data && sel.data.upgrade.cost > 0) {
        val += "Upgrade cost: " + sel.data.upgrade.cost.toFixed(0) + "\n";
      }

      return val;
    }

    return "";
  }, "#ffffff", 1, "left");
  var sellButton = createUIRegion(ecs, new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(2.675, 24), new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(2.125, 1), true, function () {
    return model.actionMap.invoke("sell");
  });
  ecs.addComponent(sellButton, _core_components_ui_TextRender__WEBPACK_IMPORTED_MODULE_5__.default, {
    text: "Sell",
    style: "#ffffff"
  });
  var upgradeButton = createUIRegion(ecs, new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(7.375, 24), new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(2.125, 1), true, function () {
    return model.actionMap.invoke("upgrade");
  });
  ecs.addComponent(upgradeButton, _core_components_ui_TextRender__WEBPACK_IMPORTED_MODULE_5__.default, {
    text: "Upgrade",
    style: "#ffffff"
  });
  var nextWave = createUIRegion(ecs, new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(5, 26.5), new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(4.5, 1), true, function () {
    return model.actionMap.invoke("wave");
  });
  ecs.addComponent(nextWave, _core_components_ui_TextRender__WEBPACK_IMPORTED_MODULE_5__.default, {
    text: "Send Next Wave",
    style: "#ffffff"
  });
  var exitButton = createUIRegion(ecs, new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(5, 29), new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default(4.5, 1), true, function () {
    return model.actionMap.invoke("exit");
  });
  ecs.addComponent(exitButton, _core_components_ui_TextRender__WEBPACK_IMPORTED_MODULE_5__.default, {
    text: "Exit",
    style: "#ffffff"
  });
}

/***/ }),

/***/ "./src/content/GlobalUtil.ts":
/*!***********************************!*\
  !*** ./src/content/GlobalUtil.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAudioEnabled": () => (/* binding */ isAudioEnabled)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");

function isAudioEnabled() {
  return ___WEBPACK_IMPORTED_MODULE_0__.globalState.getData().audio;
}

/***/ }),

/***/ "./src/content/PathChecker.ts":
/*!************************************!*\
  !*** ./src/content/PathChecker.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PathChecker": () => (/* binding */ PathChecker)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _core_data_Pathfinder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/data/Pathfinder */ "./src/core/data/Pathfinder.ts");
/* harmony import */ var _core_geometry_Direction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/geometry/Direction */ "./src/core/geometry/Direction.ts");
/* harmony import */ var _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/geometry/Vector2 */ "./src/core/geometry/Vector2.ts");





var PathChecker = /*#__PURE__*/function () {
  function PathChecker(model) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PathChecker);

    this.model = model;
    this.southEnd = new Set();
    this.eastEnd = new Set();
    this.southEnd.add(new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_4__.default(19, 30));
    this.southEnd.add(new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_4__.default(20, 30));
    this.southEnd.add(new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_4__.default(21, 30));
    this.southEnd.add(new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_4__.default(22, 30));
    this.southEnd.add(new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_4__.default(23, 30));
    this.eastEnd.add(new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_4__.default(39, 13));
    this.eastEnd.add(new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_4__.default(39, 14));
    this.eastEnd.add(new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_4__.default(39, 15));
    this.eastEnd.add(new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_4__.default(39, 16));
    this.eastEnd.add(new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_4__.default(39, 17));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PathChecker, [{
    key: "findEastWest",
    value: function findEastWest(blocked) {
      var compress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var eastWestPath = _core_data_Pathfinder__WEBPACK_IMPORTED_MODULE_2__.Pathfinder.findPath(this.model.getMap(), new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_4__.default(10, 15), this.eastEnd, _core_geometry_Direction__WEBPACK_IMPORTED_MODULE_3__.Direction.getAllCardinal(), new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_4__.default(10, 0), this.model.getVirtualSize(), blocked, compress);
      return eastWestPath;
    }
  }, {
    key: "findNorthSouth",
    value: function findNorthSouth(blocked) {
      var compress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var northSouthPath = _core_data_Pathfinder__WEBPACK_IMPORTED_MODULE_2__.Pathfinder.findPath(this.model.getMap(), new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_4__.default(25, 0), this.southEnd, _core_geometry_Direction__WEBPACK_IMPORTED_MODULE_3__.Direction.getAllCardinal(), new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_4__.default(10, 0), this.model.getVirtualSize(), blocked, compress);
      return northSouthPath;
    }
  }]);

  return PathChecker;
}();

/***/ }),

/***/ "./src/content/components/BaseComponent.ts":
/*!*************************************************!*\
  !*** ./src/content/components/BaseComponent.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TurretBase": () => (/* binding */ TurretBase),
/* harmony export */   "TurretBaseComponent": () => (/* binding */ TurretBaseComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_ecs_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _core_ecs_decorators_AutoName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/ecs/decorators/AutoName */ "./src/core/ecs/decorators/AutoName.ts");
/* harmony import */ var _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/rendering/Texture */ "./src/core/rendering/Texture.ts");






var _class, _class2, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var TurretBase = (0,_core_ecs_decorators_AutoName__WEBPACK_IMPORTED_MODULE_6__.AutoName)(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(TurretBase, _Component);

  var _super = _createSuper(TurretBase);

  function TurretBase() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, TurretBase);

    _this = _super.call(this);

    if (TurretBase.NO_TEXTURE === undefined) {
      TurretBase.NO_TEXTURE = new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_8__.Texture("assets/notex.png", _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.matching(32));
    }

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(TurretBase, [{
    key: "defaultData",
    value: function defaultData() {
      return {
        source: TurretBase.NO_TEXTURE,
        offset: _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.ZERO
      };
    }
  }]);

  return TurretBase;
}(_core_ecs_Component__WEBPACK_IMPORTED_MODULE_5__.Component), _class2.NO_TEXTURE = undefined, _temp)) || _class;
var TurretBaseComponent = new TurretBase();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TurretBaseComponent);

/***/ }),

/***/ "./src/content/components/Creep.ts":
/*!*****************************************!*\
  !*** ./src/content/components/Creep.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Creep": () => (/* binding */ Creep),
/* harmony export */   "CreepComponent": () => (/* binding */ CreepComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_ecs_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _core_ecs_decorators_AutoName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/ecs/decorators/AutoName */ "./src/core/ecs/decorators/AutoName.ts");






var _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Creep = (0,_core_ecs_decorators_AutoName__WEBPACK_IMPORTED_MODULE_6__.AutoName)(_class = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Creep, _Component);

  var _super = _createSuper(Creep);

  function Creep() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Creep);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Creep, [{
    key: "defaultData",
    value: function defaultData() {
      return {
        tags: ["ground"]
      };
    }
  }]);

  return Creep;
}(_core_ecs_Component__WEBPACK_IMPORTED_MODULE_5__.Component)) || _class;
var CreepComponent = new Creep();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreepComponent);

/***/ }),

/***/ "./src/content/components/Damage.ts":
/*!******************************************!*\
  !*** ./src/content/components/Damage.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Damage": () => (/* binding */ Damage),
/* harmony export */   "DamageComponent": () => (/* binding */ DamageComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_ecs_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _core_ecs_decorators_AutoName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/ecs/decorators/AutoName */ "./src/core/ecs/decorators/AutoName.ts");






var _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Damage = (0,_core_ecs_decorators_AutoName__WEBPACK_IMPORTED_MODULE_6__.AutoName)(_class = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Damage, _Component);

  var _super = _createSuper(Damage);

  function Damage() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Damage);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Damage, [{
    key: "defaultData",
    value: function defaultData() {
      return {
        damage: 1
      };
    }
  }]);

  return Damage;
}(_core_ecs_Component__WEBPACK_IMPORTED_MODULE_5__.Component)) || _class;
var DamageComponent = new Damage();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DamageComponent);

/***/ }),

/***/ "./src/content/components/DamageTarget.ts":
/*!************************************************!*\
  !*** ./src/content/components/DamageTarget.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DamageTarget": () => (/* binding */ DamageTarget),
/* harmony export */   "DamageTargetComponent": () => (/* binding */ DamageTargetComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_ecs_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _core_ecs_decorators_AutoName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/ecs/decorators/AutoName */ "./src/core/ecs/decorators/AutoName.ts");






var _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var DamageTarget = (0,_core_ecs_decorators_AutoName__WEBPACK_IMPORTED_MODULE_6__.AutoName)(_class = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(DamageTarget, _Component);

  var _super = _createSuper(DamageTarget);

  function DamageTarget() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, DamageTarget);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(DamageTarget, [{
    key: "defaultData",
    value: function defaultData() {
      return {
        target: null
      };
    }
  }]);

  return DamageTarget;
}(_core_ecs_Component__WEBPACK_IMPORTED_MODULE_5__.Component)) || _class;
var DamageTargetComponent = new DamageTarget();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DamageTargetComponent);

/***/ }),

/***/ "./src/content/components/SplashDamage.ts":
/*!************************************************!*\
  !*** ./src/content/components/SplashDamage.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashDamage": () => (/* binding */ SplashDamage),
/* harmony export */   "SplashDamageComponent": () => (/* binding */ SplashDamageComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_ecs_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _core_ecs_decorators_AutoName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/ecs/decorators/AutoName */ "./src/core/ecs/decorators/AutoName.ts");






var _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var SplashDamage = (0,_core_ecs_decorators_AutoName__WEBPACK_IMPORTED_MODULE_6__.AutoName)(_class = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(SplashDamage, _Component);

  var _super = _createSuper(SplashDamage);

  function SplashDamage() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SplashDamage);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(SplashDamage, [{
    key: "defaultData",
    value: function defaultData() {
      return {
        radius: 1,
        target: null,
        tags: ["ground"]
      };
    }
  }]);

  return SplashDamage;
}(_core_ecs_Component__WEBPACK_IMPORTED_MODULE_5__.Component)) || _class;
var SplashDamageComponent = new SplashDamage();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SplashDamageComponent);

/***/ }),

/***/ "./src/content/components/Weapon.ts":
/*!******************************************!*\
  !*** ./src/content/components/Weapon.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Weapon": () => (/* binding */ Weapon),
/* harmony export */   "WeaponComponent": () => (/* binding */ WeaponComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_ecs_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _core_ecs_decorators_AutoName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/ecs/decorators/AutoName */ "./src/core/ecs/decorators/AutoName.ts");
/* harmony import */ var _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _types_ProjectileType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../types/ProjectileType */ "./src/content/types/ProjectileType.ts");






var _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var Weapon = (0,_core_ecs_decorators_AutoName__WEBPACK_IMPORTED_MODULE_6__.AutoName)(_class = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Weapon, _Component);

  var _super = _createSuper(Weapon);

  function Weapon() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Weapon);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Weapon, [{
    key: "defaultData",
    value: function defaultData() {
      return {
        rate: 1,
        elapsed: 0,
        projectile: null,
        target: null,
        canFire: true,
        barrelOffsets: [_core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.ZERO],
        barrel: 0,
        fireStrictness: 1,
        arcReached: false,
        projectileType: _types_ProjectileType__WEBPACK_IMPORTED_MODULE_8__.ProjectileType.DEFAULT,
        tags: []
      };
    }
  }]);

  return Weapon;
}(_core_ecs_Component__WEBPACK_IMPORTED_MODULE_5__.Component)) || _class;
var WeaponComponent = new Weapon();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeaponComponent);

/***/ }),

/***/ "./src/content/creeps/CreepManager.ts":
/*!********************************************!*\
  !*** ./src/content/creeps/CreepManager.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreepManager": () => (/* binding */ CreepManager)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _Fast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Fast */ "./src/content/creeps/Fast.ts");
/* harmony import */ var _Flying__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Flying */ "./src/content/creeps/Flying.ts");
/* harmony import */ var _Normal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Normal */ "./src/content/creeps/Normal.ts");






var CreepManager = /*#__PURE__*/function () {
  function CreepManager(model) {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, CreepManager);

    this.model = model;
    this.northNormalCreepGenerator = void 0;
    this.eastNormalCreepGenerator = void 0;
    this.northNormalPlusCreepGenerator = void 0;
    this.eastNormalPlusCreepGenerator = void 0;
    this.northFastCreepGenerator = void 0;
    this.eastFastCreepGenerator = void 0;
    this.northFlyingCreepGenerator = void 0;
    this.eastFlyingCreepGenerator = void 0;
    this.statModifier = 1;
    this.wave = 0;
    this.getStatModifier = void 0;
    this.getStatModifier = this._getStatModifier.bind(this);
    this.northNormalCreepGenerator = (0,_Normal__WEBPACK_IMPORTED_MODULE_5__.makeNormalCreepProducer)(model.getNorthSouthPath, model, this.getStatModifier);
    this.eastNormalCreepGenerator = (0,_Normal__WEBPACK_IMPORTED_MODULE_5__.makeNormalCreepProducer)(model.getEastWestPath, model, this.getStatModifier);
    this.eastNormalPlusCreepGenerator = (0,_Normal__WEBPACK_IMPORTED_MODULE_5__.makeNormalCreepProducer)(model.getEastWestPath, model, function () {
      return _this.getStatModifier() * 1.5;
    });
    this.northNormalPlusCreepGenerator = (0,_Normal__WEBPACK_IMPORTED_MODULE_5__.makeNormalCreepProducer)(model.getNorthSouthPath, model, function () {
      return _this.getStatModifier() * 1.5;
    });
    this.northFastCreepGenerator = (0,_Fast__WEBPACK_IMPORTED_MODULE_3__.makeFastCreepProducer)(model.getNorthSouthPath, model, this.getStatModifier);
    this.eastFastCreepGenerator = (0,_Fast__WEBPACK_IMPORTED_MODULE_3__.makeFastCreepProducer)(model.getEastWestPath, model, this.getStatModifier);
    this.northFlyingCreepGenerator = (0,_Flying__WEBPACK_IMPORTED_MODULE_4__.makeFlyingCreepProducer)([new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__.default(25, 0), new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__.default(25, 30)], model, this.getStatModifier);
    this.eastFlyingCreepGenerator = (0,_Flying__WEBPACK_IMPORTED_MODULE_4__.makeFlyingCreepProducer)([new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__.default(10, 15), new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__.default(40, 15)], model, this.getStatModifier);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(CreepManager, [{
    key: "nextWave",
    value: function nextWave() {
      this.wave++;
      this.statModifier = 1 + 0.1 * this.wave;
    }
  }, {
    key: "getNorthWave",
    value: function getNorthWave() {
      var waveType = this.wave % 5;
      var count = 20 + 10 * Math.floor(this.wave / 10);

      if (this.isNorthWave()) {
        switch (waveType) {
          case 0:
          case 1:
            return {
              count: count,
              entity: this.northNormalCreepGenerator
            };

          case 2:
            return {
              count: count,
              entity: this.northFastCreepGenerator
            };

          case 3:
            return {
              count: count,
              entity: this.northNormalPlusCreepGenerator
            };

          case 4:
            return {
              count: count,
              entity: this.northFlyingCreepGenerator
            };
        }
      }

      return {
        count: 0,
        entity: this.northNormalCreepGenerator
      };
    }
  }, {
    key: "getEastWave",
    value: function getEastWave() {
      var waveType = this.wave % 5;
      var count = 20 + 10 * Math.floor(this.wave / 10);

      if (this.isEastWave()) {
        switch (waveType) {
          case 0:
          case 1:
            return {
              count: count,
              entity: this.eastNormalCreepGenerator
            };

          case 2:
            return {
              count: count,
              entity: this.eastFastCreepGenerator
            };

          case 3:
            return {
              count: count,
              entity: this.eastNormalPlusCreepGenerator
            };

          case 4:
            return {
              count: count,
              entity: this.eastFlyingCreepGenerator
            };
        }
      }

      return {
        count: 0,
        entity: this.eastNormalCreepGenerator
      };
    }
  }, {
    key: "isNorthWave",
    value: function isNorthWave() {
      return this.wave % 3 !== 0;
    }
  }, {
    key: "isEastWave",
    value: function isEastWave() {
      return this.wave % 3 !== 1;
    }
  }, {
    key: "_getStatModifier",
    value: function _getStatModifier() {
      return this.statModifier;
    }
  }, {
    key: "nextNorth",
    value: function nextNorth() {
      return (this.wave + 1) % 3 !== 0;
    }
  }, {
    key: "nextEast",
    value: function nextEast() {
      return (this.wave + 1) % 3 !== 1;
    }
  }]);

  return CreepManager;
}();

/***/ }),

/***/ "./src/content/creeps/Fast.ts":
/*!************************************!*\
  !*** ./src/content/creeps/Fast.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeFastCreepProducer": () => (/* binding */ makeFastCreepProducer)
/* harmony export */ });
/* harmony import */ var _core_components_behavior_click_AbstractClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/components/behavior/click/AbstractClick */ "./src/core/components/behavior/click/AbstractClick.ts");
/* harmony import */ var _core_components_behavior_click_Clickable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/behavior/click/Clickable */ "./src/core/components/behavior/click/Clickable.ts");
/* harmony import */ var _core_components_behavior_PathFollower__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/components/behavior/PathFollower */ "./src/core/components/behavior/PathFollower.ts");
/* harmony import */ var _core_components_behavior_PositionTarget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/components/behavior/PositionTarget */ "./src/core/components/behavior/PositionTarget.ts");
/* harmony import */ var _core_components_behavior_RotationTarget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/components/behavior/RotationTarget */ "./src/core/components/behavior/RotationTarget.ts");
/* harmony import */ var _core_components_data_Health__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/data/Health */ "./src/core/components/data/Health.ts");
/* harmony import */ var _core_components_data_Name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/components/data/Name */ "./src/core/components/data/Name.ts");
/* harmony import */ var _core_components_data_Position__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/components/data/Rotation */ "./src/core/components/data/Rotation.ts");
/* harmony import */ var _core_components_data_Velocity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/components/data/Velocity */ "./src/core/components/data/Velocity.ts");
/* harmony import */ var _core_components_marker_HealthDisplay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/components/marker/HealthDisplay */ "./src/core/components/marker/HealthDisplay.ts");
/* harmony import */ var _core_components_rendering_AnimatedSprite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/components/rendering/AnimatedSprite */ "./src/core/components/rendering/AnimatedSprite.ts");
/* harmony import */ var _core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/rendering/Texture */ "./src/core/rendering/Texture.ts");
/* harmony import */ var _components_Creep__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Creep */ "./src/content/components/Creep.ts");
















function makeFastCreepProducer(path, model, statModifier) {
  return function (parent, ecs) {
    var position = (0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_12__.getDynamic)(parent.data.position.position);
    var entityID = ecs.createEntity();
    var modifier = (0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_12__.getDynamic)(statModifier);
    ecs.addComponent(entityID, _core_components_data_Position__WEBPACK_IMPORTED_MODULE_7__.PositionComponent, {
      position: position
    });
    ecs.addComponent(entityID, _core_components_data_Velocity__WEBPACK_IMPORTED_MODULE_9__.VelocityComponent, {
      velocity: new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_13__.default(0, 0)
    });
    ecs.addComponent(entityID, _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_8__.RotationComponent);
    ecs.addComponent(entityID, _core_components_behavior_PositionTarget__WEBPACK_IMPORTED_MODULE_3__.VelocityTargetComponent, {
      velocity: 5 + 1.2 * modifier
    });
    ecs.addComponent(entityID, _core_components_behavior_RotationTarget__WEBPACK_IMPORTED_MODULE_4__.RotationTargetComponent, {
      turnRate: 720
    });
    ecs.addComponent(entityID, _core_components_behavior_PathFollower__WEBPACK_IMPORTED_MODULE_2__.PathFollowerComponent, {
      path: path
    });
    ecs.addComponent(entityID, _core_components_behavior_click_Clickable__WEBPACK_IMPORTED_MODULE_1__.ClickableComponent, {
      delta: _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_13__.default.matching(0.5),
      offset: _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_13__.default.matching(-0.5)
    });
    ecs.addComponent(entityID, _core_components_behavior_click_AbstractClick__WEBPACK_IMPORTED_MODULE_0__.AbstractClickComponent, {
      action: function action(entity) {
        return model.setSelection(entity.id);
      }
    });
    ecs.addComponent(entityID, _core_components_rendering_AnimatedSprite__WEBPACK_IMPORTED_MODULE_11__.default, {
      source: new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_14__.Texture("assets/Fast.png"),
      frames: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
      size: _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_13__.default.matching(2),
      frameSize: new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_13__.default(64, 64)
    });
    ecs.addComponent(entityID, _core_components_data_Health__WEBPACK_IMPORTED_MODULE_5__.HealthComponent, {
      health: Math.floor(8 * modifier),
      maxHealth: Math.floor(8 * modifier)
    });
    ecs.addComponent(entityID, _core_components_marker_HealthDisplay__WEBPACK_IMPORTED_MODULE_10__.default);
    ecs.addComponent(entityID, _components_Creep__WEBPACK_IMPORTED_MODULE_15__.default, {
      tags: ["ground"]
    });
    ecs.addComponent(entityID, _core_components_data_Name__WEBPACK_IMPORTED_MODULE_6__.NameComponent, {
      name: "Normal Creep"
    });
  };
}

/***/ }),

/***/ "./src/content/creeps/Flying.ts":
/*!**************************************!*\
  !*** ./src/content/creeps/Flying.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeFlyingCreepProducer": () => (/* binding */ makeFlyingCreepProducer)
/* harmony export */ });
/* harmony import */ var _core_components_behavior_click_AbstractClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/components/behavior/click/AbstractClick */ "./src/core/components/behavior/click/AbstractClick.ts");
/* harmony import */ var _core_components_behavior_click_Clickable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/behavior/click/Clickable */ "./src/core/components/behavior/click/Clickable.ts");
/* harmony import */ var _core_components_behavior_PathFollower__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/components/behavior/PathFollower */ "./src/core/components/behavior/PathFollower.ts");
/* harmony import */ var _core_components_behavior_PositionTarget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/components/behavior/PositionTarget */ "./src/core/components/behavior/PositionTarget.ts");
/* harmony import */ var _core_components_behavior_RotationTarget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/components/behavior/RotationTarget */ "./src/core/components/behavior/RotationTarget.ts");
/* harmony import */ var _core_components_data_Health__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/data/Health */ "./src/core/components/data/Health.ts");
/* harmony import */ var _core_components_data_Name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/components/data/Name */ "./src/core/components/data/Name.ts");
/* harmony import */ var _core_components_data_Position__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/components/data/Rotation */ "./src/core/components/data/Rotation.ts");
/* harmony import */ var _core_components_data_Velocity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/components/data/Velocity */ "./src/core/components/data/Velocity.ts");
/* harmony import */ var _core_components_marker_HealthDisplay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/components/marker/HealthDisplay */ "./src/core/components/marker/HealthDisplay.ts");
/* harmony import */ var _core_components_rendering_AnimatedSprite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/components/rendering/AnimatedSprite */ "./src/core/components/rendering/AnimatedSprite.ts");
/* harmony import */ var _core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/rendering/Texture */ "./src/core/rendering/Texture.ts");
/* harmony import */ var _components_Creep__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Creep */ "./src/content/components/Creep.ts");
















function makeFlyingCreepProducer(path, model, statModifier) {
  return function (parent, ecs) {
    var position = (0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_12__.getDynamic)(parent.data.position.position);
    var entityID = ecs.createEntity();
    var modifier = (0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_12__.getDynamic)(statModifier);
    ecs.addComponent(entityID, _core_components_data_Position__WEBPACK_IMPORTED_MODULE_7__.PositionComponent, {
      position: position
    });
    ecs.addComponent(entityID, _core_components_data_Velocity__WEBPACK_IMPORTED_MODULE_9__.VelocityComponent, {
      velocity: new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_13__.default(0, 0)
    });
    ecs.addComponent(entityID, _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_8__.RotationComponent);
    ecs.addComponent(entityID, _core_components_behavior_PositionTarget__WEBPACK_IMPORTED_MODULE_3__.VelocityTargetComponent, {
      velocity: 4 + 0.8 * modifier
    });
    ecs.addComponent(entityID, _core_components_behavior_RotationTarget__WEBPACK_IMPORTED_MODULE_4__.RotationTargetComponent);
    ecs.addComponent(entityID, _core_components_behavior_PathFollower__WEBPACK_IMPORTED_MODULE_2__.PathFollowerComponent, {
      path: path
    });
    ecs.addComponent(entityID, _core_components_behavior_click_Clickable__WEBPACK_IMPORTED_MODULE_1__.ClickableComponent, {
      delta: _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_13__.default.matching(0.5),
      offset: _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_13__.default.matching(-0.5)
    });
    ecs.addComponent(entityID, _core_components_behavior_click_AbstractClick__WEBPACK_IMPORTED_MODULE_0__.AbstractClickComponent, {
      action: function action(entity) {
        return model.setSelection(entity.id);
      }
    });
    ecs.addComponent(entityID, _core_components_rendering_AnimatedSprite__WEBPACK_IMPORTED_MODULE_11__.default, {
      source: new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_14__.Texture("assets/Flying.png"),
      frames: [0.1, 0.1, 0.1],
      size: _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_13__.default.matching(3.0),
      frameSize: new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_13__.default(64, 64)
    });
    ecs.addComponent(entityID, _core_components_data_Health__WEBPACK_IMPORTED_MODULE_5__.HealthComponent, {
      health: Math.floor(10 * (0.8 * modifier)),
      maxHealth: Math.floor(10 * (0.8 * modifier))
    });
    ecs.addComponent(entityID, _core_components_marker_HealthDisplay__WEBPACK_IMPORTED_MODULE_10__.default);
    ecs.addComponent(entityID, _components_Creep__WEBPACK_IMPORTED_MODULE_15__.default, {
      tags: ["air"]
    });
    ecs.addComponent(entityID, _core_components_data_Name__WEBPACK_IMPORTED_MODULE_6__.NameComponent, {
      name: "Flying Creep"
    });
  };
}

/***/ }),

/***/ "./src/content/creeps/Normal.ts":
/*!**************************************!*\
  !*** ./src/content/creeps/Normal.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeNormalCreepProducer": () => (/* binding */ makeNormalCreepProducer)
/* harmony export */ });
/* harmony import */ var _core_components_behavior_click_AbstractClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/components/behavior/click/AbstractClick */ "./src/core/components/behavior/click/AbstractClick.ts");
/* harmony import */ var _core_components_behavior_click_Clickable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/behavior/click/Clickable */ "./src/core/components/behavior/click/Clickable.ts");
/* harmony import */ var _core_components_behavior_PathFollower__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/components/behavior/PathFollower */ "./src/core/components/behavior/PathFollower.ts");
/* harmony import */ var _core_components_behavior_PositionTarget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/components/behavior/PositionTarget */ "./src/core/components/behavior/PositionTarget.ts");
/* harmony import */ var _core_components_behavior_RotationTarget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/components/behavior/RotationTarget */ "./src/core/components/behavior/RotationTarget.ts");
/* harmony import */ var _core_components_data_Health__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/data/Health */ "./src/core/components/data/Health.ts");
/* harmony import */ var _core_components_data_Name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/components/data/Name */ "./src/core/components/data/Name.ts");
/* harmony import */ var _core_components_data_Position__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/components/data/Rotation */ "./src/core/components/data/Rotation.ts");
/* harmony import */ var _core_components_data_Velocity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/components/data/Velocity */ "./src/core/components/data/Velocity.ts");
/* harmony import */ var _core_components_marker_HealthDisplay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/components/marker/HealthDisplay */ "./src/core/components/marker/HealthDisplay.ts");
/* harmony import */ var _core_components_rendering_AnimatedSprite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/components/rendering/AnimatedSprite */ "./src/core/components/rendering/AnimatedSprite.ts");
/* harmony import */ var _core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/rendering/Texture */ "./src/core/rendering/Texture.ts");
/* harmony import */ var _components_Creep__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Creep */ "./src/content/components/Creep.ts");
















function makeNormalCreepProducer(path, model, statModifier) {
  return function (parent, ecs) {
    var position = (0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_12__.getDynamic)(parent.data.position.position);
    var entityID = ecs.createEntity();
    var modifier = (0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_12__.getDynamic)(statModifier);
    ecs.addComponent(entityID, _core_components_data_Position__WEBPACK_IMPORTED_MODULE_7__.PositionComponent, {
      position: position
    });
    ecs.addComponent(entityID, _core_components_data_Velocity__WEBPACK_IMPORTED_MODULE_9__.VelocityComponent, {
      velocity: new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_13__.default(0, 0)
    });
    ecs.addComponent(entityID, _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_8__.RotationComponent);
    ecs.addComponent(entityID, _core_components_behavior_PositionTarget__WEBPACK_IMPORTED_MODULE_3__.VelocityTargetComponent, {
      velocity: 3 + modifier
    });
    ecs.addComponent(entityID, _core_components_behavior_RotationTarget__WEBPACK_IMPORTED_MODULE_4__.RotationTargetComponent, {
      turnRate: 360
    });
    ecs.addComponent(entityID, _core_components_behavior_PathFollower__WEBPACK_IMPORTED_MODULE_2__.PathFollowerComponent, {
      path: path
    });
    ecs.addComponent(entityID, _core_components_behavior_click_Clickable__WEBPACK_IMPORTED_MODULE_1__.ClickableComponent, {
      delta: _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_13__.default.matching(0.5),
      offset: _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_13__.default.matching(-0.5)
    });
    ecs.addComponent(entityID, _core_components_behavior_click_AbstractClick__WEBPACK_IMPORTED_MODULE_0__.AbstractClickComponent, {
      action: function action(entity) {
        return model.setSelection(entity.id);
      }
    });
    ecs.addComponent(entityID, _core_components_rendering_AnimatedSprite__WEBPACK_IMPORTED_MODULE_11__.default, {
      source: new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_14__.Texture("assets/Normal.png"),
      frames: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
      size: _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_13__.default.matching(2),
      frameSize: _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_13__.default.matching(64)
    });
    ecs.addComponent(entityID, _core_components_data_Health__WEBPACK_IMPORTED_MODULE_5__.HealthComponent, {
      health: Math.floor(10 * modifier),
      maxHealth: Math.floor(10 * modifier)
    });
    ecs.addComponent(entityID, _core_components_marker_HealthDisplay__WEBPACK_IMPORTED_MODULE_10__.default);
    ecs.addComponent(entityID, _components_Creep__WEBPACK_IMPORTED_MODULE_15__.default, {
      tags: ["ground"]
    });
    ecs.addComponent(entityID, _core_components_data_Name__WEBPACK_IMPORTED_MODULE_6__.NameComponent, {
      name: "Normal Creep"
    });
  };
}

/***/ }),

/***/ "./src/content/particles/Blood.ts":
/*!****************************************!*\
  !*** ./src/content/particles/Blood.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeBlood": () => (/* binding */ makeBlood)
/* harmony export */ });
/* harmony import */ var _core_components_behavior_Lifetime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/components/behavior/Lifetime */ "./src/core/components/behavior/Lifetime.ts");
/* harmony import */ var _core_components_data_Position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/components/data/Rotation */ "./src/core/components/data/Rotation.ts");
/* harmony import */ var _core_components_data_Velocity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/components/data/Velocity */ "./src/core/components/data/Velocity.ts");
/* harmony import */ var _core_components_rendering_LifetimeRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/components/rendering/LifetimeRender */ "./src/core/components/rendering/LifetimeRender.ts");
/* harmony import */ var _core_components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/rendering/Sprite */ "./src/core/components/rendering/Sprite.ts");
/* harmony import */ var _core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _core_Random__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/Random */ "./src/core/Random.ts");
/* harmony import */ var _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/rendering/Texture */ "./src/core/rendering/Texture.ts");










function makeBlood(parent, manager) {
  var entity = manager.createEntity();
  var offset = _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.fromAngle(_core_Random__WEBPACK_IMPORTED_MODULE_8__.random.gaussian() * 720).scale(_core_Random__WEBPACK_IMPORTED_MODULE_8__.random.gaussian());
  var ppos = (0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_6__.getDynamic)(parent.data.position.position);
  manager.addComponent(entity, _core_components_data_Position__WEBPACK_IMPORTED_MODULE_1__.PositionComponent, {
    position: ppos.add(offset)
  });
  manager.addComponent(entity, _core_components_data_Velocity__WEBPACK_IMPORTED_MODULE_3__.VelocityComponent, {
    velocity: offset
  });
  manager.addComponent(entity, _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_2__.RotationComponent, {
    rotation: _core_Random__WEBPACK_IMPORTED_MODULE_8__.random.gaussian() * 720
  });
  manager.addComponent(entity, _core_components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_5__.default, {
    size: _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.matching(0.5),
    source: new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_9__.Texture("assets/Gear.png")
  });
  manager.addComponent(entity, _core_components_behavior_Lifetime__WEBPACK_IMPORTED_MODULE_0__.LifetimeComponent);
  manager.addComponent(entity, _core_components_rendering_LifetimeRender__WEBPACK_IMPORTED_MODULE_4__.default);
}

/***/ }),

/***/ "./src/content/prefabs/Bullet.ts":
/*!***************************************!*\
  !*** ./src/content/prefabs/Bullet.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bullet": () => (/* binding */ bullet)
/* harmony export */ });
/* harmony import */ var _core_components_behavior_Lifetime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/components/behavior/Lifetime */ "./src/core/components/behavior/Lifetime.ts");
/* harmony import */ var _core_components_behavior_PositionTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/behavior/PositionTarget */ "./src/core/components/behavior/PositionTarget.ts");
/* harmony import */ var _core_components_behavior_RotationTarget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/components/behavior/RotationTarget */ "./src/core/components/behavior/RotationTarget.ts");
/* harmony import */ var _core_components_data_Position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/components/data/Rotation */ "./src/core/components/data/Rotation.ts");
/* harmony import */ var _core_components_data_Velocity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/data/Velocity */ "./src/core/components/data/Velocity.ts");
/* harmony import */ var _core_components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/components/rendering/Sprite */ "./src/core/components/rendering/Sprite.ts");
/* harmony import */ var _core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/rendering/Texture */ "./src/core/rendering/Texture.ts");
/* harmony import */ var _components_Damage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Damage */ "./src/content/components/Damage.ts");
/* harmony import */ var _components_DamageTarget__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/DamageTarget */ "./src/content/components/DamageTarget.ts");
/* harmony import */ var _components_SplashDamage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SplashDamage */ "./src/content/components/SplashDamage.ts");













var tex = new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_9__.Texture("assets/Bullet.png");
function bullet(parent, manager) {
  var id = manager.createEntity();
  var entity = manager.getEntity(id);
  var _target = parent.data.weapon.target;
  var _parent$data = parent.data,
      weapon = _parent$data.weapon,
      range = _parent$data.range;
  var position = _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_8__.default.ZERO;
  position = position.add(parent.data.weapon.barrelOffsets[parent.data.weapon.barrel]);
  position = position.rotate((0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(parent.data.rotation.rotation));
  position = position.add((0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(parent.data.position.position));
  manager.addComponent(entity, _core_components_data_Position__WEBPACK_IMPORTED_MODULE_3__.PositionComponent, {
    position: position
  });
  manager.addComponent(entity, _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_4__.RotationComponent, {
    rotation: parent.data.rotation.rotation
  });
  manager.addComponent(entity, _core_components_behavior_RotationTarget__WEBPACK_IMPORTED_MODULE_2__.RotationTargetComponent, {
    target: function target() {
      if (!_target.active) {
        var pos = entity.data.position.position;
        manager.removeEntity(entity);
        return pos;
      }

      return _target.data.position.position;
    }
  });
  manager.addComponent(entity, _core_components_data_Velocity__WEBPACK_IMPORTED_MODULE_5__.VelocityComponent);
  manager.addComponent(entity, _core_components_behavior_PositionTarget__WEBPACK_IMPORTED_MODULE_1__.VelocityTargetComponent, {
    target: function target() {
      if (!_target.active) {
        var pos = entity.data.position.position;
        manager.removeEntity(entity);
        return pos;
      }

      return _target.data.position.position;
    },
    velocity: parent.data.weapon.projectileType.speed
  });
  manager.addComponent(entity, _core_components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_6__.default, {
    source: tex,
    rotationOffset: 90
  });
  manager.addComponent(entity, _components_Damage__WEBPACK_IMPORTED_MODULE_10__.default, {
    damage: parent.data.weapon.projectileType.damage
  });

  if (parent.data.weapon.projectileType.splashRadius >= 0.01) {
    manager.addComponent(entity, _components_SplashDamage__WEBPACK_IMPORTED_MODULE_12__.default, {
      target: weapon.target,
      radius: weapon.projectileType.splashRadius
    });
  } else {
    manager.addComponent(entity, _components_DamageTarget__WEBPACK_IMPORTED_MODULE_11__.default, {
      target: weapon.target
    });
  }

  manager.addComponent(entity, _core_components_behavior_Lifetime__WEBPACK_IMPORTED_MODULE_0__.LifetimeComponent, {
    lifetime: range.range / weapon.projectileType.speed * 1.2
  });
  return entity;
}

/***/ }),

/***/ "./src/content/prefabs/Rocket.ts":
/*!***************************************!*\
  !*** ./src/content/prefabs/Rocket.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "missile": () => (/* binding */ missile)
/* harmony export */ });
/* harmony import */ var _core_components_behavior_Lifetime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/components/behavior/Lifetime */ "./src/core/components/behavior/Lifetime.ts");
/* harmony import */ var _core_components_behavior_PositionTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/behavior/PositionTarget */ "./src/core/components/behavior/PositionTarget.ts");
/* harmony import */ var _core_components_behavior_RotationTarget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/components/behavior/RotationTarget */ "./src/core/components/behavior/RotationTarget.ts");
/* harmony import */ var _core_components_behavior_Spawner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/components/behavior/Spawner */ "./src/core/components/behavior/Spawner.ts");
/* harmony import */ var _core_components_data_Position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/data/Rotation */ "./src/core/components/data/Rotation.ts");
/* harmony import */ var _core_components_data_Velocity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/components/data/Velocity */ "./src/core/components/data/Velocity.ts");
/* harmony import */ var _core_components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/components/rendering/Sprite */ "./src/core/components/rendering/Sprite.ts");
/* harmony import */ var _core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _core_prefabs_SmokeParticle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/prefabs/SmokeParticle */ "./src/core/prefabs/SmokeParticle.ts");
/* harmony import */ var _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/rendering/Texture */ "./src/core/rendering/Texture.ts");
/* harmony import */ var _components_Damage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Damage */ "./src/content/components/Damage.ts");
/* harmony import */ var _components_DamageTarget__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/DamageTarget */ "./src/content/components/DamageTarget.ts");
/* harmony import */ var _components_SplashDamage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/SplashDamage */ "./src/content/components/SplashDamage.ts");















var tex = new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_11__.Texture("assets/Missile.png");
function missile(parent, manager) {
  var id = manager.createEntity();
  var entity = manager.getEntity(id);
  var _target = parent.data.weapon.target;
  var _parent$data = parent.data,
      weapon = _parent$data.weapon,
      range = _parent$data.range;
  var position = _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_9__.default.ZERO;
  position = position.add(parent.data.weapon.barrelOffsets[parent.data.weapon.barrel]);
  position = position.rotate((0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(parent.data.rotation.rotation));
  position = position.add((0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(parent.data.position.position));
  manager.addComponent(entity, _core_components_data_Position__WEBPACK_IMPORTED_MODULE_4__.PositionComponent, {
    position: position
  });
  manager.addComponent(entity, _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_5__.RotationComponent, {
    rotation: parent.data.rotation.rotation
  });
  manager.addComponent(entity, _core_components_behavior_RotationTarget__WEBPACK_IMPORTED_MODULE_2__.RotationTargetComponent, {
    target: function target() {
      if (!_target.active) {
        var pos = entity.data.position.position;
        manager.removeEntity(entity);
        return pos;
      }

      return _target.data.position.position;
    }
  });
  manager.addComponent(entity, _core_components_data_Velocity__WEBPACK_IMPORTED_MODULE_6__.VelocityComponent);
  manager.addComponent(entity, _core_components_behavior_PositionTarget__WEBPACK_IMPORTED_MODULE_1__.VelocityTargetComponent, {
    target: function target() {
      if (!_target.active) {
        var pos = entity.data.position.position;
        manager.removeEntity(entity);
        return pos;
      }

      return _target.data.position.position;
    },
    velocity: parent.data.weapon.projectileType.speed
  });
  manager.addComponent(entity, _core_components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_7__.default, {
    source: tex,
    rotationOffset: 90
  });
  manager.addComponent(entity, _core_components_behavior_Spawner__WEBPACK_IMPORTED_MODULE_3__.default, {
    producer: _core_prefabs_SmokeParticle__WEBPACK_IMPORTED_MODULE_10__.makeSmokeTrail,
    count: 1,
    rate: 0.1
  });
  manager.addComponent(entity, _components_Damage__WEBPACK_IMPORTED_MODULE_12__.default, {
    damage: parent.data.weapon.projectileType.damage
  });

  if (parent.data.weapon.projectileType.splashRadius >= 0.01) {
    manager.addComponent(entity, _components_SplashDamage__WEBPACK_IMPORTED_MODULE_14__.default, {
      target: weapon.target,
      radius: weapon.projectileType.splashRadius
    });
  } else {
    manager.addComponent(entity, _components_DamageTarget__WEBPACK_IMPORTED_MODULE_13__.default, {
      target: weapon.target
    });
  }

  manager.addComponent(entity, _core_components_behavior_Lifetime__WEBPACK_IMPORTED_MODULE_0__.LifetimeComponent, {
    lifetime: range.range / weapon.projectileType.speed * 1.2
  });
  return entity;
}

/***/ }),

/***/ "./src/content/prefabs/SwarmMissile.ts":
/*!*********************************************!*\
  !*** ./src/content/prefabs/SwarmMissile.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "swarmMissile": () => (/* binding */ swarmMissile)
/* harmony export */ });
/* harmony import */ var _core_components_behavior_Lifetime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/components/behavior/Lifetime */ "./src/core/components/behavior/Lifetime.ts");
/* harmony import */ var _core_components_behavior_PositionTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/behavior/PositionTarget */ "./src/core/components/behavior/PositionTarget.ts");
/* harmony import */ var _core_components_behavior_RotationTarget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/components/behavior/RotationTarget */ "./src/core/components/behavior/RotationTarget.ts");
/* harmony import */ var _core_components_behavior_Spawner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/components/behavior/Spawner */ "./src/core/components/behavior/Spawner.ts");
/* harmony import */ var _core_components_data_Position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/data/Rotation */ "./src/core/components/data/Rotation.ts");
/* harmony import */ var _core_components_data_Velocity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/components/data/Velocity */ "./src/core/components/data/Velocity.ts");
/* harmony import */ var _core_components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/components/rendering/Sprite */ "./src/core/components/rendering/Sprite.ts");
/* harmony import */ var _core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _core_prefabs_SmokeParticle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/prefabs/SmokeParticle */ "./src/core/prefabs/SmokeParticle.ts");
/* harmony import */ var _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/rendering/Texture */ "./src/core/rendering/Texture.ts");
/* harmony import */ var _components_Damage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Damage */ "./src/content/components/Damage.ts");
/* harmony import */ var _components_DamageTarget__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/DamageTarget */ "./src/content/components/DamageTarget.ts");
/* harmony import */ var _components_SplashDamage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/SplashDamage */ "./src/content/components/SplashDamage.ts");















var tex = new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_11__.Texture("assets/SwarmMissile.png");
function swarmMissile(parent, manager) {
  var id = manager.createEntity();
  var entity = manager.getEntity(id);
  var _target = parent.data.weapon.target;
  var _parent$data = parent.data,
      weapon = _parent$data.weapon,
      range = _parent$data.range;
  var position = _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_9__.default.ZERO;
  position = position.add(parent.data.weapon.barrelOffsets[parent.data.weapon.barrel]);
  position = position.rotate((0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(parent.data.rotation.rotation));
  position = position.add((0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(parent.data.position.position));
  manager.addComponent(entity, _core_components_data_Position__WEBPACK_IMPORTED_MODULE_4__.PositionComponent, {
    position: position
  });
  manager.addComponent(entity, _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_5__.RotationComponent, {
    rotation: parent.data.rotation.rotation
  });
  manager.addComponent(entity, _core_components_behavior_RotationTarget__WEBPACK_IMPORTED_MODULE_2__.RotationTargetComponent, {
    target: function target() {
      if (!_target.active) {
        var pos = entity.data.position.position;
        manager.removeEntity(entity);
        return pos;
      }

      return _target.data.position.position;
    }
  });
  manager.addComponent(entity, _core_components_data_Velocity__WEBPACK_IMPORTED_MODULE_6__.VelocityComponent);
  manager.addComponent(entity, _core_components_behavior_PositionTarget__WEBPACK_IMPORTED_MODULE_1__.VelocityTargetComponent, {
    target: function target() {
      if (!_target.active) {
        var pos = entity.data.position.position;
        manager.removeEntity(entity);
        return pos;
      }

      return _target.data.position.position;
    },
    velocity: parent.data.weapon.projectileType.speed
  });
  manager.addComponent(entity, _core_components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_7__.default, {
    source: tex,
    rotationOffset: 90
  });
  manager.addComponent(entity, _core_components_behavior_Spawner__WEBPACK_IMPORTED_MODULE_3__.default, {
    producer: _core_prefabs_SmokeParticle__WEBPACK_IMPORTED_MODULE_10__.makeSmokeTrail,
    count: 1,
    rate: 0.1
  });
  manager.addComponent(entity, _components_Damage__WEBPACK_IMPORTED_MODULE_12__.default, {
    damage: parent.data.weapon.projectileType.damage
  });

  if (parent.data.weapon.projectileType.splashRadius >= 0.01) {
    manager.addComponent(entity, _components_SplashDamage__WEBPACK_IMPORTED_MODULE_14__.default, {
      target: weapon.target,
      radius: weapon.projectileType.splashRadius
    });
  } else {
    manager.addComponent(entity, _components_DamageTarget__WEBPACK_IMPORTED_MODULE_13__.default, {
      target: weapon.target
    });
  }

  manager.addComponent(entity, _core_components_behavior_Lifetime__WEBPACK_IMPORTED_MODULE_0__.LifetimeComponent, {
    lifetime: range.range / weapon.projectileType.speed * 1.2
  });
  return entity;
}

/***/ }),

/***/ "./src/content/systems/BaseRenderSystem.ts":
/*!*************************************************!*\
  !*** ./src/content/systems/BaseRenderSystem.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TurretBaseRenderSystem": () => (/* binding */ TurretBaseRenderSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_components_data_Position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _core_ecs_System__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _components_BaseComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BaseComponent */ "./src/content/components/BaseComponent.ts");
/* harmony import */ var _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _core_components_data_Footprint__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/components/data/Footprint */ "./src/core/components/data/Footprint.ts");
/* harmony import */ var _core_ecs_decorators_Basis__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/ecs/decorators/Basis */ "./src/core/ecs/decorators/Basis.ts");
/* harmony import */ var _core_ecs_decorators_Required__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/ecs/decorators/Required */ "./src/core/ecs/decorators/Required.ts");






var _dec, _dec2, _class, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var TurretBaseRenderSystem = (_dec = (0,_core_ecs_decorators_Basis__WEBPACK_IMPORTED_MODULE_11__.Basis)(_components_BaseComponent__WEBPACK_IMPORTED_MODULE_8__.default), _dec2 = (0,_core_ecs_decorators_Required__WEBPACK_IMPORTED_MODULE_12__.Required)([_core_components_data_Footprint__WEBPACK_IMPORTED_MODULE_10__.FootprintComponent, _core_components_data_Position__WEBPACK_IMPORTED_MODULE_5__.PositionComponent]), _dec(_class = _dec2(_class = (_temp = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(TurretBaseRenderSystem, _BaseSystem);

  var _super = _createSuper(TurretBaseRenderSystem);

  function TurretBaseRenderSystem(virtualCanvas) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, TurretBaseRenderSystem);

    _this = _super.call(this);
    _this.virtualCanvas = void 0;
    _this.virtualCanvas = virtualCanvas;
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(TurretBaseRenderSystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var spriteEntity = entity;
      var _spriteEntity$data = spriteEntity.data,
          turretBase = _spriteEntity$data.turretBase,
          footprint = _spriteEntity$data.footprint,
          position = _spriteEntity$data.position;
      this.virtualCanvas.drawImage(turretBase.source, (0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_6__.getDynamic)(position.position), _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_9__.default.matching(footprint.size * 1.5));
    }
  }]);

  return TurretBaseRenderSystem;
}(_core_ecs_System__WEBPACK_IMPORTED_MODULE_7__.BaseSystem), _temp)) || _class) || _class);

/***/ }),

/***/ "./src/content/systems/DamageTargetSystem.ts":
/*!***************************************************!*\
  !*** ./src/content/systems/DamageTargetSystem.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DamageTargetSystem": () => (/* binding */ DamageTargetSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_components_behavior_PositionTarget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/behavior/PositionTarget */ "./src/core/components/behavior/PositionTarget.ts");
/* harmony import */ var _core_ecs_decorators_Basis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/ecs/decorators/Basis */ "./src/core/ecs/decorators/Basis.ts");
/* harmony import */ var _core_ecs_decorators_Required__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/ecs/decorators/Required */ "./src/core/ecs/decorators/Required.ts");
/* harmony import */ var _core_ecs_System__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _components_Damage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Damage */ "./src/content/components/Damage.ts");
/* harmony import */ var _components_DamageTarget__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/DamageTarget */ "./src/content/components/DamageTarget.ts");






var _dec, _dec2, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var DamageTargetSystem = (_dec = (0,_core_ecs_decorators_Basis__WEBPACK_IMPORTED_MODULE_6__.Basis)(_components_DamageTarget__WEBPACK_IMPORTED_MODULE_10__.default), _dec2 = (0,_core_ecs_decorators_Required__WEBPACK_IMPORTED_MODULE_7__.Required)([_core_components_behavior_PositionTarget__WEBPACK_IMPORTED_MODULE_5__.VelocityTargetComponent, _components_Damage__WEBPACK_IMPORTED_MODULE_9__.default]), _dec(_class = _dec2(_class = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(DamageTargetSystem, _BaseSystem);

  var _super = _createSuper(DamageTargetSystem);

  function DamageTargetSystem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, DamageTargetSystem);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(DamageTargetSystem, [{
    key: "onManagerAwake",
    value: function onManagerAwake() {
      this.listen("velocityTarget:reached");
    }
  }, {
    key: "onEvent",
    value: function onEvent(_, entity) {
      if (!entity.active) {
        this.manager.removeEntity(entity);
        return;
      }

      var _entity$data = entity.data,
          damageTarget = _entity$data.damageTarget,
          damage = _entity$data.damage;
      damageTarget.target.data.health.health -= damage.damage;
      this.manager.removeEntity(entity);
    }
  }]);

  return DamageTargetSystem;
}(_core_ecs_System__WEBPACK_IMPORTED_MODULE_8__.BaseSystem)) || _class) || _class);

/***/ }),

/***/ "./src/content/systems/SplashDamageSystem.ts":
/*!***************************************************!*\
  !*** ./src/content/systems/SplashDamageSystem.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashDamageSystem": () => (/* binding */ SplashDamageSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_components_behavior_Lifetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/components/behavior/Lifetime */ "./src/core/components/behavior/Lifetime.ts");
/* harmony import */ var _core_components_behavior_PositionTarget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/components/behavior/PositionTarget */ "./src/core/components/behavior/PositionTarget.ts");
/* harmony import */ var _core_components_behavior_Spawner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/components/behavior/Spawner */ "./src/core/components/behavior/Spawner.ts");
/* harmony import */ var _core_components_data_Position__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/components/data/Rotation */ "./src/core/components/data/Rotation.ts");
/* harmony import */ var _core_components_data_Velocity__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/components/data/Velocity */ "./src/core/components/data/Velocity.ts");
/* harmony import */ var _core_components_rendering_LifetimeRender__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/components/rendering/LifetimeRender */ "./src/core/components/rendering/LifetimeRender.ts");
/* harmony import */ var _core_components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/components/rendering/Sprite */ "./src/core/components/rendering/Sprite.ts");
/* harmony import */ var _core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _core_ecs_decorators_Basis__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/ecs/decorators/Basis */ "./src/core/ecs/decorators/Basis.ts");
/* harmony import */ var _core_ecs_decorators_Required__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/ecs/decorators/Required */ "./src/core/ecs/decorators/Required.ts");
/* harmony import */ var _core_ecs_System__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../core/ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _core_geometry_Collision__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../core/geometry/Collision */ "./src/core/geometry/Collision.ts");
/* harmony import */ var _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../core/geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _core_Random__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../core/Random */ "./src/core/Random.ts");
/* harmony import */ var _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../core/rendering/Texture */ "./src/core/rendering/Texture.ts");
/* harmony import */ var _components_Creep__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/Creep */ "./src/content/components/Creep.ts");
/* harmony import */ var _components_Damage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/Damage */ "./src/content/components/Damage.ts");
/* harmony import */ var _components_SplashDamage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/SplashDamage */ "./src/content/components/SplashDamage.ts");






var _dec, _dec2, _class, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





















var SplashDamageSystem = (_dec = (0,_core_ecs_decorators_Basis__WEBPACK_IMPORTED_MODULE_15__.Basis)(_components_SplashDamage__WEBPACK_IMPORTED_MODULE_24__.default), _dec2 = (0,_core_ecs_decorators_Required__WEBPACK_IMPORTED_MODULE_16__.Required)([_core_components_behavior_PositionTarget__WEBPACK_IMPORTED_MODULE_7__.VelocityTargetComponent, _components_Damage__WEBPACK_IMPORTED_MODULE_23__.default]), _dec(_class = _dec2(_class = (_temp = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(SplashDamageSystem, _BaseSystem);

  var _super = _createSuper(SplashDamageSystem);

  function SplashDamageSystem() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SplashDamageSystem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.targets = [];
    _this.fireTex = new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_21__.Texture("assets/fire.png");
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(SplashDamageSystem, [{
    key: "onManagerAwake",
    value: function onManagerAwake() {
      this.listen("velocityTarget:reached");
    }
  }, {
    key: "systemUpdate",
    value: function systemUpdate() {
      this.targets = this.manager.getEntitiesWithComponent(_components_Creep__WEBPACK_IMPORTED_MODULE_22__.default);
    }
  }, {
    key: "onEvent",
    value: function onEvent(_, entity) {
      if (!entity.active) {
        this.manager.removeEntity(entity);
        return;
      }

      var _entity$data = entity.data,
          splashDamage = _entity$data.splashDamage,
          damage = _entity$data.damage;

      for (var entityIdx = 0; entityIdx < this.targets.length; entityIdx++) {
        var target = this.targets[entityIdx]; // Something got removed

        if (!target.active || target.data.creep === undefined) {
          continue;
        } // Whatever we were following died


        if (!splashDamage.target.active || splashDamage.target.data.position === undefined) {
          if ((0,_core_geometry_Collision__WEBPACK_IMPORTED_MODULE_18__.PointRadiusPointCollision)((0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_14__.getDynamic)(entity.data.position.position), splashDamage.radius, (0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_14__.getDynamic)(target.data.position.position)) && (0,lodash__WEBPACK_IMPORTED_MODULE_5__.intersection)(splashDamage.tags, target.data.creep.tags).length > 0) {
            target.data.health.health -= damage.damage;
          }
        } // We arrived at our position


        if ((0,_core_geometry_Collision__WEBPACK_IMPORTED_MODULE_18__.PointRadiusPointCollision)((0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_14__.getDynamic)(splashDamage.target.data.position.position), splashDamage.radius, (0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_14__.getDynamic)(target.data.position.position)) && (0,lodash__WEBPACK_IMPORTED_MODULE_5__.intersection)(splashDamage.tags, target.data.creep.tags).length > 0) {
          target.data.health.health -= damage.damage;
        }
      }

      this.createExplosion(entity.data.position.position, splashDamage.radius);
      this.manager.removeEntity(entity);
    }
  }, {
    key: "createExplosion",
    value: function createExplosion(pos, radius) {
      var _this2 = this;

      var position = (0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_14__.getDynamic)(pos);
      var id = this.manager.createEntity();
      this.manager.addComponent(id, _core_components_data_Position__WEBPACK_IMPORTED_MODULE_9__.PositionComponent, {
        position: position
      });
      this.manager.addComponent(id, _core_components_behavior_Lifetime__WEBPACK_IMPORTED_MODULE_6__.LifetimeComponent, {
        lifetime: 1
      });
      this.manager.addComponent(id, _core_components_behavior_Spawner__WEBPACK_IMPORTED_MODULE_8__.default, {
        count: 5,
        rate: 0.1,
        producer: function producer() {
          var id = _this2.manager.createEntity();

          var rotVec = _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_19__.default.fromAngle(_core_Random__WEBPACK_IMPORTED_MODULE_20__.random.gaussian() * 720, radius);

          _this2.manager.addComponent(id, _core_components_data_Position__WEBPACK_IMPORTED_MODULE_9__.PositionComponent, {
            position: position
          });

          _this2.manager.addComponent(id, _core_components_data_Velocity__WEBPACK_IMPORTED_MODULE_11__.VelocityComponent, {
            velocity: rotVec
          });

          _this2.manager.addComponent(id, _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_10__.RotationComponent);

          _this2.manager.addComponent(id, _core_components_behavior_Lifetime__WEBPACK_IMPORTED_MODULE_6__.LifetimeComponent, {
            lifetime: 1
          });

          _this2.manager.addComponent(id, _core_components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_13__.default, {
            source: _this2.fireTex,
            size: _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_19__.default.matching(0.25)
          });

          _this2.manager.addComponent(id, _core_components_rendering_LifetimeRender__WEBPACK_IMPORTED_MODULE_12__.default);
        }
      });
    }
  }]);

  return SplashDamageSystem;
}(_core_ecs_System__WEBPACK_IMPORTED_MODULE_17__.BaseSystem), _temp)) || _class) || _class);

/***/ }),

/***/ "./src/content/systems/WeaponSystem.ts":
/*!*********************************************!*\
  !*** ./src/content/systems/WeaponSystem.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeaponSystem": () => (/* binding */ WeaponSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _core_ecs_System__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _core_ecs_decorators_Basis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/ecs/decorators/Basis */ "./src/core/ecs/decorators/Basis.ts");
/* harmony import */ var _components_Weapon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Weapon */ "./src/content/components/Weapon.ts");
/* harmony import */ var _core_ecs_decorators_Required__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/ecs/decorators/Required */ "./src/core/ecs/decorators/Required.ts");
/* harmony import */ var _core_components_behavior_RotationTarget__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/components/behavior/RotationTarget */ "./src/core/components/behavior/RotationTarget.ts");
/* harmony import */ var _components_Creep__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Creep */ "./src/content/components/Creep.ts");
/* harmony import */ var _core_geometry_Collision__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/geometry/Collision */ "./src/core/geometry/Collision.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);






var _dec, _dec2, _class, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










var WeaponSystem = (_dec = (0,_core_ecs_decorators_Basis__WEBPACK_IMPORTED_MODULE_7__.Basis)(_components_Weapon__WEBPACK_IMPORTED_MODULE_8__.default), _dec2 = (0,_core_ecs_decorators_Required__WEBPACK_IMPORTED_MODULE_9__.Required)([_core_components_behavior_RotationTarget__WEBPACK_IMPORTED_MODULE_10__.RotationTargetComponent]), _dec(_class = _dec2(_class = (_temp = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(WeaponSystem, _BaseSystem);

  var _super = _createSuper(WeaponSystem);

  function WeaponSystem() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, WeaponSystem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.creeps = void 0;
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(WeaponSystem, [{
    key: "onManagerAwake",
    value: function onManagerAwake() {
      this.listen("rotationTarget:reached", true);
    }
  }, {
    key: "onEvent",
    value: function onEvent(eventName, entity) {
      entity.data.weapon.arcReached = true;
    }
  }, {
    key: "systemUpdate",
    value: function systemUpdate() {
      this.creeps = this.manager.getEntitiesWithComponent(_components_Creep__WEBPACK_IMPORTED_MODULE_11__.default);
    }
  }, {
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var targetEntity = entity;
      var _targetEntity$data = targetEntity.data,
          weapon = _targetEntity$data.weapon,
          rotationTarget = _targetEntity$data.rotationTarget;

      if (!weapon.canFire && this.checkInterval(deltaTime, weapon)) {
        weapon.canFire = true;
      }

      if (weapon.target === undefined) {
        weapon.target = null;
      }

      var best = weapon.target;
      var bestInRange = this.creepInRange(targetEntity, best, 1);

      for (var creepIdx = 0; creepIdx < this.creeps.length; creepIdx++) {
        var creep = this.creeps[creepIdx];

        if (!this.isValidCreep(creep)) {
          continue;
        }

        var tagIntersection = (0,lodash__WEBPACK_IMPORTED_MODULE_13__.intersection)(targetEntity.data.weapon.tags, creep.data.creep.tags);

        if (this.creepInRange(targetEntity, creep, 1) && tagIntersection.length > 0) {
          if (!this.isValidCreep(best) || !bestInRange) {
            best = creep;
          } else if (creep.data.pathFollower.point > best.data.pathFollower.point) {
            best = this.creeps[creepIdx];
          }
        }
      }

      weapon.target = best;

      if (best === null || !best.active) {
        return;
      }

      rotationTarget.target = best.data.position.position;

      if (weapon.canFire && this.creepInRange(targetEntity, best)) {
        // Fire
        if (weapon.arcReached) {
          weapon.projectile(targetEntity, this.manager);
          weapon.canFire = false;
          weapon.barrel = (weapon.barrel + 1) % weapon.barrelOffsets.length;
          this.manager.emitEvent("weapon:fire", targetEntity);
        }
      }

      weapon.arcReached = false;
    }
  }, {
    key: "creepInRange",
    value: function creepInRange(weapon, creep) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!this.isValidCreep(creep)) {
        return false;
      }

      var pos = (0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_5__.getDynamic)(weapon.data.position.position);
      var creepPos = (0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_5__.getDynamic)(creep.data.position.position);
      return (0,_core_geometry_Collision__WEBPACK_IMPORTED_MODULE_12__.PointRadiusPointCollision)(pos, weapon.data.range.range + offset, creepPos);
    }
  }, {
    key: "isValidCreep",
    value: function isValidCreep(entity) {
      return entity !== null && entity !== undefined && entity.active && entity.data.creep !== undefined;
    }
  }]);

  return WeaponSystem;
}(_core_ecs_System__WEBPACK_IMPORTED_MODULE_6__.BaseSystem), _temp)) || _class) || _class);

/***/ }),

/***/ "./src/content/towers/MinigunTower.ts":
/*!********************************************!*\
  !*** ./src/content/towers/MinigunTower.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinigunTower": () => (/* binding */ MinigunTower)
/* harmony export */ });
/* harmony import */ var _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/rendering/Texture */ "./src/core/rendering/Texture.ts");

var t2 = new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_0__.Texture("assets/turret-1-2.png");
var t3 = new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_0__.Texture("assets/turret-1-3.png");
var MinigunTower = {
  name: "Rifle Tower",
  description: "Short-range tower",
  size: 2,
  range: 4,
  rotationRate: 360,
  fireRate: 1,
  cost: 5,
  projectile: {
    speed: 50,
    damage: 2,
    splashRadius: 0
  },
  levelSprites: ["tower-1-1", "tower-1-2", "tower-1-3"],
  tags: ["ground"],
  upgrades: [{
    cost: 10,
    dataDelta: {
      weapon: {
        projectileType: {
          damage: 5
        },
        rate: 0.8
      },
      sprite: {
        source: t2
      }
    }
  }, {
    cost: 20,
    dataDelta: {
      weapon: {
        projectileType: {
          damage: 7
        }
      },
      sprite: {
        source: t3
      },
      range: {
        range: 5
      }
    }
  }],
  projectileSpawner: "bullet"
};

/***/ }),

/***/ "./src/content/towers/MissileTower.ts":
/*!********************************************!*\
  !*** ./src/content/towers/MissileTower.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MissileTower": () => (/* binding */ MissileTower)
/* harmony export */ });
/* harmony import */ var _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/rendering/Texture */ "./src/core/rendering/Texture.ts");

var t2 = new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_0__.Texture("assets/turret-2-2.png");
var t3 = new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_0__.Texture("assets/turret-2-3.png");
var MissileTower = {
  name: "MissileTower",
  description: "Long-range splash tower",
  size: 2,
  range: 8,
  rotationRate: 90,
  fireRate: 1,
  cost: 20,
  projectile: {
    speed: 20,
    damage: 5,
    splashRadius: 1
  },
  levelSprites: ["tower-2-1", "tower-2-2", "tower-2-3"],
  tags: ["ground"],
  upgrades: [{
    cost: 20,
    dataDelta: {
      weapon: {
        projectileType: {
          damage: 10,
          splashRadius: 1.25
        }
      },
      sprite: {
        source: t2
      }
    }
  }, {
    cost: 40,
    dataDelta: {
      weapon: {
        projectileType: {
          damage: 10,
          splashRadius: 2
        }
      },
      sprite: {
        source: t3
      }
    }
  }],
  projectileSpawner: "missile"
};

/***/ }),

/***/ "./src/content/towers/SniperTower.ts":
/*!*******************************************!*\
  !*** ./src/content/towers/SniperTower.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SniperTower": () => (/* binding */ SniperTower)
/* harmony export */ });
/* harmony import */ var _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/rendering/Texture */ "./src/core/rendering/Texture.ts");

var t2 = new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_0__.Texture("assets/turret-4-2.png");
var t3 = new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_0__.Texture("assets/turret-4-3.png");
var SniperTower = {
  name: "Sniper Tower",
  description: "Long-range slow-firing tower.",
  size: 2,
  range: 12,
  rotationRate: 45,
  fireRate: 3.0,
  cost: 40,
  projectile: {
    speed: 40,
    damage: 10,
    splashRadius: 0
  },
  levelSprites: ["tower-4-1", "tower-4-2", "tower-4-3"],
  tags: ["air", "ground"],
  upgrades: [{
    cost: 50,
    dataDelta: {
      weapon: {
        projectileType: {
          damage: 15
        },
        rate: 2.5
      },
      rotationTarget: {
        turnRate: 60
      },
      range: {
        range: 13
      },
      sprite: {
        source: t2
      }
    }
  }, {
    cost: 100,
    dataDelta: {
      weapon: {
        projectileType: {
          damage: 20,
          splashRadius: 0.5
        }
      },
      rotationTarget: {
        turnRate: 90
      },
      range: {
        range: 15
      },
      sprite: {
        source: t3
      }
    }
  }],
  projectileSpawner: "bullet"
};

/***/ }),

/***/ "./src/content/towers/SwarmerTower.ts":
/*!********************************************!*\
  !*** ./src/content/towers/SwarmerTower.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwarmerTower": () => (/* binding */ SwarmerTower)
/* harmony export */ });
/* harmony import */ var _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/rendering/Texture */ "./src/core/rendering/Texture.ts");


var t2 = new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_1__.Texture("assets/turret-3-2.png");
var t3 = new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_1__.Texture("assets/turret-3-3.png");
var SwarmerTower = {
  name: "Swarmer Tower",
  description: "Rapidfire Anti-Air Tower",
  size: 2,
  range: 5,
  rotationRate: 270,
  fireRate: 0.5,
  cost: 20,
  projectile: {
    speed: 20,
    damage: 5,
    splashRadius: 0.2
  },
  barrels: [new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_0__.default(0.2, 0.1), new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_0__.default(0.2, 0.1)],
  levelSprites: ["tower-3-1", "tower-3-2", "tower-3-3"],
  tags: ["air"],
  upgrades: [{
    cost: 25,
    dataDelta: {
      weapon: {
        rate: 0.25,
        range: 6
      },
      sprite: {
        source: t2
      }
    }
  }, {
    cost: 50,
    dataDelta: {
      weapon: {
        range: 7,
        projectileType: {
          damage: 10
        }
      },
      sprite: {
        source: t3
      },
      rotationTarget: {
        turnRate: 360
      }
    }
  }],
  projectileSpawner: "swarmMissile"
};

/***/ }),

/***/ "./src/content/towers/TowerManager.ts":
/*!********************************************!*\
  !*** ./src/content/towers/TowerManager.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TowerManager": () => (/* binding */ TowerManager)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _core_components_behavior_click_AbstractClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/components/behavior/click/AbstractClick */ "./src/core/components/behavior/click/AbstractClick.ts");
/* harmony import */ var _core_components_behavior_click_Clickable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/components/behavior/click/Clickable */ "./src/core/components/behavior/click/Clickable.ts");
/* harmony import */ var _core_components_behavior_RotationTarget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/behavior/RotationTarget */ "./src/core/components/behavior/RotationTarget.ts");
/* harmony import */ var _core_components_data_Footprint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/components/data/Footprint */ "./src/core/components/data/Footprint.ts");
/* harmony import */ var _core_components_data_Name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/components/data/Name */ "./src/core/components/data/Name.ts");
/* harmony import */ var _core_components_data_Position__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _core_components_data_Range__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/components/data/Range */ "./src/core/components/data/Range.ts");
/* harmony import */ var _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/components/data/Rotation */ "./src/core/components/data/Rotation.ts");
/* harmony import */ var _core_components_data_Value__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/components/data/Value */ "./src/core/components/data/Value.ts");
/* harmony import */ var _core_components_marker_Sellable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/components/marker/Sellable */ "./src/core/components/marker/Sellable.ts");
/* harmony import */ var _core_components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/components/rendering/Sprite */ "./src/core/components/rendering/Sprite.ts");
/* harmony import */ var _core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _components_BaseComponent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/BaseComponent */ "./src/content/components/BaseComponent.ts");
/* harmony import */ var _components_Weapon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Weapon */ "./src/content/components/Weapon.ts");
/* harmony import */ var _prefabs_Bullet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../prefabs/Bullet */ "./src/content/prefabs/Bullet.ts");
/* harmony import */ var _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../core/rendering/Texture */ "./src/core/rendering/Texture.ts");
/* harmony import */ var _prefabs_Rocket__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../prefabs/Rocket */ "./src/content/prefabs/Rocket.ts");
/* harmony import */ var _core_components_rendering_RangeDisplay__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../core/components/rendering/RangeDisplay */ "./src/core/components/rendering/RangeDisplay.ts");
/* harmony import */ var _components_Creep__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/Creep */ "./src/content/components/Creep.ts");
/* harmony import */ var _prefabs_SwarmMissile__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../prefabs/SwarmMissile */ "./src/content/prefabs/SwarmMissile.ts");
/* harmony import */ var _core_components_behavior_Upgrade__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../core/components/behavior/Upgrade */ "./src/core/components/behavior/Upgrade.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_25__);




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
























var TowerManager = /*#__PURE__*/function () {
  function TowerManager(model, ecs) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, TowerManager);

    this.model = model;
    this.ecs = ecs;
    this.towerTextures = {
      "tower-1-1": new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_19__.Texture("assets/turret-1-1.png"),
      "tower-1-2": new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_19__.Texture("assets/turret-1-2.png"),
      "tower-1-3": new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_19__.Texture("assets/turret-1-3.png"),
      "tower-2-1": new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_19__.Texture("assets/turret-2-1.png"),
      "tower-2-2": new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_19__.Texture("assets/turret-2-2.png"),
      "tower-2-3": new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_19__.Texture("assets/turret-2-3.png"),
      "tower-3-1": new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_19__.Texture("assets/turret-3-1.png"),
      "tower-3-2": new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_19__.Texture("assets/turret-3-2.png"),
      "tower-3-3": new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_19__.Texture("assets/turret-3-3.png"),
      "tower-4-1": new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_19__.Texture("assets/turret-4-1.png"),
      "tower-4-2": new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_19__.Texture("assets/turret-4-2.png"),
      "tower-4-3": new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_19__.Texture("assets/turret-4-3.png")
    };
    this.towers = new Map();
    this.upgrades = new Map();
    this.projectileSpawners = {
      bullet: _prefabs_Bullet__WEBPACK_IMPORTED_MODULE_18__.bullet,
      missile: _prefabs_Rocket__WEBPACK_IMPORTED_MODULE_20__.missile,
      swarmMissile: _prefabs_SwarmMissile__WEBPACK_IMPORTED_MODULE_23__.swarmMissile
    };
    this.baseSprite = new _core_rendering_Texture__WEBPACK_IMPORTED_MODULE_19__.Texture("assets/turret-base.gif");
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(TowerManager, [{
    key: "add",
    value: function add(name, towerType) {
      this.towers.set(name, towerType);
      this.upgrades.set(name, this.combineUpgrades(towerType));
    }
  }, {
    key: "getTower",
    value: function getTower(name) {
      return this.towers.get(name);
    }
  }, {
    key: "createDemoTower",
    value: function createDemoTower(position, towerName) {
      var _this = this;

      var tower = this.towers.get(towerName);
      var id = this.ecs.createEntity();
      this.ecs.addComponent(id, _core_components_data_Position__WEBPACK_IMPORTED_MODULE_8__.PositionComponent, {
        position: function position() {
          return _this.model.getMousePosition().ceil().addConstant((1 - tower.size) / 2, (1 - tower.size) / 2);
        }
      });
      this.ecs.addComponent(id, _core_components_data_Range__WEBPACK_IMPORTED_MODULE_9__.RangeComponent, {
        range: tower.range
      });
      this.ecs.addComponent(id, _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_10__.RotationComponent);
      var offset = tower.size % 2 === 0 ? _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_15__.default.matching(-0.5) : _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_15__.default.ZERO;
      this.ecs.addComponent(id, _core_components_rendering_RangeDisplay__WEBPACK_IMPORTED_MODULE_21__.RangeDisplayComponent, {
        // strokeStyle: "#ffff"
        offset: offset.addConstant(0.5, 0.5)
      });
      this.ecs.addComponent(id, _core_components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_13__.default, {
        source: this.towerTextures[tower.levelSprites[0]],
        size: _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_15__.default.matching(tower.size)
      });
      this.ecs.addComponent(id, _core_components_data_Value__WEBPACK_IMPORTED_MODULE_11__.ValueComponent, {
        value: tower.cost
      });
      this.ecs.addComponent(id, _components_Weapon__WEBPACK_IMPORTED_MODULE_17__.default, {
        projectile: _prefabs_Bullet__WEBPACK_IMPORTED_MODULE_18__.bullet,
        rate: tower.fireRate,
        damage: tower.projectile.damage,
        tags: tower.tags,
        elapsed: -1
      });
      return id;
    }
  }, {
    key: "createTower",
    value: function createTower(position, towerName) {
      var _this2 = this;

      var tower = this.towers.get(towerName);
      var id = this.ecs.createEntity();
      var entity = this.ecs.getEntity(id);
      this.ecs.addComponent(entity, _core_components_data_Position__WEBPACK_IMPORTED_MODULE_8__.PositionComponent, {
        position: position
      });
      this.ecs.addComponent(id, _core_components_data_Position__WEBPACK_IMPORTED_MODULE_8__.PositionComponent, {
        position: (0,_core_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_14__.getDynamic)(position).ceil().addConstant((1 - tower.size) / 2, (1 - tower.size) / 2)
      });
      this.ecs.addComponent(id, _core_components_data_Range__WEBPACK_IMPORTED_MODULE_9__.RangeComponent, {
        range: tower.range
      });
      this.ecs.addComponent(id, _core_components_data_Rotation__WEBPACK_IMPORTED_MODULE_10__.RotationComponent);
      this.ecs.addComponent(id, _core_components_behavior_RotationTarget__WEBPACK_IMPORTED_MODULE_5__.RotationTargetComponent, {
        turnRate: tower.rotationRate,
        strictness: 1
      });
      this.ecs.addComponent(id, _core_components_data_Name__WEBPACK_IMPORTED_MODULE_7__.NameComponent, {
        name: tower.name
      });
      this.ecs.addComponent(id, _core_components_behavior_click_Clickable__WEBPACK_IMPORTED_MODULE_4__.ClickableComponent, {
        delta: _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_15__.default.matching(tower.size / 2),
        offset: _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_15__.default.matching(-0.5)
      });
      this.ecs.addComponent(id, _core_components_behavior_click_AbstractClick__WEBPACK_IMPORTED_MODULE_3__.AbstractClickComponent, {
        action: function action() {
          _this2.model.setSelection(id);
        }
      });
      this.ecs.addComponent(id, _core_components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_13__.default, {
        source: this.towerTextures[tower.levelSprites[0]],
        size: _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_15__.default.matching(tower.size),
        rotationOffset: 90
      });
      this.ecs.addComponent(id, _core_components_data_Footprint__WEBPACK_IMPORTED_MODULE_6__.FootprintComponent, {
        source: this.towerTextures[tower.levelSprites[0]],
        size: tower.size
      });
      this.ecs.addComponent(id, _components_BaseComponent__WEBPACK_IMPORTED_MODULE_16__.default, {
        source: this.baseSprite
      });
      console.log(tower.tags);
      this.ecs.addComponent(id, _components_Weapon__WEBPACK_IMPORTED_MODULE_17__.default, {
        projectile: this.projectileSpawners[tower.projectileSpawner],
        rate: tower.fireRate,
        damage: tower.projectile.damage,
        barrels: tower.barrels || [_core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_15__.default.ZERO],
        tags: tower.tags,
        projectileType: _objectSpread({}, tower.projectile)
      });
      this.ecs.addComponent(id, _core_components_marker_Sellable__WEBPACK_IMPORTED_MODULE_12__.default);
      this.ecs.addComponent(id, _core_components_data_Value__WEBPACK_IMPORTED_MODULE_11__.ValueComponent, {
        value: Math.floor(tower.cost * 0.8)
      });
      this.ecs.addComponent(id, _core_components_behavior_Upgrade__WEBPACK_IMPORTED_MODULE_24__.default, _objectSpread({}, (0,lodash__WEBPACK_IMPORTED_MODULE_25__.cloneDeep)(this.upgrades.get(towerName))));
      return id;
    }
  }, {
    key: "combineUpgrades",
    value: function combineUpgrades(tower) {
      var upgrades = tower.upgrades.slice();
      var baseData = {};
      var dataLayer = baseData;

      var _iterator = _createForOfIteratorHelper(upgrades),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var upgrade = _step.value;
          Object.assign(dataLayer, upgrade);
          dataLayer.dataDelta = _objectSpread({}, dataLayer.dataDelta);
          dataLayer.dataDelta.upgrade = _objectSpread({}, dataLayer.dataDelta.upgrade);
          dataLayer = dataLayer.dataDelta.upgrade;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      dataLayer.cost = 0;
      return baseData;
    }
  }, {
    key: "canPlace",
    value: function canPlace(position, towerName) {
      var dryRun = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var tower = this.towers.get(towerName);

      if (tower === null || tower === undefined) {
        return false;
      }

      console.debug("Tower null check passed");

      if (this.model.money < tower.cost) {
        return false;
      }

      console.debug("Tower money check passed");

      if (position.x < 11 || position.x + tower.size > 40) {
        return false;
      }

      if (position.y < 1 || position.y + tower.size > 30) {
        return false;
      } // Check for collisions with other towers.


      var _this$checkCollision = this.checkCollision(position.floor(), tower),
          collides = _this$checkCollision.collides,
          blocked = _this$checkCollision.blocked;

      if (collides) {
        return false;
      }

      console.debug("Tower collision check passed"); // Find and check paths

      var eastWestPath = this.model.getPath().findEastWest(blocked);

      if (eastWestPath.length == 0) {
        return false;
      }

      console.debug("Tower east-west path check passed");
      var northSouthPath = this.model.getPath().findNorthSouth(blocked);

      if (northSouthPath.length == 0) {
        return false;
      }

      console.debug("Tower north-south path check passed"); // Update model

      if (!dryRun) {
        this.model.setEastWestPath(eastWestPath);
        this.model.setNorthSouthPath(northSouthPath);
        this.ecs.getEntitiesWithComponent(_components_Creep__WEBPACK_IMPORTED_MODULE_22__.default).forEach(function (it) {
          if (it !== undefined) {
            it.data.pathFollower.invalidated = true;
          }
        });
      }

      return true;
    }
  }, {
    key: "checkCollision",
    value: function checkCollision(position, tower) {
      var nwOffset = Math.floor((tower.size - 1) / 2);
      var northWest = new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_15__.default(position.x - nwOffset, position.y - nwOffset);
      var swOffset = Math.floor(tower.size / 2);
      var southEast = new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_15__.default(position.x + swOffset, position.y + swOffset);
      var blocked = new Set();

      for (var x = northWest.x; x <= southEast.x; x++) {
        for (var y = northWest.y; y <= southEast.y; y++) {
          var checkVector = new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_15__.default(x, y);

          if (this.model.getMap().hasEntityAt(checkVector)) {
            blocked.clear();
            return {
              collides: true,
              blocked: blocked
            };
          }

          blocked.add(new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_15__.default(x, y));
        }
      }

      return {
        collides: false,
        blocked: blocked
      };
    }
  }]);

  return TowerManager;
}();

/***/ }),

/***/ "./src/content/types/ProjectileType.ts":
/*!*********************************************!*\
  !*** ./src/content/types/ProjectileType.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectileType": () => (/* binding */ ProjectileType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");

var ProjectileType = function ProjectileType() {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ProjectileType);

  this.speed = 5;
  this.damage = 5;
  this.splashRadius = 0.01;
};
ProjectileType.DEFAULT = new ProjectileType();

/***/ }),

/***/ "./src/core/Random.ts":
/*!****************************!*\
  !*** ./src/core/Random.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "random": () => (/* binding */ random)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);




var Random = /*#__PURE__*/function () {
  function Random() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Random);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Random, [{
    key: "gaussian",
    value: function gaussian() {
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
      var rand = 0;

      for (var i = 0; i < count; i++) {
        rand += Math.random();
      }

      return rand / count - 0.5;
    }
  }, {
    key: "withoutReplacement",
    value: function withoutReplacement(top) {
      var arr = [];

      for (var i = 1; i <= top; i++) {
        arr[i - 1] = i;
      }

      this.shuffleArray(arr);
      return arr;
    }
  }, {
    key: "withoutReplacementGenerator",
    value: function withoutReplacementGenerator(top) {
      var arr = [];

      for (var i = 1; i <= top; i++) {
        arr[i - 1] = i;
      }

      this.shuffleArray(arr);
      return /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _i;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _i = 0;

              case 1:
                if (!(_i < arr.length)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return arr[_i];

              case 4:
                _i++;
                _context.next = 1;
                break;

              case 7:
                if (false) {}

                _context.next = 10;
                return 0;

              case 10:
                _context.next = 7;
                break;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })();
    }
  }, {
    key: "shuffleArray",
    value: function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }]);

  return Random;
}();

var random = new Random();

/***/ }),

/***/ "./src/core/SoundEffect.ts":
/*!*********************************!*\
  !*** ./src/core/SoundEffect.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoundEffect": () => (/* binding */ SoundEffect)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


var SoundEffect = /*#__PURE__*/function () {
  function SoundEffect(source, cutoff) {
    var _this = this;

    var loop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var start = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var onLoad = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function (duration) {
      return;
    };

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SoundEffect);

    this.el = void 0;
    this.ready = false;
    this["continue"] = false;
    this.loop = false;
    this.start = 0;
    this.end = 0;
    this._playing = false;
    this.cutoff = 0;
    this.currentCutoffTimeout = void 0;
    this.currentLoopTimeout = void 0;
    this.currentDurationTimeout = void 0;
    this.el = new Audio(source);
    this.el.addEventListener("load", function () {
      _this.ready = true;
      _this.end = Math.min(cutoff, _this.el.duration);
      onLoad(_this.getDuration());
    }.bind(this));

    if (cutoff) {
      this.cutoff = cutoff;
    }

    this.start = start;
    this.loop = loop;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(SoundEffect, [{
    key: "getDuration",
    value: function getDuration() {
      return this.end - this.start;
    }
  }, {
    key: "play",
    value: function play() {
      var _this2 = this;

      this.el.play();
      this["continue"] = true;
      this.el.currentTime = this.start;
      this._playing = true;

      if (this.loop) {
        this.currentLoopTimeout = setTimeout(function () {
          if (!_this2["continue"]) return;
          _this2.el.currentTime = _this2.start;

          _this2.playRec();
        }, this.cutoff * 1000);
      } else if (this.cutoff > 0) {
        clearTimeout(this.currentCutoffTimeout);
        this.currentCutoffTimeout = setTimeout(function () {
          _this2.stop();
        }, this.cutoff * 1000);
      } else {
        clearTimeout(this.currentDurationTimeout);
        this.currentDurationTimeout = setTimeout(function () {
          return _this2._playing = false;
        }, this.el.duration * 1000);
      }
    }
  }, {
    key: "playRec",
    value: function playRec() {
      var _this3 = this;

      this.currentLoopTimeout = setTimeout(function () {
        if (!_this3["continue"]) return;
        _this3.el.currentTime = 0;

        _this3.playRec();
      }, this.cutoff * 1000);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.el.pause();
      this["continue"] = false;
      this._playing = false;
      this.el.currentTime = 0;
    }
  }, {
    key: "playing",
    get: function get() {
      return this._playing;
    }
  }]);

  return SoundEffect;
}();

/***/ }),

/***/ "./src/core/SoundEffectPool.ts":
/*!*************************************!*\
  !*** ./src/core/SoundEffectPool.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoundEffectPool": () => (/* binding */ SoundEffectPool)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _SoundEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SoundEffect */ "./src/core/SoundEffect.ts");



var SoundEffectPool = /*#__PURE__*/function () {
  function SoundEffectPool(poolSize, effect) {
    var _this = this;

    var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SoundEffectPool);

    this.pool = void 0;
    this.ids = void 0;
    this.duration = void 0;
    var baseEffect = new _SoundEffect__WEBPACK_IMPORTED_MODULE_2__.SoundEffect(effect, end, false, start, function (duration) {
      _this.duration = duration;
    });
    this.pool = [baseEffect];
    this.ids = [];

    for (var i = 1; i < poolSize; i++) {
      this.pool.push(new _SoundEffect__WEBPACK_IMPORTED_MODULE_2__.SoundEffect(effect, end, false, start));
      this.ids.push(i);
    }
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(SoundEffectPool, [{
    key: "play",
    value: function play() {
      var _this2 = this;

      var nextId = this.ids.splice(1, 1)[0];

      if (nextId === undefined) {
        return; // No available elements to play
      }

      this.pool[nextId].play();
      setTimeout(function () {
        _this2.ids.push(nextId);
      }, this.duration);
    }
  }]);

  return SoundEffectPool;
}();

/***/ }),

/***/ "./src/core/components/behavior/Draggable.ts":
/*!***************************************************!*\
  !*** ./src/core/components/behavior/Draggable.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Draggable": () => (/* binding */ Draggable),
/* harmony export */   "DraggableComponent": () => (/* binding */ DraggableComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Draggable = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Draggable, _Component);

  var _super = _createSuper(Draggable);

  function Draggable() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Draggable);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Draggable, [{
    key: "defaultData",
    value: function defaultData() {
      return {
        dragging: false,
        offset: _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.ZERO
      };
    }
  }, {
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }]);

  return Draggable;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var DraggableComponent = new Draggable();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DraggableComponent);

/***/ }),

/***/ "./src/core/components/behavior/Lifetime.ts":
/*!**************************************************!*\
  !*** ./src/core/components/behavior/Lifetime.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lifetime": () => (/* binding */ Lifetime),
/* harmony export */   "LifetimeComponent": () => (/* binding */ LifetimeComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Lifetime = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Lifetime, _Component);

  var _super = _createSuper(Lifetime);

  function Lifetime() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Lifetime);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Lifetime, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        lifetime: 1,
        elapsed: 0
      };
    }
  }]);

  return Lifetime;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var LifetimeComponent = new Lifetime();

/***/ }),

/***/ "./src/core/components/behavior/Magnet.ts":
/*!************************************************!*\
  !*** ./src/core/components/behavior/Magnet.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Magnet": () => (/* binding */ Magnet),
/* harmony export */   "MagnetComponent": () => (/* binding */ MagnetComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Magnet = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Magnet, _Component);

  var _super = _createSuper(Magnet);

  function Magnet() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Magnet);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Magnet, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        radius: 1,
        onSnap: function onSnap() {
          return;
        }
      };
    }
  }]);

  return Magnet;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var MagnetComponent = new Magnet();

/***/ }),

/***/ "./src/core/components/behavior/PathFollower.ts":
/*!******************************************************!*\
  !*** ./src/core/components/behavior/PathFollower.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PathFollower": () => (/* binding */ PathFollower),
/* harmony export */   "PathFollowerComponent": () => (/* binding */ PathFollowerComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var PathFollower = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(PathFollower, _Component);

  var _super = _createSuper(PathFollower);

  function PathFollower() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PathFollower);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PathFollower, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        path: [],
        point: 0,
        invalidated: false
      };
    }
  }]);

  return PathFollower;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var PathFollowerComponent = new PathFollower();

/***/ }),

/***/ "./src/core/components/behavior/PositionTarget.ts":
/*!********************************************************!*\
  !*** ./src/core/components/behavior/PositionTarget.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VelocityTarget": () => (/* binding */ VelocityTarget),
/* harmony export */   "VelocityTargetComponent": () => (/* binding */ VelocityTargetComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var VelocityTarget = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(VelocityTarget, _Component);

  var _super = _createSuper(VelocityTarget);

  function VelocityTarget() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, VelocityTarget);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(VelocityTarget, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        target: _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.ZERO,
        velocity: 3,
        strictness: 0.01
      };
    }
  }]);

  return VelocityTarget;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var VelocityTargetComponent = new VelocityTarget();

/***/ }),

/***/ "./src/core/components/behavior/RotationTarget.ts":
/*!********************************************************!*\
  !*** ./src/core/components/behavior/RotationTarget.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RotationTarget": () => (/* binding */ RotationTarget),
/* harmony export */   "RotationTargetComponent": () => (/* binding */ RotationTargetComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var RotationTarget = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(RotationTarget, _Component);

  var _super = _createSuper(RotationTarget);

  function RotationTarget() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, RotationTarget);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(RotationTarget, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        target: _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.ZERO,
        turnRate: 180,
        strictness: 0.05
      };
    }
  }]);

  return RotationTarget;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var RotationTargetComponent = new RotationTarget();

/***/ }),

/***/ "./src/core/components/behavior/Spawner.ts":
/*!*************************************************!*\
  !*** ./src/core/components/behavior/Spawner.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spawner": () => (/* binding */ Spawner),
/* harmony export */   "SpawnerComponent": () => (/* binding */ SpawnerComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Spawner = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Spawner, _Component);

  var _super = _createSuper(Spawner);

  function Spawner() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Spawner);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Spawner, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        rate: 1,
        elapsed: 0,
        count: 1,
        producer: function producer() {
          return;
        },
        limit: -1,
        total: 0
      };
    }
  }]);

  return Spawner;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var SpawnerComponent = new Spawner();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpawnerComponent);

/***/ }),

/***/ "./src/core/components/behavior/Stack.ts":
/*!***********************************************!*\
  !*** ./src/core/components/behavior/Stack.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stack": () => (/* binding */ Stack),
/* harmony export */   "StackComponent": () => (/* binding */ StackComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Stack = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Stack, _Component);

  var _super = _createSuper(Stack);

  function Stack() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Stack);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Stack, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        offset: _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.ZERO,
        parent: null,
        child: null,
        index: 0
      };
    }
  }]);

  return Stack;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var StackComponent = new Stack();

/***/ }),

/***/ "./src/core/components/behavior/Upgrade.ts":
/*!*************************************************!*\
  !*** ./src/core/components/behavior/Upgrade.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Upgrade": () => (/* binding */ Upgrade),
/* harmony export */   "UpgradeComponent": () => (/* binding */ UpgradeComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Upgrade = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Upgrade, _Component);

  var _super = _createSuper(Upgrade);

  function Upgrade() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Upgrade);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Upgrade, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        cost: 0,
        dataDelta: {}
      };
    }
  }]);

  return Upgrade;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var UpgradeComponent = new Upgrade();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpgradeComponent);

/***/ }),

/***/ "./src/core/components/behavior/click/AbstractClick.ts":
/*!*************************************************************!*\
  !*** ./src/core/components/behavior/click/AbstractClick.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractClick": () => (/* binding */ AbstractClick),
/* harmony export */   "AbstractClickComponent": () => (/* binding */ AbstractClickComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ecs/Component */ "./src/core/ecs/Component.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var AbstractClick = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(AbstractClick, _Component);

  var _super = _createSuper(AbstractClick);

  function AbstractClick() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AbstractClick);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AbstractClick, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        action: function action() {
          return;
        }
      };
    }
  }]);

  return AbstractClick;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var AbstractClickComponent = new AbstractClick();

/***/ }),

/***/ "./src/core/components/behavior/click/ClickComponentAdd.ts":
/*!*****************************************************************!*\
  !*** ./src/core/components/behavior/click/ClickComponentAdd.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickComponentAdd": () => (/* binding */ ClickComponentAdd),
/* harmony export */   "ClickComponentAddComponent": () => (/* binding */ ClickComponentAddComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _marker_Selected__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../marker/Selected */ "./src/core/components/marker/Selected.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var ClickComponentAdd = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(ClickComponentAdd, _Component);

  var _super = _createSuper(ClickComponentAdd);

  function ClickComponentAdd() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ClickComponentAdd);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ClickComponentAdd, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        component: _marker_Selected__WEBPACK_IMPORTED_MODULE_7__.default,
        data: {}
      };
    }
  }]);

  return ClickComponentAdd;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var ClickComponentAddComponent = new ClickComponentAdd();

/***/ }),

/***/ "./src/core/components/behavior/click/ClickComponentToggle.ts":
/*!********************************************************************!*\
  !*** ./src/core/components/behavior/click/ClickComponentToggle.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickComponentToggle": () => (/* binding */ ClickComponentToggle),
/* harmony export */   "ClickComponentToggleComponent": () => (/* binding */ ClickComponentToggleComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _marker_Selected__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../marker/Selected */ "./src/core/components/marker/Selected.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var ClickComponentToggle = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(ClickComponentToggle, _Component);

  var _super = _createSuper(ClickComponentToggle);

  function ClickComponentToggle() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ClickComponentToggle);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ClickComponentToggle, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        component: _marker_Selected__WEBPACK_IMPORTED_MODULE_7__.default,
        data: {}
      };
    }
  }]);

  return ClickComponentToggle;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var ClickComponentToggleComponent = new ClickComponentToggle();

/***/ }),

/***/ "./src/core/components/behavior/click/ClickComponentToggleMultiple.ts":
/*!****************************************************************************!*\
  !*** ./src/core/components/behavior/click/ClickComponentToggleMultiple.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickComponentToggleMultiple": () => (/* binding */ ClickComponentToggleMultiple),
/* harmony export */   "ClickComponentToggleMultipleComponent": () => (/* binding */ ClickComponentToggleMultipleComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ecs/Component */ "./src/core/ecs/Component.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var ClickComponentToggleMultiple = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(ClickComponentToggleMultiple, _Component);

  var _super = _createSuper(ClickComponentToggleMultiple);

  function ClickComponentToggleMultiple() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ClickComponentToggleMultiple);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ClickComponentToggleMultiple, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        components: [],
        data: []
      };
    }
  }]);

  return ClickComponentToggleMultiple;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var ClickComponentToggleMultipleComponent = new ClickComponentToggleMultiple();

/***/ }),

/***/ "./src/core/components/behavior/click/ClickDataMutate.ts":
/*!***************************************************************!*\
  !*** ./src/core/components/behavior/click/ClickDataMutate.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickDataMutate": () => (/* binding */ ClickDataMutate),
/* harmony export */   "ClickDataMutateComponent": () => (/* binding */ ClickDataMutateComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ecs/Component */ "./src/core/ecs/Component.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var ClickDataMutate = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(ClickDataMutate, _Component);

  var _super = _createSuper(ClickDataMutate);

  function ClickDataMutate() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ClickDataMutate);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ClickDataMutate, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        data: {}
      };
    }
  }]);

  return ClickDataMutate;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var ClickDataMutateComponent = new ClickDataMutate();

/***/ }),

/***/ "./src/core/components/behavior/click/Clickable.ts":
/*!*********************************************************!*\
  !*** ./src/core/components/behavior/click/Clickable.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Clickable": () => (/* binding */ Clickable),
/* harmony export */   "ClickableComponent": () => (/* binding */ ClickableComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Clickable = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Clickable, _Component);

  var _super = _createSuper(Clickable);

  function Clickable() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Clickable);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Clickable, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        delta: _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.ZERO,
        offset: _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.ZERO,
        thisClick: false
      };
    }
  }]);

  return Clickable;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var ClickableComponent = new Clickable();

/***/ }),

/***/ "./src/core/components/data/Acceleration.ts":
/*!**************************************************!*\
  !*** ./src/core/components/data/Acceleration.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Acceleration": () => (/* binding */ Acceleration),
/* harmony export */   "AccelerationComponent": () => (/* binding */ AccelerationComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Acceleration = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Acceleration, _Component);

  var _super = _createSuper(Acceleration);

  function Acceleration() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Acceleration);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Acceleration, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        acceleration: _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.ZERO
      };
    }
  }]);

  return Acceleration;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var AccelerationComponent = new Acceleration();

/***/ }),

/***/ "./src/core/components/data/Footprint.ts":
/*!***********************************************!*\
  !*** ./src/core/components/data/Footprint.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footprint": () => (/* binding */ Footprint),
/* harmony export */   "FootprintComponent": () => (/* binding */ FootprintComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Deals with grid-aligned sizes of entities.
 */
var Footprint = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Footprint, _Component);

  var _super = _createSuper(Footprint);

  function Footprint() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Footprint);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Footprint, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        size: 1,
        tracked: false
      };
    }
  }]);

  return Footprint;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var FootprintComponent = new Footprint();

/***/ }),

/***/ "./src/core/components/data/Health.ts":
/*!********************************************!*\
  !*** ./src/core/components/data/Health.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Health": () => (/* binding */ Health),
/* harmony export */   "HealthComponent": () => (/* binding */ HealthComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Health = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Health, _Component);

  var _super = _createSuper(Health);

  function Health() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Health);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Health, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        health: 10,
        maxHealth: 10
      };
    }
  }]);

  return Health;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var HealthComponent = new Health();

/***/ }),

/***/ "./src/core/components/data/Name.ts":
/*!******************************************!*\
  !*** ./src/core/components/data/Name.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Name": () => (/* binding */ Name),
/* harmony export */   "NameComponent": () => (/* binding */ NameComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Name = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Name, _Component);

  var _super = _createSuper(Name);

  function Name() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Name);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Name, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        name: "Unknown"
      };
    }
  }]);

  return Name;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var NameComponent = new Name();

/***/ }),

/***/ "./src/core/components/data/Position.ts":
/*!**********************************************!*\
  !*** ./src/core/components/data/Position.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Position": () => (/* binding */ Position),
/* harmony export */   "PositionComponent": () => (/* binding */ PositionComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Position = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Position, _Component);

  var _super = _createSuper(Position);

  function Position() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Position);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Position, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        position: _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.ZERO
      };
    }
  }]);

  return Position;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var PositionComponent = new Position();

/***/ }),

/***/ "./src/core/components/data/Range.ts":
/*!*******************************************!*\
  !*** ./src/core/components/data/Range.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Range": () => (/* binding */ Range),
/* harmony export */   "RangeComponent": () => (/* binding */ RangeComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Range = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Range, _Component);

  var _super = _createSuper(Range);

  function Range() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Range);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Range, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        range: 1
      };
    }
  }]);

  return Range;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var RangeComponent = new Range();

/***/ }),

/***/ "./src/core/components/data/Rotation.ts":
/*!**********************************************!*\
  !*** ./src/core/components/data/Rotation.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rotation": () => (/* binding */ Rotation),
/* harmony export */   "RotationComponent": () => (/* binding */ RotationComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Rotation = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Rotation, _Component);

  var _super = _createSuper(Rotation);

  function Rotation() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Rotation);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Rotation, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        rotation: 0
      };
    }
  }]);

  return Rotation;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var RotationComponent = new Rotation();

/***/ }),

/***/ "./src/core/components/data/Value.ts":
/*!*******************************************!*\
  !*** ./src/core/components/data/Value.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Value": () => (/* binding */ Value),
/* harmony export */   "ValueComponent": () => (/* binding */ ValueComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Value = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Value, _Component);

  var _super = _createSuper(Value);

  function Value() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Value);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Value, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        value: 0
      };
    }
  }]);

  return Value;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var ValueComponent = new Value();

/***/ }),

/***/ "./src/core/components/data/Velocity.ts":
/*!**********************************************!*\
  !*** ./src/core/components/data/Velocity.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Velocity": () => (/* binding */ Velocity),
/* harmony export */   "VelocityComponent": () => (/* binding */ VelocityComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Velocity = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Velocity, _Component);

  var _super = _createSuper(Velocity);

  function Velocity() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Velocity);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Velocity, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        velocity: _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.ZERO
      };
    }
  }]);

  return Velocity;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var VelocityComponent = new Velocity();

/***/ }),

/***/ "./src/core/components/marker/HealthDisplay.ts":
/*!*****************************************************!*\
  !*** ./src/core/components/marker/HealthDisplay.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthDisplay": () => (/* binding */ HealthDisplay),
/* harmony export */   "HealthDisplayComponent": () => (/* binding */ HealthDisplayComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _ecs_decorators_AutoName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ecs/decorators/AutoName */ "./src/core/ecs/decorators/AutoName.ts");





var _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var HealthDisplay = (0,_ecs_decorators_AutoName__WEBPACK_IMPORTED_MODULE_5__.AutoName)(_class = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(HealthDisplay, _Component);

  var _super = _createSuper(HealthDisplay);

  function HealthDisplay() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, HealthDisplay);

    return _super.apply(this, arguments);
  }

  return HealthDisplay;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_4__.Component)) || _class;
var HealthDisplayComponent = new HealthDisplay();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HealthDisplayComponent);

/***/ }),

/***/ "./src/core/components/marker/MagnetAttracted.ts":
/*!*******************************************************!*\
  !*** ./src/core/components/marker/MagnetAttracted.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MagnetAttracted": () => (/* binding */ MagnetAttracted),
/* harmony export */   "MagnetAttractedComponent": () => (/* binding */ MagnetAttractedComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var MagnetAttracted = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(MagnetAttracted, _Component);

  var _super = _createSuper(MagnetAttracted);

  function MagnetAttracted() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, MagnetAttracted);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(MagnetAttracted, [{
    key: "defaultData",
    value: function defaultData() {
      return {};
    }
  }, {
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }]);

  return MagnetAttracted;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var MagnetAttractedComponent = new MagnetAttracted();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagnetAttractedComponent);

/***/ }),

/***/ "./src/core/components/marker/Selected.ts":
/*!************************************************!*\
  !*** ./src/core/components/marker/Selected.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Selected": () => (/* binding */ Selected),
/* harmony export */   "SelectedComponent": () => (/* binding */ SelectedComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _ecs_decorators_AutoName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ecs/decorators/AutoName */ "./src/core/ecs/decorators/AutoName.ts");





var _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Selected = (0,_ecs_decorators_AutoName__WEBPACK_IMPORTED_MODULE_5__.AutoName)(_class = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(Selected, _Component);

  var _super = _createSuper(Selected);

  function Selected() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Selected);

    return _super.apply(this, arguments);
  }

  return Selected;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_4__.Component)) || _class;
var SelectedComponent = new Selected();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectedComponent);

/***/ }),

/***/ "./src/core/components/marker/Sellable.ts":
/*!************************************************!*\
  !*** ./src/core/components/marker/Sellable.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sellable": () => (/* binding */ Sellable),
/* harmony export */   "SellableComponent": () => (/* binding */ SellableComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Sellable = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Sellable, _Component);

  var _super = _createSuper(Sellable);

  function Sellable() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Sellable);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Sellable, [{
    key: "defaultData",
    value: function defaultData() {
      return {};
    }
  }, {
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }]);

  return Sellable;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var SellableComponent = new Sellable();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SellableComponent);

/***/ }),

/***/ "./src/core/components/rendering/AnimatedSprite.ts":
/*!*********************************************************!*\
  !*** ./src/core/components/rendering/AnimatedSprite.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimatedSprite": () => (/* binding */ AnimatedSprite),
/* harmony export */   "AnimatedSpriteComponent": () => (/* binding */ AnimatedSpriteComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _rendering_Texture__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../rendering/Texture */ "./src/core/rendering/Texture.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var AnimatedSprite = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(AnimatedSprite, _Component);

  var _super = _createSuper(AnimatedSprite);

  function AnimatedSprite() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AnimatedSprite);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AnimatedSprite, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        size: _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.Vector2.ONES,
        frameSize: _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.Vector2.matching(32),
        source: AnimatedSprite.NoTex,
        frames: [1, 1],
        frame: 0,
        currentDuration: 0,
        opacity: 1
      };
    }
  }]);

  return AnimatedSprite;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
AnimatedSprite.NoTex = new _rendering_Texture__WEBPACK_IMPORTED_MODULE_8__.Texture("assets/notex-anim.png", new _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.Vector2(64, 32));
var AnimatedSpriteComponent = new AnimatedSprite();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimatedSpriteComponent);

/***/ }),

/***/ "./src/core/components/rendering/LifetimeRender.ts":
/*!*********************************************************!*\
  !*** ./src/core/components/rendering/LifetimeRender.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LifetimeRender": () => (/* binding */ LifetimeRender),
/* harmony export */   "LifetimeRenderComponent": () => (/* binding */ LifetimeRenderComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var LifetimeRender = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(LifetimeRender, _Component);

  var _super = _createSuper(LifetimeRender);

  function LifetimeRender() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, LifetimeRender);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(LifetimeRender, [{
    key: "defaultData",
    value: function defaultData() {
      return {};
    }
  }, {
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }]);

  return LifetimeRender;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var LifetimeRenderComponent = new LifetimeRender();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LifetimeRenderComponent);

/***/ }),

/***/ "./src/core/components/rendering/LowSprite.ts":
/*!****************************************************!*\
  !*** ./src/core/components/rendering/LowSprite.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LowSprite": () => (/* binding */ LowSprite),
/* harmony export */   "LowSpriteComponent": () => (/* binding */ LowSpriteComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _rendering_Texture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../rendering/Texture */ "./src/core/rendering/Texture.ts");
/* harmony import */ var _ecs_decorators_AutoName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ecs/decorators/AutoName */ "./src/core/ecs/decorators/AutoName.ts");






var _class, _class2, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var LowSprite = (0,_ecs_decorators_AutoName__WEBPACK_IMPORTED_MODULE_8__.AutoName)(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(LowSprite, _Component);

  var _super = _createSuper(LowSprite);

  function LowSprite() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, LowSprite);

    _this = _super.call(this);

    if (LowSprite.NO_TEXTURE === undefined) {
      LowSprite.NO_TEXTURE = new _rendering_Texture__WEBPACK_IMPORTED_MODULE_7__.Texture("assets/notex.png", _geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default.matching(32));
    }

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(LowSprite, [{
    key: "defaultData",
    value: function defaultData() {
      return {
        source: LowSprite.NO_TEXTURE,
        size: LowSprite.DEFAULT_SIZE,
        offset: _geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default.ZERO
      };
    }
  }]);

  return LowSprite;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_5__.Component), _class2.NO_TEXTURE = undefined, _class2.DEFAULT_SIZE = _geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default.ONES, _temp)) || _class;
var LowSpriteComponent = new LowSprite();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LowSpriteComponent);

/***/ }),

/***/ "./src/core/components/rendering/PositionDebug.ts":
/*!********************************************************!*\
  !*** ./src/core/components/rendering/PositionDebug.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositionDebug": () => (/* binding */ PositionDebug),
/* harmony export */   "PositionDebugComponent": () => (/* binding */ PositionDebugComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var PositionDebug = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(PositionDebug, _Component);

  var _super = _createSuper(PositionDebug);

  function PositionDebug() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PositionDebug);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PositionDebug, [{
    key: "defaultData",
    value: function defaultData() {
      return {};
    }
  }, {
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }]);

  return PositionDebug;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var PositionDebugComponent = new PositionDebug();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PositionDebugComponent);

/***/ }),

/***/ "./src/core/components/rendering/RangeDisplay.ts":
/*!*******************************************************!*\
  !*** ./src/core/components/rendering/RangeDisplay.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RangeDisplay": () => (/* binding */ RangeDisplay),
/* harmony export */   "RangeDisplayComponent": () => (/* binding */ RangeDisplayComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var RangeDisplay = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(RangeDisplay, _Component);

  var _super = _createSuper(RangeDisplay);

  function RangeDisplay() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, RangeDisplay);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(RangeDisplay, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        range: 1,
        strokeStyle: "#ff0000ff",
        fillStyle: "#ffffff00",
        lineWidth: 0,
        offset: _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.ZERO
      };
    }
  }]);

  return RangeDisplay;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var RangeDisplayComponent = new RangeDisplay();

/***/ }),

/***/ "./src/core/components/rendering/RotationDebug.ts":
/*!********************************************************!*\
  !*** ./src/core/components/rendering/RotationDebug.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RotationDebug": () => (/* binding */ RotationDebug),
/* harmony export */   "RotationDebugComponent": () => (/* binding */ RotationDebugComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var RotationDebug = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(RotationDebug, _Component);

  var _super = _createSuper(RotationDebug);

  function RotationDebug() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, RotationDebug);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(RotationDebug, [{
    key: "defaultData",
    value: function defaultData() {
      return {};
    }
  }, {
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }]);

  return RotationDebug;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var RotationDebugComponent = new RotationDebug();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RotationDebugComponent);

/***/ }),

/***/ "./src/core/components/rendering/SelectionDisplay.ts":
/*!***********************************************************!*\
  !*** ./src/core/components/rendering/SelectionDisplay.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectionDisplay": () => (/* binding */ SelectionDisplay),
/* harmony export */   "SelectionDisplayComponent": () => (/* binding */ SelectionDisplayComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var SelectionDisplay = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(SelectionDisplay, _Component);

  var _super = _createSuper(SelectionDisplay);

  function SelectionDisplay() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SelectionDisplay);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(SelectionDisplay, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        range: 1,
        strokeStyle: "#ff0000ff",
        fillStyle: "#ffffff00",
        lineWidth: 0,
        offset: _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.ZERO,
        radius: 1
      };
    }
  }]);

  return SelectionDisplay;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var SelectionDisplayComponent = new SelectionDisplay();

/***/ }),

/***/ "./src/core/components/rendering/Sprite.ts":
/*!*************************************************!*\
  !*** ./src/core/components/rendering/Sprite.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sprite": () => (/* binding */ Sprite),
/* harmony export */   "SpriteComponent": () => (/* binding */ SpriteComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _rendering_Texture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../rendering/Texture */ "./src/core/rendering/Texture.ts");
/* harmony import */ var _ecs_decorators_AutoName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ecs/decorators/AutoName */ "./src/core/ecs/decorators/AutoName.ts");






var _class, _class2, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var Sprite = (0,_ecs_decorators_AutoName__WEBPACK_IMPORTED_MODULE_8__.AutoName)(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Sprite, _Component);

  var _super = _createSuper(Sprite);

  function Sprite() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Sprite);

    _this = _super.call(this);

    if (Sprite.NO_TEXTURE === undefined) {
      Sprite.NO_TEXTURE = new _rendering_Texture__WEBPACK_IMPORTED_MODULE_7__.Texture("assets/notex.png", _geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default.matching(32));
    }

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Sprite, [{
    key: "defaultData",
    value: function defaultData() {
      return {
        source: Sprite.NO_TEXTURE,
        size: Sprite.DEFAULT_SIZE,
        opacity: 1,
        offset: _geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default.ZERO,
        rotationOffset: 0
      };
    }
  }]);

  return Sprite;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_5__.Component), _class2.NO_TEXTURE = undefined, _class2.DEFAULT_SIZE = _geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default.ONES, _temp)) || _class;
var SpriteComponent = new Sprite();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpriteComponent);

/***/ }),

/***/ "./src/core/components/ui/ClickableDisplay.ts":
/*!****************************************************!*\
  !*** ./src/core/components/ui/ClickableDisplay.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickableDisplay": () => (/* binding */ ClickableDisplay),
/* harmony export */   "ClickableDisplayComponent": () => (/* binding */ ClickableDisplayComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var ClickableDisplay = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(ClickableDisplay, _Component);

  var _super = _createSuper(ClickableDisplay);

  function ClickableDisplay() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ClickableDisplay);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ClickableDisplay, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_6__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        background: "#77777755",
        backgroundHover: "#aaaaaa55"
      };
    }
  }]);

  return ClickableDisplay;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_5__.Component);
var ClickableDisplayComponent = new ClickableDisplay();

/***/ }),

/***/ "./src/core/components/ui/RegionRender.ts":
/*!************************************************!*\
  !*** ./src/core/components/ui/RegionRender.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Region": () => (/* binding */ Region),
/* harmony export */   "RegionComponent": () => (/* binding */ RegionComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Region = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Region, _Component);

  var _super = _createSuper(Region);

  function Region() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Region);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Region, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        delta: _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.ZERO,
        fillColor: "#555555",
        strokeColor: "#55555500"
      };
    }
  }]);

  return Region;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var RegionComponent = new Region();

/***/ }),

/***/ "./src/core/components/ui/TextRender.ts":
/*!**********************************************!*\
  !*** ./src/core/components/ui/TextRender.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextRender": () => (/* binding */ TextRender),
/* harmony export */   "TextRenderComponent": () => (/* binding */ TextRenderComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ecs_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ecs/Component */ "./src/core/ecs/Component.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var TextRender = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(TextRender, _Component);

  var _super = _createSuper(TextRender);

  function TextRender() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, TextRender);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(TextRender, [{
    key: "getName",
    value: function getName() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(this.constructor.name);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {
        text: "Sample text",
        style: "#000000ff",
        size: 1,
        font: "Montserrat",
        align: "center"
      };
    }
  }]);

  return TextRender;
}(_ecs_Component__WEBPACK_IMPORTED_MODULE_6__.Component);
var TextRenderComponent = new TextRender();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextRenderComponent);

/***/ }),

/***/ "./src/core/data/ActionMap.ts":
/*!************************************!*\
  !*** ./src/core/data/ActionMap.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action),
/* harmony export */   "ActionMap": () => (/* binding */ ActionMap)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Action = /*#__PURE__*/function () {
  function Action(name) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Action);

    this._name = void 0;
    this.handlers = [];
    this._name = name;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Action, [{
    key: "addHandler",
    value: function addHandler(handler) {
      this.handlers.push(handler);
    }
  }, {
    key: "invoke",
    value: function invoke(data) {
      for (var handler = 0; handler < this.handlers.length; handler++) {
        this.handlers[handler](this, data);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.handlers = [];
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }]);

  return Action;
}();
var ActionMap = /*#__PURE__*/function () {
  function ActionMap() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, ActionMap);

    this.actions = void 0;
    this.serializeActions = void 0;
    this.actions = new Map();
    this.serializeActions = [];
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(ActionMap, [{
    key: "createAction",
    value: function createAction(name) {
      var serialize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var action = new Action(name);
      this.actions.set(name, action);

      if (serialize) {
        this.serializeActions.push(name);
      }
    }
  }, {
    key: "addHandler",
    value: function addHandler(name, handler) {
      if (!this.actions.has(name)) {
        console.warn("Trying to add a handler on a nonexistent action.");
        return;
      }

      this.actions.get(name).addHandler(handler);
    }
  }, {
    key: "invoke",
    value: function invoke(name, data) {
      if (!this.actions.has(name)) {
        return;
      }

      this.actions.get(name).invoke(data);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.actions.clear();
    }
  }, {
    key: "clearListeners",
    value: function clearListeners() {
      var _iterator = _createForOfIteratorHelper(this.actions),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _action = _step.value;

          _action[1].clear();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "serialize",
    value: function serialize() {
      return (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(this.serializeActions);
    }
  }, {
    key: "asImmutable",
    value: function asImmutable() {
      return this;
    }
  }]);

  return ActionMap;
}();

/***/ }),

/***/ "./src/core/data/BaseGameModel.ts":
/*!****************************************!*\
  !*** ./src/core/data/BaseGameModel.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseGameModel": () => (/* binding */ BaseGameModel)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _components_data_Range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/data/Range */ "./src/core/components/data/Range.ts");
/* harmony import */ var _components_marker_Selected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/marker/Selected */ "./src/core/components/marker/Selected.ts");
/* harmony import */ var _components_rendering_RangeDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/rendering/RangeDisplay */ "./src/core/components/rendering/RangeDisplay.ts");
/* harmony import */ var _ecs_ECSManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ecs/ECSManager */ "./src/core/ecs/ECSManager.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _input_KeyboardInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../input/KeyboardInput */ "./src/core/input/KeyboardInput.ts");
/* harmony import */ var _input_MouseInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../input/MouseInput */ "./src/core/input/MouseInput.ts");
/* harmony import */ var _rendering_VirtualCanvas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../rendering/VirtualCanvas */ "./src/core/rendering/VirtualCanvas.ts");
/* harmony import */ var _systems_AbstractClickSystem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../systems/AbstractClickSystem */ "./src/core/systems/AbstractClickSystem.ts");
/* harmony import */ var _systems_AccelerationSystem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../systems/AccelerationSystem */ "./src/core/systems/AccelerationSystem.ts");
/* harmony import */ var _systems_AnimatedSpriteRenderSystem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../systems/AnimatedSpriteRenderSystem */ "./src/core/systems/AnimatedSpriteRenderSystem.ts");
/* harmony import */ var _systems_ClickableDisplaySystem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../systems/ClickableDisplaySystem */ "./src/core/systems/ClickableDisplaySystem.ts");
/* harmony import */ var _systems_ClickableSystem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../systems/ClickableSystem */ "./src/core/systems/ClickableSystem.ts");
/* harmony import */ var _systems_ClickComponentAddSystem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../systems/ClickComponentAddSystem */ "./src/core/systems/ClickComponentAddSystem.ts");
/* harmony import */ var _systems_ClickComponentToggleMultipleSystem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../systems/ClickComponentToggleMultipleSystem */ "./src/core/systems/ClickComponentToggleMultipleSystem.ts");
/* harmony import */ var _systems_ClickComponentToggleSystem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../systems/ClickComponentToggleSystem */ "./src/core/systems/ClickComponentToggleSystem.ts");
/* harmony import */ var _systems_ClickDataMutationSystem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../systems/ClickDataMutationSystem */ "./src/core/systems/ClickDataMutationSystem.ts");
/* harmony import */ var _systems_DraggableSystem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../systems/DraggableSystem */ "./src/core/systems/DraggableSystem.ts");
/* harmony import */ var _systems_FootprintSystem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../systems/FootprintSystem */ "./src/core/systems/FootprintSystem.ts");
/* harmony import */ var _systems_HealthDisplaySystem__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../systems/HealthDisplaySystem */ "./src/core/systems/HealthDisplaySystem.ts");
/* harmony import */ var _systems_HealthSystem__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../systems/HealthSystem */ "./src/core/systems/HealthSystem.ts");
/* harmony import */ var _systems_LifetimeRenderSystem__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../systems/LifetimeRenderSystem */ "./src/core/systems/LifetimeRenderSystem.ts");
/* harmony import */ var _systems_LifetimeSystem__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../systems/LifetimeSystem */ "./src/core/systems/LifetimeSystem.ts");
/* harmony import */ var _systems_LowSpriteRenderSystem__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../systems/LowSpriteRenderSystem */ "./src/core/systems/LowSpriteRenderSystem.ts");
/* harmony import */ var _systems_MagnetSystem__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../systems/MagnetSystem */ "./src/core/systems/MagnetSystem.ts");
/* harmony import */ var _systems_PathFollowerSystem__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../systems/PathFollowerSystem */ "./src/core/systems/PathFollowerSystem.ts");
/* harmony import */ var _systems_PositionDebugSystem__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../systems/PositionDebugSystem */ "./src/core/systems/PositionDebugSystem.ts");
/* harmony import */ var _systems_RangeDisplaySystem__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../systems/RangeDisplaySystem */ "./src/core/systems/RangeDisplaySystem.ts");
/* harmony import */ var _systems_RegionRenderSystem__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../systems/RegionRenderSystem */ "./src/core/systems/RegionRenderSystem.ts");
/* harmony import */ var _systems_RotationDebugSystem__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../systems/RotationDebugSystem */ "./src/core/systems/RotationDebugSystem.ts");
/* harmony import */ var _systems_RotationTargetSystem__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../systems/RotationTargetSystem */ "./src/core/systems/RotationTargetSystem.ts");
/* harmony import */ var _systems_SelectionRenderSystem__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../systems/SelectionRenderSystem */ "./src/core/systems/SelectionRenderSystem.ts");
/* harmony import */ var _systems_SpawnerSystem__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../systems/SpawnerSystem */ "./src/core/systems/SpawnerSystem.ts");
/* harmony import */ var _systems_SpriteRenderSystem__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../systems/SpriteRenderSystem */ "./src/core/systems/SpriteRenderSystem.ts");
/* harmony import */ var _systems_StackSystem__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../systems/StackSystem */ "./src/core/systems/StackSystem.ts");
/* harmony import */ var _systems_TextRenderSystem__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../systems/TextRenderSystem */ "./src/core/systems/TextRenderSystem.ts");
/* harmony import */ var _systems_VelocitySystem__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../systems/VelocitySystem */ "./src/core/systems/VelocitySystem.ts");
/* harmony import */ var _systems_VelocityTargetSystem__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../systems/VelocityTargetSystem */ "./src/core/systems/VelocityTargetSystem.ts");
/* harmony import */ var _GameMap__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./GameMap */ "./src/core/data/GameMap.ts");









































var BaseGameModel = /*#__PURE__*/function () {
  function BaseGameModel(virtualSize) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, BaseGameModel);

    this.eventQueue = [];
    this.ecs = void 0;
    this.virtualCanvas = void 0;
    this.lastTime = void 0;
    this.entityMap = void 0;
    this.running = void 0;
    this.parentElement = void 0;
    this.virtualSize = void 0;
    this.keys = void 0;
    this.mouse = void 0;
    this.paused = false;
    this.timeScale = 1;
    this.keySet = void 0;
    this.mouseAction = void 0;
    this.clicksPerFrame = void 0;
    this.actionSet = void 0;
    this.selection = -1;
    this.firstLoad = true;
    this.virtualSize = virtualSize;
    this.ecs = new _ecs_ECSManager__WEBPACK_IMPORTED_MODULE_5__.ECSManager();
    this.virtualCanvas = new _rendering_VirtualCanvas__WEBPACK_IMPORTED_MODULE_9__.VirtualCanvas(virtualSize);
    this.entityMap = new _GameMap__WEBPACK_IMPORTED_MODULE_40__.GameMap(_geometry_Vector2__WEBPACK_IMPORTED_MODULE_6__.default.ZERO, virtualSize, this.ecs);
    this.running = true;
    this.keySet = new Set();
    this.keys = new _input_KeyboardInput__WEBPACK_IMPORTED_MODULE_7__.KeyboardInput();
    this.mouse = new _input_MouseInput__WEBPACK_IMPORTED_MODULE_8__.MouseInput();
    this.setSelection = this.setSelection.bind(this);
    this.getSelection = this.getSelection.bind(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(BaseGameModel, [{
    key: "invalidateSelection",
    value: function invalidateSelection() {
      this.selection = -1;
    }
  }, {
    key: "getSelection",
    value: function getSelection() {
      if (this.selection === -1) {
        return null;
      }

      var entity = this.ecs.getEntity(this.selection, true);

      if (entity === undefined || entity === null) {
        return null;
      }

      return entity;
    }
  }, {
    key: "setSelection",
    value: function setSelection(id) {
      this.selection = id;
      var ids = this.ecs.getEntityIDsWithComponent(_components_marker_Selected__WEBPACK_IMPORTED_MODULE_3__.default);

      for (var i = 0; i < ids.length; i++) {
        this.ecs.removeComponent(ids[i], _components_marker_Selected__WEBPACK_IMPORTED_MODULE_3__.default); // TODO: Move to its own function

        if (this.ecs.hasComponent(ids[i], _components_data_Range__WEBPACK_IMPORTED_MODULE_2__.RangeComponent)) {
          this.ecs.removeComponent(ids[i], _components_rendering_RangeDisplay__WEBPACK_IMPORTED_MODULE_4__.RangeDisplayComponent);
        }
      }

      if (id === -1) {
        return;
      }

      this.ecs.addComponent(id, _components_marker_Selected__WEBPACK_IMPORTED_MODULE_3__.default);

      if (this.ecs.hasComponent(id, _components_data_Range__WEBPACK_IMPORTED_MODULE_2__.RangeComponent)) {
        this.ecs.addComponent(id, _components_rendering_RangeDisplay__WEBPACK_IMPORTED_MODULE_4__.RangeDisplayComponent);
      }
    }
  }, {
    key: "findCanvas",
    value: function findCanvas() {
      this.virtualCanvas.findCanvas();
    }
  }, {
    key: "getMousePosition",
    value: function getMousePosition() {
      return this.mouse.getMousePosition();
    }
  }, {
    key: "getMouseAction",
    value: function getMouseAction() {
      return this.mouseAction;
    }
  }, {
    key: "updateInput",
    value: function updateInput(_deltaTime) {
      this.mouseAction = "none";
      this.clicksPerFrame = 0;
      this.keySet.clear();
      this.mouse.update();
      this.keys.update();
    }
  }, {
    key: "clearMouse",
    value: function clearMouse() {
      this.mouseAction = "none";
    }
  }, {
    key: "install",
    value: function install(element) {
      this.virtualCanvas.install(element);
      this.lastTime = performance.now();
      this.parentElement = element;

      if (this.firstLoad) {
        this.firstInit(element);
      }
    }
  }, {
    key: "onFirstInit",
    value: function onFirstInit() {
      return;
    }
  }, {
    key: "firstInit",
    value: function firstInit(element) {
      var _this = this;

      this.firstLoad = false;
      this.initSystems();
      this.mouse.install(element, this.virtualCanvas);
      this.keys.install();
      this.mouse.addListener(function (interaction) {
        if (interaction.leftDown) {
          _this.mouseAction = "click";
          _this.clicksPerFrame++;
        }
      });
      this.keys.addListener(function (interaction) {
        if (interaction.down) {
          _this.keySet.add(interaction.key);
        }
      });
    }
  }, {
    key: "uninstall",
    value: function uninstall() {
      this.virtualCanvas.uninstall();
      this.keys.uninstall();
      this.ecs.clear();
      this.parentElement = null;
    }
  }, {
    key: "addSystems",
    value: function addSystems() {
      return;
    }
  }, {
    key: "initSystems",
    value: function initSystems() {
      // Input-based modification
      this.ecs.createSystem(new _systems_ClickableSystem__WEBPACK_IMPORTED_MODULE_14__.ClickableSystem(this.mouse.getMousePosition), -5);
      this.ecs.createSystem(new _systems_ClickComponentAddSystem__WEBPACK_IMPORTED_MODULE_15__.ClickComponentAddSystem(), -5);
      this.ecs.createSystem(new _systems_ClickComponentToggleSystem__WEBPACK_IMPORTED_MODULE_17__.ClickComponentToggleSystem(), -5);
      this.ecs.createSystem(new _systems_ClickComponentToggleMultipleSystem__WEBPACK_IMPORTED_MODULE_16__.ClickComponentToggleMultipleSystem(), -5);
      this.ecs.createSystem(new _systems_ClickDataMutationSystem__WEBPACK_IMPORTED_MODULE_18__.ClickDataMutateSystem(), -5);
      this.ecs.createSystem(new _systems_AbstractClickSystem__WEBPACK_IMPORTED_MODULE_10__.AbstractClickSystem(), -5); // Entity creation/deletion

      this.ecs.createSystem(new _systems_HealthSystem__WEBPACK_IMPORTED_MODULE_22__.HealthSystem(), -2);
      this.ecs.createSystem(new _systems_SpawnerSystem__WEBPACK_IMPORTED_MODULE_34__.SpawnerSystem(), -1);
      this.ecs.createSystem(new _systems_LifetimeSystem__WEBPACK_IMPORTED_MODULE_24__.LifetimeSystem(), -1); // Modifying "base" components

      this.ecs.createSystem(new _systems_PathFollowerSystem__WEBPACK_IMPORTED_MODULE_27__.PathFollowerSystem(), 0);
      this.ecs.createSystem(new _systems_StackSystem__WEBPACK_IMPORTED_MODULE_36__.StackSystem(), 0);
      this.ecs.createSystem(new _systems_VelocityTargetSystem__WEBPACK_IMPORTED_MODULE_39__.VelocityTargetSystem(), 0);
      this.ecs.createSystem(new _systems_RotationTargetSystem__WEBPACK_IMPORTED_MODULE_32__.RotationTargetSystem(), 0);
      this.ecs.createSystem(new _systems_MagnetSystem__WEBPACK_IMPORTED_MODULE_26__.MagnetSystem(), 0);
      this.ecs.createSystem(new _systems_DraggableSystem__WEBPACK_IMPORTED_MODULE_19__.DraggableSystem(this.mouse.getMousePosition), 0);
      this.ecs.createSystem(new _systems_FootprintSystem__WEBPACK_IMPORTED_MODULE_20__.FootprintSystem(this.entityMap), 0); // Base components

      this.ecs.createSystem(new _systems_AccelerationSystem__WEBPACK_IMPORTED_MODULE_11__.AccelerationSystem());
      this.ecs.createSystem(new _systems_VelocitySystem__WEBPACK_IMPORTED_MODULE_38__.VelocitySystem()); // Rendering

      this.ecs.createSystem(new _systems_LowSpriteRenderSystem__WEBPACK_IMPORTED_MODULE_25__.LowSpriteRenderSystem(this.virtualCanvas), 41);
      this.ecs.createSystem(new _systems_LifetimeRenderSystem__WEBPACK_IMPORTED_MODULE_23__.LifetimeRenderSystem(), 40);
      this.ecs.createSystem(new _systems_RangeDisplaySystem__WEBPACK_IMPORTED_MODULE_29__.RangeDisplaySystem(this.virtualCanvas), 49);
      this.ecs.createSystem(new _systems_SpriteRenderSystem__WEBPACK_IMPORTED_MODULE_35__.SpriteRenderSystem(this.virtualCanvas), 50);
      this.ecs.createSystem(new _systems_AnimatedSpriteRenderSystem__WEBPACK_IMPORTED_MODULE_12__.AnimatedSpriteRenderSystem(this.virtualCanvas), 50);
      this.ecs.createSystem(new _systems_HealthDisplaySystem__WEBPACK_IMPORTED_MODULE_21__.HealthRenderSystem(this.virtualCanvas), 50);
      this.ecs.createSystem(new _systems_RegionRenderSystem__WEBPACK_IMPORTED_MODULE_30__.RegionRenderSystem(this.virtualCanvas), 54);
      this.ecs.createSystem(new _systems_TextRenderSystem__WEBPACK_IMPORTED_MODULE_37__.TextRenderSystem(this.virtualCanvas), 55);
      this.ecs.createSystem(new _systems_ClickableDisplaySystem__WEBPACK_IMPORTED_MODULE_13__.ClickableDisplaySystem(this.mouse.getMousePosition, this.virtualCanvas), 59);
      this.ecs.createSystem(new _systems_SelectionRenderSystem__WEBPACK_IMPORTED_MODULE_33__.SelectionSystem(this.virtualCanvas), 59); // Debug

      this.ecs.createSystem(new _systems_RotationDebugSystem__WEBPACK_IMPORTED_MODULE_31__.RotationDebugSystem(this.virtualCanvas), 60);
      this.ecs.createSystem(new _systems_PositionDebugSystem__WEBPACK_IMPORTED_MODULE_28__.PositionDebugSystem(this.virtualCanvas), 60); // User-defined

      this.addSystems();
    }
  }, {
    key: "updateLastTime",
    value: function updateLastTime(time) {
      this.lastTime = time;
    }
  }, {
    key: "updateRawTime",
    value: function updateRawTime(time) {
      var deltaTime = time - this.lastTime;
      this.lastTime = time;
      this.update(deltaTime / 1000);
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      this.updateInput(deltaTime);
      this.virtualCanvas.clear();

      if (this.paused) {
        this.ecs.update(0, this);
      } else {
        this.ecs.update(deltaTime * this.timeScale, this);
      }

      this.onUpdate(deltaTime * this.timeScale);
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(_deltaTime) {
      return;
    }
  }, {
    key: "isRunning",
    value: function isRunning() {
      return this.running;
    }
  }, {
    key: "preStart",
    value: function preStart() {
      return;
    }
  }]);

  return BaseGameModel;
}();

/***/ }),

/***/ "./src/core/data/DynamicConstant.ts":
/*!******************************************!*\
  !*** ./src/core/data/DynamicConstant.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDynamic": () => (/* binding */ getDynamic)
/* harmony export */ });
// eslint-disable-next-line @typescript-eslint/ban-types
function getDynamic(dc) {
  return typeof dc === "function" ? dc() : dc;
}

/***/ }),

/***/ "./src/core/data/GameMap.ts":
/*!**********************************!*\
  !*** ./src/core/data/GameMap.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameMap": () => (/* binding */ GameMap)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/geometry/Vector2 */ "./src/core/geometry/Vector2.ts");



function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var GameMap = /*#__PURE__*/function () {
  function GameMap(minimum, maximum, manager) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, GameMap);

    this.positions = void 0;
    this.owners = void 0;
    this.entities = void 0;
    this.minimumBound = void 0;
    this.maximumBound = void 0;
    this.yScale = void 0;
    this.positions = new Map();
    this.owners = new Map();
    this.entities = new Set();
    this.minimumBound = minimum;
    this.maximumBound = maximum;
    this.yScale = this.maximumBound.x - this.minimumBound.x;
    manager.listenEvent("ecs:delete", this.listener.bind(this));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(GameMap, [{
    key: "getCoordinate",
    value: function getCoordinate(vector) {
      var x = vector.x - this.minimumBound.x;
      var y = vector.y - this.minimumBound.y;
      return y * (this.maximumBound.x - this.minimumBound.x) + x;
    }
  }, {
    key: "listener",
    value: function listener(entityEvent) {
      var entityID = entityEvent.entity.id;

      if (this.owners.has(entityID)) {
        var spaces = this.owners.get(entityID);

        var _iterator = _createForOfIteratorHelper(spaces),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var space = _step.value;
            this.positions["delete"](space);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        this.owners["delete"](entityID);
      }

      this.entities["delete"](entityID);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.positions.clear();
    }
  }, {
    key: "checkArea",
    value: function checkArea(northWest, southEast) {
      for (var y = northWest.y; y < southEast.y; y++) {
        for (var x = northWest.x; x < southEast.x; x++) {
          if (this.hasEntityAt(new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__.default(x, y))) {
            return false;
          }
        }
      }

      return true;
    }
  }, {
    key: "getEntityAt",
    value: function getEntityAt(position) {
      var coord = this.getCoordinate(position);

      if (this.positions.has(coord)) {
        return this.positions.get(coord);
      }

      return null;
    }
  }, {
    key: "hasEntityAt",
    value: function hasEntityAt(position) {
      var coord = this.getCoordinate(position);
      return this.positions.has(coord);
    }
  }, {
    key: "createEntityLink",
    value: function createEntityLink(position, entity) {
      if (!this.hasEntityAt(position)) {
        var coord = this.getCoordinate(position);
        this.positions.set(coord, entity);
        this.entities.add(entity.id);

        if (!this.owners.has(entity.id)) {
          this.owners.set(entity.id, new Set());
        }

        this.owners.get(entity.id).add(coord);
      } else {
        console.warn("Overlapping entity at ".concat(position.toString()));
      }
    }
  }, {
    key: "region",
    value: function region(northWest, southEast, entity) {
      for (var y = northWest.y; y < southEast.y; y++) {
        for (var x = northWest.x; x < southEast.x; x++) {
          var loc = northWest.addConstant(x, y);
          this.createEntityLink(loc, entity);
        }
      }
    }
  }, {
    key: "getNeighbors",
    value: function getNeighbors(position) {
      var x = position.x,
          y = position.y;
      var results = [];

      for (var dx = -1; dx <= 1; dx++) {
        for (var dy = -1; dy <= 1; dy++) {
          // Skip out of bounds
          if (x + dx > this.maximumBound.x || x + dx < this.minimumBound.x) {
            continue;
          }

          if (y + dy > this.maximumBound.y || y + dy < this.minimumBound.y) {
            continue;
          } // Skip self


          if (x == 0 && y == 0) {
            continue;
          }

          var neighborCoordinate = new _core_geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__.default(x + dx, y + dy);

          if (!this.hasEntityAt(neighborCoordinate)) {
            continue;
          }

          results.push(this.getEntityAt(neighborCoordinate));
        }
      }

      return results;
    }
  }, {
    key: "isBlocked",
    value: function isBlocked(v) {
      return this.hasEntityAt(v);
    }
  }]);

  return GameMap;
}();

/***/ }),

/***/ "./src/core/data/Pathfinder.ts":
/*!*************************************!*\
  !*** ./src/core/data/Pathfinder.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pathfinder": () => (/* binding */ Pathfinder)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _geometry_Direction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geometry/Direction */ "./src/core/geometry/Direction.ts");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var PathNode = function PathNode(parent, position) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, PathNode);

  this.parent = void 0;
  this.position = void 0;
  this.parent = parent;
  this.position = position;
};

var Pathfinder = /*#__PURE__*/function () {
  function Pathfinder() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, Pathfinder);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Pathfinder, null, [{
    key: "findPath",
    value: // TODO: Replace me with A*.
    function findPath(pathable, startingPosition, endingPositions) {
      var allowedDirections = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _geometry_Direction__WEBPACK_IMPORTED_MODULE_3__.Direction.getAllCardinal();
      var nwBound = arguments.length > 4 ? arguments[4] : undefined;
      var seBound = arguments.length > 5 ? arguments[5] : undefined;
      var blocked = arguments.length > 6 ? arguments[6] : undefined;
      var compress = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
      var queue = [new PathNode(null, startingPosition)];
      var newEndingPositions = new Set();
      var newBlocked = new Set();

      if (blocked) {
        blocked.forEach(function (it) {
          return newBlocked.add(it.toString());
        });
      }

      endingPositions.forEach(function (it) {
        return newEndingPositions.add(it.toString());
      });
      var visited = new Set();
      visited = visited.add(startingPosition.toString());

      while (queue.length > 0) {
        var node = queue.splice(0, 1)[0];
        var position = node.position;

        var _iterator = _createForOfIteratorHelper(allowedDirections),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var dir = _step.value;
            var child = position.add(dir.offset);

            if (child === undefined) {
              console.error("Something went wrong:");
              console.error(JSON.stringify(node));
              console.error(JSON.stringify(dir));
              console.error(queue);
              continue;
            }

            if (visited.has(child.toString())) {
              continue;
            }

            visited.add(child.toString());

            if (nwBound && child.x < nwBound.x || child.y < nwBound.y) {
              continue;
            }

            if (seBound && child.x > seBound.x || child.y > seBound.y) {
              continue;
            }

            if (pathable.isBlocked(child) || newBlocked.has(child.toString())) {
              continue;
            }

            var path = new PathNode(node, child);

            if (newEndingPositions.has(child.toString())) {
              return Pathfinder.fromPath(path, compress);
            }

            visited = visited.add(child.toString());
            queue.push(path);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      console.log("No path found.");
      return [];
    }
  }, {
    key: "fromPath",
    value: function fromPath(path, compress) {
      var current = path;
      var res = [];

      while (current != null) {
        res = [current.position].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(res));
        current = current.parent;
      }

      if (compress) {
        var newSolution = [res[0]];

        for (var i = 1; i < res.length - 1; i++) {
          var prev = newSolution[newSolution.length - 1];
          var curr = res[i];
          var next = res[i + 1];
          var prevDelta = curr.subtract(prev).normalize();
          var newDelta = next.subtract(curr).normalize(); // Same direction?

          if (!prevDelta.equals(newDelta)) {
            newSolution.push(curr);
            i++;
          }
        }

        newSolution.push(res[res.length - 1]);
        return newSolution;
      }

      return res;
    }
  }]);

  return Pathfinder;
}();

/***/ }),

/***/ "./src/core/ecs/Component.ts":
/*!***********************************!*\
  !*** ./src/core/ecs/Component.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


var Component = /*#__PURE__*/function () {
  function Component() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Component);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Component, [{
    key: "defaultData",
    value: function defaultData() {
      return {};
    }
  }, {
    key: "init",
    value: function init(initialData) {
      return Object.assign(this.defaultData(), initialData || {});
    }
  }]);

  return Component;
}();

/***/ }),

/***/ "./src/core/ecs/ECSManager.ts":
/*!************************************!*\
  !*** ./src/core/ecs/ECSManager.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ECSManager": () => (/* binding */ ECSManager),
/* harmony export */   "DefaultManager": () => (/* binding */ DefaultManager),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Entity */ "./src/core/ecs/Entity.ts");



function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var ECSManager = /*#__PURE__*/function () {
  function ECSManager() {
    var initialPoolSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ECSManager);

    this.nextId = 0;
    this.entities = void 0;
    this.entityComponents = void 0;
    this.systems = void 0;
    this.interestedSystems = void 0;
    this.allSystems = void 0;
    this.systemOrder = void 0;
    this.availableIDs = void 0;
    this.events = void 0;
    this.listeners = void 0;
    this.entities = new Map();
    this.systems = new Map();
    this.entityComponents = new Map();
    this.allSystems = new Set();
    this.systemOrder = [];
    this.update = this.update.bind(this);
    this.getEntityIDsWithComponent = this.getEntityIDsWithComponent.bind(this);
    this.getEntitiesWithComponent = this.getEntitiesWithComponent.bind(this);
    this.interestedSystems = new Map();
    this.availableIDs = [];
    this.events = [];
    this.listeners = new Map();

    for (var i = 0; i < initialPoolSize; i++) {
      this.createEntity({}, false);
      this.removeEntity(i);
    }
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ECSManager, [{
    key: "createEntity",
    value: function createEntity(initialData) {
      var allowReuse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (this.availableIDs.length > 0 && allowReuse) {
        var id = this.availableIDs.splice(0, 1)[0];
        var entity = this.entities.get(id);
        entity.data = initialData || {};
        entity.active = true;
        this.emitEvent("ecs:create", entity);
        return id;
      } else {
        var _id = this.nextId++;

        var _entity = new _Entity__WEBPACK_IMPORTED_MODULE_2__.Entity(_id, initialData);

        this.entities.set(_id, _entity);
        this.emitEvent("ecs:create", _entity);
        return _id;
      }
    }
  }, {
    key: "listenEvent",
    value: function listenEvent(event, listener) {
      if (!this.listeners.has(event)) {
        this.listeners.set(event, []);
      }

      this.listeners.get(event).push(listener);
    }
  }, {
    key: "emitEvent",
    value: function emitEvent(event, entity, extra) {
      this.events.push({
        event: event,
        entity: entity,
        extra: extra
      });
    }
  }, {
    key: "resolveId",
    value: function resolveId(entity) {
      if (typeof entity === "number" || typeof entity === "bigint") {
        if (entity >= this.nextId || !this.entities.has(entity)) {
          console.warn("Cannot resolve entity ".concat(entity, "; it does not exist."));
          return -1;
        }

        return entity;
      }

      return entity.id;
    }
  }, {
    key: "resolveEntity",
    value: function resolveEntity(entity) {
      var quiet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (typeof entity === "number" || typeof entity === "bigint") {
        var entityID = entity;

        if (entityID >= this.nextId || !this.entities.has(entityID)) {
          if (!quiet) {
            console.warn("Cannot resolve entity ".concat(entity, "; it does not exist."));
          }

          return null;
        }

        var e = this.entities.get(entity);

        if (!e.active) {
          if (!quiet) {
            console.warn("Cannot resolve entity ".concat(entity, "; it has been deleted."));
          }

          return null;
        }

        return e;
      }

      return entity;
    }
  }, {
    key: "createSystem",
    value: function createSystem(system) {
      var wave = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if (!this.systems.has(wave)) {
        this.systems.set(wave, new Set());
        this.systemOrder.push(wave);
        this.systemOrder.sort();
      }

      this.systems.get(wave).add(system);
      this.allSystems.add(system);
      var basis = system.getBasisComponent();

      if (basis !== null) {
        if (!this.interestedSystems.has(basis.getName())) {
          this.interestedSystems.set(basis.getName(), new Set());
        }

        this.interestedSystems.get(basis.getName()).add(system);
      }

      system.setManager(this);
    }
  }, {
    key: "removeSystem",
    value: function removeSystem(system) {
      this.allSystems["delete"](system);
      this.systems.forEach(function (systemSet) {
        if (systemSet.has(system)) {
          systemSet["delete"](system);
        }
      });
    }
  }, {
    key: "hasComponent",
    value: function hasComponent(entity, component) {
      var e = this.resolveEntity(entity);

      if (e === null || e === undefined) {
        return false;
      }

      return component.getName() in e.data;
    }
  }, {
    key: "addComponent",
    value: function addComponent(entityID, component, initialData) {
      var entity = this.resolveEntity(entityID);
      if (entity === null) return;
      entity.data[component.getName()] = component.init(initialData);

      if (this.interestedSystems.get(component.getName()) !== undefined) {
        var _iterator = _createForOfIteratorHelper(this.interestedSystems.get(component.getName())),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var system = _step.value;
            system.notify(component.getName(), entity);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      this.emitEvent("ecs:addComponent", entity, {
        component: component
      });

      if (!this.entityComponents.has(component.getName())) {
        this.entityComponents.set(component.getName(), new Set());
      }

      this.entityComponents.get(component.getName()).add(entity.id);
    }
  }, {
    key: "getEntity",
    value: function getEntity(entity) {
      var quiet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.resolveEntity(entity, quiet);
    }
  }, {
    key: "getEntityIDsWithComponent",
    value: function getEntityIDsWithComponent(component) {
      var componentName = component.getName();

      if (this.entityComponents.has(componentName)) {
        var res = [];

        var _iterator2 = _createForOfIteratorHelper(this.entityComponents.get(componentName)),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var id = _step2.value;
            var entity = this.resolveEntity(id, true);

            if (entity !== null && entity.active) {
              res.push(id);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return res;
      }

      return [];
    }
  }, {
    key: "getEntitiesWithComponent",
    value: function getEntitiesWithComponent(component) {
      var componentName = component.getName();

      if (this.entityComponents.has(componentName)) {
        var res = [];

        var _iterator3 = _createForOfIteratorHelper(this.entityComponents.get(componentName)),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var id = _step3.value;
            var entity = this.resolveEntity(id, true);

            if (entity !== null && entity.active && entity.data[componentName] !== undefined) {
              res.push(entity);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return res;
      }

      return [];
    }
  }, {
    key: "removeComponent",
    value: function removeComponent(entityID, component) {
      var entity = this.resolveEntity(entityID);
      if (entity === null) return;

      if (component.getName() in entity.data) {
        delete entity.data[component.getName()];
      }

      if (!this.entityComponents.has(component.getName())) {
        this.entityComponents.set(component.getName(), new Set());
      }

      this.emitEvent("ecs:removeComponent", entity, {
        component: component
      });
      this.entityComponents.get(component.getName())["delete"](entity.id);

      if (this.interestedSystems.has(component.getName())) {
        var systems = this.interestedSystems.get(component.getName());

        var _iterator4 = _createForOfIteratorHelper(systems),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var system = _step4.value;
            system.notify("__delete", this.entities.get(entity.id));
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }
  }, {
    key: "update",
    value: function update(elapsedTime, model) {
      for (var eventIdx = 0; eventIdx < this.events.length; eventIdx++) {
        var _event = this.events[eventIdx].event;

        if (this.listeners.has(_event)) {
          var listeners = this.listeners.get(_event);

          for (var listenerIdx = 0; listenerIdx < listeners.length; listenerIdx++) {
            listeners[listenerIdx](this.events[eventIdx]);
          }
        }
      }

      this.events.length = 0;

      for (var orderIdx = 0; orderIdx < this.systemOrder.length; orderIdx++) {
        var wave = this.systemOrder[orderIdx];
        var systems = this.systems.get(wave);

        var _iterator5 = _createForOfIteratorHelper(systems),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var system = _step5.value;
            system.update(elapsedTime, model);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }
  }, {
    key: "removeEntity",
    value: function removeEntity(entityID) {
      var entity = this.resolveEntity(entityID);
      if (entity === null) return;

      var _iterator6 = _createForOfIteratorHelper(this.allSystems),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var system = _step6.value;
          system.notify("__delete", this.entities.get(entity.id));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      this.emitEvent("ecs:delete", entity);
      entity.data = {};
      entity.active = false;
      this.availableIDs.push(entity.id);
    }
  }, {
    key: "clear",
    value: function clear() {
      // Notify all systems that we're done with this.
      var _iterator7 = _createForOfIteratorHelper(this.allSystems),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var system = _step7.value;
          system.notify("__clear", null);
        } // Actually remove the entity.

      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      var _iterator8 = _createForOfIteratorHelper(this.entities.keys()),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var entityID = _step8.value;
          this.entities["delete"](entityID);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      this.availableIDs = [];
      this.nextId = 0;
    }
  }]);

  return ECSManager;
}();
var DefaultManager = new ECSManager();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultManager);

/***/ }),

/***/ "./src/core/ecs/Entity.ts":
/*!********************************!*\
  !*** ./src/core/ecs/Entity.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Entity": () => (/* binding */ Entity)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");

var Entity = function Entity(id, initialData) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Entity);

  this.id = void 0;
  this.data = void 0;
  this.active = true;
  this.id = id;
  this.data = initialData || {};
};

/***/ }),

/***/ "./src/core/ecs/System.ts":
/*!********************************!*\
  !*** ./src/core/ecs/System.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseSystem": () => (/* binding */ BaseSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable @typescript-eslint/no-unused-vars */
var BaseSystem = /*#__PURE__*/function () {
  function BaseSystem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, BaseSystem);

    this.entities = new Map();
    this.manager = void 0;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(BaseSystem, [{
    key: "checkInterval",
    value: function checkInterval(deltaTime, data) {
      if (deltaTime < 0) {
        return false;
      }

      if (data.rate <= 0 || data.elapsed < 0) {
        return false;
      }

      data.elapsed += deltaTime;

      if (data.elapsed >= data.rate) {
        data.elapsed -= data.rate;
        return true;
      }

      return false;
    }
  }, {
    key: "notify",
    value: function notify(notification, entity, data) {
      if (notification === "__clear") {
        this.entities.clear();
      } else if (notification === "__delete") {
        this.entities["delete"](entity.id);
      } else if (notification === "__remove_component") {
        var componentName = data.componentName;
        var basis = this.getBasisComponent();

        if (basis.getName() === componentName) {
          this.entities["delete"](entity.id);
        }
      } else if (this.checkBasis(notification, entity)) {
        if (this.isInterested(notification, entity)) {
          this.entities.set(entity.id, entity);
        }
      }
    }
  }, {
    key: "onManagerAwake",
    value: function onManagerAwake() {
      return;
    }
  }, {
    key: "setManager",
    value: function setManager(manager) {
      this.manager = manager;
      this.onManagerAwake();
    }
  }, {
    key: "checkBasis",
    value: function checkBasis(componentName, entity) {
      var required = this.getRequiredComponents();
      var excluded = this.getExcludedComponents();
      return this.checkRequired(componentName, entity, required) && this.checkExcluded(componentName, entity, excluded);
    }
  }, {
    key: "checkRequired",
    value: function checkRequired(componentName, entity, required) {
      var _iterator = _createForOfIteratorHelper(required),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var requirement = _step.value;

          if (!(requirement.getName() in entity.data)) {
            console.warn("Could not find required component ".concat(requirement.getName(), " while adding ").concat(componentName, "; this is a required component and ").concat(componentName, " will not trigger related systems' interest."));
            return false;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return true;
    }
  }, {
    key: "checkExcluded",
    value: function checkExcluded(componentName, entity, excluded) {
      var _iterator2 = _createForOfIteratorHelper(excluded),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var exclusion = _step2.value;

          if (exclusion.getName() in entity.data) {
            console.warn("Found excluded component ".concat(exclusion.getName(), " while adding ").concat(componentName, "; this is an excluded component and ").concat(componentName, " will not trigger related systems' interest."));
            return false;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return true;
    }
  }, {
    key: "update",
    value: function update(deltaTime, model) {
      this.systemUpdate(deltaTime, model);

      var _iterator3 = _createForOfIteratorHelper(this.entities.values()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _entity2 = _step3.value;
          this.updateEntity(deltaTime, _entity2, model);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "systemUpdate",
    value: function systemUpdate(deltaTime, model) {
      return;
    }
  }, {
    key: "listener",
    value: function listener(entityEvent) {
      var event = entityEvent.event,
          entity = entityEvent.entity,
          extra = entityEvent.extra;

      if (!this.entities.has(entity.id)) {
        return;
      }

      this.onEvent(event, entity, extra);
    }
  }, {
    key: "listenerNoCheck",
    value: function listenerNoCheck(entityEvent) {
      var event = entityEvent.event,
          entity = entityEvent.entity,
          extra = entityEvent.extra;
      this.onEvent(event, entity, extra);
    }
  }, {
    key: "listen",
    value: function listen(event) {
      var requireComponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (requireComponent) {
        this.manager.listenEvent(event, this.listener.bind(this));
      } else {
        this.manager.listenEvent(event, this.listenerNoCheck.bind(this));
      }
    }
  }, {
    key: "onEvent",
    value: function onEvent(event, entity, extra) {
      return;
    }
    /**
     * @returns The component that triggers interest in an entity.
     */

  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return null;
    }
    /**
     * @returns The components that must already be present on the entity.
     */

  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      return new Set();
    }
    /**
     * @returns The components that must not be present on the entity.
     */

  }, {
    key: "getExcludedComponents",
    value: function getExcludedComponents() {
      return new Set();
    }
  }, {
    key: "isInterested",
    value: function isInterested(_componentName, _entity) {
      return true;
    }
  }, {
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity, mode) {
      return;
    }
  }]);

  return BaseSystem;
}();

/***/ }),

/***/ "./src/core/ecs/decorators/AutoName.ts":
/*!*********************************************!*\
  !*** ./src/core/ecs/decorators/AutoName.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoName": () => (/* binding */ AutoName)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


function AutoName(target) {
  return /*#__PURE__*/function (_target) {
    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(_class, _target);

    var _super = _createSuper(_class);

    function _class() {
      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, _class);

      return _super.apply(this, arguments);
    }

    (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(_class, [{
      key: "getName",
      value: function getName() {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.lowerFirst)(target.name);
      }
    }]);

    return _class;
  }(target);
}

/***/ }),

/***/ "./src/core/ecs/decorators/Basis.ts":
/*!******************************************!*\
  !*** ./src/core/ecs/decorators/Basis.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Basis": () => (/* binding */ Basis)
/* harmony export */ });
var Basis = function Basis(basisComponent) {
  return function (target) {
    target.prototype.getBasisComponent = function () {
      return basisComponent;
    };
  };
};

/***/ }),

/***/ "./src/core/ecs/decorators/Required.ts":
/*!*********************************************!*\
  !*** ./src/core/ecs/decorators/Required.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Required": () => (/* binding */ Required)
/* harmony export */ });
var Required = function Required(components) {
  return function (target) {
    var set = new Set();

    for (var i = 0; i < components.length; i++) {
      set.add(components[i]);
    }

    target.prototype.getRequiredComponents = function () {
      return set;
    };
  };
};

/***/ }),

/***/ "./src/core/geometry/Circle.ts":
/*!*************************************!*\
  !*** ./src/core/geometry/Circle.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Circle)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var Circle = /*#__PURE__*/function () {
  function Circle(center, radius) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Circle);

    this._center = void 0;
    this._radius = void 0;
    this._center = center;
    this._radius = radius;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Circle, [{
    key: "center",
    get: function get() {
      return this._center;
    }
  }, {
    key: "radius",
    get: function get() {
      return this._radius;
    }
  }]);

  return Circle;
}();



/***/ }),

/***/ "./src/core/geometry/Collision.ts":
/*!****************************************!*\
  !*** ./src/core/geometry/Collision.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "circleLineCollision": () => (/* binding */ circleLineCollision),
/* harmony export */   "circlePointCollision": () => (/* binding */ circlePointCollision),
/* harmony export */   "PointRadiusPointCollision": () => (/* binding */ PointRadiusPointCollision),
/* harmony export */   "rectPointCollision": () => (/* binding */ rectPointCollision),
/* harmony export */   "rectRectCollision": () => (/* binding */ rectRectCollision)
/* harmony export */ });
/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector2 */ "./src/core/geometry/Vector2.ts");


/**
 * Line-Circle Intersection
 * @source https://stackoverflow.com/questions/37224912/circle-line-segment-collision
 *
 * @param circle The circle to test for intersection.
 * @param pt1 The first point of the line.
 * @param pt2 The second point of the line.
 */
function circleLineCollision(circle, pt1, pt2) {
  var v1 = new _Vector2__WEBPACK_IMPORTED_MODULE_0__.default(pt2.x - pt1.x, pt2.y - pt1.y);
  var v2 = new _Vector2__WEBPACK_IMPORTED_MODULE_0__.default(pt1.x - circle.center.x, pt1.y - circle.center.y);
  var b = -2 * (v1.x * v2.x + v1.y * v2.y);
  var c = 2 * (v1.x * v1.x + v1.y * v1.y);
  var d = Math.sqrt(b * b - 2 * c * (v2.x * v2.x + v2.y * v2.y - circle.radius * circle.radius));

  if (isNaN(d)) {
    // no intercept
    return false;
  } // These represent the unit distance of point one and two on the line


  var u1 = (b - d) / c;
  var u2 = (b + d) / c;

  if (u1 <= 1 && u1 >= 0) {
    // If point on the line segment
    return true;
  }

  if (u2 <= 1 && u2 >= 0) {
    // If point on the line segment
    return true;
  }

  return false;
}
function circlePointCollision(circle, point) {
  return PointRadiusPointCollision(circle.center, circle.radius, point);
}
function PointRadiusPointCollision(point1, radius, point2) {
  return _Vector2__WEBPACK_IMPORTED_MODULE_0__.default.distance(point1, point2) <= radius;
}
function rectPointCollision(nw1, se1, pt) {
  return pt.x >= nw1.x && pt.x <= se1.x && pt.y >= nw1.y && pt.y <= se1.y;
}
function rectRectCollision(nw1, se1, nw2, se2) {
  return nw1.x <= se2.x && se1.x >= nw2.x && nw1.y <= se2.y && se1.x >= nw2.y;
}

/***/ }),

/***/ "./src/core/geometry/Direction.ts":
/*!****************************************!*\
  !*** ./src/core/geometry/Direction.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Direction": () => (/* binding */ Direction)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vector2 */ "./src/core/geometry/Vector2.ts");



var Direction = /*#__PURE__*/function () {
  function Direction(offset) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Direction);

    this.offset = void 0;
    this.offset = offset;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Direction, null, [{
    key: "getAllCardinal",
    value: function getAllCardinal() {
      if (this.cardinal === undefined) {
        this.cardinal = new Set();
        this.cardinal.add(this.NORTH);
        this.cardinal.add(this.EAST);
        this.cardinal.add(this.SOUTH);
        this.cardinal.add(this.WEST);
      }

      return this.cardinal;
    }
  }, {
    key: "getAllDirections",
    value: function getAllDirections() {
      if (this.all === undefined) {
        this.all = new Set();
        this.all.add(this.NORTH);
        this.all.add(this.NORTHEAST);
        this.all.add(this.EAST);
        this.all.add(this.SOUTHEAST);
        this.all.add(this.SOUTH);
        this.all.add(this.SOUTHWEST);
        this.all.add(this.WEST);
        this.all.add(this.NORTHWEST);
      }

      return this.all;
    }
  }]);

  return Direction;
}();
Direction.NORTH = new Direction(new _Vector2__WEBPACK_IMPORTED_MODULE_2__.default(0, -1));
Direction.NORTHEAST = new Direction(new _Vector2__WEBPACK_IMPORTED_MODULE_2__.default(1, -1));
Direction.EAST = new Direction(new _Vector2__WEBPACK_IMPORTED_MODULE_2__.default(1, 0));
Direction.SOUTHEAST = new Direction(new _Vector2__WEBPACK_IMPORTED_MODULE_2__.default(1, 1));
Direction.SOUTH = new Direction(new _Vector2__WEBPACK_IMPORTED_MODULE_2__.default(0, 1));
Direction.SOUTHWEST = new Direction(new _Vector2__WEBPACK_IMPORTED_MODULE_2__.default(-1, 1));
Direction.WEST = new Direction(new _Vector2__WEBPACK_IMPORTED_MODULE_2__.default(-1, 0));
Direction.NORTHWEST = new Direction(new _Vector2__WEBPACK_IMPORTED_MODULE_2__.default(-1, -1));
Direction.all = undefined;
Direction.cardinal = undefined;

/***/ }),

/***/ "./src/core/geometry/Vector2.ts":
/*!**************************************!*\
  !*** ./src/core/geometry/Vector2.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vector2": () => (/* binding */ Vector2),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");




/**
 * Immutable Vector2 class.
 */
var Vector2 = /*#__PURE__*/function () {
  /**
   * A constant zero vector.
   */

  /**
   * A constant one vector.
   */

  /**
   * Initializes a vector with X and Y components.
   *
   * @param x The X component.
   * @param y The Y component.
   */
  function Vector2(x, y) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Vector2);

    this._x = 0;
    this._y = 0;
    this._x = x;
    this._y = y;
  }
  /**
   * @returns A normalized random vector in Quadrant 1.
   */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Vector2, [{
    key: "x",
    get: function get() {
      return this._x;
    }
  }, {
    key: "y",
    get: function get() {
      return this._y;
    }
  }, {
    key: "squareMagnitude",
    value: function squareMagnitude() {
      return Math.pow(this.x, 2) + Math.pow(this.y, 2);
    }
  }, {
    key: "magnitude",
    value: function magnitude() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
  }, {
    key: "normalize",
    value: function normalize() {
      var magnitude = this.magnitude();

      if (magnitude == 0) {
        return Vector2.ZERO;
      }

      return new Vector2(this.x / magnitude, this.y / magnitude);
    }
  }, {
    key: "piecewiseScale",
    value: function piecewiseScale(scalar) {
      return new Vector2(this.x * scalar.x, this.y * scalar.y);
    }
  }, {
    key: "scale",
    value: function scale(scalar) {
      return new Vector2(this.x * scalar, this.y * scalar);
    }
  }, {
    key: "add",
    value: function add(other) {
      return new Vector2(this.x + other.x, this.y + other.y);
    }
  }, {
    key: "addConstant",
    value: function addConstant(x, y) {
      return new Vector2(this.x + x, this.y + y);
    }
  }, {
    key: "floor",
    value: function floor() {
      return new Vector2(Math.floor(this.x), Math.floor(this.y));
    }
  }, {
    key: "ceil",
    value: function ceil() {
      return new Vector2(Math.ceil(this.x), Math.ceil(this.y));
    }
    /**
     * Adds another vector to this vector, scaling the other by a given factor.
     *
     * @param other The other vector to add.
     * @param scalar The amount to scale the other vector by.
     * @returns The resulting vector of this + other * scalar.
     */

  }, {
    key: "addScaled",
    value: function addScaled(other, scalar) {
      return new Vector2(this.x + other.x * scalar, this.y + other.y * scalar);
    }
  }, {
    key: "subtract",
    value: function subtract(other) {
      return new Vector2(this.x - other.x, this.y - other.y);
    }
    /**
     * Subtracts another vector from this vector, scaling the other by a given factor.
     *
     * @param other The other vector to subtract.
     * @param scalar The amount to scale the other vector by.
     * @returns The resulting vector of this - other * scalar.
     */

  }, {
    key: "subtractScaled",
    value: function subtractScaled(other, scalar) {
      return new Vector2(this.x - other.x * scalar, this.y - other.y * scalar);
    }
  }, {
    key: "rotate",
    value: function rotate(degrees) {
      var rad = degrees * Math.PI / 180;
      var val = new Vector2(this.x * Math.cos(rad) - Math.sin(rad) * this.y, this.x * Math.sin(rad) + this.y * Math.cos(rad));
      return val;
    }
  }, {
    key: "toAngle",
    value: function toAngle() {
      return Math.atan2(this.y, this.x) * (180 / Math.PI);
    }
  }, {
    key: "determinant",
    value: function determinant(other) {
      return this.x * other.y - this.y * other.x;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.x, ",").concat(this.y);
    }
  }, {
    key: "equals",
    value: function equals(other) {
      return other !== undefined && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(other) === "object" && Object.prototype.hasOwnProperty.call(other, "_x") && Object.prototype.hasOwnProperty.call(other, "_y") && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore We literally test for it above
      other.x === this.x && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore We literally test for it above
      other.y === this.y;
    }
  }, {
    key: "hashCode",
    value: function hashCode() {
      return 31 * this.x + this.y;
    }
  }], [{
    key: "random",
    value: function random() {
      return new Vector2(Math.random(), Math.random()).normalize();
    }
    /**
     * @param angle The angle to create the vector from, in degrees.
     * @returns A unit vector pointing towards the given angle.
     */

  }, {
    key: "fromAngle",
    value: function fromAngle(angle, scalar) {
      return new Vector2(Math.cos(angle * (Math.PI / 180)) * (scalar || 1), Math.sin(angle * (Math.PI / 180)) * (scalar || 1));
    }
    /**
     * @param number The number to put into both components of the vector.
     * @returns A vector with both components equal to number.
     */

  }, {
    key: "matching",
    value: function matching(number) {
      return new Vector2(number, number);
    }
    /**
     * Finds the distance between two Vector2s.
     *
     * @param pos1 The first point.
     * @param pos2 The second point.
     * @returns The distance between the two points.
     */

  }, {
    key: "distance",
    value: function distance(pos1, pos2) {
      return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
    }
    /**
     * Finds the square distance between two Vector2s. Tends to be faster than
     * {@link Vector2#distance}.
     *
     * @param pos1 The first point.
     * @param pos2 The second point.
     * @returns The distance between the two points.
     */

  }, {
    key: "squareDistance",
    value: function squareDistance(pos1, pos2) {
      return Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2);
    }
  }]);

  return Vector2;
}();
Vector2.ZERO = new Vector2(0, 0);
Vector2.ONES = new Vector2(1, 1);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vector2);

/***/ }),

/***/ "./src/core/input/KeyboardInput.ts":
/*!*****************************************!*\
  !*** ./src/core/input/KeyboardInput.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardInput": () => (/* binding */ KeyboardInput)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


var KeyboardInput = /*#__PURE__*/function () {
  function KeyboardInput() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, KeyboardInput);

    this.listeners = [];
    this.events = [];
    this.keyListeners = new Map();
    this.keyPushed = new Map();
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(KeyboardInput, [{
    key: "install",
    value: function install() {
      window.addEventListener("keydown", this.keyDown);
      window.addEventListener("keyup", this.keyUp);
    }
  }, {
    key: "keyDown",
    value: function keyDown(evt) {
      this.events.push({
        key: evt.key,
        down: true
      });
    }
  }, {
    key: "keyUp",
    value: function keyUp(evt) {
      this.events.push({
        key: evt.key,
        down: false
      });
    }
  }, {
    key: "addListener",
    value: function addListener(listener) {
      this.listeners.push(listener);
    }
  }, {
    key: "addKeyListener",
    value: function addKeyListener(key, listener) {
      if (!this.keyListeners.has(key.toLowerCase())) {
        this.keyListeners.set(key.toLowerCase(), []);
      }

      this.keyListeners.get(key.toLowerCase()).push(listener);
    }
  }, {
    key: "clearListeners",
    value: function clearListeners() {
      this.keyListeners.clear();
      this.listeners = [];
    }
  }, {
    key: "update",
    value: function update() {
      for (var i = 0; i < this.events.length; i++) {
        var event = this.events[i];
        var key = event.key.toLowerCase();

        if (this.keyPushed.get(key) !== event.down) {
          this.keyPushed.set(key, event.down);

          if (this.keyListeners.has(key)) {
            var keyListeners = this.keyListeners.get(key);

            for (var listener = 0; listener < keyListeners.length; listener++) {
              keyListeners[listener](event);
            }
          }

          for (var _listener = 0; _listener < this.listeners.length; _listener++) {
            this.listeners[_listener](event);
          }
        }
      }

      this.events.length = 0;
    }
  }, {
    key: "uninstall",
    value: function uninstall() {
      window.removeEventListener("keydown", this.keyDown);
      window.removeEventListener("keyup", this.keyUp);
    }
  }]);

  return KeyboardInput;
}();

/***/ }),

/***/ "./src/core/input/MouseInput.ts":
/*!**************************************!*\
  !*** ./src/core/input/MouseInput.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouseState": () => (/* binding */ MouseState),
/* harmony export */   "MouseInput": () => (/* binding */ MouseInput)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");



var MouseState = function MouseState() {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, MouseState);

  this.isLeftMouseDown = false;
  this.isRightMouseDown = false;
  this.mouseCoordinate = _geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__.default.ZERO;
};
var MouseInput = /*#__PURE__*/function () {
  function MouseInput() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, MouseInput);

    this.mouse = new MouseState();
    this.listeners = [];
    this.events = [];
    this.getMousePosition = this.getMousePosition.bind(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__.default)(MouseInput, [{
    key: "install",
    value: function install(element, virtualCanvas) {
      var _this = this;

      element.addEventListener("mousemove", function (evt) {
        var coordinates = virtualCanvas.getCoordinates();
        var offset = virtualCanvas.getOffset();
        _this.mouse.mouseCoordinate = coordinates.inverseTranslate(new _geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__.default(evt.x, evt.y).subtract(offset));
      });
      element.addEventListener("mousedown", function (_evt) {
        _this.mouse.isLeftMouseDown = true;

        _this.events.push({
          coordinate: _this.mouse.mouseCoordinate,
          leftDown: true
        });
      });
      element.addEventListener("mouseup", function (_evt) {
        _this.mouse.isLeftMouseDown = false;

        _this.events.push({
          coordinate: _this.mouse.mouseCoordinate,
          leftDown: false
        });
      });
    }
  }, {
    key: "addListener",
    value: function addListener(listener) {
      this.listeners.push(listener);
    }
  }, {
    key: "update",
    value: function update() {
      for (var i = 0; i < this.events.length; i++) {
        var event = this.events[i];

        for (var listener = 0; listener < this.listeners.length; listener++) {
          this.listeners[listener](event);
        }
      }

      this.events.length = 0;
    }
  }, {
    key: "getMousePosition",
    value: function getMousePosition() {
      return this.mouse.mouseCoordinate;
    }
  }]);

  return MouseInput;
}();

/***/ }),

/***/ "./src/core/prefabs/SmokeParticle.ts":
/*!*******************************************!*\
  !*** ./src/core/prefabs/SmokeParticle.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeSmokeTrail": () => (/* binding */ makeSmokeTrail)
/* harmony export */ });
/* harmony import */ var _components_behavior_Lifetime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/behavior/Lifetime */ "./src/core/components/behavior/Lifetime.ts");
/* harmony import */ var _components_rendering_LifetimeRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/rendering/LifetimeRender */ "./src/core/components/rendering/LifetimeRender.ts");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _components_data_Rotation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/data/Rotation */ "./src/core/components/data/Rotation.ts");
/* harmony import */ var _components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/rendering/Sprite */ "./src/core/components/rendering/Sprite.ts");
/* harmony import */ var _components_data_Velocity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/data/Velocity */ "./src/core/components/data/Velocity.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _Random__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Random */ "./src/core/Random.ts");
/* harmony import */ var _rendering_Texture__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../rendering/Texture */ "./src/core/rendering/Texture.ts");










function makeSmokeTrail(parent, manager) {
  var baseVelocity = _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.ZERO;

  if ("rotation" in parent.data) {
    baseVelocity = _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.fromAngle((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_6__.getDynamic)(parent.data.rotation.rotation));
  }

  if ("velocity" in parent.data) {
    baseVelocity = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_6__.getDynamic)(parent.data.velocity.velocity);
  }

  var vel = baseVelocity.scale(-1).rotate(_Random__WEBPACK_IMPORTED_MODULE_8__.random.gaussian() * 30).scale(1 + _Random__WEBPACK_IMPORTED_MODULE_8__.random.gaussian() / 2);
  if (vel.equals(_geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.ZERO)) return;
  var entity = manager.createEntity();
  manager.addComponent(entity, _components_data_Position__WEBPACK_IMPORTED_MODULE_2__.PositionComponent, {
    position: parent.data.position.position
  });
  manager.addComponent(entity, _components_data_Rotation__WEBPACK_IMPORTED_MODULE_3__.RotationComponent);
  manager.addComponent(entity, _components_data_Velocity__WEBPACK_IMPORTED_MODULE_5__.VelocityComponent, {
    velocity: vel
  });
  manager.addComponent(entity, _components_behavior_Lifetime__WEBPACK_IMPORTED_MODULE_0__.LifetimeComponent);
  manager.addComponent(entity, _components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_4__.default, {
    size: _geometry_Vector2__WEBPACK_IMPORTED_MODULE_7__.default.matching(0.25),
    source: new _rendering_Texture__WEBPACK_IMPORTED_MODULE_9__.Texture("assets/smoke.png")
  });
  manager.addComponent(entity, _components_rendering_LifetimeRender__WEBPACK_IMPORTED_MODULE_1__.default);
  return manager.getEntity(entity);
}

/***/ }),

/***/ "./src/core/rendering/ParticleManager.ts":
/*!***********************************************!*\
  !*** ./src/core/rendering/ParticleManager.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParticleManager": () => (/* binding */ ParticleManager),
/* harmony export */   "ParticleEffect": () => (/* binding */ ParticleEffect)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ParticleManager = /*#__PURE__*/function () {
  function ParticleManager() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ParticleManager);

    this.creators = void 0;
    this.mutators = void 0;
    this.renderers = void 0;
    this.particles = void 0;
    this.nextParticle = 0;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ParticleManager, [{
    key: "addEffectManager",
    value: function addEffectManager(effectName, manager) {
      if (!this.creators.has(effectName)) {
        this.creators.set(effectName, manager);
      }

      if (!this.mutators.has(effectName)) {
        this.mutators.set(effectName, manager);
      }

      if (!this.renderers.has(effectName)) {
        this.renderers.set(effectName, manager);
      }
    }
  }, {
    key: "addEffect",
    value: function addEffect(effectName, creator, renderer, mutator) {
      if (!this.creators.has(effectName)) {
        this.creators.set(effectName, creator);
      }

      if (!this.mutators.has(effectName)) {
        this.mutators.set(effectName, mutator);
      }

      if (!this.renderers.has(effectName)) {
        this.renderers.set(effectName, renderer);
      }
    }
  }, {
    key: "createEffect",
    value: function createEffect(effect, position, state) {
      this.particles.set(this.nextParticle++, this.creators.get(effect).create(position, state));
    }
  }, {
    key: "draw",
    value: function draw(virtualCanvas, state) {
      var _iterator = _createForOfIteratorHelper(this.particles.keys()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          var particle = this.particles.get(key);
          var renderer = this.renderers.get(particle.effect);
          renderer.draw(particle, virtualCanvas, state);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "update",
    value: function update(delta, state) {
      var _iterator2 = _createForOfIteratorHelper(this.particles.keys()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var key = _step2.value;
          var particle = this.particles.get(key);
          var mutator = this.mutators.get(particle.effect);
          mutator.update(particle, delta, state);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);

  return ParticleManager;
}();
var ParticleEffect = function ParticleEffect(center, velocity, lifetime, rotation, texture, size, effect) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ParticleEffect);

  this.center = void 0;
  this.direction = void 0;
  this.velocity = void 0;
  this.lifetime = void 0;
  this.rotation = void 0;
  this.elapsedLifetime = void 0;
  this.texture = void 0;
  this.size = void 0;
  this.effect = void 0;
  this.center = center;
  this.velocity = velocity;
  this.lifetime = lifetime;
  this.rotation = rotation;
  this.texture = texture;
  this.size = size;
  this.elapsedLifetime = 0;
  this.effect = effect;
};

/***/ }),

/***/ "./src/core/rendering/Texture.ts":
/*!***************************************!*\
  !*** ./src/core/rendering/Texture.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Texture": () => (/* binding */ Texture)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");



var Texture = /*#__PURE__*/function () {
  function Texture(texture, size) {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Texture);

    this.size = void 0;
    this.el = void 0;
    this.ready = false;
    this.el = new Image();
    this.el.src = texture;
    this.el.addEventListener("load", function (evt) {
      _this.ready = true;

      if (!size) {
        _this.size = new _geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__.default(_this.el.naturalWidth, _this.el.naturalHeight);
      }
    });
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Texture, [{
    key: "texture",
    get: function get() {
      return this.el;
    }
  }]);

  return Texture;
}();

/***/ }),

/***/ "./src/core/rendering/VirtualCanvas.ts":
/*!*********************************************!*\
  !*** ./src/core/rendering/VirtualCanvas.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtualCanvas": () => (/* binding */ VirtualCanvas)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _VirtualCoordinate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VirtualCoordinate */ "./src/core/rendering/VirtualCoordinate.ts");




var VirtualCanvas = /*#__PURE__*/function () {
  function VirtualCanvas(virtualSize) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, VirtualCanvas);

    this.canvas = void 0;
    this.context = void 0;
    this.virtualSize = void 0;
    this.aspectRatio = void 0;
    this.offset = _geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__.default.matching(0.5);
    this.vcs = void 0;
    this.installed = false;
    this.parent = void 0;
    this.virtualSize = virtualSize;
    this.aspectRatio = virtualSize.normalize();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(VirtualCanvas, [{
    key: "install",
    value: function install(element) {
      var canvas = document.createElement("canvas");
      this.canvas = canvas;
      this.initCanvas();
      element.appendChild(canvas);
      this.parent = element;
      this.installed = true;
      this.resize();
    }
  }, {
    key: "initCanvas",
    value: function initCanvas() {
      var canvas = this.canvas;
      this.context = this.canvas.getContext("2d");
      canvas.width = this.virtualSize.x;
      canvas.height = this.virtualSize.y;
      canvas.id = "canvas";
      window.addEventListener("resize", this.resize.bind(this));
    }
  }, {
    key: "drawGrid",
    value: function drawGrid() {
      for (var x = 0; x < this.virtualSize.x; x++) {
        this.line(new _geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__.default(x, 0), new _geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__.default(x, this.virtualSize.y), "#000000ff");
      }

      for (var y = 0; y < this.virtualSize.y; y++) {
        this.line(new _geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__.default(0, y), new _geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__.default(this.virtualSize.x, y), "#000000ff");
      }
    }
  }, {
    key: "findCanvas",
    value: function findCanvas() {
      var el = document.getElementById("canvas");

      if (el.nodeName.toLowerCase() !== "canvas") {
        console.error("Cannot find valid canvas, found ".concat(el.nodeName, " instead."));
      } else {
        this.canvas = el;
        this.initCanvas();
      }
    }
  }, {
    key: "uninstall",
    value: function uninstall() {
      this.installed = false;
      this.parent.removeEventListener("resize", this.resize);
    }
  }, {
    key: "drawWorldText",
    value: function drawWorldText(text, position, style) {
      var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var font = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "Montserrat";
      var textAlign = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "center";
      var weight = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 500;
      var splits = text.trim().split("\n");
      this.context.fillStyle = style || "#ffffff";
      this.context.font = "".concat(weight, " ").concat(size * this.vcs.translateValueY(0.5), "px ").concat(font);
      this.context.textAlign = textAlign;

      for (var i = 0; i < splits.length; i++) {
        var adjustedPosition = this.vcs.translate(position.addConstant(0.5, i + 0.5));
        this.context.fillText(splits[i], adjustedPosition.x, adjustedPosition.y);
      }
    }
  }, {
    key: "drawText",
    value: function drawText(text, position, style) {
      var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var font = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "Montserrat";
      var textAlign = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "center";
      var weight = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 500;
      var splits = text.trim().split("\n");
      this.context.fillStyle = style || "#ffffff";
      this.context.font = "".concat(weight, " ").concat(size * this.vcs.translateValueY(0.5), "px ").concat(font);
      this.context.textAlign = textAlign;

      for (var i = 0; i < splits.length; i++) {
        var adjustedPosition = this.vcs.translate(position.addConstant(0, i));
        this.context.fillText(splits[i], adjustedPosition.x, adjustedPosition.y);
      }
    }
  }, {
    key: "drawImage",
    value: function drawImage(texture, position, size) {
      var rotation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var opacity = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

      if (!texture || !texture.ready) {
        return;
      }

      this.context.globalAlpha = opacity;
      var adjustedPosition = this.vcs.translate(position.add(this.offset));
      var adjustedSize = this.vcs.translate(size);
      this.context.save();
      this.context.translate(adjustedPosition.x, adjustedPosition.y);
      this.context.rotate(rotation * Math.PI / 180);
      this.context.translate(-adjustedPosition.x, -adjustedPosition.y);
      this.context.drawImage(texture.texture, adjustedPosition.x - adjustedSize.x / 2, adjustedPosition.y - adjustedSize.y / 2, adjustedSize.x, adjustedSize.y);
      this.context.restore();
      this.context.globalAlpha = 1;
    }
  }, {
    key: "drawCircle",
    value: function drawCircle(center, radius, fillStyle, strokeStyle, lineWidth) {
      var adjustedPosition = this.vcs.translate(center.add(this.offset));
      var adjustedRadius = this.vcs.translateValueX(radius);
      this.context.fillStyle = fillStyle || "#ffffff00";
      this.context.beginPath();
      this.context.arc(adjustedPosition.x, adjustedPosition.y, adjustedRadius, 0, 2 * Math.PI);
      this.context.fill();
      this.context.strokeStyle = strokeStyle || "#ff0000";
      this.context.lineWidth = this.vcs.translateValueX(lineWidth) || 1;
      this.context.arc(adjustedPosition.x, adjustedPosition.y, adjustedRadius, 0, 2 * Math.PI);
      this.context.stroke();
    }
  }, {
    key: "drawImageAnimated",
    value: function drawImageAnimated(texture, position, rotation, size, frameSize, frame) {
      var opacity = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;

      if (!texture.ready) {
        return;
      }

      this.context.globalAlpha = opacity;
      var adjustedPosition = this.vcs.translate(position.add(this.offset));
      var adjustedSize = this.vcs.translate(size);
      this.context.save();
      this.context.translate(adjustedPosition.x, adjustedPosition.y);
      this.context.rotate(rotation * Math.PI / 180);
      this.context.translate(-adjustedPosition.x, -adjustedPosition.y);
      this.context.drawImage(texture.texture, frameSize.x * frame, 0, frameSize.x, frameSize.y, adjustedPosition.x - adjustedSize.x / 2, adjustedPosition.y - adjustedSize.y / 2, adjustedSize.x, adjustedSize.y);
      this.context.restore();
      this.context.globalAlpha = 1;
    }
  }, {
    key: "drawWorldRectangle",
    value: function drawWorldRectangle(p1, p2) {
      var fillStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#ffffff00";
      var strokeStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#ffffff00";
      var p1adj = this.vcs.translate(p1.addConstant(0.5, 0.5));
      var p2adj = this.vcs.translate(p2.addConstant(0.5, 0.5));
      this.context.fillStyle = fillStyle || "#ff0000";
      this.context.fillRect(p1adj.x, p1adj.y, p2adj.x - p1adj.x, p2adj.y - p1adj.y);
      this.context.strokeStyle = strokeStyle || "#ff0000";
      this.context.strokeRect(p1adj.x, p1adj.y, p2adj.x - p1adj.x, p2adj.y - p1adj.y);
    }
  }, {
    key: "drawRectangle",
    value: function drawRectangle(p1, p2) {
      var fillStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#ffffff00";
      var strokeStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#ffffff00";
      var p1adj = this.vcs.translate(p1);
      var p2adj = this.vcs.translate(p2);
      this.context.fillStyle = fillStyle || "#ff0000";
      this.context.fillRect(p1adj.x, p1adj.y, p2adj.x - p1adj.x, p2adj.y - p1adj.y);
      this.context.strokeStyle = strokeStyle || "#ff0000";
      this.context.strokeRect(p1adj.x, p1adj.y, p2adj.x - p1adj.x, p2adj.y - p1adj.y);
    }
  }, {
    key: "line",
    value: function line(p1, p2, style) {
      var p1adj = this.vcs.translate(p1);
      var p2adj = this.vcs.translate(p2);
      this.beginPath();
      this.strokeStyle = style || "#ff0000";
      this.context.lineTo(p1adj.x, p1adj.y);
      this.context.lineTo(p2adj.x, p2adj.y);
      this.stroke();
    }
  }, {
    key: "beginPath",
    value: function beginPath() {
      this.context.beginPath();
    }
  }, {
    key: "strokeStyle",
    set: function set(style) {
      this.context.strokeStyle = style;
    }
  }, {
    key: "stroke",
    value: function stroke() {
      this.context.stroke();
    }
  }, {
    key: "translate",
    value: function translate(vec) {
      var target = this.vcs.translate(vec);
      this.context.translate(target.x, target.y);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.context.clearRect(0, 0, this.vcs.translateValueX(this.virtualSize.x), this.vcs.translateValueY(this.virtualSize.y));
    }
  }, {
    key: "getCoordinates",
    value: function getCoordinates() {
      return this.vcs;
    }
  }, {
    key: "getOffset",
    value: function getOffset() {
      var rect = this.canvas.getBoundingClientRect();
      return new _geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__.default(rect.x, rect.y);
    }
  }, {
    key: "resize",
    value: function resize() {
      if (this.parent.clientWidth / this.aspectRatio.x < this.parent.clientHeight / this.aspectRatio.y) {
        this.canvas.width = this.parent.clientWidth;
        this.canvas.height = this.parent.clientWidth * this.aspectRatio.y / this.aspectRatio.x;
      } else {
        this.canvas.width = this.parent.clientHeight * this.aspectRatio.x / this.aspectRatio.y;
        this.canvas.height = this.parent.clientHeight;
      }

      this.vcs = new _VirtualCoordinate__WEBPACK_IMPORTED_MODULE_3__.VirtualCoordinateSystem(this.canvas.width / this.virtualSize.x, this.canvas.height / this.virtualSize.y);
    }
  }]);

  return VirtualCanvas;
}();

/***/ }),

/***/ "./src/core/rendering/VirtualCoordinate.ts":
/*!*************************************************!*\
  !*** ./src/core/rendering/VirtualCoordinate.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtualCoordinateSystem": () => (/* binding */ VirtualCoordinateSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");



var VirtualCoordinateSystem = /*#__PURE__*/function () {
  function VirtualCoordinateSystem(scaleX, scaleY) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, VirtualCoordinateSystem);

    this.scaleX = void 0;
    this.scaleY = void 0;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.translate = this.translate.bind(this);
    this.translateValueX = this.translateValueX.bind(this);
    this.translateValueY = this.translateValueY.bind(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(VirtualCoordinateSystem, [{
    key: "translate",
    value: function translate(v1) {
      return new _geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__.default(v1.x * this.scaleX, v1.y * this.scaleY);
    }
  }, {
    key: "inverseTranslate",
    value: function inverseTranslate(v1) {
      return new _geometry_Vector2__WEBPACK_IMPORTED_MODULE_2__.default(v1.x / this.scaleX, v1.y / this.scaleY);
    }
  }, {
    key: "translateValueX",
    value: function translateValueX(p) {
      return p * this.scaleX;
    }
  }, {
    key: "translateValueY",
    value: function translateValueY(p) {
      return p * this.scaleY;
    }
  }]);

  return VirtualCoordinateSystem;
}();

/***/ }),

/***/ "./src/core/systems/AbstractClickSystem.ts":
/*!*************************************************!*\
  !*** ./src/core/systems/AbstractClickSystem.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractClickSystem": () => (/* binding */ AbstractClickSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_behavior_click_AbstractClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/behavior/click/AbstractClick */ "./src/core/components/behavior/click/AbstractClick.ts");
/* harmony import */ var _components_behavior_click_Clickable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/behavior/click/Clickable */ "./src/core/components/behavior/click/Clickable.ts");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var AbstractClickSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(AbstractClickSystem, _BaseSystem);

  var _super = _createSuper(AbstractClickSystem);

  function AbstractClickSystem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AbstractClickSystem);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AbstractClickSystem, [{
    key: "onManagerAwake",
    value: function onManagerAwake() {
      this.listen("click");
    }
  }, {
    key: "onEvent",
    value: function onEvent(_event, entity) {
      var targetEntity = entity;
      var abstractClick = targetEntity.data.abstractClick;
      abstractClick.action(entity, this.manager);
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_behavior_click_AbstractClick__WEBPACK_IMPORTED_MODULE_5__.AbstractClickComponent;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_data_Position__WEBPACK_IMPORTED_MODULE_7__.PositionComponent);
      set.add(_components_behavior_click_Clickable__WEBPACK_IMPORTED_MODULE_6__.ClickableComponent);
      return set;
    }
  }]);

  return AbstractClickSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_8__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/AccelerationSystem.ts":
/*!************************************************!*\
  !*** ./src/core/systems/AccelerationSystem.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccelerationSystem": () => (/* binding */ AccelerationSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _components_data_Acceleration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/data/Acceleration */ "./src/core/components/data/Acceleration.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _components_data_Velocity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/data/Velocity */ "./src/core/components/data/Velocity.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var AccelerationSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(AccelerationSystem, _BaseSystem);

  var _super = _createSuper(AccelerationSystem);

  function AccelerationSystem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AccelerationSystem);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AccelerationSystem, [{
    key: "updateEntity",
    value: function updateEntity(elapsedTime, entity) {
      var targetEntity = entity;
      var _targetEntity$data = targetEntity.data,
          velocity = _targetEntity$data.velocity,
          acceleration = _targetEntity$data.acceleration;
      velocity.velocity = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(velocity.velocity).addScaled((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(acceleration.acceleration), elapsedTime);
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_data_Acceleration__WEBPACK_IMPORTED_MODULE_6__.AccelerationComponent;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_data_Position__WEBPACK_IMPORTED_MODULE_5__.PositionComponent);
      set.add(_components_data_Velocity__WEBPACK_IMPORTED_MODULE_9__.VelocityComponent);
      return set;
    }
  }]);

  return AccelerationSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_8__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/AnimatedSpriteRenderSystem.ts":
/*!********************************************************!*\
  !*** ./src/core/systems/AnimatedSpriteRenderSystem.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimatedSpriteRenderSystem": () => (/* binding */ AnimatedSpriteRenderSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _components_data_Rotation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/data/Rotation */ "./src/core/components/data/Rotation.ts");
/* harmony import */ var _components_rendering_AnimatedSprite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/rendering/AnimatedSprite */ "./src/core/components/rendering/AnimatedSprite.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var AnimatedSpriteRenderSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(AnimatedSpriteRenderSystem, _BaseSystem);

  var _super = _createSuper(AnimatedSpriteRenderSystem);

  function AnimatedSpriteRenderSystem(virtualCanvas) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AnimatedSpriteRenderSystem);

    _this = _super.call(this);
    _this.virtualCanvas = void 0;
    _this.virtualCanvas = virtualCanvas;
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AnimatedSpriteRenderSystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var targetEntity = entity;
      var _targetEntity$data = targetEntity.data,
          animatedSprite = _targetEntity$data.animatedSprite,
          rotation = _targetEntity$data.rotation,
          position = _targetEntity$data.position;
      animatedSprite.currentDuration += deltaTime;

      while (animatedSprite.currentDuration > animatedSprite.frames[animatedSprite.frame]) {
        animatedSprite.currentDuration -= animatedSprite.frames[animatedSprite.frame];
        animatedSprite.frame = (animatedSprite.frame + 1) % animatedSprite.frames.length;
      }

      this.virtualCanvas.drawImageAnimated(animatedSprite.source, (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__.getDynamic)(position.position), (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__.getDynamic)(rotation.rotation), animatedSprite.size, animatedSprite.frameSize, animatedSprite.frame, (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__.getDynamic)(animatedSprite.opacity));
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_rendering_AnimatedSprite__WEBPACK_IMPORTED_MODULE_8__.default;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_data_Position__WEBPACK_IMPORTED_MODULE_6__.PositionComponent);
      set.add(_components_data_Rotation__WEBPACK_IMPORTED_MODULE_7__.RotationComponent);
      return set;
    }
  }]);

  return AnimatedSpriteRenderSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_5__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/ClickComponentAddSystem.ts":
/*!*****************************************************!*\
  !*** ./src/core/systems/ClickComponentAddSystem.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickComponentAddSystem": () => (/* binding */ ClickComponentAddSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_behavior_click_ClickComponentAdd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/behavior/click/ClickComponentAdd */ "./src/core/components/behavior/click/ClickComponentAdd.ts");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var ClickComponentAddSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(ClickComponentAddSystem, _BaseSystem);

  var _super = _createSuper(ClickComponentAddSystem);

  function ClickComponentAddSystem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ClickComponentAddSystem);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ClickComponentAddSystem, [{
    key: "onManagerAwake",
    value: function onManagerAwake() {
      this.listen("click");
    }
  }, {
    key: "onEvent",
    value: function onEvent(_event, entity) {
      var clickComponentAdd = entity.data.clickComponentAdd;
      this.manager.addComponent(entity.id, (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(clickComponentAdd.component), (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(clickComponentAdd.data));
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_behavior_click_ClickComponentAdd__WEBPACK_IMPORTED_MODULE_5__.ClickComponentAddComponent;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_data_Position__WEBPACK_IMPORTED_MODULE_6__.PositionComponent);
      return set;
    }
  }]);

  return ClickComponentAddSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_8__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/ClickComponentToggleMultipleSystem.ts":
/*!****************************************************************!*\
  !*** ./src/core/systems/ClickComponentToggleMultipleSystem.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickComponentToggleMultipleSystem": () => (/* binding */ ClickComponentToggleMultipleSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_behavior_click_Clickable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/behavior/click/Clickable */ "./src/core/components/behavior/click/Clickable.ts");
/* harmony import */ var _components_behavior_click_ClickComponentToggleMultiple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/behavior/click/ClickComponentToggleMultiple */ "./src/core/components/behavior/click/ClickComponentToggleMultiple.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var ClickComponentToggleMultipleSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(ClickComponentToggleMultipleSystem, _BaseSystem);

  var _super = _createSuper(ClickComponentToggleMultipleSystem);

  function ClickComponentToggleMultipleSystem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ClickComponentToggleMultipleSystem);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ClickComponentToggleMultipleSystem, [{
    key: "onManagerAwake",
    value: function onManagerAwake() {
      this.listen("click");
    }
  }, {
    key: "onEvent",
    value: function onEvent(_event, entity) {
      var targetEntity = entity;
      var clickComponentToggleMultiple = targetEntity.data.clickComponentToggleMultiple;
      var components = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(clickComponentToggleMultiple.components);
      var data = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(clickComponentToggleMultiple.data);

      for (var compIdx = 0; compIdx < components.length; compIdx++) {
        var comp = components[compIdx];

        if (this.manager.hasComponent(targetEntity.id, comp)) {
          this.manager.removeComponent(targetEntity.id, comp);
        } else {
          this.manager.addComponent(targetEntity.id, comp, data[compIdx]);
        }
      }
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_behavior_click_ClickComponentToggleMultiple__WEBPACK_IMPORTED_MODULE_6__.ClickComponentToggleMultipleComponent;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_behavior_click_Clickable__WEBPACK_IMPORTED_MODULE_5__.ClickableComponent);
      return set;
    }
  }]);

  return ClickComponentToggleMultipleSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_8__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/ClickComponentToggleSystem.ts":
/*!********************************************************!*\
  !*** ./src/core/systems/ClickComponentToggleSystem.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickComponentToggleSystem": () => (/* binding */ ClickComponentToggleSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_behavior_click_Clickable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/behavior/click/Clickable */ "./src/core/components/behavior/click/Clickable.ts");
/* harmony import */ var _components_behavior_click_ClickComponentToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/behavior/click/ClickComponentToggle */ "./src/core/components/behavior/click/ClickComponentToggle.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var ClickComponentToggleSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(ClickComponentToggleSystem, _BaseSystem);

  var _super = _createSuper(ClickComponentToggleSystem);

  function ClickComponentToggleSystem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ClickComponentToggleSystem);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ClickComponentToggleSystem, [{
    key: "onManagerAwake",
    value: function onManagerAwake() {
      this.listen("click");
    }
  }, {
    key: "onEvent",
    value: function onEvent(_event, entity) {
      var targetEntity = entity;
      var clickComponentToggle = targetEntity.data.clickComponentToggle;
      var cmp = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(clickComponentToggle.component);

      if (this.manager.hasComponent(targetEntity.id, cmp)) {
        this.manager.removeComponent(targetEntity.id, cmp);
      } else {
        this.manager.addComponent(targetEntity.id, cmp, (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(clickComponentToggle.data));
      }
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_behavior_click_ClickComponentToggle__WEBPACK_IMPORTED_MODULE_6__.ClickComponentToggleComponent;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_behavior_click_Clickable__WEBPACK_IMPORTED_MODULE_5__.ClickableComponent);
      return set;
    }
  }]);

  return ClickComponentToggleSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_8__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/ClickDataMutationSystem.ts":
/*!*****************************************************!*\
  !*** ./src/core/systems/ClickDataMutationSystem.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickDataMutateSystem": () => (/* binding */ ClickDataMutateSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_behavior_click_Clickable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/behavior/click/Clickable */ "./src/core/components/behavior/click/Clickable.ts");
/* harmony import */ var _components_behavior_click_ClickDataMutate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/behavior/click/ClickDataMutate */ "./src/core/components/behavior/click/ClickDataMutate.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var ClickDataMutateSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(ClickDataMutateSystem, _BaseSystem);

  var _super = _createSuper(ClickDataMutateSystem);

  function ClickDataMutateSystem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ClickDataMutateSystem);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ClickDataMutateSystem, [{
    key: "onManagerAwake",
    value: function onManagerAwake() {
      this.listen("click");
    }
  }, {
    key: "onEvent",
    value: function onEvent(_event, entity) {
      var targetEntity = entity;
      var clickDataMutate = targetEntity.data.clickDataMutate;
      targetEntity.data = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.merge)(targetEntity.data, (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(clickDataMutate.data));
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_behavior_click_ClickDataMutate__WEBPACK_IMPORTED_MODULE_7__.ClickDataMutateComponent;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_behavior_click_Clickable__WEBPACK_IMPORTED_MODULE_6__.ClickableComponent);
      return set;
    }
  }]);

  return ClickDataMutateSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_9__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/ClickableDisplaySystem.ts":
/*!****************************************************!*\
  !*** ./src/core/systems/ClickableDisplaySystem.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickableDisplaySystem": () => (/* binding */ ClickableDisplaySystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_ui_ClickableDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ui/ClickableDisplay */ "./src/core/components/ui/ClickableDisplay.ts");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var ClickableDisplaySystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(ClickableDisplaySystem, _BaseSystem);

  var _super = _createSuper(ClickableDisplaySystem);

  function ClickableDisplaySystem(mouse, virtualCanvas) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ClickableDisplaySystem);

    _this = _super.call(this);
    _this.mouse = void 0;
    _this.virtualCanvas = void 0;
    _this.mouse = mouse;
    _this.virtualCanvas = virtualCanvas;
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ClickableDisplaySystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var mouse = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(this.mouse);
      var targetEntity = entity;
      var _targetEntity$data = targetEntity.data,
          position = _targetEntity$data.position,
          clickable = _targetEntity$data.clickable,
          clickableDisplay = _targetEntity$data.clickableDisplay;
      var delta = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(clickable.delta);
      var pos = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(position.position);
      var northWest = pos.subtract(delta);
      var southEast = pos.add(delta);

      if (mouse.x > northWest.x && mouse.y > northWest.y && mouse.x < southEast.x && mouse.y < southEast.y) {
        this.virtualCanvas.drawRectangle(northWest, southEast, (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(clickableDisplay.backgroundHover));
      } else {
        this.virtualCanvas.drawRectangle(northWest, southEast, (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(clickableDisplay.backgroundHover));
      }
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_ui_ClickableDisplay__WEBPACK_IMPORTED_MODULE_5__.ClickableDisplayComponent;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_data_Position__WEBPACK_IMPORTED_MODULE_6__.PositionComponent);
      return set;
    }
  }]);

  return ClickableDisplaySystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_8__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/ClickableSystem.ts":
/*!*********************************************!*\
  !*** ./src/core/systems/ClickableSystem.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickableSystem": () => (/* binding */ ClickableSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_behavior_click_Clickable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/behavior/click/Clickable */ "./src/core/components/behavior/click/Clickable.ts");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _geometry_Collision__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../geometry/Collision */ "./src/core/geometry/Collision.ts");







function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var ClickableSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(ClickableSystem, _BaseSystem);

  var _super = _createSuper(ClickableSystem);

  function ClickableSystem(mouse) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, ClickableSystem);

    _this = _super.call(this);
    _this.mouse = void 0;
    _this.runCheck = void 0;
    _this.mouse = mouse;
    _this.runCheck = false;
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(ClickableSystem, [{
    key: "update",
    value: function update(elapsedTime, model) {
      if (model.getMouseAction() === "click") {
        var entities = this.entities;
        var best = undefined;
        var bestNW = undefined;
        var bestSE = undefined;
        var mouse = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(this.mouse);

        var _iterator = _createForOfIteratorHelper(entities.values()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var targetEntity = _step.value;
            var _targetEntity$data = targetEntity.data,
                position = _targetEntity$data.position,
                clickable = _targetEntity$data.clickable;
            var mouseAdj = mouse.add((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(clickable.offset));

            var _this$offsetDelta = this.offsetDelta((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(position.position), (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(clickable.delta)),
                _this$offsetDelta2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this$offsetDelta, 2),
                nw = _this$offsetDelta2[0],
                se = _this$offsetDelta2[1]; // No need to keep on working if there's no collision.


            if (!(0,_geometry_Collision__WEBPACK_IMPORTED_MODULE_10__.rectPointCollision)(nw, se, mouseAdj)) {
              continue;
            } // Best check.


            if (best === undefined) {
              best = targetEntity;
              bestNW = nw;
              bestSE = se;
              continue;
            } // See if these two collide; we already know the first one is within click range.


            if ((0,_geometry_Collision__WEBPACK_IMPORTED_MODULE_10__.rectRectCollision)(nw, se, bestNW, bestSE)) {
              if (targetEntity.id > best.id) {
                best = targetEntity;
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (best !== undefined) {
          this.manager.emitEvent("click", best);
        }
      }
    }
  }, {
    key: "updateEntity",
    value: function updateEntity() {
      return;
    }
  }, {
    key: "offsetDelta",
    value: function offsetDelta(v1, delta) {
      return [v1.subtract(delta), v1.add(delta)];
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_behavior_click_Clickable__WEBPACK_IMPORTED_MODULE_6__.ClickableComponent;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_data_Position__WEBPACK_IMPORTED_MODULE_7__.PositionComponent);
      return set;
    }
  }]);

  return ClickableSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_9__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/DraggableSystem.ts":
/*!*********************************************!*\
  !*** ./src/core/systems/DraggableSystem.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DraggableSystem": () => (/* binding */ DraggableSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _components_behavior_Draggable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/behavior/Draggable */ "./src/core/components/behavior/Draggable.ts");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var DraggableSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(DraggableSystem, _BaseSystem);

  var _super = _createSuper(DraggableSystem);

  function DraggableSystem(source) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, DraggableSystem);

    _this = _super.call(this);
    _this.source = source;
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(DraggableSystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var targetEntity = entity;
      var _targetEntity$data = targetEntity.data,
          draggable = _targetEntity$data.draggable,
          position = _targetEntity$data.position;

      if (!draggable.dragging) {
        return;
      }

      position.position = this.source().add((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(draggable.offset));
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_behavior_Draggable__WEBPACK_IMPORTED_MODULE_6__.DraggableComponent;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_data_Position__WEBPACK_IMPORTED_MODULE_5__.PositionComponent);
      return set;
    }
  }]);

  return DraggableSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_7__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/FootprintSystem.ts":
/*!*********************************************!*\
  !*** ./src/core/systems/FootprintSystem.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FootprintSystem": () => (/* binding */ FootprintSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_data_Footprint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/data/Footprint */ "./src/core/components/data/Footprint.ts");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _ecs_decorators_Basis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ecs/decorators/Basis */ "./src/core/ecs/decorators/Basis.ts");
/* harmony import */ var _ecs_decorators_Required__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ecs/decorators/Required */ "./src/core/ecs/decorators/Required.ts");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");






var _dec, _dec2, _class, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var FootprintSystem = (_dec = (0,_ecs_decorators_Basis__WEBPACK_IMPORTED_MODULE_8__.Basis)(_components_data_Footprint__WEBPACK_IMPORTED_MODULE_5__.FootprintComponent), _dec2 = (0,_ecs_decorators_Required__WEBPACK_IMPORTED_MODULE_9__.Required)([_components_data_Position__WEBPACK_IMPORTED_MODULE_6__.PositionComponent]), _dec(_class = _dec2(_class = (_temp = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(FootprintSystem, _BaseSystem);

  var _super = _createSuper(FootprintSystem);

  function FootprintSystem(map) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, FootprintSystem);

    _this = _super.call(this);
    _this.map = void 0;
    _this.map = map;
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(FootprintSystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var targetEntity = entity;
      var _targetEntity$data = targetEntity.data,
          position = _targetEntity$data.position,
          footprint = _targetEntity$data.footprint;

      if (!footprint.tracked) {
        footprint.tracked = true;
        var pos = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(position.position).floor();
        var nwOffset = Math.floor((footprint.size - 1) / 2);
        var northWest = new _geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__.default(pos.x - nwOffset, pos.y - nwOffset);
        var swOffset = Math.floor(footprint.size / 2);
        var southEast = new _geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__.default(pos.x + swOffset, pos.y + swOffset);

        for (var x = northWest.x; x <= southEast.x; x++) {
          for (var y = northWest.y; y <= southEast.y; y++) {
            this.map.createEntityLink(new _geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__.default(x, y), entity);
          }
        }
      }
    }
  }]);

  return FootprintSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_10__.BaseSystem), _temp)) || _class) || _class);

/***/ }),

/***/ "./src/core/systems/HealthDisplaySystem.ts":
/*!*************************************************!*\
  !*** ./src/core/systems/HealthDisplaySystem.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthRenderSystem": () => (/* binding */ HealthRenderSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_marker_HealthDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/marker/HealthDisplay */ "./src/core/components/marker/HealthDisplay.ts");
/* harmony import */ var _components_data_Health__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/data/Health */ "./src/core/components/data/Health.ts");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _ecs_decorators_Basis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ecs/decorators/Basis */ "./src/core/ecs/decorators/Basis.ts");
/* harmony import */ var _ecs_decorators_Required__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ecs/decorators/Required */ "./src/core/ecs/decorators/Required.ts");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");






var _dec, _dec2, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var HealthRenderSystem = (_dec = (0,_ecs_decorators_Basis__WEBPACK_IMPORTED_MODULE_9__.Basis)(_components_marker_HealthDisplay__WEBPACK_IMPORTED_MODULE_5__.HealthDisplayComponent), _dec2 = (0,_ecs_decorators_Required__WEBPACK_IMPORTED_MODULE_10__.Required)([_components_data_Position__WEBPACK_IMPORTED_MODULE_7__.PositionComponent, _components_data_Health__WEBPACK_IMPORTED_MODULE_6__.HealthComponent]), _dec(_class = _dec2(_class = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(HealthRenderSystem, _BaseSystem);

  var _super = _createSuper(HealthRenderSystem);

  function HealthRenderSystem(virtualCanvas) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, HealthRenderSystem);

    _this = _super.call(this);
    _this.virtualCanvas = virtualCanvas;
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(HealthRenderSystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var targetEntity = entity;
      var _targetEntity$data = targetEntity.data,
          position = _targetEntity$data.position,
          health = _targetEntity$data.health;
      var pos = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(position.position);
      var northWest = pos.addConstant(-0.5, -0.5);
      var southEast = pos.addConstant(0.5, -0.4);
      var proportion = health.health / health.maxHealth;
      var southEast2 = pos.addConstant(proportion - 0.5, -0.4);
      this.virtualCanvas.drawWorldRectangle(northWest, southEast, "#ff000099", "#00000099");
      this.virtualCanvas.drawWorldRectangle(northWest, southEast2, "#00ff0099", "#00000099");
    }
  }]);

  return HealthRenderSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_11__.BaseSystem)) || _class) || _class);

/***/ }),

/***/ "./src/core/systems/HealthSystem.ts":
/*!******************************************!*\
  !*** ./src/core/systems/HealthSystem.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthSystem": () => (/* binding */ HealthSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _ecs_decorators_Basis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ecs/decorators/Basis */ "./src/core/ecs/decorators/Basis.ts");
/* harmony import */ var _components_data_Health__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/data/Health */ "./src/core/components/data/Health.ts");







var _dec, _class;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var HealthSystem = (_dec = (0,_ecs_decorators_Basis__WEBPACK_IMPORTED_MODULE_7__.Basis)(_components_data_Health__WEBPACK_IMPORTED_MODULE_8__.HealthComponent), _dec(_class = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(HealthSystem, _BaseSystem);

  var _super = _createSuper(HealthSystem);

  function HealthSystem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, HealthSystem);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(HealthSystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var targetEntity = entity;
      var health = targetEntity.data.health;

      if (health.health <= 0) {
        this.manager.emitEvent("health:die", targetEntity, _objectSpread({}, targetEntity.data));
        this.manager.removeEntity(targetEntity);
      }
    }
  }]);

  return HealthSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_6__.BaseSystem)) || _class);

/***/ }),

/***/ "./src/core/systems/LifetimeRenderSystem.ts":
/*!**************************************************!*\
  !*** ./src/core/systems/LifetimeRenderSystem.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LifetimeRenderSystem": () => (/* binding */ LifetimeRenderSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_behavior_Lifetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/behavior/Lifetime */ "./src/core/components/behavior/Lifetime.ts");
/* harmony import */ var _components_rendering_LifetimeRender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/rendering/LifetimeRender */ "./src/core/components/rendering/LifetimeRender.ts");
/* harmony import */ var _components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/rendering/Sprite */ "./src/core/components/rendering/Sprite.ts");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var LifetimeRenderSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(LifetimeRenderSystem, _BaseSystem);

  var _super = _createSuper(LifetimeRenderSystem);

  function LifetimeRenderSystem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, LifetimeRenderSystem);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(LifetimeRenderSystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var targetEntity = entity;
      var _targetEntity$data = targetEntity.data,
          lifetime = _targetEntity$data.lifetime,
          sprite = _targetEntity$data.sprite;
      sprite.opacity = (lifetime.lifetime - lifetime.elapsed) / lifetime.lifetime;
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_rendering_LifetimeRender__WEBPACK_IMPORTED_MODULE_6__.default;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_7__.default);
      set.add(_components_behavior_Lifetime__WEBPACK_IMPORTED_MODULE_5__.LifetimeComponent);
      return set;
    }
  }]);

  return LifetimeRenderSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_8__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/LifetimeSystem.ts":
/*!********************************************!*\
  !*** ./src/core/systems/LifetimeSystem.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LifetimeSystem": () => (/* binding */ LifetimeSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_behavior_Lifetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/behavior/Lifetime */ "./src/core/components/behavior/Lifetime.ts");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var LifetimeSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(LifetimeSystem, _BaseSystem);

  var _super = _createSuper(LifetimeSystem);

  function LifetimeSystem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, LifetimeSystem);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(LifetimeSystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var targetEntity = entity;
      var lifetime = targetEntity.data.lifetime;
      lifetime.elapsed += deltaTime;

      if (lifetime.elapsed >= lifetime.lifetime) {
        this.manager.removeEntity(entity.id);
      }
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_behavior_Lifetime__WEBPACK_IMPORTED_MODULE_5__.LifetimeComponent;
    }
  }]);

  return LifetimeSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_6__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/LowSpriteRenderSystem.ts":
/*!***************************************************!*\
  !*** ./src/core/systems/LowSpriteRenderSystem.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LowSpriteRenderSystem": () => (/* binding */ LowSpriteRenderSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _components_rendering_LowSprite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/rendering/LowSprite */ "./src/core/components/rendering/LowSprite.ts");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _components_data_Rotation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/data/Rotation */ "./src/core/components/data/Rotation.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _ecs_decorators_Basis__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ecs/decorators/Basis */ "./src/core/ecs/decorators/Basis.ts");
/* harmony import */ var _ecs_decorators_Required__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ecs/decorators/Required */ "./src/core/ecs/decorators/Required.ts");






var _dec, _dec2, _class, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var LowSpriteRenderSystem = (_dec = (0,_ecs_decorators_Basis__WEBPACK_IMPORTED_MODULE_10__.Basis)(_components_rendering_LowSprite__WEBPACK_IMPORTED_MODULE_6__.default), _dec2 = (0,_ecs_decorators_Required__WEBPACK_IMPORTED_MODULE_11__.Required)([_components_data_Position__WEBPACK_IMPORTED_MODULE_7__.PositionComponent, _components_data_Rotation__WEBPACK_IMPORTED_MODULE_8__.RotationComponent]), _dec(_class = _dec2(_class = (_temp = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(LowSpriteRenderSystem, _BaseSystem);

  var _super = _createSuper(LowSpriteRenderSystem);

  function LowSpriteRenderSystem(virtualCanvas) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, LowSpriteRenderSystem);

    _this = _super.call(this);
    _this.virtualCanvas = void 0;
    _this.virtualCanvas = virtualCanvas;
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(LowSpriteRenderSystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var spriteEntity = entity;
      var _spriteEntity$data = spriteEntity.data,
          lowSprite = _spriteEntity$data.lowSprite,
          position = _spriteEntity$data.position;
      this.virtualCanvas.drawImage(lowSprite.source, (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__.getDynamic)(position.position).add((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__.getDynamic)(lowSprite.offset)), lowSprite.size);
    }
  }]);

  return LowSpriteRenderSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_5__.BaseSystem), _temp)) || _class) || _class);

/***/ }),

/***/ "./src/core/systems/MagnetSystem.ts":
/*!******************************************!*\
  !*** ./src/core/systems/MagnetSystem.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MagnetSystem": () => (/* binding */ MagnetSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _components_behavior_Magnet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/behavior/Magnet */ "./src/core/components/behavior/Magnet.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _components_marker_MagnetAttracted__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/marker/MagnetAttracted */ "./src/core/components/marker/MagnetAttracted.ts");
/* harmony import */ var _geometry_Collision__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../geometry/Collision */ "./src/core/geometry/Collision.ts");
/* harmony import */ var _geometry_Circle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../geometry/Circle */ "./src/core/geometry/Circle.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var MagnetSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(MagnetSystem, _BaseSystem);

  var _super = _createSuper(MagnetSystem);

  function MagnetSystem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, MagnetSystem);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(MagnetSystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var targetEntity = entity;
      var _targetEntity$data = targetEntity.data,
          magnet = _targetEntity$data.magnet,
          position = _targetEntity$data.position;
      var circle = new _geometry_Circle__WEBPACK_IMPORTED_MODULE_11__.default((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(position.position), (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(magnet.radius));
      var entities = this.manager.getEntitiesWithComponent(_components_marker_MagnetAttracted__WEBPACK_IMPORTED_MODULE_9__.default);

      for (var i = 0; i < entities.length; i++) {
        var _entity = entities[i];

        if ((0,_geometry_Collision__WEBPACK_IMPORTED_MODULE_10__.circlePointCollision)(circle, (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(_entity.data.position.position))) {
          _entity.data.position.position = targetEntity.data.position.position;
          magnet.onSnap(targetEntity, _entity, this.manager);
          this.manager.emitEvent("magnet:snap", _entity);
          this.manager.emitEvent("magnet:pull", _entity);
        }
      }
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_behavior_Magnet__WEBPACK_IMPORTED_MODULE_6__.MagnetComponent;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_data_Position__WEBPACK_IMPORTED_MODULE_5__.PositionComponent);
      return set;
    }
  }]);

  return MagnetSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_8__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/PathFollowerSystem.ts":
/*!************************************************!*\
  !*** ./src/core/systems/PathFollowerSystem.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PathFollowerSystem": () => (/* binding */ PathFollowerSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_behavior_PathFollower__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/behavior/PathFollower */ "./src/core/components/behavior/PathFollower.ts");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _components_behavior_PositionTarget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/behavior/PositionTarget */ "./src/core/components/behavior/PositionTarget.ts");
/* harmony import */ var _components_behavior_RotationTarget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/behavior/RotationTarget */ "./src/core/components/behavior/RotationTarget.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var PathFollowerSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(PathFollowerSystem, _BaseSystem);

  var _super = _createSuper(PathFollowerSystem);

  function PathFollowerSystem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PathFollowerSystem);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PathFollowerSystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var targetEntity = entity;
      var _targetEntity$data = targetEntity.data,
          position = _targetEntity$data.position,
          velocityTarget = _targetEntity$data.velocityTarget,
          rotationTarget = _targetEntity$data.rotationTarget,
          pathFollower = _targetEntity$data.pathFollower;
      var pos = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__.getDynamic)(position.position);
      var target = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__.getDynamic)(velocityTarget.target);
      var path = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__.getDynamic)(pathFollower.path);

      if (pathFollower.invalidated) {
        if (path.length === 0) {
          velocityTarget.target = pos;
          pathFollower.point = 0;
        }

        var md = _geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__.default.squareDistance(pos, (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__.getDynamic)(path[0]));
        var idx = 0;

        for (var i = 1; i < path.length; i++) {
          var el = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__.getDynamic)(path[i]);
          var dist = _geometry_Vector2__WEBPACK_IMPORTED_MODULE_11__.default.distance(pos, el);

          if (dist < md) {
            md = dist;
            idx = i;
          }
        }

        pathFollower.point = idx + 1;
        pathFollower.invalidated = false;
      }

      if (this.checkRelativeThreshold(target, (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__.getDynamic)(position.position), velocityTarget.strictness) && pathFollower.point < path.length) {
        pathFollower.point++;
      }

      if (pathFollower.point < path.length) {
        var pt = path[pathFollower.point];
        velocityTarget.target = pt;
        rotationTarget.target = pt;
      } else {
        this.manager.emitEvent("pathFollower:done", targetEntity);
      }
    }
  }, {
    key: "checkRelativeThreshold",
    value: function checkRelativeThreshold(a, b, threshold) {
      return Math.abs(a.x - b.x) < threshold && Math.abs(a.y - b.y) < threshold;
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_behavior_PathFollower__WEBPACK_IMPORTED_MODULE_5__.PathFollowerComponent;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_data_Position__WEBPACK_IMPORTED_MODULE_6__.PositionComponent);
      set.add(_components_behavior_RotationTarget__WEBPACK_IMPORTED_MODULE_8__.RotationTargetComponent);
      set.add(_components_behavior_PositionTarget__WEBPACK_IMPORTED_MODULE_7__.VelocityTargetComponent);
      return set;
    }
  }]);

  return PathFollowerSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_10__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/PositionDebugSystem.ts":
/*!*************************************************!*\
  !*** ./src/core/systems/PositionDebugSystem.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositionDebugSystem": () => (/* binding */ PositionDebugSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _components_rendering_PositionDebug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/rendering/PositionDebug */ "./src/core/components/rendering/PositionDebug.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var PositionDebugSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(PositionDebugSystem, _BaseSystem);

  var _super = _createSuper(PositionDebugSystem);

  function PositionDebugSystem(virtualCanvas) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PositionDebugSystem);

    _this = _super.call(this);
    _this.virtualCanvas = void 0;
    _this.virtualCanvas = virtualCanvas;
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PositionDebugSystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var targetEntity = entity;
      var position = targetEntity.data.position.position;
      var pos = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(position);
      this.virtualCanvas.line(pos.addConstant(-1, 0), pos.addConstant(1, 0), "#ff0000");
      this.virtualCanvas.line(pos.addConstant(0, -1), pos.addConstant(0, 1), "#ff0000");
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_rendering_PositionDebug__WEBPACK_IMPORTED_MODULE_7__.default;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_data_Position__WEBPACK_IMPORTED_MODULE_6__.PositionComponent);
      return set;
    }
  }]);

  return PositionDebugSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_5__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/RangeDisplaySystem.ts":
/*!************************************************!*\
  !*** ./src/core/systems/RangeDisplaySystem.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RangeDisplaySystem": () => (/* binding */ RangeDisplaySystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _components_rendering_RangeDisplay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/rendering/RangeDisplay */ "./src/core/components/rendering/RangeDisplay.ts");
/* harmony import */ var _components_data_Range__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/data/Range */ "./src/core/components/data/Range.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var RangeDisplaySystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(RangeDisplaySystem, _BaseSystem);

  var _super = _createSuper(RangeDisplaySystem);

  function RangeDisplaySystem(virtualCanvas) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, RangeDisplaySystem);

    _this = _super.call(this);
    _this.virtualCanvas = void 0;
    _this.virtualCanvas = virtualCanvas;
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(RangeDisplaySystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var targetEntity = entity;
      var position = targetEntity.data.position.position;
      var range = targetEntity.data.range.range;
      var _targetEntity$data$ra = targetEntity.data.rangeDisplay,
          strokeStyle = _targetEntity$data$ra.strokeStyle,
          fillStyle = _targetEntity$data$ra.fillStyle,
          lineWidth = _targetEntity$data$ra.lineWidth,
          offset = _targetEntity$data$ra.offset;
      this.virtualCanvas.drawCircle((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__.getDynamic)(position).add((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__.getDynamic)(offset)), range, fillStyle, strokeStyle, lineWidth >= 1 ? lineWidth : undefined);
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_rendering_RangeDisplay__WEBPACK_IMPORTED_MODULE_7__.RangeDisplayComponent;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_data_Position__WEBPACK_IMPORTED_MODULE_6__.PositionComponent);
      set.add(_components_data_Range__WEBPACK_IMPORTED_MODULE_8__.RangeComponent);
      return set;
    }
  }]);

  return RangeDisplaySystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_5__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/RegionRenderSystem.ts":
/*!************************************************!*\
  !*** ./src/core/systems/RegionRenderSystem.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegionRenderSystem": () => (/* binding */ RegionRenderSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _components_ui_RegionRender__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ui/RegionRender */ "./src/core/components/ui/RegionRender.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var RegionRenderSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(RegionRenderSystem, _BaseSystem);

  var _super = _createSuper(RegionRenderSystem);

  function RegionRenderSystem(virtualCanvas) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, RegionRenderSystem);

    _this = _super.call(this);
    _this.virtualCanvas = void 0;
    _this.virtualCanvas = virtualCanvas;
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(RegionRenderSystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var targetEntity = entity;
      var position = targetEntity.data.position.position;
      var region = targetEntity.data.region;
      var delta = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(region.delta);
      var fillColor = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(region.fillColor);
      var strokeColor = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(region.strokeColor);
      var pos = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(position);
      this.virtualCanvas.drawRectangle(pos.subtract(delta), pos.add(delta), fillColor, strokeColor);
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_ui_RegionRender__WEBPACK_IMPORTED_MODULE_8__.RegionComponent;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_data_Position__WEBPACK_IMPORTED_MODULE_6__.PositionComponent);
      return set;
    }
  }]);

  return RegionRenderSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_5__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/RotationDebugSystem.ts":
/*!*************************************************!*\
  !*** ./src/core/systems/RotationDebugSystem.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RotationDebugSystem": () => (/* binding */ RotationDebugSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _components_data_Rotation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/data/Rotation */ "./src/core/components/data/Rotation.ts");
/* harmony import */ var _components_rendering_RotationDebug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/rendering/RotationDebug */ "./src/core/components/rendering/RotationDebug.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var RotationDebugSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(RotationDebugSystem, _BaseSystem);

  var _super = _createSuper(RotationDebugSystem);

  function RotationDebugSystem(virtualCanvas) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, RotationDebugSystem);

    _this = _super.call(this);
    _this.virtualCanvas = void 0;
    _this.virtualCanvas = virtualCanvas;
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(RotationDebugSystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var targetEntity = entity;
      var rotation = targetEntity.data.rotation.rotation;
      var position = targetEntity.data.position.position;
      var rotVec = _geometry_Vector2__WEBPACK_IMPORTED_MODULE_9__.default.fromAngle((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_10__.getDynamic)(rotation)).scale(2);
      var vecTarget = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_10__.getDynamic)(position).add(rotVec);
      this.virtualCanvas.line((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_10__.getDynamic)(position), vecTarget, "#ff0000");
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_rendering_RotationDebug__WEBPACK_IMPORTED_MODULE_8__.default;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_data_Position__WEBPACK_IMPORTED_MODULE_6__.PositionComponent);
      set.add(_components_data_Rotation__WEBPACK_IMPORTED_MODULE_7__.RotationComponent);
      return set;
    }
  }]);

  return RotationDebugSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_5__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/RotationTargetSystem.ts":
/*!**************************************************!*\
  !*** ./src/core/systems/RotationTargetSystem.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RotationTargetSystem": () => (/* binding */ RotationTargetSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _components_data_Rotation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/data/Rotation */ "./src/core/components/data/Rotation.ts");
/* harmony import */ var _components_behavior_RotationTarget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/behavior/RotationTarget */ "./src/core/components/behavior/RotationTarget.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");
/* harmony import */ var _ecs_decorators_Basis__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ecs/decorators/Basis */ "./src/core/ecs/decorators/Basis.ts");
/* harmony import */ var _ecs_decorators_Required__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ecs/decorators/Required */ "./src/core/ecs/decorators/Required.ts");






var _dec, _dec2, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var RotationTargetSystem = (_dec = (0,_ecs_decorators_Basis__WEBPACK_IMPORTED_MODULE_11__.Basis)(_components_behavior_RotationTarget__WEBPACK_IMPORTED_MODULE_7__.RotationTargetComponent), _dec2 = (0,_ecs_decorators_Required__WEBPACK_IMPORTED_MODULE_12__.Required)([_components_data_Rotation__WEBPACK_IMPORTED_MODULE_6__.RotationComponent, _components_data_Position__WEBPACK_IMPORTED_MODULE_5__.PositionComponent]), _dec(_class = _dec2(_class = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(RotationTargetSystem, _BaseSystem);

  var _super = _createSuper(RotationTargetSystem);

  function RotationTargetSystem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, RotationTargetSystem);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(RotationTargetSystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var targetEntity = entity;
      var position = targetEntity.data.position;
      var rotationTarget = targetEntity.data.rotationTarget;
      var rotation = targetEntity.data.rotation;

      if (rotationTarget === undefined || (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(rotationTarget.target) === undefined) {
        return;
      } // Getting some important values


      var relativeTarget = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(rotationTarget.target).subtract((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(position.position));
      var currentRotation = ((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(rotation.rotation) % 360 + 360) % 360;
      var currentRotationVector = _geometry_Vector2__WEBPACK_IMPORTED_MODULE_10__.default.fromAngle(currentRotation);
      var targetRotation = (relativeTarget.toAngle() + 360) % 360;
      rotationTarget.targetRotation = targetRotation; // Figure out which direction we're rotating in, and how much we need to rotate by.

      var rotationDirection = Math.sign(currentRotationVector.determinant(relativeTarget));
      var desiredRotation = Math.abs(currentRotation - targetRotation);
      var deltaRotation = Math.min(rotationTarget.turnRate * deltaTime, desiredRotation);
      rotation.rotation = (((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(rotation.rotation) + deltaRotation * rotationDirection) % 360 + 360) % 360;

      if (Math.abs(desiredRotation) < rotationTarget.strictness) {
        this.manager.emitEvent("rotationTarget:reached", targetEntity);
      }
    }
  }, {
    key: "checkRelativeThreshold",
    value: function checkRelativeThreshold(a, b, threshold) {
      return Math.abs(a - b) < threshold || Math.abs(a + 360 - b) < threshold || Math.abs(a - (b + 360)) < threshold;
    }
  }]);

  return RotationTargetSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_9__.BaseSystem)) || _class) || _class);

/***/ }),

/***/ "./src/core/systems/SelectionRenderSystem.ts":
/*!***************************************************!*\
  !*** ./src/core/systems/SelectionRenderSystem.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectionSystem": () => (/* binding */ SelectionSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _components_rendering_SelectionDisplay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/rendering/SelectionDisplay */ "./src/core/components/rendering/SelectionDisplay.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var SelectionSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(SelectionSystem, _BaseSystem);

  var _super = _createSuper(SelectionSystem);

  function SelectionSystem(virtualCanvas) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SelectionSystem);

    _this = _super.call(this);
    _this.virtualCanvas = void 0;
    _this.virtualCanvas = virtualCanvas;
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(SelectionSystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var targetEntity = entity;
      var _targetEntity$data = targetEntity.data,
          position = _targetEntity$data.position,
          selectionDisplay = _targetEntity$data.selectionDisplay;
      this.virtualCanvas.drawCircle((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(position.position), (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(selectionDisplay.radius), selectionDisplay.fillStyle, selectionDisplay.strokeStyle, selectionDisplay.lineWidth);
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_rendering_SelectionDisplay__WEBPACK_IMPORTED_MODULE_8__.SelectionDisplayComponent;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_data_Position__WEBPACK_IMPORTED_MODULE_6__.PositionComponent);
      return set;
    }
  }]);

  return SelectionSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_5__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/SpawnerSystem.ts":
/*!*******************************************!*\
  !*** ./src/core/systems/SpawnerSystem.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpawnerSystem": () => (/* binding */ SpawnerSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _components_behavior_Spawner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/behavior/Spawner */ "./src/core/components/behavior/Spawner.ts");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var SpawnerSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(SpawnerSystem, _BaseSystem);

  var _super = _createSuper(SpawnerSystem);

  function SpawnerSystem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SpawnerSystem);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(SpawnerSystem, [{
    key: "updateEntity",
    value: function updateEntity(elapsedTime, entity) {
      var targetEntity = entity;
      var spawner = targetEntity.data.spawner;

      while (this.checkInterval(elapsedTime, spawner)) {
        for (var spawn = 0; spawn < spawner.count; spawn++) {
          if (spawner.limit < 0 || spawner.total < spawner.limit) {
            spawner.total++;
            spawner.producer(targetEntity, this.manager);
          }
        }
      }
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_behavior_Spawner__WEBPACK_IMPORTED_MODULE_6__.default;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_data_Position__WEBPACK_IMPORTED_MODULE_5__.PositionComponent);
      return set;
    }
  }]);

  return SpawnerSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_7__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/SpriteRenderSystem.ts":
/*!************************************************!*\
  !*** ./src/core/systems/SpriteRenderSystem.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpriteRenderSystem": () => (/* binding */ SpriteRenderSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/rendering/Sprite */ "./src/core/components/rendering/Sprite.ts");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _components_data_Rotation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/data/Rotation */ "./src/core/components/data/Rotation.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _ecs_decorators_Basis__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ecs/decorators/Basis */ "./src/core/ecs/decorators/Basis.ts");
/* harmony import */ var _ecs_decorators_Required__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ecs/decorators/Required */ "./src/core/ecs/decorators/Required.ts");






var _dec, _dec2, _class, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var SpriteRenderSystem = (_dec = (0,_ecs_decorators_Basis__WEBPACK_IMPORTED_MODULE_10__.Basis)(_components_rendering_Sprite__WEBPACK_IMPORTED_MODULE_6__.default), _dec2 = (0,_ecs_decorators_Required__WEBPACK_IMPORTED_MODULE_11__.Required)([_components_data_Position__WEBPACK_IMPORTED_MODULE_7__.PositionComponent, _components_data_Rotation__WEBPACK_IMPORTED_MODULE_8__.RotationComponent]), _dec(_class = _dec2(_class = (_temp = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(SpriteRenderSystem, _BaseSystem);

  var _super = _createSuper(SpriteRenderSystem);

  function SpriteRenderSystem(virtualCanvas) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SpriteRenderSystem);

    _this = _super.call(this);
    _this.virtualCanvas = void 0;
    _this.virtualCanvas = virtualCanvas;
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(SpriteRenderSystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var spriteEntity = entity;
      var _spriteEntity$data = spriteEntity.data,
          sprite = _spriteEntity$data.sprite,
          rotation = _spriteEntity$data.rotation,
          position = _spriteEntity$data.position;
      this.virtualCanvas.drawImage(sprite.source, (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__.getDynamic)(position.position).add((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__.getDynamic)(sprite.offset)), sprite.size, (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__.getDynamic)(rotation.rotation) + (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__.getDynamic)(sprite.rotationOffset), (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_9__.getDynamic)(sprite.opacity));
    }
  }]);

  return SpriteRenderSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_5__.BaseSystem), _temp)) || _class) || _class);

/***/ }),

/***/ "./src/core/systems/StackSystem.ts":
/*!*****************************************!*\
  !*** ./src/core/systems/StackSystem.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StackSystem": () => (/* binding */ StackSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_behavior_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/behavior/Stack */ "./src/core/components/behavior/Stack.ts");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var StackSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(StackSystem, _BaseSystem);

  var _super = _createSuper(StackSystem);

  function StackSystem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, StackSystem);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(StackSystem, [{
    key: "onManagerAwake",
    value: function onManagerAwake() {
      this.listen("stack:attach", false);
      this.listen("stack:detach");
      this.listen("stack:swap");
    }
  }, {
    key: "onEvent",
    value: function onEvent(event, entity, extra) {
      if (event === "stack:attach") {
        this.handleAttach(entity, extra);
      }

      if (event === "stack:detach") {
        this.handleDetach(entity);
      }

      if (event === "stack:swap") {
        this.handleSwap(entity);
      }
    }
  }, {
    key: "handleAttach",
    value: function handleAttach(entity, extra) {
      var indexOffset = extra["indexOffset"] || 0;
      var parent = this.manager.getEntity(extra["parent"]);
      var originalParent = parent;

      if (parent === undefined || parent === null) {
        return;
      } // Find lowest.


      while (parent !== null && parent.data.stack.child !== null) {
        parent = parent.data.stack.child;
      } // Allow offset.


      if (parent !== null) {
        for (var i = 0; i < indexOffset; i++) {
          parent = parent.data.stack.parent;
        }
      }

      if (parent === null) {
        if (originalParent !== null) {
          this.manager.emitEvent("stack:attach", entity, {
            parent: originalParent
          });
        }

        return;
      }

      var _parent$data = parent.data,
          parentPosition = _parent$data.position,
          parentStack = _parent$data.stack;

      if (!("stack" in entity.data)) {
        this.manager.addComponent(entity, _components_behavior_Stack__WEBPACK_IMPORTED_MODULE_5__.StackComponent, {
          offset: parentStack.offset,
          index: parentStack.index + 1
        });
      }

      var targetEntity = entity;
      var _targetEntity$data = targetEntity.data,
          position = _targetEntity$data.position,
          stack = _targetEntity$data.stack;
      position.position = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(parentPosition.position).add((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(parentStack.offset));
      stack.parent = parent;
      this.manager.emitEvent("stack:attached", entity, {
        parent: parent
      });
    }
  }, {
    key: "handleSwap",
    value: function handleSwap(entity) {
      var targetEntity = entity;
      var stack = targetEntity.data.stack;
      var parent = stack.parent;

      if (parent === null) {
        return;
      }

      var parentStack = parent.data.stack;
      stack.parent = parent.data.stack.parent;
      parentStack.child = stack.child;
      stack.child = parent;
      stack.index--;
      parentStack.index++;
      parentStack.parent = targetEntity;

      if (stack.parent !== null) {
        stack.parent.data.stack.child = targetEntity;
      }

      if (parentStack.child !== null) {
        parentStack.child.data.stack.parent = parent;
      }
    }
  }, {
    key: "handleDetach",
    value: function handleDetach(entity) {
      if (!("stack" in entity.data)) {
        return;
      }

      var targetEntity = entity;
      var stack = targetEntity.data.stack;

      if (stack.parent === null) {
        return;
      }

      var oldParent = stack.parent;
      stack.parent = null;
      stack.index = 0;
      oldParent.data.stack.child = null;
      this.manager.emitEvent("stack:detached", entity, {
        oldParent: oldParent
      });
    }
  }, {
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var targetEntity = entity;
      var _targetEntity$data2 = targetEntity.data,
          position = _targetEntity$data2.position,
          stack = _targetEntity$data2.stack;

      if (stack.parent === null) {
        return;
      }

      var parentPosition = stack.parent.data.position;
      position.position = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(parentPosition.position).add((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(stack.offset));
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_behavior_Stack__WEBPACK_IMPORTED_MODULE_5__.StackComponent;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_data_Position__WEBPACK_IMPORTED_MODULE_6__.PositionComponent);
      return set;
    }
  }]);

  return StackSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_8__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/TextRenderSystem.ts":
/*!**********************************************!*\
  !*** ./src/core/systems/TextRenderSystem.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextRenderSystem": () => (/* binding */ TextRenderSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _components_ui_TextRender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ui/TextRender */ "./src/core/components/ui/TextRender.ts");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var TextRenderSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(TextRenderSystem, _BaseSystem);

  var _super = _createSuper(TextRenderSystem);

  function TextRenderSystem(virtualCanvas) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, TextRenderSystem);

    _this = _super.call(this);
    _this.virtualCanvas = void 0;
    _this.virtualCanvas = virtualCanvas;
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(TextRenderSystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var targetEntity = entity;
      var _targetEntity$data = targetEntity.data,
          textRender = _targetEntity$data.textRender,
          position = _targetEntity$data.position;
      this.virtualCanvas.drawText((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(textRender.text), (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(position.position), textRender.style, textRender.size, textRender.font, textRender.align);
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_ui_TextRender__WEBPACK_IMPORTED_MODULE_6__.default;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_data_Position__WEBPACK_IMPORTED_MODULE_7__.PositionComponent);
      return set;
    }
  }]);

  return TextRenderSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_5__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/VelocitySystem.ts":
/*!********************************************!*\
  !*** ./src/core/systems/VelocitySystem.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VelocitySystem": () => (/* binding */ VelocitySystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _components_data_Velocity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/data/Velocity */ "./src/core/components/data/Velocity.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var VelocitySystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(VelocitySystem, _BaseSystem);

  var _super = _createSuper(VelocitySystem);

  function VelocitySystem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, VelocitySystem);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(VelocitySystem, [{
    key: "updateEntity",
    value: function updateEntity(elapsedTime, entity) {
      var targetEntity = entity;
      var _targetEntity$data = targetEntity.data,
          position = _targetEntity$data.position,
          velocity = _targetEntity$data.velocity;
      position.position = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(position.position).addScaled((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_7__.getDynamic)(velocity.velocity), elapsedTime);
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_data_Velocity__WEBPACK_IMPORTED_MODULE_6__.VelocityComponent;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_data_Position__WEBPACK_IMPORTED_MODULE_5__.PositionComponent);
      return set;
    }
  }]);

  return VelocitySystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_8__.BaseSystem);

/***/ }),

/***/ "./src/core/systems/VelocityTargetSystem.ts":
/*!**************************************************!*\
  !*** ./src/core/systems/VelocityTargetSystem.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VelocityTargetSystem": () => (/* binding */ VelocityTargetSystem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_data_Position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/data/Position */ "./src/core/components/data/Position.ts");
/* harmony import */ var _components_behavior_PositionTarget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/behavior/PositionTarget */ "./src/core/components/behavior/PositionTarget.ts");
/* harmony import */ var _components_data_Velocity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/data/Velocity */ "./src/core/components/data/Velocity.ts");
/* harmony import */ var _data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/DynamicConstant */ "./src/core/data/DynamicConstant.ts");
/* harmony import */ var _ecs_System__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ecs/System */ "./src/core/ecs/System.ts");
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../geometry/Vector2 */ "./src/core/geometry/Vector2.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var VelocityTargetSystem = /*#__PURE__*/function (_BaseSystem) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(VelocityTargetSystem, _BaseSystem);

  var _super = _createSuper(VelocityTargetSystem);

  function VelocityTargetSystem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, VelocityTargetSystem);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(VelocityTargetSystem, [{
    key: "updateEntity",
    value: function updateEntity(deltaTime, entity) {
      var targetEntity = entity;
      var _targetEntity$data = targetEntity.data,
          position = _targetEntity$data.position,
          velocity = _targetEntity$data.velocity,
          velocityTarget = _targetEntity$data.velocityTarget;
      var target = (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(velocityTarget.target);

      if (target === undefined) {
        return;
      }

      var relativePosition = target.subtract((0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(position.position));
      var direction = relativePosition.normalize();
      var perSecond = direction.normalize().scale(velocityTarget.velocity);

      if (this.checkRelativeThreshold(target, (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(position.position), perSecond.magnitude() * deltaTime)) {
        this.manager.emitEvent("velocityTarget:reached", targetEntity);
        position.position = target;
        velocity.velocity = _geometry_Vector2__WEBPACK_IMPORTED_MODULE_10__.default.ZERO;
        return;
      }

      if (this.checkRelativeThreshold(target, (0,_data_DynamicConstant__WEBPACK_IMPORTED_MODULE_8__.getDynamic)(position.position), velocityTarget.strictness)) {
        velocity.velocity = _geometry_Vector2__WEBPACK_IMPORTED_MODULE_10__.default.ZERO;
      } else {
        velocity.velocity = perSecond;
      }
    }
  }, {
    key: "checkRelativeThreshold",
    value: function checkRelativeThreshold(a, b, threshold) {
      return Math.abs(a.x - b.x) < threshold && Math.abs(a.y - b.y) < threshold;
    }
  }, {
    key: "getBasisComponent",
    value: function getBasisComponent() {
      return _components_behavior_PositionTarget__WEBPACK_IMPORTED_MODULE_6__.VelocityTargetComponent;
    }
  }, {
    key: "getRequiredComponents",
    value: function getRequiredComponents() {
      var set = new Set();
      set.add(_components_data_Position__WEBPACK_IMPORTED_MODULE_5__.PositionComponent);
      set.add(_components_data_Velocity__WEBPACK_IMPORTED_MODULE_7__.VelocityComponent);
      return set;
    }
  }]);

  return VelocityTargetSystem;
}(_ecs_System__WEBPACK_IMPORTED_MODULE_9__.BaseSystem);

/***/ })

}]);
//# sourceMappingURL=src_content_GameModel_ts.js.map