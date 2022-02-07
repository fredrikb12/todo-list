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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --darkBlue: hsl(240, 41%, 7%);\n    --lightGreyBlue: #CECFED;\n    --dimOrange: #ff6a50;\n    --dimRed: #ff5233;\n    --lightPink: #ffd4da;\n    --dimWhite: #e5e6e7;\n    --mildBlueWhite: #f1f1ff;\n    --brightRed: #ec4141;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    font-family: 'Montserrat', sans-serif;\n}\n\nbody {\n    background-color: var(--bgColor);\n    height: 100vh;\n}\n\n#content {\n    height: 100%;\n}\n\n.dark-theme {\n    --headerBg: var(--darkBlue);\n    --headerText: var(--lightGreyBlue);\n    --headerBorder: #FFFFFF;\n    --sidebarBg: var(--darkBlue);\n    --importantButtonHover: #ff8670;\n    --importantText: var(--dimOrange);\n    --importantTextHover: var(--dimRed);\n    --folderHover: var(--lightPink);\n    --todoText: var(--dimWhite);\n    --todoTextHover: none;\n    --todoBorder: #c5c6c72f;\n    --bgColor: #2b2d44;\n    --footerText: #f1f1ffd2;\n    --projectText: var(--mildBlueWhite);\n    --projectHoverText: #ffd4da;\n    --projectBg: var(--darkBlue);\n    --filter: invert(93%) sepia(100%) saturate(28%) hue-rotate(223deg) brightness(105%) contrast(103%);\n}\n\n.light-theme {\n    --headerBg: hsl(0, 50%, 60%);\n    --headerText: white;\n    --headerBorder: black;\n    --sidebarBg: hsl(240, 12%, 76%);\n    --importantButtonHover: #8a0000;\n    --importantText: #0e0c0c;\n    --importantTextHover: black;\n    --folderHover: black;\n    --todoText: black;\n    --todoBorder: #535353cb;\n    --bgColor: hsl(240, 9%, 86%);\n    --footerText: white;\n    --projectText: hsl(240, 66%, 9%);\n    --projectHoverText: hsl(0, 0%, 0%);\n    --projectBg: hsl(240, 12%, 76%);\n    --filter: none;\n}\n\n.header {\n    display: flex;\n    background-color: var(--headerBg);\n    color: var(--headerText);\n    padding: 10px;\n    font-size: 20px;\n    border-bottom: 1px solid var(--headerBorder);\n    height: 8%;\n}\n\n.header-left,\n.header-right {\n    width: 50%;\n    min-height: 60px;\n}\n\n.header-left {\n    display: flex;\n    align-items: center;\n}\n\n.header-logo {\n    margin-left: 25%;\n}\n\n.header-right {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-size: 28px;\n    gap: 10px;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 32px;\n    font-size: 22px;\n    margin-bottom: -1px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\ninput:checked + .slider {\n    background-color: #0d65ad;\n}\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n}\n\n.slider.round {\n    border-radius: 34px;\n}\n  \n.slider.round:before {\n    border-radius: 50%;\n}\n\n.main {\n    display: flex;\n    height: 86%;\n    min-height: 840px;\n    overflow: auto;\n\n}\n.main-left {\n    width: 20%;\n    display: flex;\n    flex-direction: column;\n    border-right: 1px solid #706b6b;\n    background-color: var(--sidebarBg);\n    margin-top: 1px;\n}\n.main-center {\n    width: 80%;\n    display: flex;\n    justify-content: center;\n    margin-top: 100px;\n}\n\n.projects-button,\n.important-button {\n    border: none;\n    margin-top: -2px;\n    min-height: 40px;\n    font-size: 20px;\n    font-weight: 700;\n    color: var(--projectText);\n    padding: 5px;\n    background-color: var(--projectBg);\n    padding-left: 25px;\n}\n\n.projects-button:hover, \n.important-button:hover {\n    color: var(--importantButtonHover);\n    cursor: pointer;\n}\n\n.projects-container,\n.important-container {\n    border-bottom: 1px solid #e4e5ff;\n    overflow: auto;\n    background-color: var(--projectBg);\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 5px;\n    padding: 0 0 15px;\n}\n\n.important-folder {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n}\n\n.important-item {\n    color: var(--importantText);\n    font-size: 16px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 4px;\n    width: 80%;\n}\n\n.important-item:hover {\n    color: var(--importantTextHover);\n    cursor: pointer;\n}\n\n.projects-text,\n.important-text {\n    width: 200px;\n    text-align: left;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.projects-item-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.projects-item {\n    color: var(--projectText);\n    font-size: 21px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 4px;\n    width: 80%;\n}\n\n.projects-item-delete {\n    filter: var(--filter); \n    opacity: 0.6;\n}\n\n.projects-item-delete:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.projects-item:hover {\n    color: var(--projectHoverText);\n    cursor: pointer;\n}\n\n#new-project-button-container {\n    align-self: start;\n}\n\n.projects-content.sidebar-hidden,\n.important-folder.sidebar-hidden {\n    display: none;\n}\n\n#projects-span, \n#important-span {\n    color: var(--projectText);\n    font-size: 15px;\n}\n\n.center-content {\n    width: 50%;\n}\n\n.todo-top-container {\n    color: var(--todoText);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 10px;\n    padding-right: 45px;\n}\n\n.todo-top-container > p {\n    font-size: 22px;\n}\n\n.todo-add-container {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 5px 8px;\n    opacity: 0.5;\n}\n\n.todo-add-container:hover, \n.new-project-button:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.todo-add-container > p {\n    color: var(--todoText);\n    font-size: 22px;\n}\n\n.add-image, .task-button {\n    width: 22px;\n    height: 22px;\n    filter: var(--filter);\n}\n\n.todo-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: var(--todoText);\n    font-size: 22px;\n    border-top: 1px solid var(--todoBorder);\n    border-bottom: 1px solid var(--todoBorder);\n    padding: 4px 8px;\n    margin-top: -1px;\n}\n\n.todo-item-right {\n    display: flex;\n    align-items: center;\n    gap: 30px;\n}\n\n.delete-todo-button {\n    filter: var(--filter);\n    opacity: 0.6;\n    width: 30px;\n    height: 30px;\n}\n\n.delete-todo-button:hover {\n    opacity: 0.9;\n}\n\n.todo-title {\n    max-width: 400px;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.todo-due-date {\n    font-size: 16px;\n}\n\n.todo-item:hover {\n    color: var(--todoText);\n    cursor: pointer;\n    border-top-color: #c5c6c7b0;\n    border-bottom-color: #c5c6c7b0;\n}\n\n.new-todo-form,\n.todo-detailed, \n.new-project-form {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid #294552;\n    padding: 4px;\n    border-radius: 6px;\n    margin-top: 12px;\n}\n\n.new-project-form {\n    border: 1px solid #C5C6C7;\n}\n\n.new-todo-form {\n    border-color: #00070a;\n    background-color: var(--bgColor);\n}\n\n.textarea {\n    background-color: var(--bgColor);\n    border: none;\n    resize: none;\n    outline: none;\n    color: white;\n    font-size: 18px;\n}\n\n.new-project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    width: 80%;\n}\n\n.new-project-button {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n    color: var(--projectText);\n    font-size: 16px;\n    opacity: 0.6;\n    margin: 10px 0 5px;\n}\n\n.projects-content {\n    display: flex;\n    flex-direction: column;\n    margin-left: 10%;\n}\n\n.new-project-form .textarea {\n    background-color: hsl(240, 41%, 7%);\n    font-size: 16px;\n    padding: 3px;\n    \n}\n\n.textarea::placeholder {\n    opacity: 1;\n}\n\n.task-button {\n    opacity: 0.6;\n    margin-top: 5px;\n    margin-right: 5px;\n    width: 28px;\n    height: 28px;\n}\n\n.task-button:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.red-text::placeholder {\n    color: var(--brightRed);\n}\n\n.project-selector {\n    color: var(--todoText);\n    background-color: var(--bgColor);\n    padding: 2px;\n    margin-bottom: -2px;\n}\n\n.slider-container {\n    margin-bottom: 8px;\n}\n\n.due-date-picker {\n    width: 150px;\n    background-color: var(--bgColor);\n    color: var(--todoText);\n    margin-top: 5px;\n}\n\n.due-date-picker::-webkit-calendar-picker-indicator {\n    filter: var(--filter);\n}\n\n.date-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n}\n\n.prio-text {\n    color: var(--todoText);\n    font-size: 18px;\n    text-align: center;\n}\n\n.footer-container {\n    display: flex;\n    align-items: center;\n    color: var(--footerText);\n    background-color: hsla(240, 17%, 16%, 0.719);\n    border-top: 1px solid #706b6b;\n    height: 70px;\n}\n\n#footer-left {\n    display: flex;\n    justify-content: flex-end;\n    width: 50%;\n    margin-right: 7px;\n}\n\n#footer-right {\n    display: flex;\n    justify-content: flex-start;\n    width: 50%;\n    margin-left: 7px;\n}\n\n.github-image {\n    filter: var(--filter);\n    opacity: 0.6;\n}\n\n.github-image:hover {\n    opacity: 1;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --darkBlue: hsl(240, 41%, 7%);\n    --lightGreyBlue: #CECFED;\n    --dimOrange: #ff6a50;\n    --dimRed: #ff5233;\n    --lightPink: #ffd4da;\n    --dimWhite: #e5e6e7;\n    --mildBlueWhite: #f1f1ff;\n    --brightRed: #ec4141;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    font-family: 'Montserrat', sans-serif;\n}\n\nbody {\n    background-color: var(--bgColor);\n    height: 100vh;\n}\n\n#content {\n    height: 100%;\n}\n\n.dark-theme {\n    --headerBg: var(--darkBlue);\n    --headerText: var(--lightGreyBlue);\n    --headerBorder: #FFFFFF;\n    --sidebarBg: var(--darkBlue);\n    --importantButtonHover: #ff8670;\n    --importantText: var(--dimOrange);\n    --importantTextHover: var(--dimRed);\n    --folderHover: var(--lightPink);\n    --todoText: var(--dimWhite);\n    --todoTextHover: none;\n    --todoBorder: #c5c6c72f;\n    --bgColor: #2b2d44;\n    --footerText: #f1f1ffd2;\n    --projectText: var(--mildBlueWhite);\n    --projectHoverText: #ffd4da;\n    --projectBg: var(--darkBlue);\n    --filter: invert(93%) sepia(100%) saturate(28%) hue-rotate(223deg) brightness(105%) contrast(103%);\n}\n\n.light-theme {\n    --headerBg: hsl(0, 50%, 60%);\n    --headerText: white;\n    --headerBorder: black;\n    --sidebarBg: hsl(240, 12%, 76%);\n    --importantButtonHover: #8a0000;\n    --importantText: #0e0c0c;\n    --importantTextHover: black;\n    --folderHover: black;\n    --todoText: black;\n    --todoBorder: #535353cb;\n    --bgColor: hsl(240, 9%, 86%);\n    --footerText: white;\n    --projectText: hsl(240, 66%, 9%);\n    --projectHoverText: hsl(0, 0%, 0%);\n    --projectBg: hsl(240, 12%, 76%);\n    --filter: none;\n}\n\n.header {\n    display: flex;\n    background-color: var(--headerBg);\n    color: var(--headerText);\n    padding: 10px;\n    font-size: 20px;\n    border-bottom: 1px solid var(--headerBorder);\n    height: 8%;\n}\n\n.header-left,\n.header-right {\n    width: 50%;\n    min-height: 60px;\n}\n\n.header-left {\n    display: flex;\n    align-items: center;\n}\n\n.header-logo {\n    margin-left: 25%;\n}\n\n.header-right {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-size: 28px;\n    gap: 10px;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 32px;\n    font-size: 22px;\n    margin-bottom: -1px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\ninput:checked + .slider {\n    background-color: #0d65ad;\n}\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n}\n\n.slider.round {\n    border-radius: 34px;\n}\n  \n.slider.round:before {\n    border-radius: 50%;\n}\n\n.main {\n    display: flex;\n    height: 86%;\n    min-height: 840px;\n    overflow: auto;\n\n}\n.main-left {\n    width: 20%;\n    display: flex;\n    flex-direction: column;\n    border-right: 1px solid #706b6b;\n    background-color: var(--sidebarBg);\n    margin-top: 1px;\n}\n.main-center {\n    width: 80%;\n    display: flex;\n    justify-content: center;\n    margin-top: 100px;\n}\n\n.projects-button,\n.important-button {\n    border: none;\n    margin-top: -2px;\n    min-height: 40px;\n    font-size: 20px;\n    font-weight: 700;\n    color: var(--projectText);\n    padding: 5px;\n    background-color: var(--projectBg);\n    padding-left: 25px;\n}\n\n.projects-button:hover, \n.important-button:hover {\n    color: var(--importantButtonHover);\n    cursor: pointer;\n}\n\n.projects-container,\n.important-container {\n    border-bottom: 1px solid #e4e5ff;\n    overflow: auto;\n    background-color: var(--projectBg);\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 5px;\n    padding: 0 0 15px;\n}\n\n.important-folder {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n}\n\n.important-item {\n    color: var(--importantText);\n    font-size: 16px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 4px;\n    width: 80%;\n}\n\n.important-item:hover {\n    color: var(--importantTextHover);\n    cursor: pointer;\n}\n\n.projects-text,\n.important-text {\n    width: 200px;\n    text-align: left;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.projects-item-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.projects-item {\n    color: var(--projectText);\n    font-size: 21px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 4px;\n    width: 80%;\n}\n\n.projects-item-delete {\n    filter: var(--filter); \n    opacity: 0.6;\n}\n\n.projects-item-delete:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.projects-item:hover {\n    color: var(--projectHoverText);\n    cursor: pointer;\n}\n\n#new-project-button-container {\n    align-self: start;\n}\n\n.projects-content.sidebar-hidden,\n.important-folder.sidebar-hidden {\n    display: none;\n}\n\n#projects-span, \n#important-span {\n    color: var(--projectText);\n    font-size: 15px;\n}\n\n.center-content {\n    width: 50%;\n}\n\n.todo-top-container {\n    color: var(--todoText);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 10px;\n    padding-right: 45px;\n}\n\n.todo-top-container > p {\n    font-size: 22px;\n}\n\n.todo-add-container {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 5px 8px;\n    opacity: 0.5;\n}\n\n.todo-add-container:hover, \n.new-project-button:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.todo-add-container > p {\n    color: var(--todoText);\n    font-size: 22px;\n}\n\n.add-image, .task-button {\n    width: 22px;\n    height: 22px;\n    filter: var(--filter);\n}\n\n.todo-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: var(--todoText);\n    font-size: 22px;\n    border-top: 1px solid var(--todoBorder);\n    border-bottom: 1px solid var(--todoBorder);\n    padding: 4px 8px;\n    margin-top: -1px;\n}\n\n.todo-item-right {\n    display: flex;\n    align-items: center;\n    gap: 30px;\n}\n\n.delete-todo-button {\n    filter: var(--filter);\n    opacity: 0.6;\n    width: 30px;\n    height: 30px;\n}\n\n.delete-todo-button:hover {\n    opacity: 0.9;\n}\n\n.todo-title {\n    max-width: 400px;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.todo-due-date {\n    font-size: 16px;\n}\n\n.todo-item:hover {\n    color: var(--todoText);\n    cursor: pointer;\n    border-top-color: #c5c6c7b0;\n    border-bottom-color: #c5c6c7b0;\n}\n\n.new-todo-form,\n.todo-detailed, \n.new-project-form {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid #294552;\n    padding: 4px;\n    border-radius: 6px;\n    margin-top: 12px;\n}\n\n.new-project-form {\n    border: 1px solid #C5C6C7;\n}\n\n.new-todo-form {\n    border-color: #00070a;\n    background-color: var(--bgColor);\n}\n\n.textarea {\n    background-color: var(--bgColor);\n    border: none;\n    resize: none;\n    outline: none;\n    color: white;\n    font-size: 18px;\n}\n\n.new-project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    width: 80%;\n}\n\n.new-project-button {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n    color: var(--projectText);\n    font-size: 16px;\n    opacity: 0.6;\n    margin: 10px 0 5px;\n}\n\n.projects-content {\n    display: flex;\n    flex-direction: column;\n    margin-left: 10%;\n}\n\n.new-project-form .textarea {\n    background-color: hsl(240, 41%, 7%);\n    font-size: 16px;\n    padding: 3px;\n    \n}\n\n.textarea::placeholder {\n    opacity: 1;\n}\n\n.task-button {\n    opacity: 0.6;\n    margin-top: 5px;\n    margin-right: 5px;\n    width: 28px;\n    height: 28px;\n}\n\n.task-button:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.red-text::placeholder {\n    color: var(--brightRed);\n}\n\n.project-selector {\n    color: var(--todoText);\n    background-color: var(--bgColor);\n    padding: 2px;\n    margin-bottom: -2px;\n}\n\n.slider-container {\n    margin-bottom: 8px;\n}\n\n.due-date-picker {\n    width: 150px;\n    background-color: var(--bgColor);\n    color: var(--todoText);\n    margin-top: 5px;\n}\n\n.due-date-picker::-webkit-calendar-picker-indicator {\n    filter: var(--filter);\n}\n\n.date-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n}\n\n.prio-text {\n    color: var(--todoText);\n    font-size: 18px;\n    text-align: center;\n}\n\n.footer-container {\n    display: flex;\n    align-items: center;\n    color: var(--footerText);\n    background-color: hsla(240, 17%, 16%, 0.719);\n    border-top: 1px solid #706b6b;\n    height: 70px;\n}\n\n#footer-left {\n    display: flex;\n    justify-content: flex-end;\n    width: 50%;\n    margin-right: 7px;\n}\n\n#footer-right {\n    display: flex;\n    justify-content: flex-start;\n    width: 50%;\n    margin-left: 7px;\n}\n\n.github-image {\n    filter: var(--filter);\n    opacity: 0.6;\n}\n\n.github-image:hover {\n    opacity: 1;\n}\n\n\n"],"sourceRoot":""}]);
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
/* harmony export */   "addDeleteTodoEvent": () => (/* binding */ addDeleteTodoEvent),
/* harmony export */   "addLightSwitchEvent": () => (/* binding */ addLightSwitchEvent)
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

function addLightSwitchEvent(switchInput) {
    switchInput.addEventListener("change", () => {
        document.body.classList.toggle("light-theme");
        if (typeof Storage !== undefined) {
            if (JSON.parse(localStorage.prefersDarkMode) === true) {
                localStorage.prefersDarkMode = JSON.stringify(false);
            } else {
                localStorage.prefersDarkMode = JSON.stringify(true);
            }
        }
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
        if (e.target.classList.contains("delete-todo-button")) return;
        if ([...document.querySelectorAll(".delete-todo-button")].includes(e.target)) return;
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
/* harmony export */   "getLocalProjects": () => (/* binding */ getLocalProjects),
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
        if(projects[i] == null) continue;
        if (projects[i].title === title) return;
    }
    projects.push({
        title: title,
        items: [],
    });
    projects[projects.length - 1].index = projects.length - 1;
    updateLocalProjects();
    renderProjects();
}

function addHomeProject() {
    addProject("Home");
}

function addItemToProject(todoID, projectIndex) {
    projects.forEach(project => {
        if (project == null || project == undefined) return;
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
    updateLocalProjects();
}

function deleteItemFromProject(todoID) {
    let projectTitle;
    getProjects().forEach(project => {
        if (project == null || project == undefined) return;
        if (project.items.includes(+todoID)) {
            project.items.splice(todoID, 1, "");
            projectTitle = project.title;
        }
    });
    (0,_todoItems__WEBPACK_IMPORTED_MODULE_1__.createTodos)((0,_todoItems__WEBPACK_IMPORTED_MODULE_1__.getTodosByID)(getIDsOfProject(getProjectIndexByTitle(projectTitle))));
    updateLocalProjects();
}

function deleteProject(projectIndex) {
    console.log(`Deleting project with index ${projectIndex}`);
    const projectToDelete = getProjects()[projectIndex];
    getProjects()[projectIndex].items.forEach(index => {
        console.log(`Assigning todo with index ${index} to home project`);
        console.log((0,_todoItems__WEBPACK_IMPORTED_MODULE_1__.getTodos)()[index]);
        (0,_todoItems__WEBPACK_IMPORTED_MODULE_1__.getTodos)()[index].setProject("Home");
        console.log((0,_todoItems__WEBPACK_IMPORTED_MODULE_1__.getTodos)()[index].getProject());
    });
    getProjects().splice(projectIndex, 1, null);
    updateLocalProjects();
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
        if (projects[i] == null) continue;
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
        if(project == null) return;
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

function getLocalProjects() {
    JSON.parse(localStorage.projects).forEach(project => {
        projects.push(project);
    })
    //projects = JSON.parse(localStorage.projects);
    console.log("Getting Local projects: ");
    console.log(projects);
    renderProjects();
}

function updateLocalProjects() {
    localStorage.projects = JSON.stringify(projects);
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

/***/ "./src/todoItem.js":
/*!*************************!*\
  !*** ./src/todoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoItem": () => (/* binding */ todoItem)
/* harmony export */ });
class todoItem {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }

    getTitle() {
        return this.title;
    }

    setTitle(input) {
        this.title = input;
    }

    getDescription() {
        return this.description;
    }

    setDescription(input) {
        this.description = input;
    }

    getDueDate() {
        return this.dueDate;
    }

    setDueDate(input) {
        this.dueDate = input;
    }

    getPriority() {
        return this.priority;
    }

    setPriority(input) {
        this.priority = input;
    }

    getProject() {
        return this.project;
    }

    setProject(input) {
        this.project = input;
    }

}



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
/* harmony export */   "getLocalTodos": () => (/* binding */ getLocalTodos),
/* harmony export */   "renderAllTodos": () => (/* binding */ renderAllTodos)
/* harmony export */ });
/* harmony import */ var _domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelpers */ "./src/domHelpers.js");
/* harmony import */ var _bindClickEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bindClickEvents */ "./src/bindClickEvents.js");
/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newTask */ "./src/newTask.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.js");
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
    const todo = new _todoItem__WEBPACK_IMPORTED_MODULE_4__.todoItem(title, description, dueDate, priority, project);
    todo.id = allTodos.length;
    allTodos.push(todo);

    createTodos(getTodos());
    renderImportantTodos();
    console.log(todo);
    updateLocalTodos();
    return todo.id;
}

function createTodos(todos) {
    if (todos === []) {
        return null;
    }
    const todosContainer = document.getElementById("todos");
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(todosContainer);
    todos.forEach(todo => {
        if (!todo) return;
        const item = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "todo-item", todo.id.toString());
        const leftContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "todo-item-left");
        const rightContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "todo-item-right");
        const title = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("p", "todo-title");
        title.textContent = todo.getTitle();
        (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(leftContainer, title);
        const dueDate = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("p", "todo-due-date");
        dueDate.textContent = todo.getDueDate();
        const deleteButton = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("img", "delete-todo-button", "");
        deleteButton.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_5__;
        (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_1__.addDeleteTodoEvent)(deleteButton);
        (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(rightContainer, [dueDate, deleteButton]);
        (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(item, [leftContainer, rightContainer]);
        (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_1__.addTodoEvent)(item);
        (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(todosContainer, item);
    });
}

function editTodo(todoID, title, description, dueDate, priority, project) {
    const newTodo = new _todoItem__WEBPACK_IMPORTED_MODULE_4__.todoItem(title, description, dueDate, priority, project);
    newTodo.id = todoID;
    allTodos.splice(todoID, 1, newTodo);
    renderAllTodos();
    updateLocalTodos();
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

    const container = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "todo-detailed-container");
    const todoForm = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "todo-detailed");
    const titleArea = (0,_newTask__WEBPACK_IMPORTED_MODULE_2__.createTitleArea)();
    titleArea.value = getTodos()[todoID].getTitle();
    const descriptionArea = (0,_newTask__WEBPACK_IMPORTED_MODULE_2__.createDescriptionArea)();
    descriptionArea.value = getTodos()[todoID].getDescription();
    const dateContainer = (0,_newTask__WEBPACK_IMPORTED_MODULE_2__.createDateContainer)(false, todoID);
    dateContainer.querySelector(".priority-slider").value = getTodos()[todoID].getPriority();
    dateContainer.querySelector(".date-container .due-date-picker").value = getTodos()[todoID].getDueDate();
    const confirmButton = (0,_newTask__WEBPACK_IMPORTED_MODULE_2__.createConfirmButton)();
    confirmButton.setAttribute("id", "todo-detailed-confirm");
    (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_1__.addDetailedConfirmButtonEvent)(confirmButton, todoID);
    const closeButton = (0,_newTask__WEBPACK_IMPORTED_MODULE_2__.createCloseButton)();
    closeButton.setAttribute("id", "todo-detailed-close");
    (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_1__.addDetailedCloseButtonEvent)(closeButton);
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(container, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(todoForm, [titleArea, descriptionArea, dateContainer]));
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(container, [confirmButton, closeButton]);
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(parent, container);
}

function deleteTodo(todoID) {
    allTodos[todoID] = null;
    (0,_projects__WEBPACK_IMPORTED_MODULE_3__.deleteItemFromProject)(todoID);
    renderImportantTodos();
    updateLocalTodos();
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
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(container);
    importantTodos.forEach(todo => {
        const newImportantElement = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("p", "important-item");
        newImportantElement.textContent = todo.title + `\xa0 \xa0 \xa0 (${todo.priority})`;
        newImportantElement.dataset.todoid = todo.id;
        newImportantElement.addEventListener("click", (e) => {
            const projects = (0,_projects__WEBPACK_IMPORTED_MODULE_3__.getProjects)();
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
        (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(container, newImportantElement);
    });
}

function getLocalTodos() {
    console.log("Getting local todos: ");
    console.log(JSON.parse(localStorage.todos));
    JSON.parse(localStorage.todos).forEach(todo => {
        if(todo == null) return;
        addTodo(todo.title, todo.description, todo.dueDate, todo.priority, todo.project);
    });
    renderImportantTodos();
}

function updateLocalTodos() {
    console.log("Updating local todos: ");
    localStorage.todos = JSON.stringify(getTodos());
    console.log(JSON.parse(localStorage.todos));
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
/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/github.svg */ "./src/images/github.svg");









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
    (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_0__.addLightSwitchEvent)(input);
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
    const footer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("footer", "footer-container");
    const footerText = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("p", "footer-text");
    footerText.textContent = `Fredrik B ${new Date().getFullYear()} ©`;
    const footerLeft = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "", "footer-left");
    const footerRight = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "", "footer-right");
    const anchor = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("a", "github-anchor");
    anchor.href = "https://github.com/fredrikb12";
    const img = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("img", "github-image");
    img.src = _images_github_svg__WEBPACK_IMPORTED_MODULE_7__;
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(anchor, img);
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(footerLeft, footerText);
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(footerRight, anchor);
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(footer, [footerLeft, footerRight]);
    return footer;

}



function createInitialWebpage() {
    const contentDiv = document.getElementById("content");
    const header = createHeaderElement();
    const main = createMainElement();
    const footer = createFooter();
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(contentDiv, [header, main, footer]);
    if (typeof Storage !== "undefined" && localStorage.length > 0) {
        console.log("getting local projects");
        (0,_projects__WEBPACK_IMPORTED_MODULE_4__.getLocalProjects)();
        (0,_todoItems__WEBPACK_IMPORTED_MODULE_2__.getLocalTodos)();
        if(localStorage.prefersDarkMode == "false") {
            document.body.classList.toggle("light-theme");
            document.getElementById("dark-mode-checkbox").checked = false;
        }
    } else if (typeof Storage !== "undefined" && localStorage.length == 0) {
        console.log("No stored projects, adding home project");
        (0,_projects__WEBPACK_IMPORTED_MODULE_4__.addHomeProject)();
        localStorage.prefersDarkMode = true;
    } else {
        console.log("No local storage available");
        (0,_projects__WEBPACK_IMPORTED_MODULE_4__.addHomeProject)();
    }
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

/***/ }),

/***/ "./src/images/github.svg":
/*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b128a9af225878ee620.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFL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cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FkZEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYmluZENsaWNrRXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21IZWxwZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXdQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXdUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9JdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvd2VicGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1kYXJrQmx1ZTogaHNsKDI0MCwgNDElLCA3JSk7XFxuICAgIC0tbGlnaHRHcmV5Qmx1ZTogI0NFQ0ZFRDtcXG4gICAgLS1kaW1PcmFuZ2U6ICNmZjZhNTA7XFxuICAgIC0tZGltUmVkOiAjZmY1MjMzO1xcbiAgICAtLWxpZ2h0UGluazogI2ZmZDRkYTtcXG4gICAgLS1kaW1XaGl0ZTogI2U1ZTZlNztcXG4gICAgLS1taWxkQmx1ZVdoaXRlOiAjZjFmMWZmO1xcbiAgICAtLWJyaWdodFJlZDogI2VjNDE0MTtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmRhcmstdGhlbWUge1xcbiAgICAtLWhlYWRlckJnOiB2YXIoLS1kYXJrQmx1ZSk7XFxuICAgIC0taGVhZGVyVGV4dDogdmFyKC0tbGlnaHRHcmV5Qmx1ZSk7XFxuICAgIC0taGVhZGVyQm9yZGVyOiAjRkZGRkZGO1xcbiAgICAtLXNpZGViYXJCZzogdmFyKC0tZGFya0JsdWUpO1xcbiAgICAtLWltcG9ydGFudEJ1dHRvbkhvdmVyOiAjZmY4NjcwO1xcbiAgICAtLWltcG9ydGFudFRleHQ6IHZhcigtLWRpbU9yYW5nZSk7XFxuICAgIC0taW1wb3J0YW50VGV4dEhvdmVyOiB2YXIoLS1kaW1SZWQpO1xcbiAgICAtLWZvbGRlckhvdmVyOiB2YXIoLS1saWdodFBpbmspO1xcbiAgICAtLXRvZG9UZXh0OiB2YXIoLS1kaW1XaGl0ZSk7XFxuICAgIC0tdG9kb1RleHRIb3Zlcjogbm9uZTtcXG4gICAgLS10b2RvQm9yZGVyOiAjYzVjNmM3MmY7XFxuICAgIC0tYmdDb2xvcjogIzJiMmQ0NDtcXG4gICAgLS1mb290ZXJUZXh0OiAjZjFmMWZmZDI7XFxuICAgIC0tcHJvamVjdFRleHQ6IHZhcigtLW1pbGRCbHVlV2hpdGUpO1xcbiAgICAtLXByb2plY3RIb3ZlclRleHQ6ICNmZmQ0ZGE7XFxuICAgIC0tcHJvamVjdEJnOiB2YXIoLS1kYXJrQmx1ZSk7XFxuICAgIC0tZmlsdGVyOiBpbnZlcnQoOTMlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgyOCUpIGh1ZS1yb3RhdGUoMjIzZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwMyUpO1xcbn1cXG5cXG4ubGlnaHQtdGhlbWUge1xcbiAgICAtLWhlYWRlckJnOiBoc2woMCwgNTAlLCA2MCUpO1xcbiAgICAtLWhlYWRlclRleHQ6IHdoaXRlO1xcbiAgICAtLWhlYWRlckJvcmRlcjogYmxhY2s7XFxuICAgIC0tc2lkZWJhckJnOiBoc2woMjQwLCAxMiUsIDc2JSk7XFxuICAgIC0taW1wb3J0YW50QnV0dG9uSG92ZXI6ICM4YTAwMDA7XFxuICAgIC0taW1wb3J0YW50VGV4dDogIzBlMGMwYztcXG4gICAgLS1pbXBvcnRhbnRUZXh0SG92ZXI6IGJsYWNrO1xcbiAgICAtLWZvbGRlckhvdmVyOiBibGFjaztcXG4gICAgLS10b2RvVGV4dDogYmxhY2s7XFxuICAgIC0tdG9kb0JvcmRlcjogIzUzNTM1M2NiO1xcbiAgICAtLWJnQ29sb3I6IGhzbCgyNDAsIDklLCA4NiUpO1xcbiAgICAtLWZvb3RlclRleHQ6IHdoaXRlO1xcbiAgICAtLXByb2plY3RUZXh0OiBoc2woMjQwLCA2NiUsIDklKTtcXG4gICAgLS1wcm9qZWN0SG92ZXJUZXh0OiBoc2woMCwgMCUsIDAlKTtcXG4gICAgLS1wcm9qZWN0Qmc6IGhzbCgyNDAsIDEyJSwgNzYlKTtcXG4gICAgLS1maWx0ZXI6IG5vbmU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXJCZyk7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJUZXh0KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taGVhZGVyQm9yZGVyKTtcXG4gICAgaGVpZ2h0OiA4JTtcXG59XFxuXFxuLmhlYWRlci1sZWZ0LFxcbi5oZWFkZXItcmlnaHQge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4uaGVhZGVyLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLWxvZ28ge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cXG4uaGVhZGVyLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG59XFxuXFxuLnNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNjVhZDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuICBcXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDg2JTtcXG4gICAgbWluLWhlaWdodDogODQwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcblxcbn1cXG4ubWFpbi1sZWZ0IHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzcwNmI2YjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhckJnKTtcXG4gICAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG4ubWFpbi1jZW50ZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5wcm9qZWN0cy1idXR0b24sXFxuLmltcG9ydGFudC1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IHZhcigtLXByb2plY3RUZXh0KTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0QmcpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcblxcbi5wcm9qZWN0cy1idXR0b246aG92ZXIsIFxcbi5pbXBvcnRhbnQtYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWltcG9ydGFudEJ1dHRvbkhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyLFxcbi5pbXBvcnRhbnQtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU1ZmY7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0QmcpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBwYWRkaW5nOiAwIDAgMTVweDtcXG59XFxuXFxuLmltcG9ydGFudC1mb2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uaW1wb3J0YW50LWl0ZW0ge1xcbiAgICBjb2xvcjogdmFyKC0taW1wb3J0YW50VGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4uaW1wb3J0YW50LWl0ZW06aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0taW1wb3J0YW50VGV4dEhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtdGV4dCxcXG4uaW1wb3J0YW50LXRleHQge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdHMtaXRlbS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1pdGVtIHtcXG4gICAgY29sb3I6IHZhcigtLXByb2plY3RUZXh0KTtcXG4gICAgZm9udC1zaXplOiAyMXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi5wcm9qZWN0cy1pdGVtLWRlbGV0ZSB7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyKTsgXFxuICAgIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnByb2plY3RzLWl0ZW0tZGVsZXRlOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtaXRlbTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0SG92ZXJUZXh0KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGVudC5zaWRlYmFyLWhpZGRlbixcXG4uaW1wb3J0YW50LWZvbGRlci5zaWRlYmFyLWhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNwcm9qZWN0cy1zcGFuLCBcXG4jaW1wb3J0YW50LXNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdFRleHQpO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5jZW50ZXItY29udGVudCB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi50b2RvLXRvcC1jb250YWluZXIge1xcbiAgICBjb2xvcjogdmFyKC0tdG9kb1RleHQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XFxufVxcblxcbi50b2RvLXRvcC1jb250YWluZXIgPiBwIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4udG9kby1hZGQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50b2RvLWFkZC1jb250YWluZXI6aG92ZXIsIFxcbi5uZXctcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLWFkZC1jb250YWluZXIgPiBwIHtcXG4gICAgY29sb3I6IHZhcigtLXRvZG9UZXh0KTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4uYWRkLWltYWdlLCAudGFzay1idXR0b24ge1xcbiAgICB3aWR0aDogMjJweDtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcik7XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGNvbG9yOiB2YXIoLS10b2RvVGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXRvZG9Cb3JkZXIpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdG9kb0JvcmRlcik7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIG1hcmdpbi10b3A6IC0xcHg7XFxufVxcblxcbi50b2RvLWl0ZW0tcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi5kZWxldGUtdG9kby1idXR0b24ge1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcik7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmRlbGV0ZS10b2RvLWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnRvZG8tZHVlLWRhdGUge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi50b2RvLWl0ZW06aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tdG9kb1RleHQpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci10b3AtY29sb3I6ICNjNWM2YzdiMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2M1YzZjN2IwO1xcbn1cXG5cXG4ubmV3LXRvZG8tZm9ybSxcXG4udG9kby1kZXRhaWxlZCwgXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjk0NTUyO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzVDNkM3O1xcbn1cXG5cXG4ubmV3LXRvZG8tZm9ybSB7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwMDcwYTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxufVxcblxcbi50ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5uZXctcHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXByb2plY3RUZXh0KTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIG1hcmdpbjogMTBweCAwIDVweDtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSAudGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjQwLCA0MSUsIDclKTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIFxcbn1cXG5cXG4udGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRhc2stYnV0dG9uIHtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbn1cXG5cXG4udGFzay1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZWQtdGV4dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tYnJpZ2h0UmVkKTtcXG59XFxuXFxuLnByb2plY3Qtc2VsZWN0b3Ige1xcbiAgICBjb2xvcjogdmFyKC0tdG9kb1RleHQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcbn1cXG5cXG4uc2xpZGVyLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLmR1ZS1kYXRlLXBpY2tlciB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10b2RvVGV4dCk7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLmR1ZS1kYXRlLXBpY2tlcjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXIpO1xcbn1cXG5cXG4uZGF0ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLnByaW8tdGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS10b2RvVGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1mb290ZXJUZXh0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyNDAsIDE3JSwgMTYlLCAwLjcxOSk7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzA2YjZiO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbiNmb290ZXItbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xcbn1cXG5cXG4jZm9vdGVyLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xcbn1cXG5cXG4uZ2l0aHViLWltYWdlIHtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXIpO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi5naXRodWItaW1hZ2U6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0IsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsa0JBQWtC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SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qiw0Q0FBNEM7SUFDNUMsNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tZGFya0JsdWU6IGhzbCgyNDAsIDQxJSwgNyUpO1xcbiAgICAtLWxpZ2h0R3JleUJsdWU6ICNDRUNGRUQ7XFxuICAgIC0tZGltT3JhbmdlOiAjZmY2YTUwO1xcbiAgICAtLWRpbVJlZDogI2ZmNTIzMztcXG4gICAgLS1saWdodFBpbms6ICNmZmQ0ZGE7XFxuICAgIC0tZGltV2hpdGU6ICNlNWU2ZTc7XFxuICAgIC0tbWlsZEJsdWVXaGl0ZTogI2YxZjFmZjtcXG4gICAgLS1icmlnaHRSZWQ6ICNlYzQxNDE7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5kYXJrLXRoZW1lIHtcXG4gICAgLS1oZWFkZXJCZzogdmFyKC0tZGFya0JsdWUpO1xcbiAgICAtLWhlYWRlclRleHQ6IHZhcigtLWxpZ2h0R3JleUJsdWUpO1xcbiAgICAtLWhlYWRlckJvcmRlcjogI0ZGRkZGRjtcXG4gICAgLS1zaWRlYmFyQmc6IHZhcigtLWRhcmtCbHVlKTtcXG4gICAgLS1pbXBvcnRhbnRCdXR0b25Ib3ZlcjogI2ZmODY3MDtcXG4gICAgLS1pbXBvcnRhbnRUZXh0OiB2YXIoLS1kaW1PcmFuZ2UpO1xcbiAgICAtLWltcG9ydGFudFRleHRIb3ZlcjogdmFyKC0tZGltUmVkKTtcXG4gICAgLS1mb2xkZXJIb3ZlcjogdmFyKC0tbGlnaHRQaW5rKTtcXG4gICAgLS10b2RvVGV4dDogdmFyKC0tZGltV2hpdGUpO1xcbiAgICAtLXRvZG9UZXh0SG92ZXI6IG5vbmU7XFxuICAgIC0tdG9kb0JvcmRlcjogI2M1YzZjNzJmO1xcbiAgICAtLWJnQ29sb3I6ICMyYjJkNDQ7XFxuICAgIC0tZm9vdGVyVGV4dDogI2YxZjFmZmQyO1xcbiAgICAtLXByb2plY3RUZXh0OiB2YXIoLS1taWxkQmx1ZVdoaXRlKTtcXG4gICAgLS1wcm9qZWN0SG92ZXJUZXh0OiAjZmZkNGRhO1xcbiAgICAtLXByb2plY3RCZzogdmFyKC0tZGFya0JsdWUpO1xcbiAgICAtLWZpbHRlcjogaW52ZXJ0KDkzJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMjglKSBodWUtcm90YXRlKDIyM2RlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCgxMDMlKTtcXG59XFxuXFxuLmxpZ2h0LXRoZW1lIHtcXG4gICAgLS1oZWFkZXJCZzogaHNsKDAsIDUwJSwgNjAlKTtcXG4gICAgLS1oZWFkZXJUZXh0OiB3aGl0ZTtcXG4gICAgLS1oZWFkZXJCb3JkZXI6IGJsYWNrO1xcbiAgICAtLXNpZGViYXJCZzogaHNsKDI0MCwgMTIlLCA3NiUpO1xcbiAgICAtLWltcG9ydGFudEJ1dHRvbkhvdmVyOiAjOGEwMDAwO1xcbiAgICAtLWltcG9ydGFudFRleHQ6ICMwZTBjMGM7XFxuICAgIC0taW1wb3J0YW50VGV4dEhvdmVyOiBibGFjaztcXG4gICAgLS1mb2xkZXJIb3ZlcjogYmxhY2s7XFxuICAgIC0tdG9kb1RleHQ6IGJsYWNrO1xcbiAgICAtLXRvZG9Cb3JkZXI6ICM1MzUzNTNjYjtcXG4gICAgLS1iZ0NvbG9yOiBoc2woMjQwLCA5JSwgODYlKTtcXG4gICAgLS1mb290ZXJUZXh0OiB3aGl0ZTtcXG4gICAgLS1wcm9qZWN0VGV4dDogaHNsKDI0MCwgNjYlLCA5JSk7XFxuICAgIC0tcHJvamVjdEhvdmVyVGV4dDogaHNsKDAsIDAlLCAwJSk7XFxuICAgIC0tcHJvamVjdEJnOiBoc2woMjQwLCAxMiUsIDc2JSk7XFxuICAgIC0tZmlsdGVyOiBub25lO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyQmcpO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyVGV4dCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWhlYWRlckJvcmRlcik7XFxuICAgIGhlaWdodDogOCU7XFxufVxcblxcbi5oZWFkZXItbGVmdCxcXG4uaGVhZGVyLXJpZ2h0IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWluLWhlaWdodDogNjBweDtcXG59XFxuXFxuLmhlYWRlci1sZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlci1sb2dvIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuXFxuLmhlYWRlci1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG59XFxuXFxuLnN3aXRjaCBpbnB1dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgd2lkdGg6IDI2cHg7XFxuICAgIGxlZnQ6IDRweDtcXG4gICAgYm90dG9tOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDY1YWQ7XFxufVxcblxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG59XFxuXFxuLnNsaWRlci5yb3VuZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcbiAgXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA4NiU7XFxuICAgIG1pbi1oZWlnaHQ6IDg0MHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG5cXG59XFxuLm1haW4tbGVmdCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3MDZiNmI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJCZyk7XFxuICAgIG1hcmdpbi10b3A6IDFweDtcXG59XFxuLm1haW4tY2VudGVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtYnV0dG9uLFxcbi5pbXBvcnRhbnQtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0VGV4dCk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdEJnKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4ucHJvamVjdHMtYnV0dG9uOmhvdmVyLCBcXG4uaW1wb3J0YW50LWJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1pbXBvcnRhbnRCdXR0b25Ib3Zlcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lcixcXG4uaW1wb3J0YW50LWNvbnRhaW5lciB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNWZmO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdEJnKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgcGFkZGluZzogMCAwIDE1cHg7XFxufVxcblxcbi5pbXBvcnRhbnQtZm9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLmltcG9ydGFudC1pdGVtIHtcXG4gICAgY29sb3I6IHZhcigtLWltcG9ydGFudFRleHQpO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLmltcG9ydGFudC1pdGVtOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWltcG9ydGFudFRleHRIb3Zlcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLXRleHQsXFxuLmltcG9ydGFudC10ZXh0IHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnByb2plY3RzLWl0ZW0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtaXRlbSB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0VGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMjFweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4ucHJvamVjdHMtaXRlbS1kZWxldGUge1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcik7IFxcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi5wcm9qZWN0cy1pdGVtLWRlbGV0ZTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWl0ZW06aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdEhvdmVyVGV4dCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI25ldy1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRlbnQuc2lkZWJhci1oaWRkZW4sXFxuLmltcG9ydGFudC1mb2xkZXIuc2lkZWJhci1oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMtc3BhbiwgXFxuI2ltcG9ydGFudC1zcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLXByb2plY3RUZXh0KTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4uY2VudGVyLWNvbnRlbnQge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4udG9kby10b3AtY29udGFpbmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXRvZG9UZXh0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xcbn1cXG5cXG4udG9kby10b3AtY29udGFpbmVyID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLnRvZG8tYWRkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG4gICAgcGFkZGluZzogNXB4IDhweDtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udG9kby1hZGQtY29udGFpbmVyOmhvdmVyLCBcXG4ubmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1hZGQtY29udGFpbmVyID4gcCB7XFxuICAgIGNvbG9yOiB2YXIoLS10b2RvVGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmFkZC1pbWFnZSwgLnRhc2stYnV0dG9uIHtcXG4gICAgd2lkdGg6IDIycHg7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXIpO1xcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBjb2xvcjogdmFyKC0tdG9kb1RleHQpO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS10b2RvQm9yZGVyKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRvZG9Cb3JkZXIpO1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xcbn1cXG5cXG4udG9kby1pdGVtLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uZGVsZXRlLXRvZG8tYnV0dG9uIHtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXIpO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5kZWxldGUtdG9kby1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50b2RvLWR1ZS1kYXRlIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4udG9kby1pdGVtOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXRvZG9UZXh0KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjYzVjNmM3YjA7XFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNjNWM2YzdiMDtcXG59XFxuXFxuLm5ldy10b2RvLWZvcm0sXFxuLnRvZG8tZGV0YWlsZWQsIFxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI5NDU1MjtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0M1QzZDNztcXG59XFxuXFxuLm5ldy10b2RvLWZvcm0ge1xcbiAgICBib3JkZXItY29sb3I6ICMwMDA3MGE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xcbn1cXG5cXG4udGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0VGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBtYXJnaW46IDEwcHggMCA1cHg7XFxufVxcblxcbi5wcm9qZWN0cy1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0gLnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI0MCwgNDElLCA3JSk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBcXG59XFxuXFxuLnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi50YXNrLWJ1dHRvbiB7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG59XFxuXFxuLnRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVkLXRleHQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLWJyaWdodFJlZCk7XFxufVxcblxcbi5wcm9qZWN0LXNlbGVjdG9yIHtcXG4gICAgY29sb3I6IHZhcigtLXRvZG9UZXh0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTJweDtcXG59XFxuXFxuLnNsaWRlci1jb250YWluZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5kdWUtZGF0ZS1waWNrZXIge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tdG9kb1RleHQpO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5kdWUtZGF0ZS1waWNrZXI6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyKTtcXG59XFxuXFxuLmRhdGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcblxcbi5wcmlvLXRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tdG9kb1RleHQpO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvb3Rlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tZm9vdGVyVGV4dCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjQwLCAxNyUsIDE2JSwgMC43MTkpO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzcwNmI2YjtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4jZm9vdGVyLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcXG59XFxuXFxuI2Zvb3Rlci1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcXG59XFxuXFxuLmdpdGh1Yi1pbWFnZSB7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyKTtcXG4gICAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4uZ2l0aHViLWltYWdlOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFwcGVuZENoaWxkSGVscGVyLCBjcmVhdGVIVE1MRWxlbWVudCB9IGZyb20gXCIuL2RvbUhlbHBlcnNcIjtcbmltcG9ydCBhZGRJY29uIGZyb20gXCIuL2ltYWdlcy9hZGQuc3ZnXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0FkZEJ1dHRvbihjb250YWluZXJDbGFzcywgaW1hZ2VDbGFzcywgdGV4dENsYXNzLCB0ZXh0KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgY29udGFpbmVyQ2xhc3MpO1xuICAgIGNvbnN0IGFkZEltYWdlID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbWdcIiwgaW1hZ2VDbGFzcyk7XG4gICAgYWRkSW1hZ2Uuc3JjID0gYWRkSWNvbjtcbiAgICBjb25zdCBhZGRUZXh0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIHRleHRDbGFzcyk7XG4gICAgYWRkVGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGFpbmVyLCBbYWRkSW1hZ2UsIGFkZFRleHRdKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBjcmVhdGVOZXdBZGRCdXR0b24gfTtcblxuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRIZWxwZXIgfSBmcm9tIFwiLi9kb21IZWxwZXJzXCI7XG5pbXBvcnQgeyBuZXdQcm9qZWN0Q2xpY2ssIHJlQXBwZW5kTmV3UHJvamVjdEJ1dHRvbiB9IGZyb20gXCIuL25ld1Byb2plY3RcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Rhc2tCdXR0b24sIG5ld1Rhc2tDbGljayB9IGZyb20gXCIuL25ld1Rhc2tcIjtcbmltcG9ydCB7IGFkZEl0ZW1Ub1Byb2plY3QsIGFkZFByb2plY3QsIGdldFByb2plY3RJbmRleEJ5VGl0bGUgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgYWRkVG9kbywgY3JlYXRlVG9kb3MsIGRlbGV0ZVRvZG8sIGRpc3BsYXlUb2RvRGV0YWlscywgZWRpdFRvZG8sIGdldFRvZG9zLCByZW5kZXJBbGxUb2RvcyB9IGZyb20gXCIuL3RvZG9JdGVtc1wiO1xuXG5mdW5jdGlvbiBiaW5kQ2xpY2tFdmVudHMoKSB7XG4gICAgY29uc3QgW3Byb2plY3RzQnV0dG9uLCBpbXBvcnRhbnRCdXR0b25dID0gZmluZEJ1dHRvbnMoW1wicHJvamVjdHMtYnV0dG9uXCIsIFwiaW1wb3J0YW50LWJ1dHRvblwiXSk7XG4gICAgY29uc3QgZGFya01vZGVDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFyay1tb2RlLWNoZWNrYm94XCIpO1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tYWRkLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1idXR0b25cIik7XG5cbiAgICBhZGRQcm9qZWN0c0J1dHRvbkV2ZW50KHByb2plY3RzQnV0dG9uKTtcbiAgICBhZGRJbXBvcnRhbnRCdXR0b25FdmVudChpbXBvcnRhbnRCdXR0b24pO1xuICAgIGFkZEFkZFRhc2tCdXR0b25FdmVudChhZGRUYXNrQnV0dG9uKTtcbiAgICBhZGROZXdQcm9qZWN0QnV0dG9uRXZlbnQoYWRkUHJvamVjdEJ1dHRvbik7XG5cbiAgICBkYXJrTW9kZUNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vY2hhbmdlIGNvbG9yIHNjaGVtZSBzb21laG93XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEFkZFRhc2tCdXR0b25FdmVudChhZGRUYXNrQnV0dG9uKSB7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbmV3VGFza0NsaWNrKGUpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0c0J1dHRvbkV2ZW50KHByb2plY3RzQnV0dG9uKSB7XG4gICAgcHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHByb2plY3RzQnV0dG9uLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwic2lkZWJhci1oaWRkZW5cIik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEltcG9ydGFudEJ1dHRvbkV2ZW50KGltcG9ydGFudEJ1dHRvbikge1xuICAgIGltcG9ydGFudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaW1wb3J0YW50QnV0dG9uLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwic2lkZWJhci1oaWRkZW5cIik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZENsb3NlQnV0dG9uRXZlbnQoY2xvc2VCdXR0b24pIHtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gY2xvc2VCdXR0b24ucGFyZW50Tm9kZTtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICByZUFwcGVuZE5ld1Rhc2tCdXR0b24oKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkQ29uZmlybUJ1dHRvbkV2ZW50KGNvbmZpcm1CdXR0b24pIHtcbiAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBjb25maXJtQnV0dG9uLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtdGV4dGFyZWFcIik7XG4gICAgICAgIGlmICh0aXRsZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgdGl0bGUucGxhY2Vob2xkZXIgPSBcIlRoaXMgZmllbGQgY2Fubm90IGJlIGVtcHR5LlwiO1xuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInJlZC10ZXh0XCIpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcInJlZC10ZXh0XCIpO1xuICAgICAgICAgICAgfSwgNzUwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uLXRleHRhcmVhXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLWNvbnRhaW5lciAuZHVlLWRhdGUtcGlja2VyXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5LXNsaWRlclwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Qtc2VsZWN0b3JcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9JRCA9IGFkZFRvZG8odGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG4gICAgICAgIGFkZEl0ZW1Ub1Byb2plY3QodG9kb0lELCBnZXRQcm9qZWN0SW5kZXhCeVRpdGxlKHByb2plY3QpKTtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICByZUFwcGVuZE5ld1Rhc2tCdXR0b24oKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRGVsZXRlVG9kb0V2ZW50KGRlbGV0ZUJ1dHRvbikge1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgLy9lLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkZWxldGVCdXR0b24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCB0b2RvSUQgPSBwYXJlbnQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgIGRlbGV0ZVRvZG8odG9kb0lEKTtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFkZExpZ2h0U3dpdGNoRXZlbnQoc3dpdGNoSW5wdXQpIHtcbiAgICBzd2l0Y2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibGlnaHQtdGhlbWVcIik7XG4gICAgICAgIGlmICh0eXBlb2YgU3RvcmFnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UucHJlZmVyc0RhcmtNb2RlKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5wcmVmZXJzRGFya01vZGUgPSBKU09OLnN0cmluZ2lmeShmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5wcmVmZXJzRGFya01vZGUgPSBKU09OLnN0cmluZ2lmeSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0QnV0dG9uRXZlbnQoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBuZXdQcm9qZWN0Q2xpY2soZSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZENvbmZpcm1OZXdQcm9qZWN0QnV0dG9uRXZlbnQoY29uZmlybUJ1dHRvbikge1xuICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbmZpcm1CdXR0b24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtaW5wdXRcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGV4dGFyZWEudmFsdWU7XG4gICAgICAgIGFkZFByb2plY3QodGl0bGUpO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIHJlQXBwZW5kTmV3UHJvamVjdEJ1dHRvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWNvbnRlbnRcIikpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRDbG9zZU5ld1Byb2plY3RCdXR0b25FdmVudChjbG9zZUJ1dHRvbikge1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjbG9zZUJ1dHRvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgcmVBcHBlbmROZXdQcm9qZWN0QnV0dG9uKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtY29udGVudFwiKSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZERldGFpbGVkQ29uZmlybUJ1dHRvbkV2ZW50KGNvbmZpcm1CdXR0b24sIGlkKSB7XG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gY29uZmlybUJ1dHRvbi5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLXRleHRhcmVhXCIpO1xuICAgICAgICBpZiAodGl0bGUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRpdGxlLnBsYWNlaG9sZGVyID0gXCJUaGlzIGZpZWxkIGNhbm5vdCBiZSBlbXB0eS5cIjtcbiAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJyZWQtdGV4dFwiKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJyZWQtdGV4dFwiKTtcbiAgICAgICAgICAgIH0sIDc1MCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbi10ZXh0YXJlYVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtY29udGFpbmVyIC5kdWUtZGF0ZS1waWNrZXJcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHktc2xpZGVyXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1zZWxlY3RvclwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZWRpdGVkVG9kb0lEID0gZWRpdFRvZG8oaWQsIHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpO1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgIHJlbmRlckFsbFRvZG9zKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SW5kZXggPSBnZXRQcm9qZWN0SW5kZXhCeVRpdGxlKHByb2plY3QpO1xuICAgICAgICBhZGRJdGVtVG9Qcm9qZWN0KGVkaXRlZFRvZG9JRCwgY3VycmVudFByb2plY3RJbmRleCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZERldGFpbGVkQ2xvc2VCdXR0b25FdmVudChjbG9zZUJ1dHRvbikge1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjcmVhdGVUb2RvcyhnZXRUb2RvcygpKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVBcHBlbmROZXdUYXNrQnV0dG9uKCkge1xuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBjcmVhdGVOZXdUYXNrQnV0dG9uKCk7XG4gICAgYWRkQWRkVGFza0J1dHRvbkV2ZW50KG5ld1Rhc2tCdXR0b24pO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2VudGVyLWNvbnRlbnRcIiksIG5ld1Rhc2tCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvRXZlbnQodG9kbykge1xuICAgIHRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtdG9kby1idXR0b25cIikpIHJldHVybjtcbiAgICAgICAgaWYgKFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS10b2RvLWJ1dHRvblwiKV0uaW5jbHVkZXMoZS50YXJnZXQpKSByZXR1cm47XG4gICAgICAgIGRpc3BsYXlUb2RvRGV0YWlscyhlLmN1cnJlbnRUYXJnZXQuaWQpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBmaW5kQnV0dG9ucyhidXR0b25JRHMpIHtcbiAgICBjb25zdCBkb21CdXR0b25zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIildO1xuICAgIGNvbnN0IHJldHVybkJ1dHRvbnMgPSBbXTtcbiAgICBpZiAodHlwZW9mIGJ1dHRvbklEcyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBidXR0b25JRHMuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICBkb21CdXR0b25zLmZpbmQoZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgICAgICAgICAgIGlmIChidXR0b24uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybkJ1dHRvbnMucHVzaChidXR0b24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb21CdXR0b25zLmZpbmQoZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbi5pZCA9PT0gYnV0dG9uSURzO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldHVybkJ1dHRvbnM7XG59XG5cbmV4cG9ydCB7XG4gICAgYmluZENsaWNrRXZlbnRzLCBhZGRDb25maXJtQnV0dG9uRXZlbnQsIGFkZENsb3NlQnV0dG9uRXZlbnQsXG4gICAgYWRkVG9kb0V2ZW50LCBhZGREZXRhaWxlZENsb3NlQnV0dG9uRXZlbnQsIGFkZERldGFpbGVkQ29uZmlybUJ1dHRvbkV2ZW50LFxuICAgIGFkZENsb3NlTmV3UHJvamVjdEJ1dHRvbkV2ZW50LCBhZGRDb25maXJtTmV3UHJvamVjdEJ1dHRvbkV2ZW50LCBhZGROZXdQcm9qZWN0QnV0dG9uRXZlbnQsIGFkZERlbGV0ZVRvZG9FdmVudCwgYWRkTGlnaHRTd2l0Y2hFdmVudCxcbn07IiwiZnVuY3Rpb24gY3JlYXRlSFRNTEVsZW1lbnQoZWxlbWVudCwgY2xhc3NlcywgaWQpIHtcbiAgICBjb25zdCByZXR1cm5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBpZiAodHlwZW9mIGNsYXNzZXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgY2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc1RvQWRkKSB7XG4gICAgICAgICAgICByZXR1cm5FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NUb0FkZCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNsYXNzZXMgPT09IFwic3RyaW5nXCIgJiYgY2xhc3NlcyAhPT0gXCJcIikge1xuICAgICAgICByZXR1cm5FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3Nlcyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaWQgPT09IFwic3RyaW5nXCIgJiYgaWQgIT09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDaGlsZEhlbHBlcihlbGVtZW50LCBjaGlsZHJlbikge1xuICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YoY2hpbGRyZW4pLmNvbnN0cnVjdG9yID09PSBBcnJheSAmJiB0eXBlb2YgY2hpbGRyZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZHJlbik7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZHJlbihlbGVtZW50KSB7XG4gICAgd2hpbGUoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUhUTUxFbGVtZW50LCBhcHBlbmRDaGlsZEhlbHBlciwgcmVtb3ZlQWxsQ2hpbGRyZW4gfTsiLCJpbXBvcnQgeyBhZGRDbG9zZU5ld1Byb2plY3RCdXR0b25FdmVudCwgYWRkQ29uZmlybU5ld1Byb2plY3RCdXR0b25FdmVudCwgYWRkTmV3UHJvamVjdEJ1dHRvbkV2ZW50IH0gZnJvbSBcIi4vYmluZENsaWNrRXZlbnRzXCI7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZEhlbHBlciwgY3JlYXRlSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9kb21IZWxwZXJzXCI7XG5pbXBvcnQgeyBjcmVhdGVDb25maXJtQnV0dG9uLCBjcmVhdGVDbG9zZUJ1dHRvbiB9IGZyb20gXCIuL25ld1Rhc2tcIjtcbmltcG9ydCBhZGRJY29uIGZyb20gXCIuL2ltYWdlcy9hZGQuc3ZnXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdBZGRCdXR0b24gfSBmcm9tIFwiLi9hZGRCdXR0b25cIjtcblxuZnVuY3Rpb24gbmV3UHJvamVjdENsaWNrKGUpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZTtcbiAgICBlLmN1cnJlbnRUYXJnZXQucmVtb3ZlKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJuZXctcHJvamVjdC1jb250YWluZXJcIiwgXCJuZXctcHJvamVjdC1jb250YWluZXJcIik7XG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcIm5ldy1wcm9qZWN0LWZvcm1cIiwgXCJuZXctcHJvamVjdC1mb3JtXCIpO1xuICAgIGNvbnN0IHRpdGxlQXJlYSA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaW5wdXRcIiwgW1widGV4dGFyZWFcIiwgXCJuZXctcHJvamVjdC10ZXh0YXJlYVwiXSwgXCJuZXctcHJvamVjdC1pbnB1dFwiKTtcbiAgICB0aXRsZUFyZWEucGxhY2Vob2xkZXIgPSBcIlRpdGxlOiBDb2RpbmdcIjtcbiAgICB0aXRsZUFyZWEudHlwZSA9IFwidGV4dFwiO1xuICAgIHRpdGxlQXJlYS5zaXplID0gXCIxOFwiO1xuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBjcmVhdGVDb25maXJtQnV0dG9uKCk7XG4gICAgYWRkQ29uZmlybU5ld1Byb2plY3RCdXR0b25FdmVudChjb25maXJtQnV0dG9uKTtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGNyZWF0ZUNsb3NlQnV0dG9uKCk7XG4gICAgYWRkQ2xvc2VOZXdQcm9qZWN0QnV0dG9uRXZlbnQoY2xvc2VCdXR0b24pO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwibmV3LXByb2plY3QtYnV0dG9uLWNvbnRhaW5lclwiKTtcblxuICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRhaW5lciwgYXBwZW5kQ2hpbGRIZWxwZXIobmV3UHJvamVjdEZvcm0sIHRpdGxlQXJlYSkpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRhaW5lciwgYXBwZW5kQ2hpbGRIZWxwZXIoYnV0dG9uQ29udGFpbmVyLCBbY29uZmlybUJ1dHRvbiwgY2xvc2VCdXR0b25dKSk7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIocGFyZW50LCBjb250YWluZXIpO1xuICAgIHRpdGxlQXJlYS5mb2N1cygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uKCkge1xuICAgIGNvbnN0IG5ld0J1dHRvbiA9IGNyZWF0ZU5ld0FkZEJ1dHRvbihcIm5ldy1wcm9qZWN0LWJ1dHRvblwiLCBcImFkZC1pbWFnZVwiLCBcIm5ldy1wcm9qZWN0LXRleHRcIiwgXCJOZXcgUHJvamVjdFwiKTtcbiAgICByZXR1cm4gbmV3QnV0dG9uO1xufVxuXG5mdW5jdGlvbiByZUFwcGVuZE5ld1Byb2plY3RCdXR0b24ocGFyZW50Tm9kZSkge1xuICAgIGNvbnN0IG5ld0J1dHRvbiA9IGNyZWF0ZU5ld1Byb2plY3RCdXR0b24oKTtcbiAgICBhZGROZXdQcm9qZWN0QnV0dG9uRXZlbnQobmV3QnV0dG9uKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihwYXJlbnROb2RlLCBuZXdCdXR0b24pO1xufVxuXG5leHBvcnQgeyBuZXdQcm9qZWN0Q2xpY2ssIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24sIHJlQXBwZW5kTmV3UHJvamVjdEJ1dHRvbiB9OyIsImltcG9ydCB7IGFwcGVuZENoaWxkSGVscGVyLCBjcmVhdGVIVE1MRWxlbWVudCB9IGZyb20gXCIuL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7IGFkZENvbmZpcm1CdXR0b25FdmVudCwgYWRkQ2xvc2VCdXR0b25FdmVudCB9IGZyb20gXCIuL2JpbmRDbGlja0V2ZW50c1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IGNvbmZpcm1JY29uIGZyb20gXCIuL2ltYWdlcy9jb25maXJtLnN2Z1wiO1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tIFwiLi9pbWFnZXMvY2xvc2Uuc3ZnXCI7XG5pbXBvcnQgYWRkSWNvbiBmcm9tIFwiLi9pbWFnZXMvYWRkLnN2Z1wiO1xuaW1wb3J0IHsgZ2V0VG9kb3NCeUlEIH0gZnJvbSBcIi4vdG9kb0l0ZW1zXCI7XG5cbmZ1bmN0aW9uIG5ld1Rhc2tDbGljayhlLCB0b2RvSUQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZTtcbiAgICBlLmN1cnJlbnRUYXJnZXQucmVtb3ZlKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJuZXctdG9kby1jb250YWluZXJcIiwgXCJuZXctdG9kby1jb250YWluZXJcIik7XG4gICAgY29uc3QgbmV3VG9kb0Zvcm0gPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcIm5ldy10b2RvLWZvcm1cIiwgXCJuZXctdG9kby1mb3JtXCIpO1xuICAgIGNvbnN0IHRpdGxlQXJlYSA9IGNyZWF0ZVRpdGxlQXJlYSgpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uQXJlYSA9IGNyZWF0ZURlc2NyaXB0aW9uQXJlYSgpO1xuICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBjcmVhdGVEYXRlQ29udGFpbmVyKHRydWUsIHRvZG9JRCk7XG4gICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGNyZWF0ZUNvbmZpcm1CdXR0b24oKTtcbiAgICBhZGRDb25maXJtQnV0dG9uRXZlbnQoY29uZmlybUJ1dHRvbik7XG4gICAgY29uZmlybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy10YXNrLWNvbmZpcm1cIik7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBjcmVhdGVDbG9zZUJ1dHRvbigpO1xuICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LXRhc2stY2xvc2VcIik7XG4gICAgYWRkQ2xvc2VCdXR0b25FdmVudChjbG9zZUJ1dHRvbik7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGFpbmVyLCBhcHBlbmRDaGlsZEhlbHBlcihuZXdUb2RvRm9ybSwgW3RpdGxlQXJlYSwgZGVzY3JpcHRpb25BcmVhLCBkYXRlQ29udGFpbmVyXSkpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRhaW5lciwgW2NvbmZpcm1CdXR0b24sIGNsb3NlQnV0dG9uXSk7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIocGFyZW50LCBjb250YWluZXIpO1xuICAgIHRpdGxlQXJlYS5mb2N1cygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTbGlkZXIoKSB7XG4gICAgY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJzbGlkZXItY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHByaW9TbGlkZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImlucHV0XCIsIFwicHJpb3JpdHktc2xpZGVyXCIpO1xuICAgIHByaW9TbGlkZXIudHlwZSA9IFwicmFuZ2VcIjtcbiAgICBwcmlvU2xpZGVyLm1pbiA9IFwiMVwiO1xuICAgIHByaW9TbGlkZXIubWF4ID0gXCIxMFwiO1xuICAgIHByaW9TbGlkZXIudmFsdWUgPSBcIjVcIjtcbiAgICBjb25zdCBwcmlvVGV4dCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwicFwiLCBcInByaW8tdGV4dFwiKTtcbiAgICBwcmlvVGV4dC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKHNsaWRlckNvbnRhaW5lciwgW3ByaW9UZXh0LCBwcmlvU2xpZGVyXSk7XG4gICAgcmV0dXJuIHNsaWRlckNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29uZmlybUJ1dHRvbigpIHtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbWdcIiwgW1widGFzay1idXR0b25cIiwgXCJjb25maXJtLWJ1dHRvblwiXSk7XG4gICAgY29uZmlybUJ1dHRvbi5zcmMgPSBjb25maXJtSWNvbjtcbiAgICByZXR1cm4gY29uZmlybUJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2xvc2VCdXR0b24oKSB7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBjcmVhdGVIVE1MRWxlbWVudChcImltZ1wiLCBbXCJ0YXNrLWJ1dHRvblwiLCBcImNsb3NlLWJ1dHRvblwiXSk7XG4gICAgY2xvc2VCdXR0b24uc3JjID0gY2xvc2VJY29uO1xuICAgIHJldHVybiBjbG9zZUJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGF0ZUNvbnRhaW5lcihpc05ld1Rhc2ssIHRvZG9JRCkge1xuICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcImRhdGUtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGRhdGVQaWNrZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImlucHV0XCIsIFwiZHVlLWRhdGUtcGlja2VyXCIpO1xuICAgIGRhdGVQaWNrZXIudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGRhdGVQaWNrZXIudmFsdWVBc0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInByb2plY3QtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJzZWxlY3RcIiwgXCJwcm9qZWN0LXNlbGVjdG9yXCIpO1xuICAgIHNlbGVjdG9yLm5hbWUgPSBcInByb2plY3RzXCI7XG4gICAgZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGlyKHByb2plY3QpO1xuICAgICAgICBpZihwcm9qZWN0ID09IG51bGwgfHwgcHJvamVjdCA9PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3T3B0aW9uID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJvcHRpb25cIiwgXCJwcm9qZWN0LW9wdGlvblwiKTtcbiAgICAgICAgbmV3T3B0aW9uLnZhbHVlID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3T3B0aW9uLnZhbHVlKTtcbiAgICAgICAgaWYgKG5ld09wdGlvbi52YWx1ZSA9PT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXBhZ2UtdGl0bGVcIikudGV4dENvbnRlbnQgJiYgaXNOZXdUYXNrKSB7XG4gICAgICAgICAgICBuZXdPcHRpb24uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcXFwic2VsZWN0ZWRcXFwiXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc05ld1Rhc2spIHtcbiAgICAgICAgICAgIGlmKG5ld09wdGlvbi52YWx1ZSA9PT0gZ2V0VG9kb3NCeUlEKFt0b2RvSURdKVswXS5nZXRQcm9qZWN0KCkpIHtcbiAgICAgICAgICAgICAgICBuZXdPcHRpb24uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcXFwic2VsZWN0ZWRcXFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICAgICBuZXdPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICBhcHBlbmRDaGlsZEhlbHBlcihzZWxlY3RvciwgbmV3T3B0aW9uKTtcbiAgICB9KTtcblxuICAgIGFwcGVuZENoaWxkSGVscGVyKHByb2plY3RDb250YWluZXIsIHNlbGVjdG9yKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihkYXRlQ29udGFpbmVyLCBbZGF0ZVBpY2tlciwgcHJvamVjdENvbnRhaW5lciwgY3JlYXRlU2xpZGVyKCldKTtcbiAgICByZXR1cm4gZGF0ZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb25BcmVhKCkge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uQXJlYSA9IGNyZWF0ZUhUTUxFbGVtZW50KFwidGV4dGFyZWFcIiwgW1wiZGVzY3JpcHRpb24tdGV4dGFyZWFcIiwgXCJ0ZXh0YXJlYVwiXSk7XG4gICAgZGVzY3JpcHRpb25BcmVhLnBsYWNlaG9sZGVyID0gXCJEZXRhaWxzOiBQcmVmZXJhYmx5IGJlZm9yZSB5b3Ugc3RhcnZlLlwiXG4gICAgZGVzY3JpcHRpb25BcmVhLnJvd3MgPSBcIjVcIjtcbiAgICByZXR1cm4gZGVzY3JpcHRpb25BcmVhO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUaXRsZUFyZWEoKSB7XG4gICAgY29uc3QgdGl0bGVBcmVhID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBbXCJ0aXRsZS10ZXh0YXJlYVwiLCBcInRleHRhcmVhXCJdKTtcbiAgICB0aXRsZUFyZWEucGxhY2Vob2xkZXIgPSBcIlRpdGxlOiBFYXQgZm9vZFwiO1xuICAgIHJldHVybiB0aXRsZUFyZWE7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tCdXR0b24oKSB7XG4gICAgY29uc3QgYm90dG9tQ29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWFkZC1jb250YWluZXJcIiwgXCJ0b2RvLWFkZC1jb250YWluZXJcIik7XG4gICAgY29uc3QgYWRkSW1hZ2UgPSBjcmVhdGVIVE1MRWxlbWVudChcImltZ1wiLCBcImFkZC1pbWFnZVwiLCBcImFkZC1pbWFnZVwiKTtcbiAgICBhZGRJbWFnZS5zcmMgPSBhZGRJY29uO1xuICAgIGNvbnN0IGFkZFRleHQgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJhZGQtdGV4dFwiLCBcImFkZC10ZXh0XCIpO1xuICAgIGFkZFRleHQudGV4dENvbnRlbnQgPSBcIk5ldyBUYXNrXCI7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoYm90dG9tQ29udGFpbmVyLCBbYWRkSW1hZ2UsIGFkZFRleHRdKTtcbiAgICByZXR1cm4gYm90dG9tQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBuZXdUYXNrQ2xpY2ssIGNyZWF0ZU5ld1Rhc2tCdXR0b24sIGNyZWF0ZVNsaWRlciwgY3JlYXRlQ2xvc2VCdXR0b24sIGNyZWF0ZUNvbmZpcm1CdXR0b24sIGNyZWF0ZURhdGVDb250YWluZXIsIGNyZWF0ZVRpdGxlQXJlYSwgY3JlYXRlRGVzY3JpcHRpb25BcmVhIH07IiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRIZWxwZXIsIGNyZWF0ZUhUTUxFbGVtZW50LCByZW1vdmVBbGxDaGlsZHJlbiB9IGZyb20gXCIuL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG9zLCBnZXRUb2RvcywgZ2V0VG9kb3NCeUlEIH0gZnJvbSBcIi4vdG9kb0l0ZW1zXCI7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi9pbWFnZXMvZGVsZXRlLnN2Z1wiO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xuY29uc3QgY3VycmVudFByb2plY3QgPSAwO1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlKSB7XG4gICAgdGl0bGUgPSB0aXRsZS5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGl0bGUuc2xpY2UoMSwgdGl0bGUubGVuZ3RoKS50b0xvd2VyQ2FzZSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYocHJvamVjdHNbaV0gPT0gbnVsbCkgY29udGludWU7XG4gICAgICAgIGlmIChwcm9qZWN0c1tpXS50aXRsZSA9PT0gdGl0bGUpIHJldHVybjtcbiAgICB9XG4gICAgcHJvamVjdHMucHVzaCh7XG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgaXRlbXM6IFtdLFxuICAgIH0pO1xuICAgIHByb2plY3RzW3Byb2plY3RzLmxlbmd0aCAtIDFdLmluZGV4ID0gcHJvamVjdHMubGVuZ3RoIC0gMTtcbiAgICB1cGRhdGVMb2NhbFByb2plY3RzKCk7XG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbn1cblxuZnVuY3Rpb24gYWRkSG9tZVByb2plY3QoKSB7XG4gICAgYWRkUHJvamVjdChcIkhvbWVcIik7XG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW1Ub1Byb2plY3QodG9kb0lELCBwcm9qZWN0SW5kZXgpIHtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBpZiAocHJvamVjdCA9PSBudWxsIHx8IHByb2plY3QgPT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGZvdW5kSW5kZXggPSBwcm9qZWN0Lml0ZW1zLmZpbmRJbmRleChpZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaWQgPT0gdG9kb0lEO1xuICAgICAgICB9KVxuICAgICAgICBpZiAoZm91bmRJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBwcm9qZWN0Lml0ZW1zLnNwbGljZShmb3VuZEluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0uaXRlbXMucHVzaCh0b2RvSUQpO1xuICAgIGlmIChwcm9qZWN0SW5kZXggPiAwKSB7XG4gICAgICAgIHByb2plY3RzWzBdLml0ZW1zLnB1c2godG9kb0lEKTtcbiAgICB9XG4gICAgdXBkYXRlTG9jYWxQcm9qZWN0cygpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVJdGVtRnJvbVByb2plY3QodG9kb0lEKSB7XG4gICAgbGV0IHByb2plY3RUaXRsZTtcbiAgICBnZXRQcm9qZWN0cygpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0ID09IG51bGwgfHwgcHJvamVjdCA9PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgaWYgKHByb2plY3QuaXRlbXMuaW5jbHVkZXMoK3RvZG9JRCkpIHtcbiAgICAgICAgICAgIHByb2plY3QuaXRlbXMuc3BsaWNlKHRvZG9JRCwgMSwgXCJcIik7XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY3JlYXRlVG9kb3MoZ2V0VG9kb3NCeUlEKGdldElEc09mUHJvamVjdChnZXRQcm9qZWN0SW5kZXhCeVRpdGxlKHByb2plY3RUaXRsZSkpKSk7XG4gICAgdXBkYXRlTG9jYWxQcm9qZWN0cygpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RJbmRleCkge1xuICAgIGNvbnNvbGUubG9nKGBEZWxldGluZyBwcm9qZWN0IHdpdGggaW5kZXggJHtwcm9qZWN0SW5kZXh9YCk7XG4gICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gZ2V0UHJvamVjdHMoKVtwcm9qZWN0SW5kZXhdO1xuICAgIGdldFByb2plY3RzKClbcHJvamVjdEluZGV4XS5pdGVtcy5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYEFzc2lnbmluZyB0b2RvIHdpdGggaW5kZXggJHtpbmRleH0gdG8gaG9tZSBwcm9qZWN0YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGdldFRvZG9zKClbaW5kZXhdKTtcbiAgICAgICAgZ2V0VG9kb3MoKVtpbmRleF0uc2V0UHJvamVjdChcIkhvbWVcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGdldFRvZG9zKClbaW5kZXhdLmdldFByb2plY3QoKSk7XG4gICAgfSk7XG4gICAgZ2V0UHJvamVjdHMoKS5zcGxpY2UocHJvamVjdEluZGV4LCAxLCBudWxsKTtcbiAgICB1cGRhdGVMb2NhbFByb2plY3RzKCk7XG59XG5cbmZ1bmN0aW9uIGdldElEc09mUHJvamVjdChwcm9qZWN0SW5kZXgpIHtcbiAgICByZXR1cm4gcHJvamVjdHNbcHJvamVjdEluZGV4XS5pdGVtcztcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5mdW5jdGlvbiBzZXRQcm9qZWN0VG9Ib21lKHByb2plY3QpIHtcbiAgICBwcm9qZWN0Lml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uc2V0UHJvamVjdChcIkhvbWVcIik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RJbmRleEJ5VGl0bGUodGl0bGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0c1tpXSA9PSBudWxsKSBjb250aW51ZTtcbiAgICAgICAgaWYgKHByb2plY3RzW2ldLnRpdGxlID09PSB0aXRsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG4gICAgcmVtb3ZlQWxsQ2hpbGRyZW4oY29udGFpbmVyKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBpZihwcm9qZWN0ID09IG51bGwpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdHMtaXRlbS1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RFbGVtZW50ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwicHJvamVjdHMtaXRlbVwiKTtcbiAgICAgICAgbmV3UHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICBuZXdQcm9qZWN0RWxlbWVudC5kYXRhc2V0LnByb2plY3RJbmRleCA9IGAke3Byb2plY3RzLmZpbmRJbmRleChlbGVtZW50ID0+IHByb2plY3QgPT09IGVsZW1lbnQpfWA7XG4gICAgICAgIG5ld1Byb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGl0bGVOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXBhZ2UtdGl0bGVcIik7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBuZXdQcm9qZWN0RWxlbWVudC5kYXRhc2V0LnByb2plY3RJbmRleFxuICAgICAgICAgICAgdGl0bGVOb2RlLnRleHRDb250ZW50ID0gZ2V0UHJvamVjdHMoKVtwcm9qZWN0SW5kZXhdLnRpdGxlO1xuICAgICAgICAgICAgY3JlYXRlVG9kb3MoZ2V0VG9kb3NCeUlEKGdldElEc09mUHJvamVjdChwcm9qZWN0SW5kZXgpKSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gbmV3UHJvamVjdEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SW5kZXg7XG4gICAgICAgIGlmIChwcm9qZWN0SW5kZXggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdEZWxldGVCdXR0b24gPSBjcmVhdGVIVE1MRWxlbWVudChcImltZ1wiLCBcInByb2plY3RzLWl0ZW0tZGVsZXRlXCIpO1xuICAgICAgICAgICAgbmV3RGVsZXRlQnV0dG9uLnNyYyA9IGRlbGV0ZUljb247XG4gICAgICAgICAgICBuZXdEZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlUHJvamVjdERlbGV0aW9uKGUsIHByb2plY3RJbmRleClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGFpbmVyLCBhcHBlbmRDaGlsZEhlbHBlcihuZXdQcm9qZWN0Q29udGFpbmVyLCBbbmV3UHJvamVjdEVsZW1lbnQsIG5ld0RlbGV0ZUJ1dHRvbl0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRhaW5lciwgYXBwZW5kQ2hpbGRIZWxwZXIobmV3UHJvamVjdENvbnRhaW5lciwgW25ld1Byb2plY3RFbGVtZW50XSkpO1xuICAgICAgICB9XG5cblxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRMb2NhbFByb2plY3RzKCkge1xuICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2plY3RzKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH0pXG4gICAgLy9wcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2plY3RzKTtcbiAgICBjb25zb2xlLmxvZyhcIkdldHRpbmcgTG9jYWwgcHJvamVjdHM6IFwiKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTG9jYWxQcm9qZWN0cygpIHtcbiAgICBsb2NhbFN0b3JhZ2UucHJvamVjdHMgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3REZWxldGlvbihlLCBwcm9qZWN0SW5kZXgpIHtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdEluZGV4KTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3ROYW1lKHN0cmluZywgcHJvamVjdEluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBzdHJpbmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50aXRsZSA9IHN0cmluZztcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgYWRkUHJvamVjdCwgYWRkSG9tZVByb2plY3QsIGFkZEl0ZW1Ub1Byb2plY3QsIGRlbGV0ZUl0ZW1Gcm9tUHJvamVjdCwgZWRpdFByb2plY3ROYW1lLFxuICAgIGdldElEc09mUHJvamVjdCwgZ2V0UHJvamVjdHMsIGdldExvY2FsUHJvamVjdHMsIGdldFByb2plY3RJbmRleEJ5VGl0bGUsIHJlbmRlclByb2plY3RzXG59O1xuIiwiY2xhc3MgdG9kb0l0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuXG4gICAgc2V0VGl0bGUoaW5wdXQpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IGlucHV0O1xuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbihpbnB1dCkge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gaW5wdXQ7XG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBzZXREdWVEYXRlKGlucHV0KSB7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGlucHV0O1xuICAgIH1cblxuICAgIGdldFByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgICB9XG5cbiAgICBzZXRQcmlvcml0eShpbnB1dCkge1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gaW5wdXQ7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdDtcbiAgICB9XG5cbiAgICBzZXRQcm9qZWN0KGlucHV0KSB7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IGlucHV0O1xuICAgIH1cblxufVxuXG5leHBvcnQgeyB0b2RvSXRlbSB9OyIsImltcG9ydCB7IGFwcGVuZENoaWxkSGVscGVyLCBjcmVhdGVIVE1MRWxlbWVudCwgcmVtb3ZlQWxsQ2hpbGRyZW4gfSBmcm9tIFwiLi9kb21IZWxwZXJzXCI7XG5pbXBvcnQgeyBhZGRUb2RvRXZlbnQsIGFkZERldGFpbGVkQ2xvc2VCdXR0b25FdmVudCwgYWRkRGV0YWlsZWRDb25maXJtQnV0dG9uRXZlbnQsIGFkZERlbGV0ZVRvZG9FdmVudCB9IGZyb20gXCIuL2JpbmRDbGlja0V2ZW50c1wiO1xuaW1wb3J0IHsgY3JlYXRlU2xpZGVyLCBjcmVhdGVDbG9zZUJ1dHRvbiwgY3JlYXRlQ29uZmlybUJ1dHRvbiwgY3JlYXRlRGF0ZUNvbnRhaW5lciwgY3JlYXRlVGl0bGVBcmVhLCBjcmVhdGVEZXNjcmlwdGlvbkFyZWEgfSBmcm9tIFwiLi9uZXdUYXNrXCI7XG5pbXBvcnQgeyBkZWxldGVJdGVtRnJvbVByb2plY3QsIGdldFByb2plY3RJbmRleEJ5VGl0bGUsIGdldFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IHRvZG9JdGVtIH0gZnJvbSBcIi4vdG9kb0l0ZW1cIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuL2ltYWdlcy9kZWxldGUuc3ZnXCI7XG5cbmNvbnN0IGFsbFRvZG9zID0gW107XG5cbmZ1bmN0aW9uIGdldFRvZG9zKCkge1xuICAgIGlmIChhbGxUb2Rvcy5sZW5ndGggPCAxKSB7XG4gICAgICAgIC8vYWRkVG9kbyhcInRlc3RcIiwgXCJzdHVwaWQgc3R1ZmZcIiwgXCIxNi8zLzE5OThcIiwgXCJoaWdoXCIpO1xuICAgIH1cbiAgICByZXR1cm4gYWxsVG9kb3M7XG59XG5cbmZ1bmN0aW9uIGdldFRvZG9zQnlJRChpbmRleGVzKSB7XG4gICAgY29uc3QgdG9kb3MgPSBbXTtcbiAgICBpbmRleGVzLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICB0b2Rvcy5wdXNoKGFsbFRvZG9zW2luZGV4XSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRvZG9zO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICBjb25zdCB0b2RvID0gbmV3IHRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpO1xuICAgIHRvZG8uaWQgPSBhbGxUb2Rvcy5sZW5ndGg7XG4gICAgYWxsVG9kb3MucHVzaCh0b2RvKTtcblxuICAgIGNyZWF0ZVRvZG9zKGdldFRvZG9zKCkpO1xuICAgIHJlbmRlckltcG9ydGFudFRvZG9zKCk7XG4gICAgY29uc29sZS5sb2codG9kbyk7XG4gICAgdXBkYXRlTG9jYWxUb2RvcygpO1xuICAgIHJldHVybiB0b2RvLmlkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2Rvcyh0b2Rvcykge1xuICAgIGlmICh0b2RvcyA9PT0gW10pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2Rvc1wiKTtcbiAgICByZW1vdmVBbGxDaGlsZHJlbih0b2Rvc0NvbnRhaW5lcik7XG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgaWYgKCF0b2RvKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInRvZG8taXRlbVwiLCB0b2RvLmlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBjb25zdCBsZWZ0Q29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWl0ZW0tbGVmdFwiKTtcbiAgICAgICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInRvZG8taXRlbS1yaWdodFwiKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJ0b2RvLXRpdGxlXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRIZWxwZXIobGVmdENvbnRhaW5lciwgdGl0bGUpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwidG9kby1kdWUtZGF0ZVwiKTtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RHVlRGF0ZSgpO1xuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBjcmVhdGVIVE1MRWxlbWVudChcImltZ1wiLCBcImRlbGV0ZS10b2RvLWJ1dHRvblwiLCBcIlwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnNyYyA9IGRlbGV0ZUljb247XG4gICAgICAgIGFkZERlbGV0ZVRvZG9FdmVudChkZWxldGVCdXR0b24pO1xuICAgICAgICBhcHBlbmRDaGlsZEhlbHBlcihyaWdodENvbnRhaW5lciwgW2R1ZURhdGUsIGRlbGV0ZUJ1dHRvbl0pO1xuICAgICAgICBhcHBlbmRDaGlsZEhlbHBlcihpdGVtLCBbbGVmdENvbnRhaW5lciwgcmlnaHRDb250YWluZXJdKTtcbiAgICAgICAgYWRkVG9kb0V2ZW50KGl0ZW0pO1xuICAgICAgICBhcHBlbmRDaGlsZEhlbHBlcih0b2Rvc0NvbnRhaW5lciwgaXRlbSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUb2RvKHRvZG9JRCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgdG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG4gICAgbmV3VG9kby5pZCA9IHRvZG9JRDtcbiAgICBhbGxUb2Rvcy5zcGxpY2UodG9kb0lELCAxLCBuZXdUb2RvKTtcbiAgICByZW5kZXJBbGxUb2RvcygpO1xuICAgIHVwZGF0ZUxvY2FsVG9kb3MoKTtcbiAgICByZXR1cm4gbmV3VG9kby5pZDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZG9EZXRhaWxzKHRvZG9JRCkge1xuICAgIGNvbnN0IHRvZG9Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9kb0lEKTtcbiAgICBjb25zdCBwYXJlbnQgPSB0b2RvTm9kZS5wYXJlbnROb2RlO1xuICAgIGNvbnN0IHByZXZEZXRhaWxlZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGV0YWlsZWQtY29udGFpbmVyXCIpO1xuICAgIGlmIChwcmV2RGV0YWlsZWRUb2RvICE9PSBudWxsKSB7XG4gICAgICAgIGNyZWF0ZVRvZG9zKGdldFRvZG9zKCkpO1xuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2RvSUQpLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWRldGFpbGVkLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwidG9kby1kZXRhaWxlZFwiKTtcbiAgICBjb25zdCB0aXRsZUFyZWEgPSBjcmVhdGVUaXRsZUFyZWEoKTtcbiAgICB0aXRsZUFyZWEudmFsdWUgPSBnZXRUb2RvcygpW3RvZG9JRF0uZ2V0VGl0bGUoKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkFyZWEgPSBjcmVhdGVEZXNjcmlwdGlvbkFyZWEoKTtcbiAgICBkZXNjcmlwdGlvbkFyZWEudmFsdWUgPSBnZXRUb2RvcygpW3RvZG9JRF0uZ2V0RGVzY3JpcHRpb24oKTtcbiAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gY3JlYXRlRGF0ZUNvbnRhaW5lcihmYWxzZSwgdG9kb0lEKTtcbiAgICBkYXRlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHktc2xpZGVyXCIpLnZhbHVlID0gZ2V0VG9kb3MoKVt0b2RvSURdLmdldFByaW9yaXR5KCk7XG4gICAgZGF0ZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtY29udGFpbmVyIC5kdWUtZGF0ZS1waWNrZXJcIikudmFsdWUgPSBnZXRUb2RvcygpW3RvZG9JRF0uZ2V0RHVlRGF0ZSgpO1xuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBjcmVhdGVDb25maXJtQnV0dG9uKCk7XG4gICAgY29uZmlybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZGV0YWlsZWQtY29uZmlybVwiKTtcbiAgICBhZGREZXRhaWxlZENvbmZpcm1CdXR0b25FdmVudChjb25maXJtQnV0dG9uLCB0b2RvSUQpO1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlQ2xvc2VCdXR0b24oKTtcbiAgICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZGV0YWlsZWQtY2xvc2VcIik7XG4gICAgYWRkRGV0YWlsZWRDbG9zZUJ1dHRvbkV2ZW50KGNsb3NlQnV0dG9uKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250YWluZXIsIGFwcGVuZENoaWxkSGVscGVyKHRvZG9Gb3JtLCBbdGl0bGVBcmVhLCBkZXNjcmlwdGlvbkFyZWEsIGRhdGVDb250YWluZXJdKSk7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGFpbmVyLCBbY29uZmlybUJ1dHRvbiwgY2xvc2VCdXR0b25dKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihwYXJlbnQsIGNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG8odG9kb0lEKSB7XG4gICAgYWxsVG9kb3NbdG9kb0lEXSA9IG51bGw7XG4gICAgZGVsZXRlSXRlbUZyb21Qcm9qZWN0KHRvZG9JRCk7XG4gICAgcmVuZGVySW1wb3J0YW50VG9kb3MoKTtcbiAgICB1cGRhdGVMb2NhbFRvZG9zKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFsbFRvZG9zKCkge1xuICAgIGNyZWF0ZVRvZG9zKGdldFRvZG9zKCkpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJJbXBvcnRhbnRUb2RvcygpIHtcbiAgICBjb25zdCBpbXBvcnRhbnRUb2RvcyA9IFtdO1xuICAgIGdldFRvZG9zKCkuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgaWYodG9kbyA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpZiAodG9kby5nZXRQcmlvcml0eSgpID49IDgpIHtcbiAgICAgICAgICAgIGltcG9ydGFudFRvZG9zLnB1c2goeyB0aXRsZTogdG9kby5nZXRUaXRsZSgpLCBpZDogdG9kby5pZCwgcHJpb3JpdHk6IHRvZG8uZ2V0UHJpb3JpdHkoKSB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1wb3J0YW50LWZvbGRlclwiKTtcbiAgICByZW1vdmVBbGxDaGlsZHJlbihjb250YWluZXIpO1xuICAgIGltcG9ydGFudFRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0ltcG9ydGFudEVsZW1lbnQgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJpbXBvcnRhbnQtaXRlbVwiKTtcbiAgICAgICAgbmV3SW1wb3J0YW50RWxlbWVudC50ZXh0Q29udGVudCA9IHRvZG8udGl0bGUgKyBgXFx4YTAgXFx4YTAgXFx4YTAgKCR7dG9kby5wcmlvcml0eX0pYDtcbiAgICAgICAgbmV3SW1wb3J0YW50RWxlbWVudC5kYXRhc2V0LnRvZG9pZCA9IHRvZG8uaWQ7XG4gICAgICAgIG5ld0ltcG9ydGFudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzKCk7XG4gICAgICAgICAgICBsZXQgcHJvamVjdDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBwcm9qZWN0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0c1tpXS5pdGVtcy5pbmNsdWRlcyh0b2RvLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0ID0gcHJvamVjdHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1wYWdlLXRpdGxlXCIpLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgICAgIGNyZWF0ZVRvZG9zKGdldFRvZG9zQnlJRChwcm9qZWN0Lml0ZW1zKSk7XG4gICAgICAgICAgICBkaXNwbGF5VG9kb0RldGFpbHModG9kby5pZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250YWluZXIsIG5ld0ltcG9ydGFudEVsZW1lbnQpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRMb2NhbFRvZG9zKCkge1xuICAgIGNvbnNvbGUubG9nKFwiR2V0dGluZyBsb2NhbCB0b2RvczogXCIpO1xuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnRvZG9zKSk7XG4gICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudG9kb3MpLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGlmKHRvZG8gPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBhZGRUb2RvKHRvZG8udGl0bGUsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8uZHVlRGF0ZSwgdG9kby5wcmlvcml0eSwgdG9kby5wcm9qZWN0KTtcbiAgICB9KTtcbiAgICByZW5kZXJJbXBvcnRhbnRUb2RvcygpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVMb2NhbFRvZG9zKCkge1xuICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgbG9jYWwgdG9kb3M6IFwiKTtcbiAgICBsb2NhbFN0b3JhZ2UudG9kb3MgPSBKU09OLnN0cmluZ2lmeShnZXRUb2RvcygpKTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50b2RvcykpO1xufVxuXG5leHBvcnQgeyBhZGRUb2RvLCBnZXRUb2RvcywgY3JlYXRlVG9kb3MsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvLCBkaXNwbGF5VG9kb0RldGFpbHMsIGdldFRvZG9zQnlJRCwgZ2V0TG9jYWxUb2RvcywgcmVuZGVyQWxsVG9kb3MgfTtcblxuIiwiaW1wb3J0IHsgYWRkTGlnaHRTd2l0Y2hFdmVudCwgYmluZENsaWNrRXZlbnRzIH0gZnJvbSBcIi4vYmluZENsaWNrRXZlbnRzXCI7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZEhlbHBlciwgY3JlYXRlSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9kb21IZWxwZXJzXCI7XG5pbXBvcnQgeyBnZXRUb2RvcywgY3JlYXRlVG9kb3MsIGdldExvY2FsVG9kb3MgfSBmcm9tIFwiLi90b2RvSXRlbXNcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Rhc2tCdXR0b24gfSBmcm9tIFwiLi9uZXdUYXNrXCI7XG5pbXBvcnQgeyBhZGRIb21lUHJvamVjdCwgZ2V0TG9jYWxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdBZGRCdXR0b24gfSBmcm9tIFwiLi9hZGRCdXR0b25cIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3RCdXR0b24gfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5pbXBvcnQgZ2l0aHViSWNvbiBmcm9tIFwiLi9pbWFnZXMvZ2l0aHViLnN2Z1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJFbGVtZW50KCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaGVhZGVyXCIsIFwiaGVhZGVyXCIsIFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGhlYWRlckxlZnQgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcImhlYWRlci1sZWZ0XCIsIFwiaGVhZGVyLWxlZnRcIik7XG4gICAgY29uc3QgaGVhZGVyTG9nbyA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaDFcIiwgXCJoZWFkZXItbG9nb1wiLCBcImhlYWRlci1sb2dvXCIpO1xuICAgIGhlYWRlckxvZ28udGV4dENvbnRlbnQgPSBcInRvZG8tbGlzdFwiXG4gICAgaGVhZGVyTGVmdC5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKTtcbiAgICBjb25zdCBoZWFkZXJSaWdodCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwiaGVhZGVyLXJpZ2h0XCIsIFwiaGVhZGVyLXJpZ2h0XCIpO1xuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJsYWJlbFwiLCBcInN3aXRjaFwiLCBcImRhcmstbW9kZS1zd2l0Y2hcIik7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVIVE1MRWxlbWVudChcImlucHV0XCIsIFwiXCIsIFwiZGFyay1tb2RlLWNoZWNrYm94XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgYWRkTGlnaHRTd2l0Y2hFdmVudChpbnB1dCk7XG4gICAgY29uc3Qgc3BhbiA9IGNyZWF0ZUhUTUxFbGVtZW50KFwic3BhblwiLCBbXCJzbGlkZXJcIiwgXCJyb3VuZFwiXSk7XG4gICAgY29uc3QgbGFiZWxTeW1ib2wgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJzd2l0Y2gtdGV4dFwiLCBcInN3aXRjaC10ZXh0XCIpO1xuICAgIGxhYmVsU3ltYm9sLnRleHRDb250ZW50ID0gXCLwn5KhXCI7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoaGVhZGVyUmlnaHQsIFtsYWJlbFN5bWJvbCwgYXBwZW5kQ2hpbGRIZWxwZXIobGFiZWwsIFtpbnB1dCwgc3Bhbl0pXSk7XG5cbiAgICBhcHBlbmRDaGlsZEhlbHBlcihoZWFkZXIsIFtoZWFkZXJMZWZ0LCBoZWFkZXJSaWdodF0pO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkVsZW1lbnQoKSB7XG4gICAgY29uc3QgbWFpbiA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwibWFpblwiLCBcIm1haW5cIik7XG4gICAgY29uc3QgbWFpbkxlZnQgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcIm1haW4tbGVmdFwiLCBcIm1haW4tbGVmdFwiKTtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdHMtY29udGFpbmVyXCIsIFwicHJvamVjdHMtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHByb2plY3RzQnV0dG9uID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJidXR0b25cIiwgXCJwcm9qZWN0cy1idXR0b25cIiwgXCJwcm9qZWN0cy1idXR0b25cIik7XG4gICAgY29uc3QgcHJvamVjdHNCdXR0b25UZXh0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwicHJvamVjdHMtdGV4dFwiLCBcInByb2plY3RzLXRleHRcIik7XG4gICAgcHJvamVjdHNCdXR0b25UZXh0LmlubmVySFRNTCA9IFwiPHNwYW4gaWQ9XFxcInByb2plY3RzLXNwYW5cXFwiPj4gPC9zcGFuPlByb2plY3RzXCI7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIocHJvamVjdHNDb250YWluZXIsIGFwcGVuZENoaWxkSGVscGVyKHByb2plY3RzQnV0dG9uLCBwcm9qZWN0c0J1dHRvblRleHQpKTtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRlbnQgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInByb2plY3RzLWNvbnRlbnRcIiwgXCJwcm9qZWN0cy1jb250ZW50XCIpO1xuICAgIGNvbnN0IHByb2plY3RzID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgW1wicHJvamVjdHNcIl0sIFwicHJvamVjdHNcIik7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIobWFpbkxlZnQsIGFwcGVuZENoaWxkSGVscGVyKHByb2plY3RzQ29udGFpbmVyLCBhcHBlbmRDaGlsZEhlbHBlcihwcm9qZWN0c0NvbnRlbnQsIFtwcm9qZWN0cywgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbigpXSkpKTtcblxuICAgIGNvbnN0IGltcG9ydGFudENvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwiaW1wb3J0YW50LWNvbnRhaW5lclwiLCBcImltcG9ydGFudC1jb250YWluZXJcIik7XG4gICAgY29uc3QgaW1wb3J0YW50QnV0dG9uID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJidXR0b25cIiwgXCJpbXBvcnRhbnQtYnV0dG9uXCIsIFwiaW1wb3J0YW50LWJ1dHRvblwiKTtcbiAgICBjb25zdCBpbXBvcnRhbnRCdXR0b25UZXh0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwiaW1wb3J0YW50LXRleHRcIiwgXCJpbXBvcnRhbnQtdGV4dFwiKTtcbiAgICBpbXBvcnRhbnRCdXR0b25UZXh0LmlubmVySFRNTCA9IFwiPHNwYW4gaWQ9XFxcInByb2plY3RzLXNwYW5cXFwiPj4gPC9zcGFuPiBJbXBvcnRhbnRcIjtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihpbXBvcnRhbnRDb250YWluZXIsIGFwcGVuZENoaWxkSGVscGVyKGltcG9ydGFudEJ1dHRvbiwgaW1wb3J0YW50QnV0dG9uVGV4dCkpO1xuICAgIGNvbnN0IGltcG9ydGFudEZvbGRlciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFtcImltcG9ydGFudC1mb2xkZXJcIl0sIFwiaW1wb3J0YW50LWZvbGRlclwiKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihtYWluTGVmdCwgYXBwZW5kQ2hpbGRIZWxwZXIoaW1wb3J0YW50Q29udGFpbmVyLCBpbXBvcnRhbnRGb2xkZXIpKTtcblxuICAgIGNvbnN0IG1haW5DZW50ZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcIm1haW4tY2VudGVyXCIsIFwibWFpbi1jZW50ZXJcIik7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIobWFpbkNlbnRlciwgY3JlYXRlTWFpbkNlbnRlckNvbnRlbnQoKSk7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIobWFpbiwgW21haW5MZWZ0LCBtYWluQ2VudGVyXSk7XG5cbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkNlbnRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwiY2VudGVyLWNvbnRlbnRcIiwgXCJjZW50ZXItY29udGVudFwiKTtcbiAgICBjb25zdCB0b3BDb250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInRvZG8tdG9wLWNvbnRhaW5lclwiLCBcInRvZG8tdG9wLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC10aXRsZS1jb250YWluZXJcIiwgXCJwcm9qZWN0LXRpdGxlLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaDJcIiwgXCJ0b2RvLXBhZ2UtdGl0bGVcIiwgXCJ0b2RvLXBhZ2UtdGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBjb25zdCBkdWVEYXRlID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwiXCIsIFwidG9kby1wYWdlLWR1ZS1kYXRlXCIpO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGVudCwgYXBwZW5kQ2hpbGRIZWxwZXIodG9wQ29udGFpbmVyLCBbdGl0bGUsIGR1ZURhdGVdKSk7XG5cbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwidG9kb3NcIiwgXCJ0b2Rvc1wiKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250ZW50LCB0YXNrc0NvbnRhaW5lcik7XG5cblxuICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRlbnQsIGNyZWF0ZU5ld1Rhc2tCdXR0b24oKSk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZm9vdGVyXCIsIFwiZm9vdGVyLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBmb290ZXJUZXh0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwiZm9vdGVyLXRleHRcIik7XG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IGBGcmVkcmlrIEIgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IMKpYDtcbiAgICBjb25zdCBmb290ZXJMZWZ0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJmb290ZXItbGVmdFwiKTtcbiAgICBjb25zdCBmb290ZXJSaWdodCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwiZm9vdGVyLXJpZ2h0XCIpO1xuICAgIGNvbnN0IGFuY2hvciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiYVwiLCBcImdpdGh1Yi1hbmNob3JcIik7XG4gICAgYW5jaG9yLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9mcmVkcmlrYjEyXCI7XG4gICAgY29uc3QgaW1nID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbWdcIiwgXCJnaXRodWItaW1hZ2VcIik7XG4gICAgaW1nLnNyYyA9IGdpdGh1Ykljb247XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoYW5jaG9yLCBpbWcpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGZvb3RlckxlZnQsIGZvb3RlclRleHQpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGZvb3RlclJpZ2h0LCBhbmNob3IpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGZvb3RlciwgW2Zvb3RlckxlZnQsIGZvb3RlclJpZ2h0XSk7XG4gICAgcmV0dXJuIGZvb3RlcjtcblxufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlSW5pdGlhbFdlYnBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXJFbGVtZW50KCk7XG4gICAgY29uc3QgbWFpbiA9IGNyZWF0ZU1haW5FbGVtZW50KCk7XG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGVudERpdiwgW2hlYWRlciwgbWFpbiwgZm9vdGVyXSk7XG4gICAgaWYgKHR5cGVvZiBTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2FsU3RvcmFnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBsb2NhbCBwcm9qZWN0c1wiKTtcbiAgICAgICAgZ2V0TG9jYWxQcm9qZWN0cygpO1xuICAgICAgICBnZXRMb2NhbFRvZG9zKCk7XG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5wcmVmZXJzRGFya01vZGUgPT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJsaWdodC10aGVtZVwiKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFyay1tb2RlLWNoZWNrYm94XCIpLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYWxTdG9yYWdlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gc3RvcmVkIHByb2plY3RzLCBhZGRpbmcgaG9tZSBwcm9qZWN0XCIpO1xuICAgICAgICBhZGRIb21lUHJvamVjdCgpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucHJlZmVyc0RhcmtNb2RlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGxvY2FsIHN0b3JhZ2UgYXZhaWxhYmxlXCIpO1xuICAgICAgICBhZGRIb21lUHJvamVjdCgpO1xuICAgIH1cbiAgICBjcmVhdGVUb2RvcyhnZXRUb2RvcygpKTtcbiAgICBiaW5kQ2xpY2tFdmVudHMoKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSW5pdGlhbFdlYnBhZ2UgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGNyZWF0ZUluaXRpYWxXZWJwYWdlIH0gZnJvbSBcIi4vd2VicGFnZVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmNyZWF0ZUluaXRpYWxXZWJwYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9