function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <dashboard></dashboard>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/content-panel/content-header/content-header.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/content-panel/content-header/content-header.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardContentPanelContentHeaderContentHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <div>\n    <article>\n      <h2>{{ title | uppercase }}</h2>\n    </article>\n\n    <article>\n      <fa-icon\n        [icon]=\"arrowLeftIcon\"\n        [class]=\"arrowLeftClass\"\n        (click)=\"onPaginationClicked()\"\n      ></fa-icon>\n      <span>Page {{ page }}</span>\n      <fa-icon\n        [icon]=\"arrowRightIcon\"\n        [class]=\"arrowRightClass\"\n        (click)=\"onPaginationClicked(true)\"\n      ></fa-icon>\n    </article>\n\n    <article>\n      <div #dropdown class=\"dropdown bottom-right\" [ngClass]=\"dropdownClass\">\n        <fa-icon\n          [icon]=\"dropdownIcon\"\n          (click)=\"onDropdownIconClicked()\"\n        ></fa-icon>\n\n        <div class=\"dropdown-menu\">\n          <div\n            class=\"dropdown-item\"\n            (click)=\"onDropdownOptionClicked()\"\n            [ngClass]=\"dropdownOptionClass('default')\"\n          >\n            🔥Trending questions of this week\n          </div>\n\n          <div\n            class=\"dropdown-item\"\n            (click)=\"onDropdownOptionClicked('random')\"\n            [ngClass]=\"dropdownOptionClass('random')\"\n          >\n            Random trending questions\n          </div>\n        </div>\n      </div>\n    </article>\n  </div>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/content-panel/content-panel.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/content-panel/content-panel.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardContentPanelContentPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <div class=\"content-header-container\">\n    <content-header\n      [userAuth]=\"userAuth$ | async\"\n      [tag]=\"currentTag$ | async\"\n      [page]=\"currentPage$ | async\"\n      [userFavoriteTags]=\"userFavoriteTags$ | async\"\n      [userSubscribedTags]=\"userSubscribedTags$ | async\"\n    >\n    </content-header>\n  </div>\n\n  <div class=\"card-list-container\">\n    <question-card\n      *ngFor=\"let question of questions$ | async\"\n      [userAuth]=\"userAuth$ | async\"\n      [question]=\"question\"\n      (onAddToPocket)=\"onAddToPocket($event)\"\n      [@fadeInOnEnter]\n      [@fadeOutOnLeave]\n    ></question-card>\n  </div>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/control-panel/control-panel.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/control-panel/control-panel.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardControlPanelControlPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <div>\n    <clr-tree>\n      <clr-tree-node [clrExpanded]=\"true\">\n        POPULAR TAGS\n        <clr-tree-node *ngFor=\"let tag of tags\" [ngClass]=\"getTreeNodeClass(tag)\" class=\"tag-node\">\n          <button class=\"clr-treenode-link\" (click)=\"onSelectTag(tag)\" [ngClass]=\"getTagClass(tag)\">\n            {{ tag | uppercase }}\n          </button>\n          <clr-icon shape=\"star\" (click)=\"onStarClicked(tag)\" [ngClass]=\"getStarIconClass(tag)\"></clr-icon>\n        </clr-tree-node>\n      </clr-tree-node>\n    </clr-tree>\n  </div>\n</main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <div class=\"flex-container\">\n    <navigation-panel [user]=\"userAuth$ | async\"></navigation-panel>\n\n    <control-panel\n      [user]=\"userAuth$ | async\"\n      [tags]=\"tags$ | async\"\n      [selectedTag]=\"selectedTag$ | async\"\n      [userFavoriteTags]=\"userFavoriteTags$ | async\"\n      [userSubscribedTags]=\"userSubscribedTags$ | async\"\n      (onTagSelected)=\"onTagSelected($event)\"\n    ></control-panel>\n\n    <router-outlet></router-outlet>\n  </div>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/navigation-panel/navigation-panel.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/navigation-panel/navigation-panel.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardNavigationPanelNavigationPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <div class=\"flex-container\">\n    <div class=\"flex-top\">\n      <fa-icon [icon]=\"githubIcon\" (click)=\"openGithubRepo()\"></fa-icon>\n    </div>\n\n    <div class=\"flex-mid\">Code Daily</div>\n\n    <div class=\"flex-bottom\">\n      <fa-icon\n        [icon]=\"hasUserLoggedIn ? userCheckedIcon : userIcon\"\n        (click)=\"navigateToUserManagement()\"\n      ></fa-icon>\n    </div>\n  </div>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/display-board/display-board.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/display-board/display-board.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardUserManagementPanelDisplayBoardDisplayBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <article>📅</article>\n      <article>{{ title | uppercase }}</article>\n      <article>🖥</article>\n    </div>\n\n    <div class=\"card-block\">\n      <p>\n        Code Daily is a web app aimed to enhance your experience of casually\n        browsing StackOverflow.\n      </p>\n\n      <p>\n        It offers:\n        <li>\n          A simple dashboard that organizes trending\n          <a href=\"https://stackoverflow.com/\" id=\"stackoverflow-link\"\n            >StackOverflow</a\n          >\n          questions based on tags\n        </li>\n        <li>\n          Seamless integration with\n          <a href=\"https://app.getpocket.com/\" id=\"pocket-link\">Pocket</a>: you\n          can add the question to your Pocket \"read-it-later\" list with just one\n          click 🖱️.\n        </li>\n        <li>More features to come (very likely 😊).</li>\n      </p>\n\n      <p></p>\n      <p>\n        Select your favorite programming language and see what's trending 🔥\n      </p>\n    </div>\n  </div>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/login/login.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/login/login.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardUserManagementPanelLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <div class=\"card\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n      <section class=\"title\">\n        <h3 class=\"welcome\">Login</h3>\n      </section>\n\n      <section class=\"login-group\">\n        <clr-input-container>\n          <label class=\"clr-sr-only\">Email</label>\n          <input\n            type=\"text\"\n            formControlName=\"email\"\n            clrInput\n            placeholder=\"Email\"\n          />\n        </clr-input-container>\n\n        <clr-password-container>\n          <label class=\"clr-sr-only\">Password</label>\n          <input\n            type=\"password\"\n            formControlName=\"password\"\n            clrPassword\n            placeholder=\"Password\"\n          />\n        </clr-password-container>\n      </section>\n\n      <section>\n        <div class=\"error active\">{{ text }}</div>\n      </section>\n\n      <section>\n        <button type=\"submit\" class=\"btn\">NEXT</button>\n      </section>\n    </form>\n  </div>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/registration/registration.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/registration/registration.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardUserManagementPanelRegistrationRegistrationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <div class=\"card\">\n    <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\">\n      <section class=\"title\">\n        <h3 class=\"welcome\">Register</h3>\n      </section>\n\n      <section class=\"register-group\">\n        <clr-input-container>\n          <label class=\"clr-sr-only\">Email</label>\n          <input\n            type=\"text\"\n            formControlName=\"email\"\n            clrInput\n            placeholder=\"Email\"\n          />\n        </clr-input-container>\n\n        <clr-password-container>\n          <label class=\"clr-sr-only\">Password</label>\n          <input\n            type=\"password\"\n            formControlName=\"password\"\n            clrPassword\n            placeholder=\"Password\"\n          />\n        </clr-password-container>\n      </section>\n\n      <section>\n        <div class=\"error active\">{{ text }}</div>\n      </section>\n\n      <section>\n        <button type=\"submit\" class=\"btn\">NEXT</button>\n      </section>\n    </form>\n  </div>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/subscription-management/subscription-management.component.html":
  /*!*****************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/subscription-management/subscription-management.component.html ***!
    \*****************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardUserManagementPanelSubscriptionManagementSubscriptionManagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main></main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/user-management-panel.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/user-management-panel.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardUserManagementPanelUserManagementPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main [@fadeInOnEnter] [@fadeOutOnLeave]>\n  <section>\n    <display-board></display-board>\n  </section>\n\n  <section>\n    <div class=\"card-list-container\">\n      <div\n        *ngIf=\"hasUserLoggedIn; then loggedInBlock; else notLoggedInBlock\"\n      ></div>\n    </div>\n  </section>\n</main>\n\n<ng-template #loggedInBlock>\n  <setting-card\n    [@fadeInOnEnter]\n    [@fadeOutOnLeave]\n    title=\"Log Out\"\n    clarityIconClass=\"logout\"\n    (onCardClicked)=\"onLogoutClicked()\"\n  ></setting-card>\n\n  <setting-card\n    [title]=\"pocketCardTitle\"\n    clarityIconClass=\"bookmark\"\n    (onCardClicked)=\"onPocketClicked()\"\n  ></setting-card>\n</ng-template>\n\n<ng-template #notLoggedInBlock>\n  <setting-card\n    title=\"Register\"\n    clarityIconClass=\"user\"\n    (onCardClicked)=\"onRegisterClicked()\"\n  ></setting-card>\n\n  <setting-card\n    title=\"Log In\"\n    clarityIconClass=\"login\"\n    (onCardClicked)=\"onLoginClicked()\"\n  ></setting-card>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/answer-section/answer-section.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/answer-section/answer-section.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedAnswerSectionAnswerSectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <!-- <answer-badge\n    [ownerName]=\"ownerName\"\n    [ownerProfileImageUrl]=\"ownerProfileImageUrl\"\n    [creationDate]=\"creationDate\"\n  >\n  </answer-badge> -->\n\n  <div class=\"answer-content\">\n    <div [innerHTML]=\"contentRawHtml\"></div>\n  </div>\n\n  <div class=\"answer-status\">\n    <div>\n      <clr-icon shape=\"thumbs-up\" flip=\"horizontal\" size=\"24\"></clr-icon>\n      {{ answerUpvotes }}\n    </div>\n\n    <div>\n      <clr-icon shape=\"thumbs-down\" size=\"24\"></clr-icon>\n      {{ answerDownvotes }}\n    </div>\n  </div>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-badge/question-badge.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-badge/question-badge.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedQuestionBadgeQuestionBadgeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <div>\n    <article>\n      <img\n        [src]=\"profileImageUrl\"\n        height=\"40\"\n        width=\"40\"\n        onerror=\"this.onerror=null; this.src='https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg';\"\n      />\n      <h4>{{ ownerName }}</h4>\n    </article>\n\n    <article>\n      <h4>\n        <fa-icon [icon]=\"faEye\"></fa-icon>\n        {{ viewCount }} views\n      </h4>\n\n      <h4>\n        <fa-icon [icon]=\"faCommentDots\"></fa-icon>\n        {{ answerCount }} answers\n      </h4>\n\n      <h4>\n        <fa-icon [icon]=\"faPenSquare\"></fa-icon>\n        {{ creationDate }}\n      </h4>\n    </article>\n  </div>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-card/question-card.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-card/question-card.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedQuestionCardQuestionCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <div\n    class=\"card\"\n    [id]=\"cardId\"\n    [ngClass]=\"{ clickable: !isExpanded }\"\n    (click)=\"onCardClicked($event)\"\n  >\n    <div class=\"card-header\">\n      <article>\n        <h3>\n          {{ title | titlecase }}\n        </h3>\n\n        <fa-icon\n          *ngIf=\"isExpanded\"\n          (click)=\"onCloseIconClicked($event)\"\n          [icon]=\"closeIcon\"\n        ></fa-icon>\n      </article>\n\n      <question-badge\n        [owner]=\"owner\"\n        [creationDate]=\"creationDate\"\n        [answerCount]=\"answerCount\"\n        [viewCount]=\"viewCount\"\n      >\n      </question-badge>\n\n      <div class=\"info-buttons\">\n        <article>\n          <simple-tag *ngFor=\"let tag of tags\" [text]=\"tag\"></simple-tag>\n        </article>\n\n        <article>\n          <fa-icon\n            [icon]=\"stackOverflowIcon\"\n            class=\"stackoverflow-icon\"\n            (click)=\"onStackOverflowIconClicked($event)\"\n            tooltip=\"Open in StackOverflow\"\n          ></fa-icon>\n          <fa-icon\n            [icon]=\"pocketIcon\"\n            class=\"getpocket-icon\"\n            (click)=\"onGetPocketIconClicked($event)\"\n            tooltip=\"Add to Pocket\"\n          ></fa-icon>\n        </article>\n      </div>\n    </div>\n\n    <ng-container *ngIf=\"isExpanded\">\n      <div class=\"card-body\" [@fadeInOnEnter]>\n        <question-content\n          [contentRawHtml]=\"rawHtml\"\n          [contentRawMarkdown]=\"rawMarkdown\"\n        ></question-content>\n      </div>\n    </ng-container>\n  </div>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-content/question-content.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-content/question-content.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedQuestionContentQuestionContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <div class=\"answer-content\">\n    <div class=\"markdown-wrapper\">\n      <markdown [data]=\"contentRawMarkdown\"></markdown>\n    </div>\n  </div>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/setting-card/setting-card.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/setting-card/setting-card.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedSettingCardSettingCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <div class=\"card clickable\" (click)=\"onCardClickedHandler()\">\n    <div class=\"card-header\">\n      <h3>\n        {{ title }}\n      </h3>\n\n      <clr-icon\n        *ngIf=\"!!clarityIconClass\"\n        [attr.shape]=\"clarityIconClass\"\n      ></clr-icon>\n    </div>\n  </div>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/simple-tag/simple-tag.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/simple-tag/simple-tag.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedSimpleTagSimpleTagComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <div>#{{ text }}</div>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _components_dashboard_user_management_panel_user_management_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/dashboard/user-management-panel/user-management-panel.component */
    "./src/app/components/dashboard/user-management-panel/user-management-panel.component.ts");
    /* harmony import */


    var _components_dashboard_content_panel_content_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/dashboard/content-panel/content-panel.component */
    "./src/app/components/dashboard/content-panel/content-panel.component.ts");
    /* harmony import */


    var _components_dashboard_user_management_panel_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/dashboard/user-management-panel/registration/registration.component */
    "./src/app/components/dashboard/user-management-panel/registration/registration.component.ts");
    /* harmony import */


    var _components_dashboard_user_management_panel_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/dashboard/user-management-panel/login/login.component */
    "./src/app/components/dashboard/user-management-panel/login/login.component.ts");
    /* harmony import */


    var _components_dashboard_user_management_panel_subscription_management_subscription_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/dashboard/user-management-panel/subscription-management/subscription-management.component */
    "./src/app/components/dashboard/user-management-panel/subscription-management/subscription-management.component.ts");

    var routes = [// TODO: better default tag path -> remove hardcoded Java tag.
    {
      path: "",
      redirectTo: "/user",
      pathMatch: "full"
    }, {
      path: "dashboard",
      redirectTo: "/dashboard/java",
      pathMatch: "full"
    }, {
      path: "dashboard/:tag",
      component: _components_dashboard_content_panel_content_panel_component__WEBPACK_IMPORTED_MODULE_4__["ContentPanelComponent"]
    }, {
      path: "user/pocket/:pocket_request_token",
      component: _components_dashboard_user_management_panel_user_management_panel_component__WEBPACK_IMPORTED_MODULE_3__["UserManagementPanelComponent"]
    }, {
      path: "user/register",
      component: _components_dashboard_user_management_panel_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"]
    }, {
      path: "user/login",
      component: _components_dashboard_user_management_panel_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: "user",
      component: _components_dashboard_user_management_panel_user_management_panel_component__WEBPACK_IMPORTED_MODULE_3__["UserManagementPanelComponent"]
    }, {
      path: "subscription",
      component: _components_dashboard_user_management_panel_subscription_management_subscription_management_component__WEBPACK_IMPORTED_MODULE_7__["SubscriptionManagementComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = "Code Daily";
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
    /* harmony import */


    var _state_app_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./state/app.reducer */
    "./src/app/state/app.reducer.ts");
    /* harmony import */


    var src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/state/app.actions */
    "./src/app/state/app.actions.ts");
    /* harmony import */


    var _state_app_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./state/app.effects */
    "./src/app/state/app.effects.ts");
    /* harmony import */


    var _storage_metareducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./storage.metareducer */
    "./src/app/storage.metareducer.ts");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/fesm2015/clr-angular.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var ngx_markdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-markdown */
    "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
    /* harmony import */


    var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ng2-tooltip-directive */
    "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");
    /* harmony import */


    var _custom_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./custom-tooltip */
    "./src/app/custom-tooltip.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_pocket_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./services/pocket.service */
    "./src/app/services/pocket.service.ts");
    /* harmony import */


    var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./interceptors/error.interceptor */
    "./src/app/interceptors/error.interceptor.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_dashboard_user_management_panel_login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/dashboard/user-management-panel/login/login.component */
    "./src/app/components/dashboard/user-management-panel/login/login.component.ts");
    /* harmony import */


    var _components_shared_question_card_question_card_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/shared/question-card/question-card.component */
    "./src/app/components/shared/question-card/question-card.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _services_stackExchange_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./services/stackExchange.service */
    "./src/app/services/stackExchange.service.ts");
    /* harmony import */


    var _components_dashboard_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/dashboard/control-panel/control-panel.component */
    "./src/app/components/dashboard/control-panel/control-panel.component.ts");
    /* harmony import */


    var _components_dashboard_navigation_panel_navigation_panel_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/dashboard/navigation-panel/navigation-panel.component */
    "./src/app/components/dashboard/navigation-panel/navigation-panel.component.ts");
    /* harmony import */


    var _components_dashboard_content_panel_content_panel_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/dashboard/content-panel/content-panel.component */
    "./src/app/components/dashboard/content-panel/content-panel.component.ts");
    /* harmony import */


    var _components_shared_answer_section_answer_section_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/shared/answer-section/answer-section.component */
    "./src/app/components/shared/answer-section/answer-section.component.ts");
    /* harmony import */


    var _components_shared_question_badge_question_badge_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/shared/question-badge/question-badge.component */
    "./src/app/components/shared/question-badge/question-badge.component.ts");
    /* harmony import */


    var _components_dashboard_user_management_panel_user_management_panel_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/dashboard/user-management-panel/user-management-panel.component */
    "./src/app/components/dashboard/user-management-panel/user-management-panel.component.ts");
    /* harmony import */


    var _components_dashboard_user_management_panel_registration_registration_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/dashboard/user-management-panel/registration/registration.component */
    "./src/app/components/dashboard/user-management-panel/registration/registration.component.ts");
    /* harmony import */


    var _components_shared_question_content_question_content_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/shared/question-content/question-content.component */
    "./src/app/components/shared/question-content/question-content.component.ts");
    /* harmony import */


    var _components_shared_setting_card_setting_card_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/shared/setting-card/setting-card.component */
    "./src/app/components/shared/setting-card/setting-card.component.ts");
    /* harmony import */


    var _services_contentPanel_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./services/contentPanel.service */
    "./src/app/services/contentPanel.service.ts");
    /* harmony import */


    var _components_dashboard_user_management_panel_subscription_management_subscription_management_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/dashboard/user-management-panel/subscription-management/subscription-management.component */
    "./src/app/components/dashboard/user-management-panel/subscription-management/subscription-management.component.ts");
    /* harmony import */


    var _components_dashboard_content_panel_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/dashboard/content-panel/content-header/content-header.component */
    "./src/app/components/dashboard/content-panel/content-header/content-header.component.ts");
    /* harmony import */


    var _components_shared_simple_tag_simple_tag_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./components/shared/simple-tag/simple-tag.component */
    "./src/app/components/shared/simple-tag/simple-tag.component.ts");
    /* harmony import */


    var _components_dashboard_user_management_panel_display_board_display_board_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./components/dashboard/user-management-panel/display-board/display-board.component */
    "./src/app/components/dashboard/user-management-panel/display-board/display-board.component.ts"); // State management.
    // UI libraries.


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"], _components_shared_question_card_question_card_component__WEBPACK_IMPORTED_MODULE_24__["QuestionCardComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"], _components_dashboard_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_27__["ControlPanelComponent"], _components_dashboard_navigation_panel_navigation_panel_component__WEBPACK_IMPORTED_MODULE_28__["NavigationPanelComponent"], _components_dashboard_content_panel_content_panel_component__WEBPACK_IMPORTED_MODULE_29__["ContentPanelComponent"], _components_dashboard_content_panel_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_38__["ContentHeaderComponent"], _components_shared_answer_section_answer_section_component__WEBPACK_IMPORTED_MODULE_30__["AnswerSectionComponent"], _components_shared_question_badge_question_badge_component__WEBPACK_IMPORTED_MODULE_31__["QuestionBadgeComponent"], _components_dashboard_user_management_panel_user_management_panel_component__WEBPACK_IMPORTED_MODULE_32__["UserManagementPanelComponent"], _components_dashboard_user_management_panel_registration_registration_component__WEBPACK_IMPORTED_MODULE_33__["RegistrationComponent"], _components_dashboard_user_management_panel_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"], _components_shared_question_content_question_content_component__WEBPACK_IMPORTED_MODULE_34__["QuestionContentComponent"], _components_shared_setting_card_setting_card_component__WEBPACK_IMPORTED_MODULE_35__["SettingCardComponent"], _components_dashboard_user_management_panel_subscription_management_subscription_management_component__WEBPACK_IMPORTED_MODULE_37__["SubscriptionManagementComponent"], _components_shared_simple_tag_simple_tag_component__WEBPACK_IMPORTED_MODULE_39__["SimpleTagComponent"], _components_dashboard_user_management_panel_display_board_display_board_component__WEBPACK_IMPORTED_MODULE_40__["DisplayBoardComponent"]],
      imports: [_clr_angular__WEBPACK_IMPORTED_MODULE_14__["ClarityModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({
        app: _state_app_reducer__WEBPACK_IMPORTED_MODULE_10__["appReducer"]
      }, {
        metaReducers: [_storage_metareducer__WEBPACK_IMPORTED_MODULE_13__["storageMetaReducer"]]
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_state_app_effects__WEBPACK_IMPORTED_MODULE_12__["AppEffects"]]), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_16__["MarkdownModule"].forRoot(), ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_17__["TooltipModule"].forRoot(_custom_tooltip__WEBPACK_IMPORTED_MODULE_18__["tooltipOptions"])],
      entryComponents: [_components_shared_answer_section_answer_section_component__WEBPACK_IMPORTED_MODULE_30__["AnswerSectionComponent"]],
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
        useFactory: function useFactory(store) {
          return function () {
            store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_11__["fetchCurrentUser"]());
          };
        },
        multi: true,
        deps: [_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]]
      }, _services_stackExchange_service__WEBPACK_IMPORTED_MODULE_26__["StackExchangeService"], _services_user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"], _services_contentPanel_service__WEBPACK_IMPORTED_MODULE_36__["ContentPanelService"], _services_pocket_service__WEBPACK_IMPORTED_MODULE_20__["PocketService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_21__["ErrorInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/dashboard/content-panel/content-header/content-header.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/app/components/dashboard/content-panel/content-header/content-header.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardContentPanelContentHeaderContentHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&family=Mulish:wght@400;500;600&display=swap\");\nmain {\n  height: 60px;\n  width: 800px;\n}\nmain > div {\n  align-items: center;\n  background: linear-gradient(to right, #4150a8, #5c6bc0);\n  display: flex;\n}\nmain > div article:first-child {\n  margin-left: 15px;\n}\nmain > div article:first-child h2 {\n  font-family: \"Fira Code\";\n  line-height: 60px;\n}\nmain > div article:nth-child(2) {\n  color: #f1f0f2;\n  display: flex;\n  font-family: \"Fira Code\";\n  margin-left: auto;\n}\nmain > div article:nth-child(2) > span {\n  padding: 0 10px 0 10px;\n}\nmain > div article:nth-child(2) > fa-icon {\n  font-size: 24px;\n  cursor: pointer;\n}\nmain > div article:nth-child(2) > fa-icon.disabled {\n  color: #c4c3c5;\n  pointer-events: none;\n}\nmain > div article:last-child {\n  color: #f1f0f2;\n  margin-left: 50px;\n  margin-right: 15px;\n}\nmain > div article:last-child .dropdown > fa-icon {\n  font-size: 21px;\n  cursor: pointer;\n}\nmain > div article:last-child .dropdown .dropdown-menu {\n  background: #d3d2d4;\n  border-radius: 3px;\n  border-color: #d3d2d4;\n}\nmain > div article:last-child .dropdown .dropdown-menu .dropdown-item {\n  color: #2d2c2e;\n  font-weight: 500;\n}\nmain > div article:last-child .dropdown .dropdown-menu .dropdown-item:hover {\n  background: none;\n  color: #5c6bc0;\n}\nmain > div article:last-child .dropdown .dropdown-menu .dropdown-item.selected {\n  color: #5c6bc0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1jb2RlLWRhaWx5L2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NvbnRlbnQtcGFuZWwvY29udGVudC1oZWFkZXIvY29udGVudC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NvbnRlbnQtcGFuZWwvY29udGVudC1oZWFkZXIvY29udGVudC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1jb2RlLWRhaWx5L2NsaWVudC9zcmMvYXBwL3N0eWxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxrSUFBQTtBQ0dSO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNERjtBREdFO0VBQ0UsbUJBQUE7RUFDQSx1REFBQTtFQUNBLGFBQUE7QUNESjtBRElNO0VBQ0UsaUJBQUE7QUNGUjtBRElRO0VBQ0Usd0JEZEM7RUNlRCxpQkFBQTtBQ0ZWO0FETU07RUFDRSxjRWZNO0VGZ0JOLGFBQUE7RUFDQSx3QkR0Qkc7RUN1QkgsaUJBQUE7QUNKUjtBRE1RO0VBQ0Usc0JBQUE7QUNKVjtBRE9RO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNMVjtBRE9VO0VBQ0UsY0VoQ0U7RUZpQ0Ysb0JBQUE7QUNMWjtBRFVNO0VBQ0UsY0VwQ007RUZxQ04saUJBQUE7RUFDQSxrQkFBQTtBQ1JSO0FEV1U7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ1RaO0FEV1U7RUFDRSxtQkVoREU7RUZpREYsa0JBQUE7RUFDQSxxQkVsREU7QUR5Q2Q7QURXWTtFQUNFLGNFekREO0VGMERDLGdCQUFBO0FDVGQ7QURXYztFQUNFLGdCQUFBO0VBQ0EsY0UvQ1A7QURzQ1Q7QURZYztFQUNFLGNFbkRQO0FEeUNUIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY29udGVudC1wYW5lbC9jb250ZW50LWhlYWRlci9jb250ZW50LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGU6d2dodEAzMDA7NDAwOzUwMDs2MDAmZmFtaWx5PU11bGlzaDp3Z2h0QDQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcFwiKTtcblxuJG1haW5mb250OiBcIk11bGlzaFwiO1xuJGNvZGVmb250OiBcIkZpcmEgQ29kZVwiO1xuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9mb250cy5zY3NzXCI7XG5cbm1haW4ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA4MDBweDtcblxuICA+IGRpdiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRpbmRpZ28tZGFya2VyLCAkaW5kaWdvKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgYXJ0aWNsZSB7XG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkY29kZWZvbnQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICBjb2xvcjogJGxpZ2h0Z3JleS0wO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LWZhbWlseTogJGNvZGVmb250O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcblxuICAgICAgICA+IHNwYW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICA+IGZhLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiAkbGlnaHRncmV5LTM7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgY29sb3I6ICRsaWdodGdyZXktMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcblxuICAgICAgICAuZHJvcGRvd24ge1xuICAgICAgICAgID4gZmEtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRsaWdodGdyZXktMjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JleS0yO1xuXG4gICAgICAgICAgICAuZHJvcGRvd24taXRlbSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAkZGFya2dyZXktMjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkaW5kaWdvO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRpbmRpZ287XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGU6d2dodEAzMDA7NDAwOzUwMDs2MDAmZmFtaWx5PU11bGlzaDp3Z2h0QDQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcFwiKTtcbm1haW4ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA4MDBweDtcbn1cbm1haW4gPiBkaXYge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0MTUwYTgsICM1YzZiYzApO1xuICBkaXNwbGF5OiBmbGV4O1xufVxubWFpbiA+IGRpdiBhcnRpY2xlOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5tYWluID4gZGl2IGFydGljbGU6Zmlyc3QtY2hpbGQgaDIge1xuICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIjtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG59XG5tYWluID4gZGl2IGFydGljbGU6bnRoLWNoaWxkKDIpIHtcbiAgY29sb3I6ICNmMWYwZjI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmEgQ29kZVwiO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbm1haW4gPiBkaXYgYXJ0aWNsZTpudGgtY2hpbGQoMikgPiBzcGFuIHtcbiAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbn1cbm1haW4gPiBkaXYgYXJ0aWNsZTpudGgtY2hpbGQoMikgPiBmYS1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5tYWluID4gZGl2IGFydGljbGU6bnRoLWNoaWxkKDIpID4gZmEtaWNvbi5kaXNhYmxlZCB7XG4gIGNvbG9yOiAjYzRjM2M1O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbm1haW4gPiBkaXYgYXJ0aWNsZTpsYXN0LWNoaWxkIHtcbiAgY29sb3I6ICNmMWYwZjI7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5tYWluID4gZGl2IGFydGljbGU6bGFzdC1jaGlsZCAuZHJvcGRvd24gPiBmYS1pY29uIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5tYWluID4gZGl2IGFydGljbGU6bGFzdC1jaGlsZCAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICBiYWNrZ3JvdW5kOiAjZDNkMmQ0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1jb2xvcjogI2QzZDJkNDtcbn1cbm1haW4gPiBkaXYgYXJ0aWNsZTpsYXN0LWNoaWxkIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XG4gIGNvbG9yOiAjMmQyYzJlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxubWFpbiA+IGRpdiBhcnRpY2xlOmxhc3QtY2hpbGQgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICM1YzZiYzA7XG59XG5tYWluID4gZGl2IGFydGljbGU6bGFzdC1jaGlsZCAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0uc2VsZWN0ZWQge1xuICBjb2xvcjogIzVjNmJjMDtcbn0iLCIkZGFya2dyZXktMDogcmdiKDE4LCAxNywgMTkpO1xuJGRhcmtncmV5LTE6IHJnYigzMCwgMjksIDMxKTtcbiRkYXJrZ3JleS0yOiByZ2IoNDUsIDQ0LCA0Nik7XG4kZGFya2dyZXktMzogcmdiKDkwLCA4OSwgOTEpO1xuJGdyZXk6IHJnYigxMjAsIDExOSwgMTIxKTtcbiRsaWdodGdyZXktMzogcmdiKDE5NiwgMTk1LCAxOTcpO1xuJGxpZ2h0Z3JleS0yOiByZ2IoMjExLCAyMTAsIDIxMik7XG4kbGlnaHRncmV5LTE6IHJnYigyMjYsIDIyNSwgMjI3KTtcbiRsaWdodGdyZXktMDogcmdiKDI0MSwgMjQwLCAyNDIpO1xuJGFsbW9zdHdoaXRlOiByZ2IoMjUzLCAyNTMsIDI1Myk7XG4kd2hpdGU6IHJnYigyNTUsIDI1NSwgMjU1KTtcblxuJGJsYWNrLWxpZ2h0ZXI6IHJnYigzOCwgMzcsIDM5KTtcbiRibGFjazogcmdiKDQxLCA0MCwgNDIpO1xuJGJsYWNrLWRhcmtlcjogcmdiKDQ0LCA0MywgNDUpO1xuXG4kaW5kaWdvLWxpZ2h0ZXI6ICM5ZmE4ZGE7XG4kaW5kaWdvOiAjNWM2YmMwO1xuJGluZGlnby1kYXJrZXI6ICM0MTUwYTg7XG5cbiRkYXJrbmF2eTogIzE2MjQ0NztcbiRwaW5rOiAjZTQzZjVhO1xuJGxpZ2h0bmF2eTogIzI0MjYyOTtcbiRuYXZ5YmxhY2s6ICMxYjFiMmY7XG4kb2xpdmU6ICM1YzdhMWU7XG4keWVsbG93OiAjZmZmYzY0O1xuXG4kc3RhY2tvdmVyZmxvdy1icmFuZC1jb2xvcjogI2Y0ODAyNDtcbiRnZXQtcG9ja2V0LWJyYW5kLWNvbG9yOiAjZWY0MDU2O1xuXG4kcHJpbWFyeS1jb2xvcjogJGluZGlnbztcbiRzZWNvbmRhcnktY29sb3I6ICRpbmRpZ28tbGlnaHRlcjtcblxuJGJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiR1c2VyLXBhbmVsLWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiRjb250cm9sLXBhbmVsLWJnLWNvbG9yOiAkYmxhY2s7XG4kY29udGVudC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1tYW5hZ2VtZW50LWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/content-panel/content-header/content-header.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/dashboard/content-panel/content-header/content-header.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ContentHeaderComponent */

  /***/
  function srcAppComponentsDashboardContentPanelContentHeaderContentHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentHeaderComponent", function () {
      return ContentHeaderComponent;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/state/app.actions */
    "./src/app/state/app.actions.ts");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var ContentHeaderComponent = /*#__PURE__*/function () {
      function ContentHeaderComponent(router, store, ref) {
        _classCallCheck(this, ContentHeaderComponent);

        this.router = router;
        this.store = store;
        this.ref = ref;
        this.dropdownIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBars"];
        this.trendingIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFireAlt"];
        this.randomIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faRedoAlt"];
        this.arrowLeftIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCaretSquareLeft"];
        this.arrowRightIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCaretSquareRight"];
      }

      _createClass(ContentHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menuSelectedOption = "default";
          this.onDocumentClicked = this.onDocumentClicked.bind(this);
          document.addEventListener("click", this.onDocumentClicked);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          document.removeEventListener("click", this.onDocumentClicked);
        }
      }, {
        key: "onDocumentClicked",
        value: function onDocumentClicked(event) {
          if (this.menuElement.nativeElement.contains(event.target)) {
            return;
          }

          this.isMenuExpanded = false;
          this.ref.markForCheck();
        }
      }, {
        key: "isTagFavoriteByUser",
        value: function isTagFavoriteByUser(tag) {
          return this.userFavoriteTags && this.userFavoriteTags.indexOf(tag) >= 0;
        }
      }, {
        key: "isTagSubscribedByUser",
        value: function isTagSubscribedByUser(tag) {
          return this.userSubscribedTags && this.userSubscribedTags.indexOf(tag) >= 0;
        }
      }, {
        key: "getStarIconClass",
        value: function getStarIconClass() {
          return this.isTagFavoriteByUser(this.tag) ? "is-solid" : "";
        }
      }, {
        key: "getEmailIconClass",
        value: function getEmailIconClass() {
          return this.isTagSubscribedByUser(this.tag) ? "is-solid" : "";
        }
      }, {
        key: "onPaginationClicked",
        value: function onPaginationClicked(goNext) {
          this.page += goNext ? 1 : -1;
          this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["setPage"]({
            page: this.page
          }));
        }
      }, {
        key: "onStarClicked",
        value: function onStarClicked() {
          if (!this.hasUserLoggedIn) {
            this.router.navigate(["/user/login"]);
            return;
          }

          if (this.isTagFavoriteByUser(this.tag)) {
            this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["removeFavoriteTagFromUser"]({
              tag: this.tag
            }));
          } else {
            this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["addFavoriteTagToUser"]({
              tag: this.tag
            }));
          }
        }
      }, {
        key: "onDropdownIconClicked",
        value: function onDropdownIconClicked() {
          this.isMenuExpanded = !this.isMenuExpanded;
        }
      }, {
        key: "onDropdownOptionClicked",
        value: function onDropdownOptionClicked(mode) {
          if (mode === "random") {
            this.menuSelectedOption = "random";
            this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchQuestions"]({
              tag: this.tag,
              fetchRandom: true
            }));
          } else {
            this.menuSelectedOption = "default";
            this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchQuestions"]({
              tag: this.tag
            }));
          }
        }
      }, {
        key: "dropdownOptionClass",
        value: function dropdownOptionClass(option) {
          return this.isOptionSelected(option) ? "selected" : "";
        }
      }, {
        key: "isOptionSelected",
        value: function isOptionSelected(option) {
          return this.menuSelectedOption === option;
        }
      }, {
        key: "title",
        get: function get() {
          return this.tag;
        }
      }, {
        key: "hasUserLoggedIn",
        get: function get() {
          return !!this.userAuth && !!this.userAuth.email;
        }
      }, {
        key: "arrowLeftClass",
        get: function get() {
          return this.page <= 1 ? "disabled" : "";
        } // TODO: change this.
        // Note: this is a temporary solution, since Stack Exchange API does not give total number of items/pages.

      }, {
        key: "arrowRightClass",
        get: function get() {
          return this.page >= 8 ? "disabled" : "";
        }
      }, {
        key: "dropdownClass",
        get: function get() {
          return this.isMenuExpanded ? "open" : "";
        }
      }]);

      return ContentHeaderComponent;
    }();

    ContentHeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("dropdown", {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ContentHeaderComponent.prototype, "menuElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ContentHeaderComponent.prototype, "userAuth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ContentHeaderComponent.prototype, "tag", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], ContentHeaderComponent.prototype, "page", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], ContentHeaderComponent.prototype, "userFavoriteTags", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], ContentHeaderComponent.prototype, "userSubscribedTags", void 0);
    ContentHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "content-header",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./content-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/content-panel/content-header/content-header.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./content-header.component.scss */
      "./src/app/components/dashboard/content-panel/content-header/content-header.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], ContentHeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/content-panel/content-panel.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/dashboard/content-panel/content-panel.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardContentPanelContentPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "main {\n  background: #262527;\n  height: 100%;\n  width: 100%;\n  overflow-y: scroll;\n  padding: 0 40px 40px 40px;\n  scroll-behavior: smooth;\n}\nmain .content-header-container {\n  margin: 20px auto 0 auto;\n  width: 800px;\n}\nmain .card-list-container {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  width: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY29udGVudC1wYW5lbC9jb250ZW50LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2ZueC9HaXRSZXBvcy9mbngtY29kZS1kYWlseS9jbGllbnQvc3JjL2FwcC9zdHlsZXMvY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NvbnRlbnQtcGFuZWwvY29udGVudC1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQ1NjO0VEUmQsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBRUEsdUJBQUE7QUVGRjtBRklFO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0FFRko7QUZLRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FFSEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9jb250ZW50LXBhbmVsL2NvbnRlbnQtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XG5cbm1haW4ge1xuICBiYWNrZ3JvdW5kOiAkY29udGVudC1wYW5lbC1iZy1jb2xvcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBwYWRkaW5nOiAwIDQwcHggNDBweCA0MHB4O1xuXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuXG4gIC5jb250ZW50LWhlYWRlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogMjBweCBhdXRvIDAgYXV0bztcbiAgICB3aWR0aDogODAwcHg7XG4gIH1cblxuICAuY2FyZC1saXN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogODAwcHg7XG4gIH1cbn1cbiIsIiRkYXJrZ3JleS0wOiByZ2IoMTgsIDE3LCAxOSk7XG4kZGFya2dyZXktMTogcmdiKDMwLCAyOSwgMzEpO1xuJGRhcmtncmV5LTI6IHJnYig0NSwgNDQsIDQ2KTtcbiRkYXJrZ3JleS0zOiByZ2IoOTAsIDg5LCA5MSk7XG4kZ3JleTogcmdiKDEyMCwgMTE5LCAxMjEpO1xuJGxpZ2h0Z3JleS0zOiByZ2IoMTk2LCAxOTUsIDE5Nyk7XG4kbGlnaHRncmV5LTI6IHJnYigyMTEsIDIxMCwgMjEyKTtcbiRsaWdodGdyZXktMTogcmdiKDIyNiwgMjI1LCAyMjcpO1xuJGxpZ2h0Z3JleS0wOiByZ2IoMjQxLCAyNDAsIDI0Mik7XG4kYWxtb3N0d2hpdGU6IHJnYigyNTMsIDI1MywgMjUzKTtcbiR3aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4kYmxhY2stbGlnaHRlcjogcmdiKDM4LCAzNywgMzkpO1xuJGJsYWNrOiByZ2IoNDEsIDQwLCA0Mik7XG4kYmxhY2stZGFya2VyOiByZ2IoNDQsIDQzLCA0NSk7XG5cbiRpbmRpZ28tbGlnaHRlcjogIzlmYThkYTtcbiRpbmRpZ286ICM1YzZiYzA7XG4kaW5kaWdvLWRhcmtlcjogIzQxNTBhODtcblxuJGRhcmtuYXZ5OiAjMTYyNDQ3O1xuJHBpbms6ICNlNDNmNWE7XG4kbGlnaHRuYXZ5OiAjMjQyNjI5O1xuJG5hdnlibGFjazogIzFiMWIyZjtcbiRvbGl2ZTogIzVjN2ExZTtcbiR5ZWxsb3c6ICNmZmZjNjQ7XG5cbiRzdGFja292ZXJmbG93LWJyYW5kLWNvbG9yOiAjZjQ4MDI0O1xuJGdldC1wb2NrZXQtYnJhbmQtY29sb3I6ICNlZjQwNTY7XG5cbiRwcmltYXJ5LWNvbG9yOiAkaW5kaWdvO1xuJHNlY29uZGFyeS1jb2xvcjogJGluZGlnby1saWdodGVyO1xuXG4kYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJGNvbnRyb2wtcGFuZWwtYmctY29sb3I6ICRibGFjaztcbiRjb250ZW50LXBhbmVsLWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiR1c2VyLW1hbmFnZW1lbnQtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuIiwibWFpbiB7XG4gIGJhY2tncm91bmQ6ICMyNjI1Mjc7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcGFkZGluZzogMCA0MHB4IDQwcHggNDBweDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5tYWluIC5jb250ZW50LWhlYWRlci1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XG4gIHdpZHRoOiA4MDBweDtcbn1cbm1haW4gLmNhcmQtbGlzdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA4MDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/content-panel/content-panel.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/dashboard/content-panel/content-panel.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ContentPanelComponent */

  /***/
  function srcAppComponentsDashboardContentPanelContentPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentPanelComponent", function () {
      return ContentPanelComponent;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/state/app.selectors */
    "./src/app/state/app.selectors.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/state/app.actions */
    "./src/app/state/app.actions.ts");
    /* harmony import */


    var angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-animations */
    "./node_modules/angular-animations/fesm2015/angular-animations.js");
    /* harmony import */


    var src_app_services_contentPanel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/contentPanel.service */
    "./src/app/services/contentPanel.service.ts");

    var ContentPanelComponent = /*#__PURE__*/function () {
      function ContentPanelComponent(store, contentPanelService) {
        var _this = this;

        _classCallCheck(this, ContentPanelComponent);

        this.store = store;
        this.contentPanelService = contentPanelService;
        this.ready = false;
        this.contentPanelService.isContentPanelReady$.subscribe(function (value) {
          _this.ready = value;
        });
      }

      _createClass(ContentPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userAuth$ = this.store.select(function (state) {
            return Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_3__["selectUserAuth"])(state);
          });
          this.questions$ = this.store.select(function (state) {
            return Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_3__["selectQuestions"])(state);
          });
          this.currentTag$ = this.store.select(function (state) {
            return Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSelectedTag"])(state);
          });
          this.currentPage$ = this.store.select(function (state) {
            return Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_3__["selectPage"])(state);
          });
          this.userFavoriteTags$ = this.store.select(function (state) {
            return Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_3__["selectUser"])(state);
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            if (!user) {
              return [];
            }

            return user.favoriteTags;
          }));
          this.userSubscribedTags$ = this.store.select(function (state) {
            return Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_3__["selectUser"])(state);
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            if (!user) {
              return [];
            }

            return user.subscribedTags;
          }));
        }
      }, {
        key: "onAddToPocket",
        value: function onAddToPocket(event) {
          this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_5__["addItemToPocket"]({
            url: event.url,
            title: event.title,
            tags: event.tags
          }));
        }
      }]);

      return ContentPanelComponent;
    }();

    ContentPanelComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }, {
        type: src_app_services_contentPanel_service__WEBPACK_IMPORTED_MODULE_7__["ContentPanelService"]
      }];
    };

    ContentPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "content-panel",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./content-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/content-panel/content-panel.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      animations: [Object(angular_animations__WEBPACK_IMPORTED_MODULE_6__["fadeInOnEnterAnimation"])(), Object(angular_animations__WEBPACK_IMPORTED_MODULE_6__["fadeOutOnLeaveAnimation"])({
        delay: 25
      })],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./content-panel.component.scss */
      "./src/app/components/dashboard/content-panel/content-panel.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], src_app_services_contentPanel_service__WEBPACK_IMPORTED_MODULE_7__["ContentPanelService"]])], ContentPanelComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/control-panel/control-panel.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/dashboard/control-panel/control-panel.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardControlPanelControlPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&family=Mulish:wght@400;500;600&display=swap\");\n:host ::-webkit-scrollbar {\n  display: none;\n}\n:host main {\n  background: #29282a;\n  height: 100%;\n  overflow-y: scroll;\n  width: 100%;\n}\n:host main ::ng-deep .clr-treenode-children {\n  margin-left: 0;\n}\n:host main div {\n  padding: 10px 0 10px 0;\n}\n:host main div clr-tree {\n  color: #f1f0f2;\n  cursor: pointer;\n  font-family: \"Fira Code\";\n  font-weight: 400;\n  margin: 0;\n  width: 100%;\n}\n:host main div clr-tree .tag-node {\n  border-left: 4px solid transparent;\n  margin: 4px 0 4px 0;\n}\n:host main div clr-tree .tag-node.selected {\n  font-weight: 600;\n}\n:host main div clr-tree .tag-node button.active {\n  background: none;\n  color: #5c6bc0;\n}\n:host main div clr-tree .tag-node button:hover {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1jb2RlLWRhaWx5L2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NvbnRyb2wtcGFuZWwvY29udHJvbC1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY29udHJvbC1wYW5lbC9jb250cm9sLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2ZueC9HaXRSZXBvcy9mbngtY29kZS1kYWlseS9jbGllbnQvc3JjL2FwcC9zdHlsZXMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0lBQUE7QUNJTjtFQUNFLGFBQUE7QUNGSjtBREtFO0VBQ0UsbUJFSUk7RUZISixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDSEo7QURLSTtFQUNFLGNBQUE7QUNITjtBRE1JO0VBQ0Usc0JBQUE7QUNKTjtBRE1NO0VBQ0UsY0VkTTtFRmVOLGVBQUE7RUFDQSx3QkRyQkc7RUNzQkgsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0pSO0FETVE7RUFDRSxrQ0FBQTtFQUNBLG1CQUFBO0FDSlY7QURNVTtFQUNFLGdCQUFBO0FDSlo7QURRWTtFQUNFLGdCQUFBO0VBQ0EsY0V2Qkw7QURpQlQ7QURTWTtFQUNFLGdCQUFBO0FDUGQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9jb250cm9sLXBhbmVsL2NvbnRyb2wtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStDb2RlOndnaHRAMzAwOzQwMDs1MDA7NjAwJmZhbWlseT1NdWxpc2g6d2dodEA0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXBcIik7XG5cbiRtYWluZm9udDogXCJNdWxpc2hcIjtcbiRjb2RlZm9udDogXCJGaXJhIENvZGVcIjtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvZm9udHMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBtYWluIHtcbiAgICBiYWNrZ3JvdW5kOiAkY29udHJvbC1wYW5lbC1iZy1jb2xvcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgOjpuZy1kZWVwIC5jbHItdHJlZW5vZGUtY2hpbGRyZW4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgZGl2IHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG5cbiAgICAgIGNsci10cmVlIHtcbiAgICAgICAgY29sb3I6ICRsaWdodGdyZXktMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LWZhbWlseTogJGNvZGVmb250O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC50YWctbm9kZSB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBtYXJnaW46IDRweCAwIDRweCAwO1xuXG4gICAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStDb2RlOndnaHRAMzAwOzQwMDs1MDA7NjAwJmZhbWlseT1NdWxpc2g6d2dodEA0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXBcIik7XG46aG9zdCA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IG1haW4ge1xuICBiYWNrZ3JvdW5kOiAjMjkyODJhO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCBtYWluIDo6bmctZGVlcCAuY2xyLXRyZWVub2RlLWNoaWxkcmVuIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG46aG9zdCBtYWluIGRpdiB7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG59XG46aG9zdCBtYWluIGRpdiBjbHItdHJlZSB7XG4gIGNvbG9yOiAjZjFmMGYyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmEgQ29kZVwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWFpbiBkaXYgY2xyLXRyZWUgLnRhZy1ub2RlIHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiA0cHggMCA0cHggMDtcbn1cbjpob3N0IG1haW4gZGl2IGNsci10cmVlIC50YWctbm9kZS5zZWxlY3RlZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG46aG9zdCBtYWluIGRpdiBjbHItdHJlZSAudGFnLW5vZGUgYnV0dG9uLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjNWM2YmMwO1xufVxuOmhvc3QgbWFpbiBkaXYgY2xyLXRyZWUgLnRhZy1ub2RlIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59IiwiJGRhcmtncmV5LTA6IHJnYigxOCwgMTcsIDE5KTtcbiRkYXJrZ3JleS0xOiByZ2IoMzAsIDI5LCAzMSk7XG4kZGFya2dyZXktMjogcmdiKDQ1LCA0NCwgNDYpO1xuJGRhcmtncmV5LTM6IHJnYig5MCwgODksIDkxKTtcbiRncmV5OiByZ2IoMTIwLCAxMTksIDEyMSk7XG4kbGlnaHRncmV5LTM6IHJnYigxOTYsIDE5NSwgMTk3KTtcbiRsaWdodGdyZXktMjogcmdiKDIxMSwgMjEwLCAyMTIpO1xuJGxpZ2h0Z3JleS0xOiByZ2IoMjI2LCAyMjUsIDIyNyk7XG4kbGlnaHRncmV5LTA6IHJnYigyNDEsIDI0MCwgMjQyKTtcbiRhbG1vc3R3aGl0ZTogcmdiKDI1MywgMjUzLCAyNTMpO1xuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cbiRibGFjay1saWdodGVyOiByZ2IoMzgsIDM3LCAzOSk7XG4kYmxhY2s6IHJnYig0MSwgNDAsIDQyKTtcbiRibGFjay1kYXJrZXI6IHJnYig0NCwgNDMsIDQ1KTtcblxuJGluZGlnby1saWdodGVyOiAjOWZhOGRhO1xuJGluZGlnbzogIzVjNmJjMDtcbiRpbmRpZ28tZGFya2VyOiAjNDE1MGE4O1xuXG4kZGFya25hdnk6ICMxNjI0NDc7XG4kcGluazogI2U0M2Y1YTtcbiRsaWdodG5hdnk6ICMyNDI2Mjk7XG4kbmF2eWJsYWNrOiAjMWIxYjJmO1xuJG9saXZlOiAjNWM3YTFlO1xuJHllbGxvdzogI2ZmZmM2NDtcblxuJHN0YWNrb3ZlcmZsb3ctYnJhbmQtY29sb3I6ICNmNDgwMjQ7XG4kZ2V0LXBvY2tldC1icmFuZC1jb2xvcjogI2VmNDA1NjtcblxuJHByaW1hcnktY29sb3I6ICRpbmRpZ287XG4kc2Vjb25kYXJ5LWNvbG9yOiAkaW5kaWdvLWxpZ2h0ZXI7XG5cbiRiZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kY29udHJvbC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrO1xuJGNvbnRlbnQtcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItbWFuYWdlbWVudC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/control-panel/control-panel.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/dashboard/control-panel/control-panel.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ControlPanelComponent */

  /***/
  function srcAppComponentsDashboardControlPanelControlPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlPanelComponent", function () {
      return ControlPanelComponent;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/state/app.actions */
    "./src/app/state/app.actions.ts");

    var ControlPanelComponent = /*#__PURE__*/function () {
      function ControlPanelComponent(router, store) {
        _classCallCheck(this, ControlPanelComponent);

        this.router = router;
        this.store = store;
        this.onTagSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ControlPanelComponent, [{
        key: "getTreeNodeClass",
        value: function getTreeNodeClass(tag) {
          return this.isTagSelected(tag) ? "selected" : "";
        }
      }, {
        key: "getTagClass",
        value: function getTagClass(tag) {
          return this.isTagSelected(tag) ? "active" : "";
        }
      }, {
        key: "getStarIconClass",
        value: function getStarIconClass(tag) {
          return this.isTagFavoriteByUser(tag) ? "is-solid" : "";
        }
      }, {
        key: "getEmailIconClass",
        value: function getEmailIconClass(tag) {
          return this.isTagSubscribedByUser(tag) ? "is-solid" : "";
        }
      }, {
        key: "isTagSelected",
        value: function isTagSelected(tag) {
          return this.selectedTag === tag;
        }
      }, {
        key: "isTagFavoriteByUser",
        value: function isTagFavoriteByUser(tag) {
          return this.userFavoriteTags && this.userFavoriteTags.indexOf(tag) >= 0;
        }
      }, {
        key: "isTagSubscribedByUser",
        value: function isTagSubscribedByUser(tag) {
          return this.userSubscribedTags && this.userSubscribedTags.indexOf(tag) >= 0;
        }
      }, {
        key: "onSelectTag",
        value: function onSelectTag(tag) {
          // TODO: move this to effects.
          var controlPanelElement = document.querySelector("content-panel main");

          if (controlPanelElement) {
            controlPanelElement.scrollTo(0, 0);
          }

          this.router.navigate(["/dashboard", tag, {
            page: 1
          }]);

          if (this.selectedTag != tag) {
            this.selectedTag = tag;
            this.onTagSelected.emit(tag);
          }
        }
      }, {
        key: "onStarClicked",
        value: function onStarClicked(tag) {
          if (!this.hasUserLoggedIn) {
            this.router.navigate(["/user/login"]);
            return;
          }

          if (this.isTagFavoriteByUser(tag)) {
            this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["removeFavoriteTagFromUser"]({
              tag: tag
            }));
          } else {
            this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["addFavoriteTagToUser"]({
              tag: tag
            }));
          }
        }
      }, {
        key: "onEmailClicked",
        value: function onEmailClicked(tag) {
          if (!this.hasUserLoggedIn) {
            this.router.navigate(["/user/login"]);
            return;
          }

          if (this.isTagSubscribedByUser(tag)) {
            this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["unsubscribeToTag"]({
              tag: tag
            }));
          } else {
            this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["subscribeToTag"]({
              tag: tag
            }));
          }
        }
      }, {
        key: "hasUserLoggedIn",
        get: function get() {
          return !!this.user && !!this.user.email;
        }
      }]);

      return ControlPanelComponent;
    }();

    ControlPanelComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ControlPanelComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], ControlPanelComponent.prototype, "tags", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ControlPanelComponent.prototype, "selectedTag", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], ControlPanelComponent.prototype, "userFavoriteTags", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], ControlPanelComponent.prototype, "userSubscribedTags", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], ControlPanelComponent.prototype, "onTagSelected", void 0);
    ControlPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "control-panel",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./control-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/control-panel/control-panel.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./control-panel.component.scss */
      "./src/app/components/dashboard/control-panel/control-panel.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])], ControlPanelComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/dashboard.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "main .flex-container {\n  background: #262527;\n  display: flex;\n  flex-direction: row;\n}\nmain .flex-container ::ng-deep navigation-panel {\n  flex: 0 0 50px;\n  height: 100vh;\n  width: 50px;\n}\nmain .flex-container ::ng-deep control-panel {\n  flex: 0 0 275px;\n  height: 100vh;\n  width: 275px;\n}\nmain .flex-container ::ng-deep content-panel,\nmain .flex-container ::ng-deep user-management-panel,\nmain .flex-container ::ng-deep welcome-page {\n  flex-grow: 1;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2ZueC9HaXRSZXBvcy9mbngtY29kZS1kYWlseS9jbGllbnQvc3JjL2FwcC9zdHlsZXMvY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLG1CQ1FZO0VEUFosYUFBQTtFQUNBLG1CQUFBO0FFRko7QUZLTTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBRUhSO0FGTU07RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUVKUjtBRk9NOzs7RUFHRSxZQUFBO0VBQ0EsYUFBQTtBRUxSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzc1wiO1xuXG5tYWluIHtcbiAgLmZsZXgtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIG5hdmlnYXRpb24tcGFuZWwge1xuICAgICAgICBmbGV4OiAwIDAgNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICB9XG5cbiAgICAgIGNvbnRyb2wtcGFuZWwge1xuICAgICAgICBmbGV4OiAwIDAgMjc1cHg7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHdpZHRoOiAyNzVweDtcbiAgICAgIH1cblxuICAgICAgY29udGVudC1wYW5lbCxcbiAgICAgIHVzZXItbWFuYWdlbWVudC1wYW5lbCxcbiAgICAgIHdlbGNvbWUtcGFnZSB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRkYXJrZ3JleS0wOiByZ2IoMTgsIDE3LCAxOSk7XG4kZGFya2dyZXktMTogcmdiKDMwLCAyOSwgMzEpO1xuJGRhcmtncmV5LTI6IHJnYig0NSwgNDQsIDQ2KTtcbiRkYXJrZ3JleS0zOiByZ2IoOTAsIDg5LCA5MSk7XG4kZ3JleTogcmdiKDEyMCwgMTE5LCAxMjEpO1xuJGxpZ2h0Z3JleS0zOiByZ2IoMTk2LCAxOTUsIDE5Nyk7XG4kbGlnaHRncmV5LTI6IHJnYigyMTEsIDIxMCwgMjEyKTtcbiRsaWdodGdyZXktMTogcmdiKDIyNiwgMjI1LCAyMjcpO1xuJGxpZ2h0Z3JleS0wOiByZ2IoMjQxLCAyNDAsIDI0Mik7XG4kYWxtb3N0d2hpdGU6IHJnYigyNTMsIDI1MywgMjUzKTtcbiR3aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4kYmxhY2stbGlnaHRlcjogcmdiKDM4LCAzNywgMzkpO1xuJGJsYWNrOiByZ2IoNDEsIDQwLCA0Mik7XG4kYmxhY2stZGFya2VyOiByZ2IoNDQsIDQzLCA0NSk7XG5cbiRpbmRpZ28tbGlnaHRlcjogIzlmYThkYTtcbiRpbmRpZ286ICM1YzZiYzA7XG4kaW5kaWdvLWRhcmtlcjogIzQxNTBhODtcblxuJGRhcmtuYXZ5OiAjMTYyNDQ3O1xuJHBpbms6ICNlNDNmNWE7XG4kbGlnaHRuYXZ5OiAjMjQyNjI5O1xuJG5hdnlibGFjazogIzFiMWIyZjtcbiRvbGl2ZTogIzVjN2ExZTtcbiR5ZWxsb3c6ICNmZmZjNjQ7XG5cbiRzdGFja292ZXJmbG93LWJyYW5kLWNvbG9yOiAjZjQ4MDI0O1xuJGdldC1wb2NrZXQtYnJhbmQtY29sb3I6ICNlZjQwNTY7XG5cbiRwcmltYXJ5LWNvbG9yOiAkaW5kaWdvO1xuJHNlY29uZGFyeS1jb2xvcjogJGluZGlnby1saWdodGVyO1xuXG4kYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJGNvbnRyb2wtcGFuZWwtYmctY29sb3I6ICRibGFjaztcbiRjb250ZW50LXBhbmVsLWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiR1c2VyLW1hbmFnZW1lbnQtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuIiwibWFpbiAuZmxleC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjMjYyNTI3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxubWFpbiAuZmxleC1jb250YWluZXIgOjpuZy1kZWVwIG5hdmlnYXRpb24tcGFuZWwge1xuICBmbGV4OiAwIDAgNTBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDUwcHg7XG59XG5tYWluIC5mbGV4LWNvbnRhaW5lciA6Om5nLWRlZXAgY29udHJvbC1wYW5lbCB7XG4gIGZsZXg6IDAgMCAyNzVweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDI3NXB4O1xufVxubWFpbiAuZmxleC1jb250YWluZXIgOjpuZy1kZWVwIGNvbnRlbnQtcGFuZWwsXG5tYWluIC5mbGV4LWNvbnRhaW5lciA6Om5nLWRlZXAgdXNlci1tYW5hZ2VtZW50LXBhbmVsLFxubWFpbiAuZmxleC1jb250YWluZXIgOjpuZy1kZWVwIHdlbGNvbWUtcGFnZSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/dashboard.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
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


    var src_app_services_stackExchange_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/stackExchange.service */
    "./src/app/services/stackExchange.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/state/app.actions */
    "./src/app/state/app.actions.ts");
    /* harmony import */


    var src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/state/app.selectors */
    "./src/app/state/app.selectors.ts");
    /* harmony import */


    var src_app_services_contentPanel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/contentPanel.service */
    "./src/app/services/contentPanel.service.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(store, stackExchangeService, contentPanelService) {
        _classCallCheck(this, DashboardComponent);

        this.store = store;
        this.stackExchangeService = stackExchangeService;
        this.contentPanelService = contentPanelService;
        this.isContentPanelReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.questions$ = this.store.select(function (state) {
            return Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_7__["selectQuestions"])(state);
          });
          this.tags$ = this.stackExchangeService.getDefaultTags();
          this.selectedTag$ = this.store.select(function (state) {
            return Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_7__["selectSelectedTag"])(state);
          });
          this.store.select(function (state) {
            return Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_7__["selectSelectedTag"])(state);
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            _this2.contentPanelService.setReadyState(true);
          })).subscribe();
          this.userAuth$ = this.store.select(function (state) {
            return Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_7__["selectUserAuth"])(state);
          });
          this.userFavoriteTags$ = this.store.select(function (state) {
            return Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_7__["selectUser"])(state);
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            if (!user) {
              return [];
            }

            return user.favoriteTags;
          }));
          this.userSubscribedTags$ = this.store.select(function (state) {
            return Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_7__["selectUser"])(state);
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            if (!user) {
              return [];
            }

            return user.subscribedTags;
          }));
        }
      }, {
        key: "onTagSelected",
        value: function onTagSelected(tag) {
          this.contentPanelService.setReadyState(false);
          this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_6__["selectTag"]({
            tag: tag
          }));
        }
      }, {
        key: "onTagUnselected",
        value: function onTagUnselected(tag) {
          this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_6__["unselectTag"]({
            tag: tag
          }));
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
      }, {
        type: src_app_services_stackExchange_service__WEBPACK_IMPORTED_MODULE_2__["StackExchangeService"]
      }, {
        type: src_app_services_contentPanel_service__WEBPACK_IMPORTED_MODULE_8__["ContentPanelService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "dashboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/components/dashboard/dashboard.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"], src_app_services_stackExchange_service__WEBPACK_IMPORTED_MODULE_2__["StackExchangeService"], src_app_services_contentPanel_service__WEBPACK_IMPORTED_MODULE_8__["ContentPanelService"]])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/navigation-panel/navigation-panel.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/dashboard/navigation-panel/navigation-panel.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardNavigationPanelNavigationPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&family=Mulish:wght@400;500;600&display=swap\");\nmain {\n  background: #262527;\n  height: 100%;\n  width: 100%;\n}\nmain .flex-container {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n  padding: 15px 0 15px 0;\n}\nmain .flex-container .flex-top,\nmain .flex-container .flex-bottom {\n  display: flex;\n  flex-direction: column;\n}\nmain .flex-container .flex-mid {\n  font-family: \"Fira Code\";\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n}\nmain .flex-container fa-icon {\n  color: #c4c3c5;\n  cursor: pointer;\n  font-size: 24px;\n  margin: 5px 0 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1jb2RlLWRhaWx5L2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL25hdmlnYXRpb24tcGFuZWwvbmF2aWdhdGlvbi1wYW5lbC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2NvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9uYXZpZ2F0aW9uLXBhbmVsL25hdmlnYXRpb24tcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0lBQUE7QUNHUjtFQUNFLG1CQ1FjO0VEUGQsWUFBQTtFQUNBLFdBQUE7QUVERjtBRkdFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBRURKO0FGR0k7O0VBRUUsYUFBQTtFQUNBLHNCQUFBO0FFRE47QUZJSTtFQUNFLHdCRHBCSztFQ3FCTCxpQ0FBQTtNQUFBLHVCQUFBO1VBQUEseUJBQUE7QUVGTjtBRktJO0VBQ0UsY0N2QlE7RUR3QlIsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBRUhOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvbmF2aWdhdGlvbi1wYW5lbC9uYXZpZ2F0aW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErQ29kZTp3Z2h0QDMwMDs0MDA7NTAwOzYwMCZmYW1pbHk9TXVsaXNoOndnaHRANDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwXCIpO1xuXG4kbWFpbmZvbnQ6IFwiTXVsaXNoXCI7XG4kY29kZWZvbnQ6IFwiRmlyYSBDb2RlXCI7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2ZvbnRzLnNjc3NcIjtcblxubWFpbiB7XG4gIGJhY2tncm91bmQ6ICR1c2VyLXBhbmVsLWJnLWNvbG9yO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5mbGV4LWNvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxNXB4IDAgMTVweCAwO1xuXG4gICAgLmZsZXgtdG9wLFxuICAgIC5mbGV4LWJvdHRvbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuZmxleC1taWQge1xuICAgICAgZm9udC1mYW1pbHk6ICRjb2RlZm9udDtcbiAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gICAgfVxuXG4gICAgZmEtaWNvbiB7XG4gICAgICBjb2xvcjogJGxpZ2h0Z3JleS0zO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbWFyZ2luOiA1cHggMCA1cHggMDtcbiAgICB9XG4gIH1cbn1cbiIsIiRkYXJrZ3JleS0wOiByZ2IoMTgsIDE3LCAxOSk7XG4kZGFya2dyZXktMTogcmdiKDMwLCAyOSwgMzEpO1xuJGRhcmtncmV5LTI6IHJnYig0NSwgNDQsIDQ2KTtcbiRkYXJrZ3JleS0zOiByZ2IoOTAsIDg5LCA5MSk7XG4kZ3JleTogcmdiKDEyMCwgMTE5LCAxMjEpO1xuJGxpZ2h0Z3JleS0zOiByZ2IoMTk2LCAxOTUsIDE5Nyk7XG4kbGlnaHRncmV5LTI6IHJnYigyMTEsIDIxMCwgMjEyKTtcbiRsaWdodGdyZXktMTogcmdiKDIyNiwgMjI1LCAyMjcpO1xuJGxpZ2h0Z3JleS0wOiByZ2IoMjQxLCAyNDAsIDI0Mik7XG4kYWxtb3N0d2hpdGU6IHJnYigyNTMsIDI1MywgMjUzKTtcbiR3aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4kYmxhY2stbGlnaHRlcjogcmdiKDM4LCAzNywgMzkpO1xuJGJsYWNrOiByZ2IoNDEsIDQwLCA0Mik7XG4kYmxhY2stZGFya2VyOiByZ2IoNDQsIDQzLCA0NSk7XG5cbiRpbmRpZ28tbGlnaHRlcjogIzlmYThkYTtcbiRpbmRpZ286ICM1YzZiYzA7XG4kaW5kaWdvLWRhcmtlcjogIzQxNTBhODtcblxuJGRhcmtuYXZ5OiAjMTYyNDQ3O1xuJHBpbms6ICNlNDNmNWE7XG4kbGlnaHRuYXZ5OiAjMjQyNjI5O1xuJG5hdnlibGFjazogIzFiMWIyZjtcbiRvbGl2ZTogIzVjN2ExZTtcbiR5ZWxsb3c6ICNmZmZjNjQ7XG5cbiRzdGFja292ZXJmbG93LWJyYW5kLWNvbG9yOiAjZjQ4MDI0O1xuJGdldC1wb2NrZXQtYnJhbmQtY29sb3I6ICNlZjQwNTY7XG5cbiRwcmltYXJ5LWNvbG9yOiAkaW5kaWdvO1xuJHNlY29uZGFyeS1jb2xvcjogJGluZGlnby1saWdodGVyO1xuXG4kYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJGNvbnRyb2wtcGFuZWwtYmctY29sb3I6ICRibGFjaztcbiRjb250ZW50LXBhbmVsLWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiR1c2VyLW1hbmFnZW1lbnQtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErQ29kZTp3Z2h0QDMwMDs0MDA7NTAwOzYwMCZmYW1pbHk9TXVsaXNoOndnaHRANDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwXCIpO1xubWFpbiB7XG4gIGJhY2tncm91bmQ6ICMyNjI1Mjc7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5tYWluIC5mbGV4LWNvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxNXB4IDAgMTVweCAwO1xufVxubWFpbiAuZmxleC1jb250YWluZXIgLmZsZXgtdG9wLFxubWFpbiAuZmxleC1jb250YWluZXIgLmZsZXgtYm90dG9tIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbm1haW4gLmZsZXgtY29udGFpbmVyIC5mbGV4LW1pZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmEgQ29kZVwiO1xuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xufVxubWFpbiAuZmxleC1jb250YWluZXIgZmEtaWNvbiB7XG4gIGNvbG9yOiAjYzRjM2M1O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiA1cHggMCA1cHggMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/navigation-panel/navigation-panel.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/dashboard/navigation-panel/navigation-panel.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: NavigationPanelComponent */

  /***/
  function srcAppComponentsDashboardNavigationPanelNavigationPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationPanelComponent", function () {
      return NavigationPanelComponent;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/state/app.actions */
    "./src/app/state/app.actions.ts");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");

    var NavigationPanelComponent = /*#__PURE__*/function () {
      function NavigationPanelComponent(router, store) {
        _classCallCheck(this, NavigationPanelComponent);

        this.router = router;
        this.store = store;
        this.userIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserSecret"];
        this.userCheckedIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserCheck"];
        this.githubIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faGithub"];
      }

      _createClass(NavigationPanelComponent, [{
        key: "openGithubRepo",
        value: function openGithubRepo() {
          window.open("https://github.com/fangnx/code-daily", "_blank");
        }
      }, {
        key: "navigateToUserManagement",
        value: function navigateToUserManagement() {
          this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["selectTag"]({
            tag: null
          }));
          this.router.navigate(["/user"]);
        }
      }, {
        key: "hasUserLoggedIn",
        get: function get() {
          return !!this.user && !!this.user.email;
        }
      }]);

      return NavigationPanelComponent;
    }();

    NavigationPanelComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NavigationPanelComponent.prototype, "user", void 0);
    NavigationPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "navigation-panel",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/navigation-panel/navigation-panel.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation-panel.component.scss */
      "./src/app/components/dashboard/navigation-panel/navigation-panel.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])], NavigationPanelComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/user-management-panel/display-board/display-board.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/components/dashboard/user-management-panel/display-board/display-board.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardUserManagementPanelDisplayBoardDisplayBoardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&family=Mulish:wght@400;500;600&display=swap\");\n:host {\n  width: 100%;\n}\n:host main {\n  width: 100%;\n}\n:host main .card {\n  background: white;\n  box-shadow: 0 4px 0 0 #fdfdfd;\n  border-radius: 3px;\n  border-width: 1.5px;\n  border-color: white;\n  color: #121113;\n  opacity: 0.75;\n}\n:host main .card .card-header {\n  align-items: center;\n  border-bottom: none;\n  color: #121113;\n  display: flex;\n  flex-direction: row;\n  font-weight: normal;\n  justify-content: space-between;\n}\n:host main .card .card-block {\n  font-family: \"Fira Code\";\n}\n:host main .card .card-block #stackoverflow-link {\n  color: #f48024;\n  font-style: italic;\n}\n:host main .card .card-block #pocket-link {\n  color: #ef4056;\n  font-style: italic;\n}\n:host main .card .card-block p {\n  color: #121113;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1jb2RlLWRhaWx5L2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXItbWFuYWdlbWVudC1wYW5lbC9kaXNwbGF5LWJvYXJkL2Rpc3BsYXktYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXItbWFuYWdlbWVudC1wYW5lbC9kaXNwbGF5LWJvYXJkL2Rpc3BsYXktYm9hcmQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1jb2RlLWRhaWx5L2NsaWVudC9zcmMvYXBwL3N0eWxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxrSUFBQTtBQ0dSO0VBQ0UsV0FBQTtBQ0RGO0FER0U7RUFDRSxXQUFBO0FDREo7QURHSTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJFSkU7RUZLRixjRWZPO0VGZ0JQLGFBQUE7QUNETjtBREdNO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNFckJLO0VGc0JMLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNEUjtBRElNO0VBQ0Usd0JEMUJHO0FFd0JYO0FESVE7RUFDRSxjRUxrQjtFRk1sQixrQkFBQTtBQ0ZWO0FES1E7RUFDRSxjRVRlO0VGVWYsa0JBQUE7QUNIVjtBRE1RO0VBQ0UsY0UxQ0c7QURzQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyLW1hbmFnZW1lbnQtcGFuZWwvZGlzcGxheS1ib2FyZC9kaXNwbGF5LWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErQ29kZTp3Z2h0QDMwMDs0MDA7NTAwOzYwMCZmYW1pbHk9TXVsaXNoOndnaHRANDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwXCIpO1xuXG4kbWFpbmZvbnQ6IFwiTXVsaXNoXCI7XG4kY29kZWZvbnQ6IFwiRmlyYSBDb2RlXCI7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL2ZvbnRzLnNjc3NcIjtcblxuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcblxuICBtYWluIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDAgMCAkYWxtb3N0d2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBib3JkZXItd2lkdGg6IDEuNXB4O1xuICAgICAgYm9yZGVyLWNvbG9yOiAkd2hpdGU7XG4gICAgICBjb2xvcjogJGRhcmtncmV5LTA7XG4gICAgICBvcGFjaXR5OiAwLjc1O1xuXG4gICAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICBjb2xvcjogJGRhcmtncmV5LTA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cblxuICAgICAgLmNhcmQtYmxvY2sge1xuICAgICAgICBmb250LWZhbWlseTogJGNvZGVmb250O1xuXG4gICAgICAgICNzdGFja292ZXJmbG93LWxpbmsge1xuICAgICAgICAgIGNvbG9yOiAkc3RhY2tvdmVyZmxvdy1icmFuZC1jb2xvcjtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIH1cblxuICAgICAgICAjcG9ja2V0LWxpbmsge1xuICAgICAgICAgIGNvbG9yOiAkZ2V0LXBvY2tldC1icmFuZC1jb2xvcjtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBjb2xvcjogJGRhcmtncmV5LTA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGU6d2dodEAzMDA7NDAwOzUwMDs2MDAmZmFtaWx5PU11bGlzaDp3Z2h0QDQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcFwiKTtcbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCBtYWluIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCBtYWluIC5jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDAgMCAjZmRmZGZkO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci13aWR0aDogMS41cHg7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMTIxMTEzO1xuICBvcGFjaXR5OiAwLjc1O1xufVxuOmhvc3QgbWFpbiAuY2FyZCAuY2FyZC1oZWFkZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBjb2xvcjogIzEyMTExMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgbWFpbiAuY2FyZCAuY2FyZC1ibG9jayB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmEgQ29kZVwiO1xufVxuOmhvc3QgbWFpbiAuY2FyZCAuY2FyZC1ibG9jayAjc3RhY2tvdmVyZmxvdy1saW5rIHtcbiAgY29sb3I6ICNmNDgwMjQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbjpob3N0IG1haW4gLmNhcmQgLmNhcmQtYmxvY2sgI3BvY2tldC1saW5rIHtcbiAgY29sb3I6ICNlZjQwNTY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbjpob3N0IG1haW4gLmNhcmQgLmNhcmQtYmxvY2sgcCB7XG4gIGNvbG9yOiAjMTIxMTEzO1xufSIsIiRkYXJrZ3JleS0wOiByZ2IoMTgsIDE3LCAxOSk7XG4kZGFya2dyZXktMTogcmdiKDMwLCAyOSwgMzEpO1xuJGRhcmtncmV5LTI6IHJnYig0NSwgNDQsIDQ2KTtcbiRkYXJrZ3JleS0zOiByZ2IoOTAsIDg5LCA5MSk7XG4kZ3JleTogcmdiKDEyMCwgMTE5LCAxMjEpO1xuJGxpZ2h0Z3JleS0zOiByZ2IoMTk2LCAxOTUsIDE5Nyk7XG4kbGlnaHRncmV5LTI6IHJnYigyMTEsIDIxMCwgMjEyKTtcbiRsaWdodGdyZXktMTogcmdiKDIyNiwgMjI1LCAyMjcpO1xuJGxpZ2h0Z3JleS0wOiByZ2IoMjQxLCAyNDAsIDI0Mik7XG4kYWxtb3N0d2hpdGU6IHJnYigyNTMsIDI1MywgMjUzKTtcbiR3aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4kYmxhY2stbGlnaHRlcjogcmdiKDM4LCAzNywgMzkpO1xuJGJsYWNrOiByZ2IoNDEsIDQwLCA0Mik7XG4kYmxhY2stZGFya2VyOiByZ2IoNDQsIDQzLCA0NSk7XG5cbiRpbmRpZ28tbGlnaHRlcjogIzlmYThkYTtcbiRpbmRpZ286ICM1YzZiYzA7XG4kaW5kaWdvLWRhcmtlcjogIzQxNTBhODtcblxuJGRhcmtuYXZ5OiAjMTYyNDQ3O1xuJHBpbms6ICNlNDNmNWE7XG4kbGlnaHRuYXZ5OiAjMjQyNjI5O1xuJG5hdnlibGFjazogIzFiMWIyZjtcbiRvbGl2ZTogIzVjN2ExZTtcbiR5ZWxsb3c6ICNmZmZjNjQ7XG5cbiRzdGFja292ZXJmbG93LWJyYW5kLWNvbG9yOiAjZjQ4MDI0O1xuJGdldC1wb2NrZXQtYnJhbmQtY29sb3I6ICNlZjQwNTY7XG5cbiRwcmltYXJ5LWNvbG9yOiAkaW5kaWdvO1xuJHNlY29uZGFyeS1jb2xvcjogJGluZGlnby1saWdodGVyO1xuXG4kYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJGNvbnRyb2wtcGFuZWwtYmctY29sb3I6ICRibGFjaztcbiRjb250ZW50LXBhbmVsLWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiR1c2VyLW1hbmFnZW1lbnQtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/user-management-panel/display-board/display-board.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/components/dashboard/user-management-panel/display-board/display-board.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: DisplayBoardComponent */

  /***/
  function srcAppComponentsDashboardUserManagementPanelDisplayBoardDisplayBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayBoardComponent", function () {
      return DisplayBoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DisplayBoardComponent = function DisplayBoardComponent() {
      _classCallCheck(this, DisplayBoardComponent);

      this.title = "Code Daily";
    };

    DisplayBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "display-board",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./display-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/display-board/display-board.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./display-board.component.scss */
      "./src/app/components/dashboard/user-management-panel/display-board/display-board.component.scss"))["default"]]
    })], DisplayBoardComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/user-management-panel/login/login.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/dashboard/user-management-panel/login/login.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardUserManagementPanelLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&family=Mulish:wght@400;500;600&display=swap\");\n:host {\n  margin: auto;\n}\n:host main {\n  display: flex;\n  width: 400px;\n}\n:host main .card {\n  background: white;\n  box-shadow: 0 4px 0 0 #fdfdfd;\n  border-radius: 3px;\n  border-width: 1.5px;\n  border-color: white;\n  opacity: 0.75;\n  margin: 0;\n}\n:host main form {\n  margin: 20px 40px;\n}\n:host main form section {\n  margin: 30px 0;\n}\n:host main form .login-group ::ng-deep .clr-control-container {\n  width: 100%;\n}\n:host main form .login-group ::ng-deep .clr-control-container .clr-input-wrapper .clr-input {\n  background: none;\n}\n:host main form .login-group ::ng-deep .clr-control-container .clr-input-wrapper .clr-input:focus {\n  border-bottom-color: #5c6bc0;\n}\n:host main form .login-group ::ng-deep .clr-control-container .clr-input-wrapper .clr-input-group {\n  background: none;\n  padding: 0;\n  width: 100%;\n}\n:host main form .login-group ::ng-deep .clr-control-container .clr-input-wrapper .clr-input-group.clr-focus {\n  border-bottom-color: #5c6bc0;\n}\n:host main form .login-group ::ng-deep .clr-control-container .clr-input-wrapper .clr-input-group clr-icon {\n  color: #5c6bc0;\n}\n:host main form .login-group ::ng-deep .clr-control-container .clr-input-wrapper input {\n  color: #121113;\n  width: 100%;\n}\n:host main form .error {\n  background: #5c6bc0;\n  color: #f1f0f2;\n  font-family: \"Fira Code\";\n  font-size: 14px;\n  padding: 0 10px 0 10px;\n}\n:host main form button {\n  border-color: #5c6bc0;\n  color: #5c6bc0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1jb2RlLWRhaWx5L2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXItbWFuYWdlbWVudC1wYW5lbC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlci1tYW5hZ2VtZW50LXBhbmVsL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2ZueC9HaXRSZXBvcy9mbngtY29kZS1kYWlseS9jbGllbnQvc3JjL2FwcC9zdHlsZXMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0lBQUE7QUNHUjtFQUNFLFlBQUE7QUNERjtBREdFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNESjtBREdJO0VBQ0UsaUJFREU7RUZFRiw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkVMRTtFRk1GLGFBQUE7RUFDQSxTQUFBO0FDRE47QURJSTtFQUNFLGlCQUFBO0FDRk47QURJTTtFQUNFLGNBQUE7QUNGUjtBRE9VO0VBQ0UsV0FBQTtBQ0xaO0FEUWM7RUFDRSxnQkFBQTtBQ05oQjtBRFFnQjtFQUNFLDRCRXBCVDtBRGNUO0FEVWM7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDUmhCO0FEVWdCO0VBQ0UsNEJFOUJUO0FEc0JUO0FEV2dCO0VBQ0UsY0VsQ1Q7QUR5QlQ7QURhYztFQUNFLGNFeERIO0VGeURHLFdBQUE7QUNYaEI7QURrQk07RUFDRSxtQkVoREM7RUZpREQsY0UxRE07RUYyRE4sd0JEaEVHO0VDaUVILGVBQUE7RUFDQSxzQkFBQTtBQ2hCUjtBRG1CTTtFQUNFLHFCRXhEQztFRnlERCxjRXpEQztBRHdDVCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXItbWFuYWdlbWVudC1wYW5lbC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGU6d2dodEAzMDA7NDAwOzUwMDs2MDAmZmFtaWx5PU11bGlzaDp3Z2h0QDQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcFwiKTtcblxuJG1haW5mb250OiBcIk11bGlzaFwiO1xuJGNvZGVmb250OiBcIkZpcmEgQ29kZVwiO1xuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9mb250cy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgbWFyZ2luOiBhdXRvO1xuXG4gIG1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDQwMHB4O1xuXG4gICAgLmNhcmQge1xuICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMCAwICRhbG1vc3R3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGJvcmRlci13aWR0aDogMS41cHg7XG4gICAgICBib3JkZXItY29sb3I6ICR3aGl0ZTtcbiAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgZm9ybSB7XG4gICAgICBtYXJnaW46IDIwcHggNDBweDtcblxuICAgICAgc2VjdGlvbiB7XG4gICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgfVxuXG4gICAgICAubG9naW4tZ3JvdXAge1xuICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgIC5jbHItY29udHJvbC1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIC5jbHItaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgICAgIC5jbHItaW5wdXQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG5cbiAgICAgICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRpbmRpZ287XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNsci1pbnB1dC1ncm91cCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgJi5jbHItZm9jdXMge1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGluZGlnbztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjbHItaWNvbiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJGluZGlnbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrZ3JleS0wO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5lcnJvciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICBjb2xvcjogJGxpZ2h0Z3JleS0wO1xuICAgICAgICBmb250LWZhbWlseTogJGNvZGVmb250O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGU6d2dodEAzMDA7NDAwOzUwMDs2MDAmZmFtaWx5PU11bGlzaDp3Z2h0QDQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcFwiKTtcbjpob3N0IHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuOmhvc3QgbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0MDBweDtcbn1cbjpob3N0IG1haW4gLmNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAwICNmZGZkZmQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXdpZHRoOiAxLjVweDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43NTtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgbWFpbiBmb3JtIHtcbiAgbWFyZ2luOiAyMHB4IDQwcHg7XG59XG46aG9zdCBtYWluIGZvcm0gc2VjdGlvbiB7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuOmhvc3QgbWFpbiBmb3JtIC5sb2dpbi1ncm91cCA6Om5nLWRlZXAgLmNsci1jb250cm9sLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWFpbiBmb3JtIC5sb2dpbi1ncm91cCA6Om5nLWRlZXAgLmNsci1jb250cm9sLWNvbnRhaW5lciAuY2xyLWlucHV0LXdyYXBwZXIgLmNsci1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG46aG9zdCBtYWluIGZvcm0gLmxvZ2luLWdyb3VwIDo6bmctZGVlcCAuY2xyLWNvbnRyb2wtY29udGFpbmVyIC5jbHItaW5wdXQtd3JhcHBlciAuY2xyLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzVjNmJjMDtcbn1cbjpob3N0IG1haW4gZm9ybSAubG9naW4tZ3JvdXAgOjpuZy1kZWVwIC5jbHItY29udHJvbC1jb250YWluZXIgLmNsci1pbnB1dC13cmFwcGVyIC5jbHItaW5wdXQtZ3JvdXAge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IG1haW4gZm9ybSAubG9naW4tZ3JvdXAgOjpuZy1kZWVwIC5jbHItY29udHJvbC1jb250YWluZXIgLmNsci1pbnB1dC13cmFwcGVyIC5jbHItaW5wdXQtZ3JvdXAuY2xyLWZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzVjNmJjMDtcbn1cbjpob3N0IG1haW4gZm9ybSAubG9naW4tZ3JvdXAgOjpuZy1kZWVwIC5jbHItY29udHJvbC1jb250YWluZXIgLmNsci1pbnB1dC13cmFwcGVyIC5jbHItaW5wdXQtZ3JvdXAgY2xyLWljb24ge1xuICBjb2xvcjogIzVjNmJjMDtcbn1cbjpob3N0IG1haW4gZm9ybSAubG9naW4tZ3JvdXAgOjpuZy1kZWVwIC5jbHItY29udHJvbC1jb250YWluZXIgLmNsci1pbnB1dC13cmFwcGVyIGlucHV0IHtcbiAgY29sb3I6ICMxMjExMTM7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWFpbiBmb3JtIC5lcnJvciB7XG4gIGJhY2tncm91bmQ6ICM1YzZiYzA7XG4gIGNvbG9yOiAjZjFmMGYyO1xuICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xufVxuOmhvc3QgbWFpbiBmb3JtIGJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogIzVjNmJjMDtcbiAgY29sb3I6ICM1YzZiYzA7XG59IiwiJGRhcmtncmV5LTA6IHJnYigxOCwgMTcsIDE5KTtcbiRkYXJrZ3JleS0xOiByZ2IoMzAsIDI5LCAzMSk7XG4kZGFya2dyZXktMjogcmdiKDQ1LCA0NCwgNDYpO1xuJGRhcmtncmV5LTM6IHJnYig5MCwgODksIDkxKTtcbiRncmV5OiByZ2IoMTIwLCAxMTksIDEyMSk7XG4kbGlnaHRncmV5LTM6IHJnYigxOTYsIDE5NSwgMTk3KTtcbiRsaWdodGdyZXktMjogcmdiKDIxMSwgMjEwLCAyMTIpO1xuJGxpZ2h0Z3JleS0xOiByZ2IoMjI2LCAyMjUsIDIyNyk7XG4kbGlnaHRncmV5LTA6IHJnYigyNDEsIDI0MCwgMjQyKTtcbiRhbG1vc3R3aGl0ZTogcmdiKDI1MywgMjUzLCAyNTMpO1xuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cbiRibGFjay1saWdodGVyOiByZ2IoMzgsIDM3LCAzOSk7XG4kYmxhY2s6IHJnYig0MSwgNDAsIDQyKTtcbiRibGFjay1kYXJrZXI6IHJnYig0NCwgNDMsIDQ1KTtcblxuJGluZGlnby1saWdodGVyOiAjOWZhOGRhO1xuJGluZGlnbzogIzVjNmJjMDtcbiRpbmRpZ28tZGFya2VyOiAjNDE1MGE4O1xuXG4kZGFya25hdnk6ICMxNjI0NDc7XG4kcGluazogI2U0M2Y1YTtcbiRsaWdodG5hdnk6ICMyNDI2Mjk7XG4kbmF2eWJsYWNrOiAjMWIxYjJmO1xuJG9saXZlOiAjNWM3YTFlO1xuJHllbGxvdzogI2ZmZmM2NDtcblxuJHN0YWNrb3ZlcmZsb3ctYnJhbmQtY29sb3I6ICNmNDgwMjQ7XG4kZ2V0LXBvY2tldC1icmFuZC1jb2xvcjogI2VmNDA1NjtcblxuJHByaW1hcnktY29sb3I6ICRpbmRpZ287XG4kc2Vjb25kYXJ5LWNvbG9yOiAkaW5kaWdvLWxpZ2h0ZXI7XG5cbiRiZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kY29udHJvbC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrO1xuJGNvbnRlbnQtcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItbWFuYWdlbWVudC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/user-management-panel/login/login.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/dashboard/user-management-panel/login/login.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsDashboardUserManagementPanelLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var LoginComponent = /*#__PURE__*/function () {
      // TODO: refactor the login component & styles.
      function LoginComponent(ref, formBuilder, userService) {
        _classCallCheck(this, LoginComponent);

        this.ref = ref;
        this.formBuilder = formBuilder;
        this.userService = userService;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            email: [""],
            password: [""]
          });
          this.isSubmitted = false;
          this.text = "";
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          this.isSubmitted = true;
          this.text = "";
          this.userService.loginUser(this.loginForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
            return value;
          })).subscribe(function () {}, function (error) {
            if (!error) {
              _this3.text = "Login Successful!";
            } else {
              _this3.text = error;
            }

            _this3.ref.markForCheck();
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/login/login.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/components/dashboard/user-management-panel/login/login.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/user-management-panel/registration/registration.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/components/dashboard/user-management-panel/registration/registration.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardUserManagementPanelRegistrationRegistrationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&family=Mulish:wght@400;500;600&display=swap\");\n:host {\n  margin: auto;\n}\n:host main {\n  display: flex;\n  width: 400px;\n}\n:host main .card {\n  background: white;\n  box-shadow: 0 4px 0 0 #fdfdfd;\n  border-radius: 3px;\n  border-width: 1.5px;\n  border-color: white;\n  opacity: 0.75;\n  margin: 0;\n}\n:host main form {\n  margin: 20px 40px;\n}\n:host main form section {\n  margin: 30px 0;\n}\n:host main form .register-group ::ng-deep .clr-control-container {\n  width: 100%;\n}\n:host main form .register-group ::ng-deep .clr-control-container .clr-input-wrapper .clr-input {\n  background: none;\n}\n:host main form .register-group ::ng-deep .clr-control-container .clr-input-wrapper .clr-input:focus {\n  border-bottom-color: #5c6bc0;\n}\n:host main form .register-group ::ng-deep .clr-control-container .clr-input-wrapper .clr-input-group {\n  background: none;\n  padding: 0;\n  width: 100%;\n}\n:host main form .register-group ::ng-deep .clr-control-container .clr-input-wrapper .clr-input-group.clr-focus {\n  border-bottom-color: #5c6bc0;\n}\n:host main form .register-group ::ng-deep .clr-control-container .clr-input-wrapper .clr-input-group clr-icon {\n  color: #5c6bc0;\n}\n:host main form .register-group ::ng-deep .clr-control-container .clr-input-wrapper input {\n  color: #121113;\n  width: 100%;\n}\n:host main form .error {\n  background: #5c6bc0;\n  color: #f1f0f2;\n  font-family: \"Fira Code\";\n  font-size: 14px;\n  padding: 0 10px 0 10px;\n}\n:host main form button {\n  border-color: #5c6bc0;\n  color: #5c6bc0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1jb2RlLWRhaWx5L2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXItbWFuYWdlbWVudC1wYW5lbC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyLW1hbmFnZW1lbnQtcGFuZWwvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGtJQUFBO0FDR1I7RUFDRSxZQUFBO0FDREY7QURHRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDREo7QURHSTtFQUNFLGlCRURFO0VGRUYsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJFTEU7RUZNRixhQUFBO0VBQ0EsU0FBQTtBQ0ROO0FESUk7RUFDRSxpQkFBQTtBQ0ZOO0FESU07RUFDRSxjQUFBO0FDRlI7QURPVTtFQUNFLFdBQUE7QUNMWjtBRFFjO0VBQ0UsZ0JBQUE7QUNOaEI7QURRZ0I7RUFDRSw0QkVwQlQ7QURjVDtBRFVjO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ1JoQjtBRFVnQjtFQUNFLDRCRTlCVDtBRHNCVDtBRFdnQjtFQUNFLGNFbENUO0FEeUJUO0FEYWM7RUFDRSxjRXhESDtFRnlERyxXQUFBO0FDWGhCO0FEa0JNO0VBQ0UsbUJFaERDO0VGaURELGNFMURNO0VGMkROLHdCRGhFRztFQ2lFSCxlQUFBO0VBQ0Esc0JBQUE7QUNoQlI7QURtQk07RUFDRSxxQkV4REM7RUZ5REQsY0V6REM7QUR3Q1QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyLW1hbmFnZW1lbnQtcGFuZWwvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGU6d2dodEAzMDA7NDAwOzUwMDs2MDAmZmFtaWx5PU11bGlzaDp3Z2h0QDQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcFwiKTtcblxuJG1haW5mb250OiBcIk11bGlzaFwiO1xuJGNvZGVmb250OiBcIkZpcmEgQ29kZVwiO1xuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9mb250cy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgbWFyZ2luOiBhdXRvO1xuXG4gIG1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDQwMHB4O1xuXG4gICAgLmNhcmQge1xuICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMCAwICRhbG1vc3R3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGJvcmRlci13aWR0aDogMS41cHg7XG4gICAgICBib3JkZXItY29sb3I6ICR3aGl0ZTtcbiAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgZm9ybSB7XG4gICAgICBtYXJnaW46IDIwcHggNDBweDtcblxuICAgICAgc2VjdGlvbiB7XG4gICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgfVxuXG4gICAgICAucmVnaXN0ZXItZ3JvdXAge1xuICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgIC5jbHItY29udHJvbC1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIC5jbHItaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgICAgIC5jbHItaW5wdXQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG5cbiAgICAgICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRpbmRpZ287XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNsci1pbnB1dC1ncm91cCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgJi5jbHItZm9jdXMge1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGluZGlnbztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjbHItaWNvbiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJGluZGlnbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrZ3JleS0wO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5lcnJvciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICBjb2xvcjogJGxpZ2h0Z3JleS0wO1xuICAgICAgICBmb250LWZhbWlseTogJGNvZGVmb250O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGU6d2dodEAzMDA7NDAwOzUwMDs2MDAmZmFtaWx5PU11bGlzaDp3Z2h0QDQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcFwiKTtcbjpob3N0IHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuOmhvc3QgbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0MDBweDtcbn1cbjpob3N0IG1haW4gLmNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAwICNmZGZkZmQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXdpZHRoOiAxLjVweDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43NTtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgbWFpbiBmb3JtIHtcbiAgbWFyZ2luOiAyMHB4IDQwcHg7XG59XG46aG9zdCBtYWluIGZvcm0gc2VjdGlvbiB7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuOmhvc3QgbWFpbiBmb3JtIC5yZWdpc3Rlci1ncm91cCA6Om5nLWRlZXAgLmNsci1jb250cm9sLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWFpbiBmb3JtIC5yZWdpc3Rlci1ncm91cCA6Om5nLWRlZXAgLmNsci1jb250cm9sLWNvbnRhaW5lciAuY2xyLWlucHV0LXdyYXBwZXIgLmNsci1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG46aG9zdCBtYWluIGZvcm0gLnJlZ2lzdGVyLWdyb3VwIDo6bmctZGVlcCAuY2xyLWNvbnRyb2wtY29udGFpbmVyIC5jbHItaW5wdXQtd3JhcHBlciAuY2xyLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzVjNmJjMDtcbn1cbjpob3N0IG1haW4gZm9ybSAucmVnaXN0ZXItZ3JvdXAgOjpuZy1kZWVwIC5jbHItY29udHJvbC1jb250YWluZXIgLmNsci1pbnB1dC13cmFwcGVyIC5jbHItaW5wdXQtZ3JvdXAge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IG1haW4gZm9ybSAucmVnaXN0ZXItZ3JvdXAgOjpuZy1kZWVwIC5jbHItY29udHJvbC1jb250YWluZXIgLmNsci1pbnB1dC13cmFwcGVyIC5jbHItaW5wdXQtZ3JvdXAuY2xyLWZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzVjNmJjMDtcbn1cbjpob3N0IG1haW4gZm9ybSAucmVnaXN0ZXItZ3JvdXAgOjpuZy1kZWVwIC5jbHItY29udHJvbC1jb250YWluZXIgLmNsci1pbnB1dC13cmFwcGVyIC5jbHItaW5wdXQtZ3JvdXAgY2xyLWljb24ge1xuICBjb2xvcjogIzVjNmJjMDtcbn1cbjpob3N0IG1haW4gZm9ybSAucmVnaXN0ZXItZ3JvdXAgOjpuZy1kZWVwIC5jbHItY29udHJvbC1jb250YWluZXIgLmNsci1pbnB1dC13cmFwcGVyIGlucHV0IHtcbiAgY29sb3I6ICMxMjExMTM7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWFpbiBmb3JtIC5lcnJvciB7XG4gIGJhY2tncm91bmQ6ICM1YzZiYzA7XG4gIGNvbG9yOiAjZjFmMGYyO1xuICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xufVxuOmhvc3QgbWFpbiBmb3JtIGJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogIzVjNmJjMDtcbiAgY29sb3I6ICM1YzZiYzA7XG59IiwiJGRhcmtncmV5LTA6IHJnYigxOCwgMTcsIDE5KTtcbiRkYXJrZ3JleS0xOiByZ2IoMzAsIDI5LCAzMSk7XG4kZGFya2dyZXktMjogcmdiKDQ1LCA0NCwgNDYpO1xuJGRhcmtncmV5LTM6IHJnYig5MCwgODksIDkxKTtcbiRncmV5OiByZ2IoMTIwLCAxMTksIDEyMSk7XG4kbGlnaHRncmV5LTM6IHJnYigxOTYsIDE5NSwgMTk3KTtcbiRsaWdodGdyZXktMjogcmdiKDIxMSwgMjEwLCAyMTIpO1xuJGxpZ2h0Z3JleS0xOiByZ2IoMjI2LCAyMjUsIDIyNyk7XG4kbGlnaHRncmV5LTA6IHJnYigyNDEsIDI0MCwgMjQyKTtcbiRhbG1vc3R3aGl0ZTogcmdiKDI1MywgMjUzLCAyNTMpO1xuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cbiRibGFjay1saWdodGVyOiByZ2IoMzgsIDM3LCAzOSk7XG4kYmxhY2s6IHJnYig0MSwgNDAsIDQyKTtcbiRibGFjay1kYXJrZXI6IHJnYig0NCwgNDMsIDQ1KTtcblxuJGluZGlnby1saWdodGVyOiAjOWZhOGRhO1xuJGluZGlnbzogIzVjNmJjMDtcbiRpbmRpZ28tZGFya2VyOiAjNDE1MGE4O1xuXG4kZGFya25hdnk6ICMxNjI0NDc7XG4kcGluazogI2U0M2Y1YTtcbiRsaWdodG5hdnk6ICMyNDI2Mjk7XG4kbmF2eWJsYWNrOiAjMWIxYjJmO1xuJG9saXZlOiAjNWM3YTFlO1xuJHllbGxvdzogI2ZmZmM2NDtcblxuJHN0YWNrb3ZlcmZsb3ctYnJhbmQtY29sb3I6ICNmNDgwMjQ7XG4kZ2V0LXBvY2tldC1icmFuZC1jb2xvcjogI2VmNDA1NjtcblxuJHByaW1hcnktY29sb3I6ICRpbmRpZ287XG4kc2Vjb25kYXJ5LWNvbG9yOiAkaW5kaWdvLWxpZ2h0ZXI7XG5cbiRiZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kY29udHJvbC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrO1xuJGNvbnRlbnQtcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItbWFuYWdlbWVudC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/user-management-panel/registration/registration.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/components/dashboard/user-management-panel/registration/registration.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppComponentsDashboardUserManagementPanelRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _state_app_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../state/app.actions */
    "./src/app/state/app.actions.ts");

    var RegistrationComponent = /*#__PURE__*/function () {
      // TODO: refactor the registration component & styles.
      function RegistrationComponent(ref, store, formBuilder, userService) {
        _classCallCheck(this, RegistrationComponent);

        this.ref = ref;
        this.store = store;
        this.formBuilder = formBuilder;
        this.userService = userService;
      }

      _createClass(RegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registrationForm = this.formBuilder.group({
            email: [""],
            password: [""]
          });
          this.isSubmitted = false;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          this.isSubmitted = true;
          this.userService.registerUser(this.registrationForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
            return value;
          })).subscribe(function (value) {
            if (value.isSuccessful) {
              _this4.text = "Registration Successful";

              _this4.ref.markForCheck();

              _this4.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_6__["navigateToDashboard"]());
            } else {
              _this4.text = value.message["message"];

              _this4.ref.markForCheck();
            }
          });
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "registration",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/registration/registration.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registration.component.scss */
      "./src/app/components/dashboard/user-management-panel/registration/registration.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])], RegistrationComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/user-management-panel/subscription-management/subscription-management.component.scss":
  /*!***************************************************************************************************************************!*\
    !*** ./src/app/components/dashboard/user-management-panel/subscription-management/subscription-management.component.scss ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardUserManagementPanelSubscriptionManagementSubscriptionManagementComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  margin: auto;\n}\n:host main {\n  display: flex;\n  width: 400px;\n}\n:host main .card {\n  background: white;\n  box-shadow: 0 4px 0 0 #fdfdfd;\n  border-radius: 3px;\n  border-width: 1.5px;\n  border-color: white;\n  opacity: 0.75;\n  margin: 0;\n}\n:host main form {\n  margin: 20px 40px;\n}\n:host main form section {\n  margin: 30px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlci1tYW5hZ2VtZW50LXBhbmVsL3N1YnNjcmlwdGlvbi1tYW5hZ2VtZW50L3N1YnNjcmlwdGlvbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyLW1hbmFnZW1lbnQtcGFuZWwvc3Vic2NyaXB0aW9uLW1hbmFnZW1lbnQvc3Vic2NyaXB0aW9uLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1jb2RlLWRhaWx5L2NsaWVudC9zcmMvYXBwL3N0eWxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7QUNERjtBREdFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNESjtBREdJO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkVKRTtFRktGLGFBQUE7RUFDQSxTQUFBO0FDRE47QURJSTtFQUNFLGlCQUFBO0FDRk47QURJTTtFQUNFLGNBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXItbWFuYWdlbWVudC1wYW5lbC9zdWJzY3JpcHRpb24tbWFuYWdlbWVudC9zdWJzY3JpcHRpb24tbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3NcIjtcblxuOmhvc3Qge1xuICBtYXJnaW46IGF1dG87XG5cbiAgbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNDAwcHg7XG5cbiAgICAuY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAwIDAgJGFsbW9zdHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgYm9yZGVyLXdpZHRoOiAxLjVweDtcbiAgICAgIGJvcmRlci1jb2xvcjogJHdoaXRlO1xuICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICBmb3JtIHtcbiAgICAgIG1hcmdpbjogMjBweCA0MHB4O1xuXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgICB9XG5cbiAgICAgIC8vIC5yZWdpc3Rlci1ncm91cCB7XG4gICAgICAvLyAgIDo6bmctZGVlcCB7XG4gICAgICAvLyAgICAgLmNsci1jb250cm9sLWNvbnRhaW5lciB7XG4gICAgICAvLyAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLy8gICAgICAgLmNsci1pbnB1dC1ncm91cCB7XG4gICAgICAvLyAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAvLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLy8gICAgICAgfVxuXG4gICAgICAvLyAgICAgICBpbnB1dCB7XG4gICAgICAvLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLy8gICAgICAgfVxuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBtYXJnaW46IGF1dG87XG59XG46aG9zdCBtYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDQwMHB4O1xufVxuOmhvc3QgbWFpbiAuY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDRweCAwIDAgI2ZkZmRmZDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItd2lkdGg6IDEuNXB4O1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjc1O1xuICBtYXJnaW46IDA7XG59XG46aG9zdCBtYWluIGZvcm0ge1xuICBtYXJnaW46IDIwcHggNDBweDtcbn1cbjpob3N0IG1haW4gZm9ybSBzZWN0aW9uIHtcbiAgbWFyZ2luOiAzMHB4IDA7XG59IiwiJGRhcmtncmV5LTA6IHJnYigxOCwgMTcsIDE5KTtcbiRkYXJrZ3JleS0xOiByZ2IoMzAsIDI5LCAzMSk7XG4kZGFya2dyZXktMjogcmdiKDQ1LCA0NCwgNDYpO1xuJGRhcmtncmV5LTM6IHJnYig5MCwgODksIDkxKTtcbiRncmV5OiByZ2IoMTIwLCAxMTksIDEyMSk7XG4kbGlnaHRncmV5LTM6IHJnYigxOTYsIDE5NSwgMTk3KTtcbiRsaWdodGdyZXktMjogcmdiKDIxMSwgMjEwLCAyMTIpO1xuJGxpZ2h0Z3JleS0xOiByZ2IoMjI2LCAyMjUsIDIyNyk7XG4kbGlnaHRncmV5LTA6IHJnYigyNDEsIDI0MCwgMjQyKTtcbiRhbG1vc3R3aGl0ZTogcmdiKDI1MywgMjUzLCAyNTMpO1xuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cbiRibGFjay1saWdodGVyOiByZ2IoMzgsIDM3LCAzOSk7XG4kYmxhY2s6IHJnYig0MSwgNDAsIDQyKTtcbiRibGFjay1kYXJrZXI6IHJnYig0NCwgNDMsIDQ1KTtcblxuJGluZGlnby1saWdodGVyOiAjOWZhOGRhO1xuJGluZGlnbzogIzVjNmJjMDtcbiRpbmRpZ28tZGFya2VyOiAjNDE1MGE4O1xuXG4kZGFya25hdnk6ICMxNjI0NDc7XG4kcGluazogI2U0M2Y1YTtcbiRsaWdodG5hdnk6ICMyNDI2Mjk7XG4kbmF2eWJsYWNrOiAjMWIxYjJmO1xuJG9saXZlOiAjNWM3YTFlO1xuJHllbGxvdzogI2ZmZmM2NDtcblxuJHN0YWNrb3ZlcmZsb3ctYnJhbmQtY29sb3I6ICNmNDgwMjQ7XG4kZ2V0LXBvY2tldC1icmFuZC1jb2xvcjogI2VmNDA1NjtcblxuJHByaW1hcnktY29sb3I6ICRpbmRpZ287XG4kc2Vjb25kYXJ5LWNvbG9yOiAkaW5kaWdvLWxpZ2h0ZXI7XG5cbiRiZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kY29udHJvbC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrO1xuJGNvbnRlbnQtcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItbWFuYWdlbWVudC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/user-management-panel/subscription-management/subscription-management.component.ts":
  /*!*************************************************************************************************************************!*\
    !*** ./src/app/components/dashboard/user-management-panel/subscription-management/subscription-management.component.ts ***!
    \*************************************************************************************************************************/

  /*! exports provided: SubscriptionManagementComponent */

  /***/
  function srcAppComponentsDashboardUserManagementPanelSubscriptionManagementSubscriptionManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscriptionManagementComponent", function () {
      return SubscriptionManagementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SubscriptionManagementComponent = /*#__PURE__*/function () {
      function SubscriptionManagementComponent() {
        _classCallCheck(this, SubscriptionManagementComponent);
      }

      _createClass(SubscriptionManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SubscriptionManagementComponent;
    }();

    SubscriptionManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "subscription-management",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subscription-management.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/subscription-management/subscription-management.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subscription-management.component.scss */
      "./src/app/components/dashboard/user-management-panel/subscription-management/subscription-management.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SubscriptionManagementComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/user-management-panel/user-management-panel.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/app/components/dashboard/user-management-panel/user-management-panel.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardUserManagementPanelUserManagementPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "main {\n  background: #262527;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: 0 auto 0 auto;\n  max-width: 900px;\n  padding: 200px 20px 200px 20px;\n}\nmain section {\n  margin: auto;\n  width: 100%;\n}\nmain section .card-list-container {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlci1tYW5hZ2VtZW50LXBhbmVsL3VzZXItbWFuYWdlbWVudC1wYW5lbC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2NvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyLW1hbmFnZW1lbnQtcGFuZWwvdXNlci1tYW5hZ2VtZW50LXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJDU2M7RURSZCxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FFREY7QUZHRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FFREo7QUZHSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBRUROIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlci1tYW5hZ2VtZW50LXBhbmVsL3VzZXItbWFuYWdlbWVudC1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3NcIjtcblxubWFpbiB7XG4gIGJhY2tncm91bmQ6ICR1c2VyLW1hbmFnZW1lbnQtYmctY29sb3I7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBwYWRkaW5nOiAyMDBweCAyMHB4IDIwMHB4IDIwcHg7XG5cbiAgc2VjdGlvbiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmNhcmQtbGlzdC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gIH1cbn1cbiIsIiRkYXJrZ3JleS0wOiByZ2IoMTgsIDE3LCAxOSk7XG4kZGFya2dyZXktMTogcmdiKDMwLCAyOSwgMzEpO1xuJGRhcmtncmV5LTI6IHJnYig0NSwgNDQsIDQ2KTtcbiRkYXJrZ3JleS0zOiByZ2IoOTAsIDg5LCA5MSk7XG4kZ3JleTogcmdiKDEyMCwgMTE5LCAxMjEpO1xuJGxpZ2h0Z3JleS0zOiByZ2IoMTk2LCAxOTUsIDE5Nyk7XG4kbGlnaHRncmV5LTI6IHJnYigyMTEsIDIxMCwgMjEyKTtcbiRsaWdodGdyZXktMTogcmdiKDIyNiwgMjI1LCAyMjcpO1xuJGxpZ2h0Z3JleS0wOiByZ2IoMjQxLCAyNDAsIDI0Mik7XG4kYWxtb3N0d2hpdGU6IHJnYigyNTMsIDI1MywgMjUzKTtcbiR3aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4kYmxhY2stbGlnaHRlcjogcmdiKDM4LCAzNywgMzkpO1xuJGJsYWNrOiByZ2IoNDEsIDQwLCA0Mik7XG4kYmxhY2stZGFya2VyOiByZ2IoNDQsIDQzLCA0NSk7XG5cbiRpbmRpZ28tbGlnaHRlcjogIzlmYThkYTtcbiRpbmRpZ286ICM1YzZiYzA7XG4kaW5kaWdvLWRhcmtlcjogIzQxNTBhODtcblxuJGRhcmtuYXZ5OiAjMTYyNDQ3O1xuJHBpbms6ICNlNDNmNWE7XG4kbGlnaHRuYXZ5OiAjMjQyNjI5O1xuJG5hdnlibGFjazogIzFiMWIyZjtcbiRvbGl2ZTogIzVjN2ExZTtcbiR5ZWxsb3c6ICNmZmZjNjQ7XG5cbiRzdGFja292ZXJmbG93LWJyYW5kLWNvbG9yOiAjZjQ4MDI0O1xuJGdldC1wb2NrZXQtYnJhbmQtY29sb3I6ICNlZjQwNTY7XG5cbiRwcmltYXJ5LWNvbG9yOiAkaW5kaWdvO1xuJHNlY29uZGFyeS1jb2xvcjogJGluZGlnby1saWdodGVyO1xuXG4kYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJGNvbnRyb2wtcGFuZWwtYmctY29sb3I6ICRibGFjaztcbiRjb250ZW50LXBhbmVsLWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiR1c2VyLW1hbmFnZW1lbnQtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuIiwibWFpbiB7XG4gIGJhY2tncm91bmQ6ICMyNjI1Mjc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBwYWRkaW5nOiAyMDBweCAyMHB4IDIwMHB4IDIwcHg7XG59XG5tYWluIHNlY3Rpb24ge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxubWFpbiBzZWN0aW9uIC5jYXJkLWxpc3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/user-management-panel/user-management-panel.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/dashboard/user-management-panel/user-management-panel.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: UserManagementPanelComponent */

  /***/
  function srcAppComponentsDashboardUserManagementPanelUserManagementPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserManagementPanelComponent", function () {
      return UserManagementPanelComponent;
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


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _state_app_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../state/app.actions */
    "./src/app/state/app.actions.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/state/app.selectors */
    "./src/app/state/app.selectors.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_pocket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/pocket.service */
    "./src/app/services/pocket.service.ts");
    /* harmony import */


    var angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! angular-animations */
    "./node_modules/angular-animations/fesm2015/angular-animations.js");

    var UserManagementPanelComponent = /*#__PURE__*/function () {
      function UserManagementPanelComponent(router, route, store, userService, pocketService) {
        _classCallCheck(this, UserManagementPanelComponent);

        this.router = router;
        this.route = route;
        this.store = store;
        this.userService = userService;
        this.pocketService = pocketService;
      }

      _createClass(UserManagementPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.userAuthSubscription = this.store.select(function (state) {
                      return Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_7__["selectUserAuth"])(state);
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (userAuth) {
                      if (userAuth && userAuth.email) {
                        _this5.hasUserLoggedIn = true;
                      }

                      if (userAuth && userAuth.pocketAccessToken) {
                        _this5.hasUserConnectedWithPocket = true;
                      }
                    })).subscribe();
                    this.pocketConnectionSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])(this.route.paramMap, this.store.select(function (state) {
                      return Object(src_app_state_app_selectors__WEBPACK_IMPORTED_MODULE_7__["selectUserAuth"])(state);
                    })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (_ref) {
                      var _ref2 = _slicedToArray(_ref, 2),
                          params = _ref2[0],
                          userAuth = _ref2[1];

                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var requestToken;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                requestToken = params.get("pocket_request_token"); // TODO: move the logic to NgRx effects.

                                if (requestToken) {
                                  this.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_5__["authorizePocket"]({
                                    email: userAuth.email,
                                    requestToken: requestToken
                                  }));
                                }

                              case 2:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    })).subscribe();

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.userAuthSubscription) {
            this.userAuthSubscription.unsubscribe();
          }

          if (this.pocketConnectionSubscription) {
            this.pocketConnectionSubscription.unsubscribe();
          }
        }
      }, {
        key: "onRegisterClicked",
        value: function onRegisterClicked() {
          this.router.navigate(["/user/register"]);
        }
      }, {
        key: "onLoginClicked",
        value: function onLoginClicked() {
          this.router.navigate(["/user/login"]);
        }
      }, {
        key: "onPocketClicked",
        value: function onPocketClicked() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!this.hasUserConnectedWithPocket) {
                      _context3.next = 2;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 2:
                    _context3.next = 4;
                    return this.pocketService.redirectToPocket();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "onLogoutClicked",
        value: function onLogoutClicked() {
          this.userService.logoutUser();
        }
      }, {
        key: "onManageSubscriptionClicked",
        value: function onManageSubscriptionClicked() {
          this.router.navigate(["/subscription"]);
        }
      }, {
        key: "pocketCardTitle",
        get: function get() {
          return this.hasUserConnectedWithPocket ? "Pocket Connected" : "Connect to Pocket";
        }
      }]);

      return UserManagementPanelComponent;
    }();

    UserManagementPanelComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_services_pocket_service__WEBPACK_IMPORTED_MODULE_9__["PocketService"]
      }];
    };

    UserManagementPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "user-management-panel",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-management-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/user-management-panel/user-management-panel.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      animations: [Object(angular_animations__WEBPACK_IMPORTED_MODULE_10__["fadeInOnEnterAnimation"])(), Object(angular_animations__WEBPACK_IMPORTED_MODULE_10__["fadeOutOnLeaveAnimation"])({
        delay: 25
      })],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-management-panel.component.scss */
      "./src/app/components/dashboard/user-management-panel/user-management-panel.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_services_pocket_service__WEBPACK_IMPORTED_MODULE_9__["PocketService"]])], UserManagementPanelComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/answer-section/answer-section.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/components/shared/answer-section/answer-section.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedAnswerSectionAnswerSectionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "main {\n  margin: 0 0 20px 0;\n}\nmain > div {\n  margin: auto;\n  padding: 5px 0 5px 0;\n  width: 90%;\n}\nmain > .answer-content {\n  padding-bottom: 30px;\n}\nmain > .answer-content ::ng-deep p {\n  color: #121113;\n  margin-top: 10px;\n}\nmain > .answer-content ::ng-deep a {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\nmain > .answer-content ::ng-deep pre {\n  white-space: pre-wrap !important;\n}\nmain > .answer-content ::ng-deep pre code {\n  color: #9fa8da;\n  display: inline-block;\n  overflow-x: auto;\n  white-space: pre-line;\n  width: 100%;\n}\nmain > .answer-content ::ng-deep img {\n  width: 100%;\n}\nmain > .anwer-meta {\n  display: flex;\n}\nmain > .anwer-meta > .division {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\nmain > .answer-status {\n  color: #121113;\n  display: flex;\n  font-size: 14px;\n}\nmain > .answer-status > div {\n  margin-right: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvYW5zd2VyLXNlY3Rpb24vYW5zd2VyLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Fuc3dlci1zZWN0aW9uL2Fuc3dlci1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2ZueC9HaXRSZXBvcy9mbngtY29kZS1kYWlseS9jbGllbnQvc3JjL2FwcC9zdHlsZXMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQ0RGO0FER0U7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDREo7QURJRTtFQUNFLG9CQUFBO0FDRko7QURLTTtFQUNFLGNFaEJLO0VGaUJMLGdCQUFBO0FDSFI7QURNTTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNKUjtBRE9NO0VBQ0UsZ0NBQUE7QUNMUjtBRE9RO0VBQ0UsY0VmTztFRmdCUCxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDTFY7QURTTTtFQUNFLFdBQUE7QUNQUjtBRFlFO0VBQ0UsYUFBQTtBQ1ZKO0FEWUk7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FDVk47QURjRTtFQUNFLGNFdkRTO0VGd0RULGFBQUE7RUFDQSxlQUFBO0FDWko7QURjSTtFQUNFLGtCQUFBO0FDWk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9hbnN3ZXItc2VjdGlvbi9hbnN3ZXItc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3NcIjtcblxubWFpbiB7XG4gIG1hcmdpbjogMCAwIDIwcHggMDtcblxuICA+IGRpdiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDVweCAwIDVweCAwO1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICA+IC5hbnN3ZXItY29udGVudCB7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG5cbiAgICA6Om5nLWRlZXAge1xuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiAkZGFya2dyZXktMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBwcmUge1xuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcblxuICAgICAgICBjb2RlIHtcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgPiAuYW53ZXItbWV0YSB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgID4gLmRpdmlzaW9uIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgIH1cbiAgfVxuXG4gID4gLmFuc3dlci1zdGF0dXMge1xuICAgIGNvbG9yOiAkZGFya2dyZXktMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgID4gZGl2IHtcbiAgICAgIG1hcmdpbi1yaWdodDogMjFweDtcbiAgICB9XG4gIH1cbn1cbiIsIm1haW4ge1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG59XG5tYWluID4gZGl2IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiA1cHggMCA1cHggMDtcbiAgd2lkdGg6IDkwJTtcbn1cbm1haW4gPiAuYW5zd2VyLWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbm1haW4gPiAuYW5zd2VyLWNvbnRlbnQgOjpuZy1kZWVwIHAge1xuICBjb2xvcjogIzEyMTExMztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbm1haW4gPiAuYW5zd2VyLWNvbnRlbnQgOjpuZy1kZWVwIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTAwJTtcbn1cbm1haW4gPiAuYW5zd2VyLWNvbnRlbnQgOjpuZy1kZWVwIHByZSB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xufVxubWFpbiA+IC5hbnN3ZXItY29udGVudCA6Om5nLWRlZXAgcHJlIGNvZGUge1xuICBjb2xvcjogIzlmYThkYTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIHdpZHRoOiAxMDAlO1xufVxubWFpbiA+IC5hbnN3ZXItY29udGVudCA6Om5nLWRlZXAgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5tYWluID4gLmFud2VyLW1ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xufVxubWFpbiA+IC5hbndlci1tZXRhID4gLmRpdmlzaW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbn1cbm1haW4gPiAuYW5zd2VyLXN0YXR1cyB7XG4gIGNvbG9yOiAjMTIxMTEzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5tYWluID4gLmFuc3dlci1zdGF0dXMgPiBkaXYge1xuICBtYXJnaW4tcmlnaHQ6IDIxcHg7XG59IiwiJGRhcmtncmV5LTA6IHJnYigxOCwgMTcsIDE5KTtcbiRkYXJrZ3JleS0xOiByZ2IoMzAsIDI5LCAzMSk7XG4kZGFya2dyZXktMjogcmdiKDQ1LCA0NCwgNDYpO1xuJGRhcmtncmV5LTM6IHJnYig5MCwgODksIDkxKTtcbiRncmV5OiByZ2IoMTIwLCAxMTksIDEyMSk7XG4kbGlnaHRncmV5LTM6IHJnYigxOTYsIDE5NSwgMTk3KTtcbiRsaWdodGdyZXktMjogcmdiKDIxMSwgMjEwLCAyMTIpO1xuJGxpZ2h0Z3JleS0xOiByZ2IoMjI2LCAyMjUsIDIyNyk7XG4kbGlnaHRncmV5LTA6IHJnYigyNDEsIDI0MCwgMjQyKTtcbiRhbG1vc3R3aGl0ZTogcmdiKDI1MywgMjUzLCAyNTMpO1xuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cbiRibGFjay1saWdodGVyOiByZ2IoMzgsIDM3LCAzOSk7XG4kYmxhY2s6IHJnYig0MSwgNDAsIDQyKTtcbiRibGFjay1kYXJrZXI6IHJnYig0NCwgNDMsIDQ1KTtcblxuJGluZGlnby1saWdodGVyOiAjOWZhOGRhO1xuJGluZGlnbzogIzVjNmJjMDtcbiRpbmRpZ28tZGFya2VyOiAjNDE1MGE4O1xuXG4kZGFya25hdnk6ICMxNjI0NDc7XG4kcGluazogI2U0M2Y1YTtcbiRsaWdodG5hdnk6ICMyNDI2Mjk7XG4kbmF2eWJsYWNrOiAjMWIxYjJmO1xuJG9saXZlOiAjNWM3YTFlO1xuJHllbGxvdzogI2ZmZmM2NDtcblxuJHN0YWNrb3ZlcmZsb3ctYnJhbmQtY29sb3I6ICNmNDgwMjQ7XG4kZ2V0LXBvY2tldC1icmFuZC1jb2xvcjogI2VmNDA1NjtcblxuJHByaW1hcnktY29sb3I6ICRpbmRpZ287XG4kc2Vjb25kYXJ5LWNvbG9yOiAkaW5kaWdvLWxpZ2h0ZXI7XG5cbiRiZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kY29udHJvbC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrO1xuJGNvbnRlbnQtcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItbWFuYWdlbWVudC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/shared/answer-section/answer-section.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/shared/answer-section/answer-section.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AnswerSectionComponent */

  /***/
  function srcAppComponentsSharedAnswerSectionAnswerSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnswerSectionComponent", function () {
      return AnswerSectionComponent;
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


    var src_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/helpers */
    "./src/app/helpers.ts");

    var AnswerSectionComponent = /*#__PURE__*/function () {
      function AnswerSectionComponent() {
        _classCallCheck(this, AnswerSectionComponent);
      }

      _createClass(AnswerSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ownerName = this.answer.owner.display_name;
          this.ownerProfileImageUrl = this.answer.owner.profile_image;
          this.ownerReputation = this.answer.owner.reputation;
          this.answerContentMarkdown = this.answer.body_markdown;
          this.answerUpvotes = this.answer.up_vote_count;
          this.answerDownvotes = this.answer.down_vote_count;
          this.creationDate = Object(src_app_helpers__WEBPACK_IMPORTED_MODULE_2__["parseUnixTimestamp"])(this.answer.creation_date);
          this.lastEditDate = Object(src_app_helpers__WEBPACK_IMPORTED_MODULE_2__["parseUnixTimestamp"])(this.answer.last_edit_date);
        }
      }, {
        key: "contentRawHtml",
        get: function get() {
          return this.answer.body;
        }
      }]);

      return AnswerSectionComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AnswerSectionComponent.prototype, "answer", void 0);
    AnswerSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "answer-section",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./answer-section.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/answer-section/answer-section.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./answer-section.component.scss */
      "./src/app/components/shared/answer-section/answer-section.component.scss"))["default"]]
    })], AnswerSectionComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/question-badge/question-badge.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/components/shared/question-badge/question-badge.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedQuestionBadgeQuestionBadgeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&family=Mulish:wght@400;500;600&display=swap\");\nmain > div {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\nmain > div article {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n}\nmain > div article img {\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n}\nmain > div article:first-child h4 {\n  color: #262527;\n  font-family: \"Fira Code\";\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0 30px 0 10px;\n}\nmain > div article:nth-child(2) h4 {\n  font-family: \"Fira Code\";\n  margin: 0 10px 0 10px;\n}\nmain > div article:nth-child(2) fa-icon {\n  margin-right: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1jb2RlLWRhaWx5L2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3F1ZXN0aW9uLWJhZGdlL3F1ZXN0aW9uLWJhZGdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9xdWVzdGlvbi1iYWRnZS9xdWVzdGlvbi1iYWRnZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGtJQUFBO0FDR1I7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDREY7QURHRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDREo7QURHSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNETjtBREtNO0VBQ0UsY0VUUTtFRlVSLHdCRG5CRztFQ29CSCxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0hSO0FEUU07RUFDRSx3QkQ1Qkc7RUM2QkgscUJBQUE7QUNOUjtBRFNNO0VBQ0UsaUJBQUE7QUNQUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3F1ZXN0aW9uLWJhZGdlL3F1ZXN0aW9uLWJhZGdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErQ29kZTp3Z2h0QDMwMDs0MDA7NTAwOzYwMCZmYW1pbHk9TXVsaXNoOndnaHRANDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwXCIpO1xuXG4kbWFpbmZvbnQ6IFwiTXVsaXNoXCI7XG4kY29kZWZvbnQ6IFwiRmlyYSBDb2RlXCI7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2ZvbnRzLnNjc3NcIjtcblxubWFpbiA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGFydGljbGUge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgaW1nIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgIH1cblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgaDQge1xuICAgICAgICBjb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkY29kZWZvbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luOiAwIDMwcHggMCAxMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgIGg0IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRjb2RlZm9udDtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xuICAgICAgfVxuXG4gICAgICBmYS1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStDb2RlOndnaHRAMzAwOzQwMDs1MDA7NjAwJmZhbWlseT1NdWxpc2g6d2dodEA0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXBcIik7XG5tYWluID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG59XG5tYWluID4gZGl2IGFydGljbGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxubWFpbiA+IGRpdiBhcnRpY2xlIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbn1cbm1haW4gPiBkaXYgYXJ0aWNsZTpmaXJzdC1jaGlsZCBoNCB7XG4gIGNvbG9yOiAjMjYyNTI3O1xuICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDAgMzBweCAwIDEwcHg7XG59XG5tYWluID4gZGl2IGFydGljbGU6bnRoLWNoaWxkKDIpIGg0IHtcbiAgZm9udC1mYW1pbHk6IFwiRmlyYSBDb2RlXCI7XG4gIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcbn1cbm1haW4gPiBkaXYgYXJ0aWNsZTpudGgtY2hpbGQoMikgZmEtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufSIsIiRkYXJrZ3JleS0wOiByZ2IoMTgsIDE3LCAxOSk7XG4kZGFya2dyZXktMTogcmdiKDMwLCAyOSwgMzEpO1xuJGRhcmtncmV5LTI6IHJnYig0NSwgNDQsIDQ2KTtcbiRkYXJrZ3JleS0zOiByZ2IoOTAsIDg5LCA5MSk7XG4kZ3JleTogcmdiKDEyMCwgMTE5LCAxMjEpO1xuJGxpZ2h0Z3JleS0zOiByZ2IoMTk2LCAxOTUsIDE5Nyk7XG4kbGlnaHRncmV5LTI6IHJnYigyMTEsIDIxMCwgMjEyKTtcbiRsaWdodGdyZXktMTogcmdiKDIyNiwgMjI1LCAyMjcpO1xuJGxpZ2h0Z3JleS0wOiByZ2IoMjQxLCAyNDAsIDI0Mik7XG4kYWxtb3N0d2hpdGU6IHJnYigyNTMsIDI1MywgMjUzKTtcbiR3aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4kYmxhY2stbGlnaHRlcjogcmdiKDM4LCAzNywgMzkpO1xuJGJsYWNrOiByZ2IoNDEsIDQwLCA0Mik7XG4kYmxhY2stZGFya2VyOiByZ2IoNDQsIDQzLCA0NSk7XG5cbiRpbmRpZ28tbGlnaHRlcjogIzlmYThkYTtcbiRpbmRpZ286ICM1YzZiYzA7XG4kaW5kaWdvLWRhcmtlcjogIzQxNTBhODtcblxuJGRhcmtuYXZ5OiAjMTYyNDQ3O1xuJHBpbms6ICNlNDNmNWE7XG4kbGlnaHRuYXZ5OiAjMjQyNjI5O1xuJG5hdnlibGFjazogIzFiMWIyZjtcbiRvbGl2ZTogIzVjN2ExZTtcbiR5ZWxsb3c6ICNmZmZjNjQ7XG5cbiRzdGFja292ZXJmbG93LWJyYW5kLWNvbG9yOiAjZjQ4MDI0O1xuJGdldC1wb2NrZXQtYnJhbmQtY29sb3I6ICNlZjQwNTY7XG5cbiRwcmltYXJ5LWNvbG9yOiAkaW5kaWdvO1xuJHNlY29uZGFyeS1jb2xvcjogJGluZGlnby1saWdodGVyO1xuXG4kYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJGNvbnRyb2wtcGFuZWwtYmctY29sb3I6ICRibGFjaztcbiRjb250ZW50LXBhbmVsLWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiR1c2VyLW1hbmFnZW1lbnQtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/shared/question-badge/question-badge.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/shared/question-badge/question-badge.component.ts ***!
    \******************************************************************************/

  /*! exports provided: QuestionBadgeComponent */

  /***/
  function srcAppComponentsSharedQuestionBadgeQuestionBadgeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionBadgeComponent", function () {
      return QuestionBadgeComponent;
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


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../helpers */
    "./src/app/helpers.ts");

    var QuestionBadgeComponent = /*#__PURE__*/function () {
      function QuestionBadgeComponent() {
        _classCallCheck(this, QuestionBadgeComponent);

        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEye"];
        this.faCommentDots = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCommentDots"];
        this.faPenSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPenSquare"];
        this.faStackOverflow = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faStackOverflow"];
        this.faGetPocket = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGetPocket"];
      }

      _createClass(QuestionBadgeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ownerName = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["parseHtmlEntities"])(this.owner.display_name);
          this.ownerProfileImageUrl = this.owner.profile_image;
        }
      }, {
        key: "profileImageUrl",
        get: function get() {
          return !this.ownerProfileImageUrl ? "../../../../assets/default-user.png" : this.ownerProfileImageUrl;
        }
      }]);

      return QuestionBadgeComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QuestionBadgeComponent.prototype, "owner", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], QuestionBadgeComponent.prototype, "creationDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], QuestionBadgeComponent.prototype, "viewCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], QuestionBadgeComponent.prototype, "answerCount", void 0);
    QuestionBadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "question-badge",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./question-badge.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-badge/question-badge.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./question-badge.component.scss */
      "./src/app/components/shared/question-badge/question-badge.component.scss"))["default"]]
    })], QuestionBadgeComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/question-card/question-card.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/components/shared/question-card/question-card.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedQuestionCardQuestionCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  width: 800px;\n}\n:host main {\n  width: 100%;\n}\n:host main ::ng-deep .card.clickable:hover {\n  box-shadow: 0 4px 0 0 #5c6bc0;\n}\n:host main .card {\n  background: white;\n  box-shadow: 0 4px 0 0 #fdfdfd;\n  border-radius: 3px;\n  border-width: 1.5px;\n  border-color: white;\n  opacity: 0.75;\n}\n:host main .card .card-header {\n  border: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: auto;\n  padding: 10px 0;\n  width: 95%;\n  word-wrap: break-word;\n}\n:host main .card .card-header > article {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n:host main .card .card-header > article fa-icon {\n  color: #787779;\n  cursor: pointer;\n  font-size: 16px;\n  flex-shrink: 0;\n  margin: 8px 4px 8px 28px;\n  height: 28px !important;\n  line-height: 28px;\n}\n:host main .card .card-header > article fa-icon:hover {\n  color: #5c6bc0;\n}\n:host main .card .card-header question-badge {\n  padding: 15px 0 15px 0;\n}\n:host main .card .card-header .info-buttons {\n  display: flex;\n  padding: 10px 0 10px 0;\n}\n:host main .card .card-header .info-buttons > article:nth-child(1) {\n  display: flex;\n  gap: 10px;\n}\n:host main .card .card-header .info-buttons > article:nth-child(2) {\n  margin-left: auto;\n}\n:host main .card .card-header .info-buttons > article:nth-child(2) > fa-icon {\n  color: #787779;\n  cursor: pointer;\n  font-size: 24px;\n  margin-left: 15px;\n}\n:host main .card .card-header .info-buttons > article:nth-child(2) .stackoverflow-icon:hover {\n  color: #f48024;\n}\n:host main .card .card-header .info-buttons > article:nth-child(2) .getpocket-icon:hover {\n  color: #ef4056;\n}\n:host main .card hr {\n  border: 2px solid #2d2c2e;\n  box-sizing: border-box;\n  margin: 5px auto 5px auto;\n  width: 97.5%;\n}\n:host main .card .card-body {\n  margin: auto auto 3rem auto;\n  width: 92.5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcXVlc3Rpb24tY2FyZC9xdWVzdGlvbi1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9xdWVzdGlvbi1jYXJkL3F1ZXN0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1jb2RlLWRhaWx5L2NsaWVudC9zcmMvYXBwL3N0eWxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7QUNERjtBREdFO0VBQ0UsV0FBQTtBQ0RKO0FESU07RUFDRSw2QkFBQTtBQ0ZSO0FETUk7RUFDRSxpQkVMRTtFRk1GLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CRVRFO0VGVUYsYUFBQTtBQ0pOO0FETU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQ0pSO0FETVE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0pWO0FETVU7RUFDRSxjRWxDTDtFRm1DSyxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNKWjtBRE1ZO0VBQ0UsY0U5Qkw7QUQwQlQ7QURTUTtFQUNFLHNCQUFBO0FDUFY7QURVUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ1JWO0FEV1k7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQ1RkO0FEWVk7RUFDRSxpQkFBQTtBQ1ZkO0FEWWM7RUFDRSxjRWxFVDtFRm1FUyxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDVmhCO0FEYWM7RUFDRSxjRWxEWTtBRHVDNUI7QURjYztFQUNFLGNFckRTO0FEeUN6QjtBRG1CTTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNqQlI7QURvQk07RUFDRSwyQkFBQTtFQUNBLFlBQUE7QUNsQlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9xdWVzdGlvbi1jYXJkL3F1ZXN0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDgwMHB4O1xuXG4gIG1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIC5jYXJkLmNsaWNrYWJsZTpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDAgMCAkaW5kaWdvO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDAgMCAkYWxtb3N0d2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBib3JkZXItd2lkdGg6IDEuNXB4O1xuICAgICAgYm9yZGVyLWNvbG9yOiAkd2hpdGU7XG4gICAgICBvcGFjaXR5OiAwLjc1O1xuXG4gICAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICAgICAgICA+IGFydGljbGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICBmYS1pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JleTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiA4cHggNHB4IDhweCAyOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAkaW5kaWdvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXN0aW9uLWJhZGdlIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDAgMTVweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZm8tYnV0dG9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xuXG4gICAgICAgICAgPiBhcnRpY2xlIHtcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuXG4gICAgICAgICAgICAgID4gZmEtaWNvbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmV5O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuc3RhY2tvdmVyZmxvdy1pY29uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHN0YWNrb3ZlcmZsb3ctYnJhbmQtY29sb3I7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuZ2V0cG9ja2V0LWljb246aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ2V0LXBvY2tldC1icmFuZC1jb2xvcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBociB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRkYXJrZ3JleS0yO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtYXJnaW46IDVweCBhdXRvIDVweCBhdXRvO1xuICAgICAgICB3aWR0aDogOTcuNSU7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkLWJvZHkge1xuICAgICAgICBtYXJnaW46IGF1dG8gYXV0byAzcmVtIGF1dG87XG4gICAgICAgIHdpZHRoOiA5Mi41JTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgd2lkdGg6IDgwMHB4O1xufVxuOmhvc3QgbWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWFpbiA6Om5nLWRlZXAgLmNhcmQuY2xpY2thYmxlOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAwICM1YzZiYzA7XG59XG46aG9zdCBtYWluIC5jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDAgMCAjZmRmZGZkO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci13aWR0aDogMS41cHg7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNzU7XG59XG46aG9zdCBtYWluIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgd2lkdGg6IDk1JTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuOmhvc3QgbWFpbiAuY2FyZCAuY2FyZC1oZWFkZXIgPiBhcnRpY2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgbWFpbiAuY2FyZCAuY2FyZC1oZWFkZXIgPiBhcnRpY2xlIGZhLWljb24ge1xuICBjb2xvcjogIzc4Nzc3OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW46IDhweCA0cHggOHB4IDI4cHg7XG4gIGhlaWdodDogMjhweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbjpob3N0IG1haW4gLmNhcmQgLmNhcmQtaGVhZGVyID4gYXJ0aWNsZSBmYS1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICM1YzZiYzA7XG59XG46aG9zdCBtYWluIC5jYXJkIC5jYXJkLWhlYWRlciBxdWVzdGlvbi1iYWRnZSB7XG4gIHBhZGRpbmc6IDE1cHggMCAxNXB4IDA7XG59XG46aG9zdCBtYWluIC5jYXJkIC5jYXJkLWhlYWRlciAuaW5mby1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbn1cbjpob3N0IG1haW4gLmNhcmQgLmNhcmQtaGVhZGVyIC5pbmZvLWJ1dHRvbnMgPiBhcnRpY2xlOm50aC1jaGlsZCgxKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbn1cbjpob3N0IG1haW4gLmNhcmQgLmNhcmQtaGVhZGVyIC5pbmZvLWJ1dHRvbnMgPiBhcnRpY2xlOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuOmhvc3QgbWFpbiAuY2FyZCAuY2FyZC1oZWFkZXIgLmluZm8tYnV0dG9ucyA+IGFydGljbGU6bnRoLWNoaWxkKDIpID4gZmEtaWNvbiB7XG4gIGNvbG9yOiAjNzg3Nzc5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG46aG9zdCBtYWluIC5jYXJkIC5jYXJkLWhlYWRlciAuaW5mby1idXR0b25zID4gYXJ0aWNsZTpudGgtY2hpbGQoMikgLnN0YWNrb3ZlcmZsb3ctaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjZjQ4MDI0O1xufVxuOmhvc3QgbWFpbiAuY2FyZCAuY2FyZC1oZWFkZXIgLmluZm8tYnV0dG9ucyA+IGFydGljbGU6bnRoLWNoaWxkKDIpIC5nZXRwb2NrZXQtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjZWY0MDU2O1xufVxuOmhvc3QgbWFpbiAuY2FyZCBociB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyZDJjMmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogNXB4IGF1dG8gNXB4IGF1dG87XG4gIHdpZHRoOiA5Ny41JTtcbn1cbjpob3N0IG1haW4gLmNhcmQgLmNhcmQtYm9keSB7XG4gIG1hcmdpbjogYXV0byBhdXRvIDNyZW0gYXV0bztcbiAgd2lkdGg6IDkyLjUlO1xufSIsIiRkYXJrZ3JleS0wOiByZ2IoMTgsIDE3LCAxOSk7XG4kZGFya2dyZXktMTogcmdiKDMwLCAyOSwgMzEpO1xuJGRhcmtncmV5LTI6IHJnYig0NSwgNDQsIDQ2KTtcbiRkYXJrZ3JleS0zOiByZ2IoOTAsIDg5LCA5MSk7XG4kZ3JleTogcmdiKDEyMCwgMTE5LCAxMjEpO1xuJGxpZ2h0Z3JleS0zOiByZ2IoMTk2LCAxOTUsIDE5Nyk7XG4kbGlnaHRncmV5LTI6IHJnYigyMTEsIDIxMCwgMjEyKTtcbiRsaWdodGdyZXktMTogcmdiKDIyNiwgMjI1LCAyMjcpO1xuJGxpZ2h0Z3JleS0wOiByZ2IoMjQxLCAyNDAsIDI0Mik7XG4kYWxtb3N0d2hpdGU6IHJnYigyNTMsIDI1MywgMjUzKTtcbiR3aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4kYmxhY2stbGlnaHRlcjogcmdiKDM4LCAzNywgMzkpO1xuJGJsYWNrOiByZ2IoNDEsIDQwLCA0Mik7XG4kYmxhY2stZGFya2VyOiByZ2IoNDQsIDQzLCA0NSk7XG5cbiRpbmRpZ28tbGlnaHRlcjogIzlmYThkYTtcbiRpbmRpZ286ICM1YzZiYzA7XG4kaW5kaWdvLWRhcmtlcjogIzQxNTBhODtcblxuJGRhcmtuYXZ5OiAjMTYyNDQ3O1xuJHBpbms6ICNlNDNmNWE7XG4kbGlnaHRuYXZ5OiAjMjQyNjI5O1xuJG5hdnlibGFjazogIzFiMWIyZjtcbiRvbGl2ZTogIzVjN2ExZTtcbiR5ZWxsb3c6ICNmZmZjNjQ7XG5cbiRzdGFja292ZXJmbG93LWJyYW5kLWNvbG9yOiAjZjQ4MDI0O1xuJGdldC1wb2NrZXQtYnJhbmQtY29sb3I6ICNlZjQwNTY7XG5cbiRwcmltYXJ5LWNvbG9yOiAkaW5kaWdvO1xuJHNlY29uZGFyeS1jb2xvcjogJGluZGlnby1saWdodGVyO1xuXG4kYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJGNvbnRyb2wtcGFuZWwtYmctY29sb3I6ICRibGFjaztcbiRjb250ZW50LXBhbmVsLWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiR1c2VyLW1hbmFnZW1lbnQtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/shared/question-card/question-card.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/shared/question-card/question-card.component.ts ***!
    \****************************************************************************/

  /*! exports provided: QuestionCardComponent */

  /***/
  function srcAppComponentsSharedQuestionCardQuestionCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionCardComponent", function () {
      return QuestionCardComponent;
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


    var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../helpers */
    "./src/app/helpers.ts");
    /* harmony import */


    var angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-animations */
    "./node_modules/angular-animations/fesm2015/angular-animations.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");

    var QuestionCardComponent = /*#__PURE__*/function () {
      function QuestionCardComponent() {
        _classCallCheck(this, QuestionCardComponent);

        this.selectedTagNames = new Set();
        this.onAddToPocket = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closeIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimes"];
        this.pocketIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faGetPocket"];
        this.stackOverflowIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faStackOverflow"];
      }

      _createClass(QuestionCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
      }, {
        key: "onCardClicked",
        value: function onCardClicked(event) {
          event.stopPropagation();

          if (!this.isExpanded) {
            document.getElementById(this.cardId).scrollIntoView({
              block: "start"
            });
            this.isExpanded = true;
          }
        }
      }, {
        key: "onCloseIconClicked",
        value: function onCloseIconClicked(event) {
          event.stopPropagation();
          this.isExpanded = false;
        }
      }, {
        key: "onStackOverflowIconClicked",
        value: function onStackOverflowIconClicked(event) {
          event.stopPropagation();
          window.open(this.link, "_blank");
        }
      }, {
        key: "onGetPocketIconClicked",
        value: function onGetPocketIconClicked(event) {
          event.stopPropagation();
          this.onAddToPocket.emit({
            url: this.link,
            title: this.title,
            tags: this.tags.join(",")
          });
        }
      }, {
        key: "cardId",
        get: function get() {
          return "question-card-".concat(this.question.question_id);
        }
      }]);

      return QuestionCardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QuestionCardComponent.prototype, "question", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Set)], QuestionCardComponent.prototype, "selectedTagNames", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QuestionCardComponent.prototype, "userAuth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], QuestionCardComponent.prototype, "onAddToPocket", void 0);
    QuestionCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "question-card",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./question-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-card/question-card.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      animations: [Object(angular_animations__WEBPACK_IMPORTED_MODULE_3__["fadeInOnEnterAnimation"])()],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./question-card.component.scss */
      "./src/app/components/shared/question-card/question-card.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], QuestionCardComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/question-content/question-content.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/components/shared/question-content/question-content.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedQuestionContentQuestionContentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "main .markdown-wrapper ::ng-deep {\n  font-size: 14px;\n}\nmain .markdown-wrapper ::ng-deep .expandable-code {\n  background-color: #9fa8da;\n  color: #121113;\n  cursor: pointer;\n  height: 30px;\n  margin-top: 10px;\n  width: 100%;\n  text-align: center;\n}\nmain .markdown-wrapper ::ng-deep .panel {\n  display: none;\n  overflow: hidden;\n}\nmain .markdown-wrapper ::ng-deep h1,\nmain .markdown-wrapper ::ng-deep h2,\nmain .markdown-wrapper ::ng-deep h3,\nmain .markdown-wrapper ::ng-deep h4,\nmain .markdown-wrapper ::ng-deep h5 {\n  color: #121113;\n  font-weight: 500;\n  margin-top: 10px;\n}\nmain .markdown-wrapper ::ng-deep p {\n  color: #121113;\n  font-size: 14px;\n  line-height: 21px;\n}\nmain .markdown-wrapper ::ng-deep li {\n  color: #121113;\n}\nmain .markdown-wrapper ::ng-deep pre {\n  border: none;\n  border-radius: 0;\n  margin-top: 0;\n  white-space: pre-wrap !important;\n}\nmain .markdown-wrapper ::ng-deep pre code {\n  display: inline-block;\n  overflow-x: auto;\n  white-space: pre-line;\n  width: 100%;\n}\nmain .markdown-wrapper ::ng-deep img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcXVlc3Rpb24tY29udGVudC9xdWVzdGlvbi1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9xdWVzdGlvbi1jb250ZW50L3F1ZXN0aW9uLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZm54L0dpdFJlcG9zL2ZueC1jb2RlLWRhaWx5L2NsaWVudC9zcmMvYXBwL3N0eWxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGVBQUE7QUNGSjtBRElJO0VBQ0UseUJFU1c7RUZSWCxjRVJPO0VGU1AsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0ZOO0FES0k7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNITjtBRE1JOzs7OztFQUtFLGNFMUJPO0VGMkJQLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKTjtBRE9JO0VBQ0UsY0VoQ087RUZpQ1AsZUFBQTtFQUNBLGlCQUFBO0FDTE47QURRSTtFQUNFLGNFdENPO0FEZ0NiO0FEU0k7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUNQTjtBRFNNO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ1BSO0FEV0k7RUFDRSxXQUFBO0FDVE4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9xdWVzdGlvbi1jb250ZW50L3F1ZXN0aW9uLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XG5cbm1haW4ge1xuICAubWFya2Rvd24td3JhcHBlciA6Om5nLWRlZXAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgIC5leHBhbmRhYmxlLWNvZGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGluZGlnby1saWdodGVyO1xuICAgICAgY29sb3I6ICRkYXJrZ3JleS0wO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5wYW5lbCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICBoMSxcbiAgICBoMixcbiAgICBoMyxcbiAgICBoNCxcbiAgICBoNSB7XG4gICAgICBjb2xvcjogJGRhcmtncmV5LTA7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGNvbG9yOiAkZGFya2dyZXktMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgIH1cblxuICAgIGxpIHtcbiAgICAgIGNvbG9yOiAkZGFya2dyZXktMDtcbiAgICB9XG5cbiAgICBwcmUge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcblxuICAgICAgY29kZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iLCJtYWluIC5tYXJrZG93bi13cmFwcGVyIDo6bmctZGVlcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbm1haW4gLm1hcmtkb3duLXdyYXBwZXIgOjpuZy1kZWVwIC5leHBhbmRhYmxlLWNvZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZhOGRhO1xuICBjb2xvcjogIzEyMTExMztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5tYWluIC5tYXJrZG93bi13cmFwcGVyIDo6bmctZGVlcCAucGFuZWwge1xuICBkaXNwbGF5OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxubWFpbiAubWFya2Rvd24td3JhcHBlciA6Om5nLWRlZXAgaDEsXG5tYWluIC5tYXJrZG93bi13cmFwcGVyIDo6bmctZGVlcCBoMixcbm1haW4gLm1hcmtkb3duLXdyYXBwZXIgOjpuZy1kZWVwIGgzLFxubWFpbiAubWFya2Rvd24td3JhcHBlciA6Om5nLWRlZXAgaDQsXG5tYWluIC5tYXJrZG93bi13cmFwcGVyIDo6bmctZGVlcCBoNSB7XG4gIGNvbG9yOiAjMTIxMTEzO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxubWFpbiAubWFya2Rvd24td3JhcHBlciA6Om5nLWRlZXAgcCB7XG4gIGNvbG9yOiAjMTIxMTEzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xufVxubWFpbiAubWFya2Rvd24td3JhcHBlciA6Om5nLWRlZXAgbGkge1xuICBjb2xvcjogIzEyMTExMztcbn1cbm1haW4gLm1hcmtkb3duLXdyYXBwZXIgOjpuZy1kZWVwIHByZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XG59XG5tYWluIC5tYXJrZG93bi13cmFwcGVyIDo6bmctZGVlcCBwcmUgY29kZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICB3aWR0aDogMTAwJTtcbn1cbm1haW4gLm1hcmtkb3duLXdyYXBwZXIgOjpuZy1kZWVwIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufSIsIiRkYXJrZ3JleS0wOiByZ2IoMTgsIDE3LCAxOSk7XG4kZGFya2dyZXktMTogcmdiKDMwLCAyOSwgMzEpO1xuJGRhcmtncmV5LTI6IHJnYig0NSwgNDQsIDQ2KTtcbiRkYXJrZ3JleS0zOiByZ2IoOTAsIDg5LCA5MSk7XG4kZ3JleTogcmdiKDEyMCwgMTE5LCAxMjEpO1xuJGxpZ2h0Z3JleS0zOiByZ2IoMTk2LCAxOTUsIDE5Nyk7XG4kbGlnaHRncmV5LTI6IHJnYigyMTEsIDIxMCwgMjEyKTtcbiRsaWdodGdyZXktMTogcmdiKDIyNiwgMjI1LCAyMjcpO1xuJGxpZ2h0Z3JleS0wOiByZ2IoMjQxLCAyNDAsIDI0Mik7XG4kYWxtb3N0d2hpdGU6IHJnYigyNTMsIDI1MywgMjUzKTtcbiR3aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4kYmxhY2stbGlnaHRlcjogcmdiKDM4LCAzNywgMzkpO1xuJGJsYWNrOiByZ2IoNDEsIDQwLCA0Mik7XG4kYmxhY2stZGFya2VyOiByZ2IoNDQsIDQzLCA0NSk7XG5cbiRpbmRpZ28tbGlnaHRlcjogIzlmYThkYTtcbiRpbmRpZ286ICM1YzZiYzA7XG4kaW5kaWdvLWRhcmtlcjogIzQxNTBhODtcblxuJGRhcmtuYXZ5OiAjMTYyNDQ3O1xuJHBpbms6ICNlNDNmNWE7XG4kbGlnaHRuYXZ5OiAjMjQyNjI5O1xuJG5hdnlibGFjazogIzFiMWIyZjtcbiRvbGl2ZTogIzVjN2ExZTtcbiR5ZWxsb3c6ICNmZmZjNjQ7XG5cbiRzdGFja292ZXJmbG93LWJyYW5kLWNvbG9yOiAjZjQ4MDI0O1xuJGdldC1wb2NrZXQtYnJhbmQtY29sb3I6ICNlZjQwNTY7XG5cbiRwcmltYXJ5LWNvbG9yOiAkaW5kaWdvO1xuJHNlY29uZGFyeS1jb2xvcjogJGluZGlnby1saWdodGVyO1xuXG4kYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJGNvbnRyb2wtcGFuZWwtYmctY29sb3I6ICRibGFjaztcbiRjb250ZW50LXBhbmVsLWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiR1c2VyLW1hbmFnZW1lbnQtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/shared/question-content/question-content.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/shared/question-content/question-content.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: QuestionContentComponent */

  /***/
  function srcAppComponentsSharedQuestionContentQuestionContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionContentComponent", function () {
      return QuestionContentComponent;
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


    var ngx_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-markdown */
    "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
    /* harmony import */


    var src_app_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/helpers */
    "./src/app/helpers.ts");

    var QuestionContentComponent = /*#__PURE__*/function () {
      function QuestionContentComponent(markdownService) {
        _classCallCheck(this, QuestionContentComponent);

        this.markdownService = markdownService;
      }

      _createClass(QuestionContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          // Customize markdown rendering.
          this.markdownService.renderer.code = function (code) {
            var unescapedText = Object(src_app_helpers__WEBPACK_IMPORTED_MODULE_3__["parseHtmlEntities"])(code);
            return "<div class=\"expandable-code\">Toggle Code Block \uD83D\uDCBB</div>\n      <pre class=\"".concat(_this6.languageName, " language-none panel\"><code class=\"").concat(_this6.languageName, " language-none\">").concat(unescapedText, "</code></pre>");
          };

          this.markdownService.renderer.image = function (image) {
            return "<img loading=\"lazy\" src=".concat(image, "></img>");
          };
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // Handle expandable code widgets.
          var acc = document.getElementsByClassName("expandable-code");

          for (var i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
              this.classList.toggle("active");
              var panel = this.nextElementSibling;

              if (panel.style.display === "block") {
                panel.style.display = "none";
              } else {
                panel.style.display = "block";
              }
            });
          }
        }
      }, {
        key: "languageName",
        get: function get() {
          return this.language ? "language-".concat(this.language) : "";
        }
      }]);

      return QuestionContentComponent;
    }();

    QuestionContentComponent.ctorParameters = function () {
      return [{
        type: ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], QuestionContentComponent.prototype, "language", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], QuestionContentComponent.prototype, "contentRawHtml", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], QuestionContentComponent.prototype, "contentRawMarkdown", void 0);
    QuestionContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "question-content",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./question-content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/question-content/question-content.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./question-content.component.scss */
      "./src/app/components/shared/question-content/question-content.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownService"]])], QuestionContentComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/setting-card/setting-card.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/components/shared/setting-card/setting-card.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedSettingCardSettingCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  width: 300px;\n}\n:host main {\n  width: 100%;\n}\n:host main .card {\n  background: white;\n  box-shadow: 0 4px 0 0 #fdfdfd;\n  border-radius: 3px;\n  border-width: 1.5px;\n  border-color: white;\n  opacity: 0.75;\n}\n:host main .card-header {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 50px 20px 5px 20px;\n}\n:host main .card-header h3 {\n  font-size: 16px;\n  font-weight: 400;\n}\n:host main .card-header clr-icon {\n  color: #787779;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2V0dGluZy1jYXJkL3NldHRpbmctY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2V0dGluZy1jYXJkL3NldHRpbmctY2FyZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvc3R5bGVzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtBQ0RGO0FER0U7RUFDRSxXQUFBO0FDREo7QURHSTtFQUNFLGlCRUNFO0VGQUYsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJFSEU7RUZJRixhQUFBO0FDRE47QURJSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtBQ0ZOO0FESU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNGUjtBREtNO0VBQ0UsY0UxQkQ7QUR1QlAiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9zZXR0aW5nLWNhcmQvc2V0dGluZy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gIHdpZHRoOiAzMDBweDtcblxuICBtYWluIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDAgMCAkYWxtb3N0d2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBib3JkZXItd2lkdGg6IDEuNXB4O1xuICAgICAgYm9yZGVyLWNvbG9yOiAkd2hpdGU7XG4gICAgICBvcGFjaXR5OiAwLjc1O1xuICAgIH1cblxuICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiA1MHB4IDIwcHggNXB4IDIwcHg7XG5cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuXG4gICAgICBjbHItaWNvbiB7XG4gICAgICAgIGNvbG9yOiAkZ3JleTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuOmhvc3QgbWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWFpbiAuY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDRweCAwIDAgI2ZkZmRmZDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItd2lkdGg6IDEuNXB4O1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjc1O1xufVxuOmhvc3QgbWFpbiAuY2FyZC1oZWFkZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDUwcHggMjBweCA1cHggMjBweDtcbn1cbjpob3N0IG1haW4gLmNhcmQtaGVhZGVyIGgzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuOmhvc3QgbWFpbiAuY2FyZC1oZWFkZXIgY2xyLWljb24ge1xuICBjb2xvcjogIzc4Nzc3OTtcbn0iLCIkZGFya2dyZXktMDogcmdiKDE4LCAxNywgMTkpO1xuJGRhcmtncmV5LTE6IHJnYigzMCwgMjksIDMxKTtcbiRkYXJrZ3JleS0yOiByZ2IoNDUsIDQ0LCA0Nik7XG4kZGFya2dyZXktMzogcmdiKDkwLCA4OSwgOTEpO1xuJGdyZXk6IHJnYigxMjAsIDExOSwgMTIxKTtcbiRsaWdodGdyZXktMzogcmdiKDE5NiwgMTk1LCAxOTcpO1xuJGxpZ2h0Z3JleS0yOiByZ2IoMjExLCAyMTAsIDIxMik7XG4kbGlnaHRncmV5LTE6IHJnYigyMjYsIDIyNSwgMjI3KTtcbiRsaWdodGdyZXktMDogcmdiKDI0MSwgMjQwLCAyNDIpO1xuJGFsbW9zdHdoaXRlOiByZ2IoMjUzLCAyNTMsIDI1Myk7XG4kd2hpdGU6IHJnYigyNTUsIDI1NSwgMjU1KTtcblxuJGJsYWNrLWxpZ2h0ZXI6IHJnYigzOCwgMzcsIDM5KTtcbiRibGFjazogcmdiKDQxLCA0MCwgNDIpO1xuJGJsYWNrLWRhcmtlcjogcmdiKDQ0LCA0MywgNDUpO1xuXG4kaW5kaWdvLWxpZ2h0ZXI6ICM5ZmE4ZGE7XG4kaW5kaWdvOiAjNWM2YmMwO1xuJGluZGlnby1kYXJrZXI6ICM0MTUwYTg7XG5cbiRkYXJrbmF2eTogIzE2MjQ0NztcbiRwaW5rOiAjZTQzZjVhO1xuJGxpZ2h0bmF2eTogIzI0MjYyOTtcbiRuYXZ5YmxhY2s6ICMxYjFiMmY7XG4kb2xpdmU6ICM1YzdhMWU7XG4keWVsbG93OiAjZmZmYzY0O1xuXG4kc3RhY2tvdmVyZmxvdy1icmFuZC1jb2xvcjogI2Y0ODAyNDtcbiRnZXQtcG9ja2V0LWJyYW5kLWNvbG9yOiAjZWY0MDU2O1xuXG4kcHJpbWFyeS1jb2xvcjogJGluZGlnbztcbiRzZWNvbmRhcnktY29sb3I6ICRpbmRpZ28tbGlnaHRlcjtcblxuJGJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiR1c2VyLXBhbmVsLWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiRjb250cm9sLXBhbmVsLWJnLWNvbG9yOiAkYmxhY2s7XG4kY29udGVudC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1tYW5hZ2VtZW50LWJnLWNvbG9yOiAkYmxhY2stbGlnaHRlcjtcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/shared/setting-card/setting-card.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/shared/setting-card/setting-card.component.ts ***!
    \**************************************************************************/

  /*! exports provided: SettingCardComponent */

  /***/
  function srcAppComponentsSharedSettingCardSettingCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingCardComponent", function () {
      return SettingCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SettingCardComponent = /*#__PURE__*/function () {
      function SettingCardComponent() {
        _classCallCheck(this, SettingCardComponent);

        this.onCardClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SettingCardComponent, [{
        key: "onCardClickedHandler",
        value: function onCardClickedHandler() {
          this.onCardClicked.emit();
        }
      }]);

      return SettingCardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], SettingCardComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], SettingCardComponent.prototype, "clarityIconClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], SettingCardComponent.prototype, "onCardClicked", void 0);
    SettingCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "setting-card",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./setting-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/setting-card/setting-card.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./setting-card.component.scss */
      "./src/app/components/shared/setting-card/setting-card.component.scss"))["default"]]
    })], SettingCardComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/simple-tag/simple-tag.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/shared/simple-tag/simple-tag.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedSimpleTagSimpleTagComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "main div {\n  color: #9fa8da;\n  font-size: 16px;\n  font-style: italic;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LWNvZGUtZGFpbHkvY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2ltcGxlLXRhZy9zaW1wbGUtdGFnLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2ZueC9HaXRSZXBvcy9mbngtY29kZS1kYWlseS9jbGllbnQvc3JjL2FwcC9zdHlsZXMvY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NpbXBsZS10YWcvc2ltcGxlLXRhZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGNDWWE7RURYYixlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRUZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2ltcGxlLXRhZy9zaW1wbGUtdGFnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzc1wiO1xuXG5tYWluIHtcbiAgZGl2IHtcbiAgICBjb2xvcjogJGluZGlnby1saWdodGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuIiwiJGRhcmtncmV5LTA6IHJnYigxOCwgMTcsIDE5KTtcbiRkYXJrZ3JleS0xOiByZ2IoMzAsIDI5LCAzMSk7XG4kZGFya2dyZXktMjogcmdiKDQ1LCA0NCwgNDYpO1xuJGRhcmtncmV5LTM6IHJnYig5MCwgODksIDkxKTtcbiRncmV5OiByZ2IoMTIwLCAxMTksIDEyMSk7XG4kbGlnaHRncmV5LTM6IHJnYigxOTYsIDE5NSwgMTk3KTtcbiRsaWdodGdyZXktMjogcmdiKDIxMSwgMjEwLCAyMTIpO1xuJGxpZ2h0Z3JleS0xOiByZ2IoMjI2LCAyMjUsIDIyNyk7XG4kbGlnaHRncmV5LTA6IHJnYigyNDEsIDI0MCwgMjQyKTtcbiRhbG1vc3R3aGl0ZTogcmdiKDI1MywgMjUzLCAyNTMpO1xuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cbiRibGFjay1saWdodGVyOiByZ2IoMzgsIDM3LCAzOSk7XG4kYmxhY2s6IHJnYig0MSwgNDAsIDQyKTtcbiRibGFjay1kYXJrZXI6IHJnYig0NCwgNDMsIDQ1KTtcblxuJGluZGlnby1saWdodGVyOiAjOWZhOGRhO1xuJGluZGlnbzogIzVjNmJjMDtcbiRpbmRpZ28tZGFya2VyOiAjNDE1MGE4O1xuXG4kZGFya25hdnk6ICMxNjI0NDc7XG4kcGluazogI2U0M2Y1YTtcbiRsaWdodG5hdnk6ICMyNDI2Mjk7XG4kbmF2eWJsYWNrOiAjMWIxYjJmO1xuJG9saXZlOiAjNWM3YTFlO1xuJHllbGxvdzogI2ZmZmM2NDtcblxuJHN0YWNrb3ZlcmZsb3ctYnJhbmQtY29sb3I6ICNmNDgwMjQ7XG4kZ2V0LXBvY2tldC1icmFuZC1jb2xvcjogI2VmNDA1NjtcblxuJHByaW1hcnktY29sb3I6ICRpbmRpZ287XG4kc2Vjb25kYXJ5LWNvbG9yOiAkaW5kaWdvLWxpZ2h0ZXI7XG5cbiRiZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kdXNlci1wYW5lbC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4kY29udHJvbC1wYW5lbC1iZy1jb2xvcjogJGJsYWNrO1xuJGNvbnRlbnQtcGFuZWwtYmctY29sb3I6ICRibGFjay1saWdodGVyO1xuJHVzZXItbWFuYWdlbWVudC1iZy1jb2xvcjogJGJsYWNrLWxpZ2h0ZXI7XG4iLCJtYWluIGRpdiB7XG4gIGNvbG9yOiAjOWZhOGRhO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/shared/simple-tag/simple-tag.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/shared/simple-tag/simple-tag.component.ts ***!
    \**********************************************************************/

  /*! exports provided: SimpleTagComponent */

  /***/
  function srcAppComponentsSharedSimpleTagSimpleTagComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleTagComponent", function () {
      return SimpleTagComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SimpleTagComponent = function SimpleTagComponent() {
      _classCallCheck(this, SimpleTagComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], SimpleTagComponent.prototype, "text", void 0);
    SimpleTagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "simple-tag",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./simple-tag.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/simple-tag/simple-tag.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./simple-tag.component.scss */
      "./src/app/components/shared/simple-tag/simple-tag.component.scss"))["default"]]
    })], SimpleTagComponent);
    /***/
  },

  /***/
  "./src/app/custom-tooltip.ts":
  /*!***********************************!*\
    !*** ./src/app/custom-tooltip.ts ***!
    \***********************************/

  /*! exports provided: tooltipOptions */

  /***/
  function srcAppCustomTooltipTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tooltipOptions", function () {
      return tooltipOptions;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var tooltipOptions = {
      "show-delay": 500,
      "hide-delay": 10
    };
    /***/
  },

  /***/
  "./src/app/helpers.ts":
  /*!****************************!*\
    !*** ./src/app/helpers.ts ***!
    \****************************/

  /*! exports provided: throttle, parseHtmlEntities, months, parseUnixTimestamp, StringifyTagSet, StringifyTag, normalizePageNumber */

  /***/
  function srcAppHelpersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "throttle", function () {
      return throttle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseHtmlEntities", function () {
      return parseHtmlEntities;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "months", function () {
      return months;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseUnixTimestamp", function () {
      return parseUnixTimestamp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StringifyTagSet", function () {
      return StringifyTagSet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StringifyTag", function () {
      return StringifyTag;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "normalizePageNumber", function () {
      return normalizePageNumber;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var he__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! he */
    "./node_modules/he/he.js");
    /* harmony import */


    var he__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(he__WEBPACK_IMPORTED_MODULE_1__);

    var throttle = function throttle(func, limit) {
      return function () {
        var inThrottle;
        var args = arguments;
        var context = this;

        if (!inThrottle) {
          inThrottle = true;
          func.apply(context, args);
          setTimeout(function () {
            inThrottle = false;
          }, limit);
        }
      };
    };

    var parseHtmlEntities = function parseHtmlEntities(str) {
      return he__WEBPACK_IMPORTED_MODULE_1__["decode"](str);
    };

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var parseUnixTimestamp = function parseUnixTimestamp(timestamp) {
      var date = new Date(timestamp * 1000);
      var year = date.getFullYear();
      var month = months[date.getMonth()];
      var day = date.getDate();
      return "".concat(month, ". ").concat(day, ", ").concat(year);
    };

    var StringifyTagSet = function StringifyTagSet(tagSet) {
      return "".concat(Array.from(tagSet).map(function (tag) {
        return tag.name;
      }));
    };

    var StringifyTag = function StringifyTag(tag) {
      return "[\"".concat(tag.name, "\"]");
    };

    var normalizePageNumber = function normalizePageNumber(page, maxPageNum) {
      if (page > maxPageNum) {
        return maxPageNum;
      } else if (page < 0) {
        return 0;
      }

      return page;
    };
    /***/

  },

  /***/
  "./src/app/interceptors/error.interceptor.ts":
  /*!***************************************************!*\
    !*** ./src/app/interceptors/error.interceptor.ts ***!
    \***************************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppInterceptorsErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor() {
        _classCallCheck(this, ErrorInterceptor);
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/models/pocket.model.ts":
  /*!****************************************!*\
    !*** ./src/app/models/pocket.model.ts ***!
    \****************************************/

  /*! exports provided: PocketOperationType */

  /***/
  function srcAppModelsPocketModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PocketOperationType", function () {
      return PocketOperationType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PocketOperationType;

    (function (PocketOperationType) {
      PocketOperationType[PocketOperationType["addItem"] = 0] = "addItem";
      PocketOperationType[PocketOperationType["remoteItem"] = 1] = "remoteItem";
    })(PocketOperationType || (PocketOperationType = {}));
    /***/

  },

  /***/
  "./src/app/models/stackExchange.model.ts":
  /*!***********************************************!*\
    !*** ./src/app/models/stackExchange.model.ts ***!
    \***********************************************/

  /*! exports provided: QuestionsSortBy, TagsSortBy, OrderBy */

  /***/
  function srcAppModelsStackExchangeModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionsSortBy", function () {
      return QuestionsSortBy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagsSortBy", function () {
      return TagsSortBy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderBy", function () {
      return OrderBy;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

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
    /***/

  },

  /***/
  "./src/app/services/contentPanel.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/contentPanel.service.ts ***!
    \**************************************************/

  /*! exports provided: ContentPanelService */

  /***/
  function srcAppServicesContentPanelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentPanelService", function () {
      return ContentPanelService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ContentPanelService = /*#__PURE__*/function () {
      function ContentPanelService() {
        _classCallCheck(this, ContentPanelService);

        this.isContentPanelReady = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
      }

      _createClass(ContentPanelService, [{
        key: "setReadyState",
        value: function setReadyState(isReady) {
          this.isContentPanelReady.next(isReady);
        }
      }, {
        key: "isContentPanelReady$",
        get: function get() {
          return this.isContentPanelReady.asObservable();
        }
      }]);

      return ContentPanelService;
    }();

    ContentPanelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ContentPanelService);
    /***/
  },

  /***/
  "./src/app/services/pocket.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/pocket.service.ts ***!
    \********************************************/

  /*! exports provided: PocketService */

  /***/
  function srcAppServicesPocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PocketService", function () {
      return PocketService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var PocketService = /*#__PURE__*/function () {
      function PocketService(httpClient, document) {
        _classCallCheck(this, PocketService);

        this.httpClient = httpClient;
        this.document = document;
      }

      _createClass(PocketService, [{
        key: "getRequestToken",
        value: function getRequestToken() {
          return this.httpClient.get("api/pocket/request_token").toPromise();
        }
      }, {
        key: "redirectToPocket",
        value: function redirectToPocket() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var requestToken, url;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.getRequestToken();

                  case 2:
                    requestToken = _context4.sent;

                    if (!(!requestToken || !requestToken.code)) {
                      _context4.next = 5;
                      break;
                    }

                    return _context4.abrupt("return");

                  case 5:
                    url = new URL("http://getpocket.com/auth/authorize");
                    url.searchParams.append("request_token", requestToken.code);
                    url.searchParams.append("redirect_uri", "".concat(window.location.origin, "/user/pocket/").concat(requestToken.code));
                    this.document.location.href = url.toString();

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "authorize",
        value: function authorize(userEmail, requestToken) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
          params = params.append("email", userEmail);
          params = params.append("request_token", requestToken);
          return this.httpClient.get("api/pocket/authorize", {
            params: params
          });
        }
      }, {
        key: "addItemToPocket",
        value: function addItemToPocket(accessToken, url, title, tags) {
          var dto = {
            access_token: accessToken,
            url: url,
            title: title,
            tags: tags
          };
          return this.httpClient.post("api/pocket/add", dto);
        }
      }]);

      return PocketService;
    }();

    PocketService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };

    PocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], Document])], PocketService);
    /***/
  },

  /***/
  "./src/app/services/stackExchange.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/stackExchange.service.ts ***!
    \***************************************************/

  /*! exports provided: StackExchangeService */

  /***/
  function srcAppServicesStackExchangeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StackExchangeService", function () {
      return StackExchangeService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var StackExchangeService = /*#__PURE__*/function () {
      function StackExchangeService(httpClient) {
        _classCallCheck(this, StackExchangeService);

        this.httpClient = httpClient;
      }

      _createClass(StackExchangeService, [{
        key: "getQuestionsByTags",
        value: function getQuestionsByTags(query) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
          params = params.append("tags", query.tags);
          params = params.append("sort", query.sort);
          params = params.append("pagesize", query.pagesize.toString());
          params = params.append("page", query.page.toString());
          return this.httpClient.get("/api/questions", {
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res["items"];
          }));
        }
      }, {
        key: "getRandomQuestionsByTags",
        value: function getRandomQuestionsByTags(query) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
          params = params.append("tags", query.tags);
          params = params.append("sort", query.sort);
          params = params.append("pagesize", query.pagesize.toString());
          params = params.append("page", query.page.toString());
          return this.httpClient.get("/api/questions/random", {
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res["items"];
          }));
        }
      }, {
        key: "getDefaultTags",
        value: function getDefaultTags() {
          return this.httpClient.get("/api/tags");
        }
      }, {
        key: "getPopularTags",
        value: function getPopularTags() {
          return this.httpClient.get("/api/tags/popular", {
            params: {}
          });
        }
      }]);

      return StackExchangeService;
    }();

    StackExchangeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    StackExchangeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], StackExchangeService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/state/app.actions */
    "./src/app/state/app.actions.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(store, httpClient) {
        _classCallCheck(this, UserService);

        this.store = store;
        this.httpClient = httpClient;
      }

      _createClass(UserService, [{
        key: "getUser",
        value: function getUser(getUserQuery) {
          return this.httpClient.post("/api/users/user", getUserQuery);
        }
      }, {
        key: "getUserAuth",
        value: function getUserAuth(getUserQuery) {
          return this.httpClient.post("/api/users/userauth", getUserQuery);
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          return this.httpClient.get("/api/users");
        }
      }, {
        key: "registerUser",
        value: function registerUser(createUserDto) {
          return this.httpClient.post("/api/auth/register", createUserDto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            return value;
          }));
        }
      }, {
        key: "loginUser",
        value: function loginUser(loginUserDto) {
          var _this7 = this;

          return this.httpClient.post("/api/auth/login", loginUserDto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (userAuth) {
            localStorage.setItem("userAuth", JSON.stringify(userAuth));

            _this7.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_5__["loginUser"]({
              userAuth: userAuth
            }));

            return userAuth;
          }));
        }
      }, {
        key: "logoutUser",
        value: function logoutUser() {
          localStorage.removeItem("userAuth");
          this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_5__["logoutUser"]());
        }
      }, {
        key: "addFavoriteTagToUser",
        value: function addFavoriteTagToUser(tag, email) {
          var addFavoriteTagDto = {
            email: email,
            tag: tag
          };
          return this.httpClient.post("/api/users/tags/add", addFavoriteTagDto);
        }
      }, {
        key: "removeFavoriteTagFromUser",
        value: function removeFavoriteTagFromUser(tag, email) {
          var removeFavoriteTagDto = {
            email: email,
            tag: tag
          };
          return this.httpClient.post("/api/users/tags/remove", removeFavoriteTagDto);
        }
      }, {
        key: "subscribeToTag",
        value: function subscribeToTag(tag, email) {
          var suscribeToTagDto = {
            email: email,
            tag: tag
          };
          return this.httpClient.post("/api/users/tags/subscribe", suscribeToTagDto);
        }
      }, {
        key: "unsubscribeToTag",
        value: function unsubscribeToTag(tag, email) {
          var unsubscribeToTagDto = {
            email: email,
            tag: tag
          };
          return this.httpClient.post("/api/users/tags/unsubscribe", unsubscribeToTagDto);
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], UserService);
    /***/
  },

  /***/
  "./src/app/state/app.actions.ts":
  /*!**************************************!*\
    !*** ./src/app/state/app.actions.ts ***!
    \**************************************/

  /*! exports provided: selectTag, unselectTag, setPage, fetchQuestions, fetchQuestionsSuccess, loginUser, logoutUser, fetchCurrentUser, fetchCurrentUserSuccess, updateCurrentUserAuth, updateCurrentUserAuthSuccess, addFavoriteTagToUser, removeFavoriteTagFromUser, subscribeToTag, unsubscribeToTag, authorizePocket, addItemToPocket, notifyPocketOperation, navigateToDashboard */

  /***/
  function srcAppStateAppActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectTag", function () {
      return selectTag;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "unselectTag", function () {
      return unselectTag;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setPage", function () {
      return setPage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fetchQuestions", function () {
      return fetchQuestions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fetchQuestionsSuccess", function () {
      return fetchQuestionsSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loginUser", function () {
      return loginUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "logoutUser", function () {
      return logoutUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fetchCurrentUser", function () {
      return fetchCurrentUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fetchCurrentUserSuccess", function () {
      return fetchCurrentUserSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateCurrentUserAuth", function () {
      return updateCurrentUserAuth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateCurrentUserAuthSuccess", function () {
      return updateCurrentUserAuthSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addFavoriteTagToUser", function () {
      return addFavoriteTagToUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeFavoriteTagFromUser", function () {
      return removeFavoriteTagFromUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "subscribeToTag", function () {
      return subscribeToTag;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "unsubscribeToTag", function () {
      return unsubscribeToTag;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authorizePocket", function () {
      return authorizePocket;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addItemToPocket", function () {
      return addItemToPocket;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "notifyPocketOperation", function () {
      return notifyPocketOperation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "navigateToDashboard", function () {
      return navigateToDashboard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js"); // Stack Overflow API services.


    var selectTag = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Select Tag", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var unselectTag = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Unselect Tag", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var setPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Set Page", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var fetchQuestions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Fetch Questions", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var fetchQuestionsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Fetch Questions Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])()); // User services.

    var loginUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Log In User", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var logoutUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Log Out User");
    var fetchCurrentUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Fetch Current User");
    var fetchCurrentUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Fetch Current User Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var updateCurrentUserAuth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Update Current User Authentication");
    var updateCurrentUserAuthSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Update Current User Authentication Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var addFavoriteTagToUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Add Favorite Tag to User", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var removeFavoriteTagFromUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Remove Favorite Tag from User", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var subscribeToTag = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Subscribe to Tag", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var unsubscribeToTag = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Unsubscribe to Tag", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])()); // Pocket API services.

    var authorizePocket = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Authorize Pocket", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var addItemToPocket = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Add Item to Pocket", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var notifyPocketOperation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Notify Pocket Operation", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])()); // Auxiliary actions.

    var navigateToDashboard = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Navigate to Dashboard");
    /***/
  },

  /***/
  "./src/app/state/app.effects.ts":
  /*!**************************************!*\
    !*** ./src/app/state/app.effects.ts ***!
    \**************************************/

  /*! exports provided: AppEffects */

  /***/
  function srcAppStateAppEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppEffects", function () {
      return AppEffects;
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


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _app_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.actions */
    "./src/app/state/app.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_stackExchange_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/stackExchange.service */
    "./src/app/services/stackExchange.service.ts");
    /* harmony import */


    var _services_pocket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/pocket.service */
    "./src/app/services/pocket.service.ts");
    /* harmony import */


    var _models_stackExchange_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../models/stackExchange.model */
    "./src/app/models/stackExchange.model.ts");
    /* harmony import */


    var _app_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.selectors */
    "./src/app/state/app.selectors.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _models_pocket_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../models/pocket.model */
    "./src/app/models/pocket.model.ts");
    /* harmony import */


    var _helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../helpers */
    "./src/app/helpers.ts");

    var AppEffects = /*#__PURE__*/function () {
      function AppEffects(store, actions$, stackExchangeApiService, pocketApiService, userService, router) {
        var _this8 = this;

        _classCallCheck(this, AppEffects);

        this.store = store;
        this.actions$ = actions$;
        this.stackExchangeApiService = stackExchangeApiService;
        this.pocketApiService = pocketApiService;
        this.userService = userService;
        this.router = router; // @Effect()
        // scrollToTop$ = this.actions$.pipe(
        //   ofType(AppActions.fetchQuestions),
        //   switchMap(() => {
        //     console.log("scroll");
        //     document.querySelector("content-panel main").scrollTo(0, 0);
        //     return EMPTY;
        //   })
        // );

        this.fetchQuestions$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_5__["fetchQuestions"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (action) {
          var page = action.page || 1;
          var query = {
            page: page,
            tags: action.tag,
            sort: _models_stackExchange_model__WEBPACK_IMPORTED_MODULE_9__["QuestionsSortBy"].Votes,
            pagesize: 10
          };

          if (action.fetchRandom) {
            return _this8.stackExchangeApiService.getRandomQuestionsByTags(query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (questions) {
              return _app_actions__WEBPACK_IMPORTED_MODULE_5__["fetchQuestionsSuccess"]({
                questions: questions,
                page: page
              });
            }));
          }

          return _this8.stackExchangeApiService.getQuestionsByTags(query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (questions) {
            return _app_actions__WEBPACK_IMPORTED_MODULE_5__["fetchQuestionsSuccess"]({
              questions: questions,
              page: page
            });
          }));
        }));
        this.AddFavoriteTagToUser = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_5__["addFavoriteTagToUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(function (state) {
          return Object(_app_selectors__WEBPACK_IMPORTED_MODULE_10__["selectUserAuth"])(state);
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              action = _ref4[0],
              userAuth = _ref4[1];

          var tag = action.tag;
          var email = userAuth.email;
          return _this8.userService.addFavoriteTagToUser(tag, email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
            return _app_actions__WEBPACK_IMPORTED_MODULE_5__["fetchCurrentUser"]();
          }));
        }));
        this.RemoveFavoriteTagFromUser = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_5__["removeFavoriteTagFromUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(function (state) {
          return Object(_app_selectors__WEBPACK_IMPORTED_MODULE_10__["selectUserAuth"])(state);
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              action = _ref6[0],
              userAuth = _ref6[1];

          var tag = action.tag;
          var email = userAuth.email;
          return _this8.userService.removeFavoriteTagFromUser(tag, email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
            return _app_actions__WEBPACK_IMPORTED_MODULE_5__["fetchCurrentUser"]();
          }));
        }));
        this.SubscribeToTag = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_5__["subscribeToTag"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(function (state) {
          return Object(_app_selectors__WEBPACK_IMPORTED_MODULE_10__["selectUserAuth"])(state);
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2),
              action = _ref8[0],
              userAuth = _ref8[1];

          var tag = action.tag;
          var email = userAuth.email;
          return _this8.userService.subscribeToTag(tag, email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
            return _app_actions__WEBPACK_IMPORTED_MODULE_5__["fetchCurrentUser"]();
          }));
        }));
        this.UnsubscribeToTag = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_5__["unsubscribeToTag"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(function (state) {
          return Object(_app_selectors__WEBPACK_IMPORTED_MODULE_10__["selectUserAuth"])(state);
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (_ref9) {
          var _ref10 = _slicedToArray(_ref9, 2),
              action = _ref10[0],
              userAuth = _ref10[1];

          var tag = action.tag;
          var email = userAuth.email;
          return _this8.userService.unsubscribeToTag(tag, email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
            return _app_actions__WEBPACK_IMPORTED_MODULE_5__["fetchCurrentUser"]();
          }));
        }));
        this.loginUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_5__["loginUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
          _this8.router.navigate(["/dashboard"]);

          return [_app_actions__WEBPACK_IMPORTED_MODULE_5__["fetchCurrentUser"]()];
        }));
        this.logoutUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_5__["logoutUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
          _this8.router.navigate(["/dashboard"]);

          return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
        }));
        this.fetchCurrentUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_5__["fetchCurrentUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(function (state) {
          return Object(_app_selectors__WEBPACK_IMPORTED_MODULE_10__["selectUserAuth"])(state);
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (_ref11) {
          var _ref12 = _slicedToArray(_ref11, 2),
              _ = _ref12[0],
              userAuth = _ref12[1];

          if (!userAuth || !userAuth.email) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
          }

          var query = {
            email: userAuth.email
          };
          return _this8.userService.getUser(query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (user) {
            return _app_actions__WEBPACK_IMPORTED_MODULE_5__["fetchCurrentUserSuccess"]({
              user: user
            });
          }));
        }));
        this.updateCurrentUserAuth$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_5__["updateCurrentUserAuth"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(function (state) {
          return Object(_app_selectors__WEBPACK_IMPORTED_MODULE_10__["selectUserAuth"])(state);
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (_ref13) {
          var _ref14 = _slicedToArray(_ref13, 2),
              _ = _ref14[0],
              userAuth = _ref14[1];

          if (!userAuth || !userAuth.email) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
          }

          var query = {
            email: userAuth.email
          };
          return _this8.userService.getUserAuth(query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (userAuth) {
            return _app_actions__WEBPACK_IMPORTED_MODULE_5__["updateCurrentUserAuthSuccess"]({
              userAuth: userAuth
            });
          }));
        })); // Fetch questions when a new tag is selected.

        this.updateQuestionsOnNewTag$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_5__["selectTag"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (action) {
          return [_app_actions__WEBPACK_IMPORTED_MODULE_5__["fetchQuestions"]({
            tag: action.tag,
            page: +action.page
          })];
        })); // Fetch questions when a new page is set.

        this.updateQuestionsOnNewPage$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_5__["setPage"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(function (state) {
          return Object(_app_selectors__WEBPACK_IMPORTED_MODULE_10__["selectSelectedTag"])(state);
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (_ref15) {
          var _ref16 = _slicedToArray(_ref15, 2),
              action = _ref16[0],
              tag = _ref16[1];

          _this8.router.navigate(["dashboard", tag, {
            page: action.page
          }]);

          return [_app_actions__WEBPACK_IMPORTED_MODULE_5__["fetchQuestions"]({
            tag: tag,
            page: action.page
          })];
        }));
        this.authorizePocketWithBackend$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_5__["authorizePocket"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (action) {
          return _this8.pocketApiService.authorize(action.email, action.requestToken).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
            _this8.router.navigate(["/dashboard"]);

            return _app_actions__WEBPACK_IMPORTED_MODULE_5__["updateCurrentUserAuth"]();
          }));
        }));
        this.requestAddItemToPocket = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_5__["addItemToPocket"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(function (state) {
          return Object(_app_selectors__WEBPACK_IMPORTED_MODULE_10__["selectUserAuth"])(state);
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (_ref17) {
          var _ref18 = _slicedToArray(_ref17, 2),
              action = _ref18[0],
              userAuth = _ref18[1];

          return _this8.pocketApiService.addItemToPocket(userAuth.pocketAccessToken, action.url, action.title, action.tags).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (success) {
            return _app_actions__WEBPACK_IMPORTED_MODULE_5__["notifyPocketOperation"]({
              success: success,
              operationType: _models_pocket_model__WEBPACK_IMPORTED_MODULE_13__["PocketOperationType"].addItem
            });
          }));
        }));
        this.notifyPocketOperation = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_5__["notifyPocketOperation"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
          return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
        }));
        this.routeToDashboard$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_5__["navigateToDashboard"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
          _this8.router.navigate(["/dashboard"]);

          return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
        }));
        this.listenToRouter();
      } // Set up a subscription to listen to router change.
      // Note: service in Angular is a singleton -> no need to unsubscribe and worry about memory leaks.


      _createClass(AppEffects, [{
        key: "listenToRouter",
        value: function listenToRouter() {
          var _this9 = this;

          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivationEnd"];
          })).subscribe(function (event) {
            if (event.snapshot.params.tag) {
              var page = 1;

              if (event.snapshot.params.page) {
                page = Object(_helpers__WEBPACK_IMPORTED_MODULE_14__["normalizePageNumber"])(+event.snapshot.params.page, 8);
              }

              _this9.store.dispatch(_app_actions__WEBPACK_IMPORTED_MODULE_5__["selectTag"]({
                tag: event.snapshot.params.tag,
                page: page
              }));
            }
          });
        }
      }]);

      return AppEffects;
    }();

    AppEffects.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }, {
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
      }, {
        type: _services_stackExchange_service__WEBPACK_IMPORTED_MODULE_7__["StackExchangeService"]
      }, {
        type: _services_pocket_service__WEBPACK_IMPORTED_MODULE_8__["PocketService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AppEffects.prototype, "fetchQuestions$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AppEffects.prototype, "AddFavoriteTagToUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AppEffects.prototype, "RemoveFavoriteTagFromUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AppEffects.prototype, "SubscribeToTag", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AppEffects.prototype, "UnsubscribeToTag", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AppEffects.prototype, "loginUser$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AppEffects.prototype, "logoutUser$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AppEffects.prototype, "fetchCurrentUser$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AppEffects.prototype, "updateCurrentUserAuth$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AppEffects.prototype, "updateQuestionsOnNewTag$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AppEffects.prototype, "updateQuestionsOnNewPage$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AppEffects.prototype, "authorizePocketWithBackend$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AppEffects.prototype, "requestAddItemToPocket", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AppEffects.prototype, "notifyPocketOperation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AppEffects.prototype, "routeToDashboard$", void 0);
    AppEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _services_stackExchange_service__WEBPACK_IMPORTED_MODULE_7__["StackExchangeService"], _services_pocket_service__WEBPACK_IMPORTED_MODULE_8__["PocketService"], _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]])], AppEffects);
    /***/
  },

  /***/
  "./src/app/state/app.reducer.ts":
  /*!**************************************!*\
    !*** ./src/app/state/app.reducer.ts ***!
    \**************************************/

  /*! exports provided: adapter, initialState, appReducer */

  /***/
  function srcAppStateAppReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "adapter", function () {
      return adapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appReducer", function () {
      return appReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/entity */
    "./node_modules/@ngrx/entity/fesm2015/entity.js");
    /* harmony import */


    var _app_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.actions */
    "./src/app/state/app.actions.ts");

    var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])({
      selectId: function selectId(question) {
        return question.question_id;
      },
      sortComparer: false
    });
    var initialState = adapter.getInitialState({
      tags: [],
      selectedTag: null,
      questions: [],
      totalQuestions: 0,
      page: 1,
      userAuth: null,
      user: null
    });
    var appReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_3__["selectTag"], function (state, _ref19) {
      var tag = _ref19.tag,
          page = _ref19.page;
      return Object.assign({}, state, {
        selectedTag: tag,
        questions: [],
        totalQuestions: 0,
        page: page || 1
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_3__["fetchQuestionsSuccess"], function (state, _ref20) {
      var questions = _ref20.questions,
          page = _ref20.page;
      return Object.assign({}, state, {
        questions: questions,
        page: page
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_3__["loginUser"], function (state, _ref21) {
      var userAuth = _ref21.userAuth;
      return Object.assign({}, state, {
        userAuth: userAuth
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_3__["logoutUser"], function (state) {
      return Object.assign({}, state, {
        userAuth: null,
        user: null
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_3__["fetchCurrentUserSuccess"], function (state, _ref22) {
      var user = _ref22.user;
      return Object.assign({}, state, {
        user: user
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_3__["updateCurrentUserAuthSuccess"], function (state, _ref23) {
      var userAuth = _ref23.userAuth;
      return Object.assign({}, state, {
        userAuth: userAuth
      });
    }));
    /***/
  },

  /***/
  "./src/app/state/app.selectors.ts":
  /*!****************************************!*\
    !*** ./src/app/state/app.selectors.ts ***!
    \****************************************/

  /*! exports provided: selectAppState, selectTags, selectSelectedTag, selectPage, selectQuestions, selectUserAuth, selectUser */

  /***/
  function srcAppStateAppSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAppState", function () {
      return selectAppState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectTags", function () {
      return selectTags;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectSelectedTag", function () {
      return selectSelectedTag;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectPage", function () {
      return selectPage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectQuestions", function () {
      return selectQuestions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectUserAuth", function () {
      return selectUserAuth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectUser", function () {
      return selectUser;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var selectAppState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("app");
    var selectTags = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAppState, function (state) {
      return state.tags;
    });
    var selectSelectedTag = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAppState, function (state) {
      return state.selectedTag;
    });
    var selectPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAppState, function (state) {
      return state.page;
    });
    var selectQuestions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAppState, function (state) {
      return state.questions;
    });
    var selectUserAuth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAppState, function (state) {
      return state.userAuth;
    });
    var selectUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAppState, function (state) {
      return state.user;
    });
    /***/
  },

  /***/
  "./src/app/storage.metareducer.ts":
  /*!****************************************!*\
    !*** ./src/app/storage.metareducer.ts ***!
    \****************************************/

  /*! exports provided: storageMetaReducer */

  /***/
  function srcAppStorageMetareducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "storageMetaReducer", function () {
      return storageMetaReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function getSavedItem(localStorageKey) {
      return JSON.parse(localStorage.getItem(localStorageKey));
    }

    var userAuthStorageKey = "userAuth";

    function storageMetaReducer(reducer) {
      // Only trigger after reloading the page.
      var onInit = true;
      return function (state, action) {
        var nextState = reducer(state, action);

        if (onInit) {
          onInit = false;
          var userAuthItem = getSavedItem(userAuthStorageKey);
          nextState["app"]["userAuth"] = userAuthItem;
          return nextState;
        }

        return nextState;
      };
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/fnx/GitRepos/fnx-code-daily/client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.0a0959507d2751de6974.js.map