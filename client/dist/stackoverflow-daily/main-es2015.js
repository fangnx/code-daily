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
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <dashboard></dashboard>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/content-panel/content-panel.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/content-panel/content-panel.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <!-- <div class=\"content-header-container\">\n    <content-header></content-header>\n  </div> -->\n\n  <div class=\"card-list-container\">\n    <question-card\n      *ngFor=\"let question of questions$ | async\"\n      [question]=\"question\"\n      [@fadeInOnEnter]\n      [@fadeOutOnLeave]\n    ></question-card>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/control-panel/control-panel.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/control-panel/control-panel.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div>\n    <clr-tree>\n      <clr-tree-node *ngIf=\"hasUserLoggedIn\" [clrExpanded]=\"true\">\n        FAVORITE TAGS\n        <clr-tree-node\n          *ngFor=\"let tag of []\"\n          [ngClass]=\"getTreeNodeClass(tag)\"\n          class=\"tag-node\"\n        >\n          <button\n            class=\"clr-treenode-link\"\n            (click)=\"onSelectTag(tag)\"\n            [ngClass]=\"getTagClass(tag)\"\n          >\n            {{ tag.name | titlecase }}\n          </button>\n        </clr-tree-node>\n      </clr-tree-node>\n\n      <clr-tree-node [clrExpanded]=\"true\">\n        POPULAR TAGS\n        <clr-tree-node\n          *ngFor=\"let tag of tags\"\n          [ngClass]=\"getTreeNodeClass(tag)\"\n          class=\"tag-node\"\n        >\n          <button\n            class=\"clr-treenode-link\"\n            (click)=\"onSelectTag(tag)\"\n            [ngClass]=\"getTagClass(tag)\"\n          >\n            {{ tag.name | titlecase }}\n          </button>\n          <clr-icon\n            shape=\"star\"\n            (click)=\"onStarClicked(tag)\"\n            [ngClass]=\"getStarIconClass(tag)\"\n          ></clr-icon>\n        </clr-tree-node>\n      </clr-tree-node>\n    </clr-tree>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div class=\"flex-container\">\n    <navigation-panel [user]=\"userAuth$ | async\"></navigation-panel>\n\n    <control-panel\n      [user]=\"userAuth$ | async\"\n      [tags]=\"tags$ | async\"\n      [userFavoriteTags]=\"userFavoriteTags$ | async\"\n      (onTagSelected)=\"onTagSelected($event)\"\n    ></control-panel>\n\n    <router-outlet></router-outlet>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/navigation-panel/navigation-panel.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/navigation-panel/navigation-panel.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div class=\"flex-container\">\n    <div class=\"flex-top\">\n      <button class=\"btn btn-icon btn-link\" (click)=\"navigateToDashboard()\">\n        <clr-icon shape=\"bar-code\" size=\"24\"></clr-icon>\n      </button>\n    </div>\n\n    <div class=\"flex-bottom\">\n      <button\n        class=\"btn btn-icon btn-link\"\n        (click)=\"navigateToUserManagement()\"\n      >\n        <clr-icon\n          shape=\"user\"\n          [ngClass]=\"{ 'has-badge--success': hasUserLoggedIn }\"\n          size=\"24\"\n        ></clr-icon>\n      </button>\n\n      <button class=\"btn btn-icon btn-link\">\n        <clr-icon shape=\"cog\" size=\"24\"></clr-icon>\n      </button>\n    </div>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/login/login.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/login/login.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div class=\"card\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n      <section class=\"title\">\n        <h3 class=\"welcome\">Login</h3>\n      </section>\n\n      <section class=\"login-group\">\n        <clr-input-container>\n          <label class=\"clr-sr-only\">Email</label>\n          <input\n            type=\"text\"\n            formControlName=\"email\"\n            clrInput\n            placeholder=\"Email\"\n          />\n        </clr-input-container>\n\n        <clr-password-container>\n          <label class=\"clr-sr-only\">Password</label>\n          <input\n            type=\"password\"\n            formControlName=\"password\"\n            clrPassword\n            placeholder=\"Password\"\n          />\n        </clr-password-container>\n      </section>\n\n      <section>\n        <button type=\"submit\" class=\"btn btn-primary\">NEXT</button>\n      </section>\n    </form>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/registration/registration.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/registration/registration.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div class=\"card\">\n    <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\">\n      <section class=\"title\">\n        <h3 class=\"welcome\">Register</h3>\n      </section>\n\n      <section class=\"register-group\">\n        <clr-input-container>\n          <label class=\"clr-sr-only\">Email</label>\n          <input\n            type=\"text\"\n            formControlName=\"email\"\n            clrInput\n            placeholder=\"Email\"\n          />\n        </clr-input-container>\n\n        <clr-password-container>\n          <label class=\"clr-sr-only\">Password</label>\n          <input\n            type=\"password\"\n            formControlName=\"password\"\n            clrPassword\n            placeholder=\"Password\"\n          />\n        </clr-password-container>\n      </section>\n\n      <section>\n        <button type=\"submit\" class=\"btn btn-primary\">NEXT</button>\n      </section>\n    </form>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/user-management-panel.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/user-management-panel.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <section>\n    <div class=\"card-list-container\">\n      <div\n        *ngIf=\"hasUserLoggedIn; then loggedInBlock; else notLoggedInBlock\"\n      ></div>\n    </div>\n  </section>\n</main>\n\n<ng-template #loggedInBlock>\n  <setting-card\n    title=\"Log Out\"\n    clarityIconClass=\"logout\"\n    (onCardClicked)=\"onLogoutClicked()\"\n  ></setting-card>\n  <setting-card\n    title=\"Manage Subscription\"\n    clarityIconClass=\"envelope\"\n    (onCardClicked)=\"onManageSubscriptionClicked()\"\n  ></setting-card>\n</ng-template>\n\n<ng-template #notLoggedInBlock>\n  <setting-card\n    title=\"Register\"\n    clarityIconClass=\"user\"\n    (onCardClicked)=\"onRegisterClicked()\"\n  ></setting-card>\n  <setting-card\n    title=\"Log In\"\n    clarityIconClass=\"login\"\n    (onCardClicked)=\"onLoginClicked()\"\n  ></setting-card>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/answer-section/answer-section.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/answer-section/answer-section.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <!-- <answer-badge\n    [ownerName]=\"ownerName\"\n    [ownerProfileImageUrl]=\"ownerProfileImageUrl\"\n    [creationDate]=\"creationDate\"\n  >\n  </answer-badge> -->\n\n  <div class=\"answer-content\">\n    <div [innerHTML]=\"contentRawHtml\"></div>\n  </div>\n\n  <div class=\"answer-status\">\n    <div>\n      <clr-icon shape=\"thumbs-up\" flip=\"horizontal\" size=\"24\"></clr-icon>\n      {{ answerUpvotes }}\n    </div>\n\n    <div>\n      <clr-icon shape=\"thumbs-down\" size=\"24\"></clr-icon>\n      {{ answerDownvotes }}\n    </div>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-badge/question-badge.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-badge/question-badge.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div>\n    <article>\n      <img [src]=\"ownerProfileImageUrl\" loading=\"lazy\" />\n      <h4>{{ ownerName }}</h4>\n    </article>\n\n    <article>\n      <h4>\n        <clr-icon shape=\"eye\" size=\"18\"></clr-icon>\n        {{ viewCount }}\n      </h4>\n\n      <h4>\n        <clr-icon shape=\"talk-bubbles\" size=\"18\"></clr-icon>\n        {{ answerCount }}\n      </h4>\n\n      <h4>\n        <clr-icon shape=\"note\" size=\"18\"></clr-icon>\n        {{ creationDate }}\n      </h4>\n    </article>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-card/question-card.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-card/question-card.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div\n    class=\"card\"\n    [ngClass]=\"{ clickable: !isExpanded }\"\n    (click)=\"onCardClicked()\"\n  >\n    <div class=\"card-header\">\n      <article>\n        <h3>\n          {{ title | titlecase }}\n        </h3>\n        <clr-icon\n          *ngIf=\"isExpanded\"\n          (click)=\"onCloseIconClicked($event)\"\n          shape=\"window-close\"\n          size=\"18\"\n        ></clr-icon>\n      </article>\n\n      <question-badge\n        [owner]=\"owner\"\n        [creationDate]=\"creationDate\"\n        [answerCount]=\"answerCount\"\n        [viewCount]=\"viewCount\"\n      >\n      </question-badge>\n\n      <div class=\"tags\">\n        <button *ngFor=\"let tag of tags\" class=\"btn btn-sm\">\n          {{ tag }}\n        </button>\n      </div>\n    </div>\n\n    <ng-container *ngIf=\"isExpanded\">\n      <!-- <hr /> -->\n\n      <div class=\"card-body\" [@fadeInOnEnter]>\n        <question-content\n          [contentRawHtml]=\"rawHtml\"\n          [contentRawMarkdown]=\"rawMarkdown\"\n        ></question-content>\n      </div>\n    </ng-container>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-content/question-content.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-content/question-content.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div class=\"answer-content\">\n    <!-- <div [innerHTML]=\"contentRawHtml\"></div> -->\n    <div class=\"markdown-wrapper\">\n      <markdown [data]=\"contentRawMarkdown\"></markdown>\n    </div>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/setting-card/setting-card.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/setting-card/setting-card.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div class=\"card clickable\" (click)=\"onCardClickedHandler()\">\n    <div class=\"card-header\">\n      <h3>\n        {{ title }}\n      </h3>\n\n      <clr-icon\n        *ngIf=\"!!clarityIconClass\"\n        [attr.shape]=\"clarityIconClass\"\n      ></clr-icon>\n    </div>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_dashboard_user_management_panel_user_management_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/user-management-panel/user-management-panel.component */ "./src/app/components/dashboard/user-management-panel/user-management-panel.component.ts");
/* harmony import */ var _components_dashboard_content_panel_content_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/content-panel/content-panel.component */ "./src/app/components/dashboard/content-panel/content-panel.component.ts");
/* harmony import */ var _components_dashboard_user_management_panel_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/user-management-panel/registration/registration.component */ "./src/app/components/dashboard/user-management-panel/registration/registration.component.ts");
/* harmony import */ var _components_dashboard_user_management_panel_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/user-management-panel/login/login.component */ "./src/app/components/dashboard/user-management-panel/login/login.component.ts");







const routes = [
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    { path: "dashboard", component: _components_dashboard_content_panel_content_panel_component__WEBPACK_IMPORTED_MODULE_4__["ContentPanelComponent"] },
    { path: "user", component: _components_dashboard_user_management_panel_user_management_panel_component__WEBPACK_IMPORTED_MODULE_3__["UserManagementPanelComponent"] },
    { path: "user/register", component: _components_dashboard_user_management_panel_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"] },
    { path: "user/login", component: _components_dashboard_user_management_panel_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/state/app.actions */ "./src/app/state/app.actions.ts");
/* harmony import */ var _state_app_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/app.selectors */ "./src/app/state/app.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let AppComponent = class AppComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        // TODO: remove this.
        this.store
            .select((state) => Object(_state_app_selectors__WEBPACK_IMPORTED_MODULE_4__["selectAppState"])(state))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((v) => console.log(v)))
            .subscribe();
        this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_3__["fetchCurrentUserAuth"]());
        this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_3__["selectTag"]({ tag: { name: "Javascript" } }));
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _state_app_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state/app.reducer */ "./src/app/state/app.reducer.ts");
/* harmony import */ var _state_app_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state/app.effects */ "./src/app/state/app.effects.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm2015/clr-angular.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
/* harmony import */ var _storage_metareducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./storage.metareducer */ "./src/app/storage.metareducer.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./interceptors/error.interceptor */ "./src/app/interceptors/error.interceptor.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_dashboard_user_management_panel_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dashboard/user-management-panel/login/login.component */ "./src/app/components/dashboard/user-management-panel/login/login.component.ts");
/* harmony import */ var _components_shared_question_card_question_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/shared/question-card/question-card.component */ "./src/app/components/shared/question-card/question-card.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _services_stackExchange_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/stackExchange.service */ "./src/app/services/stackExchange.service.ts");
/* harmony import */ var _components_dashboard_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/dashboard/control-panel/control-panel.component */ "./src/app/components/dashboard/control-panel/control-panel.component.ts");
/* harmony import */ var _components_dashboard_navigation_panel_navigation_panel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/dashboard/navigation-panel/navigation-panel.component */ "./src/app/components/dashboard/navigation-panel/navigation-panel.component.ts");
/* harmony import */ var _components_dashboard_content_panel_content_panel_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/dashboard/content-panel/content-panel.component */ "./src/app/components/dashboard/content-panel/content-panel.component.ts");
/* harmony import */ var _components_shared_answer_section_answer_section_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/shared/answer-section/answer-section.component */ "./src/app/components/shared/answer-section/answer-section.component.ts");
/* harmony import */ var _components_shared_question_badge_question_badge_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/shared/question-badge/question-badge.component */ "./src/app/components/shared/question-badge/question-badge.component.ts");
/* harmony import */ var _components_dashboard_user_management_panel_user_management_panel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/dashboard/user-management-panel/user-management-panel.component */ "./src/app/components/dashboard/user-management-panel/user-management-panel.component.ts");
/* harmony import */ var _components_dashboard_user_management_panel_registration_registration_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/dashboard/user-management-panel/registration/registration.component */ "./src/app/components/dashboard/user-management-panel/registration/registration.component.ts");
/* harmony import */ var _components_shared_question_content_question_content_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/shared/question-content/question-content.component */ "./src/app/components/shared/question-content/question-content.component.ts");
/* harmony import */ var _components_shared_setting_card_setting_card_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/shared/setting-card/setting-card.component */ "./src/app/components/shared/setting-card/setting-card.component.ts");
/* harmony import */ var _services_contentPanel_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/contentPanel.service */ "./src/app/services/contentPanel.service.ts");
































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
            _components_shared_question_card_question_card_component__WEBPACK_IMPORTED_MODULE_19__["QuestionCardComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"],
            _components_dashboard_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_22__["ControlPanelComponent"],
            _components_dashboard_navigation_panel_navigation_panel_component__WEBPACK_IMPORTED_MODULE_23__["NavigationPanelComponent"],
            _components_dashboard_content_panel_content_panel_component__WEBPACK_IMPORTED_MODULE_24__["ContentPanelComponent"],
            _components_shared_answer_section_answer_section_component__WEBPACK_IMPORTED_MODULE_25__["AnswerSectionComponent"],
            _components_shared_question_badge_question_badge_component__WEBPACK_IMPORTED_MODULE_26__["QuestionBadgeComponent"],
            _components_dashboard_user_management_panel_user_management_panel_component__WEBPACK_IMPORTED_MODULE_27__["UserManagementPanelComponent"],
            _components_dashboard_user_management_panel_registration_registration_component__WEBPACK_IMPORTED_MODULE_28__["RegistrationComponent"],
            _components_dashboard_user_management_panel_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
            _components_shared_question_content_question_content_component__WEBPACK_IMPORTED_MODULE_29__["QuestionContentComponent"],
            _components_shared_setting_card_setting_card_component__WEBPACK_IMPORTED_MODULE_30__["SettingCardComponent"],
        ],
        imports: [
            _clr_angular__WEBPACK_IMPORTED_MODULE_12__["ClarityModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({ app: _state_app_reducer__WEBPACK_IMPORTED_MODULE_10__["appReducer"] }, { metaReducers: [_storage_metareducer__WEBPACK_IMPORTED_MODULE_14__["storageMetaReducer"]] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_state_app_effects__WEBPACK_IMPORTED_MODULE_11__["AppEffects"]]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_13__["MarkdownModule"].forRoot(),
        ],
        entryComponents: [_components_shared_answer_section_answer_section_component__WEBPACK_IMPORTED_MODULE_25__["AnswerSectionComponent"]],
        providers: [
            _services_stackExchange_service__WEBPACK_IMPORTED_MODULE_21__["StackExchangeService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"],
            _services_contentPanel_service__WEBPACK_IMPORTED_MODULE_31__["ContentPanelService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_16__["ErrorInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/dashboard/content-panel/content-panel.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dashboard/content-panel/content-panel.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\n  background: #f6f7f8;\n  height: 100%;\n  width: 100%;\n  overflow-y: scroll;\n  padding: 0 0 40px 0;\n}\nmain .content-header-container {\n  margin: 20px 10% 0 10%;\n}\nmain .card-list-container {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  width: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LXN0YWNrb3ZlcmZsb3ctZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY29udGVudC1wYW5lbC9jb250ZW50LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2ZueC9HaXRSZXBvcy9mbngtc3RhY2tvdmVyZmxvdy1kYWlseS9jbGllbnQvc3JjL2FwcC9zdHlsZXMvY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NvbnRlbnQtcGFuZWwvY29udGVudC1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQ29CdUI7RURuQnZCLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRURGO0FGR0U7RUFDRSxzQkFBQTtBRURKO0FGSUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRUZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY29udGVudC1wYW5lbC9jb250ZW50LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzc1wiO1xuXG5tYWluIHtcbiAgYmFja2dyb3VuZDogJGNvbnRlbnQtcGFuZWwtYmctY29sb3I7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcGFkZGluZzogMCAwIDQwcHggMDtcblxuICAuY29udGVudC1oZWFkZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDIwcHggMTAlIDAgMTAlO1xuICB9XG5cbiAgLmNhcmQtbGlzdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDgwMHB4O1xuICB9XG59XG4iLCIkZGFya2dyZXktMDogcmdiKDE1LCAxNSwgMTUpO1xuJGRhcmtncmV5LTE6IHJnYigzMCwgMzAsIDMwKTtcbiRkYXJrZ3JleS0yOiByZ2IoNDUsIDQ1LCA0NSk7XG4kZGFya2dyZXktMzogcmdiKDkwLCA5MCwgOTApO1xuJGdyZXk6IHJnYigxMjAsIDEyMCwgMTIwKTtcblxuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4kYWxtb3N0d2hpdGU6IHJnYigyNTMsIDI1MywgMjUzKTtcbiRsaWdodGdyZXktMDogcmdiKDI0MCwgMjQwLCAyNDApO1xuJGxpZ2h0Z3JleS0xOiByZ2IoMjI1LCAyMjUsIDIyNSk7XG4kbGlnaHRncmV5LTI6IHJnYigyMTAsIDIxMCwgMjEwKTtcbiRsaWdodGdyZXktMzogcmdiKDE5NSwgMTk1LCAxOTUpO1xuXG4kZGFya25hdnk6ICMxNjI0NDc7XG4kcGluazogI2U0M2Y1YTtcbiRsaWdodG5hdnk6ICMyNDI2Mjk7XG4kbmF2eWJsYWNrOiAjMWIxYjJmO1xuXG4kcHJpbWFyeS1jb2xvcjogJGRhcmtuYXZ5O1xuJHNlY29uZGFyeS1jb2xvcjogJHBpbms7XG5cbiR1c2VyLXBhbmVsLWJnLWNvbG9yOiAjZjZmN2Y4O1xuJGNvbnRyb2wtcGFuZWwtYmctY29sb3I6ICRhbG1vc3R3aGl0ZTtcbiRjb250ZW50LXBhbmVsLWJnLWNvbG9yOiAjZjZmN2Y4O1xuJHVzZXItbWFuYWdlbWVudC1iZy1jb2xvcjogJGFsbW9zdHdoaXRlO1xuIiwibWFpbiB7XG4gIGJhY2tncm91bmQ6ICNmNmY3Zjg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcGFkZGluZzogMCAwIDQwcHggMDtcbn1cbm1haW4gLmNvbnRlbnQtaGVhZGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweCAxMCUgMCAxMCU7XG59XG5tYWluIC5jYXJkLWxpc3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogODAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/dashboard/content-panel/content-panel.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dashboard/content-panel/content-panel.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ContentPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPanelComponent", function() { return ContentPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/state/app.selectors */ "./src/app/state/app.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-animations */ "./node_modules/angular-animations/fesm2015/angular-animations.js");
/* harmony import */ var src_app_services_contentPanel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/contentPanel.service */ "./src/app/services/contentPanel.service.ts");






let ContentPanelComponent = class ContentPanelComponent {
    constructor(store, contentPanelService) {
        this.store = store;
        this.contentPanelService = contentPanelService;
        this.ready = false;
        this.contentPanelService.isContentPanelReady$.subscribe((value) => {
            this.ready = value;
        });
    }
    ngOnInit() {
        this.questions$ = this.store.select((state) => Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_2__["selectQuestions"])(state));
    }
    ngOnChanges() { }
};
ContentPanelComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: src_app_services_contentPanel_service__WEBPACK_IMPORTED_MODULE_5__["ContentPanelService"] }
];
ContentPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "content-panel",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/content-panel/content-panel.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        animations: [
            Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeInOnEnterAnimation"])(),
            Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeOutOnLeaveAnimation"])(),
            Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["bounceOnEnterAnimation"])(),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content-panel.component.scss */ "./src/app/components/dashboard/content-panel/content-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
        src_app_services_contentPanel_service__WEBPACK_IMPORTED_MODULE_5__["ContentPanelService"]])
], ContentPanelComponent);



/***/ }),

/***/ "./src/app/components/dashboard/control-panel/control-panel.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dashboard/control-panel/control-panel.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\n  background: #fdfdfd;\n  height: 100%;\n  overflow-y: scroll;\n  width: 100%;\n}\nmain ::ng-deep .clr-treenode-children {\n  margin-left: 0;\n}\nmain div {\n  padding: 10px 0 10px 0;\n}\nmain div clr-tree {\n  color: #0f0f0f;\n  cursor: pointer;\n  font-weight: 400;\n  margin: 0;\n  width: 100%;\n}\nmain div clr-tree .tag-node {\n  border-left: 4px solid transparent;\n  margin: 4px 0 4px 0;\n}\nmain div clr-tree .tag-node.selected {\n  border-left-color: #162447;\n  font-weight: 600;\n}\nmain div clr-tree .tag-node button.active {\n  background: transparent;\n  color: #162447;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LXN0YWNrb3ZlcmZsb3ctZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY29udHJvbC1wYW5lbC9jb250cm9sLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2ZueC9HaXRSZXBvcy9mbngtc3RhY2tvdmVyZmxvdy1kYWlseS9jbGllbnQvc3JjL2FwcC9zdHlsZXMvY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NvbnRyb2wtcGFuZWwvY29udHJvbC1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQ0lZO0VESFosWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBRURGO0FGR0U7RUFDRSxjQUFBO0FFREo7QUZJRTtFQUNFLHNCQUFBO0FFRko7QUZJSTtFQUNFLGNDaEJPO0VEaUJQLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FFRk47QUZJTTtFQUNFLGtDQUFBO0VBQ0EsbUJBQUE7QUVGUjtBRklRO0VBQ0UsMEJDZEM7RURlRCxnQkFBQTtBRUZWO0FGTVU7RUFDRSx1QkFBQTtFQUNBLGNDckJEO0FDaUJYIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY29udHJvbC1wYW5lbC9jb250cm9sLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzc1wiO1xuXG5tYWluIHtcbiAgYmFja2dyb3VuZDogJGNvbnRyb2wtcGFuZWwtYmctY29sb3I7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB3aWR0aDogMTAwJTtcblxuICA6Om5nLWRlZXAgLmNsci10cmVlbm9kZS1jaGlsZHJlbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICBkaXYge1xuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG5cbiAgICBjbHItdHJlZSB7XG4gICAgICBjb2xvcjogJGRhcmtncmV5LTA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC50YWctbm9kZSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIG1hcmdpbjogNHB4IDAgNHB4IDA7XG5cbiAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJGRhcmtncmV5LTA6IHJnYigxNSwgMTUsIDE1KTtcbiRkYXJrZ3JleS0xOiByZ2IoMzAsIDMwLCAzMCk7XG4kZGFya2dyZXktMjogcmdiKDQ1LCA0NSwgNDUpO1xuJGRhcmtncmV5LTM6IHJnYig5MCwgOTAsIDkwKTtcbiRncmV5OiByZ2IoMTIwLCAxMjAsIDEyMCk7XG5cbiR3aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuJGFsbW9zdHdoaXRlOiByZ2IoMjUzLCAyNTMsIDI1Myk7XG4kbGlnaHRncmV5LTA6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiRsaWdodGdyZXktMTogcmdiKDIyNSwgMjI1LCAyMjUpO1xuJGxpZ2h0Z3JleS0yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XG4kbGlnaHRncmV5LTM6IHJnYigxOTUsIDE5NSwgMTk1KTtcblxuJGRhcmtuYXZ5OiAjMTYyNDQ3O1xuJHBpbms6ICNlNDNmNWE7XG4kbGlnaHRuYXZ5OiAjMjQyNjI5O1xuJG5hdnlibGFjazogIzFiMWIyZjtcblxuJHByaW1hcnktY29sb3I6ICRkYXJrbmF2eTtcbiRzZWNvbmRhcnktY29sb3I6ICRwaW5rO1xuXG4kdXNlci1wYW5lbC1iZy1jb2xvcjogI2Y2ZjdmODtcbiRjb250cm9sLXBhbmVsLWJnLWNvbG9yOiAkYWxtb3N0d2hpdGU7XG4kY29udGVudC1wYW5lbC1iZy1jb2xvcjogI2Y2ZjdmODtcbiR1c2VyLW1hbmFnZW1lbnQtYmctY29sb3I6ICRhbG1vc3R3aGl0ZTtcbiIsIm1haW4ge1xuICBiYWNrZ3JvdW5kOiAjZmRmZGZkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgd2lkdGg6IDEwMCU7XG59XG5tYWluIDo6bmctZGVlcCAuY2xyLXRyZWVub2RlLWNoaWxkcmVuIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5tYWluIGRpdiB7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG59XG5tYWluIGRpdiBjbHItdHJlZSB7XG4gIGNvbG9yOiAjMGYwZjBmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5tYWluIGRpdiBjbHItdHJlZSAudGFnLW5vZGUge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDRweCAwIDRweCAwO1xufVxubWFpbiBkaXYgY2xyLXRyZWUgLnRhZy1ub2RlLnNlbGVjdGVkIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMxNjI0NDc7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5tYWluIGRpdiBjbHItdHJlZSAudGFnLW5vZGUgYnV0dG9uLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzE2MjQ0Nztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/dashboard/control-panel/control-panel.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dashboard/control-panel/control-panel.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ControlPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPanelComponent", function() { return ControlPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/state/app.actions */ "./src/app/state/app.actions.ts");





let ControlPanelComponent = class ControlPanelComponent {
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.onTagSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    getTreeNodeClass(tag) {
        return this.isTagSelected(tag) ? "selected" : "";
    }
    getTagClass(tag) {
        return this.isTagSelected(tag) ? "active" : "";
    }
    getStarIconClass(tag) {
        return this.isTagFavoriteByUser(tag) ? "is-solid" : "";
    }
    isTagSelected(tag) {
        return this.selectedTag && this.selectedTag.name === tag.name;
    }
    isTagFavoriteByUser(tag) {
        return (this.userFavoriteTags && this.userFavoriteTags.indexOf(tag.name) >= 0);
    }
    onSelectTag(tag) {
        // TODO: find a better way to redirect.
        this.router.navigate(["/dashboard"]);
        if (this.selectedTag != tag) {
            this.selectedTag = tag;
            this.onTagSelected.emit(tag);
        }
    }
    onStarClicked(tag) {
        console.log(this.user);
        if (!this.hasUserLoggedIn) {
            this.router.navigate(["/user/login"]);
            return;
        }
        if (this.isTagFavoriteByUser(tag)) {
            this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["removeFavoriteTagFromUser"]({ tag: tag.name }));
        }
        else {
            this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["addFavoriteTagToUser"]({ tag: tag.name }));
        }
    }
    get hasUserLoggedIn() {
        return !!this.user && !!this.user.email;
    }
};
ControlPanelComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ControlPanelComponent.prototype, "user", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ControlPanelComponent.prototype, "tags", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ControlPanelComponent.prototype, "selectedTag", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ControlPanelComponent.prototype, "userFavoriteTags", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ControlPanelComponent.prototype, "onTagSelected", void 0);
ControlPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "control-panel",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./control-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/control-panel/control-panel.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./control-panel.component.scss */ "./src/app/components/dashboard/control-panel/control-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
], ControlPanelComponent);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main .flex-container {\n  display: flex;\n  flex-direction: row;\n}\nmain .flex-container ::ng-deep navigation-panel {\n  flex: 0 0 50px;\n  height: 100vh;\n  width: 50px;\n}\nmain .flex-container ::ng-deep control-panel {\n  flex: 0 0 275px;\n  height: 100vh;\n  width: 275px;\n}\nmain .flex-container ::ng-deep content-panel {\n  flex-grow: 1;\n  height: 100vh;\n}\nmain .flex-container ::ng-deep user-management-panel {\n  flex-grow: 1;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LXN0YWNrb3ZlcmZsb3ctZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREdNO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDRFI7QURJTTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0ZSO0FES007RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0hSO0FETU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0pSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XG4gIC5mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIG5hdmlnYXRpb24tcGFuZWwge1xuICAgICAgICBmbGV4OiAwIDAgNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICB9XG5cbiAgICAgIGNvbnRyb2wtcGFuZWwge1xuICAgICAgICBmbGV4OiAwIDAgMjc1cHg7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHdpZHRoOiAyNzVweDtcbiAgICAgIH1cblxuICAgICAgY29udGVudC1wYW5lbCB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIH1cblxuICAgICAgdXNlci1tYW5hZ2VtZW50LXBhbmVsIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwibWFpbiAuZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxubWFpbiAuZmxleC1jb250YWluZXIgOjpuZy1kZWVwIG5hdmlnYXRpb24tcGFuZWwge1xuICBmbGV4OiAwIDAgNTBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDUwcHg7XG59XG5tYWluIC5mbGV4LWNvbnRhaW5lciA6Om5nLWRlZXAgY29udHJvbC1wYW5lbCB7XG4gIGZsZXg6IDAgMCAyNzVweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDI3NXB4O1xufVxubWFpbiAuZmxleC1jb250YWluZXIgOjpuZy1kZWVwIGNvbnRlbnQtcGFuZWwge1xuICBmbGV4LWdyb3c6IDE7XG4gIGhlaWdodDogMTAwdmg7XG59XG5tYWluIC5mbGV4LWNvbnRhaW5lciA6Om5nLWRlZXAgdXNlci1tYW5hZ2VtZW50LXBhbmVsIHtcbiAgZmxleC1ncm93OiAxO1xuICBoZWlnaHQ6IDEwMHZoO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_stackExchange_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/stackExchange.service */ "./src/app/services/stackExchange.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/state/app.actions */ "./src/app/state/app.actions.ts");
/* harmony import */ var src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/state/app.selectors */ "./src/app/state/app.selectors.ts");
/* harmony import */ var src_app_services_contentPanel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/contentPanel.service */ "./src/app/services/contentPanel.service.ts");









let DashboardComponent = class DashboardComponent {
    constructor(store, stackExchangeService, contentPanelService) {
        this.store = store;
        this.stackExchangeService = stackExchangeService;
        this.contentPanelService = contentPanelService;
        this.isContentPanelReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    ngOnInit() {
        this.questions$ = this.store.select((state) => Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_7__["selectQuestions"])(state));
        this.tags$ = this.stackExchangeService
            .getPopularTags()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => res["items"]));
        this.store
            .select((state) => Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_7__["selectSelectedTag"])(state))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.contentPanelService.setReadyState(true);
        }))
            .subscribe();
        this.userAuth$ = this.store.select((state) => Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_7__["selectUserAuth"])(state));
        this.userFavoriteTags$ = this.store
            .select((state) => Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_7__["selectUser"])(state))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((user) => {
            if (!user) {
                return [];
            }
            return user.favoriteTags;
        }));
    }
    onTagSelected(tag) {
        this.contentPanelService.setReadyState(false);
        this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_6__["selectTag"]({ tag }));
    }
    onTagUnselected(tag) {
        this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_6__["unselectTag"]({ tag }));
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: src_app_services_stackExchange_service__WEBPACK_IMPORTED_MODULE_2__["StackExchangeService"] },
    { type: src_app_services_contentPanel_service__WEBPACK_IMPORTED_MODULE_8__["ContentPanelService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "dashboard",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
        src_app_services_stackExchange_service__WEBPACK_IMPORTED_MODULE_2__["StackExchangeService"],
        src_app_services_contentPanel_service__WEBPACK_IMPORTED_MODULE_8__["ContentPanelService"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/dashboard/navigation-panel/navigation-panel.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/navigation-panel/navigation-panel.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\n  background: #f6f7f8;\n  height: 100%;\n  width: 100%;\n}\nmain .flex-container {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n  padding: 15px 0 15px 0;\n}\nmain .flex-container .flex-top,\nmain .flex-container .flex-bottom {\n  display: flex;\n  flex-direction: column;\n}\nmain .flex-container .flex-bottom {\n  margin-top: auto;\n}\nmain .flex-container clr-icon {\n  color: #5a5a5a;\n  margin: 5px 0 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LXN0YWNrb3ZlcmZsb3ctZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvbmF2aWdhdGlvbi1wYW5lbC9uYXZpZ2F0aW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2ZueC9HaXRSZXBvcy9mbngtc3RhY2tvdmVyZmxvdy1kYWlseS9jbGllbnQvc3JjL2FwcC9zdHlsZXMvY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL25hdmlnYXRpb24tcGFuZWwvbmF2aWdhdGlvbi1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQ2tCb0I7RURqQnBCLFlBQUE7RUFDQSxXQUFBO0FFREY7QUZHRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUVESjtBRkdJOztFQUVFLGFBQUE7RUFDQSxzQkFBQTtBRUROO0FGSUk7RUFDRSxnQkFBQTtBRUZOO0FGS0k7RUFDRSxjQ3ZCTztFRHdCUCxtQkFBQTtBRUhOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvbmF2aWdhdGlvbi1wYW5lbC9uYXZpZ2F0aW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzc1wiO1xuXG5tYWluIHtcbiAgYmFja2dyb3VuZDogJHVzZXItcGFuZWwtYmctY29sb3I7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLmZsZXgtY29udGFpbmVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDE1cHggMCAxNXB4IDA7XG5cbiAgICAuZmxleC10b3AsXG4gICAgLmZsZXgtYm90dG9tIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5mbGV4LWJvdHRvbSB7XG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIH1cblxuICAgIGNsci1pY29uIHtcbiAgICAgIGNvbG9yOiAkZGFya2dyZXktMztcbiAgICAgIG1hcmdpbjogNXB4IDAgNXB4IDA7XG4gICAgfVxuICB9XG59XG4iLCIkZGFya2dyZXktMDogcmdiKDE1LCAxNSwgMTUpO1xuJGRhcmtncmV5LTE6IHJnYigzMCwgMzAsIDMwKTtcbiRkYXJrZ3JleS0yOiByZ2IoNDUsIDQ1LCA0NSk7XG4kZGFya2dyZXktMzogcmdiKDkwLCA5MCwgOTApO1xuJGdyZXk6IHJnYigxMjAsIDEyMCwgMTIwKTtcblxuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4kYWxtb3N0d2hpdGU6IHJnYigyNTMsIDI1MywgMjUzKTtcbiRsaWdodGdyZXktMDogcmdiKDI0MCwgMjQwLCAyNDApO1xuJGxpZ2h0Z3JleS0xOiByZ2IoMjI1LCAyMjUsIDIyNSk7XG4kbGlnaHRncmV5LTI6IHJnYigyMTAsIDIxMCwgMjEwKTtcbiRsaWdodGdyZXktMzogcmdiKDE5NSwgMTk1LCAxOTUpO1xuXG4kZGFya25hdnk6ICMxNjI0NDc7XG4kcGluazogI2U0M2Y1YTtcbiRsaWdodG5hdnk6ICMyNDI2Mjk7XG4kbmF2eWJsYWNrOiAjMWIxYjJmO1xuXG4kcHJpbWFyeS1jb2xvcjogJGRhcmtuYXZ5O1xuJHNlY29uZGFyeS1jb2xvcjogJHBpbms7XG5cbiR1c2VyLXBhbmVsLWJnLWNvbG9yOiAjZjZmN2Y4O1xuJGNvbnRyb2wtcGFuZWwtYmctY29sb3I6ICRhbG1vc3R3aGl0ZTtcbiRjb250ZW50LXBhbmVsLWJnLWNvbG9yOiAjZjZmN2Y4O1xuJHVzZXItbWFuYWdlbWVudC1iZy1jb2xvcjogJGFsbW9zdHdoaXRlO1xuIiwibWFpbiB7XG4gIGJhY2tncm91bmQ6ICNmNmY3Zjg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5tYWluIC5mbGV4LWNvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxNXB4IDAgMTVweCAwO1xufVxubWFpbiAuZmxleC1jb250YWluZXIgLmZsZXgtdG9wLFxubWFpbiAuZmxleC1jb250YWluZXIgLmZsZXgtYm90dG9tIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbm1haW4gLmZsZXgtY29udGFpbmVyIC5mbGV4LWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5tYWluIC5mbGV4LWNvbnRhaW5lciBjbHItaWNvbiB7XG4gIGNvbG9yOiAjNWE1YTVhO1xuICBtYXJnaW46IDVweCAwIDVweCAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/dashboard/navigation-panel/navigation-panel.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/dashboard/navigation-panel/navigation-panel.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NavigationPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationPanelComponent", function() { return NavigationPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavigationPanelComponent = class NavigationPanelComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnChanges() { }
    navigateToDashboard() {
        this.router.navigate(["/dashboard"]);
    }
    navigateToUserManagement() {
        this.router.navigate(["/user"]);
    }
    get hasUserLoggedIn() {
        return !!this.user && !!this.user.email;
    }
};
NavigationPanelComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavigationPanelComponent.prototype, "user", void 0);
NavigationPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "navigation-panel",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/navigation-panel/navigation-panel.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation-panel.component.scss */ "./src/app/components/dashboard/navigation-panel/navigation-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NavigationPanelComponent);



/***/ }),

/***/ "./src/app/components/dashboard/user-management-panel/login/login.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/user-management-panel/login/login.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  margin: auto;\n}\n:host main {\n  display: flex;\n  width: 400px;\n}\n:host main .card {\n  background: white;\n  box-shadow: 0 2px 4px #e1e1e1;\n  border-radius: 10px;\n  border-width: 1.5px;\n  border-color: #fdfdfd;\n  margin: 0;\n}\n:host main form {\n  margin: 20px 40px;\n}\n:host main form section {\n  margin: 30px 0;\n}\n:host main form .login-group ::ng-deep .clr-control-container {\n  width: 100%;\n}\n:host main form .login-group ::ng-deep .clr-control-container .clr-input-group {\n  padding: 0;\n  width: 100%;\n}\n:host main form .login-group ::ng-deep .clr-control-container input {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LXN0YWNrb3ZlcmZsb3ctZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlci1tYW5hZ2VtZW50LXBhbmVsL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyLW1hbmFnZW1lbnQtcGFuZWwvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1zdGFja292ZXJmbG93LWRhaWx5L2NsaWVudC9zcmMvYXBwL3N0eWxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7QUNERjtBREdFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNESjtBREdJO0VBQ0UsaUJFSkU7RUZLRiw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkVQUTtFRlFSLFNBQUE7QUNETjtBRElJO0VBQ0UsaUJBQUE7QUNGTjtBRElNO0VBQ0UsY0FBQTtBQ0ZSO0FET1U7RUFDRSxXQUFBO0FDTFo7QURPWTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDTGQ7QURRWTtFQUNFLFdBQUE7QUNOZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXItbWFuYWdlbWVudC1wYW5lbC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3NcIjtcblxuOmhvc3Qge1xuICBtYXJnaW46IGF1dG87XG5cbiAgbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNDAwcHg7XG5cbiAgICAuY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggJGxpZ2h0Z3JleS0xO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJvcmRlci13aWR0aDogMS41cHg7XG4gICAgICBib3JkZXItY29sb3I6ICRhbG1vc3R3aGl0ZTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICBmb3JtIHtcbiAgICAgIG1hcmdpbjogMjBweCA0MHB4O1xuXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgICB9XG5cbiAgICAgIC5sb2dpbi1ncm91cCB7XG4gICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgLmNsci1jb250cm9sLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgLmNsci1pbnB1dC1ncm91cCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBtYXJnaW46IGF1dG87XG59XG46aG9zdCBtYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDQwMHB4O1xufVxuOmhvc3QgbWFpbiAuY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggI2UxZTFlMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXdpZHRoOiAxLjVweDtcbiAgYm9yZGVyLWNvbG9yOiAjZmRmZGZkO1xuICBtYXJnaW46IDA7XG59XG46aG9zdCBtYWluIGZvcm0ge1xuICBtYXJnaW46IDIwcHggNDBweDtcbn1cbjpob3N0IG1haW4gZm9ybSBzZWN0aW9uIHtcbiAgbWFyZ2luOiAzMHB4IDA7XG59XG46aG9zdCBtYWluIGZvcm0gLmxvZ2luLWdyb3VwIDo6bmctZGVlcCAuY2xyLWNvbnRyb2wtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCBtYWluIGZvcm0gLmxvZ2luLWdyb3VwIDo6bmctZGVlcCAuY2xyLWNvbnRyb2wtY29udGFpbmVyIC5jbHItaW5wdXQtZ3JvdXAge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IG1haW4gZm9ybSAubG9naW4tZ3JvdXAgOjpuZy1kZWVwIC5jbHItY29udHJvbC1jb250YWluZXIgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn0iLCIkZGFya2dyZXktMDogcmdiKDE1LCAxNSwgMTUpO1xuJGRhcmtncmV5LTE6IHJnYigzMCwgMzAsIDMwKTtcbiRkYXJrZ3JleS0yOiByZ2IoNDUsIDQ1LCA0NSk7XG4kZGFya2dyZXktMzogcmdiKDkwLCA5MCwgOTApO1xuJGdyZXk6IHJnYigxMjAsIDEyMCwgMTIwKTtcblxuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4kYWxtb3N0d2hpdGU6IHJnYigyNTMsIDI1MywgMjUzKTtcbiRsaWdodGdyZXktMDogcmdiKDI0MCwgMjQwLCAyNDApO1xuJGxpZ2h0Z3JleS0xOiByZ2IoMjI1LCAyMjUsIDIyNSk7XG4kbGlnaHRncmV5LTI6IHJnYigyMTAsIDIxMCwgMjEwKTtcbiRsaWdodGdyZXktMzogcmdiKDE5NSwgMTk1LCAxOTUpO1xuXG4kZGFya25hdnk6ICMxNjI0NDc7XG4kcGluazogI2U0M2Y1YTtcbiRsaWdodG5hdnk6ICMyNDI2Mjk7XG4kbmF2eWJsYWNrOiAjMWIxYjJmO1xuXG4kcHJpbWFyeS1jb2xvcjogJGRhcmtuYXZ5O1xuJHNlY29uZGFyeS1jb2xvcjogJHBpbms7XG5cbiR1c2VyLXBhbmVsLWJnLWNvbG9yOiAjZjZmN2Y4O1xuJGNvbnRyb2wtcGFuZWwtYmctY29sb3I6ICRhbG1vc3R3aGl0ZTtcbiRjb250ZW50LXBhbmVsLWJnLWNvbG9yOiAjZjZmN2Y4O1xuJHVzZXItbWFuYWdlbWVudC1iZy1jb2xvcjogJGFsbW9zdHdoaXRlO1xuIl19 */");

/***/ }),

/***/ "./src/app/components/dashboard/user-management-panel/login/login.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/dashboard/user-management-panel/login/login.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let LoginComponent = class LoginComponent {
    constructor(formBuilder, userService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: [""],
            password: [""],
        });
        this.isSubmitted = false;
        this.errorText = "";
    }
    onSubmit() {
        this.isSubmitted = true;
        this.errorText = "";
        this.userService
            .loginUser(this.loginForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((value) => value))
            .subscribe((value) => {
            console.log(value);
        }, (error) => {
            this.errorText = error;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/login/login.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/components/dashboard/user-management-panel/login/login.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/components/dashboard/user-management-panel/registration/registration.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/dashboard/user-management-panel/registration/registration.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  margin: auto;\n}\n:host main {\n  display: flex;\n  width: 400px;\n}\n:host main .card {\n  background: white;\n  box-shadow: 0 2px 4px #e1e1e1;\n  border-radius: 10px;\n  border-width: 1.5px;\n  border-color: #fdfdfd;\n  margin: 0;\n}\n:host main form {\n  margin: 20px 40px;\n}\n:host main form section {\n  margin: 30px 0;\n}\n:host main form .register-group ::ng-deep .clr-control-container {\n  width: 100%;\n}\n:host main form .register-group ::ng-deep .clr-control-container .clr-input-group {\n  padding: 0;\n  width: 100%;\n}\n:host main form .register-group ::ng-deep .clr-control-container input {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LXN0YWNrb3ZlcmZsb3ctZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlci1tYW5hZ2VtZW50LXBhbmVsL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXItbWFuYWdlbWVudC1wYW5lbC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2ZueC9HaXRSZXBvcy9mbngtc3RhY2tvdmVyZmxvdy1kYWlseS9jbGllbnQvc3JjL2FwcC9zdHlsZXMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0FDREY7QURHRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDREo7QURHSTtFQUNFLGlCRUpFO0VGS0YsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJFUFE7RUZRUixTQUFBO0FDRE47QURJSTtFQUNFLGlCQUFBO0FDRk47QURJTTtFQUNFLGNBQUE7QUNGUjtBRE9VO0VBQ0UsV0FBQTtBQ0xaO0FET1k7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ0xkO0FEUVk7RUFDRSxXQUFBO0FDTmQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyLW1hbmFnZW1lbnQtcGFuZWwvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3NcIjtcblxuOmhvc3Qge1xuICBtYXJnaW46IGF1dG87XG5cbiAgbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNDAwcHg7XG5cbiAgICAuY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggJGxpZ2h0Z3JleS0xO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJvcmRlci13aWR0aDogMS41cHg7XG4gICAgICBib3JkZXItY29sb3I6ICRhbG1vc3R3aGl0ZTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICBmb3JtIHtcbiAgICAgIG1hcmdpbjogMjBweCA0MHB4O1xuXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgICB9XG5cbiAgICAgIC5yZWdpc3Rlci1ncm91cCB7XG4gICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgLmNsci1jb250cm9sLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgLmNsci1pbnB1dC1ncm91cCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBtYXJnaW46IGF1dG87XG59XG46aG9zdCBtYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDQwMHB4O1xufVxuOmhvc3QgbWFpbiAuY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggI2UxZTFlMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXdpZHRoOiAxLjVweDtcbiAgYm9yZGVyLWNvbG9yOiAjZmRmZGZkO1xuICBtYXJnaW46IDA7XG59XG46aG9zdCBtYWluIGZvcm0ge1xuICBtYXJnaW46IDIwcHggNDBweDtcbn1cbjpob3N0IG1haW4gZm9ybSBzZWN0aW9uIHtcbiAgbWFyZ2luOiAzMHB4IDA7XG59XG46aG9zdCBtYWluIGZvcm0gLnJlZ2lzdGVyLWdyb3VwIDo6bmctZGVlcCAuY2xyLWNvbnRyb2wtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCBtYWluIGZvcm0gLnJlZ2lzdGVyLWdyb3VwIDo6bmctZGVlcCAuY2xyLWNvbnRyb2wtY29udGFpbmVyIC5jbHItaW5wdXQtZ3JvdXAge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IG1haW4gZm9ybSAucmVnaXN0ZXItZ3JvdXAgOjpuZy1kZWVwIC5jbHItY29udHJvbC1jb250YWluZXIgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn0iLCIkZGFya2dyZXktMDogcmdiKDE1LCAxNSwgMTUpO1xuJGRhcmtncmV5LTE6IHJnYigzMCwgMzAsIDMwKTtcbiRkYXJrZ3JleS0yOiByZ2IoNDUsIDQ1LCA0NSk7XG4kZGFya2dyZXktMzogcmdiKDkwLCA5MCwgOTApO1xuJGdyZXk6IHJnYigxMjAsIDEyMCwgMTIwKTtcblxuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4kYWxtb3N0d2hpdGU6IHJnYigyNTMsIDI1MywgMjUzKTtcbiRsaWdodGdyZXktMDogcmdiKDI0MCwgMjQwLCAyNDApO1xuJGxpZ2h0Z3JleS0xOiByZ2IoMjI1LCAyMjUsIDIyNSk7XG4kbGlnaHRncmV5LTI6IHJnYigyMTAsIDIxMCwgMjEwKTtcbiRsaWdodGdyZXktMzogcmdiKDE5NSwgMTk1LCAxOTUpO1xuXG4kZGFya25hdnk6ICMxNjI0NDc7XG4kcGluazogI2U0M2Y1YTtcbiRsaWdodG5hdnk6ICMyNDI2Mjk7XG4kbmF2eWJsYWNrOiAjMWIxYjJmO1xuXG4kcHJpbWFyeS1jb2xvcjogJGRhcmtuYXZ5O1xuJHNlY29uZGFyeS1jb2xvcjogJHBpbms7XG5cbiR1c2VyLXBhbmVsLWJnLWNvbG9yOiAjZjZmN2Y4O1xuJGNvbnRyb2wtcGFuZWwtYmctY29sb3I6ICRhbG1vc3R3aGl0ZTtcbiRjb250ZW50LXBhbmVsLWJnLWNvbG9yOiAjZjZmN2Y4O1xuJHVzZXItbWFuYWdlbWVudC1iZy1jb2xvcjogJGFsbW9zdHdoaXRlO1xuIl19 */");

/***/ }),

/***/ "./src/app/components/dashboard/user-management-panel/registration/registration.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/dashboard/user-management-panel/registration/registration.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let RegistrationComponent = class RegistrationComponent {
    constructor(formBuilder, userService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
    }
    ngOnInit() {
        this.registrationForm = this.formBuilder.group({
            email: [""],
            password: [""],
        });
        this.isSubmitted = false;
    }
    onSubmit() {
        this.isSubmitted = true;
        this.userService
            .registerUser(this.registrationForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((value) => console.log(value)))
            .subscribe();
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "registration",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/registration/registration.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.scss */ "./src/app/components/dashboard/user-management-panel/registration/registration.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], RegistrationComponent);



/***/ }),

/***/ "./src/app/components/dashboard/user-management-panel/user-management-panel.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/dashboard/user-management-panel/user-management-panel.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\n  background: #fdfdfd;\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\nmain section {\n  margin: auto;\n}\nmain section .card-list-container {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LXN0YWNrb3ZlcmZsb3ctZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlci1tYW5hZ2VtZW50LXBhbmVsL3VzZXItbWFuYWdlbWVudC1wYW5lbC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LXN0YWNrb3ZlcmZsb3ctZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2NvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyLW1hbmFnZW1lbnQtcGFuZWwvdXNlci1tYW5hZ2VtZW50LXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJDSVk7RURIWixhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUVERjtBRkdFO0VBQ0UsWUFBQTtBRURKO0FGR0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUVETiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXItbWFuYWdlbWVudC1wYW5lbC91c2VyLW1hbmFnZW1lbnQtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XG5cbm1haW4ge1xuICBiYWNrZ3JvdW5kOiAkdXNlci1tYW5hZ2VtZW50LWJnLWNvbG9yO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIHNlY3Rpb24ge1xuICAgIG1hcmdpbjogYXV0bztcblxuICAgIC5jYXJkLWxpc3QtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgfVxufVxuIiwiJGRhcmtncmV5LTA6IHJnYigxNSwgMTUsIDE1KTtcbiRkYXJrZ3JleS0xOiByZ2IoMzAsIDMwLCAzMCk7XG4kZGFya2dyZXktMjogcmdiKDQ1LCA0NSwgNDUpO1xuJGRhcmtncmV5LTM6IHJnYig5MCwgOTAsIDkwKTtcbiRncmV5OiByZ2IoMTIwLCAxMjAsIDEyMCk7XG5cbiR3aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuJGFsbW9zdHdoaXRlOiByZ2IoMjUzLCAyNTMsIDI1Myk7XG4kbGlnaHRncmV5LTA6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiRsaWdodGdyZXktMTogcmdiKDIyNSwgMjI1LCAyMjUpO1xuJGxpZ2h0Z3JleS0yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XG4kbGlnaHRncmV5LTM6IHJnYigxOTUsIDE5NSwgMTk1KTtcblxuJGRhcmtuYXZ5OiAjMTYyNDQ3O1xuJHBpbms6ICNlNDNmNWE7XG4kbGlnaHRuYXZ5OiAjMjQyNjI5O1xuJG5hdnlibGFjazogIzFiMWIyZjtcblxuJHByaW1hcnktY29sb3I6ICRkYXJrbmF2eTtcbiRzZWNvbmRhcnktY29sb3I6ICRwaW5rO1xuXG4kdXNlci1wYW5lbC1iZy1jb2xvcjogI2Y2ZjdmODtcbiRjb250cm9sLXBhbmVsLWJnLWNvbG9yOiAkYWxtb3N0d2hpdGU7XG4kY29udGVudC1wYW5lbC1iZy1jb2xvcjogI2Y2ZjdmODtcbiR1c2VyLW1hbmFnZW1lbnQtYmctY29sb3I6ICRhbG1vc3R3aGl0ZTtcbiIsIm1haW4ge1xuICBiYWNrZ3JvdW5kOiAjZmRmZGZkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxubWFpbiBzZWN0aW9uIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxubWFpbiBzZWN0aW9uIC5jYXJkLWxpc3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/dashboard/user-management-panel/user-management-panel.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/dashboard/user-management-panel/user-management-panel.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: UserManagementPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementPanelComponent", function() { return UserManagementPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/state/app.selectors */ "./src/app/state/app.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let UserManagementPanelComponent = class UserManagementPanelComponent {
    constructor(router, store, userService) {
        this.router = router;
        this.store = store;
        this.userService = userService;
        this.hasUserLoggedIn = false;
    }
    ngOnInit() {
        this.store
            .select((state) => Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_5__["selectUserAuth"])(state))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((userAuth) => {
            if (userAuth && userAuth.email) {
                this.hasUserLoggedIn = true;
            }
        }))
            .subscribe();
    }
    onRegisterClicked() {
        this.router.navigate(["/user/register"]);
    }
    onLoginClicked() {
        this.router.navigate(["/user/login"]);
    }
    onLogoutClicked() {
        this.userService.logoutUser();
    }
    onManageSubscriptionClicked() {
        this.router.navigate(["/manage"]);
    }
};
UserManagementPanelComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
UserManagementPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "user-management-panel",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-management-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/user-management-panel.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-management-panel.component.scss */ "./src/app/components/dashboard/user-management-panel/user-management-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], UserManagementPanelComponent);



/***/ }),

/***/ "./src/app/components/shared/answer-section/answer-section.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/shared/answer-section/answer-section.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\n  margin: 0 0 20px 0;\n}\nmain > div {\n  margin: auto;\n  padding: 5px 0 5px 0;\n  width: 90%;\n}\nmain > .answer-content {\n  padding-bottom: 30px;\n}\nmain > .answer-content ::ng-deep p {\n  color: #0f0f0f;\n  margin-top: 10px;\n}\nmain > .answer-content ::ng-deep a {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\nmain > .answer-content ::ng-deep pre {\n  white-space: pre-wrap !important;\n}\nmain > .answer-content ::ng-deep pre code {\n  color: #e43f5a;\n  display: inline-block;\n  overflow-x: auto;\n  white-space: pre-line;\n  width: 100%;\n}\nmain > .answer-content ::ng-deep img {\n  width: 100%;\n}\nmain > .anwer-meta {\n  display: flex;\n}\nmain > .anwer-meta > .division {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\nmain > .answer-status {\n  color: #0f0f0f;\n  display: flex;\n  font-size: 14px;\n}\nmain > .answer-status > div {\n  margin-right: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LXN0YWNrb3ZlcmZsb3ctZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvYW5zd2VyLXNlY3Rpb24vYW5zd2VyLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Fuc3dlci1zZWN0aW9uL2Fuc3dlci1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2ZueC9HaXRSZXBvcy9mbngtc3RhY2tvdmVyZmxvdy1kYWlseS9jbGllbnQvc3JjL2FwcC9zdHlsZXMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQ0RGO0FER0U7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDREo7QURJRTtFQUNFLG9CQUFBO0FDRko7QURLTTtFQUNFLGNFaEJLO0VGaUJMLGdCQUFBO0FDSFI7QURNTTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNKUjtBRE9NO0VBQ0UsZ0NBQUE7QUNMUjtBRE9RO0VBQ0UsY0VqQkg7RUZrQkcscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0xWO0FEU007RUFDRSxXQUFBO0FDUFI7QURZRTtFQUNFLGFBQUE7QUNWSjtBRFlJO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQ1ZOO0FEY0U7RUFDRSxjRXZEUztFRndEVCxhQUFBO0VBQ0EsZUFBQTtBQ1pKO0FEY0k7RUFDRSxrQkFBQTtBQ1pOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvYW5zd2VyLXNlY3Rpb24vYW5zd2VyLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XG5cbm1haW4ge1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG5cbiAgPiBkaXYge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiA1cHggMCA1cHggMDtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgPiAuYW5zd2VyLWNvbnRlbnQge1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogJGRhcmtncmV5LTA7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgcHJlIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgY29kZSB7XG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gID4gLmFud2VyLW1ldGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICA+IC5kaXZpc2lvbiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICB9XG4gIH1cblxuICA+IC5hbnN3ZXItc3RhdHVzIHtcbiAgICBjb2xvcjogJGRhcmtncmV5LTA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICA+IGRpdiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIxcHg7XG4gICAgfVxuICB9XG59XG4iLCJtYWluIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xufVxubWFpbiA+IGRpdiB7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogNXB4IDAgNXB4IDA7XG4gIHdpZHRoOiA5MCU7XG59XG5tYWluID4gLmFuc3dlci1jb250ZW50IHtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5tYWluID4gLmFuc3dlci1jb250ZW50IDo6bmctZGVlcCBwIHtcbiAgY29sb3I6ICMwZjBmMGY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5tYWluID4gLmFuc3dlci1jb250ZW50IDo6bmctZGVlcCBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDEwMCU7XG59XG5tYWluID4gLmFuc3dlci1jb250ZW50IDo6bmctZGVlcCBwcmUge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcbn1cbm1haW4gPiAuYW5zd2VyLWNvbnRlbnQgOjpuZy1kZWVwIHByZSBjb2RlIHtcbiAgY29sb3I6ICNlNDNmNWE7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICB3aWR0aDogMTAwJTtcbn1cbm1haW4gPiAuYW5zd2VyLWNvbnRlbnQgOjpuZy1kZWVwIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxubWFpbiA+IC5hbndlci1tZXRhIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbm1haW4gPiAuYW53ZXItbWV0YSA+IC5kaXZpc2lvbiB7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG59XG5tYWluID4gLmFuc3dlci1zdGF0dXMge1xuICBjb2xvcjogIzBmMGYwZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxubWFpbiA+IC5hbnN3ZXItc3RhdHVzID4gZGl2IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xufSIsIiRkYXJrZ3JleS0wOiByZ2IoMTUsIDE1LCAxNSk7XG4kZGFya2dyZXktMTogcmdiKDMwLCAzMCwgMzApO1xuJGRhcmtncmV5LTI6IHJnYig0NSwgNDUsIDQ1KTtcbiRkYXJrZ3JleS0zOiByZ2IoOTAsIDkwLCA5MCk7XG4kZ3JleTogcmdiKDEyMCwgMTIwLCAxMjApO1xuXG4kd2hpdGU6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiRhbG1vc3R3aGl0ZTogcmdiKDI1MywgMjUzLCAyNTMpO1xuJGxpZ2h0Z3JleS0wOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4kbGlnaHRncmV5LTE6IHJnYigyMjUsIDIyNSwgMjI1KTtcbiRsaWdodGdyZXktMjogcmdiKDIxMCwgMjEwLCAyMTApO1xuJGxpZ2h0Z3JleS0zOiByZ2IoMTk1LCAxOTUsIDE5NSk7XG5cbiRkYXJrbmF2eTogIzE2MjQ0NztcbiRwaW5rOiAjZTQzZjVhO1xuJGxpZ2h0bmF2eTogIzI0MjYyOTtcbiRuYXZ5YmxhY2s6ICMxYjFiMmY7XG5cbiRwcmltYXJ5LWNvbG9yOiAkZGFya25hdnk7XG4kc2Vjb25kYXJ5LWNvbG9yOiAkcGluaztcblxuJHVzZXItcGFuZWwtYmctY29sb3I6ICNmNmY3Zjg7XG4kY29udHJvbC1wYW5lbC1iZy1jb2xvcjogJGFsbW9zdHdoaXRlO1xuJGNvbnRlbnQtcGFuZWwtYmctY29sb3I6ICNmNmY3Zjg7XG4kdXNlci1tYW5hZ2VtZW50LWJnLWNvbG9yOiAkYWxtb3N0d2hpdGU7XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/shared/answer-section/answer-section.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/answer-section/answer-section.component.ts ***!
  \******************************************************************************/
/*! exports provided: AnswerSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerSectionComponent", function() { return AnswerSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers */ "./src/app/helpers.ts");



let AnswerSectionComponent = class AnswerSectionComponent {
    ngOnInit() {
        this.ownerName = this.answer.owner.display_name;
        this.ownerProfileImageUrl = this.answer.owner.profile_image;
        this.ownerReputation = this.answer.owner.reputation;
        this.answerContentMarkdown = this.answer.body_markdown;
        this.answerUpvotes = this.answer.up_vote_count;
        this.answerDownvotes = this.answer.down_vote_count;
        this.creationDate = Object(src_app_helpers__WEBPACK_IMPORTED_MODULE_2__["parseUnixTimestamp"])(this.answer.creation_date);
        this.lastEditDate = Object(src_app_helpers__WEBPACK_IMPORTED_MODULE_2__["parseUnixTimestamp"])(this.answer.last_edit_date);
    }
    get contentRawHtml() {
        return this.answer.body;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AnswerSectionComponent.prototype, "answer", void 0);
AnswerSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "answer-section",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./answer-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/answer-section/answer-section.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./answer-section.component.scss */ "./src/app/components/shared/answer-section/answer-section.component.scss")).default]
    })
], AnswerSectionComponent);



/***/ }),

/***/ "./src/app/components/shared/question-badge/question-badge.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/shared/question-badge/question-badge.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main > div {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\nmain > div article {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n}\nmain > div article img {\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n}\nmain > div article:first-child h4 {\n  margin: 0 30px 0 10px;\n}\nmain > div article:nth-child(2) h4 {\n  margin: 0 10px 0 10px;\n}\nmain > div article:nth-child(2) clr-icon {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LXN0YWNrb3ZlcmZsb3ctZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcXVlc3Rpb24tYmFkZ2UvcXVlc3Rpb24tYmFkZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3F1ZXN0aW9uLWJhZGdlL3F1ZXN0aW9uLWJhZGdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0RGO0FER0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0RKO0FER0k7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRE47QURLTTtFQUNFLHFCQUFBO0FDSFI7QURRTTtFQUNFLHFCQUFBO0FDTlI7QURRTTtFQUNFLGlCQUFBO0FDTlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9xdWVzdGlvbi1iYWRnZS9xdWVzdGlvbi1iYWRnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3NcIjtcblxubWFpbiA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGFydGljbGUge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgaW1nIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgIH1cblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgaDQge1xuICAgICAgICBtYXJnaW46IDAgMzBweCAwIDEwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgaDQge1xuICAgICAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XG4gICAgICB9XG4gICAgICBjbHItaWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwibWFpbiA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xufVxubWFpbiA+IGRpdiBhcnRpY2xlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbm1haW4gPiBkaXYgYXJ0aWNsZSBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG59XG5tYWluID4gZGl2IGFydGljbGU6Zmlyc3QtY2hpbGQgaDQge1xuICBtYXJnaW46IDAgMzBweCAwIDEwcHg7XG59XG5tYWluID4gZGl2IGFydGljbGU6bnRoLWNoaWxkKDIpIGg0IHtcbiAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xufVxubWFpbiA+IGRpdiBhcnRpY2xlOm50aC1jaGlsZCgyKSBjbHItaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/shared/question-badge/question-badge.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/question-badge/question-badge.component.ts ***!
  \******************************************************************************/
/*! exports provided: QuestionBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBadgeComponent", function() { return QuestionBadgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuestionBadgeComponent = class QuestionBadgeComponent {
    ngOnInit() {
        this.ownerName = this.owner.display_name;
        this.ownerProfileImageUrl = this.owner.profile_image;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuestionBadgeComponent.prototype, "owner", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], QuestionBadgeComponent.prototype, "creationDate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], QuestionBadgeComponent.prototype, "viewCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], QuestionBadgeComponent.prototype, "answerCount", void 0);
QuestionBadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "question-badge",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./question-badge.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-badge/question-badge.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./question-badge.component.scss */ "./src/app/components/shared/question-badge/question-badge.component.scss")).default]
    })
], QuestionBadgeComponent);



/***/ }),

/***/ "./src/app/components/shared/question-card/question-card.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/question-card/question-card.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 800px;\n}\n:host main {\n  width: 100%;\n}\n:host main .card {\n  background: white;\n  box-shadow: 0 2px 4px #e1e1e1;\n  border-radius: 10px;\n  border-width: 1.5px;\n  border-color: #fdfdfd;\n}\n:host main .card .card-header {\n  border: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: auto;\n  padding: 10px 0;\n  width: 95%;\n  word-wrap: break-word;\n}\n:host main .card .card-header article {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n:host main .card .card-header article clr-icon {\n  cursor: pointer;\n  flex-shrink: 0;\n  margin: 8px 0 8px 28px;\n  height: 28px !important;\n  line-height: 28px;\n}\n:host main .card .card-header question-badge {\n  padding: 10px 0 10px 0;\n}\n:host main .card .card-header .tags {\n  padding: 10px 0 10px 0;\n}\n:host main .card hr {\n  border: 1px solid #0f0f0f;\n  box-sizing: border-box;\n  margin: 5px auto 5px auto;\n  width: 97.5%;\n}\n:host main .card .card-body {\n  margin: auto auto 3rem auto;\n  width: 92.5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LXN0YWNrb3ZlcmZsb3ctZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcXVlc3Rpb24tY2FyZC9xdWVzdGlvbi1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9xdWVzdGlvbi1jYXJkL3F1ZXN0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1zdGFja292ZXJmbG93LWRhaWx5L2NsaWVudC9zcmMvYXBwL3N0eWxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7QUNERjtBREdFO0VBQ0UsV0FBQTtBQ0RKO0FER0k7RUFDRSxpQkVIRTtFRklGLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCRU5RO0FES2Q7QURHTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FDRFI7QURHUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDRFY7QURHVTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDRFo7QURLUTtFQUNFLHNCQUFBO0FDSFY7QURNUTtFQUNFLHNCQUFBO0FDSlY7QURRTTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNOUjtBRFNNO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0FDUFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9xdWVzdGlvbi1jYXJkL3F1ZXN0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDgwMHB4O1xuXG4gIG1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmNhcmQge1xuICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4ICRsaWdodGdyZXktMTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBib3JkZXItd2lkdGg6IDEuNXB4O1xuICAgICAgYm9yZGVyLWNvbG9yOiAkYWxtb3N0d2hpdGU7XG5cbiAgICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gICAgICAgIGFydGljbGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICBjbHItaWNvbiB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgIG1hcmdpbjogOHB4IDAgOHB4IDI4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI4cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXN0aW9uLWJhZGdlIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhZ3Mge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaHIge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZGFya2dyZXktMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWFyZ2luOiA1cHggYXV0byA1cHggYXV0bztcbiAgICAgICAgd2lkdGg6IDk3LjUlO1xuICAgICAgfVxuXG4gICAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG8gM3JlbSBhdXRvO1xuICAgICAgICB3aWR0aDogOTIuNSU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIHdpZHRoOiA4MDBweDtcbn1cbjpob3N0IG1haW4ge1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IG1haW4gLmNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4ICNlMWUxZTE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci13aWR0aDogMS41cHg7XG4gIGJvcmRlci1jb2xvcjogI2ZkZmRmZDtcbn1cbjpob3N0IG1haW4gLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMTBweCAwO1xuICB3aWR0aDogOTUlO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG46aG9zdCBtYWluIC5jYXJkIC5jYXJkLWhlYWRlciBhcnRpY2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgbWFpbiAuY2FyZCAuY2FyZC1oZWFkZXIgYXJ0aWNsZSBjbHItaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1hcmdpbjogOHB4IDAgOHB4IDI4cHg7XG4gIGhlaWdodDogMjhweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbjpob3N0IG1haW4gLmNhcmQgLmNhcmQtaGVhZGVyIHF1ZXN0aW9uLWJhZGdlIHtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbn1cbjpob3N0IG1haW4gLmNhcmQgLmNhcmQtaGVhZGVyIC50YWdzIHtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbn1cbjpob3N0IG1haW4gLmNhcmQgaHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGYwZjBmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDVweCBhdXRvIDVweCBhdXRvO1xuICB3aWR0aDogOTcuNSU7XG59XG46aG9zdCBtYWluIC5jYXJkIC5jYXJkLWJvZHkge1xuICBtYXJnaW46IGF1dG8gYXV0byAzcmVtIGF1dG87XG4gIHdpZHRoOiA5Mi41JTtcbn0iLCIkZGFya2dyZXktMDogcmdiKDE1LCAxNSwgMTUpO1xuJGRhcmtncmV5LTE6IHJnYigzMCwgMzAsIDMwKTtcbiRkYXJrZ3JleS0yOiByZ2IoNDUsIDQ1LCA0NSk7XG4kZGFya2dyZXktMzogcmdiKDkwLCA5MCwgOTApO1xuJGdyZXk6IHJnYigxMjAsIDEyMCwgMTIwKTtcblxuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4kYWxtb3N0d2hpdGU6IHJnYigyNTMsIDI1MywgMjUzKTtcbiRsaWdodGdyZXktMDogcmdiKDI0MCwgMjQwLCAyNDApO1xuJGxpZ2h0Z3JleS0xOiByZ2IoMjI1LCAyMjUsIDIyNSk7XG4kbGlnaHRncmV5LTI6IHJnYigyMTAsIDIxMCwgMjEwKTtcbiRsaWdodGdyZXktMzogcmdiKDE5NSwgMTk1LCAxOTUpO1xuXG4kZGFya25hdnk6ICMxNjI0NDc7XG4kcGluazogI2U0M2Y1YTtcbiRsaWdodG5hdnk6ICMyNDI2Mjk7XG4kbmF2eWJsYWNrOiAjMWIxYjJmO1xuXG4kcHJpbWFyeS1jb2xvcjogJGRhcmtuYXZ5O1xuJHNlY29uZGFyeS1jb2xvcjogJHBpbms7XG5cbiR1c2VyLXBhbmVsLWJnLWNvbG9yOiAjZjZmN2Y4O1xuJGNvbnRyb2wtcGFuZWwtYmctY29sb3I6ICRhbG1vc3R3aGl0ZTtcbiRjb250ZW50LXBhbmVsLWJnLWNvbG9yOiAjZjZmN2Y4O1xuJHVzZXItbWFuYWdlbWVudC1iZy1jb2xvcjogJGFsbW9zdHdoaXRlO1xuIl19 */");

/***/ }),

/***/ "./src/app/components/shared/question-card/question-card.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/question-card/question-card.component.ts ***!
  \****************************************************************************/
/*! exports provided: QuestionCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionCardComponent", function() { return QuestionCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers */ "./src/app/helpers.ts");
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-animations */ "./node_modules/angular-animations/fesm2015/angular-animations.js");




let QuestionCardComponent = class QuestionCardComponent {
    constructor() {
        this.selectedTagNames = new Set();
        this.onTagSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.isExpanded = false;
        this.title = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["parseHtmlEntities"])(this.question.title);
        this.owner = this.question.owner;
        this.rawHtml = this.question.body;
        this.rawMarkdown = this.question.body_markdown;
        this.viewCount = this.question.view_count;
        this.answerCount = this.question.answer_count;
        this.upvoteCount = this.question.up_vote_count;
        this.downvoteCount = this.question.down_vote_count;
        this.creationDate = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["parseUnixTimestamp"])(this.question.creation_date);
        this.lastEditDate = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["parseUnixTimestamp"])(this.question.last_edit_date);
        this.tags = this.question.tags;
    }
    onCardClicked() {
        if (!this.isExpanded) {
            this.isExpanded = true;
        }
    }
    onCloseIconClicked(event) {
        event.stopPropagation();
        this.isExpanded = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuestionCardComponent.prototype, "question", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Set)
], QuestionCardComponent.prototype, "selectedTagNames", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], QuestionCardComponent.prototype, "onTagSelected", void 0);
QuestionCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "question-card",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./question-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-card/question-card.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        animations: [Object(angular_animations__WEBPACK_IMPORTED_MODULE_3__["fadeInOnEnterAnimation"])()],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./question-card.component.scss */ "./src/app/components/shared/question-card/question-card.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], QuestionCardComponent);



/***/ }),

/***/ "./src/app/components/shared/question-content/question-content.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/shared/question-content/question-content.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main .markdown-wrapper ::ng-deep p {\n  color: #0f0f0f;\n}\nmain .markdown-wrapper ::ng-deep pre {\n  white-space: pre-wrap !important;\n}\nmain .markdown-wrapper ::ng-deep pre code {\n  display: inline-block;\n  overflow-x: auto;\n  white-space: pre-line;\n  width: 100%;\n}\nmain .markdown-wrapper ::ng-deep img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LXN0YWNrb3ZlcmZsb3ctZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcXVlc3Rpb24tY29udGVudC9xdWVzdGlvbi1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2ZueC9HaXRSZXBvcy9mbngtc3RhY2tvdmVyZmxvdy1kYWlseS9jbGllbnQvc3JjL2FwcC9zdHlsZXMvY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3F1ZXN0aW9uLWNvbnRlbnQvcXVlc3Rpb24tY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTtFQUNFLGNDTE87QUNFYjtBRk1JO0VBQ0UsZ0NBQUE7QUVKTjtBRk1NO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBRUpSO0FGUUk7RUFDRSxXQUFBO0FFTk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9xdWVzdGlvbi1jb250ZW50L3F1ZXN0aW9uLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XG5cbm1haW4ge1xuICAubWFya2Rvd24td3JhcHBlciA6Om5nLWRlZXAge1xuICAgIHAge1xuICAgICAgY29sb3I6ICRkYXJrZ3JleS0wO1xuICAgIH1cblxuICAgIHByZSB7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcblxuICAgICAgY29kZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iLCIkZGFya2dyZXktMDogcmdiKDE1LCAxNSwgMTUpO1xuJGRhcmtncmV5LTE6IHJnYigzMCwgMzAsIDMwKTtcbiRkYXJrZ3JleS0yOiByZ2IoNDUsIDQ1LCA0NSk7XG4kZGFya2dyZXktMzogcmdiKDkwLCA5MCwgOTApO1xuJGdyZXk6IHJnYigxMjAsIDEyMCwgMTIwKTtcblxuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4kYWxtb3N0d2hpdGU6IHJnYigyNTMsIDI1MywgMjUzKTtcbiRsaWdodGdyZXktMDogcmdiKDI0MCwgMjQwLCAyNDApO1xuJGxpZ2h0Z3JleS0xOiByZ2IoMjI1LCAyMjUsIDIyNSk7XG4kbGlnaHRncmV5LTI6IHJnYigyMTAsIDIxMCwgMjEwKTtcbiRsaWdodGdyZXktMzogcmdiKDE5NSwgMTk1LCAxOTUpO1xuXG4kZGFya25hdnk6ICMxNjI0NDc7XG4kcGluazogI2U0M2Y1YTtcbiRsaWdodG5hdnk6ICMyNDI2Mjk7XG4kbmF2eWJsYWNrOiAjMWIxYjJmO1xuXG4kcHJpbWFyeS1jb2xvcjogJGRhcmtuYXZ5O1xuJHNlY29uZGFyeS1jb2xvcjogJHBpbms7XG5cbiR1c2VyLXBhbmVsLWJnLWNvbG9yOiAjZjZmN2Y4O1xuJGNvbnRyb2wtcGFuZWwtYmctY29sb3I6ICRhbG1vc3R3aGl0ZTtcbiRjb250ZW50LXBhbmVsLWJnLWNvbG9yOiAjZjZmN2Y4O1xuJHVzZXItbWFuYWdlbWVudC1iZy1jb2xvcjogJGFsbW9zdHdoaXRlO1xuIiwibWFpbiAubWFya2Rvd24td3JhcHBlciA6Om5nLWRlZXAgcCB7XG4gIGNvbG9yOiAjMGYwZjBmO1xufVxubWFpbiAubWFya2Rvd24td3JhcHBlciA6Om5nLWRlZXAgcHJlIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XG59XG5tYWluIC5tYXJrZG93bi13cmFwcGVyIDo6bmctZGVlcCBwcmUgY29kZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICB3aWR0aDogMTAwJTtcbn1cbm1haW4gLm1hcmtkb3duLXdyYXBwZXIgOjpuZy1kZWVwIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/shared/question-content/question-content.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/shared/question-content/question-content.component.ts ***!
  \**********************************************************************************/
/*! exports provided: QuestionContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionContentComponent", function() { return QuestionContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuestionContentComponent = class QuestionContentComponent {
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuestionContentComponent.prototype, "contentRawHtml", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuestionContentComponent.prototype, "contentRawMarkdown", void 0);
QuestionContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "question-content",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./question-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-content/question-content.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./question-content.component.scss */ "./src/app/components/shared/question-content/question-content.component.scss")).default]
    })
], QuestionContentComponent);



/***/ }),

/***/ "./src/app/components/shared/setting-card/setting-card.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/setting-card/setting-card.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 300px;\n}\n:host main {\n  width: 100%;\n}\n:host main .card {\n  background: white;\n  box-shadow: 0 2px 4px #e1e1e1;\n  border-radius: 10px;\n  border-width: 1.5px;\n  border-color: #fdfdfd;\n}\n:host main .card-header {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 50px 20px 5px 20px;\n}\n:host main .card-header h3 {\n  font-size: 18px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LXN0YWNrb3ZlcmZsb3ctZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2V0dGluZy1jYXJkL3NldHRpbmctY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2V0dGluZy1jYXJkL3NldHRpbmctY2FyZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LXN0YWNrb3ZlcmZsb3ctZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtBQ0RGO0FER0U7RUFDRSxXQUFBO0FDREo7QURHSTtFQUNFLGlCRUhFO0VGSUYsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJFTlE7QURLZDtBRElJO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0FDRk47QURJTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2V0dGluZy1jYXJkL3NldHRpbmctY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3NcIjtcblxuOmhvc3Qge1xuICB3aWR0aDogMzAwcHg7XG5cbiAgbWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggJGxpZ2h0Z3JleS0xO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJvcmRlci13aWR0aDogMS41cHg7XG4gICAgICBib3JkZXItY29sb3I6ICRhbG1vc3R3aGl0ZTtcbiAgICB9XG5cbiAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogNTBweCAyMHB4IDVweCAyMHB4O1xuXG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuOmhvc3QgbWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWFpbiAuY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggI2UxZTFlMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXdpZHRoOiAxLjVweDtcbiAgYm9yZGVyLWNvbG9yOiAjZmRmZGZkO1xufVxuOmhvc3QgbWFpbiAuY2FyZC1oZWFkZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDUwcHggMjBweCA1cHggMjBweDtcbn1cbjpob3N0IG1haW4gLmNhcmQtaGVhZGVyIGgzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufSIsIiRkYXJrZ3JleS0wOiByZ2IoMTUsIDE1LCAxNSk7XG4kZGFya2dyZXktMTogcmdiKDMwLCAzMCwgMzApO1xuJGRhcmtncmV5LTI6IHJnYig0NSwgNDUsIDQ1KTtcbiRkYXJrZ3JleS0zOiByZ2IoOTAsIDkwLCA5MCk7XG4kZ3JleTogcmdiKDEyMCwgMTIwLCAxMjApO1xuXG4kd2hpdGU6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiRhbG1vc3R3aGl0ZTogcmdiKDI1MywgMjUzLCAyNTMpO1xuJGxpZ2h0Z3JleS0wOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4kbGlnaHRncmV5LTE6IHJnYigyMjUsIDIyNSwgMjI1KTtcbiRsaWdodGdyZXktMjogcmdiKDIxMCwgMjEwLCAyMTApO1xuJGxpZ2h0Z3JleS0zOiByZ2IoMTk1LCAxOTUsIDE5NSk7XG5cbiRkYXJrbmF2eTogIzE2MjQ0NztcbiRwaW5rOiAjZTQzZjVhO1xuJGxpZ2h0bmF2eTogIzI0MjYyOTtcbiRuYXZ5YmxhY2s6ICMxYjFiMmY7XG5cbiRwcmltYXJ5LWNvbG9yOiAkZGFya25hdnk7XG4kc2Vjb25kYXJ5LWNvbG9yOiAkcGluaztcblxuJHVzZXItcGFuZWwtYmctY29sb3I6ICNmNmY3Zjg7XG4kY29udHJvbC1wYW5lbC1iZy1jb2xvcjogJGFsbW9zdHdoaXRlO1xuJGNvbnRlbnQtcGFuZWwtYmctY29sb3I6ICNmNmY3Zjg7XG4kdXNlci1tYW5hZ2VtZW50LWJnLWNvbG9yOiAkYWxtb3N0d2hpdGU7XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/shared/setting-card/setting-card.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/setting-card/setting-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: SettingCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingCardComponent", function() { return SettingCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingCardComponent = class SettingCardComponent {
    constructor() {
        this.onCardClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onCardClickedHandler() {
        this.onCardClicked.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SettingCardComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SettingCardComponent.prototype, "clarityIconClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SettingCardComponent.prototype, "onCardClicked", void 0);
SettingCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "setting-card",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./setting-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/setting-card/setting-card.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./setting-card.component.scss */ "./src/app/components/shared/setting-card/setting-card.component.scss")).default]
    })
], SettingCardComponent);



/***/ }),

/***/ "./src/app/helpers.ts":
/*!****************************!*\
  !*** ./src/app/helpers.ts ***!
  \****************************/
/*! exports provided: parseHtmlEntities, months, parseUnixTimestamp, StringifyTagSet, StringifyTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseHtmlEntities", function() { return parseHtmlEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "months", function() { return months; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUnixTimestamp", function() { return parseUnixTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringifyTagSet", function() { return StringifyTagSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringifyTag", function() { return StringifyTag; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const parseHtmlEntities = (str) => {
    return str.replace(/&#([0-9]{1,3});/gi, (match, numStr) => {
        var num = parseInt(numStr, 10);
        return String.fromCharCode(num);
    });
};
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
const parseUnixTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();
    return `${month}. ${day}, ${year}`;
};
const StringifyTagSet = (tagSet) => {
    return `${Array.from(tagSet).map((tag) => tag.name)}`;
};
const StringifyTag = (tag) => {
    return `["${tag.name}"]`;
};


/***/ }),

/***/ "./src/app/interceptors/error.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ErrorInterceptor = class ErrorInterceptor {
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => {
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/models/stackExchange.model.ts":
/*!***********************************************!*\
  !*** ./src/app/models/stackExchange.model.ts ***!
  \***********************************************/
/*! exports provided: QuestionsSortBy, TagsSortBy, OrderBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsSortBy", function() { return QuestionsSortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsSortBy", function() { return TagsSortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBy", function() { return OrderBy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var QuestionsSortBy;
(function (QuestionsSortBy) {
    QuestionsSortBy["Activity"] = "activity";
    QuestionsSortBy["Votes"] = "votes";
    QuestionsSortBy["Creation"] = "creation";
    QuestionsSortBy["Week"] = "week";
})(QuestionsSortBy || (QuestionsSortBy = {}));
var TagsSortBy;
(function (TagsSortBy) {
    TagsSortBy["Popular"] = "popular";
    TagsSortBy["Activity"] = "activity";
    TagsSortBy["Name"] = "name";
})(TagsSortBy || (TagsSortBy = {}));
var OrderBy;
(function (OrderBy) {
    OrderBy["Desc"] = "desc";
    OrderBy["Asc"] = "asc";
})(OrderBy || (OrderBy = {}));


/***/ }),

/***/ "./src/app/services/contentPanel.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/contentPanel.service.ts ***!
  \**************************************************/
/*! exports provided: ContentPanelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPanelService", function() { return ContentPanelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ContentPanelService = class ContentPanelService {
    constructor() {
        this.isContentPanelReady = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    get isContentPanelReady$() {
        return this.isContentPanelReady.asObservable();
    }
    setReadyState(isReady) {
        this.isContentPanelReady.next(isReady);
    }
};
ContentPanelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ContentPanelService);



/***/ }),

/***/ "./src/app/services/stackExchange.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/stackExchange.service.ts ***!
  \***************************************************/
/*! exports provided: StackExchangeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackExchangeService", function() { return StackExchangeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let StackExchangeService = class StackExchangeService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getQuestionsByTags(query) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append("tags", query.tags);
        params = params.append("sort", query.sort);
        params = params.append("pagesize", query.pagesize.toString());
        return this.httpClient
            .get("api/questions", {
            params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res["items"]));
    }
    getPopularTags() {
        return this.httpClient.get("api/tags", {
            params: {},
        });
    }
};
StackExchangeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StackExchangeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], StackExchangeService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/state/app.actions */ "./src/app/state/app.actions.ts");






let UserService = class UserService {
    constructor(store, httpClient) {
        this.store = store;
        this.httpClient = httpClient;
    }
    getUser(getUserQuery) {
        return this.httpClient.post("api/users/user", getUserQuery);
    }
    getAllUsers() {
        return this.httpClient.get("api/users");
    }
    registerUser(createUserDto) {
        return this.httpClient
            .post("api/auth/register", createUserDto, {
            observe: "response",
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((value) => value));
    }
    loginUser(loginUserDto) {
        return this.httpClient.post("api/auth/login", loginUserDto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((userAuth) => {
            localStorage.setItem("user", JSON.stringify(userAuth));
            this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_5__["loginUser"]({ userAuth }));
            return userAuth;
        }));
    }
    logoutUser() {
        localStorage.removeItem("user");
        this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_5__["logoutUser"]());
    }
    addFavoriteTagToUser(tag, email) {
        const addFavoriteTagDto = { email, tag };
        return this.httpClient.post("api/users/tags/add", addFavoriteTagDto);
    }
    removeFavoriteTagFromUser(tag, email) {
        const removeFavoriteTagDto = { email, tag };
        return this.httpClient.post("api/users/tags/remove", removeFavoriteTagDto);
    }
};
UserService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserService);



/***/ }),

/***/ "./src/app/state/app.actions.ts":
/*!**************************************!*\
  !*** ./src/app/state/app.actions.ts ***!
  \**************************************/
/*! exports provided: selectTag, unselectTag, fetchQuestions, fetchQuestionsSuccess, loginUser, logoutUser, fetchCurrentUserAuth, fetchCurrentUserAuthSuccess, addFavoriteTagToUser, removeFavoriteTagFromUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTag", function() { return selectTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unselectTag", function() { return unselectTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchQuestions", function() { return fetchQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchQuestionsSuccess", function() { return fetchQuestionsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCurrentUserAuth", function() { return fetchCurrentUserAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCurrentUserAuthSuccess", function() { return fetchCurrentUserAuthSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFavoriteTagToUser", function() { return addFavoriteTagToUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFavoriteTagFromUser", function() { return removeFavoriteTagFromUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const selectTag = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Select Tag", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const unselectTag = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Unselect Tag", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const fetchQuestions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Fetch Questions", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const fetchQuestionsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Fetch Questions Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const loginUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Log In User", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const logoutUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Log Out User");
const fetchCurrentUserAuth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Fetch Current User Auth");
const fetchCurrentUserAuthSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Fetch Current User Auth Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const addFavoriteTagToUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Add Favorite Tag to User", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const removeFavoriteTagFromUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Remove Favorite Tag from User", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());


/***/ }),

/***/ "./src/app/state/app.effects.ts":
/*!**************************************!*\
  !*** ./src/app/state/app.effects.ts ***!
  \**************************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.actions */ "./src/app/state/app.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_stackExchange_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/stackExchange.service */ "./src/app/services/stackExchange.service.ts");
/* harmony import */ var _models_stackExchange_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/stackExchange.model */ "./src/app/models/stackExchange.model.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers */ "./src/app/helpers.ts");
/* harmony import */ var _app_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.selectors */ "./src/app/state/app.selectors.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");













let AppEffects = class AppEffects {
    constructor(store, actions$, stackExchangeApiService, userService, router) {
        this.store = store;
        this.actions$ = actions$;
        this.stackExchangeApiService = stackExchangeApiService;
        this.userService = userService;
        this.router = router;
        this.fetchQuestions$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchQuestions"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((action) => {
            const query = {
                tags: Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["StringifyTag"])(action.tag),
                sort: _models_stackExchange_model__WEBPACK_IMPORTED_MODULE_7__["QuestionsSortBy"].Votes,
                pagesize: 10,
            };
            return this.stackExchangeApiService
                .getQuestionsByTags(query)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((questions) => _app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchQuestionsSuccess"]({ questions })));
        }));
        this.AddFavoriteTagToUser = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["addFavoriteTagToUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store.select((state) => Object(_app_selectors__WEBPACK_IMPORTED_MODULE_9__["selectUserAuth"])(state))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(([action, userAuth]) => {
            const tag = action.tag;
            const email = userAuth.email;
            return this.userService
                .addFavoriteTagToUser(tag, email)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => _app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchCurrentUserAuth"]()));
        }));
        this.RemoveFavoriteTagFromUser = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["removeFavoriteTagFromUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store.select((state) => Object(_app_selectors__WEBPACK_IMPORTED_MODULE_9__["selectUserAuth"])(state))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(([action, userAuth]) => {
            const tag = action.tag;
            const email = userAuth.email;
            return this.userService
                .removeFavoriteTagFromUser(tag, email)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => _app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchCurrentUserAuth"]()));
        }));
        this.loginUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["loginUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => {
            this.router.navigate(["/dashboard"]);
            return [_app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchCurrentUserAuth"]()];
        }));
        this.logoutUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["logoutUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => {
            this.router.navigate(["/dashboard"]);
            return rxjs__WEBPACK_IMPORTED_MODULE_12__["EMPTY"];
        }));
        this.fetchCurrentUserAuth$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchCurrentUserAuth"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store.select((state) => Object(_app_selectors__WEBPACK_IMPORTED_MODULE_9__["selectUserAuth"])(state))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(([_, userAuth]) => {
            if (!userAuth || !userAuth.email) {
                return rxjs__WEBPACK_IMPORTED_MODULE_12__["EMPTY"];
            }
            const query = {
                email: userAuth.email,
            };
            return this.userService.getUser(query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
                return _app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchCurrentUserAuthSuccess"]({ user });
            }));
        }));
        this.updateQuestions$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["selectTag"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((action) => {
            return [_app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchQuestions"]({ tag: action.tag })];
        }));
    }
};
AppEffects.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _services_stackExchange_service__WEBPACK_IMPORTED_MODULE_6__["StackExchangeService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppEffects.prototype, "fetchQuestions$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppEffects.prototype, "AddFavoriteTagToUser", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppEffects.prototype, "RemoveFavoriteTagFromUser", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppEffects.prototype, "loginUser$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppEffects.prototype, "logoutUser$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppEffects.prototype, "fetchCurrentUserAuth$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppEffects.prototype, "updateQuestions$", void 0);
AppEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
        _services_stackExchange_service__WEBPACK_IMPORTED_MODULE_6__["StackExchangeService"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])
], AppEffects);



/***/ }),

/***/ "./src/app/state/app.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/state/app.reducer.ts ***!
  \**************************************/
/*! exports provided: adapter, initialState, appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.actions */ "./src/app/state/app.actions.ts");




const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])({
    selectId: (question) => question.question_id,
    sortComparer: false,
});
const initialState = adapter.getInitialState({
    tags: [],
    selectedTag: null,
    userAuth: null,
    user: null,
});
const appReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_3__["selectTag"], (state, { tag }) => (Object.assign({}, state, { selectedTag: tag }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_3__["fetchQuestionsSuccess"], (state, { questions }) => {
    return Object.assign({}, state, { questions: questions });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_3__["loginUser"], (state, { userAuth }) => (Object.assign({}, state, { userAuth }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_3__["logoutUser"], (state) => (Object.assign({}, state, { userAuth: null, user: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_3__["fetchCurrentUserAuthSuccess"], (state, { user }) => (Object.assign({}, state, { user }))));


/***/ }),

/***/ "./src/app/state/app.selectors.ts":
/*!****************************************!*\
  !*** ./src/app/state/app.selectors.ts ***!
  \****************************************/
/*! exports provided: selectAppState, selectTags, selectSelectedTag, selectQuestions, selectUserAuth, selectUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAppState", function() { return selectAppState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTags", function() { return selectTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSelectedTag", function() { return selectSelectedTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectQuestions", function() { return selectQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserAuth", function() { return selectUserAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUser", function() { return selectUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const selectAppState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("app");
const selectTags = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAppState, (state) => state.tags);
const selectSelectedTag = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAppState, (state) => state.selectedTag);
const selectQuestions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAppState, (state) => state.questions);
const selectUserAuth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAppState, (state) => state.userAuth);
const selectUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAppState, (state) => state.user);


/***/ }),

/***/ "./src/app/storage.metareducer.ts":
/*!****************************************!*\
  !*** ./src/app/storage.metareducer.ts ***!
  \****************************************/
/*! exports provided: storageMetaReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageMetaReducer", function() { return storageMetaReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function setSavedState(state, localStorageKey) {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedItem(localStorageKey) {
    return JSON.parse(localStorage.getItem(localStorageKey));
}
const userStorageKey = "user";
function storageMetaReducer(reducer) {
    // Only trigger after reloading the page.
    let onInit = true;
    return function (state, action) {
        const nextState = reducer(state, action);
        if (onInit) {
            onInit = false;
            const userItem = getSavedItem(userStorageKey);
            nextState["app"]["userAuth"] = userItem;
            return nextState;
        }
        return nextState;
    };
}


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

module.exports = __webpack_require__(/*! /Users/fnx/GitRepos/fnx-stackoverflow-daily/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map