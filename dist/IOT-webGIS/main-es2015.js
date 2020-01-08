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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-wrapper\">\r\n  <div *ngIf=\"!ready\" >\r\n    <img class=\"bcg-img\" src=\"../assets/earth-globe-on-white.jpg\"/>\r\n    <div class=\"title-wrapper\">\r\n      <h1 class=\"app-title\">Welcome to the California telecommunications terminal</h1>\r\n      <h2 class=\"app-sub-title\" *ngIf=\"loading\">Please wait while the application is loading</h2>\r\n      <button *ngIf=\"!loading\" (click)=\"readyClick()\" class=\"ready-button\" mat-raised-button\t>I'm Ready!</button>\r\n      <mat-spinner *ngIf=\"loading\" class=\"loader-wrapper\" [diameter]=\"200\"\r\n                   [color]=\"'accent'\">\r\n      </mat-spinner>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"ready\" class=\"main-wrapper\" >\r\n    <app-marker-snackbar></app-marker-snackbar>\r\n    <app-google-map></app-google-map>\r\n    <app-main-toolbar></app-main-toolbar>\r\n  </div>\r\n</div>\r\n<script async defer\r\n        src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBS10qpy3_cOhrEHxWN5C7MzOGWMNudmIs\">\r\n</script>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cable-toolbar/cable-toolbar.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cable-toolbar/cable-toolbar.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"cables-toolbar-wrapper\" [ngClass]=\" type === 'submarine' ? 'sub-bcg' : type === 'ixp' ? 'ixp-bcg' : 'dc-bcg'  \">\r\n  <div *ngIf=\"showTool\" class=\"close\"  (click)=\"closeTool()\">X</div>\r\n  <div *ngIf=\"!showTool\" class=\"cable-toolbar-title\"  (click)=\"chooseTool()\">{{ title }}</div>\r\n  <div  *ngIf=\"showTool\">\r\n    <button mat-raised-button\t *ngFor=\"let cable of cables; let i=index\" class=\"cable-wrapper\"\r\n            [ngClass]=\"chosenCable && chosenCable.index === i ? 'chosen-cable': ''\"\r\n            (click)=\"showCable(i)\"\r\n    >\r\n      <div class=\"cable-title\">\r\n        {{ cable.name }}\r\n      </div>\r\n      <div class=\"cable-data\" *ngIf=\"chosenCable && chosenCable.index === i\">\r\n        <div *ngIf=\"type === 'ixp' || type === 'dc'\">\r\n          <p >Locations:</p>\r\n          <div *ngFor=\"let loc of cables[0].landing_points\" g>\r\n            <p class=\"locations\">{{ loc.name }}</p>\r\n          </div>\r\n        </div>\r\n        <p ></p>\r\n        <p *ngIf=\"type === 'submarine'\">Ready for service:</p>\r\n        <p *ngIf=\"type === 'submarine'\" class=\"cable-item\">{{ chosenCable.cable.ready }}</p>\r\n        <p *ngIf=\"type === 'submarine'\">Length: </p>\r\n        <p *ngIf=\"type === 'submarine'\" class=\"cable-item\">{{ chosenCable.cable.length }}</p>\r\n        <p *ngIf=\"type === 'submarine'\">Owners: </p>\r\n        <p *ngIf=\"type === 'submarine'\" class=\"cable-item\">{{ chosenCable.cable.owners }}</p>\r\n      </div>\r\n    </button>\r\n  </div>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/google-map/google-map.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/google-map/google-map.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"map\" class=\"gMap \">\r\n\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-toolbar/main-toolbar.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-toolbar/main-toolbar.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-wrapper\">\r\n  <div class=\"content-wrapper\">\r\n    <h1 class=\"heading\">\r\n      CALIFORNIA TELECOMMUNICATIONS CABLES\r\n    </h1>\r\n    <div class=\"toolbar-grid\">\r\n      <app-cable-toolbar  [type]=\"'submarine'\" [title]=\"'Submarine cables'\">\r\n      </app-cable-toolbar>\r\n      <app-cable-toolbar [type]=\"'ixp'\" [title]=\"'IXPs'\">\r\n      </app-cable-toolbar>\r\n      <app-cable-toolbar [type]=\"'dc'\" [title]=\"'Data centers'\">\r\n      </app-cable-toolbar>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/marker-snackbar/marker-snackbar.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/marker-snackbar/marker-snackbar.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"showSnack\" class=\"snack-wrapper\" [ngClass]=\"showSnack ? 'snack-show' : 'snack-hide'\">\r\n  <div class=\"title\">Location:</div>\r\n  <p style=\"margin-bottom: 5px\">{{ currSnackData?.location }}</p>\r\n  <div class=\"title\">Coordinates:</div>\r\n  <p>Latitude: {{ currSnackData?.coordinates.lat }}</p>\r\n  <p>Longitude: {{ currSnackData?.coordinates.lng }}</p>\r\n</div>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".app-wrapper{\r\n  overflow: hidden;\r\n}\r\n.loader-wrapper {\r\n  position: fixed;\r\n  left:0;\r\n  right: 0;\r\n  margin: calc( 50vh - 200px ) auto auto;\r\n}\r\n.bcg-img {\r\n  z-index: -1;\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  opacity: 0.5;\r\n}\r\n.title-wrapper {\r\n  z-index: 1;\r\n  text-align: center;\r\n  margin-top: 10vh;\r\n}\r\n.app-title {\r\n  font-size: 45px;\r\n  font-weight: bold;\r\n}\r\n.app-sub-title {\r\n  margin-top: 20px;\r\n  font-size: 25px;\r\n  color: red;\r\n}\r\n.ready-button {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: 10vh;\r\n  font-size: 30px;\r\n  position: fixed;\r\n  left:0;\r\n  right: 0;\r\n  top: 45vh;\r\n  margin: auto auto;\r\n  -webkit-animation: readyBtnAnime 0.3s forwards ease-in-out;\r\n          animation: readyBtnAnime 0.3s forwards ease-in-out;\r\n  background: #FF7043;\r\n}\r\n.ready-button:hover {\r\n  background: #69F0AE;\r\n}\r\n.main-wrapper {\r\n  -webkit-animation: mainWrappAnime 2s forwards ease-in-out;\r\n          animation: mainWrappAnime 2s forwards ease-in-out;\r\n}\r\n@-webkit-keyframes readyBtnAnime {\r\n  0%{\r\n    transform: scale(0);\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n@keyframes readyBtnAnime {\r\n  0%{\r\n    transform: scale(0);\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n@-webkit-keyframes mainWrappAnime {\r\n  0%{\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes mainWrappAnime {\r\n  0%{\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFVBQVU7QUFDWjtBQUNBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLDBEQUFrRDtVQUFsRCxrREFBa0Q7RUFDbEQsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHlEQUFpRDtVQUFqRCxpREFBaUQ7QUFDbkQ7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjtBQVBBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGO0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC13cmFwcGVye1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmxvYWRlci13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDowO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogY2FsYyggNTB2aCAtIDIwMHB4ICkgYXV0byBhdXRvO1xyXG59XHJcbi5iY2ctaW1nIHtcclxuICB6LWluZGV4OiAtMTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbi50aXRsZS13cmFwcGVyIHtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHZoO1xyXG59XHJcbi5hcHAtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogNDVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYXBwLXN1Yi10aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4ucmVhZHktYnV0dG9uIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDowO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogNDV2aDtcclxuICBtYXJnaW46IGF1dG8gYXV0bztcclxuICBhbmltYXRpb246IHJlYWR5QnRuQW5pbWUgMC4zcyBmb3J3YXJkcyBlYXNlLWluLW91dDtcclxuICBiYWNrZ3JvdW5kOiAjRkY3MDQzO1xyXG59XHJcbi5yZWFkeS1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM2OUYwQUU7XHJcbn1cclxuLm1haW4td3JhcHBlciB7XHJcbiAgYW5pbWF0aW9uOiBtYWluV3JhcHBBbmltZSAycyBmb3J3YXJkcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyByZWFkeUJ0bkFuaW1lIHtcclxuICAwJXtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbWFpbldyYXBwQW5pbWUge1xyXG4gIDAle1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG4iXX0= */");

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
        this.loading = true;
        this.ready = false;
    }
    ngOnInit() {
        setTimeout(() => this.loading = false, 4000);
        this.screenSize = {
            height: window.innerHeight,
            width: window.innerWidth,
        };
    }
    readyClick() {
        this.ready = true;
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_4__["GoogleMapComponent"],
            _components_main_toolbar_main_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["MainToolbarComponent"],
            _components_cable_toolbar_cable_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["CableToolbarComponent"],
            _components_marker_snackbar_marker_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["MarkerSnackbarComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
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
/* harmony default export */ __webpack_exports__["default"] = (".cables-toolbar-wrapper {\r\n  margin: 1em;\r\n  border: 2px solid lightgray;\r\n  padding: 1em;\r\n  /*background-color: #E3F2FD;*/\r\n  border-radius: 10px;\r\n  box-shadow: 0px 4px 5px 1px rgba(0,0,0,0.75);\r\n  width: calc( 33vw - 6em );\r\n}\r\n.sub-bcg {\r\n  background: url('submarine-cable.jpeg') center center no-repeat;\r\n  background-color: #E3F2FD;\r\n}\r\n.ixp-bcg {\r\n  background: url('ixp.jpg') center center no-repeat;\r\n  background-color: #E3F2FD;\r\n}\r\n.dc-bcg {\r\n  background: url('dc.jpg') center center no-repeat;\r\n  background-color: #E3F2FD;\r\n}\r\n.close {\r\n  font-size: 35px;\r\n  color: #455A64;\r\n  cursor: pointer;\r\n}\r\n.cable-wrapper {\r\n  margin: 0.5em 0;\r\n  padding: 10px;\r\n  border: 1px solid lightgray;\r\n  border-radius: 10px;\r\n  box-shadow: 6px 6px 5px -1px rgba(0,0,0,0.75);\r\n  font-size: larger;\r\n  white-space: unset !important;\r\n  background: rgba(255,255,255,0.8);\r\n  width: calc( 33vw - 6em );\r\n}\r\n.cable-wrapper:hover {\r\n  cursor: pointer;\r\n  -webkit-animation: animeCableWrapper 0.3s forwards ease-in-out;\r\n          animation: animeCableWrapper 0.3s forwards ease-in-out;\r\n}\r\n.cable-title {\r\n  -webkit-text-decoration: underline solid;\r\n          text-decoration: underline solid;\r\n}\r\n.chosen-cable {\r\n  background-color: #BBDEFB;\r\n  transform: scale(1.03);\r\n}\r\n.cable-data {\r\n  margin: 1em 0;\r\n  /*font-size: large;*/\r\n  -webkit-animation: animeCableData 0.3s forwards ease-in-out;\r\n          animation: animeCableData 0.3s forwards ease-in-out;\r\n\r\n}\r\n.cable-item {\r\n  color: darkblue;\r\n  margin: 2px 0 3px;\r\n}\r\n.cable-toolbar-title {\r\n  font-size: 24px;\r\n  color: white;\r\n  background: rgba(187,222,251,0.95);\r\n  font-weight: bolder;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: auto;\r\n  border: 1px solid black;\r\n  padding: 0.2em;\r\n  border-radius: 6px;\r\n}\r\n.locations {\r\n  color: white;\r\n}\r\n.cable-toolbar-title:hover {\r\n  cursor: pointer;\r\n}\r\n@-webkit-keyframes animeCableWrapper {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n  100% {\r\n    transform: scale(1.03);\r\n    background-color: #BBDEFB;\r\n  }\r\n}\r\n@keyframes animeCableWrapper {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n  100% {\r\n    transform: scale(1.03);\r\n    background-color: #BBDEFB;\r\n  }\r\n}\r\n@-webkit-keyframes animeCableData {\r\n  0% {\r\n    opacity: 0;\r\n    height: 0;\r\n    transform: translateY(-20%);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    height: 100%;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n@keyframes animeCableData {\r\n  0% {\r\n    opacity: 0;\r\n    height: 0;\r\n    transform: translateY(-20%);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    height: 100%;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWJsZS10b29sYmFyL2NhYmxlLXRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFHbkIsNENBQTRDO0VBQzVDLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsK0RBQStFO0VBQy9FLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0RBQWtFO0VBQ2xFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsaURBQWlFO0VBQ2pFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFHbkIsNkNBQTZDO0VBQzdDLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDhEQUFzRDtVQUF0RCxzREFBc0Q7QUFDeEQ7QUFDQTtFQUNFLHdDQUFnQztVQUFoQyxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsMkRBQW1EO1VBQW5ELG1EQUFtRDs7QUFFckQ7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHNCQUFzQjtJQUN0Qix5QkFBeUI7RUFDM0I7QUFDRjtBQVJBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHNCQUFzQjtJQUN0Qix5QkFBeUI7RUFDM0I7QUFDRjtBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsU0FBUztJQUNULDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWix3QkFBd0I7RUFDMUI7QUFDRjtBQVhBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsU0FBUztJQUNULDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWix3QkFBd0I7RUFDMUI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FibGUtdG9vbGJhci9jYWJsZS10b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FibGVzLXRvb2xiYXItd3JhcHBlciB7XHJcbiAgbWFyZ2luOiAxZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5O1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICAvKmJhY2tncm91bmQtY29sb3I6ICNFM0YyRkQ7Ki9cclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDRweCA1cHggMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNHB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICB3aWR0aDogY2FsYyggMzN2dyAtIDZlbSApO1xyXG59XHJcbi5zdWItYmNnIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc3VibWFyaW5lLWNhYmxlLmpwZWdcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UzRjJGRDtcclxufVxyXG4uaXhwLWJjZyB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2l4cC5qcGdcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UzRjJGRDtcclxufVxyXG4uZGMtYmNnIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZGMuanBnXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFM0YyRkQ7XHJcbn1cclxuLmNsb3NlIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgY29sb3I6ICM0NTVBNjQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jYWJsZS13cmFwcGVyIHtcclxuICBtYXJnaW46IDAuNWVtIDA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDZweCA2cHggNXB4IC0xcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDZweCA2cHggNXB4IC0xcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICBib3gtc2hhZG93OiA2cHggNnB4IDVweCAtMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gIHdpZHRoOiBjYWxjKCAzM3Z3IC0gNmVtICk7XHJcbn1cclxuLmNhYmxlLXdyYXBwZXI6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBhbmltYXRpb246IGFuaW1lQ2FibGVXcmFwcGVyIDAuM3MgZm9yd2FyZHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmNhYmxlLXRpdGxlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBzb2xpZDtcclxufVxyXG4uY2hvc2VuLWNhYmxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJERUZCO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XHJcbn1cclxuLmNhYmxlLWRhdGEge1xyXG4gIG1hcmdpbjogMWVtIDA7XHJcbiAgLypmb250LXNpemU6IGxhcmdlOyovXHJcbiAgYW5pbWF0aW9uOiBhbmltZUNhYmxlRGF0YSAwLjNzIGZvcndhcmRzIGVhc2UtaW4tb3V0O1xyXG5cclxufVxyXG4uY2FibGUtaXRlbSB7XHJcbiAgY29sb3I6IGRhcmtibHVlO1xyXG4gIG1hcmdpbjogMnB4IDAgM3B4O1xyXG59XHJcbi5jYWJsZS10b29sYmFyLXRpdGxlIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTg3LDIyMiwyNTEsMC45NSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDAuMmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4ubG9jYXRpb25zIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNhYmxlLXRvb2xiYXItdGl0bGU6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltZUNhYmxlV3JhcHBlciB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JCREVGQjtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWVDYWJsZURhdGEge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuIl19 */");

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
/* harmony import */ var _services_active_tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/active-tool.service */ "./src/app/services/active-tool.service.ts");





let CableToolbarComponent = class CableToolbarComponent {
    constructor(googleApiService, activeToolService) {
        this.googleApiService = googleApiService;
        this.activeToolService = activeToolService;
        this.cables = [];
        this.activeToolService.getActiveToolSub().subscribe(tool => {
            if (this.type === tool) {
                this.showTool = true;
            }
            else {
                this.showTool = false;
                this.removeCables();
                if (this.chosenCable && this.chosenCable.cable) {
                    this.googleApiService.removeAllMarkers(this.chosenCable.cable.markers);
                }
                this.googleApiService.removeLine();
                this.chosenCable = null;
            }
        });
    }
    ngOnInit() {
        this.cables = _geoDATA_submarineCables__WEBPACK_IMPORTED_MODULE_2__["subMarineCables"][0][this.type];
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
                ready: this.cables[index].rfs,
                location: this.cables[index].location
            };
            cable.landingPoints.forEach(lp => {
                const marker = this.googleApiService.addMarker(lp.coordinates, lp, this.type);
                cable.markers.push(marker);
            });
            const type = this.type === 'submarine' ? true : false;
            this.googleApiService.drayLine(cable.markers, type);
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
    chooseTool() {
        this.showTool = !this.showTool;
        if (!this.showTool) {
            this.closeTool();
        }
        this.activeToolService.setActiveTool(this.type);
    }
    closeTool() {
        this.showTool = !this.showTool;
        if (this.chosenCable && this.chosenCable.cable) {
            this.googleApiService.removeAllMarkers(this.chosenCable.cable.markers);
        }
        this.chosenCable = null;
        this.activeToolService.setActiveTool('');
    }
};
CableToolbarComponent.ctorParameters = () => [
    { type: _services_google_api_service__WEBPACK_IMPORTED_MODULE_3__["GoogleApiService"] },
    { type: _services_active_tool_service__WEBPACK_IMPORTED_MODULE_4__["ActiveToolService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CableToolbarComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CableToolbarComponent.prototype, "geoData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CableToolbarComponent.prototype, "type", void 0);
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
/* harmony default export */ __webpack_exports__["default"] = (".gMap{\r\n  position: fixed !important;\r\n  left: 33vw !important;\r\n  top: 0;\r\n  height: 100vh !important;\r\n  width: 67vw !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nb29nbGUtbWFwL2dvb2dsZS1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsTUFBTTtFQUNOLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dvb2dsZS1tYXAvZ29vZ2xlLW1hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdNYXB7XHJcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMzN2dyAhaW1wb3J0YW50O1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDY3dncgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

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
            setTimeout(() => {
                if (!this.mapInited) {
                    this.mapInited = true;
                    this.googleApi.initMap();
                }
            }, 1000);
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
/* harmony default export */ __webpack_exports__["default"] = (".main-wrapper {\r\n  position: fixed;\r\n  left: 0 ;\r\n  width: 33vw;\r\n  height: 100vh;\r\n  overflow-y: auto;\r\n  background: url('menu-bcg.jpg') 100% 100% no-repeat;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#22c1c3\",endColorstr=\"#2a71ba\",GradientType=1);\r\n  border: solid 2px black;\r\n}\r\n.toolbar-grid {\r\n}\r\n.content-wrapper {\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-row-gap: 10px;\r\n  text-align: center;\r\n  margin: 2em 1em 1em;\r\n}\r\n.heading {\r\n  margin: 0 0 1em;\r\n  font-size: 25px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXRvb2xiYXIvbWFpbi10b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1EQUFtRTtFQUNuRSxnSEFBZ0g7RUFDaEgsdUJBQXVCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4tdG9vbGJhci9tYWluLXRvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwIDtcclxuICB3aWR0aDogMzN2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL21lbnUtYmNnLmpwZ1wiKSAxMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9XCIjMjJjMWMzXCIsZW5kQ29sb3JzdHI9XCIjMmE3MWJhXCIsR3JhZGllbnRUeXBlPTEpO1xyXG4gIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xyXG59XHJcbi50b29sYmFyLWdyaWQge1xyXG59XHJcbi5jb250ZW50LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDJlbSAxZW0gMWVtO1xyXG59XHJcbi5oZWFkaW5nIHtcclxuICBtYXJnaW46IDAgMCAxZW07XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".snack-wrapper {\r\n  position: fixed;\r\n  text-align: center;\r\n  width: -webkit-max-content;\r\n  width: -moz-max-content;\r\n  width: max-content;\r\n  top: 0;\r\n  left: 60vw;\r\n  right: 26vw;\r\n  width: 14vw;\r\n  z-index: 1000;\r\n  background-color: rgba(126,87,194,0.9);\r\n  padding: 1em;\r\n  border-bottom-right-radius: 10px;\r\n  border-bottom-left-radius: 10px;\r\n  border-left: 1px solid white;\r\n  border-right: 1px solid white;\r\n  border-bottom: 1px solid white;\r\n  box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.75);\r\n}\r\n\r\n.title{\r\n  color: white;\r\n}\r\n\r\n.snack-wrapper div{\r\n  margin-bottom: 10px;\r\n  font-size: larger;\r\n}\r\n\r\n.snack-show {\r\n  -webkit-animation: animeSnackShow 1s forwards ease-in-out;\r\n          animation: animeSnackShow 1s forwards ease-in-out;\r\n}\r\n\r\n.snack-hide {\r\n  -webkit-animation: animeSnackHide 1s forwards ease-in-out;\r\n          animation: animeSnackHide 1s forwards ease-in-out;\r\n}\r\n\r\n@-webkit-keyframes animeSnackShow {\r\n  0%{\r\n    transform: translateY(-100%);\r\n  }\r\n  100%{\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes animeSnackShow {\r\n  0%{\r\n    transform: translateY(-100%);\r\n  }\r\n  100%{\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes  animeSnackHide{\r\n  0%{\r\n    transform: translateY(0);\r\n  }\r\n  99%{\r\n    transform: translateY(-100%);\r\n  }\r\n  100%{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@keyframes  animeSnackHide{\r\n  0%{\r\n    transform: translateY(0);\r\n  }\r\n  99%{\r\n    transform: translateY(-100%);\r\n  }\r\n  100%{\r\n    display: none;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXJrZXItc25hY2tiYXIvbWFya2VyLXNuYWNrYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBRzlCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5REFBaUQ7VUFBakQsaURBQWlEO0FBQ25EOztBQUNBO0VBQ0UseURBQWlEO1VBQWpELGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQVZBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hcmtlci1zbmFja2Jhci9tYXJrZXItc25hY2tiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbmFjay13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogNjB2dztcclxuICByaWdodDogMjZ2dztcclxuICB3aWR0aDogMTR2dztcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI2LDg3LDE5NCwwLjkpO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNuYWNrLXdyYXBwZXIgZGl2e1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbi5zbmFjay1zaG93IHtcclxuICBhbmltYXRpb246IGFuaW1lU25hY2tTaG93IDFzIGZvcndhcmRzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5zbmFjay1oaWRlIHtcclxuICBhbmltYXRpb246IGFuaW1lU25hY2tIaWRlIDFzIGZvcndhcmRzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1lU25hY2tTaG93IHtcclxuICAwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgfVxyXG4gIDEwMCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzICBhbmltZVNuYWNrSGlkZXtcclxuICAwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbiAgOTkle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICB9XHJcbiAgMTAwJXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

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
        dc: [
            {
                "name": "California Data Centers",
                "landing_points": [
                    {
                        "name": "Citrus Heights",
                        "latlon": "38.697,-121.271",
                    },
                    {
                        "name": "Mcclellan AFB",
                        "latlon": "38.667,-121.390",
                    },
                    {
                        "name": "Rancho Cordova",
                        "latlon": "38.605,-121.282",
                    },
                    {
                        "name": "Santa Clara",
                        "latlon": "37.393,-121.961",
                    },
                    {
                        "name": "Los Angeles",
                        "latlon": "34.053,-118.264",
                    },
                    {
                        "name": "Irvine",
                        "latlon": "33.660,-117.739",
                    },
                ]
            }
        ],
        ixp: [
            {
                "name": "San Francisco IXP's",
                "landing_points": [
                    {
                        "name": "365 Main Street,San Francisco",
                        "latlon": "37.789,-122.396",
                    },
                    {
                        "name": "Morro Bay, CA, United States",
                        "latlon": "37.733,-122.393",
                    },
                    {
                        "name": "529 Bryant Street,Palo Alto",
                        "latlon": "37.444,-122.151",
                    },
                    {
                        "name": " 48233 Warm Springs Boulevard,Fremont ",
                        "latlon": "37.515,-121.929",
                    },
                    {
                        "name": "Xaspian Drive,Sunnyvale",
                        "latlon": "37.406,-122.008\n",
                    },
                    {
                        "name": "2820 Northwestern Parkway,Santa Clara",
                        "latlon": "37.346,-121.985",
                    },
                    {
                        "name": "Space Park Drive,Santa Clara",
                        "latlon": "37.393,-121.961",
                    },
                ]
            }
        ],
        submarine: [
            {
                "id": "japan-u-s-cable-network-jus",
                "name": "Japan-U.S. Cable Network (JUS)",
                "cable_id": 1010,
                "landing_points": [
                    {
                        "landing_point_id": 5751,
                        "id": "morro-bay-ca-united-states",
                        "name": "Morro Bay, CA, United States",
                        "latlon": "35.366680,-120.847202",
                        "url": "#/landing-point/morro-bay-ca-united-states"
                    },
                    {
                        "landing_point_id": 5760,
                        "id": "makaha-hi-united-states",
                        "name": "Makaha, HI, United States",
                        "latlon": "21.463439,-158.220649",
                        "url": "#/landing-point/makaha-hi-united-states"
                    },
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
        ],
    },
];


/***/ }),

/***/ "./src/app/services/active-tool.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/active-tool.service.ts ***!
  \*************************************************/
/*! exports provided: ActiveToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveToolService", function() { return ActiveToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ActiveToolService = class ActiveToolService {
    constructor() {
        this.activeToolSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getActiveToolSub() {
        return this.activeToolSub.asObservable();
    }
    setActiveTool(tool) {
        this.activeToolSub.next(tool);
    }
};
ActiveToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ActiveToolService);



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
        const tempPoint = { lat: 36.7783, lng: 119.4179 };
        // @ts-ignore
        this.map = new google.maps.Map(document.getElementById('map'), { zoom: 3, center: tempPoint });
        // @ts-ignore
        this.polyline = new google.maps.Polyline({
            // set desired options for color width
            strokeColor: '#0000FF',
            strokeOpacity: 0.4 // opacity of line
        }); // create the polyline (global)
        // @ts-ignore
        this.markerBounds = new google.maps.LatLngBounds();
    }
    addMarker(position, markerData, markerType) {
        // @ts-ignore
        const icon = {
            submarine: 'assets/submarine.svg',
            ixp: 'assets/ixp-icon.svg',
            dc: 'assets/dc.svg'
        }[markerType];
        // @ts-ignore
        const marker = new google.maps.Marker({ position, map: this.map, icon });
        marker.addListener('click', () => {
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
    drayLine(markers, submarine = false) {
        let path;
        if (submarine) {
            path = markers.map(marker => marker.getPosition());
        }
        else {
            path = this.drawNet(markers);
        }
        this.polyline.setMap(this.map);
        this.polyline.setPath(path);
        // @ts-ignore
        this.map.setZoom(2);
        // @ts-ignore
        setTimeout(() => this.map.fitBounds(this.markerBounds), 1000);
    }
    drawNet(markers) {
        const path = [];
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < markers.length; i++) {
            for (let j = 0; j < markers.length; j++) {
                if (i !== j) {
                    path.push(markers[j].getPosition());
                    this.markers = this.rotate(markers);
                }
                path.push(markers[0].getPosition());
            }
        }
        return path;
    }
    rotate(markers) {
        for (let i = 0; i < markers.length - 1; i++) {
            const temp = [markers[i], markers[i + 1]];
            markers[i] = temp[1];
            markers[i + 1] = temp[0];
        }
        return markers;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tom\Desktop\temp Misha IOT\IOT-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);