"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages_Webcam_js",{

/***/ "./pages/Webcam.js":
/*!*************************!*\
  !*** ./pages/Webcam.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-webcam */ \"./node_modules/react-webcam/dist/react-webcam.js\");\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ \"./pages/firebase.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n// WebcamCapture.js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst videoConstraints = {\n    width: 1280,\n    height: 720,\n    facingMode: \"user\"\n};\nconst WebcamCapture = (param)=>{\n    let { onConfirm  } = param;\n    _s();\n    const webcamRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const [capturedImage, setCapturedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [hasCaptured, setHasCaptured] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const capture = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        const imageSrc = webcamRef.current.getScreenshot();\n        setCapturedImage(imageSrc);\n        setHasCaptured(true);\n    }, [\n        webcamRef\n    ]);\n    const retake = ()=>{\n        setHasCaptured(false);\n        setCapturedImage(\"\");\n    };\n    const uploadImageToFirebase = async ()=>{\n        const imageBlob = dataURLtoBlob(capturedImage); // Convert Data URL to blob\n        const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(_firebase__WEBPACK_IMPORTED_MODULE_3__.storage, \"images/\".concat(new Date().toISOString(), \".jpg\"));\n        try {\n            await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadBytes)(storageRef, imageBlob);\n            console.log(\"uploaded to firebase\");\n            const downloadURL = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(storageRef);\n            onConfirm(downloadURL); // Pass the Firebase URL instead of Data URL\n            console.log(\"recieved FirebaseURL:\" + downloadURL);\n        } catch (error) {\n            console.error(\"Image upload error: \", error);\n        }\n    };\n    // Convert data URL to Blob\n    const dataURLtoBlob = (dataurl)=>{\n        let arr = dataurl.split(\",\"), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);\n        while(n--){\n            u8arr[n] = bstr.charCodeAt(n);\n        }\n        return new Blob([\n            u8arr\n        ], {\n            type: mime\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative rounded-2xl shadow-xl overflow-hidden\",\n                children: [\n                    hasCaptured ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: capturedImage,\n                        alt: \"Captured\",\n                        className: \"rounded-2xl shadow-md\"\n                    }, void 0, false, {\n                        fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\Webcam.js\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_webcam__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        audio: false,\n                        height: 720,\n                        ref: webcamRef,\n                        screenshotFormat: \"image/jpeg\",\n                        width: 1280,\n                        videoConstraints: videoConstraints,\n                        className: \"rounded-2xl\"\n                    }, void 0, false, {\n                        fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\Webcam.js\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, undefined),\n                    !hasCaptured && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: capture,\n                        className: \"absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/camera.png\",\n                            alt: \"Capture\",\n                            className: \"h-6 w-6\"\n                        }, void 0, false, {\n                            fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\Webcam.js\",\n                            lineNumber: 76,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\Webcam.js\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\Webcam.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, undefined),\n            hasCaptured && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: retake,\n                        className: \"mt-4 bg-red-300 p-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-red-200\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/redo.png\",\n                            alt: \"Capture\",\n                            className: \"h-6 w-6\"\n                        }, void 0, false, {\n                            fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\Webcam.js\",\n                            lineNumber: 84,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\Webcam.js\",\n                        lineNumber: 83,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: uploadImageToFirebase,\n                        className: \"mt-4 bg-green-300 p-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-200\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/check.png\",\n                            alt: \"Capture\",\n                            className: \"h-6 w-6\"\n                        }, void 0, false, {\n                            fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\Webcam.js\",\n                            lineNumber: 87,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\Webcam.js\",\n                        lineNumber: 86,\n                        columnNumber: 15\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\Webcam.js\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\Webcam.js\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, undefined);\n};\n_s(WebcamCapture, \"a7uennnysP/Dz721J95YFDnk+Cg=\");\n_c = WebcamCapture;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebcamCapture);\nvar _c;\n$RefreshReg$(_c, \"WebcamCapture\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNsRCw0RUFBQ0M7NEJBQUlDLEtBQUk7NEJBQWFDLEtBQUk7NEJBQVVILFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVEO0dBOUVNckM7S0FBQUE7QUFnRk4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV2ViY2FtLmpzPzUxZDMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gV2ViY2FtQ2FwdHVyZS5qc1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXZWJjYW0gZnJvbSAncmVhY3Qtd2ViY2FtJztcclxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyByZWYgfSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyB1cGxvYWRCeXRlcyB9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IGdldERvd25sb2FkVVJMIH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IHZpZGVvQ29uc3RyYWludHMgPSB7XHJcbiAgd2lkdGg6IDEyODAsXHJcbiAgaGVpZ2h0OiA3MjAsXHJcbiAgZmFjaW5nTW9kZTogXCJ1c2VyXCJcclxufTtcclxuXHJcbmNvbnN0IFdlYmNhbUNhcHR1cmUgPSAoeyBvbkNvbmZpcm0gfSkgPT4ge1xyXG4gICAgY29uc3Qgd2ViY2FtUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW2NhcHR1cmVkSW1hZ2UsIHNldENhcHR1cmVkSW1hZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2hhc0NhcHR1cmVkLCBzZXRIYXNDYXB0dXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGNhcHR1cmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGltYWdlU3JjID0gd2ViY2FtUmVmLmN1cnJlbnQuZ2V0U2NyZWVuc2hvdCgpO1xyXG4gICAgICBzZXRDYXB0dXJlZEltYWdlKGltYWdlU3JjKTtcclxuICAgICAgc2V0SGFzQ2FwdHVyZWQodHJ1ZSk7XHJcbiAgICB9LCBbd2ViY2FtUmVmXSk7XHJcblxyXG4gICAgY29uc3QgcmV0YWtlID0gKCkgPT4ge1xyXG4gICAgICBzZXRIYXNDYXB0dXJlZChmYWxzZSk7XHJcbiAgICAgIHNldENhcHR1cmVkSW1hZ2UoJycpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGxvYWRJbWFnZVRvRmlyZWJhc2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VCbG9iID0gZGF0YVVSTHRvQmxvYihjYXB0dXJlZEltYWdlKTsgIC8vIENvbnZlcnQgRGF0YSBVUkwgdG8gYmxvYlxyXG4gICAgICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSByZWYoc3RvcmFnZSwgYGltYWdlcy8ke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0uanBnYCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgdXBsb2FkQnl0ZXMoc3RvcmFnZVJlZiwgaW1hZ2VCbG9iKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGVkIHRvIGZpcmViYXNlJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgZG93bmxvYWRVUkwgPSBhd2FpdCBnZXREb3dubG9hZFVSTChzdG9yYWdlUmVmKTtcclxuICAgICAgICAgICAgb25Db25maXJtKGRvd25sb2FkVVJMKTsgIC8vIFBhc3MgdGhlIEZpcmViYXNlIFVSTCBpbnN0ZWFkIG9mIERhdGEgVVJMXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWNpZXZlZCBGaXJlYmFzZVVSTDonICsgZG93bmxvYWRVUkwpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbWFnZSB1cGxvYWQgZXJyb3I6IFwiLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBDb252ZXJ0IGRhdGEgVVJMIHRvIEJsb2JcclxuICAgIGNvbnN0IGRhdGFVUkx0b0Jsb2IgPSAoZGF0YXVybCkgPT4ge1xyXG4gICAgICAgIGxldCBhcnIgPSBkYXRhdXJsLnNwbGl0KCcsJyksIG1pbWUgPSBhcnJbMF0ubWF0Y2goLzooLio/KTsvKVsxXSxcclxuICAgICAgICAgICAgYnN0ciA9IGF0b2IoYXJyWzFdKSwgbiA9IGJzdHIubGVuZ3RoLCB1OGFyciA9IG5ldyBVaW50OEFycmF5KG4pO1xyXG4gICAgICAgIHdoaWxlKG4tLSl7XHJcbiAgICAgICAgICAgIHU4YXJyW25dID0gYnN0ci5jaGFyQ29kZUF0KG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEJsb2IoW3U4YXJyXSwge3R5cGU6bWltZX0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtc2NyZWVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLTJ4bCBzaGFkb3cteGwgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICB7aGFzQ2FwdHVyZWQgPyAoXHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtjYXB0dXJlZEltYWdlfSBhbHQ9XCJDYXB0dXJlZFwiIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIHNoYWRvdy1tZFwiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8V2ViY2FtXHJcbiAgICAgICAgICAgICAgYXVkaW89e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17NzIwfVxyXG4gICAgICAgICAgICAgIHJlZj17d2ViY2FtUmVmfVxyXG4gICAgICAgICAgICAgIHNjcmVlbnNob3RGb3JtYXQ9XCJpbWFnZS9qcGVnXCJcclxuICAgICAgICAgICAgICB3aWR0aD17MTI4MH1cclxuICAgICAgICAgICAgICB2aWRlb0NvbnN0cmFpbnRzPXt2aWRlb0NvbnN0cmFpbnRzfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHshaGFzQ2FwdHVyZWQgJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NhcHR1cmV9IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgYmctd2hpdGUgcC00IHJvdW5kZWQtZnVsbCBzaGFkb3ctbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY2FtZXJhLnBuZ1wiIGFsdD1cIkNhcHR1cmVcIiBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIHtoYXNDYXB0dXJlZCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JldGFrZX0gY2xhc3NOYW1lPVwibXQtNCBiZy1yZWQtMzAwIHAtNCByb3VuZGVkLWZ1bGwgc2hhZG93LW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1yZWQtMjAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9yZWRvLnBuZ1wiIGFsdD1cIkNhcHR1cmVcIiBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3VwbG9hZEltYWdlVG9GaXJlYmFzZX0gY2xhc3NOYW1lPVwibXQtNCBiZy1ncmVlbi0zMDAgcC00IHJvdW5kZWQtZnVsbCBzaGFkb3ctbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyZWVuLTIwMFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NoZWNrLnBuZ1wiIGFsdD1cIkNhcHR1cmVcIiBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IFdlYmNhbUNhcHR1cmU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsIldlYmNhbSIsInN0b3JhZ2UiLCJyZWYiLCJ1cGxvYWRCeXRlcyIsImdldERvd25sb2FkVVJMIiwidmlkZW9Db25zdHJhaW50cyIsIndpZHRoIiwiaGVpZ2h0IiwiZmFjaW5nTW9kZSIsIldlYmNhbUNhcHR1cmUiLCJvbkNvbmZpcm0iLCJ3ZWJjYW1SZWYiLCJjYXB0dXJlZEltYWdlIiwic2V0Q2FwdHVyZWRJbWFnZSIsImhhc0NhcHR1cmVkIiwic2V0SGFzQ2FwdHVyZWQiLCJjYXB0dXJlIiwiaW1hZ2VTcmMiLCJjdXJyZW50IiwiZ2V0U2NyZWVuc2hvdCIsInJldGFrZSIsInVwbG9hZEltYWdlVG9GaXJlYmFzZSIsImltYWdlQmxvYiIsImRhdGFVUkx0b0Jsb2IiLCJzdG9yYWdlUmVmIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiY29uc29sZSIsImxvZyIsImRvd25sb2FkVVJMIiwiZXJyb3IiLCJkYXRhdXJsIiwiYXJyIiwic3BsaXQiLCJtaW1lIiwibWF0Y2giLCJic3RyIiwiYXRvYiIsIm4iLCJsZW5ndGgiLCJ1OGFyciIsIlVpbnQ4QXJyYXkiLCJjaGFyQ29kZUF0IiwiQmxvYiIsInR5cGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJhdWRpbyIsInNjcmVlbnNob3RGb3JtYXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Webcam.js\n"));

/***/ })

});