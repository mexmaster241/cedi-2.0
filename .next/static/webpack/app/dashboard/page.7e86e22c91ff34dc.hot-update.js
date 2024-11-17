"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/page.tsx":
/*!************************************!*\
  !*** ./src/app/dashboard/page.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DashboardPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_dashboard_BalanceCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/dashboard/BalanceCard */ \"(app-pages-browser)/./src/components/dashboard/BalanceCard.tsx\");\n/* harmony import */ var _components_dashboard_TransferenciasLimite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/dashboard/TransferenciasLimite */ \"(app-pages-browser)/./src/components/dashboard/TransferenciasLimite.tsx\");\n/* harmony import */ var _components_dashboard_MPOSLimit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/dashboard/MPOSLimit */ \"(app-pages-browser)/./src/components/dashboard/MPOSLimit.tsx\");\n/* harmony import */ var _components_dashboard_EcommerceLimits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/dashboard/EcommerceLimits */ \"(app-pages-browser)/./src/components/dashboard/EcommerceLimits.tsx\");\n/* harmony import */ var _components_dashboard_RecentTransactions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/dashboard/RecentTransactions */ \"(app-pages-browser)/./src/components/dashboard/RecentTransactions.tsx\");\n/* harmony import */ var _components_dashboard_RevenueChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/dashboard/RevenueChart */ \"(app-pages-browser)/./src/components/dashboard/RevenueChart.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction DashboardPage() {\n    _s();\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const transactions = [\n        {\n            producto: 'MPOS',\n            tipo: 'Venta',\n            estatus: 'Completado',\n            monto: 85.20,\n            date: '2024-03-20'\n        },\n        {\n            producto: 'Transferencias',\n            tipo: 'Pago',\n            estatus: 'Procesando',\n            monto: -120.00,\n            date: '2024-03-19'\n        },\n        {\n            producto: 'E-commerce',\n            tipo: 'Venta Online',\n            estatus: 'Completado',\n            monto: 65.99,\n            date: '2024-03-18'\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkIfMobile = ()=>{\n            setIsMobile(window.innerWidth < 768);\n        };\n        checkIfMobile();\n        window.addEventListener('resize', checkIfMobile);\n        return ()=>window.removeEventListener('resize', checkIfMobile);\n    }, []);\n    if (isMobile) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-4 max-w-full overflow-hidden space-y-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-xl font-clash-display mb-2\",\n                        children: \"Bienvenido\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_BalanceCard__WEBPACK_IMPORTED_MODULE_2__.BalanceCard, {\n                        balance: 5240.50,\n                        className: \"w-full max-w-full transform transition-all duration-200 hover:scale-105 hover:shadow-lg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_RecentTransactions__WEBPACK_IMPORTED_MODULE_6__.RecentTransactions, {\n                    transactions: transactions\n                }, void 0, false, {\n                    fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/page.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/page.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 lg:p-6 max-w-full overflow-x-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col lg:flex-row gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:max-w-2xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_BalanceCard__WEBPACK_IMPORTED_MODULE_2__.BalanceCard, {\n                                balance: 5240.50,\n                                className: \"transform transition-all duration-200 hover:scale-105 hover:shadow-lg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_TransferenciasLimite__WEBPACK_IMPORTED_MODULE_3__.TransferenciasLimite, {\n                                transferenciasRecibidas: 1500000,\n                                className: \"transform transition-all duration-200 hover:scale-105 hover:shadow-lg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_MPOSLimit__WEBPACK_IMPORTED_MODULE_4__.MPOSLimit, {\n                                currentAmount: 1000000,\n                                className: \"transform transition-all duration-200 hover:scale-105 hover:shadow-lg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/page.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_EcommerceLimits__WEBPACK_IMPORTED_MODULE_5__.EcommerceLimits, {\n                                currentAmount: 1000000,\n                                className: \"transform transition-all duration-200 hover:scale-105 hover:shadow-lg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/page.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 h-[400px] lg:h-[500px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_RevenueChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"w-full h-full\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/page.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/page.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/page.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_RecentTransactions__WEBPACK_IMPORTED_MODULE_6__.RecentTransactions, {\n                transactions: transactions\n            }, void 0, false, {\n                fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/page.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/page.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(DashboardPage, \"0VTTNJATKABQPGLm9RVT0tKGUgU=\");\n_c = DashboardPage;\nvar _c;\n$RefreshReg$(_c, \"DashboardPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUUyQztBQUNxQjtBQUNrQjtBQUN0QjtBQUNZO0FBQ007QUFDaEI7QUFFL0MsU0FBU1E7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNVyxlQUFlO1FBQ25CO1lBQ0VDLFVBQVU7WUFDVkMsTUFBTTtZQUNOQyxTQUFTO1lBQ1RDLE9BQU87WUFDUEMsTUFBTTtRQUNSO1FBQ0E7WUFDRUosVUFBVTtZQUNWQyxNQUFNO1lBQ05DLFNBQVM7WUFDVEMsT0FBTyxDQUFDO1lBQ1JDLE1BQU07UUFDUjtRQUNBO1lBQ0VKLFVBQVU7WUFDVkMsTUFBTTtZQUNOQyxTQUFTO1lBQ1RDLE9BQU87WUFDUEMsTUFBTTtRQUNSO0tBQ0Q7SUFFRGYsZ0RBQVNBLENBQUM7UUFDUixNQUFNZ0IsZ0JBQWdCO1lBQ3BCUCxZQUFZUSxPQUFPQyxVQUFVLEdBQUc7UUFDbEM7UUFDQUY7UUFDQUMsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFDbEMsT0FBTyxJQUFNQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtJQUNwRCxHQUFHLEVBQUU7SUFFTCxJQUFJUixVQUFVO1FBQ1oscUJBQ0UsOERBQUNhO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUdELFdBQVU7a0NBQWtDOzs7Ozs7Ozs7Ozs4QkFFbEQsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDckIsMEVBQVdBO3dCQUNWdUIsU0FBUzt3QkFDVEYsV0FBVTs7Ozs7Ozs7Ozs7OEJBR2QsOERBQUNqQix3RkFBa0JBO29CQUFDSyxjQUFjQTs7Ozs7Ozs7Ozs7O0lBR3hDO0lBRUEscUJBQ0UsOERBQUNXO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ3JCLDBFQUFXQTtnQ0FDVnVCLFNBQVM7Z0NBQ1RGLFdBQVU7Ozs7OzswQ0FFWiw4REFBQ3BCLDRGQUFvQkE7Z0NBQ25CdUIseUJBQXlCO2dDQUN6QkgsV0FBVTs7Ozs7OzBDQUVaLDhEQUFDbkIsc0VBQVNBO2dDQUNSdUIsZUFBZTtnQ0FDZkosV0FBVTs7Ozs7OzBDQUVaLDhEQUFDbEIsa0ZBQWVBO2dDQUNkc0IsZUFBZTtnQ0FDZkosV0FBVTs7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ2hCLDBFQUFZQTs0QkFBQ2dCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUk1Qiw4REFBQ2pCLHdGQUFrQkE7Z0JBQUNLLGNBQWNBOzs7Ozs7Ozs7Ozs7QUFHeEM7R0FsRndCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Rhc2hib2FyZC9wYWdlLnRzeD9jMTVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgQmFsYW5jZUNhcmQgfSBmcm9tIFwiQC9jb21wb25lbnRzL2Rhc2hib2FyZC9CYWxhbmNlQ2FyZFwiXG5pbXBvcnQgeyBUcmFuc2ZlcmVuY2lhc0xpbWl0ZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGFzaGJvYXJkL1RyYW5zZmVyZW5jaWFzTGltaXRlXCJcbmltcG9ydCB7IE1QT1NMaW1pdCB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGFzaGJvYXJkL01QT1NMaW1pdFwiXG5pbXBvcnQgeyBFY29tbWVyY2VMaW1pdHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2Rhc2hib2FyZC9FY29tbWVyY2VMaW1pdHNcIlxuaW1wb3J0IHsgUmVjZW50VHJhbnNhY3Rpb25zIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kYXNoYm9hcmQvUmVjZW50VHJhbnNhY3Rpb25zXCJcbmltcG9ydCBSZXZlbnVlQ2hhcnQgZnJvbSBcIkAvY29tcG9uZW50cy9kYXNoYm9hcmQvUmV2ZW51ZUNoYXJ0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkUGFnZSgpIHtcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB0cmFuc2FjdGlvbnMgPSBbXG4gICAgeyBcbiAgICAgIHByb2R1Y3RvOiAnTVBPUycsXG4gICAgICB0aXBvOiAnVmVudGEnLFxuICAgICAgZXN0YXR1czogJ0NvbXBsZXRhZG8nLFxuICAgICAgbW9udG86IDg1LjIwLFxuICAgICAgZGF0ZTogJzIwMjQtMDMtMjAnXG4gICAgfSxcbiAgICB7IFxuICAgICAgcHJvZHVjdG86ICdUcmFuc2ZlcmVuY2lhcycsXG4gICAgICB0aXBvOiAnUGFnbycsXG4gICAgICBlc3RhdHVzOiAnUHJvY2VzYW5kbycsXG4gICAgICBtb250bzogLTEyMC4wMCxcbiAgICAgIGRhdGU6ICcyMDI0LTAzLTE5J1xuICAgIH0sXG4gICAgeyBcbiAgICAgIHByb2R1Y3RvOiAnRS1jb21tZXJjZScsXG4gICAgICB0aXBvOiAnVmVudGEgT25saW5lJyxcbiAgICAgIGVzdGF0dXM6ICdDb21wbGV0YWRvJyxcbiAgICAgIG1vbnRvOiA2NS45OSxcbiAgICAgIGRhdGU6ICcyMDI0LTAzLTE4J1xuICAgIH0sXG4gIF1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrSWZNb2JpbGUgPSAoKSA9PiB7XG4gICAgICBzZXRJc01vYmlsZSh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OClcbiAgICB9XG4gICAgY2hlY2tJZk1vYmlsZSgpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoZWNrSWZNb2JpbGUpXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGVja0lmTW9iaWxlKVxuICB9LCBbXSlcblxuICBpZiAoaXNNb2JpbGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgbWF4LXctZnVsbCBvdmVyZmxvdy1oaWRkZW4gc3BhY2UteS02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtY2xhc2gtZGlzcGxheSBtYi0yXCI+QmllbnZlbmlkbzwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgIDxCYWxhbmNlQ2FyZCBcbiAgICAgICAgICAgIGJhbGFuY2U9ezUyNDAuNTB9IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LWZ1bGwgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6c2hhZG93LWxnXCIgXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxSZWNlbnRUcmFuc2FjdGlvbnMgdHJhbnNhY3Rpb25zPXt0cmFuc2FjdGlvbnN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGxnOnAtNiBtYXgtdy1mdWxsIG92ZXJmbG93LXgtaGlkZGVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGdhcC00IHctZnVsbCBsZzptYXgtdy0yeGxcIj5cbiAgICAgICAgICA8QmFsYW5jZUNhcmQgXG4gICAgICAgICAgICBiYWxhbmNlPXs1MjQwLjUwfSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgaG92ZXI6c2NhbGUtMTA1IGhvdmVyOnNoYWRvdy1sZ1wiIFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRyYW5zZmVyZW5jaWFzTGltaXRlIFxuICAgICAgICAgICAgdHJhbnNmZXJlbmNpYXNSZWNpYmlkYXM9ezE1MDAwMDB9IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6c2hhZG93LWxnXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNUE9TTGltaXQgXG4gICAgICAgICAgICBjdXJyZW50QW1vdW50PXsxMDAwMDAwfSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgaG92ZXI6c2NhbGUtMTA1IGhvdmVyOnNoYWRvdy1sZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RWNvbW1lcmNlTGltaXRzIFxuICAgICAgICAgICAgY3VycmVudEFtb3VudD17MTAwMDAwMH0gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGhvdmVyOnNjYWxlLTEwNSBob3ZlcjpzaGFkb3ctbGdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBoLVs0MDBweF0gbGc6aC1bNTAwcHhdXCI+XG4gICAgICAgICAgPFJldmVudWVDaGFydCBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPFJlY2VudFRyYW5zYWN0aW9ucyB0cmFuc2FjdGlvbnM9e3RyYW5zYWN0aW9uc30gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQmFsYW5jZUNhcmQiLCJUcmFuc2ZlcmVuY2lhc0xpbWl0ZSIsIk1QT1NMaW1pdCIsIkVjb21tZXJjZUxpbWl0cyIsIlJlY2VudFRyYW5zYWN0aW9ucyIsIlJldmVudWVDaGFydCIsIkRhc2hib2FyZFBhZ2UiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwidHJhbnNhY3Rpb25zIiwicHJvZHVjdG8iLCJ0aXBvIiwiZXN0YXR1cyIsIm1vbnRvIiwiZGF0ZSIsImNoZWNrSWZNb2JpbGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImJhbGFuY2UiLCJ0cmFuc2ZlcmVuY2lhc1JlY2liaWRhcyIsImN1cnJlbnRBbW91bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});