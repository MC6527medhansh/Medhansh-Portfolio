"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/ui/particles.tsx":
/*!*************************************!*\
  !*** ./components/ui/particles.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Particles; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction MousePosition() {\n    _s();\n    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleMouseMove = (event)=>{\n            setMousePosition({\n                x: event.clientX,\n                y: event.clientY\n            });\n        };\n        window.addEventListener(\"mousemove\", handleMouseMove);\n        return ()=>{\n            window.removeEventListener(\"mousemove\", handleMouseMove);\n        };\n    }, []);\n    return mousePosition;\n}\n_s(MousePosition, \"xsZ4oXLkOP0KnqTwAbN+/ZVPhrg=\");\n_c = MousePosition;\nfunction Particles(param) {\n    let { className = \"\", quantity = 1500, ease = 0.01, color = \"#ffffff\", refresh = false } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(className, \" pointer-events-none\"),\n        style: {\n            position: \"absolute\",\n            top: 0,\n            left: 0,\n            width: \"100%\",\n            height: \"100%\",\n            overflow: \"hidden\",\n            zIndex: 0,\n            mixBlendMode: \"screen\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/medhanshchoubey/Medhansh-Portfolio/components/ui/particles.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Particles;\nvar _c, _c1;\n$RefreshReg$(_c, \"MousePosition\");\n$RefreshReg$(_c1, \"Particles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvcGFydGljbGVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHMkQ7QUFPM0QsU0FBU0c7O0lBQ1AsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR0gsK0NBQVFBLENBQWdCO1FBQ2hFSSxHQUFHO1FBQ0hDLEdBQUc7SUFDTDtJQUVBTixnREFBU0EsQ0FBQztRQUNSLE1BQU1PLGtCQUFrQixDQUFDQztZQUN2QkosaUJBQWlCO2dCQUFFQyxHQUFHRyxNQUFNQyxPQUFPO2dCQUFFSCxHQUFHRSxNQUFNRSxPQUFPO1lBQUM7UUFDeEQ7UUFFQUMsT0FBT0MsZ0JBQWdCLENBQUMsYUFBYUw7UUFFckMsT0FBTztZQUNMSSxPQUFPRSxtQkFBbUIsQ0FBQyxhQUFhTjtRQUMxQztJQUNGLEdBQUcsRUFBRTtJQUVMLE9BQU9KO0FBQ1Q7R0FuQlNEO0tBQUFBO0FBNkJNLFNBQVNZLFVBQVUsS0FNakI7UUFOaUIsRUFDaENDLFlBQVksRUFBRSxFQUNkQyxXQUFXLElBQUksRUFDZkMsT0FBTyxJQUFJLEVBQ1hDLFFBQVEsU0FBUyxFQUNqQkMsVUFBVSxLQUFLLEVBQ0EsR0FOaUI7SUFPaEMscUJBQ0UsOERBQUNDO1FBQ0NMLFdBQVcsR0FBYSxPQUFWQSxXQUFVO1FBQ3hCTSxPQUFPO1lBQ0xDLFVBQVU7WUFDVkMsS0FBSztZQUNMQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxVQUFVO1lBQ1ZDLFFBQVE7WUFDUkMsY0FBYztRQUNoQjs7Ozs7O0FBS047TUF4QndCZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL3BhcnRpY2xlcy50c3g/ZGU3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIE1vdXNlUG9zaXRpb24ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gTW91c2VQb3NpdGlvbigpOiBNb3VzZVBvc2l0aW9uIHtcbiAgY29uc3QgW21vdXNlUG9zaXRpb24sIHNldE1vdXNlUG9zaXRpb25dID0gdXNlU3RhdGU8TW91c2VQb3NpdGlvbj4oe1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIHNldE1vdXNlUG9zaXRpb24oeyB4OiBldmVudC5jbGllbnRYLCB5OiBldmVudC5jbGllbnRZIH0pO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBtb3VzZVBvc2l0aW9uO1xufVxuXG5pbnRlcmZhY2UgUGFydGljbGVzUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHF1YW50aXR5PzogbnVtYmVyO1xuICBlYXNlPzogbnVtYmVyO1xuICBjb2xvcj86IHN0cmluZztcbiAgcmVmcmVzaD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhcnRpY2xlcyh7XG4gIGNsYXNzTmFtZSA9IFwiXCIsXG4gIHF1YW50aXR5ID0gMTUwMCxcbiAgZWFzZSA9IDAuMDEsXG4gIGNvbG9yID0gXCIjZmZmZmZmXCIsXG4gIHJlZnJlc2ggPSBmYWxzZSxcbn06IFBhcnRpY2xlc1Byb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBcbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBwb2ludGVyLWV2ZW50cy1ub25lYH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHpJbmRleDogMCxcbiAgICAgICAgbWl4QmxlbmRNb2RlOiAnc2NyZWVuJ1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7LyogUGFydGljbGUgcmVuZGVyaW5nIGxvZ2ljICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNb3VzZVBvc2l0aW9uIiwibW91c2VQb3NpdGlvbiIsInNldE1vdXNlUG9zaXRpb24iLCJ4IiwieSIsImhhbmRsZU1vdXNlTW92ZSIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlBhcnRpY2xlcyIsImNsYXNzTmFtZSIsInF1YW50aXR5IiwiZWFzZSIsImNvbG9yIiwicmVmcmVzaCIsImRpdiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsInpJbmRleCIsIm1peEJsZW5kTW9kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/particles.tsx\n"));

/***/ })

});