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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nfunction MousePosition() {\n    _s();\n    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: 0,\n        y: 0\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleMouseMove = (event)=>{\n            setMousePosition({\n                x: event.clientX,\n                y: event.clientY\n            });\n        };\n        window.addEventListener(\"mousemove\", handleMouseMove);\n        return ()=>{\n            window.removeEventListener(\"mousemove\", handleMouseMove);\n        };\n    }, []);\n    return mousePosition;\n}\n_s(MousePosition, \"xsZ4oXLkOP0KnqTwAbN+/ZVPhrg=\");\n_c = MousePosition;\nfunction hexToRgb(hex) {\n    hex = hex.replace(\"#\", \"\");\n    if (hex.length === 3) {\n        hex = hex.split(\"\").map((char)=>char + char).join(\"\");\n    }\n    const hexInt = parseInt(hex, 16);\n    const red = hexInt >> 16 & 255;\n    const green = hexInt >> 8 & 255;\n    const blue = hexInt & 255;\n    return [\n        red,\n        green,\n        blue\n    ];\n}\nconst Particles = (param)=>{\n    let { className = \"\", quantity = 100, staticity = 50, ease = 50, size = 0.4, refresh = false, color = \"#ffffff\", vx = 0, vy = 0 } = param;\n    _s1();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const canvasContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const circles = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)([]);\n    const mousePosition = MousePosition();\n    const mouse = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({\n        x: 0,\n        y: 0\n    });\n    const canvasSize = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({\n        w: 0,\n        h: 0\n    });\n    const dpr =  true ? window.devicePixelRatio : 0;\n    const rafID = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (canvasRef.current) {\n            context.current = canvasRef.current.getContext(\"2d\");\n        }\n        initCanvas();\n        animate();\n        window.addEventListener(\"resize\", initCanvas);\n        return ()=>{\n            if (rafID.current != null) {\n                window.cancelAnimationFrame(rafID.current);\n            }\n            window.removeEventListener(\"resize\", initCanvas);\n        };\n    }, [\n        color\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        onMouseMove();\n    }, [\n        mousePosition.x,\n        mousePosition.y\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        initCanvas();\n    }, [\n        refresh\n    ]);\n    const initCanvas = ()=>{\n        resizeCanvas();\n        drawParticles();\n    };\n    const onMouseMove = ()=>{\n        if (canvasRef.current) {\n            const rect = canvasRef.current.getBoundingClientRect();\n            const { w, h } = canvasSize.current;\n            const x = mousePosition.x - rect.left - w / 2;\n            const y = mousePosition.y - rect.top - h / 2;\n            const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;\n            if (inside) {\n                mouse.current.x = x;\n                mouse.current.y = y;\n            }\n        }\n    };\n    const resizeCanvas = ()=>{\n        if (canvasContainerRef.current && canvasRef.current && context.current) {\n            circles.current.length = 0;\n            canvasSize.current.w = canvasContainerRef.current.offsetWidth;\n            canvasSize.current.h = canvasContainerRef.current.offsetHeight;\n            canvasRef.current.width = canvasSize.current.w * dpr;\n            canvasRef.current.height = canvasSize.current.h * dpr;\n            canvasRef.current.style.width = \"\".concat(canvasSize.current.w, \"px\");\n            canvasRef.current.style.height = \"\".concat(canvasSize.current.h, \"px\");\n            context.current.scale(dpr, dpr);\n        }\n    };\n    const circleParams = ()=>{\n        const x = Math.floor(Math.random() * canvasSize.current.w);\n        const y = Math.floor(Math.random() * canvasSize.current.h);\n        const translateX = 0;\n        const translateY = 0;\n        const pSize = Math.floor(Math.random() * 2) + size;\n        const alpha = 0;\n        const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));\n        const dx = (Math.random() - 0.5) * 0.1;\n        const dy = (Math.random() - 0.5) * 0.1;\n        const magnetism = 0.1 + Math.random() * 4;\n        return {\n            x,\n            y,\n            translateX,\n            translateY,\n            size: pSize,\n            alpha,\n            targetAlpha,\n            dx,\n            dy,\n            magnetism\n        };\n    };\n    const rgb = hexToRgb(color);\n    const drawCircle = function(circle) {\n        let update = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;\n        if (context.current) {\n            const { x, y, translateX, translateY, size, alpha } = circle;\n            context.current.translate(translateX, translateY);\n            context.current.beginPath();\n            context.current.arc(x, y, size, 0, 2 * Math.PI);\n            context.current.fillStyle = \"rgba(\".concat(rgb.join(\", \"), \", \").concat(alpha, \")\");\n            context.current.fill();\n            context.current.setTransform(dpr, 0, 0, dpr, 0, 0);\n            if (!update) {\n                circles.current.push(circle);\n            }\n        }\n    };\n    const clearContext = ()=>{\n        if (context.current) {\n            context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);\n        }\n    };\n    const drawParticles = ()=>{\n        clearContext();\n        const particleCount = quantity;\n        for(let i = 0; i < particleCount; i++){\n            const circle = circleParams();\n            drawCircle(circle);\n        }\n    };\n    const remapValue = (value, start1, end1, start2, end2)=>{\n        const remapped = (value - start1) * (end2 - start2) / (end1 - start1) + start2;\n        return remapped > 0 ? remapped : 0;\n    };\n    const animate = ()=>{\n        clearContext();\n        circles.current.forEach((circle, i)=>{\n            // Handle the alpha value\n            const edge = [\n                circle.x + circle.translateX - circle.size,\n                canvasSize.current.w - circle.x - circle.translateX - circle.size,\n                circle.y + circle.translateY - circle.size,\n                canvasSize.current.h - circle.y - circle.translateY - circle.size\n            ];\n            const closestEdge = edge.reduce((a, b)=>Math.min(a, b));\n            const remapClosestEdge = parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2));\n            if (remapClosestEdge > 1) {\n                circle.alpha += 0.02;\n                if (circle.alpha > circle.targetAlpha) {\n                    circle.alpha = circle.targetAlpha;\n                }\n            } else {\n                circle.alpha = circle.targetAlpha * remapClosestEdge;\n            }\n            circle.x += circle.dx + vx;\n            circle.y += circle.dy + vy;\n            circle.translateX += (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease;\n            circle.translateY += (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease;\n            drawCircle(circle, true);\n            // circle gets out of the canvas\n            if (circle.x < -circle.size || circle.x > canvasSize.current.w + circle.size || circle.y < -circle.size || circle.y > canvasSize.current.h + circle.size) {\n                // remove the circle from the array\n                circles.current.splice(i, 1);\n                // create a new circle\n                const newCircle = circleParams();\n                drawCircle(newCircle);\n            // update the circle position\n            }\n        });\n        rafID.current = window.requestAnimationFrame(animate);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"pointer-events-none\", className),\n        ref: canvasContainerRef,\n        \"aria-hidden\": \"true\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n            ref: canvasRef,\n            className: \"size-full\"\n        }, void 0, false, {\n            fileName: \"/Users/medhanshchoubey/Medhansh-Portfolio/components/ui/particles.tsx\",\n            lineNumber: 282,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/medhanshchoubey/Medhansh-Portfolio/components/ui/particles.tsx\",\n        lineNumber: 277,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Particles, \"fiLR0vE/3BAcxvYcpSGMrR3uoD8=\");\n_c1 = Particles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Particles);\nvar _c, _c1;\n$RefreshReg$(_c, \"MousePosition\");\n$RefreshReg$(_c1, \"Particles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvcGFydGljbGVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRWlDO0FBQzBCO0FBTzNELFNBQVNLOztJQUNQLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdILCtDQUFRQSxDQUFnQjtRQUNoRUksR0FBRztRQUNIQyxHQUFHO0lBQ0w7SUFFQVAsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxrQkFBa0IsQ0FBQ0M7WUFDdkJKLGlCQUFpQjtnQkFBRUMsR0FBR0csTUFBTUMsT0FBTztnQkFBRUgsR0FBR0UsTUFBTUUsT0FBTztZQUFDO1FBQ3hEO1FBRUFDLE9BQU9DLGdCQUFnQixDQUFDLGFBQWFMO1FBRXJDLE9BQU87WUFDTEksT0FBT0UsbUJBQW1CLENBQUMsYUFBYU47UUFDMUM7SUFDRixHQUFHLEVBQUU7SUFFTCxPQUFPSjtBQUNUO0dBbkJTRDtLQUFBQTtBQWdDVCxTQUFTWSxTQUFTQyxHQUFXO0lBQzNCQSxNQUFNQSxJQUFJQyxPQUFPLENBQUMsS0FBSztJQUV2QixJQUFJRCxJQUFJRSxNQUFNLEtBQUssR0FBRztRQUNwQkYsTUFBTUEsSUFDSEcsS0FBSyxDQUFDLElBQ05DLEdBQUcsQ0FBQyxDQUFDQyxPQUFTQSxPQUFPQSxNQUNyQkMsSUFBSSxDQUFDO0lBQ1Y7SUFFQSxNQUFNQyxTQUFTQyxTQUFTUixLQUFLO0lBQzdCLE1BQU1TLE1BQU0sVUFBVyxLQUFNO0lBQzdCLE1BQU1DLFFBQVEsVUFBVyxJQUFLO0lBQzlCLE1BQU1DLE9BQU9KLFNBQVM7SUFDdEIsT0FBTztRQUFDRTtRQUFLQztRQUFPQztLQUFLO0FBQzNCO0FBRUEsTUFBTUMsWUFBc0M7UUFBQyxFQUMzQ0MsWUFBWSxFQUFFLEVBQ2RDLFdBQVcsR0FBRyxFQUNkQyxZQUFZLEVBQUUsRUFDZEMsT0FBTyxFQUFFLEVBQ1RDLE9BQU8sR0FBRyxFQUNWQyxVQUFVLEtBQUssRUFDZkMsUUFBUSxTQUFTLEVBQ2pCQyxLQUFLLENBQUMs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L0IsTUFBTU8sT0FBTyxDQUFDMUMsQ0FBQyxHQUFJd0IsQ0FBQUEsWUFBWXFELE9BQU9ILFNBQVMsSUFBSUcsT0FBT1gsVUFBVSxJQUNyRXpDO1lBRUZtRCxXQUFXQyxRQUFRO1lBRW5CLGdDQUFnQztZQUNoQyxJQUNFQSxPQUFPOUUsQ0FBQyxHQUFHLENBQUM4RSxPQUFPbkQsSUFBSSxJQUN2Qm1ELE9BQU85RSxDQUFDLEdBQUdxQyxXQUFXTSxPQUFPLENBQUNMLENBQUMsR0FBR3dDLE9BQU9uRCxJQUFJLElBQzdDbUQsT0FBTzdFLENBQUMsR0FBRyxDQUFDNkUsT0FBT25ELElBQUksSUFDdkJtRCxPQUFPN0UsQ0FBQyxHQUFHb0MsV0FBV00sT0FBTyxDQUFDSixDQUFDLEdBQUd1QyxPQUFPbkQsSUFBSSxFQUM3QztnQkFDQSxtQ0FBbUM7Z0JBQ25DUSxRQUFRUSxPQUFPLENBQUNnRSxNQUFNLENBQUNoQixHQUFHO2dCQUMxQixzQkFBc0I7Z0JBQ3RCLE1BQU1pQixZQUFZOUM7Z0JBQ2xCZSxXQUFXK0I7WUFDWCw2QkFBNkI7WUFDL0I7UUFDRjtRQUNBbEUsTUFBTUMsT0FBTyxHQUFHckMsT0FBT3VHLHFCQUFxQixDQUFDL0Q7SUFDL0M7SUFFQSxxQkFDRSw4REFBQ2dFO1FBQ0N2RixXQUFXL0IsOENBQUVBLENBQUMsdUJBQXVCK0I7UUFDckN3RixLQUFLOUU7UUFDTCtFLGVBQVk7a0JBRVosNEVBQUNDO1lBQU9GLEtBQUsvRTtZQUFXVCxXQUFVOzs7Ozs7Ozs7OztBQUd4QztJQWpPTUQ7TUFBQUE7QUFtT04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9wYXJ0aWNsZXMudHN4P2RlN2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBNb3VzZVBvc2l0aW9uIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIE1vdXNlUG9zaXRpb24oKTogTW91c2VQb3NpdGlvbiB7XG4gIGNvbnN0IFttb3VzZVBvc2l0aW9uLCBzZXRNb3VzZVBvc2l0aW9uXSA9IHVzZVN0YXRlPE1vdXNlUG9zaXRpb24+KHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBzZXRNb3VzZVBvc2l0aW9uKHsgeDogZXZlbnQuY2xpZW50WCwgeTogZXZlbnQuY2xpZW50WSB9KTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbW91c2VQb3NpdGlvbjtcbn1cblxuaW50ZXJmYWNlIFBhcnRpY2xlc1Byb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBxdWFudGl0eT86IG51bWJlcjtcbiAgc3RhdGljaXR5PzogbnVtYmVyO1xuICBlYXNlPzogbnVtYmVyO1xuICBzaXplPzogbnVtYmVyO1xuICByZWZyZXNoPzogYm9vbGVhbjtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIHZ4PzogbnVtYmVyO1xuICB2eT86IG51bWJlcjtcbn1cbmZ1bmN0aW9uIGhleFRvUmdiKGhleDogc3RyaW5nKTogbnVtYmVyW10ge1xuICBoZXggPSBoZXgucmVwbGFjZShcIiNcIiwgXCJcIik7XG5cbiAgaWYgKGhleC5sZW5ndGggPT09IDMpIHtcbiAgICBoZXggPSBoZXhcbiAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgLm1hcCgoY2hhcikgPT4gY2hhciArIGNoYXIpXG4gICAgICAuam9pbihcIlwiKTtcbiAgfVxuXG4gIGNvbnN0IGhleEludCA9IHBhcnNlSW50KGhleCwgMTYpO1xuICBjb25zdCByZWQgPSAoaGV4SW50ID4+IDE2KSAmIDI1NTtcbiAgY29uc3QgZ3JlZW4gPSAoaGV4SW50ID4+IDgpICYgMjU1O1xuICBjb25zdCBibHVlID0gaGV4SW50ICYgMjU1O1xuICByZXR1cm4gW3JlZCwgZ3JlZW4sIGJsdWVdO1xufVxuXG5jb25zdCBQYXJ0aWNsZXM6IFJlYWN0LkZDPFBhcnRpY2xlc1Byb3BzPiA9ICh7XG4gIGNsYXNzTmFtZSA9IFwiXCIsXG4gIHF1YW50aXR5ID0gMTAwLFxuICBzdGF0aWNpdHkgPSA1MCxcbiAgZWFzZSA9IDUwLFxuICBzaXplID0gMC40LFxuICByZWZyZXNoID0gZmFsc2UsXG4gIGNvbG9yID0gXCIjZmZmZmZmXCIsXG4gIHZ4ID0gMCxcbiAgdnkgPSAwLFxufSkgPT4ge1xuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBjYW52YXNDb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBjb250ZXh0ID0gdXNlUmVmPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBjaXJjbGVzID0gdXNlUmVmPENpcmNsZVtdPihbXSk7XG4gIGNvbnN0IG1vdXNlUG9zaXRpb24gPSBNb3VzZVBvc2l0aW9uKCk7XG4gIGNvbnN0IG1vdXNlID0gdXNlUmVmPHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT4oeyB4OiAwLCB5OiAwIH0pO1xuICBjb25zdCBjYW52YXNTaXplID0gdXNlUmVmPHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfT4oeyB3OiAwLCBoOiAwIH0pO1xuICBjb25zdCBkcHIgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmRldmljZVBpeGVsUmF0aW8gOiAxO1xuICBjb25zdCByYWZJRCA9IHVzZVJlZjxudW1iZXIgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjYW52YXNSZWYuY3VycmVudCkge1xuICAgICAgY29udGV4dC5jdXJyZW50ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIH1cbiAgICBpbml0Q2FudmFzKCk7XG4gICAgYW5pbWF0ZSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGluaXRDYW52YXMpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChyYWZJRC5jdXJyZW50ICE9IG51bGwpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZklELmN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaW5pdENhbnZhcyk7XG4gICAgfTtcbiAgfSwgW2NvbG9yXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBvbk1vdXNlTW92ZSgpO1xuICB9LCBbbW91c2VQb3NpdGlvbi54LCBtb3VzZVBvc2l0aW9uLnldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGluaXRDYW52YXMoKTtcbiAgfSwgW3JlZnJlc2hdKTtcblxuICBjb25zdCBpbml0Q2FudmFzID0gKCkgPT4ge1xuICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgIGRyYXdQYXJ0aWNsZXMoKTtcbiAgfTtcblxuICBjb25zdCBvbk1vdXNlTW92ZSA9ICgpID0+IHtcbiAgICBpZiAoY2FudmFzUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHJlY3QgPSBjYW52YXNSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHsgdywgaCB9ID0gY2FudmFzU2l6ZS5jdXJyZW50O1xuICAgICAgY29uc3QgeCA9IG1vdXNlUG9zaXRpb24ueCAtIHJlY3QubGVmdCAtIHcgLyAyO1xuICAgICAgY29uc3QgeSA9IG1vdXNlUG9zaXRpb24ueSAtIHJlY3QudG9wIC0gaCAvIDI7XG4gICAgICBjb25zdCBpbnNpZGUgPSB4IDwgdyAvIDIgJiYgeCA+IC13IC8gMiAmJiB5IDwgaCAvIDIgJiYgeSA+IC1oIC8gMjtcbiAgICAgIGlmIChpbnNpZGUpIHtcbiAgICAgICAgbW91c2UuY3VycmVudC54ID0geDtcbiAgICAgICAgbW91c2UuY3VycmVudC55ID0geTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdHlwZSBDaXJjbGUgPSB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICB0cmFuc2xhdGVYOiBudW1iZXI7XG4gICAgdHJhbnNsYXRlWTogbnVtYmVyO1xuICAgIHNpemU6IG51bWJlcjtcbiAgICBhbHBoYTogbnVtYmVyO1xuICAgIHRhcmdldEFscGhhOiBudW1iZXI7XG4gICAgZHg6IG51bWJlcjtcbiAgICBkeTogbnVtYmVyO1xuICAgIG1hZ25ldGlzbTogbnVtYmVyO1xuICB9O1xuXG4gIGNvbnN0IHJlc2l6ZUNhbnZhcyA9ICgpID0+IHtcbiAgICBpZiAoY2FudmFzQ29udGFpbmVyUmVmLmN1cnJlbnQgJiYgY2FudmFzUmVmLmN1cnJlbnQgJiYgY29udGV4dC5jdXJyZW50KSB7XG4gICAgICBjaXJjbGVzLmN1cnJlbnQubGVuZ3RoID0gMDtcbiAgICAgIGNhbnZhc1NpemUuY3VycmVudC53ID0gY2FudmFzQ29udGFpbmVyUmVmLmN1cnJlbnQub2Zmc2V0V2lkdGg7XG4gICAgICBjYW52YXNTaXplLmN1cnJlbnQuaCA9IGNhbnZhc0NvbnRhaW5lclJlZi5jdXJyZW50Lm9mZnNldEhlaWdodDtcbiAgICAgIGNhbnZhc1JlZi5jdXJyZW50LndpZHRoID0gY2FudmFzU2l6ZS5jdXJyZW50LncgKiBkcHI7XG4gICAgICBjYW52YXNSZWYuY3VycmVudC5oZWlnaHQgPSBjYW52YXNTaXplLmN1cnJlbnQuaCAqIGRwcjtcbiAgICAgIGNhbnZhc1JlZi5jdXJyZW50LnN0eWxlLndpZHRoID0gYCR7Y2FudmFzU2l6ZS5jdXJyZW50Lnd9cHhgO1xuICAgICAgY2FudmFzUmVmLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7Y2FudmFzU2l6ZS5jdXJyZW50Lmh9cHhgO1xuICAgICAgY29udGV4dC5jdXJyZW50LnNjYWxlKGRwciwgZHByKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2lyY2xlUGFyYW1zID0gKCk6IENpcmNsZSA9PiB7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNhbnZhc1NpemUuY3VycmVudC53KTtcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2FudmFzU2l6ZS5jdXJyZW50LmgpO1xuICAgIGNvbnN0IHRyYW5zbGF0ZVggPSAwO1xuICAgIGNvbnN0IHRyYW5zbGF0ZVkgPSAwO1xuICAgIGNvbnN0IHBTaXplID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgKyBzaXplO1xuICAgIGNvbnN0IGFscGhhID0gMDtcbiAgICBjb25zdCB0YXJnZXRBbHBoYSA9IHBhcnNlRmxvYXQoKE1hdGgucmFuZG9tKCkgKiAwLjYgKyAwLjEpLnRvRml4ZWQoMSkpO1xuICAgIGNvbnN0IGR4ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4xO1xuICAgIGNvbnN0IGR5ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4xO1xuICAgIGNvbnN0IG1hZ25ldGlzbSA9IDAuMSArIE1hdGgucmFuZG9tKCkgKiA0O1xuICAgIHJldHVybiB7XG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHRyYW5zbGF0ZVgsXG4gICAgICB0cmFuc2xhdGVZLFxuICAgICAgc2l6ZTogcFNpemUsXG4gICAgICBhbHBoYSxcbiAgICAgIHRhcmdldEFscGhhLFxuICAgICAgZHgsXG4gICAgICBkeSxcbiAgICAgIG1hZ25ldGlzbSxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHJnYiA9IGhleFRvUmdiKGNvbG9yKTtcblxuICBjb25zdCBkcmF3Q2lyY2xlID0gKGNpcmNsZTogQ2lyY2xlLCB1cGRhdGUgPSBmYWxzZSkgPT4ge1xuICAgIGlmIChjb250ZXh0LmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHsgeCwgeSwgdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgc2l6ZSwgYWxwaGEgfSA9IGNpcmNsZTtcbiAgICAgIGNvbnRleHQuY3VycmVudC50cmFuc2xhdGUodHJhbnNsYXRlWCwgdHJhbnNsYXRlWSk7XG4gICAgICBjb250ZXh0LmN1cnJlbnQuYmVnaW5QYXRoKCk7XG4gICAgICBjb250ZXh0LmN1cnJlbnQuYXJjKHgsIHksIHNpemUsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgIGNvbnRleHQuY3VycmVudC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYi5qb2luKFwiLCBcIil9LCAke2FscGhhfSlgO1xuICAgICAgY29udGV4dC5jdXJyZW50LmZpbGwoKTtcbiAgICAgIGNvbnRleHQuY3VycmVudC5zZXRUcmFuc2Zvcm0oZHByLCAwLCAwLCBkcHIsIDAsIDApO1xuXG4gICAgICBpZiAoIXVwZGF0ZSkge1xuICAgICAgICBjaXJjbGVzLmN1cnJlbnQucHVzaChjaXJjbGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjbGVhckNvbnRleHQgPSAoKSA9PiB7XG4gICAgaWYgKGNvbnRleHQuY3VycmVudCkge1xuICAgICAgY29udGV4dC5jdXJyZW50LmNsZWFyUmVjdChcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgY2FudmFzU2l6ZS5jdXJyZW50LncsXG4gICAgICAgIGNhbnZhc1NpemUuY3VycmVudC5oLFxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZHJhd1BhcnRpY2xlcyA9ICgpID0+IHtcbiAgICBjbGVhckNvbnRleHQoKTtcbiAgICBjb25zdCBwYXJ0aWNsZUNvdW50ID0gcXVhbnRpdHk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZUNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IGNpcmNsZSA9IGNpcmNsZVBhcmFtcygpO1xuICAgICAgZHJhd0NpcmNsZShjaXJjbGUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW1hcFZhbHVlID0gKFxuICAgIHZhbHVlOiBudW1iZXIsXG4gICAgc3RhcnQxOiBudW1iZXIsXG4gICAgZW5kMTogbnVtYmVyLFxuICAgIHN0YXJ0MjogbnVtYmVyLFxuICAgIGVuZDI6IG51bWJlcixcbiAgKTogbnVtYmVyID0+IHtcbiAgICBjb25zdCByZW1hcHBlZCA9XG4gICAgICAoKHZhbHVlIC0gc3RhcnQxKSAqIChlbmQyIC0gc3RhcnQyKSkgLyAoZW5kMSAtIHN0YXJ0MSkgKyBzdGFydDI7XG4gICAgcmV0dXJuIHJlbWFwcGVkID4gMCA/IHJlbWFwcGVkIDogMDtcbiAgfTtcblxuICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICAgIGNsZWFyQ29udGV4dCgpO1xuICAgIGNpcmNsZXMuY3VycmVudC5mb3JFYWNoKChjaXJjbGU6IENpcmNsZSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAvLyBIYW5kbGUgdGhlIGFscGhhIHZhbHVlXG4gICAgICBjb25zdCBlZGdlID0gW1xuICAgICAgICBjaXJjbGUueCArIGNpcmNsZS50cmFuc2xhdGVYIC0gY2lyY2xlLnNpemUsIC8vIGRpc3RhbmNlIGZyb20gbGVmdCBlZGdlXG4gICAgICAgIGNhbnZhc1NpemUuY3VycmVudC53IC0gY2lyY2xlLnggLSBjaXJjbGUudHJhbnNsYXRlWCAtIGNpcmNsZS5zaXplLCAvLyBkaXN0YW5jZSBmcm9tIHJpZ2h0IGVkZ2VcbiAgICAgICAgY2lyY2xlLnkgKyBjaXJjbGUudHJhbnNsYXRlWSAtIGNpcmNsZS5zaXplLCAvLyBkaXN0YW5jZSBmcm9tIHRvcCBlZGdlXG4gICAgICAgIGNhbnZhc1NpemUuY3VycmVudC5oIC0gY2lyY2xlLnkgLSBjaXJjbGUudHJhbnNsYXRlWSAtIGNpcmNsZS5zaXplLCAvLyBkaXN0YW5jZSBmcm9tIGJvdHRvbSBlZGdlXG4gICAgICBdO1xuICAgICAgY29uc3QgY2xvc2VzdEVkZ2UgPSBlZGdlLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5taW4oYSwgYikpO1xuICAgICAgY29uc3QgcmVtYXBDbG9zZXN0RWRnZSA9IHBhcnNlRmxvYXQoXG4gICAgICAgIHJlbWFwVmFsdWUoY2xvc2VzdEVkZ2UsIDAsIDIwLCAwLCAxKS50b0ZpeGVkKDIpLFxuICAgICAgKTtcbiAgICAgIGlmIChyZW1hcENsb3Nlc3RFZGdlID4gMSkge1xuICAgICAgICBjaXJjbGUuYWxwaGEgKz0gMC4wMjtcbiAgICAgICAgaWYgKGNpcmNsZS5hbHBoYSA+IGNpcmNsZS50YXJnZXRBbHBoYSkge1xuICAgICAgICAgIGNpcmNsZS5hbHBoYSA9IGNpcmNsZS50YXJnZXRBbHBoYTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2lyY2xlLmFscGhhID0gY2lyY2xlLnRhcmdldEFscGhhICogcmVtYXBDbG9zZXN0RWRnZTtcbiAgICAgIH1cbiAgICAgIGNpcmNsZS54ICs9IGNpcmNsZS5keCArIHZ4O1xuICAgICAgY2lyY2xlLnkgKz0gY2lyY2xlLmR5ICsgdnk7XG4gICAgICBjaXJjbGUudHJhbnNsYXRlWCArPVxuICAgICAgICAobW91c2UuY3VycmVudC54IC8gKHN0YXRpY2l0eSAvIGNpcmNsZS5tYWduZXRpc20pIC0gY2lyY2xlLnRyYW5zbGF0ZVgpIC9cbiAgICAgICAgZWFzZTtcbiAgICAgIGNpcmNsZS50cmFuc2xhdGVZICs9XG4gICAgICAgIChtb3VzZS5jdXJyZW50LnkgLyAoc3RhdGljaXR5IC8gY2lyY2xlLm1hZ25ldGlzbSkgLSBjaXJjbGUudHJhbnNsYXRlWSkgL1xuICAgICAgICBlYXNlO1xuXG4gICAgICBkcmF3Q2lyY2xlKGNpcmNsZSwgdHJ1ZSk7XG5cbiAgICAgIC8vIGNpcmNsZSBnZXRzIG91dCBvZiB0aGUgY2FudmFzXG4gICAgICBpZiAoXG4gICAgICAgIGNpcmNsZS54IDwgLWNpcmNsZS5zaXplIHx8XG4gICAgICAgIGNpcmNsZS54ID4gY2FudmFzU2l6ZS5jdXJyZW50LncgKyBjaXJjbGUuc2l6ZSB8fFxuICAgICAgICBjaXJjbGUueSA8IC1jaXJjbGUuc2l6ZSB8fFxuICAgICAgICBjaXJjbGUueSA+IGNhbnZhc1NpemUuY3VycmVudC5oICsgY2lyY2xlLnNpemVcbiAgICAgICkge1xuICAgICAgICAvLyByZW1vdmUgdGhlIGNpcmNsZSBmcm9tIHRoZSBhcnJheVxuICAgICAgICBjaXJjbGVzLmN1cnJlbnQuc3BsaWNlKGksIDEpO1xuICAgICAgICAvLyBjcmVhdGUgYSBuZXcgY2lyY2xlXG4gICAgICAgIGNvbnN0IG5ld0NpcmNsZSA9IGNpcmNsZVBhcmFtcygpO1xuICAgICAgICBkcmF3Q2lyY2xlKG5ld0NpcmNsZSk7XG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgY2lyY2xlIHBvc2l0aW9uXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmFmSUQuY3VycmVudCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NuKFwicG9pbnRlci1ldmVudHMtbm9uZVwiLCBjbGFzc05hbWUpfVxuICAgICAgcmVmPXtjYW52YXNDb250YWluZXJSZWZ9XG4gICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgID5cbiAgICAgIDxjYW52YXMgcmVmPXtjYW52YXNSZWZ9IGNsYXNzTmFtZT1cInNpemUtZnVsbFwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXJ0aWNsZXM7XG4iXSwibmFtZXMiOlsiY24iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTW91c2VQb3NpdGlvbiIsIm1vdXNlUG9zaXRpb24iLCJzZXRNb3VzZVBvc2l0aW9uIiwieCIsInkiLCJoYW5kbGVNb3VzZU1vdmUiLCJldmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoZXhUb1JnYiIsImhleCIsInJlcGxhY2UiLCJsZW5ndGgiLCJzcGxpdCIsIm1hcCIsImNoYXIiLCJqb2luIiwiaGV4SW50IiwicGFyc2VJbnQiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJQYXJ0aWNsZXMiLCJjbGFzc05hbWUiLCJxdWFudGl0eSIsInN0YXRpY2l0eSIsImVhc2UiLCJzaXplIiwicmVmcmVzaCIsImNvbG9yIiwidngiLCJ2eSIsImNhbnZhc1JlZiIsImNhbnZhc0NvbnRhaW5lclJlZiIsImNvbnRleHQiLCJjaXJjbGVzIiwibW91c2UiLCJjYW52YXNTaXplIiwidyIsImgiLCJkcHIiLCJkZXZpY2VQaXhlbFJhdGlvIiwicmFmSUQiLCJjdXJyZW50IiwiZ2V0Q29udGV4dCIsImluaXRDYW52YXMiLCJhbmltYXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJvbk1vdXNlTW92ZSIsInJlc2l6ZUNhbnZhcyIsImRyYXdQYXJ0aWNsZXMiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsInRvcCIsImluc2lkZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsInNjYWxlIiwiY2lyY2xlUGFyYW1zIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJwU2l6ZSIsImFscGhhIiwidGFyZ2V0QWxwaGEiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImR4IiwiZHkiLCJtYWduZXRpc20iLCJyZ2IiLCJkcmF3Q2lyY2xlIiwiY2lyY2xlIiwidXBkYXRlIiwidHJhbnNsYXRlIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwic2V0VHJhbnNmb3JtIiwicHVzaCIsImNsZWFyQ29udGV4dCIsImNsZWFyUmVjdCIsInBhcnRpY2xlQ291bnQiLCJpIiwicmVtYXBWYWx1ZSIsInZhbHVlIiwic3RhcnQxIiwiZW5kMSIsInN0YXJ0MiIsImVuZDIiLCJyZW1hcHBlZCIsImZvckVhY2giLCJlZGdlIiwiY2xvc2VzdEVkZ2UiLCJyZWR1Y2UiLCJhIiwiYiIsIm1pbiIsInJlbWFwQ2xvc2VzdEVkZ2UiLCJzcGxpY2UiLCJuZXdDaXJjbGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkaXYiLCJyZWYiLCJhcmlhLWhpZGRlbiIsImNhbnZhcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/particles.tsx\n"));

/***/ })

});