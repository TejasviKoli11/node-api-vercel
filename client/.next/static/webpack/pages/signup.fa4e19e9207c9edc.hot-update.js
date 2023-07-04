/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "../server/models/user.js":
/*!********************************!*\
  !*** ../server/models/user.js ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("const mongoose = __webpack_require__(/*! mongoose */ \"../server/node_modules/mongoose/dist/browser.umd.js\");\r\nconst { Schema, model } = mongoose;\r\n\r\nconst userSchema = new Schema({\r\n    id: {type: String, required:true,unique:true,lowercase:true},\r\n    username: {type:String,required:true,unique:true,lowercase:true},\r\n    firstName: {type:String,required:true},\r\n    lastName: {type:String,required:true},\r\n    password: {type:String,required:true},\r\n    isVerified: {type:Boolean,required:true, default:false},\r\n    lastLogin:{type:Date},\r\n    email:{type:String,required:true},\r\n    //not final\r\n    homegroup: {\r\n        type: mongoose.Schema.Types.ObjectId,\r\n        ref: 'homeGroup',\r\n    },\r\n    role:{type:String, enum:[null,'technician','admin']},\r\n    \r\n\r\n    \r\n\r\n});\r\n\r\n\r\n//middleware\r\nuserSchema.post('save',function(){\r\n\r\n});\r\nconst User = model('User', userSchema)\r\nmodule.exports= User;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vc2VydmVyL21vZGVscy91c2VyLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQixtQkFBTyxDQUFDLHFFQUFVO0FBQ25DLFFBQVEsZ0JBQWdCO0FBQ3hCO0FBQ0E7QUFDQSxTQUFTLHVEQUF1RDtBQUNoRSxlQUFlLHFEQUFxRDtBQUNwRSxnQkFBZ0IsMEJBQTBCO0FBQzFDLGVBQWUsMEJBQTBCO0FBQ3pDLGVBQWUsMEJBQTBCO0FBQ3pDLGlCQUFpQiwwQ0FBMEM7QUFDM0QsZUFBZSxVQUFVO0FBQ3pCLFdBQVcsMEJBQTBCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFVBQVUsOENBQThDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi4vc2VydmVyL21vZGVscy91c2VyLmpzPzBmYWQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XHJcbmNvbnN0IHsgU2NoZW1hLCBtb2RlbCB9ID0gbW9uZ29vc2U7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgICBpZDoge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6dHJ1ZSx1bmlxdWU6dHJ1ZSxsb3dlcmNhc2U6dHJ1ZX0sXHJcbiAgICB1c2VybmFtZToge3R5cGU6U3RyaW5nLHJlcXVpcmVkOnRydWUsdW5pcXVlOnRydWUsbG93ZXJjYXNlOnRydWV9LFxyXG4gICAgZmlyc3ROYW1lOiB7dHlwZTpTdHJpbmcscmVxdWlyZWQ6dHJ1ZX0sXHJcbiAgICBsYXN0TmFtZToge3R5cGU6U3RyaW5nLHJlcXVpcmVkOnRydWV9LFxyXG4gICAgcGFzc3dvcmQ6IHt0eXBlOlN0cmluZyxyZXF1aXJlZDp0cnVlfSxcclxuICAgIGlzVmVyaWZpZWQ6IHt0eXBlOkJvb2xlYW4scmVxdWlyZWQ6dHJ1ZSwgZGVmYXVsdDpmYWxzZX0sXHJcbiAgICBsYXN0TG9naW46e3R5cGU6RGF0ZX0sXHJcbiAgICBlbWFpbDp7dHlwZTpTdHJpbmcscmVxdWlyZWQ6dHJ1ZX0sXHJcbiAgICAvL25vdCBmaW5hbFxyXG4gICAgaG9tZWdyb3VwOiB7XHJcbiAgICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxyXG4gICAgICAgIHJlZjogJ2hvbWVHcm91cCcsXHJcbiAgICB9LFxyXG4gICAgcm9sZTp7dHlwZTpTdHJpbmcsIGVudW06W251bGwsJ3RlY2huaWNpYW4nLCdhZG1pbiddfSxcclxuICAgIFxyXG5cclxuICAgIFxyXG5cclxufSk7XHJcblxyXG5cclxuLy9taWRkbGV3YXJlXHJcbnVzZXJTY2hlbWEucG9zdCgnc2F2ZScsZnVuY3Rpb24oKXtcclxuXHJcbn0pO1xyXG5jb25zdCBVc2VyID0gbW9kZWwoJ1VzZXInLCB1c2VyU2NoZW1hKVxyXG5tb2R1bGUuZXhwb3J0cz0gVXNlcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../server/models/user.js\n"));

/***/ })

});