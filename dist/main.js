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

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
	constructor({ id, title, desc, priority, projectId, completed, dueDate }) {
		this.id = id;
		this.title = title;
		this.desc = desc;
		this.priority = priority;
		this.projectId = projectId || null;
		this.completed = completed;
		this.dueDate = dueDate || '';
		this.container = null;
	}

	build = (element) => {
		const container = document.createElement('li');
		container.classList.add('todo');

		container.innerHTML = `
		<input type="checkbox" class="complete" ${this.completed ? 'checked' : ''}>
		<article class="${this.priority} ${this.completed ? 'completed' : ''}">
			<span class="priority-span"></span>
			<header>
				<h4 class="title" contenteditable>${this.title}</h4>
				
				<menu>
					<li>
						<label for="dueDate" hidden>Due date</label>
						<input name="dueDate" class="dueDate" type="date" value="${this.dueDate}">
					</li>
					<li>
						<label for="priority" hidden>Priority</label>
						<select class="priority">
							<option value="low" ${this.priority === 'low' ? 'selected' : ''}>Low</option>
							<option value="medium" ${this.priority === 'medium' ? 'selected' : ''}>Medium</option>
							<option value="high" ${this.priority === 'high' ? 'selected' : ''}>High</option>
						</select>
					</li>
					<li>
						<button type="button" class="delete"><i class="fa-solid fa-trash"></i></button>
					</li>
				</menu>
			</header>
			<p class="desc" contenteditable>${this.desc}</p>
		</article>
		`;

		element.append(container);
		this.container = container;

		const article = container.querySelector('article');
		const titleEl = article.querySelector('.title');
		const dueDateEl = article.querySelector('.dueDate');
		const descriptionEl = article.querySelector('.desc');
		const priorityEl = article.querySelector('.priority');
		const deleteBtn = article.querySelector('.delete');
		const completeCheckbox = container.querySelector('.complete');

		// update completion status
		completeCheckbox.addEventListener('change', (e) => {
			this.update('completed', e.target.checked);
			article.classList.toggle('completed', e.target.checked);
		});

		// update names
		titleEl.addEventListener('focusout', (e) => this.update('title', e.target.textContent));
		dueDateEl.addEventListener('input', (e) => this.update('dueDate', e.target.value));
		descriptionEl.addEventListener('focusout', (e) => this.update('desc', e.target.textContent));

		// update priority
		priorityEl.addEventListener('input', (e) => {
			article.classList.remove(this.priority);
			article.classList.add(e.target.value);
			this.update('priority', e.target.value);
		});

		deleteBtn.addEventListener('click', this.delete);
	};

	update = (field, data) => {
		// don't update if the data hasn't changed
		if (this[field] === data) return;

		// format the data
		if (typeof data === 'string') data = data.trim();

		// update the instance
		this[field] = data;

		// update local storage
		const todos = JSON.parse(localStorage.getItem('todos'));
		for (const item of todos) {
			if (item.id === this.id) item[field] = data;
		}
		localStorage.setItem('todos', JSON.stringify(todos));
	};

	delete = () => {
		const todos = JSON.parse(localStorage.getItem('todos'));
		let updatedTodos = todos.filter((todo) => todo.id !== this.id);
		localStorage.setItem('todos', JSON.stringify(updatedTodos));
		this.container.remove();
	};
}


/***/ }),

/***/ "./node_modules/date-fns/isAfter.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isAfter.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isAfter: () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date that should be after the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter(date, dateToCompare) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _dateToCompare = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateToCompare);
  return _date.getTime() > _dateToCompare.getTime();
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isAfter);


/***/ }),

/***/ "./node_modules/date-fns/isBefore.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/isBefore.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isBefore: () => (/* binding */ isBefore)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore(date, dateToCompare) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _dateToCompare = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateToCompare);
  return +_date < +_dateToCompare;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBefore);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todo */ "./src/Todo.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isAfter.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isBefore.mjs");





const sampleTodos = [
	{
		id: 0,
		title: 'Todo #1',
		desc: "A todo that I haven't started",
		priority: 'low',
		completed: false,
		dueDate: '2025-02-11',
		projectId: 'default',
	},
	{
		id: 1,
		title: 'Todo #2',
		desc: "A todo that I'm doing.",
		priority: 'medium',
		completed: false,
		dueDate: '',
		projectId: '0',
	},
	{
		id: 2,
		title: 'Todo #3',
		desc: "A todo that I've done.",
		priority: 'high',
		completed: false,
		dueDate: '',
		projectId: '0',
	},
];

const sampleProjects = [
	{
		id: 'default',
		title: 'Default',
		selected: true,
	},
	{
		id: '0',
		title: 'Project 1',
		selected: false,
	},
];

if (!localStorage.getItem('todos')) {
	localStorage.setItem('todos', JSON.stringify(sampleTodos));
}

if (!localStorage.getItem('projects')) {
	localStorage.setItem('projects', JSON.stringify(sampleProjects));
}

class UI {
	constructor() {
		this.aside = document.querySelector('aside');
		this.todoListEl = document.querySelector('#todoList');
		this.addTodoBtn = document.querySelector('#addTodo');
		this.addProjectBtn = document.querySelector('#addProject');
		this.deleteProjectBtn = document.querySelector('#deleteProject');
		this.projectListEl = document.querySelector('#projectList');
		this.filterListEl = document.querySelector('#filterList');
		this.projectForm = document.querySelector('#projectForm');
		this.projectName = document.querySelector('#projectName');

		this.todos = JSON.parse(localStorage.getItem('todos'));
		this.projects = JSON.parse(localStorage.getItem('projects'));
		this.currentProjectId = this.projects.find((project) => project.selected).id || 'default';
	}

	load = () => {
		// #region todos
		this.setTodos();

		this.addTodoBtn.addEventListener('click', () => {
			const defaultTodo = {
				id: crypto.randomUUID(),
				title: 'New todo',
				desc: 'Add a description...',
				priority: 'low',
				projectId: this.currentProjectId,
			};

			const todos = JSON.parse(localStorage.getItem('todos'));
			todos.push(defaultTodo);
			localStorage.setItem('todos', JSON.stringify(todos));

			const newTodo = new _Todo__WEBPACK_IMPORTED_MODULE_2__["default"](defaultTodo);
			newTodo.build(this.todoListEl);
		});
		// #endregion

		// #region projects
		this.setProjects();

		// rename a project
		this.projectName.addEventListener('focusout', this.renameProject);

		// add a project
		this.addProjectBtn.addEventListener('click', this.addProject);

		// delete a project
		this.deleteProjectBtn.addEventListener('click', this.deleteProject);

		// select a project
		this.projectForm.addEventListener('change', (e) => {
			e.preventDefault();

			if (e.target.closest('ul').id === 'filterList') {
				// deselect anything from projectList
				const checkedItem = this.projectListEl.querySelector('input[type="radio"]:checked');
				if (checkedItem) checkedItem.checked = false;
			} else {
				// deselect anything from filterList
				const checkedItem = this.filterListEl.querySelector('input[type="radio"]:checked');
				if (checkedItem) checkedItem.checked = false;
			}

			const formData = new FormData(this.projectForm);

			// get todos by selected id
			if (formData.get('selectedId')) {
				// show project name
				this.projectName.style.visibility = 'visible';

				const newId = formData.get('selectedId');
				const projects = JSON.parse(localStorage.getItem('projects'));
				for (const project of projects) {
					if (project.id === this.currentProjectId) project.selected = false;
					if (project.id === newId) project.selected = true;
				}
				this.projects = projects;
				localStorage.setItem('projects', JSON.stringify(projects));

				this.currentProjectId = newId;
				const projectName = this.projects.find((project) => project.id === this.currentProjectId).title;
				this.projectName.textContent = projectName;
				this.setTodos();
			}

			// get todos by sortBy
			if (formData.get('sortBy')) {
				// hide project name
				this.projectName.style.visibility = 'hidden';

				this.todoListEl.innerHTML = '';
				this.todos = JSON.parse(localStorage.getItem('todos'));
				const todaysDate = new Date();

				switch (formData.get('sortBy')) {
					case 'unfinished':
						// add todos to content area
						for (const todo of this.todos) {
							if (!todo.completed) {
								const todoObj = new _Todo__WEBPACK_IMPORTED_MODULE_2__["default"](todo);
								todoObj.build(this.todoListEl);
							}
						}
						break;

					case 'completed':
						// add todos to content area
						for (const todo of this.todos) {
							if (todo.completed) {
								const todoObj = new _Todo__WEBPACK_IMPORTED_MODULE_2__["default"](todo);
								todoObj.build(this.todoListEl);
							}
						}
						break;

					case 'upcoming':
						// add todos to content area
						for (const todo of this.todos) {
							const todoDate = new Date(todo.dueDate);

							if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isAfter)(todoDate, todaysDate)) {
								const todoObj = new _Todo__WEBPACK_IMPORTED_MODULE_2__["default"](todo);
								todoObj.build(this.todoListEl);
							}
						}
						break;

					case 'overdue':
						// add todos to content area
						for (const todo of this.todos) {
							const todoDate = new Date(todo.dueDate);

							if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isBefore)(todoDate, todaysDate) && !todo.completed) {
								const todoObj = new _Todo__WEBPACK_IMPORTED_MODULE_2__["default"](todo);
								todoObj.build(this.todoListEl);
							}
						}
						break;

					default:
						// add todos to content area
						for (const todo of this.todos) {
							const todoObj = new _Todo__WEBPACK_IMPORTED_MODULE_2__["default"](todo);
							todoObj.build(this.todoListEl);
						}
						break;
				}
			}

			// get todos by selected filter
		});
		// #endregion
	};

	setTodos = () => {
		this.todoListEl.innerHTML = '';
		this.todos = JSON.parse(localStorage.getItem('todos'));

		const currentProjectTodos = this.todos.filter((todo) => todo.projectId === this.currentProjectId);

		// add todos to content area
		for (const todo of currentProjectTodos) {
			const todoObj = new _Todo__WEBPACK_IMPORTED_MODULE_2__["default"](todo);
			todoObj.build(this.todoListEl);
		}
	};

	addProject = () => {
		const defaultProject = {
			id: crypto.randomUUID(),
			title: 'New Project',
		};

		const projects = JSON.parse(localStorage.getItem('projects'));
		projects.push(defaultProject);
		localStorage.setItem('projects', JSON.stringify(projects));

		const newProject = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](defaultProject);
		newProject.build(this.projectListEl);
	};

	setProjects = () => {
		this.projectListEl.innerHTML = '';
		this.projects = JSON.parse(localStorage.getItem('projects'));

		// update main title
		const projectName = this.projects.find((project) => project.id === this.currentProjectId).title;
		this.projectName.textContent = projectName;

		// update project list
		for (const project of this.projects) {
			const projectObj = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](project);
			projectObj.build(this.projectListEl);
		}
	};

	deleteProject = () => {
		if (window.confirm("Are you sure you want to delete this project? All associated todo's will also be deleted.")) {
			// remove todos associated with deleted project
			const todos = JSON.parse(localStorage.getItem('todos'));
			const updatedTodos = todos.filter((todo) => todo.projectId !== this.currentProjectId);
			localStorage.setItem('todos', JSON.stringify(updatedTodos));

			// remove project
			const projects = JSON.parse(localStorage.getItem('projects'));
			const updatedProjects = projects.filter((project) => project.id !== this.currentProjectId);

			// update selected project
			this.currentProjectId = 'default';
			for (const project of updatedProjects) {
				if (project.id === 'default') project.selected = true;
			}
			localStorage.setItem('projects', JSON.stringify(updatedProjects));

			this.setProjects();
			this.setTodos();
		}
	};

	renameProject = (e) => {
		const newTitle = e.target.textContent.trim();

		// update local storage
		const projects = JSON.parse(localStorage.getItem('projects'));
		for (const project of projects) {
			if (project.id === this.currentProjectId) project.title = newTitle;
		}
		localStorage.setItem('projects', JSON.stringify(projects));

		// update list of projects
		this.setProjects();
	};
}

const homepage = new UI();
homepage.load();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVks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LDRCQUE0Qiw2Q0FBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLGlEQUFPO0FBQ2xCLDRCQUE0Qiw2Q0FBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLGtEQUFRO0FBQ25CLDRCQUE0Qiw2Q0FBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkNBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLDZDQUFJO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsZ0RBQU87QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsZ0RBQU87QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL1RvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzQWZ0ZXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc0JlZm9yZS5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xufVxuXG46cm9vdCB7XG5cdC0tbGlnaHRncmF5OiByZ2IoMjQxLCAyNDIsIDI0NCk7XG5cdC0tZGFya2dyYXk6IHJnYigxODksIDE4OSwgMTg5KTtcblx0LS15ZWxsb3c6IHJnYigyNDAsIDIyOCwgMTQ3KTtcblx0LS1ncmVlbjogcmdiKDE2MiwgMjQxLCAxNTIpO1xuXHQtLXJlZDogcmdiKDIzMCwgMTQxLCAxNTIpO1xuXHQtLWxpZ2h0Ymx1ZTogcmdiKDE1NywgMjI0LCAyNDEpO1xuXHQtLWJsdWU6IHJnYig1NiwgMTI4LCAxNTApO1xuXHQtLWJsYWNrOiByZ2IoNDksIDQ5LCA0OSk7XG59XG5cbmJvZHkge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1saWdodGdyYXkpO1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWF4LWNvbnRlbnQ7XG5cdGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcblx0Y29sb3I6IHZhcigtLWJsYWNrKTtcbn1cblxuYnV0dG9uLFxuc2VsZWN0IHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRmb250LXNpemU6IDAuOHJlbTtcblx0cGFkZGluZzogMnB4IDVweDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0Ym9yZGVyOiBub25lO1xufVxuXG5idXR0b24ge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrZ3JheSk7XG59XG5cbnNlbGVjdCB7XG5cdGJhY2tncm91bmQ6IHZhcigtLWRhcmtncmF5KTtcbn1cblxuYXNpZGUge1xuXHRncmlkLWNvbHVtbjogMSAvIDI7XG5cdGdyaWQtcm93OiAxIC8gLTE7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5hc2lkZSBoMSB7XG5cdG1hcmdpbjogMTBweCAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmFzaWRlIGgyIHtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRjb2xvcjogdmFyKC0tYmx1ZSk7XG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5hc2lkZSA+ICNwcm9qZWN0Rm9ybSA+ICNmaWx0ZXJMaXN0ID4gbGksXG5hc2lkZSA+ICNwcm9qZWN0Rm9ybSA+ICNwcm9qZWN0TGlzdCA+IGxpIHtcblx0Zm9udC1zaXplOiAwLjhyZW07XG59XG5cbmFzaWRlID4gI3Byb2plY3RGb3JtID4gI2ZpbHRlckxpc3QsXG5hc2lkZSA+ICNwcm9qZWN0Rm9ybSA+ICNwcm9qZWN0TGlzdCB7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiA1cHg7XG5cdHBhZGRpbmc6IDEwcHg7XG59XG5cbmFzaWRlID4gI3Byb2plY3RGb3JtID4gI2ZpbHRlckxpc3QgPiBsaSA+IGlucHV0W3R5cGU9J3JhZGlvJ10sXG5hc2lkZSA+ICNwcm9qZWN0Rm9ybSA+ICNwcm9qZWN0TGlzdCA+IGxpID4gaW5wdXRbdHlwZT0ncmFkaW8nXSB7XG5cdG9wYWNpdHk6IDA7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuYXNpZGUgPiAjcHJvamVjdEZvcm0gPiAjZmlsdGVyTGlzdCA+IGxpID4gbGFiZWwsXG5hc2lkZSA+ICNwcm9qZWN0Rm9ybSA+ICNwcm9qZWN0TGlzdCA+IGxpID4gbGFiZWwge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHBhZGRpbmc6IDVweCAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG59XG5cbmFzaWRlID4gI3Byb2plY3RGb3JtID4gI2ZpbHRlckxpc3QgPiBsaSA+IGlucHV0W3R5cGU9J3JhZGlvJ106Zm9jdXMgKyBsYWJlbCxcbmFzaWRlID4gI3Byb2plY3RGb3JtID4gI3Byb2plY3RMaXN0ID4gbGkgPiBpbnB1dFt0eXBlPSdyYWRpbyddOmZvY3VzICsgbGFiZWwge1xuXHRvdXRsaW5lOiAxcHggZG90dGVkICMyMTIxMjE7XG5cdG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcbn1cblxuYXNpZGUgPiAjcHJvamVjdEZvcm0gPiAjZmlsdGVyTGlzdCA+IGxpID4gbGFiZWw6aG92ZXIsXG5hc2lkZSA+ICNwcm9qZWN0Rm9ybSA+ICNwcm9qZWN0TGlzdCA+IGxpID4gbGFiZWw6aG92ZXIge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrZ3JheSk7XG59XG5cbmFzaWRlID4gI3Byb2plY3RGb3JtID4gI2ZpbHRlckxpc3QgPiBsaSA+IGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIGxhYmVsLFxuYXNpZGUgPiAjcHJvamVjdEZvcm0gPiAjcHJvamVjdExpc3QgPiBsaSA+IGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIGxhYmVsIHtcblx0YmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmFzaWRlID4gI2FkZFByb2plY3Qge1xuXHRhbGlnbi1zZWxmOiBzdGFydDtcblx0bWFyZ2luOiAxMHB4O1xuXHRmb250LXNpemU6IDFyZW07XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdGNvbG9yOiB2YXIoLS1ibHVlKTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbm1haW4ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDEwcHg7XG5cdHBhZGRpbmc6IDE1cHg7XG59XG5cbm1haW4gPiBoZWFkZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbm1haW4gPiBoZWFkZXIgPiBoMyB7XG5cdGNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cblxuLyogZWRpdCBpY29uICovXG5tYWluID4gaGVhZGVyID4gaDM6OmFmdGVyIHtcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdGNvbG9yOiB2YXIoLS1kYXJrZ3JheSk7XG5cdGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZSc7XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdGNvbnRlbnQ6ICdcXFxcZjA0NCc7XG59XG5cbm1haW4gPiBoZWFkZXIgPiBtZW51IHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiAxMHB4O1xuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbm1haW4gPiBoZWFkZXIgPiBtZW51ID4gbGkgPiBidXR0b24ge1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRmb250LXNpemU6IDFyZW07XG5cdGNvbG9yOiB2YXIoLS1ibHVlKTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbm1haW4gPiBoZWFkZXIgPiBtZW51ID4gbGkgPiAjZGVsZXRlUHJvamVjdCB7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdGNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5cbi8qIHRvZG9zICovXG4jdG9kb0xpc3Qge1xuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMTBweDtcbn1cblxuLnRvZG8ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDEwcHg7XG59XG5cbi50b2RvID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG5cdHdpZHRoOiAyMHB4O1xuXHRoZWlnaHQ6IDIwcHg7XG59XG5cbi50b2RvID4gYXJ0aWNsZSB7XG5cdGZsZXg6IDE7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTVweCAxZnI7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xuXHRvdXRsaW5lOiAycHggc29saWQgdmFyKC0tZGFya2dyYXkpO1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0Y29sb3I6IHZhcigtLWJsYWNrKTtcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLnRvZG8gPiBhcnRpY2xlID4gLnByaW9yaXR5LXNwYW4ge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Y29udGVudDogJyc7XG5cdGJhY2tncm91bmQ6IHZhcigtLWRhcmtncmF5KTtcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcblx0Z3JpZC1yb3c6IDEgLyAtMTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcbn1cblxuLnRvZG8gPiBhcnRpY2xlID4gaGVhZGVyIHtcblx0cGFkZGluZzogNXB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGZvbnQtc2l6ZTogMC45cmVtO1xuXHRtYXJnaW46IDJweCA1cHg7XG59XG5cbi50b2RvID4gYXJ0aWNsZSA+IGhlYWRlciA+IG1lbnUge1xuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogNXB4O1xufVxuXG4udG9kbyA+IGFydGljbGUgPiBoZWFkZXIgPiBtZW51ID4gbGkgPiBidXR0b24ge1xuXHRiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4udG9kbyA+IGFydGljbGUgPiBwIHtcblx0bWFyZ2luOiA1cHg7XG5cdGZvbnQtc2l6ZTogMC45cmVtO1xuXHRwYWRkaW5nOiAzcHg7XG59XG5cbi8qIGxvdyBwcmlvcml0eSAqL1xuLnRvZG8gPiBhcnRpY2xlLmxvdyA+IC5wcmlvcml0eS1zcGFuLFxuLnRvZG8gPiBhcnRpY2xlLmxvdyA+IGhlYWRlciA+IG1lbnUgPiBsaSA+IHNlbGVjdCB7XG5cdGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0Ymx1ZSk7XG59XG5cbi50b2RvID4gYXJ0aWNsZS5sb3cge1xuXHRvdXRsaW5lOiAycHggc29saWQgdmFyKC0tbGlnaHRibHVlKTtcbn1cblxuLyogbWVkaXVtIHByaW9yaXR5ICovXG4udG9kbyA+IGFydGljbGUubWVkaXVtID4gLnByaW9yaXR5LXNwYW4sXG4udG9kbyA+IGFydGljbGUubWVkaXVtID4gaGVhZGVyID4gbWVudSA+IGxpID4gc2VsZWN0IHtcblx0YmFja2dyb3VuZDogdmFyKC0teWVsbG93KTtcbn1cblxuLnRvZG8gPiBhcnRpY2xlLm1lZGl1bSB7XG5cdG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS15ZWxsb3cpO1xufVxuXG4vKiBoaWdoIHByaW9yaXR5ICovXG4udG9kbyA+IGFydGljbGUuaGlnaCA+IC5wcmlvcml0eS1zcGFuLFxuLnRvZG8gPiBhcnRpY2xlLmhpZ2ggPiBoZWFkZXIgPiBtZW51ID4gbGkgPiBzZWxlY3Qge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xufVxuXG4udG9kbyA+IGFydGljbGUuaGlnaCB7XG5cdG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1yZWQpO1xufVxuXG4vKiBjb21wbGV0ZWQgKi9cbi50b2RvID4gYXJ0aWNsZS5jb21wbGV0ZWQge1xuXHRvdXRsaW5lOiAycHggc29saWQgdmFyKC0tZGFya2dyYXkpO1xufVxuXG4udG9kbyA+IGFydGljbGUuY29tcGxldGVkICoge1xuXHRjb2xvcjogdmFyKC0tZGFya2dyYXkpO1xufVxuXG4udG9kbyA+IGFydGljbGUuY29tcGxldGVkID4gLnByaW9yaXR5LXNwYW4sXG4udG9kbyA+IGFydGljbGUuY29tcGxldGVkID4gaGVhZGVyID4gbWVudSA+IGxpID4gc2VsZWN0IHtcblx0Y29sb3I6IHZhcigtLWxpZ2h0Z3JheSk7XG5cdGJhY2tncm91bmQ6IHZhcigtLWRhcmtncmF5KTtcbn1cblxuLnRvZG8gPiBhcnRpY2xlLmNvbXBsZXRlZCA+IGhlYWRlciA+IGg0LFxuLnRvZG8gPiBhcnRpY2xlLmNvbXBsZXRlZCA+IHAge1xuXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuZm9vdGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGdhcDogMTBweDtcblx0Zm9udC1zaXplOiAwLjhyZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291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QUFxQjtDQUNyQixhQUFhO0NBQ2IsUUFBUTtBQUNUOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixZQUFZO0FBQ2I7O0FBRUEsaUJBQWlCO0FBQ2pCOztDQUVDLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLG1DQUFtQztBQUNwQzs7QUFFQSxvQkFBb0I7QUFDcEI7O0NBRUMseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsZ0NBQWdDO0FBQ2pDOztBQUVBLGtCQUFrQjtBQUNsQjs7Q0FFQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBRUEsY0FBYztBQUNkO0NBQ0Msa0NBQWtDO0FBQ25DOztBQUVBO0NBQ0Msc0JBQXNCO0FBQ3ZCOztBQUVBOztDQUVDLHVCQUF1QjtDQUN2QiwyQkFBMkI7QUFDNUI7O0FBRUE7O0NBRUMsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2IsU0FBUztDQUNULGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuXFx0LS1saWdodGdyYXk6IHJnYigyNDEsIDI0MiwgMjQ0KTtcXG5cXHQtLWRhcmtncmF5OiByZ2IoMTg5LCAxODksIDE4OSk7XFxuXFx0LS15ZWxsb3c6IHJnYigyNDAsIDIyOCwgMTQ3KTtcXG5cXHQtLWdyZWVuOiByZ2IoMTYyLCAyNDEsIDE1Mik7XFxuXFx0LS1yZWQ6IHJnYigyMzAsIDE0MSwgMTUyKTtcXG5cXHQtLWxpZ2h0Ymx1ZTogcmdiKDE1NywgMjI0LCAyNDEpO1xcblxcdC0tYmx1ZTogcmdiKDU2LCAxMjgsIDE1MCk7XFxuXFx0LS1ibGFjazogcmdiKDQ5LCA0OSwgNDkpO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1saWdodGdyYXkpO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtYXgtY29udGVudDtcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuXFx0Y29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGZvbnQtc2l6ZTogMC44cmVtO1xcblxcdHBhZGRpbmc6IDJweCA1cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRib3JkZXI6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tZGFya2dyYXkpO1xcbn1cXG5cXG5zZWxlY3Qge1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWRhcmtncmF5KTtcXG59XFxuXFxuYXNpZGUge1xcblxcdGdyaWQtY29sdW1uOiAxIC8gMjtcXG5cXHRncmlkLXJvdzogMSAvIC0xO1xcblxcdGJhY2tncm91bmQ6IHdoaXRlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYXNpZGUgaDEge1xcblxcdG1hcmdpbjogMTBweCAwO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuYXNpZGUgaDIge1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRjb2xvcjogdmFyKC0tYmx1ZSk7XFxuXFx0bWFyZ2luLWxlZnQ6IDEwcHg7XFxuXFx0bWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuYXNpZGUgPiAjcHJvamVjdEZvcm0gPiAjZmlsdGVyTGlzdCA+IGxpLFxcbmFzaWRlID4gI3Byb2plY3RGb3JtID4gI3Byb2plY3RMaXN0ID4gbGkge1xcblxcdGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG5hc2lkZSA+ICNwcm9qZWN0Rm9ybSA+ICNmaWx0ZXJMaXN0LFxcbmFzaWRlID4gI3Byb2plY3RGb3JtID4gI3Byb2plY3RMaXN0IHtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogNXB4O1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmFzaWRlID4gI3Byb2plY3RGb3JtID4gI2ZpbHRlckxpc3QgPiBsaSA+IGlucHV0W3R5cGU9J3JhZGlvJ10sXFxuYXNpZGUgPiAjcHJvamVjdEZvcm0gPiAjcHJvamVjdExpc3QgPiBsaSA+IGlucHV0W3R5cGU9J3JhZGlvJ10ge1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG5hc2lkZSA+ICNwcm9qZWN0Rm9ybSA+ICNmaWx0ZXJMaXN0ID4gbGkgPiBsYWJlbCxcXG5hc2lkZSA+ICNwcm9qZWN0Rm9ybSA+ICNwcm9qZWN0TGlzdCA+IGxpID4gbGFiZWwge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0cGFkZGluZzogNXB4IDEwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XFxufVxcblxcbmFzaWRlID4gI3Byb2plY3RGb3JtID4gI2ZpbHRlckxpc3QgPiBsaSA+IGlucHV0W3R5cGU9J3JhZGlvJ106Zm9jdXMgKyBsYWJlbCxcXG5hc2lkZSA+ICNwcm9qZWN0Rm9ybSA+ICNwcm9qZWN0TGlzdCA+IGxpID4gaW5wdXRbdHlwZT0ncmFkaW8nXTpmb2N1cyArIGxhYmVsIHtcXG5cXHRvdXRsaW5lOiAxcHggZG90dGVkICMyMTIxMjE7XFxuXFx0b3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xcbn1cXG5cXG5hc2lkZSA+ICNwcm9qZWN0Rm9ybSA+ICNmaWx0ZXJMaXN0ID4gbGkgPiBsYWJlbDpob3ZlcixcXG5hc2lkZSA+ICNwcm9qZWN0Rm9ybSA+ICNwcm9qZWN0TGlzdCA+IGxpID4gbGFiZWw6aG92ZXIge1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWRhcmtncmF5KTtcXG59XFxuXFxuYXNpZGUgPiAjcHJvamVjdEZvcm0gPiAjZmlsdGVyTGlzdCA+IGxpID4gaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkICsgbGFiZWwsXFxuYXNpZGUgPiAjcHJvamVjdEZvcm0gPiAjcHJvamVjdExpc3QgPiBsaSA+IGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIGxhYmVsIHtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmFzaWRlID4gI2FkZFByb2plY3Qge1xcblxcdGFsaWduLXNlbGY6IHN0YXJ0O1xcblxcdG1hcmdpbjogMTBweDtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRjb2xvcjogdmFyKC0tYmx1ZSk7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbm1haW4ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0cGFkZGluZzogMTVweDtcXG59XFxuXFxubWFpbiA+IGhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbm1haW4gPiBoZWFkZXIgPiBoMyB7XFxuXFx0Y29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4vKiBlZGl0IGljb24gKi9cXG5tYWluID4gaGVhZGVyID4gaDM6OmFmdGVyIHtcXG5cXHRtYXJnaW4tbGVmdDogMTBweDtcXG5cXHRjb2xvcjogdmFyKC0tZGFya2dyYXkpO1xcblxcdGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZSc7XFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXG5cXHRjb250ZW50OiAnXFxcXGYwNDQnO1xcbn1cXG5cXG5tYWluID4gaGVhZGVyID4gbWVudSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5tYWluID4gaGVhZGVyID4gbWVudSA+IGxpID4gYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRjb2xvcjogdmFyKC0tYmx1ZSk7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbm1haW4gPiBoZWFkZXIgPiBtZW51ID4gbGkgPiAjZGVsZXRlUHJvamVjdCB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRjb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4vKiB0b2RvcyAqL1xcbiN0b2RvTGlzdCB7XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDEwcHg7XFxufVxcblxcbi50b2RvIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG5cXG4udG9kbyA+IGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcblxcdHdpZHRoOiAyMHB4O1xcblxcdGhlaWdodDogMjBweDtcXG59XFxuXFxuLnRvZG8gPiBhcnRpY2xlIHtcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNXB4IDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDFmcjtcXG5cXHRvdXRsaW5lOiAycHggc29saWQgdmFyKC0tZGFya2dyYXkpO1xcblxcdGJhY2tncm91bmQ6IHdoaXRlO1xcblxcdGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLnRvZG8gPiBhcnRpY2xlID4gLnByaW9yaXR5LXNwYW4ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWRhcmtncmF5KTtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XFxuXFx0Z3JpZC1yb3c6IDEgLyAtMTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50b2RvID4gYXJ0aWNsZSA+IGhlYWRlciB7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Zm9udC1zaXplOiAwLjlyZW07XFxuXFx0bWFyZ2luOiAycHggNXB4O1xcbn1cXG5cXG4udG9kbyA+IGFydGljbGUgPiBoZWFkZXIgPiBtZW51IHtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8gPiBhcnRpY2xlID4gaGVhZGVyID4gbWVudSA+IGxpID4gYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4udG9kbyA+IGFydGljbGUgPiBwIHtcXG5cXHRtYXJnaW46IDVweDtcXG5cXHRmb250LXNpemU6IDAuOXJlbTtcXG5cXHRwYWRkaW5nOiAzcHg7XFxufVxcblxcbi8qIGxvdyBwcmlvcml0eSAqL1xcbi50b2RvID4gYXJ0aWNsZS5sb3cgPiAucHJpb3JpdHktc3BhbixcXG4udG9kbyA+IGFydGljbGUubG93ID4gaGVhZGVyID4gbWVudSA+IGxpID4gc2VsZWN0IHtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1saWdodGJsdWUpO1xcbn1cXG5cXG4udG9kbyA+IGFydGljbGUubG93IHtcXG5cXHRvdXRsaW5lOiAycHggc29saWQgdmFyKC0tbGlnaHRibHVlKTtcXG59XFxuXFxuLyogbWVkaXVtIHByaW9yaXR5ICovXFxuLnRvZG8gPiBhcnRpY2xlLm1lZGl1bSA+IC5wcmlvcml0eS1zcGFuLFxcbi50b2RvID4gYXJ0aWNsZS5tZWRpdW0gPiBoZWFkZXIgPiBtZW51ID4gbGkgPiBzZWxlY3Qge1xcblxcdGJhY2tncm91bmQ6IHZhcigtLXllbGxvdyk7XFxufVxcblxcbi50b2RvID4gYXJ0aWNsZS5tZWRpdW0ge1xcblxcdG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS15ZWxsb3cpO1xcbn1cXG5cXG4vKiBoaWdoIHByaW9yaXR5ICovXFxuLnRvZG8gPiBhcnRpY2xlLmhpZ2ggPiAucHJpb3JpdHktc3BhbixcXG4udG9kbyA+IGFydGljbGUuaGlnaCA+IGhlYWRlciA+IG1lbnUgPiBsaSA+IHNlbGVjdCB7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tcmVkKTtcXG59XFxuXFxuLnRvZG8gPiBhcnRpY2xlLmhpZ2gge1xcblxcdG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1yZWQpO1xcbn1cXG5cXG4vKiBjb21wbGV0ZWQgKi9cXG4udG9kbyA+IGFydGljbGUuY29tcGxldGVkIHtcXG5cXHRvdXRsaW5lOiAycHggc29saWQgdmFyKC0tZGFya2dyYXkpO1xcbn1cXG5cXG4udG9kbyA+IGFydGljbGUuY29tcGxldGVkICoge1xcblxcdGNvbG9yOiB2YXIoLS1kYXJrZ3JheSk7XFxufVxcblxcbi50b2RvID4gYXJ0aWNsZS5jb21wbGV0ZWQgPiAucHJpb3JpdHktc3BhbixcXG4udG9kbyA+IGFydGljbGUuY29tcGxldGVkID4gaGVhZGVyID4gbWVudSA+IGxpID4gc2VsZWN0IHtcXG5cXHRjb2xvcjogdmFyKC0tbGlnaHRncmF5KTtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrZ3JheSk7XFxufVxcblxcbi50b2RvID4gYXJ0aWNsZS5jb21wbGV0ZWQgPiBoZWFkZXIgPiBoNCxcXG4udG9kbyA+IGFydGljbGUuY29tcGxldGVkID4gcCB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbmZvb3RlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGdhcDogMTBweDtcXG5cXHRmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcblx0Y29uc3RydWN0b3IoeyBpZCwgdGl0bGUsIHNlbGVjdGVkIH0pIHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZCB8fCBmYWxzZTtcblx0fVxuXG5cdGJ1aWxkID0gKGVsZW1lbnQpID0+IHtcblx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRcdGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG5cdFx0Y29udGFpbmVyLmlubmVySFRNTCA9IGBcblx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNlbGVjdGVkSWRcIiBpZD1cIiR7dGhpcy5pZH1cIiB2YWx1ZT1cIiR7dGhpcy5pZH1cIiAke3RoaXMuc2VsZWN0ZWQgPyAnY2hlY2tlZCcgOiAnJ30+XG5cdFx0PGxhYmVsIGZvcj0ke3RoaXMuaWR9PiR7dGhpcy50aXRsZX08L2xhYmVsPlxuXHRcdGA7XG5cblx0XHRlbGVtZW50LmFwcGVuZChjb250YWluZXIpO1xuXHRcdHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXHR9O1xuXG5cdHVwZGF0ZSA9IChmaWVsZCwgZGF0YSkgPT4ge1xuXHRcdC8vIGRvbid0IHVwZGF0ZSBpZiB0aGUgZGF0YSBoYXNuJ3QgY2hhbmdlZFxuXHRcdGlmICh0aGlzW2ZpZWxkXSA9PT0gZGF0YSkgcmV0dXJuO1xuXG5cdFx0Ly8gZm9ybWF0IHRoZSBkYXRhXG5cdFx0ZGF0YSA9IGRhdGEudHJpbSgpO1xuXG5cdFx0Ly8gdXBkYXRlIHRoZSBpbnN0YW5jZVxuXHRcdHRoaXNbZmllbGRdID0gZGF0YTtcblxuXHRcdC8vIHVwZGF0ZSBsb2NhbCBzdG9yYWdlXG5cdFx0Y29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcblx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgcHJvamVjdHMpIHtcblx0XHRcdGlmIChpdGVtLmlkID09PSB0aGlzLmlkKSBpdGVtW2ZpZWxkXSA9IGRhdGE7XG5cdFx0fVxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG5cdH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcblx0Y29uc3RydWN0b3IoeyBpZCwgdGl0bGUsIGRlc2MsIHByaW9yaXR5LCBwcm9qZWN0SWQsIGNvbXBsZXRlZCwgZHVlRGF0ZSB9KSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLmRlc2MgPSBkZXNjO1xuXHRcdHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblx0XHR0aGlzLnByb2plY3RJZCA9IHByb2plY3RJZCB8fCBudWxsO1xuXHRcdHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuXHRcdHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUgfHwgJyc7XG5cdFx0dGhpcy5jb250YWluZXIgPSBudWxsO1xuXHR9XG5cblx0YnVpbGQgPSAoZWxlbWVudCkgPT4ge1xuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0Y29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcblxuXHRcdGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG5cdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY29tcGxldGVcIiAke3RoaXMuY29tcGxldGVkID8gJ2NoZWNrZWQnIDogJyd9PlxuXHRcdDxhcnRpY2xlIGNsYXNzPVwiJHt0aGlzLnByaW9yaXR5fSAke3RoaXMuY29tcGxldGVkID8gJ2NvbXBsZXRlZCcgOiAnJ31cIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwicHJpb3JpdHktc3BhblwiPjwvc3Bhbj5cblx0XHRcdDxoZWFkZXI+XG5cdFx0XHRcdDxoNCBjbGFzcz1cInRpdGxlXCIgY29udGVudGVkaXRhYmxlPiR7dGhpcy50aXRsZX08L2g0PlxuXHRcdFx0XHRcblx0XHRcdFx0PG1lbnU+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cImR1ZURhdGVcIiBoaWRkZW4+RHVlIGRhdGU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJkdWVEYXRlXCIgY2xhc3M9XCJkdWVEYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7dGhpcy5kdWVEYXRlfVwiPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInByaW9yaXR5XCIgaGlkZGVuPlByaW9yaXR5PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3M9XCJwcmlvcml0eVwiPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwibG93XCIgJHt0aGlzLnByaW9yaXR5ID09PSAnbG93JyA/ICdzZWxlY3RlZCcgOiAnJ30+TG93PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIiAke3RoaXMucHJpb3JpdHkgPT09ICdtZWRpdW0nID8gJ3NlbGVjdGVkJyA6ICcnfT5NZWRpdW08L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cImhpZ2hcIiAke3RoaXMucHJpb3JpdHkgPT09ICdoaWdoJyA/ICdzZWxlY3RlZCcgOiAnJ30+SGlnaDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImRlbGV0ZVwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2hcIj48L2k+PC9idXR0b24+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC9tZW51PlxuXHRcdFx0PC9oZWFkZXI+XG5cdFx0XHQ8cCBjbGFzcz1cImRlc2NcIiBjb250ZW50ZWRpdGFibGU+JHt0aGlzLmRlc2N9PC9wPlxuXHRcdDwvYXJ0aWNsZT5cblx0XHRgO1xuXG5cdFx0ZWxlbWVudC5hcHBlbmQoY29udGFpbmVyKTtcblx0XHR0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuXHRcdGNvbnN0IGFydGljbGUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignYXJ0aWNsZScpO1xuXHRcdGNvbnN0IHRpdGxlRWwgPSBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuXHRcdGNvbnN0IGR1ZURhdGVFbCA9IGFydGljbGUucXVlcnlTZWxlY3RvcignLmR1ZURhdGUnKTtcblx0XHRjb25zdCBkZXNjcmlwdGlvbkVsID0gYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKCcuZGVzYycpO1xuXHRcdGNvbnN0IHByaW9yaXR5RWwgPSBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpO1xuXHRcdGNvbnN0IGRlbGV0ZUJ0biA9IGFydGljbGUucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xuXHRcdGNvbnN0IGNvbXBsZXRlQ2hlY2tib3ggPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlJyk7XG5cblx0XHQvLyB1cGRhdGUgY29tcGxldGlvbiBzdGF0dXNcblx0XHRjb21wbGV0ZUNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG5cdFx0XHR0aGlzLnVwZGF0ZSgnY29tcGxldGVkJywgZS50YXJnZXQuY2hlY2tlZCk7XG5cdFx0XHRhcnRpY2xlLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcsIGUudGFyZ2V0LmNoZWNrZWQpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gdXBkYXRlIG5hbWVzXG5cdFx0dGl0bGVFbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIChlKSA9PiB0aGlzLnVwZGF0ZSgndGl0bGUnLCBlLnRhcmdldC50ZXh0Q29udGVudCkpO1xuXHRcdGR1ZURhdGVFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB0aGlzLnVwZGF0ZSgnZHVlRGF0ZScsIGUudGFyZ2V0LnZhbHVlKSk7XG5cdFx0ZGVzY3JpcHRpb25FbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIChlKSA9PiB0aGlzLnVwZGF0ZSgnZGVzYycsIGUudGFyZ2V0LnRleHRDb250ZW50KSk7XG5cblx0XHQvLyB1cGRhdGUgcHJpb3JpdHlcblx0XHRwcmlvcml0eUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcblx0XHRcdGFydGljbGUuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnByaW9yaXR5KTtcblx0XHRcdGFydGljbGUuY2xhc3NMaXN0LmFkZChlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHR0aGlzLnVwZGF0ZSgncHJpb3JpdHknLCBlLnRhcmdldC52YWx1ZSk7XG5cdFx0fSk7XG5cblx0XHRkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlbGV0ZSk7XG5cdH07XG5cblx0dXBkYXRlID0gKGZpZWxkLCBkYXRhKSA9PiB7XG5cdFx0Ly8gZG9uJ3QgdXBkYXRlIGlmIHRoZSBkYXRhIGhhc24ndCBjaGFuZ2VkXG5cdFx0aWYgKHRoaXNbZmllbGRdID09PSBkYXRhKSByZXR1cm47XG5cblx0XHQvLyBmb3JtYXQgdGhlIGRhdGFcblx0XHRpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSBkYXRhID0gZGF0YS50cmltKCk7XG5cblx0XHQvLyB1cGRhdGUgdGhlIGluc3RhbmNlXG5cdFx0dGhpc1tmaWVsZF0gPSBkYXRhO1xuXG5cdFx0Ly8gdXBkYXRlIGxvY2FsIHN0b3JhZ2Vcblx0XHRjb25zdCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuXHRcdGZvciAoY29uc3QgaXRlbSBvZiB0b2Rvcykge1xuXHRcdFx0aWYgKGl0ZW0uaWQgPT09IHRoaXMuaWQpIGl0ZW1bZmllbGRdID0gZGF0YTtcblx0XHR9XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcblx0fTtcblxuXHRkZWxldGUgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcblx0XHRsZXQgdXBkYXRlZFRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSB0aGlzLmlkKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkVG9kb3MpKTtcblx0XHR0aGlzLmNvbnRhaW5lci5yZW1vdmUoKTtcblx0fTtcbn1cbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc0FmdGVyXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBhZnRlciB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0gZGF0ZVRvQ29tcGFyZSAtIFRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICpcbiAqIEByZXR1cm5zIFRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQgZGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYWZ0ZXIgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQWZ0ZXIobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQWZ0ZXIoZGF0ZSwgZGF0ZVRvQ29tcGFyZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgX2RhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBfZGF0ZS5nZXRUaW1lKCkgPiBfZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNBZnRlcjtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIGRhdGVUb0NvbXBhcmUgLSBUaGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqXG4gKiBAcmV0dXJucyBUaGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQmVmb3JlKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCZWZvcmUoZGF0ZSwgZGF0ZVRvQ29tcGFyZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgX2RhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiArX2RhdGUgPCArX2RhdGVUb0NvbXBhcmU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNCZWZvcmU7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvJztcbmltcG9ydCB7IGZvcm1hdERpc3RhbmNlLCBpc0FmdGVyLCBpc0JlZm9yZSwgc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3Qgc2FtcGxlVG9kb3MgPSBbXG5cdHtcblx0XHRpZDogMCxcblx0XHR0aXRsZTogJ1RvZG8gIzEnLFxuXHRcdGRlc2M6IFwiQSB0b2RvIHRoYXQgSSBoYXZlbid0IHN0YXJ0ZWRcIixcblx0XHRwcmlvcml0eTogJ2xvdycsXG5cdFx0Y29tcGxldGVkOiBmYWxzZSxcblx0XHRkdWVEYXRlOiAnMjAyNS0wMi0xMScsXG5cdFx0cHJvamVjdElkOiAnZGVmYXVsdCcsXG5cdH0sXG5cdHtcblx0XHRpZDogMSxcblx0XHR0aXRsZTogJ1RvZG8gIzInLFxuXHRcdGRlc2M6IFwiQSB0b2RvIHRoYXQgSSdtIGRvaW5nLlwiLFxuXHRcdHByaW9yaXR5OiAnbWVkaXVtJyxcblx0XHRjb21wbGV0ZWQ6IGZhbHNlLFxuXHRcdGR1ZURhdGU6ICcnLFxuXHRcdHByb2plY3RJZDogJzAnLFxuXHR9LFxuXHR7XG5cdFx0aWQ6IDIsXG5cdFx0dGl0bGU6ICdUb2RvICMzJyxcblx0XHRkZXNjOiBcIkEgdG9kbyB0aGF0IEkndmUgZG9uZS5cIixcblx0XHRwcmlvcml0eTogJ2hpZ2gnLFxuXHRcdGNvbXBsZXRlZDogZmFsc2UsXG5cdFx0ZHVlRGF0ZTogJycsXG5cdFx0cHJvamVjdElkOiAnMCcsXG5cdH0sXG5dO1xuXG5jb25zdCBzYW1wbGVQcm9qZWN0cyA9IFtcblx0e1xuXHRcdGlkOiAnZGVmYXVsdCcsXG5cdFx0dGl0bGU6ICdEZWZhdWx0Jyxcblx0XHRzZWxlY3RlZDogdHJ1ZSxcblx0fSxcblx0e1xuXHRcdGlkOiAnMCcsXG5cdFx0dGl0bGU6ICdQcm9qZWN0IDEnLFxuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSxcbl07XG5cbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoc2FtcGxlVG9kb3MpKTtcbn1cblxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShzYW1wbGVQcm9qZWN0cykpO1xufVxuXG5jbGFzcyBVSSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xuXHRcdHRoaXMudG9kb0xpc3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvTGlzdCcpO1xuXHRcdHRoaXMuYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb2RvJyk7XG5cdFx0dGhpcy5hZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3QnKTtcblx0XHR0aGlzLmRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlUHJvamVjdCcpO1xuXHRcdHRoaXMucHJvamVjdExpc3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdCcpO1xuXHRcdHRoaXMuZmlsdGVyTGlzdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlckxpc3QnKTtcblx0XHR0aGlzLnByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RGb3JtJyk7XG5cdFx0dGhpcy5wcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZScpO1xuXG5cdFx0dGhpcy50b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuXHRcdHRoaXMucHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcblx0XHR0aGlzLmN1cnJlbnRQcm9qZWN0SWQgPSB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3Quc2VsZWN0ZWQpLmlkIHx8ICdkZWZhdWx0Jztcblx0fVxuXG5cdGxvYWQgPSAoKSA9PiB7XG5cdFx0Ly8gI3JlZ2lvbiB0b2Rvc1xuXHRcdHRoaXMuc2V0VG9kb3MoKTtcblxuXHRcdHRoaXMuYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGNvbnN0IGRlZmF1bHRUb2RvID0ge1xuXHRcdFx0XHRpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcblx0XHRcdFx0dGl0bGU6ICdOZXcgdG9kbycsXG5cdFx0XHRcdGRlc2M6ICdBZGQgYSBkZXNjcmlwdGlvbi4uLicsXG5cdFx0XHRcdHByaW9yaXR5OiAnbG93Jyxcblx0XHRcdFx0cHJvamVjdElkOiB0aGlzLmN1cnJlbnRQcm9qZWN0SWQsXG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuXHRcdFx0dG9kb3MucHVzaChkZWZhdWx0VG9kbyk7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuXG5cdFx0XHRjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oZGVmYXVsdFRvZG8pO1xuXHRcdFx0bmV3VG9kby5idWlsZCh0aGlzLnRvZG9MaXN0RWwpO1xuXHRcdH0pO1xuXHRcdC8vICNlbmRyZWdpb25cblxuXHRcdC8vICNyZWdpb24gcHJvamVjdHNcblx0XHR0aGlzLnNldFByb2plY3RzKCk7XG5cblx0XHQvLyByZW5hbWUgYSBwcm9qZWN0XG5cdFx0dGhpcy5wcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHRoaXMucmVuYW1lUHJvamVjdCk7XG5cblx0XHQvLyBhZGQgYSBwcm9qZWN0XG5cdFx0dGhpcy5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRQcm9qZWN0KTtcblxuXHRcdC8vIGRlbGV0ZSBhIHByb2plY3Rcblx0XHR0aGlzLmRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlbGV0ZVByb2plY3QpO1xuXG5cdFx0Ly8gc2VsZWN0IGEgcHJvamVjdFxuXHRcdHRoaXMucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoJ3VsJykuaWQgPT09ICdmaWx0ZXJMaXN0Jykge1xuXHRcdFx0XHQvLyBkZXNlbGVjdCBhbnl0aGluZyBmcm9tIHByb2plY3RMaXN0XG5cdFx0XHRcdGNvbnN0IGNoZWNrZWRJdGVtID0gdGhpcy5wcm9qZWN0TGlzdEVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJyk7XG5cdFx0XHRcdGlmIChjaGVja2VkSXRlbSkgY2hlY2tlZEl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gZGVzZWxlY3QgYW55dGhpbmcgZnJvbSBmaWx0ZXJMaXN0XG5cdFx0XHRcdGNvbnN0IGNoZWNrZWRJdGVtID0gdGhpcy5maWx0ZXJMaXN0RWwucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnKTtcblx0XHRcdFx0aWYgKGNoZWNrZWRJdGVtKSBjaGVja2VkSXRlbS5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMucHJvamVjdEZvcm0pO1xuXG5cdFx0XHQvLyBnZXQgdG9kb3MgYnkgc2VsZWN0ZWQgaWRcblx0XHRcdGlmIChmb3JtRGF0YS5nZXQoJ3NlbGVjdGVkSWQnKSkge1xuXHRcdFx0XHQvLyBzaG93IHByb2plY3QgbmFtZVxuXHRcdFx0XHR0aGlzLnByb2plY3ROYW1lLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cblx0XHRcdFx0Y29uc3QgbmV3SWQgPSBmb3JtRGF0YS5nZXQoJ3NlbGVjdGVkSWQnKTtcblx0XHRcdFx0Y29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcblx0XHRcdFx0Zm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG5cdFx0XHRcdFx0aWYgKHByb2plY3QuaWQgPT09IHRoaXMuY3VycmVudFByb2plY3RJZCkgcHJvamVjdC5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdGlmIChwcm9qZWN0LmlkID09PSBuZXdJZCkgcHJvamVjdC5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuXG5cdFx0XHRcdHRoaXMuY3VycmVudFByb2plY3RJZCA9IG5ld0lkO1xuXHRcdFx0XHRjb25zdCBwcm9qZWN0TmFtZSA9IHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gdGhpcy5jdXJyZW50UHJvamVjdElkKS50aXRsZTtcblx0XHRcdFx0dGhpcy5wcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuXHRcdFx0XHR0aGlzLnNldFRvZG9zKCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGdldCB0b2RvcyBieSBzb3J0Qnlcblx0XHRcdGlmIChmb3JtRGF0YS5nZXQoJ3NvcnRCeScpKSB7XG5cdFx0XHRcdC8vIGhpZGUgcHJvamVjdCBuYW1lXG5cdFx0XHRcdHRoaXMucHJvamVjdE5hbWUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG5cdFx0XHRcdHRoaXMudG9kb0xpc3RFbC5pbm5lckhUTUwgPSAnJztcblx0XHRcdFx0dGhpcy50b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuXHRcdFx0XHRjb25zdCB0b2RheXNEYXRlID0gbmV3IERhdGUoKTtcblxuXHRcdFx0XHRzd2l0Y2ggKGZvcm1EYXRhLmdldCgnc29ydEJ5JykpIHtcblx0XHRcdFx0XHRjYXNlICd1bmZpbmlzaGVkJzpcblx0XHRcdFx0XHRcdC8vIGFkZCB0b2RvcyB0byBjb250ZW50IGFyZWFcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgdG9kbyBvZiB0aGlzLnRvZG9zKSB7XG5cdFx0XHRcdFx0XHRcdGlmICghdG9kby5jb21wbGV0ZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0b2RvT2JqID0gbmV3IFRvZG8odG9kbyk7XG5cdFx0XHRcdFx0XHRcdFx0dG9kb09iai5idWlsZCh0aGlzLnRvZG9MaXN0RWwpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgJ2NvbXBsZXRlZCc6XG5cdFx0XHRcdFx0XHQvLyBhZGQgdG9kb3MgdG8gY29udGVudCBhcmVhXG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHRvZG8gb2YgdGhpcy50b2Rvcykge1xuXHRcdFx0XHRcdFx0XHRpZiAodG9kby5jb21wbGV0ZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0b2RvT2JqID0gbmV3IFRvZG8odG9kbyk7XG5cdFx0XHRcdFx0XHRcdFx0dG9kb09iai5idWlsZCh0aGlzLnRvZG9MaXN0RWwpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgJ3VwY29taW5nJzpcblx0XHRcdFx0XHRcdC8vIGFkZCB0b2RvcyB0byBjb250ZW50IGFyZWFcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgdG9kbyBvZiB0aGlzLnRvZG9zKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRvZG9EYXRlID0gbmV3IERhdGUodG9kby5kdWVEYXRlKTtcblxuXHRcdFx0XHRcdFx0XHRpZiAoaXNBZnRlcih0b2RvRGF0ZSwgdG9kYXlzRGF0ZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0b2RvT2JqID0gbmV3IFRvZG8odG9kbyk7XG5cdFx0XHRcdFx0XHRcdFx0dG9kb09iai5idWlsZCh0aGlzLnRvZG9MaXN0RWwpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgJ292ZXJkdWUnOlxuXHRcdFx0XHRcdFx0Ly8gYWRkIHRvZG9zIHRvIGNvbnRlbnQgYXJlYVxuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCB0b2RvIG9mIHRoaXMudG9kb3MpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdG9kb0RhdGUgPSBuZXcgRGF0ZSh0b2RvLmR1ZURhdGUpO1xuXG5cdFx0XHRcdFx0XHRcdGlmIChpc0JlZm9yZSh0b2RvRGF0ZSwgdG9kYXlzRGF0ZSkgJiYgIXRvZG8uY29tcGxldGVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdG9kb09iaiA9IG5ldyBUb2RvKHRvZG8pO1xuXHRcdFx0XHRcdFx0XHRcdHRvZG9PYmouYnVpbGQodGhpcy50b2RvTGlzdEVsKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0Ly8gYWRkIHRvZG9zIHRvIGNvbnRlbnQgYXJlYVxuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCB0b2RvIG9mIHRoaXMudG9kb3MpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdG9kb09iaiA9IG5ldyBUb2RvKHRvZG8pO1xuXHRcdFx0XHRcdFx0XHR0b2RvT2JqLmJ1aWxkKHRoaXMudG9kb0xpc3RFbCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBnZXQgdG9kb3MgYnkgc2VsZWN0ZWQgZmlsdGVyXG5cdFx0fSk7XG5cdFx0Ly8gI2VuZHJlZ2lvblxuXHR9O1xuXG5cdHNldFRvZG9zID0gKCkgPT4ge1xuXHRcdHRoaXMudG9kb0xpc3RFbC5pbm5lckhUTUwgPSAnJztcblx0XHR0aGlzLnRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG5cblx0XHRjb25zdCBjdXJyZW50UHJvamVjdFRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8ucHJvamVjdElkID09PSB0aGlzLmN1cnJlbnRQcm9qZWN0SWQpO1xuXG5cdFx0Ly8gYWRkIHRvZG9zIHRvIGNvbnRlbnQgYXJlYVxuXHRcdGZvciAoY29uc3QgdG9kbyBvZiBjdXJyZW50UHJvamVjdFRvZG9zKSB7XG5cdFx0XHRjb25zdCB0b2RvT2JqID0gbmV3IFRvZG8odG9kbyk7XG5cdFx0XHR0b2RvT2JqLmJ1aWxkKHRoaXMudG9kb0xpc3RFbCk7XG5cdFx0fVxuXHR9O1xuXG5cdGFkZFByb2plY3QgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZGVmYXVsdFByb2plY3QgPSB7XG5cdFx0XHRpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcblx0XHRcdHRpdGxlOiAnTmV3IFByb2plY3QnLFxuXHRcdH07XG5cblx0XHRjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuXHRcdHByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG5cblx0XHRjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuXHRcdG5ld1Byb2plY3QuYnVpbGQodGhpcy5wcm9qZWN0TGlzdEVsKTtcblx0fTtcblxuXHRzZXRQcm9qZWN0cyA9ICgpID0+IHtcblx0XHR0aGlzLnByb2plY3RMaXN0RWwuaW5uZXJIVE1MID0gJyc7XG5cdFx0dGhpcy5wcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuXG5cdFx0Ly8gdXBkYXRlIG1haW4gdGl0bGVcblx0XHRjb25zdCBwcm9qZWN0TmFtZSA9IHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gdGhpcy5jdXJyZW50UHJvamVjdElkKS50aXRsZTtcblx0XHR0aGlzLnByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG5cblx0XHQvLyB1cGRhdGUgcHJvamVjdCBsaXN0XG5cdFx0Zm9yIChjb25zdCBwcm9qZWN0IG9mIHRoaXMucHJvamVjdHMpIHtcblx0XHRcdGNvbnN0IHByb2plY3RPYmogPSBuZXcgUHJvamVjdChwcm9qZWN0KTtcblx0XHRcdHByb2plY3RPYmouYnVpbGQodGhpcy5wcm9qZWN0TGlzdEVsKTtcblx0XHR9XG5cdH07XG5cblx0ZGVsZXRlUHJvamVjdCA9ICgpID0+IHtcblx0XHRpZiAod2luZG93LmNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcHJvamVjdD8gQWxsIGFzc29jaWF0ZWQgdG9kbydzIHdpbGwgYWxzbyBiZSBkZWxldGVkLlwiKSkge1xuXHRcdFx0Ly8gcmVtb3ZlIHRvZG9zIGFzc29jaWF0ZWQgd2l0aCBkZWxldGVkIHByb2plY3Rcblx0XHRcdGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG5cdFx0XHRjb25zdCB1cGRhdGVkVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8ucHJvamVjdElkICE9PSB0aGlzLmN1cnJlbnRQcm9qZWN0SWQpO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFRvZG9zKSk7XG5cblx0XHRcdC8vIHJlbW92ZSBwcm9qZWN0XG5cdFx0XHRjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuXHRcdFx0Y29uc3QgdXBkYXRlZFByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkICE9PSB0aGlzLmN1cnJlbnRQcm9qZWN0SWQpO1xuXG5cdFx0XHQvLyB1cGRhdGUgc2VsZWN0ZWQgcHJvamVjdFxuXHRcdFx0dGhpcy5jdXJyZW50UHJvamVjdElkID0gJ2RlZmF1bHQnO1xuXHRcdFx0Zm9yIChjb25zdCBwcm9qZWN0IG9mIHVwZGF0ZWRQcm9qZWN0cykge1xuXHRcdFx0XHRpZiAocHJvamVjdC5pZCA9PT0gJ2RlZmF1bHQnKSBwcm9qZWN0LnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRQcm9qZWN0cykpO1xuXG5cdFx0XHR0aGlzLnNldFByb2plY3RzKCk7XG5cdFx0XHR0aGlzLnNldFRvZG9zKCk7XG5cdFx0fVxuXHR9O1xuXG5cdHJlbmFtZVByb2plY3QgPSAoZSkgPT4ge1xuXHRcdGNvbnN0IG5ld1RpdGxlID0gZS50YXJnZXQudGV4dENvbnRlbnQudHJpbSgpO1xuXG5cdFx0Ly8gdXBkYXRlIGxvY2FsIHN0b3JhZ2Vcblx0XHRjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuXHRcdGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuXHRcdFx0aWYgKHByb2plY3QuaWQgPT09IHRoaXMuY3VycmVudFByb2plY3RJZCkgcHJvamVjdC50aXRsZSA9IG5ld1RpdGxlO1xuXHRcdH1cblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuXG5cdFx0Ly8gdXBkYXRlIGxpc3Qgb2YgcHJvamVjdHNcblx0XHR0aGlzLnNldFByb2plY3RzKCk7XG5cdH07XG59XG5cbmNvbnN0IGhvbWVwYWdlID0gbmV3IFVJKCk7XG5ob21lcGFnZS5sb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=