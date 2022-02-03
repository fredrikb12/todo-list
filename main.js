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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    margin: 0;\n    font-family: 'Montserrat', sans-serif;\n}\n\nbody {\n    background-color: #2B2D44;\n    height: 100vh;\n}\n\n#content {\n    height: 100%;\n}\n\n.header {\n    display: flex;\n    background-color: hsl(240, 41%, 7%);\n    color: #CECFED;\n    padding: 10px;\n    font-size: 20px;\n    border-bottom: 1px solid #FFFFFF;\n    height: 8%;\n}\n\n.header-left,\n.header-right {\n    width: 50%;\n    min-height: 60px;\n}\n\n.header-left {\n    display: flex;\n    align-items: center;\n}\n\n.header-logo {\n    margin-left: 25%;\n}\n\n.header-center {\n    display: flex;\n    align-items: center;\n    width: 200px;\n    gap: 15px;\n    color: #A2A3BF;\n}\n\n.header-right {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-size: 28px;\n    gap: 10px;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n    font-size: 22px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\ninput:checked + .slider {\n    background-color: #0d65ad;\n}\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n}\n\n.slider.round {\n    border-radius: 34px;\n}\n  \n.slider.round:before {\n    border-radius: 50%;\n}\n\n.main {\n    display: flex;\n    height: 86%;\n    min-height: 840px;\n    overflow: auto;\n\n}\n.main-left {\n    width: 20%;\n    display: flex;\n    flex-direction: column;\n    border-right: 1px solid #706b6b;\n    background-color: hsl(240, 41%, 7%);\n    margin-top: 1px;\n}\n.main-center {\n    width: 80%;\n    display: flex;\n    justify-content: center;\n    margin-top: 100px;\n}\n\n.projects-button,\n.important-button {\n    border: none;\n    margin-top: -2px;\n    min-height: 40px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #f1f1ff;\n    padding: 5px;\n    background-color: hsl(240, 41%, 7%);\n    padding-left: 25px;\n}\n\n.projects-button:hover, \n.important-button:hover {\n    color: #ffd4da;\n    cursor: pointer;\n}\n\n.projects-container,\n.important-container {\n    border-bottom: 1px solid #e4e5ff;\n    overflow: auto;\n    background-color: hsl(240, 41%, 7%);\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 5px;\n    padding: 0 0 15px;\n}\n\n.projects-folder,\n.important-folder {\n    background-color: #3b3a31;\n    color: #FFFFFF;\n}\n\n\n.projects-text,\n.important-text {\n    width: 200px;\n    text-align: left;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.projects-item {\n    color: #f1f1ff;\n    font-size: 21px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 4px;\n    width: 80%;\n}\n\n.projects-item:hover {\n    color: #ffd4da;\n    cursor: pointer;\n}\n\n#new-project-button-container {\n    align-self: start;\n}\n\n.projects-content.sidebar-hidden,\n.important-folder.sidebar-hidden {\n    display: none;\n}\n\n#projects-span, \n#important-span {\n    color: #f1f1ff;\n    font-size: 15px;\n}\n\n.center-content {\n    width: 50%;\n}\n\n.todo-top-container {\n    color: #e5e6e7;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 10px;\n}\n\n.todo-top-container > p {\n    font-size: 22px;\n}\n\n.todo-add-container {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 5px 0;\n    opacity: 0.4;\n}\n\n.todo-add-container:hover, \n.new-project-button:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.todo-add-container > p {\n    color: white;\n    font-size: 24px;\n}\n\n.add-image, .task-button {\n    width: 22px;\n    height: 22px;\n    filter: invert(93%) sepia(100%) saturate(28%) hue-rotate(223deg) brightness(105%) contrast(103%);\n}\n\n.todo-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: #e5e6e7;\n    font-size: 22px;\n    border-top: 1px solid #c5c6c72f;\n    border-bottom: 1px solid #c5c6c72f;\n    padding: 4px 8px;\n    margin-top: -1px;\n}\n\n.todo-title {\n    max-width: 400px;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.todo-due-date {\n    font-size: 16px;\n}\n\n.todo-item:hover {\n    color: white;\n    cursor: pointer;\n    border-top-color: #c5c6c7b0;\n    border-bottom-color: #c5c6c7b0;\n}\n\n.new-todo-form,\n.todo-detailed, \n.new-project-form {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid #294552;\n    padding: 4px;\n    border-radius: 6px;\n    margin-top: 12px;\n}\n\n.new-project-form {\n    border: 1px solid #C5C6C7;\n}\n\n.new-todo-form {\n    border-color: #00070a;\n    background-color: #2B2D44;\n}\n\n.textarea {\n    background-color: #2B2D44;\n    border: none;\n    resize: none;\n    outline: none;\n    color: white;\n    font-size: 18px;\n}\n\n.new-project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 80%;\n    margin: auto;\n}\n\n.new-project-button {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n    color: white;\n    font-size: 16px;\n    opacity: 0.6;\n    margin: 10px 0 5px;\n}\n\n.projects-content {\n    display: flex;\n    flex-direction: column;\n    margin-left: 10%;\n}\n\n.new-project-form .textarea {\n    background-color: hsl(240, 41%, 7%);\n    font-size: 16px;\n    padding: 3px;\n    \n}\n\n.textarea::placeholder {\n    opacity: 1;\n}\n\n.task-button {\n    opacity: 0.6;\n    margin-top: 5px;\n    margin-right: 5px;\n    width: 28px;\n    height: 28px;\n}\n\n.task-button:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.red-text::placeholder {\n    color: #ec4141;\n}\n\n.due-date-picker {\n    width: 150px;\n    background-color: #131920;\n    color: white;\n    margin-top: 5px;\n}\n\n.due-date-picker::-webkit-calendar-picker-indicator {\n    filter: invert(93%) sepia(100%) saturate(28%) hue-rotate(223deg) brightness(105%) contrast(103%);\n}\n\n.date-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n}\n\n.prio-text {\n    color: #C5C6C7;\n    font-size: 18px;\n    text-align: center;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    font-family: 'Montserrat', sans-serif;\n}\n\nbody {\n    background-color: #2B2D44;\n    height: 100vh;\n}\n\n#content {\n    height: 100%;\n}\n\n.header {\n    display: flex;\n    background-color: hsl(240, 41%, 7%);\n    color: #CECFED;\n    padding: 10px;\n    font-size: 20px;\n    border-bottom: 1px solid #FFFFFF;\n    height: 8%;\n}\n\n.header-left,\n.header-right {\n    width: 50%;\n    min-height: 60px;\n}\n\n.header-left {\n    display: flex;\n    align-items: center;\n}\n\n.header-logo {\n    margin-left: 25%;\n}\n\n.header-center {\n    display: flex;\n    align-items: center;\n    width: 200px;\n    gap: 15px;\n    color: #A2A3BF;\n}\n\n.header-right {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-size: 28px;\n    gap: 10px;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n    font-size: 22px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\ninput:checked + .slider {\n    background-color: #0d65ad;\n}\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n}\n\n.slider.round {\n    border-radius: 34px;\n}\n  \n.slider.round:before {\n    border-radius: 50%;\n}\n\n.main {\n    display: flex;\n    height: 86%;\n    min-height: 840px;\n    overflow: auto;\n\n}\n.main-left {\n    width: 20%;\n    display: flex;\n    flex-direction: column;\n    border-right: 1px solid #706b6b;\n    background-color: hsl(240, 41%, 7%);\n    margin-top: 1px;\n}\n.main-center {\n    width: 80%;\n    display: flex;\n    justify-content: center;\n    margin-top: 100px;\n}\n\n.projects-button,\n.important-button {\n    border: none;\n    margin-top: -2px;\n    min-height: 40px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #f1f1ff;\n    padding: 5px;\n    background-color: hsl(240, 41%, 7%);\n    padding-left: 25px;\n}\n\n.projects-button:hover, \n.important-button:hover {\n    color: #ffd4da;\n    cursor: pointer;\n}\n\n.projects-container,\n.important-container {\n    border-bottom: 1px solid #e4e5ff;\n    overflow: auto;\n    background-color: hsl(240, 41%, 7%);\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 5px;\n    padding: 0 0 15px;\n}\n\n.projects-folder,\n.important-folder {\n    background-color: #3b3a31;\n    color: #FFFFFF;\n}\n\n\n.projects-text,\n.important-text {\n    width: 200px;\n    text-align: left;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.projects-item {\n    color: #f1f1ff;\n    font-size: 21px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 4px;\n    width: 80%;\n}\n\n.projects-item:hover {\n    color: #ffd4da;\n    cursor: pointer;\n}\n\n#new-project-button-container {\n    align-self: start;\n}\n\n.projects-content.sidebar-hidden,\n.important-folder.sidebar-hidden {\n    display: none;\n}\n\n#projects-span, \n#important-span {\n    color: #f1f1ff;\n    font-size: 15px;\n}\n\n.center-content {\n    width: 50%;\n}\n\n.todo-top-container {\n    color: #e5e6e7;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 10px;\n}\n\n.todo-top-container > p {\n    font-size: 22px;\n}\n\n.todo-add-container {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 5px 0;\n    opacity: 0.4;\n}\n\n.todo-add-container:hover, \n.new-project-button:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.todo-add-container > p {\n    color: white;\n    font-size: 24px;\n}\n\n.add-image, .task-button {\n    width: 22px;\n    height: 22px;\n    filter: invert(93%) sepia(100%) saturate(28%) hue-rotate(223deg) brightness(105%) contrast(103%);\n}\n\n.todo-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: #e5e6e7;\n    font-size: 22px;\n    border-top: 1px solid #c5c6c72f;\n    border-bottom: 1px solid #c5c6c72f;\n    padding: 4px 8px;\n    margin-top: -1px;\n}\n\n.todo-title {\n    max-width: 400px;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.todo-due-date {\n    font-size: 16px;\n}\n\n.todo-item:hover {\n    color: white;\n    cursor: pointer;\n    border-top-color: #c5c6c7b0;\n    border-bottom-color: #c5c6c7b0;\n}\n\n.new-todo-form,\n.todo-detailed, \n.new-project-form {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid #294552;\n    padding: 4px;\n    border-radius: 6px;\n    margin-top: 12px;\n}\n\n.new-project-form {\n    border: 1px solid #C5C6C7;\n}\n\n.new-todo-form {\n    border-color: #00070a;\n    background-color: #2B2D44;\n}\n\n.textarea {\n    background-color: #2B2D44;\n    border: none;\n    resize: none;\n    outline: none;\n    color: white;\n    font-size: 18px;\n}\n\n.new-project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 80%;\n    margin: auto;\n}\n\n.new-project-button {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n    color: white;\n    font-size: 16px;\n    opacity: 0.6;\n    margin: 10px 0 5px;\n}\n\n.projects-content {\n    display: flex;\n    flex-direction: column;\n    margin-left: 10%;\n}\n\n.new-project-form .textarea {\n    background-color: hsl(240, 41%, 7%);\n    font-size: 16px;\n    padding: 3px;\n    \n}\n\n.textarea::placeholder {\n    opacity: 1;\n}\n\n.task-button {\n    opacity: 0.6;\n    margin-top: 5px;\n    margin-right: 5px;\n    width: 28px;\n    height: 28px;\n}\n\n.task-button:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.red-text::placeholder {\n    color: #ec4141;\n}\n\n.due-date-picker {\n    width: 150px;\n    background-color: #131920;\n    color: white;\n    margin-top: 5px;\n}\n\n.due-date-picker::-webkit-calendar-picker-indicator {\n    filter: invert(93%) sepia(100%) saturate(28%) hue-rotate(223deg) brightness(105%) contrast(103%);\n}\n\n.date-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n}\n\n.prio-text {\n    color: #C5C6C7;\n    font-size: 18px;\n    text-align: center;\n}\n\n\n\n"],"sourceRoot":""}]);
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
/* harmony export */   "addNewProjectButtonEvent": () => (/* binding */ addNewProjectButtonEvent)
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
        const dueDate = parent.querySelector(".date-container .due-date-picker").valueAsDate;
        const date = `${dueDate.getDate()}/${dueDate.getMonth() + 1}/${dueDate.getFullYear()}`;
        const priority = parent.querySelector(".priority-slider").value;
        const project = parent.querySelector(".project-selector").value;
        const todoID = (0,_todoItems__WEBPACK_IMPORTED_MODULE_4__.addTodo)(title.value, description, date, priority, project);
        (0,_projects__WEBPACK_IMPORTED_MODULE_3__.addItemToProject)(todoID, (0,_projects__WEBPACK_IMPORTED_MODULE_3__.getProjectIndexByTitle)(project));
        parent.remove();
        reAppendNewTaskButton();
    });
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
        const dueDate = parent.querySelector(".date-container .due-date-picker").valueAsDate;
        const date = `${dueDate.getDate()}/${dueDate.getMonth() + 1}/${dueDate.getFullYear()}`;
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







function newTaskClick(e) {
    const parent = e.currentTarget.parentNode;
    e.currentTarget.remove();
    const container = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "new-todo-container", "new-todo-container");
    const newTodoForm = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "new-todo-form", "new-todo-form");
    const titleArea = createTitleArea();
    const descriptionArea = createDescriptionArea();
    const dateContainer = createDateContainer();
    const confirmButton = createConfirmButton();
    (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_1__.addConfirmButtonEvent)(confirmButton);
    confirmButton.setAttribute("id", "new-task-confirm");
    const closeButton = createCloseButton();
    closeButton.setAttribute("id", "new-task-close");
    (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_1__.addCloseButtonEvent)(closeButton);
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(container, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(newTodoForm, [titleArea, descriptionArea, dateContainer]));
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(container, [confirmButton, closeButton]);
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(parent, container);
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

function createDateContainer() {
    const dateContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "date-container");
    const datePicker = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("input", "due-date-picker");
    datePicker.type = "date";
    datePicker.valueAsDate = new Date();
    const projectContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "project-container");
    const selector = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("select", "project-selector");
    selector.name = "projects";
    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.getProjects)().forEach((project) => {
        const newOption = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("option", "project-option");
        newOption.value = project.title;
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



const projects = [];
const currentProject = 0;

function addProject(title) {
    title = title.slice(0, 1).toUpperCase() + title.slice(1, title.length).toLowerCase();
    projects.push({
        title: title,
        items: [],
    });
    projects[projects.length - 1].index = projects.length - 1;
    renderProjects();
    console.dir(projects);
}

function addHomeProject() {
    addProject("Home");
}

function addItemToProject(todoID, projectIndex) {
    console.log(`adding todo with id ${todoID} to project with index ${projectIndex}`);
    projects.forEach(project => {
        const foundIndex = project.items.findIndex(id => {
            return id == todoID;
        })
        if (foundIndex >= 0) {
            project.items.splice(foundIndex, 1);
        }
    });
    projects[projectIndex].items.push(todoID);
    if(projectIndex > 0) {
        projects[0].items.push(todoID);
    }
    console.log(projects[projectIndex]);
}

function deleteItemFromProject(todoID) {
    projects.forEach(project => {
        if (project.items.includes(todoID)) {
            project.items.splice(todoID, 1, "");
        }
    });
    (0,_todoItems__WEBPACK_IMPORTED_MODULE_1__.createTodos)((0,_todoItems__WEBPACK_IMPORTED_MODULE_1__.getTodosByID)(getIDsOfProject(currentProject)));
}

function getIDsOfProject(projectIndex) {
    return projects[projectIndex].items;
}

function getProjects() {
    return projects;
}

function getProjectIndexByTitle(title) {
    console.log("Getting project index");
    console.log("Title is: " + title);
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].title === title) {
            console.log(i);
            return i;
        } 
    }
    return 0;
}

function renderProjects() {
    const container = document.getElementById("projects");
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(container);
    projects.forEach(project => {
        const newProjectElement = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("p", "projects-item");
        newProjectElement.textContent = project.title;
        newProjectElement.dataset.projectIndex = `${projects.findIndex(element => project === element)}`;
        newProjectElement.addEventListener("click", (e) => {
        (0,_todoItems__WEBPACK_IMPORTED_MODULE_1__.createTodos)((0,_todoItems__WEBPACK_IMPORTED_MODULE_1__.getTodosByID)(getIDsOfProject(newProjectElement.dataset.projectIndex)));
        })
        ;(0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(container, newProjectElement);
    });
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
    return todo.id;
}

function createTodos(todos) {
    const todosContainer = document.getElementById("todos");
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(todosContainer);
    todos.forEach(todo => {
        if(todo === null) return;
        const item = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "todo-item", todo.id.toString());
        const leftContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "todo-item-left");
        const rightContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "todo-item-right");
        const title = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("p", "todo-title");
        title.textContent = todo.getTitle();
        (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(leftContainer, title);
        const dueDate = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("p", "todo-due-date");
        dueDate.textContent = todo.getDueDate();
        (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(rightContainer, dueDate);
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
    const dateContainer = (0,_newTask__WEBPACK_IMPORTED_MODULE_3__.createDateContainer)();
    dateContainer.querySelector(".priority-slider").value = getTodos()[todoID].getPriority();
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
}

function renderAllTodos() {
    createTodos(getTodos());
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
    const importantFolder = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", ["important-folder", "sidebar-hidden"], "important-folder");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxRQUFRLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlB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QUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDZmlEO0FBQzNCOztBQUV0Qiw4REFBb0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2JpbmRDbGlja0V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tSGVscGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9GYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvSXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3dlYnBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCMkQ0NDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjQwLCA0MSUsIDclKTtcXG4gICAgY29sb3I6ICNDRUNGRUQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGRkZGRkY7XFxuICAgIGhlaWdodDogOCU7XFxufVxcblxcbi5oZWFkZXItbGVmdCxcXG4uaGVhZGVyLXJpZ2h0IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWluLWhlaWdodDogNjBweDtcXG59XFxuXFxuLmhlYWRlci1sZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlci1sb2dvIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuXFxuLmhlYWRlci1jZW50ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgY29sb3I6ICNBMkEzQkY7XFxufVxcblxcbi5oZWFkZXItcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnN3aXRjaCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiAzNHB4O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIHdpZHRoOiAyNnB4O1xcbiAgICBsZWZ0OiA0cHg7XFxuICAgIGJvdHRvbTogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2NWFkO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi5zbGlkZXIucm91bmQge1xcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG4gIFxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogODYlO1xcbiAgICBtaW4taGVpZ2h0OiA4NDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxufVxcbi5tYWluLWxlZnQge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNzA2YjZiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjQwLCA0MSUsIDclKTtcXG4gICAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG4ubWFpbi1jZW50ZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5wcm9qZWN0cy1idXR0b24sXFxuLmltcG9ydGFudC1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6ICNmMWYxZmY7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI0MCwgNDElLCA3JSk7XFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuXFxuLnByb2plY3RzLWJ1dHRvbjpob3ZlciwgXFxuLmltcG9ydGFudC1idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmZDRkYTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyLFxcbi5pbXBvcnRhbnQtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU1ZmY7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjQwLCA0MSUsIDclKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgcGFkZGluZzogMCAwIDE1cHg7XFxufVxcblxcbi5wcm9qZWN0cy1mb2xkZXIsXFxuLmltcG9ydGFudC1mb2xkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzYTMxO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxuXFxuLnByb2plY3RzLXRleHQsXFxuLmltcG9ydGFudC10ZXh0IHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnByb2plY3RzLWl0ZW0ge1xcbiAgICBjb2xvcjogI2YxZjFmZjtcXG4gICAgZm9udC1zaXplOiAyMXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi5wcm9qZWN0cy1pdGVtOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZmQ0ZGE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI25ldy1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRlbnQuc2lkZWJhci1oaWRkZW4sXFxuLmltcG9ydGFudC1mb2xkZXIuc2lkZWJhci1oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMtc3BhbiwgXFxuI2ltcG9ydGFudC1zcGFuIHtcXG4gICAgY29sb3I6ICNmMWYxZmY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmNlbnRlci1jb250ZW50IHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnRvZG8tdG9wLWNvbnRhaW5lciB7XFxuICAgIGNvbG9yOiAjZTVlNmU3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi50b2RvLXRvcC1jb250YWluZXIgPiBwIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4udG9kby1hZGQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgb3BhY2l0eTogMC40O1xcbn1cXG5cXG4udG9kby1hZGQtY29udGFpbmVyOmhvdmVyLCBcXG4ubmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1hZGQtY29udGFpbmVyID4gcCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uYWRkLWltYWdlLCAudGFzay1idXR0b24ge1xcbiAgICB3aWR0aDogMjJweDtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbiAgICBmaWx0ZXI6IGludmVydCg5MyUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDI4JSkgaHVlLXJvdGF0ZSgyMjNkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoMTAzJSk7XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGNvbG9yOiAjZTVlNmU3O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzVjNmM3MmY7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzVjNmM3MmY7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIG1hcmdpbi10b3A6IC0xcHg7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50b2RvLWR1ZS1kYXRlIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4udG9kby1pdGVtOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci10b3AtY29sb3I6ICNjNWM2YzdiMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2M1YzZjN2IwO1xcbn1cXG5cXG4ubmV3LXRvZG8tZm9ybSxcXG4udG9kby1kZXRhaWxlZCwgXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjk0NTUyO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzVDNkM3O1xcbn1cXG5cXG4ubmV3LXRvZG8tZm9ybSB7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwMDcwYTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCMkQ0NDtcXG59XFxuXFxuLnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCMkQ0NDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBtYXJnaW46IDEwcHggMCA1cHg7XFxufVxcblxcbi5wcm9qZWN0cy1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0gLnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI0MCwgNDElLCA3JSk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBcXG59XFxuXFxuLnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi50YXNrLWJ1dHRvbiB7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG59XFxuXFxuLnRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVkLXRleHQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICNlYzQxNDE7XFxufVxcblxcbi5kdWUtZGF0ZS1waWNrZXIge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzE5MjA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4uZHVlLWRhdGUtcGlja2VyOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICBmaWx0ZXI6IGludmVydCg5MyUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDI4JSkgaHVlLXJvdGF0ZSgyMjNkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoMTAzJSk7XFxufVxcblxcbi5kYXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4ucHJpby10ZXh0IHtcXG4gICAgY29sb3I6ICNDNUM2Qzc7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxjQUFjO0lBQ2QsYUFBYTtJQUNiLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsVUFBVTtBQUNkOztBQUVBOztJQUVJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osU0FBUztJQUNULGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtJQUN0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c0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjJENDQ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI0MCwgNDElLCA3JSk7XFxuICAgIGNvbG9yOiAjQ0VDRkVEO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkZGRkZGO1xcbiAgICBoZWlnaHQ6IDglO1xcbn1cXG5cXG4uaGVhZGVyLWxlZnQsXFxuLmhlYWRlci1yaWdodCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5oZWFkZXItbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItbG9nbyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcblxcbi5oZWFkZXItY2VudGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGNvbG9yOiAjQTJBM0JGO1xcbn1cXG5cXG4uaGVhZGVyLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogMzRweDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG59XFxuXFxuLnNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNjVhZDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuICBcXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDg2JTtcXG4gICAgbWluLWhlaWdodDogODQwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcblxcbn1cXG4ubWFpbi1sZWZ0IHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzcwNmI2YjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI0MCwgNDElLCA3JSk7XFxuICAgIG1hcmdpbi10b3A6IDFweDtcXG59XFxuLm1haW4tY2VudGVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtYnV0dG9uLFxcbi5pbXBvcnRhbnQtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiAjZjFmMWZmO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNDAsIDQxJSwgNyUpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcblxcbi5wcm9qZWN0cy1idXR0b246aG92ZXIsIFxcbi5pbXBvcnRhbnQtYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZmQ0ZGE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lcixcXG4uaW1wb3J0YW50LWNvbnRhaW5lciB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNWZmO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI0MCwgNDElLCA3JSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIHBhZGRpbmc6IDAgMCAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdHMtZm9sZGVyLFxcbi5pbXBvcnRhbnQtZm9sZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2EzMTtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxufVxcblxcblxcbi5wcm9qZWN0cy10ZXh0LFxcbi5pbXBvcnRhbnQtdGV4dCB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0cy1pdGVtIHtcXG4gICAgY29sb3I6ICNmMWYxZmY7XFxuICAgIGZvbnQtc2l6ZTogMjFweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4ucHJvamVjdHMtaXRlbTpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZkNGRhO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNuZXctcHJvamVjdC1idXR0b24tY29udGFpbmVyIHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbi5wcm9qZWN0cy1jb250ZW50LnNpZGViYXItaGlkZGVuLFxcbi5pbXBvcnRhbnQtZm9sZGVyLnNpZGViYXItaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Byb2plY3RzLXNwYW4sIFxcbiNpbXBvcnRhbnQtc3BhbiB7XFxuICAgIGNvbG9yOiAjZjFmMWZmO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5jZW50ZXItY29udGVudCB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi50b2RvLXRvcC1jb250YWluZXIge1xcbiAgICBjb2xvcjogI2U1ZTZlNztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4udG9kby10b3AtY29udGFpbmVyID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLnRvZG8tYWRkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLnRvZG8tYWRkLWNvbnRhaW5lcjpob3ZlciwgXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tYWRkLWNvbnRhaW5lciA+IHAge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmFkZC1pbWFnZSwgLnRhc2stYnV0dG9uIHtcXG4gICAgd2lkdGg6IDIycHg7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoOTMlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgyOCUpIGh1ZS1yb3RhdGUoMjIzZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwMyUpO1xcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBjb2xvcjogI2U1ZTZlNztcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2M1YzZjNzJmO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M1YzZjNzJmO1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4udG9kby1kdWUtZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRvZG8taXRlbTpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjYzVjNmM3YjA7XFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNjNWM2YzdiMDtcXG59XFxuXFxuLm5ldy10b2RvLWZvcm0sXFxuLnRvZG8tZGV0YWlsZWQsIFxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI5NDU1MjtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0M1QzZDNztcXG59XFxuXFxuLm5ldy10b2RvLWZvcm0ge1xcbiAgICBib3JkZXItY29sb3I6ICMwMDA3MGE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjJENDQ7XFxufVxcblxcbi50ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjJENDQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgbWFyZ2luOiAxMHB4IDAgNXB4O1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtIC50ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNDAsIDQxJSwgNyUpO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgXFxufVxcblxcbi50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzay1idXR0b24ge1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxufVxcblxcbi50YXNrLWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlZC10ZXh0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiAjZWM0MTQxO1xcbn1cXG5cXG4uZHVlLWRhdGUtcGlja2VyIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxOTIwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLmR1ZS1kYXRlLXBpY2tlcjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoOTMlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgyOCUpIGh1ZS1yb3RhdGUoMjIzZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwMyUpO1xcbn1cXG5cXG4uZGF0ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLnByaW8tdGV4dCB7XFxuICAgIGNvbG9yOiAjQzVDNkM3O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFwcGVuZENoaWxkSGVscGVyLCBjcmVhdGVIVE1MRWxlbWVudCB9IGZyb20gXCIuL2RvbUhlbHBlcnNcIjtcbmltcG9ydCBhZGRJY29uIGZyb20gXCIuL2ltYWdlcy9hZGQuc3ZnXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0FkZEJ1dHRvbihjb250YWluZXJDbGFzcywgaW1hZ2VDbGFzcywgdGV4dENsYXNzLCB0ZXh0KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgY29udGFpbmVyQ2xhc3MpO1xuICAgIGNvbnN0IGFkZEltYWdlID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbWdcIiwgaW1hZ2VDbGFzcyk7XG4gICAgYWRkSW1hZ2Uuc3JjID0gYWRkSWNvbjtcbiAgICBjb25zdCBhZGRUZXh0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIHRleHRDbGFzcyk7XG4gICAgYWRkVGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGFpbmVyLCBbYWRkSW1hZ2UsIGFkZFRleHRdKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBjcmVhdGVOZXdBZGRCdXR0b24gfTtcblxuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRIZWxwZXIgfSBmcm9tIFwiLi9kb21IZWxwZXJzXCI7XG5pbXBvcnQgeyBuZXdQcm9qZWN0Q2xpY2ssIHJlQXBwZW5kTmV3UHJvamVjdEJ1dHRvbiB9IGZyb20gXCIuL25ld1Byb2plY3RcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Rhc2tCdXR0b24sIG5ld1Rhc2tDbGljayB9IGZyb20gXCIuL25ld1Rhc2tcIjtcbmltcG9ydCB7IGFkZEl0ZW1Ub1Byb2plY3QsIGFkZFByb2plY3QsIGdldFByb2plY3RJbmRleEJ5VGl0bGUgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgYWRkVG9kbywgY3JlYXRlVG9kb3MsIGRpc3BsYXlUb2RvRGV0YWlscywgZWRpdFRvZG8sIGdldFRvZG9zLCByZW5kZXJBbGxUb2RvcyB9IGZyb20gXCIuL3RvZG9JdGVtc1wiO1xuXG5mdW5jdGlvbiBiaW5kQ2xpY2tFdmVudHMoKSB7XG4gICAgY29uc3QgW3Byb2plY3RzQnV0dG9uLCBpbXBvcnRhbnRCdXR0b25dID0gZmluZEJ1dHRvbnMoW1wicHJvamVjdHMtYnV0dG9uXCIsIFwiaW1wb3J0YW50LWJ1dHRvblwiXSk7XG4gICAgY29uc3QgZGFya01vZGVDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFyay1tb2RlLWNoZWNrYm94XCIpO1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tYWRkLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1idXR0b25cIik7XG5cbiAgICBhZGRQcm9qZWN0c0J1dHRvbkV2ZW50KHByb2plY3RzQnV0dG9uKTtcbiAgICBhZGRJbXBvcnRhbnRCdXR0b25FdmVudChpbXBvcnRhbnRCdXR0b24pO1xuICAgIGFkZEFkZFRhc2tCdXR0b25FdmVudChhZGRUYXNrQnV0dG9uKTtcbiAgICBhZGROZXdQcm9qZWN0QnV0dG9uRXZlbnQoYWRkUHJvamVjdEJ1dHRvbik7XG5cbiAgICBkYXJrTW9kZUNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vY2hhbmdlIGNvbG9yIHNjaGVtZSBzb21laG93XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEFkZFRhc2tCdXR0b25FdmVudChhZGRUYXNrQnV0dG9uKSB7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbmV3VGFza0NsaWNrKGUpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0c0J1dHRvbkV2ZW50KHByb2plY3RzQnV0dG9uKSB7XG4gICAgcHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHByb2plY3RzQnV0dG9uLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwic2lkZWJhci1oaWRkZW5cIik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEltcG9ydGFudEJ1dHRvbkV2ZW50KGltcG9ydGFudEJ1dHRvbikge1xuICAgIGltcG9ydGFudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaW1wb3J0YW50QnV0dG9uLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwic2lkZWJhci1oaWRkZW5cIik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZENsb3NlQnV0dG9uRXZlbnQoY2xvc2VCdXR0b24pIHtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gY2xvc2VCdXR0b24ucGFyZW50Tm9kZTtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICByZUFwcGVuZE5ld1Rhc2tCdXR0b24oKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkQ29uZmlybUJ1dHRvbkV2ZW50KGNvbmZpcm1CdXR0b24pIHtcbiAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBjb25maXJtQnV0dG9uLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtdGV4dGFyZWFcIik7XG4gICAgICAgIGlmICh0aXRsZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgdGl0bGUucGxhY2Vob2xkZXIgPSBcIlRoaXMgZmllbGQgY2Fubm90IGJlIGVtcHR5LlwiO1xuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInJlZC10ZXh0XCIpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcInJlZC10ZXh0XCIpO1xuICAgICAgICAgICAgfSwgNzUwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uLXRleHRhcmVhXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1jb250YWluZXIgLmR1ZS1kYXRlLXBpY2tlclwiKS52YWx1ZUFzRGF0ZTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGAke2R1ZURhdGUuZ2V0RGF0ZSgpfS8ke2R1ZURhdGUuZ2V0TW9udGgoKSArIDF9LyR7ZHVlRGF0ZS5nZXRGdWxsWWVhcigpfWA7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHktc2xpZGVyXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1zZWxlY3RvclwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9kb0lEID0gYWRkVG9kbyh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgICAgICAgYWRkSXRlbVRvUHJvamVjdCh0b2RvSUQsIGdldFByb2plY3RJbmRleEJ5VGl0bGUocHJvamVjdCkpO1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgIHJlQXBwZW5kTmV3VGFza0J1dHRvbigpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0QnV0dG9uRXZlbnQoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBuZXdQcm9qZWN0Q2xpY2soZSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZENvbmZpcm1OZXdQcm9qZWN0QnV0dG9uRXZlbnQoY29uZmlybUJ1dHRvbikge1xuICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbmZpcm1CdXR0b24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtaW5wdXRcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGV4dGFyZWEudmFsdWU7XG4gICAgICAgIGFkZFByb2plY3QodGl0bGUpO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIHJlQXBwZW5kTmV3UHJvamVjdEJ1dHRvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWNvbnRlbnRcIikpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRDbG9zZU5ld1Byb2plY3RCdXR0b25FdmVudChjbG9zZUJ1dHRvbikge1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjbG9zZUJ1dHRvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgcmVBcHBlbmROZXdQcm9qZWN0QnV0dG9uKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtY29udGVudFwiKSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZERldGFpbGVkQ29uZmlybUJ1dHRvbkV2ZW50KGNvbmZpcm1CdXR0b24sIGlkKSB7XG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gY29uZmlybUJ1dHRvbi5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLXRleHRhcmVhXCIpO1xuICAgICAgICBpZiAodGl0bGUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRpdGxlLnBsYWNlaG9sZGVyID0gXCJUaGlzIGZpZWxkIGNhbm5vdCBiZSBlbXB0eS5cIjtcbiAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJyZWQtdGV4dFwiKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJyZWQtdGV4dFwiKTtcbiAgICAgICAgICAgIH0sIDc1MCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbi10ZXh0YXJlYVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtY29udGFpbmVyIC5kdWUtZGF0ZS1waWNrZXJcIikudmFsdWVBc0RhdGU7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBgJHtkdWVEYXRlLmdldERhdGUoKX0vJHtkdWVEYXRlLmdldE1vbnRoKCkgKyAxfS8ke2R1ZURhdGUuZ2V0RnVsbFllYXIoKX1gO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5LXNsaWRlclwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Qtc2VsZWN0b3JcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGVkaXRlZFRvZG9JRCA9IGVkaXRUb2RvKGlkLCB0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICByZW5kZXJBbGxUb2RvcygpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdEluZGV4ID0gZ2V0UHJvamVjdEluZGV4QnlUaXRsZShwcm9qZWN0KTtcbiAgICAgICAgYWRkSXRlbVRvUHJvamVjdChlZGl0ZWRUb2RvSUQsIGN1cnJlbnRQcm9qZWN0SW5kZXgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGREZXRhaWxlZENsb3NlQnV0dG9uRXZlbnQoY2xvc2VCdXR0b24pIHtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY3JlYXRlVG9kb3MoZ2V0VG9kb3MoKSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlQXBwZW5kTmV3VGFza0J1dHRvbigpIHtcbiAgICBjb25zdCBuZXdUYXNrQnV0dG9uID0gY3JlYXRlTmV3VGFza0J1dHRvbigpO1xuICAgIGFkZEFkZFRhc2tCdXR0b25FdmVudChuZXdUYXNrQnV0dG9uKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNlbnRlci1jb250ZW50XCIpLCBuZXdUYXNrQnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9kb0V2ZW50KHRvZG8pIHtcbiAgICB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBkaXNwbGF5VG9kb0RldGFpbHMoZS5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZmluZEJ1dHRvbnMoYnV0dG9uSURzKSB7XG4gICAgY29uc3QgZG9tQnV0dG9ucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpXTtcbiAgICBjb25zdCByZXR1cm5CdXR0b25zID0gW107XG4gICAgaWYgKHR5cGVvZiBidXR0b25JRHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgYnV0dG9uSURzLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgICAgZG9tQnV0dG9ucy5maW5kKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5CdXR0b25zLnB1c2goYnV0dG9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9tQnV0dG9ucy5maW5kKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgICAgICAgIHJldHVybiBidXR0b24uaWQgPT09IGJ1dHRvbklEcztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5CdXR0b25zO1xufVxuXG5leHBvcnQge1xuICAgIGJpbmRDbGlja0V2ZW50cywgYWRkQ29uZmlybUJ1dHRvbkV2ZW50LCBhZGRDbG9zZUJ1dHRvbkV2ZW50LFxuICAgIGFkZFRvZG9FdmVudCwgYWRkRGV0YWlsZWRDbG9zZUJ1dHRvbkV2ZW50LCBhZGREZXRhaWxlZENvbmZpcm1CdXR0b25FdmVudCxcbiAgICBhZGRDbG9zZU5ld1Byb2plY3RCdXR0b25FdmVudCwgYWRkQ29uZmlybU5ld1Byb2plY3RCdXR0b25FdmVudCwgYWRkTmV3UHJvamVjdEJ1dHRvbkV2ZW50XG59OyIsImZ1bmN0aW9uIGNyZWF0ZUhUTUxFbGVtZW50KGVsZW1lbnQsIGNsYXNzZXMsIGlkKSB7XG4gICAgY29uc3QgcmV0dXJuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgaWYgKHR5cGVvZiBjbGFzc2VzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGNsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NUb0FkZCkge1xuICAgICAgICAgICAgcmV0dXJuRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjbGFzc2VzID09PSBcInN0cmluZ1wiICYmIGNsYXNzZXMgIT09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzZXMpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGlkID09PSBcInN0cmluZ1wiICYmIGlkICE9PSBcIlwiKSB7XG4gICAgICAgIHJldHVybkVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQ2hpbGRIZWxwZXIoZWxlbWVudCwgY2hpbGRyZW4pIHtcbiAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKGNoaWxkcmVuKS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkgJiYgdHlwZW9mIGNoaWxkcmVuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGRyZW4oZWxlbWVudCkge1xuICAgIHdoaWxlKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBjcmVhdGVIVE1MRWxlbWVudCwgYXBwZW5kQ2hpbGRIZWxwZXIsIHJlbW92ZUFsbENoaWxkcmVuIH07IiwiaW1wb3J0IHsgYWRkQ2xvc2VOZXdQcm9qZWN0QnV0dG9uRXZlbnQsIGFkZENvbmZpcm1OZXdQcm9qZWN0QnV0dG9uRXZlbnQsIGFkZE5ld1Byb2plY3RCdXR0b25FdmVudCB9IGZyb20gXCIuL2JpbmRDbGlja0V2ZW50c1wiO1xuaW1wb3J0IHsgYXBwZW5kQ2hpbGRIZWxwZXIsIGNyZWF0ZUhUTUxFbGVtZW50IH0gZnJvbSBcIi4vZG9tSGVscGVyc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29uZmlybUJ1dHRvbiwgY3JlYXRlQ2xvc2VCdXR0b24gfSBmcm9tIFwiLi9uZXdUYXNrXCI7XG5pbXBvcnQgYWRkSWNvbiBmcm9tIFwiLi9pbWFnZXMvYWRkLnN2Z1wiO1xuaW1wb3J0IHsgY3JlYXRlTmV3QWRkQnV0dG9uIH0gZnJvbSBcIi4vYWRkQnV0dG9uXCI7XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3RDbGljayhlKSB7XG4gICAgY29uc3QgcGFyZW50ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgZS5jdXJyZW50VGFyZ2V0LnJlbW92ZSgpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwibmV3LXByb2plY3QtY29udGFpbmVyXCIsIFwibmV3LXByb2plY3QtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJuZXctcHJvamVjdC1mb3JtXCIsIFwibmV3LXByb2plY3QtZm9ybVwiKTtcbiAgICBjb25zdCB0aXRsZUFyZWEgPSBjcmVhdGVIVE1MRWxlbWVudChcImlucHV0XCIsIFtcInRleHRhcmVhXCIsIFwibmV3LXByb2plY3QtdGV4dGFyZWFcIl0sIFwibmV3LXByb2plY3QtaW5wdXRcIik7XG4gICAgdGl0bGVBcmVhLnBsYWNlaG9sZGVyID0gXCJUaXRsZTogQ29kaW5nXCI7XG4gICAgdGl0bGVBcmVhLnR5cGUgPSBcInRleHRcIjtcbiAgICB0aXRsZUFyZWEuc2l6ZSA9IFwiMThcIjtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gY3JlYXRlQ29uZmlybUJ1dHRvbigpO1xuICAgIGFkZENvbmZpcm1OZXdQcm9qZWN0QnV0dG9uRXZlbnQoY29uZmlybUJ1dHRvbik7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBjcmVhdGVDbG9zZUJ1dHRvbigpO1xuICAgIGFkZENsb3NlTmV3UHJvamVjdEJ1dHRvbkV2ZW50KGNsb3NlQnV0dG9uKTtcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcIlwiLCBcIm5ldy1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXJcIik7XG5cbiAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250YWluZXIsIGFwcGVuZENoaWxkSGVscGVyKG5ld1Byb2plY3RGb3JtLCB0aXRsZUFyZWEpKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250YWluZXIsIGFwcGVuZENoaWxkSGVscGVyKGJ1dHRvbkNvbnRhaW5lciwgW2NvbmZpcm1CdXR0b24sIGNsb3NlQnV0dG9uXSkpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKHBhcmVudCwgY29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdEJ1dHRvbigpIHtcbiAgICBjb25zdCBuZXdCdXR0b24gPSBjcmVhdGVOZXdBZGRCdXR0b24oXCJuZXctcHJvamVjdC1idXR0b25cIiwgXCJhZGQtaW1hZ2VcIiwgXCJuZXctcHJvamVjdC10ZXh0XCIsIFwiTmV3IFByb2plY3RcIik7XG4gICAgcmV0dXJuIG5ld0J1dHRvbjtcbn1cblxuZnVuY3Rpb24gcmVBcHBlbmROZXdQcm9qZWN0QnV0dG9uKHBhcmVudE5vZGUpIHtcbiAgICBjb25zdCBuZXdCdXR0b24gPSBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uKCk7XG4gICAgYWRkTmV3UHJvamVjdEJ1dHRvbkV2ZW50KG5ld0J1dHRvbik7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIocGFyZW50Tm9kZSwgbmV3QnV0dG9uKTtcbn1cblxuZXhwb3J0IHsgbmV3UHJvamVjdENsaWNrLCBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uLCByZUFwcGVuZE5ld1Byb2plY3RCdXR0b24gfTsiLCJpbXBvcnQgeyBhcHBlbmRDaGlsZEhlbHBlciwgY3JlYXRlSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9kb21IZWxwZXJzXCI7XG5pbXBvcnQgeyBhZGRDb25maXJtQnV0dG9uRXZlbnQsIGFkZENsb3NlQnV0dG9uRXZlbnQgfSBmcm9tIFwiLi9iaW5kQ2xpY2tFdmVudHNcIjtcbmltcG9ydCB7IGdldFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCBjb25maXJtSWNvbiBmcm9tIFwiLi9pbWFnZXMvY29uZmlybS5zdmdcIjtcbmltcG9ydCBjbG9zZUljb24gZnJvbSBcIi4vaW1hZ2VzL2Nsb3NlLnN2Z1wiO1xuaW1wb3J0IGFkZEljb24gZnJvbSBcIi4vaW1hZ2VzL2FkZC5zdmdcIjtcblxuZnVuY3Rpb24gbmV3VGFza0NsaWNrKGUpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZTtcbiAgICBlLmN1cnJlbnRUYXJnZXQucmVtb3ZlKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJuZXctdG9kby1jb250YWluZXJcIiwgXCJuZXctdG9kby1jb250YWluZXJcIik7XG4gICAgY29uc3QgbmV3VG9kb0Zvcm0gPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcIm5ldy10b2RvLWZvcm1cIiwgXCJuZXctdG9kby1mb3JtXCIpO1xuICAgIGNvbnN0IHRpdGxlQXJlYSA9IGNyZWF0ZVRpdGxlQXJlYSgpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uQXJlYSA9IGNyZWF0ZURlc2NyaXB0aW9uQXJlYSgpO1xuICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBjcmVhdGVEYXRlQ29udGFpbmVyKCk7XG4gICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGNyZWF0ZUNvbmZpcm1CdXR0b24oKTtcbiAgICBhZGRDb25maXJtQnV0dG9uRXZlbnQoY29uZmlybUJ1dHRvbik7XG4gICAgY29uZmlybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy10YXNrLWNvbmZpcm1cIik7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBjcmVhdGVDbG9zZUJ1dHRvbigpO1xuICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LXRhc2stY2xvc2VcIik7XG4gICAgYWRkQ2xvc2VCdXR0b25FdmVudChjbG9zZUJ1dHRvbik7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGFpbmVyLCBhcHBlbmRDaGlsZEhlbHBlcihuZXdUb2RvRm9ybSwgW3RpdGxlQXJlYSwgZGVzY3JpcHRpb25BcmVhLCBkYXRlQ29udGFpbmVyXSkpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRhaW5lciwgW2NvbmZpcm1CdXR0b24sIGNsb3NlQnV0dG9uXSk7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIocGFyZW50LCBjb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTbGlkZXIoKSB7XG4gICAgY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJzbGlkZXItY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHByaW9TbGlkZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImlucHV0XCIsIFwicHJpb3JpdHktc2xpZGVyXCIpO1xuICAgIHByaW9TbGlkZXIudHlwZSA9IFwicmFuZ2VcIjtcbiAgICBwcmlvU2xpZGVyLm1pbiA9IFwiMVwiO1xuICAgIHByaW9TbGlkZXIubWF4ID0gXCIxMFwiO1xuICAgIHByaW9TbGlkZXIudmFsdWUgPSBcIjVcIjtcbiAgICBjb25zdCBwcmlvVGV4dCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwicFwiLCBcInByaW8tdGV4dFwiKTtcbiAgICBwcmlvVGV4dC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKHNsaWRlckNvbnRhaW5lciwgW3ByaW9UZXh0LCBwcmlvU2xpZGVyXSk7XG4gICAgcmV0dXJuIHNsaWRlckNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29uZmlybUJ1dHRvbigpIHtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbWdcIiwgW1widGFzay1idXR0b25cIiwgXCJjb25maXJtLWJ1dHRvblwiXSk7XG4gICAgY29uZmlybUJ1dHRvbi5zcmMgPSBjb25maXJtSWNvbjtcbiAgICByZXR1cm4gY29uZmlybUJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2xvc2VCdXR0b24oKSB7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBjcmVhdGVIVE1MRWxlbWVudChcImltZ1wiLCBbXCJ0YXNrLWJ1dHRvblwiLCBcImNsb3NlLWJ1dHRvblwiXSk7XG4gICAgY2xvc2VCdXR0b24uc3JjID0gY2xvc2VJY29uO1xuICAgIHJldHVybiBjbG9zZUJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGF0ZUNvbnRhaW5lcigpIHtcbiAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJkYXRlLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBkYXRlUGlja2VyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbnB1dFwiLCBcImR1ZS1kYXRlLXBpY2tlclwiKTtcbiAgICBkYXRlUGlja2VyLnR5cGUgPSBcImRhdGVcIjtcbiAgICBkYXRlUGlja2VyLnZhbHVlQXNEYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwic2VsZWN0XCIsIFwicHJvamVjdC1zZWxlY3RvclwiKTtcbiAgICBzZWxlY3Rvci5uYW1lID0gXCJwcm9qZWN0c1wiO1xuICAgIGdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdPcHRpb24gPSBjcmVhdGVIVE1MRWxlbWVudChcIm9wdGlvblwiLCBcInByb2plY3Qtb3B0aW9uXCIpO1xuICAgICAgICBuZXdPcHRpb24udmFsdWUgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICBuZXdPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICBhcHBlbmRDaGlsZEhlbHBlcihzZWxlY3RvciwgbmV3T3B0aW9uKTtcbiAgICB9KTtcblxuICAgIGFwcGVuZENoaWxkSGVscGVyKHByb2plY3RDb250YWluZXIsIHNlbGVjdG9yKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihkYXRlQ29udGFpbmVyLCBbZGF0ZVBpY2tlciwgcHJvamVjdENvbnRhaW5lciwgY3JlYXRlU2xpZGVyKCldKTtcbiAgICByZXR1cm4gZGF0ZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb25BcmVhKCkge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uQXJlYSA9IGNyZWF0ZUhUTUxFbGVtZW50KFwidGV4dGFyZWFcIiwgW1wiZGVzY3JpcHRpb24tdGV4dGFyZWFcIiwgXCJ0ZXh0YXJlYVwiXSk7XG4gICAgZGVzY3JpcHRpb25BcmVhLnBsYWNlaG9sZGVyID0gXCJEZXRhaWxzOiBQcmVmZXJhYmx5IGJlZm9yZSB5b3Ugc3RhcnZlLlwiXG4gICAgZGVzY3JpcHRpb25BcmVhLnJvd3MgPSBcIjVcIjtcbiAgICByZXR1cm4gZGVzY3JpcHRpb25BcmVhO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUaXRsZUFyZWEoKSB7XG4gICAgY29uc3QgdGl0bGVBcmVhID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBbXCJ0aXRsZS10ZXh0YXJlYVwiLCBcInRleHRhcmVhXCJdKTtcbiAgICB0aXRsZUFyZWEucGxhY2Vob2xkZXIgPSBcIlRpdGxlOiBFYXQgZm9vZFwiO1xuICAgIHJldHVybiB0aXRsZUFyZWE7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tCdXR0b24oKSB7XG4gICAgY29uc3QgYm90dG9tQ29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWFkZC1jb250YWluZXJcIiwgXCJ0b2RvLWFkZC1jb250YWluZXJcIik7XG4gICAgY29uc3QgYWRkSW1hZ2UgPSBjcmVhdGVIVE1MRWxlbWVudChcImltZ1wiLCBcImFkZC1pbWFnZVwiLCBcImFkZC1pbWFnZVwiKTtcbiAgICBhZGRJbWFnZS5zcmMgPSBhZGRJY29uO1xuICAgIGNvbnN0IGFkZFRleHQgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJhZGQtdGV4dFwiLCBcImFkZC10ZXh0XCIpO1xuICAgIGFkZFRleHQudGV4dENvbnRlbnQgPSBcIk5ldyBUYXNrXCI7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoYm90dG9tQ29udGFpbmVyLCBbYWRkSW1hZ2UsIGFkZFRleHRdKTtcbiAgICByZXR1cm4gYm90dG9tQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBuZXdUYXNrQ2xpY2ssIGNyZWF0ZU5ld1Rhc2tCdXR0b24sIGNyZWF0ZVNsaWRlciwgY3JlYXRlQ2xvc2VCdXR0b24sIGNyZWF0ZUNvbmZpcm1CdXR0b24sIGNyZWF0ZURhdGVDb250YWluZXIsIGNyZWF0ZVRpdGxlQXJlYSwgY3JlYXRlRGVzY3JpcHRpb25BcmVhIH07IiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRIZWxwZXIsIGNyZWF0ZUhUTUxFbGVtZW50LCByZW1vdmVBbGxDaGlsZHJlbiB9IGZyb20gXCIuL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG9zLCBnZXRUb2Rvc0J5SUQgfSBmcm9tIFwiLi90b2RvSXRlbXNcIjtcblxuY29uc3QgcHJvamVjdHMgPSBbXTtcbmNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gMDtcblxuZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSkge1xuICAgIHRpdGxlID0gdGl0bGUuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHRpdGxlLnNsaWNlKDEsIHRpdGxlLmxlbmd0aCkudG9Mb3dlckNhc2UoKTtcbiAgICBwcm9qZWN0cy5wdXNoKHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBpdGVtczogW10sXG4gICAgfSk7XG4gICAgcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0uaW5kZXggPSBwcm9qZWN0cy5sZW5ndGggLSAxO1xuICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgY29uc29sZS5kaXIocHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiBhZGRIb21lUHJvamVjdCgpIHtcbiAgICBhZGRQcm9qZWN0KFwiSG9tZVwiKTtcbn1cblxuZnVuY3Rpb24gYWRkSXRlbVRvUHJvamVjdCh0b2RvSUQsIHByb2plY3RJbmRleCkge1xuICAgIGNvbnNvbGUubG9nKGBhZGRpbmcgdG9kbyB3aXRoIGlkICR7dG9kb0lEfSB0byBwcm9qZWN0IHdpdGggaW5kZXggJHtwcm9qZWN0SW5kZXh9YCk7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgZm91bmRJbmRleCA9IHByb2plY3QuaXRlbXMuZmluZEluZGV4KGlkID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpZCA9PSB0b2RvSUQ7XG4gICAgICAgIH0pXG4gICAgICAgIGlmIChmb3VuZEluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHByb2plY3QuaXRlbXMuc3BsaWNlKGZvdW5kSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS5pdGVtcy5wdXNoKHRvZG9JRCk7XG4gICAgaWYocHJvamVjdEluZGV4ID4gMCkge1xuICAgICAgICBwcm9qZWN0c1swXS5pdGVtcy5wdXNoKHRvZG9JRCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzW3Byb2plY3RJbmRleF0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVJdGVtRnJvbVByb2plY3QodG9kb0lEKSB7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgaWYgKHByb2plY3QuaXRlbXMuaW5jbHVkZXModG9kb0lEKSkge1xuICAgICAgICAgICAgcHJvamVjdC5pdGVtcy5zcGxpY2UodG9kb0lELCAxLCBcIlwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNyZWF0ZVRvZG9zKGdldFRvZG9zQnlJRChnZXRJRHNPZlByb2plY3QoY3VycmVudFByb2plY3QpKSk7XG59XG5cbmZ1bmN0aW9uIGdldElEc09mUHJvamVjdChwcm9qZWN0SW5kZXgpIHtcbiAgICByZXR1cm4gcHJvamVjdHNbcHJvamVjdEluZGV4XS5pdGVtcztcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0SW5kZXhCeVRpdGxlKHRpdGxlKSB7XG4gICAgY29uc29sZS5sb2coXCJHZXR0aW5nIHByb2plY3QgaW5kZXhcIik7XG4gICAgY29uc29sZS5sb2coXCJUaXRsZSBpczogXCIgKyB0aXRsZSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdHNbaV0udGl0bGUgPT09IHRpdGxlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpKTtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9IFxuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKTtcbiAgICByZW1vdmVBbGxDaGlsZHJlbihjb250YWluZXIpO1xuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RFbGVtZW50ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwicHJvamVjdHMtaXRlbVwiKTtcbiAgICAgICAgbmV3UHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICBuZXdQcm9qZWN0RWxlbWVudC5kYXRhc2V0LnByb2plY3RJbmRleCA9IGAke3Byb2plY3RzLmZpbmRJbmRleChlbGVtZW50ID0+IHByb2plY3QgPT09IGVsZW1lbnQpfWA7XG4gICAgICAgIG5ld1Byb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjcmVhdGVUb2RvcyhnZXRUb2Rvc0J5SUQoZ2V0SURzT2ZQcm9qZWN0KG5ld1Byb2plY3RFbGVtZW50LmRhdGFzZXQucHJvamVjdEluZGV4KSkpO1xuICAgICAgICB9KVxuICAgICAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250YWluZXIsIG5ld1Byb2plY3RFbGVtZW50KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3ROYW1lKHN0cmluZywgcHJvamVjdEluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBzdHJpbmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50aXRsZSA9IHN0cmluZztcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgYWRkUHJvamVjdCwgYWRkSG9tZVByb2plY3QsIGFkZEl0ZW1Ub1Byb2plY3QsIGRlbGV0ZUl0ZW1Gcm9tUHJvamVjdCwgZWRpdFByb2plY3ROYW1lLFxuICAgIGdldElEc09mUHJvamVjdCwgZ2V0UHJvamVjdHMsIGdldFByb2plY3RJbmRleEJ5VGl0bGUsIHJlbmRlclByb2plY3RzXG59O1xuIiwiY29uc3QgVG9Eb0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gICAgY29uc3Qgc2V0VGl0bGUgPSAoaW5wdXQpID0+IHRoaXMudGl0bGUgPSBpbnB1dDtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKGlucHV0KSA9PiB0aGlzLmRlc2NyaXB0aW9uID0gaW5wdXQ7XG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gICAgY29uc3Qgc2V0RHVlRGF0ZSA9IChpbnB1dCkgPT4gdGhpcy5kdWVEYXRlID0gaW5wdXQ7XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IChpbnB1dCkgPT4gdGhpcy5wcmlvcml0eSA9IGlucHV0O1xuICAgIGNvbnN0IGdldFByb2plY3QgPSAoKSA9PiBwcm9qZWN0O1xuICAgIGNvbnN0IHNldFByb2plY3QgPSAoaW5wdXQpID0+IHRoaXMucHJvamVjdCA9IGlucHV0O1xuICAgIGNvbnN0IGdldENvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShcImNvbXBsZXRlXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGxldGUgcHJvcGVydHkgbm90IHNldC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc2V0Q29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KFwiY29tcGxldGVcIikpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSAhdGhpcy5jb21wbGV0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgLyogY29uc3QgZ2V0UHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgaWYodGhpcy5oYXNPd25Qcm9wZXJ0eShcInByb2plY3RcIikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2plY3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInByb2plY3QgcHJvcGVydHkgbm90IHNldC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc2V0UHJvamVjdCA9IChpbnB1dCkgPT4ge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBpbnB1dDtcbiAgICB9Ki9cblxuXG4gICAgcmV0dXJuIHsgZ2V0VGl0bGUsIHNldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb24sIGdldER1ZURhdGUsIHNldER1ZURhdGUsIGdldFByaW9yaXR5LCBzZXRQcmlvcml0eSwgZ2V0Q29tcGxldGUsIHNldENvbXBsZXRlLCBnZXRQcm9qZWN0LCBzZXRQcm9qZWN0IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG9GYWN0b3J5OyIsImltcG9ydCBUb0RvRmFjdG9yeSBmcm9tIFwiLi90b2RvRmFjdG9yeVwiO1xuaW1wb3J0IHsgYXBwZW5kQ2hpbGRIZWxwZXIsIGNyZWF0ZUhUTUxFbGVtZW50LCByZW1vdmVBbGxDaGlsZHJlbiB9IGZyb20gXCIuL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7IGFkZFRvZG9FdmVudCwgYWRkRGV0YWlsZWRDbG9zZUJ1dHRvbkV2ZW50LCBhZGREZXRhaWxlZENvbmZpcm1CdXR0b25FdmVudCB9IGZyb20gXCIuL2JpbmRDbGlja0V2ZW50c1wiO1xuaW1wb3J0IHsgY3JlYXRlU2xpZGVyLCBjcmVhdGVDbG9zZUJ1dHRvbiwgY3JlYXRlQ29uZmlybUJ1dHRvbiwgY3JlYXRlRGF0ZUNvbnRhaW5lciwgY3JlYXRlVGl0bGVBcmVhLCBjcmVhdGVEZXNjcmlwdGlvbkFyZWEgfSBmcm9tIFwiLi9uZXdUYXNrXCI7XG5pbXBvcnQgeyBkZWxldGVJdGVtRnJvbVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5jb25zdCBhbGxUb2RvcyA9IFtdO1xuXG5mdW5jdGlvbiBnZXRUb2RvcygpIHtcbiAgICBpZiAoYWxsVG9kb3MubGVuZ3RoIDwgMSkge1xuICAgICAgICAvL2FkZFRvZG8oXCJ0ZXN0XCIsIFwic3R1cGlkIHN0dWZmXCIsIFwiMTYvMy8xOTk4XCIsIFwiaGlnaFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGFsbFRvZG9zO1xufVxuXG5mdW5jdGlvbiBnZXRUb2Rvc0J5SUQoaW5kZXhlcykge1xuICAgIGNvbnN0IHRvZG9zID0gW107XG4gICAgaW5kZXhlcy5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgdG9kb3MucHVzaChhbGxUb2Rvc1tpbmRleF0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0b2Rvcztcbn1cblxuZnVuY3Rpb24gYWRkVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgY29uc3QgdG9kbyA9IFRvRG9GYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpO1xuICAgIHRvZG8uaWQgPSBhbGxUb2Rvcy5sZW5ndGg7XG4gICAgYWxsVG9kb3MucHVzaCh0b2RvKTtcblxuICAgIGNyZWF0ZVRvZG9zKGdldFRvZG9zKCkpO1xuICAgIHJldHVybiB0b2RvLmlkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2Rvcyh0b2Rvcykge1xuICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2Rvc1wiKTtcbiAgICByZW1vdmVBbGxDaGlsZHJlbih0b2Rvc0NvbnRhaW5lcik7XG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgaWYodG9kbyA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBpdGVtID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWl0ZW1cIiwgdG9kby5pZC50b1N0cmluZygpKTtcbiAgICAgICAgY29uc3QgbGVmdENvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwidG9kby1pdGVtLWxlZnRcIik7XG4gICAgICAgIGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWl0ZW0tcmlnaHRcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwidG9kby10aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLmdldFRpdGxlKCk7XG4gICAgICAgIGFwcGVuZENoaWxkSGVscGVyKGxlZnRDb250YWluZXIsIHRpdGxlKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGNyZWF0ZUhUTUxFbGVtZW50KFwicFwiLCBcInRvZG8tZHVlLWRhdGVcIik7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvLmdldER1ZURhdGUoKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRIZWxwZXIocmlnaHRDb250YWluZXIsIGR1ZURhdGUpO1xuICAgICAgICBhcHBlbmRDaGlsZEhlbHBlcihpdGVtLCBbbGVmdENvbnRhaW5lciwgcmlnaHRDb250YWluZXJdKTtcbiAgICAgICAgYWRkVG9kb0V2ZW50KGl0ZW0pO1xuICAgICAgICBhcHBlbmRDaGlsZEhlbHBlcih0b2Rvc0NvbnRhaW5lciwgaXRlbSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUb2RvKHRvZG9JRCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIGNvbnN0IG5ld1RvZG8gPSBUb0RvRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgICBuZXdUb2RvLmlkID0gdG9kb0lEO1xuICAgIGFsbFRvZG9zLnNwbGljZSh0b2RvSUQsIDEsIG5ld1RvZG8pO1xuICAgIHJlbmRlckFsbFRvZG9zKCk7XG4gICAgcmV0dXJuIG5ld1RvZG8uaWQ7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvRGV0YWlscyh0b2RvSUQpIHtcbiAgICBjb25zdCB0b2RvTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvZG9JRCk7XG4gICAgY29uc3QgcGFyZW50ID0gdG9kb05vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zdCBwcmV2RGV0YWlsZWRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWRldGFpbGVkLWNvbnRhaW5lclwiKTtcbiAgICBpZiAocHJldkRldGFpbGVkVG9kbyAhPT0gbnVsbCkge1xuICAgICAgICBjcmVhdGVUb2RvcyhnZXRUb2RvcygpKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9kb0lEKS5yZW1vdmUoKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwidG9kby1kZXRhaWxlZC1jb250YWluZXJcIik7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInRvZG8tZGV0YWlsZWRcIik7XG4gICAgY29uc3QgdGl0bGVBcmVhID0gY3JlYXRlVGl0bGVBcmVhKCk7XG4gICAgdGl0bGVBcmVhLnZhbHVlID0gZ2V0VG9kb3MoKVt0b2RvSURdLmdldFRpdGxlKCk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25BcmVhID0gY3JlYXRlRGVzY3JpcHRpb25BcmVhKCk7XG4gICAgZGVzY3JpcHRpb25BcmVhLnZhbHVlID0gZ2V0VG9kb3MoKVt0b2RvSURdLmdldERlc2NyaXB0aW9uKCk7XG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGNyZWF0ZURhdGVDb250YWluZXIoKTtcbiAgICBkYXRlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHktc2xpZGVyXCIpLnZhbHVlID0gZ2V0VG9kb3MoKVt0b2RvSURdLmdldFByaW9yaXR5KCk7XG4gICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGNyZWF0ZUNvbmZpcm1CdXR0b24oKTtcbiAgICBjb25maXJtQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1kZXRhaWxlZC1jb25maXJtXCIpO1xuICAgIGFkZERldGFpbGVkQ29uZmlybUJ1dHRvbkV2ZW50KGNvbmZpcm1CdXR0b24sIHRvZG9JRCk7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBjcmVhdGVDbG9zZUJ1dHRvbigpO1xuICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1kZXRhaWxlZC1jbG9zZVwiKTtcbiAgICBhZGREZXRhaWxlZENsb3NlQnV0dG9uRXZlbnQoY2xvc2VCdXR0b24pO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRhaW5lciwgYXBwZW5kQ2hpbGRIZWxwZXIodG9kb0Zvcm0sIFt0aXRsZUFyZWEsIGRlc2NyaXB0aW9uQXJlYSwgZGF0ZUNvbnRhaW5lcl0pKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250YWluZXIsIFtjb25maXJtQnV0dG9uLCBjbG9zZUJ1dHRvbl0pO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKHBhcmVudCwgY29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVG9kbyh0b2RvSUQpIHtcbiAgICBhbGxUb2Rvc1t0b2RvSURdID0gbnVsbDtcbiAgICBkZWxldGVJdGVtRnJvbVByb2plY3QodG9kb0lEKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWxsVG9kb3MoKSB7XG4gICAgY3JlYXRlVG9kb3MoZ2V0VG9kb3MoKSk7XG59XG5cbmV4cG9ydCB7IGFkZFRvZG8sIGdldFRvZG9zLCBjcmVhdGVUb2RvcywgZWRpdFRvZG8sIGRpc3BsYXlUb2RvRGV0YWlscywgZ2V0VG9kb3NCeUlELCByZW5kZXJBbGxUb2RvcyB9O1xuXG4iLCJpbXBvcnQgeyBiaW5kQ2xpY2tFdmVudHMgfSBmcm9tIFwiLi9iaW5kQ2xpY2tFdmVudHNcIjtcbmltcG9ydCB7IGFwcGVuZENoaWxkSGVscGVyLCBjcmVhdGVIVE1MRWxlbWVudCB9IGZyb20gXCIuL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7IGdldFRvZG9zLCBjcmVhdGVUb2RvcyB9IGZyb20gXCIuL3RvZG9JdGVtc1wiO1xuaW1wb3J0IHsgY3JlYXRlTmV3VGFza0J1dHRvbiB9IGZyb20gXCIuL25ld1Rhc2tcIjtcbmltcG9ydCB7IGFkZEhvbWVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld0FkZEJ1dHRvbiB9IGZyb20gXCIuL2FkZEJ1dHRvblwiO1xuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbiB9IGZyb20gXCIuL25ld1Byb2plY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyRWxlbWVudCgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImhlYWRlclwiLCBcImhlYWRlclwiLCBcImhlYWRlclwiKTtcbiAgICBjb25zdCBoZWFkZXJMZWZ0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXItbGVmdFwiLCBcImhlYWRlci1sZWZ0XCIpO1xuICAgIGNvbnN0IGhlYWRlckxvZ28gPSBjcmVhdGVIVE1MRWxlbWVudChcImgxXCIsIFwiaGVhZGVyLWxvZ29cIiwgXCJoZWFkZXItbG9nb1wiKTtcbiAgICBoZWFkZXJMb2dvLnRleHRDb250ZW50ID0gXCJ0b2RvLWxpc3RcIlxuICAgIGhlYWRlckxlZnQuYXBwZW5kQ2hpbGQoaGVhZGVyTG9nbyk7XG4gICAgY29uc3QgaGVhZGVyUmlnaHQgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcImhlYWRlci1yaWdodFwiLCBcImhlYWRlci1yaWdodFwiKTtcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwibGFiZWxcIiwgXCJzd2l0Y2hcIiwgXCJkYXJrLW1vZGUtc3dpdGNoXCIpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbnB1dFwiLCBcIlwiLCBcImRhcmstbW9kZS1jaGVja2JveFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVIVE1MRWxlbWVudChcInNwYW5cIiwgW1wic2xpZGVyXCIsIFwicm91bmRcIl0pO1xuICAgIGNvbnN0IGxhYmVsU3ltYm9sID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwic3dpdGNoLXRleHRcIiwgXCJzd2l0Y2gtdGV4dFwiKTtcbiAgICBsYWJlbFN5bWJvbC50ZXh0Q29udGVudCA9IFwi8J+SoVwiO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGhlYWRlclJpZ2h0LCBbbGFiZWxTeW1ib2wsIGFwcGVuZENoaWxkSGVscGVyKGxhYmVsLCBbaW5wdXQsIHNwYW5dKV0pO1xuXG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoaGVhZGVyLCBbaGVhZGVyTGVmdCwgaGVhZGVyUmlnaHRdKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5FbGVtZW50KCkge1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcIm1haW5cIiwgXCJtYWluXCIpO1xuICAgIGNvbnN0IG1haW5MZWZ0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJtYWluLWxlZnRcIiwgXCJtYWluLWxlZnRcIik7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInByb2plY3RzLWNvbnRhaW5lclwiLCBcInByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwcm9qZWN0c0J1dHRvbiA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiYnV0dG9uXCIsIFwicHJvamVjdHMtYnV0dG9uXCIsIFwicHJvamVjdHMtYnV0dG9uXCIpO1xuICAgIGNvbnN0IHByb2plY3RzQnV0dG9uVGV4dCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwicFwiLCBcInByb2plY3RzLXRleHRcIiwgXCJwcm9qZWN0cy10ZXh0XCIpO1xuICAgIHByb2plY3RzQnV0dG9uVGV4dC5pbm5lckhUTUwgPSBcIjxzcGFuIGlkPVxcXCJwcm9qZWN0cy1zcGFuXFxcIj4+IDwvc3Bhbj5Qcm9qZWN0c1wiO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKHByb2plY3RzQ29udGFpbmVyLCBhcHBlbmRDaGlsZEhlbHBlcihwcm9qZWN0c0J1dHRvbiwgcHJvamVjdHNCdXR0b25UZXh0KSk7XG4gICAgY29uc3QgcHJvamVjdHNDb250ZW50ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0cy1jb250ZW50XCIsIFwicHJvamVjdHMtY29udGVudFwiKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFtcInByb2plY3RzXCJdLCBcInByb2plY3RzXCIpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKG1haW5MZWZ0LCBhcHBlbmRDaGlsZEhlbHBlcihwcm9qZWN0c0NvbnRhaW5lciwgYXBwZW5kQ2hpbGRIZWxwZXIocHJvamVjdHNDb250ZW50LCBbcHJvamVjdHMsIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24oKV0pKSk7XG5cbiAgICBjb25zdCBpbXBvcnRhbnRDb250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcImltcG9ydGFudC1jb250YWluZXJcIiwgXCJpbXBvcnRhbnQtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGltcG9ydGFudEJ1dHRvbiA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiYnV0dG9uXCIsIFwiaW1wb3J0YW50LWJ1dHRvblwiLCBcImltcG9ydGFudC1idXR0b25cIik7XG4gICAgY29uc3QgaW1wb3J0YW50QnV0dG9uVGV4dCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwicFwiLCBcImltcG9ydGFudC10ZXh0XCIsIFwiaW1wb3J0YW50LXRleHRcIik7XG4gICAgaW1wb3J0YW50QnV0dG9uVGV4dC5pbm5lckhUTUwgPSBcIjxzcGFuIGlkPVxcXCJwcm9qZWN0cy1zcGFuXFxcIj4+IDwvc3Bhbj4gSW1wb3J0YW50XCI7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoaW1wb3J0YW50Q29udGFpbmVyLCBhcHBlbmRDaGlsZEhlbHBlcihpbXBvcnRhbnRCdXR0b24sIGltcG9ydGFudEJ1dHRvblRleHQpKTtcbiAgICBjb25zdCBpbXBvcnRhbnRGb2xkZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBbXCJpbXBvcnRhbnQtZm9sZGVyXCIsIFwic2lkZWJhci1oaWRkZW5cIl0sIFwiaW1wb3J0YW50LWZvbGRlclwiKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihtYWluTGVmdCwgYXBwZW5kQ2hpbGRIZWxwZXIoaW1wb3J0YW50Q29udGFpbmVyLCBpbXBvcnRhbnRGb2xkZXIpKTtcblxuICAgIGNvbnN0IG1haW5DZW50ZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcIm1haW4tY2VudGVyXCIsIFwibWFpbi1jZW50ZXJcIik7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIobWFpbkNlbnRlciwgY3JlYXRlTWFpbkNlbnRlckNvbnRlbnQoKSk7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIobWFpbiwgW21haW5MZWZ0LCBtYWluQ2VudGVyXSk7XG5cbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkNlbnRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwiY2VudGVyLWNvbnRlbnRcIiwgXCJjZW50ZXItY29udGVudFwiKTtcbiAgICBjb25zdCB0b3BDb250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInRvZG8tdG9wLWNvbnRhaW5lclwiLCBcInRvZG8tdG9wLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC10aXRsZS1jb250YWluZXJcIiwgXCJwcm9qZWN0LXRpdGxlLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaDJcIiwgXCJ0b2RvLXBhZ2UtdGl0bGVcIiwgXCJ0b2RvLXBhZ2UtdGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBjb25zdCBkdWVEYXRlID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwiXCIsIFwidG9kby1wYWdlLWR1ZS1kYXRlXCIpO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGVudCwgYXBwZW5kQ2hpbGRIZWxwZXIodG9wQ29udGFpbmVyLCBbdGl0bGUsIGR1ZURhdGVdKSk7XG5cbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwidG9kb3NcIiwgXCJ0b2Rvc1wiKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250ZW50LCB0YXNrc0NvbnRhaW5lcik7XG5cblxuICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRlbnQsIGNyZWF0ZU5ld1Rhc2tCdXR0b24oKSk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxXZWJwYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyRWxlbWVudCgpO1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVNYWluRWxlbWVudCgpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRlbnREaXYsIFtoZWFkZXIsIG1haW5dKTtcbiAgICBhZGRIb21lUHJvamVjdCgpO1xuICAgIGNyZWF0ZVRvZG9zKGdldFRvZG9zKCkpO1xuICAgIGJpbmRDbGlja0V2ZW50cygpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVJbml0aWFsV2VicGFnZSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgY3JlYXRlSW5pdGlhbFdlYnBhZ2UgfSBmcm9tIFwiLi93ZWJwYWdlXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuY3JlYXRlSW5pdGlhbFdlYnBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=