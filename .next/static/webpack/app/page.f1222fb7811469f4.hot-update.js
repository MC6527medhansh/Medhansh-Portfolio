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

/***/ "(app-pages-browser)/./components/ui/BrainModel.tsx":
/*!**************************************!*\
  !*** ./components/ui/BrainModel.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BrainModel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/events-321b05fb.esm.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"(app-pages-browser)/./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Float.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.core.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction BrainModel() {\n    _s();\n    const brainRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const gltf = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.H)(three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFLoader, \"/assets/models/brain_in_a_jar.glb\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (gltf.scene) {\n            gltf.scene.traverse((child)=>{\n                if (child instanceof three__WEBPACK_IMPORTED_MODULE_4__.Mesh) {\n                    child.material.color = new three__WEBPACK_IMPORTED_MODULE_4__.Color(\"#EA4335\");\n                }\n            });\n        }\n    }, [\n        gltf\n    ]);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.F)((state, delta)=>{\n        if (brainRef.current) {\n            brainRef.current.rotation.y += delta * 0.2;\n            brainRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.Float, {\n        speed: 1.5,\n        rotationIntensity: 1,\n        floatIntensity: 2,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"primitive\", {\n            ref: brainRef,\n            object: gltf.scene,\n            scale: 0.3,\n            position: [\n                0,\n                0.5,\n                0\n            ]\n        }, void 0, false, {\n            fileName: \"/Users/medhanshchoubey/Medhansh-Portfolio/components/ui/BrainModel.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/medhanshchoubey/Medhansh-Portfolio/components/ui/BrainModel.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(BrainModel, \"qWvfFFIHuCYshgC2zLQHhrgS1wk=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.H,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.F\n    ];\n});\n_c = BrainModel;\nvar _c;\n$RefreshReg$(_c, \"BrainModel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvQnJhaW5Nb2RlbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUUwQztBQUNlO0FBQ1U7QUFDekI7QUFDWDtBQUVoQixTQUFTTzs7SUFDdEIsTUFBTUMsV0FBV1IsNkNBQU1BLENBQWM7SUFDckMsTUFBTVMsT0FBT04scURBQVNBLENBQUNDLDZFQUFVQSxFQUFFO0lBRW5DSCxnREFBU0EsQ0FBQztRQUNSLElBQUlRLEtBQUtDLEtBQUssRUFBRTtZQUNkRCxLQUFLQyxLQUFLLENBQUNDLFFBQVEsQ0FBQyxDQUFDQztnQkFDbkIsSUFBSUEsaUJBQWlCTix1Q0FBVSxFQUFFO29CQUMvQk0sTUFBTUUsUUFBUSxDQUFDQyxLQUFLLEdBQUcsSUFBSVQsd0NBQVcsQ0FBQztnQkFDekM7WUFDRjtRQUNGO0lBQ0YsR0FBRztRQUFDRztLQUFLO0lBRVRQLHFEQUFRQSxDQUFDLENBQUNlLE9BQU9DO1FBQ2YsSUFBSVYsU0FBU1csT0FBTyxFQUFFO1lBQ3BCWCxTQUFTVyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsQ0FBQyxJQUFJSCxRQUFRO1lBQ3ZDVixTQUFTVyxPQUFPLENBQUNHLFFBQVEsQ0FBQ0QsQ0FBQyxHQUFHRSxLQUFLQyxHQUFHLENBQUNQLE1BQU1RLEtBQUssQ0FBQ0MsV0FBVyxJQUFJO1FBQ3BFO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3JCLG9EQUFLQTtRQUFDc0IsT0FBTztRQUFLQyxtQkFBbUI7UUFBR0MsZ0JBQWdCO2tCQUN2RCw0RUFBQ0M7WUFDQ0MsS0FBS3ZCO1lBQ0x3QixRQUFRdkIsS0FBS0MsS0FBSztZQUNsQnVCLE9BQU87WUFDUFgsVUFBVTtnQkFBQztnQkFBRztnQkFBSzthQUFFOzs7Ozs7Ozs7OztBQUk3QjtHQS9Cd0JmOztRQUVUSixpREFBU0E7UUFZdEJELGlEQUFRQTs7O0tBZGNLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvQnJhaW5Nb2RlbC50c3g/MjVlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGcmFtZSwgdXNlTG9hZGVyIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJztcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyJztcbmltcG9ydCB7IEZsb2F0IH0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCcmFpbk1vZGVsKCkge1xuICBjb25zdCBicmFpblJlZiA9IHVzZVJlZjxUSFJFRS5Hcm91cD4obnVsbCk7XG4gIGNvbnN0IGdsdGYgPSB1c2VMb2FkZXIoR0xURkxvYWRlciwgJy9hc3NldHMvbW9kZWxzL2JyYWluX2luX2FfamFyLmdsYicpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGdsdGYuc2NlbmUpIHtcbiAgICAgIGdsdGYuc2NlbmUudHJhdmVyc2UoKGNoaWxkKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFRIUkVFLk1lc2gpIHtcbiAgICAgICAgICBjaGlsZC5tYXRlcmlhbC5jb2xvciA9IG5ldyBUSFJFRS5Db2xvcignI0VBNDMzNScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtnbHRmXSk7XG5cbiAgdXNlRnJhbWUoKHN0YXRlLCBkZWx0YSkgPT4ge1xuICAgIGlmIChicmFpblJlZi5jdXJyZW50KSB7XG4gICAgICBicmFpblJlZi5jdXJyZW50LnJvdGF0aW9uLnkgKz0gZGVsdGEgKiAwLjI7XG4gICAgICBicmFpblJlZi5jdXJyZW50LnBvc2l0aW9uLnkgPSBNYXRoLnNpbihzdGF0ZS5jbG9jay5lbGFwc2VkVGltZSkgKiAwLjE7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxGbG9hdCBzcGVlZD17MS41fSByb3RhdGlvbkludGVuc2l0eT17MX0gZmxvYXRJbnRlbnNpdHk9ezJ9PlxuICAgICAgPHByaW1pdGl2ZSBcbiAgICAgICAgcmVmPXticmFpblJlZn0gXG4gICAgICAgIG9iamVjdD17Z2x0Zi5zY2VuZX0gXG4gICAgICAgIHNjYWxlPXswLjN9IFxuICAgICAgICBwb3NpdGlvbj17WzAsIDAuNSwgMF19IFxuICAgICAgLz5cbiAgICA8L0Zsb2F0PlxuICApO1xufSAiXSwibmFtZXMiOlsidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlRnJhbWUiLCJ1c2VMb2FkZXIiLCJHTFRGTG9hZGVyIiwiRmxvYXQiLCJUSFJFRSIsIkJyYWluTW9kZWwiLCJicmFpblJlZiIsImdsdGYiLCJzY2VuZSIsInRyYXZlcnNlIiwiY2hpbGQiLCJNZXNoIiwibWF0ZXJpYWwiLCJjb2xvciIsIkNvbG9yIiwic3RhdGUiLCJkZWx0YSIsImN1cnJlbnQiLCJyb3RhdGlvbiIsInkiLCJwb3NpdGlvbiIsIk1hdGgiLCJzaW4iLCJjbG9jayIsImVsYXBzZWRUaW1lIiwic3BlZWQiLCJyb3RhdGlvbkludGVuc2l0eSIsImZsb2F0SW50ZW5zaXR5IiwicHJpbWl0aXZlIiwicmVmIiwib2JqZWN0Iiwic2NhbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/BrainModel.tsx\n"));

/***/ })

});