"use strict";
(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

<<<<<<< HEAD
/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/**\n * Hoists a name from a module or promised module.\n *\n * @param module the module to hoist the name from\n * @param name the name to hoist\n * @returns the value on the module (or promised module)\n */ \nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"hoist\", ({\n    enumerable: true,\n    get: function() {\n        return hoist;\n    }\n}));\nfunction hoist(module, name) {\n    // If the name is available in the module, return it.\n    if (name in module) {\n        return module[name];\n    }\n    // If a property called `then` exists, assume it's a promise and\n    // return a promise that resolves to the name.\n    if (\"then\" in module && typeof module.then === \"function\") {\n        return module.then((mod)=>hoist(mod, name));\n    }\n    // If we're trying to hoise the default export, and the module is a function,\n    // return the module itself.\n    if (typeof module === \"function\" && name === \"default\") {\n        return module;\n    }\n    // Otherwise, return undefined.\n    return undefined;\n}\n\n//# sourceMappingURL=helpers.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9oZWxwZXJzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQWlCO0FBQ2pCLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLHlDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2hlbHBlcnMuanM/OTlmZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEhvaXN0cyBhIG5hbWUgZnJvbSBhIG1vZHVsZSBvciBwcm9taXNlZCBtb2R1bGUuXG4gKlxuICogQHBhcmFtIG1vZHVsZSB0aGUgbW9kdWxlIHRvIGhvaXN0IHRoZSBuYW1lIGZyb21cbiAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIHRvIGhvaXN0XG4gKiBAcmV0dXJucyB0aGUgdmFsdWUgb24gdGhlIG1vZHVsZSAob3IgcHJvbWlzZWQgbW9kdWxlKVxuICovIFwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaG9pc3RcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGhvaXN0O1xuICAgIH1cbn0pO1xuZnVuY3Rpb24gaG9pc3QobW9kdWxlLCBuYW1lKSB7XG4gICAgLy8gSWYgdGhlIG5hbWUgaXMgYXZhaWxhYmxlIGluIHRoZSBtb2R1bGUsIHJldHVybiBpdC5cbiAgICBpZiAobmFtZSBpbiBtb2R1bGUpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZVtuYW1lXTtcbiAgICB9XG4gICAgLy8gSWYgYSBwcm9wZXJ0eSBjYWxsZWQgYHRoZW5gIGV4aXN0cywgYXNzdW1lIGl0J3MgYSBwcm9taXNlIGFuZFxuICAgIC8vIHJldHVybiBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbmFtZS5cbiAgICBpZiAoXCJ0aGVuXCIgaW4gbW9kdWxlICYmIHR5cGVvZiBtb2R1bGUudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBtb2R1bGUudGhlbigobW9kKT0+aG9pc3QobW9kLCBuYW1lKSk7XG4gICAgfVxuICAgIC8vIElmIHdlJ3JlIHRyeWluZyB0byBob2lzZSB0aGUgZGVmYXVsdCBleHBvcnQsIGFuZCB0aGUgbW9kdWxlIGlzIGEgZnVuY3Rpb24sXG4gICAgLy8gcmV0dXJuIHRoZSBtb2R1bGUgaXRzZWxmLlxuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSBcImZ1bmN0aW9uXCIgJiYgbmFtZSA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCByZXR1cm4gdW5kZWZpbmVkLlxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlbHBlcnMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F_error&absolutePagePath=private-next-pages%2F_error&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F_error&absolutePagePath=private-next-pages%2F_error&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages/module */ \"./node_modules/next/dist/server/future/route-modules/pages/module.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-route-loader/helpers */ \"./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\");\n/* harmony import */ var private_next_pages_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! private-next-pages/_error */ \"./node_modules/next/dist/pages/_error.js\");\n/* harmony import */ var private_next_pages_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_error__WEBPACK_IMPORTED_MODULE_2__);\n\n        // Next.js Route Loader\n        \n        \n\n        // Import the userland code.\n        \n\n        // Re-export the component (should be the default export).\n        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_2__, \"default\"));\n\n        // Re-export methods.\n        const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_2__, \"getStaticProps\")\n        const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_2__, \"getStaticPaths\")\n        const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_2__, \"getServerSideProps\")\n        const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_2__, \"config\")\n        const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_2__, \"reportWebVitals\")\n\n        // Re-export legacy methods.\n        const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_2__, \"unstable_getStaticProps\")\n        const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_2__, \"unstable_getStaticPaths\")\n        const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_2__, \"unstable_getStaticParams\")\n        const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_2__, \"unstable_getServerProps\")\n        const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_2__, \"unstable_getServerSideProps\")\n\n        // Create and export the route module that will be consumed.\n        const options = {\"definition\":{\"kind\":\"PAGES\",\"page\":\"/_error\",\"pathname\":\"/_error\",\"bundlePath\":\"\",\"filename\":\"\"}}\n        const routeModule = new (next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default())({ ...options, userland: private_next_pages_error__WEBPACK_IMPORTED_MODULE_2__ })\n        \n        \n    //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9wYWdlPSUyRl9lcnJvciZhYnNvbHV0ZVBhZ2VQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9lcnJvciZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBLFFBQW9GO0FBQ3BGLFFBQXlGOztBQUV6RjtBQUNBLFFBQTZEOztBQUU3RDtBQUNBLFFBQVEsaUVBQWUsZ0dBQUssQ0FBQyxxREFBUSxZQUFZOztBQUVqRDtBQUNBLFFBQWUsdUJBQXVCLGdHQUFLLENBQUMscURBQVE7QUFDcEQsUUFBZSx1QkFBdUIsZ0dBQUssQ0FBQyxxREFBUTtBQUNwRCxRQUFlLDJCQUEyQixnR0FBSyxDQUFDLHFEQUFRO0FBQ3hELFFBQWUsZUFBZSxnR0FBSyxDQUFDLHFEQUFRO0FBQzVDLFFBQWUsd0JBQXdCLGdHQUFLLENBQUMscURBQVE7O0FBRXJEO0FBQ0EsUUFBZSxnQ0FBZ0MsZ0dBQUssQ0FBQyxxREFBUTtBQUM3RCxRQUFlLGdDQUFnQyxnR0FBSyxDQUFDLHFEQUFRO0FBQzdELFFBQWUsaUNBQWlDLGdHQUFLLENBQUMscURBQVE7QUFDOUQsUUFBZSxnQ0FBZ0MsZ0dBQUssQ0FBQyxxREFBUTtBQUM3RCxRQUFlLG9DQUFvQyxnR0FBSyxDQUFDLHFEQUFROztBQUVqRTtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDLGdDQUFnQywyRkFBVyxHQUFHLG9CQUFvQix5REFBRTtBQUNwRTtBQUNBLFFBQThCO0FBQzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Lz82MjkxIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAvLyBOZXh0LmpzIFJvdXRlIExvYWRlclxuICAgICAgICBpbXBvcnQgUm91dGVNb2R1bGUgZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMvbW9kdWxlXCJcbiAgICAgICAgaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9oZWxwZXJzXCJcblxuICAgICAgICAvLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG4gICAgICAgIGltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2Vycm9yXCJcblxuICAgICAgICAvLyBSZS1leHBvcnQgdGhlIGNvbXBvbmVudCAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIilcblxuICAgICAgICAvLyBSZS1leHBvcnQgbWV0aG9kcy5cbiAgICAgICAgZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsIFwiZ2V0U3RhdGljUHJvcHNcIilcbiAgICAgICAgZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gaG9pc3QodXNlcmxhbmQsIFwiZ2V0U3RhdGljUGF0aHNcIilcbiAgICAgICAgZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcImdldFNlcnZlclNpZGVQcm9wc1wiKVxuICAgICAgICBleHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsIFwiY29uZmlnXCIpXG4gICAgICAgIGV4cG9ydCBjb25zdCByZXBvcnRXZWJWaXRhbHMgPSBob2lzdCh1c2VybGFuZCwgXCJyZXBvcnRXZWJWaXRhbHNcIilcblxuICAgICAgICAvLyBSZS1leHBvcnQgbGVnYWN5IG1ldGhvZHMuXG4gICAgICAgIGV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcInVuc3RhYmxlX2dldFN0YXRpY1Byb3BzXCIpXG4gICAgICAgIGV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCBcInVuc3RhYmxlX2dldFN0YXRpY1BhdGhzXCIpXG4gICAgICAgIGV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXNcIilcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclByb3BzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U2VydmVyUHJvcHNcIilcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcInVuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wc1wiKVxuXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1wiZGVmaW5pdGlvblwiOntcImtpbmRcIjpcIlBBR0VTXCIsXCJwYWdlXCI6XCIvX2Vycm9yXCIsXCJwYXRobmFtZVwiOlwiL19lcnJvclwiLFwiYnVuZGxlUGF0aFwiOlwiXCIsXCJmaWxlbmFtZVwiOlwiXCJ9fVxuICAgICAgICBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBSb3V0ZU1vZHVsZSh7IC4uLm9wdGlvbnMsIHVzZXJsYW5kIH0pXG4gICAgICAgIFxuICAgICAgICBleHBvcnQgeyByb3V0ZU1vZHVsZSB9XG4gICAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F_error&absolutePagePath=private-next-pages%2F_error&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return Error;\n    }\n}));\nconst _interop_require_default = __webpack_require__(/*! @swc/helpers/_/_interop_require_default */ \"./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\");\nconst _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! react */ \"react\"));\nconst _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! ../shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\"));\nconst statusCodes = {\n    400: \"Bad Request\",\n    404: \"This page could not be found\",\n    405: \"Method Not Allowed\",\n    500: \"Internal Server Error\"\n};\nfunction _getInitialProps(param) {\n    let { res, err } = param;\n    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n    return {\n        statusCode\n    };\n}\nconst styles = {\n    error: {\n        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52\n        fontFamily: 'system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"',\n        height: \"100vh\",\n        textAlign: \"center\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\"\n    },\n    desc: {\n        lineHeight: \"48px\"\n    },\n    h1: {\n        display: \"inline-block\",\n        margin: \"0 20px 0 0\",\n        paddingRight: 23,\n        fontSize: 24,\n        fontWeight: 500,\n        verticalAlign: \"top\"\n    },\n    h2: {\n        fontSize: 14,\n        fontWeight: 400,\n        lineHeight: \"28px\"\n    },\n    wrap: {\n        display: \"inline-block\"\n    }\n};\nclass Error extends _react.default.Component {\n    render() {\n        const { statusCode, withDarkMode = true } = this.props;\n        const title = this.props.title || statusCodes[statusCode] || \"An unexpected error has occurred\";\n        return /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.error\n        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement(\"title\", null, statusCode ? statusCode + \": \" + title : \"Application error: a client-side exception has occurred\")), /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.desc\n        }, /*#__PURE__*/ _react.default.createElement(\"style\", {\n            dangerouslySetInnerHTML: {\n                /* CSS minified from\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n\n                ${\n                  withDarkMode\n                    ? `@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }`\n                    : ''\n                }\n               */ __html: \"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}\" + (withDarkMode ? \"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}\" : \"\")\n            }\n        }), statusCode ? /*#__PURE__*/ _react.default.createElement(\"h1\", {\n            className: \"next-error-h1\",\n            style: styles.h1\n        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.wrap\n        }, /*#__PURE__*/ _react.default.createElement(\"h2\", {\n            style: styles.h2\n        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\"))));\n    }\n}\n(()=>{\n    Error.displayName = \"ErrorPage\";\n})();\n(()=>{\n    Error.getInitialProps = _getInitialProps;\n})();\n(()=>{\n    Error.origGetInitialProps = _getInitialProps;\n})();\nif ((typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) && typeof exports.default.__esModule === \"undefined\") {\n    Object.defineProperty(exports.default, \"__esModule\", {\n        value: true\n    });\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=_error.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFDekNHLE9BQU87QUFDWCxDQUFDLEVBQUM7QUFDRkgsMkNBQTBDO0lBQ3RDSSxZQUFZO0lBQ1pDLEtBQUs7UUFDRCxPQUFPQztJQUNYO0FBQ0osQ0FBQyxFQUFDO0FBQ0YsTUFBTUMsMkJBQTJCQyxtQkFBT0EsQ0FBQyw2R0FBeUM7QUFDbEYsTUFBTUMsU0FBUyxXQUFXLEdBQUdGLHlCQUF5QkcsRUFBRUYsbUJBQU9BLENBQUMsb0JBQU87QUFDdkUsTUFBTUcsUUFBUSxXQUFXLEdBQUdKLHlCQUF5QkcsRUFBRUYsbUJBQU9BLENBQUMsdUVBQW9CO0FBQ25GLE1BQU1JLGNBQWM7SUFDaEIsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztBQUNUO0FBQ0EsU0FBU0MsaUJBQWlCQyxLQUFLO0lBQzNCLElBQUksRUFBRUMsR0FBRyxFQUFHQyxHQUFHLEVBQUcsR0FBR0Y7SUFDckIsTUFBTUcsYUFBYUYsT0FBT0EsSUFBSUUsYUFBYUYsSUFBSUUsYUFBYUQsTUFBTUEsSUFBSUMsYUFBYTtJQUNuRixPQUFPO1FBQ0hBO0lBQ0o7QUFDSjtBQUNBLE1BQU1DLFNBQVM7SUFDWEMsT0FBTztRQUNILDBGQUEwRjtRQUMxRkMsWUFBWTtRQUNaQyxRQUFRO1FBQ1JDLFdBQVc7UUFDWEMsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLFlBQVk7UUFDWkMsZ0JBQWdCO0lBQ3BCO0lBQ0FDLE1BQU07UUFDRkMsWUFBWTtJQUNoQjtJQUNBQyxJQUFJO1FBQ0FOLFNBQVM7UUFDVE8sUUFBUTtRQUNSQyxjQUFjO1FBQ2RDLFVBQVU7UUFDVkMsWUFBWTtRQUNaQyxlQUFlO0lBQ25CO0lBQ0FDLElBQUk7UUFDQUgsVUFBVTtRQUNWQyxZQUFZO1FBQ1pMLFlBQVk7SUFDaEI7SUFDQVEsTUFBTTtRQUNGYixTQUFTO0lBQ2I7QUFDSjtBQUNBLE1BQU1qQixjQUFjRyxPQUFPNEIsUUFBUUM7SUFDL0JDLFNBQVM7UUFDTCxNQUFNLEVBQUV0QixVQUFVLEVBQUd1QixlQUFjLElBQUksRUFBRyxHQUFHLElBQUksQ0FBQ0M7UUFDbEQsTUFBTUMsUUFBUSxJQUFJLENBQUNELE1BQU1DLFNBQVM5QixXQUFXLENBQUNLLFdBQVcsSUFBSTtRQUM3RCxPQUFPLFdBQVcsR0FBR1IsT0FBTzRCLFFBQVFNLGNBQWMsT0FBTztZQUNyREMsT0FBTzFCLE9BQU9DO1FBQ2xCLEdBQUcsV0FBVyxHQUFHVixPQUFPNEIsUUFBUU0sY0FBY2hDLE1BQU0wQixTQUFTLE1BQU0sV0FBVyxHQUFHNUIsT0FBTzRCLFFBQVFNLGNBQWMsU0FBUyxNQUFNMUIsYUFBYUEsYUFBYSxPQUFPeUIsUUFBUSw2REFBNkQsV0FBVyxHQUFHakMsT0FBTzRCLFFBQVFNLGNBQWMsT0FBTztZQUNqUkMsT0FBTzFCLE9BQU9TO1FBQ2xCLEdBQUcsV0FBVyxHQUFHbEIsT0FBTzRCLFFBQVFNLGNBQWMsU0FBUztZQUNuREUseUJBQXlCO2dCQUNyQjs7Ozs7Ozs7Ozs7Ozs7OztlQWdCRCxHQUFHQyxRQUFRLG1HQUFvR04sQ0FBQUEsZUFBZSxvSUFBb0ksRUFBQztZQUN0UTtRQUNKLElBQUl2QixhQUFhLFdBQVcsR0FBR1IsT0FBTzRCLFFBQVFNLGNBQWMsTUFBTTtZQUM5REksV0FBVztZQUNYSCxPQUFPMUIsT0FBT1c7UUFDbEIsR0FBR1osY0FBYyxNQUFNLFdBQVcsR0FBR1IsT0FBTzRCLFFBQVFNLGNBQWMsT0FBTztZQUNyRUMsT0FBTzFCLE9BQU9rQjtRQUNsQixHQUFHLFdBQVcsR0FBRzNCLE9BQU80QixRQUFRTSxjQUFjLE1BQU07WUFDaERDLE9BQU8xQixPQUFPaUI7UUFDbEIsR0FBRyxJQUFJLENBQUNNLE1BQU1DLFNBQVN6QixhQUFheUIsUUFBUSxXQUFXLEdBQUdqQyxPQUFPNEIsUUFBUU0sY0FBY2xDLE9BQU80QixRQUFRVyxVQUFVLE1BQU0sMkdBQTJHO0lBQ3JPO0FBQ0o7QUFDQztJQUNHMUMsTUFBTTJDLGNBQWM7QUFDeEI7QUFDQztJQUNHM0MsTUFBTTRDLGtCQUFrQnJDO0FBQzVCO0FBQ0M7SUFDR1AsTUFBTTZDLHNCQUFzQnRDO0FBQ2hDO0FBRUEsSUFBSSxDQUFDLE9BQU9YLFFBQVFtQyxZQUFZLGNBQWUsT0FBT25DLFFBQVFtQyxZQUFZLFlBQVluQyxRQUFRbUMsWUFBWSxJQUFJLEtBQU0sT0FBT25DLFFBQVFtQyxRQUFRZSxlQUFlLGFBQWE7SUFDcktwRCxPQUFPQyxlQUFlQyxRQUFRbUMsU0FBUyxjQUFjO1FBQUVsQyxPQUFPO0lBQUs7SUFDbkVILE9BQU9xRCxPQUFPbkQsUUFBUW1DLFNBQVNuQztJQUMvQm9ELE9BQU9wRCxVQUFVQSxRQUFRbUM7QUFDM0IsRUFFQSxrQ0FBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcz8xOGYyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gRXJyb3I7XG4gICAgfVxufSk7XG5jb25zdCBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQgPSByZXF1aXJlKFwiQHN3Yy9oZWxwZXJzL18vX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0XCIpO1xuY29uc3QgX3JlYWN0ID0gLyojX19QVVJFX18qLyBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuXyhyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgX2hlYWQgPSAvKiNfX1BVUkVfXyovIF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5fKHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xuY29uc3Qgc3RhdHVzQ29kZXMgPSB7XG4gICAgNDAwOiBcIkJhZCBSZXF1ZXN0XCIsXG4gICAgNDA0OiBcIlRoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmRcIixcbiAgICA0MDU6IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIsXG4gICAgNTAwOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiXG59O1xuZnVuY3Rpb24gX2dldEluaXRpYWxQcm9wcyhwYXJhbSkge1xuICAgIGxldCB7IHJlcyAsIGVyciAgfSA9IHBhcmFtO1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgJiYgcmVzLnN0YXR1c0NvZGUgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogNDA0O1xuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1c0NvZGVcbiAgICB9O1xufVxuY29uc3Qgc3R5bGVzID0ge1xuICAgIGVycm9yOiB7XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9ibG9iL21haW4vbW9kZXJuLW5vcm1hbGl6ZS5jc3MjTDM4LUw1MlxuICAgICAgICBmb250RmFtaWx5OiAnc3lzdGVtLXVpLFwiU2Vnb2UgVUlcIixSb2JvdG8sSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIicsXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxuICAgIH0sXG4gICAgZGVzYzoge1xuICAgICAgICBsaW5lSGVpZ2h0OiBcIjQ4cHhcIlxuICAgIH0sXG4gICAgaDE6IHtcbiAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgbWFyZ2luOiBcIjAgMjBweCAwIDBcIixcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAyMyxcbiAgICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246IFwidG9wXCJcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjI4cHhcIlxuICAgIH0sXG4gICAgd3JhcDoge1xuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiXG4gICAgfVxufTtcbmNsYXNzIEVycm9yIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzQ29kZSAsIHdpdGhEYXJrTW9kZSA9dHJ1ZSAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZSB8fCBzdGF0dXNDb2Rlc1tzdGF0dXNDb2RlXSB8fCBcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkXCI7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5lcnJvclxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwgbnVsbCwgc3RhdHVzQ29kZSA/IHN0YXR1c0NvZGUgKyBcIjogXCIgKyB0aXRsZSA6IFwiQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZFwiKSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmRlc2NcbiAgICAgICAgfSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICAvKiBDU1MgbWluaWZpZWQgZnJvbVxuICAgICAgICAgICAgICAgIGJvZHkgeyBtYXJnaW46IDA7IGNvbG9yOiAjMDAwOyBiYWNrZ3JvdW5kOiAjZmZmOyB9XG4gICAgICAgICAgICAgICAgLm5leHQtZXJyb3ItaDEge1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgIHdpdGhEYXJrTW9kZVxuICAgICAgICAgICAgICAgICAgICA/IGBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgICAgICAgICAgICAgICBib2R5IHsgY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICMwMDA7IH1cbiAgICAgICAgICAgICAgICAgIC5uZXh0LWVycm9yLWgxIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICovIF9faHRtbDogXCJib2R5e2NvbG9yOiMwMDA7YmFja2dyb3VuZDojZmZmO21hcmdpbjowfS5uZXh0LWVycm9yLWgxe2JvcmRlci1yaWdodDoxcHggc29saWQgcmdiYSgwLDAsMCwuMyl9XCIgKyAod2l0aERhcmtNb2RlID8gXCJAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOmRhcmspe2JvZHl7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiMwMDB9Lm5leHQtZXJyb3ItaDF7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4zKX19XCIgOiBcIlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSwgc3RhdHVzQ29kZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgxXCIsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJuZXh0LWVycm9yLWgxXCIsXG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmgxXG4gICAgICAgIH0sIHN0YXR1c0NvZGUpIDogbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMud3JhcFxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmgyXG4gICAgICAgIH0sIHRoaXMucHJvcHMudGl0bGUgfHwgc3RhdHVzQ29kZSA/IHRpdGxlIDogLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBcIkFwcGxpY2F0aW9uIGVycm9yOiBhIGNsaWVudC1zaWRlIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQgKHNlZSB0aGUgYnJvd3NlciBjb25zb2xlIGZvciBtb3JlIGluZm9ybWF0aW9uKVwiKSwgXCIuXCIpKSkpO1xuICAgIH1cbn1cbigoKT0+e1xuICAgIEVycm9yLmRpc3BsYXlOYW1lID0gXCJFcnJvclBhZ2VcIjtcbn0pKCk7XG4oKCk9PntcbiAgICBFcnJvci5nZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzO1xufSkoKTtcbigoKT0+e1xuICAgIEVycm9yLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzO1xufSkoKTtcblxuaWYgKCh0eXBlb2YgZXhwb3J0cy5kZWZhdWx0ID09PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2YgZXhwb3J0cy5kZWZhdWx0ID09PSAnb2JqZWN0JyAmJiBleHBvcnRzLmRlZmF1bHQgIT09IG51bGwpKSAmJiB0eXBlb2YgZXhwb3J0cy5kZWZhdWx0Ll9fZXNNb2R1bGUgPT09ICd1bmRlZmluZWQnKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLmRlZmF1bHQsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgT2JqZWN0LmFzc2lnbihleHBvcnRzLmRlZmF1bHQsIGV4cG9ydHMpO1xuICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2Vycm9yLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJnZXQiLCJFcnJvciIsIl9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdCIsInJlcXVpcmUiLCJfcmVhY3QiLCJfIiwiX2hlYWQiLCJzdGF0dXNDb2RlcyIsIl9nZXRJbml0aWFsUHJvcHMiLCJwYXJhbSIsInJlcyIsImVyciIsInN0YXR1c0NvZGUiLCJzdHlsZXMiLCJlcnJvciIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImRlc2MiLCJsaW5lSGVpZ2h0IiwiaDEiLCJtYXJnaW4iLCJwYWRkaW5nUmlnaHQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiaDIiLCJ3cmFwIiwiZGVmYXVsdCIsIkNvbXBvbmVudCIsInJlbmRlciIsIndpdGhEYXJrTW9kZSIsInByb3BzIiwidGl0bGUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNsYXNzTmFtZSIsIkZyYWdtZW50IiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiX19lc01vZHVsZSIsImFzc2lnbiIsIm1vZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_error.js\n");
=======
/***/ 3499:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return Error;
    }
}));
const _interop_require_default = __webpack_require__(167);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(6689));
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2636));
const statusCodes = {
    400: "Bad Request",
    404: "This page could not be found",
    405: "Method Not Allowed",
    500: "Internal Server Error"
};
function _getInitialProps(param) {
    let { res, err } = param;
    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
    return {
        statusCode
    };
}
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    desc: {
        lineHeight: "48px"
    },
    h1: {
        display: "inline-block",
        margin: "0 20px 0 0",
        paddingRight: 23,
        fontSize: 24,
        fontWeight: 500,
        verticalAlign: "top"
    },
    h2: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: "28px"
    },
    wrap: {
        display: "inline-block"
    }
};
class Error extends _react.default.Component {
    render() {
        const { statusCode, withDarkMode = true } = this.props;
        const title = this.props.title || statusCodes[statusCode] || "An unexpected error has occurred";
        return /*#__PURE__*/ _react.default.createElement("div", {
            style: styles.error
        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("title", null, statusCode ? statusCode + ": " + title : "Application error: a client-side exception has occurred")), /*#__PURE__*/ _react.default.createElement("div", {
            style: styles.desc
        }, /*#__PURE__*/ _react.default.createElement("style", {
            dangerouslySetInnerHTML: {
                /* CSS minified from
                body { margin: 0; color: #000; background: #fff; }
                .next-error-h1 {
                  border-right: 1px solid rgba(0, 0, 0, .3);
                }

                ${
                  withDarkMode
                    ? `@media (prefers-color-scheme: dark) {
                  body { color: #fff; background: #000; }
                  .next-error-h1 {
                    border-right: 1px solid rgba(255, 255, 255, .3);
                  }
                }`
                    : ''
                }
               */ __html: "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}" + (withDarkMode ? "@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}" : "")
            }
        }), statusCode ? /*#__PURE__*/ _react.default.createElement("h1", {
            className: "next-error-h1",
            style: styles.h1
        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement("div", {
            style: styles.wrap
        }, /*#__PURE__*/ _react.default.createElement("h2", {
            style: styles.h2
        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, "Application error: a client-side exception has occurred (see the browser console for more information)"), "."))));
    }
}
(()=>{
    Error.displayName = "ErrorPage";
})();
(()=>{
    Error.getInitialProps = _getInitialProps;
})();
(()=>{
    Error.origGetInitialProps = _getInitialProps;
})();
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=_error.js.map

>>>>>>> bf923e4f809b1f599dfcd674928dce2c24606d2a

/***/ }),

/***/ 2636:
/***/ ((module, exports, __webpack_require__) => {

<<<<<<< HEAD
eval("/* __next_internal_client_entry_do_not_use__  cjs */ \nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n0 && (0);\nfunction _export(target, all) {\n    for(var name in all)Object.defineProperty(target, name, {\n        enumerable: true,\n        get: all[name]\n    });\n}\n_export(exports, {\n    defaultHead: function() {\n        return defaultHead;\n    },\n    default: function() {\n        return _default;\n    }\n});\nconst _interop_require_default = __webpack_require__(/*! @swc/helpers/_/_interop_require_default */ \"./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\");\nconst _interop_require_wildcard = __webpack_require__(/*! @swc/helpers/_/_interop_require_wildcard */ \"./node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs\");\nconst _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(/*! react */ \"react\"));\nconst _sideeffect = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! ./side-effect */ \"./side-effect\"));\nconst _ampcontext = __webpack_require__(/*! ./amp-context */ \"./amp-context\");\nconst _headmanagercontext = __webpack_require__(/*! ./head-manager-context */ \"./head-manager-context\");\nconst _ampmode = __webpack_require__(/*! ./amp-mode */ \"./amp-mode\");\nconst _warnonce = __webpack_require__(/*! ./utils/warn-once */ \"./utils/warn-once\");\nfunction defaultHead(inAmpMode) {\n    if (inAmpMode === void 0) inAmpMode = false;\n    const head = [\n        /*#__PURE__*/ _react.default.createElement(\"meta\", {\n            charSet: \"utf-8\"\n        })\n    ];\n    if (!inAmpMode) {\n        head.push(/*#__PURE__*/ _react.default.createElement(\"meta\", {\n            name: \"viewport\",\n            content: \"width=device-width\"\n        }));\n    }\n    return head;\n}\nfunction onlyReactElement(list, child) {\n    // React children can be \"string\" or \"number\" in this case we ignore them for backwards compat\n    if (typeof child === \"string\" || typeof child === \"number\") {\n        return list;\n    }\n    // Adds support for React.Fragment\n    if (child.type === _react.default.Fragment) {\n        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{\n            if (typeof fragmentChild === \"string\" || typeof fragmentChild === \"number\") {\n                return fragmentList;\n            }\n            return fragmentList.concat(fragmentChild);\n        }, []));\n    }\n    return list.concat(child);\n}\nconst METATYPES = [\n    \"name\",\n    \"httpEquiv\",\n    \"charSet\",\n    \"itemProp\"\n];\n/*\n returns a function for filtering head child elements\n which shouldn't be duplicated, like <title/>\n Also adds support for deduplicated `key` properties\n*/ function unique() {\n    const keys = new Set();\n    const tags = new Set();\n    const metaTypes = new Set();\n    const metaCategories = {};\n    return (h)=>{\n        let isUnique = true;\n        let hasKey = false;\n        if (h.key && typeof h.key !== \"number\" && h.key.indexOf(\"$\") > 0) {\n            hasKey = true;\n            const key = h.key.slice(h.key.indexOf(\"$\") + 1);\n            if (keys.has(key)) {\n                isUnique = false;\n            } else {\n                keys.add(key);\n            }\n        }\n        // eslint-disable-next-line default-case\n        switch(h.type){\n            case \"title\":\n            case \"base\":\n                if (tags.has(h.type)) {\n                    isUnique = false;\n                } else {\n                    tags.add(h.type);\n                }\n                break;\n            case \"meta\":\n                for(let i = 0, len = METATYPES.length; i < len; i++){\n                    const metatype = METATYPES[i];\n                    if (!h.props.hasOwnProperty(metatype)) continue;\n                    if (metatype === \"charSet\") {\n                        if (metaTypes.has(metatype)) {\n                            isUnique = false;\n                        } else {\n                            metaTypes.add(metatype);\n                        }\n                    } else {\n                        const category = h.props[metatype];\n                        const categories = metaCategories[metatype] || new Set();\n                        if ((metatype !== \"name\" || !hasKey) && categories.has(category)) {\n                            isUnique = false;\n                        } else {\n                            categories.add(category);\n                            metaCategories[metatype] = categories;\n                        }\n                    }\n                }\n                break;\n        }\n        return isUnique;\n    };\n}\n/**\n *\n * @param headChildrenElements List of children of <Head>\n */ function reduceComponents(headChildrenElements, props) {\n    const { inAmpMode } = props;\n    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i)=>{\n        const key = c.key || i;\n        if (false) {}\n        if (true) {\n            // omit JSON-LD structured data snippets from the warning\n            if (c.type === \"script\" && c.props[\"type\"] !== \"application/ld+json\") {\n                const srcMessage = c.props[\"src\"] ? '<script> tag with src=\"' + c.props[\"src\"] + '\"' : \"inline <script>\";\n                (0, _warnonce.warnOnce)(\"Do not add <script> tags using next/head (see \" + srcMessage + \"). Use next/script instead. \\nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component\");\n            } else if (c.type === \"link\" && c.props[\"rel\"] === \"stylesheet\") {\n                (0, _warnonce.warnOnce)('Do not add stylesheets using next/head (see <link rel=\"stylesheet\"> tag with href=\"' + c.props[\"href\"] + '\"). Use Document instead. \\nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component');\n            }\n        }\n        return /*#__PURE__*/ _react.default.cloneElement(c, {\n            key\n        });\n    });\n}\n/**\n * This component injects elements to `<head>` of your page.\n * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.\n */ function Head(param) {\n    let { children } = param;\n    const ampState = (0, _react.useContext)(_ampcontext.AmpStateContext);\n    const headManager = (0, _react.useContext)(_headmanagercontext.HeadManagerContext);\n    return /*#__PURE__*/ _react.default.createElement(_sideeffect.default, {\n        reduceComponentsToState: reduceComponents,\n        headManager: headManager,\n        inAmpMode: (0, _ampmode.isInAmpMode)(ampState)\n    }, children);\n}\nconst _default = Head;\nif ((typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) && typeof exports.default.__esModule === \"undefined\") {\n    Object.defineProperty(exports.default, \"__esModule\", {\n        value: true\n    });\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=head.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qcyIsIm1hcHBpbmdzIjoicURBQ2E7QUFDYkEsOENBQTZDO0lBQ3pDRyxPQUFPO0FBQ1gsQ0FBQyxFQUFDO0FBQ0YsS0FBTUMsQ0FBQUEsQ0FHTjtBQUNBLFNBQVNHLFFBQVFDLE1BQU0sRUFBRUMsR0FBRztJQUN4QixJQUFJLElBQUlDLFFBQVFELElBQUlULE9BQU9DLGVBQWVPLFFBQVFFLE1BQU07UUFDcERDLFlBQVk7UUFDWkMsS0FBS0gsR0FBRyxDQUFDQyxLQUFLO0lBQ2xCO0FBQ0o7QUFDQUgsUUFBUUwsU0FBUztJQUNiRyxhQUFhO1FBQ1QsT0FBT0E7SUFDWDtJQUNBQyxTQUFTO1FBQ0wsT0FBT087SUFDWDtBQUNKO0FBQ0EsTUFBTUMsMkJBQTJCQyxtQkFBT0EsQ0FBQyw2R0FBeUM7QUFDbEYsTUFBTUMsNEJBQTRCRCxtQkFBT0EsQ0FBQywrR0FBMEM7QUFDcEYsTUFBTUUsU0FBUyxXQUFXLEdBQUdELDBCQUEwQkUsRUFBRUgsbUJBQU9BLENBQUMsb0JBQU87QUFDeEUsTUFBTUksY0FBYyxXQUFXLEdBQUdMLHlCQUF5QkksRUFBRUgsbUJBQU9BLENBQUMsb0NBQWU7QUFDcEYsTUFBTUssY0FBY0wsbUJBQU9BLENBQUMsb0NBQWU7QUFDM0MsTUFBTU0sc0JBQXNCTixtQkFBT0EsQ0FBQyxzREFBd0I7QUFDNUQsTUFBTU8sV0FBV1AsbUJBQU9BLENBQUMsOEJBQVk7QUFDckMsTUFBTVEsWUFBWVIsbUJBQU9BLENBQUMsNENBQW1CO0FBRTdDLFNBQVNWLFlBQVltQixTQUFTO0lBQzFCLElBQUlBLGNBQWMsS0FBSyxHQUFHQSxZQUFZO0lBQ3RDLE1BQU1DLE9BQU87UUFDVCxXQUFXLEdBQUdSLE9BQU9YLFFBQVFvQixjQUFjLFFBQVE7WUFDL0NDLFNBQVM7UUFDYjtLQUNIO0lBQ0QsSUFBSSxDQUFDSCxXQUFXO1FBQ1pDLEtBQUtHLEtBQUssV0FBVyxHQUFHWCxPQUFPWCxRQUFRb0Is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T0FBT0osUUFBUUksUUFBUXFGLGVBQWUsYUFBYTtJQUNySzNGLE9BQU9DLGVBQWVDLFFBQVFJLFNBQVMsY0FBYztRQUFFSCxPQUFPO0lBQUs7SUFDbkVILE9BQU80RixPQUFPMUYsUUFBUUksU0FBU0o7SUFDL0JFLE9BQU9GLFVBQVVBLFFBQVFJO0FBQzNCLEVBRUEsZ0NBQWdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanM/ZmI1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuMCAmJiAobW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdEhlYWQ6IG51bGwsXG4gICAgZGVmYXVsdDogbnVsbFxufSk7XG5mdW5jdGlvbiBfZXhwb3J0KHRhcmdldCwgYWxsKSB7XG4gICAgZm9yKHZhciBuYW1lIGluIGFsbClPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGdldDogYWxsW25hbWVdXG4gICAgfSk7XG59XG5fZXhwb3J0KGV4cG9ydHMsIHtcbiAgICBkZWZhdWx0SGVhZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0SGVhZDtcbiAgICB9LFxuICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHQ7XG4gICAgfVxufSk7XG5jb25zdCBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQgPSByZXF1aXJlKFwiQHN3Yy9oZWxwZXJzL18vX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0XCIpO1xuY29uc3QgX2ludGVyb3BfcmVxdWlyZV93aWxkY2FyZCA9IHJlcXVpcmUoXCJAc3djL2hlbHBlcnMvXy9faW50ZXJvcF9yZXF1aXJlX3dpbGRjYXJkXCIpO1xuY29uc3QgX3JlYWN0ID0gLyojX19QVVJFX18qLyBfaW50ZXJvcF9yZXF1aXJlX3dpbGRjYXJkLl8ocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IF9zaWRlZWZmZWN0ID0gLyojX19QVVJFX18qLyBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuXyhyZXF1aXJlKFwiLi9zaWRlLWVmZmVjdFwiKSk7XG5jb25zdCBfYW1wY29udGV4dCA9IHJlcXVpcmUoXCIuL2FtcC1jb250ZXh0XCIpO1xuY29uc3QgX2hlYWRtYW5hZ2VyY29udGV4dCA9IHJlcXVpcmUoXCIuL2hlYWQtbWFuYWdlci1jb250ZXh0XCIpO1xuY29uc3QgX2FtcG1vZGUgPSByZXF1aXJlKFwiLi9hbXAtbW9kZVwiKTtcbmNvbnN0IF93YXJub25jZSA9IHJlcXVpcmUoXCIuL3V0aWxzL3dhcm4tb25jZVwiKTtcblxuZnVuY3Rpb24gZGVmYXVsdEhlYWQoaW5BbXBNb2RlKSB7XG4gICAgaWYgKGluQW1wTW9kZSA9PT0gdm9pZCAwKSBpbkFtcE1vZGUgPSBmYWxzZTtcbiAgICBjb25zdCBoZWFkID0gW1xuICAgICAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGNoYXJTZXQ6IFwidXRmLThcIlxuICAgICAgICB9KVxuICAgIF07XG4gICAgaWYgKCFpbkFtcE1vZGUpIHtcbiAgICAgICAgaGVhZC5wdXNoKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgbmFtZTogXCJ2aWV3cG9ydFwiLFxuICAgICAgICAgICAgY29udGVudDogXCJ3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIHJldHVybiBoZWFkO1xufVxuZnVuY3Rpb24gb25seVJlYWN0RWxlbWVudChsaXN0LCBjaGlsZCkge1xuICAgIC8vIFJlYWN0IGNoaWxkcmVuIGNhbiBiZSBcInN0cmluZ1wiIG9yIFwibnVtYmVyXCIgaW4gdGhpcyBjYXNlIHdlIGlnbm9yZSB0aGVtIGZvciBiYWNrd2FyZHMgY29tcGF0XG4gICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgY2hpbGQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICAgIC8vIEFkZHMgc3VwcG9ydCBmb3IgUmVhY3QuRnJhZ21lbnRcbiAgICBpZiAoY2hpbGQudHlwZSA9PT0gX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QuY29uY2F0KC8vIEB0cy1leHBlY3QtZXJyb3IgQHR5cGVzL3JlYWN0IGRvZXMgbm90IHJlbW92ZSBmcmFnbWVudHMgYnV0IHRoaXMgY291bGQgYWxzbyByZXR1cm4gUmVhY3RQb3J0YWxbXVxuICAgICAgICBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkLnByb3BzLmNoaWxkcmVuKS5yZWR1Y2UoLy8gQHRzLWV4cGVjdC1lcnJvciBAdHlwZXMvcmVhY3QgZG9lcyBub3QgcmVtb3ZlIGZyYWdtZW50cyBidXQgdGhpcyBjb3VsZCBhbHNvIHJldHVybiBSZWFjdFBvcnRhbFtdXG4gICAgICAgIChmcmFnbWVudExpc3QsIGZyYWdtZW50Q2hpbGQpPT57XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdC5jb25jYXQoZnJhZ21lbnRDaGlsZCk7XG4gICAgICAgIH0sIFtdKSk7XG4gICAgfVxuICAgIHJldHVybiBsaXN0LmNvbmNhdChjaGlsZCk7XG59XG5jb25zdCBNRVRBVFlQRVMgPSBbXG4gICAgXCJuYW1lXCIsXG4gICAgXCJodHRwRXF1aXZcIixcbiAgICBcImNoYXJTZXRcIixcbiAgICBcIml0ZW1Qcm9wXCJcbl07XG4vKlxuIHJldHVybnMgYSBmdW5jdGlvbiBmb3IgZmlsdGVyaW5nIGhlYWQgY2hpbGQgZWxlbWVudHNcbiB3aGljaCBzaG91bGRuJ3QgYmUgZHVwbGljYXRlZCwgbGlrZSA8dGl0bGUvPlxuIEFsc28gYWRkcyBzdXBwb3J0IGZvciBkZWR1cGxpY2F0ZWQgYGtleWAgcHJvcGVydGllc1xuKi8gZnVuY3Rpb24gdW5pcXVlKCkge1xuICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgdGFncyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBtZXRhVHlwZXMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgbWV0YUNhdGVnb3JpZXMgPSB7fTtcbiAgICByZXR1cm4gKGgpPT57XG4gICAgICAgIGxldCBpc1VuaXF1ZSA9IHRydWU7XG4gICAgICAgIGxldCBoYXNLZXkgPSBmYWxzZTtcbiAgICAgICAgaWYgKGgua2V5ICYmIHR5cGVvZiBoLmtleSAhPT0gXCJudW1iZXJcIiAmJiBoLmtleS5pbmRleE9mKFwiJFwiKSA+IDApIHtcbiAgICAgICAgICAgIGhhc0tleSA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBoLmtleS5zbGljZShoLmtleS5pbmRleE9mKFwiJFwiKSArIDEpO1xuICAgICAgICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBrZXlzLmFkZChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcbiAgICAgICAgc3dpdGNoKGgudHlwZSl7XG4gICAgICAgICAgICBjYXNlIFwidGl0bGVcIjpcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlXCI6XG4gICAgICAgICAgICAgICAgaWYgKHRhZ3MuaGFzKGgudHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YWdzLmFkZChoLnR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtZXRhXCI6XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMCwgbGVuID0gTUVUQVRZUEVTLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YXR5cGUgPSBNRVRBVFlQRVNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghaC5wcm9wcy5oYXNPd25Qcm9wZXJ0eShtZXRhdHlwZSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWV0YXR5cGUgPT09IFwiY2hhclNldFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWV0YVR5cGVzLmhhcyhtZXRhdHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhVHlwZXMuYWRkKG1ldGF0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gaC5wcm9wc1ttZXRhdHlwZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gbWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdIHx8IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobWV0YXR5cGUgIT09IFwibmFtZVwiIHx8ICFoYXNLZXkpICYmIGNhdGVnb3JpZXMuaGFzKGNhdGVnb3J5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gPSBjYXRlZ29yaWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1VuaXF1ZTtcbiAgICB9O1xufVxuLyoqXG4gKlxuICogQHBhcmFtIGhlYWRDaGlsZHJlbkVsZW1lbnRzIExpc3Qgb2YgY2hpbGRyZW4gb2YgPEhlYWQ+XG4gKi8gZnVuY3Rpb24gcmVkdWNlQ29tcG9uZW50cyhoZWFkQ2hpbGRyZW5FbGVtZW50cywgcHJvcHMpIHtcbiAgICBjb25zdCB7IGluQW1wTW9kZSAgfSA9IHByb3BzO1xuICAgIHJldHVybiBoZWFkQ2hpbGRyZW5FbGVtZW50cy5yZWR1Y2Uob25seVJlYWN0RWxlbWVudCwgW10pLnJldmVyc2UoKS5jb25jYXQoZGVmYXVsdEhlYWQoaW5BbXBNb2RlKS5yZXZlcnNlKCkpLmZpbHRlcih1bmlxdWUoKSkucmV2ZXJzZSgpLm1hcCgoYywgaSk9PntcbiAgICAgICAgY29uc3Qga2V5ID0gYy5rZXkgfHwgaTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCIgJiYgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmICFpbkFtcE1vZGUpIHtcbiAgICAgICAgICAgIGlmIChjLnR5cGUgPT09IFwibGlua1wiICYmIGMucHJvcHNbXCJocmVmXCJdICYmIC8vIFRPRE8ocHJhdGVla2JoQCk6IFJlcGxhY2UgdGhpcyB3aXRoIGNvbnN0IGZyb20gYGNvbnN0YW50c2Agd2hlbiB0aGUgdHJlZSBzaGFraW5nIHdvcmtzLlxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3NcIixcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L1wiXG4gICAgICAgICAgICBdLnNvbWUoKHVybCk9PmMucHJvcHNbXCJocmVmXCJdLnN0YXJ0c1dpdGgodXJsKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uYy5wcm9wcyB8fCB7fVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbXCJkYXRhLWhyZWZcIl0gPSBuZXdQcm9wc1tcImhyZWZcIl07XG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbXCJocmVmXCJdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGlzIGF0dHJpYnV0ZSB0byBtYWtlIGl0IGVhc3kgdG8gaWRlbnRpZnkgb3B0aW1pemVkIHRhZ3NcbiAgICAgICAgICAgICAgICBuZXdQcm9wc1tcImRhdGEtb3B0aW1pemVkLWZvbnRzXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgICAgICAvLyBvbWl0IEpTT04tTEQgc3RydWN0dXJlZCBkYXRhIHNuaXBwZXRzIGZyb20gdGhlIHdhcm5pbmdcbiAgICAgICAgICAgIGlmIChjLnR5cGUgPT09IFwic2NyaXB0XCIgJiYgYy5wcm9wc1tcInR5cGVcIl0gIT09IFwiYXBwbGljYXRpb24vbGQranNvblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjTWVzc2FnZSA9IGMucHJvcHNbXCJzcmNcIl0gPyAnPHNjcmlwdD4gdGFnIHdpdGggc3JjPVwiJyArIGMucHJvcHNbXCJzcmNcIl0gKyAnXCInIDogXCJpbmxpbmUgPHNjcmlwdD5cIjtcbiAgICAgICAgICAgICAgICAoMCwgX3dhcm5vbmNlLndhcm5PbmNlKShcIkRvIG5vdCBhZGQgPHNjcmlwdD4gdGFncyB1c2luZyBuZXh0L2hlYWQgKHNlZSBcIiArIHNyY01lc3NhZ2UgKyBcIikuIFVzZSBuZXh0L3NjcmlwdCBpbnN0ZWFkLiBcXG5TZWUgbW9yZSBpbmZvIGhlcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLXNjcmlwdC10YWdzLWluLWhlYWQtY29tcG9uZW50XCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjLnR5cGUgPT09IFwibGlua1wiICYmIGMucHJvcHNbXCJyZWxcIl0gPT09IFwic3R5bGVzaGVldFwiKSB7XG4gICAgICAgICAgICAgICAgKDAsIF93YXJub25jZS53YXJuT25jZSkoJ0RvIG5vdCBhZGQgc3R5bGVzaGVldHMgdXNpbmcgbmV4dC9oZWFkIChzZWUgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiPiB0YWcgd2l0aCBocmVmPVwiJyArIGMucHJvcHNbXCJocmVmXCJdICsgJ1wiKS4gVXNlIERvY3VtZW50IGluc3RlYWQuIFxcblNlZSBtb3JlIGluZm8gaGVyZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbm8tc3R5bGVzaGVldHMtaW4taGVhZC1jb21wb25lbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYywge1xuICAgICAgICAgICAga2V5XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpbmplY3RzIGVsZW1lbnRzIHRvIGA8aGVhZD5gIG9mIHlvdXIgcGFnZS5cbiAqIFRvIGF2b2lkIGR1cGxpY2F0ZWQgYHRhZ3NgIGluIGA8aGVhZD5gIHlvdSBjYW4gdXNlIHRoZSBga2V5YCBwcm9wZXJ0eSwgd2hpY2ggd2lsbCBtYWtlIHN1cmUgZXZlcnkgdGFnIGlzIG9ubHkgcmVuZGVyZWQgb25jZS5cbiAqLyBmdW5jdGlvbiBIZWFkKHBhcmFtKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gIH0gPSBwYXJhbTtcbiAgICBjb25zdCBhbXBTdGF0ZSA9ICgwLCBfcmVhY3QudXNlQ29udGV4dCkoX2FtcGNvbnRleHQuQW1wU3RhdGVDb250ZXh0KTtcbiAgICBjb25zdCBoZWFkTWFuYWdlciA9ICgwLCBfcmVhY3QudXNlQ29udGV4dCkoX2hlYWRtYW5hZ2VyY29udGV4dC5IZWFkTWFuYWdlckNvbnRleHQpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3NpZGVlZmZlY3QuZGVmYXVsdCwge1xuICAgICAgICByZWR1Y2VDb21wb25lbnRzVG9TdGF0ZTogcmVkdWNlQ29tcG9uZW50cyxcbiAgICAgICAgaGVhZE1hbmFnZXI6IGhlYWRNYW5hZ2VyLFxuICAgICAgICBpbkFtcE1vZGU6ICgwLCBfYW1wbW9kZS5pc0luQW1wTW9kZSkoYW1wU3RhdGUpXG4gICAgfSwgY2hpbGRyZW4pO1xufVxuY29uc3QgX2RlZmF1bHQgPSBIZWFkO1xuXG5pZiAoKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdvYmplY3QnICYmIGV4cG9ydHMuZGVmYXVsdCAhPT0gbnVsbCkpICYmIHR5cGVvZiBleHBvcnRzLmRlZmF1bHQuX19lc01vZHVsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMuZGVmYXVsdCwgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuICBPYmplY3QuYXNzaWduKGV4cG9ydHMuZGVmYXVsdCwgZXhwb3J0cyk7XG4gIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWFkLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIm1vZHVsZSIsImRlZmF1bHRIZWFkIiwiZGVmYXVsdCIsIl9leHBvcnQiLCJ0YXJnZXQiLCJhbGwiLCJuYW1lIiwiZW51bWVyYWJsZSIsImdldCIsIl9kZWZhdWx0IiwiX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0IiwicmVxdWlyZSIsIl9pbnRlcm9wX3JlcXVpcmVfd2lsZGNhcmQiLCJfcmVhY3QiLCJfIiwiX3NpZGVlZmZlY3QiLCJfYW1wY29udGV4dCIsIl9oZWFkbWFuYWdlcmNvbnRleHQiLCJfYW1wbW9kZSIsIl93YXJub25jZSIsImluQW1wTW9kZSIsImhlYWQiLCJjcmVhdGVFbGVtZW50IiwiY2hhclNldCIsInB1c2giLCJjb250ZW50Iiwib25seVJlYWN0RWxlbWVudCIsImxpc3QiLCJjaGlsZCIsInR5cGUiLCJGcmFnbWVudCIsImNvbmNhdCIsIkNoaWxkcmVuIiwidG9BcnJheSIsInByb3BzIiwiY2hpbGRyZW4iLCJyZWR1Y2UiLCJmcmFnbWVudExpc3QiLCJmcmFnbWVudENoaWxkIiwiTUVUQVRZUEVTIiwidW5pcXVlIiwia2V5cyIsIlNldCIsInRhZ3MiLCJtZXRhVHlwZXMiLCJtZXRhQ2F0ZWdvcmllcyIsImgiLCJpc1VuaXF1ZSIsImhhc0tleSIsImtleSIsImluZGV4T2YiLCJzbGljZSIsImhhcyIsImFkZCIsImkiLCJsZW4iLCJsZW5ndGgiLCJtZXRhdHlwZSIsImhhc093blByb3BlcnR5IiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwicmVkdWNlQ29tcG9uZW50cyIsImhlYWRDaGlsZHJlbkVsZW1lbnRzIiwicmV2ZXJzZSIsImZpbHRlciIsIm1hcCIsImMiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX09QVElNSVpFX0ZPTlRTIiwic29tZSIsInVybCIsInN0YXJ0c1dpdGgiLCJuZXdQcm9wcyIsInVuZGVmaW5lZCIsImNsb25lRWxlbWVudCIsInNyY01lc3NhZ2UiLCJ3YXJuT25jZSIsIkhlYWQiLCJwYXJhbSIsImFtcFN0YXRlIiwidXNlQ29udGV4dCIsIkFtcFN0YXRlQ29udGV4dCIsImhlYWRNYW5hZ2VyIiwiSGVhZE1hbmFnZXJDb250ZXh0IiwicmVkdWNlQ29tcG9uZW50c1RvU3RhdGUiLCJpc0luQW1wTW9kZSIsIl9fZXNNb2R1bGUiLCJhc3NpZ24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/shared/lib/head.js\n");
=======
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    defaultHead: function() {
        return defaultHead;
    },
    default: function() {
        return _default;
    }
});
const _interop_require_default = __webpack_require__(167);
const _interop_require_wildcard = __webpack_require__(8760);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(6689));
const _sideeffect = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2470));
const _ampcontext = __webpack_require__(3918);
const _headmanagercontext = __webpack_require__(2796);
const _ampmode = __webpack_require__(5732);
const _warnonce = __webpack_require__(618);
function defaultHead(inAmpMode) {
    if (inAmpMode === void 0) inAmpMode = false;
    const head = [
        /*#__PURE__*/ _react.default.createElement("meta", {
            charSet: "utf-8"
        })
    ];
    if (!inAmpMode) {
        head.push(/*#__PURE__*/ _react.default.createElement("meta", {
            name: "viewport",
            content: "width=device-width"
        }));
    }
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === "string" || typeof child === "number") {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    "name",
    "httpEquiv",
    "charSet",
    "itemProp"
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf("$") + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case "title":
            case "base":
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case "meta":
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === "charSet") {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== "name" || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements, props) {
    const { inAmpMode } = props;
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ( true && !inAmpMode) {
            if (c.type === "link" && c.props["href"] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
            [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/"
            ].some((url)=>c.props["href"].startsWith(url))) {
                const newProps = {
                    ...c.props || {}
                };
                newProps["data-href"] = newProps["href"];
                newProps["href"] = undefined;
                // Add this attribute to make it easy to identify optimized tags
                newProps["data-optimized-fonts"] = true;
                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
            }
        }
        if (false) {}
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head(param) {
    let { children } = param;
    const ampState = (0, _react.useContext)(_ampcontext.AmpStateContext);
    const headManager = (0, _react.useContext)(_headmanagercontext.HeadManagerContext);
    return /*#__PURE__*/ _react.default.createElement(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        inAmpMode: (0, _ampmode.isInAmpMode)(ampState)
    }, children);
}
const _default = Head;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map

>>>>>>> bf923e4f809b1f599dfcd674928dce2c24606d2a

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 167:
/***/ ((__unused_webpack_module, exports) => {

<<<<<<< HEAD
eval("\n\nexports._ = exports._interop_require_default = _interop_require_default;\nfunction _interop_require_default(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuY2pzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLFNBQVMsR0FBRyxnQ0FBZ0M7QUFDNUM7QUFDQSwyQ0FBMkM7QUFDM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuY2pzPzk4ZjkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuXyA9IGV4cG9ydHMuX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0ID0gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0O1xuZnVuY3Rpb24gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\n");
=======


exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

>>>>>>> bf923e4f809b1f599dfcd674928dce2c24606d2a

/***/ }),

/***/ 8760:
/***/ ((__unused_webpack_module, exports) => {

<<<<<<< HEAD
eval("\n\nfunction _getRequireWildcardCache(nodeInterop) {\n    if (typeof WeakMap !== \"function\") return null;\n\n    var cacheBabelInterop = new WeakMap();\n    var cacheNodeInterop = new WeakMap();\n\n    return (_getRequireWildcardCache = function(nodeInterop) {\n        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;\n    })(nodeInterop);\n}\nexports._ = exports._interop_require_wildcard = _interop_require_wildcard;\nfunction _interop_require_wildcard(obj, nodeInterop) {\n    if (!nodeInterop && obj && obj.__esModule) return obj;\n    if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") return { default: obj };\n\n    var cache = _getRequireWildcardCache(nodeInterop);\n\n    if (cache && cache.has(obj)) return cache.get(obj);\n\n    var newObj = {};\n    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;\n\n    for (var key in obj) {\n        if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) {\n            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;\n            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);\n            else newObj[key] = obj[key];\n        }\n    }\n\n    newObj.default = obj;\n\n    if (cache) cache.set(obj, newObj);\n\n    return newObj;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX3dpbGRjYXJkLmNqcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFNBQVMsR0FBRyxpQ0FBaUM7QUFDN0M7QUFDQTtBQUNBLHVGQUF1Rjs7QUFFdkY7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9janMvX2ludGVyb3BfcmVxdWlyZV93aWxkY2FyZC5janM/NjAwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuXG4gICAgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTtcbiAgICB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgICByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uKG5vZGVJbnRlcm9wKSB7XG4gICAgICAgIHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDtcbiAgICB9KShub2RlSW50ZXJvcCk7XG59XG5leHBvcnRzLl8gPSBleHBvcnRzLl9pbnRlcm9wX3JlcXVpcmVfd2lsZGNhcmQgPSBfaW50ZXJvcF9yZXF1aXJlX3dpbGRjYXJkO1xuZnVuY3Rpb24gX2ludGVyb3BfcmVxdWlyZV93aWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7XG4gICAgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHJldHVybiBvYmo7XG4gICAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHsgZGVmYXVsdDogb2JqIH07XG5cbiAgICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApO1xuXG4gICAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG5cbiAgICB2YXIgbmV3T2JqID0ge307XG4gICAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICAgICAgICBlbHNlIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdPYmouZGVmYXVsdCA9IG9iajtcblxuICAgIGlmIChjYWNoZSkgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcblxuICAgIHJldHVybiBuZXdPYmo7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs\n");
=======


function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();

    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
exports._ = exports._interop_require_wildcard = _interop_require_wildcard;
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) return cache.get(obj);

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }

    newObj.default = obj;

    if (cache) cache.set(obj, newObj);

    return newObj;
}

>>>>>>> bf923e4f809b1f599dfcd674928dce2c24606d2a

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
<<<<<<< HEAD
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F_error&absolutePagePath=private-next-pages%2F_error&preferredRegion=&middlewareConfig=e30%3D!"));
=======
var __webpack_exports__ = (__webpack_exec__(3499));
>>>>>>> bf923e4f809b1f599dfcd674928dce2c24606d2a
module.exports = __webpack_exports__;

})();