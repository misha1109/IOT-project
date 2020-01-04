(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-wrapper\">\r\n  <app-marker-snackbar></app-marker-snackbar>\r\n  <app-google-map></app-google-map>\r\n  <app-main-toolbar></app-main-toolbar>\r\n</div>\r\n<script async defer\r\n        src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBS10qpy3_cOhrEHxWN5C7MzOGWMNudmIs\">\r\n</script>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cable-toolbar/cable-toolbar.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cable-toolbar/cable-toolbar.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cables-toolbar-wrapper\">\n  <div class=\"cable-toolbar-title\">{{ title }}</div>\n  <div *ngFor=\"let cable of cables; let i=index\" class=\"cable-wrapper\"\n    [ngClass]=\"chosenCable && chosenCable.index === i ? 'chosen-cable': ''\"\n    (click)=\"showCable(i)\"\n  >\n      <div class=\"cable-title\">\n      {{ cable.name }}\n    </div>\n    <div class=\"cable-data\" *ngIf=\"chosenCable && chosenCable.index === i\">\n      <p>Name:</p>\n      <p class=\"cable-item\">{{ chosenCable.cable.name }}</p>\n      <p>Ready for service:</p>\n      <p class=\"cable-item\">{{ chosenCable.cable.ready }}</p>\n      <p>Length: </p>\n      <p class=\"cable-item\">{{ chosenCable.cable.length }}</p>\n      <p>Owners: </p>\n      <p class=\"cable-item\">{{ chosenCable.cable.owners }}</p>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/google-map/google-map.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/google-map/google-map.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"map\" class=\"gMap\">\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-toolbar/main-toolbar.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-toolbar/main-toolbar.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-wrapper\">\n  <div class=\"content-wrapper\">\n    <div class=\"heading\">\n      CALIFORNIA TELECOMMUNICATIONS CABLES\n    </div>\n    <app-cable-toolbar [title]=\"'Submarine cables'\"></app-cable-toolbar>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/marker-snackbar/marker-snackbar.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/marker-snackbar/marker-snackbar.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"currSnackData\" class=\"snack-wrapper\" [ngClass]=\"showSnack ? 'snack-show' : 'snack-hide'\">\n  <div>Location:</div>\n  <p>{{ currSnackData?.location }}</p>\n  <div>Coordinates:</div>\n  <p>Latitude: {{ currSnackData?.coordinates.lat }}</p>\n  <p>Longitude: {{ currSnackData?.coordinates.lng }}</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-wrapper{\r\n  overflow: hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtd3JhcHBlcntcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'IOT-webGIS';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/google-map/google-map.component */ "./src/app/components/google-map/google-map.component.ts");
/* harmony import */ var _components_main_toolbar_main_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-toolbar/main-toolbar.component */ "./src/app/components/main-toolbar/main-toolbar.component.ts");
/* harmony import */ var _components_cable_toolbar_cable_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cable-toolbar/cable-toolbar.component */ "./src/app/components/cable-toolbar/cable-toolbar.component.ts");
/* harmony import */ var _components_marker_snackbar_marker_snackbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/marker-snackbar/marker-snackbar.component */ "./src/app/components/marker-snackbar/marker-snackbar.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_4__["GoogleMapComponent"],
            _components_main_toolbar_main_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["MainToolbarComponent"],
            _components_cable_toolbar_cable_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["CableToolbarComponent"],
            _components_marker_snackbar_marker_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["MarkerSnackbarComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/cable-toolbar/cable-toolbar.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/cable-toolbar/cable-toolbar.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cables-toolbar-wrapper {\r\n  width: 25vw;\r\n  border: 2px solid lightgray;\r\n  padding: 1em;\r\n  background-color: #E3F2FD;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 4px 5px 1px rgba(0,0,0,0.75);\r\n}\r\n.cable-wrapper {\r\n  margin: calc( 1em + 5px ) 0;\r\n  padding: 10px 5px;\r\n  border: 1px solid lightgray;\r\n  border-radius: 10px;\r\n  box-shadow: 4px 4px 5px -1px rgba(0,0,0,0.75);\r\n  font-size: larger;\r\n}\r\n.cable-wrapper:hover {\r\n  cursor: pointer;\r\n  -webkit-animation: animeCableWrapper 0.3s forwards ease-in-out;\r\n          animation: animeCableWrapper 0.3s forwards ease-in-out;\r\n}\r\n.cable-title {\r\n  -webkit-text-decoration: underline solid;\r\n          text-decoration: underline solid;\r\n}\r\n.chosen-cable {\r\n  background-color: #BBDEFB;\r\n  transform: scale(1.05);\r\n}\r\n.cable-data {\r\n  margin: 2em 0;\r\n  font-size: large;\r\n  -webkit-animation: animeCableData 0.3s forwards ease-in-out;\r\n          animation: animeCableData 0.3s forwards ease-in-out;\r\n}\r\n.cable-item {\r\n  color: chocolate;\r\n  margin-bottom: 6px;\r\n}\r\n.cable-toolbar-title {\r\n  font-size: xx-large;\r\n}\r\n@-webkit-keyframes animeCableWrapper {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n  100% {\r\n    transform: scale(1.05);\r\n    background-color: #BBDEFB;\r\n  }\r\n}\r\n@keyframes animeCableWrapper {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n  100% {\r\n    transform: scale(1.05);\r\n    background-color: #BBDEFB;\r\n  }\r\n}\r\n@-webkit-keyframes animeCableData {\r\n  0% {\r\n    opacity: 0;\r\n    height: 0;\r\n    transform: translateY(-20%);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    height: 100%;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n@keyframes animeCableData {\r\n  0% {\r\n    opacity: 0;\r\n    height: 0;\r\n    transform: translateY(-20%);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    height: 100%;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWJsZS10b29sYmFyL2NhYmxlLXRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFHbkIsNENBQTRDO0FBQzlDO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFHbkIsNkNBQTZDO0VBQzdDLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDhEQUFzRDtVQUF0RCxzREFBc0Q7QUFDeEQ7QUFDQTtFQUNFLHdDQUFnQztVQUFoQyxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsMkRBQW1EO1VBQW5ELG1EQUFtRDtBQUNyRDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLHlCQUF5QjtFQUMzQjtBQUNGO0FBUkE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLHlCQUF5QjtFQUMzQjtBQUNGO0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixTQUFTO0lBQ1QsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHdCQUF3QjtFQUMxQjtBQUNGO0FBWEE7RUFDRTtJQUNFLFVBQVU7SUFDVixTQUFTO0lBQ1QsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHdCQUF3QjtFQUMxQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYWJsZS10b29sYmFyL2NhYmxlLXRvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWJsZXMtdG9vbGJhci13cmFwcGVyIHtcclxuICB3aWR0aDogMjV2dztcclxuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFM0YyRkQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggNXB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCA1cHggMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbn1cclxuLmNhYmxlLXdyYXBwZXIge1xyXG4gIG1hcmdpbjogY2FsYyggMWVtICsgNXB4ICkgMDtcclxuICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDRweCA0cHggNXB4IC0xcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDRweCA0cHggNXB4IC0xcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICBib3gtc2hhZG93OiA0cHggNHB4IDVweCAtMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuLmNhYmxlLXdyYXBwZXI6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBhbmltYXRpb246IGFuaW1lQ2FibGVXcmFwcGVyIDAuM3MgZm9yd2FyZHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmNhYmxlLXRpdGxlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBzb2xpZDtcclxufVxyXG4uY2hvc2VuLWNhYmxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJERUZCO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuLmNhYmxlLWRhdGEge1xyXG4gIG1hcmdpbjogMmVtIDA7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBhbmltYXRpb246IGFuaW1lQ2FibGVEYXRhIDAuM3MgZm9yd2FyZHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmNhYmxlLWl0ZW0ge1xyXG4gIGNvbG9yOiBjaG9jb2xhdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcbi5jYWJsZS10b29sYmFyLXRpdGxlIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1lQ2FibGVXcmFwcGVyIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJERUZCO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltZUNhYmxlRGF0YSB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/cable-toolbar/cable-toolbar.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/cable-toolbar/cable-toolbar.component.ts ***!
  \*********************************************************************/
/*! exports provided: CableToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CableToolbarComponent", function() { return CableToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _geoDATA_submarineCables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geoDATA/submarineCables */ "./src/app/geoDATA/submarineCables.ts");
/* harmony import */ var _services_google_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/google-api.service */ "./src/app/services/google-api.service.ts");




let CableToolbarComponent = class CableToolbarComponent {
    constructor(googleApiService) {
        this.googleApiService = googleApiService;
        this.cables = [];
    }
    ngOnInit() {
        this.cables = _geoDATA_submarineCables__WEBPACK_IMPORTED_MODULE_2__["subMarineCables"];
    }
    showCable(index) {
        this.googleApiService.removeLine();
        if (this.chosenCable && this.chosenCable.index === index) {
            this.removeCables();
            this.chosenCable = null;
            this.googleApiService.zoomOut();
        }
        else {
            this.removeCables();
            const landingPoints = this.cables[index].landing_points.map(lp => {
                return {
                    coordinates: {
                        lat: parseFloat(lp.latlon.split(',')[0]),
                        lng: parseFloat(lp.latlon.split(',')[1]),
                    },
                    lpName: lp.name
                };
            });
            const cable = {
                landingPoints,
                markers: [],
                name: this.cables[index].name,
                length: this.cables[index].length,
                owners: this.cables[index].owners,
                url: this.cables[index].url,
                ready: this.cables[index].rfs
            };
            cable.landingPoints.forEach(lp => {
                const marker = this.googleApiService.addMarker(lp.coordinates, lp);
                cable.markers.push(marker);
            });
            this.googleApiService.drayLine(cable.markers);
            this.chosenCable = {
                index,
                cable
            };
        }
    }
    removeCables() {
        if (this.chosenCable && this.chosenCable.cable) {
            // @ts-ignore
            this.googleApiService.removeAllMarkers(this.chosenCable.cable.markers);
        }
    }
};
CableToolbarComponent.ctorParameters = () => [
    { type: _services_google_api_service__WEBPACK_IMPORTED_MODULE_3__["GoogleApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CableToolbarComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CableToolbarComponent.prototype, "geoData", void 0);
CableToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cable-toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cable-toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cable-toolbar/cable-toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cable-toolbar.component.css */ "./src/app/components/cable-toolbar/cable-toolbar.component.css")).default]
    })
], CableToolbarComponent);



/***/ }),

/***/ "./src/app/components/google-map/google-map.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/google-map/google-map.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gMap{\r\n  position: fixed !important;\r\n  left: 30vw !important;\r\n  top: 0;\r\n  height: 100vh !important;\r\n  width: 70vw !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nb29nbGUtbWFwL2dvb2dsZS1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsTUFBTTtFQUNOLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dvb2dsZS1tYXAvZ29vZ2xlLW1hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdNYXB7XHJcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMzB2dyAhaW1wb3J0YW50O1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDcwdncgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/google-map/google-map.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/google-map/google-map.component.ts ***!
  \***************************************************************/
/*! exports provided: GoogleMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapComponent", function() { return GoogleMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_google_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/google-api.service */ "./src/app/services/google-api.service.ts");



let GoogleMapComponent = class GoogleMapComponent {
    constructor(googleApi) {
        this.googleApi = googleApi;
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        if (document.getElementById('map')) {
            if (!this.mapInited) {
                this.mapInited = true;
                this.googleApi.initMap();
            }
        }
    }
};
GoogleMapComponent.ctorParameters = () => [
    { type: _services_google_api_service__WEBPACK_IMPORTED_MODULE_2__["GoogleApiService"] }
];
GoogleMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-google-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./google-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/google-map/google-map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./google-map.component.css */ "./src/app/components/google-map/google-map.component.css")).default]
    })
], GoogleMapComponent);



/***/ }),

/***/ "./src/app/components/main-toolbar/main-toolbar.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/main-toolbar/main-toolbar.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-wrapper {\r\n  position: fixed;\r\n  left: 0 ;\r\n  width: 30vw;\r\n  height: 100vh;\r\n  overflow-y: auto;\r\n  background-color: #7986CB;\r\n  border: solid 2px black;\r\n}\r\n.content-wrapper {\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-row-gap: 10px;\r\n  text-align: center;\r\n  margin: 1em;\r\n}\r\n.heading {\r\n  font-size: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXRvb2xiYXIvbWFpbi10b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4tdG9vbGJhci9tYWluLXRvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwIDtcclxuICB3aWR0aDogMzB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5ODZDQjtcclxuICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcclxufVxyXG4uY29udGVudC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdyaWQtcm93LWdhcDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxZW07XHJcbn1cclxuLmhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/main-toolbar/main-toolbar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/main-toolbar/main-toolbar.component.ts ***!
  \*******************************************************************/
/*! exports provided: MainToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainToolbarComponent", function() { return MainToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainToolbarComponent = class MainToolbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-toolbar/main-toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-toolbar.component.css */ "./src/app/components/main-toolbar/main-toolbar.component.css")).default]
    })
], MainToolbarComponent);



/***/ }),

/***/ "./src/app/components/marker-snackbar/marker-snackbar.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/marker-snackbar/marker-snackbar.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".snack-wrapper {\r\n  position: fixed;\r\n  text-align: center;\r\n  width: -webkit-max-content;\r\n  width: -moz-max-content;\r\n  width: max-content;\r\n  top: 0;\r\n  left: 60vw;\r\n  right: 40vw;\r\n  z-index: 1000;\r\n  background-color: #7E57C2;\r\n  padding: 2em;\r\n  border-bottom-right-radius: 10px;\r\n  border-bottom-left-radius: 10px;\r\n  border: 2px solid black;\r\n}\r\n\r\n.snack-wrapper div{\r\n  margin:0.5em 0;\r\n  font-size: larger;\r\n}\r\n\r\n.snack-show {\r\n  -webkit-animation: animeSnackShow 1s forwards ease-in-out;\r\n          animation: animeSnackShow 1s forwards ease-in-out;\r\n}\r\n\r\n.snack-hide {\r\n  -webkit-animation: animeSnackHide 1s forwards ease-in-out;\r\n          animation: animeSnackHide 1s forwards ease-in-out;\r\n}\r\n\r\n@-webkit-keyframes animeSnackShow {\r\n  0%{\r\n    transform: translateY(-100%);\r\n  }\r\n  100%{\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes animeSnackShow {\r\n  0%{\r\n    transform: translateY(-100%);\r\n  }\r\n  100%{\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes  animeSnackHide{\r\n  0%{\r\n    transform: translateY(0);\r\n  }\r\n  99%{\r\n    transform: translateY(-100%);\r\n  }\r\n  100%{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@keyframes  animeSnackHide{\r\n  0%{\r\n    transform: translateY(0);\r\n  }\r\n  99%{\r\n    transform: translateY(-100%);\r\n  }\r\n  100%{\r\n    display: none;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXJrZXItc25hY2tiYXIvbWFya2VyLXNuYWNrYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlEQUFpRDtVQUFqRCxpREFBaUQ7QUFDbkQ7O0FBQ0E7RUFDRSx5REFBaUQ7VUFBakQsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGOztBQVBBO0VBQ0U7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBVkE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFya2VyLXNuYWNrYmFyL21hcmtlci1zbmFja2Jhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNuYWNrLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiA2MHZ3O1xyXG4gIHJpZ2h0OiA0MHZ3O1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdFNTdDMjtcclxuICBwYWRkaW5nOiAyZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnNuYWNrLXdyYXBwZXIgZGl2e1xyXG4gIG1hcmdpbjowLjVlbSAwO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4uc25hY2stc2hvdyB7XHJcbiAgYW5pbWF0aW9uOiBhbmltZVNuYWNrU2hvdyAxcyBmb3J3YXJkcyBlYXNlLWluLW91dDtcclxufVxyXG4uc25hY2staGlkZSB7XHJcbiAgYW5pbWF0aW9uOiBhbmltZVNuYWNrSGlkZSAxcyBmb3J3YXJkcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltZVNuYWNrU2hvdyB7XHJcbiAgMCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gIH1cclxuICAxMDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyAgYW5pbWVTbmFja0hpZGV7XHJcbiAgMCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG4gIDk5JXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgfVxyXG4gIDEwMCV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/marker-snackbar/marker-snackbar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/marker-snackbar/marker-snackbar.component.ts ***!
  \*************************************************************************/
/*! exports provided: MarkerSnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerSnackbarComponent", function() { return MarkerSnackbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_google_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/google-api.service */ "./src/app/services/google-api.service.ts");



let MarkerSnackbarComponent = class MarkerSnackbarComponent {
    constructor(googleApiService) {
        this.googleApiService = googleApiService;
        this.googleApiService.getSnackSub().subscribe(data => {
            this.currSnackData = data;
            this.lastInited = Date.now();
            this.showSnack = true;
            setTimeout(() => {
                if (Date.now() - this.lastInited >= 5000) {
                    this.showSnack = false;
                    setTimeout(() => {
                        this.currSnackData = null;
                    }, 1000);
                }
            }, 5000);
        });
    }
    ngOnInit() {
    }
};
MarkerSnackbarComponent.ctorParameters = () => [
    { type: _services_google_api_service__WEBPACK_IMPORTED_MODULE_2__["GoogleApiService"] }
];
MarkerSnackbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-marker-snackbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./marker-snackbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/marker-snackbar/marker-snackbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./marker-snackbar.component.css */ "./src/app/components/marker-snackbar/marker-snackbar.component.css")).default]
    })
], MarkerSnackbarComponent);



/***/ }),

/***/ "./src/app/geoDATA/submarineCables.ts":
/*!********************************************!*\
  !*** ./src/app/geoDATA/submarineCables.ts ***!
  \********************************************/
/*! exports provided: subMarineCables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subMarineCables", function() { return subMarineCables; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const subMarineCables = [
    {
        "id": "japan-u-s-cable-network-jus",
        "name": "Japan-U.S. Cable Network (JUS)",
        "cable_id": 1010,
        "landing_points": [
            {
                "landing_point_id": 5883,
                "id": "shima-japan",
                "name": "Shima, Japan",
                "latlon": "34.336834,136.874380",
                "url": "#/landing-point/shima-japan"
            },
            {
                "landing_point_id": 5887,
                "id": "maruyama-japan",
                "name": "Maruyama, Japan",
                "latlon": "35.037517,139.816956",
                "url": "#/landing-point/maruyama-japan"
            },
            {
                "landing_point_id": 5703,
                "id": "kitaibaraki-japan",
                "name": "Kitaibaraki, Japan",
                "latlon": "36.801787,140.750940",
                "url": "#/landing-point/kitaibaraki-japan"
            },
            {
                "landing_point_id": 5760,
                "id": "makaha-hi-united-states",
                "name": "Makaha, HI, United States",
                "latlon": "21.463439,-158.220649",
                "url": "#/landing-point/makaha-hi-united-states"
            }, {
                "landing_point_id": 3687,
                "id": "manchester-ca-united-states",
                "name": "Manchester, CA, United States",
                "latlon": "38.969205,-123.686946",
                "url": "#/landing-point/manchester-ca-united-states"
            }, {
                "landing_point_id": 5751,
                "id": "morro-bay-ca-united-states",
                "name": "Morro Bay, CA, United States",
                "latlon": "35.366680,-120.847202",
                "url": "#/landing-point/morro-bay-ca-united-states"
            },
        ],
        "length": "22,682 km",
        "rfs": "2001 September",
        "owners": "Verizon,  AT&T,  BT,  Sprint,  CenturyLink,  KDDI,  NTT,  Chunghwa Telecom,  Tata Communications,  Singtel,  Telekom Malaysia,  Softbank Telecom,  Orange,  SK Broadband,  KT,  China Telecom,  China Unicom,  LG Uplus,  HKBN Enterprise Solutions,  Starhub,  PCCW,  Telstra,  Vodafone,  PLDT",
        "url": null,
        "notes": null
    },
    {
        "id": "asia-america-gateway-aag-cable-system",
        "name": "Asia-America Gateway (AAG) Cable System",
        "cable_id": 1507,
        "landing_points": [
            {
                "landing_point_id": 3772,
                "id": "san-luis-obispo-ca-united-states",
                "name": "San Luis Obispo, CA, United States",
                "latlon": "35.285015,-120.662729",
                "url": "#/landing-point/san-luis-obispo-ca-united-states"
            },
            {
                "landing_point_id": 5754,
                "id": "keawaula-hi-united-states",
                "name": "Keawaula, HI, United States",
                "latlon": "21.548779,-158.242038",
                "url": "#/landing-point/keawaula-hi-united-states"
            },
            {
                "landing_point_id": 3251,
                "id": "tanguisson-point-gu-united-states",
                "name": "Tanguisson Point, GU, United States",
                "latlon": "13.549100,144.809337",
                "url": "#/landing-point/tanguisson-point-gu-united-states"
            },
            {
                "landing_point_id": 10340,
                "id": "la-union-philippines",
                "name": "La Union, Philippines",
                "latlon": "16.582594,120.389646",
                "url": "#/landing-point/la-union-philippines"
            },
            {
                "landing_point_id": 5852,
                "id": "lantau-island-hong-kong-china",
                "name": "Lantau Island, Hong Kong, China",
                "latlon": "22.271496,113.948341",
                "url": "#/landing-point/lantau-island-hong-kong-china"
            },
            {
                "landing_point_id": 5902,
                "id": "mersing-malaysia",
                "name": "Mersing, Malaysia",
                "latlon": "2.295516,103.849908",
                "url": "#/landing-point/mersing-malaysia"
            },
            {
                "landing_point_id": 5902,
                "id": "mersing-malaysia",
                "name": "Mersing, Malaysia",
                "latlon": "2.295516,103.849908",
                "url": "#/landing-point/mersing-malaysia"
            },
        ],
        "length": "20,000 km",
        "rfs": "2009 November",
        "owners": "Telekom Malaysia,  AT&T,  Starhub,  PLDT,  CAT Telecom Public Company Limited,  Airtel (Bharti),  Telstra,  Telkom Indonesia,  BT,  Eastern Telecom,  Indosat Ooredoo,  Spark New Zealand,  Viettel Corporation,  Saigon Postel Corporation,  VNPT International,  Brunei International Gateway,  BayanTel,  Ezecom",
        "url": "http://www.asia-america-gateway.com",
        "notes": null
    },
    {
        "id": "pan-american-crossing-pac",
        "name": "Pan-American Crossing (PAC)",
        "cable_id": 1072,
        "landing_points": [
            {
                "landing_point_id": 5748,
                "id": "grover-beach-ca-united-states",
                "name": "Grover Beach, CA, United States",
                "latlon": "35.120635,-120.621420",
                "url": "#/landing-point/grover-beach-ca-united-states"
            },
            {
                "landing_point_id": 3484,
                "id": "tijuana-mexico",
                "name": "Tijuana, Mexico",
                "latlon": "32.530853,-117.038219",
                "url": "#/landing-point/tijuana-mexico"
            },
            {
                "landing_point_id": 3470,
                "id": "mazatln-mexico",
                "name": "Mazatlán, Mexico",
                "latlon": "23.199535,-106.421867",
                "url": "#/landing-point/mazatln-mexico"
            },
            {
                "landing_point_id": 7981,
                "id": "unqui-costa-rica",
                "name": "Unqui, Costa Rica",
                "latlon": "9.525860,-84.454275",
                "url": "#/landing-point/unqui-costa-rica"
            },
            {
                "landing_point_id": 5925,
                "id": "fort-amador-panama",
                "name": "Fort Amador, Panama",
                "latlon": "8.934112,-79.546733",
                "url": "#/landing-point/fort-amador-panama"
            },
        ],
        "length": "10,000 km",
        "rfs": "2000 March",
        "owners": "CenturyLink",
        "url": "http://www.centurylink.com/wholesale/",
        "notes": null
    }
];


/***/ }),

/***/ "./src/app/services/google-api.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/google-api.service.ts ***!
  \************************************************/
/*! exports provided: GoogleApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleApiService", function() { return GoogleApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let GoogleApiService = class GoogleApiService {
    constructor() {
        this.markers = [];
        this.snackDataSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    initMap() {
        const tempPoint = { lat: -25.344, lng: 131.036 };
        // @ts-ignore
        this.map = new google.maps.Map(document.getElementById('map'), { zoom: 4, center: tempPoint });
        // @ts-ignore
        this.polyline = new google.maps.Polyline({
            // set desired options for color width
            strokeColor: '#0000FF',
            strokeOpacity: 0.4 // opacity of line
        }); // create the polyline (global)
        // @ts-ignore
        this.markerBounds = new google.maps.LatLngBounds();
    }
    addMarker(position, markerData) {
        // @ts-ignore
        const marker = new google.maps.Marker({ position, map: this.map });
        marker.addListener('click', () => {
            console.log(markerData);
            this.snackDataSub.next({
                coordinates: position,
                location: markerData.lpName
            });
        });
        // @ts-ignore
        this.markerBounds.extend(position);
        return marker;
    }
    removeMarker(marker) {
        marker.setMap(null);
    }
    removeAllMarkers(markers) {
        markers.forEach(marker => this.removeMarker(marker));
        // @ts-ignore
        this.markerBounds = new google.maps.LatLngBounds();
    }
    drayLine(markers) {
        const path = markers.map(marker => marker.getPosition());
        this.polyline.setMap(this.map);
        this.polyline.setPath(path);
        // @ts-ignore
        this.map.setZoom(2);
        // @ts-ignore
        setTimeout(() => this.map.fitBounds(this.markerBounds), 1000);
    }
    removeLine() {
        this.polyline.setMap(null);
    }
    zoomOut() {
        // @ts-ignore
        this.markerBounds = new google.maps.LatLngBounds();
        // @ts-ignore
        this.map.setZoom(2);
    }
    getSnackSub() {
        return this.snackDataSub.asObservable();
    }
};
GoogleApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GoogleApiService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Misha\Google Drive\סמי שמעון\שנה ד\סמסטר א\סייבר מרחבי\תרגיל 2\the web project\IOT-webGIS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);