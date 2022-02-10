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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --darkBlue: hsl(240, 41%, 7%);\n    --lightGreyBlue: #CECFED;\n    --dimOrange: #ff6a50;\n    --dimRed: #ff5233;\n    --lightPink: #ffd4da;\n    --dimWhite: #e5e6e7;\n    --mildBlueWhite: #f1f1ff;\n    --brightRed: #ec4141;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    font-family: 'Montserrat', sans-serif;\n}\n\nbody {\n    background-color: var(--bgColor);\n    height: 100vh;\n}\n\n#content {\n    height: 100%;\n}\n\n.dark-theme {\n    --headerBg: var(--darkBlue);\n    --headerText: var(--lightGreyBlue);\n    --headerBorder: #FFFFFF;\n    --sidebarBg: var(--darkBlue);\n    --importantButtonHover: #ff8670;\n    --importantText: var(--dimOrange);\n    --importantTextHover: var(--dimRed);\n    --folderHover: var(--lightPink);\n    --todoText: var(--dimWhite);\n    --todoTextHover: none;\n    --todoBorder: #c5c6c72f;\n    --bgColor: #2b2d44;\n    --footerText: #f1f1ffd2;\n    --footerBg: hsla(240, 17%, 16%, 0.719);\n    --projectText: var(--mildBlueWhite);\n    --projectHoverText: #ffd4da;\n    --projectBg: var(--darkBlue);\n    --filter: invert(93%) sepia(100%) saturate(28%) hue-rotate(223deg) brightness(105%) contrast(103%);\n}\n\n.light-theme {\n    --headerBg: hsl(0, 50%, 60%);\n    --headerText: white;\n    --headerBorder: black;\n    --sidebarBg: hsl(240, 12%, 76%);\n    --importantButtonHover: #000000;\n    --importantText: #0e0c0c;\n    --importantTextHover: black;\n    --folderHover: black;\n    --todoText: black;\n    --todoBorder: #535353cb;\n    --bgColor: hsl(240, 9%, 86%);\n    --footerText: hsl(240, 9%, 13%);\n    --footerBg: hsl(0, 0%, 79%);\n    --projectText: hsl(240, 66%, 9%);\n    --projectHoverText: hsl(0, 0%, 0%);\n    --projectBg: hsl(240, 12%, 76%);\n    --filter: none;\n}\n\n.header {\n    display: flex;\n    background-color: var(--headerBg);\n    color: var(--headerText);\n    padding: 10px;\n    font-size: 20px;\n    border-bottom: 1px solid var(--headerBorder);\n    height: 8%;\n}\n\n.header-left,\n.header-right {\n    width: 50%;\n    min-height: 60px;\n}\n\n.header-left {\n    display: flex;\n    align-items: center;\n}\n\n.header-logo {\n    margin-left: 25%;\n}\n\n.header-right {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-size: 28px;\n    gap: 10px;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 32px;\n    font-size: 22px;\n    margin-bottom: -1px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\ninput:checked + .slider {\n    background-color: #0d65ad;\n}\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n}\n\n.slider.round {\n    border-radius: 34px;\n}\n  \n.slider.round:before {\n    border-radius: 50%;\n}\n\n.main {\n    display: flex;\n    height: 86%;\n    min-height: 840px;\n    overflow: auto;\n\n}\n.main-left {\n    width: 20%;\n    display: flex;\n    flex-direction: column;\n    border-right: 1px solid #706b6b;\n    background-color: var(--sidebarBg);\n    margin-top: 1px;\n}\n.main-center {\n    width: 80%;\n    display: flex;\n    justify-content: center;\n    margin-top: 100px;\n}\n\n.projects-button,\n.important-button {\n    border: none;\n    margin-top: -2px;\n    min-height: 40px;\n    font-size: 20px;\n    font-weight: 700;\n    color: var(--projectText);\n    padding: 5px;\n    background-color: var(--projectBg);\n    padding-left: 25px;\n}\n\n.projects-button:hover, \n.important-button:hover {\n    color: var(--importantButtonHover);\n    cursor: pointer;\n}\n\n.projects-container,\n.important-container {\n    border-bottom: 1px solid #e4e5ff;\n    overflow: auto;\n    background-color: var(--projectBg);\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 5px;\n    padding: 0 0 15px;\n}\n\n.important-folder {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n}\n\n.important-item {\n    color: var(--importantText);\n    font-size: 16px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 4px;\n    width: 80%;\n}\n\n.important-item:hover {\n    color: var(--importantTextHover);\n    cursor: pointer;\n}\n\n.projects-text,\n.important-text {\n    width: 200px;\n    text-align: left;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.projects-item-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.projects-item {\n    color: var(--projectText);\n    font-size: 21px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 4px;\n    width: 80%;\n}\n\n.projects-item-delete {\n    filter: var(--filter); \n    opacity: 0.6;\n}\n\n.projects-item-delete:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.projects-item:hover {\n    color: var(--projectHoverText);\n    cursor: pointer;\n}\n\n#new-project-button-container {\n    align-self: start;\n}\n\n.projects-content.sidebar-hidden,\n.important-folder.sidebar-hidden {\n    display: none;\n}\n\n#projects-span, \n#important-span {\n    color: var(--projectText);\n    font-size: 15px;\n}\n\n.center-content {\n    width: 50%;\n}\n\n.todo-top-container {\n    color: var(--todoText);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 10px;\n    padding-right: 45px;\n}\n\n.todo-top-container > p {\n    font-size: 22px;\n}\n\n.todo-add-container {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 5px 8px;\n    opacity: 0.5;\n}\n\n.todo-add-container:hover, \n.new-project-button:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.todo-add-container > p {\n    color: var(--todoText);\n    font-size: 22px;\n}\n\n.add-image, .task-button {\n    width: 22px;\n    height: 22px;\n    filter: var(--filter);\n}\n\n.todo-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: var(--todoText);\n    font-size: 22px;\n    border-top: 1px solid var(--todoBorder);\n    border-bottom: 1px solid var(--todoBorder);\n    padding: 4px 8px;\n    margin-top: -1px;\n}\n\n.todo-item-right {\n    display: flex;\n    align-items: center;\n    gap: 30px;\n}\n\n.delete-todo-button {\n    filter: var(--filter);\n    opacity: 0.6;\n    width: 30px;\n    height: 30px;\n}\n\n.delete-todo-button:hover {\n    opacity: 0.9;\n}\n\n.todo-title {\n    max-width: 400px;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.todo-due-date {\n    font-size: 16px;\n}\n\n.todo-item:hover {\n    color: var(--todoText);\n    cursor: pointer;\n    border-top-color: #c5c6c7b0;\n    border-bottom-color: #c5c6c7b0;\n}\n\n.new-todo-form,\n.todo-detailed, \n.new-project-form {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid #294552;\n    padding: 4px;\n    border-radius: 6px;\n    margin-top: 12px;\n}\n\n.new-project-form {\n    border: 1px solid var(--headerBorder);\n}\n\n.new-todo-form {\n    border-color: #00070a;\n    background-color: var(--bgColor);\n}\n\n.textarea {\n    background-color: var(--bgColor);\n    border: none;\n    resize: none;\n    outline: none;\n    color: var(--todoText);\n    font-size: 18px;\n}\n\n.new-project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    width: 80%;\n}\n\n.new-project-button {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n    color: var(--projectText);\n    font-size: 16px;\n    opacity: 0.6;\n    margin: 10px 0 5px;\n}\n\n.projects-content {\n    display: flex;\n    flex-direction: column;\n    margin-left: 10%;\n}\n\n.new-project-form .textarea {\n    background-color: var(--sidebarBg);\n    font-size: 16px;\n    padding: 3px;\n    \n}\n\n.textarea::placeholder {\n    opacity: 1;\n}\n\n.task-button {\n    opacity: 0.6;\n    margin-top: 5px;\n    margin-right: 5px;\n    width: 28px;\n    height: 28px;\n}\n\n.task-button:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.red-text::placeholder {\n    color: var(--brightRed);\n}\n\n.project-selector {\n    color: var(--todoText);\n    background-color: var(--bgColor);\n    padding: 2px;\n    margin-bottom: -2px;\n}\n\n.slider-container {\n    margin-bottom: 8px;\n}\n\n.due-date-picker {\n    width: 150px;\n    background-color: var(--bgColor);\n    color: var(--todoText);\n    margin-top: 5px;\n}\n\n.due-date-picker::-webkit-calendar-picker-indicator {\n    filter: var(--filter);\n}\n\n.date-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n}\n\n.prio-text {\n    color: var(--todoText);\n    font-size: 18px;\n    text-align: center;\n}\n\n.footer-container {\n    display: flex;\n    align-items: center;\n    color: var(--footerText);\n    background-color: var(--footerBg);\n    border-top: 1px solid #706b6b;\n    height: 70px;\n}\n\n#footer-left {\n    display: flex;\n    justify-content: flex-end;\n    width: 50%;\n    margin-right: 7px;\n}\n\n#footer-right {\n    display: flex;\n    justify-content: flex-start;\n    width: 50%;\n    margin-left: 7px;\n}\n\n.github-image {\n    filter: var(--filter);\n    opacity: 0.6;\n}\n\n.github-image:hover {\n    opacity: 1;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --darkBlue: hsl(240, 41%, 7%);\n    --lightGreyBlue: #CECFED;\n    --dimOrange: #ff6a50;\n    --dimRed: #ff5233;\n    --lightPink: #ffd4da;\n    --dimWhite: #e5e6e7;\n    --mildBlueWhite: #f1f1ff;\n    --brightRed: #ec4141;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    font-family: 'Montserrat', sans-serif;\n}\n\nbody {\n    background-color: var(--bgColor);\n    height: 100vh;\n}\n\n#content {\n    height: 100%;\n}\n\n.dark-theme {\n    --headerBg: var(--darkBlue);\n    --headerText: var(--lightGreyBlue);\n    --headerBorder: #FFFFFF;\n    --sidebarBg: var(--darkBlue);\n    --importantButtonHover: #ff8670;\n    --importantText: var(--dimOrange);\n    --importantTextHover: var(--dimRed);\n    --folderHover: var(--lightPink);\n    --todoText: var(--dimWhite);\n    --todoTextHover: none;\n    --todoBorder: #c5c6c72f;\n    --bgColor: #2b2d44;\n    --footerText: #f1f1ffd2;\n    --footerBg: hsla(240, 17%, 16%, 0.719);\n    --projectText: var(--mildBlueWhite);\n    --projectHoverText: #ffd4da;\n    --projectBg: var(--darkBlue);\n    --filter: invert(93%) sepia(100%) saturate(28%) hue-rotate(223deg) brightness(105%) contrast(103%);\n}\n\n.light-theme {\n    --headerBg: hsl(0, 50%, 60%);\n    --headerText: white;\n    --headerBorder: black;\n    --sidebarBg: hsl(240, 12%, 76%);\n    --importantButtonHover: #000000;\n    --importantText: #0e0c0c;\n    --importantTextHover: black;\n    --folderHover: black;\n    --todoText: black;\n    --todoBorder: #535353cb;\n    --bgColor: hsl(240, 9%, 86%);\n    --footerText: hsl(240, 9%, 13%);\n    --footerBg: hsl(0, 0%, 79%);\n    --projectText: hsl(240, 66%, 9%);\n    --projectHoverText: hsl(0, 0%, 0%);\n    --projectBg: hsl(240, 12%, 76%);\n    --filter: none;\n}\n\n.header {\n    display: flex;\n    background-color: var(--headerBg);\n    color: var(--headerText);\n    padding: 10px;\n    font-size: 20px;\n    border-bottom: 1px solid var(--headerBorder);\n    height: 8%;\n}\n\n.header-left,\n.header-right {\n    width: 50%;\n    min-height: 60px;\n}\n\n.header-left {\n    display: flex;\n    align-items: center;\n}\n\n.header-logo {\n    margin-left: 25%;\n}\n\n.header-right {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-size: 28px;\n    gap: 10px;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 32px;\n    font-size: 22px;\n    margin-bottom: -1px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\ninput:checked + .slider {\n    background-color: #0d65ad;\n}\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n}\n\n.slider.round {\n    border-radius: 34px;\n}\n  \n.slider.round:before {\n    border-radius: 50%;\n}\n\n.main {\n    display: flex;\n    height: 86%;\n    min-height: 840px;\n    overflow: auto;\n\n}\n.main-left {\n    width: 20%;\n    display: flex;\n    flex-direction: column;\n    border-right: 1px solid #706b6b;\n    background-color: var(--sidebarBg);\n    margin-top: 1px;\n}\n.main-center {\n    width: 80%;\n    display: flex;\n    justify-content: center;\n    margin-top: 100px;\n}\n\n.projects-button,\n.important-button {\n    border: none;\n    margin-top: -2px;\n    min-height: 40px;\n    font-size: 20px;\n    font-weight: 700;\n    color: var(--projectText);\n    padding: 5px;\n    background-color: var(--projectBg);\n    padding-left: 25px;\n}\n\n.projects-button:hover, \n.important-button:hover {\n    color: var(--importantButtonHover);\n    cursor: pointer;\n}\n\n.projects-container,\n.important-container {\n    border-bottom: 1px solid #e4e5ff;\n    overflow: auto;\n    background-color: var(--projectBg);\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 5px;\n    padding: 0 0 15px;\n}\n\n.important-folder {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n}\n\n.important-item {\n    color: var(--importantText);\n    font-size: 16px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 4px;\n    width: 80%;\n}\n\n.important-item:hover {\n    color: var(--importantTextHover);\n    cursor: pointer;\n}\n\n.projects-text,\n.important-text {\n    width: 200px;\n    text-align: left;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.projects-item-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.projects-item {\n    color: var(--projectText);\n    font-size: 21px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 4px;\n    width: 80%;\n}\n\n.projects-item-delete {\n    filter: var(--filter); \n    opacity: 0.6;\n}\n\n.projects-item-delete:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.projects-item:hover {\n    color: var(--projectHoverText);\n    cursor: pointer;\n}\n\n#new-project-button-container {\n    align-self: start;\n}\n\n.projects-content.sidebar-hidden,\n.important-folder.sidebar-hidden {\n    display: none;\n}\n\n#projects-span, \n#important-span {\n    color: var(--projectText);\n    font-size: 15px;\n}\n\n.center-content {\n    width: 50%;\n}\n\n.todo-top-container {\n    color: var(--todoText);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 10px;\n    padding-right: 45px;\n}\n\n.todo-top-container > p {\n    font-size: 22px;\n}\n\n.todo-add-container {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 5px 8px;\n    opacity: 0.5;\n}\n\n.todo-add-container:hover, \n.new-project-button:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.todo-add-container > p {\n    color: var(--todoText);\n    font-size: 22px;\n}\n\n.add-image, .task-button {\n    width: 22px;\n    height: 22px;\n    filter: var(--filter);\n}\n\n.todo-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: var(--todoText);\n    font-size: 22px;\n    border-top: 1px solid var(--todoBorder);\n    border-bottom: 1px solid var(--todoBorder);\n    padding: 4px 8px;\n    margin-top: -1px;\n}\n\n.todo-item-right {\n    display: flex;\n    align-items: center;\n    gap: 30px;\n}\n\n.delete-todo-button {\n    filter: var(--filter);\n    opacity: 0.6;\n    width: 30px;\n    height: 30px;\n}\n\n.delete-todo-button:hover {\n    opacity: 0.9;\n}\n\n.todo-title {\n    max-width: 400px;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.todo-due-date {\n    font-size: 16px;\n}\n\n.todo-item:hover {\n    color: var(--todoText);\n    cursor: pointer;\n    border-top-color: #c5c6c7b0;\n    border-bottom-color: #c5c6c7b0;\n}\n\n.new-todo-form,\n.todo-detailed, \n.new-project-form {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid #294552;\n    padding: 4px;\n    border-radius: 6px;\n    margin-top: 12px;\n}\n\n.new-project-form {\n    border: 1px solid var(--headerBorder);\n}\n\n.new-todo-form {\n    border-color: #00070a;\n    background-color: var(--bgColor);\n}\n\n.textarea {\n    background-color: var(--bgColor);\n    border: none;\n    resize: none;\n    outline: none;\n    color: var(--todoText);\n    font-size: 18px;\n}\n\n.new-project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    width: 80%;\n}\n\n.new-project-button {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n    color: var(--projectText);\n    font-size: 16px;\n    opacity: 0.6;\n    margin: 10px 0 5px;\n}\n\n.projects-content {\n    display: flex;\n    flex-direction: column;\n    margin-left: 10%;\n}\n\n.new-project-form .textarea {\n    background-color: var(--sidebarBg);\n    font-size: 16px;\n    padding: 3px;\n    \n}\n\n.textarea::placeholder {\n    opacity: 1;\n}\n\n.task-button {\n    opacity: 0.6;\n    margin-top: 5px;\n    margin-right: 5px;\n    width: 28px;\n    height: 28px;\n}\n\n.task-button:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.red-text::placeholder {\n    color: var(--brightRed);\n}\n\n.project-selector {\n    color: var(--todoText);\n    background-color: var(--bgColor);\n    padding: 2px;\n    margin-bottom: -2px;\n}\n\n.slider-container {\n    margin-bottom: 8px;\n}\n\n.due-date-picker {\n    width: 150px;\n    background-color: var(--bgColor);\n    color: var(--todoText);\n    margin-top: 5px;\n}\n\n.due-date-picker::-webkit-calendar-picker-indicator {\n    filter: var(--filter);\n}\n\n.date-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n}\n\n.prio-text {\n    color: var(--todoText);\n    font-size: 18px;\n    text-align: center;\n}\n\n.footer-container {\n    display: flex;\n    align-items: center;\n    color: var(--footerText);\n    background-color: var(--footerBg);\n    border-top: 1px solid #706b6b;\n    height: 70px;\n}\n\n#footer-left {\n    display: flex;\n    justify-content: flex-end;\n    width: 50%;\n    margin-right: 7px;\n}\n\n#footer-right {\n    display: flex;\n    justify-content: flex-start;\n    width: 50%;\n    margin-left: 7px;\n}\n\n.github-image {\n    filter: var(--filter);\n    opacity: 0.6;\n}\n\n.github-image:hover {\n    opacity: 1;\n}\n\n\n"],"sourceRoot":""}]);
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
        if(project == null || project == undefined) return;
        const newOption = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("option", "project-option");
        newOption.value = project.title;
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
    const projectToDelete = getProjects()[projectIndex];
    getProjects()[projectIndex].items.forEach(index => {
        (0,_todoItems__WEBPACK_IMPORTED_MODULE_1__.getTodos)()[index].setProject("Home");
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
    if(typeof Storage == undefined) return;
    JSON.parse(localStorage.projects).forEach(project => {
        projects.push(project);
    });
    renderProjects();
}

function updateLocalProjects() {
    if(typeof Storage == undefined) return;
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
    if(typeof Storage == undefined) return;
    if(localStorage.todos == undefined) return;
    console.log(JSON.parse(localStorage.todos));
    JSON.parse(localStorage.todos).forEach(todo => {
        if(todo == null) return;
        addTodo(todo.title, todo.description, todo.dueDate, todo.priority, todo.project);
    });
    renderImportantTodos();
}

function updateLocalTodos() {
    if(typeof Storage == undefined) return;
    localStorage.todos = JSON.stringify(getTodos());
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
        (0,_projects__WEBPACK_IMPORTED_MODULE_4__.getLocalProjects)();
        (0,_todoItems__WEBPACK_IMPORTED_MODULE_2__.getLocalTodos)();
        if(localStorage.prefersDarkMode == "false") {
            document.body.classList.toggle("light-theme");
            document.getElementById("dark-mode-checkbox").checked = false;
        }
    } else if (typeof Storage !== "undefined" && localStorage.length == 0) {
        (0,_projects__WEBPACK_IMPORTED_MODULE_4__.addHomeProject)();
        localStorage.prefersDarkMode = true;
    } else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVks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O0FBQ3JCLElBQUksOERBQWlCO0FBQ3JCOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQWlCO0FBQ3JCO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEIsUUFBUSx5REFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixRQUFRLHlEQUFjO0FBQ3RCO0FBQ0EsTUFBTTtBQUNOLFFBQVEseURBQWM7QUFDdEI7QUFDQSxJQUFJLHVEQUFXLENBQUMsb0RBQVE7QUFDeEIsSUFBSSxpRUFBZTtBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2ZpRDtBQUMzQjs7QUFFdEIsOERBQW9CLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkQnV0dG9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9iaW5kQ2xpY2tFdmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0l0ZW1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy93ZWJwYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWRhcmtCbHVlOiBoc2woMjQwLCA0MSUsIDclKTtcXG4gICAgLS1saWdodEdyZXlCbHVlOiAjQ0VDRkVEO1xcbiAgICAtLWRpbU9yYW5nZTogI2ZmNmE1MDtcXG4gICAgLS1kaW1SZWQ6ICNmZjUyMzM7XFxuICAgIC0tbGlnaHRQaW5rOiAjZmZkNGRhO1xcbiAgICAtLWRpbVdoaXRlOiAjZTVlNmU3O1xcbiAgICAtLW1pbGRCbHVlV2hpdGU6ICNmMWYxZmY7XFxuICAgIC0tYnJpZ2h0UmVkOiAjZWM0MTQxO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZGFyay10aGVtZSB7XFxuICAgIC0taGVhZGVyQmc6IHZhcigtLWRhcmtCbHVlKTtcXG4gICAgLS1oZWFkZXJUZXh0OiB2YXIoLS1saWdodEdyZXlCbHVlKTtcXG4gICAgLS1oZWFkZXJCb3JkZXI6ICNGRkZGRkY7XFxuICAgIC0tc2lkZWJhckJnOiB2YXIoLS1kYXJrQmx1ZSk7XFxuICAgIC0taW1wb3J0YW50QnV0dG9uSG92ZXI6ICNmZjg2NzA7XFxuICAgIC0taW1wb3J0YW50VGV4dDogdmFyKC0tZGltT3JhbmdlKTtcXG4gICAgLS1pbXBvcnRhbnRUZXh0SG92ZXI6IHZhcigtLWRpbVJlZCk7XFxuICAgIC0tZm9sZGVySG92ZXI6IHZhcigtLWxpZ2h0UGluayk7XFxuICAgIC0tdG9kb1RleHQ6IHZhcigtLWRpbVdoaXRlKTtcXG4gICAgLS10b2RvVGV4dEhvdmVyOiBub25lO1xcbiAgICAtLXRvZG9Cb3JkZXI6ICNjNWM2YzcyZjtcXG4gICAgLS1iZ0NvbG9yOiAjMmIyZDQ0O1xcbiAgICAtLWZvb3RlclRleHQ6ICNmMWYxZmZkMjtcXG4gICAgLS1mb290ZXJCZzogaHNsYSgyNDAsIDE3JSwgMTYlLCAwLjcxOSk7XFxuICAgIC0tcHJvamVjdFRleHQ6IHZhcigtLW1pbGRCbHVlV2hpdGUpO1xcbiAgICAtLXByb2plY3RIb3ZlclRleHQ6ICNmZmQ0ZGE7XFxuICAgIC0tcHJvamVjdEJnOiB2YXIoLS1kYXJrQmx1ZSk7XFxuICAgIC0tZmlsdGVyOiBpbnZlcnQoOTMlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgyOCUpIGh1ZS1yb3RhdGUoMjIzZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwMyUpO1xcbn1cXG5cXG4ubGlnaHQtdGhlbWUge1xcbiAgICAtLWhlYWRlckJnOiBoc2woMCwgNTAlLCA2MCUpO1xcbiAgICAtLWhlYWRlclRleHQ6IHdoaXRlO1xcbiAgICAtLWhlYWRlckJvcmRlcjogYmxhY2s7XFxuICAgIC0tc2lkZWJhckJnOiBoc2woMjQwLCAxMiUsIDc2JSk7XFxuICAgIC0taW1wb3J0YW50QnV0dG9uSG92ZXI6ICMwMDAwMDA7XFxuICAgIC0taW1wb3J0YW50VGV4dDogIzBlMGMwYztcXG4gICAgLS1pbXBvcnRhbnRUZXh0SG92ZXI6IGJsYWNrO1xcbiAgICAtLWZvbGRlckhvdmVyOiBibGFjaztcXG4gICAgLS10b2RvVGV4dDogYmxhY2s7XFxuICAgIC0tdG9kb0JvcmRlcjogIzUzNTM1M2NiO1xcbiAgICAtLWJnQ29sb3I6IGhzbCgyNDAsIDklLCA4NiUpO1xcbiAgICAtLWZvb3RlclRleHQ6IGhzbCgyNDAsIDklLCAxMyUpO1xcbiAgICAtLWZvb3RlckJnOiBoc2woMCwgMCUsIDc5JSk7XFxuICAgIC0tcHJvamVjdFRleHQ6IGhzbCgyNDAsIDY2JSwgOSUpO1xcbiAgICAtLXByb2plY3RIb3ZlclRleHQ6IGhzbCgwLCAwJSwgMCUpO1xcbiAgICAtLXByb2plY3RCZzogaHNsKDI0MCwgMTIlLCA3NiUpO1xcbiAgICAtLWZpbHRlcjogbm9uZTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlckJnKTtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlclRleHQpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1oZWFkZXJCb3JkZXIpO1xcbiAgICBoZWlnaHQ6IDglO1xcbn1cXG5cXG4uaGVhZGVyLWxlZnQsXFxuLmhlYWRlci1yaWdodCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5oZWFkZXItbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItbG9nbyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcblxcbi5oZWFkZXItcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnN3aXRjaCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XFxufVxcblxcbi5zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIHdpZHRoOiAyNnB4O1xcbiAgICBsZWZ0OiA0cHg7XFxuICAgIGJvdHRvbTogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2NWFkO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi5zbGlkZXIucm91bmQge1xcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG4gIFxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogODYlO1xcbiAgICBtaW4taGVpZ2h0OiA4NDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxufVxcbi5tYWluLWxlZnQge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNzA2YjZiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyQmcpO1xcbiAgICBtYXJnaW4tdG9wOiAxcHg7XFxufVxcbi5tYWluLWNlbnRlciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuLnByb2plY3RzLWJ1dHRvbixcXG4uaW1wb3J0YW50LWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogLTJweDtcXG4gICAgbWluLWhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdFRleHQpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RCZyk7XFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuXFxuLnByb2plY3RzLWJ1dHRvbjpob3ZlciwgXFxuLmltcG9ydGFudC1idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0taW1wb3J0YW50QnV0dG9uSG92ZXIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIsXFxuLmltcG9ydGFudC1jb250YWluZXIge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTVmZjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RCZyk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIHBhZGRpbmc6IDAgMCAxNXB4O1xcbn1cXG5cXG4uaW1wb3J0YW50LWZvbGRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5pbXBvcnRhbnQtaXRlbSB7XFxuICAgIGNvbG9yOiB2YXIoLS1pbXBvcnRhbnRUZXh0KTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi5pbXBvcnRhbnQtaXRlbTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1pbXBvcnRhbnRUZXh0SG92ZXIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy10ZXh0LFxcbi5pbXBvcnRhbnQtdGV4dCB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0cy1pdGVtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWl0ZW0ge1xcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdFRleHQpO1xcbiAgICBmb250LXNpemU6IDIxcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLnByb2plY3RzLWl0ZW0tZGVsZXRlIHtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXIpOyBcXG4gICAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4ucHJvamVjdHMtaXRlbS1kZWxldGU6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1pdGVtOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXByb2plY3RIb3ZlclRleHQpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNuZXctcHJvamVjdC1idXR0b24tY29udGFpbmVyIHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbi5wcm9qZWN0cy1jb250ZW50LnNpZGViYXItaGlkZGVuLFxcbi5pbXBvcnRhbnQtZm9sZGVyLnNpZGViYXItaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Byb2plY3RzLXNwYW4sIFxcbiNpbXBvcnRhbnQtc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0VGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmNlbnRlci1jb250ZW50IHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnRvZG8tdG9wLWNvbnRhaW5lciB7XFxuICAgIGNvbG9yOiB2YXIoLS10b2RvVGV4dCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNDVweDtcXG59XFxuXFxuLnRvZG8tdG9wLWNvbnRhaW5lciA+IHAge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi50b2RvLWFkZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIHBhZGRpbmc6IDVweCA4cHg7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRvZG8tYWRkLWNvbnRhaW5lcjpob3ZlciwgXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tYWRkLWNvbnRhaW5lciA+IHAge1xcbiAgICBjb2xvcjogdmFyKC0tdG9kb1RleHQpO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5hZGQtaW1hZ2UsIC50YXNrLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyMnB4O1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyKTtcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgY29sb3I6IHZhcigtLXRvZG9UZXh0KTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tdG9kb0JvcmRlcik7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10b2RvQm9yZGVyKTtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgbWFyZ2luLXRvcDogLTFweDtcXG59XFxuXFxuLnRvZG8taXRlbS1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLmRlbGV0ZS10b2RvLWJ1dHRvbiB7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyKTtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uZGVsZXRlLXRvZG8tYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4udG9kby1kdWUtZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRvZG8taXRlbTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS10b2RvVGV4dCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2M1YzZjN2IwO1xcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjYzVjNmM3YjA7XFxufVxcblxcbi5uZXctdG9kby1mb3JtLFxcbi50b2RvLWRldGFpbGVkLCBcXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyOTQ1NTI7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhlYWRlckJvcmRlcik7XFxufVxcblxcbi5uZXctdG9kby1mb3JtIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwNzBhO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXG59XFxuXFxuLnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tdG9kb1RleHQpO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5uZXctcHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXByb2plY3RUZXh0KTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIG1hcmdpbjogMTBweCAwIDVweDtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSAudGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyQmcpO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgXFxufVxcblxcbi50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzay1idXR0b24ge1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxufVxcblxcbi50YXNrLWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlZC10ZXh0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1icmlnaHRSZWQpO1xcbn1cXG5cXG4ucHJvamVjdC1zZWxlY3RvciB7XFxuICAgIGNvbG9yOiB2YXIoLS10b2RvVGV4dCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XFxufVxcblxcbi5zbGlkZXItY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4uZHVlLWRhdGUtcGlja2VyIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRvZG9UZXh0KTtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4uZHVlLWRhdGUtcGlja2VyOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcik7XFxufVxcblxcbi5kYXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4ucHJpby10ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLXRvZG9UZXh0KTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWZvb3RlclRleHQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXJCZyk7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzA2YjZiO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbiNmb290ZXItbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xcbn1cXG5cXG4jZm9vdGVyLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xcbn1cXG5cXG4uZ2l0aHViLWltYWdlIHtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXIpO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi5naXRodWItaW1hZ2U6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0IsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHVC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LGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1kYXJrQmx1ZTogaHNsKDI0MCwgNDElLCA3JSk7XFxuICAgIC0tbGlnaHRHcmV5Qmx1ZTogI0NFQ0ZFRDtcXG4gICAgLS1kaW1PcmFuZ2U6ICNmZjZhNTA7XFxuICAgIC0tZGltUmVkOiAjZmY1MjMzO1xcbiAgICAtLWxpZ2h0UGluazogI2ZmZDRkYTtcXG4gICAgLS1kaW1XaGl0ZTogI2U1ZTZlNztcXG4gICAgLS1taWxkQmx1ZVdoaXRlOiAjZjFmMWZmO1xcbiAgICAtLWJyaWdodFJlZDogI2VjNDE0MTtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmRhcmstdGhlbWUge1xcbiAgICAtLWhlYWRlckJnOiB2YXIoLS1kYXJrQmx1ZSk7XFxuICAgIC0taGVhZGVyVGV4dDogdmFyKC0tbGlnaHRHcmV5Qmx1ZSk7XFxuICAgIC0taGVhZGVyQm9yZGVyOiAjRkZGRkZGO1xcbiAgICAtLXNpZGViYXJCZzogdmFyKC0tZGFya0JsdWUpO1xcbiAgICAtLWltcG9ydGFudEJ1dHRvbkhvdmVyOiAjZmY4NjcwO1xcbiAgICAtLWltcG9ydGFudFRleHQ6IHZhcigtLWRpbU9yYW5nZSk7XFxuICAgIC0taW1wb3J0YW50VGV4dEhvdmVyOiB2YXIoLS1kaW1SZWQpO1xcbiAgICAtLWZvbGRlckhvdmVyOiB2YXIoLS1saWdodFBpbmspO1xcbiAgICAtLXRvZG9UZXh0OiB2YXIoLS1kaW1XaGl0ZSk7XFxuICAgIC0tdG9kb1RleHRIb3Zlcjogbm9uZTtcXG4gICAgLS10b2RvQm9yZGVyOiAjYzVjNmM3MmY7XFxuICAgIC0tYmdDb2xvcjogIzJiMmQ0NDtcXG4gICAgLS1mb290ZXJUZXh0OiAjZjFmMWZmZDI7XFxuICAgIC0tZm9vdGVyQmc6IGhzbGEoMjQwLCAxNyUsIDE2JSwgMC43MTkpO1xcbiAgICAtLXByb2plY3RUZXh0OiB2YXIoLS1taWxkQmx1ZVdoaXRlKTtcXG4gICAgLS1wcm9qZWN0SG92ZXJUZXh0OiAjZmZkNGRhO1xcbiAgICAtLXByb2plY3RCZzogdmFyKC0tZGFya0JsdWUpO1xcbiAgICAtLWZpbHRlcjogaW52ZXJ0KDkzJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMjglKSBodWUtcm90YXRlKDIyM2RlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCgxMDMlKTtcXG59XFxuXFxuLmxpZ2h0LXRoZW1lIHtcXG4gICAgLS1oZWFkZXJCZzogaHNsKDAsIDUwJSwgNjAlKTtcXG4gICAgLS1oZWFkZXJUZXh0OiB3aGl0ZTtcXG4gICAgLS1oZWFkZXJCb3JkZXI6IGJsYWNrO1xcbiAgICAtLXNpZGViYXJCZzogaHNsKDI0MCwgMTIlLCA3NiUpO1xcbiAgICAtLWltcG9ydGFudEJ1dHRvbkhvdmVyOiAjMDAwMDAwO1xcbiAgICAtLWltcG9ydGFudFRleHQ6ICMwZTBjMGM7XFxuICAgIC0taW1wb3J0YW50VGV4dEhvdmVyOiBibGFjaztcXG4gICAgLS1mb2xkZXJIb3ZlcjogYmxhY2s7XFxuICAgIC0tdG9kb1RleHQ6IGJsYWNrO1xcbiAgICAtLXRvZG9Cb3JkZXI6ICM1MzUzNTNjYjtcXG4gICAgLS1iZ0NvbG9yOiBoc2woMjQwLCA5JSwgODYlKTtcXG4gICAgLS1mb290ZXJUZXh0OiBoc2woMjQwLCA5JSwgMTMlKTtcXG4gICAgLS1mb290ZXJCZzogaHNsKDAsIDAlLCA3OSUpO1xcbiAgICAtLXByb2plY3RUZXh0OiBoc2woMjQwLCA2NiUsIDklKTtcXG4gICAgLS1wcm9qZWN0SG92ZXJUZXh0OiBoc2woMCwgMCUsIDAlKTtcXG4gICAgLS1wcm9qZWN0Qmc6IGhzbCgyNDAsIDEyJSwgNzYlKTtcXG4gICAgLS1maWx0ZXI6IG5vbmU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXJCZyk7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJUZXh0KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taGVhZGVyQm9yZGVyKTtcXG4gICAgaGVpZ2h0OiA4JTtcXG59XFxuXFxuLmhlYWRlci1sZWZ0LFxcbi5oZWFkZXItcmlnaHQge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4uaGVhZGVyLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLWxvZ28ge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cXG4uaGVhZGVyLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG59XFxuXFxuLnNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNjVhZDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuICBcXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDg2JTtcXG4gICAgbWluLWhlaWdodDogODQwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcblxcbn1cXG4ubWFpbi1sZWZ0IHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzcwNmI2YjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhckJnKTtcXG4gICAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG4ubWFpbi1jZW50ZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5wcm9qZWN0cy1idXR0b24sXFxuLmltcG9ydGFudC1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IHZhcigtLXByb2plY3RUZXh0KTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0QmcpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcblxcbi5wcm9qZWN0cy1idXR0b246aG92ZXIsIFxcbi5pbXBvcnRhbnQtYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWltcG9ydGFudEJ1dHRvbkhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyLFxcbi5pbXBvcnRhbnQtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU1ZmY7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0QmcpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBwYWRkaW5nOiAwIDAgMTVweDtcXG59XFxuXFxuLmltcG9ydGFudC1mb2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uaW1wb3J0YW50LWl0ZW0ge1xcbiAgICBjb2xvcjogdmFyKC0taW1wb3J0YW50VGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4uaW1wb3J0YW50LWl0ZW06aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0taW1wb3J0YW50VGV4dEhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtdGV4dCxcXG4uaW1wb3J0YW50LXRleHQge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdHMtaXRlbS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1pdGVtIHtcXG4gICAgY29sb3I6IHZhcigtLXByb2plY3RUZXh0KTtcXG4gICAgZm9udC1zaXplOiAyMXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi5wcm9qZWN0cy1pdGVtLWRlbGV0ZSB7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyKTsgXFxuICAgIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnByb2plY3RzLWl0ZW0tZGVsZXRlOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtaXRlbTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0SG92ZXJUZXh0KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGVudC5zaWRlYmFyLWhpZGRlbixcXG4uaW1wb3J0YW50LWZvbGRlci5zaWRlYmFyLWhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNwcm9qZWN0cy1zcGFuLCBcXG4jaW1wb3J0YW50LXNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdFRleHQpO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5jZW50ZXItY29udGVudCB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi50b2RvLXRvcC1jb250YWluZXIge1xcbiAgICBjb2xvcjogdmFyKC0tdG9kb1RleHQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XFxufVxcblxcbi50b2RvLXRvcC1jb250YWluZXIgPiBwIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4udG9kby1hZGQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50b2RvLWFkZC1jb250YWluZXI6aG92ZXIsIFxcbi5uZXctcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLWFkZC1jb250YWluZXIgPiBwIHtcXG4gICAgY29sb3I6IHZhcigtLXRvZG9UZXh0KTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4uYWRkLWltYWdlLCAudGFzay1idXR0b24ge1xcbiAgICB3aWR0aDogMjJweDtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcik7XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGNvbG9yOiB2YXIoLS10b2RvVGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXRvZG9Cb3JkZXIpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdG9kb0JvcmRlcik7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIG1hcmdpbi10b3A6IC0xcHg7XFxufVxcblxcbi50b2RvLWl0ZW0tcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi5kZWxldGUtdG9kby1idXR0b24ge1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcik7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmRlbGV0ZS10b2RvLWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnRvZG8tZHVlLWRhdGUge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi50b2RvLWl0ZW06aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tdG9kb1RleHQpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci10b3AtY29sb3I6ICNjNWM2YzdiMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2M1YzZjN2IwO1xcbn1cXG5cXG4ubmV3LXRvZG8tZm9ybSxcXG4udG9kby1kZXRhaWxlZCwgXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjk0NTUyO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXJCb3JkZXIpO1xcbn1cXG5cXG4ubmV3LXRvZG8tZm9ybSB7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwMDcwYTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxufVxcblxcbi50ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXRvZG9UZXh0KTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0VGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBtYXJnaW46IDEwcHggMCA1cHg7XFxufVxcblxcbi5wcm9qZWN0cy1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0gLnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhckJnKTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIFxcbn1cXG5cXG4udGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRhc2stYnV0dG9uIHtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbn1cXG5cXG4udGFzay1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZWQtdGV4dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tYnJpZ2h0UmVkKTtcXG59XFxuXFxuLnByb2plY3Qtc2VsZWN0b3Ige1xcbiAgICBjb2xvcjogdmFyKC0tdG9kb1RleHQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcbn1cXG5cXG4uc2xpZGVyLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLmR1ZS1kYXRlLXBpY2tlciB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10b2RvVGV4dCk7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLmR1ZS1kYXRlLXBpY2tlcjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXIpO1xcbn1cXG5cXG4uZGF0ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLnByaW8tdGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS10b2RvVGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1mb290ZXJUZXh0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyQmcpO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzcwNmI2YjtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4jZm9vdGVyLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcXG59XFxuXFxuI2Zvb3Rlci1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcXG59XFxuXFxuLmdpdGh1Yi1pbWFnZSB7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyKTtcXG4gICAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4uZ2l0aHViLWltYWdlOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFwcGVuZENoaWxkSGVscGVyLCBjcmVhdGVIVE1MRWxlbWVudCB9IGZyb20gXCIuL2RvbUhlbHBlcnNcIjtcbmltcG9ydCBhZGRJY29uIGZyb20gXCIuL2ltYWdlcy9hZGQuc3ZnXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0FkZEJ1dHRvbihjb250YWluZXJDbGFzcywgaW1hZ2VDbGFzcywgdGV4dENsYXNzLCB0ZXh0KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgY29udGFpbmVyQ2xhc3MpO1xuICAgIGNvbnN0IGFkZEltYWdlID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbWdcIiwgaW1hZ2VDbGFzcyk7XG4gICAgYWRkSW1hZ2Uuc3JjID0gYWRkSWNvbjtcbiAgICBjb25zdCBhZGRUZXh0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIHRleHRDbGFzcyk7XG4gICAgYWRkVGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGFpbmVyLCBbYWRkSW1hZ2UsIGFkZFRleHRdKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBjcmVhdGVOZXdBZGRCdXR0b24gfTtcblxuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRIZWxwZXIgfSBmcm9tIFwiLi9kb21IZWxwZXJzXCI7XG5pbXBvcnQgeyBuZXdQcm9qZWN0Q2xpY2ssIHJlQXBwZW5kTmV3UHJvamVjdEJ1dHRvbiB9IGZyb20gXCIuL25ld1Byb2plY3RcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Rhc2tCdXR0b24sIG5ld1Rhc2tDbGljayB9IGZyb20gXCIuL25ld1Rhc2tcIjtcbmltcG9ydCB7IGFkZEl0ZW1Ub1Byb2plY3QsIGFkZFByb2plY3QsIGdldFByb2plY3RJbmRleEJ5VGl0bGUgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgYWRkVG9kbywgY3JlYXRlVG9kb3MsIGRlbGV0ZVRvZG8sIGRpc3BsYXlUb2RvRGV0YWlscywgZWRpdFRvZG8sIGdldFRvZG9zLCByZW5kZXJBbGxUb2RvcyB9IGZyb20gXCIuL3RvZG9JdGVtc1wiO1xuXG5mdW5jdGlvbiBiaW5kQ2xpY2tFdmVudHMoKSB7XG4gICAgY29uc3QgW3Byb2plY3RzQnV0dG9uLCBpbXBvcnRhbnRCdXR0b25dID0gZmluZEJ1dHRvbnMoW1wicHJvamVjdHMtYnV0dG9uXCIsIFwiaW1wb3J0YW50LWJ1dHRvblwiXSk7XG4gICAgY29uc3QgZGFya01vZGVDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFyay1tb2RlLWNoZWNrYm94XCIpO1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tYWRkLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1idXR0b25cIik7XG5cbiAgICBhZGRQcm9qZWN0c0J1dHRvbkV2ZW50KHByb2plY3RzQnV0dG9uKTtcbiAgICBhZGRJbXBvcnRhbnRCdXR0b25FdmVudChpbXBvcnRhbnRCdXR0b24pO1xuICAgIGFkZEFkZFRhc2tCdXR0b25FdmVudChhZGRUYXNrQnV0dG9uKTtcbiAgICBhZGROZXdQcm9qZWN0QnV0dG9uRXZlbnQoYWRkUHJvamVjdEJ1dHRvbik7XG59XG5cbmZ1bmN0aW9uIGFkZEFkZFRhc2tCdXR0b25FdmVudChhZGRUYXNrQnV0dG9uKSB7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbmV3VGFza0NsaWNrKGUpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0c0J1dHRvbkV2ZW50KHByb2plY3RzQnV0dG9uKSB7XG4gICAgcHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHByb2plY3RzQnV0dG9uLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwic2lkZWJhci1oaWRkZW5cIik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEltcG9ydGFudEJ1dHRvbkV2ZW50KGltcG9ydGFudEJ1dHRvbikge1xuICAgIGltcG9ydGFudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaW1wb3J0YW50QnV0dG9uLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwic2lkZWJhci1oaWRkZW5cIik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZENsb3NlQnV0dG9uRXZlbnQoY2xvc2VCdXR0b24pIHtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gY2xvc2VCdXR0b24ucGFyZW50Tm9kZTtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICByZUFwcGVuZE5ld1Rhc2tCdXR0b24oKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkQ29uZmlybUJ1dHRvbkV2ZW50KGNvbmZpcm1CdXR0b24pIHtcbiAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBjb25maXJtQnV0dG9uLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtdGV4dGFyZWFcIik7XG4gICAgICAgIGlmICh0aXRsZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgdGl0bGUucGxhY2Vob2xkZXIgPSBcIlRoaXMgZmllbGQgY2Fubm90IGJlIGVtcHR5LlwiO1xuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInJlZC10ZXh0XCIpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcInJlZC10ZXh0XCIpO1xuICAgICAgICAgICAgfSwgNzUwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uLXRleHRhcmVhXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLWNvbnRhaW5lciAuZHVlLWRhdGUtcGlja2VyXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5LXNsaWRlclwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Qtc2VsZWN0b3JcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9JRCA9IGFkZFRvZG8odGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG4gICAgICAgIGFkZEl0ZW1Ub1Byb2plY3QodG9kb0lELCBnZXRQcm9qZWN0SW5kZXhCeVRpdGxlKHByb2plY3QpKTtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICByZUFwcGVuZE5ld1Rhc2tCdXR0b24oKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRGVsZXRlVG9kb0V2ZW50KGRlbGV0ZUJ1dHRvbikge1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZGVsZXRlQnV0dG9uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgdG9kb0lEID0gcGFyZW50LmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgICBkZWxldGVUb2RvKHRvZG9JRCk7XG4gICAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhZGRMaWdodFN3aXRjaEV2ZW50KHN3aXRjaElucHV0KSB7XG4gICAgc3dpdGNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImxpZ2h0LXRoZW1lXCIpO1xuICAgICAgICBpZiAodHlwZW9mIFN0b3JhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByZWZlcnNEYXJrTW9kZSkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucHJlZmVyc0RhcmtNb2RlID0gSlNPTi5zdHJpbmdpZnkoZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucHJlZmVyc0RhcmtNb2RlID0gSlNPTi5zdHJpbmdpZnkodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdEJ1dHRvbkV2ZW50KGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbmV3UHJvamVjdENsaWNrKGUpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRDb25maXJtTmV3UHJvamVjdEJ1dHRvbkV2ZW50KGNvbmZpcm1CdXR0b24pIHtcbiAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjb25maXJtQnV0dG9uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWlucHV0XCIpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRleHRhcmVhLnZhbHVlO1xuICAgICAgICBhZGRQcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICByZUFwcGVuZE5ld1Byb2plY3RCdXR0b24oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1jb250ZW50XCIpKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkQ2xvc2VOZXdQcm9qZWN0QnV0dG9uRXZlbnQoY2xvc2VCdXR0b24pIHtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY2xvc2VCdXR0b24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIHJlQXBwZW5kTmV3UHJvamVjdEJ1dHRvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWNvbnRlbnRcIikpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGREZXRhaWxlZENvbmZpcm1CdXR0b25FdmVudChjb25maXJtQnV0dG9uLCBpZCkge1xuICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGNvbmZpcm1CdXR0b24ucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS10ZXh0YXJlYVwiKTtcbiAgICAgICAgaWYgKHRpdGxlLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICB0aXRsZS5wbGFjZWhvbGRlciA9IFwiVGhpcyBmaWVsZCBjYW5ub3QgYmUgZW1wdHkuXCI7XG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwicmVkLXRleHRcIik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwicmVkLXRleHRcIik7XG4gICAgICAgICAgICB9LCA3NTApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb24tdGV4dGFyZWFcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLWNvbnRhaW5lciAuZHVlLWRhdGUtcGlja2VyXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5LXNsaWRlclwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Qtc2VsZWN0b3JcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGVkaXRlZFRvZG9JRCA9IGVkaXRUb2RvKGlkLCB0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICByZW5kZXJBbGxUb2RvcygpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdEluZGV4ID0gZ2V0UHJvamVjdEluZGV4QnlUaXRsZShwcm9qZWN0KTtcbiAgICAgICAgYWRkSXRlbVRvUHJvamVjdChlZGl0ZWRUb2RvSUQsIGN1cnJlbnRQcm9qZWN0SW5kZXgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGREZXRhaWxlZENsb3NlQnV0dG9uRXZlbnQoY2xvc2VCdXR0b24pIHtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY3JlYXRlVG9kb3MoZ2V0VG9kb3MoKSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlQXBwZW5kTmV3VGFza0J1dHRvbigpIHtcbiAgICBjb25zdCBuZXdUYXNrQnV0dG9uID0gY3JlYXRlTmV3VGFza0J1dHRvbigpO1xuICAgIGFkZEFkZFRhc2tCdXR0b25FdmVudChuZXdUYXNrQnV0dG9uKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNlbnRlci1jb250ZW50XCIpLCBuZXdUYXNrQnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9kb0V2ZW50KHRvZG8pIHtcbiAgICB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLXRvZG8tYnV0dG9uXCIpKSByZXR1cm47XG4gICAgICAgIGlmIChbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtdG9kby1idXR0b25cIildLmluY2x1ZGVzKGUudGFyZ2V0KSkgcmV0dXJuO1xuICAgICAgICBkaXNwbGF5VG9kb0RldGFpbHMoZS5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZmluZEJ1dHRvbnMoYnV0dG9uSURzKSB7XG4gICAgY29uc3QgZG9tQnV0dG9ucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpXTtcbiAgICBjb25zdCByZXR1cm5CdXR0b25zID0gW107XG4gICAgaWYgKHR5cGVvZiBidXR0b25JRHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgYnV0dG9uSURzLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgICAgZG9tQnV0dG9ucy5maW5kKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5CdXR0b25zLnB1c2goYnV0dG9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9tQnV0dG9ucy5maW5kKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgICAgICAgIHJldHVybiBidXR0b24uaWQgPT09IGJ1dHRvbklEcztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5CdXR0b25zO1xufVxuXG5leHBvcnQge1xuICAgIGJpbmRDbGlja0V2ZW50cywgYWRkQ29uZmlybUJ1dHRvbkV2ZW50LCBhZGRDbG9zZUJ1dHRvbkV2ZW50LFxuICAgIGFkZFRvZG9FdmVudCwgYWRkRGV0YWlsZWRDbG9zZUJ1dHRvbkV2ZW50LCBhZGREZXRhaWxlZENvbmZpcm1CdXR0b25FdmVudCxcbiAgICBhZGRDbG9zZU5ld1Byb2plY3RCdXR0b25FdmVudCwgYWRkQ29uZmlybU5ld1Byb2plY3RCdXR0b25FdmVudCwgYWRkTmV3UHJvamVjdEJ1dHRvbkV2ZW50LCBhZGREZWxldGVUb2RvRXZlbnQsIGFkZExpZ2h0U3dpdGNoRXZlbnQsXG59OyIsImZ1bmN0aW9uIGNyZWF0ZUhUTUxFbGVtZW50KGVsZW1lbnQsIGNsYXNzZXMsIGlkKSB7XG4gICAgY29uc3QgcmV0dXJuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgaWYgKHR5cGVvZiBjbGFzc2VzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGNsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NUb0FkZCkge1xuICAgICAgICAgICAgcmV0dXJuRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjbGFzc2VzID09PSBcInN0cmluZ1wiICYmIGNsYXNzZXMgIT09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzZXMpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGlkID09PSBcInN0cmluZ1wiICYmIGlkICE9PSBcIlwiKSB7XG4gICAgICAgIHJldHVybkVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQ2hpbGRIZWxwZXIoZWxlbWVudCwgY2hpbGRyZW4pIHtcbiAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKGNoaWxkcmVuKS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkgJiYgdHlwZW9mIGNoaWxkcmVuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGRyZW4oZWxlbWVudCkge1xuICAgIHdoaWxlKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBjcmVhdGVIVE1MRWxlbWVudCwgYXBwZW5kQ2hpbGRIZWxwZXIsIHJlbW92ZUFsbENoaWxkcmVuIH07IiwiaW1wb3J0IHsgYWRkQ2xvc2VOZXdQcm9qZWN0QnV0dG9uRXZlbnQsIGFkZENvbmZpcm1OZXdQcm9qZWN0QnV0dG9uRXZlbnQsIGFkZE5ld1Byb2plY3RCdXR0b25FdmVudCB9IGZyb20gXCIuL2JpbmRDbGlja0V2ZW50c1wiO1xuaW1wb3J0IHsgYXBwZW5kQ2hpbGRIZWxwZXIsIGNyZWF0ZUhUTUxFbGVtZW50IH0gZnJvbSBcIi4vZG9tSGVscGVyc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29uZmlybUJ1dHRvbiwgY3JlYXRlQ2xvc2VCdXR0b24gfSBmcm9tIFwiLi9uZXdUYXNrXCI7XG5pbXBvcnQgYWRkSWNvbiBmcm9tIFwiLi9pbWFnZXMvYWRkLnN2Z1wiO1xuaW1wb3J0IHsgY3JlYXRlTmV3QWRkQnV0dG9uIH0gZnJvbSBcIi4vYWRkQnV0dG9uXCI7XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3RDbGljayhlKSB7XG4gICAgY29uc3QgcGFyZW50ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgZS5jdXJyZW50VGFyZ2V0LnJlbW92ZSgpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwibmV3LXByb2plY3QtY29udGFpbmVyXCIsIFwibmV3LXByb2plY3QtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJuZXctcHJvamVjdC1mb3JtXCIsIFwibmV3LXByb2plY3QtZm9ybVwiKTtcbiAgICBjb25zdCB0aXRsZUFyZWEgPSBjcmVhdGVIVE1MRWxlbWVudChcImlucHV0XCIsIFtcInRleHRhcmVhXCIsIFwibmV3LXByb2plY3QtdGV4dGFyZWFcIl0sIFwibmV3LXByb2plY3QtaW5wdXRcIik7XG4gICAgdGl0bGVBcmVhLnBsYWNlaG9sZGVyID0gXCJUaXRsZTogQ29kaW5nXCI7XG4gICAgdGl0bGVBcmVhLnR5cGUgPSBcInRleHRcIjtcbiAgICB0aXRsZUFyZWEuc2l6ZSA9IFwiMThcIjtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gY3JlYXRlQ29uZmlybUJ1dHRvbigpO1xuICAgIGFkZENvbmZpcm1OZXdQcm9qZWN0QnV0dG9uRXZlbnQoY29uZmlybUJ1dHRvbik7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBjcmVhdGVDbG9zZUJ1dHRvbigpO1xuICAgIGFkZENsb3NlTmV3UHJvamVjdEJ1dHRvbkV2ZW50KGNsb3NlQnV0dG9uKTtcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcIlwiLCBcIm5ldy1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXJcIik7XG5cbiAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250YWluZXIsIGFwcGVuZENoaWxkSGVscGVyKG5ld1Byb2plY3RGb3JtLCB0aXRsZUFyZWEpKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250YWluZXIsIGFwcGVuZENoaWxkSGVscGVyKGJ1dHRvbkNvbnRhaW5lciwgW2NvbmZpcm1CdXR0b24sIGNsb3NlQnV0dG9uXSkpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKHBhcmVudCwgY29udGFpbmVyKTtcbiAgICB0aXRsZUFyZWEuZm9jdXMoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdEJ1dHRvbigpIHtcbiAgICBjb25zdCBuZXdCdXR0b24gPSBjcmVhdGVOZXdBZGRCdXR0b24oXCJuZXctcHJvamVjdC1idXR0b25cIiwgXCJhZGQtaW1hZ2VcIiwgXCJuZXctcHJvamVjdC10ZXh0XCIsIFwiTmV3IFByb2plY3RcIik7XG4gICAgcmV0dXJuIG5ld0J1dHRvbjtcbn1cblxuZnVuY3Rpb24gcmVBcHBlbmROZXdQcm9qZWN0QnV0dG9uKHBhcmVudE5vZGUpIHtcbiAgICBjb25zdCBuZXdCdXR0b24gPSBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uKCk7XG4gICAgYWRkTmV3UHJvamVjdEJ1dHRvbkV2ZW50KG5ld0J1dHRvbik7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIocGFyZW50Tm9kZSwgbmV3QnV0dG9uKTtcbn1cblxuZXhwb3J0IHsgbmV3UHJvamVjdENsaWNrLCBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uLCByZUFwcGVuZE5ld1Byb2plY3RCdXR0b24gfTsiLCJpbXBvcnQgeyBhcHBlbmRDaGlsZEhlbHBlciwgY3JlYXRlSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9kb21IZWxwZXJzXCI7XG5pbXBvcnQgeyBhZGRDb25maXJtQnV0dG9uRXZlbnQsIGFkZENsb3NlQnV0dG9uRXZlbnQgfSBmcm9tIFwiLi9iaW5kQ2xpY2tFdmVudHNcIjtcbmltcG9ydCB7IGdldFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCBjb25maXJtSWNvbiBmcm9tIFwiLi9pbWFnZXMvY29uZmlybS5zdmdcIjtcbmltcG9ydCBjbG9zZUljb24gZnJvbSBcIi4vaW1hZ2VzL2Nsb3NlLnN2Z1wiO1xuaW1wb3J0IGFkZEljb24gZnJvbSBcIi4vaW1hZ2VzL2FkZC5zdmdcIjtcbmltcG9ydCB7IGdldFRvZG9zQnlJRCB9IGZyb20gXCIuL3RvZG9JdGVtc1wiO1xuXG5mdW5jdGlvbiBuZXdUYXNrQ2xpY2soZSwgdG9kb0lEKSB7XG4gICAgY29uc3QgcGFyZW50ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgZS5jdXJyZW50VGFyZ2V0LnJlbW92ZSgpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwibmV3LXRvZG8tY29udGFpbmVyXCIsIFwibmV3LXRvZG8tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IG5ld1RvZG9Gb3JtID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJuZXctdG9kby1mb3JtXCIsIFwibmV3LXRvZG8tZm9ybVwiKTtcbiAgICBjb25zdCB0aXRsZUFyZWEgPSBjcmVhdGVUaXRsZUFyZWEoKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkFyZWEgPSBjcmVhdGVEZXNjcmlwdGlvbkFyZWEoKTtcbiAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gY3JlYXRlRGF0ZUNvbnRhaW5lcih0cnVlLCB0b2RvSUQpO1xuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBjcmVhdGVDb25maXJtQnV0dG9uKCk7XG4gICAgYWRkQ29uZmlybUJ1dHRvbkV2ZW50KGNvbmZpcm1CdXR0b24pO1xuICAgIGNvbmZpcm1CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctdGFzay1jb25maXJtXCIpO1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlQ2xvc2VCdXR0b24oKTtcbiAgICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy10YXNrLWNsb3NlXCIpO1xuICAgIGFkZENsb3NlQnV0dG9uRXZlbnQoY2xvc2VCdXR0b24pO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRhaW5lciwgYXBwZW5kQ2hpbGRIZWxwZXIobmV3VG9kb0Zvcm0sIFt0aXRsZUFyZWEsIGRlc2NyaXB0aW9uQXJlYSwgZGF0ZUNvbnRhaW5lcl0pKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250YWluZXIsIFtjb25maXJtQnV0dG9uLCBjbG9zZUJ1dHRvbl0pO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKHBhcmVudCwgY29udGFpbmVyKTtcbiAgICB0aXRsZUFyZWEuZm9jdXMoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2xpZGVyKCkge1xuICAgIGNvbnN0IHNsaWRlckNvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwic2xpZGVyLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwcmlvU2xpZGVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbnB1dFwiLCBcInByaW9yaXR5LXNsaWRlclwiKTtcbiAgICBwcmlvU2xpZGVyLnR5cGUgPSBcInJhbmdlXCI7XG4gICAgcHJpb1NsaWRlci5taW4gPSBcIjFcIjtcbiAgICBwcmlvU2xpZGVyLm1heCA9IFwiMTBcIjtcbiAgICBwcmlvU2xpZGVyLnZhbHVlID0gXCI1XCI7XG4gICAgY29uc3QgcHJpb1RleHQgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJwcmlvLXRleHRcIik7XG4gICAgcHJpb1RleHQudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihzbGlkZXJDb250YWluZXIsIFtwcmlvVGV4dCwgcHJpb1NsaWRlcl0pO1xuICAgIHJldHVybiBzbGlkZXJDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbmZpcm1CdXR0b24oKSB7XG4gICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaW1nXCIsIFtcInRhc2stYnV0dG9uXCIsIFwiY29uZmlybS1idXR0b25cIl0pO1xuICAgIGNvbmZpcm1CdXR0b24uc3JjID0gY29uZmlybUljb247XG4gICAgcmV0dXJuIGNvbmZpcm1CdXR0b247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsb3NlQnV0dG9uKCkge1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbWdcIiwgW1widGFzay1idXR0b25cIiwgXCJjbG9zZS1idXR0b25cIl0pO1xuICAgIGNsb3NlQnV0dG9uLnNyYyA9IGNsb3NlSWNvbjtcbiAgICByZXR1cm4gY2xvc2VCdXR0b247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGVDb250YWluZXIoaXNOZXdUYXNrLCB0b2RvSUQpIHtcbiAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJkYXRlLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBkYXRlUGlja2VyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbnB1dFwiLCBcImR1ZS1kYXRlLXBpY2tlclwiKTtcbiAgICBkYXRlUGlja2VyLnR5cGUgPSBcImRhdGVcIjtcbiAgICBkYXRlUGlja2VyLnZhbHVlQXNEYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwic2VsZWN0XCIsIFwicHJvamVjdC1zZWxlY3RvclwiKTtcbiAgICBzZWxlY3Rvci5uYW1lID0gXCJwcm9qZWN0c1wiO1xuICAgIGdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBpZihwcm9qZWN0ID09IG51bGwgfHwgcHJvamVjdCA9PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3T3B0aW9uID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJvcHRpb25cIiwgXCJwcm9qZWN0LW9wdGlvblwiKTtcbiAgICAgICAgbmV3T3B0aW9uLnZhbHVlID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgaWYgKG5ld09wdGlvbi52YWx1ZSA9PT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXBhZ2UtdGl0bGVcIikudGV4dENvbnRlbnQgJiYgaXNOZXdUYXNrKSB7XG4gICAgICAgICAgICBuZXdPcHRpb24uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcXFwic2VsZWN0ZWRcXFwiXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc05ld1Rhc2spIHtcbiAgICAgICAgICAgIGlmKG5ld09wdGlvbi52YWx1ZSA9PT0gZ2V0VG9kb3NCeUlEKFt0b2RvSURdKVswXS5nZXRQcm9qZWN0KCkpIHtcbiAgICAgICAgICAgICAgICBuZXdPcHRpb24uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcXFwic2VsZWN0ZWRcXFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICAgICBuZXdPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICBhcHBlbmRDaGlsZEhlbHBlcihzZWxlY3RvciwgbmV3T3B0aW9uKTtcbiAgICB9KTtcblxuICAgIGFwcGVuZENoaWxkSGVscGVyKHByb2plY3RDb250YWluZXIsIHNlbGVjdG9yKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihkYXRlQ29udGFpbmVyLCBbZGF0ZVBpY2tlciwgcHJvamVjdENvbnRhaW5lciwgY3JlYXRlU2xpZGVyKCldKTtcbiAgICByZXR1cm4gZGF0ZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb25BcmVhKCkge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uQXJlYSA9IGNyZWF0ZUhUTUxFbGVtZW50KFwidGV4dGFyZWFcIiwgW1wiZGVzY3JpcHRpb24tdGV4dGFyZWFcIiwgXCJ0ZXh0YXJlYVwiXSk7XG4gICAgZGVzY3JpcHRpb25BcmVhLnBsYWNlaG9sZGVyID0gXCJEZXRhaWxzOiBQcmVmZXJhYmx5IGJlZm9yZSB5b3Ugc3RhcnZlLlwiXG4gICAgZGVzY3JpcHRpb25BcmVhLnJvd3MgPSBcIjVcIjtcbiAgICByZXR1cm4gZGVzY3JpcHRpb25BcmVhO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUaXRsZUFyZWEoKSB7XG4gICAgY29uc3QgdGl0bGVBcmVhID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBbXCJ0aXRsZS10ZXh0YXJlYVwiLCBcInRleHRhcmVhXCJdKTtcbiAgICB0aXRsZUFyZWEucGxhY2Vob2xkZXIgPSBcIlRpdGxlOiBFYXQgZm9vZFwiO1xuICAgIHJldHVybiB0aXRsZUFyZWE7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tCdXR0b24oKSB7XG4gICAgY29uc3QgYm90dG9tQ29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWFkZC1jb250YWluZXJcIiwgXCJ0b2RvLWFkZC1jb250YWluZXJcIik7XG4gICAgY29uc3QgYWRkSW1hZ2UgPSBjcmVhdGVIVE1MRWxlbWVudChcImltZ1wiLCBcImFkZC1pbWFnZVwiLCBcImFkZC1pbWFnZVwiKTtcbiAgICBhZGRJbWFnZS5zcmMgPSBhZGRJY29uO1xuICAgIGNvbnN0IGFkZFRleHQgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJhZGQtdGV4dFwiLCBcImFkZC10ZXh0XCIpO1xuICAgIGFkZFRleHQudGV4dENvbnRlbnQgPSBcIk5ldyBUYXNrXCI7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoYm90dG9tQ29udGFpbmVyLCBbYWRkSW1hZ2UsIGFkZFRleHRdKTtcbiAgICByZXR1cm4gYm90dG9tQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBuZXdUYXNrQ2xpY2ssIGNyZWF0ZU5ld1Rhc2tCdXR0b24sIGNyZWF0ZVNsaWRlciwgY3JlYXRlQ2xvc2VCdXR0b24sIGNyZWF0ZUNvbmZpcm1CdXR0b24sIGNyZWF0ZURhdGVDb250YWluZXIsIGNyZWF0ZVRpdGxlQXJlYSwgY3JlYXRlRGVzY3JpcHRpb25BcmVhIH07IiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRIZWxwZXIsIGNyZWF0ZUhUTUxFbGVtZW50LCByZW1vdmVBbGxDaGlsZHJlbiB9IGZyb20gXCIuL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG9zLCBnZXRUb2RvcywgZ2V0VG9kb3NCeUlEIH0gZnJvbSBcIi4vdG9kb0l0ZW1zXCI7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi9pbWFnZXMvZGVsZXRlLnN2Z1wiO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xuY29uc3QgY3VycmVudFByb2plY3QgPSAwO1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlKSB7XG4gICAgdGl0bGUgPSB0aXRsZS5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGl0bGUuc2xpY2UoMSwgdGl0bGUubGVuZ3RoKS50b0xvd2VyQ2FzZSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYocHJvamVjdHNbaV0gPT0gbnVsbCkgY29udGludWU7XG4gICAgICAgIGlmIChwcm9qZWN0c1tpXS50aXRsZSA9PT0gdGl0bGUpIHJldHVybjtcbiAgICB9XG4gICAgcHJvamVjdHMucHVzaCh7XG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgaXRlbXM6IFtdLFxuICAgIH0pO1xuICAgIHByb2plY3RzW3Byb2plY3RzLmxlbmd0aCAtIDFdLmluZGV4ID0gcHJvamVjdHMubGVuZ3RoIC0gMTtcbiAgICB1cGRhdGVMb2NhbFByb2plY3RzKCk7XG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbn1cblxuZnVuY3Rpb24gYWRkSG9tZVByb2plY3QoKSB7XG4gICAgYWRkUHJvamVjdChcIkhvbWVcIik7XG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW1Ub1Byb2plY3QodG9kb0lELCBwcm9qZWN0SW5kZXgpIHtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBpZiAocHJvamVjdCA9PSBudWxsIHx8IHByb2plY3QgPT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGZvdW5kSW5kZXggPSBwcm9qZWN0Lml0ZW1zLmZpbmRJbmRleChpZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaWQgPT0gdG9kb0lEO1xuICAgICAgICB9KVxuICAgICAgICBpZiAoZm91bmRJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBwcm9qZWN0Lml0ZW1zLnNwbGljZShmb3VuZEluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0uaXRlbXMucHVzaCh0b2RvSUQpO1xuICAgIGlmIChwcm9qZWN0SW5kZXggPiAwKSB7XG4gICAgICAgIHByb2plY3RzWzBdLml0ZW1zLnB1c2godG9kb0lEKTtcbiAgICB9XG4gICAgdXBkYXRlTG9jYWxQcm9qZWN0cygpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVJdGVtRnJvbVByb2plY3QodG9kb0lEKSB7XG4gICAgbGV0IHByb2plY3RUaXRsZTtcbiAgICBnZXRQcm9qZWN0cygpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0ID09IG51bGwgfHwgcHJvamVjdCA9PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgaWYgKHByb2plY3QuaXRlbXMuaW5jbHVkZXMoK3RvZG9JRCkpIHtcbiAgICAgICAgICAgIHByb2plY3QuaXRlbXMuc3BsaWNlKHRvZG9JRCwgMSwgXCJcIik7XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY3JlYXRlVG9kb3MoZ2V0VG9kb3NCeUlEKGdldElEc09mUHJvamVjdChnZXRQcm9qZWN0SW5kZXhCeVRpdGxlKHByb2plY3RUaXRsZSkpKSk7XG4gICAgdXBkYXRlTG9jYWxQcm9qZWN0cygpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RJbmRleCkge1xuICAgIGNvbnN0IHByb2plY3RUb0RlbGV0ZSA9IGdldFByb2plY3RzKClbcHJvamVjdEluZGV4XTtcbiAgICBnZXRQcm9qZWN0cygpW3Byb2plY3RJbmRleF0uaXRlbXMuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICAgIGdldFRvZG9zKClbaW5kZXhdLnNldFByb2plY3QoXCJIb21lXCIpO1xuICAgIH0pO1xuICAgIGdldFByb2plY3RzKCkuc3BsaWNlKHByb2plY3RJbmRleCwgMSwgbnVsbCk7XG4gICAgdXBkYXRlTG9jYWxQcm9qZWN0cygpO1xufVxuXG5mdW5jdGlvbiBnZXRJRHNPZlByb2plY3QocHJvamVjdEluZGV4KSB7XG4gICAgcmV0dXJuIHByb2plY3RzW3Byb2plY3RJbmRleF0uaXRlbXM7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAgIHJldHVybiBwcm9qZWN0cztcbn1cblxuZnVuY3Rpb24gc2V0UHJvamVjdFRvSG9tZShwcm9qZWN0KSB7XG4gICAgcHJvamVjdC5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLnNldFByb2plY3QoXCJIb21lXCIpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0SW5kZXhCeVRpdGxlKHRpdGxlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdHNbaV0gPT0gbnVsbCkgY29udGludWU7XG4gICAgICAgIGlmIChwcm9qZWN0c1tpXS50aXRsZSA9PT0gdGl0bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xuICAgIHJlbW92ZUFsbENoaWxkcmVuKGNvbnRhaW5lcik7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgaWYocHJvamVjdCA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInByb2plY3RzLWl0ZW0tY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0RWxlbWVudCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwicFwiLCBcInByb2plY3RzLWl0ZW1cIik7XG4gICAgICAgIG5ld1Byb2plY3RFbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgbmV3UHJvamVjdEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SW5kZXggPSBgJHtwcm9qZWN0cy5maW5kSW5kZXgoZWxlbWVudCA9PiBwcm9qZWN0ID09PSBlbGVtZW50KX1gO1xuICAgICAgICBuZXdQcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1wYWdlLXRpdGxlXCIpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gbmV3UHJvamVjdEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SW5kZXhcbiAgICAgICAgICAgIHRpdGxlTm9kZS50ZXh0Q29udGVudCA9IGdldFByb2plY3RzKClbcHJvamVjdEluZGV4XS50aXRsZTtcbiAgICAgICAgICAgIGNyZWF0ZVRvZG9zKGdldFRvZG9zQnlJRChnZXRJRHNPZlByb2plY3QocHJvamVjdEluZGV4KSkpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IG5ld1Byb2plY3RFbGVtZW50LmRhdGFzZXQucHJvamVjdEluZGV4O1xuICAgICAgICBpZiAocHJvamVjdEluZGV4ID4gMCkge1xuICAgICAgICAgICAgY29uc3QgbmV3RGVsZXRlQnV0dG9uID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbWdcIiwgXCJwcm9qZWN0cy1pdGVtLWRlbGV0ZVwiKTtcbiAgICAgICAgICAgIG5ld0RlbGV0ZUJ1dHRvbi5zcmMgPSBkZWxldGVJY29uO1xuICAgICAgICAgICAgbmV3RGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZVByb2plY3REZWxldGlvbihlLCBwcm9qZWN0SW5kZXgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRhaW5lciwgYXBwZW5kQ2hpbGRIZWxwZXIobmV3UHJvamVjdENvbnRhaW5lciwgW25ld1Byb2plY3RFbGVtZW50LCBuZXdEZWxldGVCdXR0b25dKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250YWluZXIsIGFwcGVuZENoaWxkSGVscGVyKG5ld1Byb2plY3RDb250YWluZXIsIFtuZXdQcm9qZWN0RWxlbWVudF0pKTtcbiAgICAgICAgfVxuXG5cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TG9jYWxQcm9qZWN0cygpIHtcbiAgICBpZih0eXBlb2YgU3RvcmFnZSA9PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wcm9qZWN0cykuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9KTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVMb2NhbFByb2plY3RzKCkge1xuICAgIGlmKHR5cGVvZiBTdG9yYWdlID09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIGxvY2FsU3RvcmFnZS5wcm9qZWN0cyA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdERlbGV0aW9uKGUsIHByb2plY3RJbmRleCkge1xuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0SW5kZXgpO1xufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdE5hbWUoc3RyaW5nLCBwcm9qZWN0SW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHN0cmluZyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRpdGxlID0gc3RyaW5nO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBhZGRQcm9qZWN0LCBhZGRIb21lUHJvamVjdCwgYWRkSXRlbVRvUHJvamVjdCwgZGVsZXRlSXRlbUZyb21Qcm9qZWN0LCBlZGl0UHJvamVjdE5hbWUsXG4gICAgZ2V0SURzT2ZQcm9qZWN0LCBnZXRQcm9qZWN0cywgZ2V0TG9jYWxQcm9qZWN0cywgZ2V0UHJvamVjdEluZGV4QnlUaXRsZSwgcmVuZGVyUHJvamVjdHNcbn07XG4iLCJjbGFzcyB0b2RvSXRlbSB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cblxuICAgIGdldFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG5cbiAgICBzZXRUaXRsZShpbnB1dCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gaW5wdXQ7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKGlucHV0KSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBpbnB1dDtcbiAgICB9XG5cbiAgICBnZXREdWVEYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgIH1cblxuICAgIHNldER1ZURhdGUoaW5wdXQpIHtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gaW5wdXQ7XG4gICAgfVxuXG4gICAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICAgIH1cblxuICAgIHNldFByaW9yaXR5KGlucHV0KSB7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBpbnB1dDtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0O1xuICAgIH1cblxuICAgIHNldFByb2plY3QoaW5wdXQpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gaW5wdXQ7XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IHRvZG9JdGVtIH07IiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRIZWxwZXIsIGNyZWF0ZUhUTUxFbGVtZW50LCByZW1vdmVBbGxDaGlsZHJlbiB9IGZyb20gXCIuL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7IGFkZFRvZG9FdmVudCwgYWRkRGV0YWlsZWRDbG9zZUJ1dHRvbkV2ZW50LCBhZGREZXRhaWxlZENvbmZpcm1CdXR0b25FdmVudCwgYWRkRGVsZXRlVG9kb0V2ZW50IH0gZnJvbSBcIi4vYmluZENsaWNrRXZlbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVTbGlkZXIsIGNyZWF0ZUNsb3NlQnV0dG9uLCBjcmVhdGVDb25maXJtQnV0dG9uLCBjcmVhdGVEYXRlQ29udGFpbmVyLCBjcmVhdGVUaXRsZUFyZWEsIGNyZWF0ZURlc2NyaXB0aW9uQXJlYSB9IGZyb20gXCIuL25ld1Rhc2tcIjtcbmltcG9ydCB7IGRlbGV0ZUl0ZW1Gcm9tUHJvamVjdCwgZ2V0UHJvamVjdEluZGV4QnlUaXRsZSwgZ2V0UHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgdG9kb0l0ZW0gfSBmcm9tIFwiLi90b2RvSXRlbVwiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vaW1hZ2VzL2RlbGV0ZS5zdmdcIjtcblxuY29uc3QgYWxsVG9kb3MgPSBbXTtcblxuZnVuY3Rpb24gZ2V0VG9kb3MoKSB7XG4gICAgcmV0dXJuIGFsbFRvZG9zO1xufVxuXG5mdW5jdGlvbiBnZXRUb2Rvc0J5SUQoaW5kZXhlcykge1xuICAgIGNvbnN0IHRvZG9zID0gW107XG4gICAgaW5kZXhlcy5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgdG9kb3MucHVzaChhbGxUb2Rvc1tpbmRleF0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0b2Rvcztcbn1cblxuZnVuY3Rpb24gYWRkVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgY29uc3QgdG9kbyA9IG5ldyB0b2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgICB0b2RvLmlkID0gYWxsVG9kb3MubGVuZ3RoO1xuICAgIGFsbFRvZG9zLnB1c2godG9kbyk7XG5cbiAgICBjcmVhdGVUb2RvcyhnZXRUb2RvcygpKTtcbiAgICByZW5kZXJJbXBvcnRhbnRUb2RvcygpO1xuICAgIHVwZGF0ZUxvY2FsVG9kb3MoKTtcbiAgICByZXR1cm4gdG9kby5pZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb3ModG9kb3MpIHtcbiAgICBpZiAodG9kb3MgPT09IFtdKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3NcIik7XG4gICAgcmVtb3ZlQWxsQ2hpbGRyZW4odG9kb3NDb250YWluZXIpO1xuICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGlmICghdG9kbykgcmV0dXJuO1xuICAgICAgICBjb25zdCBpdGVtID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWl0ZW1cIiwgdG9kby5pZC50b1N0cmluZygpKTtcbiAgICAgICAgY29uc3QgbGVmdENvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwidG9kby1pdGVtLWxlZnRcIik7XG4gICAgICAgIGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWl0ZW0tcmlnaHRcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwidG9kby10aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLmdldFRpdGxlKCk7XG4gICAgICAgIGFwcGVuZENoaWxkSGVscGVyKGxlZnRDb250YWluZXIsIHRpdGxlKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGNyZWF0ZUhUTUxFbGVtZW50KFwicFwiLCBcInRvZG8tZHVlLWRhdGVcIik7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvLmdldER1ZURhdGUoKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbWdcIiwgXCJkZWxldGUtdG9kby1idXR0b25cIiwgXCJcIik7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5zcmMgPSBkZWxldGVJY29uO1xuICAgICAgICBhZGREZWxldGVUb2RvRXZlbnQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRIZWxwZXIocmlnaHRDb250YWluZXIsIFtkdWVEYXRlLCBkZWxldGVCdXR0b25dKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRIZWxwZXIoaXRlbSwgW2xlZnRDb250YWluZXIsIHJpZ2h0Q29udGFpbmVyXSk7XG4gICAgICAgIGFkZFRvZG9FdmVudChpdGVtKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRIZWxwZXIodG9kb3NDb250YWluZXIsIGl0ZW0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBlZGl0VG9kbyh0b2RvSUQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IHRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpO1xuICAgIG5ld1RvZG8uaWQgPSB0b2RvSUQ7XG4gICAgYWxsVG9kb3Muc3BsaWNlKHRvZG9JRCwgMSwgbmV3VG9kbyk7XG4gICAgcmVuZGVyQWxsVG9kb3MoKTtcbiAgICB1cGRhdGVMb2NhbFRvZG9zKCk7XG4gICAgcmV0dXJuIG5ld1RvZG8uaWQ7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvRGV0YWlscyh0b2RvSUQpIHtcbiAgICBjb25zdCB0b2RvTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvZG9JRCk7XG4gICAgY29uc3QgcGFyZW50ID0gdG9kb05vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zdCBwcmV2RGV0YWlsZWRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWRldGFpbGVkLWNvbnRhaW5lclwiKTtcbiAgICBpZiAocHJldkRldGFpbGVkVG9kbyAhPT0gbnVsbCkge1xuICAgICAgICBjcmVhdGVUb2RvcyhnZXRUb2RvcygpKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9kb0lEKS5yZW1vdmUoKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwidG9kby1kZXRhaWxlZC1jb250YWluZXJcIik7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInRvZG8tZGV0YWlsZWRcIik7XG4gICAgY29uc3QgdGl0bGVBcmVhID0gY3JlYXRlVGl0bGVBcmVhKCk7XG4gICAgdGl0bGVBcmVhLnZhbHVlID0gZ2V0VG9kb3MoKVt0b2RvSURdLmdldFRpdGxlKCk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25BcmVhID0gY3JlYXRlRGVzY3JpcHRpb25BcmVhKCk7XG4gICAgZGVzY3JpcHRpb25BcmVhLnZhbHVlID0gZ2V0VG9kb3MoKVt0b2RvSURdLmdldERlc2NyaXB0aW9uKCk7XG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGNyZWF0ZURhdGVDb250YWluZXIoZmFsc2UsIHRvZG9JRCk7XG4gICAgZGF0ZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5LXNsaWRlclwiKS52YWx1ZSA9IGdldFRvZG9zKClbdG9kb0lEXS5nZXRQcmlvcml0eSgpO1xuICAgIGRhdGVDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kYXRlLWNvbnRhaW5lciAuZHVlLWRhdGUtcGlja2VyXCIpLnZhbHVlID0gZ2V0VG9kb3MoKVt0b2RvSURdLmdldER1ZURhdGUoKTtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gY3JlYXRlQ29uZmlybUJ1dHRvbigpO1xuICAgIGNvbmZpcm1CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWRldGFpbGVkLWNvbmZpcm1cIik7XG4gICAgYWRkRGV0YWlsZWRDb25maXJtQnV0dG9uRXZlbnQoY29uZmlybUJ1dHRvbiwgdG9kb0lEKTtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGNyZWF0ZUNsb3NlQnV0dG9uKCk7XG4gICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWRldGFpbGVkLWNsb3NlXCIpO1xuICAgIGFkZERldGFpbGVkQ2xvc2VCdXR0b25FdmVudChjbG9zZUJ1dHRvbik7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGFpbmVyLCBhcHBlbmRDaGlsZEhlbHBlcih0b2RvRm9ybSwgW3RpdGxlQXJlYSwgZGVzY3JpcHRpb25BcmVhLCBkYXRlQ29udGFpbmVyXSkpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRhaW5lciwgW2NvbmZpcm1CdXR0b24sIGNsb3NlQnV0dG9uXSk7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIocGFyZW50LCBjb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUb2RvKHRvZG9JRCkge1xuICAgIGFsbFRvZG9zW3RvZG9JRF0gPSBudWxsO1xuICAgIGRlbGV0ZUl0ZW1Gcm9tUHJvamVjdCh0b2RvSUQpO1xuICAgIHJlbmRlckltcG9ydGFudFRvZG9zKCk7XG4gICAgdXBkYXRlTG9jYWxUb2RvcygpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBbGxUb2RvcygpIHtcbiAgICBjcmVhdGVUb2RvcyhnZXRUb2RvcygpKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVySW1wb3J0YW50VG9kb3MoKSB7XG4gICAgY29uc3QgaW1wb3J0YW50VG9kb3MgPSBbXTtcbiAgICBnZXRUb2RvcygpLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGlmKHRvZG8gPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgaWYgKHRvZG8uZ2V0UHJpb3JpdHkoKSA+PSA4KSB7XG4gICAgICAgICAgICBpbXBvcnRhbnRUb2Rvcy5wdXNoKHsgdGl0bGU6IHRvZG8uZ2V0VGl0bGUoKSwgaWQ6IHRvZG8uaWQsIHByaW9yaXR5OiB0b2RvLmdldFByaW9yaXR5KCkgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltcG9ydGFudC1mb2xkZXJcIik7XG4gICAgcmVtb3ZlQWxsQ2hpbGRyZW4oY29udGFpbmVyKTtcbiAgICBpbXBvcnRhbnRUb2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBjb25zdCBuZXdJbXBvcnRhbnRFbGVtZW50ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwiaW1wb3J0YW50LWl0ZW1cIik7XG4gICAgICAgIG5ld0ltcG9ydGFudEVsZW1lbnQudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlICsgYFxceGEwIFxceGEwIFxceGEwICgke3RvZG8ucHJpb3JpdHl9KWA7XG4gICAgICAgIG5ld0ltcG9ydGFudEVsZW1lbnQuZGF0YXNldC50b2RvaWQgPSB0b2RvLmlkO1xuICAgICAgICBuZXdJbXBvcnRhbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdHMgPSBnZXRQcm9qZWN0cygpO1xuICAgICAgICAgICAgbGV0IHByb2plY3Q7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcHJvamVjdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdHNbaV0uaXRlbXMuaW5jbHVkZXModG9kby5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdCA9IHByb2plY3RzW2ldO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tcGFnZS10aXRsZVwiKS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgICAgICBjcmVhdGVUb2RvcyhnZXRUb2Rvc0J5SUQocHJvamVjdC5pdGVtcykpO1xuICAgICAgICAgICAgZGlzcGxheVRvZG9EZXRhaWxzKHRvZG8uaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGFpbmVyLCBuZXdJbXBvcnRhbnRFbGVtZW50KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TG9jYWxUb2RvcygpIHtcbiAgICBpZih0eXBlb2YgU3RvcmFnZSA9PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICBpZihsb2NhbFN0b3JhZ2UudG9kb3MgPT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudG9kb3MpKTtcbiAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50b2RvcykuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgaWYodG9kbyA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGFkZFRvZG8odG9kby50aXRsZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5kdWVEYXRlLCB0b2RvLnByaW9yaXR5LCB0b2RvLnByb2plY3QpO1xuICAgIH0pO1xuICAgIHJlbmRlckltcG9ydGFudFRvZG9zKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxvY2FsVG9kb3MoKSB7XG4gICAgaWYodHlwZW9mIFN0b3JhZ2UgPT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgbG9jYWxTdG9yYWdlLnRvZG9zID0gSlNPTi5zdHJpbmdpZnkoZ2V0VG9kb3MoKSk7XG59XG5cbmV4cG9ydCB7IGFkZFRvZG8sIGdldFRvZG9zLCBjcmVhdGVUb2RvcywgZGVsZXRlVG9kbywgZWRpdFRvZG8sIGRpc3BsYXlUb2RvRGV0YWlscywgZ2V0VG9kb3NCeUlELCBnZXRMb2NhbFRvZG9zLCByZW5kZXJBbGxUb2RvcyB9O1xuXG4iLCJpbXBvcnQgeyBhZGRMaWdodFN3aXRjaEV2ZW50LCBiaW5kQ2xpY2tFdmVudHMgfSBmcm9tIFwiLi9iaW5kQ2xpY2tFdmVudHNcIjtcbmltcG9ydCB7IGFwcGVuZENoaWxkSGVscGVyLCBjcmVhdGVIVE1MRWxlbWVudCB9IGZyb20gXCIuL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7IGdldFRvZG9zLCBjcmVhdGVUb2RvcywgZ2V0TG9jYWxUb2RvcyB9IGZyb20gXCIuL3RvZG9JdGVtc1wiO1xuaW1wb3J0IHsgY3JlYXRlTmV3VGFza0J1dHRvbiB9IGZyb20gXCIuL25ld1Rhc2tcIjtcbmltcG9ydCB7IGFkZEhvbWVQcm9qZWN0LCBnZXRMb2NhbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld0FkZEJ1dHRvbiB9IGZyb20gXCIuL2FkZEJ1dHRvblwiO1xuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbiB9IGZyb20gXCIuL25ld1Byb2plY3RcIjtcbmltcG9ydCBnaXRodWJJY29uIGZyb20gXCIuL2ltYWdlcy9naXRodWIuc3ZnXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlckVsZW1lbnQoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJoZWFkZXJcIiwgXCJoZWFkZXJcIiwgXCJoZWFkZXJcIik7XG4gICAgY29uc3QgaGVhZGVyTGVmdCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwiaGVhZGVyLWxlZnRcIiwgXCJoZWFkZXItbGVmdFwiKTtcbiAgICBjb25zdCBoZWFkZXJMb2dvID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJoMVwiLCBcImhlYWRlci1sb2dvXCIsIFwiaGVhZGVyLWxvZ29cIik7XG4gICAgaGVhZGVyTG9nby50ZXh0Q29udGVudCA9IFwidG9kby1saXN0XCJcbiAgICBoZWFkZXJMZWZ0LmFwcGVuZENoaWxkKGhlYWRlckxvZ28pO1xuICAgIGNvbnN0IGhlYWRlclJpZ2h0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXItcmlnaHRcIiwgXCJoZWFkZXItcmlnaHRcIik7XG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVIVE1MRWxlbWVudChcImxhYmVsXCIsIFwic3dpdGNoXCIsIFwiZGFyay1tb2RlLXN3aXRjaFwiKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaW5wdXRcIiwgXCJcIiwgXCJkYXJrLW1vZGUtY2hlY2tib3hcIik7XG4gICAgaW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICBhZGRMaWdodFN3aXRjaEV2ZW50KGlucHV0KTtcbiAgICBjb25zdCBzcGFuID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJzcGFuXCIsIFtcInNsaWRlclwiLCBcInJvdW5kXCJdKTtcbiAgICBjb25zdCBsYWJlbFN5bWJvbCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwicFwiLCBcInN3aXRjaC10ZXh0XCIsIFwic3dpdGNoLXRleHRcIik7XG4gICAgbGFiZWxTeW1ib2wudGV4dENvbnRlbnQgPSBcIvCfkqFcIjtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihoZWFkZXJSaWdodCwgW2xhYmVsU3ltYm9sLCBhcHBlbmRDaGlsZEhlbHBlcihsYWJlbCwgW2lucHV0LCBzcGFuXSldKTtcblxuICAgIGFwcGVuZENoaWxkSGVscGVyKGhlYWRlciwgW2hlYWRlckxlZnQsIGhlYWRlclJpZ2h0XSk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluRWxlbWVudCgpIHtcbiAgICBjb25zdCBtYWluID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJtYWluXCIsIFwibWFpblwiKTtcbiAgICBjb25zdCBtYWluTGVmdCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwibWFpbi1sZWZ0XCIsIFwibWFpbi1sZWZ0XCIpO1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0cy1jb250YWluZXJcIiwgXCJwcm9qZWN0cy1jb250YWluZXJcIik7XG4gICAgY29uc3QgcHJvamVjdHNCdXR0b24gPSBjcmVhdGVIVE1MRWxlbWVudChcImJ1dHRvblwiLCBcInByb2plY3RzLWJ1dHRvblwiLCBcInByb2plY3RzLWJ1dHRvblwiKTtcbiAgICBjb25zdCBwcm9qZWN0c0J1dHRvblRleHQgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJwcm9qZWN0cy10ZXh0XCIsIFwicHJvamVjdHMtdGV4dFwiKTtcbiAgICBwcm9qZWN0c0J1dHRvblRleHQuaW5uZXJIVE1MID0gXCI8c3BhbiBpZD1cXFwicHJvamVjdHMtc3BhblxcXCI+PiA8L3NwYW4+UHJvamVjdHNcIjtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihwcm9qZWN0c0NvbnRhaW5lciwgYXBwZW5kQ2hpbGRIZWxwZXIocHJvamVjdHNCdXR0b24sIHByb2plY3RzQnV0dG9uVGV4dCkpO1xuICAgIGNvbnN0IHByb2plY3RzQ29udGVudCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdHMtY29udGVudFwiLCBcInByb2plY3RzLWNvbnRlbnRcIik7XG4gICAgY29uc3QgcHJvamVjdHMgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBbXCJwcm9qZWN0c1wiXSwgXCJwcm9qZWN0c1wiKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihtYWluTGVmdCwgYXBwZW5kQ2hpbGRIZWxwZXIocHJvamVjdHNDb250YWluZXIsIGFwcGVuZENoaWxkSGVscGVyKHByb2plY3RzQ29udGVudCwgW3Byb2plY3RzLCBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uKCldKSkpO1xuXG4gICAgY29uc3QgaW1wb3J0YW50Q29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJpbXBvcnRhbnQtY29udGFpbmVyXCIsIFwiaW1wb3J0YW50LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBpbXBvcnRhbnRCdXR0b24gPSBjcmVhdGVIVE1MRWxlbWVudChcImJ1dHRvblwiLCBcImltcG9ydGFudC1idXR0b25cIiwgXCJpbXBvcnRhbnQtYnV0dG9uXCIpO1xuICAgIGNvbnN0IGltcG9ydGFudEJ1dHRvblRleHQgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJpbXBvcnRhbnQtdGV4dFwiLCBcImltcG9ydGFudC10ZXh0XCIpO1xuICAgIGltcG9ydGFudEJ1dHRvblRleHQuaW5uZXJIVE1MID0gXCI8c3BhbiBpZD1cXFwicHJvamVjdHMtc3BhblxcXCI+PiA8L3NwYW4+IEltcG9ydGFudFwiO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGltcG9ydGFudENvbnRhaW5lciwgYXBwZW5kQ2hpbGRIZWxwZXIoaW1wb3J0YW50QnV0dG9uLCBpbXBvcnRhbnRCdXR0b25UZXh0KSk7XG4gICAgY29uc3QgaW1wb3J0YW50Rm9sZGVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgW1wiaW1wb3J0YW50LWZvbGRlclwiXSwgXCJpbXBvcnRhbnQtZm9sZGVyXCIpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKG1haW5MZWZ0LCBhcHBlbmRDaGlsZEhlbHBlcihpbXBvcnRhbnRDb250YWluZXIsIGltcG9ydGFudEZvbGRlcikpO1xuXG4gICAgY29uc3QgbWFpbkNlbnRlciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwibWFpbi1jZW50ZXJcIiwgXCJtYWluLWNlbnRlclwiKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihtYWluQ2VudGVyLCBjcmVhdGVNYWluQ2VudGVyQ29udGVudCgpKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihtYWluLCBbbWFpbkxlZnQsIG1haW5DZW50ZXJdKTtcblxuICAgIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluQ2VudGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJjZW50ZXItY29udGVudFwiLCBcImNlbnRlci1jb250ZW50XCIpO1xuICAgIGNvbnN0IHRvcENvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwidG9kby10b3AtY29udGFpbmVyXCIsIFwidG9kby10b3AtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0LXRpdGxlLWNvbnRhaW5lclwiLCBcInByb2plY3QtdGl0bGUtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJoMlwiLCBcInRvZG8tcGFnZS10aXRsZVwiLCBcInRvZG8tcGFnZS10aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJcIiwgXCJ0b2RvLXBhZ2UtZHVlLWRhdGVcIik7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250ZW50LCBhcHBlbmRDaGlsZEhlbHBlcih0b3BDb250YWluZXIsIFt0aXRsZSwgZHVlRGF0ZV0pKTtcblxuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJ0b2Rvc1wiLCBcInRvZG9zXCIpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRlbnQsIHRhc2tzQ29udGFpbmVyKTtcblxuXG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGVudCwgY3JlYXRlTmV3VGFza0J1dHRvbigpKTtcblxuICAgIHJldHVybiBjb250ZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJmb290ZXJcIiwgXCJmb290ZXItY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGZvb3RlclRleHQgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJmb290ZXItdGV4dFwiKTtcbiAgICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gYEZyZWRyaWsgQiAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gwqlgO1xuICAgIGNvbnN0IGZvb3RlckxlZnQgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcIlwiLCBcImZvb3Rlci1sZWZ0XCIpO1xuICAgIGNvbnN0IGZvb3RlclJpZ2h0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJmb290ZXItcmlnaHRcIik7XG4gICAgY29uc3QgYW5jaG9yID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJhXCIsIFwiZ2l0aHViLWFuY2hvclwiKTtcbiAgICBhbmNob3IuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2ZyZWRyaWtiMTJcIjtcbiAgICBjb25zdCBpbWcgPSBjcmVhdGVIVE1MRWxlbWVudChcImltZ1wiLCBcImdpdGh1Yi1pbWFnZVwiKTtcbiAgICBpbWcuc3JjID0gZ2l0aHViSWNvbjtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihhbmNob3IsIGltZyk7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoZm9vdGVyTGVmdCwgZm9vdGVyVGV4dCk7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoZm9vdGVyUmlnaHQsIGFuY2hvcik7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoZm9vdGVyLCBbZm9vdGVyTGVmdCwgZm9vdGVyUmlnaHRdKTtcbiAgICByZXR1cm4gZm9vdGVyO1xuXG59XG5cblxuXG5mdW5jdGlvbiBjcmVhdGVJbml0aWFsV2VicGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlckVsZW1lbnQoKTtcbiAgICBjb25zdCBtYWluID0gY3JlYXRlTWFpbkVsZW1lbnQoKTtcbiAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250ZW50RGl2LCBbaGVhZGVyLCBtYWluLCBmb290ZXJdKTtcbiAgICBpZiAodHlwZW9mIFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYWxTdG9yYWdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZ2V0TG9jYWxQcm9qZWN0cygpO1xuICAgICAgICBnZXRMb2NhbFRvZG9zKCk7XG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5wcmVmZXJzRGFya01vZGUgPT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJsaWdodC10aGVtZVwiKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFyay1tb2RlLWNoZWNrYm94XCIpLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYWxTdG9yYWdlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGFkZEhvbWVQcm9qZWN0KCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5wcmVmZXJzRGFya01vZGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZEhvbWVQcm9qZWN0KCk7XG4gICAgfVxuICAgIGNyZWF0ZVRvZG9zKGdldFRvZG9zKCkpO1xuICAgIGJpbmRDbGlja0V2ZW50cygpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVJbml0aWFsV2VicGFnZSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgY3JlYXRlSW5pdGlhbFdlYnBhZ2UgfSBmcm9tIFwiLi93ZWJwYWdlXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuY3JlYXRlSW5pdGlhbFdlYnBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=