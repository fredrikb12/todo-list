/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    margin: 0;\n    font-family: 'Montserrat', sans-serif;\n}\n\nbody {\n    background-color: #2B2D44;\n    height: 100vh;\n}\n\n#content {\n    height: 100%;\n}\n\n.header {\n    display: flex;\n    background-color: hsl(240, 41%, 7%);\n    color: #CECFED;\n    padding: 10px;\n    font-size: 20px;\n    border-bottom: 1px solid #FFFFFF;\n    height: 8%;\n}\n\n.header-left,\n.header-right {\n    width: 50%;\n    min-height: 60px;\n}\n\n.header-left {\n    display: flex;\n    align-items: center;\n}\n\n.header-logo {\n    margin-left: 25%;\n}\n\n.header-center {\n    display: flex;\n    align-items: center;\n    width: 200px;\n    gap: 15px;\n    color: #A2A3BF;\n}\n\n.header-right {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-size: 28px;\n    gap: 10px;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n    font-size: 22px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\ninput:checked + .slider {\n    background-color: #0d65ad;\n}\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n}\n\n.slider.round {\n    border-radius: 34px;\n}\n  \n.slider.round:before {\n    border-radius: 50%;\n}\n\n.main {\n    display: flex;\n    height: 86%;\n    min-height: 840px;\n    overflow: auto;\n\n}\n.main-left {\n    width: 20%;\n    display: flex;\n    flex-direction: column;\n    border-right: 1px solid #706b6b;\n    background-color: hsl(240, 41%, 7%);\n    margin-top: 1px;\n}\n.main-center {\n    width: 80%;\n    display: flex;\n    justify-content: center;\n    margin-top: 100px;\n}\n\n.projects-button,\n.important-button {\n    border: none;\n    margin-top: -2px;\n    min-height: 40px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #f1f1ff;\n    padding: 5px;\n    background-color: hsl(240, 41%, 7%);\n    padding-left: 25px;\n}\n\n.projects-button:hover, \n.important-button:hover {\n    color: #ffd4da;\n    cursor: pointer;\n}\n\n.projects-container,\n.important-container {\n    border-bottom: 1px solid #e4e5ff;\n    overflow: auto;\n    background-color: hsl(240, 41%, 7%);\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 5px;\n    padding: 0 0 15px;\n}\n\n.important-folder {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n}\n\n.important-item {\n    color: #ff6a50;\n    font-size: 16px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 4px;\n    width: 80%;\n}\n\n.important-item:hover {\n    color: #ff5233;\n    cursor: pointer;\n}\n\n.projects-text,\n.important-text {\n    width: 200px;\n    text-align: left;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.projects-item-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.projects-item {\n    color: #f1f1ff;\n    font-size: 21px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 4px;\n    width: 80%;\n}\n\n.projects-item-delete {\n    filter: invert(93%) sepia(100%) saturate(28%) hue-rotate(223deg) brightness(105%) contrast(103%); \n    opacity: 0.6;\n}\n\n.projects-item-delete:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.projects-item:hover {\n    color: #ffd4da;\n    cursor: pointer;\n}\n\n#new-project-button-container {\n    align-self: start;\n}\n\n.projects-content.sidebar-hidden,\n.important-folder.sidebar-hidden {\n    display: none;\n}\n\n#projects-span, \n#important-span {\n    color: #f1f1ff;\n    font-size: 15px;\n}\n\n.center-content {\n    width: 50%;\n}\n\n.todo-top-container {\n    color: #e5e6e7;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 10px;\n    padding-right: 45px;\n}\n\n.todo-top-container > p {\n    font-size: 22px;\n}\n\n.todo-add-container {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 5px 0;\n    opacity: 0.4;\n}\n\n.todo-add-container:hover, \n.new-project-button:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.todo-add-container > p {\n    color: white;\n    font-size: 24px;\n}\n\n.add-image, .task-button {\n    width: 22px;\n    height: 22px;\n    filter: invert(93%) sepia(100%) saturate(28%) hue-rotate(223deg) brightness(105%) contrast(103%);\n}\n\n.todo-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: #e5e6e7;\n    font-size: 22px;\n    border-top: 1px solid #c5c6c72f;\n    border-bottom: 1px solid #c5c6c72f;\n    padding: 4px 8px;\n    margin-top: -1px;\n}\n\n.todo-item-right {\n    display: flex;\n    align-items: center;\n    gap: 30px;\n}\n\n.delete-todo-button {\n    filter: invert(93%) sepia(100%) saturate(28%) hue-rotate(223deg) brightness(105%) contrast(103%);\n    opacity: 0.6;\n    width: 30px;\n    height: 30px;\n}\n\n.delete-todo-button:hover {\n    opacity: 0.9;\n}\n\n.todo-title {\n    max-width: 400px;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.todo-due-date {\n    font-size: 16px;\n}\n\n.todo-item:hover {\n    color: white;\n    cursor: pointer;\n    border-top-color: #c5c6c7b0;\n    border-bottom-color: #c5c6c7b0;\n}\n\n.new-todo-form,\n.todo-detailed, \n.new-project-form {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid #294552;\n    padding: 4px;\n    border-radius: 6px;\n    margin-top: 12px;\n}\n\n.new-project-form {\n    border: 1px solid #C5C6C7;\n}\n\n.new-todo-form {\n    border-color: #00070a;\n    background-color: #2B2D44;\n}\n\n.textarea {\n    background-color: #2B2D44;\n    border: none;\n    resize: none;\n    outline: none;\n    color: white;\n    font-size: 18px;\n}\n\n.new-project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    width: 80%;\n}\n\n.new-project-button {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n    color: white;\n    font-size: 16px;\n    opacity: 0.6;\n    margin: 10px 0 5px;\n}\n\n.projects-content {\n    display: flex;\n    flex-direction: column;\n    margin-left: 10%;\n}\n\n.new-project-form .textarea {\n    background-color: hsl(240, 41%, 7%);\n    font-size: 16px;\n    padding: 3px;\n    \n}\n\n.textarea::placeholder {\n    opacity: 1;\n}\n\n.task-button {\n    opacity: 0.6;\n    margin-top: 5px;\n    margin-right: 5px;\n    width: 28px;\n    height: 28px;\n}\n\n.task-button:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.red-text::placeholder {\n    color: #ec4141;\n}\n\n.due-date-picker {\n    width: 150px;\n    background-color: #131920;\n    color: white;\n    margin-top: 5px;\n}\n\n.due-date-picker::-webkit-calendar-picker-indicator {\n    filter: invert(93%) sepia(100%) saturate(28%) hue-rotate(223deg) brightness(105%) contrast(103%);\n}\n\n.date-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n}\n\n.prio-text {\n    color: #C5C6C7;\n    font-size: 18px;\n    text-align: center;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    font-family: 'Montserrat', sans-serif;\n}\n\nbody {\n    background-color: #2B2D44;\n    height: 100vh;\n}\n\n#content {\n    height: 100%;\n}\n\n.header {\n    display: flex;\n    background-color: hsl(240, 41%, 7%);\n    color: #CECFED;\n    padding: 10px;\n    font-size: 20px;\n    border-bottom: 1px solid #FFFFFF;\n    height: 8%;\n}\n\n.header-left,\n.header-right {\n    width: 50%;\n    min-height: 60px;\n}\n\n.header-left {\n    display: flex;\n    align-items: center;\n}\n\n.header-logo {\n    margin-left: 25%;\n}\n\n.header-center {\n    display: flex;\n    align-items: center;\n    width: 200px;\n    gap: 15px;\n    color: #A2A3BF;\n}\n\n.header-right {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-size: 28px;\n    gap: 10px;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n    font-size: 22px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\ninput:checked + .slider {\n    background-color: #0d65ad;\n}\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n}\n\n.slider.round {\n    border-radius: 34px;\n}\n  \n.slider.round:before {\n    border-radius: 50%;\n}\n\n.main {\n    display: flex;\n    height: 86%;\n    min-height: 840px;\n    overflow: auto;\n\n}\n.main-left {\n    width: 20%;\n    display: flex;\n    flex-direction: column;\n    border-right: 1px solid #706b6b;\n    background-color: hsl(240, 41%, 7%);\n    margin-top: 1px;\n}\n.main-center {\n    width: 80%;\n    display: flex;\n    justify-content: center;\n    margin-top: 100px;\n}\n\n.projects-button,\n.important-button {\n    border: none;\n    margin-top: -2px;\n    min-height: 40px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #f1f1ff;\n    padding: 5px;\n    background-color: hsl(240, 41%, 7%);\n    padding-left: 25px;\n}\n\n.projects-button:hover, \n.important-button:hover {\n    color: #ffd4da;\n    cursor: pointer;\n}\n\n.projects-container,\n.important-container {\n    border-bottom: 1px solid #e4e5ff;\n    overflow: auto;\n    background-color: hsl(240, 41%, 7%);\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 5px;\n    padding: 0 0 15px;\n}\n\n.important-folder {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n}\n\n.important-item {\n    color: #ff6a50;\n    font-size: 16px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 4px;\n    width: 80%;\n}\n\n.important-item:hover {\n    color: #ff5233;\n    cursor: pointer;\n}\n\n.projects-text,\n.important-text {\n    width: 200px;\n    text-align: left;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.projects-item-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.projects-item {\n    color: #f1f1ff;\n    font-size: 21px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 4px;\n    width: 80%;\n}\n\n.projects-item-delete {\n    filter: invert(93%) sepia(100%) saturate(28%) hue-rotate(223deg) brightness(105%) contrast(103%); \n    opacity: 0.6;\n}\n\n.projects-item-delete:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.projects-item:hover {\n    color: #ffd4da;\n    cursor: pointer;\n}\n\n#new-project-button-container {\n    align-self: start;\n}\n\n.projects-content.sidebar-hidden,\n.important-folder.sidebar-hidden {\n    display: none;\n}\n\n#projects-span, \n#important-span {\n    color: #f1f1ff;\n    font-size: 15px;\n}\n\n.center-content {\n    width: 50%;\n}\n\n.todo-top-container {\n    color: #e5e6e7;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 10px;\n    padding-right: 45px;\n}\n\n.todo-top-container > p {\n    font-size: 22px;\n}\n\n.todo-add-container {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 5px 0;\n    opacity: 0.4;\n}\n\n.todo-add-container:hover, \n.new-project-button:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.todo-add-container > p {\n    color: white;\n    font-size: 24px;\n}\n\n.add-image, .task-button {\n    width: 22px;\n    height: 22px;\n    filter: invert(93%) sepia(100%) saturate(28%) hue-rotate(223deg) brightness(105%) contrast(103%);\n}\n\n.todo-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: #e5e6e7;\n    font-size: 22px;\n    border-top: 1px solid #c5c6c72f;\n    border-bottom: 1px solid #c5c6c72f;\n    padding: 4px 8px;\n    margin-top: -1px;\n}\n\n.todo-item-right {\n    display: flex;\n    align-items: center;\n    gap: 30px;\n}\n\n.delete-todo-button {\n    filter: invert(93%) sepia(100%) saturate(28%) hue-rotate(223deg) brightness(105%) contrast(103%);\n    opacity: 0.6;\n    width: 30px;\n    height: 30px;\n}\n\n.delete-todo-button:hover {\n    opacity: 0.9;\n}\n\n.todo-title {\n    max-width: 400px;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.todo-due-date {\n    font-size: 16px;\n}\n\n.todo-item:hover {\n    color: white;\n    cursor: pointer;\n    border-top-color: #c5c6c7b0;\n    border-bottom-color: #c5c6c7b0;\n}\n\n.new-todo-form,\n.todo-detailed, \n.new-project-form {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid #294552;\n    padding: 4px;\n    border-radius: 6px;\n    margin-top: 12px;\n}\n\n.new-project-form {\n    border: 1px solid #C5C6C7;\n}\n\n.new-todo-form {\n    border-color: #00070a;\n    background-color: #2B2D44;\n}\n\n.textarea {\n    background-color: #2B2D44;\n    border: none;\n    resize: none;\n    outline: none;\n    color: white;\n    font-size: 18px;\n}\n\n.new-project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    width: 80%;\n}\n\n.new-project-button {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n    color: white;\n    font-size: 16px;\n    opacity: 0.6;\n    margin: 10px 0 5px;\n}\n\n.projects-content {\n    display: flex;\n    flex-direction: column;\n    margin-left: 10%;\n}\n\n.new-project-form .textarea {\n    background-color: hsl(240, 41%, 7%);\n    font-size: 16px;\n    padding: 3px;\n    \n}\n\n.textarea::placeholder {\n    opacity: 1;\n}\n\n.task-button {\n    opacity: 0.6;\n    margin-top: 5px;\n    margin-right: 5px;\n    width: 28px;\n    height: 28px;\n}\n\n.task-button:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.red-text::placeholder {\n    color: #ec4141;\n}\n\n.due-date-picker {\n    width: 150px;\n    background-color: #131920;\n    color: white;\n    margin-top: 5px;\n}\n\n.due-date-picker::-webkit-calendar-picker-indicator {\n    filter: invert(93%) sepia(100%) saturate(28%) hue-rotate(223deg) brightness(105%) contrast(103%);\n}\n\n.date-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n}\n\n.prio-text {\n    color: #C5C6C7;\n    font-size: 18px;\n    text-align: center;\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addButton.js":
/*!**************************!*\
  !*** ./src/addButton.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewAddButton": () => (/* binding */ createNewAddButton)
/* harmony export */ });
/* harmony import */ var _domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelpers */ "./src/domHelpers.js");
/* harmony import */ var _images_add_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/add.svg */ "./src/images/add.svg");



function createNewAddButton(containerClass, imageClass, textClass, text) {
    const container = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", containerClass);
    const addImage = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("img", imageClass);
    addImage.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_1__;
    const addText = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("p", textClass);
    addText.textContent = text;
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(container, [addImage, addText]);
    return container;
}





/***/ }),

/***/ "./src/bindClickEvents.js":
/*!********************************!*\
  !*** ./src/bindClickEvents.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindClickEvents": () => (/* binding */ bindClickEvents),
/* harmony export */   "addConfirmButtonEvent": () => (/* binding */ addConfirmButtonEvent),
/* harmony export */   "addCloseButtonEvent": () => (/* binding */ addCloseButtonEvent),
/* harmony export */   "addTodoEvent": () => (/* binding */ addTodoEvent),
/* harmony export */   "addDetailedCloseButtonEvent": () => (/* binding */ addDetailedCloseButtonEvent),
/* harmony export */   "addDetailedConfirmButtonEvent": () => (/* binding */ addDetailedConfirmButtonEvent),
/* harmony export */   "addCloseNewProjectButtonEvent": () => (/* binding */ addCloseNewProjectButtonEvent),
/* harmony export */   "addConfirmNewProjectButtonEvent": () => (/* binding */ addConfirmNewProjectButtonEvent),
/* harmony export */   "addNewProjectButtonEvent": () => (/* binding */ addNewProjectButtonEvent),
/* harmony export */   "addDeleteTodoEvent": () => (/* binding */ addDeleteTodoEvent)
/* harmony export */ });
/* harmony import */ var _domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelpers */ "./src/domHelpers.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newTask */ "./src/newTask.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoItems */ "./src/todoItems.js");






function bindClickEvents() {
    const [projectsButton, importantButton] = findButtons(["projects-button", "important-button"]);
    const darkModeCheckbox = document.getElementById("dark-mode-checkbox");
    const addTaskButton = document.getElementById("todo-add-container");
    const addProjectButton = document.querySelector(".new-project-button");

    addProjectsButtonEvent(projectsButton);
    addImportantButtonEvent(importantButton);
    addAddTaskButtonEvent(addTaskButton);
    addNewProjectButtonEvent(addProjectButton);

    darkModeCheckbox.addEventListener("click", () => {
        //change color scheme somehow
    });
}

function addAddTaskButtonEvent(addTaskButton) {
    addTaskButton.addEventListener("click", (e) => {
        (0,_newTask__WEBPACK_IMPORTED_MODULE_2__.newTaskClick)(e);
    });
}

function addProjectsButtonEvent(projectsButton) {
    projectsButton.addEventListener("click", (e) => {
        e.stopPropagation();
        projectsButton.nextElementSibling.classList.toggle("sidebar-hidden");
    });
}

function addImportantButtonEvent(importantButton) {
    importantButton.addEventListener("click", (e) => {
        e.stopPropagation();
        importantButton.nextElementSibling.classList.toggle("sidebar-hidden");
    });
}

function addCloseButtonEvent(closeButton) {
    closeButton.addEventListener("click", (e) => {
        const parent = closeButton.parentNode;
        parent.remove();
        reAppendNewTaskButton();
    });
}

function addConfirmButtonEvent(confirmButton) {
    confirmButton.addEventListener("click", (e) => {
        const parent = confirmButton.parentNode;
        const title = parent.querySelector(".title-textarea");
        if (title.value === "") {
            title.placeholder = "This field cannot be empty.";
            title.classList.add("red-text");
            setTimeout(() => {
                title.classList.remove("red-text");
            }, 750);
            return;
        }
        const description = parent.querySelector(".description-textarea").value;
        const date = document.querySelector(".date-container .due-date-picker").value;
        const priority = parent.querySelector(".priority-slider").value;
        const project = parent.querySelector(".project-selector").value;
        const todoID = (0,_todoItems__WEBPACK_IMPORTED_MODULE_4__.addTodo)(title.value, description, date, priority, project);
        (0,_projects__WEBPACK_IMPORTED_MODULE_3__.addItemToProject)(todoID, (0,_projects__WEBPACK_IMPORTED_MODULE_3__.getProjectIndexByTitle)(project));
        parent.remove();
        reAppendNewTaskButton();
    });
}

function addDeleteTodoEvent(deleteButton) {
    deleteButton.addEventListener("click", (e) => {
        //e.stopPropagation();
        const parent = deleteButton.parentNode.parentNode;
        const todoID = parent.getAttribute("id");
        (0,_todoItems__WEBPACK_IMPORTED_MODULE_4__.deleteTodo)(todoID);
        parent.remove();
    })
}

function addNewProjectButtonEvent(button) {
    button.addEventListener("click", (e) => {
        (0,_newProject__WEBPACK_IMPORTED_MODULE_1__.newProjectClick)(e);
    });
}

function addConfirmNewProjectButtonEvent(confirmButton) {
    confirmButton.addEventListener("click", (e) => {
        const container = confirmButton.parentNode.parentNode;
        const textarea = document.getElementById("new-project-input");
        const title = textarea.value;
        (0,_projects__WEBPACK_IMPORTED_MODULE_3__.addProject)(title);
        container.remove();
        (0,_newProject__WEBPACK_IMPORTED_MODULE_1__.reAppendNewProjectButton)(document.getElementById("projects-content"));
    });
}

function addCloseNewProjectButtonEvent(closeButton) {
    closeButton.addEventListener("click", (e) => {
        const container = closeButton.parentNode.parentNode;
        container.remove();
        (0,_newProject__WEBPACK_IMPORTED_MODULE_1__.reAppendNewProjectButton)(document.getElementById("projects-content"));
    });
}

function addDetailedConfirmButtonEvent(confirmButton, id) {
    confirmButton.addEventListener("click", (e) => {
        const parent = confirmButton.parentNode;
        const title = parent.querySelector(".title-textarea");
        if (title.value === "") {
            title.placeholder = "This field cannot be empty.";
            title.classList.add("red-text");
            setTimeout(() => {
                title.classList.remove("red-text");
            }, 750);
            return;
        }
        const description = parent.querySelector(".description-textarea").value;
        const date = parent.querySelector(".date-container .due-date-picker").value;
        const priority = parent.querySelector(".priority-slider").value;
        const project = parent.querySelector(".project-selector").value;
        const editedTodoID = (0,_todoItems__WEBPACK_IMPORTED_MODULE_4__.editTodo)(id, title.value, description, date, priority, project);
        parent.remove();
        (0,_todoItems__WEBPACK_IMPORTED_MODULE_4__.renderAllTodos)();
        const currentProjectIndex = (0,_projects__WEBPACK_IMPORTED_MODULE_3__.getProjectIndexByTitle)(project);
        (0,_projects__WEBPACK_IMPORTED_MODULE_3__.addItemToProject)(editedTodoID, currentProjectIndex);
    });
}

function addDetailedCloseButtonEvent(closeButton) {
    closeButton.addEventListener("click", (e) => {
        (0,_todoItems__WEBPACK_IMPORTED_MODULE_4__.createTodos)((0,_todoItems__WEBPACK_IMPORTED_MODULE_4__.getTodos)());
    });
}

function reAppendNewTaskButton() {
    const newTaskButton = (0,_newTask__WEBPACK_IMPORTED_MODULE_2__.createNewTaskButton)();
    addAddTaskButtonEvent(newTaskButton);
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(document.getElementById("center-content"), newTaskButton);
}

function addTodoEvent(todo) {
    todo.addEventListener("click", (e) => {
        if(e.target.classList.contains("delete-todo-button")) return;
        if([...document.querySelectorAll(".delete-todo-button")].includes(e.target)) return;
        (0,_todoItems__WEBPACK_IMPORTED_MODULE_4__.displayTodoDetails)(e.currentTarget.id);
    });
}

function findButtons(buttonIDs) {
    const domButtons = [...document.querySelectorAll("button")];
    const returnButtons = [];
    if (typeof buttonIDs === "object") {
        buttonIDs.forEach(id => {
            domButtons.find(function (button) {
                if (button.id === id) {
                    returnButtons.push(button);
                }
            });
        });
    } else {
        domButtons.find(function (button) {
            return button.id === buttonIDs;
        });
    }
    return returnButtons;
}



/***/ }),

/***/ "./src/domHelpers.js":
/*!***************************!*\
  !*** ./src/domHelpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHTMLElement": () => (/* binding */ createHTMLElement),
/* harmony export */   "appendChildHelper": () => (/* binding */ appendChildHelper),
/* harmony export */   "removeAllChildren": () => (/* binding */ removeAllChildren)
/* harmony export */ });
function createHTMLElement(element, classes, id) {
    const returnElement = document.createElement(element);
    if (typeof classes === "object") {
        classes.forEach(function (classToAdd) {
            returnElement.classList.add(classToAdd);
        });
    } else if (typeof classes === "string" && classes !== "") {
        returnElement.classList.add(classes);
    }
    if (typeof id === "string" && id !== "") {
        returnElement.setAttribute("id", id);
    }
    return returnElement;
}

function appendChildHelper(element, children) {
    if (Object.getPrototypeOf(children).constructor === Array && typeof children === "object") {
        children.forEach(child => {
            element.appendChild(child);
        });
    } else {
        element.appendChild(children);
    }
    return element;
}

function removeAllChildren(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}



/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProjectClick": () => (/* binding */ newProjectClick),
/* harmony export */   "createNewProjectButton": () => (/* binding */ createNewProjectButton),
/* harmony export */   "reAppendNewProjectButton": () => (/* binding */ reAppendNewProjectButton)
/* harmony export */ });
/* harmony import */ var _bindClickEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bindClickEvents */ "./src/bindClickEvents.js");
/* harmony import */ var _domHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domHelpers */ "./src/domHelpers.js");
/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newTask */ "./src/newTask.js");
/* harmony import */ var _images_add_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/add.svg */ "./src/images/add.svg");
/* harmony import */ var _addButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addButton */ "./src/addButton.js");






function newProjectClick(e) {
    const parent = e.currentTarget.parentNode;
    e.currentTarget.remove();
    const container = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "new-project-container", "new-project-container");
    const newProjectForm = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "new-project-form", "new-project-form");
    const titleArea = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("input", ["textarea", "new-project-textarea"], "new-project-input");
    titleArea.placeholder = "Title: Coding";
    titleArea.type = "text";
    titleArea.size = "18";
    const confirmButton = (0,_newTask__WEBPACK_IMPORTED_MODULE_2__.createConfirmButton)();
    (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_0__.addConfirmNewProjectButtonEvent)(confirmButton);
    const closeButton = (0,_newTask__WEBPACK_IMPORTED_MODULE_2__.createCloseButton)();
    (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_0__.addCloseNewProjectButtonEvent)(closeButton);
    const buttonContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "", "new-project-button-container");

    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(container, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(newProjectForm, titleArea));
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(container, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(buttonContainer, [confirmButton, closeButton]));
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(parent, container);
    titleArea.focus();
}

function createNewProjectButton() {
    const newButton = (0,_addButton__WEBPACK_IMPORTED_MODULE_4__.createNewAddButton)("new-project-button", "add-image", "new-project-text", "New Project");
    return newButton;
}

function reAppendNewProjectButton(parentNode) {
    const newButton = createNewProjectButton();
    (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_0__.addNewProjectButtonEvent)(newButton);
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(parentNode, newButton);
}



/***/ }),

/***/ "./src/newTask.js":
/*!************************!*\
  !*** ./src/newTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newTaskClick": () => (/* binding */ newTaskClick),
/* harmony export */   "createNewTaskButton": () => (/* binding */ createNewTaskButton),
/* harmony export */   "createSlider": () => (/* binding */ createSlider),
/* harmony export */   "createCloseButton": () => (/* binding */ createCloseButton),
/* harmony export */   "createConfirmButton": () => (/* binding */ createConfirmButton),
/* harmony export */   "createDateContainer": () => (/* binding */ createDateContainer),
/* harmony export */   "createTitleArea": () => (/* binding */ createTitleArea),
/* harmony export */   "createDescriptionArea": () => (/* binding */ createDescriptionArea)
/* harmony export */ });
/* harmony import */ var _domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelpers */ "./src/domHelpers.js");
/* harmony import */ var _bindClickEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bindClickEvents */ "./src/bindClickEvents.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _images_confirm_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/confirm.svg */ "./src/images/confirm.svg");
/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/close.svg */ "./src/images/close.svg");
/* harmony import */ var _images_add_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/add.svg */ "./src/images/add.svg");
/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todoItems */ "./src/todoItems.js");








function newTaskClick(e, todoID) {
    const parent = e.currentTarget.parentNode;
    e.currentTarget.remove();
    const container = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "new-todo-container", "new-todo-container");
    const newTodoForm = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "new-todo-form", "new-todo-form");
    const titleArea = createTitleArea();
    const descriptionArea = createDescriptionArea();
    const dateContainer = createDateContainer(true, todoID);
    const confirmButton = createConfirmButton();
    (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_1__.addConfirmButtonEvent)(confirmButton);
    confirmButton.setAttribute("id", "new-task-confirm");
    const closeButton = createCloseButton();
    closeButton.setAttribute("id", "new-task-close");
    (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_1__.addCloseButtonEvent)(closeButton);
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(container, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(newTodoForm, [titleArea, descriptionArea, dateContainer]));
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(container, [confirmButton, closeButton]);
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(parent, container);
    titleArea.focus();
}

function createSlider() {
    const sliderContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "slider-container");
    const prioSlider = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("input", "priority-slider");
    prioSlider.type = "range";
    prioSlider.min = "1";
    prioSlider.max = "10";
    prioSlider.value = "5";
    const prioText = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("p", "prio-text");
    prioText.textContent = "Priority: ";
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(sliderContainer, [prioText, prioSlider]);
    return sliderContainer;
}

function createConfirmButton() {
    const confirmButton = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("img", ["task-button", "confirm-button"]);
    confirmButton.src = _images_confirm_svg__WEBPACK_IMPORTED_MODULE_3__;
    return confirmButton;
}

function createCloseButton() {
    const closeButton = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("img", ["task-button", "close-button"]);
    closeButton.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_4__;
    return closeButton;
}

function createDateContainer(isNewTask, todoID) {
    const dateContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "date-container");
    const datePicker = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("input", "due-date-picker");
    datePicker.type = "date";
    datePicker.valueAsDate = new Date();
    const projectContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "project-container");
    const selector = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("select", "project-selector");
    selector.name = "projects";
    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.getProjects)().forEach((project) => {
        console.dir(project);
        if(project == null || project == undefined) return;
        const newOption = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("option", "project-option");
        newOption.value = project.title;
        console.log(newOption.value);
        if (newOption.value === document.getElementById("todo-page-title").textContent && isNewTask) {
            newOption.setAttribute("selected", "\"selected\"");
        } else if (!isNewTask) {
            if(newOption.value === (0,_todoItems__WEBPACK_IMPORTED_MODULE_6__.getTodosByID)([todoID])[0].getProject()) {
                newOption.setAttribute("selected", "\"selected\"");
            }
        }
            newOption.textContent = project.title;
        (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(selector, newOption);
    });

    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(projectContainer, selector);
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(dateContainer, [datePicker, projectContainer, createSlider()]);
    return dateContainer;
}

function createDescriptionArea() {
    const descriptionArea = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("textarea", ["description-textarea", "textarea"]);
    descriptionArea.placeholder = "Details: Preferably before you starve."
    descriptionArea.rows = "5";
    return descriptionArea;
}

function createTitleArea() {
    const titleArea = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("textarea", ["title-textarea", "textarea"]);
    titleArea.placeholder = "Title: Eat food";
    return titleArea;
}

function createNewTaskButton() {
    const bottomContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "todo-add-container", "todo-add-container");
    const addImage = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("img", "add-image", "add-image");
    addImage.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_5__;
    const addText = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("p", "add-text", "add-text");
    addText.textContent = "New Task";
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(bottomContainer, [addImage, addText]);
    return bottomContainer;
}



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addHomeProject": () => (/* binding */ addHomeProject),
/* harmony export */   "addItemToProject": () => (/* binding */ addItemToProject),
/* harmony export */   "deleteItemFromProject": () => (/* binding */ deleteItemFromProject),
/* harmony export */   "editProjectName": () => (/* binding */ editProjectName),
/* harmony export */   "getIDsOfProject": () => (/* binding */ getIDsOfProject),
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "getProjectIndexByTitle": () => (/* binding */ getProjectIndexByTitle),
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects)
/* harmony export */ });
/* harmony import */ var _domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelpers */ "./src/domHelpers.js");
/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoItems */ "./src/todoItems.js");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg");




const projects = [];
const currentProject = 0;

function addProject(title) {
    title = title.slice(0, 1).toUpperCase() + title.slice(1, title.length).toLowerCase();
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].title === title) return;
    }
    projects.push({
        title: title,
        items: [],
    });
    projects[projects.length - 1].index = projects.length - 1;
    renderProjects();
}

function addHomeProject() {
    addProject("Home");
}

function addItemToProject(todoID, projectIndex) {
    projects.forEach(project => {
        if(project == null || project == undefined) return;
        const foundIndex = project.items.findIndex(id => {
            return id == todoID;
        })
        if (foundIndex >= 0) {
            project.items.splice(foundIndex, 1);
        }
    });
    projects[projectIndex].items.push(todoID);
    if (projectIndex > 0) {
        projects[0].items.push(todoID);
    }
}

function deleteItemFromProject(todoID) {
    let projectTitle;
    getProjects().forEach(project => {
        if(project == null || project == undefined) return;
        if (project.items.includes(+todoID)) {
            project.items.splice(todoID, 1, "");
            projectTitle = project.title;
        }
    });
    (0,_todoItems__WEBPACK_IMPORTED_MODULE_1__.createTodos)((0,_todoItems__WEBPACK_IMPORTED_MODULE_1__.getTodosByID)(getIDsOfProject(getProjectIndexByTitle(projectTitle))));
}

function deleteProject(projectIndex) {
    console.log(`Deleting project with index ${projectIndex}`);
    const projectToDelete = getProjects()[projectIndex];
    getProjects().splice(projectIndex, 1, null);

}

function getIDsOfProject(projectIndex) {
    return projects[projectIndex].items;
}

function getProjects() {
    return projects;
}

function setProjectToHome(project) {
    project.items.forEach(item => {
        item.setProject("Home");
    });
}

function getProjectIndexByTitle(title) {
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].title === title) {
            return i;
        }
    }
    return 0;
}

function renderProjects() {
    const container = document.getElementById("projects");
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(container);
    projects.forEach(project => {
        const newProjectContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "projects-item-container");
        const newProjectElement = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("p", "projects-item");
        newProjectElement.textContent = project.title;
        newProjectElement.dataset.projectIndex = `${projects.findIndex(element => project === element)}`;
        newProjectElement.addEventListener("click", (e) => {
            const titleNode = document.getElementById("todo-page-title");
            const projectIndex = newProjectElement.dataset.projectIndex
            titleNode.textContent = getProjects()[projectIndex].title;
            (0,_todoItems__WEBPACK_IMPORTED_MODULE_1__.createTodos)((0,_todoItems__WEBPACK_IMPORTED_MODULE_1__.getTodosByID)(getIDsOfProject(projectIndex)));

        });

        const projectIndex = newProjectElement.dataset.projectIndex;
        if (projectIndex > 0) {
            console.log(projectIndex);
            const newDeleteButton = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("img", "projects-item-delete");
            newDeleteButton.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
            newDeleteButton.addEventListener("click", (e) => {
                handleProjectDeletion(e, projectIndex)
            });
            (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(container, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(newProjectContainer, [newProjectElement, newDeleteButton]));
        } else {
            (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(container, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(newProjectContainer, [newProjectElement]));
        }

        
    });
}

function handleProjectDeletion(e, projectIndex) {
        e.target.parentNode.remove();
        deleteProject(projectIndex);
}

function editProjectName(string, projectIndex) {
    if (typeof string === "string") {
        projects[projectIndex].title = string;
    }
}




/***/ }),

/***/ "./src/todoFactory.js":
/*!****************************!*\
  !*** ./src/todoFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ToDoFactory = (title, description, dueDate, priority, project) => {
    const getTitle = () => title;
    const setTitle = (input) => undefined.title = input;
    const getDescription = () => description;
    const setDescription = (input) => undefined.description = input;
    const getDueDate = () => dueDate;
    const setDueDate = (input) => undefined.dueDate = input;
    const getPriority = () => priority;
    const setPriority = (input) => undefined.priority = input;
    const getProject = () => project;
    const setProject = (input) => undefined.project = input;
    const getComplete = () => {
        if (undefined.hasOwnProperty("complete")) {
            return undefined.complete;
        } else {
            console.log("Complete property not set.");
            return;
        }
    }
    const setComplete = () => {
        if (undefined.hasOwnProperty("complete")) {
            undefined.complete = !undefined.complete;
        } else {
            undefined.complete = true;
        }
    }
   /* const getProject = () => {
        if(this.hasOwnProperty("project")) {
            return this.project;
        } else {
            console.log("project property not set.");
            return;
        }
    }
    const setProject = (input) => {
        this.project = input;
    }*/


    return { getTitle, setTitle, getDescription, setDescription, getDueDate, setDueDate, getPriority, setPriority, getComplete, setComplete, getProject, setProject };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoFactory);

/***/ }),

/***/ "./src/todoItems.js":
/*!**************************!*\
  !*** ./src/todoItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "getTodos": () => (/* binding */ getTodos),
/* harmony export */   "createTodos": () => (/* binding */ createTodos),
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo),
/* harmony export */   "editTodo": () => (/* binding */ editTodo),
/* harmony export */   "displayTodoDetails": () => (/* binding */ displayTodoDetails),
/* harmony export */   "getTodosByID": () => (/* binding */ getTodosByID),
/* harmony export */   "renderAllTodos": () => (/* binding */ renderAllTodos)
/* harmony export */ });
/* harmony import */ var _todoFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoFactory */ "./src/todoFactory.js");
/* harmony import */ var _domHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domHelpers */ "./src/domHelpers.js");
/* harmony import */ var _bindClickEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bindClickEvents */ "./src/bindClickEvents.js");
/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newTask */ "./src/newTask.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg");







const allTodos = [];

function getTodos() {
    if (allTodos.length < 1) {
        //addTodo("test", "stupid stuff", "16/3/1998", "high");
    }
    return allTodos;
}

function getTodosByID(indexes) {
    const todos = [];
    indexes.forEach(index => {
        todos.push(allTodos[index]);
    });
    return todos;
}

function addTodo(title, description, dueDate, priority, project) {
    const todo = (0,_todoFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, dueDate, priority, project);
    todo.id = allTodos.length;
    allTodos.push(todo);

    createTodos(getTodos());
    renderImportantTodos();
    return todo.id;
}

function createTodos(todos) {
    if (todos === []) {
        return null;
    }
    const todosContainer = document.getElementById("todos");
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(todosContainer);
    todos.forEach(todo => {
        if (!todo) return;
        const item = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "todo-item", todo.id.toString());
        const leftContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "todo-item-left");
        const rightContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "todo-item-right");
        const title = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("p", "todo-title");
        title.textContent = todo.getTitle();
        (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(leftContainer, title);
        const dueDate = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("p", "todo-due-date");
        dueDate.textContent = todo.getDueDate();
        const deleteButton = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("img", "delete-todo-button", "");
        deleteButton.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_5__;
        (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_2__.addDeleteTodoEvent)(deleteButton);
        (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(rightContainer, [dueDate, deleteButton]);
        (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(item, [leftContainer, rightContainer]);
        (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_2__.addTodoEvent)(item);
        (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(todosContainer, item);
    });
}

function editTodo(todoID, title, description, dueDate, priority, project) {
    const newTodo = (0,_todoFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, dueDate, priority, project);
    newTodo.id = todoID;
    allTodos.splice(todoID, 1, newTodo);
    renderAllTodos();
    return newTodo.id;
}

function displayTodoDetails(todoID) {
    const todoNode = document.getElementById(todoID);
    const parent = todoNode.parentNode;
    const prevDetailedTodo = document.querySelector(".todo-detailed-container");
    if (prevDetailedTodo !== null) {
        createTodos(getTodos());
    }
    document.getElementById(todoID).remove();

    const container = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "todo-detailed-container");
    const todoForm = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "todo-detailed");
    const titleArea = (0,_newTask__WEBPACK_IMPORTED_MODULE_3__.createTitleArea)();
    titleArea.value = getTodos()[todoID].getTitle();
    const descriptionArea = (0,_newTask__WEBPACK_IMPORTED_MODULE_3__.createDescriptionArea)();
    descriptionArea.value = getTodos()[todoID].getDescription();
    const dateContainer = (0,_newTask__WEBPACK_IMPORTED_MODULE_3__.createDateContainer)(false, todoID);
    dateContainer.querySelector(".priority-slider").value = getTodos()[todoID].getPriority();
    dateContainer.querySelector(".date-container .due-date-picker").value = getTodos()[todoID].getDueDate();
    const confirmButton = (0,_newTask__WEBPACK_IMPORTED_MODULE_3__.createConfirmButton)();
    confirmButton.setAttribute("id", "todo-detailed-confirm");
    (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_2__.addDetailedConfirmButtonEvent)(confirmButton, todoID);
    const closeButton = (0,_newTask__WEBPACK_IMPORTED_MODULE_3__.createCloseButton)();
    closeButton.setAttribute("id", "todo-detailed-close");
    (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_2__.addDetailedCloseButtonEvent)(closeButton);
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(container, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(todoForm, [titleArea, descriptionArea, dateContainer]));
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(container, [confirmButton, closeButton]);
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(parent, container);
}

function deleteTodo(todoID) {
    allTodos[todoID] = null;
    (0,_projects__WEBPACK_IMPORTED_MODULE_4__.deleteItemFromProject)(todoID);
    renderImportantTodos();
}

function renderAllTodos() {
    createTodos(getTodos());
}

function renderImportantTodos() {
    const importantTodos = [];
    getTodos().forEach(todo => {
        if(todo === null) return;
        if (todo.getPriority() >= 8) {
            importantTodos.push({ title: todo.getTitle(), id: todo.id, priority: todo.getPriority() });
        }
    });
    const container = document.getElementById("important-folder");
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(container);
    importantTodos.forEach(todo => {
        const newImportantElement = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("p", "important-item");
        newImportantElement.textContent = todo.title + `\xa0 \xa0 \xa0 (${todo.priority})`;
        newImportantElement.dataset.todoid = todo.id;
        newImportantElement.addEventListener("click", (e) => {
            const projects = (0,_projects__WEBPACK_IMPORTED_MODULE_4__.getProjects)();
            let project;
            for (let i = projects.length - 1; i >= 0; i--) {
                if (projects[i].items.includes(todo.id)) {
                    project = projects[i];
                    break;
                }
            }
            document.getElementById("todo-page-title").textContent = project.title;
            createTodos(getTodosByID(project.items));
            displayTodoDetails(todo.id);
        });
        (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(container, newImportantElement);
    });
}





/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInitialWebpage": () => (/* binding */ createInitialWebpage)
/* harmony export */ });
/* harmony import */ var _bindClickEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bindClickEvents */ "./src/bindClickEvents.js");
/* harmony import */ var _domHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domHelpers */ "./src/domHelpers.js");
/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoItems */ "./src/todoItems.js");
/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newTask */ "./src/newTask.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _addButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addButton */ "./src/addButton.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");








function createHeaderElement() {
    const header = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("header", "header", "header");
    const headerLeft = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "header-left", "header-left");
    const headerLogo = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("h1", "header-logo", "header-logo");
    headerLogo.textContent = "todo-list"
    headerLeft.appendChild(headerLogo);
    const headerRight = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "header-right", "header-right");
    const label = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("label", "switch", "dark-mode-switch");
    const input = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("input", "", "dark-mode-checkbox");
    input.type = "checkbox";
    input.checked = true;
    const span = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("span", ["slider", "round"]);
    const labelSymbol = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("p", "switch-text", "switch-text");
    labelSymbol.textContent = "💡";
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(headerRight, [labelSymbol, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(label, [input, span])]);

    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(header, [headerLeft, headerRight]);

    return header;
}

function createMainElement() {
    const main = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "main", "main");
    const mainLeft = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "main-left", "main-left");
    const projectsContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "projects-container", "projects-container");
    const projectsButton = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("button", "projects-button", "projects-button");
    const projectsButtonText = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("p", "projects-text", "projects-text");
    projectsButtonText.innerHTML = "<span id=\"projects-span\">> </span>Projects";
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(projectsContainer, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(projectsButton, projectsButtonText));
    const projectsContent = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "projects-content", "projects-content");
    const projects = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", ["projects"], "projects");
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(mainLeft, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(projectsContainer, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(projectsContent, [projects, (0,_newProject__WEBPACK_IMPORTED_MODULE_6__.createNewProjectButton)()])));

    const importantContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "important-container", "important-container");
    const importantButton = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("button", "important-button", "important-button");
    const importantButtonText = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("p", "important-text", "important-text");
    importantButtonText.innerHTML = "<span id=\"projects-span\">> </span> Important";
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(importantContainer, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(importantButton, importantButtonText));
    const importantFolder = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", ["important-folder"], "important-folder");
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(mainLeft, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(importantContainer, importantFolder));

    const mainCenter = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "main-center", "main-center");
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(mainCenter, createMainCenterContent());
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(main, [mainLeft, mainCenter]);

    return main;
}

function createMainCenterContent() {
    const content = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "center-content", "center-content");
    const topContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "todo-top-container", "todo-top-container");
    const titleContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "project-title-container", "project-title-container");
    const title = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("h2", "todo-page-title", "todo-page-title");
    title.textContent = "Home";
    const dueDate = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("p", "", "todo-page-due-date");
    dueDate.textContent = "Due Date";
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(content, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(topContainer, [title, dueDate]));

    const tasksContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "todos", "todos");
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(content, tasksContainer);


    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(content, (0,_newTask__WEBPACK_IMPORTED_MODULE_3__.createNewTaskButton)());

    return content;
}

function createFooter() {
    const contentDiv = document.getElementById("content");
}



function createInitialWebpage() {
    const contentDiv = document.getElementById("content");
    const header = createHeaderElement();
    const main = createMainElement();
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(contentDiv, [header, main]);
    (0,_projects__WEBPACK_IMPORTED_MODULE_4__.addHomeProject)();
    (0,_todoItems__WEBPACK_IMPORTED_MODULE_2__.createTodos)((0,_todoItems__WEBPACK_IMPORTED_MODULE_2__.getTodos)());
    (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_0__.bindClickEvents)();
}



/***/ }),

/***/ "./src/images/add.svg":
/*!****************************!*\
  !*** ./src/images/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c687829df54166165ab9.svg";

/***/ }),

/***/ "./src/images/close.svg":
/*!******************************!*\
  !*** ./src/images/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca8c67c13ad6df4a63f1.svg";

/***/ }),

/***/ "./src/images/confirm.svg":
/*!********************************!*\
  !*** ./src/images/confirm.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2d8d381eb4fc0a5ff0c.svg";

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "93a08fffc3783547e0f1.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ "./src/webpage.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



(0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createInitialWebpage)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFB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QUFHckIsSUFBSSw4REFBaUIsVUFBVSw2REFBbUI7O0FBRWxEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFpQjtBQUNyQixJQUFJLHlEQUFjO0FBQ2xCLElBQUksdURBQVcsQ0FBQyxvREFBUTtBQUN4QixJQUFJLGlFQUFlO0FBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmaUQ7QUFDM0I7O0FBRXRCLDhEQUFvQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FkZEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYmluZENsaWNrRXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21IZWxwZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXdQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXdUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9JdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvd2VicGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkIyRDQ0O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNDAsIDQxJSwgNyUpO1xcbiAgICBjb2xvcjogI0NFQ0ZFRDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZGRkZGRjtcXG4gICAgaGVpZ2h0OiA4JTtcXG59XFxuXFxuLmhlYWRlci1sZWZ0LFxcbi5oZWFkZXItcmlnaHQge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4uaGVhZGVyLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLWxvZ28ge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cXG4uaGVhZGVyLWNlbnRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBjb2xvcjogI0EyQTNCRjtcXG59XFxuXFxuLmhlYWRlci1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLnN3aXRjaCBpbnB1dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgd2lkdGg6IDI2cHg7XFxuICAgIGxlZnQ6IDRweDtcXG4gICAgYm90dG9tOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDY1YWQ7XFxufVxcblxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG59XFxuXFxuLnNsaWRlci5yb3VuZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcbiAgXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA4NiU7XFxuICAgIG1pbi1oZWlnaHQ6IDg0MHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG5cXG59XFxuLm1haW4tbGVmdCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3MDZiNmI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNDAsIDQxJSwgNyUpO1xcbiAgICBtYXJnaW4tdG9wOiAxcHg7XFxufVxcbi5tYWluLWNlbnRlciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuLnByb2plY3RzLWJ1dHRvbixcXG4uaW1wb3J0YW50LWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogLTJweDtcXG4gICAgbWluLWhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogI2YxZjFmZjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjQwLCA0MSUsIDclKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4ucHJvamVjdHMtYnV0dG9uOmhvdmVyLCBcXG4uaW1wb3J0YW50LWJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZkNGRhO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIsXFxuLmltcG9ydGFudC1jb250YWluZXIge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTVmZjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNDAsIDQxJSwgNyUpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBwYWRkaW5nOiAwIDAgMTVweDtcXG59XFxuXFxuLmltcG9ydGFudC1mb2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uaW1wb3J0YW50LWl0ZW0ge1xcbiAgICBjb2xvcjogI2ZmNmE1MDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi5pbXBvcnRhbnQtaXRlbTpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmY1MjMzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy10ZXh0LFxcbi5pbXBvcnRhbnQtdGV4dCB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0cy1pdGVtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWl0ZW0ge1xcbiAgICBjb2xvcjogI2YxZjFmZjtcXG4gICAgZm9udC1zaXplOiAyMXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi5wcm9qZWN0cy1pdGVtLWRlbGV0ZSB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDkzJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMjglKSBodWUtcm90YXRlKDIyM2RlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCgxMDMlKTsgXFxuICAgIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnByb2plY3RzLWl0ZW0tZGVsZXRlOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtaXRlbTpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZkNGRhO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNuZXctcHJvamVjdC1idXR0b24tY29udGFpbmVyIHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbi5wcm9qZWN0cy1jb250ZW50LnNpZGViYXItaGlkZGVuLFxcbi5pbXBvcnRhbnQtZm9sZGVyLnNpZGViYXItaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Byb2plY3RzLXNwYW4sIFxcbiNpbXBvcnRhbnQtc3BhbiB7XFxuICAgIGNvbG9yOiAjZjFmMWZmO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5jZW50ZXItY29udGVudCB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi50b2RvLXRvcC1jb250YWluZXIge1xcbiAgICBjb2xvcjogI2U1ZTZlNztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xcbn1cXG5cXG4udG9kby10b3AtY29udGFpbmVyID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLnRvZG8tYWRkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLnRvZG8tYWRkLWNvbnRhaW5lcjpob3ZlciwgXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tYWRkLWNvbnRhaW5lciA+IHAge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmFkZC1pbWFnZSwgLnRhc2stYnV0dG9uIHtcXG4gICAgd2lkdGg6IDIycHg7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoOTMlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgyOCUpIGh1ZS1yb3RhdGUoMjIzZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwMyUpO1xcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBjb2xvcjogI2U1ZTZlNztcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2M1YzZjNzJmO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M1YzZjNzJmO1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xcbn1cXG5cXG4udG9kby1pdGVtLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uZGVsZXRlLXRvZG8tYnV0dG9uIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoOTMlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgyOCUpIGh1ZS1yb3RhdGUoMjIzZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwMyUpO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5kZWxldGUtdG9kby1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50b2RvLWR1ZS1kYXRlIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4udG9kby1pdGVtOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci10b3AtY29sb3I6ICNjNWM2YzdiMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2M1YzZjN2IwO1xcbn1cXG5cXG4ubmV3LXRvZG8tZm9ybSxcXG4udG9kby1kZXRhaWxlZCwgXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjk0NTUyO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzVDNkM3O1xcbn1cXG5cXG4ubmV3LXRvZG8tZm9ybSB7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwMDcwYTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCMkQ0NDtcXG59XFxuXFxuLnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCMkQ0NDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIG1hcmdpbjogMTBweCAwIDVweDtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSAudGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjQwLCA0MSUsIDclKTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIFxcbn1cXG5cXG4udGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRhc2stYnV0dG9uIHtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbn1cXG5cXG4udGFzay1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZWQtdGV4dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogI2VjNDE0MTtcXG59XFxuXFxuLmR1ZS1kYXRlLXBpY2tlciB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTkyMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5kdWUtZGF0ZS1waWNrZXI6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDkzJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMjglKSBodWUtcm90YXRlKDIyM2RlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCgxMDMlKTtcXG59XFxuXFxuLmRhdGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcblxcbi5wcmlvLXRleHQge1xcbiAgICBjb2xvcjogI0M1QzZDNztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFB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LFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdHQUFnRztBQUNwRzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCMkQ0NDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjQwLCA0MSUsIDclKTtcXG4gICAgY29sb3I6ICNDRUNGRUQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGRkZGRkY7XFxuICAgIGhlaWdodDogOCU7XFxufVxcblxcbi5oZWFkZXItbGVmdCxcXG4uaGVhZGVyLXJpZ2h0IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWluLWhlaWdodDogNjBweDtcXG59XFxuXFxuLmhlYWRlci1sZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlci1sb2dvIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuXFxuLmhlYWRlci1jZW50ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgY29sb3I6ICNBMkEzQkY7XFxufVxcblxcbi5oZWFkZXItcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnN3aXRjaCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiAzNHB4O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIHdpZHRoOiAyNnB4O1xcbiAgICBsZWZ0OiA0cHg7XFxuICAgIGJvdHRvbTogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2NWFkO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi5zbGlkZXIucm91bmQge1xcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG4gIFxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogODYlO1xcbiAgICBtaW4taGVpZ2h0OiA4NDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxufVxcbi5tYWluLWxlZnQge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNzA2YjZiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjQwLCA0MSUsIDclKTtcXG4gICAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG4ubWFpbi1jZW50ZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5wcm9qZWN0cy1idXR0b24sXFxuLmltcG9ydGFudC1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6ICNmMWYxZmY7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI0MCwgNDElLCA3JSk7XFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuXFxuLnByb2plY3RzLWJ1dHRvbjpob3ZlciwgXFxuLmltcG9ydGFudC1idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmZDRkYTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyLFxcbi5pbXBvcnRhbnQtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU1ZmY7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjQwLCA0MSUsIDclKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgcGFkZGluZzogMCAwIDE1cHg7XFxufVxcblxcbi5pbXBvcnRhbnQtZm9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLmltcG9ydGFudC1pdGVtIHtcXG4gICAgY29sb3I6ICNmZjZhNTA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4uaW1wb3J0YW50LWl0ZW06aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmNTIzMztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtdGV4dCxcXG4uaW1wb3J0YW50LXRleHQge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdHMtaXRlbS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1pdGVtIHtcXG4gICAgY29sb3I6ICNmMWYxZmY7XFxuICAgIGZvbnQtc2l6ZTogMjFweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4ucHJvamVjdHMtaXRlbS1kZWxldGUge1xcbiAgICBmaWx0ZXI6IGludmVydCg5MyUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDI4JSkgaHVlLXJvdGF0ZSgyMjNkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoMTAzJSk7IFxcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi5wcm9qZWN0cy1pdGVtLWRlbGV0ZTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWl0ZW06aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmZDRkYTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGVudC5zaWRlYmFyLWhpZGRlbixcXG4uaW1wb3J0YW50LWZvbGRlci5zaWRlYmFyLWhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNwcm9qZWN0cy1zcGFuLCBcXG4jaW1wb3J0YW50LXNwYW4ge1xcbiAgICBjb2xvcjogI2YxZjFmZjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4uY2VudGVyLWNvbnRlbnQge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4udG9kby10b3AtY29udGFpbmVyIHtcXG4gICAgY29sb3I6ICNlNWU2ZTc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNDVweDtcXG59XFxuXFxuLnRvZG8tdG9wLWNvbnRhaW5lciA+IHAge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi50b2RvLWFkZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxufVxcblxcbi50b2RvLWFkZC1jb250YWluZXI6aG92ZXIsIFxcbi5uZXctcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLWFkZC1jb250YWluZXIgPiBwIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5hZGQtaW1hZ2UsIC50YXNrLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyMnB4O1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDkzJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMjglKSBodWUtcm90YXRlKDIyM2RlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCgxMDMlKTtcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgY29sb3I6ICNlNWU2ZTc7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjNWM2YzcyZjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNWM2YzcyZjtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgbWFyZ2luLXRvcDogLTFweDtcXG59XFxuXFxuLnRvZG8taXRlbS1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLmRlbGV0ZS10b2RvLWJ1dHRvbiB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDkzJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMjglKSBodWUtcm90YXRlKDIyM2RlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCgxMDMlKTtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uZGVsZXRlLXRvZG8tYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4udG9kby1kdWUtZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRvZG8taXRlbTpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjYzVjNmM3YjA7XFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNjNWM2YzdiMDtcXG59XFxuXFxuLm5ldy10b2RvLWZvcm0sXFxuLnRvZG8tZGV0YWlsZWQsIFxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI5NDU1MjtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0M1QzZDNztcXG59XFxuXFxuLm5ldy10b2RvLWZvcm0ge1xcbiAgICBib3JkZXItY29sb3I6ICMwMDA3MGE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjJENDQ7XFxufVxcblxcbi50ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjJENDQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBtYXJnaW46IDEwcHggMCA1cHg7XFxufVxcblxcbi5wcm9qZWN0cy1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0gLnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI0MCwgNDElLCA3JSk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBcXG59XFxuXFxuLnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi50YXNrLWJ1dHRvbiB7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG59XFxuXFxuLnRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVkLXRleHQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICNlYzQxNDE7XFxufVxcblxcbi5kdWUtZGF0ZS1waWNrZXIge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzE5MjA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4uZHVlLWRhdGUtcGlja2VyOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICBmaWx0ZXI6IGludmVydCg5MyUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDI4JSkgaHVlLXJvdGF0ZSgyMjNkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoMTAzJSk7XFxufVxcblxcbi5kYXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4ucHJpby10ZXh0IHtcXG4gICAgY29sb3I6ICNDNUM2Qzc7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRIZWxwZXIsIGNyZWF0ZUhUTUxFbGVtZW50IH0gZnJvbSBcIi4vZG9tSGVscGVyc1wiO1xuaW1wb3J0IGFkZEljb24gZnJvbSBcIi4vaW1hZ2VzL2FkZC5zdmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlTmV3QWRkQnV0dG9uKGNvbnRhaW5lckNsYXNzLCBpbWFnZUNsYXNzLCB0ZXh0Q2xhc3MsIHRleHQpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBjb250YWluZXJDbGFzcyk7XG4gICAgY29uc3QgYWRkSW1hZ2UgPSBjcmVhdGVIVE1MRWxlbWVudChcImltZ1wiLCBpbWFnZUNsYXNzKTtcbiAgICBhZGRJbWFnZS5zcmMgPSBhZGRJY29uO1xuICAgIGNvbnN0IGFkZFRleHQgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgdGV4dENsYXNzKTtcbiAgICBhZGRUZXh0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250YWluZXIsIFthZGRJbWFnZSwgYWRkVGV4dF0pO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU5ld0FkZEJ1dHRvbiB9O1xuXG4iLCJpbXBvcnQgeyBhcHBlbmRDaGlsZEhlbHBlciB9IGZyb20gXCIuL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7IG5ld1Byb2plY3RDbGljaywgcmVBcHBlbmROZXdQcm9qZWN0QnV0dG9uIH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuaW1wb3J0IHsgY3JlYXRlTmV3VGFza0J1dHRvbiwgbmV3VGFza0NsaWNrIH0gZnJvbSBcIi4vbmV3VGFza1wiO1xuaW1wb3J0IHsgYWRkSXRlbVRvUHJvamVjdCwgYWRkUHJvamVjdCwgZ2V0UHJvamVjdEluZGV4QnlUaXRsZSB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBhZGRUb2RvLCBjcmVhdGVUb2RvcywgZGVsZXRlVG9kbywgZGlzcGxheVRvZG9EZXRhaWxzLCBlZGl0VG9kbywgZ2V0VG9kb3MsIHJlbmRlckFsbFRvZG9zIH0gZnJvbSBcIi4vdG9kb0l0ZW1zXCI7XG5cbmZ1bmN0aW9uIGJpbmRDbGlja0V2ZW50cygpIHtcbiAgICBjb25zdCBbcHJvamVjdHNCdXR0b24sIGltcG9ydGFudEJ1dHRvbl0gPSBmaW5kQnV0dG9ucyhbXCJwcm9qZWN0cy1idXR0b25cIiwgXCJpbXBvcnRhbnQtYnV0dG9uXCJdKTtcbiAgICBjb25zdCBkYXJrTW9kZUNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrLW1vZGUtY2hlY2tib3hcIik7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1hZGQtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0LWJ1dHRvblwiKTtcblxuICAgIGFkZFByb2plY3RzQnV0dG9uRXZlbnQocHJvamVjdHNCdXR0b24pO1xuICAgIGFkZEltcG9ydGFudEJ1dHRvbkV2ZW50KGltcG9ydGFudEJ1dHRvbik7XG4gICAgYWRkQWRkVGFza0J1dHRvbkV2ZW50KGFkZFRhc2tCdXR0b24pO1xuICAgIGFkZE5ld1Byb2plY3RCdXR0b25FdmVudChhZGRQcm9qZWN0QnV0dG9uKTtcblxuICAgIGRhcmtNb2RlQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgLy9jaGFuZ2UgY29sb3Igc2NoZW1lIHNvbWVob3dcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkQWRkVGFza0J1dHRvbkV2ZW50KGFkZFRhc2tCdXR0b24pIHtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBuZXdUYXNrQ2xpY2soZSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RzQnV0dG9uRXZlbnQocHJvamVjdHNCdXR0b24pIHtcbiAgICBwcm9qZWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcHJvamVjdHNCdXR0b24ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJzaWRlYmFyLWhpZGRlblwiKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkSW1wb3J0YW50QnV0dG9uRXZlbnQoaW1wb3J0YW50QnV0dG9uKSB7XG4gICAgaW1wb3J0YW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpbXBvcnRhbnRCdXR0b24ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJzaWRlYmFyLWhpZGRlblwiKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkQ2xvc2VCdXR0b25FdmVudChjbG9zZUJ1dHRvbikge1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBjbG9zZUJ1dHRvbi5wYXJlbnROb2RlO1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgIHJlQXBwZW5kTmV3VGFza0J1dHRvbigpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRDb25maXJtQnV0dG9uRXZlbnQoY29uZmlybUJ1dHRvbikge1xuICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGNvbmZpcm1CdXR0b24ucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS10ZXh0YXJlYVwiKTtcbiAgICAgICAgaWYgKHRpdGxlLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICB0aXRsZS5wbGFjZWhvbGRlciA9IFwiVGhpcyBmaWVsZCBjYW5ub3QgYmUgZW1wdHkuXCI7XG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwicmVkLXRleHRcIik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwicmVkLXRleHRcIik7XG4gICAgICAgICAgICB9LCA3NTApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb24tdGV4dGFyZWFcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtY29udGFpbmVyIC5kdWUtZGF0ZS1waWNrZXJcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHktc2xpZGVyXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1zZWxlY3RvclwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9kb0lEID0gYWRkVG9kbyh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgICAgICAgYWRkSXRlbVRvUHJvamVjdCh0b2RvSUQsIGdldFByb2plY3RJbmRleEJ5VGl0bGUocHJvamVjdCkpO1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgIHJlQXBwZW5kTmV3VGFza0J1dHRvbigpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGREZWxldGVUb2RvRXZlbnQoZGVsZXRlQnV0dG9uKSB7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAvL2Uuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRlbGV0ZUJ1dHRvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHRvZG9JRCA9IHBhcmVudC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgICAgZGVsZXRlVG9kbyh0b2RvSUQpO1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdEJ1dHRvbkV2ZW50KGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbmV3UHJvamVjdENsaWNrKGUpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRDb25maXJtTmV3UHJvamVjdEJ1dHRvbkV2ZW50KGNvbmZpcm1CdXR0b24pIHtcbiAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjb25maXJtQnV0dG9uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWlucHV0XCIpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRleHRhcmVhLnZhbHVlO1xuICAgICAgICBhZGRQcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICByZUFwcGVuZE5ld1Byb2plY3RCdXR0b24oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1jb250ZW50XCIpKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkQ2xvc2VOZXdQcm9qZWN0QnV0dG9uRXZlbnQoY2xvc2VCdXR0b24pIHtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY2xvc2VCdXR0b24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIHJlQXBwZW5kTmV3UHJvamVjdEJ1dHRvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWNvbnRlbnRcIikpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGREZXRhaWxlZENvbmZpcm1CdXR0b25FdmVudChjb25maXJtQnV0dG9uLCBpZCkge1xuICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGNvbmZpcm1CdXR0b24ucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS10ZXh0YXJlYVwiKTtcbiAgICAgICAgaWYgKHRpdGxlLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICB0aXRsZS5wbGFjZWhvbGRlciA9IFwiVGhpcyBmaWVsZCBjYW5ub3QgYmUgZW1wdHkuXCI7XG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwicmVkLXRleHRcIik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwicmVkLXRleHRcIik7XG4gICAgICAgICAgICB9LCA3NTApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb24tdGV4dGFyZWFcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLWNvbnRhaW5lciAuZHVlLWRhdGUtcGlja2VyXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5LXNsaWRlclwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Qtc2VsZWN0b3JcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGVkaXRlZFRvZG9JRCA9IGVkaXRUb2RvKGlkLCB0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICByZW5kZXJBbGxUb2RvcygpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdEluZGV4ID0gZ2V0UHJvamVjdEluZGV4QnlUaXRsZShwcm9qZWN0KTtcbiAgICAgICAgYWRkSXRlbVRvUHJvamVjdChlZGl0ZWRUb2RvSUQsIGN1cnJlbnRQcm9qZWN0SW5kZXgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGREZXRhaWxlZENsb3NlQnV0dG9uRXZlbnQoY2xvc2VCdXR0b24pIHtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY3JlYXRlVG9kb3MoZ2V0VG9kb3MoKSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlQXBwZW5kTmV3VGFza0J1dHRvbigpIHtcbiAgICBjb25zdCBuZXdUYXNrQnV0dG9uID0gY3JlYXRlTmV3VGFza0J1dHRvbigpO1xuICAgIGFkZEFkZFRhc2tCdXR0b25FdmVudChuZXdUYXNrQnV0dG9uKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNlbnRlci1jb250ZW50XCIpLCBuZXdUYXNrQnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9kb0V2ZW50KHRvZG8pIHtcbiAgICB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtdG9kby1idXR0b25cIikpIHJldHVybjtcbiAgICAgICAgaWYoWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLXRvZG8tYnV0dG9uXCIpXS5pbmNsdWRlcyhlLnRhcmdldCkpIHJldHVybjtcbiAgICAgICAgZGlzcGxheVRvZG9EZXRhaWxzKGUuY3VycmVudFRhcmdldC5pZCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRCdXR0b25zKGJ1dHRvbklEcykge1xuICAgIGNvbnN0IGRvbUJ1dHRvbnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKV07XG4gICAgY29uc3QgcmV0dXJuQnV0dG9ucyA9IFtdO1xuICAgIGlmICh0eXBlb2YgYnV0dG9uSURzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGJ1dHRvbklEcy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgIGRvbUJ1dHRvbnMuZmluZChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuQnV0dG9ucy5wdXNoKGJ1dHRvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbUJ1dHRvbnMuZmluZChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uLmlkID09PSBidXR0b25JRHM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuQnV0dG9ucztcbn1cblxuZXhwb3J0IHtcbiAgICBiaW5kQ2xpY2tFdmVudHMsIGFkZENvbmZpcm1CdXR0b25FdmVudCwgYWRkQ2xvc2VCdXR0b25FdmVudCxcbiAgICBhZGRUb2RvRXZlbnQsIGFkZERldGFpbGVkQ2xvc2VCdXR0b25FdmVudCwgYWRkRGV0YWlsZWRDb25maXJtQnV0dG9uRXZlbnQsXG4gICAgYWRkQ2xvc2VOZXdQcm9qZWN0QnV0dG9uRXZlbnQsIGFkZENvbmZpcm1OZXdQcm9qZWN0QnV0dG9uRXZlbnQsIGFkZE5ld1Byb2plY3RCdXR0b25FdmVudCwgYWRkRGVsZXRlVG9kb0V2ZW50LFxufTsiLCJmdW5jdGlvbiBjcmVhdGVIVE1MRWxlbWVudChlbGVtZW50LCBjbGFzc2VzLCBpZCkge1xuICAgIGNvbnN0IHJldHVybkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGlmICh0eXBlb2YgY2xhc3NlcyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBjbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzVG9BZGQpIHtcbiAgICAgICAgICAgIHJldHVybkVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc1RvQWRkKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY2xhc3NlcyA9PT0gXCJzdHJpbmdcIiAmJiBjbGFzc2VzICE9PSBcIlwiKSB7XG4gICAgICAgIHJldHVybkVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc2VzKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBpZCA9PT0gXCJzdHJpbmdcIiAmJiBpZCAhPT0gXCJcIikge1xuICAgICAgICByZXR1cm5FbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldHVybkVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZENoaWxkSGVscGVyKGVsZW1lbnQsIGNoaWxkcmVuKSB7XG4gICAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZihjaGlsZHJlbikuY29uc3RydWN0b3IgPT09IEFycmF5ICYmIHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkcmVuKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICB3aGlsZShlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgY3JlYXRlSFRNTEVsZW1lbnQsIGFwcGVuZENoaWxkSGVscGVyLCByZW1vdmVBbGxDaGlsZHJlbiB9OyIsImltcG9ydCB7IGFkZENsb3NlTmV3UHJvamVjdEJ1dHRvbkV2ZW50LCBhZGRDb25maXJtTmV3UHJvamVjdEJ1dHRvbkV2ZW50LCBhZGROZXdQcm9qZWN0QnV0dG9uRXZlbnQgfSBmcm9tIFwiLi9iaW5kQ2xpY2tFdmVudHNcIjtcbmltcG9ydCB7IGFwcGVuZENoaWxkSGVscGVyLCBjcmVhdGVIVE1MRWxlbWVudCB9IGZyb20gXCIuL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbmZpcm1CdXR0b24sIGNyZWF0ZUNsb3NlQnV0dG9uIH0gZnJvbSBcIi4vbmV3VGFza1wiO1xuaW1wb3J0IGFkZEljb24gZnJvbSBcIi4vaW1hZ2VzL2FkZC5zdmdcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld0FkZEJ1dHRvbiB9IGZyb20gXCIuL2FkZEJ1dHRvblwiO1xuXG5mdW5jdGlvbiBuZXdQcm9qZWN0Q2xpY2soZSkge1xuICAgIGNvbnN0IHBhcmVudCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlO1xuICAgIGUuY3VycmVudFRhcmdldC5yZW1vdmUoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcIm5ldy1wcm9qZWN0LWNvbnRhaW5lclwiLCBcIm5ldy1wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwibmV3LXByb2plY3QtZm9ybVwiLCBcIm5ldy1wcm9qZWN0LWZvcm1cIik7XG4gICAgY29uc3QgdGl0bGVBcmVhID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbnB1dFwiLCBbXCJ0ZXh0YXJlYVwiLCBcIm5ldy1wcm9qZWN0LXRleHRhcmVhXCJdLCBcIm5ldy1wcm9qZWN0LWlucHV0XCIpO1xuICAgIHRpdGxlQXJlYS5wbGFjZWhvbGRlciA9IFwiVGl0bGU6IENvZGluZ1wiO1xuICAgIHRpdGxlQXJlYS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdGl0bGVBcmVhLnNpemUgPSBcIjE4XCI7XG4gICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGNyZWF0ZUNvbmZpcm1CdXR0b24oKTtcbiAgICBhZGRDb25maXJtTmV3UHJvamVjdEJ1dHRvbkV2ZW50KGNvbmZpcm1CdXR0b24pO1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlQ2xvc2VCdXR0b24oKTtcbiAgICBhZGRDbG9zZU5ld1Byb2plY3RCdXR0b25FdmVudChjbG9zZUJ1dHRvbik7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJuZXctcHJvamVjdC1idXR0b24tY29udGFpbmVyXCIpO1xuXG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGFpbmVyLCBhcHBlbmRDaGlsZEhlbHBlcihuZXdQcm9qZWN0Rm9ybSwgdGl0bGVBcmVhKSk7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGFpbmVyLCBhcHBlbmRDaGlsZEhlbHBlcihidXR0b25Db250YWluZXIsIFtjb25maXJtQnV0dG9uLCBjbG9zZUJ1dHRvbl0pKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihwYXJlbnQsIGNvbnRhaW5lcik7XG4gICAgdGl0bGVBcmVhLmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24oKSB7XG4gICAgY29uc3QgbmV3QnV0dG9uID0gY3JlYXRlTmV3QWRkQnV0dG9uKFwibmV3LXByb2plY3QtYnV0dG9uXCIsIFwiYWRkLWltYWdlXCIsIFwibmV3LXByb2plY3QtdGV4dFwiLCBcIk5ldyBQcm9qZWN0XCIpO1xuICAgIHJldHVybiBuZXdCdXR0b247XG59XG5cbmZ1bmN0aW9uIHJlQXBwZW5kTmV3UHJvamVjdEJ1dHRvbihwYXJlbnROb2RlKSB7XG4gICAgY29uc3QgbmV3QnV0dG9uID0gY3JlYXRlTmV3UHJvamVjdEJ1dHRvbigpO1xuICAgIGFkZE5ld1Byb2plY3RCdXR0b25FdmVudChuZXdCdXR0b24pO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKHBhcmVudE5vZGUsIG5ld0J1dHRvbik7XG59XG5cbmV4cG9ydCB7IG5ld1Byb2plY3RDbGljaywgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbiwgcmVBcHBlbmROZXdQcm9qZWN0QnV0dG9uIH07IiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRIZWxwZXIsIGNyZWF0ZUhUTUxFbGVtZW50IH0gZnJvbSBcIi4vZG9tSGVscGVyc1wiO1xuaW1wb3J0IHsgYWRkQ29uZmlybUJ1dHRvbkV2ZW50LCBhZGRDbG9zZUJ1dHRvbkV2ZW50IH0gZnJvbSBcIi4vYmluZENsaWNrRXZlbnRzXCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgY29uZmlybUljb24gZnJvbSBcIi4vaW1hZ2VzL2NvbmZpcm0uc3ZnXCI7XG5pbXBvcnQgY2xvc2VJY29uIGZyb20gXCIuL2ltYWdlcy9jbG9zZS5zdmdcIjtcbmltcG9ydCBhZGRJY29uIGZyb20gXCIuL2ltYWdlcy9hZGQuc3ZnXCI7XG5pbXBvcnQgeyBnZXRUb2Rvc0J5SUQgfSBmcm9tIFwiLi90b2RvSXRlbXNcIjtcblxuZnVuY3Rpb24gbmV3VGFza0NsaWNrKGUsIHRvZG9JRCkge1xuICAgIGNvbnN0IHBhcmVudCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlO1xuICAgIGUuY3VycmVudFRhcmdldC5yZW1vdmUoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcIm5ldy10b2RvLWNvbnRhaW5lclwiLCBcIm5ldy10b2RvLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBuZXdUb2RvRm9ybSA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwibmV3LXRvZG8tZm9ybVwiLCBcIm5ldy10b2RvLWZvcm1cIik7XG4gICAgY29uc3QgdGl0bGVBcmVhID0gY3JlYXRlVGl0bGVBcmVhKCk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25BcmVhID0gY3JlYXRlRGVzY3JpcHRpb25BcmVhKCk7XG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGNyZWF0ZURhdGVDb250YWluZXIodHJ1ZSwgdG9kb0lEKTtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gY3JlYXRlQ29uZmlybUJ1dHRvbigpO1xuICAgIGFkZENvbmZpcm1CdXR0b25FdmVudChjb25maXJtQnV0dG9uKTtcbiAgICBjb25maXJtQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LXRhc2stY29uZmlybVwiKTtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGNyZWF0ZUNsb3NlQnV0dG9uKCk7XG4gICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctdGFzay1jbG9zZVwiKTtcbiAgICBhZGRDbG9zZUJ1dHRvbkV2ZW50KGNsb3NlQnV0dG9uKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250YWluZXIsIGFwcGVuZENoaWxkSGVscGVyKG5ld1RvZG9Gb3JtLCBbdGl0bGVBcmVhLCBkZXNjcmlwdGlvbkFyZWEsIGRhdGVDb250YWluZXJdKSk7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGFpbmVyLCBbY29uZmlybUJ1dHRvbiwgY2xvc2VCdXR0b25dKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihwYXJlbnQsIGNvbnRhaW5lcik7XG4gICAgdGl0bGVBcmVhLmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNsaWRlcigpIHtcbiAgICBjb25zdCBzbGlkZXJDb250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInNsaWRlci1jb250YWluZXJcIik7XG4gICAgY29uc3QgcHJpb1NsaWRlciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaW5wdXRcIiwgXCJwcmlvcml0eS1zbGlkZXJcIik7XG4gICAgcHJpb1NsaWRlci50eXBlID0gXCJyYW5nZVwiO1xuICAgIHByaW9TbGlkZXIubWluID0gXCIxXCI7XG4gICAgcHJpb1NsaWRlci5tYXggPSBcIjEwXCI7XG4gICAgcHJpb1NsaWRlci52YWx1ZSA9IFwiNVwiO1xuICAgIGNvbnN0IHByaW9UZXh0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwicHJpby10ZXh0XCIpO1xuICAgIHByaW9UZXh0LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCI7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoc2xpZGVyQ29udGFpbmVyLCBbcHJpb1RleHQsIHByaW9TbGlkZXJdKTtcbiAgICByZXR1cm4gc2xpZGVyQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb25maXJtQnV0dG9uKCkge1xuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBjcmVhdGVIVE1MRWxlbWVudChcImltZ1wiLCBbXCJ0YXNrLWJ1dHRvblwiLCBcImNvbmZpcm0tYnV0dG9uXCJdKTtcbiAgICBjb25maXJtQnV0dG9uLnNyYyA9IGNvbmZpcm1JY29uO1xuICAgIHJldHVybiBjb25maXJtQnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDbG9zZUJ1dHRvbigpIHtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaW1nXCIsIFtcInRhc2stYnV0dG9uXCIsIFwiY2xvc2UtYnV0dG9uXCJdKTtcbiAgICBjbG9zZUJ1dHRvbi5zcmMgPSBjbG9zZUljb247XG4gICAgcmV0dXJuIGNsb3NlQnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXRlQ29udGFpbmVyKGlzTmV3VGFzaywgdG9kb0lEKSB7XG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwiZGF0ZS1jb250YWluZXJcIik7XG4gICAgY29uc3QgZGF0ZVBpY2tlciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaW5wdXRcIiwgXCJkdWUtZGF0ZS1waWNrZXJcIik7XG4gICAgZGF0ZVBpY2tlci50eXBlID0gXCJkYXRlXCI7XG4gICAgZGF0ZVBpY2tlci52YWx1ZUFzRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1jb250YWluZXJcIik7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVIVE1MRWxlbWVudChcInNlbGVjdFwiLCBcInByb2plY3Qtc2VsZWN0b3JcIik7XG4gICAgc2VsZWN0b3IubmFtZSA9IFwicHJvamVjdHNcIjtcbiAgICBnZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc29sZS5kaXIocHJvamVjdCk7XG4gICAgICAgIGlmKHByb2plY3QgPT0gbnVsbCB8fCBwcm9qZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdPcHRpb24gPSBjcmVhdGVIVE1MRWxlbWVudChcIm9wdGlvblwiLCBcInByb2plY3Qtb3B0aW9uXCIpO1xuICAgICAgICBuZXdPcHRpb24udmFsdWUgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdPcHRpb24udmFsdWUpO1xuICAgICAgICBpZiAobmV3T3B0aW9uLnZhbHVlID09PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tcGFnZS10aXRsZVwiKS50ZXh0Q29udGVudCAmJiBpc05ld1Rhc2spIHtcbiAgICAgICAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlxcXCJzZWxlY3RlZFxcXCJcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzTmV3VGFzaykge1xuICAgICAgICAgICAgaWYobmV3T3B0aW9uLnZhbHVlID09PSBnZXRUb2Rvc0J5SUQoW3RvZG9JRF0pWzBdLmdldFByb2plY3QoKSkge1xuICAgICAgICAgICAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlxcXCJzZWxlY3RlZFxcXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIGFwcGVuZENoaWxkSGVscGVyKHNlbGVjdG9yLCBuZXdPcHRpb24pO1xuICAgIH0pO1xuXG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIocHJvamVjdENvbnRhaW5lciwgc2VsZWN0b3IpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGRhdGVDb250YWluZXIsIFtkYXRlUGlja2VyLCBwcm9qZWN0Q29udGFpbmVyLCBjcmVhdGVTbGlkZXIoKV0pO1xuICAgIHJldHVybiBkYXRlQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXNjcmlwdGlvbkFyZWEoKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb25BcmVhID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBbXCJkZXNjcmlwdGlvbi10ZXh0YXJlYVwiLCBcInRleHRhcmVhXCJdKTtcbiAgICBkZXNjcmlwdGlvbkFyZWEucGxhY2Vob2xkZXIgPSBcIkRldGFpbHM6IFByZWZlcmFibHkgYmVmb3JlIHlvdSBzdGFydmUuXCJcbiAgICBkZXNjcmlwdGlvbkFyZWEucm93cyA9IFwiNVwiO1xuICAgIHJldHVybiBkZXNjcmlwdGlvbkFyZWE7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlQXJlYSgpIHtcbiAgICBjb25zdCB0aXRsZUFyZWEgPSBjcmVhdGVIVE1MRWxlbWVudChcInRleHRhcmVhXCIsIFtcInRpdGxlLXRleHRhcmVhXCIsIFwidGV4dGFyZWFcIl0pO1xuICAgIHRpdGxlQXJlYS5wbGFjZWhvbGRlciA9IFwiVGl0bGU6IEVhdCBmb29kXCI7XG4gICAgcmV0dXJuIHRpdGxlQXJlYTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3VGFza0J1dHRvbigpIHtcbiAgICBjb25zdCBib3R0b21Db250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInRvZG8tYWRkLWNvbnRhaW5lclwiLCBcInRvZG8tYWRkLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBhZGRJbWFnZSA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaW1nXCIsIFwiYWRkLWltYWdlXCIsIFwiYWRkLWltYWdlXCIpO1xuICAgIGFkZEltYWdlLnNyYyA9IGFkZEljb247XG4gICAgY29uc3QgYWRkVGV4dCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwicFwiLCBcImFkZC10ZXh0XCIsIFwiYWRkLXRleHRcIik7XG4gICAgYWRkVGV4dC50ZXh0Q29udGVudCA9IFwiTmV3IFRhc2tcIjtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihib3R0b21Db250YWluZXIsIFthZGRJbWFnZSwgYWRkVGV4dF0pO1xuICAgIHJldHVybiBib3R0b21Db250YWluZXI7XG59XG5cbmV4cG9ydCB7IG5ld1Rhc2tDbGljaywgY3JlYXRlTmV3VGFza0J1dHRvbiwgY3JlYXRlU2xpZGVyLCBjcmVhdGVDbG9zZUJ1dHRvbiwgY3JlYXRlQ29uZmlybUJ1dHRvbiwgY3JlYXRlRGF0ZUNvbnRhaW5lciwgY3JlYXRlVGl0bGVBcmVhLCBjcmVhdGVEZXNjcmlwdGlvbkFyZWEgfTsiLCJpbXBvcnQgeyBhcHBlbmRDaGlsZEhlbHBlciwgY3JlYXRlSFRNTEVsZW1lbnQsIHJlbW92ZUFsbENoaWxkcmVuIH0gZnJvbSBcIi4vZG9tSGVscGVyc1wiO1xuaW1wb3J0IHsgY3JlYXRlVG9kb3MsIGdldFRvZG9zQnlJRCB9IGZyb20gXCIuL3RvZG9JdGVtc1wiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vaW1hZ2VzL2RlbGV0ZS5zdmdcIjtcblxuY29uc3QgcHJvamVjdHMgPSBbXTtcbmNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gMDtcblxuZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSkge1xuICAgIHRpdGxlID0gdGl0bGUuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHRpdGxlLnNsaWNlKDEsIHRpdGxlLmxlbmd0aCkudG9Mb3dlckNhc2UoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0c1tpXS50aXRsZSA9PT0gdGl0bGUpIHJldHVybjtcbiAgICB9XG4gICAgcHJvamVjdHMucHVzaCh7XG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgaXRlbXM6IFtdLFxuICAgIH0pO1xuICAgIHByb2plY3RzW3Byb2plY3RzLmxlbmd0aCAtIDFdLmluZGV4ID0gcHJvamVjdHMubGVuZ3RoIC0gMTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xufVxuXG5mdW5jdGlvbiBhZGRIb21lUHJvamVjdCgpIHtcbiAgICBhZGRQcm9qZWN0KFwiSG9tZVwiKTtcbn1cblxuZnVuY3Rpb24gYWRkSXRlbVRvUHJvamVjdCh0b2RvSUQsIHByb2plY3RJbmRleCkge1xuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGlmKHByb2plY3QgPT0gbnVsbCB8fCBwcm9qZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBmb3VuZEluZGV4ID0gcHJvamVjdC5pdGVtcy5maW5kSW5kZXgoaWQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGlkID09IHRvZG9JRDtcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgcHJvamVjdC5pdGVtcy5zcGxpY2UoZm91bmRJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLml0ZW1zLnB1c2godG9kb0lEKTtcbiAgICBpZiAocHJvamVjdEluZGV4ID4gMCkge1xuICAgICAgICBwcm9qZWN0c1swXS5pdGVtcy5wdXNoKHRvZG9JRCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVJdGVtRnJvbVByb2plY3QodG9kb0lEKSB7XG4gICAgbGV0IHByb2plY3RUaXRsZTtcbiAgICBnZXRQcm9qZWN0cygpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGlmKHByb2plY3QgPT0gbnVsbCB8fCBwcm9qZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICBpZiAocHJvamVjdC5pdGVtcy5pbmNsdWRlcygrdG9kb0lEKSkge1xuICAgICAgICAgICAgcHJvamVjdC5pdGVtcy5zcGxpY2UodG9kb0lELCAxLCBcIlwiKTtcbiAgICAgICAgICAgIHByb2plY3RUaXRsZSA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjcmVhdGVUb2RvcyhnZXRUb2Rvc0J5SUQoZ2V0SURzT2ZQcm9qZWN0KGdldFByb2plY3RJbmRleEJ5VGl0bGUocHJvamVjdFRpdGxlKSkpKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SW5kZXgpIHtcbiAgICBjb25zb2xlLmxvZyhgRGVsZXRpbmcgcHJvamVjdCB3aXRoIGluZGV4ICR7cHJvamVjdEluZGV4fWApO1xuICAgIGNvbnN0IHByb2plY3RUb0RlbGV0ZSA9IGdldFByb2plY3RzKClbcHJvamVjdEluZGV4XTtcbiAgICBnZXRQcm9qZWN0cygpLnNwbGljZShwcm9qZWN0SW5kZXgsIDEsIG51bGwpO1xuXG59XG5cbmZ1bmN0aW9uIGdldElEc09mUHJvamVjdChwcm9qZWN0SW5kZXgpIHtcbiAgICByZXR1cm4gcHJvamVjdHNbcHJvamVjdEluZGV4XS5pdGVtcztcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5mdW5jdGlvbiBzZXRQcm9qZWN0VG9Ib21lKHByb2plY3QpIHtcbiAgICBwcm9qZWN0Lml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uc2V0UHJvamVjdChcIkhvbWVcIik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RJbmRleEJ5VGl0bGUodGl0bGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0c1tpXS50aXRsZSA9PT0gdGl0bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xuICAgIHJlbW92ZUFsbENoaWxkcmVuKGNvbnRhaW5lcik7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdHMtaXRlbS1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RFbGVtZW50ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwicHJvamVjdHMtaXRlbVwiKTtcbiAgICAgICAgbmV3UHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICBuZXdQcm9qZWN0RWxlbWVudC5kYXRhc2V0LnByb2plY3RJbmRleCA9IGAke3Byb2plY3RzLmZpbmRJbmRleChlbGVtZW50ID0+IHByb2plY3QgPT09IGVsZW1lbnQpfWA7XG4gICAgICAgIG5ld1Byb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGl0bGVOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXBhZ2UtdGl0bGVcIik7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBuZXdQcm9qZWN0RWxlbWVudC5kYXRhc2V0LnByb2plY3RJbmRleFxuICAgICAgICAgICAgdGl0bGVOb2RlLnRleHRDb250ZW50ID0gZ2V0UHJvamVjdHMoKVtwcm9qZWN0SW5kZXhdLnRpdGxlO1xuICAgICAgICAgICAgY3JlYXRlVG9kb3MoZ2V0VG9kb3NCeUlEKGdldElEc09mUHJvamVjdChwcm9qZWN0SW5kZXgpKSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gbmV3UHJvamVjdEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SW5kZXg7XG4gICAgICAgIGlmIChwcm9qZWN0SW5kZXggPiAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgbmV3RGVsZXRlQnV0dG9uID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbWdcIiwgXCJwcm9qZWN0cy1pdGVtLWRlbGV0ZVwiKTtcbiAgICAgICAgICAgIG5ld0RlbGV0ZUJ1dHRvbi5zcmMgPSBkZWxldGVJY29uO1xuICAgICAgICAgICAgbmV3RGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZVByb2plY3REZWxldGlvbihlLCBwcm9qZWN0SW5kZXgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRhaW5lciwgYXBwZW5kQ2hpbGRIZWxwZXIobmV3UHJvamVjdENvbnRhaW5lciwgW25ld1Byb2plY3RFbGVtZW50LCBuZXdEZWxldGVCdXR0b25dKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250YWluZXIsIGFwcGVuZENoaWxkSGVscGVyKG5ld1Byb2plY3RDb250YWluZXIsIFtuZXdQcm9qZWN0RWxlbWVudF0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0RGVsZXRpb24oZSwgcHJvamVjdEluZGV4KSB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdEluZGV4KTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3ROYW1lKHN0cmluZywgcHJvamVjdEluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBzdHJpbmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50aXRsZSA9IHN0cmluZztcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgYWRkUHJvamVjdCwgYWRkSG9tZVByb2plY3QsIGFkZEl0ZW1Ub1Byb2plY3QsIGRlbGV0ZUl0ZW1Gcm9tUHJvamVjdCwgZWRpdFByb2plY3ROYW1lLFxuICAgIGdldElEc09mUHJvamVjdCwgZ2V0UHJvamVjdHMsIGdldFByb2plY3RJbmRleEJ5VGl0bGUsIHJlbmRlclByb2plY3RzXG59O1xuIiwiY29uc3QgVG9Eb0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gICAgY29uc3Qgc2V0VGl0bGUgPSAoaW5wdXQpID0+IHRoaXMudGl0bGUgPSBpbnB1dDtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKGlucHV0KSA9PiB0aGlzLmRlc2NyaXB0aW9uID0gaW5wdXQ7XG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gICAgY29uc3Qgc2V0RHVlRGF0ZSA9IChpbnB1dCkgPT4gdGhpcy5kdWVEYXRlID0gaW5wdXQ7XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IChpbnB1dCkgPT4gdGhpcy5wcmlvcml0eSA9IGlucHV0O1xuICAgIGNvbnN0IGdldFByb2plY3QgPSAoKSA9PiBwcm9qZWN0O1xuICAgIGNvbnN0IHNldFByb2plY3QgPSAoaW5wdXQpID0+IHRoaXMucHJvamVjdCA9IGlucHV0O1xuICAgIGNvbnN0IGdldENvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShcImNvbXBsZXRlXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGxldGUgcHJvcGVydHkgbm90IHNldC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc2V0Q29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KFwiY29tcGxldGVcIikpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSAhdGhpcy5jb21wbGV0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgLyogY29uc3QgZ2V0UHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgaWYodGhpcy5oYXNPd25Qcm9wZXJ0eShcInByb2plY3RcIikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2plY3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInByb2plY3QgcHJvcGVydHkgbm90IHNldC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc2V0UHJvamVjdCA9IChpbnB1dCkgPT4ge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBpbnB1dDtcbiAgICB9Ki9cblxuXG4gICAgcmV0dXJuIHsgZ2V0VGl0bGUsIHNldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb24sIGdldER1ZURhdGUsIHNldER1ZURhdGUsIGdldFByaW9yaXR5LCBzZXRQcmlvcml0eSwgZ2V0Q29tcGxldGUsIHNldENvbXBsZXRlLCBnZXRQcm9qZWN0LCBzZXRQcm9qZWN0IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG9GYWN0b3J5OyIsImltcG9ydCBUb0RvRmFjdG9yeSBmcm9tIFwiLi90b2RvRmFjdG9yeVwiO1xuaW1wb3J0IHsgYXBwZW5kQ2hpbGRIZWxwZXIsIGNyZWF0ZUhUTUxFbGVtZW50LCByZW1vdmVBbGxDaGlsZHJlbiB9IGZyb20gXCIuL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7IGFkZFRvZG9FdmVudCwgYWRkRGV0YWlsZWRDbG9zZUJ1dHRvbkV2ZW50LCBhZGREZXRhaWxlZENvbmZpcm1CdXR0b25FdmVudCwgYWRkRGVsZXRlVG9kb0V2ZW50IH0gZnJvbSBcIi4vYmluZENsaWNrRXZlbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVTbGlkZXIsIGNyZWF0ZUNsb3NlQnV0dG9uLCBjcmVhdGVDb25maXJtQnV0dG9uLCBjcmVhdGVEYXRlQ29udGFpbmVyLCBjcmVhdGVUaXRsZUFyZWEsIGNyZWF0ZURlc2NyaXB0aW9uQXJlYSB9IGZyb20gXCIuL25ld1Rhc2tcIjtcbmltcG9ydCB7IGRlbGV0ZUl0ZW1Gcm9tUHJvamVjdCwgZ2V0UHJvamVjdEluZGV4QnlUaXRsZSwgZ2V0UHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vaW1hZ2VzL2RlbGV0ZS5zdmdcIjtcblxuY29uc3QgYWxsVG9kb3MgPSBbXTtcblxuZnVuY3Rpb24gZ2V0VG9kb3MoKSB7XG4gICAgaWYgKGFsbFRvZG9zLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgLy9hZGRUb2RvKFwidGVzdFwiLCBcInN0dXBpZCBzdHVmZlwiLCBcIjE2LzMvMTk5OFwiLCBcImhpZ2hcIik7XG4gICAgfVxuICAgIHJldHVybiBhbGxUb2Rvcztcbn1cblxuZnVuY3Rpb24gZ2V0VG9kb3NCeUlEKGluZGV4ZXMpIHtcbiAgICBjb25zdCB0b2RvcyA9IFtdO1xuICAgIGluZGV4ZXMuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICAgIHRvZG9zLnB1c2goYWxsVG9kb3NbaW5kZXhdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdG9kb3M7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIGNvbnN0IHRvZG8gPSBUb0RvRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgICB0b2RvLmlkID0gYWxsVG9kb3MubGVuZ3RoO1xuICAgIGFsbFRvZG9zLnB1c2godG9kbyk7XG5cbiAgICBjcmVhdGVUb2RvcyhnZXRUb2RvcygpKTtcbiAgICByZW5kZXJJbXBvcnRhbnRUb2RvcygpO1xuICAgIHJldHVybiB0b2RvLmlkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2Rvcyh0b2Rvcykge1xuICAgIGlmICh0b2RvcyA9PT0gW10pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2Rvc1wiKTtcbiAgICByZW1vdmVBbGxDaGlsZHJlbih0b2Rvc0NvbnRhaW5lcik7XG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgaWYgKCF0b2RvKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInRvZG8taXRlbVwiLCB0b2RvLmlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBjb25zdCBsZWZ0Q29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWl0ZW0tbGVmdFwiKTtcbiAgICAgICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInRvZG8taXRlbS1yaWdodFwiKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJ0b2RvLXRpdGxlXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRIZWxwZXIobGVmdENvbnRhaW5lciwgdGl0bGUpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwidG9kby1kdWUtZGF0ZVwiKTtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RHVlRGF0ZSgpO1xuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBjcmVhdGVIVE1MRWxlbWVudChcImltZ1wiLCBcImRlbGV0ZS10b2RvLWJ1dHRvblwiLCBcIlwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnNyYyA9IGRlbGV0ZUljb247XG4gICAgICAgIGFkZERlbGV0ZVRvZG9FdmVudChkZWxldGVCdXR0b24pO1xuICAgICAgICBhcHBlbmRDaGlsZEhlbHBlcihyaWdodENvbnRhaW5lciwgW2R1ZURhdGUsIGRlbGV0ZUJ1dHRvbl0pO1xuICAgICAgICBhcHBlbmRDaGlsZEhlbHBlcihpdGVtLCBbbGVmdENvbnRhaW5lciwgcmlnaHRDb250YWluZXJdKTtcbiAgICAgICAgYWRkVG9kb0V2ZW50KGl0ZW0pO1xuICAgICAgICBhcHBlbmRDaGlsZEhlbHBlcih0b2Rvc0NvbnRhaW5lciwgaXRlbSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUb2RvKHRvZG9JRCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIGNvbnN0IG5ld1RvZG8gPSBUb0RvRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgICBuZXdUb2RvLmlkID0gdG9kb0lEO1xuICAgIGFsbFRvZG9zLnNwbGljZSh0b2RvSUQsIDEsIG5ld1RvZG8pO1xuICAgIHJlbmRlckFsbFRvZG9zKCk7XG4gICAgcmV0dXJuIG5ld1RvZG8uaWQ7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvRGV0YWlscyh0b2RvSUQpIHtcbiAgICBjb25zdCB0b2RvTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvZG9JRCk7XG4gICAgY29uc3QgcGFyZW50ID0gdG9kb05vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zdCBwcmV2RGV0YWlsZWRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWRldGFpbGVkLWNvbnRhaW5lclwiKTtcbiAgICBpZiAocHJldkRldGFpbGVkVG9kbyAhPT0gbnVsbCkge1xuICAgICAgICBjcmVhdGVUb2RvcyhnZXRUb2RvcygpKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9kb0lEKS5yZW1vdmUoKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwidG9kby1kZXRhaWxlZC1jb250YWluZXJcIik7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInRvZG8tZGV0YWlsZWRcIik7XG4gICAgY29uc3QgdGl0bGVBcmVhID0gY3JlYXRlVGl0bGVBcmVhKCk7XG4gICAgdGl0bGVBcmVhLnZhbHVlID0gZ2V0VG9kb3MoKVt0b2RvSURdLmdldFRpdGxlKCk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25BcmVhID0gY3JlYXRlRGVzY3JpcHRpb25BcmVhKCk7XG4gICAgZGVzY3JpcHRpb25BcmVhLnZhbHVlID0gZ2V0VG9kb3MoKVt0b2RvSURdLmdldERlc2NyaXB0aW9uKCk7XG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGNyZWF0ZURhdGVDb250YWluZXIoZmFsc2UsIHRvZG9JRCk7XG4gICAgZGF0ZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5LXNsaWRlclwiKS52YWx1ZSA9IGdldFRvZG9zKClbdG9kb0lEXS5nZXRQcmlvcml0eSgpO1xuICAgIGRhdGVDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kYXRlLWNvbnRhaW5lciAuZHVlLWRhdGUtcGlja2VyXCIpLnZhbHVlID0gZ2V0VG9kb3MoKVt0b2RvSURdLmdldER1ZURhdGUoKTtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gY3JlYXRlQ29uZmlybUJ1dHRvbigpO1xuICAgIGNvbmZpcm1CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWRldGFpbGVkLWNvbmZpcm1cIik7XG4gICAgYWRkRGV0YWlsZWRDb25maXJtQnV0dG9uRXZlbnQoY29uZmlybUJ1dHRvbiwgdG9kb0lEKTtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGNyZWF0ZUNsb3NlQnV0dG9uKCk7XG4gICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWRldGFpbGVkLWNsb3NlXCIpO1xuICAgIGFkZERldGFpbGVkQ2xvc2VCdXR0b25FdmVudChjbG9zZUJ1dHRvbik7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGFpbmVyLCBhcHBlbmRDaGlsZEhlbHBlcih0b2RvRm9ybSwgW3RpdGxlQXJlYSwgZGVzY3JpcHRpb25BcmVhLCBkYXRlQ29udGFpbmVyXSkpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRhaW5lciwgW2NvbmZpcm1CdXR0b24sIGNsb3NlQnV0dG9uXSk7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIocGFyZW50LCBjb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUb2RvKHRvZG9JRCkge1xuICAgIGFsbFRvZG9zW3RvZG9JRF0gPSBudWxsO1xuICAgIGRlbGV0ZUl0ZW1Gcm9tUHJvamVjdCh0b2RvSUQpO1xuICAgIHJlbmRlckltcG9ydGFudFRvZG9zKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFsbFRvZG9zKCkge1xuICAgIGNyZWF0ZVRvZG9zKGdldFRvZG9zKCkpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJJbXBvcnRhbnRUb2RvcygpIHtcbiAgICBjb25zdCBpbXBvcnRhbnRUb2RvcyA9IFtdO1xuICAgIGdldFRvZG9zKCkuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgaWYodG9kbyA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpZiAodG9kby5nZXRQcmlvcml0eSgpID49IDgpIHtcbiAgICAgICAgICAgIGltcG9ydGFudFRvZG9zLnB1c2goeyB0aXRsZTogdG9kby5nZXRUaXRsZSgpLCBpZDogdG9kby5pZCwgcHJpb3JpdHk6IHRvZG8uZ2V0UHJpb3JpdHkoKSB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1wb3J0YW50LWZvbGRlclwiKTtcbiAgICByZW1vdmVBbGxDaGlsZHJlbihjb250YWluZXIpO1xuICAgIGltcG9ydGFudFRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0ltcG9ydGFudEVsZW1lbnQgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJpbXBvcnRhbnQtaXRlbVwiKTtcbiAgICAgICAgbmV3SW1wb3J0YW50RWxlbWVudC50ZXh0Q29udGVudCA9IHRvZG8udGl0bGUgKyBgXFx4YTAgXFx4YTAgXFx4YTAgKCR7dG9kby5wcmlvcml0eX0pYDtcbiAgICAgICAgbmV3SW1wb3J0YW50RWxlbWVudC5kYXRhc2V0LnRvZG9pZCA9IHRvZG8uaWQ7XG4gICAgICAgIG5ld0ltcG9ydGFudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzKCk7XG4gICAgICAgICAgICBsZXQgcHJvamVjdDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBwcm9qZWN0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0c1tpXS5pdGVtcy5pbmNsdWRlcyh0b2RvLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0ID0gcHJvamVjdHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1wYWdlLXRpdGxlXCIpLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgICAgIGNyZWF0ZVRvZG9zKGdldFRvZG9zQnlJRChwcm9qZWN0Lml0ZW1zKSk7XG4gICAgICAgICAgICBkaXNwbGF5VG9kb0RldGFpbHModG9kby5pZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250YWluZXIsIG5ld0ltcG9ydGFudEVsZW1lbnQpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyBhZGRUb2RvLCBnZXRUb2RvcywgY3JlYXRlVG9kb3MsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvLCBkaXNwbGF5VG9kb0RldGFpbHMsIGdldFRvZG9zQnlJRCwgcmVuZGVyQWxsVG9kb3MgfTtcblxuIiwiaW1wb3J0IHsgYmluZENsaWNrRXZlbnRzIH0gZnJvbSBcIi4vYmluZENsaWNrRXZlbnRzXCI7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZEhlbHBlciwgY3JlYXRlSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9kb21IZWxwZXJzXCI7XG5pbXBvcnQgeyBnZXRUb2RvcywgY3JlYXRlVG9kb3MgfSBmcm9tIFwiLi90b2RvSXRlbXNcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Rhc2tCdXR0b24gfSBmcm9tIFwiLi9uZXdUYXNrXCI7XG5pbXBvcnQgeyBhZGRIb21lUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdBZGRCdXR0b24gfSBmcm9tIFwiLi9hZGRCdXR0b25cIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3RCdXR0b24gfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlckVsZW1lbnQoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJoZWFkZXJcIiwgXCJoZWFkZXJcIiwgXCJoZWFkZXJcIik7XG4gICAgY29uc3QgaGVhZGVyTGVmdCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwiaGVhZGVyLWxlZnRcIiwgXCJoZWFkZXItbGVmdFwiKTtcbiAgICBjb25zdCBoZWFkZXJMb2dvID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJoMVwiLCBcImhlYWRlci1sb2dvXCIsIFwiaGVhZGVyLWxvZ29cIik7XG4gICAgaGVhZGVyTG9nby50ZXh0Q29udGVudCA9IFwidG9kby1saXN0XCJcbiAgICBoZWFkZXJMZWZ0LmFwcGVuZENoaWxkKGhlYWRlckxvZ28pO1xuICAgIGNvbnN0IGhlYWRlclJpZ2h0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXItcmlnaHRcIiwgXCJoZWFkZXItcmlnaHRcIik7XG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVIVE1MRWxlbWVudChcImxhYmVsXCIsIFwic3dpdGNoXCIsIFwiZGFyay1tb2RlLXN3aXRjaFwiKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaW5wdXRcIiwgXCJcIiwgXCJkYXJrLW1vZGUtY2hlY2tib3hcIik7XG4gICAgaW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICBjb25zdCBzcGFuID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJzcGFuXCIsIFtcInNsaWRlclwiLCBcInJvdW5kXCJdKTtcbiAgICBjb25zdCBsYWJlbFN5bWJvbCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwicFwiLCBcInN3aXRjaC10ZXh0XCIsIFwic3dpdGNoLXRleHRcIik7XG4gICAgbGFiZWxTeW1ib2wudGV4dENvbnRlbnQgPSBcIvCfkqFcIjtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihoZWFkZXJSaWdodCwgW2xhYmVsU3ltYm9sLCBhcHBlbmRDaGlsZEhlbHBlcihsYWJlbCwgW2lucHV0LCBzcGFuXSldKTtcblxuICAgIGFwcGVuZENoaWxkSGVscGVyKGhlYWRlciwgW2hlYWRlckxlZnQsIGhlYWRlclJpZ2h0XSk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluRWxlbWVudCgpIHtcbiAgICBjb25zdCBtYWluID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJtYWluXCIsIFwibWFpblwiKTtcbiAgICBjb25zdCBtYWluTGVmdCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwibWFpbi1sZWZ0XCIsIFwibWFpbi1sZWZ0XCIpO1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0cy1jb250YWluZXJcIiwgXCJwcm9qZWN0cy1jb250YWluZXJcIik7XG4gICAgY29uc3QgcHJvamVjdHNCdXR0b24gPSBjcmVhdGVIVE1MRWxlbWVudChcImJ1dHRvblwiLCBcInByb2plY3RzLWJ1dHRvblwiLCBcInByb2plY3RzLWJ1dHRvblwiKTtcbiAgICBjb25zdCBwcm9qZWN0c0J1dHRvblRleHQgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJwcm9qZWN0cy10ZXh0XCIsIFwicHJvamVjdHMtdGV4dFwiKTtcbiAgICBwcm9qZWN0c0J1dHRvblRleHQuaW5uZXJIVE1MID0gXCI8c3BhbiBpZD1cXFwicHJvamVjdHMtc3BhblxcXCI+PiA8L3NwYW4+UHJvamVjdHNcIjtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihwcm9qZWN0c0NvbnRhaW5lciwgYXBwZW5kQ2hpbGRIZWxwZXIocHJvamVjdHNCdXR0b24sIHByb2plY3RzQnV0dG9uVGV4dCkpO1xuICAgIGNvbnN0IHByb2plY3RzQ29udGVudCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdHMtY29udGVudFwiLCBcInByb2plY3RzLWNvbnRlbnRcIik7XG4gICAgY29uc3QgcHJvamVjdHMgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBbXCJwcm9qZWN0c1wiXSwgXCJwcm9qZWN0c1wiKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihtYWluTGVmdCwgYXBwZW5kQ2hpbGRIZWxwZXIocHJvamVjdHNDb250YWluZXIsIGFwcGVuZENoaWxkSGVscGVyKHByb2plY3RzQ29udGVudCwgW3Byb2plY3RzLCBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uKCldKSkpO1xuXG4gICAgY29uc3QgaW1wb3J0YW50Q29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJpbXBvcnRhbnQtY29udGFpbmVyXCIsIFwiaW1wb3J0YW50LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBpbXBvcnRhbnRCdXR0b24gPSBjcmVhdGVIVE1MRWxlbWVudChcImJ1dHRvblwiLCBcImltcG9ydGFudC1idXR0b25cIiwgXCJpbXBvcnRhbnQtYnV0dG9uXCIpO1xuICAgIGNvbnN0IGltcG9ydGFudEJ1dHRvblRleHQgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJpbXBvcnRhbnQtdGV4dFwiLCBcImltcG9ydGFudC10ZXh0XCIpO1xuICAgIGltcG9ydGFudEJ1dHRvblRleHQuaW5uZXJIVE1MID0gXCI8c3BhbiBpZD1cXFwicHJvamVjdHMtc3BhblxcXCI+PiA8L3NwYW4+IEltcG9ydGFudFwiO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGltcG9ydGFudENvbnRhaW5lciwgYXBwZW5kQ2hpbGRIZWxwZXIoaW1wb3J0YW50QnV0dG9uLCBpbXBvcnRhbnRCdXR0b25UZXh0KSk7XG4gICAgY29uc3QgaW1wb3J0YW50Rm9sZGVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgW1wiaW1wb3J0YW50LWZvbGRlclwiXSwgXCJpbXBvcnRhbnQtZm9sZGVyXCIpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKG1haW5MZWZ0LCBhcHBlbmRDaGlsZEhlbHBlcihpbXBvcnRhbnRDb250YWluZXIsIGltcG9ydGFudEZvbGRlcikpO1xuXG4gICAgY29uc3QgbWFpbkNlbnRlciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwibWFpbi1jZW50ZXJcIiwgXCJtYWluLWNlbnRlclwiKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihtYWluQ2VudGVyLCBjcmVhdGVNYWluQ2VudGVyQ29udGVudCgpKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihtYWluLCBbbWFpbkxlZnQsIG1haW5DZW50ZXJdKTtcblxuICAgIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluQ2VudGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJjZW50ZXItY29udGVudFwiLCBcImNlbnRlci1jb250ZW50XCIpO1xuICAgIGNvbnN0IHRvcENvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwidG9kby10b3AtY29udGFpbmVyXCIsIFwidG9kby10b3AtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0LXRpdGxlLWNvbnRhaW5lclwiLCBcInByb2plY3QtdGl0bGUtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJoMlwiLCBcInRvZG8tcGFnZS10aXRsZVwiLCBcInRvZG8tcGFnZS10aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJcIiwgXCJ0b2RvLXBhZ2UtZHVlLWRhdGVcIik7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250ZW50LCBhcHBlbmRDaGlsZEhlbHBlcih0b3BDb250YWluZXIsIFt0aXRsZSwgZHVlRGF0ZV0pKTtcblxuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJ0b2Rvc1wiLCBcInRvZG9zXCIpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRlbnQsIHRhc2tzQ29udGFpbmVyKTtcblxuXG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGVudCwgY3JlYXRlTmV3VGFza0J1dHRvbigpKTtcblxuICAgIHJldHVybiBjb250ZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxXZWJwYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyRWxlbWVudCgpO1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVNYWluRWxlbWVudCgpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRlbnREaXYsIFtoZWFkZXIsIG1haW5dKTtcbiAgICBhZGRIb21lUHJvamVjdCgpO1xuICAgIGNyZWF0ZVRvZG9zKGdldFRvZG9zKCkpO1xuICAgIGJpbmRDbGlja0V2ZW50cygpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVJbml0aWFsV2VicGFnZSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgY3JlYXRlSW5pdGlhbFdlYnBhZ2UgfSBmcm9tIFwiLi93ZWJwYWdlXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuY3JlYXRlSW5pdGlhbFdlYnBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=