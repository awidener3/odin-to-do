/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({
/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

:root {
	--lightgray: rgb(241, 242, 244);
	--darkgray: rgb(189, 189, 189);
	--yellow: rgb(240, 228, 147);
	--green: rgb(162, 241, 152);
	--red: rgb(230, 141, 152);
	--lightblue: rgb(157, 224, 241);
	--blue: rgb(56, 128, 150);
	--black: rgb(49, 49, 49);
}

body {
	background: var(--lightgray);
	height: 100vh;
	display: grid;
	grid-template-columns: 200px 1fr;
	grid-template-rows: 1fr max-content;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	color: var(--black);
}

button,
select {
	cursor: pointer;
	font-size: 0.8rem;
	padding: 2px 5px;
	border-radius: 10px;
	border: none;
}

button {
	background: var(--darkgray);
}

select {
	background: var(--darkgray);
}

aside {
	grid-column: 1 / 2;
	grid-row: 1 / -1;
	background: white;
	display: flex;
	flex-direction: column;
}

aside h1 {
	margin: 10px 0;
	text-align: center;
}

aside h2 {
	font-size: 1rem;
	color: var(--blue);
	margin-left: 10px;
	margin-top: 10px;
}

aside > #projectForm > #filterList > li,
aside > #projectForm > #projectList > li {
	font-size: 0.8rem;
}

aside > #projectForm > #filterList,
aside > #projectForm > #projectList {
	list-style-type: none;
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding: 10px;
}

aside > #projectForm > #filterList > li > input[type='radio'],
aside > #projectForm > #projectList > li > input[type='radio'] {
	opacity: 0;
	position: absolute;
}

aside > #projectForm > #filterList > li > label,
aside > #projectForm > #projectList > li > label {
	cursor: pointer;
	width: 100%;
	display: inline-block;
	padding: 5px 10px;
	border-radius: 10px;
	transition: background 0.2s;
}

aside > #projectForm > #filterList > li > input[type='radio']:focus + label,
aside > #projectForm > #projectList > li > input[type='radio']:focus + label {
	outline: 1px dotted #212121;
	outline: 5px auto -webkit-focus-ring-color;
}

aside > #projectForm > #filterList > li > label:hover,
aside > #projectForm > #projectList > li > label:hover {
	background: var(--darkgray);
}

aside > #projectForm > #filterList > li > input[type='radio']:checked + label,
aside > #projectForm > #projectList > li > input[type='radio']:checked + label {
	background: var(--blue);
	color: white;
	font-weight: bold;
}

aside > #addProject {
	align-self: start;
	margin: 10px;
	font-size: 1rem;
	background: none;
	color: var(--blue);
	font-weight: bold;
}

main {
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 15px;
}

main > header {
	display: flex;
	justify-content: space-between;
}

main > header > h3 {
	color: var(--blue);
}

/* edit icon */
main > header > h3::after {
	margin-left: 10px;
	color: var(--darkgray);
	font-family: 'Font Awesome 5 Free';
	font-weight: 900;
	content: '\\f044';
}

main > header > menu {
	display: flex;
	gap: 10px;
	list-style-type: none;
}

main > header > menu > li > button {
	background: none;
	font-size: 1rem;
	color: var(--blue);
	font-weight: bold;
}

main > header > menu > li > #deleteProject {
	background: none;
	color: var(--black);
}

/* todos */
#todoList {
	list-style-type: none;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.todo {
	display: flex;
	align-items: center;
	gap: 10px;
}

.todo > input[type='checkbox'] {
	width: 20px;
	height: 20px;
}

.todo > article {
	flex: 1;
	display: grid;
	grid-template-columns: 15px 1fr;
	grid-template-rows: max-content 1fr;
	outline: 2px solid var(--darkgray);
	background: white;
	color: var(--black);
	border-radius: 15px;
}

.todo > article > .priority-span {
	display: block;
	content: '';
	background: var(--darkgray);
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
	grid-row: 1 / -1;
	width: 100%;
	height: 100%;
}

.todo > article > header {
	padding: 5px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 0.9rem;
	margin: 2px 5px;
}

.todo > article > header > menu {
	list-style-type: none;
	display: flex;
	gap: 5px;
}

.todo > article > header > menu > li > button {
	background: none;
}

.todo > article > p {
	margin: 5px;
	font-size: 0.9rem;
	padding: 3px;
}

/* low priority */
.todo > article.low > .priority-span,
.todo > article.low > header > menu > li > select {
	background: var(--lightblue);
}

.todo > article.low {
	outline: 2px solid var(--lightblue);
}

/* medium priority */
.todo > article.medium > .priority-span,
.todo > article.medium > header > menu > li > select {
	background: var(--yellow);
}

.todo > article.medium {
	outline: 2px solid var(--yellow);
}

/* high priority */
.todo > article.high > .priority-span,
.todo > article.high > header > menu > li > select {
	background: var(--red);
}

.todo > article.high {
	outline: 2px solid var(--red);
}

/* completed */
.todo > article.completed {
	outline: 2px solid var(--darkgray);
}

.todo > article.completed * {
	color: var(--darkgray);
}

.todo > article.completed > .priority-span,
.todo > article.completed > header > menu > li > select {
	color: var(--lightgray);
	background: var(--darkgray);
}

.todo > article.completed > header > h4,
.todo > article.completed > p {
	text-decoration: line-through;
}

footer {
	display: flex;
	justify-content: center;
	padding: 10px;
	gap: 10px;
	font-size: 0.8rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n:root {\n\t--lightgray: rgb(241, 242, 244);\n\t--darkgray: rgb(189, 189, 189);\n\t--yellow: rgb(240, 228, 147);\n\t--green: rgb(162, 241, 152);\n\t--red: rgb(230, 141, 152);\n\t--lightblue: rgb(157, 224, 241);\n\t--blue: rgb(56, 128, 150);\n\t--black: rgb(49, 49, 49);\n}\n\nbody {\n\tbackground: var(--lightgray);\n\theight: 100vh;\n\tdisplay: grid;\n\tgrid-template-columns: 200px 1fr;\n\tgrid-template-rows: 1fr max-content;\n\tfont-family: Verdana, Geneva, Tahoma, sans-serif;\n\tcolor: var(--black);\n}\n\nbutton,\nselect {\n\tcursor: pointer;\n\tfont-size: 0.8rem;\n\tpadding: 2px 5px;\n\tborder-radius: 10px;\n\tborder: none;\n}\n\nbutton {\n\tbackground: var(--darkgray);\n}\n\nselect {\n\tbackground: var(--darkgray);\n}\n\naside {\n\tgrid-column: 1 / 2;\n\tgrid-row: 1 / -1;\n\tbackground: white;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\naside h1 {\n\tmargin: 10px 0;\n\ttext-align: center;\n}\n\naside h2 {\n\tfont-size: 1rem;\n\tcolor: var(--blue);\n\tmargin-left: 10px;\n\tmargin-top: 10px;\n}\n\naside > #projectForm > #filterList > li,\naside > #projectForm > #projectList > li {\n\tfont-size: 0.8rem;\n}\n\naside > #projectForm > #filterList,\naside > #projectForm > #projectList {\n\tlist-style-type: none;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 5px;\n\tpadding: 10px;\n}\n\naside > #projectForm > #filterList > li > input[type='radio'],\naside > #projectForm > #projectList > li > input[type='radio'] {\n\topacity: 0;\n\tposition: absolute;\n}\n\naside > #projectForm > #filterList > li > label,\naside > #projectForm > #projectList > li > label {\n\tcursor: pointer;\n\twidth: 100%;\n\tdisplay: inline-block;\n\tpadding: 5px 10px;\n\tborder-radius: 10px;\n\ttransition: background 0.2s;\n}\n\naside > #projectForm > #filterList > li > input[type='radio']:focus + label,\naside > #projectForm > #projectList > li > input[type='radio']:focus + label {\n\toutline: 1px dotted #212121;\n\toutline: 5px auto -webkit-focus-ring-color;\n}\n\naside > #projectForm > #filterList > li > label:hover,\naside > #projectForm > #projectList > li > label:hover {\n\tbackground: var(--darkgray);\n}\n\naside > #projectForm > #filterList > li > input[type='radio']:checked + label,\naside > #projectForm > #projectList > li > input[type='radio']:checked + label {\n\tbackground: var(--blue);\n\tcolor: white;\n\tfont-weight: bold;\n}\n\naside > #addProject {\n\talign-self: start;\n\tmargin: 10px;\n\tfont-size: 1rem;\n\tbackground: none;\n\tcolor: var(--blue);\n\tfont-weight: bold;\n}\n\nmain {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tpadding: 15px;\n}\n\nmain > header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\nmain > header > h3 {\n\tcolor: var(--blue);\n}\n\n/* edit icon */\nmain > header > h3::after {\n\tmargin-left: 10px;\n\tcolor: var(--darkgray);\n\tfont-family: 'Font Awesome 5 Free';\n\tfont-weight: 900;\n\tcontent: '\\f044';\n}\n\nmain > header > menu {\n\tdisplay: flex;\n\tgap: 10px;\n\tlist-style-type: none;\n}\n\nmain > header > menu > li > button {\n\tbackground: none;\n\tfont-size: 1rem;\n\tcolor: var(--blue);\n\tfont-weight: bold;\n}\n\nmain > header > menu > li > #deleteProject {\n\tbackground: none;\n\tcolor: var(--black);\n}\n\n/* todos */\n#todoList {\n\tlist-style-type: none;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n}\n\n.todo {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n}\n\n.todo > input[type='checkbox'] {\n\twidth: 20px;\n\theight: 20px;\n}\n\n.todo > article {\n\tflex: 1;\n\tdisplay: grid;\n\tgrid-template-columns: 15px 1fr;\n\tgrid-template-rows: max-content 1fr;\n\toutline: 2px solid var(--darkgray);\n\tbackground: white;\n\tcolor: var(--black);\n\tborder-radius: 15px;\n}\n\n.todo > article > .priority-span {\n\tdisplay: block;\n\tcontent: '';\n\tbackground: var(--darkgray);\n\tborder-top-left-radius: 15px;\n\tborder-bottom-left-radius: 15px;\n\tgrid-row: 1 / -1;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.todo > article > header {\n\tpadding: 5px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tfont-size: 0.9rem;\n\tmargin: 2px 5px;\n}\n\n.todo > article > header > menu {\n\tlist-style-type: none;\n\tdisplay: flex;\n\tgap: 5px;\n}\n\n.todo > article > header > menu > li > button {\n\tbackground: none;\n}\n\n.todo > article > p {\n\tmargin: 5px;\n\tfont-size: 0.9rem;\n\tpadding: 3px;\n}\n\n/* low priority */\n.todo > article.low > .priority-span,\n.todo > article.low > header > menu > li > select {\n\tbackground: var(--lightblue);\n}\n\n.todo > article.low {\n\toutline: 2px solid var(--lightblue);\n}\n\n/* medium priority */\n.todo > article.medium > .priority-span,\n.todo > article.medium > header > menu > li > select {\n\tbackground: var(--yellow);\n}\n\n.todo > article.medium {\n\toutline: 2px solid var(--yellow);\n}\n\n/* high priority */\n.todo > article.high > .priority-span,\n.todo > article.high > header > menu > li > select {\n\tbackground: var(--red);\n}\n\n.todo > article.high {\n\toutline: 2px solid var(--red);\n}\n\n/* completed */\n.todo > article.completed {\n\toutline: 2px solid var(--darkgray);\n}\n\n.todo > article.completed * {\n\tcolor: var(--darkgray);\n}\n\n.todo > article.completed > .priority-span,\n.todo > article.completed > header > menu > li > select {\n\tcolor: var(--lightgray);\n\tbackground: var(--darkgray);\n}\n\n.todo > article.completed > header > h4,\n.todo > article.completed > p {\n\ttext-decoration: line-through;\n}\n\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n\tpadding: 10px;\n\tgap: 10px;\n\tfont-size: 0.8rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
	constructor({ id, title, selected }) {
		this.id = id;
		this.title = title;
		this.selected = selected || false;
	}

	build = (element) => {
		const container = document.createElement('li');
		container.classList.add('project');
		container.innerHTML = `
		<input type="radio" name="selectedId" id="${this.id}" value="${this.id}" ${this.selected ? 'checked' : ''}>
		<label for=${this.id}>${this.title}</label>
		`;

		element.append(container);
		this.container = container;
	};

	update = (field, data) => {
		// don't update if the data hasn't changed
		if (this[field] === data) return;

		// format the data
		data = data.trim();

		// update the instance
		this[field] = data;

		// update local storage
		const projects = JSON.parse(localStorage.getItem('projects'));
		for (const item of projects) {
			if (item.id === this.id) item[field] = data;
		}
		localStorage.setItem('projects', JSON.stringify(projects));
	};
}


/***/ }),
