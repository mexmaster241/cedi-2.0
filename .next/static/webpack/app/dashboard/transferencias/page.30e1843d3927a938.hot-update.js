"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/transferencias/page",{

/***/ "(app-pages-browser)/./src/components/transferencias/DateRange.tsx":
/*!*****************************************************!*\
  !*** ./src/components/transferencias/DateRange.tsx ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DateTimeRange: () => (/* binding */ DateTimeRange)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_addDays_format_date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=addDays,format!=!date-fns */ \"(app-pages-browser)/./node_modules/date-fns/addDays.mjs\");\n/* harmony import */ var _barrel_optimize_names_addDays_format_date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=addDays,format!=!date-fns */ \"(app-pages-browser)/./node_modules/date-fns/format.mjs\");\n/* harmony import */ var _barrel_optimize_names_Calendar_Clock_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Calendar,Clock!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/calendar.js\");\n/* harmony import */ var _barrel_optimize_names_Calendar_Clock_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Calendar,Clock!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/clock.js\");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/locale */ \"(app-pages-browser)/./node_modules/date-fns/locale/es.mjs\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/calendar */ \"(app-pages-browser)/./src/components/ui/calendar.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/popover */ \"(app-pages-browser)/./src/components/ui/popover.tsx\");\n/* __next_internal_client_entry_do_not_use__ DateTimeRange auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction DateTimeRange(param) {\n    let { className, onRangeChange } = param;\n    _s();\n    const [date, setDate] = react__WEBPACK_IMPORTED_MODULE_1__.useState({\n        from: new Date(),\n        to: (0,_barrel_optimize_names_addDays_format_date_fns__WEBPACK_IMPORTED_MODULE_7__.addDays)(new Date(), 7)\n    });\n    const [timeFrom, setTimeFrom] = react__WEBPACK_IMPORTED_MODULE_1__.useState(\"00:00\");\n    const [timeTo, setTimeTo] = react__WEBPACK_IMPORTED_MODULE_1__.useState(\"23:59\");\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        onRangeChange === null || onRangeChange === void 0 ? void 0 : onRangeChange({\n            dates: date !== null && date !== void 0 ? date : {\n                from: undefined,\n                to: undefined\n            },\n            times: {\n                from: timeFrom,\n                to: timeTo\n            }\n        });\n    }, [\n        date,\n        timeFrom,\n        timeTo,\n        onRangeChange\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"font-clash-display flex flex-col gap-2\", className),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_6__.Popover, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_6__.PopoverTrigger, {\n                            asChild: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                id: \"date\",\n                                variant: \"outline\",\n                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"w-[300px] justify-start text-left font-clash-display\", !date && \"text-muted-foreground font-clash-display\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Calendar_Clock_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        className: \"mr-2 h-4 w-4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/DateRange.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this),\n                                    (date === null || date === void 0 ? void 0 : date.from) ? date.to ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            (0,_barrel_optimize_names_addDays_format_date_fns__WEBPACK_IMPORTED_MODULE_9__.format)(date.from, \"dd MMM yyyy\", {\n                                                locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_10__.es\n                                            }),\n                                            \" -\",\n                                            \" \",\n                                            (0,_barrel_optimize_names_addDays_format_date_fns__WEBPACK_IMPORTED_MODULE_9__.format)(date.to, \"dd MMM yyyy\", {\n                                                locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_10__.es\n                                            })\n                                        ]\n                                    }, void 0, true) : (0,_barrel_optimize_names_addDays_format_date_fns__WEBPACK_IMPORTED_MODULE_9__.format)(date.from, \"dd MMM yyyy\", {\n                                        locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_10__.es\n                                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Seleccionar fechas\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/DateRange.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/DateRange.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/DateRange.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_6__.PopoverContent, {\n                            className: \"w-auto p-0\",\n                            align: \"start\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_calendar__WEBPACK_IMPORTED_MODULE_4__.Calendar, {\n                                initialFocus: true,\n                                className: \"font-clash-display\",\n                                mode: \"range\",\n                                defaultMonth: date === null || date === void 0 ? void 0 : date.from,\n                                selected: date,\n                                onSelect: setDate,\n                                numberOfMonths: 2,\n                                locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_10__.es\n                            }, void 0, false, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/DateRange.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/DateRange.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/DateRange.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/DateRange.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-2 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Calendar_Clock_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        className: \"h-4 w-4 text-muted-foreground\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/DateRange.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        type: \"time\",\n                        value: timeFrom,\n                        onChange: (e)=>setTimeFrom(e.target.value),\n                        className: \"w-[140px]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/DateRange.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-muted-foreground\",\n                        children: \"-\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/DateRange.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        type: \"time\",\n                        value: timeTo,\n                        onChange: (e)=>setTimeTo(e.target.value),\n                        className: \"w-[140px]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/DateRange.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/DateRange.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/DateRange.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(DateTimeRange, \"7kRMueWL07u61kML62bxvrdr41k=\");\n_c = DateTimeRange;\nvar _c;\n$RefreshReg$(_c, \"DateTimeRange\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RyYW5zZmVyZW5jaWFzL0RhdGVSYW5nZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU4QjtBQUNZO0FBQ29CO0FBRTFCO0FBRUo7QUFDZTtBQUNJO0FBQ047QUFLYjtBQU16QixTQUFTYSxjQUFjLEtBR1Q7UUFIUyxFQUM1QkMsU0FBUyxFQUNUQyxhQUFhLEVBQ00sR0FIUzs7SUFJNUIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdqQiwyQ0FBYyxDQUF3QjtRQUM1RG1CLE1BQU0sSUFBSUM7UUFDVkMsSUFBSXBCLHVGQUFPQSxDQUFDLElBQUltQixRQUFRO0lBQzFCO0lBQ0EsTUFBTSxDQUFDRSxVQUFVQyxZQUFZLEdBQUd2QiwyQ0FBYyxDQUFDO0lBQy9DLE1BQU0sQ0FBQ3dCLFFBQVFDLFVBQVUsR0FBR3pCLDJDQUFjLENBQUM7SUFFM0NBLDRDQUFlLENBQUM7UUFDZGUsMEJBQUFBLG9DQUFBQSxjQUFnQjtZQUNkWSxPQUFPWCxpQkFBQUEsa0JBQUFBLE9BQVE7Z0JBQUVHLE1BQU1TO2dCQUFXUCxJQUFJTztZQUFVO1lBQ2hEQyxPQUFPO2dCQUFFVixNQUFNRztnQkFBVUQsSUFBSUc7WUFBTztRQUN0QztJQUNGLEdBQUc7UUFBQ1I7UUFBTU07UUFBVUU7UUFBUVQ7S0FBYztJQUUxQyxxQkFDRSw4REFBQ2U7UUFBSWhCLFdBQVdQLDhDQUFFQSxDQUFDLDBDQUEwQ087OzBCQUMzRCw4REFBQ2dCO2dCQUFJaEIsV0FBVTswQkFDYiw0RUFBQ0osMkRBQU9BOztzQ0FDTiw4REFBQ0Usa0VBQWNBOzRCQUFDbUIsT0FBTztzQ0FDckIsNEVBQUN2Qix5REFBTUE7Z0NBQ0x3QixJQUFHO2dDQUNIQyxTQUFTO2dDQUNUbkIsV0FBV1AsOENBQUVBLENBQ1gsd0RBQ0EsQ0FBQ1MsUUFBUTs7a0RBR1gsOERBQUNaLDBGQUFZQTt3Q0FBQ1UsV0FBVTs7Ozs7O29DQUN2QkUsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNRyxJQUFJLElBQ1RILEtBQUtLLEVBQUUsaUJBQ0w7OzRDQUNHbkIsc0ZBQU1BLENBQUNjLEtBQUtHLElBQUksRUFBRSxlQUFlO2dEQUFFZSxRQUFRNUIsZ0RBQUVBOzRDQUFDOzRDQUFHOzRDQUFHOzRDQUNwREosc0ZBQU1BLENBQUNjLEtBQUtLLEVBQUUsRUFBRSxlQUFlO2dEQUFFYSxRQUFRNUIsZ0RBQUVBOzRDQUFDOzt1REFHL0NKLHNGQUFNQSxDQUFDYyxLQUFLRyxJQUFJLEVBQUUsZUFBZTt3Q0FBRWUsUUFBUTVCLGdEQUFFQTtvQ0FBQyxtQkFHaEQsOERBQUM2QjtrREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSVosOERBQUN4QixrRUFBY0E7NEJBQUNHLFdBQVU7NEJBQWFzQixPQUFNO3NDQUMzQyw0RUFBQ2pDLDZEQUFRQTtnQ0FDUGtDLFlBQVk7Z0NBQ1p2QixXQUFVO2dDQUNWd0IsTUFBSztnQ0FDTEMsWUFBWSxFQUFFdkIsaUJBQUFBLDJCQUFBQSxLQUFNRyxJQUFJO2dDQUN4QnFCLFVBQVV4QjtnQ0FDVnlCLFVBQVV4QjtnQ0FDVnlCLGdCQUFnQjtnQ0FDaEJSLFFBQVE1QixnREFBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTWxCLDhEQUFDd0I7Z0JBQUloQixXQUFVOztrQ0FDYiw4REFBQ1QsMkZBQUtBO3dCQUFDUyxXQUFVOzs7Ozs7a0NBQ2pCLDhEQUFDTCx1REFBS0E7d0JBQ0prQyxNQUFLO3dCQUNMQyxPQUFPdEI7d0JBQ1B1QixVQUFVLENBQUNDLElBQU12QixZQUFZdUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dCQUMzQzlCLFdBQVU7Ozs7OztrQ0FFWiw4REFBQ3FCO3dCQUFLckIsV0FBVTtrQ0FBd0I7Ozs7OztrQ0FDeEMsOERBQUNMLHVEQUFLQTt3QkFDSmtDLE1BQUs7d0JBQ0xDLE9BQU9wQjt3QkFDUHFCLFVBQVUsQ0FBQ0MsSUFBTXJCLFVBQVVxQixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQ3pDOUIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBL0VnQkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdHJhbnNmZXJlbmNpYXMvRGF0ZVJhbmdlLnRzeD8yNzBlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBhZGREYXlzLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIlxuaW1wb3J0IHsgQ2FsZW5kYXIgYXMgQ2FsZW5kYXJJY29uLCBDbG9jayB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIlxuaW1wb3J0IHsgRGF0ZVJhbmdlIH0gZnJvbSBcInJlYWN0LWRheS1waWNrZXJcIlxuaW1wb3J0IHsgZXMgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCJcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIlxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIlxuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhbGVuZGFyXCJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiXG5pbXBvcnQge1xuICBQb3BvdmVyLFxuICBQb3BvdmVyQ29udGVudCxcbiAgUG9wb3ZlclRyaWdnZXIsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvcG9wb3ZlclwiXG5cbmludGVyZmFjZSBEYXRlVGltZVJhbmdlUHJvcHMgZXh0ZW5kcyBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICBvblJhbmdlQ2hhbmdlPzogKHJhbmdlOiB7IGRhdGVzOiBEYXRlUmFuZ2U7IHRpbWVzOiB7IGZyb206IHN0cmluZzsgdG86IHN0cmluZyB9IH0pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEYXRlVGltZVJhbmdlKHtcbiAgY2xhc3NOYW1lLFxuICBvblJhbmdlQ2hhbmdlLFxufTogRGF0ZVRpbWVSYW5nZVByb3BzKSB7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IFJlYWN0LnVzZVN0YXRlPERhdGVSYW5nZSB8IHVuZGVmaW5lZD4oe1xuICAgIGZyb206IG5ldyBEYXRlKCksXG4gICAgdG86IGFkZERheXMobmV3IERhdGUoKSwgNyksXG4gIH0pXG4gIGNvbnN0IFt0aW1lRnJvbSwgc2V0VGltZUZyb21dID0gUmVhY3QudXNlU3RhdGUoXCIwMDowMFwiKVxuICBjb25zdCBbdGltZVRvLCBzZXRUaW1lVG9dID0gUmVhY3QudXNlU3RhdGUoXCIyMzo1OVwiKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgb25SYW5nZUNoYW5nZT8uKHtcbiAgICAgIGRhdGVzOiBkYXRlID8/IHsgZnJvbTogdW5kZWZpbmVkLCB0bzogdW5kZWZpbmVkIH0sXG4gICAgICB0aW1lczogeyBmcm9tOiB0aW1lRnJvbSwgdG86IHRpbWVUbyB9XG4gICAgfSlcbiAgfSwgW2RhdGUsIHRpbWVGcm9tLCB0aW1lVG8sIG9uUmFuZ2VDaGFuZ2VdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NuKFwiZm9udC1jbGFzaC1kaXNwbGF5IGZsZXggZmxleC1jb2wgZ2FwLTJcIiwgY2xhc3NOYW1lKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgPFBvcG92ZXI+XG4gICAgICAgICAgPFBvcG92ZXJUcmlnZ2VyIGFzQ2hpbGQ+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGlkPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9e1wib3V0bGluZVwifVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgICAgIFwidy1bMzAwcHhdIGp1c3RpZnktc3RhcnQgdGV4dC1sZWZ0IGZvbnQtY2xhc2gtZGlzcGxheVwiLFxuICAgICAgICAgICAgICAgICFkYXRlICYmIFwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvbnQtY2xhc2gtZGlzcGxheVwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDYWxlbmRhckljb24gY2xhc3NOYW1lPVwibXItMiBoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAge2RhdGU/LmZyb20gPyAoXG4gICAgICAgICAgICAgICAgZGF0ZS50byA/IChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtYXQoZGF0ZS5mcm9tLCBcImRkIE1NTSB5eXl5XCIsIHsgbG9jYWxlOiBlcyB9KX0gLXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdChkYXRlLnRvLCBcImRkIE1NTSB5eXl5XCIsIHsgbG9jYWxlOiBlcyB9KX1cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICBmb3JtYXQoZGF0ZS5mcm9tLCBcImRkIE1NTSB5eXl5XCIsIHsgbG9jYWxlOiBlcyB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8c3Bhbj5TZWxlY2Npb25hciBmZWNoYXM8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L1BvcG92ZXJUcmlnZ2VyPlxuICAgICAgICAgIDxQb3BvdmVyQ29udGVudCBjbGFzc05hbWU9XCJ3LWF1dG8gcC0wXCIgYWxpZ249XCJzdGFydFwiPlxuICAgICAgICAgICAgPENhbGVuZGFyXG4gICAgICAgICAgICAgIGluaXRpYWxGb2N1c1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWNsYXNoLWRpc3BsYXlcIlxuICAgICAgICAgICAgICBtb2RlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICBkZWZhdWx0TW9udGg9e2RhdGU/LmZyb219XG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtkYXRlfVxuICAgICAgICAgICAgICBvblNlbGVjdD17c2V0RGF0ZX1cbiAgICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9ezJ9XG4gICAgICAgICAgICAgIGxvY2FsZT17ZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvUG9wb3ZlckNvbnRlbnQ+XG4gICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxDbG9jayBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0aW1lXCJcbiAgICAgICAgICB2YWx1ZT17dGltZUZyb219XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaW1lRnJvbShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1bMTQwcHhdXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+LTwvc3Bhbj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRpbWVcIlxuICAgICAgICAgIHZhbHVlPXt0aW1lVG99XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaW1lVG8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctWzE0MHB4XVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiYWRkRGF5cyIsImZvcm1hdCIsIkNhbGVuZGFyIiwiQ2FsZW5kYXJJY29uIiwiQ2xvY2siLCJlcyIsImNuIiwiQnV0dG9uIiwiSW5wdXQiLCJQb3BvdmVyIiwiUG9wb3ZlckNvbnRlbnQiLCJQb3BvdmVyVHJpZ2dlciIsIkRhdGVUaW1lUmFuZ2UiLCJjbGFzc05hbWUiLCJvblJhbmdlQ2hhbmdlIiwiZGF0ZSIsInNldERhdGUiLCJ1c2VTdGF0ZSIsImZyb20iLCJEYXRlIiwidG8iLCJ0aW1lRnJvbSIsInNldFRpbWVGcm9tIiwidGltZVRvIiwic2V0VGltZVRvIiwidXNlRWZmZWN0IiwiZGF0ZXMiLCJ1bmRlZmluZWQiLCJ0aW1lcyIsImRpdiIsImFzQ2hpbGQiLCJpZCIsInZhcmlhbnQiLCJsb2NhbGUiLCJzcGFuIiwiYWxpZ24iLCJpbml0aWFsRm9jdXMiLCJtb2RlIiwiZGVmYXVsdE1vbnRoIiwic2VsZWN0ZWQiLCJvblNlbGVjdCIsIm51bWJlck9mTW9udGhzIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/transferencias/DateRange.tsx\n"));

/***/ })

});