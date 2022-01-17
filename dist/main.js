/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bindClickEvents.js":
/*!********************************!*\
  !*** ./src/bindClickEvents.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function bindClickEvents() {
    const [newItemButton, projectsButton, importantButton] = findButtons(["header-add-button", "projects-button", "important-button"]);
    const darkModeCheckbox = document.getElementById("dark-mode-checkbox");

    newItemButton.addEventListener("click", () => {
        //show some modal form for adding a new todo
    });

    projectsButton.addEventListener("click", (e) => {
        e.stopPropagation();
        projectsButton.nextElementSibling.classList.toggle("sidebar-hidden");
    });

    importantButton.addEventListener("click", (e) => {
        e.stopPropagation();
        importantButton.nextElementSibling.classList.toggle("sidebar-hidden");
    });

    darkModeCheckbox.addEventListener("click", () => {
        //change color scheme somehow
    })
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
        domButtons.find(function(button) {
            return button.id === buttonIDs;
        });
    }
    return returnButtons;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bindClickEvents);

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



function createHeaderElement() {
    const header = createHTMLElement("header", "header", "header");
    const headerLeft = createHTMLElement("div", "header-left", "header-left");
    const headerLogo = createHTMLElement("h1", "header-logo", "header-logo");
    headerLogo.textContent = "todo-list"
    headerLeft.appendChild(headerLogo);
    const headerCenter = createHTMLElement("div", "header-center", "header-center");
    const addButton = createHTMLElement("button", "header-add-button", "header-add-button");
    addButton.textContent = "+";
    const addButtonText = createHTMLElement("p", "header-button-para", "header-button-para");
    addButtonText.textContent = "new item";
    appendChildHelper(headerCenter, [addButton, addButtonText]);
    const headerRight = createHTMLElement("div", "header-right", "header-right");
    const label = createHTMLElement("label", "switch", "dark-mode-switch");
    const input = createHTMLElement("input", "", "dark-mode-checkbox");
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
    const projectsContainer = createHTMLElement("div", "projects-container", "projects-container");
    const projectsButton = createHTMLElement("button", "projects-button", "projects-button");
    const projectsButtonText = createHTMLElement("p", "projects-text", "projects-text");
    projectsButtonText.innerHTML = "<span id=\"projects-span\">> </span>Projects";
    appendChildHelper(projectsContainer, appendChildHelper(projectsButton, projectsButtonText));
    const projectsFolder = createHTMLElement("div", ["projects-folder", "sidebar-hidden"], "projects-folder");
    projectsFolder.textContent = "Hello lala";

    appendChildHelper(mainLeft, appendChildHelper(projectsContainer, projectsFolder));

    const importantContainer = createHTMLElement("div", "important-container", "important-container");
    const importantButton = createHTMLElement("button", "important-button", "important-button");
    const importantButtonText = createHTMLElement("p", "important-text", "important-text");
    importantButtonText.innerHTML = "<span id=\"projects-span\">> </span> Important";
    appendChildHelper(importantContainer, appendChildHelper(importantButton, importantButtonText));
    const importantFolder = createHTMLElement("div", ["important-folder", "sidebar-hidden"], "important-folder");
    appendChildHelper(mainLeft, appendChildHelper(importantContainer, importantFolder));

    const mainCenter = createHTMLElement("div", "main-center", "main-center");
    const mainRight = createHTMLElement("div", "main-right", "main-right");



    appendChildHelper(main, [mainLeft, mainCenter, mainRight]);

    return main;
}

function createHTMLElement(element, classes, id) {
    const returnElement = document.createElement(element);
    if (typeof classes === "object") {
        classes.forEach(function (classToAdd) {
            returnElement.classList.add(classToAdd);
        });
    } else if (typeof classes === "string" && classes !== "") {
        returnElement.classList.add(classes);
    }
    if (typeof id === "string") {
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

function createInitialWebpage() {
    const contentDiv = document.getElementById("content");
    const header = createHeaderElement();
    const main = createMainElement();
    appendChildHelper(contentDiv, [header, main]);
    (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_0__["default"])();
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


(0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createInitialWebpage)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUMxQ2tCOzs7QUFHaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFlO0FBQ25COzs7Ozs7Ozs7O1VDN0ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOaUQ7O0FBRWpELDhEQUFvQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2JpbmRDbGlja0V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvd2VicGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYmluZENsaWNrRXZlbnRzKCkge1xuICAgIGNvbnN0IFtuZXdJdGVtQnV0dG9uLCBwcm9qZWN0c0J1dHRvbiwgaW1wb3J0YW50QnV0dG9uXSA9IGZpbmRCdXR0b25zKFtcImhlYWRlci1hZGQtYnV0dG9uXCIsIFwicHJvamVjdHMtYnV0dG9uXCIsIFwiaW1wb3J0YW50LWJ1dHRvblwiXSk7XG4gICAgY29uc3QgZGFya01vZGVDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFyay1tb2RlLWNoZWNrYm94XCIpO1xuXG4gICAgbmV3SXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAvL3Nob3cgc29tZSBtb2RhbCBmb3JtIGZvciBhZGRpbmcgYSBuZXcgdG9kb1xuICAgIH0pO1xuXG4gICAgcHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHByb2plY3RzQnV0dG9uLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwic2lkZWJhci1oaWRkZW5cIik7XG4gICAgfSk7XG5cbiAgICBpbXBvcnRhbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGltcG9ydGFudEJ1dHRvbi5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcInNpZGViYXItaGlkZGVuXCIpO1xuICAgIH0pO1xuXG4gICAgZGFya01vZGVDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAvL2NoYW5nZSBjb2xvciBzY2hlbWUgc29tZWhvd1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGZpbmRCdXR0b25zKGJ1dHRvbklEcykge1xuICAgIGNvbnN0IGRvbUJ1dHRvbnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKV07XG4gICAgY29uc3QgcmV0dXJuQnV0dG9ucyA9IFtdO1xuICAgIGlmICh0eXBlb2YgYnV0dG9uSURzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGJ1dHRvbklEcy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgIGRvbUJ1dHRvbnMuZmluZChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuQnV0dG9ucy5wdXNoKGJ1dHRvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbUJ1dHRvbnMuZmluZChmdW5jdGlvbihidXR0b24pIHtcbiAgICAgICAgICAgIHJldHVybiBidXR0b24uaWQgPT09IGJ1dHRvbklEcztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5CdXR0b25zO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiaW5kQ2xpY2tFdmVudHM7IiwiaW1wb3J0IGJpbmRDbGlja0V2ZW50cyBmcm9tIFwiLi9iaW5kQ2xpY2tFdmVudHNcIjtcblxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJFbGVtZW50KCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaGVhZGVyXCIsIFwiaGVhZGVyXCIsIFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGhlYWRlckxlZnQgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcImhlYWRlci1sZWZ0XCIsIFwiaGVhZGVyLWxlZnRcIik7XG4gICAgY29uc3QgaGVhZGVyTG9nbyA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaDFcIiwgXCJoZWFkZXItbG9nb1wiLCBcImhlYWRlci1sb2dvXCIpO1xuICAgIGhlYWRlckxvZ28udGV4dENvbnRlbnQgPSBcInRvZG8tbGlzdFwiXG4gICAgaGVhZGVyTGVmdC5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKTtcbiAgICBjb25zdCBoZWFkZXJDZW50ZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcImhlYWRlci1jZW50ZXJcIiwgXCJoZWFkZXItY2VudGVyXCIpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiYnV0dG9uXCIsIFwiaGVhZGVyLWFkZC1idXR0b25cIiwgXCJoZWFkZXItYWRkLWJ1dHRvblwiKTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICBjb25zdCBhZGRCdXR0b25UZXh0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwiaGVhZGVyLWJ1dHRvbi1wYXJhXCIsIFwiaGVhZGVyLWJ1dHRvbi1wYXJhXCIpO1xuICAgIGFkZEJ1dHRvblRleHQudGV4dENvbnRlbnQgPSBcIm5ldyBpdGVtXCI7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoaGVhZGVyQ2VudGVyLCBbYWRkQnV0dG9uLCBhZGRCdXR0b25UZXh0XSk7XG4gICAgY29uc3QgaGVhZGVyUmlnaHQgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcImhlYWRlci1yaWdodFwiLCBcImhlYWRlci1yaWdodFwiKTtcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwibGFiZWxcIiwgXCJzd2l0Y2hcIiwgXCJkYXJrLW1vZGUtc3dpdGNoXCIpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbnB1dFwiLCBcIlwiLCBcImRhcmstbW9kZS1jaGVja2JveFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVIVE1MRWxlbWVudChcInNwYW5cIiwgW1wic2xpZGVyXCIsIFwicm91bmRcIl0pO1xuICAgIGNvbnN0IGxhYmVsU3ltYm9sID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwic3dpdGNoLXRleHRcIiwgXCJzd2l0Y2gtdGV4dFwiKTtcbiAgICBsYWJlbFN5bWJvbC50ZXh0Q29udGVudCA9IFwi8J+SoVwiO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGhlYWRlclJpZ2h0LCBbbGFiZWxTeW1ib2wsIGFwcGVuZENoaWxkSGVscGVyKGxhYmVsLCBbaW5wdXQsIHNwYW5dKV0pO1xuXG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoaGVhZGVyLCBbaGVhZGVyTGVmdCwgaGVhZGVyQ2VudGVyLCBoZWFkZXJSaWdodF0pO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkVsZW1lbnQoKSB7XG4gICAgY29uc3QgbWFpbiA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwibWFpblwiLCBcIm1haW5cIik7XG4gICAgY29uc3QgbWFpbkxlZnQgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcIm1haW4tbGVmdFwiLCBcIm1haW4tbGVmdFwiKTtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdHMtY29udGFpbmVyXCIsIFwicHJvamVjdHMtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHByb2plY3RzQnV0dG9uID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJidXR0b25cIiwgXCJwcm9qZWN0cy1idXR0b25cIiwgXCJwcm9qZWN0cy1idXR0b25cIik7XG4gICAgY29uc3QgcHJvamVjdHNCdXR0b25UZXh0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwicHJvamVjdHMtdGV4dFwiLCBcInByb2plY3RzLXRleHRcIik7XG4gICAgcHJvamVjdHNCdXR0b25UZXh0LmlubmVySFRNTCA9IFwiPHNwYW4gaWQ9XFxcInByb2plY3RzLXNwYW5cXFwiPj4gPC9zcGFuPlByb2plY3RzXCI7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIocHJvamVjdHNDb250YWluZXIsIGFwcGVuZENoaWxkSGVscGVyKHByb2plY3RzQnV0dG9uLCBwcm9qZWN0c0J1dHRvblRleHQpKTtcbiAgICBjb25zdCBwcm9qZWN0c0ZvbGRlciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFtcInByb2plY3RzLWZvbGRlclwiLCBcInNpZGViYXItaGlkZGVuXCJdLCBcInByb2plY3RzLWZvbGRlclwiKTtcbiAgICBwcm9qZWN0c0ZvbGRlci50ZXh0Q29udGVudCA9IFwiSGVsbG8gbGFsYVwiO1xuXG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIobWFpbkxlZnQsIGFwcGVuZENoaWxkSGVscGVyKHByb2plY3RzQ29udGFpbmVyLCBwcm9qZWN0c0ZvbGRlcikpO1xuXG4gICAgY29uc3QgaW1wb3J0YW50Q29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJpbXBvcnRhbnQtY29udGFpbmVyXCIsIFwiaW1wb3J0YW50LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBpbXBvcnRhbnRCdXR0b24gPSBjcmVhdGVIVE1MRWxlbWVudChcImJ1dHRvblwiLCBcImltcG9ydGFudC1idXR0b25cIiwgXCJpbXBvcnRhbnQtYnV0dG9uXCIpO1xuICAgIGNvbnN0IGltcG9ydGFudEJ1dHRvblRleHQgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJpbXBvcnRhbnQtdGV4dFwiLCBcImltcG9ydGFudC10ZXh0XCIpO1xuICAgIGltcG9ydGFudEJ1dHRvblRleHQuaW5uZXJIVE1MID0gXCI8c3BhbiBpZD1cXFwicHJvamVjdHMtc3BhblxcXCI+PiA8L3NwYW4+IEltcG9ydGFudFwiO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGltcG9ydGFudENvbnRhaW5lciwgYXBwZW5kQ2hpbGRIZWxwZXIoaW1wb3J0YW50QnV0dG9uLCBpbXBvcnRhbnRCdXR0b25UZXh0KSk7XG4gICAgY29uc3QgaW1wb3J0YW50Rm9sZGVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgW1wiaW1wb3J0YW50LWZvbGRlclwiLCBcInNpZGViYXItaGlkZGVuXCJdLCBcImltcG9ydGFudC1mb2xkZXJcIik7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIobWFpbkxlZnQsIGFwcGVuZENoaWxkSGVscGVyKGltcG9ydGFudENvbnRhaW5lciwgaW1wb3J0YW50Rm9sZGVyKSk7XG5cbiAgICBjb25zdCBtYWluQ2VudGVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJtYWluLWNlbnRlclwiLCBcIm1haW4tY2VudGVyXCIpO1xuICAgIGNvbnN0IG1haW5SaWdodCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwibWFpbi1yaWdodFwiLCBcIm1haW4tcmlnaHRcIik7XG5cblxuXG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIobWFpbiwgW21haW5MZWZ0LCBtYWluQ2VudGVyLCBtYWluUmlnaHRdKTtcblxuICAgIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIVE1MRWxlbWVudChlbGVtZW50LCBjbGFzc2VzLCBpZCkge1xuICAgIGNvbnN0IHJldHVybkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGlmICh0eXBlb2YgY2xhc3NlcyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBjbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzVG9BZGQpIHtcbiAgICAgICAgICAgIHJldHVybkVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc1RvQWRkKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY2xhc3NlcyA9PT0gXCJzdHJpbmdcIiAmJiBjbGFzc2VzICE9PSBcIlwiKSB7XG4gICAgICAgIHJldHVybkVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc2VzKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBpZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm5FbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldHVybkVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZENoaWxkSGVscGVyKGVsZW1lbnQsIGNoaWxkcmVuKSB7XG4gICAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZihjaGlsZHJlbikuY29uc3RydWN0b3IgPT09IEFycmF5ICYmIHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkcmVuKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxXZWJwYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyRWxlbWVudCgpO1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVNYWluRWxlbWVudCgpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRlbnREaXYsIFtoZWFkZXIsIG1haW5dKTtcbiAgICBiaW5kQ2xpY2tFdmVudHMoKTtcbn1cblxuXG5cbmV4cG9ydCB7IGNyZWF0ZUluaXRpYWxXZWJwYWdlIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVJbml0aWFsV2VicGFnZSB9IGZyb20gXCIuL3dlYnBhZ2VcIjtcblxuY3JlYXRlSW5pdGlhbFdlYnBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=