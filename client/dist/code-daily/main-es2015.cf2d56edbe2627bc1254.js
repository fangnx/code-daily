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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/content-panel/content-header/content-header.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/content-panel/content-header/content-header.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div>\n    <article>\n      <h2>{{ title | uppercase }}</h2>\n    </article>\n\n    <article>\n      <div #dropdown class=\"dropdown bottom-right\" [ngClass]=\"dropdownClass\">\n        <fa-icon\n          [icon]=\"dropdownIcon\"\n          (click)=\"onDropdownIconClicked()\"\n        ></fa-icon>\n\n        <div class=\"dropdown-menu\">\n          <div\n            class=\"dropdown-item\"\n            (click)=\"onDropdownOptionClicked()\"\n            [ngClass]=\"dropdownOptionClass('default')\"\n          >\n            🔥Trending questions of this week\n          </div>\n\n          <div\n            class=\"dropdown-item\"\n            (click)=\"onDropdownOptionClicked('random')\"\n            [ngClass]=\"dropdownOptionClass('random')\"\n          >\n            Random trending questions\n          </div>\n        </div>\n      </div>\n    </article>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/content-panel/content-panel.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/content-panel/content-panel.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div class=\"content-header-container\">\n    <content-header\n      [userAuth]=\"userAuth$ | async\"\n      [tag]=\"currentTag$ | async\"\n      [userFavoriteTags]=\"userFavoriteTags$ | async\"\n      [userSubscribedTags]=\"userSubscribedTags$ | async\"\n    ></content-header>\n  </div>\n\n  <div class=\"card-list-container\">\n    <question-card\n      *ngFor=\"let question of questions$ | async\"\n      [question]=\"question\"\n      [@fadeInOnEnter]\n      [@fadeOutOnLeave]\n    ></question-card>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/control-panel/control-panel.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/control-panel/control-panel.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div>\n    <clr-tree>\n      <clr-tree-node [clrExpanded]=\"true\">\n        POPULAR TAGS\n        <clr-tree-node\n          *ngFor=\"let tag of tags\"\n          [ngClass]=\"getTreeNodeClass(tag)\"\n          class=\"tag-node\"\n        >\n          <button\n            class=\"clr-treenode-link\"\n            (click)=\"onSelectTag(tag)\"\n            [ngClass]=\"getTagClass(tag)\"\n          >\n            {{ tag | uppercase }}\n          </button>\n          <clr-icon\n            shape=\"star\"\n            (click)=\"onStarClicked(tag)\"\n            [ngClass]=\"getStarIconClass(tag)\"\n          ></clr-icon>\n          <!-- \n          <clr-icon\n            shape=\"email\"\n            (click)=\"onEmailClicked(tag)\"\n            [ngClass]=\"getEmailIconClass(tag)\"\n          ></clr-icon> -->\n        </clr-tree-node>\n      </clr-tree-node>\n    </clr-tree>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div class=\"flex-container\">\n    <navigation-panel [user]=\"userAuth$ | async\"></navigation-panel>\n\n    <control-panel\n      [user]=\"userAuth$ | async\"\n      [tags]=\"tags$ | async\"\n      [userFavoriteTags]=\"userFavoriteTags$ | async\"\n      [userSubscribedTags]=\"userSubscribedTags$ | async\"\n      (onTagSelected)=\"onTagSelected($event)\"\n    ></control-panel>\n\n    <router-outlet></router-outlet>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/navigation-panel/navigation-panel.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/navigation-panel/navigation-panel.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div class=\"flex-container\">\n    <div class=\"flex-top\">\n      <fa-icon [icon]=\"faFileCode\" (click)=\"navigateToDashboard()\"></fa-icon>\n    </div>\n\n    <div class=\"flex-mid\">Code Daily</div>\n\n    <div class=\"flex-bottom\">\n      <fa-icon\n        [icon]=\"hasUserLoggedIn ? faUserNinja : faCloud\"\n        (click)=\"navigateToUserManagement()\"\n      ></fa-icon>\n    </div>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/login/login.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/login/login.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div class=\"card\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n      <section class=\"title\">\n        <h3 class=\"welcome\">Login</h3>\n      </section>\n\n      <section class=\"login-group\">\n        <clr-input-container>\n          <label class=\"clr-sr-only\">Email</label>\n          <input\n            type=\"text\"\n            formControlName=\"email\"\n            clrInput\n            placeholder=\"Email\"\n          />\n        </clr-input-container>\n\n        <clr-password-container>\n          <label class=\"clr-sr-only\">Password</label>\n          <input\n            type=\"password\"\n            formControlName=\"password\"\n            clrPassword\n            placeholder=\"Password\"\n          />\n        </clr-password-container>\n      </section>\n\n      <section>\n        <button type=\"submit\" class=\"btn\">NEXT</button>\n      </section>\n    </form>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/registration/registration.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/registration/registration.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div class=\"card\">\n    <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\">\n      <section class=\"title\">\n        <h3 class=\"welcome\">Register</h3>\n      </section>\n\n      <section class=\"register-group\">\n        <clr-input-container>\n          <label class=\"clr-sr-only\">Email</label>\n          <input\n            type=\"text\"\n            formControlName=\"email\"\n            clrInput\n            placeholder=\"Email\"\n          />\n        </clr-input-container>\n\n        <clr-password-container>\n          <label class=\"clr-sr-only\">Password</label>\n          <input\n            type=\"password\"\n            formControlName=\"password\"\n            clrPassword\n            placeholder=\"Password\"\n          />\n        </clr-password-container>\n      </section>\n\n      <section>\n        <button type=\"submit\" class=\"btn\">NEXT</button>\n      </section>\n    </form>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/subscription-management/subscription-management.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/subscription-management/subscription-management.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main></main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/user-management-panel.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/user-management-panel.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <section>\n    <div class=\"card-list-container\">\n      <div\n        *ngIf=\"hasUserLoggedIn; then loggedInBlock; else notLoggedInBlock\"\n      ></div>\n    </div>\n  </section>\n</main>\n\n<ng-template #loggedInBlock>\n  <setting-card\n    title=\"Log Out\"\n    clarityIconClass=\"logout\"\n    (onCardClicked)=\"onLogoutClicked()\"\n  ></setting-card>\n\n  <setting-card\n    title=\"(Coming Soon) Subscription\"\n    clarityIconClass=\"envelope\"\n    (onCardClicked)=\"onManageSubscriptionClicked()\"\n  ></setting-card>\n\n  <setting-card\n    title=\"Connect to Pocket\"\n    clarityIconClass=\"bookmark\"\n    (onCardClicked)=\"onConnectToPocketClicked()\"\n  ></setting-card>\n</ng-template>\n\n<ng-template #notLoggedInBlock>\n  <setting-card\n    title=\"Register\"\n    clarityIconClass=\"user\"\n    (onCardClicked)=\"onRegisterClicked()\"\n  ></setting-card>\n\n  <setting-card\n    title=\"Log In\"\n    clarityIconClass=\"login\"\n    (onCardClicked)=\"onLoginClicked()\"\n  ></setting-card>\n</ng-template>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div>\n    <article>\n      <img [src]=\"profileImageUrl\" loading=\"lazy\" />\n      <h4>{{ ownerName }}</h4>\n    </article>\n\n    <article>\n      <h4>\n        <fa-icon [icon]=\"faEye\"></fa-icon>\n        {{ viewCount }} views\n      </h4>\n\n      <h4>\n        <fa-icon [icon]=\"faCommentDots\"></fa-icon>\n        {{ answerCount }} answers\n      </h4>\n\n      <h4>\n        <fa-icon [icon]=\"faPenSquare\"></fa-icon>\n        {{ creationDate }}\n      </h4>\n    </article>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-card/question-card.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-card/question-card.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div\n    class=\"card\"\n    [ngClass]=\"{ clickable: !isExpanded }\"\n    (click)=\"onCardClicked()\"\n  >\n    <div class=\"card-header\">\n      <article>\n        <h3>\n          {{ title | titlecase }}\n        </h3>\n\n        <fa-icon\n          *ngIf=\"isExpanded\"\n          (click)=\"onCloseIconClicked($event)\"\n          [icon]=\"closeIcon\"\n        ></fa-icon>\n      </article>\n\n      <question-badge\n        [owner]=\"owner\"\n        [creationDate]=\"creationDate\"\n        [answerCount]=\"answerCount\"\n        [viewCount]=\"viewCount\"\n      >\n      </question-badge>\n\n      <div class=\"info-buttons\">\n        <article>\n          <simple-tag *ngFor=\"let tag of tags\" [text]=\"tag\"></simple-tag>\n        </article>\n\n        <article>\n          <fa-icon\n            [icon]=\"stackoverflowIcon\"\n            class=\"stackoverflow-icon\"\n            (click)=\"onStackOverflowIconClicked($event)\"\n          ></fa-icon>\n          <fa-icon [icon]=\"pocketIcon\" class=\"getpocket-icon\"></fa-icon>\n        </article>\n      </div>\n    </div>\n\n    <ng-container *ngIf=\"isExpanded\">\n      <!-- <hr class=\"header-bottom-line\" /> -->\n\n      <div class=\"card-body\" [@fadeInOnEnter]>\n        <question-content\n          [contentRawHtml]=\"rawHtml\"\n          [contentRawMarkdown]=\"rawMarkdown\"\n        ></question-content>\n      </div>\n    </ng-container>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-content/question-content.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-content/question-content.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div class=\"answer-content\">\n    <div class=\"markdown-wrapper\">\n      <markdown [data]=\"contentRawMarkdown\"></markdown>\n    </div>\n  </div>\n</main>\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/simple-tag/simple-tag.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/simple-tag/simple-tag.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div>#{{ text }}</div>\n</main>\n");

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
/* harmony import */ var _components_dashboard_user_management_panel_subscription_management_subscription_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/user-management-panel/subscription-management/subscription-management.component */ "./src/app/components/dashboard/user-management-panel/subscription-management/subscription-management.component.ts");








const routes = [
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    { path: "dashboard", component: _components_dashboard_content_panel_content_panel_component__WEBPACK_IMPORTED_MODULE_4__["ContentPanelComponent"] },
    {
        path: "user/pocket/:pocket_request_token",
        component: _components_dashboard_user_management_panel_user_management_panel_component__WEBPACK_IMPORTED_MODULE_3__["UserManagementPanelComponent"],
    },
    { path: "user/register", component: _components_dashboard_user_management_panel_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"] },
    { path: "user/login", component: _components_dashboard_user_management_panel_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: "user", component: _components_dashboard_user_management_panel_user_management_panel_component__WEBPACK_IMPORTED_MODULE_3__["UserManagementPanelComponent"] },
    { path: "subscription", component: _components_dashboard_user_management_panel_subscription_management_subscription_management_component__WEBPACK_IMPORTED_MODULE_7__["SubscriptionManagementComponent"] },
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




let AppComponent = class AppComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_3__["fetchCurrentUser"]());
        this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_3__["selectTag"]({ tag: "javascript" }));
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
/* harmony import */ var _storage_metareducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./storage.metareducer */ "./src/app/storage.metareducer.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm2015/clr-angular.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_pocket_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/pocket.service */ "./src/app/services/pocket.service.ts");
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./interceptors/error.interceptor */ "./src/app/interceptors/error.interceptor.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_dashboard_user_management_panel_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/dashboard/user-management-panel/login/login.component */ "./src/app/components/dashboard/user-management-panel/login/login.component.ts");
/* harmony import */ var _components_shared_question_card_question_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/shared/question-card/question-card.component */ "./src/app/components/shared/question-card/question-card.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _services_stackExchange_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/stackExchange.service */ "./src/app/services/stackExchange.service.ts");
/* harmony import */ var _components_dashboard_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/dashboard/control-panel/control-panel.component */ "./src/app/components/dashboard/control-panel/control-panel.component.ts");
/* harmony import */ var _components_dashboard_navigation_panel_navigation_panel_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/dashboard/navigation-panel/navigation-panel.component */ "./src/app/components/dashboard/navigation-panel/navigation-panel.component.ts");
/* harmony import */ var _components_dashboard_content_panel_content_panel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/dashboard/content-panel/content-panel.component */ "./src/app/components/dashboard/content-panel/content-panel.component.ts");
/* harmony import */ var _components_shared_answer_section_answer_section_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/shared/answer-section/answer-section.component */ "./src/app/components/shared/answer-section/answer-section.component.ts");
/* harmony import */ var _components_shared_question_badge_question_badge_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/shared/question-badge/question-badge.component */ "./src/app/components/shared/question-badge/question-badge.component.ts");
/* harmony import */ var _components_dashboard_user_management_panel_user_management_panel_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/dashboard/user-management-panel/user-management-panel.component */ "./src/app/components/dashboard/user-management-panel/user-management-panel.component.ts");
/* harmony import */ var _components_dashboard_user_management_panel_registration_registration_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/dashboard/user-management-panel/registration/registration.component */ "./src/app/components/dashboard/user-management-panel/registration/registration.component.ts");
/* harmony import */ var _components_shared_question_content_question_content_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/shared/question-content/question-content.component */ "./src/app/components/shared/question-content/question-content.component.ts");
/* harmony import */ var _components_shared_setting_card_setting_card_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/shared/setting-card/setting-card.component */ "./src/app/components/shared/setting-card/setting-card.component.ts");
/* harmony import */ var _services_contentPanel_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/contentPanel.service */ "./src/app/services/contentPanel.service.ts");
/* harmony import */ var _components_dashboard_user_management_panel_subscription_management_subscription_management_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/dashboard/user-management-panel/subscription-management/subscription-management.component */ "./src/app/components/dashboard/user-management-panel/subscription-management/subscription-management.component.ts");
/* harmony import */ var _components_dashboard_content_panel_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/dashboard/content-panel/content-header/content-header.component */ "./src/app/components/dashboard/content-panel/content-header/content-header.component.ts");
/* harmony import */ var _components_shared_simple_tag_simple_tag_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/shared/simple-tag/simple-tag.component */ "./src/app/components/shared/simple-tag/simple-tag.component.ts");







// State management.






// UI libraries.
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
            _components_shared_question_card_question_card_component__WEBPACK_IMPORTED_MODULE_21__["QuestionCardComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["DashboardComponent"],
            _components_dashboard_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_24__["ControlPanelComponent"],
            _components_dashboard_navigation_panel_navigation_panel_component__WEBPACK_IMPORTED_MODULE_25__["NavigationPanelComponent"],
            _components_dashboard_content_panel_content_panel_component__WEBPACK_IMPORTED_MODULE_26__["ContentPanelComponent"],
            _components_dashboard_content_panel_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_35__["ContentHeaderComponent"],
            _components_shared_answer_section_answer_section_component__WEBPACK_IMPORTED_MODULE_27__["AnswerSectionComponent"],
            _components_shared_question_badge_question_badge_component__WEBPACK_IMPORTED_MODULE_28__["QuestionBadgeComponent"],
            _components_dashboard_user_management_panel_user_management_panel_component__WEBPACK_IMPORTED_MODULE_29__["UserManagementPanelComponent"],
            _components_dashboard_user_management_panel_registration_registration_component__WEBPACK_IMPORTED_MODULE_30__["RegistrationComponent"],
            _components_dashboard_user_management_panel_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
            _components_shared_question_content_question_content_component__WEBPACK_IMPORTED_MODULE_31__["QuestionContentComponent"],
            _components_shared_setting_card_setting_card_component__WEBPACK_IMPORTED_MODULE_32__["SettingCardComponent"],
            _components_dashboard_user_management_panel_subscription_management_subscription_management_component__WEBPACK_IMPORTED_MODULE_34__["SubscriptionManagementComponent"],
            _components_shared_simple_tag_simple_tag_component__WEBPACK_IMPORTED_MODULE_36__["SimpleTagComponent"],
        ],
        imports: [
            _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClarityModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({ app: _state_app_reducer__WEBPACK_IMPORTED_MODULE_10__["appReducer"] }, { metaReducers: [_storage_metareducer__WEBPACK_IMPORTED_MODULE_12__["storageMetaReducer"]] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_state_app_effects__WEBPACK_IMPORTED_MODULE_11__["AppEffects"]]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_15__["MarkdownModule"].forRoot(),
        ],
        entryComponents: [_components_shared_answer_section_answer_section_component__WEBPACK_IMPORTED_MODULE_27__["AnswerSectionComponent"]],
        providers: [
            _services_stackExchange_service__WEBPACK_IMPORTED_MODULE_23__["StackExchangeService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"],
            _services_contentPanel_service__WEBPACK_IMPORTED_MODULE_33__["ContentPanelService"],
            _services_pocket_service__WEBPACK_IMPORTED_MODULE_17__["PocketService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_18__["ErrorInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/dashboard/content-panel/content-header/content-header.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/dashboard/content-panel/content-header/content-header.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&family=Mulish:wght@400;500;600&display=swap\");\nmain {\n  height: 60px;\n  width: 800px;\n}\nmain > div {\n  align-items: center;\n  background: linear-gradient(to right, #4150a8, #5c6bc0);\n  display: flex;\n}\nmain > div article:first-child {\n  margin-left: 15px;\n}\nmain > div article:first-child h2 {\n  font-family: \"Fira Code\";\n  line-height: 60px;\n}\nmain > div article:nth-child(2) {\n  color: #f1f0f2;\n  margin-left: auto;\n  margin-right: 15px;\n}\nmain > div article:nth-child(2) .dropdown > fa-icon {\n  font-size: 21px;\n  cursor: pointer;\n}\nmain > div article:nth-child(2) .dropdown .dropdown-menu {\n  background: #d3d2d4;\n  border-radius: 3px;\n  border-color: #d3d2d4;\n}\nmain > div article:nth-child(2) .dropdown .dropdown-menu .dropdown-item {\n  color: #2d2c2e;\n  font-weight: 500;\n}\nmain > div article:nth-child(2) .dropdown .dropdown-menu .dropdown-item:hover {\n  background: none;\n  color: #5c6bc0;\n}\nmain > div article:nth-child(2) .dropdown .dropdown-menu .dropdown-item.selected {\n  color: #5c6bc0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1jb2RlLWRhaWx5L2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NvbnRlbnQtcGFuZWwvY29udGVudC1oZWFkZXIvY29udGVudC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NvbnRlbnQtcGFuZWwvY29udGVudC1oZWFkZXIvY29udGVudC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1jb2RlLWRhaWx5L2NsaWVudC9zcmMvYXBwL3N0eWxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxrSUFBQTtBQ0dSO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNERjtBREdFO0VBQ0UsbUJBQUE7RUFDQSx1REFBQTtFQUNBLGFBQUE7QUNESjtBRElNO0VBQ0UsaUJBQUE7QUNGUjtBRElRO0VBQ0Usd0JEZEM7RUNlRCxpQkFBQTtBQ0ZWO0FETU07RUFDRSxjRWZNO0VGZ0JOLGlCQUFBO0VBQ0Esa0JBQUE7QUNKUjtBRE9VO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNMWjtBRE9VO0VBQ0UsbUJFM0JFO0VGNEJGLGtCQUFBO0VBQ0EscUJFN0JFO0FEd0JkO0FET1k7RUFDRSxjRXBDRDtFRnFDQyxnQkFBQTtBQ0xkO0FET2M7RUFDRSxnQkFBQTtFQUNBLGNFMUJQO0FEcUJUO0FEUWM7RUFDRSxjRTlCUDtBRHdCVCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NvbnRlbnQtcGFuZWwvY29udGVudC1oZWFkZXIvY29udGVudC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStDb2RlOndnaHRAMzAwOzQwMDs1MDA7NjAwJmZhbWlseT1NdWxpc2g6d2dodEA0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXBcIik7XG5cbiRtYWluZm9udDogXCJNdWxpc2hcIjtcbiRjb2RlZm9udDogXCJGaXJhIENvZGVcIjtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvZm9udHMuc2Nzc1wiO1xuXG5tYWluIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogODAwcHg7XG5cbiAgPiBkaXYge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkaW5kaWdvLWRhcmtlciwgJGluZGlnbyk7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIGFydGljbGUge1xuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJGNvZGVmb250O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgY29sb3I6ICRsaWdodGdyZXktMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcblxuICAgICAgICAuZHJvcGRvd24ge1xuICAgICAgICAgID4gZmEtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRsaWdodGdyZXktMjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JleS0yO1xuXG4gICAgICAgICAgICAuZHJvcGRvd24taXRlbSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAkZGFya2dyZXktMjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkaW5kaWdvO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRpbmRpZ287XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGU6d2dodEAzMDA7NDAwOzUwMDs2MDAmZmFtaWx5PU11bGlzaDp3Z2h0QDQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcFwiKTtcbm1haW4ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA4MDBweDtcbn1cbm1haW4gPiBkaXYge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0MTUwYTgsICM1YzZiYzApO1xuICBkaXNwbGF5OiBmbGV4O1xufVxubWFpbiA+IGRpdiBhcnRpY2xlOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5tYWluID4gZGl2IGFydGljbGU6Zmlyc3QtY2hpbGQgaDIge1xuICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIjtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG59XG5tYWluID4gZGl2IGFydGljbGU6bnRoLWNoaWxkKDIpIHtcbiAgY29sb3I6ICNmMWYwZjI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5tYWluID4gZGl2IGFydGljbGU6bnRoLWNoaWxkKDIpIC5kcm9wZG93biA+IGZhLWljb24ge1xuICBmb250LXNpemU6IDIxcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm1haW4gPiBkaXYgYXJ0aWNsZTpudGgtY2hpbGQoMikgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgYmFja2dyb3VuZDogI2QzZDJkNDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItY29sb3I6ICNkM2QyZDQ7XG59XG5tYWluID4gZGl2IGFydGljbGU6bnRoLWNoaWxkKDIpIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XG4gIGNvbG9yOiAjMmQyYzJlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxubWFpbiA+IGRpdiBhcnRpY2xlOm50aC1jaGlsZCgyKSAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzVjNmJjMDtcbn1cbm1haW4gPiBkaXYgYXJ0aWNsZTpudGgtY2hpbGQoMikgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtLnNlbGVjdGVkIHtcbiAgY29sb3I6ICM1YzZiYzA7XG59IiwiJGRhcmtncmV5LTA6IHJnYigxOCwgMTcsIDE5KTtcbiRkYXJrZ3JleS0xOiByZ2IoMzAsIDI5LCAzMSk7XG4kZGFya2dyZXktMjogcmdiKDQ1LCA0NCwgNDYpO1xuJGRhcmtncmV5LTM6IHJnYig5MCwgODksIDkxKTtcbiRncmV5OiByZ2IoMTIwLCAxMTksIDEyMSk7XG4kbGlnaHRncmV5LTM6IHJnYigxOTYsIDE5NSwgMTk3KTtcbiRsaWdodGdyZXktMjogcmdiKDIxMSwgMjEwLCAyMTIpO1xuJGxpZ2h0Z3JleS0xOiByZ2IoMjI2LCAyMjUsIDIyNyk7XG4kbGlnaHRncmV5LTA6IHJnYigyNDEsIDI0MCwgMjQyKTtcbiRhbG1vc3R3aGl0ZTogcmdiKDI1MywgMjUzLCAyNTMpO1xuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cbiRibGFjay1saWdodGVyOiByZ2IoMzgsIDM3LCAzOSk7XG4kYmxhY2s6IHJnYig0MSwgNDAsIDQyKTtcbiRibGFjay1kYXJrZXI6IHJnYig0NCwgNDMsIDQ1KTtcblxuJGluZGlnby1saWdodGVyOiAjOWZhOGRhO1xuJGluZGlnbzogIzVjNmJjMDtcbiRpbmRpZ28tZGFya2VyOiAjNDE1MGE4O1xuXG4kZGFya25hdnk6ICMxNjI0NDc7XG4kcGluazogI2U0M2Y1YTtcbiRsaWdodG5hdnk6ICMyNDI2Mjk7XG4kbmF2eWJsYWNrOiAjMWIxYjJmO1xuJG9saXZlOiAjNWM3YTFlO1xuXG4kc3RhY2tvdmVyZmxvdy1icmFuZC1jb2xvcjogI2Y0ODAyNDtcbiRnZXQtcG9ja2V0LWJyYW5kLWNvbG9yOiAjZWY0MDU2O1xuXG4kcHJpbWFyeS1jb2xvcjogJGluZGlnbztcbiRzZWNvbmRhcnktY29sb3I6ICRpbmRpZ28tbGlnaHRlcjtcblxuJGJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiR1c2VyLXBhbmVsLWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiRjb250cm9sLXBhbmVsLWJnLWNvbG9yOiAkYmxhY2s7XG4kY29udGVudC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1tYW5hZ2VtZW50LWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/dashboard/content-panel/content-header/content-header.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/dashboard/content-panel/content-header/content-header.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ContentHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentHeaderComponent", function() { return ContentHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/state/app.actions */ "./src/app/state/app.actions.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");






let ContentHeaderComponent = class ContentHeaderComponent {
    constructor(router, store, ref) {
        this.router = router;
        this.store = store;
        this.ref = ref;
        this.dropdownIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBars"];
        this.trendingIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFireAlt"];
        this.randomIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faRedoAlt"];
    }
    ngOnInit() {
        this.menuSelectedOption = "default";
        this.onDocumentClicked = this.onDocumentClicked.bind(this);
        document.addEventListener("click", this.onDocumentClicked);
    }
    ngOnDestroy() {
        document.removeEventListener("click", this.onDocumentClicked);
    }
    onDocumentClicked(event) {
        if (this.menuElement.nativeElement.contains(event.target)) {
            return;
        }
        this.isMenuExpanded = false;
        this.ref.markForCheck();
    }
    get title() {
        return this.tag;
    }
    isTagFavoriteByUser(tag) {
        return this.userFavoriteTags && this.userFavoriteTags.indexOf(tag) >= 0;
    }
    isTagSubscribedByUser(tag) {
        return this.userSubscribedTags && this.userSubscribedTags.indexOf(tag) >= 0;
    }
    getStarIconClass() {
        return this.isTagFavoriteByUser(this.tag) ? "is-solid" : "";
    }
    getEmailIconClass() {
        return this.isTagSubscribedByUser(this.tag) ? "is-solid" : "";
    }
    onStarClicked() {
        if (!this.hasUserLoggedIn) {
            this.router.navigate(["/user/login"]);
            return;
        }
        if (this.isTagFavoriteByUser(this.tag)) {
            this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["removeFavoriteTagFromUser"]({ tag: this.tag }));
        }
        else {
            this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["addFavoriteTagToUser"]({ tag: this.tag }));
        }
    }
    onDropdownIconClicked() {
        this.isMenuExpanded = !this.isMenuExpanded;
    }
    onDropdownOptionClicked(mode) {
        // TODO: make this cleaner.
        if (mode === "random") {
            this.menuSelectedOption = "random";
            this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchQuestions"]({ tag: this.tag, fetchRandom: true }));
        }
        else {
            this.menuSelectedOption = "default";
            this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchQuestions"]({ tag: this.tag }));
        }
    }
    get hasUserLoggedIn() {
        return !!this.userAuth && !!this.userAuth.email;
    }
    get dropdownClass() {
        console.log(this.isMenuExpanded);
        return this.isMenuExpanded ? "open" : "";
    }
    dropdownOptionClass(option) {
        return this.isOptionSelected(option) ? "selected" : "";
    }
    isOptionSelected(option) {
        return this.menuSelectedOption === option;
    }
};
ContentHeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("dropdown", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ContentHeaderComponent.prototype, "menuElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ContentHeaderComponent.prototype, "userAuth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ContentHeaderComponent.prototype, "tag", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ContentHeaderComponent.prototype, "userFavoriteTags", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ContentHeaderComponent.prototype, "userSubscribedTags", void 0);
ContentHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "content-header",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/content-panel/content-header/content-header.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content-header.component.scss */ "./src/app/components/dashboard/content-panel/content-header/content-header.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], ContentHeaderComponent);



/***/ }),

/***/ "./src/app/components/dashboard/content-panel/content-panel.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dashboard/content-panel/content-panel.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\n  background: #262527;\n  height: 100%;\n  width: 100%;\n  overflow-y: scroll;\n  padding: 0 0 40px 0;\n}\nmain .content-header-container {\n  margin: 20px auto 0 auto;\n  width: 800px;\n}\nmain .card-list-container {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  width: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY29udGVudC1wYW5lbC9jb250ZW50LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2ZueC9HaXRSZXBvcy9mbngtY29kZS1kYWlseS9jbGllbnQvc3JjL2FwcC9zdHlsZXMvY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NvbnRlbnQtcGFuZWwvY29udGVudC1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQ1NjO0VEUmQsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FFREY7QUZHRTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtBRURKO0FGSUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRUZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY29udGVudC1wYW5lbC9jb250ZW50LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzc1wiO1xuXG5tYWluIHtcbiAgYmFja2dyb3VuZDogJGNvbnRlbnQtcGFuZWwtYmctY29sb3I7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcGFkZGluZzogMCAwIDQwcHggMDtcblxuICAuY29udGVudC1oZWFkZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XG4gICAgd2lkdGg6IDgwMHB4O1xuICB9XG5cbiAgLmNhcmQtbGlzdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDgwMHB4O1xuICB9XG59XG4iLCIkZGFya2dyZXktMDogcmdiKDE4LCAxNywgMTkpO1xuJGRhcmtncmV5LTE6IHJnYigzMCwgMjksIDMxKTtcbiRkYXJrZ3JleS0yOiByZ2IoNDUsIDQ0LCA0Nik7XG4kZGFya2dyZXktMzogcmdiKDkwLCA4OSwgOTEpO1xuJGdyZXk6IHJnYigxMjAsIDExOSwgMTIxKTtcbiRsaWdodGdyZXktMzogcmdiKDE5NiwgMTk1LCAxOTcpO1xuJGxpZ2h0Z3JleS0yOiByZ2IoMjExLCAyMTAsIDIxMik7XG4kbGlnaHRncmV5LTE6IHJnYigyMjYsIDIyNSwgMjI3KTtcbiRsaWdodGdyZXktMDogcmdiKDI0MSwgMjQwLCAyNDIpO1xuJGFsbW9zdHdoaXRlOiByZ2IoMjUzLCAyNTMsIDI1Myk7XG4kd2hpdGU6IHJnYigyNTUsIDI1NSwgMjU1KTtcblxuJGJsYWNrLWxpZ2h0ZXI6IHJnYigzOCwgMzcsIDM5KTtcbiRibGFjazogcmdiKDQxLCA0MCwgNDIpO1xuJGJsYWNrLWRhcmtlcjogcmdiKDQ0LCA0MywgNDUpO1xuXG4kaW5kaWdvLWxpZ2h0ZXI6ICM5ZmE4ZGE7XG4kaW5kaWdvOiAjNWM2YmMwO1xuJGluZGlnby1kYXJrZXI6ICM0MTUwYTg7XG5cbiRkYXJrbmF2eTogIzE2MjQ0NztcbiRwaW5rOiAjZTQzZjVhO1xuJGxpZ2h0bmF2eTogIzI0MjYyOTtcbiRuYXZ5YmxhY2s6ICMxYjFiMmY7XG4kb2xpdmU6ICM1YzdhMWU7XG5cbiRzdGFja292ZXJmbG93LWJyYW5kLWNvbG9yOiAjZjQ4MDI0O1xuJGdldC1wb2NrZXQtYnJhbmQtY29sb3I6ICNlZjQwNTY7XG5cbiRwcmltYXJ5LWNvbG9yOiAkaW5kaWdvO1xuJHNlY29uZGFyeS1jb2xvcjogJGluZGlnby1saWdodGVyO1xuXG4kYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJGNvbnRyb2wtcGFuZWwtYmctY29sb3I6ICRibGFjaztcbiRjb250ZW50LXBhbmVsLWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiR1c2VyLW1hbmFnZW1lbnQtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuIiwibWFpbiB7XG4gIGJhY2tncm91bmQ6ICMyNjI1Mjc7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcGFkZGluZzogMCAwIDQwcHggMDtcbn1cbm1haW4gLmNvbnRlbnQtaGVhZGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweCBhdXRvIDAgYXV0bztcbiAgd2lkdGg6IDgwMHB4O1xufVxubWFpbiAuY2FyZC1saXN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDgwMHB4O1xufSJdfQ== */");

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







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
        this.userAuth$ = this.store.select((state) => Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_2__["selectUserAuth"])(state));
        this.questions$ = this.store.select((state) => Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_2__["selectQuestions"])(state));
        this.currentTag$ = this.store.select((state) => Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_2__["selectSelectedTag"])(state));
        this.userFavoriteTags$ = this.store
            .select((state) => Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_2__["selectUser"])(state))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((user) => {
            console.log(user);
            if (!user) {
                return [];
            }
            return user.favoriteTags;
        }));
        this.userSubscribedTags$ = this.store
            .select((state) => Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_2__["selectUser"])(state))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((user) => {
            if (!user) {
                return [];
            }
            return user.subscribedTags;
        }));
    }
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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&family=Mulish:wght@400;500;600&display=swap\");\nmain {\n  background: #29282a;\n  height: 100%;\n  overflow-y: scroll;\n  width: 100%;\n}\nmain ::ng-deep .clr-treenode-children {\n  margin-left: 0;\n}\nmain div {\n  padding: 10px 0 10px 0;\n}\nmain div clr-tree {\n  color: #f1f0f2;\n  cursor: pointer;\n  font-family: \"Fira Code\";\n  font-weight: 400;\n  margin: 0;\n  width: 100%;\n}\nmain div clr-tree .tag-node {\n  border-left: 4px solid transparent;\n  margin: 4px 0 4px 0;\n}\nmain div clr-tree .tag-node.selected {\n  font-weight: 600;\n}\nmain div clr-tree .tag-node button.active {\n  background: none;\n  color: #5c6bc0;\n}\nmain div clr-tree .tag-node button:hover {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1jb2RlLWRhaWx5L2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NvbnRyb2wtcGFuZWwvY29udHJvbC1wYW5lbC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2NvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9jb250cm9sLXBhbmVsL2NvbnRyb2wtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0lBQUE7QUNHUjtFQUNFLG1CQ1NNO0VEUk4sWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBRURGO0FGR0U7RUFDRSxjQUFBO0FFREo7QUZJRTtFQUNFLHNCQUFBO0FFRko7QUZJSTtFQUNFLGNDVFE7RURVUixlQUFBO0VBQ0Esd0JEaEJLO0VDaUJMLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUVGTjtBRklNO0VBQ0Usa0NBQUE7RUFDQSxtQkFBQTtBRUZSO0FGSVE7RUFDRSxnQkFBQTtBRUZWO0FGTVU7RUFDRSxnQkFBQTtFQUNBLGNDbEJIO0FDY1Q7QUZPVTtFQUNFLGdCQUFBO0FFTFoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9jb250cm9sLXBhbmVsL2NvbnRyb2wtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStDb2RlOndnaHRAMzAwOzQwMDs1MDA7NjAwJmZhbWlseT1NdWxpc2g6d2dodEA0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXBcIik7XG5cbiRtYWluZm9udDogXCJNdWxpc2hcIjtcbiRjb2RlZm9udDogXCJGaXJhIENvZGVcIjtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvZm9udHMuc2Nzc1wiO1xuXG5tYWluIHtcbiAgYmFja2dyb3VuZDogJGNvbnRyb2wtcGFuZWwtYmctY29sb3I7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB3aWR0aDogMTAwJTtcblxuICA6Om5nLWRlZXAgLmNsci10cmVlbm9kZS1jaGlsZHJlbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICBkaXYge1xuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG5cbiAgICBjbHItdHJlZSB7XG4gICAgICBjb2xvcjogJGxpZ2h0Z3JleS0wO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1mYW1pbHk6ICRjb2RlZm9udDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLnRhZy1ub2RlIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgbWFyZ2luOiA0cHggMCA0cHggMDtcblxuICAgICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRkYXJrZ3JleS0wOiByZ2IoMTgsIDE3LCAxOSk7XG4kZGFya2dyZXktMTogcmdiKDMwLCAyOSwgMzEpO1xuJGRhcmtncmV5LTI6IHJnYig0NSwgNDQsIDQ2KTtcbiRkYXJrZ3JleS0zOiByZ2IoOTAsIDg5LCA5MSk7XG4kZ3JleTogcmdiKDEyMCwgMTE5LCAxMjEpO1xuJGxpZ2h0Z3JleS0zOiByZ2IoMTk2LCAxOTUsIDE5Nyk7XG4kbGlnaHRncmV5LTI6IHJnYigyMTEsIDIxMCwgMjEyKTtcbiRsaWdodGdyZXktMTogcmdiKDIyNiwgMjI1LCAyMjcpO1xuJGxpZ2h0Z3JleS0wOiByZ2IoMjQxLCAyNDAsIDI0Mik7XG4kYWxtb3N0d2hpdGU6IHJnYigyNTMsIDI1MywgMjUzKTtcbiR3aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4kYmxhY2stbGlnaHRlcjogcmdiKDM4LCAzNywgMzkpO1xuJGJsYWNrOiByZ2IoNDEsIDQwLCA0Mik7XG4kYmxhY2stZGFya2VyOiByZ2IoNDQsIDQzLCA0NSk7XG5cbiRpbmRpZ28tbGlnaHRlcjogIzlmYThkYTtcbiRpbmRpZ286ICM1YzZiYzA7XG4kaW5kaWdvLWRhcmtlcjogIzQxNTBhODtcblxuJGRhcmtuYXZ5OiAjMTYyNDQ3O1xuJHBpbms6ICNlNDNmNWE7XG4kbGlnaHRuYXZ5OiAjMjQyNjI5O1xuJG5hdnlibGFjazogIzFiMWIyZjtcbiRvbGl2ZTogIzVjN2ExZTtcblxuJHN0YWNrb3ZlcmZsb3ctYnJhbmQtY29sb3I6ICNmNDgwMjQ7XG4kZ2V0LXBvY2tldC1icmFuZC1jb2xvcjogI2VmNDA1NjtcblxuJHByaW1hcnktY29sb3I6ICRpbmRpZ287XG4kc2Vjb25kYXJ5LWNvbG9yOiAkaW5kaWdvLWxpZ2h0ZXI7XG5cbiRiZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kY29udHJvbC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrO1xuJGNvbnRlbnQtcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItbWFuYWdlbWVudC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStDb2RlOndnaHRAMzAwOzQwMDs1MDA7NjAwJmZhbWlseT1NdWxpc2g6d2dodEA0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXBcIik7XG5tYWluIHtcbiAgYmFja2dyb3VuZDogIzI5MjgyYTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xufVxubWFpbiA6Om5nLWRlZXAgLmNsci10cmVlbm9kZS1jaGlsZHJlbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxubWFpbiBkaXYge1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xufVxubWFpbiBkaXYgY2xyLXRyZWUge1xuICBjb2xvcjogI2YxZjBmMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbm1haW4gZGl2IGNsci10cmVlIC50YWctbm9kZSB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogNHB4IDAgNHB4IDA7XG59XG5tYWluIGRpdiBjbHItdHJlZSAudGFnLW5vZGUuc2VsZWN0ZWQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxubWFpbiBkaXYgY2xyLXRyZWUgLnRhZy1ub2RlIGJ1dHRvbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzVjNmJjMDtcbn1cbm1haW4gZGl2IGNsci10cmVlIC50YWctbm9kZSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufSJdfQ== */");

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
    getEmailIconClass(tag) {
        return this.isTagSubscribedByUser(tag) ? "is-solid" : "";
    }
    isTagSelected(tag) {
        return this.selectedTag === tag;
    }
    isTagFavoriteByUser(tag) {
        return this.userFavoriteTags && this.userFavoriteTags.indexOf(tag) >= 0;
    }
    isTagSubscribedByUser(tag) {
        return this.userSubscribedTags && this.userSubscribedTags.indexOf(tag) >= 0;
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
        if (!this.hasUserLoggedIn) {
            this.router.navigate(["/user/login"]);
            return;
        }
        if (this.isTagFavoriteByUser(tag)) {
            this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["removeFavoriteTagFromUser"]({ tag }));
        }
        else {
            this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["addFavoriteTagToUser"]({ tag }));
        }
    }
    onEmailClicked(tag) {
        if (!this.hasUserLoggedIn) {
            this.router.navigate(["/user/login"]);
            return;
        }
        if (this.isTagSubscribedByUser(tag)) {
            this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["unsubscribeToTag"]({ tag: tag }));
        }
        else {
            this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["subscribeToTag"]({ tag: tag }));
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ControlPanelComponent.prototype, "selectedTag", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ControlPanelComponent.prototype, "userFavoriteTags", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ControlPanelComponent.prototype, "userSubscribedTags", void 0);
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
/* harmony default export */ __webpack_exports__["default"] = ("main .flex-container {\n  background: #262527;\n  display: flex;\n  flex-direction: row;\n}\nmain .flex-container ::ng-deep navigation-panel {\n  flex: 0 0 50px;\n  height: 100vh;\n  width: 50px;\n}\nmain .flex-container ::ng-deep control-panel {\n  flex: 0 0 275px;\n  height: 100vh;\n  width: 275px;\n}\nmain .flex-container ::ng-deep content-panel {\n  flex-grow: 1;\n  height: 100vh;\n}\nmain .flex-container ::ng-deep user-management-panel {\n  flex-grow: 1;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2ZueC9HaXRSZXBvcy9mbngtY29kZS1kYWlseS9jbGllbnQvc3JjL2FwcC9zdHlsZXMvY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLG1CQ1FZO0VEUFosYUFBQTtFQUNBLG1CQUFBO0FFRko7QUZLTTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBRUhSO0FGTU07RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUVKUjtBRk9NO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUVMUjtBRlFNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUVOUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvY29sb3JzLnNjc3NcIjtcblxubWFpbiB7XG4gIC5mbGV4LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgIDo6bmctZGVlcCB7XG4gICAgICBuYXZpZ2F0aW9uLXBhbmVsIHtcbiAgICAgICAgZmxleDogMCAwIDUwcHg7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgfVxuXG4gICAgICBjb250cm9sLXBhbmVsIHtcbiAgICAgICAgZmxleDogMCAwIDI3NXB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB3aWR0aDogMjc1cHg7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQtcGFuZWwge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICB9XG5cbiAgICAgIHVzZXItbWFuYWdlbWVudC1wYW5lbCB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRkYXJrZ3JleS0wOiByZ2IoMTgsIDE3LCAxOSk7XG4kZGFya2dyZXktMTogcmdiKDMwLCAyOSwgMzEpO1xuJGRhcmtncmV5LTI6IHJnYig0NSwgNDQsIDQ2KTtcbiRkYXJrZ3JleS0zOiByZ2IoOTAsIDg5LCA5MSk7XG4kZ3JleTogcmdiKDEyMCwgMTE5LCAxMjEpO1xuJGxpZ2h0Z3JleS0zOiByZ2IoMTk2LCAxOTUsIDE5Nyk7XG4kbGlnaHRncmV5LTI6IHJnYigyMTEsIDIxMCwgMjEyKTtcbiRsaWdodGdyZXktMTogcmdiKDIyNiwgMjI1LCAyMjcpO1xuJGxpZ2h0Z3JleS0wOiByZ2IoMjQxLCAyNDAsIDI0Mik7XG4kYWxtb3N0d2hpdGU6IHJnYigyNTMsIDI1MywgMjUzKTtcbiR3aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4kYmxhY2stbGlnaHRlcjogcmdiKDM4LCAzNywgMzkpO1xuJGJsYWNrOiByZ2IoNDEsIDQwLCA0Mik7XG4kYmxhY2stZGFya2VyOiByZ2IoNDQsIDQzLCA0NSk7XG5cbiRpbmRpZ28tbGlnaHRlcjogIzlmYThkYTtcbiRpbmRpZ286ICM1YzZiYzA7XG4kaW5kaWdvLWRhcmtlcjogIzQxNTBhODtcblxuJGRhcmtuYXZ5OiAjMTYyNDQ3O1xuJHBpbms6ICNlNDNmNWE7XG4kbGlnaHRuYXZ5OiAjMjQyNjI5O1xuJG5hdnlibGFjazogIzFiMWIyZjtcbiRvbGl2ZTogIzVjN2ExZTtcblxuJHN0YWNrb3ZlcmZsb3ctYnJhbmQtY29sb3I6ICNmNDgwMjQ7XG4kZ2V0LXBvY2tldC1icmFuZC1jb2xvcjogI2VmNDA1NjtcblxuJHByaW1hcnktY29sb3I6ICRpbmRpZ287XG4kc2Vjb25kYXJ5LWNvbG9yOiAkaW5kaWdvLWxpZ2h0ZXI7XG5cbiRiZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kY29udHJvbC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrO1xuJGNvbnRlbnQtcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItbWFuYWdlbWVudC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4iLCJtYWluIC5mbGV4LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICMyNjI1Mjc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5tYWluIC5mbGV4LWNvbnRhaW5lciA6Om5nLWRlZXAgbmF2aWdhdGlvbi1wYW5lbCB7XG4gIGZsZXg6IDAgMCA1MHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogNTBweDtcbn1cbm1haW4gLmZsZXgtY29udGFpbmVyIDo6bmctZGVlcCBjb250cm9sLXBhbmVsIHtcbiAgZmxleDogMCAwIDI3NXB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMjc1cHg7XG59XG5tYWluIC5mbGV4LWNvbnRhaW5lciA6Om5nLWRlZXAgY29udGVudC1wYW5lbCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbm1haW4gLmZsZXgtY29udGFpbmVyIDo6bmctZGVlcCB1c2VyLW1hbmFnZW1lbnQtcGFuZWwge1xuICBmbGV4LWdyb3c6IDE7XG4gIGhlaWdodDogMTAwdmg7XG59Il19 */");

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
        this.tags$ = this.stackExchangeService.getDefaultTags();
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
        this.userSubscribedTags$ = this.store
            .select((state) => Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_7__["selectUser"])(state))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((user) => {
            if (!user) {
                return [];
            }
            return user.subscribedTags;
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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&family=Mulish:wght@400;500;600&display=swap\");\nmain {\n  background: #262527;\n  height: 100%;\n  width: 100%;\n}\nmain .flex-container {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n  padding: 15px 0 15px 0;\n}\nmain .flex-container .flex-top,\nmain .flex-container .flex-bottom {\n  display: flex;\n  flex-direction: column;\n}\nmain .flex-container .flex-mid {\n  font-family: \"Fira Code\";\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n}\nmain .flex-container fa-icon {\n  color: #787779;\n  cursor: pointer;\n  font-size: 21px;\n  margin: 5px 0 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1jb2RlLWRhaWx5L2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL25hdmlnYXRpb24tcGFuZWwvbmF2aWdhdGlvbi1wYW5lbC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2NvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9uYXZpZ2F0aW9uLXBhbmVsL25hdmlnYXRpb24tcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0lBQUE7QUNHUjtFQUNFLG1CQ1FjO0VEUGQsWUFBQTtFQUNBLFdBQUE7QUVERjtBRkdFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBRURKO0FGR0k7O0VBRUUsYUFBQTtFQUNBLHNCQUFBO0FFRE47QUZJSTtFQUNFLHdCRHBCSztFQ3FCTCxpQ0FBQTtNQUFBLHVCQUFBO1VBQUEseUJBQUE7QUVGTjtBRktJO0VBQ0UsY0N4QkM7RUR5QkQsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBRUhOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvbmF2aWdhdGlvbi1wYW5lbC9uYXZpZ2F0aW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErQ29kZTp3Z2h0QDMwMDs0MDA7NTAwOzYwMCZmYW1pbHk9TXVsaXNoOndnaHRANDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwXCIpO1xuXG4kbWFpbmZvbnQ6IFwiTXVsaXNoXCI7XG4kY29kZWZvbnQ6IFwiRmlyYSBDb2RlXCI7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2ZvbnRzLnNjc3NcIjtcblxubWFpbiB7XG4gIGJhY2tncm91bmQ6ICR1c2VyLXBhbmVsLWJnLWNvbG9yO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5mbGV4LWNvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxNXB4IDAgMTVweCAwO1xuXG4gICAgLmZsZXgtdG9wLFxuICAgIC5mbGV4LWJvdHRvbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuZmxleC1taWQge1xuICAgICAgZm9udC1mYW1pbHk6ICRjb2RlZm9udDtcbiAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gICAgfVxuXG4gICAgZmEtaWNvbiB7XG4gICAgICBjb2xvcjogJGdyZXk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICBtYXJnaW46IDVweCAwIDVweCAwO1xuICAgIH1cbiAgfVxufVxuIiwiJGRhcmtncmV5LTA6IHJnYigxOCwgMTcsIDE5KTtcbiRkYXJrZ3JleS0xOiByZ2IoMzAsIDI5LCAzMSk7XG4kZGFya2dyZXktMjogcmdiKDQ1LCA0NCwgNDYpO1xuJGRhcmtncmV5LTM6IHJnYig5MCwgODksIDkxKTtcbiRncmV5OiByZ2IoMTIwLCAxMTksIDEyMSk7XG4kbGlnaHRncmV5LTM6IHJnYigxOTYsIDE5NSwgMTk3KTtcbiRsaWdodGdyZXktMjogcmdiKDIxMSwgMjEwLCAyMTIpO1xuJGxpZ2h0Z3JleS0xOiByZ2IoMjI2LCAyMjUsIDIyNyk7XG4kbGlnaHRncmV5LTA6IHJnYigyNDEsIDI0MCwgMjQyKTtcbiRhbG1vc3R3aGl0ZTogcmdiKDI1MywgMjUzLCAyNTMpO1xuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cbiRibGFjay1saWdodGVyOiByZ2IoMzgsIDM3LCAzOSk7XG4kYmxhY2s6IHJnYig0MSwgNDAsIDQyKTtcbiRibGFjay1kYXJrZXI6IHJnYig0NCwgNDMsIDQ1KTtcblxuJGluZGlnby1saWdodGVyOiAjOWZhOGRhO1xuJGluZGlnbzogIzVjNmJjMDtcbiRpbmRpZ28tZGFya2VyOiAjNDE1MGE4O1xuXG4kZGFya25hdnk6ICMxNjI0NDc7XG4kcGluazogI2U0M2Y1YTtcbiRsaWdodG5hdnk6ICMyNDI2Mjk7XG4kbmF2eWJsYWNrOiAjMWIxYjJmO1xuJG9saXZlOiAjNWM3YTFlO1xuXG4kc3RhY2tvdmVyZmxvdy1icmFuZC1jb2xvcjogI2Y0ODAyNDtcbiRnZXQtcG9ja2V0LWJyYW5kLWNvbG9yOiAjZWY0MDU2O1xuXG4kcHJpbWFyeS1jb2xvcjogJGluZGlnbztcbiRzZWNvbmRhcnktY29sb3I6ICRpbmRpZ28tbGlnaHRlcjtcblxuJGJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiR1c2VyLXBhbmVsLWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiRjb250cm9sLXBhbmVsLWJnLWNvbG9yOiAkYmxhY2s7XG4kY29udGVudC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1tYW5hZ2VtZW50LWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGU6d2dodEAzMDA7NDAwOzUwMDs2MDAmZmFtaWx5PU11bGlzaDp3Z2h0QDQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcFwiKTtcbm1haW4ge1xuICBiYWNrZ3JvdW5kOiAjMjYyNTI3O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxubWFpbiAuZmxleC1jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTVweCAwIDE1cHggMDtcbn1cbm1haW4gLmZsZXgtY29udGFpbmVyIC5mbGV4LXRvcCxcbm1haW4gLmZsZXgtY29udGFpbmVyIC5mbGV4LWJvdHRvbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5tYWluIC5mbGV4LWNvbnRhaW5lciAuZmxleC1taWQge1xuICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIjtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbn1cbm1haW4gLmZsZXgtY29udGFpbmVyIGZhLWljb24ge1xuICBjb2xvcjogIzc4Nzc3OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIxcHg7XG4gIG1hcmdpbjogNXB4IDAgNXB4IDA7XG59Il19 */");

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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




let NavigationPanelComponent = class NavigationPanelComponent {
    constructor(router) {
        this.router = router;
        this.faUserNinja = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUserNinja"];
        this.faFileCode = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFileCode"];
        this.faCloud = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCloud"];
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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  margin: auto;\n}\n:host main {\n  display: flex;\n  width: 400px;\n}\n:host main .card {\n  background: white;\n  box-shadow: 0 4px 0 0 #fdfdfd;\n  border-radius: 3px;\n  border-width: 1.5px;\n  border-color: white;\n  opacity: 0.75;\n  margin: 0;\n}\n:host main form {\n  margin: 20px 40px;\n}\n:host main form section {\n  margin: 30px 0;\n}\n:host main form .login-group ::ng-deep .clr-control-container {\n  width: 100%;\n}\n:host main form .login-group ::ng-deep .clr-control-container .clr-input-wrapper .clr-input {\n  background: none;\n}\n:host main form .login-group ::ng-deep .clr-control-container .clr-input-wrapper .clr-input:focus {\n  border-bottom-color: #5c6bc0;\n}\n:host main form .login-group ::ng-deep .clr-control-container .clr-input-wrapper .clr-input-group {\n  background: none;\n  padding: 0;\n  width: 100%;\n}\n:host main form .login-group ::ng-deep .clr-control-container .clr-input-wrapper .clr-input-group.clr-focus {\n  border-bottom-color: #5c6bc0;\n}\n:host main form .login-group ::ng-deep .clr-control-container .clr-input-wrapper .clr-input-group clr-icon {\n  color: #5c6bc0;\n}\n:host main form .login-group ::ng-deep .clr-control-container .clr-input-wrapper input {\n  color: #121113;\n  width: 100%;\n}\n:host main form button {\n  border-color: #5c6bc0;\n  color: #5c6bc0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlci1tYW5hZ2VtZW50LXBhbmVsL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyLW1hbmFnZW1lbnQtcGFuZWwvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1jb2RlLWRhaWx5L2NsaWVudC9zcmMvYXBwL3N0eWxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7QUNERjtBREdFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNESjtBREdJO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkVKRTtFRktGLGFBQUE7RUFDQSxTQUFBO0FDRE47QURJSTtFQUNFLGlCQUFBO0FDRk47QURJTTtFQUNFLGNBQUE7QUNGUjtBRE9VO0VBQ0UsV0FBQTtBQ0xaO0FEUWM7RUFDRSxnQkFBQTtBQ05oQjtBRFFnQjtFQUNFLDRCRW5CVDtBRGFUO0FEVWM7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDUmhCO0FEVWdCO0VBQ0UsNEJFN0JUO0FEcUJUO0FEV2dCO0VBQ0UsY0VqQ1Q7QUR3QlQ7QURhYztFQUNFLGNFdkRIO0VGd0RHLFdBQUE7QUNYaEI7QURrQk07RUFDRSxxQkUvQ0M7RUZnREQsY0VoREM7QURnQ1QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyLW1hbmFnZW1lbnQtcGFuZWwvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgbWFyZ2luOiBhdXRvO1xuXG4gIG1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDQwMHB4O1xuXG4gICAgLmNhcmQge1xuICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMCAwICRhbG1vc3R3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGJvcmRlci13aWR0aDogMS41cHg7XG4gICAgICBib3JkZXItY29sb3I6ICR3aGl0ZTtcbiAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgZm9ybSB7XG4gICAgICBtYXJnaW46IDIwcHggNDBweDtcblxuICAgICAgc2VjdGlvbiB7XG4gICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgfVxuXG4gICAgICAubG9naW4tZ3JvdXAge1xuICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgIC5jbHItY29udHJvbC1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIC5jbHItaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgICAgIC5jbHItaW5wdXQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG5cbiAgICAgICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRpbmRpZ287XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNsci1pbnB1dC1ncm91cCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgJi5jbHItZm9jdXMge1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGluZGlnbztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjbHItaWNvbiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJGluZGlnbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrZ3JleS0wO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuOmhvc3QgbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0MDBweDtcbn1cbjpob3N0IG1haW4gLmNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAwICNmZGZkZmQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXdpZHRoOiAxLjVweDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43NTtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgbWFpbiBmb3JtIHtcbiAgbWFyZ2luOiAyMHB4IDQwcHg7XG59XG46aG9zdCBtYWluIGZvcm0gc2VjdGlvbiB7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuOmhvc3QgbWFpbiBmb3JtIC5sb2dpbi1ncm91cCA6Om5nLWRlZXAgLmNsci1jb250cm9sLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWFpbiBmb3JtIC5sb2dpbi1ncm91cCA6Om5nLWRlZXAgLmNsci1jb250cm9sLWNvbnRhaW5lciAuY2xyLWlucHV0LXdyYXBwZXIgLmNsci1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG46aG9zdCBtYWluIGZvcm0gLmxvZ2luLWdyb3VwIDo6bmctZGVlcCAuY2xyLWNvbnRyb2wtY29udGFpbmVyIC5jbHItaW5wdXQtd3JhcHBlciAuY2xyLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzVjNmJjMDtcbn1cbjpob3N0IG1haW4gZm9ybSAubG9naW4tZ3JvdXAgOjpuZy1kZWVwIC5jbHItY29udHJvbC1jb250YWluZXIgLmNsci1pbnB1dC13cmFwcGVyIC5jbHItaW5wdXQtZ3JvdXAge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IG1haW4gZm9ybSAubG9naW4tZ3JvdXAgOjpuZy1kZWVwIC5jbHItY29udHJvbC1jb250YWluZXIgLmNsci1pbnB1dC13cmFwcGVyIC5jbHItaW5wdXQtZ3JvdXAuY2xyLWZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzVjNmJjMDtcbn1cbjpob3N0IG1haW4gZm9ybSAubG9naW4tZ3JvdXAgOjpuZy1kZWVwIC5jbHItY29udHJvbC1jb250YWluZXIgLmNsci1pbnB1dC13cmFwcGVyIC5jbHItaW5wdXQtZ3JvdXAgY2xyLWljb24ge1xuICBjb2xvcjogIzVjNmJjMDtcbn1cbjpob3N0IG1haW4gZm9ybSAubG9naW4tZ3JvdXAgOjpuZy1kZWVwIC5jbHItY29udHJvbC1jb250YWluZXIgLmNsci1pbnB1dC13cmFwcGVyIGlucHV0IHtcbiAgY29sb3I6ICMxMjExMTM7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWFpbiBmb3JtIGJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogIzVjNmJjMDtcbiAgY29sb3I6ICM1YzZiYzA7XG59IiwiJGRhcmtncmV5LTA6IHJnYigxOCwgMTcsIDE5KTtcbiRkYXJrZ3JleS0xOiByZ2IoMzAsIDI5LCAzMSk7XG4kZGFya2dyZXktMjogcmdiKDQ1LCA0NCwgNDYpO1xuJGRhcmtncmV5LTM6IHJnYig5MCwgODksIDkxKTtcbiRncmV5OiByZ2IoMTIwLCAxMTksIDEyMSk7XG4kbGlnaHRncmV5LTM6IHJnYigxOTYsIDE5NSwgMTk3KTtcbiRsaWdodGdyZXktMjogcmdiKDIxMSwgMjEwLCAyMTIpO1xuJGxpZ2h0Z3JleS0xOiByZ2IoMjI2LCAyMjUsIDIyNyk7XG4kbGlnaHRncmV5LTA6IHJnYigyNDEsIDI0MCwgMjQyKTtcbiRhbG1vc3R3aGl0ZTogcmdiKDI1MywgMjUzLCAyNTMpO1xuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cbiRibGFjay1saWdodGVyOiByZ2IoMzgsIDM3LCAzOSk7XG4kYmxhY2s6IHJnYig0MSwgNDAsIDQyKTtcbiRibGFjay1kYXJrZXI6IHJnYig0NCwgNDMsIDQ1KTtcblxuJGluZGlnby1saWdodGVyOiAjOWZhOGRhO1xuJGluZGlnbzogIzVjNmJjMDtcbiRpbmRpZ28tZGFya2VyOiAjNDE1MGE4O1xuXG4kZGFya25hdnk6ICMxNjI0NDc7XG4kcGluazogI2U0M2Y1YTtcbiRsaWdodG5hdnk6ICMyNDI2Mjk7XG4kbmF2eWJsYWNrOiAjMWIxYjJmO1xuJG9saXZlOiAjNWM3YTFlO1xuXG4kc3RhY2tvdmVyZmxvdy1icmFuZC1jb2xvcjogI2Y0ODAyNDtcbiRnZXQtcG9ja2V0LWJyYW5kLWNvbG9yOiAjZWY0MDU2O1xuXG4kcHJpbWFyeS1jb2xvcjogJGluZGlnbztcbiRzZWNvbmRhcnktY29sb3I6ICRpbmRpZ28tbGlnaHRlcjtcblxuJGJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiR1c2VyLXBhbmVsLWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiRjb250cm9sLXBhbmVsLWJnLWNvbG9yOiAkYmxhY2s7XG4kY29udGVudC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1tYW5hZ2VtZW50LWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  margin: auto;\n}\n:host main {\n  display: flex;\n  width: 400px;\n}\n:host main .card {\n  background: white;\n  box-shadow: 0 4px 0 0 #fdfdfd;\n  border-radius: 3px;\n  border-width: 1.5px;\n  border-color: white;\n  opacity: 0.75;\n  margin: 0;\n}\n:host main form {\n  margin: 20px 40px;\n}\n:host main form section {\n  margin: 30px 0;\n}\n:host main form .register-group ::ng-deep .clr-control-container {\n  width: 100%;\n}\n:host main form .register-group ::ng-deep .clr-control-container .clr-input-wrapper .clr-input {\n  background: none;\n}\n:host main form .register-group ::ng-deep .clr-control-container .clr-input-wrapper .clr-input:focus {\n  border-bottom-color: #5c6bc0;\n}\n:host main form .register-group ::ng-deep .clr-control-container .clr-input-wrapper .clr-input-group {\n  background: none;\n  padding: 0;\n  width: 100%;\n}\n:host main form .register-group ::ng-deep .clr-control-container .clr-input-wrapper .clr-input-group.clr-focus {\n  border-bottom-color: #5c6bc0;\n}\n:host main form .register-group ::ng-deep .clr-control-container .clr-input-wrapper .clr-input-group clr-icon {\n  color: #5c6bc0;\n}\n:host main form .register-group ::ng-deep .clr-control-container .clr-input-wrapper input {\n  color: #121113;\n  width: 100%;\n}\n:host main form button {\n  border-color: #5c6bc0;\n  color: #5c6bc0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlci1tYW5hZ2VtZW50LXBhbmVsL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXItbWFuYWdlbWVudC1wYW5lbC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2ZueC9HaXRSZXBvcy9mbngtY29kZS1kYWlseS9jbGllbnQvc3JjL2FwcC9zdHlsZXMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0FDREY7QURHRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDREo7QURHSTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJFSkU7RUZLRixhQUFBO0VBQ0EsU0FBQTtBQ0ROO0FESUk7RUFDRSxpQkFBQTtBQ0ZOO0FESU07RUFDRSxjQUFBO0FDRlI7QURPVTtFQUNFLFdBQUE7QUNMWjtBRFFjO0VBQ0UsZ0JBQUE7QUNOaEI7QURRZ0I7RUFDRSw0QkVuQlQ7QURhVDtBRFVjO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ1JoQjtBRFVnQjtFQUNFLDRCRTdCVDtBRHFCVDtBRFdnQjtFQUNFLGNFakNUO0FEd0JUO0FEYWM7RUFDRSxjRXZESDtFRndERyxXQUFBO0FDWGhCO0FEa0JNO0VBQ0UscUJFL0NDO0VGZ0RELGNFaERDO0FEZ0NUIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlci1tYW5hZ2VtZW50LXBhbmVsL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgbWFyZ2luOiBhdXRvO1xuXG4gIG1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDQwMHB4O1xuXG4gICAgLmNhcmQge1xuICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMCAwICRhbG1vc3R3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGJvcmRlci13aWR0aDogMS41cHg7XG4gICAgICBib3JkZXItY29sb3I6ICR3aGl0ZTtcbiAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgZm9ybSB7XG4gICAgICBtYXJnaW46IDIwcHggNDBweDtcblxuICAgICAgc2VjdGlvbiB7XG4gICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgfVxuXG4gICAgICAucmVnaXN0ZXItZ3JvdXAge1xuICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgIC5jbHItY29udHJvbC1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIC5jbHItaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgICAgIC5jbHItaW5wdXQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG5cbiAgICAgICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRpbmRpZ287XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNsci1pbnB1dC1ncm91cCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgJi5jbHItZm9jdXMge1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGluZGlnbztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjbHItaWNvbiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJGluZGlnbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrZ3JleS0wO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuOmhvc3QgbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0MDBweDtcbn1cbjpob3N0IG1haW4gLmNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAwICNmZGZkZmQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXdpZHRoOiAxLjVweDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43NTtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgbWFpbiBmb3JtIHtcbiAgbWFyZ2luOiAyMHB4IDQwcHg7XG59XG46aG9zdCBtYWluIGZvcm0gc2VjdGlvbiB7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuOmhvc3QgbWFpbiBmb3JtIC5yZWdpc3Rlci1ncm91cCA6Om5nLWRlZXAgLmNsci1jb250cm9sLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWFpbiBmb3JtIC5yZWdpc3Rlci1ncm91cCA6Om5nLWRlZXAgLmNsci1jb250cm9sLWNvbnRhaW5lciAuY2xyLWlucHV0LXdyYXBwZXIgLmNsci1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG46aG9zdCBtYWluIGZvcm0gLnJlZ2lzdGVyLWdyb3VwIDo6bmctZGVlcCAuY2xyLWNvbnRyb2wtY29udGFpbmVyIC5jbHItaW5wdXQtd3JhcHBlciAuY2xyLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzVjNmJjMDtcbn1cbjpob3N0IG1haW4gZm9ybSAucmVnaXN0ZXItZ3JvdXAgOjpuZy1kZWVwIC5jbHItY29udHJvbC1jb250YWluZXIgLmNsci1pbnB1dC13cmFwcGVyIC5jbHItaW5wdXQtZ3JvdXAge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IG1haW4gZm9ybSAucmVnaXN0ZXItZ3JvdXAgOjpuZy1kZWVwIC5jbHItY29udHJvbC1jb250YWluZXIgLmNsci1pbnB1dC13cmFwcGVyIC5jbHItaW5wdXQtZ3JvdXAuY2xyLWZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzVjNmJjMDtcbn1cbjpob3N0IG1haW4gZm9ybSAucmVnaXN0ZXItZ3JvdXAgOjpuZy1kZWVwIC5jbHItY29udHJvbC1jb250YWluZXIgLmNsci1pbnB1dC13cmFwcGVyIC5jbHItaW5wdXQtZ3JvdXAgY2xyLWljb24ge1xuICBjb2xvcjogIzVjNmJjMDtcbn1cbjpob3N0IG1haW4gZm9ybSAucmVnaXN0ZXItZ3JvdXAgOjpuZy1kZWVwIC5jbHItY29udHJvbC1jb250YWluZXIgLmNsci1pbnB1dC13cmFwcGVyIGlucHV0IHtcbiAgY29sb3I6ICMxMjExMTM7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWFpbiBmb3JtIGJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogIzVjNmJjMDtcbiAgY29sb3I6ICM1YzZiYzA7XG59IiwiJGRhcmtncmV5LTA6IHJnYigxOCwgMTcsIDE5KTtcbiRkYXJrZ3JleS0xOiByZ2IoMzAsIDI5LCAzMSk7XG4kZGFya2dyZXktMjogcmdiKDQ1LCA0NCwgNDYpO1xuJGRhcmtncmV5LTM6IHJnYig5MCwgODksIDkxKTtcbiRncmV5OiByZ2IoMTIwLCAxMTksIDEyMSk7XG4kbGlnaHRncmV5LTM6IHJnYigxOTYsIDE5NSwgMTk3KTtcbiRsaWdodGdyZXktMjogcmdiKDIxMSwgMjEwLCAyMTIpO1xuJGxpZ2h0Z3JleS0xOiByZ2IoMjI2LCAyMjUsIDIyNyk7XG4kbGlnaHRncmV5LTA6IHJnYigyNDEsIDI0MCwgMjQyKTtcbiRhbG1vc3R3aGl0ZTogcmdiKDI1MywgMjUzLCAyNTMpO1xuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cbiRibGFjay1saWdodGVyOiByZ2IoMzgsIDM3LCAzOSk7XG4kYmxhY2s6IHJnYig0MSwgNDAsIDQyKTtcbiRibGFjay1kYXJrZXI6IHJnYig0NCwgNDMsIDQ1KTtcblxuJGluZGlnby1saWdodGVyOiAjOWZhOGRhO1xuJGluZGlnbzogIzVjNmJjMDtcbiRpbmRpZ28tZGFya2VyOiAjNDE1MGE4O1xuXG4kZGFya25hdnk6ICMxNjI0NDc7XG4kcGluazogI2U0M2Y1YTtcbiRsaWdodG5hdnk6ICMyNDI2Mjk7XG4kbmF2eWJsYWNrOiAjMWIxYjJmO1xuJG9saXZlOiAjNWM3YTFlO1xuXG4kc3RhY2tvdmVyZmxvdy1icmFuZC1jb2xvcjogI2Y0ODAyNDtcbiRnZXQtcG9ja2V0LWJyYW5kLWNvbG9yOiAjZWY0MDU2O1xuXG4kcHJpbWFyeS1jb2xvcjogJGluZGlnbztcbiRzZWNvbmRhcnktY29sb3I6ICRpbmRpZ28tbGlnaHRlcjtcblxuJGJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiR1c2VyLXBhbmVsLWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiRjb250cm9sLXBhbmVsLWJnLWNvbG9yOiAkYmxhY2s7XG4kY29udGVudC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1tYW5hZ2VtZW50LWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiJdfQ== */");

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

/***/ "./src/app/components/dashboard/user-management-panel/subscription-management/subscription-management.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/components/dashboard/user-management-panel/subscription-management/subscription-management.component.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  margin: auto;\n}\n:host main {\n  display: flex;\n  width: 400px;\n}\n:host main .card {\n  background: white;\n  box-shadow: 0 4px 0 0 #fdfdfd;\n  border-radius: 3px;\n  border-width: 1.5px;\n  border-color: white;\n  opacity: 0.75;\n  margin: 0;\n}\n:host main form {\n  margin: 20px 40px;\n}\n:host main form section {\n  margin: 30px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlci1tYW5hZ2VtZW50LXBhbmVsL3N1YnNjcmlwdGlvbi1tYW5hZ2VtZW50L3N1YnNjcmlwdGlvbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyLW1hbmFnZW1lbnQtcGFuZWwvc3Vic2NyaXB0aW9uLW1hbmFnZW1lbnQvc3Vic2NyaXB0aW9uLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1jb2RlLWRhaWx5L2NsaWVudC9zcmMvYXBwL3N0eWxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7QUNERjtBREdFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNESjtBREdJO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkVKRTtFRktGLGFBQUE7RUFDQSxTQUFBO0FDRE47QURJSTtFQUNFLGlCQUFBO0FDRk47QURJTTtFQUNFLGNBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXItbWFuYWdlbWVudC1wYW5lbC9zdWJzY3JpcHRpb24tbWFuYWdlbWVudC9zdWJzY3JpcHRpb24tbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3NcIjtcblxuOmhvc3Qge1xuICBtYXJnaW46IGF1dG87XG5cbiAgbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNDAwcHg7XG5cbiAgICAuY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAwIDAgJGFsbW9zdHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgYm9yZGVyLXdpZHRoOiAxLjVweDtcbiAgICAgIGJvcmRlci1jb2xvcjogJHdoaXRlO1xuICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICBmb3JtIHtcbiAgICAgIG1hcmdpbjogMjBweCA0MHB4O1xuXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgICB9XG5cbiAgICAgIC8vIC5yZWdpc3Rlci1ncm91cCB7XG4gICAgICAvLyAgIDo6bmctZGVlcCB7XG4gICAgICAvLyAgICAgLmNsci1jb250cm9sLWNvbnRhaW5lciB7XG4gICAgICAvLyAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLy8gICAgICAgLmNsci1pbnB1dC1ncm91cCB7XG4gICAgICAvLyAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAvLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLy8gICAgICAgfVxuXG4gICAgICAvLyAgICAgICBpbnB1dCB7XG4gICAgICAvLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLy8gICAgICAgfVxuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBtYXJnaW46IGF1dG87XG59XG46aG9zdCBtYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDQwMHB4O1xufVxuOmhvc3QgbWFpbiAuY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDRweCAwIDAgI2ZkZmRmZDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItd2lkdGg6IDEuNXB4O1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjc1O1xuICBtYXJnaW46IDA7XG59XG46aG9zdCBtYWluIGZvcm0ge1xuICBtYXJnaW46IDIwcHggNDBweDtcbn1cbjpob3N0IG1haW4gZm9ybSBzZWN0aW9uIHtcbiAgbWFyZ2luOiAzMHB4IDA7XG59IiwiJGRhcmtncmV5LTA6IHJnYigxOCwgMTcsIDE5KTtcbiRkYXJrZ3JleS0xOiByZ2IoMzAsIDI5LCAzMSk7XG4kZGFya2dyZXktMjogcmdiKDQ1LCA0NCwgNDYpO1xuJGRhcmtncmV5LTM6IHJnYig5MCwgODksIDkxKTtcbiRncmV5OiByZ2IoMTIwLCAxMTksIDEyMSk7XG4kbGlnaHRncmV5LTM6IHJnYigxOTYsIDE5NSwgMTk3KTtcbiRsaWdodGdyZXktMjogcmdiKDIxMSwgMjEwLCAyMTIpO1xuJGxpZ2h0Z3JleS0xOiByZ2IoMjI2LCAyMjUsIDIyNyk7XG4kbGlnaHRncmV5LTA6IHJnYigyNDEsIDI0MCwgMjQyKTtcbiRhbG1vc3R3aGl0ZTogcmdiKDI1MywgMjUzLCAyNTMpO1xuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cbiRibGFjay1saWdodGVyOiByZ2IoMzgsIDM3LCAzOSk7XG4kYmxhY2s6IHJnYig0MSwgNDAsIDQyKTtcbiRibGFjay1kYXJrZXI6IHJnYig0NCwgNDMsIDQ1KTtcblxuJGluZGlnby1saWdodGVyOiAjOWZhOGRhO1xuJGluZGlnbzogIzVjNmJjMDtcbiRpbmRpZ28tZGFya2VyOiAjNDE1MGE4O1xuXG4kZGFya25hdnk6ICMxNjI0NDc7XG4kcGluazogI2U0M2Y1YTtcbiRsaWdodG5hdnk6ICMyNDI2Mjk7XG4kbmF2eWJsYWNrOiAjMWIxYjJmO1xuJG9saXZlOiAjNWM3YTFlO1xuXG4kc3RhY2tvdmVyZmxvdy1icmFuZC1jb2xvcjogI2Y0ODAyNDtcbiRnZXQtcG9ja2V0LWJyYW5kLWNvbG9yOiAjZWY0MDU2O1xuXG4kcHJpbWFyeS1jb2xvcjogJGluZGlnbztcbiRzZWNvbmRhcnktY29sb3I6ICRpbmRpZ28tbGlnaHRlcjtcblxuJGJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiR1c2VyLXBhbmVsLWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiRjb250cm9sLXBhbmVsLWJnLWNvbG9yOiAkYmxhY2s7XG4kY29udGVudC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1tYW5hZ2VtZW50LWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/dashboard/user-management-panel/subscription-management/subscription-management.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/components/dashboard/user-management-panel/subscription-management/subscription-management.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: SubscriptionManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionManagementComponent", function() { return SubscriptionManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubscriptionManagementComponent = class SubscriptionManagementComponent {
    constructor() { }
    ngOnInit() { }
};
SubscriptionManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "subscription-management",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subscription-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/subscription-management/subscription-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./subscription-management.component.scss */ "./src/app/components/dashboard/user-management-panel/subscription-management/subscription-management.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SubscriptionManagementComponent);



/***/ }),

/***/ "./src/app/components/dashboard/user-management-panel/user-management-panel.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/dashboard/user-management-panel/user-management-panel.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\n  background: #262527;\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\nmain section {\n  margin: auto;\n}\nmain section .card-list-container {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlci1tYW5hZ2VtZW50LXBhbmVsL3VzZXItbWFuYWdlbWVudC1wYW5lbC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2NvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyLW1hbmFnZW1lbnQtcGFuZWwvdXNlci1tYW5hZ2VtZW50LXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJDU2M7RURSZCxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUVERjtBRkdFO0VBQ0UsWUFBQTtBRURKO0FGR0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUVETiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXItbWFuYWdlbWVudC1wYW5lbC91c2VyLW1hbmFnZW1lbnQtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XG5cbm1haW4ge1xuICBiYWNrZ3JvdW5kOiAkdXNlci1tYW5hZ2VtZW50LWJnLWNvbG9yO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIHNlY3Rpb24ge1xuICAgIG1hcmdpbjogYXV0bztcblxuICAgIC5jYXJkLWxpc3QtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgfVxufVxuIiwiJGRhcmtncmV5LTA6IHJnYigxOCwgMTcsIDE5KTtcbiRkYXJrZ3JleS0xOiByZ2IoMzAsIDI5LCAzMSk7XG4kZGFya2dyZXktMjogcmdiKDQ1LCA0NCwgNDYpO1xuJGRhcmtncmV5LTM6IHJnYig5MCwgODksIDkxKTtcbiRncmV5OiByZ2IoMTIwLCAxMTksIDEyMSk7XG4kbGlnaHRncmV5LTM6IHJnYigxOTYsIDE5NSwgMTk3KTtcbiRsaWdodGdyZXktMjogcmdiKDIxMSwgMjEwLCAyMTIpO1xuJGxpZ2h0Z3JleS0xOiByZ2IoMjI2LCAyMjUsIDIyNyk7XG4kbGlnaHRncmV5LTA6IHJnYigyNDEsIDI0MCwgMjQyKTtcbiRhbG1vc3R3aGl0ZTogcmdiKDI1MywgMjUzLCAyNTMpO1xuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cbiRibGFjay1saWdodGVyOiByZ2IoMzgsIDM3LCAzOSk7XG4kYmxhY2s6IHJnYig0MSwgNDAsIDQyKTtcbiRibGFjay1kYXJrZXI6IHJnYig0NCwgNDMsIDQ1KTtcblxuJGluZGlnby1saWdodGVyOiAjOWZhOGRhO1xuJGluZGlnbzogIzVjNmJjMDtcbiRpbmRpZ28tZGFya2VyOiAjNDE1MGE4O1xuXG4kZGFya25hdnk6ICMxNjI0NDc7XG4kcGluazogI2U0M2Y1YTtcbiRsaWdodG5hdnk6ICMyNDI2Mjk7XG4kbmF2eWJsYWNrOiAjMWIxYjJmO1xuJG9saXZlOiAjNWM3YTFlO1xuXG4kc3RhY2tvdmVyZmxvdy1icmFuZC1jb2xvcjogI2Y0ODAyNDtcbiRnZXQtcG9ja2V0LWJyYW5kLWNvbG9yOiAjZWY0MDU2O1xuXG4kcHJpbWFyeS1jb2xvcjogJGluZGlnbztcbiRzZWNvbmRhcnktY29sb3I6ICRpbmRpZ28tbGlnaHRlcjtcblxuJGJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiR1c2VyLXBhbmVsLWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiRjb250cm9sLXBhbmVsLWJnLWNvbG9yOiAkYmxhY2s7XG4kY29udGVudC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1tYW5hZ2VtZW50LWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiIsIm1haW4ge1xuICBiYWNrZ3JvdW5kOiAjMjYyNTI3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxubWFpbiBzZWN0aW9uIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxubWFpbiBzZWN0aW9uIC5jYXJkLWxpc3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */");

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
/* harmony import */ var src_app_services_pocket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/pocket.service */ "./src/app/services/pocket.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");









let UserManagementPanelComponent = class UserManagementPanelComponent {
    constructor(router, route, store, userService, pocketService) {
        this.router = router;
        this.route = route;
        this.store = store;
        this.userService = userService;
        this.pocketService = pocketService;
        this.hasUserLoggedIn = false;
        this.hasUserConnectedWithPocket = false;
    }
    ngOnInit() {
        this.userAuthSubscription = this.store
            .select((state) => Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_5__["selectUserAuth"])(state))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((userAuth) => {
            if (userAuth && userAuth.email) {
                this.hasUserLoggedIn = true;
            }
        }))
            .subscribe();
        this.userSubscription = this.store
            .select((state) => Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_5__["selectUser"])(state))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((user) => {
            if (user && user.pocketAccessToken) {
                this.hasUserConnectedWithPocket = true;
            }
        }))
            .subscribe();
        this.pocketConnectionSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])(this.route.paramMap, this.store.select((state) => Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_5__["selectUserAuth"])(state)))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([params, userAuth]) => {
            const requestToken = params.get("pocket_request_token");
            if (requestToken) {
                this.pocketService.authorize(userAuth.email, requestToken);
            }
        }))
            .subscribe();
    }
    ngOnDestroy() {
        if (this.userAuthSubscription) {
            this.userAuthSubscription.unsubscribe();
        }
        if (this.userSubscription) {
            this.userSubscription.unsubscribe();
        }
        if (this.pocketConnectionSubscription) {
            this.pocketConnectionSubscription.unsubscribe();
        }
    }
    onRegisterClicked() {
        this.router.navigate(["/user/register"]);
    }
    onLoginClicked() {
        this.router.navigate(["/user/login"]);
    }
    onConnectToPocketClicked() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.pocketService.redirectToPocket();
        });
    }
    onLogoutClicked() {
        this.userService.logoutUser();
    }
    onManageSubscriptionClicked() {
        this.router.navigate(["/subscription"]);
    }
};
UserManagementPanelComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_services_pocket_service__WEBPACK_IMPORTED_MODULE_7__["PocketService"] }
];
UserManagementPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "user-management-panel",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-management-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/user-management-panel.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-management-panel.component.scss */ "./src/app/components/dashboard/user-management-panel/user-management-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_services_pocket_service__WEBPACK_IMPORTED_MODULE_7__["PocketService"]])
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
/* harmony default export */ __webpack_exports__["default"] = ("main {\n  margin: 0 0 20px 0;\n}\nmain > div {\n  margin: auto;\n  padding: 5px 0 5px 0;\n  width: 90%;\n}\nmain > .answer-content {\n  padding-bottom: 30px;\n}\nmain > .answer-content ::ng-deep p {\n  color: #121113;\n  margin-top: 10px;\n}\nmain > .answer-content ::ng-deep a {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\nmain > .answer-content ::ng-deep pre {\n  white-space: pre-wrap !important;\n}\nmain > .answer-content ::ng-deep pre code {\n  color: #9fa8da;\n  display: inline-block;\n  overflow-x: auto;\n  white-space: pre-line;\n  width: 100%;\n}\nmain > .answer-content ::ng-deep img {\n  width: 100%;\n}\nmain > .anwer-meta {\n  display: flex;\n}\nmain > .anwer-meta > .division {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\nmain > .answer-status {\n  color: #121113;\n  display: flex;\n  font-size: 14px;\n}\nmain > .answer-status > div {\n  margin-right: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvYW5zd2VyLXNlY3Rpb24vYW5zd2VyLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Fuc3dlci1zZWN0aW9uL2Fuc3dlci1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2ZueC9HaXRSZXBvcy9mbngtY29kZS1kYWlseS9jbGllbnQvc3JjL2FwcC9zdHlsZXMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQ0RGO0FER0U7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDREo7QURJRTtFQUNFLG9CQUFBO0FDRko7QURLTTtFQUNFLGNFaEJLO0VGaUJMLGdCQUFBO0FDSFI7QURNTTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNKUjtBRE9NO0VBQ0UsZ0NBQUE7QUNMUjtBRE9RO0VBQ0UsY0VmTztFRmdCUCxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDTFY7QURTTTtFQUNFLFdBQUE7QUNQUjtBRFlFO0VBQ0UsYUFBQTtBQ1ZKO0FEWUk7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FDVk47QURjRTtFQUNFLGNFdkRTO0VGd0RULGFBQUE7RUFDQSxlQUFBO0FDWko7QURjSTtFQUNFLGtCQUFBO0FDWk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9hbnN3ZXItc2VjdGlvbi9hbnN3ZXItc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3NcIjtcblxubWFpbiB7XG4gIG1hcmdpbjogMCAwIDIwcHggMDtcblxuICA+IGRpdiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDVweCAwIDVweCAwO1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICA+IC5hbnN3ZXItY29udGVudCB7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG5cbiAgICA6Om5nLWRlZXAge1xuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiAkZGFya2dyZXktMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBwcmUge1xuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcblxuICAgICAgICBjb2RlIHtcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgPiAuYW53ZXItbWV0YSB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgID4gLmRpdmlzaW9uIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgIH1cbiAgfVxuXG4gID4gLmFuc3dlci1zdGF0dXMge1xuICAgIGNvbG9yOiAkZGFya2dyZXktMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgID4gZGl2IHtcbiAgICAgIG1hcmdpbi1yaWdodDogMjFweDtcbiAgICB9XG4gIH1cbn1cbiIsIm1haW4ge1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG59XG5tYWluID4gZGl2IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiA1cHggMCA1cHggMDtcbiAgd2lkdGg6IDkwJTtcbn1cbm1haW4gPiAuYW5zd2VyLWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbm1haW4gPiAuYW5zd2VyLWNvbnRlbnQgOjpuZy1kZWVwIHAge1xuICBjb2xvcjogIzEyMTExMztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbm1haW4gPiAuYW5zd2VyLWNvbnRlbnQgOjpuZy1kZWVwIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTAwJTtcbn1cbm1haW4gPiAuYW5zd2VyLWNvbnRlbnQgOjpuZy1kZWVwIHByZSB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xufVxubWFpbiA+IC5hbnN3ZXItY29udGVudCA6Om5nLWRlZXAgcHJlIGNvZGUge1xuICBjb2xvcjogIzlmYThkYTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIHdpZHRoOiAxMDAlO1xufVxubWFpbiA+IC5hbnN3ZXItY29udGVudCA6Om5nLWRlZXAgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5tYWluID4gLmFud2VyLW1ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xufVxubWFpbiA+IC5hbndlci1tZXRhID4gLmRpdmlzaW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbn1cbm1haW4gPiAuYW5zd2VyLXN0YXR1cyB7XG4gIGNvbG9yOiAjMTIxMTEzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5tYWluID4gLmFuc3dlci1zdGF0dXMgPiBkaXYge1xuICBtYXJnaW4tcmlnaHQ6IDIxcHg7XG59IiwiJGRhcmtncmV5LTA6IHJnYigxOCwgMTcsIDE5KTtcbiRkYXJrZ3JleS0xOiByZ2IoMzAsIDI5LCAzMSk7XG4kZGFya2dyZXktMjogcmdiKDQ1LCA0NCwgNDYpO1xuJGRhcmtncmV5LTM6IHJnYig5MCwgODksIDkxKTtcbiRncmV5OiByZ2IoMTIwLCAxMTksIDEyMSk7XG4kbGlnaHRncmV5LTM6IHJnYigxOTYsIDE5NSwgMTk3KTtcbiRsaWdodGdyZXktMjogcmdiKDIxMSwgMjEwLCAyMTIpO1xuJGxpZ2h0Z3JleS0xOiByZ2IoMjI2LCAyMjUsIDIyNyk7XG4kbGlnaHRncmV5LTA6IHJnYigyNDEsIDI0MCwgMjQyKTtcbiRhbG1vc3R3aGl0ZTogcmdiKDI1MywgMjUzLCAyNTMpO1xuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cbiRibGFjay1saWdodGVyOiByZ2IoMzgsIDM3LCAzOSk7XG4kYmxhY2s6IHJnYig0MSwgNDAsIDQyKTtcbiRibGFjay1kYXJrZXI6IHJnYig0NCwgNDMsIDQ1KTtcblxuJGluZGlnby1saWdodGVyOiAjOWZhOGRhO1xuJGluZGlnbzogIzVjNmJjMDtcbiRpbmRpZ28tZGFya2VyOiAjNDE1MGE4O1xuXG4kZGFya25hdnk6ICMxNjI0NDc7XG4kcGluazogI2U0M2Y1YTtcbiRsaWdodG5hdnk6ICMyNDI2Mjk7XG4kbmF2eWJsYWNrOiAjMWIxYjJmO1xuJG9saXZlOiAjNWM3YTFlO1xuXG4kc3RhY2tvdmVyZmxvdy1icmFuZC1jb2xvcjogI2Y0ODAyNDtcbiRnZXQtcG9ja2V0LWJyYW5kLWNvbG9yOiAjZWY0MDU2O1xuXG4kcHJpbWFyeS1jb2xvcjogJGluZGlnbztcbiRzZWNvbmRhcnktY29sb3I6ICRpbmRpZ28tbGlnaHRlcjtcblxuJGJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiR1c2VyLXBhbmVsLWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiRjb250cm9sLXBhbmVsLWJnLWNvbG9yOiAkYmxhY2s7XG4kY29udGVudC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1tYW5hZ2VtZW50LWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&family=Mulish:wght@400;500;600&display=swap\");\nmain > div {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\nmain > div article {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n}\nmain > div article img {\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n}\nmain > div article:first-child h4 {\n  color: #262527;\n  font-family: \"Fira Code\";\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0 30px 0 10px;\n}\nmain > div article:nth-child(2) h4 {\n  font-family: \"Fira Code\";\n  margin: 0 10px 0 10px;\n}\nmain > div article:nth-child(2) fa-icon {\n  margin-right: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1jb2RlLWRhaWx5L2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3F1ZXN0aW9uLWJhZGdlL3F1ZXN0aW9uLWJhZGdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9xdWVzdGlvbi1iYWRnZS9xdWVzdGlvbi1iYWRnZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGtJQUFBO0FDR1I7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDREY7QURHRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDREo7QURHSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNETjtBREtNO0VBQ0UsY0VUUTtFRlVSLHdCRG5CRztFQ29CSCxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0hSO0FEUU07RUFDRSx3QkQ1Qkc7RUM2QkgscUJBQUE7QUNOUjtBRFNNO0VBQ0UsaUJBQUE7QUNQUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3F1ZXN0aW9uLWJhZGdlL3F1ZXN0aW9uLWJhZGdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErQ29kZTp3Z2h0QDMwMDs0MDA7NTAwOzYwMCZmYW1pbHk9TXVsaXNoOndnaHRANDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwXCIpO1xuXG4kbWFpbmZvbnQ6IFwiTXVsaXNoXCI7XG4kY29kZWZvbnQ6IFwiRmlyYSBDb2RlXCI7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2ZvbnRzLnNjc3NcIjtcblxubWFpbiA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGFydGljbGUge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgaW1nIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgIH1cblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgaDQge1xuICAgICAgICBjb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkY29kZWZvbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luOiAwIDMwcHggMCAxMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgIGg0IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRjb2RlZm9udDtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xuICAgICAgfVxuXG4gICAgICBmYS1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStDb2RlOndnaHRAMzAwOzQwMDs1MDA7NjAwJmZhbWlseT1NdWxpc2g6d2dodEA0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXBcIik7XG5tYWluID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG59XG5tYWluID4gZGl2IGFydGljbGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxubWFpbiA+IGRpdiBhcnRpY2xlIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbn1cbm1haW4gPiBkaXYgYXJ0aWNsZTpmaXJzdC1jaGlsZCBoNCB7XG4gIGNvbG9yOiAjMjYyNTI3O1xuICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDAgMzBweCAwIDEwcHg7XG59XG5tYWluID4gZGl2IGFydGljbGU6bnRoLWNoaWxkKDIpIGg0IHtcbiAgZm9udC1mYW1pbHk6IFwiRmlyYSBDb2RlXCI7XG4gIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcbn1cbm1haW4gPiBkaXYgYXJ0aWNsZTpudGgtY2hpbGQoMikgZmEtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufSIsIiRkYXJrZ3JleS0wOiByZ2IoMTgsIDE3LCAxOSk7XG4kZGFya2dyZXktMTogcmdiKDMwLCAyOSwgMzEpO1xuJGRhcmtncmV5LTI6IHJnYig0NSwgNDQsIDQ2KTtcbiRkYXJrZ3JleS0zOiByZ2IoOTAsIDg5LCA5MSk7XG4kZ3JleTogcmdiKDEyMCwgMTE5LCAxMjEpO1xuJGxpZ2h0Z3JleS0zOiByZ2IoMTk2LCAxOTUsIDE5Nyk7XG4kbGlnaHRncmV5LTI6IHJnYigyMTEsIDIxMCwgMjEyKTtcbiRsaWdodGdyZXktMTogcmdiKDIyNiwgMjI1LCAyMjcpO1xuJGxpZ2h0Z3JleS0wOiByZ2IoMjQxLCAyNDAsIDI0Mik7XG4kYWxtb3N0d2hpdGU6IHJnYigyNTMsIDI1MywgMjUzKTtcbiR3aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4kYmxhY2stbGlnaHRlcjogcmdiKDM4LCAzNywgMzkpO1xuJGJsYWNrOiByZ2IoNDEsIDQwLCA0Mik7XG4kYmxhY2stZGFya2VyOiByZ2IoNDQsIDQzLCA0NSk7XG5cbiRpbmRpZ28tbGlnaHRlcjogIzlmYThkYTtcbiRpbmRpZ286ICM1YzZiYzA7XG4kaW5kaWdvLWRhcmtlcjogIzQxNTBhODtcblxuJGRhcmtuYXZ5OiAjMTYyNDQ3O1xuJHBpbms6ICNlNDNmNWE7XG4kbGlnaHRuYXZ5OiAjMjQyNjI5O1xuJG5hdnlibGFjazogIzFiMWIyZjtcbiRvbGl2ZTogIzVjN2ExZTtcblxuJHN0YWNrb3ZlcmZsb3ctYnJhbmQtY29sb3I6ICNmNDgwMjQ7XG4kZ2V0LXBvY2tldC1icmFuZC1jb2xvcjogI2VmNDA1NjtcblxuJHByaW1hcnktY29sb3I6ICRpbmRpZ287XG4kc2Vjb25kYXJ5LWNvbG9yOiAkaW5kaWdvLWxpZ2h0ZXI7XG5cbiRiZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kY29udHJvbC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrO1xuJGNvbnRlbnQtcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItbWFuYWdlbWVudC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4iXX0= */");

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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers */ "./src/app/helpers.ts");





let QuestionBadgeComponent = class QuestionBadgeComponent {
    constructor() {
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEye"];
        this.faCommentDots = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCommentDots"];
        this.faPenSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPenSquare"];
        this.faStackOverflow = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faStackOverflow"];
        this.faGetPocket = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGetPocket"];
    }
    ngOnInit() {
        this.ownerName = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["parseHtmlEntities"])(this.owner.display_name);
        this.ownerProfileImageUrl = this.owner.profile_image;
    }
    get profileImageUrl() {
        return !this.ownerProfileImageUrl
            ? "../../../../assets/default-user.png"
            : this.ownerProfileImageUrl;
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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 800px;\n}\n:host main {\n  width: 100%;\n}\n:host main ::ng-deep .card.clickable:hover {\n  box-shadow: 0 4px 0 0 #5c6bc0;\n}\n:host main .card {\n  background: white;\n  box-shadow: 0 4px 0 0 #fdfdfd;\n  border-radius: 3px;\n  border-width: 1.5px;\n  border-color: white;\n  opacity: 0.75;\n}\n:host main .card .card-header {\n  border: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: auto;\n  padding: 10px 0;\n  width: 95%;\n  word-wrap: break-word;\n}\n:host main .card .card-header > article {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n:host main .card .card-header > article fa-icon {\n  color: #787779;\n  cursor: pointer;\n  font-size: 16px;\n  flex-shrink: 0;\n  margin: 8px 4px 8px 28px;\n  height: 28px !important;\n  line-height: 28px;\n}\n:host main .card .card-header > article fa-icon:hover {\n  color: #5c6bc0;\n}\n:host main .card .card-header question-badge {\n  padding: 15px 0 15px 0;\n}\n:host main .card .card-header .info-buttons {\n  display: flex;\n  padding: 10px 0 10px 0;\n}\n:host main .card .card-header .info-buttons > article:nth-child(1) {\n  display: flex;\n  gap: 10px;\n}\n:host main .card .card-header .info-buttons > article:nth-child(2) {\n  margin-left: auto;\n}\n:host main .card .card-header .info-buttons > article:nth-child(2) > fa-icon {\n  color: #787779;\n  cursor: pointer;\n  font-size: 24px;\n  margin-left: 15px;\n}\n:host main .card .card-header .info-buttons > article:nth-child(2) .stackoverflow-icon:hover {\n  color: #f48024;\n}\n:host main .card .card-header .info-buttons > article:nth-child(2) .getpocket-icon:hover {\n  color: #ef4056;\n}\n:host main .card hr {\n  border: 2px solid #2d2c2e;\n  box-sizing: border-box;\n  margin: 5px auto 5px auto;\n  width: 97.5%;\n}\n:host main .card .card-body {\n  margin: auto auto 3rem auto;\n  width: 92.5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcXVlc3Rpb24tY2FyZC9xdWVzdGlvbi1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9xdWVzdGlvbi1jYXJkL3F1ZXN0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1jb2RlLWRhaWx5L2NsaWVudC9zcmMvYXBwL3N0eWxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7QUNERjtBREdFO0VBQ0UsV0FBQTtBQ0RKO0FESU07RUFDRSw2QkFBQTtBQ0ZSO0FETUk7RUFDRSxpQkVMRTtFRk1GLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CRVRFO0VGVUYsYUFBQTtBQ0pOO0FETU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQ0pSO0FETVE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0pWO0FETVU7RUFDRSxjRWxDTDtFRm1DSyxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNKWjtBRE1ZO0VBQ0UsY0U5Qkw7QUQwQlQ7QURTUTtFQUNFLHNCQUFBO0FDUFY7QURVUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ1JWO0FEV1k7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQ1RkO0FEWVk7RUFDRSxpQkFBQTtBQ1ZkO0FEWWM7RUFDRSxjRWxFVDtFRm1FUyxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDVmhCO0FEYWM7RUFDRSxjRW5EWTtBRHdDNUI7QURjYztFQUNFLGNFdERTO0FEMEN6QjtBRG1CTTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNqQlI7QURvQk07RUFDRSwyQkFBQTtFQUNBLFlBQUE7QUNsQlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9xdWVzdGlvbi1jYXJkL3F1ZXN0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDgwMHB4O1xuXG4gIG1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIC5jYXJkLmNsaWNrYWJsZTpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDAgMCAkaW5kaWdvO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDAgMCAkYWxtb3N0d2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBib3JkZXItd2lkdGg6IDEuNXB4O1xuICAgICAgYm9yZGVyLWNvbG9yOiAkd2hpdGU7XG4gICAgICBvcGFjaXR5OiAwLjc1O1xuXG4gICAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICAgICAgICA+IGFydGljbGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICBmYS1pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JleTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiA4cHggNHB4IDhweCAyOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAkaW5kaWdvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXN0aW9uLWJhZGdlIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDAgMTVweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZm8tYnV0dG9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xuXG4gICAgICAgICAgPiBhcnRpY2xlIHtcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuXG4gICAgICAgICAgICAgID4gZmEtaWNvbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmV5O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuc3RhY2tvdmVyZmxvdy1pY29uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHN0YWNrb3ZlcmZsb3ctYnJhbmQtY29sb3I7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuZ2V0cG9ja2V0LWljb246aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ2V0LXBvY2tldC1icmFuZC1jb2xvcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBociB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRkYXJrZ3JleS0yO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtYXJnaW46IDVweCBhdXRvIDVweCBhdXRvO1xuICAgICAgICB3aWR0aDogOTcuNSU7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkLWJvZHkge1xuICAgICAgICBtYXJnaW46IGF1dG8gYXV0byAzcmVtIGF1dG87XG4gICAgICAgIHdpZHRoOiA5Mi41JTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgd2lkdGg6IDgwMHB4O1xufVxuOmhvc3QgbWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWFpbiA6Om5nLWRlZXAgLmNhcmQuY2xpY2thYmxlOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAwICM1YzZiYzA7XG59XG46aG9zdCBtYWluIC5jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDAgMCAjZmRmZGZkO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci13aWR0aDogMS41cHg7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNzU7XG59XG46aG9zdCBtYWluIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgd2lkdGg6IDk1JTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuOmhvc3QgbWFpbiAuY2FyZCAuY2FyZC1oZWFkZXIgPiBhcnRpY2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgbWFpbiAuY2FyZCAuY2FyZC1oZWFkZXIgPiBhcnRpY2xlIGZhLWljb24ge1xuICBjb2xvcjogIzc4Nzc3OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW46IDhweCA0cHggOHB4IDI4cHg7XG4gIGhlaWdodDogMjhweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbjpob3N0IG1haW4gLmNhcmQgLmNhcmQtaGVhZGVyID4gYXJ0aWNsZSBmYS1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICM1YzZiYzA7XG59XG46aG9zdCBtYWluIC5jYXJkIC5jYXJkLWhlYWRlciBxdWVzdGlvbi1iYWRnZSB7XG4gIHBhZGRpbmc6IDE1cHggMCAxNXB4IDA7XG59XG46aG9zdCBtYWluIC5jYXJkIC5jYXJkLWhlYWRlciAuaW5mby1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbn1cbjpob3N0IG1haW4gLmNhcmQgLmNhcmQtaGVhZGVyIC5pbmZvLWJ1dHRvbnMgPiBhcnRpY2xlOm50aC1jaGlsZCgxKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbn1cbjpob3N0IG1haW4gLmNhcmQgLmNhcmQtaGVhZGVyIC5pbmZvLWJ1dHRvbnMgPiBhcnRpY2xlOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuOmhvc3QgbWFpbiAuY2FyZCAuY2FyZC1oZWFkZXIgLmluZm8tYnV0dG9ucyA+IGFydGljbGU6bnRoLWNoaWxkKDIpID4gZmEtaWNvbiB7XG4gIGNvbG9yOiAjNzg3Nzc5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG46aG9zdCBtYWluIC5jYXJkIC5jYXJkLWhlYWRlciAuaW5mby1idXR0b25zID4gYXJ0aWNsZTpudGgtY2hpbGQoMikgLnN0YWNrb3ZlcmZsb3ctaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjZjQ4MDI0O1xufVxuOmhvc3QgbWFpbiAuY2FyZCAuY2FyZC1oZWFkZXIgLmluZm8tYnV0dG9ucyA+IGFydGljbGU6bnRoLWNoaWxkKDIpIC5nZXRwb2NrZXQtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjZWY0MDU2O1xufVxuOmhvc3QgbWFpbiAuY2FyZCBociB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyZDJjMmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogNXB4IGF1dG8gNXB4IGF1dG87XG4gIHdpZHRoOiA5Ny41JTtcbn1cbjpob3N0IG1haW4gLmNhcmQgLmNhcmQtYm9keSB7XG4gIG1hcmdpbjogYXV0byBhdXRvIDNyZW0gYXV0bztcbiAgd2lkdGg6IDkyLjUlO1xufSIsIiRkYXJrZ3JleS0wOiByZ2IoMTgsIDE3LCAxOSk7XG4kZGFya2dyZXktMTogcmdiKDMwLCAyOSwgMzEpO1xuJGRhcmtncmV5LTI6IHJnYig0NSwgNDQsIDQ2KTtcbiRkYXJrZ3JleS0zOiByZ2IoOTAsIDg5LCA5MSk7XG4kZ3JleTogcmdiKDEyMCwgMTE5LCAxMjEpO1xuJGxpZ2h0Z3JleS0zOiByZ2IoMTk2LCAxOTUsIDE5Nyk7XG4kbGlnaHRncmV5LTI6IHJnYigyMTEsIDIxMCwgMjEyKTtcbiRsaWdodGdyZXktMTogcmdiKDIyNiwgMjI1LCAyMjcpO1xuJGxpZ2h0Z3JleS0wOiByZ2IoMjQxLCAyNDAsIDI0Mik7XG4kYWxtb3N0d2hpdGU6IHJnYigyNTMsIDI1MywgMjUzKTtcbiR3aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4kYmxhY2stbGlnaHRlcjogcmdiKDM4LCAzNywgMzkpO1xuJGJsYWNrOiByZ2IoNDEsIDQwLCA0Mik7XG4kYmxhY2stZGFya2VyOiByZ2IoNDQsIDQzLCA0NSk7XG5cbiRpbmRpZ28tbGlnaHRlcjogIzlmYThkYTtcbiRpbmRpZ286ICM1YzZiYzA7XG4kaW5kaWdvLWRhcmtlcjogIzQxNTBhODtcblxuJGRhcmtuYXZ5OiAjMTYyNDQ3O1xuJHBpbms6ICNlNDNmNWE7XG4kbGlnaHRuYXZ5OiAjMjQyNjI5O1xuJG5hdnlibGFjazogIzFiMWIyZjtcbiRvbGl2ZTogIzVjN2ExZTtcblxuJHN0YWNrb3ZlcmZsb3ctYnJhbmQtY29sb3I6ICNmNDgwMjQ7XG4kZ2V0LXBvY2tldC1icmFuZC1jb2xvcjogI2VmNDA1NjtcblxuJHByaW1hcnktY29sb3I6ICRpbmRpZ287XG4kc2Vjb25kYXJ5LWNvbG9yOiAkaW5kaWdvLWxpZ2h0ZXI7XG5cbiRiZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kY29udHJvbC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrO1xuJGNvbnRlbnQtcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItbWFuYWdlbWVudC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4iXX0= */");

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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");






let QuestionCardComponent = class QuestionCardComponent {
    constructor() {
        this.selectedTagNames = new Set();
        this.onTagSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closeIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimes"];
        this.pocketIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faGetPocket"];
        this.stackoverflowIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faStackOverflow"];
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
        this.link = this.question.link;
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
    onStackOverflowIconClicked(event) {
        event.stopPropagation();
        window.open(this.link, "_blank");
    }
    onGetPocketIconClicked(event) {
        event.stopPropagation();
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
    })
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
/* harmony default export */ __webpack_exports__["default"] = ("main .markdown-wrapper ::ng-deep h1,\nmain .markdown-wrapper ::ng-deep h2,\nmain .markdown-wrapper ::ng-deep h3,\nmain .markdown-wrapper ::ng-deep h4,\nmain .markdown-wrapper ::ng-deep h5 {\n  color: #121113;\n  font-weight: 500;\n  margin-top: 15px;\n}\nmain .markdown-wrapper ::ng-deep p {\n  color: #121113;\n}\nmain .markdown-wrapper ::ng-deep li {\n  color: #121113;\n}\nmain .markdown-wrapper ::ng-deep pre {\n  white-space: pre-wrap !important;\n}\nmain .markdown-wrapper ::ng-deep pre code {\n  display: inline-block;\n  overflow-x: auto;\n  white-space: pre-line;\n  width: 100%;\n}\nmain .markdown-wrapper ::ng-deep img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcXVlc3Rpb24tY29udGVudC9xdWVzdGlvbi1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2ZueC9HaXRSZXBvcy9mbngtY29kZS1kYWlseS9jbGllbnQvc3JjL2FwcC9zdHlsZXMvY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3F1ZXN0aW9uLWNvbnRlbnQvcXVlc3Rpb24tY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTs7Ozs7RUFLRSxjQ1RPO0VEVVAsZ0JBQUE7RUFDQSxnQkFBQTtBRUhOO0FGTUk7RUFDRSxjQ2ZPO0FDV2I7QUZPSTtFQUNFLGNDbkJPO0FDY2I7QUZRSTtFQUNFLGdDQUFBO0FFTk47QUZRTTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUVOUjtBRlVJO0VBQ0UsV0FBQTtBRVJOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcXVlc3Rpb24tY29udGVudC9xdWVzdGlvbi1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzc1wiO1xuXG5tYWluIHtcbiAgLm1hcmtkb3duLXdyYXBwZXIgOjpuZy1kZWVwIHtcbiAgICBoMSxcbiAgICBoMixcbiAgICBoMyxcbiAgICBoNCxcbiAgICBoNSB7XG4gICAgICBjb2xvcjogJGRhcmtncmV5LTA7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGNvbG9yOiAkZGFya2dyZXktMDtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICBjb2xvcjogJGRhcmtncmV5LTA7XG4gICAgfVxuXG4gICAgcHJlIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xuXG4gICAgICBjb2RlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cbiIsIiRkYXJrZ3JleS0wOiByZ2IoMTgsIDE3LCAxOSk7XG4kZGFya2dyZXktMTogcmdiKDMwLCAyOSwgMzEpO1xuJGRhcmtncmV5LTI6IHJnYig0NSwgNDQsIDQ2KTtcbiRkYXJrZ3JleS0zOiByZ2IoOTAsIDg5LCA5MSk7XG4kZ3JleTogcmdiKDEyMCwgMTE5LCAxMjEpO1xuJGxpZ2h0Z3JleS0zOiByZ2IoMTk2LCAxOTUsIDE5Nyk7XG4kbGlnaHRncmV5LTI6IHJnYigyMTEsIDIxMCwgMjEyKTtcbiRsaWdodGdyZXktMTogcmdiKDIyNiwgMjI1LCAyMjcpO1xuJGxpZ2h0Z3JleS0wOiByZ2IoMjQxLCAyNDAsIDI0Mik7XG4kYWxtb3N0d2hpdGU6IHJnYigyNTMsIDI1MywgMjUzKTtcbiR3aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4kYmxhY2stbGlnaHRlcjogcmdiKDM4LCAzNywgMzkpO1xuJGJsYWNrOiByZ2IoNDEsIDQwLCA0Mik7XG4kYmxhY2stZGFya2VyOiByZ2IoNDQsIDQzLCA0NSk7XG5cbiRpbmRpZ28tbGlnaHRlcjogIzlmYThkYTtcbiRpbmRpZ286ICM1YzZiYzA7XG4kaW5kaWdvLWRhcmtlcjogIzQxNTBhODtcblxuJGRhcmtuYXZ5OiAjMTYyNDQ3O1xuJHBpbms6ICNlNDNmNWE7XG4kbGlnaHRuYXZ5OiAjMjQyNjI5O1xuJG5hdnlibGFjazogIzFiMWIyZjtcbiRvbGl2ZTogIzVjN2ExZTtcblxuJHN0YWNrb3ZlcmZsb3ctYnJhbmQtY29sb3I6ICNmNDgwMjQ7XG4kZ2V0LXBvY2tldC1icmFuZC1jb2xvcjogI2VmNDA1NjtcblxuJHByaW1hcnktY29sb3I6ICRpbmRpZ287XG4kc2Vjb25kYXJ5LWNvbG9yOiAkaW5kaWdvLWxpZ2h0ZXI7XG5cbiRiZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kY29udHJvbC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrO1xuJGNvbnRlbnQtcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItbWFuYWdlbWVudC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4iLCJtYWluIC5tYXJrZG93bi13cmFwcGVyIDo6bmctZGVlcCBoMSxcbm1haW4gLm1hcmtkb3duLXdyYXBwZXIgOjpuZy1kZWVwIGgyLFxubWFpbiAubWFya2Rvd24td3JhcHBlciA6Om5nLWRlZXAgaDMsXG5tYWluIC5tYXJrZG93bi13cmFwcGVyIDo6bmctZGVlcCBoNCxcbm1haW4gLm1hcmtkb3duLXdyYXBwZXIgOjpuZy1kZWVwIGg1IHtcbiAgY29sb3I6ICMxMjExMTM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5tYWluIC5tYXJrZG93bi13cmFwcGVyIDo6bmctZGVlcCBwIHtcbiAgY29sb3I6ICMxMjExMTM7XG59XG5tYWluIC5tYXJrZG93bi13cmFwcGVyIDo6bmctZGVlcCBsaSB7XG4gIGNvbG9yOiAjMTIxMTEzO1xufVxubWFpbiAubWFya2Rvd24td3JhcHBlciA6Om5nLWRlZXAgcHJlIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XG59XG5tYWluIC5tYXJrZG93bi13cmFwcGVyIDo6bmctZGVlcCBwcmUgY29kZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICB3aWR0aDogMTAwJTtcbn1cbm1haW4gLm1hcmtkb3duLXdyYXBwZXIgOjpuZy1kZWVwIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

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
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers */ "./src/app/helpers.ts");




let QuestionContentComponent = class QuestionContentComponent {
    constructor(markdownService) {
        this.markdownService = markdownService;
    }
    ngOnInit() {
        this.markdownService.renderer.code = (code) => {
            const unescapedText = Object(src_app_helpers__WEBPACK_IMPORTED_MODULE_3__["parseHtmlEntities"])(code);
            return `<pre class="${this.languageName} language-none"><code class="${this.languageName} language-none">${unescapedText}</code></pre>`;
        };
    }
    get languageName() {
        return this.language ? `language-${this.language}` : "";
    }
};
QuestionContentComponent.ctorParameters = () => [
    { type: ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuestionContentComponent.prototype, "language", void 0);
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
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownService"]])
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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 300px;\n}\n:host main {\n  width: 100%;\n}\n:host main .card {\n  background: white;\n  box-shadow: 0 4px 0 0 #fdfdfd;\n  border-radius: 3px;\n  border-width: 1.5px;\n  border-color: white;\n  opacity: 0.75;\n}\n:host main .card-header {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 50px 20px 5px 20px;\n}\n:host main .card-header h3 {\n  font-size: 16px;\n  font-weight: 400;\n}\n:host main .card-header clr-icon {\n  color: #787779;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2V0dGluZy1jYXJkL3NldHRpbmctY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2V0dGluZy1jYXJkL3NldHRpbmctY2FyZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtBQ0RGO0FER0U7RUFDRSxXQUFBO0FDREo7QURHSTtFQUNFLGlCRUNFO0VGQUYsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJFSEU7RUZJRixhQUFBO0FDRE47QURJSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtBQ0ZOO0FESU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNGUjtBREtNO0VBQ0UsY0UxQkQ7QUR1QlAiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9zZXR0aW5nLWNhcmQvc2V0dGluZy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gIHdpZHRoOiAzMDBweDtcblxuICBtYWluIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDAgMCAkYWxtb3N0d2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBib3JkZXItd2lkdGg6IDEuNXB4O1xuICAgICAgYm9yZGVyLWNvbG9yOiAkd2hpdGU7XG4gICAgICBvcGFjaXR5OiAwLjc1O1xuICAgIH1cblxuICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiA1MHB4IDIwcHggNXB4IDIwcHg7XG5cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuXG4gICAgICBjbHItaWNvbiB7XG4gICAgICAgIGNvbG9yOiAkZ3JleTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuOmhvc3QgbWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWFpbiAuY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDRweCAwIDAgI2ZkZmRmZDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItd2lkdGg6IDEuNXB4O1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjc1O1xufVxuOmhvc3QgbWFpbiAuY2FyZC1oZWFkZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDUwcHggMjBweCA1cHggMjBweDtcbn1cbjpob3N0IG1haW4gLmNhcmQtaGVhZGVyIGgzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuOmhvc3QgbWFpbiAuY2FyZC1oZWFkZXIgY2xyLWljb24ge1xuICBjb2xvcjogIzc4Nzc3OTtcbn0iLCIkZGFya2dyZXktMDogcmdiKDE4LCAxNywgMTkpO1xuJGRhcmtncmV5LTE6IHJnYigzMCwgMjksIDMxKTtcbiRkYXJrZ3JleS0yOiByZ2IoNDUsIDQ0LCA0Nik7XG4kZGFya2dyZXktMzogcmdiKDkwLCA4OSwgOTEpO1xuJGdyZXk6IHJnYigxMjAsIDExOSwgMTIxKTtcbiRsaWdodGdyZXktMzogcmdiKDE5NiwgMTk1LCAxOTcpO1xuJGxpZ2h0Z3JleS0yOiByZ2IoMjExLCAyMTAsIDIxMik7XG4kbGlnaHRncmV5LTE6IHJnYigyMjYsIDIyNSwgMjI3KTtcbiRsaWdodGdyZXktMDogcmdiKDI0MSwgMjQwLCAyNDIpO1xuJGFsbW9zdHdoaXRlOiByZ2IoMjUzLCAyNTMsIDI1Myk7XG4kd2hpdGU6IHJnYigyNTUsIDI1NSwgMjU1KTtcblxuJGJsYWNrLWxpZ2h0ZXI6IHJnYigzOCwgMzcsIDM5KTtcbiRibGFjazogcmdiKDQxLCA0MCwgNDIpO1xuJGJsYWNrLWRhcmtlcjogcmdiKDQ0LCA0MywgNDUpO1xuXG4kaW5kaWdvLWxpZ2h0ZXI6ICM5ZmE4ZGE7XG4kaW5kaWdvOiAjNWM2YmMwO1xuJGluZGlnby1kYXJrZXI6ICM0MTUwYTg7XG5cbiRkYXJrbmF2eTogIzE2MjQ0NztcbiRwaW5rOiAjZTQzZjVhO1xuJGxpZ2h0bmF2eTogIzI0MjYyOTtcbiRuYXZ5YmxhY2s6ICMxYjFiMmY7XG4kb2xpdmU6ICM1YzdhMWU7XG5cbiRzdGFja292ZXJmbG93LWJyYW5kLWNvbG9yOiAjZjQ4MDI0O1xuJGdldC1wb2NrZXQtYnJhbmQtY29sb3I6ICNlZjQwNTY7XG5cbiRwcmltYXJ5LWNvbG9yOiAkaW5kaWdvO1xuJHNlY29uZGFyeS1jb2xvcjogJGluZGlnby1saWdodGVyO1xuXG4kYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJGNvbnRyb2wtcGFuZWwtYmctY29sb3I6ICRibGFjaztcbiRjb250ZW50LXBhbmVsLWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiR1c2VyLW1hbmFnZW1lbnQtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuIl19 */");

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

/***/ "./src/app/components/shared/simple-tag/simple-tag.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/simple-tag/simple-tag.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main div {\n  color: #9fa8da;\n  font-size: 16px;\n  font-style: italic;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2ltcGxlLXRhZy9zaW1wbGUtdGFnLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2ZueC9HaXRSZXBvcy9mbngtY29kZS1kYWlseS9jbGllbnQvc3JjL2FwcC9zdHlsZXMvY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NpbXBsZS10YWcvc2ltcGxlLXRhZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGNDWWE7RURYYixlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRUZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2ltcGxlLXRhZy9zaW1wbGUtdGFnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzc1wiO1xuXG5tYWluIHtcbiAgZGl2IHtcbiAgICBjb2xvcjogJGluZGlnby1saWdodGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuIiwiJGRhcmtncmV5LTA6IHJnYigxOCwgMTcsIDE5KTtcbiRkYXJrZ3JleS0xOiByZ2IoMzAsIDI5LCAzMSk7XG4kZGFya2dyZXktMjogcmdiKDQ1LCA0NCwgNDYpO1xuJGRhcmtncmV5LTM6IHJnYig5MCwgODksIDkxKTtcbiRncmV5OiByZ2IoMTIwLCAxMTksIDEyMSk7XG4kbGlnaHRncmV5LTM6IHJnYigxOTYsIDE5NSwgMTk3KTtcbiRsaWdodGdyZXktMjogcmdiKDIxMSwgMjEwLCAyMTIpO1xuJGxpZ2h0Z3JleS0xOiByZ2IoMjI2LCAyMjUsIDIyNyk7XG4kbGlnaHRncmV5LTA6IHJnYigyNDEsIDI0MCwgMjQyKTtcbiRhbG1vc3R3aGl0ZTogcmdiKDI1MywgMjUzLCAyNTMpO1xuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cbiRibGFjay1saWdodGVyOiByZ2IoMzgsIDM3LCAzOSk7XG4kYmxhY2s6IHJnYig0MSwgNDAsIDQyKTtcbiRibGFjay1kYXJrZXI6IHJnYig0NCwgNDMsIDQ1KTtcblxuJGluZGlnby1saWdodGVyOiAjOWZhOGRhO1xuJGluZGlnbzogIzVjNmJjMDtcbiRpbmRpZ28tZGFya2VyOiAjNDE1MGE4O1xuXG4kZGFya25hdnk6ICMxNjI0NDc7XG4kcGluazogI2U0M2Y1YTtcbiRsaWdodG5hdnk6ICMyNDI2Mjk7XG4kbmF2eWJsYWNrOiAjMWIxYjJmO1xuJG9saXZlOiAjNWM3YTFlO1xuXG4kc3RhY2tvdmVyZmxvdy1icmFuZC1jb2xvcjogI2Y0ODAyNDtcbiRnZXQtcG9ja2V0LWJyYW5kLWNvbG9yOiAjZWY0MDU2O1xuXG4kcHJpbWFyeS1jb2xvcjogJGluZGlnbztcbiRzZWNvbmRhcnktY29sb3I6ICRpbmRpZ28tbGlnaHRlcjtcblxuJGJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiR1c2VyLXBhbmVsLWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiRjb250cm9sLXBhbmVsLWJnLWNvbG9yOiAkYmxhY2s7XG4kY29udGVudC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1tYW5hZ2VtZW50LWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiIsIm1haW4gZGl2IHtcbiAgY29sb3I6ICM5ZmE4ZGE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/shared/simple-tag/simple-tag.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/shared/simple-tag/simple-tag.component.ts ***!
  \**********************************************************************/
/*! exports provided: SimpleTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleTagComponent", function() { return SimpleTagComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SimpleTagComponent = class SimpleTagComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SimpleTagComponent.prototype, "text", void 0);
SimpleTagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "simple-tag",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./simple-tag.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/simple-tag/simple-tag.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./simple-tag.component.scss */ "./src/app/components/shared/simple-tag/simple-tag.component.scss")).default]
    })
], SimpleTagComponent);



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
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! he */ "./node_modules/he/he.js");
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(he__WEBPACK_IMPORTED_MODULE_1__);


const parseHtmlEntities = (str) => {
    return he__WEBPACK_IMPORTED_MODULE_1__["decode"](str);
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

/***/ "./src/app/services/pocket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/pocket.service.ts ***!
  \********************************************/
/*! exports provided: PocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PocketService", function() { return PocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let PocketService = class PocketService {
    constructor(httpClient, document) {
        this.httpClient = httpClient;
        this.document = document;
    }
    getRequestToken() {
        return this.httpClient
            .get("api/pocket/request_token")
            .toPromise();
    }
    redirectToPocket() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const requestToken = yield this.getRequestToken();
            if (!requestToken || !requestToken.code) {
                return;
            }
            let url = new URL("http://getpocket.com/auth/authorize");
            url.searchParams.append("request_token", requestToken.code);
            url.searchParams.append("redirect_uri", `http://codedaily.info/user/pocket/${requestToken.code}`);
            this.document.location.href = url.toString();
        });
    }
    authorize(userEmail, requestToken) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append("email", userEmail);
        params = params.append("request_token", requestToken);
        return this.httpClient
            .get("api/pocket/authorize", { params })
            .toPromise();
    }
};
PocketService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
PocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        Document])
], PocketService);



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
            .get("/api/questions", {
            params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res["items"]));
    }
    getRandomQuestionsByTags(query) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append("tags", query.tags);
        params = params.append("sort", query.sort);
        params = params.append("pagesize", query.pagesize.toString());
        return this.httpClient
            .get("/api/questions/random", {
            params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res["items"]));
    }
    getDefaultTags() {
        return this.httpClient.get("/api/tags");
    }
    getPopularTags() {
        return this.httpClient.get("/api/tags/popular", {
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
        return this.httpClient.post("/api/users/user", getUserQuery);
    }
    getAllUsers() {
        return this.httpClient.get("/api/users");
    }
    registerUser(createUserDto) {
        return this.httpClient
            .post("/api/auth/register", createUserDto, {
            observe: "response",
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((value) => value));
    }
    loginUser(loginUserDto) {
        return this.httpClient.post("/api/auth/login", loginUserDto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((userAuth) => {
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
        return this.httpClient.post("/api/users/tags/add", addFavoriteTagDto);
    }
    removeFavoriteTagFromUser(tag, email) {
        const removeFavoriteTagDto = { email, tag };
        return this.httpClient.post("/api/users/tags/remove", removeFavoriteTagDto);
    }
    subscribeToTag(tag, email) {
        const suscribeToTagDto = { email, tag };
        return this.httpClient.post("/api/users/tags/subscribe", suscribeToTagDto);
    }
    unsubscribeToTag(tag, email) {
        const unsubscribeToTagDto = { email, tag };
        return this.httpClient.post("/api/users/tags/unsubscribe", unsubscribeToTagDto);
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
/*! exports provided: selectTag, unselectTag, fetchQuestions, fetchQuestionsSuccess, loginUser, logoutUser, fetchCurrentUser, fetchCurrentUserSuccess, addFavoriteTagToUser, removeFavoriteTagFromUser, subscribeToTag, unsubscribeToTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTag", function() { return selectTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unselectTag", function() { return unselectTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchQuestions", function() { return fetchQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchQuestionsSuccess", function() { return fetchQuestionsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCurrentUser", function() { return fetchCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCurrentUserSuccess", function() { return fetchCurrentUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFavoriteTagToUser", function() { return addFavoriteTagToUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFavoriteTagFromUser", function() { return removeFavoriteTagFromUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToTag", function() { return subscribeToTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsubscribeToTag", function() { return unsubscribeToTag; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const selectTag = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Select Tag", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const unselectTag = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Unselect Tag", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const fetchQuestions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Fetch Questions", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const fetchQuestionsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Fetch Questions Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const loginUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Log In User", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const logoutUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Log Out User");
const fetchCurrentUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Fetch Current User");
const fetchCurrentUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Fetch Current User Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const addFavoriteTagToUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Add Favorite Tag to User", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const removeFavoriteTagFromUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Remove Favorite Tag from User", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const subscribeToTag = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Subscribe to Tag", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const unsubscribeToTag = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Unsubscribe to Tag", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());


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
/* harmony import */ var _app_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.selectors */ "./src/app/state/app.selectors.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");












let AppEffects = class AppEffects {
    constructor(store, actions$, stackExchangeApiService, userService, router) {
        this.store = store;
        this.actions$ = actions$;
        this.stackExchangeApiService = stackExchangeApiService;
        this.userService = userService;
        this.router = router;
        this.fetchQuestions$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchQuestions"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((action) => {
            const query = {
                tags: action.tag,
                sort: _models_stackExchange_model__WEBPACK_IMPORTED_MODULE_7__["QuestionsSortBy"].Votes,
                pagesize: 10,
            };
            if (action.fetchRandom) {
                return this.stackExchangeApiService
                    .getRandomQuestionsByTags(query)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((questions) => _app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchQuestionsSuccess"]({ questions })));
            }
            return this.stackExchangeApiService
                .getQuestionsByTags(query)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((questions) => _app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchQuestionsSuccess"]({ questions })));
        }));
        this.AddFavoriteTagToUser = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["addFavoriteTagToUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store.select((state) => Object(_app_selectors__WEBPACK_IMPORTED_MODULE_8__["selectUserAuth"])(state))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(([action, userAuth]) => {
            const tag = action.tag;
            const email = userAuth.email;
            return this.userService
                .addFavoriteTagToUser(tag, email)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => _app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchCurrentUser"]()));
        }));
        this.RemoveFavoriteTagFromUser = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["removeFavoriteTagFromUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store.select((state) => Object(_app_selectors__WEBPACK_IMPORTED_MODULE_8__["selectUserAuth"])(state))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(([action, userAuth]) => {
            const tag = action.tag;
            const email = userAuth.email;
            return this.userService
                .removeFavoriteTagFromUser(tag, email)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => _app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchCurrentUser"]()));
        }));
        this.SubscribeToTag = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["subscribeToTag"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store.select((state) => Object(_app_selectors__WEBPACK_IMPORTED_MODULE_8__["selectUserAuth"])(state))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(([action, userAuth]) => {
            const tag = action.tag;
            const email = userAuth.email;
            return this.userService
                .subscribeToTag(tag, email)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => _app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchCurrentUser"]()));
        }));
        this.UnsubscribeToTag = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["unsubscribeToTag"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store.select((state) => Object(_app_selectors__WEBPACK_IMPORTED_MODULE_8__["selectUserAuth"])(state))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(([action, userAuth]) => {
            const tag = action.tag;
            const email = userAuth.email;
            return this.userService
                .unsubscribeToTag(tag, email)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => _app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchCurrentUser"]()));
        }));
        this.loginUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["loginUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => {
            this.router.navigate(["/dashboard"]);
            return [_app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchCurrentUser"]()];
        }));
        this.logoutUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["logoutUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => {
            this.router.navigate(["/dashboard"]);
            return rxjs__WEBPACK_IMPORTED_MODULE_11__["EMPTY"];
        }));
        this.fetchCurrentUserAuth$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchCurrentUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store.select((state) => Object(_app_selectors__WEBPACK_IMPORTED_MODULE_8__["selectUserAuth"])(state))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(([_, userAuth]) => {
            if (!userAuth || !userAuth.email) {
                return rxjs__WEBPACK_IMPORTED_MODULE_11__["EMPTY"];
            }
            const query = {
                email: userAuth.email,
            };
            return this.userService.getUser(query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
                return _app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchCurrentUserSuccess"]({ user });
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
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
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
], AppEffects.prototype, "SubscribeToTag", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppEffects.prototype, "UnsubscribeToTag", void 0);
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
        _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
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
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_3__["loginUser"], (state, { userAuth }) => (Object.assign({}, state, { userAuth }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_3__["logoutUser"], (state) => (Object.assign({}, state, { userAuth: null, user: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_3__["fetchCurrentUserSuccess"], (state, { user }) => (Object.assign({}, state, { user }))));


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

module.exports = __webpack_require__(/*! /Users/fnx/GitRepos/fnx-code-daily/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.cf2d56edbe2627bc1254.js.map