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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --darkBlue: hsl(240, 41%, 7%);\n    --lightGreyBlue: #CECFED;\n    --dimOrange: #ff6a50;\n    --dimRed: #ff5233;\n    --lightPink: #ffd4da;\n    --dimWhite: #e5e6e7;\n    --mildBlueWhite: #f1f1ff;\n    --brightRed: #ec4141;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    font-family: 'Montserrat', sans-serif;\n}\n\nbody {\n    background-color: var(--bgColor);\n}\n\n#content {\n    height: 100vh;\n}\n\n.dark-theme {\n    --headerBg: var(--darkBlue);\n    --headerText: var(--lightGreyBlue);\n    --headerBorder: #FFFFFF;\n    --sidebarBg: var(--darkBlue);\n    --importantButtonHover: #ff8670;\n    --importantText: var(--dimOrange);\n    --importantTextHover: var(--dimRed);\n    --folderHover: var(--lightPink);\n    --todoText: var(--dimWhite);\n    --todoTextHover: none;\n    --todoBorder: #c5c6c72f;\n    --bgColor: #2b2d44;\n    --footerText: #f1f1ffd2;\n    --footerBg: hsla(240, 17%, 16%, 0.719);\n    --projectText: var(--mildBlueWhite);\n    --projectHoverText: #ffd4da;\n    --projectBg: var(--darkBlue);\n    --filter: invert(93%) sepia(100%) saturate(28%) hue-rotate(223deg) brightness(105%) contrast(103%);\n}\n\n.light-theme {\n    --headerBg: hsl(0, 50%, 60%);\n    --headerText: white;\n    --headerBorder: black;\n    --sidebarBg: hsl(240, 12%, 76%);\n    --importantButtonHover: #000000;\n    --importantText: #0e0c0c;\n    --importantTextHover: black;\n    --folderHover: black;\n    --todoText: black;\n    --todoBorder: #535353cb;\n    --bgColor: hsl(240, 9%, 86%);\n    --footerText: hsl(240, 9%, 13%);\n    --footerBg: hsl(0, 0%, 79%);\n    --projectText: hsl(240, 66%, 9%);\n    --projectHoverText: hsl(0, 0%, 0%);\n    --projectBg: hsl(240, 12%, 76%);\n    --filter: none;\n}\n\n.header {\n    display: flex;\n    background-color: var(--headerBg);\n    color: var(--headerText);\n    padding: 10px;\n    font-size: 20px;\n    border-bottom: 1px solid var(--headerBorder);\n    height: 8%;\n}\n\n.header-left,\n.header-right {\n    width: 50%;\n    min-height: 60px;\n}\n\n.header-left {\n    display: flex;\n    align-items: center;\n}\n\n.header-logo {\n    margin-left: 25%;\n}\n\n.header-right {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-size: 28px;\n    gap: 10px;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 32px;\n    font-size: 22px;\n    margin-bottom: -1px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\ninput:checked + .slider {\n    background-color: #0d65ad;\n}\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n}\n\n.slider.round {\n    border-radius: 34px;\n}\n  \n.slider.round:before {\n    border-radius: 50%;\n}\n\n.main {\n    display: flex;\n    overflow: auto;\n    min-height: 90vh;\n\n}\n.main-left {\n    width: 20%;\n    display: flex;\n    flex-direction: column;\n    border-right: 1px solid #706b6b;\n    background-color: var(--sidebarBg);\n    margin-top: 1px;\n}\n.main-center {\n    width: 80%;\n    display: flex;\n    justify-content: center;\n    margin-top: 100px;\n}\n\n.projects-button,\n.important-button {\n    border: none;\n    margin-top: -2px;\n    min-height: 40px;\n    font-size: 20px;\n    font-weight: 700;\n    color: var(--projectText);\n    padding: 5px;\n    background-color: var(--projectBg);\n    padding-left: 25px;\n}\n\n.projects-button:hover, \n.important-button:hover {\n    color: var(--importantButtonHover);\n    cursor: pointer;\n}\n\n.projects-container,\n.important-container {\n    border-bottom: 1px solid #e4e5ff;\n    overflow: auto;\n    background-color: var(--projectBg);\n    width: 100%;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    margin-bottom: 5px;\n    padding: 0 0 15px;\n}\n\n.important-container {\n    padding: 0;\n    margin: 0;\n}\n\n#projects, #important-folder {\n    overflow-y: auto;\n}\n\n.important-folder {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.important-item {\n    color: var(--importantText);\n    font-size: 16px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 4px;\n    width: 80%;\n}\n\n.important-item:hover {\n    color: var(--importantTextHover);\n    cursor: pointer;\n}\n\n.projects-text,\n.important-text {\n    width: 200px;\n    text-align: left;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.projects-item-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.projects-item {\n    color: var(--projectText);\n    font-size: 21px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 4px;\n    width: 80%;\n}\n\n.projects-item-delete {\n    filter: var(--filter); \n    opacity: 0.6;\n}\n\n.projects-item-delete:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.projects-item:hover {\n    color: var(--projectHoverText);\n    cursor: pointer;\n}\n\n#new-project-button-container {\n    align-self: start;\n}\n\n.projects-content.sidebar-hidden,\n.important-folder.sidebar-hidden {\n    display: none;\n}\n\n#projects-span, \n#important-span {\n    color: var(--projectText);\n    font-size: 15px;\n}\n\n.center-content {\n    width: 50%;\n}\n\n.todo-top-container {\n    color: var(--todoText);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 10px;\n    padding-right: 45px;\n}\n\n.todo-top-container > p {\n    font-size: 22px;\n}\n\n.todo-add-container {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 5px 8px;\n    opacity: 0.5;\n}\n\n.todo-add-container:hover, \n.new-project-button:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.todo-add-container > p {\n    color: var(--todoText);\n    font-size: 22px;\n}\n\n.add-image, .task-button {\n    width: 22px;\n    height: 22px;\n    filter: var(--filter);\n}\n\n.todos {\n    max-height: 600px;\n    overflow: auto;\n}\n\n.todo-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: var(--todoText);\n    font-size: 22px;\n    border-top: 1px solid var(--todoBorder);\n    border-bottom: 1px solid var(--todoBorder);\n    padding: 4px 8px;\n    margin-top: -1px;\n}\n\n.todo-item-right {\n    display: flex;\n    align-items: center;\n    gap: 30px;\n}\n\n.delete-todo-button {\n    filter: var(--filter);\n    opacity: 0.6;\n    width: 30px;\n    height: 30px;\n}\n\n.delete-todo-button:hover {\n    opacity: 0.9;\n}\n\n.todo-title {\n    max-width: 400px;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.todo-due-date {\n    font-size: 16px;\n}\n\n.todo-item:hover {\n    color: var(--todoText);\n    cursor: pointer;\n    border-top-color: #c5c6c7b0;\n    border-bottom-color: #c5c6c7b0;\n}\n\n.new-todo-form,\n.todo-detailed, \n.new-project-form {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid #294552;\n    padding: 4px;\n    border-radius: 6px;\n    margin-top: 12px;\n}\n\n.new-project-form {\n    border: 1px solid var(--headerBorder);\n}\n\n.new-todo-form {\n    border-color: #00070a;\n    background-color: var(--bgColor);\n}\n\n.textarea {\n    background-color: var(--bgColor);\n    border: none;\n    resize: none;\n    outline: none;\n    color: var(--todoText);\n    font-size: 18px;\n}\n\n.new-project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    width: 80%;\n}\n\n.new-project-button {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n    color: var(--projectText);\n    font-size: 16px;\n    opacity: 0.6;\n    margin: 10px 0 5px;\n}\n\n.projects-content {\n    display: flex;\n    flex-direction: column;\n    margin-left: 10%;\n}\n\n.new-project-form .textarea {\n    background-color: var(--sidebarBg);\n    font-size: 16px;\n    padding: 3px;\n    \n}\n\n.textarea::placeholder {\n    opacity: 1;\n}\n\n.task-button {\n    opacity: 0.6;\n    margin-top: 5px;\n    margin-right: 5px;\n    width: 28px;\n    height: 28px;\n}\n\n.task-button:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.red-text::placeholder {\n    color: var(--brightRed);\n}\n\n.project-selector {\n    color: var(--todoText);\n    background-color: var(--bgColor);\n    padding: 2px;\n    margin-bottom: -2px;\n}\n\n.slider-container {\n    margin-bottom: 8px;\n}\n\n.due-date-picker {\n    width: 150px;\n    background-color: var(--bgColor);\n    color: var(--todoText);\n    margin-top: 5px;\n}\n\n.due-date-picker::-webkit-calendar-picker-indicator {\n    filter: var(--filter);\n}\n\n.date-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n}\n\n.prio-text {\n    color: var(--todoText);\n    font-size: 18px;\n    text-align: center;\n}\n\n.footer-container {\n    display: flex;\n    align-items: center;\n    color: var(--footerText);\n    background-color: var(--footerBg);\n    border-top: 1px solid #706b6b;\n    height: 70px;\n}\n\n#footer-left {\n    display: flex;\n    justify-content: flex-end;\n    width: 50%;\n    margin-right: 7px;\n}\n\n#footer-right {\n    display: flex;\n    justify-content: flex-start;\n    width: 50%;\n    margin-left: 7px;\n}\n\n.github-image {\n    filter: var(--filter);\n    opacity: 0.6;\n}\n\n.github-image:hover {\n    opacity: 1;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --darkBlue: hsl(240, 41%, 7%);\n    --lightGreyBlue: #CECFED;\n    --dimOrange: #ff6a50;\n    --dimRed: #ff5233;\n    --lightPink: #ffd4da;\n    --dimWhite: #e5e6e7;\n    --mildBlueWhite: #f1f1ff;\n    --brightRed: #ec4141;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    font-family: 'Montserrat', sans-serif;\n}\n\nbody {\n    background-color: var(--bgColor);\n}\n\n#content {\n    height: 100vh;\n}\n\n.dark-theme {\n    --headerBg: var(--darkBlue);\n    --headerText: var(--lightGreyBlue);\n    --headerBorder: #FFFFFF;\n    --sidebarBg: var(--darkBlue);\n    --importantButtonHover: #ff8670;\n    --importantText: var(--dimOrange);\n    --importantTextHover: var(--dimRed);\n    --folderHover: var(--lightPink);\n    --todoText: var(--dimWhite);\n    --todoTextHover: none;\n    --todoBorder: #c5c6c72f;\n    --bgColor: #2b2d44;\n    --footerText: #f1f1ffd2;\n    --footerBg: hsla(240, 17%, 16%, 0.719);\n    --projectText: var(--mildBlueWhite);\n    --projectHoverText: #ffd4da;\n    --projectBg: var(--darkBlue);\n    --filter: invert(93%) sepia(100%) saturate(28%) hue-rotate(223deg) brightness(105%) contrast(103%);\n}\n\n.light-theme {\n    --headerBg: hsl(0, 50%, 60%);\n    --headerText: white;\n    --headerBorder: black;\n    --sidebarBg: hsl(240, 12%, 76%);\n    --importantButtonHover: #000000;\n    --importantText: #0e0c0c;\n    --importantTextHover: black;\n    --folderHover: black;\n    --todoText: black;\n    --todoBorder: #535353cb;\n    --bgColor: hsl(240, 9%, 86%);\n    --footerText: hsl(240, 9%, 13%);\n    --footerBg: hsl(0, 0%, 79%);\n    --projectText: hsl(240, 66%, 9%);\n    --projectHoverText: hsl(0, 0%, 0%);\n    --projectBg: hsl(240, 12%, 76%);\n    --filter: none;\n}\n\n.header {\n    display: flex;\n    background-color: var(--headerBg);\n    color: var(--headerText);\n    padding: 10px;\n    font-size: 20px;\n    border-bottom: 1px solid var(--headerBorder);\n    height: 8%;\n}\n\n.header-left,\n.header-right {\n    width: 50%;\n    min-height: 60px;\n}\n\n.header-left {\n    display: flex;\n    align-items: center;\n}\n\n.header-logo {\n    margin-left: 25%;\n}\n\n.header-right {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-size: 28px;\n    gap: 10px;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 32px;\n    font-size: 22px;\n    margin-bottom: -1px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\ninput:checked + .slider {\n    background-color: #0d65ad;\n}\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n}\n\n.slider.round {\n    border-radius: 34px;\n}\n  \n.slider.round:before {\n    border-radius: 50%;\n}\n\n.main {\n    display: flex;\n    overflow: auto;\n    min-height: 90vh;\n\n}\n.main-left {\n    width: 20%;\n    display: flex;\n    flex-direction: column;\n    border-right: 1px solid #706b6b;\n    background-color: var(--sidebarBg);\n    margin-top: 1px;\n}\n.main-center {\n    width: 80%;\n    display: flex;\n    justify-content: center;\n    margin-top: 100px;\n}\n\n.projects-button,\n.important-button {\n    border: none;\n    margin-top: -2px;\n    min-height: 40px;\n    font-size: 20px;\n    font-weight: 700;\n    color: var(--projectText);\n    padding: 5px;\n    background-color: var(--projectBg);\n    padding-left: 25px;\n}\n\n.projects-button:hover, \n.important-button:hover {\n    color: var(--importantButtonHover);\n    cursor: pointer;\n}\n\n.projects-container,\n.important-container {\n    border-bottom: 1px solid #e4e5ff;\n    overflow: auto;\n    background-color: var(--projectBg);\n    width: 100%;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    margin-bottom: 5px;\n    padding: 0 0 15px;\n}\n\n.important-container {\n    padding: 0;\n    margin: 0;\n}\n\n#projects, #important-folder {\n    overflow-y: auto;\n}\n\n.important-folder {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.important-item {\n    color: var(--importantText);\n    font-size: 16px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 4px;\n    width: 80%;\n}\n\n.important-item:hover {\n    color: var(--importantTextHover);\n    cursor: pointer;\n}\n\n.projects-text,\n.important-text {\n    width: 200px;\n    text-align: left;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.projects-item-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.projects-item {\n    color: var(--projectText);\n    font-size: 21px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 4px;\n    width: 80%;\n}\n\n.projects-item-delete {\n    filter: var(--filter); \n    opacity: 0.6;\n}\n\n.projects-item-delete:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.projects-item:hover {\n    color: var(--projectHoverText);\n    cursor: pointer;\n}\n\n#new-project-button-container {\n    align-self: start;\n}\n\n.projects-content.sidebar-hidden,\n.important-folder.sidebar-hidden {\n    display: none;\n}\n\n#projects-span, \n#important-span {\n    color: var(--projectText);\n    font-size: 15px;\n}\n\n.center-content {\n    width: 50%;\n}\n\n.todo-top-container {\n    color: var(--todoText);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 10px;\n    padding-right: 45px;\n}\n\n.todo-top-container > p {\n    font-size: 22px;\n}\n\n.todo-add-container {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 5px 8px;\n    opacity: 0.5;\n}\n\n.todo-add-container:hover, \n.new-project-button:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.todo-add-container > p {\n    color: var(--todoText);\n    font-size: 22px;\n}\n\n.add-image, .task-button {\n    width: 22px;\n    height: 22px;\n    filter: var(--filter);\n}\n\n.todos {\n    max-height: 600px;\n    overflow: auto;\n}\n\n.todo-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: var(--todoText);\n    font-size: 22px;\n    border-top: 1px solid var(--todoBorder);\n    border-bottom: 1px solid var(--todoBorder);\n    padding: 4px 8px;\n    margin-top: -1px;\n}\n\n.todo-item-right {\n    display: flex;\n    align-items: center;\n    gap: 30px;\n}\n\n.delete-todo-button {\n    filter: var(--filter);\n    opacity: 0.6;\n    width: 30px;\n    height: 30px;\n}\n\n.delete-todo-button:hover {\n    opacity: 0.9;\n}\n\n.todo-title {\n    max-width: 400px;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.todo-due-date {\n    font-size: 16px;\n}\n\n.todo-item:hover {\n    color: var(--todoText);\n    cursor: pointer;\n    border-top-color: #c5c6c7b0;\n    border-bottom-color: #c5c6c7b0;\n}\n\n.new-todo-form,\n.todo-detailed, \n.new-project-form {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid #294552;\n    padding: 4px;\n    border-radius: 6px;\n    margin-top: 12px;\n}\n\n.new-project-form {\n    border: 1px solid var(--headerBorder);\n}\n\n.new-todo-form {\n    border-color: #00070a;\n    background-color: var(--bgColor);\n}\n\n.textarea {\n    background-color: var(--bgColor);\n    border: none;\n    resize: none;\n    outline: none;\n    color: var(--todoText);\n    font-size: 18px;\n}\n\n.new-project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    width: 80%;\n}\n\n.new-project-button {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n    color: var(--projectText);\n    font-size: 16px;\n    opacity: 0.6;\n    margin: 10px 0 5px;\n}\n\n.projects-content {\n    display: flex;\n    flex-direction: column;\n    margin-left: 10%;\n}\n\n.new-project-form .textarea {\n    background-color: var(--sidebarBg);\n    font-size: 16px;\n    padding: 3px;\n    \n}\n\n.textarea::placeholder {\n    opacity: 1;\n}\n\n.task-button {\n    opacity: 0.6;\n    margin-top: 5px;\n    margin-right: 5px;\n    width: 28px;\n    height: 28px;\n}\n\n.task-button:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.red-text::placeholder {\n    color: var(--brightRed);\n}\n\n.project-selector {\n    color: var(--todoText);\n    background-color: var(--bgColor);\n    padding: 2px;\n    margin-bottom: -2px;\n}\n\n.slider-container {\n    margin-bottom: 8px;\n}\n\n.due-date-picker {\n    width: 150px;\n    background-color: var(--bgColor);\n    color: var(--todoText);\n    margin-top: 5px;\n}\n\n.due-date-picker::-webkit-calendar-picker-indicator {\n    filter: var(--filter);\n}\n\n.date-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n}\n\n.prio-text {\n    color: var(--todoText);\n    font-size: 18px;\n    text-align: center;\n}\n\n.footer-container {\n    display: flex;\n    align-items: center;\n    color: var(--footerText);\n    background-color: var(--footerBg);\n    border-top: 1px solid #706b6b;\n    height: 70px;\n}\n\n#footer-left {\n    display: flex;\n    justify-content: flex-end;\n    width: 50%;\n    margin-right: 7px;\n}\n\n#footer-right {\n    display: flex;\n    justify-content: flex-start;\n    width: 50%;\n    margin-left: 7px;\n}\n\n.github-image {\n    filter: var(--filter);\n    opacity: 0.6;\n}\n\n.github-image:hover {\n    opacity: 1;\n}\n\n\n"],"sourceRoot":""}]);
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
        (0,_todoItems__WEBPACK_IMPORTED_MODULE_4__.createTodos)((0,_todoItems__WEBPACK_IMPORTED_MODULE_4__.getTodosByID)((0,_projects__WEBPACK_IMPORTED_MODULE_3__.getIDsOfProject)((0,_projects__WEBPACK_IMPORTED_MODULE_3__.getProjectIndexByTitle)(document.getElementById("todo-page-title").textContent))));
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
/* harmony import */ var _addButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addButton */ "./src/addButton.js");





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
    const newButton = (0,_addButton__WEBPACK_IMPORTED_MODULE_3__.createNewAddButton)("new-project-button", "add-image", "new-project-text", "New Project");
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
    (0,_todoItems__WEBPACK_IMPORTED_MODULE_1__.createTodos)((0,_todoItems__WEBPACK_IMPORTED_MODULE_1__.getTodosByID)(getIDsOfProject(getProjectIndexByTitle(document.getElementById("todo-page-title")))));
    updateLocalProjects();
}

function deleteProject(projectIndex) {
    const projectToDelete = getProjects()[projectIndex];
    const todos = (0,_todoItems__WEBPACK_IMPORTED_MODULE_1__.getTodos)();
    getProjects()[projectIndex].items.forEach(index => {
        if(todos[index] == null) return;
        todos[index].setProject("Home");
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
    createTodos(getTodosByID((0,_projects__WEBPACK_IMPORTED_MODULE_3__.getIDsOfProject)((0,_projects__WEBPACK_IMPORTED_MODULE_3__.getProjectIndexByTitle)(document.getElementById("todo-page-title").textContent))));
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
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/github.svg */ "./src/images/github.svg");








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
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(mainLeft, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(projectsContainer, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(projectsContent, [projects, (0,_newProject__WEBPACK_IMPORTED_MODULE_5__.createNewProjectButton)()])));

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
    img.src = _images_github_svg__WEBPACK_IMPORTED_MODULE_6__;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8s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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2ZpRDtBQUMzQjs7QUFFdEIsOERBQW9CLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkQnV0dG9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9iaW5kQ2xpY2tFdmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0l0ZW1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy93ZWJwYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWRhcmtCbHVlOiBoc2woMjQwLCA0MSUsIDclKTtcXG4gICAgLS1saWdodEdyZXlCbHVlOiAjQ0VDRkVEO1xcbiAgICAtLWRpbU9yYW5nZTogI2ZmNmE1MDtcXG4gICAgLS1kaW1SZWQ6ICNmZjUyMzM7XFxuICAgIC0tbGlnaHRQaW5rOiAjZmZkNGRhO1xcbiAgICAtLWRpbVdoaXRlOiAjZTVlNmU3O1xcbiAgICAtLW1pbGRCbHVlV2hpdGU6ICNmMWYxZmY7XFxuICAgIC0tYnJpZ2h0UmVkOiAjZWM0MTQxO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmRhcmstdGhlbWUge1xcbiAgICAtLWhlYWRlckJnOiB2YXIoLS1kYXJrQmx1ZSk7XFxuICAgIC0taGVhZGVyVGV4dDogdmFyKC0tbGlnaHRHcmV5Qmx1ZSk7XFxuICAgIC0taGVhZGVyQm9yZGVyOiAjRkZGRkZGO1xcbiAgICAtLXNpZGViYXJCZzogdmFyKC0tZGFya0JsdWUpO1xcbiAgICAtLWltcG9ydGFudEJ1dHRvbkhvdmVyOiAjZmY4NjcwO1xcbiAgICAtLWltcG9ydGFudFRleHQ6IHZhcigtLWRpbU9yYW5nZSk7XFxuICAgIC0taW1wb3J0YW50VGV4dEhvdmVyOiB2YXIoLS1kaW1SZWQpO1xcbiAgICAtLWZvbGRlckhvdmVyOiB2YXIoLS1saWdodFBpbmspO1xcbiAgICAtLXRvZG9UZXh0OiB2YXIoLS1kaW1XaGl0ZSk7XFxuICAgIC0tdG9kb1RleHRIb3Zlcjogbm9uZTtcXG4gICAgLS10b2RvQm9yZGVyOiAjYzVjNmM3MmY7XFxuICAgIC0tYmdDb2xvcjogIzJiMmQ0NDtcXG4gICAgLS1mb290ZXJUZXh0OiAjZjFmMWZmZDI7XFxuICAgIC0tZm9vdGVyQmc6IGhzbGEoMjQwLCAxNyUsIDE2JSwgMC43MTkpO1xcbiAgICAtLXByb2plY3RUZXh0OiB2YXIoLS1taWxkQmx1ZVdoaXRlKTtcXG4gICAgLS1wcm9qZWN0SG92ZXJUZXh0OiAjZmZkNGRhO1xcbiAgICAtLXByb2plY3RCZzogdmFyKC0tZGFya0JsdWUpO1xcbiAgICAtLWZpbHRlcjogaW52ZXJ0KDkzJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMjglKSBodWUtcm90YXRlKDIyM2RlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCgxMDMlKTtcXG59XFxuXFxuLmxpZ2h0LXRoZW1lIHtcXG4gICAgLS1oZWFkZXJCZzogaHNsKDAsIDUwJSwgNjAlKTtcXG4gICAgLS1oZWFkZXJUZXh0OiB3aGl0ZTtcXG4gICAgLS1oZWFkZXJCb3JkZXI6IGJsYWNrO1xcbiAgICAtLXNpZGViYXJCZzogaHNsKDI0MCwgMTIlLCA3NiUpO1xcbiAgICAtLWltcG9ydGFudEJ1dHRvbkhvdmVyOiAjMDAwMDAwO1xcbiAgICAtLWltcG9ydGFudFRleHQ6ICMwZTBjMGM7XFxuICAgIC0taW1wb3J0YW50VGV4dEhvdmVyOiBibGFjaztcXG4gICAgLS1mb2xkZXJIb3ZlcjogYmxhY2s7XFxuICAgIC0tdG9kb1RleHQ6IGJsYWNrO1xcbiAgICAtLXRvZG9Cb3JkZXI6ICM1MzUzNTNjYjtcXG4gICAgLS1iZ0NvbG9yOiBoc2woMjQwLCA5JSwgODYlKTtcXG4gICAgLS1mb290ZXJUZXh0OiBoc2woMjQwLCA5JSwgMTMlKTtcXG4gICAgLS1mb290ZXJCZzogaHNsKDAsIDAlLCA3OSUpO1xcbiAgICAtLXByb2plY3RUZXh0OiBoc2woMjQwLCA2NiUsIDklKTtcXG4gICAgLS1wcm9qZWN0SG92ZXJUZXh0OiBoc2woMCwgMCUsIDAlKTtcXG4gICAgLS1wcm9qZWN0Qmc6IGhzbCgyNDAsIDEyJSwgNzYlKTtcXG4gICAgLS1maWx0ZXI6IG5vbmU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXJCZyk7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJUZXh0KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taGVhZGVyQm9yZGVyKTtcXG4gICAgaGVpZ2h0OiA4JTtcXG59XFxuXFxuLmhlYWRlci1sZWZ0LFxcbi5oZWFkZXItcmlnaHQge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4uaGVhZGVyLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLWxvZ28ge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cXG4uaGVhZGVyLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG59XFxuXFxuLnNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNjVhZDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuICBcXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgbWluLWhlaWdodDogOTB2aDtcXG5cXG59XFxuLm1haW4tbGVmdCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3MDZiNmI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJCZyk7XFxuICAgIG1hcmdpbi10b3A6IDFweDtcXG59XFxuLm1haW4tY2VudGVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtYnV0dG9uLFxcbi5pbXBvcnRhbnQtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0VGV4dCk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdEJnKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4ucHJvamVjdHMtYnV0dG9uOmhvdmVyLCBcXG4uaW1wb3J0YW50LWJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1pbXBvcnRhbnRCdXR0b25Ib3Zlcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lcixcXG4uaW1wb3J0YW50LWNvbnRhaW5lciB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNWZmO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdEJnKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgcGFkZGluZzogMCAwIDE1cHg7XFxufVxcblxcbi5pbXBvcnRhbnQtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jcHJvamVjdHMsICNpbXBvcnRhbnQtZm9sZGVyIHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmltcG9ydGFudC1mb2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW1wb3J0YW50LWl0ZW0ge1xcbiAgICBjb2xvcjogdmFyKC0taW1wb3J0YW50VGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4uaW1wb3J0YW50LWl0ZW06aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0taW1wb3J0YW50VGV4dEhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtdGV4dCxcXG4uaW1wb3J0YW50LXRleHQge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdHMtaXRlbS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1pdGVtIHtcXG4gICAgY29sb3I6IHZhcigtLXByb2plY3RUZXh0KTtcXG4gICAgZm9udC1zaXplOiAyMXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi5wcm9qZWN0cy1pdGVtLWRlbGV0ZSB7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyKTsgXFxuICAgIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnByb2plY3RzLWl0ZW0tZGVsZXRlOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtaXRlbTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0SG92ZXJUZXh0KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGVudC5zaWRlYmFyLWhpZGRlbixcXG4uaW1wb3J0YW50LWZvbGRlci5zaWRlYmFyLWhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNwcm9qZWN0cy1zcGFuLCBcXG4jaW1wb3J0YW50LXNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdFRleHQpO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5jZW50ZXItY29udGVudCB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi50b2RvLXRvcC1jb250YWluZXIge1xcbiAgICBjb2xvcjogdmFyKC0tdG9kb1RleHQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XFxufVxcblxcbi50b2RvLXRvcC1jb250YWluZXIgPiBwIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4udG9kby1hZGQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50b2RvLWFkZC1jb250YWluZXI6aG92ZXIsIFxcbi5uZXctcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLWFkZC1jb250YWluZXIgPiBwIHtcXG4gICAgY29sb3I6IHZhcigtLXRvZG9UZXh0KTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4uYWRkLWltYWdlLCAudGFzay1idXR0b24ge1xcbiAgICB3aWR0aDogMjJweDtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcik7XFxufVxcblxcbi50b2RvcyB7XFxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgY29sb3I6IHZhcigtLXRvZG9UZXh0KTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tdG9kb0JvcmRlcik7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10b2RvQm9yZGVyKTtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgbWFyZ2luLXRvcDogLTFweDtcXG59XFxuXFxuLnRvZG8taXRlbS1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLmRlbGV0ZS10b2RvLWJ1dHRvbiB7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyKTtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uZGVsZXRlLXRvZG8tYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4udG9kby1kdWUtZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRvZG8taXRlbTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS10b2RvVGV4dCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2M1YzZjN2IwO1xcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjYzVjNmM3YjA7XFxufVxcblxcbi5uZXctdG9kby1mb3JtLFxcbi50b2RvLWRldGFpbGVkLCBcXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyOTQ1NTI7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhlYWRlckJvcmRlcik7XFxufVxcblxcbi5uZXctdG9kby1mb3JtIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwNzBhO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXG59XFxuXFxuLnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tdG9kb1RleHQpO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5uZXctcHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXByb2plY3RUZXh0KTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIG1hcmdpbjogMTBweCAwIDVweDtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSAudGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyQmcpO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgXFxufVxcblxcbi50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzay1idXR0b24ge1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxufVxcblxcbi50YXNrLWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlZC10ZXh0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1icmlnaHRSZWQpO1xcbn1cXG5cXG4ucHJvamVjdC1zZWxlY3RvciB7XFxuICAgIGNvbG9yOiB2YXIoLS10b2RvVGV4dCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XFxufVxcblxcbi5zbGlkZXItY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4uZHVlLWRhdGUtcGlja2VyIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRvZG9UZXh0KTtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4uZHVlLWRhdGUtcGlja2VyOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcik7XFxufVxcblxcbi5kYXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4ucHJpby10ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLXRvZG9UZXh0KTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWZvb3RlclRleHQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXJCZyk7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzA2YjZiO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbiNmb290ZXItbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xcbn1cXG5cXG4jZm9vdGVyLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xcbn1cXG5cXG4uZ2l0aHViLWltYWdlIHtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXIpO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi5naXRodWItaW1hZ2U6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJt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SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWRhcmtCbHVlOiBoc2woMjQwLCA0MSUsIDclKTtcXG4gICAgLS1saWdodEdyZXlCbHVlOiAjQ0VDRkVEO1xcbiAgICAtLWRpbU9yYW5nZTogI2ZmNmE1MDtcXG4gICAgLS1kaW1SZWQ6ICNmZjUyMzM7XFxuICAgIC0tbGlnaHRQaW5rOiAjZmZkNGRhO1xcbiAgICAtLWRpbVdoaXRlOiAjZTVlNmU3O1xcbiAgICAtLW1pbGRCbHVlV2hpdGU6ICNmMWYxZmY7XFxuICAgIC0tYnJpZ2h0UmVkOiAjZWM0MTQxO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmRhcmstdGhlbWUge1xcbiAgICAtLWhlYWRlckJnOiB2YXIoLS1kYXJrQmx1ZSk7XFxuICAgIC0taGVhZGVyVGV4dDogdmFyKC0tbGlnaHRHcmV5Qmx1ZSk7XFxuICAgIC0taGVhZGVyQm9yZGVyOiAjRkZGRkZGO1xcbiAgICAtLXNpZGViYXJCZzogdmFyKC0tZGFya0JsdWUpO1xcbiAgICAtLWltcG9ydGFudEJ1dHRvbkhvdmVyOiAjZmY4NjcwO1xcbiAgICAtLWltcG9ydGFudFRleHQ6IHZhcigtLWRpbU9yYW5nZSk7XFxuICAgIC0taW1wb3J0YW50VGV4dEhvdmVyOiB2YXIoLS1kaW1SZWQpO1xcbiAgICAtLWZvbGRlckhvdmVyOiB2YXIoLS1saWdodFBpbmspO1xcbiAgICAtLXRvZG9UZXh0OiB2YXIoLS1kaW1XaGl0ZSk7XFxuICAgIC0tdG9kb1RleHRIb3Zlcjogbm9uZTtcXG4gICAgLS10b2RvQm9yZGVyOiAjYzVjNmM3MmY7XFxuICAgIC0tYmdDb2xvcjogIzJiMmQ0NDtcXG4gICAgLS1mb290ZXJUZXh0OiAjZjFmMWZmZDI7XFxuICAgIC0tZm9vdGVyQmc6IGhzbGEoMjQwLCAxNyUsIDE2JSwgMC43MTkpO1xcbiAgICAtLXByb2plY3RUZXh0OiB2YXIoLS1taWxkQmx1ZVdoaXRlKTtcXG4gICAgLS1wcm9qZWN0SG92ZXJUZXh0OiAjZmZkNGRhO1xcbiAgICAtLXByb2plY3RCZzogdmFyKC0tZGFya0JsdWUpO1xcbiAgICAtLWZpbHRlcjogaW52ZXJ0KDkzJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMjglKSBodWUtcm90YXRlKDIyM2RlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCgxMDMlKTtcXG59XFxuXFxuLmxpZ2h0LXRoZW1lIHtcXG4gICAgLS1oZWFkZXJCZzogaHNsKDAsIDUwJSwgNjAlKTtcXG4gICAgLS1oZWFkZXJUZXh0OiB3aGl0ZTtcXG4gICAgLS1oZWFkZXJCb3JkZXI6IGJsYWNrO1xcbiAgICAtLXNpZGViYXJCZzogaHNsKDI0MCwgMTIlLCA3NiUpO1xcbiAgICAtLWltcG9ydGFudEJ1dHRvbkhvdmVyOiAjMDAwMDAwO1xcbiAgICAtLWltcG9ydGFudFRleHQ6ICMwZTBjMGM7XFxuICAgIC0taW1wb3J0YW50VGV4dEhvdmVyOiBibGFjaztcXG4gICAgLS1mb2xkZXJIb3ZlcjogYmxhY2s7XFxuICAgIC0tdG9kb1RleHQ6IGJsYWNrO1xcbiAgICAtLXRvZG9Cb3JkZXI6ICM1MzUzNTNjYjtcXG4gICAgLS1iZ0NvbG9yOiBoc2woMjQwLCA5JSwgODYlKTtcXG4gICAgLS1mb290ZXJUZXh0OiBoc2woMjQwLCA5JSwgMTMlKTtcXG4gICAgLS1mb290ZXJCZzogaHNsKDAsIDAlLCA3OSUpO1xcbiAgICAtLXByb2plY3RUZXh0OiBoc2woMjQwLCA2NiUsIDklKTtcXG4gICAgLS1wcm9qZWN0SG92ZXJUZXh0OiBoc2woMCwgMCUsIDAlKTtcXG4gICAgLS1wcm9qZWN0Qmc6IGhzbCgyNDAsIDEyJSwgNzYlKTtcXG4gICAgLS1maWx0ZXI6IG5vbmU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXJCZyk7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJUZXh0KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taGVhZGVyQm9yZGVyKTtcXG4gICAgaGVpZ2h0OiA4JTtcXG59XFxuXFxuLmhlYWRlci1sZWZ0LFxcbi5oZWFkZXItcmlnaHQge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4uaGVhZGVyLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLWxvZ28ge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cXG4uaGVhZGVyLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG59XFxuXFxuLnNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNjVhZDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuICBcXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgbWluLWhlaWdodDogOTB2aDtcXG5cXG59XFxuLm1haW4tbGVmdCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3MDZiNmI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJCZyk7XFxuICAgIG1hcmdpbi10b3A6IDFweDtcXG59XFxuLm1haW4tY2VudGVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtYnV0dG9uLFxcbi5pbXBvcnRhbnQtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0VGV4dCk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdEJnKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4ucHJvamVjdHMtYnV0dG9uOmhvdmVyLCBcXG4uaW1wb3J0YW50LWJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1pbXBvcnRhbnRCdXR0b25Ib3Zlcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lcixcXG4uaW1wb3J0YW50LWNvbnRhaW5lciB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNWZmO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdEJnKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgcGFkZGluZzogMCAwIDE1cHg7XFxufVxcblxcbi5pbXBvcnRhbnQtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jcHJvamVjdHMsICNpbXBvcnRhbnQtZm9sZGVyIHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmltcG9ydGFudC1mb2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW1wb3J0YW50LWl0ZW0ge1xcbiAgICBjb2xvcjogdmFyKC0taW1wb3J0YW50VGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4uaW1wb3J0YW50LWl0ZW06aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0taW1wb3J0YW50VGV4dEhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtdGV4dCxcXG4uaW1wb3J0YW50LXRleHQge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdHMtaXRlbS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1pdGVtIHtcXG4gICAgY29sb3I6IHZhcigtLXByb2plY3RUZXh0KTtcXG4gICAgZm9udC1zaXplOiAyMXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi5wcm9qZWN0cy1pdGVtLWRlbGV0ZSB7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyKTsgXFxuICAgIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnByb2plY3RzLWl0ZW0tZGVsZXRlOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtaXRlbTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0SG92ZXJUZXh0KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGVudC5zaWRlYmFyLWhpZGRlbixcXG4uaW1wb3J0YW50LWZvbGRlci5zaWRlYmFyLWhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNwcm9qZWN0cy1zcGFuLCBcXG4jaW1wb3J0YW50LXNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdFRleHQpO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5jZW50ZXItY29udGVudCB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi50b2RvLXRvcC1jb250YWluZXIge1xcbiAgICBjb2xvcjogdmFyKC0tdG9kb1RleHQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XFxufVxcblxcbi50b2RvLXRvcC1jb250YWluZXIgPiBwIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4udG9kby1hZGQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50b2RvLWFkZC1jb250YWluZXI6aG92ZXIsIFxcbi5uZXctcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLWFkZC1jb250YWluZXIgPiBwIHtcXG4gICAgY29sb3I6IHZhcigtLXRvZG9UZXh0KTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4uYWRkLWltYWdlLCAudGFzay1idXR0b24ge1xcbiAgICB3aWR0aDogMjJweDtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcik7XFxufVxcblxcbi50b2RvcyB7XFxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgY29sb3I6IHZhcigtLXRvZG9UZXh0KTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tdG9kb0JvcmRlcik7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10b2RvQm9yZGVyKTtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgbWFyZ2luLXRvcDogLTFweDtcXG59XFxuXFxuLnRvZG8taXRlbS1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLmRlbGV0ZS10b2RvLWJ1dHRvbiB7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyKTtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uZGVsZXRlLXRvZG8tYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4udG9kby1kdWUtZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRvZG8taXRlbTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS10b2RvVGV4dCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2M1YzZjN2IwO1xcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjYzVjNmM3YjA7XFxufVxcblxcbi5uZXctdG9kby1mb3JtLFxcbi50b2RvLWRldGFpbGVkLCBcXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyOTQ1NTI7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhlYWRlckJvcmRlcik7XFxufVxcblxcbi5uZXctdG9kby1mb3JtIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwNzBhO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXG59XFxuXFxuLnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tdG9kb1RleHQpO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5uZXctcHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXByb2plY3RUZXh0KTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIG1hcmdpbjogMTBweCAwIDVweDtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSAudGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyQmcpO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgXFxufVxcblxcbi50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzay1idXR0b24ge1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxufVxcblxcbi50YXNrLWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlZC10ZXh0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1icmlnaHRSZWQpO1xcbn1cXG5cXG4ucHJvamVjdC1zZWxlY3RvciB7XFxuICAgIGNvbG9yOiB2YXIoLS10b2RvVGV4dCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XFxufVxcblxcbi5zbGlkZXItY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4uZHVlLWRhdGUtcGlja2VyIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRvZG9UZXh0KTtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4uZHVlLWRhdGUtcGlja2VyOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcik7XFxufVxcblxcbi5kYXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4ucHJpby10ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLXRvZG9UZXh0KTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWZvb3RlclRleHQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXJCZyk7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzA2YjZiO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbiNmb290ZXItbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xcbn1cXG5cXG4jZm9vdGVyLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xcbn1cXG5cXG4uZ2l0aHViLWltYWdlIHtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXIpO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi5naXRodWItaW1hZ2U6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRIZWxwZXIsIGNyZWF0ZUhUTUxFbGVtZW50IH0gZnJvbSBcIi4vZG9tSGVscGVyc1wiO1xuaW1wb3J0IGFkZEljb24gZnJvbSBcIi4vaW1hZ2VzL2FkZC5zdmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlTmV3QWRkQnV0dG9uKGNvbnRhaW5lckNsYXNzLCBpbWFnZUNsYXNzLCB0ZXh0Q2xhc3MsIHRleHQpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBjb250YWluZXJDbGFzcyk7XG4gICAgY29uc3QgYWRkSW1hZ2UgPSBjcmVhdGVIVE1MRWxlbWVudChcImltZ1wiLCBpbWFnZUNsYXNzKTtcbiAgICBhZGRJbWFnZS5zcmMgPSBhZGRJY29uO1xuICAgIGNvbnN0IGFkZFRleHQgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgdGV4dENsYXNzKTtcbiAgICBhZGRUZXh0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250YWluZXIsIFthZGRJbWFnZSwgYWRkVGV4dF0pO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU5ld0FkZEJ1dHRvbiB9O1xuXG4iLCJpbXBvcnQgeyBhcHBlbmRDaGlsZEhlbHBlciB9IGZyb20gXCIuL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7IG5ld1Byb2plY3RDbGljaywgcmVBcHBlbmROZXdQcm9qZWN0QnV0dG9uIH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuaW1wb3J0IHsgY3JlYXRlTmV3VGFza0J1dHRvbiwgbmV3VGFza0NsaWNrIH0gZnJvbSBcIi4vbmV3VGFza1wiO1xuaW1wb3J0IHsgYWRkSXRlbVRvUHJvamVjdCwgYWRkUHJvamVjdCwgZ2V0UHJvamVjdEluZGV4QnlUaXRsZSwgZ2V0SURzT2ZQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IGFkZFRvZG8sIGNyZWF0ZVRvZG9zLCBkZWxldGVUb2RvLCBkaXNwbGF5VG9kb0RldGFpbHMsIGVkaXRUb2RvLCBnZXRUb2RvcywgZ2V0VG9kb3NCeUlELCByZW5kZXJBbGxUb2RvcyB9IGZyb20gXCIuL3RvZG9JdGVtc1wiO1xuXG5mdW5jdGlvbiBiaW5kQ2xpY2tFdmVudHMoKSB7XG4gICAgY29uc3QgW3Byb2plY3RzQnV0dG9uLCBpbXBvcnRhbnRCdXR0b25dID0gZmluZEJ1dHRvbnMoW1wicHJvamVjdHMtYnV0dG9uXCIsIFwiaW1wb3J0YW50LWJ1dHRvblwiXSk7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1hZGQtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0LWJ1dHRvblwiKTtcblxuICAgIGFkZFByb2plY3RzQnV0dG9uRXZlbnQocHJvamVjdHNCdXR0b24pO1xuICAgIGFkZEltcG9ydGFudEJ1dHRvbkV2ZW50KGltcG9ydGFudEJ1dHRvbik7XG4gICAgYWRkQWRkVGFza0J1dHRvbkV2ZW50KGFkZFRhc2tCdXR0b24pO1xuICAgIGFkZE5ld1Byb2plY3RCdXR0b25FdmVudChhZGRQcm9qZWN0QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gYWRkQWRkVGFza0J1dHRvbkV2ZW50KGFkZFRhc2tCdXR0b24pIHtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBuZXdUYXNrQ2xpY2soZSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RzQnV0dG9uRXZlbnQocHJvamVjdHNCdXR0b24pIHtcbiAgICBwcm9qZWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcHJvamVjdHNCdXR0b24ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJzaWRlYmFyLWhpZGRlblwiKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkSW1wb3J0YW50QnV0dG9uRXZlbnQoaW1wb3J0YW50QnV0dG9uKSB7XG4gICAgaW1wb3J0YW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpbXBvcnRhbnRCdXR0b24ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJzaWRlYmFyLWhpZGRlblwiKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkQ2xvc2VCdXR0b25FdmVudChjbG9zZUJ1dHRvbikge1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBjbG9zZUJ1dHRvbi5wYXJlbnROb2RlO1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgIHJlQXBwZW5kTmV3VGFza0J1dHRvbigpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRDb25maXJtQnV0dG9uRXZlbnQoY29uZmlybUJ1dHRvbikge1xuICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGNvbmZpcm1CdXR0b24ucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS10ZXh0YXJlYVwiKTtcbiAgICAgICAgaWYgKHRpdGxlLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICB0aXRsZS5wbGFjZWhvbGRlciA9IFwiVGhpcyBmaWVsZCBjYW5ub3QgYmUgZW1wdHkuXCI7XG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwicmVkLXRleHRcIik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwicmVkLXRleHRcIik7XG4gICAgICAgICAgICB9LCA3NTApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb24tdGV4dGFyZWFcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtY29udGFpbmVyIC5kdWUtZGF0ZS1waWNrZXJcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHktc2xpZGVyXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1zZWxlY3RvclwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9kb0lEID0gYWRkVG9kbyh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgICAgICAgYWRkSXRlbVRvUHJvamVjdCh0b2RvSUQsIGdldFByb2plY3RJbmRleEJ5VGl0bGUocHJvamVjdCkpO1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgIGNyZWF0ZVRvZG9zKGdldFRvZG9zQnlJRChnZXRJRHNPZlByb2plY3QoZ2V0UHJvamVjdEluZGV4QnlUaXRsZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tcGFnZS10aXRsZVwiKS50ZXh0Q29udGVudCkpKSk7XG4gICAgICAgIHJlQXBwZW5kTmV3VGFza0J1dHRvbigpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGREZWxldGVUb2RvRXZlbnQoZGVsZXRlQnV0dG9uKSB7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkZWxldGVCdXR0b24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCB0b2RvSUQgPSBwYXJlbnQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgIGRlbGV0ZVRvZG8odG9kb0lEKTtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFkZExpZ2h0U3dpdGNoRXZlbnQoc3dpdGNoSW5wdXQpIHtcbiAgICBzd2l0Y2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibGlnaHQtdGhlbWVcIik7XG4gICAgICAgIGlmICh0eXBlb2YgU3RvcmFnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UucHJlZmVyc0RhcmtNb2RlKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5wcmVmZXJzRGFya01vZGUgPSBKU09OLnN0cmluZ2lmeShmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5wcmVmZXJzRGFya01vZGUgPSBKU09OLnN0cmluZ2lmeSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0QnV0dG9uRXZlbnQoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBuZXdQcm9qZWN0Q2xpY2soZSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZENvbmZpcm1OZXdQcm9qZWN0QnV0dG9uRXZlbnQoY29uZmlybUJ1dHRvbikge1xuICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbmZpcm1CdXR0b24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtaW5wdXRcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGV4dGFyZWEudmFsdWU7XG4gICAgICAgIGFkZFByb2plY3QodGl0bGUpO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIHJlQXBwZW5kTmV3UHJvamVjdEJ1dHRvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWNvbnRlbnRcIikpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRDbG9zZU5ld1Byb2plY3RCdXR0b25FdmVudChjbG9zZUJ1dHRvbikge1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjbG9zZUJ1dHRvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgcmVBcHBlbmROZXdQcm9qZWN0QnV0dG9uKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtY29udGVudFwiKSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZERldGFpbGVkQ29uZmlybUJ1dHRvbkV2ZW50KGNvbmZpcm1CdXR0b24sIGlkKSB7XG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gY29uZmlybUJ1dHRvbi5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLXRleHRhcmVhXCIpO1xuICAgICAgICBpZiAodGl0bGUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRpdGxlLnBsYWNlaG9sZGVyID0gXCJUaGlzIGZpZWxkIGNhbm5vdCBiZSBlbXB0eS5cIjtcbiAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJyZWQtdGV4dFwiKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJyZWQtdGV4dFwiKTtcbiAgICAgICAgICAgIH0sIDc1MCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbi10ZXh0YXJlYVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtY29udGFpbmVyIC5kdWUtZGF0ZS1waWNrZXJcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHktc2xpZGVyXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1zZWxlY3RvclwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZWRpdGVkVG9kb0lEID0gZWRpdFRvZG8oaWQsIHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpO1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgIHJlbmRlckFsbFRvZG9zKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SW5kZXggPSBnZXRQcm9qZWN0SW5kZXhCeVRpdGxlKHByb2plY3QpO1xuICAgICAgICBhZGRJdGVtVG9Qcm9qZWN0KGVkaXRlZFRvZG9JRCwgY3VycmVudFByb2plY3RJbmRleCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZERldGFpbGVkQ2xvc2VCdXR0b25FdmVudChjbG9zZUJ1dHRvbikge1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjcmVhdGVUb2RvcyhnZXRUb2RvcygpKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVBcHBlbmROZXdUYXNrQnV0dG9uKCkge1xuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBjcmVhdGVOZXdUYXNrQnV0dG9uKCk7XG4gICAgYWRkQWRkVGFza0J1dHRvbkV2ZW50KG5ld1Rhc2tCdXR0b24pO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2VudGVyLWNvbnRlbnRcIiksIG5ld1Rhc2tCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvRXZlbnQodG9kbykge1xuICAgIHRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtdG9kby1idXR0b25cIikpIHJldHVybjtcbiAgICAgICAgaWYgKFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS10b2RvLWJ1dHRvblwiKV0uaW5jbHVkZXMoZS50YXJnZXQpKSByZXR1cm47XG4gICAgICAgIGRpc3BsYXlUb2RvRGV0YWlscyhlLmN1cnJlbnRUYXJnZXQuaWQpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBmaW5kQnV0dG9ucyhidXR0b25JRHMpIHtcbiAgICBjb25zdCBkb21CdXR0b25zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIildO1xuICAgIGNvbnN0IHJldHVybkJ1dHRvbnMgPSBbXTtcbiAgICBpZiAodHlwZW9mIGJ1dHRvbklEcyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBidXR0b25JRHMuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICBkb21CdXR0b25zLmZpbmQoZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgICAgICAgICAgIGlmIChidXR0b24uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybkJ1dHRvbnMucHVzaChidXR0b24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb21CdXR0b25zLmZpbmQoZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbi5pZCA9PT0gYnV0dG9uSURzO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldHVybkJ1dHRvbnM7XG59XG5cbmV4cG9ydCB7XG4gICAgYmluZENsaWNrRXZlbnRzLCBhZGRDb25maXJtQnV0dG9uRXZlbnQsIGFkZENsb3NlQnV0dG9uRXZlbnQsXG4gICAgYWRkVG9kb0V2ZW50LCBhZGREZXRhaWxlZENsb3NlQnV0dG9uRXZlbnQsIGFkZERldGFpbGVkQ29uZmlybUJ1dHRvbkV2ZW50LFxuICAgIGFkZENsb3NlTmV3UHJvamVjdEJ1dHRvbkV2ZW50LCBhZGRDb25maXJtTmV3UHJvamVjdEJ1dHRvbkV2ZW50LCBhZGROZXdQcm9qZWN0QnV0dG9uRXZlbnQsIGFkZERlbGV0ZVRvZG9FdmVudCwgYWRkTGlnaHRTd2l0Y2hFdmVudCxcbn07IiwiZnVuY3Rpb24gY3JlYXRlSFRNTEVsZW1lbnQoZWxlbWVudCwgY2xhc3NlcywgaWQpIHtcbiAgICBjb25zdCByZXR1cm5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBpZiAodHlwZW9mIGNsYXNzZXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgY2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc1RvQWRkKSB7XG4gICAgICAgICAgICByZXR1cm5FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NUb0FkZCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNsYXNzZXMgPT09IFwic3RyaW5nXCIgJiYgY2xhc3NlcyAhPT0gXCJcIikge1xuICAgICAgICByZXR1cm5FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3Nlcyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaWQgPT09IFwic3RyaW5nXCIgJiYgaWQgIT09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDaGlsZEhlbHBlcihlbGVtZW50LCBjaGlsZHJlbikge1xuICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YoY2hpbGRyZW4pLmNvbnN0cnVjdG9yID09PSBBcnJheSAmJiB0eXBlb2YgY2hpbGRyZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZHJlbik7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZHJlbihlbGVtZW50KSB7XG4gICAgd2hpbGUoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUhUTUxFbGVtZW50LCBhcHBlbmRDaGlsZEhlbHBlciwgcmVtb3ZlQWxsQ2hpbGRyZW4gfTsiLCJpbXBvcnQgeyBhZGRDbG9zZU5ld1Byb2plY3RCdXR0b25FdmVudCwgYWRkQ29uZmlybU5ld1Byb2plY3RCdXR0b25FdmVudCwgYWRkTmV3UHJvamVjdEJ1dHRvbkV2ZW50IH0gZnJvbSBcIi4vYmluZENsaWNrRXZlbnRzXCI7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZEhlbHBlciwgY3JlYXRlSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9kb21IZWxwZXJzXCI7XG5pbXBvcnQgeyBjcmVhdGVDb25maXJtQnV0dG9uLCBjcmVhdGVDbG9zZUJ1dHRvbiB9IGZyb20gXCIuL25ld1Rhc2tcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld0FkZEJ1dHRvbiB9IGZyb20gXCIuL2FkZEJ1dHRvblwiO1xuXG5mdW5jdGlvbiBuZXdQcm9qZWN0Q2xpY2soZSkge1xuICAgIGNvbnN0IHBhcmVudCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlO1xuICAgIGUuY3VycmVudFRhcmdldC5yZW1vdmUoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcIm5ldy1wcm9qZWN0LWNvbnRhaW5lclwiLCBcIm5ldy1wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwibmV3LXByb2plY3QtZm9ybVwiLCBcIm5ldy1wcm9qZWN0LWZvcm1cIik7XG4gICAgY29uc3QgdGl0bGVBcmVhID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbnB1dFwiLCBbXCJ0ZXh0YXJlYVwiLCBcIm5ldy1wcm9qZWN0LXRleHRhcmVhXCJdLCBcIm5ldy1wcm9qZWN0LWlucHV0XCIpO1xuICAgIHRpdGxlQXJlYS5wbGFjZWhvbGRlciA9IFwiVGl0bGU6IENvZGluZ1wiO1xuICAgIHRpdGxlQXJlYS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdGl0bGVBcmVhLnNpemUgPSBcIjE4XCI7XG4gICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGNyZWF0ZUNvbmZpcm1CdXR0b24oKTtcbiAgICBhZGRDb25maXJtTmV3UHJvamVjdEJ1dHRvbkV2ZW50KGNvbmZpcm1CdXR0b24pO1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlQ2xvc2VCdXR0b24oKTtcbiAgICBhZGRDbG9zZU5ld1Byb2plY3RCdXR0b25FdmVudChjbG9zZUJ1dHRvbik7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJuZXctcHJvamVjdC1idXR0b24tY29udGFpbmVyXCIpO1xuXG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGFpbmVyLCBhcHBlbmRDaGlsZEhlbHBlcihuZXdQcm9qZWN0Rm9ybSwgdGl0bGVBcmVhKSk7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGFpbmVyLCBhcHBlbmRDaGlsZEhlbHBlcihidXR0b25Db250YWluZXIsIFtjb25maXJtQnV0dG9uLCBjbG9zZUJ1dHRvbl0pKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihwYXJlbnQsIGNvbnRhaW5lcik7XG4gICAgdGl0bGVBcmVhLmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24oKSB7XG4gICAgY29uc3QgbmV3QnV0dG9uID0gY3JlYXRlTmV3QWRkQnV0dG9uKFwibmV3LXByb2plY3QtYnV0dG9uXCIsIFwiYWRkLWltYWdlXCIsIFwibmV3LXByb2plY3QtdGV4dFwiLCBcIk5ldyBQcm9qZWN0XCIpO1xuICAgIHJldHVybiBuZXdCdXR0b247XG59XG5cbmZ1bmN0aW9uIHJlQXBwZW5kTmV3UHJvamVjdEJ1dHRvbihwYXJlbnROb2RlKSB7XG4gICAgY29uc3QgbmV3QnV0dG9uID0gY3JlYXRlTmV3UHJvamVjdEJ1dHRvbigpO1xuICAgIGFkZE5ld1Byb2plY3RCdXR0b25FdmVudChuZXdCdXR0b24pO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKHBhcmVudE5vZGUsIG5ld0J1dHRvbik7XG59XG5cbmV4cG9ydCB7IG5ld1Byb2plY3RDbGljaywgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbiwgcmVBcHBlbmROZXdQcm9qZWN0QnV0dG9uIH07IiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRIZWxwZXIsIGNyZWF0ZUhUTUxFbGVtZW50IH0gZnJvbSBcIi4vZG9tSGVscGVyc1wiO1xuaW1wb3J0IHsgYWRkQ29uZmlybUJ1dHRvbkV2ZW50LCBhZGRDbG9zZUJ1dHRvbkV2ZW50IH0gZnJvbSBcIi4vYmluZENsaWNrRXZlbnRzXCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgY29uZmlybUljb24gZnJvbSBcIi4vaW1hZ2VzL2NvbmZpcm0uc3ZnXCI7XG5pbXBvcnQgY2xvc2VJY29uIGZyb20gXCIuL2ltYWdlcy9jbG9zZS5zdmdcIjtcbmltcG9ydCBhZGRJY29uIGZyb20gXCIuL2ltYWdlcy9hZGQuc3ZnXCI7XG5pbXBvcnQgeyBnZXRUb2Rvc0J5SUQgfSBmcm9tIFwiLi90b2RvSXRlbXNcIjtcblxuZnVuY3Rpb24gbmV3VGFza0NsaWNrKGUsIHRvZG9JRCkge1xuICAgIGNvbnN0IHBhcmVudCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlO1xuICAgIGUuY3VycmVudFRhcmdldC5yZW1vdmUoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcIm5ldy10b2RvLWNvbnRhaW5lclwiLCBcIm5ldy10b2RvLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBuZXdUb2RvRm9ybSA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwibmV3LXRvZG8tZm9ybVwiLCBcIm5ldy10b2RvLWZvcm1cIik7XG4gICAgY29uc3QgdGl0bGVBcmVhID0gY3JlYXRlVGl0bGVBcmVhKCk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25BcmVhID0gY3JlYXRlRGVzY3JpcHRpb25BcmVhKCk7XG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGNyZWF0ZURhdGVDb250YWluZXIodHJ1ZSwgdG9kb0lEKTtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gY3JlYXRlQ29uZmlybUJ1dHRvbigpO1xuICAgIGFkZENvbmZpcm1CdXR0b25FdmVudChjb25maXJtQnV0dG9uKTtcbiAgICBjb25maXJtQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LXRhc2stY29uZmlybVwiKTtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGNyZWF0ZUNsb3NlQnV0dG9uKCk7XG4gICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctdGFzay1jbG9zZVwiKTtcbiAgICBhZGRDbG9zZUJ1dHRvbkV2ZW50KGNsb3NlQnV0dG9uKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250YWluZXIsIGFwcGVuZENoaWxkSGVscGVyKG5ld1RvZG9Gb3JtLCBbdGl0bGVBcmVhLCBkZXNjcmlwdGlvbkFyZWEsIGRhdGVDb250YWluZXJdKSk7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGFpbmVyLCBbY29uZmlybUJ1dHRvbiwgY2xvc2VCdXR0b25dKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihwYXJlbnQsIGNvbnRhaW5lcik7XG4gICAgdGl0bGVBcmVhLmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNsaWRlcigpIHtcbiAgICBjb25zdCBzbGlkZXJDb250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInNsaWRlci1jb250YWluZXJcIik7XG4gICAgY29uc3QgcHJpb1NsaWRlciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaW5wdXRcIiwgXCJwcmlvcml0eS1zbGlkZXJcIik7XG4gICAgcHJpb1NsaWRlci50eXBlID0gXCJyYW5nZVwiO1xuICAgIHByaW9TbGlkZXIubWluID0gXCIxXCI7XG4gICAgcHJpb1NsaWRlci5tYXggPSBcIjEwXCI7XG4gICAgcHJpb1NsaWRlci52YWx1ZSA9IFwiNVwiO1xuICAgIGNvbnN0IHByaW9UZXh0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwicHJpby10ZXh0XCIpO1xuICAgIHByaW9UZXh0LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCI7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoc2xpZGVyQ29udGFpbmVyLCBbcHJpb1RleHQsIHByaW9TbGlkZXJdKTtcbiAgICByZXR1cm4gc2xpZGVyQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb25maXJtQnV0dG9uKCkge1xuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBjcmVhdGVIVE1MRWxlbWVudChcImltZ1wiLCBbXCJ0YXNrLWJ1dHRvblwiLCBcImNvbmZpcm0tYnV0dG9uXCJdKTtcbiAgICBjb25maXJtQnV0dG9uLnNyYyA9IGNvbmZpcm1JY29uO1xuICAgIHJldHVybiBjb25maXJtQnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDbG9zZUJ1dHRvbigpIHtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaW1nXCIsIFtcInRhc2stYnV0dG9uXCIsIFwiY2xvc2UtYnV0dG9uXCJdKTtcbiAgICBjbG9zZUJ1dHRvbi5zcmMgPSBjbG9zZUljb247XG4gICAgcmV0dXJuIGNsb3NlQnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXRlQ29udGFpbmVyKGlzTmV3VGFzaywgdG9kb0lEKSB7XG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwiZGF0ZS1jb250YWluZXJcIik7XG4gICAgY29uc3QgZGF0ZVBpY2tlciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaW5wdXRcIiwgXCJkdWUtZGF0ZS1waWNrZXJcIik7XG4gICAgZGF0ZVBpY2tlci50eXBlID0gXCJkYXRlXCI7XG4gICAgZGF0ZVBpY2tlci52YWx1ZUFzRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1jb250YWluZXJcIik7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVIVE1MRWxlbWVudChcInNlbGVjdFwiLCBcInByb2plY3Qtc2VsZWN0b3JcIik7XG4gICAgc2VsZWN0b3IubmFtZSA9IFwicHJvamVjdHNcIjtcbiAgICBnZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYocHJvamVjdCA9PSBudWxsIHx8IHByb2plY3QgPT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG5ld09wdGlvbiA9IGNyZWF0ZUhUTUxFbGVtZW50KFwib3B0aW9uXCIsIFwicHJvamVjdC1vcHRpb25cIik7XG4gICAgICAgIG5ld09wdGlvbi52YWx1ZSA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIGlmIChuZXdPcHRpb24udmFsdWUgPT09IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1wYWdlLXRpdGxlXCIpLnRleHRDb250ZW50ICYmIGlzTmV3VGFzaykge1xuICAgICAgICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiXFxcInNlbGVjdGVkXFxcIlwiKTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNOZXdUYXNrKSB7XG4gICAgICAgICAgICBpZihuZXdPcHRpb24udmFsdWUgPT09IGdldFRvZG9zQnlJRChbdG9kb0lEXSlbMF0uZ2V0UHJvamVjdCgpKSB7XG4gICAgICAgICAgICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiXFxcInNlbGVjdGVkXFxcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgICAgbmV3T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgYXBwZW5kQ2hpbGRIZWxwZXIoc2VsZWN0b3IsIG5ld09wdGlvbik7XG4gICAgfSk7XG5cbiAgICBhcHBlbmRDaGlsZEhlbHBlcihwcm9qZWN0Q29udGFpbmVyLCBzZWxlY3Rvcik7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoZGF0ZUNvbnRhaW5lciwgW2RhdGVQaWNrZXIsIHByb2plY3RDb250YWluZXIsIGNyZWF0ZVNsaWRlcigpXSk7XG4gICAgcmV0dXJuIGRhdGVDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlc2NyaXB0aW9uQXJlYSgpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkFyZWEgPSBjcmVhdGVIVE1MRWxlbWVudChcInRleHRhcmVhXCIsIFtcImRlc2NyaXB0aW9uLXRleHRhcmVhXCIsIFwidGV4dGFyZWFcIl0pO1xuICAgIGRlc2NyaXB0aW9uQXJlYS5wbGFjZWhvbGRlciA9IFwiRGV0YWlsczogUHJlZmVyYWJseSBiZWZvcmUgeW91IHN0YXJ2ZS5cIlxuICAgIGRlc2NyaXB0aW9uQXJlYS5yb3dzID0gXCI1XCI7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uQXJlYTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGl0bGVBcmVhKCkge1xuICAgIGNvbnN0IHRpdGxlQXJlYSA9IGNyZWF0ZUhUTUxFbGVtZW50KFwidGV4dGFyZWFcIiwgW1widGl0bGUtdGV4dGFyZWFcIiwgXCJ0ZXh0YXJlYVwiXSk7XG4gICAgdGl0bGVBcmVhLnBsYWNlaG9sZGVyID0gXCJUaXRsZTogRWF0IGZvb2RcIjtcbiAgICByZXR1cm4gdGl0bGVBcmVhO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrQnV0dG9uKCkge1xuICAgIGNvbnN0IGJvdHRvbUNvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwidG9kby1hZGQtY29udGFpbmVyXCIsIFwidG9kby1hZGQtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGFkZEltYWdlID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbWdcIiwgXCJhZGQtaW1hZ2VcIiwgXCJhZGQtaW1hZ2VcIik7XG4gICAgYWRkSW1hZ2Uuc3JjID0gYWRkSWNvbjtcbiAgICBjb25zdCBhZGRUZXh0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwiYWRkLXRleHRcIiwgXCJhZGQtdGV4dFwiKTtcbiAgICBhZGRUZXh0LnRleHRDb250ZW50ID0gXCJOZXcgVGFza1wiO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGJvdHRvbUNvbnRhaW5lciwgW2FkZEltYWdlLCBhZGRUZXh0XSk7XG4gICAgcmV0dXJuIGJvdHRvbUNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgbmV3VGFza0NsaWNrLCBjcmVhdGVOZXdUYXNrQnV0dG9uLCBjcmVhdGVTbGlkZXIsIGNyZWF0ZUNsb3NlQnV0dG9uLCBjcmVhdGVDb25maXJtQnV0dG9uLCBjcmVhdGVEYXRlQ29udGFpbmVyLCBjcmVhdGVUaXRsZUFyZWEsIGNyZWF0ZURlc2NyaXB0aW9uQXJlYSB9OyIsImltcG9ydCB7IGFwcGVuZENoaWxkSGVscGVyLCBjcmVhdGVIVE1MRWxlbWVudCwgcmVtb3ZlQWxsQ2hpbGRyZW4gfSBmcm9tIFwiLi9kb21IZWxwZXJzXCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvcywgZ2V0VG9kb3MsIGdldFRvZG9zQnlJRCB9IGZyb20gXCIuL3RvZG9JdGVtc1wiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vaW1hZ2VzL2RlbGV0ZS5zdmdcIjtcblxuY29uc3QgcHJvamVjdHMgPSBbXTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSkge1xuICAgIHRpdGxlID0gdGl0bGUuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHRpdGxlLnNsaWNlKDEsIHRpdGxlLmxlbmd0aCkudG9Mb3dlckNhc2UoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHByb2plY3RzW2ldID09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgICBpZiAocHJvamVjdHNbaV0udGl0bGUgPT09IHRpdGxlKSByZXR1cm47XG4gICAgfVxuICAgIHByb2plY3RzLnB1c2goe1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGl0ZW1zOiBbXSxcbiAgICB9KTtcbiAgICBwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGggLSAxXS5pbmRleCA9IHByb2plY3RzLmxlbmd0aCAtIDE7XG4gICAgdXBkYXRlTG9jYWxQcm9qZWN0cygpO1xuICAgIHJlbmRlclByb2plY3RzKCk7XG59XG5cbmZ1bmN0aW9uIGFkZEhvbWVQcm9qZWN0KCkge1xuICAgIGFkZFByb2plY3QoXCJIb21lXCIpO1xufVxuXG5mdW5jdGlvbiBhZGRJdGVtVG9Qcm9qZWN0KHRvZG9JRCwgcHJvamVjdEluZGV4KSB7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgaWYgKHByb2plY3QgPT0gbnVsbCB8fCBwcm9qZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBmb3VuZEluZGV4ID0gcHJvamVjdC5pdGVtcy5maW5kSW5kZXgoaWQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGlkID09IHRvZG9JRDtcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgcHJvamVjdC5pdGVtcy5zcGxpY2UoZm91bmRJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLml0ZW1zLnB1c2godG9kb0lEKTtcbiAgICBpZiAocHJvamVjdEluZGV4ID4gMCkge1xuICAgICAgICBwcm9qZWN0c1swXS5pdGVtcy5wdXNoKHRvZG9JRCk7XG4gICAgfVxuICAgIHVwZGF0ZUxvY2FsUHJvamVjdHMoKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlSXRlbUZyb21Qcm9qZWN0KHRvZG9JRCkge1xuICAgIGxldCBwcm9qZWN0VGl0bGU7XG4gICAgZ2V0UHJvamVjdHMoKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBpZiAocHJvamVjdCA9PSBudWxsIHx8IHByb2plY3QgPT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIGlmIChwcm9qZWN0Lml0ZW1zLmluY2x1ZGVzKCt0b2RvSUQpKSB7XG4gICAgICAgICAgICBwcm9qZWN0Lml0ZW1zLnNwbGljZSh0b2RvSUQsIDEsIFwiXCIpO1xuICAgICAgICAgICAgcHJvamVjdFRpdGxlID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNyZWF0ZVRvZG9zKGdldFRvZG9zQnlJRChnZXRJRHNPZlByb2plY3QoZ2V0UHJvamVjdEluZGV4QnlUaXRsZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tcGFnZS10aXRsZVwiKSkpKSk7XG4gICAgdXBkYXRlTG9jYWxQcm9qZWN0cygpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RJbmRleCkge1xuICAgIGNvbnN0IHByb2plY3RUb0RlbGV0ZSA9IGdldFByb2plY3RzKClbcHJvamVjdEluZGV4XTtcbiAgICBjb25zdCB0b2RvcyA9IGdldFRvZG9zKCk7XG4gICAgZ2V0UHJvamVjdHMoKVtwcm9qZWN0SW5kZXhdLml0ZW1zLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICBpZih0b2Rvc1tpbmRleF0gPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICB0b2Rvc1tpbmRleF0uc2V0UHJvamVjdChcIkhvbWVcIik7XG4gICAgfSk7XG4gICAgZ2V0UHJvamVjdHMoKS5zcGxpY2UocHJvamVjdEluZGV4LCAxLCBudWxsKTtcbiAgICB1cGRhdGVMb2NhbFByb2plY3RzKCk7XG59XG5cbmZ1bmN0aW9uIGdldElEc09mUHJvamVjdChwcm9qZWN0SW5kZXgpIHtcbiAgICByZXR1cm4gcHJvamVjdHNbcHJvamVjdEluZGV4XS5pdGVtcztcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5mdW5jdGlvbiBzZXRQcm9qZWN0VG9Ib21lKHByb2plY3QpIHtcbiAgICBwcm9qZWN0Lml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uc2V0UHJvamVjdChcIkhvbWVcIik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RJbmRleEJ5VGl0bGUodGl0bGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0c1tpXSA9PSBudWxsKSBjb250aW51ZTtcbiAgICAgICAgaWYgKHByb2plY3RzW2ldLnRpdGxlID09PSB0aXRsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG4gICAgcmVtb3ZlQWxsQ2hpbGRyZW4oY29udGFpbmVyKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBpZihwcm9qZWN0ID09IG51bGwpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdHMtaXRlbS1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RFbGVtZW50ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwicHJvamVjdHMtaXRlbVwiKTtcbiAgICAgICAgbmV3UHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICBuZXdQcm9qZWN0RWxlbWVudC5kYXRhc2V0LnByb2plY3RJbmRleCA9IGAke3Byb2plY3RzLmZpbmRJbmRleChlbGVtZW50ID0+IHByb2plY3QgPT09IGVsZW1lbnQpfWA7XG4gICAgICAgIG5ld1Byb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGl0bGVOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXBhZ2UtdGl0bGVcIik7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBuZXdQcm9qZWN0RWxlbWVudC5kYXRhc2V0LnByb2plY3RJbmRleFxuICAgICAgICAgICAgdGl0bGVOb2RlLnRleHRDb250ZW50ID0gZ2V0UHJvamVjdHMoKVtwcm9qZWN0SW5kZXhdLnRpdGxlO1xuICAgICAgICAgICAgY3JlYXRlVG9kb3MoZ2V0VG9kb3NCeUlEKGdldElEc09mUHJvamVjdChwcm9qZWN0SW5kZXgpKSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gbmV3UHJvamVjdEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SW5kZXg7XG4gICAgICAgIGlmIChwcm9qZWN0SW5kZXggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdEZWxldGVCdXR0b24gPSBjcmVhdGVIVE1MRWxlbWVudChcImltZ1wiLCBcInByb2plY3RzLWl0ZW0tZGVsZXRlXCIpO1xuICAgICAgICAgICAgbmV3RGVsZXRlQnV0dG9uLnNyYyA9IGRlbGV0ZUljb247XG4gICAgICAgICAgICBuZXdEZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlUHJvamVjdERlbGV0aW9uKGUsIHByb2plY3RJbmRleClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGFpbmVyLCBhcHBlbmRDaGlsZEhlbHBlcihuZXdQcm9qZWN0Q29udGFpbmVyLCBbbmV3UHJvamVjdEVsZW1lbnQsIG5ld0RlbGV0ZUJ1dHRvbl0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRhaW5lciwgYXBwZW5kQ2hpbGRIZWxwZXIobmV3UHJvamVjdENvbnRhaW5lciwgW25ld1Byb2plY3RFbGVtZW50XSkpO1xuICAgICAgICB9XG5cblxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRMb2NhbFByb2plY3RzKCkge1xuICAgIGlmKHR5cGVvZiBTdG9yYWdlID09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2plY3RzKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH0pO1xuICAgIHJlbmRlclByb2plY3RzKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxvY2FsUHJvamVjdHMoKSB7XG4gICAgaWYodHlwZW9mIFN0b3JhZ2UgPT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgbG9jYWxTdG9yYWdlLnByb2plY3RzID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0RGVsZXRpb24oZSwgcHJvamVjdEluZGV4KSB7XG4gICAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3RJbmRleCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0TmFtZShzdHJpbmcsIHByb2plY3RJbmRleCkge1xuICAgIGlmICh0eXBlb2Ygc3RyaW5nID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGl0bGUgPSBzdHJpbmc7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIGFkZFByb2plY3QsIGFkZEhvbWVQcm9qZWN0LCBhZGRJdGVtVG9Qcm9qZWN0LCBkZWxldGVJdGVtRnJvbVByb2plY3QsIGVkaXRQcm9qZWN0TmFtZSxcbiAgICBnZXRJRHNPZlByb2plY3QsIGdldFByb2plY3RzLCBnZXRMb2NhbFByb2plY3RzLCBnZXRQcm9qZWN0SW5kZXhCeVRpdGxlLCByZW5kZXJQcm9qZWN0c1xufTtcbiIsImNsYXNzIHRvZG9JdGVtIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cblxuICAgIHNldFRpdGxlKGlucHV0KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBpbnB1dDtcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24oaW5wdXQpIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGlucHV0O1xuICAgIH1cblxuICAgIGdldER1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgc2V0RHVlRGF0ZShpbnB1dCkge1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBpbnB1dDtcbiAgICB9XG5cbiAgICBnZXRQcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gICAgfVxuXG4gICAgc2V0UHJpb3JpdHkoaW5wdXQpIHtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IGlucHV0O1xuICAgIH1cblxuICAgIGdldFByb2plY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3Q7XG4gICAgfVxuXG4gICAgc2V0UHJvamVjdChpbnB1dCkge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBpbnB1dDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IHsgdG9kb0l0ZW0gfTsiLCJpbXBvcnQgeyBhcHBlbmRDaGlsZEhlbHBlciwgY3JlYXRlSFRNTEVsZW1lbnQsIHJlbW92ZUFsbENoaWxkcmVuIH0gZnJvbSBcIi4vZG9tSGVscGVyc1wiO1xuaW1wb3J0IHsgYWRkVG9kb0V2ZW50LCBhZGREZXRhaWxlZENsb3NlQnV0dG9uRXZlbnQsIGFkZERldGFpbGVkQ29uZmlybUJ1dHRvbkV2ZW50LCBhZGREZWxldGVUb2RvRXZlbnQgfSBmcm9tIFwiLi9iaW5kQ2xpY2tFdmVudHNcIjtcbmltcG9ydCB7IGNyZWF0ZUNsb3NlQnV0dG9uLCBjcmVhdGVDb25maXJtQnV0dG9uLCBjcmVhdGVEYXRlQ29udGFpbmVyLCBjcmVhdGVUaXRsZUFyZWEsIGNyZWF0ZURlc2NyaXB0aW9uQXJlYSB9IGZyb20gXCIuL25ld1Rhc2tcIjtcbmltcG9ydCB7IGRlbGV0ZUl0ZW1Gcm9tUHJvamVjdCwgZ2V0SURzT2ZQcm9qZWN0LCBnZXRQcm9qZWN0SW5kZXhCeVRpdGxlLCBnZXRQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyB0b2RvSXRlbSB9IGZyb20gXCIuL3RvZG9JdGVtXCI7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi9pbWFnZXMvZGVsZXRlLnN2Z1wiO1xuXG5jb25zdCBhbGxUb2RvcyA9IFtdO1xuXG5mdW5jdGlvbiBnZXRUb2RvcygpIHtcbiAgICByZXR1cm4gYWxsVG9kb3M7XG59XG5cbmZ1bmN0aW9uIGdldFRvZG9zQnlJRChpbmRleGVzKSB7XG4gICAgY29uc3QgdG9kb3MgPSBbXTtcbiAgICBpbmRleGVzLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICB0b2Rvcy5wdXNoKGFsbFRvZG9zW2luZGV4XSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRvZG9zO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICBjb25zdCB0b2RvID0gbmV3IHRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpO1xuICAgIHRvZG8uaWQgPSBhbGxUb2Rvcy5sZW5ndGg7XG4gICAgYWxsVG9kb3MucHVzaCh0b2RvKTtcbiAgICByZW5kZXJJbXBvcnRhbnRUb2RvcygpO1xuICAgIHVwZGF0ZUxvY2FsVG9kb3MoKTtcbiAgICByZXR1cm4gdG9kby5pZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb3ModG9kb3MpIHtcbiAgICBpZiAodG9kb3MgPT09IFtdKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3NcIik7XG4gICAgcmVtb3ZlQWxsQ2hpbGRyZW4odG9kb3NDb250YWluZXIpO1xuICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGlmICghdG9kbykgcmV0dXJuO1xuICAgICAgICBjb25zdCBpdGVtID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWl0ZW1cIiwgdG9kby5pZC50b1N0cmluZygpKTtcbiAgICAgICAgY29uc3QgbGVmdENvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwidG9kby1pdGVtLWxlZnRcIik7XG4gICAgICAgIGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWl0ZW0tcmlnaHRcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwidG9kby10aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLmdldFRpdGxlKCk7XG4gICAgICAgIGFwcGVuZENoaWxkSGVscGVyKGxlZnRDb250YWluZXIsIHRpdGxlKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGNyZWF0ZUhUTUxFbGVtZW50KFwicFwiLCBcInRvZG8tZHVlLWRhdGVcIik7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvLmdldER1ZURhdGUoKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbWdcIiwgXCJkZWxldGUtdG9kby1idXR0b25cIiwgXCJcIik7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5zcmMgPSBkZWxldGVJY29uO1xuICAgICAgICBhZGREZWxldGVUb2RvRXZlbnQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRIZWxwZXIocmlnaHRDb250YWluZXIsIFtkdWVEYXRlLCBkZWxldGVCdXR0b25dKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRIZWxwZXIoaXRlbSwgW2xlZnRDb250YWluZXIsIHJpZ2h0Q29udGFpbmVyXSk7XG4gICAgICAgIGFkZFRvZG9FdmVudChpdGVtKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRIZWxwZXIodG9kb3NDb250YWluZXIsIGl0ZW0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBlZGl0VG9kbyh0b2RvSUQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IHRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpO1xuICAgIG5ld1RvZG8uaWQgPSB0b2RvSUQ7XG4gICAgYWxsVG9kb3Muc3BsaWNlKHRvZG9JRCwgMSwgbmV3VG9kbyk7XG4gICAgcmVuZGVyQWxsVG9kb3MoKTtcbiAgICB1cGRhdGVMb2NhbFRvZG9zKCk7XG4gICAgcmV0dXJuIG5ld1RvZG8uaWQ7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvRGV0YWlscyh0b2RvSUQpIHtcbiAgICBjb25zdCB0b2RvTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvZG9JRCk7XG4gICAgY29uc3QgcGFyZW50ID0gdG9kb05vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zdCBwcmV2RGV0YWlsZWRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWRldGFpbGVkLWNvbnRhaW5lclwiKTtcbiAgICBpZiAocHJldkRldGFpbGVkVG9kbyAhPT0gbnVsbCkge1xuICAgICAgICBjcmVhdGVUb2RvcyhnZXRUb2RvcygpKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9kb0lEKS5yZW1vdmUoKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwidG9kby1kZXRhaWxlZC1jb250YWluZXJcIik7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInRvZG8tZGV0YWlsZWRcIik7XG4gICAgY29uc3QgdGl0bGVBcmVhID0gY3JlYXRlVGl0bGVBcmVhKCk7XG4gICAgdGl0bGVBcmVhLnZhbHVlID0gZ2V0VG9kb3MoKVt0b2RvSURdLmdldFRpdGxlKCk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25BcmVhID0gY3JlYXRlRGVzY3JpcHRpb25BcmVhKCk7XG4gICAgZGVzY3JpcHRpb25BcmVhLnZhbHVlID0gZ2V0VG9kb3MoKVt0b2RvSURdLmdldERlc2NyaXB0aW9uKCk7XG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGNyZWF0ZURhdGVDb250YWluZXIoZmFsc2UsIHRvZG9JRCk7XG4gICAgZGF0ZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5LXNsaWRlclwiKS52YWx1ZSA9IGdldFRvZG9zKClbdG9kb0lEXS5nZXRQcmlvcml0eSgpO1xuICAgIGRhdGVDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kYXRlLWNvbnRhaW5lciAuZHVlLWRhdGUtcGlja2VyXCIpLnZhbHVlID0gZ2V0VG9kb3MoKVt0b2RvSURdLmdldER1ZURhdGUoKTtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gY3JlYXRlQ29uZmlybUJ1dHRvbigpO1xuICAgIGNvbmZpcm1CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWRldGFpbGVkLWNvbmZpcm1cIik7XG4gICAgYWRkRGV0YWlsZWRDb25maXJtQnV0dG9uRXZlbnQoY29uZmlybUJ1dHRvbiwgdG9kb0lEKTtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGNyZWF0ZUNsb3NlQnV0dG9uKCk7XG4gICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWRldGFpbGVkLWNsb3NlXCIpO1xuICAgIGFkZERldGFpbGVkQ2xvc2VCdXR0b25FdmVudChjbG9zZUJ1dHRvbik7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGFpbmVyLCBhcHBlbmRDaGlsZEhlbHBlcih0b2RvRm9ybSwgW3RpdGxlQXJlYSwgZGVzY3JpcHRpb25BcmVhLCBkYXRlQ29udGFpbmVyXSkpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRhaW5lciwgW2NvbmZpcm1CdXR0b24sIGNsb3NlQnV0dG9uXSk7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIocGFyZW50LCBjb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUb2RvKHRvZG9JRCkge1xuICAgIGFsbFRvZG9zW3RvZG9JRF0gPSBudWxsO1xuICAgIGRlbGV0ZUl0ZW1Gcm9tUHJvamVjdCh0b2RvSUQpO1xuICAgIGNyZWF0ZVRvZG9zKGdldFRvZG9zQnlJRChnZXRJRHNPZlByb2plY3QoZ2V0UHJvamVjdEluZGV4QnlUaXRsZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tcGFnZS10aXRsZVwiKS50ZXh0Q29udGVudCkpKSk7XG4gICAgcmVuZGVySW1wb3J0YW50VG9kb3MoKTtcbiAgICB1cGRhdGVMb2NhbFRvZG9zKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFsbFRvZG9zKCkge1xuICAgIGNyZWF0ZVRvZG9zKGdldFRvZG9zKCkpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJJbXBvcnRhbnRUb2RvcygpIHtcbiAgICBjb25zdCBpbXBvcnRhbnRUb2RvcyA9IFtdO1xuICAgIGdldFRvZG9zKCkuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgaWYodG9kbyA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpZiAodG9kby5nZXRQcmlvcml0eSgpID49IDgpIHtcbiAgICAgICAgICAgIGltcG9ydGFudFRvZG9zLnB1c2goeyB0aXRsZTogdG9kby5nZXRUaXRsZSgpLCBpZDogdG9kby5pZCwgcHJpb3JpdHk6IHRvZG8uZ2V0UHJpb3JpdHkoKSB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1wb3J0YW50LWZvbGRlclwiKTtcbiAgICByZW1vdmVBbGxDaGlsZHJlbihjb250YWluZXIpO1xuICAgIGltcG9ydGFudFRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0ltcG9ydGFudEVsZW1lbnQgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJpbXBvcnRhbnQtaXRlbVwiKTtcbiAgICAgICAgbmV3SW1wb3J0YW50RWxlbWVudC50ZXh0Q29udGVudCA9IHRvZG8udGl0bGUgKyBgXFx4YTAgXFx4YTAgXFx4YTAgKCR7dG9kby5wcmlvcml0eX0pYDtcbiAgICAgICAgbmV3SW1wb3J0YW50RWxlbWVudC5kYXRhc2V0LnRvZG9pZCA9IHRvZG8uaWQ7XG4gICAgICAgIG5ld0ltcG9ydGFudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzKCk7XG4gICAgICAgICAgICBsZXQgcHJvamVjdDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBwcm9qZWN0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0c1tpXS5pdGVtcy5pbmNsdWRlcyh0b2RvLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0ID0gcHJvamVjdHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1wYWdlLXRpdGxlXCIpLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgICAgIGNyZWF0ZVRvZG9zKGdldFRvZG9zQnlJRChwcm9qZWN0Lml0ZW1zKSk7XG4gICAgICAgICAgICBkaXNwbGF5VG9kb0RldGFpbHModG9kby5pZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250YWluZXIsIG5ld0ltcG9ydGFudEVsZW1lbnQpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRMb2NhbFRvZG9zKCkge1xuICAgIGlmKHR5cGVvZiBTdG9yYWdlID09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIGlmKGxvY2FsU3RvcmFnZS50b2RvcyA9PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50b2RvcykuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgaWYodG9kbyA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGFkZFRvZG8odG9kby50aXRsZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5kdWVEYXRlLCB0b2RvLnByaW9yaXR5LCB0b2RvLnByb2plY3QpO1xuICAgIH0pO1xuICAgIHJlbmRlckltcG9ydGFudFRvZG9zKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxvY2FsVG9kb3MoKSB7XG4gICAgaWYodHlwZW9mIFN0b3JhZ2UgPT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgbG9jYWxTdG9yYWdlLnRvZG9zID0gSlNPTi5zdHJpbmdpZnkoZ2V0VG9kb3MoKSk7XG59XG5cbmV4cG9ydCB7IGFkZFRvZG8sIGdldFRvZG9zLCBjcmVhdGVUb2RvcywgZGVsZXRlVG9kbywgZWRpdFRvZG8sIGRpc3BsYXlUb2RvRGV0YWlscywgZ2V0VG9kb3NCeUlELCBnZXRMb2NhbFRvZG9zLCByZW5kZXJBbGxUb2RvcyB9O1xuXG4iLCJpbXBvcnQgeyBhZGRMaWdodFN3aXRjaEV2ZW50LCBiaW5kQ2xpY2tFdmVudHMgfSBmcm9tIFwiLi9iaW5kQ2xpY2tFdmVudHNcIjtcbmltcG9ydCB7IGFwcGVuZENoaWxkSGVscGVyLCBjcmVhdGVIVE1MRWxlbWVudCB9IGZyb20gXCIuL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7IGdldFRvZG9zLCBjcmVhdGVUb2RvcywgZ2V0TG9jYWxUb2RvcyB9IGZyb20gXCIuL3RvZG9JdGVtc1wiO1xuaW1wb3J0IHsgY3JlYXRlTmV3VGFza0J1dHRvbiB9IGZyb20gXCIuL25ld1Rhc2tcIjtcbmltcG9ydCB7IGFkZEhvbWVQcm9qZWN0LCBnZXRMb2NhbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3RCdXR0b24gfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5pbXBvcnQgZ2l0aHViSWNvbiBmcm9tIFwiLi9pbWFnZXMvZ2l0aHViLnN2Z1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJFbGVtZW50KCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaGVhZGVyXCIsIFwiaGVhZGVyXCIsIFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGhlYWRlckxlZnQgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcImhlYWRlci1sZWZ0XCIsIFwiaGVhZGVyLWxlZnRcIik7XG4gICAgY29uc3QgaGVhZGVyTG9nbyA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaDFcIiwgXCJoZWFkZXItbG9nb1wiLCBcImhlYWRlci1sb2dvXCIpO1xuICAgIGhlYWRlckxvZ28udGV4dENvbnRlbnQgPSBcInRvZG8tbGlzdFwiXG4gICAgaGVhZGVyTGVmdC5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKTtcbiAgICBjb25zdCBoZWFkZXJSaWdodCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwiaGVhZGVyLXJpZ2h0XCIsIFwiaGVhZGVyLXJpZ2h0XCIpO1xuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJsYWJlbFwiLCBcInN3aXRjaFwiLCBcImRhcmstbW9kZS1zd2l0Y2hcIik7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVIVE1MRWxlbWVudChcImlucHV0XCIsIFwiXCIsIFwiZGFyay1tb2RlLWNoZWNrYm94XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgYWRkTGlnaHRTd2l0Y2hFdmVudChpbnB1dCk7XG4gICAgY29uc3Qgc3BhbiA9IGNyZWF0ZUhUTUxFbGVtZW50KFwic3BhblwiLCBbXCJzbGlkZXJcIiwgXCJyb3VuZFwiXSk7XG4gICAgY29uc3QgbGFiZWxTeW1ib2wgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJzd2l0Y2gtdGV4dFwiLCBcInN3aXRjaC10ZXh0XCIpO1xuICAgIGxhYmVsU3ltYm9sLnRleHRDb250ZW50ID0gXCLwn5KhXCI7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoaGVhZGVyUmlnaHQsIFtsYWJlbFN5bWJvbCwgYXBwZW5kQ2hpbGRIZWxwZXIobGFiZWwsIFtpbnB1dCwgc3Bhbl0pXSk7XG5cbiAgICBhcHBlbmRDaGlsZEhlbHBlcihoZWFkZXIsIFtoZWFkZXJMZWZ0LCBoZWFkZXJSaWdodF0pO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkVsZW1lbnQoKSB7XG4gICAgY29uc3QgbWFpbiA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwibWFpblwiLCBcIm1haW5cIik7XG4gICAgY29uc3QgbWFpbkxlZnQgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcIm1haW4tbGVmdFwiLCBcIm1haW4tbGVmdFwiKTtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdHMtY29udGFpbmVyXCIsIFwicHJvamVjdHMtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHByb2plY3RzQnV0dG9uID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJidXR0b25cIiwgXCJwcm9qZWN0cy1idXR0b25cIiwgXCJwcm9qZWN0cy1idXR0b25cIik7XG4gICAgY29uc3QgcHJvamVjdHNCdXR0b25UZXh0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwicHJvamVjdHMtdGV4dFwiLCBcInByb2plY3RzLXRleHRcIik7XG4gICAgcHJvamVjdHNCdXR0b25UZXh0LmlubmVySFRNTCA9IFwiPHNwYW4gaWQ9XFxcInByb2plY3RzLXNwYW5cXFwiPj4gPC9zcGFuPlByb2plY3RzXCI7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIocHJvamVjdHNDb250YWluZXIsIGFwcGVuZENoaWxkSGVscGVyKHByb2plY3RzQnV0dG9uLCBwcm9qZWN0c0J1dHRvblRleHQpKTtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRlbnQgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInByb2plY3RzLWNvbnRlbnRcIiwgXCJwcm9qZWN0cy1jb250ZW50XCIpO1xuICAgIGNvbnN0IHByb2plY3RzID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgW1wicHJvamVjdHNcIl0sIFwicHJvamVjdHNcIik7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIobWFpbkxlZnQsIGFwcGVuZENoaWxkSGVscGVyKHByb2plY3RzQ29udGFpbmVyLCBhcHBlbmRDaGlsZEhlbHBlcihwcm9qZWN0c0NvbnRlbnQsIFtwcm9qZWN0cywgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbigpXSkpKTtcblxuICAgIGNvbnN0IGltcG9ydGFudENvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwiaW1wb3J0YW50LWNvbnRhaW5lclwiLCBcImltcG9ydGFudC1jb250YWluZXJcIik7XG4gICAgY29uc3QgaW1wb3J0YW50QnV0dG9uID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJidXR0b25cIiwgXCJpbXBvcnRhbnQtYnV0dG9uXCIsIFwiaW1wb3J0YW50LWJ1dHRvblwiKTtcbiAgICBjb25zdCBpbXBvcnRhbnRCdXR0b25UZXh0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwiaW1wb3J0YW50LXRleHRcIiwgXCJpbXBvcnRhbnQtdGV4dFwiKTtcbiAgICBpbXBvcnRhbnRCdXR0b25UZXh0LmlubmVySFRNTCA9IFwiPHNwYW4gaWQ9XFxcInByb2plY3RzLXNwYW5cXFwiPj4gPC9zcGFuPiBJbXBvcnRhbnRcIjtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihpbXBvcnRhbnRDb250YWluZXIsIGFwcGVuZENoaWxkSGVscGVyKGltcG9ydGFudEJ1dHRvbiwgaW1wb3J0YW50QnV0dG9uVGV4dCkpO1xuICAgIGNvbnN0IGltcG9ydGFudEZvbGRlciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFtcImltcG9ydGFudC1mb2xkZXJcIl0sIFwiaW1wb3J0YW50LWZvbGRlclwiKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihtYWluTGVmdCwgYXBwZW5kQ2hpbGRIZWxwZXIoaW1wb3J0YW50Q29udGFpbmVyLCBpbXBvcnRhbnRGb2xkZXIpKTtcblxuICAgIGNvbnN0IG1haW5DZW50ZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcIm1haW4tY2VudGVyXCIsIFwibWFpbi1jZW50ZXJcIik7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIobWFpbkNlbnRlciwgY3JlYXRlTWFpbkNlbnRlckNvbnRlbnQoKSk7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIobWFpbiwgW21haW5MZWZ0LCBtYWluQ2VudGVyXSk7XG5cbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkNlbnRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwiY2VudGVyLWNvbnRlbnRcIiwgXCJjZW50ZXItY29udGVudFwiKTtcbiAgICBjb25zdCB0b3BDb250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInRvZG8tdG9wLWNvbnRhaW5lclwiLCBcInRvZG8tdG9wLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC10aXRsZS1jb250YWluZXJcIiwgXCJwcm9qZWN0LXRpdGxlLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaDJcIiwgXCJ0b2RvLXBhZ2UtdGl0bGVcIiwgXCJ0b2RvLXBhZ2UtdGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBjb25zdCBkdWVEYXRlID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwiXCIsIFwidG9kby1wYWdlLWR1ZS1kYXRlXCIpO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGVudCwgYXBwZW5kQ2hpbGRIZWxwZXIodG9wQ29udGFpbmVyLCBbdGl0bGUsIGR1ZURhdGVdKSk7XG5cbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwidG9kb3NcIiwgXCJ0b2Rvc1wiKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250ZW50LCB0YXNrc0NvbnRhaW5lcik7XG5cblxuICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRlbnQsIGNyZWF0ZU5ld1Rhc2tCdXR0b24oKSk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZm9vdGVyXCIsIFwiZm9vdGVyLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBmb290ZXJUZXh0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwiZm9vdGVyLXRleHRcIik7XG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IGBGcmVkcmlrIEIgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IMKpYDtcbiAgICBjb25zdCBmb290ZXJMZWZ0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJmb290ZXItbGVmdFwiKTtcbiAgICBjb25zdCBmb290ZXJSaWdodCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwiZm9vdGVyLXJpZ2h0XCIpO1xuICAgIGNvbnN0IGFuY2hvciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiYVwiLCBcImdpdGh1Yi1hbmNob3JcIik7XG4gICAgYW5jaG9yLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9mcmVkcmlrYjEyXCI7XG4gICAgY29uc3QgaW1nID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbWdcIiwgXCJnaXRodWItaW1hZ2VcIik7XG4gICAgaW1nLnNyYyA9IGdpdGh1Ykljb247XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoYW5jaG9yLCBpbWcpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGZvb3RlckxlZnQsIGZvb3RlclRleHQpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGZvb3RlclJpZ2h0LCBhbmNob3IpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGZvb3RlciwgW2Zvb3RlckxlZnQsIGZvb3RlclJpZ2h0XSk7XG4gICAgcmV0dXJuIGZvb3RlcjtcblxufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlSW5pdGlhbFdlYnBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXJFbGVtZW50KCk7XG4gICAgY29uc3QgbWFpbiA9IGNyZWF0ZU1haW5FbGVtZW50KCk7XG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGVudERpdiwgW2hlYWRlciwgbWFpbiwgZm9vdGVyXSk7XG4gICAgaWYgKHR5cGVvZiBTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2FsU3RvcmFnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGdldExvY2FsUHJvamVjdHMoKTtcbiAgICAgICAgZ2V0TG9jYWxUb2RvcygpO1xuICAgICAgICBpZihsb2NhbFN0b3JhZ2UucHJlZmVyc0RhcmtNb2RlID09IFwiZmFsc2VcIikge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibGlnaHQtdGhlbWVcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhcmstbW9kZS1jaGVja2JveFwiKS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2FsU3RvcmFnZS5sZW5ndGggPT0gMCkge1xuICAgICAgICBhZGRIb21lUHJvamVjdCgpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucHJlZmVyc0RhcmtNb2RlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhZGRIb21lUHJvamVjdCgpO1xuICAgIH1cbiAgICBjcmVhdGVUb2RvcyhnZXRUb2RvcygpKTtcbiAgICBiaW5kQ2xpY2tFdmVudHMoKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSW5pdGlhbFdlYnBhZ2UgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGNyZWF0ZUluaXRpYWxXZWJwYWdlIH0gZnJvbSBcIi4vd2VicGFnZVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmNyZWF0ZUluaXRpYWxXZWJwYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9