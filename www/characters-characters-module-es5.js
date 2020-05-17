function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["characters-characters-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCharactersCharactersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar color=\"success\">\n\t\t<ion-title>Characters</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<ion-searchbar [(ngModel)]=\"terms\"></ion-searchbar>\n\n\t<ion-list>\n\t\t<ion-item button detail lines=\"inset\" *ngFor=\"let character of characters | async\"\n\t\t\t(click)=\"openDetails(character)\">\n\n\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t<img src=\"{{ character.img }}\">\n\t\t\t</ion-avatar>\n\t\t\t<p>{{ character.name }}</p>\n\t\t</ion-item>\n\n\t</ion-list>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/characters/characters-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/characters/characters-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: CharactersPageRoutingModule */

  /***/
  function srcAppPagesCharactersCharactersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharactersPageRoutingModule", function () {
      return CharactersPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _characters_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./characters.page */
    "./src/app/pages/characters/characters.page.ts");

    var routes = [{
      path: '',
      component: _characters_page__WEBPACK_IMPORTED_MODULE_3__["CharactersPage"]
    }];

    var CharactersPageRoutingModule = function CharactersPageRoutingModule() {
      _classCallCheck(this, CharactersPageRoutingModule);
    };

    CharactersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CharactersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/characters/characters.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/characters/characters.module.ts ***!
    \*******************************************************/

  /*! exports provided: CharactersPageModule */

  /***/
  function srcAppPagesCharactersCharactersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharactersPageModule", function () {
      return CharactersPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _characters_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./characters-routing.module */
    "./src/app/pages/characters/characters-routing.module.ts");
    /* harmony import */


    var _characters_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./characters.page */
    "./src/app/pages/characters/characters.page.ts");

    var CharactersPageModule = function CharactersPageModule() {
      _classCallCheck(this, CharactersPageModule);
    };

    CharactersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _characters_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharactersPageRoutingModule"]],
      declarations: [_characters_page__WEBPACK_IMPORTED_MODULE_6__["CharactersPage"]]
    })], CharactersPageModule);
    /***/
  },

  /***/
  "./src/app/pages/characters/characters.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/characters/characters.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCharactersCharactersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: rgb(0, 0, 0, 0.5);\n  --background: url(/assets/img/BrBa.jpg) no-repeat 100%/cover fixed;\n}\n\nion-list {\n  background-color: rgba(163, 207, 134, 0.2);\n}\n\nion-item {\n  --background: rgba(163, 207, 134, 0.2);\n}\n\nion-searchbar {\n  background-color: rgba(163, 207, 134, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iZGV2LWNhM2hlcm9rdS9zcmMvYXBwL3BhZ2VzL2NoYXJhY3RlcnMvY2hhcmFjdGVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXJhY3RlcnMvY2hhcmFjdGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLGtFQUFBO0FDQ0o7O0FEQ0E7RUFDSSwwQ0FBQTtBQ0VKOztBRENBO0VBQ0ksc0NBQUE7QUNFSjs7QURDQTtFQUNJLDBDQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGFyYWN0ZXJzL2NoYXJhY3RlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDAsIDAsIDAsIDAuNSk7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvQnJCYS5qcGcpIG5vLXJlcGVhdCAxMDAlL2NvdmVyIGZpeGVkOyAgICBcbn1cbmlvbi1saXN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxNjMsIDIwNywgMTM0LCAwLjIpOyBcbn1cbiAgXG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDE2MywgMjA3LCAxMzQsIDAuMik7XG59XG5cbmlvbi1zZWFyY2hiYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE2MywgMjA3LCAxMzQsIDAuMik7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigwLCAwLCAwLCAwLjUpO1xuICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9CckJhLmpwZykgbm8tcmVwZWF0IDEwMCUvY292ZXIgZml4ZWQ7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjMsIDIwNywgMTM0LCAwLjIpO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgxNjMsIDIwNywgMTM0LCAwLjIpO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjMsIDIwNywgMTM0LCAwLjIpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/characters/characters.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/characters/characters.page.ts ***!
    \*****************************************************/

  /*! exports provided: CharactersPage */

  /***/
  function srcAppPagesCharactersCharactersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharactersPage", function () {
      return CharactersPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");

    var CharactersPage = /*#__PURE__*/function () {
      function CharactersPage(router, api) {
        _classCallCheck(this, CharactersPage);

        this.router = router;
        this.api = api;
      }

      _createClass(CharactersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.characters = this.api.getCharacters();
          this.characters.subscribe(function (data) {
            console.log('my data', data);
          });
        }
      }, {
        key: "openDetails",
        value: function openDetails(character) {
          var characterId = character.char_id;
          this.router.navigateByUrl("/tabs/characters/".concat(characterId));
        }
      }]);

      return CharactersPage;
    }();

    CharactersPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    CharactersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-characters',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./characters.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./characters.page.scss */
      "./src/app/pages/characters/characters.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], CharactersPage);
    /***/
  }
}]);
//# sourceMappingURL=characters-characters-module-es5.js.map