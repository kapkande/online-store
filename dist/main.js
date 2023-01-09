/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/index.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/index.scss ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n.wrapper {\n  max-width: 1180px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.header {\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: solid #a8a4ac 1.5px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.header__logo {\n  margin: 0;\n}\n\n.header__basket {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n\n.header__basket_icon {\n  height: 100%;\n  cursor: pointer;\n}\n\n.basket_main {\n  fill: #ba080a;\n}\n\n.basket_handle {\n  fill: #171619;\n}\n\n.header__cost, .header__items {\n  font-size: 1.5em;\n  margin: 0;\n  vertical-align: middle;\n}\n\n.main {\n  display: flex;\n}\n\n.aside-bar {\n  width: 20%;\n  border-right: solid #a8a4ac 1.5px;\n  padding-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.button_base {\n  background-color: #ba080a;\n  border: none;\n  color: #fdfcfc;\n  padding-top: 1em;\n  padding-bottom: 1em;\n  border-radius: 0.5em;\n  cursor: pointer;\n}\n\n.button_reset {\n  width: 80%;\n  margin-bottom: 20px;\n}\n\n.main__content {\n  width: 80%;\n  padding: 20px;\n  display: grid;\n}\n\n.main__info-block {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-column-gap: 20px;\n  grid-template-areas: \"search search sort\";\n  width: 100%;\n  padding-bottom: 30px;\n}\n\n.search-block {\n  width: 100%;\n  grid-area: search;\n}\n\n.search-bar {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0.5em 2em;\n  border-radius: 0.25em;\n  border: solid #a8a4ac 1.5px;\n  background-color: #fdfcfc;\n  color: #171619;\n}\n\n.sort-block {\n  padding-right: 2em;\n  padding-left: 2em;\n  border-radius: 0.25em;\n  border: solid #a8a4ac 1.5px;\n  background-color: #fdfcfc;\n  color: #171619;\n}\n\n.main__product {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 20px;\n}\n\n.product__block {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  row-gap: 10px;\n  align-items: center;\n  border-radius: 0.25em;\n  border: solid #a8a4ac 1.5px;\n  padding-bottom: 10px;\n}\n\n.product__block__image {\n  width: 100%;\n  height: 200px;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-top-left-radius: 0.25em;\n  border-top-right-radius: 0.25em;\n  border-bottom: solid #a8a4ac 1.5px;\n}\n\n.product__block__name-item {\n  padding-left: 1em;\n  padding-right: 1em;\n  margin-block-start: 0.5em;\n  margin-block-end: 0.5em;\n}\n\n.product__block__description {\n  flex-grow: 1;\n  max-height: 6.8em;\n  padding-left: 1em;\n  padding-right: 1em;\n  overflow: hidden;\n}\n\n.product__block__cost {\n  margin: 0;\n}\n\n.product__block__button {\n  box-sizing: border-box;\n  width: calc(100% - 20px);\n}\n\n.range-cost {\n  width: 80%;\n  position: relative;\n}\n\n.range-cost__inputs {\n  display: flex;\n  justify-content: space-around;\n}\n\n.range-input {\n  width: 40%;\n  text-align: center;\n}\n\n.range-cost__line,\n.range-cost__incl {\n  width: 100%;\n  min-height: 5px;\n  border-radius: 5px;\n  margin: 20px 0 20px 0;\n  background: #a8a4ac;\n  position: absolute;\n}\n\n.range-cost__incl {\n  background: #ba080a;\n}\n\n.range-cost__point {\n  width: 100%;\n  -webkit-appearance: none;\n}\n\n.range-cost__point::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: none;\n  position: relative;\n  height: 16px;\n  width: 16px;\n  background: #ba080a;\n  border-radius: 50%;\n}\n\n.range-cost__point::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 5px;\n  border: none;\n  border-radius: 3px;\n  background: transparent;\n  position: absolute;\n  top: calc(100% - 22.5px);\n}\n\n.basket {\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n}\n\n.basket__items {\n  padding-top: 20px;\n  border-right: solid #a8a4ac 1.5px;\n}\n\n.basket__item {\n  display: flex;\n  padding: 10px;\n  border-bottom: solid #a8a4ac 1.5px;\n  align-items: center;\n}\n\n.item__image {\n  min-width: 30%;\n  min-height: 100%;\n  max-height: 100px;\n  object-position: top;\n  object-fit: cover;\n  padding-right: 20px;\n}\n\n.item__name-item {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.item__costBlock {\n  display: flex;\n  flex-direction: column;\n  min-width: 25%;\n  align-items: center;\n}\n\n.item__cost {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.item__interaction {\n  display: flex;\n  width: 60%;\n  justify-content: space-around;\n}\n\n.button_round {\n  padding: 10px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.item__total {\n  display: flex;\n  width: 80%;\n  align-items: center;\n  justify-content: space-around;\n  margin: 0;\n  padding-top: 10px;\n}\n\n.item__amount,\n.item__price {\n  margin: 0;\n}\n\n.striked {\n  text-decoration-line: line-through;\n}\n\n.basket__checkout {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.checkout__header {\n  margin-bottom: 10px;\n}\n\n.checkout__amount,\n.checkout__price,\n.checkout__newprice,\n.checkout__promo {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n.checkout__buy {\n  width: 50%;\n}\n\n.checkout__promos_active {\n  width: 80%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 10px;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #fdfcfc;\n  color: #171619;\n}\n\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/assets/styles/index.scss","webpack://./src/assets/styles/normalize.scss","webpack://./src/assets/styles/wrapper.scss","webpack://./src/assets/styles/header.scss","webpack://./src/assets/styles/vars.scss","webpack://./src/assets/styles/main.scss","webpack://./src/assets/styles/range.scss","webpack://./src/assets/styles/basket.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n@import \"vars\";\n@import \"normalize\";\n@import \"wrapper\";\n@import \"header\";\n@import \"main\";\n@import \"range\";\n@import \"basket\";\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    background-color: $white;\n    color: $black;\n}\n\n.hidden {\n    display: none;\n}","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}",".wrapper {\n  max-width: 1180px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}",".header {\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: solid $silver 1.5px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.header__logo {\n  margin: 0;\n}\n\n.header__basket {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n\n.header__basket_icon {\n  height: 100%;\n  cursor: pointer;\n}\n\n.basket_main {\n  fill: $red;\n}\n\n.basket_handle {\n  fill: $black;\n}\n\n.header__cost, .header__items {\n  font-size: 1.5em;\n  margin: 0;\n  vertical-align: middle;\n}","$white: #fdfcfc;\n$red: #ba080a;\n$silver: #a8a4ac;\n$black: #171619;",".main {\n  display: flex;\n}\n\n.aside-bar {\n  width: 20%;\n  border-right: solid $silver 1.5px;\n  padding-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.button_base {\n  background-color: $red;\n  border: none;\n  color: $white;\n  padding-top: 1em;\n  padding-bottom: 1em;\n  border-radius: 0.5em;\n  cursor: pointer;\n}\n\n.button_reset {\n  width: 80%;\n  margin-bottom: 20px;\n}\n\n.main__content {\n  width: 80%;\n  padding: 20px;\n  display: grid;\n}\n\n.main__info-block {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-column-gap: 20px;\n  grid-template-areas:\n    \"search search sort\";\n  width: 100%;\n  padding-bottom: 30px;\n}\n\n.search-block {\n  width: 100%;\n  grid-area: search;\n}\n\n.search-bar {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0.5em 2em;\n  border-radius: 0.25em;\n  border: solid $silver 1.5px;\n  background-color: $white;\n  color: $black;\n}\n\n.sort-block {\n  padding-right: 2em;\n  padding-left: 2em;\n  border-radius: 0.25em;\n  border: solid $silver 1.5px;\n  background-color: $white;\n  color: $black;\n}\n\n.main__product {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 20px;\n}\n\n.product__block {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  row-gap: 10px;\n  align-items: center;\n  border-radius: 0.25em;\n  border: solid $silver 1.5px;\n  padding-bottom: 10px;\n}\n\n.product__block__image {\n  width: 100%;\n  height: 200px;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-top-left-radius: 0.25em;\n  border-top-right-radius: 0.25em;\n  border-bottom: solid $silver 1.5px;\n}\n\n.product__block__name-item {\n  padding-left: 1em;\n  padding-right: 1em;\n  margin-block-start: 0.5em;\n  margin-block-end: 0.5em;\n}\n\n.product__block__description {\n  flex-grow: 1;\n  max-height: 6.8em;\n  padding-left: 1em;\n  padding-right: 1em;\n  overflow: hidden;\n}\n\n.product__block__cost {\n  margin: 0;\n}\n\n.product__block__button {\n  box-sizing: border-box;\n  width: calc(100% - 20px);\n}",".range-cost {\n    width: 80%;\n    position: relative;\n}\n\n.range-cost__inputs {\n    display: flex;\n    justify-content: space-around;\n}\n\n.range-input {\n    width: 40%;\n    text-align: center;\n}\n\n.range-cost__line,\n.range-cost__incl {\n\twidth: 100%;\n\tmin-height: 5px;\n\tborder-radius: 5px;\n    margin: 20px 0 20px 0;\n\tbackground: $silver;\n    position: absolute;\n}\n\n.range-cost__incl {\n\tbackground: $red;\n}\n\n.range-cost__point {\n    width: 100%;\n    -webkit-appearance: none;\n}\n\n.range-cost__point::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    border: none;\n    position: relative;\n    height: 16px;\n    width: 16px;\n    background: $red;\n    border-radius: 50%;\n}\n\n.range-cost__point::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 5px;\n    border: none;\n    border-radius: 3px;\n    background: transparent;\n    position: absolute;\n    top: calc(100% - 22.5px);\n}",".basket {\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n}\n\n.basket__items {\n  padding-top: 20px;\n  border-right: solid $silver 1.5px;\n}\n\n.basket__item {\n  display: flex;\n  padding: 10px;\n  border-bottom: solid $silver 1.5px;\n  align-items: center;\n}\n\n.item__image {\n  min-width: 30%;\n  min-height: 100%;\n  max-height: 100px;\n  object-position: top;\n  object-fit: cover;\n  padding-right: 20px;\n}\n\n.item__name-item {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.item__costBlock {\n  display: flex;\n  flex-direction: column;\n  min-width: 25%;\n  align-items: center;\n}\n\n.item__cost {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.item__interaction {\n  display: flex;\n  width: 60%;\n  justify-content: space-around;\n}\n\n.button_round {\n  padding: 10px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.item__total {\n  display: flex;\n  width: 80%;\n  align-items: center;\n  justify-content: space-around;\n  margin: 0;\n  padding-top: 10px;\n}\n\n.item__amount,\n.item__price {\n  margin: 0;\n}\n\n.striked {\n  text-decoration-line: line-through;\n}\n\n.basket__checkout {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.checkout__header {\n  margin-bottom: 10px;\n}\n\n.checkout__amount,\n.checkout__price,\n.checkout__newprice,\n.checkout__promo {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n.checkout__buy {\n  width: 50%;\n}\n\n.checkout__promos_active {\n  width: 80%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 10px;\n}"],"sourceRoot":""}]);
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

/***/ "./src/assets/styles/index.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/index.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/assets/components/basket/basketAdd.ts":
/*!***************************************************!*\
  !*** ./src/assets/components/basket/basketAdd.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const basketData_1 = __webpack_require__(/*! ../data/basketData */ "./src/assets/components/data/basketData.ts");
const impBasicInit_1 = __webpack_require__(/*! ../impBasicInit */ "./src/assets/components/impBasicInit.ts");
const updateHeader_1 = __webpack_require__(/*! ../updateHeader */ "./src/assets/components/updateHeader.ts");
const basketLoader_1 = __webpack_require__(/*! ./basketLoader */ "./src/assets/components/basket/basketLoader.ts");
function basketAdd(element, data) {
    element.addEventListener('click', (e) => {
        basketData_1.default.price += Number(data.cost);
        basketData_1.default.amount += 1;
        impBasicInit_1.default[data.id].amount += 1;
        impBasicInit_1.default[data.id].price += Number(data.cost);
        (0, updateHeader_1.default)();
        (0, basketLoader_1.default)();
    });
}
exports["default"] = basketAdd;


/***/ }),

/***/ "./src/assets/components/basket/basketInit.ts":
/*!****************************************************!*\
  !*** ./src/assets/components/basket/basketInit.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const basketData_1 = __webpack_require__(/*! ../data/basketData */ "./src/assets/components/data/basketData.ts");
const impBasicInit_1 = __webpack_require__(/*! ../impBasicInit */ "./src/assets/components/impBasicInit.ts");
const updateHeader_1 = __webpack_require__(/*! ../updateHeader */ "./src/assets/components/updateHeader.ts");
function basketInit(element, data) {
    element.addEventListener('click', (e) => {
        basketData_1.default.itemsIDs.add(data.id);
        basketData_1.default.price += Number(data.cost);
        basketData_1.default.amount += 1;
        (0, updateHeader_1.default)();
        impBasicInit_1.default[data.id].amount += 1;
        impBasicInit_1.default[data.id].price += Number(data.cost);
    });
}
exports["default"] = basketInit;


/***/ }),

/***/ "./src/assets/components/basket/basketLoader.ts":
/*!******************************************************!*\
  !*** ./src/assets/components/basket/basketLoader.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const generateBasket_1 = __webpack_require__(/*! ./generateBasket */ "./src/assets/components/basket/generateBasket.ts");
function loadBasket() {
    var _a;
    const main = document.querySelector('.main');
    main === null || main === void 0 ? void 0 : main.classList.add('hidden');
    if (document.querySelector('.basket')) {
        (_a = document.querySelector('.basket')) === null || _a === void 0 ? void 0 : _a.remove();
    }
    const basket = document.createElement('div');
    basket.classList.add('basket');
    const items = document.createElement('div');
    items.classList.add('basket__items');
    basket.appendChild(items);
    const checkout = document.createElement('div');
    checkout.classList.add('basket__checkout');
    basket.appendChild(checkout);
    main === null || main === void 0 ? void 0 : main.after(basket);
    (0, generateBasket_1.default)();
}
exports["default"] = loadBasket;


/***/ }),

/***/ "./src/assets/components/basket/basketRemove.ts":
/*!******************************************************!*\
  !*** ./src/assets/components/basket/basketRemove.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const basketData_1 = __webpack_require__(/*! ../data/basketData */ "./src/assets/components/data/basketData.ts");
const impBasicInit_1 = __webpack_require__(/*! ../impBasicInit */ "./src/assets/components/impBasicInit.ts");
const updateHeader_1 = __webpack_require__(/*! ../updateHeader */ "./src/assets/components/updateHeader.ts");
const basketLoader_1 = __webpack_require__(/*! ./basketLoader */ "./src/assets/components/basket/basketLoader.ts");
function basketRemove(element, data) {
    element.addEventListener('click', (e) => {
        basketData_1.default.price -= Number(data.cost);
        basketData_1.default.amount -= 1;
        impBasicInit_1.default[data.id].amount -= 1;
        impBasicInit_1.default[data.id].price -= Number(data.cost);
        if (impBasicInit_1.default[data.id].amount == 0) {
            basketData_1.default.itemsIDs.delete(data.id);
        }
        (0, updateHeader_1.default)();
        (0, basketLoader_1.default)();
    });
}
exports["default"] = basketRemove;


/***/ }),

/***/ "./src/assets/components/basket/generateBasket.ts":
/*!********************************************************!*\
  !*** ./src/assets/components/basket/generateBasket.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const basketData_1 = __webpack_require__(/*! ../data/basketData */ "./src/assets/components/data/basketData.ts");
const impBasicInit_1 = __webpack_require__(/*! ../impBasicInit */ "./src/assets/components/impBasicInit.ts");
const generateBasketItem_1 = __webpack_require__(/*! ./generateBasketItem */ "./src/assets/components/basket/generateBasketItem.ts");
function generateBasket() {
    const basketItems = document.querySelector('.basket__items');
    basketData_1.default.itemsIDs.forEach((id) => {
        basketItems === null || basketItems === void 0 ? void 0 : basketItems.appendChild((0, generateBasketItem_1.default)(impBasicInit_1.default[id]));
    });
    const basketTotal = document.querySelector('.basket__checkout');
    const totalHeader = document.createElement('h2');
    totalHeader.classList.add('checkout__header');
    totalHeader.innerText = 'Total';
    basketTotal === null || basketTotal === void 0 ? void 0 : basketTotal.appendChild(totalHeader);
    const products = document.createElement('h3');
    products.classList.add('checkout__amount');
    products.innerText = `Items - ${basketData_1.default.amount}`;
    basketTotal === null || basketTotal === void 0 ? void 0 : basketTotal.appendChild(products);
    const price = document.createElement('h3');
    price.classList.add('checkout__price');
    price.innerText = `Total - $${Math.abs(basketData_1.default.price).toFixed(2)}`;
    basketTotal === null || basketTotal === void 0 ? void 0 : basketTotal.appendChild(price);
    const promo = document.createElement('input');
    promo.classList.add('checkout__promo');
    promo.type = 'text';
    promo.placeholder = 'Promocodes (try: TEST)';
    basketTotal === null || basketTotal === void 0 ? void 0 : basketTotal.appendChild(promo);
    promo.addEventListener('input', () => {
        if (promo.value.toLocaleUpperCase() == 'TEST' && document.querySelector('.checkout__promo_active') == null) {
            promo.value = '';
            const newPrice = document.createElement('h3');
            newPrice.classList.add('checkout__newprice');
            newPrice.innerHTML = `Total - $${Math.abs(basketData_1.default.price * 0.8).toFixed(2)}`;
            price.classList.add('striked');
            price.after(newPrice);
            const promos = document.createElement('div');
            promos.classList.add('checkout__promos_active');
            const promoActive = document.createElement('b');
            promoActive.innerText = 'TEST 20%';
            promoActive.classList.add('checkout__promo_active');
            promos.appendChild(promoActive);
            const removePromo = document.createElement('button');
            removePromo.classList.add('button_base', 'button_round');
            removePromo.innerText = '-';
            promos.appendChild(removePromo);
            removePromo.addEventListener('click', () => {
                price.classList.remove('striked');
                newPrice.remove();
                promos.remove();
            });
            promo.after(promos);
        }
    });
    const buy = document.createElement('button');
    buy.classList.add('button_base', 'checkout__buy');
    buy.innerText = 'Buy now';
    basketTotal === null || basketTotal === void 0 ? void 0 : basketTotal.appendChild(buy);
}
exports["default"] = generateBasket;


/***/ }),

/***/ "./src/assets/components/basket/generateBasketItem.ts":
/*!************************************************************!*\
  !*** ./src/assets/components/basket/generateBasketItem.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const basketAdd_1 = __webpack_require__(/*! ./basketAdd */ "./src/assets/components/basket/basketAdd.ts");
const basketRemove_1 = __webpack_require__(/*! ./basketRemove */ "./src/assets/components/basket/basketRemove.ts");
function generateBasketItem(product) {
    const item = document.createElement('div');
    item.classList.add('basket__item');
    const img = document.createElement("img");
    img.classList.add('item__image');
    img.src = `${product.imageMain}`;
    const info = document.createElement('div');
    info.classList.add('item__info');
    //create name
    const nameItem = document.createElement("h4");
    nameItem.classList.add('item__name-item');
    nameItem.textContent = `${product.name}`;
    info.appendChild(nameItem);
    //create description
    const descriptionItem = document.createElement("div");
    descriptionItem.classList.add('item__description');
    descriptionItem.textContent = `${product.description}`;
    info.appendChild(descriptionItem);
    const costBlock = document.createElement('div');
    costBlock.classList.add('item__costBlock');
    //create cost
    const costItem = document.createElement("h3");
    costItem.classList.add('item__cost');
    costItem.textContent = `Cost - $${product.cost}`;
    costBlock.appendChild(costItem);
    const interaction = document.createElement('div');
    interaction.classList.add('item__interaction');
    costBlock.appendChild(interaction);
    //create btn 
    const remove = document.createElement("button");
    remove.classList.add('item__remove', 'button_base', 'button_round');
    remove.textContent = '-';
    (0, basketRemove_1.default)(remove, product);
    interaction.appendChild(remove);
    const add = document.createElement("button");
    add.classList.add('item__add', 'button_base', 'button_round');
    add.textContent = '+';
    (0, basketAdd_1.default)(add, product);
    interaction.appendChild(add);
    const total = document.createElement('div');
    total.classList.add('item__total');
    costBlock.appendChild(total);
    const amount = document.createElement("h3");
    amount.classList.add('item__amount');
    amount.textContent = `${product.amount} pc(s)`;
    total.appendChild(amount);
    const price = document.createElement('h2');
    price.classList.add('item__price');
    price.textContent = `$${product.price.toFixed(2)}`;
    total.appendChild(price);
    item.appendChild(img);
    item.appendChild(info);
    item.appendChild(costBlock);
    return item;
}
exports["default"] = generateBasketItem;


/***/ }),

/***/ "./src/assets/components/data/basicData.ts":
/*!*************************************************!*\
  !*** ./src/assets/components/data/basicData.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const basic = [{
        animal: 'cat',
        name: 'Purina Pro Plan',
        imageMain: 'https://avatars.mds.yandex.net/i?id=97884beb83f584cf3ebe9a1de9bd36af-5339089-images-thumbs&n=13',
        imageOther: 'https://avatars.mds.yandex.net/get-mpic/5245452/img_id6969097289587066844.jpeg/orig',
        description: 'Canned full-fledged dietary food for adult cats for dissolving struvite stones and reducing the likelihood of their re-formation, with properties of acidification of urine and low magnesium content. The use of this feed is recommended under the supervision of a veterinarian. Suitable for all breeds.',
        cost: '7.14',
        brand: 'Purina',
        taste: 'Turkey',
        weight: '195',
        TypeOfFeed: 'wet',
    },
    {
        animal: 'cat',
        name: `Hill's Beef-flavored Spiders`,
        imageMain: 'https://zoolan.by/image/cache/catalog/a1-1200x1200.jpeg',
        imageOther: 'https://ravta.ru/upload/iblock/621/621ac2c7b44d45b404d4999cc943e662.jpg',
        description: `Hill's k/d Kidney Care is a special diet for cats with kidney failure or heart disease.`,
        cost: '4.09',
        brand: `Hill's`,
        taste: 'Beef',
        weight: '85',
        TypeOfFeed: 'wet',
    },
    {
        animal: 'cat',
        name: `Kitekat for adult cats with rabbit flavor`,
        imageMain: 'https://zoobazar.by/upload/resize_cache/iblock/24c/46k6ztijee4m95cmqel1f4amlfmgbaj0/520_520_040cd750bba9870f18aada2478b24840a/detail_pictureb7f0ef6e_37e8_4cf9_a4cf_8037308dc82d.jpg',
        imageOther: 'https://zoomag63.ru/upload/iblock/cd5/ir6hw7kicnccvo7zwakmymmlfswvtjm3.jpeg',
        description: `Kitekat Tender Rabbit in Jelly is a portion of juicy pieces with rabbit cooked according to a special recipe. It is based on a balanced nutrition formula that contains proteins, minerals, vitamins, taurine and animal fats. Kitekat is the optimal source of vitality for a cat.`,
        cost: '0.68',
        brand: `Kitekat`,
        taste: 'Rabbit',
        weight: '85',
        TypeOfFeed: 'wet',
    },
    {
        animal: 'cat',
        name: `Pieces in Royal Canin jelly`,
        imageMain: 'https://palladi.ru/upload/iblock/154/154c752c5716f1f534d3462e86758376.jpg',
        imageOther: 'https://zoo-discont.ru/upload/iblock/cea/42u6llpimq61x962vnoslmn2svd3oma0.jpg',
        description: `Adult cats that are constantly kept indoors are less active compared to animals that have access to the street. That's why a full-fledged balanced diet rich in valuable nutrients is so important for their health.`,
        cost: '2.13',
        brand: `Royal Canin`,
        taste: 'Bird',
        weight: '85',
        TypeOfFeed: 'wet',
    },
    // {
    //     animal: 'dog',
    //     name: ``,
    //     imageMain: '',
    //     imageOther: '',
    //     description: ``,
    //     cost: '',
    //     brand: ``,
    //     taste: '',
    //     weight: '',
    //     TypeOfFeed: '',
    // }, 
];
exports["default"] = basic;


/***/ }),

/***/ "./src/assets/components/data/basketData.ts":
/*!**************************************************!*\
  !*** ./src/assets/components/data/basketData.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const basketData = {
    itemsIDs: new Set,
    amount: 0,
    price: 0
};
exports["default"] = basketData;


/***/ }),

/***/ "./src/assets/components/impBasicInit.ts":
/*!***********************************************!*\
  !*** ./src/assets/components/impBasicInit.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const basicData_1 = __webpack_require__(/*! ./data/basicData */ "./src/assets/components/data/basicData.ts");
function impBasicInit(basic) {
    const newArray = structuredClone(basic);
    newArray.forEach((value, i) => {
        value.id = i;
        value.amount = 0;
        value.price = 0;
    });
    return newArray;
}
const newBasic = impBasicInit(basicData_1.default);
exports["default"] = newBasic;


/***/ }),

/***/ "./src/assets/components/updateHeader.ts":
/*!***********************************************!*\
  !*** ./src/assets/components/updateHeader.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const basketData_1 = __webpack_require__(/*! ./data/basketData */ "./src/assets/components/data/basketData.ts");
function updateHeader() {
    document.querySelector('.header__cost').textContent = `$${Math.abs(basketData_1.default.price).toFixed(2)}`;
    document.querySelector('.header__items').textContent = `${basketData_1.default.amount} items(s)`;
}
exports["default"] = updateHeader;


/***/ }),

/***/ "./src/assets/icons/basket.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/basket.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "basket.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./assets/icons/basket.svg */ "./src/assets/icons/basket.svg");
__webpack_require__(/*! ./assets/styles/index.scss */ "./src/assets/styles/index.scss");
const basketData_1 = __webpack_require__(/*! ./assets/components/data/basketData */ "./src/assets/components/data/basketData.ts");
const basketInit_1 = __webpack_require__(/*! ./assets/components/basket/basketInit */ "./src/assets/components/basket/basketInit.ts");
const impBasicInit_1 = __webpack_require__(/*! ./assets/components/impBasicInit */ "./src/assets/components/impBasicInit.ts");
const basketLoader_1 = __webpack_require__(/*! ./assets/components/basket/basketLoader */ "./src/assets/components/basket/basketLoader.ts");
const mainProduct = document.querySelector('.main__product');
const sortBlock = document.querySelector('.sort-block');
const productBlocks = document.querySelectorAll('.product__block');
const buttonReset = document.querySelector('.button_reset');
const searchBar = document.querySelector('.search-bar');
const inputCostMin = document.querySelector('.range-cost__min');
const inputCostMax = document.querySelector('.range-cost__max');
const inputRange = document.querySelectorAll('.range-cost__point');
const rangeCost = document.querySelector('.range-cost');
const rangeCostInputs = document.querySelector('.range-cost__inputs');
const rangeCostLine = document.querySelector('.range-cost__line');
let basicCopy = [];
alert('Сорри мы не успели немножко, проверьте завтра пожалуйста 🥺🥺🥺');
function setBlock(obj) {
    let block = document.createElement("div"); //? какой тут тип
    block.classList.add('product__block');
    //create image
    let img = document.createElement("div");
    img.classList.add('product__block__image');
    img.style.backgroundImage = `url('${obj.imageMain}')`;
    //create name
    let nameItem = document.createElement("h4");
    nameItem.classList.add('product__block__name-item');
    nameItem.textContent = `${obj.name}`;
    //create description
    let descriptionItem = document.createElement("div");
    descriptionItem.classList.add('product__block__description');
    descriptionItem.textContent = `${obj.description}`;
    //create cost
    let costItem = document.createElement("h3");
    costItem.classList.add('product__block__cost');
    costItem.textContent = `$${obj.cost}`;
    //create btn 
    let btn = document.createElement("button");
    btn.classList.add('product__block__button', 'button_base');
    btn.textContent = 'ADD';
    (0, basketInit_1.default)(btn, obj);
    block.appendChild(img);
    block.appendChild(nameItem);
    block.appendChild(descriptionItem);
    block.appendChild(costItem);
    block.appendChild(btn);
    mainProduct === null || mainProduct === void 0 ? void 0 : mainProduct.appendChild(block);
}
const globalArray = [];
function getRandomOrder() {
    if (globalArray.length > 0) {
        return globalArray;
    }
    for (let i = 0; i < basicCopy.length;) {
        let random = Math.floor(Math.random() * (basicCopy.length - 1 + 1)) + 0;
        if (!globalArray.includes(basicCopy[random])) {
            globalArray.push(basicCopy[random]);
            i++;
        }
    }
    return globalArray;
}
function getSortByABC() {
    basicCopy.sort(function (a, b) {
        if (a.name > b.name)
            return 1;
        if (a.name == b.name)
            return 0;
        if (a.name < b.name)
            return -1;
        return 0;
    });
    return basicCopy;
}
function getSortByDESC() {
    basicCopy.sort(function (a, b) {
        if (a.name < b.name)
            return 1;
        if (a.name == b.name)
            return 0;
        if (a.name > b.name)
            return -1;
        return 0;
    });
    return basicCopy;
}
function getSortByPriceASC() {
    basicCopy.sort(function (a, b) {
        if (a.cost < b.cost)
            return 1;
        if (a.cost == b.cost)
            return 0;
        if (a.cost > b.cost)
            return -1;
        return 0;
    });
    return basicCopy;
}
function getSortByPriceDESC() {
    basicCopy.sort(function (a, b) {
        if (a.cost > b.cost)
            return 1;
        if (a.cost == b.cost)
            return 0;
        if (a.cost < b.cost)
            return -1;
        return 0;
    });
    return basicCopy;
}
function deleteBlocks() {
    const productBlocks = document.querySelectorAll('.product__block');
    productBlocks.forEach(element => {
        element.remove();
    });
}
function showBlocks() {
    const productBlocks = document.querySelectorAll('.product__block');
    if (productBlocks.length != 0) {
        deleteBlocks();
    }
    ;
    let array = [];
    if ((sortBlock === null || sortBlock === void 0 ? void 0 : sortBlock.value) == 'sort-title') {
        array = getRandomOrder();
    }
    ;
    if ((sortBlock === null || sortBlock === void 0 ? void 0 : sortBlock.value) == 'price-ASC') {
        array = getSortByPriceASC();
    }
    ;
    if ((sortBlock === null || sortBlock === void 0 ? void 0 : sortBlock.value) == 'price-DESC') {
        array = getSortByPriceDESC();
    }
    ;
    if ((sortBlock === null || sortBlock === void 0 ? void 0 : sortBlock.value) == 'ASC') {
        array = getSortByABC();
    }
    ;
    if ((sortBlock === null || sortBlock === void 0 ? void 0 : sortBlock.value) == 'DESC') {
        array = getSortByDESC();
    }
    ;
    sortWishRangeline(array).forEach(element => {
        setBlock(element);
    });
}
sortBlock === null || sortBlock === void 0 ? void 0 : sortBlock.addEventListener('change', showBlocks);
function resetBlock() {
    sortBlock.value = 'sort-title';
    searchBar.value = '';
    inputCostMin.value = '0.00';
    inputCostMax.value = `${getMaxPriseOnRange()}`;
    setInputRangeValue();
    searchProduct();
    console.log(basketData_1.default);
}
buttonReset === null || buttonReset === void 0 ? void 0 : buttonReset.addEventListener('click', resetBlock);
function searchProduct() {
    basicCopy.length = 0;
    impBasicInit_1.default.forEach(element => {
        if (element.name.toUpperCase().includes(searchBar === null || searchBar === void 0 ? void 0 : searchBar.value.trim().toUpperCase())) {
            basicCopy.push(element);
        }
    });
    showBlocks();
}
searchProduct();
searchBar === null || searchBar === void 0 ? void 0 : searchBar.addEventListener('input', searchProduct);
(_a = document.querySelector('.header__basket_icon')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
    (0, basketLoader_1.default)();
});
function getMaxPriseOnRange() {
    const maxPrice = Number(getSortByPriceASC()[0].cost);
    return maxPrice;
}
inputCostMax.value = `${getMaxPriseOnRange()}`;
function setInputTextValue() {
    const maxPrice = getMaxPriseOnRange();
    let firstInputRange = (maxPrice * +inputRange[0].value / 100).toFixed(2);
    let secondInputRange = (maxPrice * +inputRange[1].value / 100).toFixed(2);
    if (firstInputRange > secondInputRange) {
        inputCostMin.value = secondInputRange;
        inputCostMax.value = firstInputRange;
    }
    else if (firstInputRange < secondInputRange) {
        inputCostMin.value = firstInputRange;
        inputCostMax.value = secondInputRange;
    }
    showBlocks();
}
(_b = inputRange[0]) === null || _b === void 0 ? void 0 : _b.addEventListener('input', setInputTextValue);
(_c = inputRange[1]) === null || _c === void 0 ? void 0 : _c.addEventListener('input', setInputTextValue);
function setInputRangeValue() {
    inputRange[0].value = `${Number(inputCostMin === null || inputCostMin === void 0 ? void 0 : inputCostMin.value) / getMaxPriseOnRange() * 100}`;
    inputRange[1].value = `${Number(inputCostMax === null || inputCostMax === void 0 ? void 0 : inputCostMax.value) / getMaxPriseOnRange() * 100}`;
    showBlocks();
}
rangeCostInputs === null || rangeCostInputs === void 0 ? void 0 : rangeCostInputs.addEventListener('input', setInputRangeValue);
function sortWishRangeline(array) {
    let newArray = [];
    array.forEach(element => {
        if (+element.cost >= +inputCostMin.value && +element.cost <= +inputCostMax.value) {
            newArray.push(element);
        }
    });
    return newArray;
}

})();

/******/ })()
;
//# sourceMappingURL=main.js.map