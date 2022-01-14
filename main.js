/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeaderElement": () => (/* binding */ createHeaderElement)
/* harmony export */ });
function createHeaderElement() {
    const header = createHTMLElement("header", "header", "header");
    const headerLeft = createHTMLElement("div", "header-left", "header-left");
    const headerLogo = createHTMLElement("h1", "header-logo", "header-logo");
    headerLogo.textContent = "getItDone"
    headerLeft.appendChild(headerLogo);
    const headerCenter = createHTMLElement("div", "header-center", "header-center");
    const addButton = createHTMLElement("button", "header-add-button", "header-add-button");
    addButton.textContent = "+";
    const addButtonText = createHTMLElement("p", "header-button-para", "header-button-para");
    addButtonText.textContent = "new item";
    appendChildHelper(headerCenter, [addButton, addButtonText]);
    const headerRight = createHTMLElement("div", "header-right", "header-right");
    const label = createHTMLElement("label", "switch", "darkModeSwitch");
    const input = createHTMLElement("input");
    input.type = "checkbox";
    input.checked = true;
    const span = createHTMLElement("span", ["slider", "round"]);
    const labelSymbol = createHTMLElement("p", "switch-text", "switch-text");
    labelSymbol.textContent = "💡";
    appendChildHelper(headerRight, [labelSymbol, appendChildHelper(label, [input, span])]);

    appendChildHelper(header, [headerLeft, headerCenter, headerRight]);

    return header;


}

function createMainElement() {
    const main = createHTMLElement("div", "main", "main");
    const mainLeft = createHTMLElement("div", "main-left", "main-left");
    const mainCenter = createHTMLElement("div", "main-center", "main-center");
    const mainRight = createHTMLElement("div", "main-right", "main-right");
}

function createHTMLElement(element, classes, id) {
    const returnElement = document.createElement(element);
    if (typeof classes === "object") {
        classes.forEach(function (classToAdd) {
            returnElement.classList.add(classToAdd);
        });
    } else if (typeof classes === "string") {
        returnElement.classList.add(classes);
    }
    if (typeof id === "string") {
        returnElement.setAttribute("id", id);
    }
    return returnElement;
}

function appendChildHelper(element, children) {
    if(typeof children === "object") {
        children.forEach(child => {
            element.appendChild(child);
        });
    } else {
       element.appendChild(children);
    }
    return element;
}





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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ "./src/webpage.js");


document.getElementById("content").appendChild((0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createHeaderElement)());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztVQzVEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmdEOztBQUVoRCwrQ0FBK0MsNkRBQW1CLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvd2VicGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlSGVhZGVyRWxlbWVudCgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImhlYWRlclwiLCBcImhlYWRlclwiLCBcImhlYWRlclwiKTtcbiAgICBjb25zdCBoZWFkZXJMZWZ0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXItbGVmdFwiLCBcImhlYWRlci1sZWZ0XCIpO1xuICAgIGNvbnN0IGhlYWRlckxvZ28gPSBjcmVhdGVIVE1MRWxlbWVudChcImgxXCIsIFwiaGVhZGVyLWxvZ29cIiwgXCJoZWFkZXItbG9nb1wiKTtcbiAgICBoZWFkZXJMb2dvLnRleHRDb250ZW50ID0gXCJnZXRJdERvbmVcIlxuICAgIGhlYWRlckxlZnQuYXBwZW5kQ2hpbGQoaGVhZGVyTG9nbyk7XG4gICAgY29uc3QgaGVhZGVyQ2VudGVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXItY2VudGVyXCIsIFwiaGVhZGVyLWNlbnRlclwiKTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBjcmVhdGVIVE1MRWxlbWVudChcImJ1dHRvblwiLCBcImhlYWRlci1hZGQtYnV0dG9uXCIsIFwiaGVhZGVyLWFkZC1idXR0b25cIik7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgY29uc3QgYWRkQnV0dG9uVGV4dCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwicFwiLCBcImhlYWRlci1idXR0b24tcGFyYVwiLCBcImhlYWRlci1idXR0b24tcGFyYVwiKTtcbiAgICBhZGRCdXR0b25UZXh0LnRleHRDb250ZW50ID0gXCJuZXcgaXRlbVwiO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGhlYWRlckNlbnRlciwgW2FkZEJ1dHRvbiwgYWRkQnV0dG9uVGV4dF0pO1xuICAgIGNvbnN0IGhlYWRlclJpZ2h0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXItcmlnaHRcIiwgXCJoZWFkZXItcmlnaHRcIik7XG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVIVE1MRWxlbWVudChcImxhYmVsXCIsIFwic3dpdGNoXCIsIFwiZGFya01vZGVTd2l0Y2hcIik7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVIVE1MRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgY29uc3Qgc3BhbiA9IGNyZWF0ZUhUTUxFbGVtZW50KFwic3BhblwiLCBbXCJzbGlkZXJcIiwgXCJyb3VuZFwiXSk7XG4gICAgY29uc3QgbGFiZWxTeW1ib2wgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJzd2l0Y2gtdGV4dFwiLCBcInN3aXRjaC10ZXh0XCIpO1xuICAgIGxhYmVsU3ltYm9sLnRleHRDb250ZW50ID0gXCLwn5KhXCI7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoaGVhZGVyUmlnaHQsIFtsYWJlbFN5bWJvbCwgYXBwZW5kQ2hpbGRIZWxwZXIobGFiZWwsIFtpbnB1dCwgc3Bhbl0pXSk7XG5cbiAgICBhcHBlbmRDaGlsZEhlbHBlcihoZWFkZXIsIFtoZWFkZXJMZWZ0LCBoZWFkZXJDZW50ZXIsIGhlYWRlclJpZ2h0XSk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xuXG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkVsZW1lbnQoKSB7XG4gICAgY29uc3QgbWFpbiA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwibWFpblwiLCBcIm1haW5cIik7XG4gICAgY29uc3QgbWFpbkxlZnQgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcIm1haW4tbGVmdFwiLCBcIm1haW4tbGVmdFwiKTtcbiAgICBjb25zdCBtYWluQ2VudGVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJtYWluLWNlbnRlclwiLCBcIm1haW4tY2VudGVyXCIpO1xuICAgIGNvbnN0IG1haW5SaWdodCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwibWFpbi1yaWdodFwiLCBcIm1haW4tcmlnaHRcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhUTUxFbGVtZW50KGVsZW1lbnQsIGNsYXNzZXMsIGlkKSB7XG4gICAgY29uc3QgcmV0dXJuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgaWYgKHR5cGVvZiBjbGFzc2VzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGNsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NUb0FkZCkge1xuICAgICAgICAgICAgcmV0dXJuRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjbGFzc2VzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybkVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc2VzKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBpZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm5FbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldHVybkVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZENoaWxkSGVscGVyKGVsZW1lbnQsIGNoaWxkcmVuKSB7XG4gICAgaWYodHlwZW9mIGNoaWxkcmVuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZHJlbik7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5cblxuZXhwb3J0IHsgY3JlYXRlSGVhZGVyRWxlbWVudCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlSGVhZGVyRWxlbWVudCB9IGZyb20gXCIuL3dlYnBhZ2VcIjtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlckVsZW1lbnQoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9