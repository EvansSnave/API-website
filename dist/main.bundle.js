"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkapi_website"] = self["webpackChunkapi_website"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* stylelint-disable csstree/validator */\n/* stylelint-disable unit-no-unknown */\n* {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n  list-style: none;\n  font-weight: 100;\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: transparent;\n}\n\nbody {\n  height: 100%;\n  display: grid;\n}\n\nmain {\n  background-color: red;\n}\n\n.home__list {\n  width: fit-content;\n  display: grid;\n  grid-gap: calc(1dvw + 0.6rem);\n  column-gap: calc(3dvw + 0.6rem);\n  margin: calc(1dvw + 0.6rem);\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.home__pokemon {\n  display: flex;\n  justify-content: center;\n}\n\n.list__pokemon {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: solid black 3px;\n  border-radius: 20px;\n  background-color: white;\n}\n\n.list__pokemon:hover {\n  scale: 1.05;\n  transition: 0.5s;\n}\n\n.pokemon__heart-icon {\n  width: calc(1dvw + 1rem);\n}\n\n.pokemon__heart-icon:hover {\n  animation: like 1.5s;\n}\n\n@keyframes like {\n  10% {\n    scale: 1.2;\n  }\n\n  50% {\n    scale: 0.7;\n  }\n\n  100% {\n    scale: 1;\n  }\n}\n\n.home__logo {\n  width: calc(1dvw + 1rem);\n}\n\nnav {\n  display: flex;\n  padding: clamp(1.3dvw + 5px, 2dvw + 10px, 1dvw + 1px);\n  padding-left: clamp(7dvw + 5px, 4dvw + 10px, 3dvw + 1px);\n  align-items: center;\n  background-color: white;\n  border-bottom: solid black 2px;\n  position: sticky;\n  width: 100%;\n  top: 0;\n  z-index: 100;\n}\n\n.footer__p {\n  padding: clamp(1.3dvw + 5px, 2dvw + 10px, 1dvw + 1px);\n  padding-left: clamp(7dvw + 5px, 4dvw + 10px, 3dvw + 1px);\n  background-color: white;\n  border-top: solid black 2px;\n}\n\nnav > * {\n  margin-right: clamp(0.3dvw + 5px, 0.2dvw + 10px, 0.2dvw + 1px);\n}\n\n.pokemon__image {\n  width: max(13dvw, 200px);\n  padding: calc(1dvw + 0.6rem);\n}\n\n.pokemon__info-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.pokemon__icon-container {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-left: 1dvw;\n}\n\n.pokemon__button {\n  width: fit-content;\n  /* stylelint-disable-next-line */\n  margin: calc(0.3dvw + 0.7rem);\n  /* stylelint-disable-next-line */\n  padding: calc(0.3dvw + 0.5rem);\n  /* stylelint-disable-next-line */\n  border-radius: calc(0.3dvw + 0.7rem);\n  border: solid black 2px;\n}\n\n.close-button {\n  width: calc(2dvw + 1rem);\n}\n\n.comment-window {\n  display: flex;\n  z-index: 100;\n  position: fixed;\n  top: 28%;\n  left: 28%;\n  transform: translate(-20%, -20%);\n  width: 70%;\n  height: 85%;\n  background-color: white;\n  padding: 5%;\n  flex-direction: column;\n  align-items: center;\n  border: black solid 7px;\n  border-radius: 5%;\n  overflow: scroll;\n}\n\n.comment-window,\nmain {\n  grid-area: 1/1;\n}\n\n.comment-window::-webkit-scrollbar {\n  display: none;\n}\n\n.images {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  width: 100%;\n}\n\n.pokemon-generated {\n  width: 30dvw;\n  margin-right: 10dvw;\n}\n\n.pokemon-name {\n  margin: 3dvw;\n  font-size: 5dvw;\n  width: fit-content;\n}\n\n.comment-window > * {\n  font-size: 2dvw;\n}\n\n.info-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.list-info,\n.comments-shown {\n  width: 100%;\n  margin-bottom: 3dvw;\n}\n\n.list-info > * {\n  margin-bottom: 2dvw;\n}\n\n.comment-data {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n}\n\n.comment-form {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.add-comment {\n  font-size: 3dvw;\n  width: fit-content;\n  margin-bottom: 2dvw;\n}\n\n.comments-number {\n  margin-bottom: 1.5dvw;\n}\n\n.user-name,\n.comment,\n.comment-button {\n  border: 5px black solid;\n  padding: 1dvw;\n  font-size: 2dvw;\n  margin-bottom: 1dvw;\n  border-radius: 10px;\n}\n\n.comment-button {\n  background-color: red;\n  color: white;\n  width: 60%;\n}\n\n.comment-button:hover {\n  scale: 1.1;\n  transition: 0.5s;\n}\n\nth,\ntd {\n  border-bottom: 1.5dvw solid transparent;\n  padding-left: 2dvw;\n}\n\n.data-date {\n  padding-left: 0;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://api-website/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://api-website/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://api-website/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://api-website/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://api-website/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://api-website/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://api-website/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://api-website/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://api-website/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://api-website/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_appID_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/appID.js */ \"./src/modules/appID.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_createPokemon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createPokemon.js */ \"./src/modules/createPokemon.js\");\n/* harmony import */ var _modules_makePokemonList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/makePokemonList.js */ \"./src/modules/makePokemonList.js\");\n/* harmony import */ var _modules_getLikes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/getLikes.js */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _modules_homeCounter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/homeCounter.js */ \"./src/modules/homeCounter.js\");\n/* harmony import */ var _modules_commentButton_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/commentButton.js */ \"./src/modules/commentButton.js\");\n\n\n\n\n\n\n\n\nif (!localStorage.getItem('appId')) await (0,_modules_appID_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst pokemonData = [];\n\nconst storage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nfor (let i = 1; i < storage.length; i += 1) {\n  const pokem = new _modules_createPokemon_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](i);\n  const pokemon = pokem.data();\n  (0,_modules_getLikes_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  pokemonData.push(pokemon);\n}\n\n(0,_modules_homeCounter_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(pokemonData);\n\n(0,_modules_makePokemonList_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(pokemonData);\n\n(0,_modules_commentButton_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://api-website/./src/index.js?");

/***/ }),

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentSent = async (object) => {\n  try {\n    if (object.name === '' || object.comment === '') return;\n    const appID = localStorage.getItem('appId');\n    const response = await fetch(\n      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments`,\n      {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json; charset=UTF-8',\n        },\n        body: JSON.stringify({\n          username: object.name,\n          item_id: object.id,\n          comment: object.comment,\n        }),\n      },\n    );\n    if (response.ok !== true) throw new Error('Failed to make a new comment.');\n  } catch (error) {\n    throw new Error(`Failed to add a new comment. Error => ${error}`);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentSent);\n\n//# sourceURL=webpack://api-website/./src/modules/addComment.js?");

/***/ }),

/***/ "./src/modules/addLikes.js":
/*!*********************************!*\
  !*** ./src/modules/addLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst liking = (int) => `<p class=\"likes\">${int} likes</p>`;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (liking);\n\n//# sourceURL=webpack://api-website/./src/modules/addLikes.js?");

/***/ }),

/***/ "./src/modules/appID.js":
/*!******************************!*\
  !*** ./src/modules/appID.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst appId = async () => {\n  try {\n    const response = await fetch(\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',\n      {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json; charset=UTF-8',\n        },\n        body: JSON.stringify({\n          name: 'Pokemon APP',\n        }),\n      },\n    );\n\n    if (response.ok !== true) throw new Error('Failed to create a new app.');\n\n    const newAppResult = await response.text();\n\n    localStorage.setItem('appId', newAppResult);\n  } catch (error) {\n    throw new Error(`Failed to create a new app. Error => ${error}`);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appId);\n\n//# sourceURL=webpack://api-website/./src/modules/appID.js?");

/***/ }),

/***/ "./src/modules/closeButton.js":
/*!************************************!*\
  !*** ./src/modules/closeButton.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst closeWindow = () => {\n  const closeButtons = document.querySelectorAll('.close-button');\n  const cards = document.querySelectorAll('.comment-window');\n  closeButtons.forEach((button, index) => {\n    button.addEventListener('click', () => {\n      cards[index].remove();\n      document.body.style.overflow = 'scroll';\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeWindow);\n\n//# sourceURL=webpack://api-website/./src/modules/closeButton.js?");

/***/ }),

/***/ "./src/modules/commentButton.js":
/*!**************************************!*\
  !*** ./src/modules/commentButton.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _closeButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closeButton.js */ \"./src/modules/closeButton.js\");\n/* harmony import */ var _createCommentDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCommentDOM.js */ \"./src/modules/createCommentDOM.js\");\n/* harmony import */ var _createPokemon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPokemon.js */ \"./src/modules/createPokemon.js\");\n/* harmony import */ var _submitComment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submitComment.js */ \"./src/modules/submitComment.js\");\n/* harmony import */ var _loadComments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadComments.js */ \"./src/modules/loadComments.js\");\n\n\n\n\n\n\nconst commentButton = () => {\n  const buttons = document.querySelectorAll('.comments');\n  buttons.forEach(async (button, index) => {\n    const pokemon = new _createPokemon_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](index + 1);\n    const newPokemon = await pokemon.data();\n    button.addEventListener('click', () => {\n      const card = {\n        image: newPokemon.sprites.front_default,\n        name: newPokemon.name,\n        weight: newPokemon.weight,\n        ability: newPokemon.abilities[0].ability.name,\n        type: newPokemon.types[0].type.name,\n        move: newPokemon.moves[0].move.name,\n        id: newPokemon.id,\n      };\n      (0,_createCommentDOM_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(card);\n      (0,_closeButton_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      (0,_submitComment_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(card.id);\n      (0,_loadComments_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(card.id);\n      document.body.style.overflow = 'hidden';\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentButton);\n\n//# sourceURL=webpack://api-website/./src/modules/commentButton.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = (arr) => {\n  const p = document.querySelector('.comments-number');\n  p.innerHTML = '';\n  if (arr[0].username === 'no one has commented yet') {\n    p.innerHTML += 'Comments (0)';\n  } else p.innerHTML += `Comments (${arr.length})`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://api-website/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/createCommentDOM.js":
/*!*****************************************!*\
  !*** ./src/modules/createCommentDOM.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_assets_xIcon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../src/assets/xIcon.png */ \"./src/assets/xIcon.png\");\n/* eslint-disable */\n\nconst createComment = (card) => {\n  const commentWindow = document.createElement('div');\n  commentWindow.classList.add('comment-window');\n  commentWindow.innerHTML = `\n  <div class=\"images\">\n    <img class=\"pokemon-generated\" src=\"${card.image}\" alt=\"${card.name}\">\n    <img class=\"close-button\" src=\"${_src_assets_xIcon_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"close-window\">\n  </div>\n  <div class=\"info-container\">\n    <p class=\"pokemon-name\">${card.name}</p>\n    <ul class=\"list-info\">\n      <li class=\"weight\">Weight: ${card.weight}</li>\n      <li class=\"ability\">Ability: ${card.ability}</li>\n      <li class=\"type\">Type: ${card.type}</li>\n      <li class=\"move\">Favourite move: ${card.move}</li>\n    </ul>\n  </div>\n  <div class=\"comments-shown\">\n    <p class=\"comments-number\"></p>\n    <table class=\"comments-tables\">\n      <tbody class=\"comments-table\"></tbody>\n    </table>\n  </div>\n  <form class=\"comment-form\" action=\"\">\n    <p class=\"add-comment\">Add a comment</p>\n    <div class=\"comment-data\">\n      <input type=\"text\" placeholder=\"Your name\" class=\"user-name\" required>\n      <textarea name=\"\" class=\"comment\" cols=\"30\" rows=\"10\" placeholder=\"Your insights\" required></textarea>\n      <button class=\"comment-button\" type=\"submit\">Comment</button>\n    </div> \n  </form>\n  `;\n  document.body.appendChild(commentWindow);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createComment);\n\n//# sourceURL=webpack://api-website/./src/modules/createCommentDOM.js?");

/***/ }),

/***/ "./src/modules/createLi.js":
/*!*********************************!*\
  !*** ./src/modules/createLi.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_assets_heart_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../src/assets/heart.png */ \"./src/assets/heart.png\");\n/* eslint-disable */\n\nconst makeCard = (pokemon) => { return `\n\n    <li class=\"list__pokemon\">\n        <img class=\"pokemon__image\" src=\"${pokemon.sprites.front_default}\" alt=\"${pokemon.name} image\">\n        <div class=\"pokemon__info-container\">\n            <p>${pokemon.name}</p>\n            <div class=\"pokemon__icon-container\">\n                <img class=\"pokemon__heart-icon\" id=\"heart${pokemon.id}\" src=\"${_src_assets_heart_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"like icon\">\n            </div>\n        </div>\n        <button class=\"pokemon__button comments\">Comments</button>\n    </li>\n\n  `;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeCard);\n\n//# sourceURL=webpack://api-website/./src/modules/createLi.js?");

/***/ }),

/***/ "./src/modules/createPokemon.js":
/*!**************************************!*\
  !*** ./src/modules/createPokemon.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Pokemon {\n  constructor(id) {\n    this.id = id;\n  }\n\n  async data() {\n    try {\n      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}/`);\n      if (!response.ok) throw new Error('Failed to create a new pokemon.');\n      const pokemonData = await response.json();\n      return pokemonData;\n    } catch (error) {\n      throw new Error(`Failed to create a new pokemon. Error => ${error}`);\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pokemon);\n\n\n//# sourceURL=webpack://api-website/./src/modules/createPokemon.js?");

/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComment = async (id) => {\n  try {\n    const appID = localStorage.getItem('appId');\n    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments?item_id=${id}`);\n    const dataComment = await response.json();\n    if (dataComment.error) return [{ creation_date: 'no data', username: 'no one has commented yet', comment: 'Be the first to comment!' }];\n    if (response.ok !== true) throw new Error('Failed to make a new comment.');\n    return dataComment;\n  } catch (error) {\n    throw new Error(`Failed to add a new comment. Error => ${error}`);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComment);\n\n//# sourceURL=webpack://api-website/./src/modules/getComments.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst likesStored = async () => {\n  try {\n    const appID = localStorage.getItem('appId');\n    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes`);\n    if (!response.ok) throw new Error('Failed to get likes data.');\n    const arrLikes = [];\n    if (response.body) {\n      const reader = response.body.getReader();\n      const decoder = new TextDecoder('utf-8');\n      let result = await reader.read();\n      let chunk = decoder.decode(result.value || new Uint8Array(), { stream: !result.done });\n      while (!result.done) {\n        result = reader.read();\n        chunk += decoder.decode(result.value || new Uint8Array(), { stream: !result.done });\n      }\n      if (chunk.trim() !== '') {\n        JSON.parse(chunk).forEach((element) => {\n          arrLikes.push(element);\n        });\n      }\n    }\n    if (arrLikes.length === 0) return;\n    localStorage.setItem('likes', JSON.stringify(arrLikes));\n  } catch (error) {\n    throw new Error(`Failed to get likes data. Error => ${error}`);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likesStored);\n\n//# sourceURL=webpack://api-website/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/homeCounter.js":
/*!************************************!*\
  !*** ./src/modules/homeCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeCounter = (arr) => {\n  const amount = document.querySelector('.home__pokemon-amount');\n  amount.textContent = `Pokemon (${arr.length})`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeCounter);\n\n//# sourceURL=webpack://api-website/./src/modules/homeCounter.js?");

/***/ }),

/***/ "./src/modules/insertPokemon.js":
/*!**************************************!*\
  !*** ./src/modules/insertPokemon.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createLi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createLi.js */ \"./src/modules/createLi.js\");\n\n\nconst insert = (pokemon) => {\n  const ul = document.querySelector('.home__list');\n  ul.innerHTML += (0,_createLi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pokemon);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (insert);\n\n//# sourceURL=webpack://api-website/./src/modules/insertPokemon.js?");

/***/ }),

/***/ "./src/modules/like.js":
/*!*****************************!*\
  !*** ./src/modules/like.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _updateLikesDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateLikesDOM.js */ \"./src/modules/updateLikesDOM.js\");\n\n\n\nconst like = async (id) => {\n  try {\n    const appID = localStorage.getItem('appId');\n    const response = await fetch(\n      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes/`,\n      {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json; charset=UTF-8',\n        },\n        body: JSON.stringify({\n          name: 'Pokemon like',\n          item_id: id,\n        }),\n      },\n    );\n    await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_updateLikesDOM_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\n    if (response.ok !== true) throw new Error('Failed to like.');\n  } catch (error) {\n    throw new Error(`Failed to like. Error => ${error}`);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (like);\n\n//# sourceURL=webpack://api-website/./src/modules/like.js?");

/***/ }),

/***/ "./src/modules/loadComments.js":
/*!*************************************!*\
  !*** ./src/modules/loadComments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/getComments.js\");\n\n\n\nconst loading = async (id) => {\n  const table = document.querySelector('.comments-table');\n  const arrayComments = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\n  table.innerHTML = '';\n  arrayComments.forEach((comments) => {\n    const htmlContent = `\n    <tr class=\"data-dom\">\n      <td class=\"data-date\">${comments.creation_date}</td>\n      <td class=\"data-user\">${comments.username}</td>\n      <td class=\"data-comment\">${comments.comment}</td>\n    </tr>\n    `;\n    table.insertAdjacentHTML('afterbegin', htmlContent);\n  });\n  (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayComments);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loading);\n\n//# sourceURL=webpack://api-website/./src/modules/loadComments.js?");

/***/ }),

/***/ "./src/modules/makePokemonList.js":
/*!****************************************!*\
  !*** ./src/modules/makePokemonList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _insertPokemon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insertPokemon.js */ \"./src/modules/insertPokemon.js\");\n/* harmony import */ var _like_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./like.js */ \"./src/modules/like.js\");\n/* harmony import */ var _addLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addLikes.js */ \"./src/modules/addLikes.js\");\n\n\n\n\nconst makeListPokemon = (array) => {\n  let likes = [{ item_id: 0, likes: 0 }];\n  if (localStorage.getItem('likes')) likes = JSON.parse(localStorage.getItem('likes'));\n\n  array.forEach((pokemon, index) => {\n    (0,_insertPokemon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pokemon);\n    let obj = likes.find((object) => object.item_id === pokemon.id);\n    if (obj === undefined) obj = { item_id: pokemon.id, likes: 0 };\n    const iconContainer = document.querySelectorAll('.pokemon__icon-container')[index];\n    const lik = obj.likes;\n    iconContainer.innerHTML += (0,_addLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(lik);\n  });\n\n  array.forEach((pokemon) => {\n    const likeButton = document.getElementById(`heart${pokemon.id}`);\n    likeButton.addEventListener('click', async () => {\n      await (0,_like_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pokemon.id);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeListPokemon);\n\n//# sourceURL=webpack://api-website/./src/modules/makePokemonList.js?");

/***/ }),

/***/ "./src/modules/submitComment.js":
/*!**************************************!*\
  !*** ./src/modules/submitComment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addComment.js */ \"./src/modules/addComment.js\");\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/getComments.js\");\n/* harmony import */ var _loadComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadComments.js */ \"./src/modules/loadComments.js\");\n\n\n\n\nconst submit = (id) => {\n  const submitButton = document.querySelector('.comment-button');\n  const name = document.querySelector('.user-name');\n  const comments = document.querySelector('.comment');\n  const form = document.querySelector('form');\n  form.addEventListener('submit', (event) => {\n    event.preventDefault();\n  });\n\n  /* eslint-disable */\n  submitButton.addEventListener('click', async () => {\n    const commentData = { \n       name: name.value,\n       id: id,\n       comment: {\n         value: comments.value, },\n      };\n    await (0,_addComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(commentData);\n    await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\n    (0,_loadComments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\n    name.value = '';\n    comments.value = '';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submit);\n\n//# sourceURL=webpack://api-website/./src/modules/submitComment.js?");

/***/ }),

/***/ "./src/modules/updateLikesDOM.js":
/*!***************************************!*\
  !*** ./src/modules/updateLikesDOM.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst updateLikes = (id) => {\n  const likesForId = JSON.parse(localStorage.getItem('likes'));\n  const itemId = likesForId.find((object) => object.item_id === id);\n  const amountLikes = document.querySelectorAll('.likes')[id - 1];\n  amountLikes.textContent = `${itemId.likes} likes`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLikes);\n\n//# sourceURL=webpack://api-website/./src/modules/updateLikesDOM.js?");

/***/ }),

/***/ "./src/assets/heart.png":
/*!******************************!*\
  !*** ./src/assets/heart.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c412cbaead4744166c20.png\";\n\n//# sourceURL=webpack://api-website/./src/assets/heart.png?");

/***/ }),

/***/ "./src/assets/xIcon.png":
/*!******************************!*\
  !*** ./src/assets/xIcon.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0f268bc3d4beb65f0662.png\";\n\n//# sourceURL=webpack://api-website/./src/assets/xIcon.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);