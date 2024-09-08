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
	--blue: rgb(56, 128, 150);
}

body {
	background: var(--blue);
	height: 100vh;
	display: grid;
	grid-template-columns: 200px 1fr;
	grid-template-rows: 1fr max-content;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
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
	background: white;
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

aside > h1 {
	text-align: center;
}

aside > #projectForm > #projectList {
	list-style-type: none;
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding: 10px;
}

aside > #projectForm > #projectList > li > input[type='radio'] {
	display: none;
}

aside > #projectForm > #projectList > li > label {
	cursor: pointer;
	width: 100%;
	display: inline-block;
	padding: 5px 10px;
	border-radius: 10px;
}

aside > #projectForm > #projectList > li > label:hover {
	background: var(--darkgray);
}

aside > #projectForm > #projectList > li > input[type='radio']:checked + label {
	background: var(--blue);
	color: white;
	font-weight: bold;
}

aside > #addProject {
	margin: 10px;
	font-size: 1rem;
	background: var(--blue);
	color: white;
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

main > header > h2 {
	color: white;
}

main > header > button {
	font-size: 1rem;
	font-weight: bold;
	color: var(--blue);
}

/* #region todos */
#todoList {
	list-style-type: none;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.todo {
	display: grid;
	grid-template-columns: 15px 1fr;
	grid-template-rows: max-content 1fr;
	background: white;
	color: black;
	border-radius: 15px;
}

.todo > .status-span {
	display: block;
	content: '';
	background: var(--darkgray);
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
	grid-row: 1 / -1;
	width: 100%;
	height: 100%;
}

.todo > header {
	padding: 5px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 0.9rem;
	margin: 2px 5px;
}

.todo > header > menu {
	list-style-type: none;
	display: flex;
	gap: 5px;
}

.todo > header > menu > li > button {
	background: var(--darkgray);
}

.todo > p {
	margin: 5px;
	font-size: 0.9rem;
	padding: 3px;
}

.todo.in-progress > .status-span,
.todo.in-progress > header > menu > li > select {
	background: var(--yellow);
}

.todo.done > header > h3,
.todo.done > p {
	text-decoration: line-through;
}

.todo.done > .status-span,
.todo.done > header > menu > li > select {
	background: var(--green);
}

/* #endregion */

footer {
	display: flex;
	justify-content: center;
	padding: 10px;
	gap: 10px;
	font-size: 0.8rem;
}

footer > p {
	color: white;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,sBAAsB;CACtB,SAAS;CACT,UAAU;AACX;;AAEA;CACC,+BAA+B;CAC/B,8BAA8B;CAC9B,4BAA4B;CAC5B,2BAA2B;CAC3B,yBAAyB;AAC1B;;AAEA;CACC,uBAAuB;CACvB,aAAa;CACb,aAAa;CACb,gCAAgC;CAChC,mCAAmC;CACnC,gDAAgD;AACjD;;AAEA;;CAEC,eAAe;CACf,iBAAiB;CACjB,gBAAgB;CAChB,mBAAmB;CACnB,YAAY;AACb;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;CAChB,iBAAiB;CACjB,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;CACrB,aAAa;CACb,sBAAsB;CACtB,QAAQ;CACR,aAAa;AACd;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,eAAe;CACf,WAAW;CACX,qBAAqB;CACrB,iBAAiB;CACjB,mBAAmB;AACpB;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;CACC,uBAAuB;CACvB,YAAY;CACZ,iBAAiB;AAClB;;AAEA;CACC,YAAY;CACZ,eAAe;CACf,uBAAuB;CACvB,YAAY;CACZ,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,aAAa;AACd;;AAEA;CACC,aAAa;CACb,8BAA8B;AAC/B;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,eAAe;CACf,iBAAiB;CACjB,kBAAkB;AACnB;;AAEA,kBAAkB;AAClB;CACC,qBAAqB;CACrB,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,+BAA+B;CAC/B,mCAAmC;CACnC,iBAAiB;CACjB,YAAY;CACZ,mBAAmB;AACpB;;AAEA;CACC,cAAc;CACd,WAAW;CACX,2BAA2B;CAC3B,4BAA4B;CAC5B,+BAA+B;CAC/B,gBAAgB;CAChB,WAAW;CACX,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B,iBAAiB;CACjB,eAAe;AAChB;;AAEA;CACC,qBAAqB;CACrB,aAAa;CACb,QAAQ;AACT;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;CACC,WAAW;CACX,iBAAiB;CACjB,YAAY;AACb;;AAEA;;CAEC,yBAAyB;AAC1B;;AAEA;;CAEC,6BAA6B;AAC9B;;AAEA;;CAEC,wBAAwB;AACzB;;AAEA,eAAe;;AAEf;CACC,aAAa;CACb,uBAAuB;CACvB,aAAa;CACb,SAAS;CACT,iBAAiB;AAClB;;AAEA;CACC,YAAY;AACb","sourcesContent":["* {\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n:root {\n\t--lightgray: rgb(241, 242, 244);\n\t--darkgray: rgb(189, 189, 189);\n\t--yellow: rgb(240, 228, 147);\n\t--green: rgb(162, 241, 152);\n\t--blue: rgb(56, 128, 150);\n}\n\nbody {\n\tbackground: var(--blue);\n\theight: 100vh;\n\tdisplay: grid;\n\tgrid-template-columns: 200px 1fr;\n\tgrid-template-rows: 1fr max-content;\n\tfont-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nbutton,\nselect {\n\tcursor: pointer;\n\tfont-size: 0.8rem;\n\tpadding: 2px 5px;\n\tborder-radius: 10px;\n\tborder: none;\n}\n\nbutton {\n\tbackground: white;\n}\n\nselect {\n\tbackground: var(--darkgray);\n}\n\naside {\n\tgrid-column: 1 / 2;\n\tgrid-row: 1 / -1;\n\tbackground: white;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\naside > h1 {\n\ttext-align: center;\n}\n\naside > #projectForm > #projectList {\n\tlist-style-type: none;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 5px;\n\tpadding: 10px;\n}\n\naside > #projectForm > #projectList > li > input[type='radio'] {\n\tdisplay: none;\n}\n\naside > #projectForm > #projectList > li > label {\n\tcursor: pointer;\n\twidth: 100%;\n\tdisplay: inline-block;\n\tpadding: 5px 10px;\n\tborder-radius: 10px;\n}\n\naside > #projectForm > #projectList > li > label:hover {\n\tbackground: var(--darkgray);\n}\n\naside > #projectForm > #projectList > li > input[type='radio']:checked + label {\n\tbackground: var(--blue);\n\tcolor: white;\n\tfont-weight: bold;\n}\n\naside > #addProject {\n\tmargin: 10px;\n\tfont-size: 1rem;\n\tbackground: var(--blue);\n\tcolor: white;\n\tfont-weight: bold;\n}\n\nmain {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tpadding: 15px;\n}\n\nmain > header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\nmain > header > h2 {\n\tcolor: white;\n}\n\nmain > header > button {\n\tfont-size: 1rem;\n\tfont-weight: bold;\n\tcolor: var(--blue);\n}\n\n/* #region todos */\n#todoList {\n\tlist-style-type: none;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n}\n\n.todo {\n\tdisplay: grid;\n\tgrid-template-columns: 15px 1fr;\n\tgrid-template-rows: max-content 1fr;\n\tbackground: white;\n\tcolor: black;\n\tborder-radius: 15px;\n}\n\n.todo > .status-span {\n\tdisplay: block;\n\tcontent: '';\n\tbackground: var(--darkgray);\n\tborder-top-left-radius: 15px;\n\tborder-bottom-left-radius: 15px;\n\tgrid-row: 1 / -1;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.todo > header {\n\tpadding: 5px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tfont-size: 0.9rem;\n\tmargin: 2px 5px;\n}\n\n.todo > header > menu {\n\tlist-style-type: none;\n\tdisplay: flex;\n\tgap: 5px;\n}\n\n.todo > header > menu > li > button {\n\tbackground: var(--darkgray);\n}\n\n.todo > p {\n\tmargin: 5px;\n\tfont-size: 0.9rem;\n\tpadding: 3px;\n}\n\n.todo.in-progress > .status-span,\n.todo.in-progress > header > menu > li > select {\n\tbackground: var(--yellow);\n}\n\n.todo.done > header > h3,\n.todo.done > p {\n\ttext-decoration: line-through;\n}\n\n.todo.done > .status-span,\n.todo.done > header > menu > li > select {\n\tbackground: var(--green);\n}\n\n/* #endregion */\n\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n\tpadding: 10px;\n\tgap: 10px;\n\tfont-size: 0.8rem;\n}\n\nfooter > p {\n\tcolor: white;\n}\n"],"sourceRoot":""}]);
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
	constructor({ id, title, desc, status, projectId }) {
		this.id = id;
		this.title = title;
		this.desc = desc;
		this.status = status;
		this.projectId = projectId || null;
		this.container = null;
	}

	build = (element) => {
		const container = document.createElement('li');

		container.innerHTML = `
		<article class="todo ${this.status}">
			<span class="status-span"></span>
			<header>
				<h3 class="title" contenteditable>${this.title}</h3>
				<menu>
					<li>
						<label for="status" hidden>Status</label>
						<select class="status">
							<option value="not-started" ${this.status === 'not-started' ? 'selected' : ''}>Not started</option>
							<option value="in-progress" ${this.status === 'in-progress' ? 'selected' : ''}>In progress</option>
							<option value="done" ${this.status === 'done' ? 'selected' : ''}>Done</option>
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

		const titleEl = container.querySelector('.title');
		const descriptionEl = container.querySelector('.desc');
		const statusEl = container.querySelector('.status');
		const deleteBtn = container.querySelector('.delete');

		titleEl.addEventListener('focusout', (e) => this.update('title', e.target.textContent));
		descriptionEl.addEventListener('focusout', (e) => this.update('desc', e.target.textContent));
		statusEl.addEventListener('input', (e) => {
			const article = container.querySelector('article');
			article.classList.remove(this.status);
			article.classList.add(e.target.value);

			this.update('status', e.target.value);
		});

		deleteBtn.addEventListener('click', this.delete);
	};

	update = (field, data) => {
		// don't update if the data hasn't changed
		if (this[field] === data) return;

		// format the data
		data = data.trim();

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




const sampleTodos = [
	{
		id: 0,
		title: 'Todo #1',
		desc: "A todo that I haven't started",
		status: 'not-started',
		projectId: 'default',
	},
	{
		id: 1,
		title: 'Todo #2',
		desc: "A todo that I'm doing.",
		status: 'in-progress',
		projectId: '0',
	},
	{
		id: 2,
		title: 'Todo #3',
		desc: "A todo that I've done.",
		status: 'done',
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
		this.projectListEl = document.querySelector('#projectList');
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
				status: 'not-started',
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
		// add projects to aside area
		const projectName = this.projects.find((project) => project.id === this.currentProjectId).title;
		this.projectName.textContent = projectName;

		this.setProjects();

		this.projectName.addEventListener('focusout', (e) => {
			const newTitle = e.target.textContent.trim();

			// update local storage
			const projects = JSON.parse(localStorage.getItem('projects'));
			for (const project of projects) {
				if (project.id === this.currentProjectId) {
					project.title = newTitle;
				}
			}
			localStorage.setItem('projects', JSON.stringify(projects));

			this.setProjects();
		});

		this.addProjectBtn.addEventListener('click', () => {
			const defaultProject = {
				id: crypto.randomUUID(),
				title: 'New Project',
			};

			const projects = JSON.parse(localStorage.getItem('projects'));
			projects.push(defaultProject);
			localStorage.setItem('projects', JSON.stringify(projects));

			const newProject = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](defaultProject);
			newProject.build(this.projectListEl);
		});

		this.projectForm.addEventListener('change', (e) => {
			e.preventDefault();

			const formData = new FormData(this.projectForm);
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

	setProjects = () => {
		this.projectListEl.innerHTML = '';

		this.projects = JSON.parse(localStorage.getItem('projects'));
		for (const project of this.projects) {
			const projectObj = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](project);
			projectObj.build(this.projectListEl);
		}
	};
}

const homepage = new UI();
homepage.load();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1Qiw2Q0FBSTtBQUMzQjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixnREFBTztBQUNqQztBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLDZDQUFJO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsZ0RBQU87QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvVG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG59XG5cbjpyb290IHtcblx0LS1saWdodGdyYXk6IHJnYigyNDEsIDI0MiwgMjQ0KTtcblx0LS1kYXJrZ3JheTogcmdiKDE4OSwgMTg5LCAxODkpO1xuXHQtLXllbGxvdzogcmdiKDI0MCwgMjI4LCAxNDcpO1xuXHQtLWdyZWVuOiByZ2IoMTYyLCAyNDEsIDE1Mik7XG5cdC0tYmx1ZTogcmdiKDU2LCAxMjgsIDE1MCk7XG59XG5cbmJvZHkge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcblx0aGVpZ2h0OiAxMDB2aDtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1heC1jb250ZW50O1xuXHRmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG59XG5cbmJ1dHRvbixcbnNlbGVjdCB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Zm9udC1zaXplOiAwLjhyZW07XG5cdHBhZGRpbmc6IDJweCA1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGJvcmRlcjogbm9uZTtcbn1cblxuYnV0dG9uIHtcblx0YmFja2dyb3VuZDogd2hpdGU7XG59XG5cbnNlbGVjdCB7XG5cdGJhY2tncm91bmQ6IHZhcigtLWRhcmtncmF5KTtcbn1cblxuYXNpZGUge1xuXHRncmlkLWNvbHVtbjogMSAvIDI7XG5cdGdyaWQtcm93OiAxIC8gLTE7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5hc2lkZSA+IGgxIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5hc2lkZSA+ICNwcm9qZWN0Rm9ybSA+ICNwcm9qZWN0TGlzdCB7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiA1cHg7XG5cdHBhZGRpbmc6IDEwcHg7XG59XG5cbmFzaWRlID4gI3Byb2plY3RGb3JtID4gI3Byb2plY3RMaXN0ID4gbGkgPiBpbnB1dFt0eXBlPSdyYWRpbyddIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuYXNpZGUgPiAjcHJvamVjdEZvcm0gPiAjcHJvamVjdExpc3QgPiBsaSA+IGxhYmVsIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRwYWRkaW5nOiA1cHggMTBweDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuYXNpZGUgPiAjcHJvamVjdEZvcm0gPiAjcHJvamVjdExpc3QgPiBsaSA+IGxhYmVsOmhvdmVyIHtcblx0YmFja2dyb3VuZDogdmFyKC0tZGFya2dyYXkpO1xufVxuXG5hc2lkZSA+ICNwcm9qZWN0Rm9ybSA+ICNwcm9qZWN0TGlzdCA+IGxpID4gaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkICsgbGFiZWwge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuYXNpZGUgPiAjYWRkUHJvamVjdCB7XG5cdG1hcmdpbjogMTBweDtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxubWFpbiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMTBweDtcblx0cGFkZGluZzogMTVweDtcbn1cblxubWFpbiA+IGhlYWRlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxubWFpbiA+IGhlYWRlciA+IGgyIHtcblx0Y29sb3I6IHdoaXRlO1xufVxuXG5tYWluID4gaGVhZGVyID4gYnV0dG9uIHtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Y29sb3I6IHZhcigtLWJsdWUpO1xufVxuXG4vKiAjcmVnaW9uIHRvZG9zICovXG4jdG9kb0xpc3Qge1xuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMTBweDtcbn1cblxuLnRvZG8ge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1cHggMWZyO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDFmcjtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGNvbG9yOiBibGFjaztcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLnRvZG8gPiAuc3RhdHVzLXNwYW4ge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Y29udGVudDogJyc7XG5cdGJhY2tncm91bmQ6IHZhcigtLWRhcmtncmF5KTtcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcblx0Z3JpZC1yb3c6IDEgLyAtMTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcbn1cblxuLnRvZG8gPiBoZWFkZXIge1xuXHRwYWRkaW5nOiA1cHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0Zm9udC1zaXplOiAwLjlyZW07XG5cdG1hcmdpbjogMnB4IDVweDtcbn1cblxuLnRvZG8gPiBoZWFkZXIgPiBtZW51IHtcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDVweDtcbn1cblxuLnRvZG8gPiBoZWFkZXIgPiBtZW51ID4gbGkgPiBidXR0b24ge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrZ3JheSk7XG59XG5cbi50b2RvID4gcCB7XG5cdG1hcmdpbjogNXB4O1xuXHRmb250LXNpemU6IDAuOXJlbTtcblx0cGFkZGluZzogM3B4O1xufVxuXG4udG9kby5pbi1wcm9ncmVzcyA+IC5zdGF0dXMtc3Bhbixcbi50b2RvLmluLXByb2dyZXNzID4gaGVhZGVyID4gbWVudSA+IGxpID4gc2VsZWN0IHtcblx0YmFja2dyb3VuZDogdmFyKC0teWVsbG93KTtcbn1cblxuLnRvZG8uZG9uZSA+IGhlYWRlciA+IGgzLFxuLnRvZG8uZG9uZSA+IHAge1xuXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnRvZG8uZG9uZSA+IC5zdGF0dXMtc3Bhbixcbi50b2RvLmRvbmUgPiBoZWFkZXIgPiBtZW51ID4gbGkgPiBzZWxlY3Qge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbik7XG59XG5cbi8qICNlbmRyZWdpb24gKi9cblxuZm9vdGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGdhcDogMTBweDtcblx0Zm9udC1zaXplOiAwLjhyZW07XG59XG5cbmZvb3RlciA+IHAge1xuXHRjb2xvcjogd2hpdGU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxzQkFBc0I7Q0FDdEIsU0FBUztDQUNULFVBQVU7QUFDWDs7QUFFQTtDQUNDLCtCQUErQjtDQUMvQiw4QkFBOEI7Q0FDOUIsNEJBQTRCO0NBQzVCLDJCQUEyQjtDQUMzQix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLGFBQWE7Q0FDYixnQ0FBZ0M7Q0FDaEMsbUNBQW1DO0NBQ25DLGdEQUFnRDtBQUNqRDs7QUFFQTs7Q0FFQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFFBQVE7Q0FDUixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsV0FBVztDQUNYLHFCQUFxQjtDQUNyQixpQkFBaUI7Q0FDakIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtDQUNmLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0NBQ1QsYUFBYTtBQUNkOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25COztBQUVBLGtCQUFrQjtBQUNsQjtDQUNDLHFCQUFxQjtDQUNyQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiwrQkFBK0I7Q0FDL0IsbUNBQW1DO0NBQ25DLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsY0FBYztDQUNkLFdBQVc7Q0FDWCwyQkFBMkI7Q0FDM0IsNEJBQTRCO0NBQzVCLCtCQUErQjtDQUMvQixnQkFBZ0I7Q0FDaEIsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDhCQUE4QjtDQUM5QixpQkFBaUI7Q0FDakIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixhQUFhO0NBQ2IsUUFBUTtBQUNUOztBQUVBO0NBQ0MsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixZQUFZO0FBQ2I7O0FBRUE7O0NBRUMseUJBQXlCO0FBQzFCOztBQUVBOztDQUVDLDZCQUE2QjtBQUM5Qjs7QUFFQTs7Q0FFQyx3QkFBd0I7QUFDekI7O0FBRUEsZUFBZTs7QUFFZjtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLFNBQVM7Q0FDVCxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcblxcdC0tbGlnaHRncmF5OiByZ2IoMjQxLCAyNDIsIDI0NCk7XFxuXFx0LS1kYXJrZ3JheTogcmdiKDE4OSwgMTg5LCAxODkpO1xcblxcdC0teWVsbG93OiByZ2IoMjQwLCAyMjgsIDE0Nyk7XFxuXFx0LS1ncmVlbjogcmdiKDE2MiwgMjQxLCAxNTIpO1xcblxcdC0tYmx1ZTogcmdiKDU2LCAxMjgsIDE1MCk7XFxufVxcblxcbmJvZHkge1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtYXgtY29udGVudDtcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmb250LXNpemU6IDAuOHJlbTtcXG5cXHRwYWRkaW5nOiAycHggNXB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcblxcdGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5zZWxlY3Qge1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWRhcmtncmF5KTtcXG59XFxuXFxuYXNpZGUge1xcblxcdGdyaWQtY29sdW1uOiAxIC8gMjtcXG5cXHRncmlkLXJvdzogMSAvIC0xO1xcblxcdGJhY2tncm91bmQ6IHdoaXRlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYXNpZGUgPiBoMSB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5hc2lkZSA+ICNwcm9qZWN0Rm9ybSA+ICNwcm9qZWN0TGlzdCB7XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDVweDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5hc2lkZSA+ICNwcm9qZWN0Rm9ybSA+ICNwcm9qZWN0TGlzdCA+IGxpID4gaW5wdXRbdHlwZT0ncmFkaW8nXSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYXNpZGUgPiAjcHJvamVjdEZvcm0gPiAjcHJvamVjdExpc3QgPiBsaSA+IGxhYmVsIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHBhZGRpbmc6IDVweCAxMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmFzaWRlID4gI3Byb2plY3RGb3JtID4gI3Byb2plY3RMaXN0ID4gbGkgPiBsYWJlbDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tZGFya2dyYXkpO1xcbn1cXG5cXG5hc2lkZSA+ICNwcm9qZWN0Rm9ybSA+ICNwcm9qZWN0TGlzdCA+IGxpID4gaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkICsgbGFiZWwge1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuYXNpZGUgPiAjYWRkUHJvamVjdCB7XFxuXFx0bWFyZ2luOiAxMHB4O1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbm1haW4ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0cGFkZGluZzogMTVweDtcXG59XFxuXFxubWFpbiA+IGhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbm1haW4gPiBoZWFkZXIgPiBoMiB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG5tYWluID4gaGVhZGVyID4gYnV0dG9uIHtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Y29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4vKiAjcmVnaW9uIHRvZG9zICovXFxuI3RvZG9MaXN0IHtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMTBweDtcXG59XFxuXFxuLnRvZG8ge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNXB4IDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDFmcjtcXG5cXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLnRvZG8gPiAuc3RhdHVzLXNwYW4ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWRhcmtncmF5KTtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XFxuXFx0Z3JpZC1yb3c6IDEgLyAtMTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50b2RvID4gaGVhZGVyIHtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRmb250LXNpemU6IDAuOXJlbTtcXG5cXHRtYXJnaW46IDJweCA1cHg7XFxufVxcblxcbi50b2RvID4gaGVhZGVyID4gbWVudSB7XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiA1cHg7XFxufVxcblxcbi50b2RvID4gaGVhZGVyID4gbWVudSA+IGxpID4gYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrZ3JheSk7XFxufVxcblxcbi50b2RvID4gcCB7XFxuXFx0bWFyZ2luOiA1cHg7XFxuXFx0Zm9udC1zaXplOiAwLjlyZW07XFxuXFx0cGFkZGluZzogM3B4O1xcbn1cXG5cXG4udG9kby5pbi1wcm9ncmVzcyA+IC5zdGF0dXMtc3BhbixcXG4udG9kby5pbi1wcm9ncmVzcyA+IGhlYWRlciA+IG1lbnUgPiBsaSA+IHNlbGVjdCB7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0teWVsbG93KTtcXG59XFxuXFxuLnRvZG8uZG9uZSA+IGhlYWRlciA+IGgzLFxcbi50b2RvLmRvbmUgPiBwIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8uZG9uZSA+IC5zdGF0dXMtc3BhbixcXG4udG9kby5kb25lID4gaGVhZGVyID4gbWVudSA+IGxpID4gc2VsZWN0IHtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG5mb290ZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0Zm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbmZvb3RlciA+IHAge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcblx0Y29uc3RydWN0b3IoeyBpZCwgdGl0bGUsIHNlbGVjdGVkIH0pIHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZCB8fCBmYWxzZTtcblx0fVxuXG5cdGJ1aWxkID0gKGVsZW1lbnQpID0+IHtcblx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRcdGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG5cdFx0Y29udGFpbmVyLmlubmVySFRNTCA9IGBcblx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNlbGVjdGVkSWRcIiBpZD1cIiR7dGhpcy5pZH1cIiB2YWx1ZT1cIiR7dGhpcy5pZH1cIiAke3RoaXMuc2VsZWN0ZWQgPyAnY2hlY2tlZCcgOiAnJ30+XG5cdFx0PGxhYmVsIGZvcj0ke3RoaXMuaWR9PiR7dGhpcy50aXRsZX08L2xhYmVsPlxuXHRcdGA7XG5cblx0XHRlbGVtZW50LmFwcGVuZChjb250YWluZXIpO1xuXHRcdHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXHR9O1xuXG5cdHVwZGF0ZSA9IChmaWVsZCwgZGF0YSkgPT4ge1xuXHRcdC8vIGRvbid0IHVwZGF0ZSBpZiB0aGUgZGF0YSBoYXNuJ3QgY2hhbmdlZFxuXHRcdGlmICh0aGlzW2ZpZWxkXSA9PT0gZGF0YSkgcmV0dXJuO1xuXG5cdFx0Ly8gZm9ybWF0IHRoZSBkYXRhXG5cdFx0ZGF0YSA9IGRhdGEudHJpbSgpO1xuXG5cdFx0Ly8gdXBkYXRlIHRoZSBpbnN0YW5jZVxuXHRcdHRoaXNbZmllbGRdID0gZGF0YTtcblxuXHRcdC8vIHVwZGF0ZSBsb2NhbCBzdG9yYWdlXG5cdFx0Y29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcblx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgcHJvamVjdHMpIHtcblx0XHRcdGlmIChpdGVtLmlkID09PSB0aGlzLmlkKSBpdGVtW2ZpZWxkXSA9IGRhdGE7XG5cdFx0fVxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG5cdH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcblx0Y29uc3RydWN0b3IoeyBpZCwgdGl0bGUsIGRlc2MsIHN0YXR1cywgcHJvamVjdElkIH0pIHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMuZGVzYyA9IGRlc2M7XG5cdFx0dGhpcy5zdGF0dXMgPSBzdGF0dXM7XG5cdFx0dGhpcy5wcm9qZWN0SWQgPSBwcm9qZWN0SWQgfHwgbnVsbDtcblx0XHR0aGlzLmNvbnRhaW5lciA9IG51bGw7XG5cdH1cblxuXHRidWlsZCA9IChlbGVtZW50KSA9PiB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuXHRcdGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG5cdFx0PGFydGljbGUgY2xhc3M9XCJ0b2RvICR7dGhpcy5zdGF0dXN9XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cInN0YXR1cy1zcGFuXCI+PC9zcGFuPlxuXHRcdFx0PGhlYWRlcj5cblx0XHRcdFx0PGgzIGNsYXNzPVwidGl0bGVcIiBjb250ZW50ZWRpdGFibGU+JHt0aGlzLnRpdGxlfTwvaDM+XG5cdFx0XHRcdDxtZW51PlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJzdGF0dXNcIiBoaWRkZW4+U3RhdHVzPC9sYWJlbD5cblx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3M9XCJzdGF0dXNcIj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIm5vdC1zdGFydGVkXCIgJHt0aGlzLnN0YXR1cyA9PT0gJ25vdC1zdGFydGVkJyA/ICdzZWxlY3RlZCcgOiAnJ30+Tm90IHN0YXJ0ZWQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cImluLXByb2dyZXNzXCIgJHt0aGlzLnN0YXR1cyA9PT0gJ2luLXByb2dyZXNzJyA/ICdzZWxlY3RlZCcgOiAnJ30+SW4gcHJvZ3Jlc3M8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cImRvbmVcIiAke3RoaXMuc3RhdHVzID09PSAnZG9uZScgPyAnc2VsZWN0ZWQnIDogJyd9PkRvbmU8L29wdGlvbj5cblx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkZWxldGVcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoXCI+PC9pPjwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDwvbWVudT5cblx0XHRcdDwvaGVhZGVyPlxuXHRcdFx0PHAgY2xhc3M9XCJkZXNjXCIgY29udGVudGVkaXRhYmxlPiR7dGhpcy5kZXNjfTwvcD5cblx0XHQ8L2FydGljbGU+XG5cdFx0YDtcblxuXHRcdGVsZW1lbnQuYXBwZW5kKGNvbnRhaW5lcik7XG5cdFx0dGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cblx0XHRjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuXHRcdGNvbnN0IGRlc2NyaXB0aW9uRWwgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmRlc2MnKTtcblx0XHRjb25zdCBzdGF0dXNFbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzJyk7XG5cdFx0Y29uc3QgZGVsZXRlQnRuID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKTtcblxuXHRcdHRpdGxlRWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoZSkgPT4gdGhpcy51cGRhdGUoJ3RpdGxlJywgZS50YXJnZXQudGV4dENvbnRlbnQpKTtcblx0XHRkZXNjcmlwdGlvbkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGUpID0+IHRoaXMudXBkYXRlKCdkZXNjJywgZS50YXJnZXQudGV4dENvbnRlbnQpKTtcblx0XHRzdGF0dXNFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG5cdFx0XHRjb25zdCBhcnRpY2xlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGUnKTtcblx0XHRcdGFydGljbGUuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnN0YXR1cyk7XG5cdFx0XHRhcnRpY2xlLmNsYXNzTGlzdC5hZGQoZS50YXJnZXQudmFsdWUpO1xuXG5cdFx0XHR0aGlzLnVwZGF0ZSgnc3RhdHVzJywgZS50YXJnZXQudmFsdWUpO1xuXHRcdH0pO1xuXG5cdFx0ZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGUpO1xuXHR9O1xuXG5cdHVwZGF0ZSA9IChmaWVsZCwgZGF0YSkgPT4ge1xuXHRcdC8vIGRvbid0IHVwZGF0ZSBpZiB0aGUgZGF0YSBoYXNuJ3QgY2hhbmdlZFxuXHRcdGlmICh0aGlzW2ZpZWxkXSA9PT0gZGF0YSkgcmV0dXJuO1xuXG5cdFx0Ly8gZm9ybWF0IHRoZSBkYXRhXG5cdFx0ZGF0YSA9IGRhdGEudHJpbSgpO1xuXG5cdFx0Ly8gdXBkYXRlIHRoZSBpbnN0YW5jZVxuXHRcdHRoaXNbZmllbGRdID0gZGF0YTtcblxuXHRcdC8vIHVwZGF0ZSBsb2NhbCBzdG9yYWdlXG5cdFx0Y29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcblx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgdG9kb3MpIHtcblx0XHRcdGlmIChpdGVtLmlkID09PSB0aGlzLmlkKSBpdGVtW2ZpZWxkXSA9IGRhdGE7XG5cdFx0fVxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG5cdH07XG5cblx0ZGVsZXRlID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG5cdFx0bGV0IHVwZGF0ZWRUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gdGhpcy5pZCk7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFRvZG9zKSk7XG5cdFx0dGhpcy5jb250YWluZXIucmVtb3ZlKCk7XG5cdH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL1RvZG8nO1xuXG5jb25zdCBzYW1wbGVUb2RvcyA9IFtcblx0e1xuXHRcdGlkOiAwLFxuXHRcdHRpdGxlOiAnVG9kbyAjMScsXG5cdFx0ZGVzYzogXCJBIHRvZG8gdGhhdCBJIGhhdmVuJ3Qgc3RhcnRlZFwiLFxuXHRcdHN0YXR1czogJ25vdC1zdGFydGVkJyxcblx0XHRwcm9qZWN0SWQ6ICdkZWZhdWx0Jyxcblx0fSxcblx0e1xuXHRcdGlkOiAxLFxuXHRcdHRpdGxlOiAnVG9kbyAjMicsXG5cdFx0ZGVzYzogXCJBIHRvZG8gdGhhdCBJJ20gZG9pbmcuXCIsXG5cdFx0c3RhdHVzOiAnaW4tcHJvZ3Jlc3MnLFxuXHRcdHByb2plY3RJZDogJzAnLFxuXHR9LFxuXHR7XG5cdFx0aWQ6IDIsXG5cdFx0dGl0bGU6ICdUb2RvICMzJyxcblx0XHRkZXNjOiBcIkEgdG9kbyB0aGF0IEkndmUgZG9uZS5cIixcblx0XHRzdGF0dXM6ICdkb25lJyxcblx0XHRwcm9qZWN0SWQ6ICcwJyxcblx0fSxcbl07XG5cbmNvbnN0IHNhbXBsZVByb2plY3RzID0gW1xuXHR7XG5cdFx0aWQ6ICdkZWZhdWx0Jyxcblx0XHR0aXRsZTogJ0RlZmF1bHQnLFxuXHRcdHNlbGVjdGVkOiB0cnVlLFxuXHR9LFxuXHR7XG5cdFx0aWQ6ICcwJyxcblx0XHR0aXRsZTogJ1Byb2plY3QgMScsXG5cdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuXHR9LFxuXTtcblxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSkge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeShzYW1wbGVUb2RvcykpO1xufVxuXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHNhbXBsZVByb2plY3RzKSk7XG59XG5cbmNsYXNzIFVJIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5hc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJyk7XG5cdFx0dGhpcy50b2RvTGlzdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9MaXN0Jyk7XG5cdFx0dGhpcy5hZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRvZG8nKTtcblx0XHR0aGlzLmFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdCcpO1xuXHRcdHRoaXMucHJvamVjdExpc3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdCcpO1xuXHRcdHRoaXMucHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEZvcm0nKTtcblx0XHR0aGlzLnByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJyk7XG5cblx0XHR0aGlzLnRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG5cdFx0dGhpcy5wcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuXHRcdHRoaXMuY3VycmVudFByb2plY3RJZCA9IHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5zZWxlY3RlZCkuaWQgfHwgJ2RlZmF1bHQnO1xuXHR9XG5cblx0bG9hZCA9ICgpID0+IHtcblx0XHQvLyAjcmVnaW9uIHRvZG9zXG5cdFx0dGhpcy5zZXRUb2RvcygpO1xuXG5cdFx0dGhpcy5hZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0Y29uc3QgZGVmYXVsdFRvZG8gPSB7XG5cdFx0XHRcdGlkOiBjcnlwdG8ucmFuZG9tVVVJRCgpLFxuXHRcdFx0XHR0aXRsZTogJ05ldyB0b2RvJyxcblx0XHRcdFx0ZGVzYzogJ0FkZCBhIGRlc2NyaXB0aW9uLi4uJyxcblx0XHRcdFx0c3RhdHVzOiAnbm90LXN0YXJ0ZWQnLFxuXHRcdFx0XHRwcm9qZWN0SWQ6IHRoaXMuY3VycmVudFByb2plY3RJZCxcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG5cdFx0XHR0b2Rvcy5wdXNoKGRlZmF1bHRUb2RvKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG5cblx0XHRcdGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhkZWZhdWx0VG9kbyk7XG5cdFx0XHRuZXdUb2RvLmJ1aWxkKHRoaXMudG9kb0xpc3RFbCk7XG5cdFx0fSk7XG5cdFx0Ly8gI2VuZHJlZ2lvblxuXG5cdFx0Ly8gI3JlZ2lvbiBwcm9qZWN0c1xuXHRcdC8vIGFkZCBwcm9qZWN0cyB0byBhc2lkZSBhcmVhXG5cdFx0Y29uc3QgcHJvamVjdE5hbWUgPSB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHRoaXMuY3VycmVudFByb2plY3RJZCkudGl0bGU7XG5cdFx0dGhpcy5wcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuXG5cdFx0dGhpcy5zZXRQcm9qZWN0cygpO1xuXG5cdFx0dGhpcy5wcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIChlKSA9PiB7XG5cdFx0XHRjb25zdCBuZXdUaXRsZSA9IGUudGFyZ2V0LnRleHRDb250ZW50LnRyaW0oKTtcblxuXHRcdFx0Ly8gdXBkYXRlIGxvY2FsIHN0b3JhZ2Vcblx0XHRcdGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG5cdFx0XHRmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcblx0XHRcdFx0aWYgKHByb2plY3QuaWQgPT09IHRoaXMuY3VycmVudFByb2plY3RJZCkge1xuXHRcdFx0XHRcdHByb2plY3QudGl0bGUgPSBuZXdUaXRsZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcblxuXHRcdFx0dGhpcy5zZXRQcm9qZWN0cygpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0Y29uc3QgZGVmYXVsdFByb2plY3QgPSB7XG5cdFx0XHRcdGlkOiBjcnlwdG8ucmFuZG9tVVVJRCgpLFxuXHRcdFx0XHR0aXRsZTogJ05ldyBQcm9qZWN0Jyxcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG5cdFx0XHRwcm9qZWN0cy5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG5cblx0XHRcdGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG5cdFx0XHRuZXdQcm9qZWN0LmJ1aWxkKHRoaXMucHJvamVjdExpc3RFbCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMucHJvamVjdEZvcm0pO1xuXHRcdFx0Y29uc3QgbmV3SWQgPSBmb3JtRGF0YS5nZXQoJ3NlbGVjdGVkSWQnKTtcblx0XHRcdGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG5cdFx0XHRmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcblx0XHRcdFx0aWYgKHByb2plY3QuaWQgPT09IHRoaXMuY3VycmVudFByb2plY3RJZCkgcHJvamVjdC5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZiAocHJvamVjdC5pZCA9PT0gbmV3SWQpIHByb2plY3Quc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcblxuXHRcdFx0dGhpcy5jdXJyZW50UHJvamVjdElkID0gbmV3SWQ7XG5cdFx0XHRjb25zdCBwcm9qZWN0TmFtZSA9IHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gdGhpcy5jdXJyZW50UHJvamVjdElkKS50aXRsZTtcblx0XHRcdHRoaXMucHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcblx0XHRcdHRoaXMuc2V0VG9kb3MoKTtcblx0XHR9KTtcblx0XHQvLyAjZW5kcmVnaW9uXG5cdH07XG5cblx0c2V0VG9kb3MgPSAoKSA9PiB7XG5cdFx0dGhpcy50b2RvTGlzdEVsLmlubmVySFRNTCA9ICcnO1xuXHRcdHRoaXMudG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcblx0XHRjb25zdCBjdXJyZW50UHJvamVjdFRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8ucHJvamVjdElkID09PSB0aGlzLmN1cnJlbnRQcm9qZWN0SWQpO1xuXG5cdFx0Ly8gYWRkIHRvZG9zIHRvIGNvbnRlbnQgYXJlYVxuXHRcdGZvciAoY29uc3QgdG9kbyBvZiBjdXJyZW50UHJvamVjdFRvZG9zKSB7XG5cdFx0XHRjb25zdCB0b2RvT2JqID0gbmV3IFRvZG8odG9kbyk7XG5cdFx0XHR0b2RvT2JqLmJ1aWxkKHRoaXMudG9kb0xpc3RFbCk7XG5cdFx0fVxuXHR9O1xuXG5cdHNldFByb2plY3RzID0gKCkgPT4ge1xuXHRcdHRoaXMucHJvamVjdExpc3RFbC5pbm5lckhUTUwgPSAnJztcblxuXHRcdHRoaXMucHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcblx0XHRmb3IgKGNvbnN0IHByb2plY3Qgb2YgdGhpcy5wcm9qZWN0cykge1xuXHRcdFx0Y29uc3QgcHJvamVjdE9iaiA9IG5ldyBQcm9qZWN0KHByb2plY3QpO1xuXHRcdFx0cHJvamVjdE9iai5idWlsZCh0aGlzLnByb2plY3RMaXN0RWwpO1xuXHRcdH1cblx0fTtcbn1cblxuY29uc3QgaG9tZXBhZ2UgPSBuZXcgVUkoKTtcbmhvbWVwYWdlLmxvYWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==