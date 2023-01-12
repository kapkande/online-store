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
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n.wrapper {\n  max-width: 1180px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.header {\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: solid #a8a4ac 1.5px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.header__logo {\n  margin: 0;\n}\n\n.header__basket {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n\n.header__basket_icon {\n  height: 100%;\n  cursor: pointer;\n}\n\n.basket_main {\n  fill: #ba080a;\n}\n\n.basket_handle {\n  fill: #171619;\n}\n\n.header__cost, .header__items {\n  width: 150px;\n  font-size: 1.5em;\n  margin: 0;\n  vertical-align: middle;\n  text-align: center;\n  font-weight: 550;\n}\n\n.main {\n  display: flex;\n}\n\n.root-page {\n  display: flex;\n}\n\n.root-page {\n  display: flex;\n}\n\n.aside-bar {\n  width: 20%;\n  border-right: solid #a8a4ac 1.5px;\n  padding-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.button_base {\n  background-color: #ba080a;\n  border: none;\n  color: #fdfcfc;\n  padding-top: 1em;\n  padding-bottom: 1em;\n  border-radius: 0.5em;\n  cursor: pointer;\n}\n\n.button_reset {\n  width: 80%;\n  margin-bottom: 20px;\n}\n\n.main__content {\n  width: 80%;\n  padding: 20px;\n  display: grid;\n}\n\n.main__info-block {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-column-gap: 20px;\n  grid-template-areas: \"search search sort\";\n  width: 100%;\n  padding-bottom: 30px;\n}\n\n.search-block {\n  width: 100%;\n  grid-area: search;\n}\n\n.search-bar {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0.5em 2em;\n  border-radius: 0.25em;\n  border: solid #a8a4ac 1.5px;\n  background-color: #fdfcfc;\n  color: #171619;\n}\n\n.sort-block {\n  padding-right: 2em;\n  padding-left: 2em;\n  border-radius: 0.25em;\n  border: solid #a8a4ac 1.5px;\n  background-color: #fdfcfc;\n  color: #171619;\n}\n\n.main__product {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 20px;\n}\n\n.product__block {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  row-gap: 10px;\n  align-items: center;\n  border-radius: 0.25em;\n  border: solid #a8a4ac 1.5px;\n  padding-bottom: 10px;\n}\n\n.product__block__image {\n  width: 100%;\n  height: 200px;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-top-left-radius: 0.25em;\n  border-top-right-radius: 0.25em;\n  border-bottom: solid #a8a4ac 1.5px;\n}\n\n.product__block__name-item {\n  padding-left: 1em;\n  padding-right: 1em;\n  margin-block-start: 0.5em;\n  margin-block-end: 0.5em;\n}\n\n.product__block__description {\n  flex-grow: 1;\n  max-height: 6.8em;\n  padding-left: 1em;\n  padding-right: 1em;\n  overflow: hidden;\n}\n\n.product__block__cost {\n  margin: 0;\n}\n\n.product__block__button {\n  box-sizing: border-box;\n  width: calc(100% - 20px);\n}\n\n.range-cost {\n  width: 80%;\n  position: relative;\n}\n\n.range-cost__inputs {\n  display: flex;\n  justify-content: space-around;\n}\n\n.range-input {\n  width: 40%;\n  text-align: center;\n}\n\n.range-cost__line,\n.range-cost__incl {\n  width: 100%;\n  min-height: 5px;\n  border-radius: 5px;\n  margin: 20px 0 20px 0;\n  background: #a8a4ac;\n  position: absolute;\n}\n\n.range-cost__incl {\n  background: #ba080a;\n}\n\n.range-cost__point {\n  width: 100%;\n  border: none;\n  -webkit-appearance: none;\n}\n\n.range-cost__point::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: none;\n  position: relative;\n  height: 16px;\n  width: 16px;\n  background: #ba080a;\n  border-radius: 50%;\n}\n\n.range-cost__point::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 5px;\n  border: none;\n  border-radius: 3px;\n  background: transparent;\n  position: absolute;\n  top: calc(100% - 22.5px);\n}\n\n.product-page {\n  display: block;\n}\n\n.product-page__main {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.product-page__title {\n  text-align: center;\n  font-size: 20px;\n  flex: 0 0 100%;\n  color: #171619;\n}\n\n.product-page__images {\n  flex: 20%;\n}\n\n.product-page__main-image {\n  width: 250px;\n  height: 250px;\n}\n\n.imageOther {\n  width: 50px;\n  height: 50px;\n}\n\n.product-page__information-block {\n  flex: 60%;\n}\n\n.product-page__subtitle {\n  font-size: 18px;\n  background-color: #ba080a;\n  color: #fdfcfc;\n}\n\n.product-page__text {\n  background-color: #a8a4ac;\n  color: #171619;\n}\n\n.product-page__cost {\n  font-size: 24px;\n  text-align: center;\n  background-color: #ba080a;\n  border-radius: 5px;\n  color: #fdfcfc;\n  border: 2px solid #fdfcfc;\n}\n\n.product-page__bay-block {\n  display: flex;\n  flex-direction: column;\n  flex: 10%;\n  gap: 5px;\n}\n\n.iamgePopup {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 5%;\n  left: 0;\n  display: flex;\n}\n\n.iamgePopup-active {\n  align-items: center;\n}\n\n.iamgePopup__image {\n  max-width: 30%;\n  margin: 0 auto;\n  border: 4px solid #ba080a;\n  border-radius: 5px;\n  height: max-content;\n}\n\n.basket {\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n  width: 100%;\n}\n\n.basket__items {\n  padding-top: 20px;\n  border-right: solid #a8a4ac 1.5px;\n}\n\n.basket__item {\n  display: flex;\n  padding: 10px;\n  border-bottom: solid #a8a4ac 1.5px;\n  align-items: center;\n}\n\n.basket__item:last-child {\n  border-bottom: none;\n}\n\n.item__image {\n  min-width: 30%;\n  min-height: 100%;\n  max-height: 100px;\n  object-position: top;\n  object-fit: cover;\n  padding-right: 20px;\n}\n\n.item__name-item {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.item__costBlock {\n  display: flex;\n  flex-direction: column;\n  min-width: 25%;\n  align-items: center;\n}\n\n.item__cost {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.item__interaction {\n  display: flex;\n  width: 60%;\n  justify-content: space-around;\n}\n\n.button_round {\n  padding: 10px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.item__total {\n  display: flex;\n  width: 80%;\n  align-items: center;\n  justify-content: space-around;\n  margin: 0;\n  padding-top: 10px;\n}\n\n.item__amount,\n.item__price {\n  margin: 0;\n}\n\n.striked {\n  text-decoration-line: line-through;\n}\n\n.basket__checkout {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.checkout__header {\n  margin-bottom: 10px;\n  margin-top: 0;\n}\n\n.checkout__amount,\n.checkout__price,\n.checkout__newprice,\n.checkout__promo {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n.checkout__buy {\n  width: 50%;\n}\n\n.checkout__promos_active {\n  width: 80%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 10px;\n}\n\n.basket__alert {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  text-align: center;\n}\n\n.payment {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fdfcfc;\n  border-radius: 5px;\n  border: solid #a8a4ac 1.5px;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.overlay {\n  background-color: #000;\n  height: 100%;\n  left: 0;\n  opacity: 0.5;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  transition: all 0.3s ease;\n}\n\n.payment__title {\n  text-align: center;\n}\n\n.payment__input {\n  box-sizing: border-box;\n  width: 90%;\n  margin-bottom: 10px;\n  height: 25px;\n}\n\n.payment__input:invalid {\n  border: solid #ba080a 1.5px;\n}\n\n.payment__input:placeholder-shown {\n  border: solid #a8a4ac 1.5px;\n}\n\n.payment__input:valid {\n  border: solid green 1.5px;\n}\n\n.payment__card {\n  width: 90%;\n}\n\n.card__header {\n  text-align: center;\n}\n\n.card__icon {\n  height: 25px;\n}\n\n.card__number,\n.card__exp,\n.card__cvc {\n  height: 25px;\n  box-sizing: border-box;\n}\n\n.card__top,\n.card__bottom {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  gap: 10px;\n}\n\n.card__number,\n.card__cvc,\n.card__exp {\n  width: 100%;\n}\n\n.button_pay {\n  width: 90%;\n  margin-bottom: 10px;\n}\n\n.valid {\n  cursor: default;\n  background-color: green;\n}\n\n.invalid {\n  cursor: default;\n  background-color: #F6282B;\n}\n\n.unknown {\n  cursor: default;\n  background-color: #a8a4ac;\n}\n\n.footer {\n  display: flex;\n  justify-content: space-between;\n  border-top: solid #a8a4ac 1.5px;\n  align-items: center;\n  font-weight: bold;\n  font-size: 1.2em;\n}\n\n.footer__authors {\n  display: flex;\n  flex-direction: column;\n  color: #ba080a;\n  gap: 5px;\n}\n\n.footer__link {\n  text-decoration: none;\n  color: #ba080a;\n}\n\n.footer__rs {\n  height: 100%;\n}\n\n.footer__logo {\n  width: 100px;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #fdfcfc;\n  color: #171619;\n}\n\n.hidden {\n  display: none;\n}\n\ninput {\n  border: solid #a8a4ac 1.5px;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}", "",{"version":3,"sources":["webpack://./src/assets/styles/index.scss","webpack://./src/assets/styles/normalize.scss","webpack://./src/assets/styles/wrapper.scss","webpack://./src/assets/styles/header.scss","webpack://./src/assets/styles/vars.scss","webpack://./src/assets/styles/main.scss","webpack://./src/assets/styles/range.scss","webpack://./src/assets/styles/productPage.scss","webpack://./src/assets/styles/popupImage.scss","webpack://./src/assets/styles/basket.scss","webpack://./src/assets/styles/payment.scss","webpack://./src/assets/styles/footer.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n@import \"vars\";\n@import \"normalize\";\n@import \"wrapper\";\n@import \"header\";\n@import \"main\";\n@import \"range\";\n@import \"productPage\";\n@import \"popupImage\";\n@import \"basket\";\n@import \"payment\";\n@import \"footer\";\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    background-color: $white;\n    color: $black;\n}\n\n.hidden {\n    display: none;\n}\n\ninput {\n    border: solid $silver 1.5px;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}",".wrapper {\n  max-width: 1180px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}",".header {\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: solid $silver 1.5px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.header__logo {\n  margin: 0;\n}\n\n.header__basket {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n\n.header__basket_icon {\n  height: 100%;\n  cursor: pointer;\n}\n\n.basket_main {\n  fill: $red;\n}\n\n.basket_handle {\n  fill: $black;\n}\n\n.header__cost, .header__items {\n  width: 150px;\n  font-size: 1.5em;\n  margin: 0;\n  vertical-align: middle;\n  text-align: center;\n  font-weight: 550;\n}","$white: #fdfcfc;\n$red: #ba080a;\n$silver: #a8a4ac;\n$black: #171619;",".main {\n    display: flex;\n}\n\n.root-page {\n    display: flex;\n}\n\n.root-page {\n    display: flex;\n}\n\n// .root-page-close {\n//     display: none;\n// }\n\n.aside-bar {\n    width: 20%;\n    border-right: solid $silver 1.5px;\n    padding-top: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.button_base {\n    background-color: $red;\n    border: none;\n    color: $white;\n    padding-top: 1em;\n    padding-bottom: 1em;\n    border-radius: 0.5em;\n    cursor: pointer;\n}\n\n.button_reset {\n    width: 80%;\n    margin-bottom: 20px;\n}\n\n.main__content {\n    width: 80%;\n    padding: 20px;\n    display: grid;\n}\n\n.main__info-block {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-column-gap: 20px;\n    grid-template-areas: \"search search sort\";\n    width: 100%;\n    padding-bottom: 30px;\n}\n\n.search-block {\n    width: 100%;\n    grid-area: search;\n}\n\n.search-bar {\n    box-sizing: border-box;\n    width: 100%;\n    padding: 0.5em 2em;\n    border-radius: 0.25em;\n    border: solid $silver 1.5px;\n    background-color: $white;\n    color: $black;\n}\n\n.sort-block {\n    padding-right: 2em;\n    padding-left: 2em;\n    border-radius: 0.25em;\n    border: solid $silver 1.5px;\n    background-color: $white;\n    color: $black;\n}\n\n.main__product {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 20px;\n}\n\n.product__block {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    row-gap: 10px;\n    align-items: center;\n    border-radius: 0.25em;\n    border: solid $silver 1.5px;\n    padding-bottom: 10px;\n}\n\n.product__block__image {\n    width: 100%;\n    height: 200px;\n    background-position: top;\n    background-size: cover;\n    background-repeat: no-repeat;\n    border-top-left-radius: 0.25em;\n    border-top-right-radius: 0.25em;\n    border-bottom: solid $silver 1.5px;\n}\n\n.product__block__name-item {\n    padding-left: 1em;\n    padding-right: 1em;\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n}\n\n.product__block__description {\n    flex-grow: 1;\n    max-height: 6.8em;\n    padding-left: 1em;\n    padding-right: 1em;\n    overflow: hidden;\n}\n\n.product__block__cost {\n    margin: 0;\n}\n\n.product__block__button {\n    box-sizing: border-box;\n    width: calc(100% - 20px);\n}",".range-cost {\n    width: 80%;\n    position: relative;\n}\n\n.range-cost__inputs {\n    display: flex;\n    justify-content: space-around;\n}\n\n.range-input {\n    width: 40%;\n    text-align: center;\n}\n\n.range-cost__line,\n.range-cost__incl {\n\twidth: 100%;\n\tmin-height: 5px;\n\tborder-radius: 5px;\n    margin: 20px 0 20px 0;\n\tbackground: $silver;\n    position: absolute;\n}\n\n.range-cost__incl {\n\tbackground: $red;\n}\n\n.range-cost__point {\n    width: 100%;\n    border: none;\n    -webkit-appearance: none;\n}\n\n.range-cost__point::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    border: none;\n    position: relative;\n    height: 16px;\n    width: 16px;\n    background: $red;\n    border-radius: 50%;\n}\n\n.range-cost__point::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 5px;\n    border: none;\n    border-radius: 3px;\n    background: transparent;\n    position: absolute;\n    top: calc(100% - 22.5px);\n}",".product-page {\n    display: block;\n}\n\n.product-page__header {}\n\n.product-page__main {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center\n}\n\n.product-page__title {\n    text-align: center;\n    font-size: 20px;\n    flex: 0 0 100%;\n    color: $black;\n}\n\n.product-page__images {\n    flex: 20%;\n}\n\n.product-page__main-image {\n    width: 250px;\n    height: 250px;\n}\n\n.product-page__secondes-images {}\n\n.imageOther {\n    width: 50px;\n    height: 50px;\n}\n\n.product-page__information-block {\n    flex: 60%;\n}\n\n.product-page__brand {}\n\n.product-page__subtitle {\n    font-size: 18px;\n    background-color: $red;\n    color: $white;\n}\n\n.product-page__text {\n    background-color: $silver;\n    color: $black;\n}\n\n.product-page__description {}\n\n.product-page__taste {}\n\n.product-page__weight {}\n\n.product-page__TypeOfFeed {}\n\n.product-page__cost {\n    font-size: 24px;\n    text-align: center;\n    background-color: $red;\n    border-radius: 5px;\n    color: $white;\n    border: 2px solid $white;\n}\n\n.product-page__animal {}\n\n.product-page__bay-block {\n    display: flex;\n    flex-direction: column;\n    flex: 10%;\n    gap: 5px;\n}\n\n.product-page__cart {}\n\n.product-page__bay {}",".iamgePopup {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 5%;\n    left: 0;\n    display: flex;\n}\n\n.iamgePopup-active {\n    align-items: center;\n}\n\n.iamgePopup__image {\n    max-width: 30%;\n    margin: 0 auto;\n    border: 4px solid $red;\n    border-radius: 5px;\n    height: max-content;\n}",".basket {\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n  width: 100%;\n}\n\n.basket__items {\n  padding-top: 20px;\n  border-right: solid $silver 1.5px;\n}\n\n.basket__item {\n  display: flex;\n  padding: 10px;\n  border-bottom: solid $silver 1.5px;\n  align-items: center;\n}\n\n.basket__item:last-child {\n  border-bottom: none;\n}\n\n.item__image {\n  min-width: 30%;\n  min-height: 100%;\n  max-height: 100px;\n  object-position: top;\n  object-fit: cover;\n  padding-right: 20px;\n}\n\n.item__name-item {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.item__costBlock {\n  display: flex;\n  flex-direction: column;\n  min-width: 25%;\n  align-items: center;\n}\n\n.item__cost {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.item__interaction {\n  display: flex;\n  width: 60%;\n  justify-content: space-around;\n}\n\n.button_round {\n  padding: 10px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.item__total {\n  display: flex;\n  width: 80%;\n  align-items: center;\n  justify-content: space-around;\n  margin: 0;\n  padding-top: 10px;\n}\n\n.item__amount,\n.item__price {\n  margin: 0;\n}\n\n.striked {\n  text-decoration-line: line-through;\n}\n\n.basket__checkout {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.checkout__header {\n  margin-bottom: 10px;\n  margin-top: 0;\n}\n\n.checkout__amount,\n.checkout__price,\n.checkout__newprice,\n.checkout__promo {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n.checkout__buy {\n  width: 50%;\n}\n\n.checkout__promos_active {\n  width: 80%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 10px;\n}\n\n.basket__alert {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  text-align: center;\n}",".payment {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: $white;\n  border-radius: 5px;\n  border: solid $silver 1.5px;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.overlay {\n  background-color: #000;\n  height: 100%;\n  left: 0;\n  opacity: 0.50;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  transition: all 0.3s ease;\n}\n\n.payment__title {\n  text-align: center;\n}\n\n.payment__input {\n  box-sizing: border-box;\n  width: 90%;\n  margin-bottom: 10px;\n  height: 25px;\n}\n\n.payment__input:invalid {\n  border: solid $red 1.5px;\n}\n\n.payment__input:placeholder-shown {\n  border: solid #a8a4ac 1.5px;\n}\n\n.payment__input:valid {\n  border: solid green 1.5px;\n}\n\n.payment__card {\n  width: 90%;\n}\n\n.card__header {\n  text-align: center;\n}\n\n.card__icon {\n  height: 25px;\n}\n\n.card__number,\n.card__exp,\n.card__cvc {\n  height: 25px;\n  box-sizing: border-box;\n}\n\n.card__top,\n.card__bottom {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  gap: 10px;\n}\n\n.card__number,\n.card__cvc,\n.card__exp {\n  width: 100%;\n}\n\n.button_pay {\n  width: 90%;\n  margin-bottom: 10px;\n}\n\n.valid {\n  cursor: default;\n  background-color: green;\n}\n\n.invalid {\n  cursor: default;\n  background-color: #F6282B;\n}\n\n.unknown {\n  cursor: default;\n  background-color: $silver;\n}",".footer {\n  display: flex;\n  justify-content: space-between;\n  border-top: solid $silver 1.5px;\n  align-items: center;\n  font-weight: bold;\n  font-size: 1.2em;\n}\n\n.footer__authors {\n  display: flex;\n  flex-direction: column;\n  color: $red;\n  gap: 5px;\n}\n\n.footer__link {\n  text-decoration: none;\n  color: $red;\n}\n\n.footer__rs {\n  height: 100%;\n}\n\n.footer__logo {\n  width: 100px;\n}"],"sourceRoot":""}]);
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
const basketData_1 = __webpack_require__(/*! ../data/basketData */ "./src/assets/components/data/basketData.ts");
function loadBasket() {
    var _a;
    const main = document.querySelector('.root-page');
    main === null || main === void 0 ? void 0 : main.classList.add('hidden');
    const productPage = document.querySelector('.product-page');
    productPage === null || productPage === void 0 ? void 0 : productPage.classList.add('hidden');
    if (document.querySelector('.basket')) {
        (_a = document.querySelector('.basket')) === null || _a === void 0 ? void 0 : _a.remove();
    }
    const basket = document.createElement('div');
    basket.classList.add('basket');
    if (basketData_1.default.amount == 0) {
        const alert = document.createElement('h2');
        alert.classList.add('basket__alert');
        alert.innerText = 'The basket is empty, please return to the main page to add your first item!';
        basket.appendChild(alert);
        main === null || main === void 0 ? void 0 : main.after(basket);
    }
    else {
        const items = document.createElement('div');
        items.classList.add('basket__items');
        basket.appendChild(items);
        const checkout = document.createElement('div');
        checkout.classList.add('basket__checkout');
        basket.appendChild(checkout);
        main === null || main === void 0 ? void 0 : main.after(basket);
        (0, generateBasket_1.default)();
    }
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
const generatePayment_1 = __webpack_require__(/*! ../payment/generatePayment */ "./src/assets/components/payment/generatePayment.ts");
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
    buy.addEventListener('click', generatePayment_1.default);
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

/***/ "./src/assets/components/createProductPage.ts":
/*!****************************************************!*\
  !*** ./src/assets/components/createProductPage.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const basketInit_1 = __webpack_require__(/*! ../components/basket/basketInit */ "./src/assets/components/basket/basketInit.ts");
const logo = document.querySelector('.logo');
const productPageMain = document.querySelector('.product-page__main');
function openProductPage(data) {
    const rootPage = document.querySelector('.root-page');
    rootPage === null || rootPage === void 0 ? void 0 : rootPage.classList.add('hidden');
    const productPageActive = document.querySelector('.product-page');
    productPageActive === null || productPageActive === void 0 ? void 0 : productPageActive.classList.remove('hidden');
    createProductPage(data);
}
exports["default"] = openProductPage;
function createProductPage(data) {
    const productPageMainImage = document.querySelector('.product-page__main-image');
    console.log(productPageMainImage);
    productPageMainImage.src = `${data.imageMain}`;
    const productPageSecondesImages = document.querySelector('.product-page__secondes-images');
    const imageOther = document.querySelectorAll('.imageOther');
    for (let i = 0; i < data.imageOther.length; i++) {
        if (imageOther) {
            imageOther.forEach(element => {
                element.remove();
            });
        }
        let img = document.createElement("img");
        img.classList.add('imageOther');
        img.src = `${data.imageOther[i]}`;
        productPageSecondesImages === null || productPageSecondesImages === void 0 ? void 0 : productPageSecondesImages.appendChild(img);
    }
    const productPageTitle = document.querySelector('.product-page__title');
    productPageTitle.textContent = `${data.name}`;
    const productPpageBrand = document.querySelector('.product-page__brand');
    const childrenBrand = productPpageBrand === null || productPpageBrand === void 0 ? void 0 : productPpageBrand.children;
    childrenBrand[0].textContent = `Brand`;
    childrenBrand[1].textContent = data.brand;
    // name(productPpageBrand, data)
    const productPpageDescription = document.querySelector('.product-page__description');
    const childrenDescription = productPpageDescription === null || productPpageDescription === void 0 ? void 0 : productPpageDescription.children;
    childrenDescription[0].textContent = `Description`;
    childrenDescription[1].textContent = data.description;
    const productPpageTaste = document.querySelector('.product-page__taste');
    const childrenTaste = productPpageTaste === null || productPpageTaste === void 0 ? void 0 : productPpageTaste.children;
    childrenTaste[0].textContent = `Taste`;
    childrenTaste[1].textContent = data.taste;
    const productPpageWeight = document.querySelector('.product-page__weight');
    const childrenWeight = productPpageWeight === null || productPpageWeight === void 0 ? void 0 : productPpageWeight.children;
    childrenWeight[0].textContent = `Weight`;
    childrenWeight[1].textContent = data.weight;
    const productPpageTypeOfFeed = document.querySelector('.product-page__TypeOfFeed');
    const childrenTypeOfFeed = productPpageTypeOfFeed === null || productPpageTypeOfFeed === void 0 ? void 0 : productPpageTypeOfFeed.children;
    childrenTypeOfFeed[0].textContent = `Type Of Feed`;
    childrenTypeOfFeed[1].textContent = data.TypeOfFeed;
    const productPpageAnimal = document.querySelector('.product-page__animal');
    const childrenAnimal = productPpageAnimal === null || productPpageAnimal === void 0 ? void 0 : productPpageAnimal.children;
    childrenAnimal[0].textContent = `Animal`;
    childrenAnimal[1].textContent = data.animal;
    const bayBlock = document.createElement('div');
    const div = document.createElement("div");
    const addToCartBTM = document.createElement("button");
    const buyNowBTM = document.createElement("button");
    const productPageBayBlock = document.querySelector('.product-page__bay-block');
    if (productPageBayBlock) {
        productPageBayBlock.remove();
    }
    bayBlock.classList.add('product-page__bay-block');
    div.classList.add('product-page__cost');
    addToCartBTM.classList.add('button_base', 'product-page__cart');
    buyNowBTM.classList.add('button_base', 'product-page__bay');
    div.textContent = data.cost + '$';
    addToCartBTM.textContent = 'ADD TO CART';
    buyNowBTM.textContent = 'BUY NOW';
    bayBlock === null || bayBlock === void 0 ? void 0 : bayBlock.appendChild(div);
    bayBlock === null || bayBlock === void 0 ? void 0 : bayBlock.appendChild(addToCartBTM);
    bayBlock === null || bayBlock === void 0 ? void 0 : bayBlock.appendChild(buyNowBTM);
    productPageMain.appendChild(bayBlock);
    (0, basketInit_1.default)(addToCartBTM, data);
}
// function name(element: Element | null, data: IBasicNew) {
//   const children = element?.children
//   const names:string  = String(element?.className.split('__')[1])
//   children![0].textContent = `${names}`
//   for (let key in data) {
//     if (key == names)
//     children![1].textContent = data[key]
//   }
//   children![1].textContent = data[names]
// }


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
        imageOther: ['https://avatars.mds.yandex.net/get-mpic/5245452/img_id6969097289587066844.jpeg/orig'],
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
        imageOther: ['https://ravta.ru/upload/iblock/621/621ac2c7b44d45b404d4999cc943e662.jpg'],
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
        imageOther: ['https://ae01.alicdn.com/kf/Hfde1f3f9f4894fc8b23a3374143f31bc5/Kitekat-food-for-adult-cats-of-all-breeds-rabbit-in-sauce-28sht-in-the-pack-85g.jpg_Q90.jpg_.webp'],
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
        imageOther: ['https://ipetstore.com.au/9927-thickbox_default/royal-canin-indoor-sterilised-wet-food-for-cats-in-jelly.jpg'],
        description: `Adult cats that are constantly kept indoors are less active compared to animals that have access to the street. That's why a full-fledged balanced diet rich in valuable nutrients is so important for their health.`,
        cost: '2.13',
        brand: `Royal Canin`,
        taste: 'Bird',
        weight: '85',
        TypeOfFeed: 'wet',
    },
    {
        animal: 'cat',
        name: `Royal Canin food for sterilized cats, Sterilized 37`,
        imageMain: 'https://zoobazar.by/upload/resize_cache/iblock/b29/x11a5bsoqtf3n9iyij7bgmrkrucqcea6/260_260_040cd750bba9870f18aada2478b24840a/detail_picture5f5ce20e_b510_47de_ad28_d261aa29a3e1.jpg',
        imageOther: ['https://cdn1.ozone.ru/s3/multimedia-k/6029778140.jpg', 'https://zoobazar.by/upload/resize_cache/iblock/8a2/g1xg3bpzg453ithh28hv19o1ys3com21/260_260_040cd750bba9870f18aada2478b24840a/add4bd907ac_e592_451a_b7e4_90aba23161bc.jpg'],
        description: `ROYAL CANIN ® Sterilized 37 helps to reduce the risk of becoming overweight, thanks to a moderate fat content, while observing the recommended feeding standards.`,
        cost: '44.28',
        brand: `Royal Canin`,
        taste: '-',
        weight: '2000',
        TypeOfFeed: 'dry',
    },
    {
        animal: 'cat',
        name: `Brit Premium Cat Sterilized Chicken`,
        imageMain: 'https://zoobazar.by/upload/resize_cache/iblock/742/37q9ab5m8cahmit374cp7b5p1feeshv8/260_260_040cd750bba9870f18aada2478b24840a/detail_picture97cc2490_c93b_466f_ae2d_977f66e1665c.png',
        imageOther: ['https://brit-petfood.by/loads/catalogue/big/d4c466909e6d7b106346b09267b151cc.jpg'],
        description: `Premium full-fledged dry food with chicken`,
        cost: '28.99',
        brand: `Brit`,
        taste: 'chicken',
        weight: '2000',
        TypeOfFeed: 'dry',
    },
    {
        animal: 'cat',
        name: `Whiskas for sterilized cats, with chicken and delicious pads`,
        imageMain: 'https://zoobazar.by/upload/resize_cache/iblock/334/8lig65q2oqpmzkeygkxzduorz2xtabgb/260_260_040cd750bba9870f18aada2478b24840a/addff109082_5e87_4ced_ab73_160efe29214a.png',
        imageOther: ['https://zoobazar.by/upload/resize_cache/iblock/e17/4yizl2qzjphh8nvmd1i9ps9rqbfq7q7x/260_260_040cd750bba9870f18aada2478b24840a/addfc94d1db_420c_4d20_a624_8a0ecf16f761.png', 'https://zoobazar.by/upload/resize_cache/iblock/cc1/a96dcfic58wateioz89hq32je4f5dwch/260_260_040cd750bba9870f18aada2478b24840a/add82f163b6_19eb_42b5_b3fd_963fefd8443f.png'],
        description: ``,
        cost: '44.95',
        brand: `Whiskas`,
        taste: 'chicken',
        weight: '5000',
        TypeOfFeed: 'dry',
    },
    {
        animal: 'cat',
        name: `GOSBI Original Cat Grain Free Sterilized`,
        imageMain: 'https://zoobazar.by/upload/resize_cache/iblock/f8f/z4jxjugomxb3zzg99wwt0goqzkdsvxzy/260_260_040cd750bba9870f18aada2478b24840a/detail_picture959ee9b8_642c_4d5e_9583_a23ccd31f435.png',
        imageOther: ['https://zoovsem.by/upload/iblock/5fe/8436566802949_2.png'],
        description: `Grain-free food Guests for sterilized cats. Due to its low fat content (12%), it helps to reduce the amount of fat deposits and prevent obesity. Natural fiber provides satiety, controls appetite and supports healthy intestinal function. In the balanced composition of the GOSTI ORIGINAL line, we also use special ingredients (algae, fruits and vegetables rich in natural antioxidants) to improve vision, immunity, cardiovascular system and intestines.
        As a source of high-quality protein, we use dehydrated meat, which provides digestibility of more than 90%.`,
        cost: '47.66',
        brand: `GOSBI`,
        taste: 'chicken',
        weight: '1000',
        TypeOfFeed: 'dry',
    },
    {
        animal: 'cat',
        name: `Darsi cat food, Sensitive, turkey, 1.8 kg`,
        imageMain: 'https://zoobazar.by/upload/iblock/5cd/rpe6xwxhozu7fnfwlg9p1xzn23x02qmd/detail_picture18889c23_28b0_40a3_b495_b08457cda204.jpg',
        imageOther: ['https://kotmatros.ru/wa-data/public/shop/products/62/03/90362/images/179362/179362.970.jpg'],
        description: `Darcy dry cat food with sensitive digestion, Turkey.
        Main advantages:`,
        cost: '18.99',
        brand: `Darsi`,
        taste: 'turkey',
        weight: '1800',
        TypeOfFeed: 'dry',
    },
    {
        animal: 'cat',
        name: `Purina Pro Plan food for adult cats with sensitive digestion with a high turkey content`,
        imageMain: 'https://zoobazar.by/upload/resize_cache/iblock/2ac/rlu3gdey00rx41bdyepd0s63jhnfqxx3/260_260_040cd750bba9870f18aada2478b24840a/detail_picture97eb750e_9609_4771_b66f_1f7cbbfbed5d.jpeg',
        imageOther: ['https://vetapteki.by/wp-content/uploads/prod/2021/09/G000100748_1_210923.jpg?v=1632471169'],
        description: `Food sensitivity can lead to digestive disorders, skin irritation, or loss of appetite. The special diet PRO PLAN® Delicate is a balanced cat food that combines all the essential nutrients, including vitamins and minerals and helps to maintain the health of the digestive system due to the content of prebiotics. The PRO PLAN® DELICATE feed line uses selected protein sources, which helps to increase food tolerance and reduces the likelihood of an allergic reaction to food in cats of any age.`,
        cost: '41.51',
        brand: `Purina Pro Plan`,
        taste: 'turkey',
        weight: '1500',
        TypeOfFeed: 'dry',
    },
    {
        animal: 'dog',
        name: `Brit canned food, for adult dogs of all breeds, with lamb and tripe, Premium by Nature`,
        imageMain: 'https://zoobazar.by/upload/resize_cache/iblock/a7d/5kw0vf0ef7x4qx2nu98ohmkxhmf5wvtq/260_260_040cd750bba9870f18aada2478b24840a/detail_picture40b12aa7_07b2_4cd0_913b_53820420733c.jpg',
        imageOther: ['https://vetapteki.by/wp-content/uploads/prod/2022/07/G000100160_5_220719.jpg?v=1658297962'],
        description: `Full-fledged wet canned premium food with lamb and tripe for dogs of all breeds, 850 gr`,
        cost: '7,13',
        brand: `Brit`,
        taste: 'sheepmeat',
        weight: '850',
        TypeOfFeed: 'wet',
    },
    {
        animal: 'dog',
        name: `Darsi pate, for adult dogs, chicken and turkey,`,
        imageMain: 'https://zoobazar.by/upload/resize_cache/iblock/354/r7sryl0trk8mavzl6e1lv9pm2yo0yd8q/260_260_040cd750bba9870f18aada2478b24840a/detail_picturefb9a54a4_8afb_4b2a_a10f_93973bf43e07.jpg',
        imageOther: ['https://avatars.mds.yandex.net/get-mpic/4589539/img_id3259181255494660908.jpeg/orig'],
        description: ``,
        cost: '3.32',
        brand: `Darsi`,
        taste: 'chicken',
        weight: '410',
        TypeOfFeed: 'wet',
    },
    {
        animal: 'dog',
        name: `ProBalance Sensitive spider for dogs with sensitive digestion, 85`,
        imageMain: 'https://zoobazar.by/upload/resize_cache/iblock/dc5/5yr601y66it0jzxpto7l3hc7ulnwo16h/260_260_040cd750bba9870f18aada2478b24840a/detail_picture731898b0_437f_40f3_b604_20ea484195cf.png',
        imageOther: ['https://basket-02.wb.ru/vol260/part26017/26017748/images/c246x328/1.jpg'],
        description: `ProBalance® Sensitive is designed for daily feeding of adult dogs of all breeds with sensitive digestion. A wide ingredient composition of high quality provides the dog with all the necessary nutrients. The food is enriched with vitamins, minerals and amino acids. It has restorative and tonic properties, promotes the longevity of your dog. ProBalance® feed is a balance of taste and benefits. ProBalance® canned food does not contain GMOs, dyes and preservatives. Specially selected raw materials and strict production requirements ensure high quality of the product.`,
        cost: '0.95',
        brand: `ProBalance`,
        taste: 'chicken',
        weight: '85',
        TypeOfFeed: 'wet',
    },
    {
        animal: 'dog',
        name: `Canned BLITZ STARTER, for puppies, as well as pregnant and nursing bitches`,
        imageMain: 'https://zoobazar.by/upload/resize_cache/iblock/748/k6skzkkg860mb21aiqkv2vbvfibd56se/260_260_040cd750bba9870f18aada2478b24840a/detail_picturea6530ac2_7a41_4d4f_99a6_7cd19642bb59.png',
        imageOther: ['https://markvet.ru/upload/iblock/423/3xct67uuhl1qbe3l17o8w5i3ho2rcupo.jpg'],
        description: `Wet starter food for puppies Blitz "Turkey with zucchini" — contains up to 90% of meat ingredients, as well as milk powder and a full complex of vitamins and minerals, which fully meets the requirements for products for the first complementary feeding of puppies. Turkey is rich in high—quality protein and vitamins, zucchini is a valuable source of useful trace elements and fiber that supports the health of the gastrointestinal tract, and milk is a natural food product for babies of this age that is perfectly absorbed.`,
        cost: '6.37',
        brand: `Blitz`,
        taste: 'turkey',
        weight: '200',
        TypeOfFeed: 'wet',
    },
    {
        animal: 'dog',
        name: `Chicopee Adult canned food for adult dogs, Beef with rice and vegetables`,
        imageMain: 'https://zoobazar.by/upload/resize_cache/iblock/973/idqrl6av0ahhbvmmspwvbdmba2pbq7oy/260_260_040cd750bba9870f18aada2478b24840a/detail_picture9fa95c52_e74e_4bb4_9253_08162da768db.png',
        imageOther: ['https://chicopee.by/images/news/Flyer-Chicopee_DOG_wet-food_03-20-min-1.png'],
        description: `Chicopee Adult (Beef with rice and vegetables) is a wet food for adult dogs of all breeds. With a meat component of up to 90% (meat, offal, and meat broth) and enriched with a variety of natural and valuable ingredients of animal and vegetable origin. Chicopee takes care of the availability of fresh vegetables in the composition for the well-being and vitality of the pet.`,
        cost: '10.70',
        brand: `Chicopee`,
        taste: 'Beef',
        weight: '800',
        TypeOfFeed: 'wet',
    },
    {
        animal: 'dog',
        name: `BonaCibo Super Premium food, for adult dogs of all breeds, with the taste of lamb and rice`,
        imageMain: 'https://zoobazar.by/upload/resize_cache/iblock/27f/1ivjp8bez4c2pox6dkm1vxg641f7k0bq/260_260_040cd750bba9870f18aada2478b24840a/detail_picture43c01a04_3963_44b0_90d9_e0f2ec40e53d.jpg',
        imageOther: [],
        description: `BonaCibo (Bonacibo) Adult Dog Lamb & Rice — hypoallergenic food for adult dogs of all breeds with lamb and rice. Adult Dog Lamb & Rice super premium dry food is developed by BonaCibo. The product contains an optimal balance of proteins, fats and carbohydrates, which ensures constant energy and a good physique of the pet throughout life. Ideal for dogs with sensitive digestion or those who prefer the delicate taste of lamb.`,
        cost: '44.40',
        brand: `BONACİBO`,
        taste: 'lamb',
        weight: '4000',
        TypeOfFeed: 'dry',
    },
    {
        animal: 'dog',
        name: `Chappi food for adult dogs of all breeds, beef at home`,
        imageMain: 'https://zoobazar.by/upload/resize_cache/iblock/fa8/bf1r54im4zgt6mma89vb2ngyu971w9pt/260_260_040cd750bba9870f18aada2478b24840a/detail_picturea54b3be1_0b37_4d4c_80af_41677ec20f91.png',
        imageOther: ['https://main-cdn.sbermegamarket.ru/mid9/hlr-system/-20/513/448/131/111/103/8/100001276610b1.jpg'],
        description: `Chappi for adult dogs of all breeds (Beef at home) is a complete dry food for adult dogs of all breeds. The new delicious menu from Chappie will become your dog's favorite food. Choosing a full-fledged balanced Chappie diet for your pet, you can be sure that every day your dog will be happy, playful and healthy.`,
        cost: '68,85',
        brand: `Chappi`,
        taste: 'beef',
        weight: '1500',
        TypeOfFeed: 'dry',
    },
    {
        animal: 'dog',
        name: `Brit Premium Dog Puppy and Junior Small food for puppies and young dogs of small breeds, Chicken`,
        imageMain: 'https://zoobazar.by/upload/resize_cache/iblock/b1c/n9a7oztc0wfkphl4rdkouce4vt9jej1f/260_260_040cd750bba9870f18aada2478b24840a/detail_pictureba128f0f_1d59_411c_a0a5_1425d5f1647a.png',
        imageOther: ['https://brit-petfood.by/loads/catalogue/big/2a324e535410a9ef80d1c7d3a2783233.jpg'],
        description: `Premium full-fledged dry food with chicken for puppies and young dogs (1-12 months) of small breeds (1-10 kg), 3 kg.
        Suitable for pregnant and nursing dogs.`,
        cost: '38.73',
        brand: `Brit`,
        taste: 'chicken',
        weight: '3000',
        TypeOfFeed: 'dry',
    },
    {
        animal: 'dog',
        name: `Dog Chow food for puppies with lamb`,
        imageMain: 'https://zoobazar.by/upload/resize_cache/iblock/325/6belb49rs4tufg56ynmtyb6cfaokryop/260_260_040cd750bba9870f18aada2478b24840a/detail_picture303c6d0e_d865_4a3b_a3a3_b7bd92d4860c.jpeg',
        imageOther: ['https://dvadruga.ru/upload/iblock/d73/d7313d2a3ba48af4c4e2addec9226549.jpg'],
        description: `With the entry into adulthood, your pet will start looking for even more adventures. Dog Chow Puppy Puppy food is a 100% balanced diet that combines meat, essential mineral elements and vitamins that help the puppy grow healthy, strong and ready for new challenges. The food is also suitable for adult dogs of small breeds and dogs during pregnancy and breastfeeding.`,
        cost: '22.46',
        brand: `Purina Dog Chow`,
        taste: 'beef',
        weight: '2500',
        TypeOfFeed: 'dry',
    },
    {
        animal: 'dog',
        name: `Happy Dog food for puppies of small breeds from 4 weeks to 12 months, with the taste of poultry and salmon`,
        imageMain: 'https://zoobazar.by/upload/resize_cache/iblock/409/ve8ylbkdiaeebpv1okf9ii0t831kvjtt/260_260_040cd750bba9870f18aada2478b24840a/detail_picture5fdd1300_7ef9_4f25_b631_bbf20a8a5dc1.jpg',
        imageOther: ['https://basket-01.wb.ru/vol118/part11850/11850964/images/big/2.webp'],
        description: `Mini Baby & Junior 29/16 (poultry and salmon) - food for puppies and juniors from 4 weeks to 12 months inclusive. The meat of the New Zealand mollusk, which is part of the composition, is necessary for puppies to maintain the musculoskeletal system. Several protein sources enable puppies to eat biologically correctly.`,
        cost: '21.63',
        brand: `Happy Dog`,
        taste: 'chicken',
        weight: '1000',
        TypeOfFeed: 'dry',
    },
    // {
    //     animal: 'dog',
    //     name: ``,
    //     imageMain: '',
    //     imageOther: [],
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

/***/ "./src/assets/components/data/resetData.ts":
/*!*************************************************!*\
  !*** ./src/assets/components/data/resetData.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const basketData_1 = __webpack_require__(/*! ./basketData */ "./src/assets/components/data/basketData.ts");
const impBasicInit_1 = __webpack_require__(/*! ../impBasicInit */ "./src/assets/components/impBasicInit.ts");
function resetData() {
    basketData_1.default.itemsIDs = new Set;
    basketData_1.default.amount = 0;
    basketData_1.default.price = 0;
    impBasicInit_1.default.forEach((value) => {
        value.amount = 0;
        value.price = 0;
    });
}
exports["default"] = resetData;


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

/***/ "./src/assets/components/main/showMain.ts":
/*!************************************************!*\
  !*** ./src/assets/components/main/showMain.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function showMain() {
    var _a, _b;
    const main = document.querySelector('.root-page');
    main === null || main === void 0 ? void 0 : main.classList.remove('hidden');
    const productPage = document.querySelector('.product-page');
    //remove modal windows
    if (document.querySelector('.basket')) {
        (_a = document.querySelector('.basket')) === null || _a === void 0 ? void 0 : _a.remove();
    }
    if (!(productPage === null || productPage === void 0 ? void 0 : productPage.classList.contains('hidden'))) {
        productPage === null || productPage === void 0 ? void 0 : productPage.classList.add('hidden');
    }
    if (document.querySelector('.payment')) {
        (_b = document.querySelector('.payment')) === null || _b === void 0 ? void 0 : _b.remove();
    }
}
exports["default"] = showMain;


/***/ }),

/***/ "./src/assets/components/payment/closePayment.ts":
/*!*******************************************************!*\
  !*** ./src/assets/components/payment/closePayment.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function closePayment() {
    var _a, _b;
    if (document.querySelector('.payment')) {
        (_a = document.querySelector('.payment')) === null || _a === void 0 ? void 0 : _a.remove();
    }
    (_b = document.querySelector('.overlay')) === null || _b === void 0 ? void 0 : _b.classList.add('hidden');
}
exports["default"] = closePayment;


/***/ }),

/***/ "./src/assets/components/payment/generatePayment.ts":
/*!**********************************************************!*\
  !*** ./src/assets/components/payment/generatePayment.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const closePayment_1 = __webpack_require__(/*! ./closePayment */ "./src/assets/components/payment/closePayment.ts");
const paymentComplete_1 = __webpack_require__(/*! ./paymentComplete */ "./src/assets/components/payment/paymentComplete.ts");
function generatePayment() {
    var _a;
    const overlay = document.querySelector('.overlay');
    overlay === null || overlay === void 0 ? void 0 : overlay.classList.remove('hidden');
    overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener('click', closePayment_1.default);
    const payment = document.createElement('div');
    payment.classList.add('payment');
    const title = document.createElement('h2');
    title.classList.add('payment__title');
    title.innerText = 'Payment info';
    payment.appendChild(title);
    const name = document.createElement('input');
    name.type = 'text';
    name.placeholder = 'Name + Surname';
    name.classList.add('payment__input', 'payment__name');
    name.required = true;
    name.pattern = "\\w{3,}\\s\\w{3,}";
    payment.appendChild(name);
    const phone = document.createElement('input');
    phone.type = 'tel';
    phone.placeholder = 'Phone number';
    phone.classList.add('payment__input', 'payment__phone');
    phone.required = true;
    phone.pattern = "\\+\\d{9,}";
    payment.appendChild(phone);
    const address = document.createElement('input');
    address.type = 'text';
    address.placeholder = 'Delivery address';
    address.classList.add('payment__input', 'payment__address');
    address.required = true;
    address.pattern = '\\w{5,}(\\s\\w{5,}){2,}';
    payment.appendChild(address);
    const email = document.createElement('input');
    email.type = 'email';
    email.placeholder = 'E-mail';
    email.classList.add('payment__input', 'payment__email');
    email.required = true;
    payment.appendChild(email);
    const card = document.createElement('div');
    card.classList.add('payment__card');
    payment.appendChild(card);
    const subheader = document.createElement('h3');
    subheader.classList.add('card__header');
    subheader.innerText = 'Card details';
    card.appendChild(subheader);
    const cardTop = document.createElement('div');
    cardTop.classList.add('card__top');
    card.appendChild(cardTop);
    const cardIcon = document.createElement('img');
    cardIcon.classList.add('card__icon');
    cardIcon.src = 'card.png';
    cardTop.appendChild(cardIcon);
    const cardnum = document.createElement('input');
    cardnum.type = 'text';
    cardnum.placeholder = 'Card number';
    cardnum.classList.add('payment__input', 'card__number');
    cardnum.required = true;
    cardnum.maxLength = 16;
    cardnum.oninput = () => { cardnum.value = cardnum.value.replace(/[^0-9]/g, ''); };
    cardnum.pattern = '\\d{16}';
    cardnum.addEventListener('change', () => {
        switch (cardnum.value[0]) {
            case '2': {
                cardIcon.src = 'mir.png';
                break;
            }
            case '4': {
                cardIcon.src = 'mastercard.png';
                break;
            }
            case '5': {
                cardIcon.src = 'visa.png';
                break;
            }
            default: cardIcon.src = 'card.png';
        }
    });
    cardTop.appendChild(cardnum);
    const cardBottom = document.createElement('div');
    cardBottom.classList.add('card__bottom');
    card.appendChild(cardBottom);
    const exp = document.createElement('input');
    exp.type = 'tel';
    exp.placeholder = 'MM/YY';
    exp.classList.add('payment__input', 'card__exp');
    exp.required = true;
    exp.pattern = '^(0[1-9]|1[0-2])\\/?([0-9]{2})';
    exp.maxLength = 5;
    exp.addEventListener('keypress', () => {
        if (exp.value.length == 2) {
            exp.value += '/';
        }
    });
    cardBottom.appendChild(exp);
    const cvc = document.createElement('input');
    cvc.type = 'tel';
    cvc.placeholder = 'CVC';
    cvc.classList.add('payment__input', 'card__cvc');
    cvc.required = true;
    cvc.maxLength = 3;
    cvc.oninput = () => { cvc.value = cvc.value.replace(/[^0-9]/g, ''); };
    cvc.pattern = '\\d{3}';
    cardBottom.appendChild(cvc);
    const pay = document.createElement('button');
    pay.classList.add('button_base', 'button_pay');
    pay.innerText = 'Pay now';
    pay.addEventListener('click', paymentComplete_1.default);
    payment.appendChild(pay);
    (_a = document.querySelector('.basket')) === null || _a === void 0 ? void 0 : _a.after(payment);
}
exports["default"] = generatePayment;


/***/ }),

/***/ "./src/assets/components/payment/paymentComplete.ts":
/*!**********************************************************!*\
  !*** ./src/assets/components/payment/paymentComplete.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const resetData_1 = __webpack_require__(/*! ../data/resetData */ "./src/assets/components/data/resetData.ts");
const showMain_1 = __webpack_require__(/*! ../main/showMain */ "./src/assets/components/main/showMain.ts");
const updateHeader_1 = __webpack_require__(/*! ../updateHeader */ "./src/assets/components/updateHeader.ts");
function paymentComplete() {
    const overlay = document.querySelector('.overlay');
    const button = document.querySelector('.button_pay');
    const payment = document.querySelector('.payment');
    if ((payment === null || payment === void 0 ? void 0 : payment.querySelector(':invalid')) == null) {
        button === null || button === void 0 ? void 0 : button.removeEventListener('click', paymentComplete);
        button === null || button === void 0 ? void 0 : button.classList.add('unknown');
        button.innerText = 'Please wait...';
        setTimeout(() => {
            button === null || button === void 0 ? void 0 : button.classList.remove('unknown');
            button === null || button === void 0 ? void 0 : button.classList.add('valid');
            button.innerText = 'Completed!';
            setTimeout(() => {
                overlay === null || overlay === void 0 ? void 0 : overlay.classList.add('hidden');
                (0, resetData_1.default)();
                (0, updateHeader_1.default)();
                (0, showMain_1.default)();
            }, 2000);
        }, 3000);
    }
    else {
        button === null || button === void 0 ? void 0 : button.removeEventListener('click', paymentComplete);
        button === null || button === void 0 ? void 0 : button.classList.add('invalid');
        button.innerText = 'Please fill out the form';
        setTimeout(() => {
            button === null || button === void 0 ? void 0 : button.classList.remove('invalid');
            button.innerText = 'Pay now';
            button === null || button === void 0 ? void 0 : button.addEventListener('click', paymentComplete);
        }, 3000);
    }
}
exports["default"] = paymentComplete;


/***/ }),

/***/ "./src/assets/components/product-page.ts":
/*!***********************************************!*\
  !*** ./src/assets/components/product-page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const createProductPage_1 = __webpack_require__(/*! ./createProductPage */ "./src/assets/components/createProductPage.ts");
const productpageImages = document.querySelector('.product-page__images');
const iamgePopup = document.querySelector('.iamgePopup');
const iamgePopupImage = document.querySelector('.iamgePopup__image');
const mainImage = document.querySelector('.product-page__main-image');
function onMainProduct(element, data) {
    element.addEventListener('click', (e) => {
        if (!(e.target instanceof HTMLElement)) {
            return;
        }
        const target = e.target;
        const isBuyBtm = ['product__block__button button_base'].includes(target.className);
        if (isBuyBtm) {
            return;
        }
        (0, createProductPage_1.default)(data);
    });
}
const onPoductImages = (even) => {
    if (!(even.target instanceof HTMLImageElement)) {
        return;
    }
    const target = even.target;
    const isPoductMain = ['product-page__main-image'].includes(target.className);
    const isImageOther = ['imageOther'].includes(target.className);
    if (isPoductMain) {
        openMainImg(target);
    }
    if (isImageOther) {
        swopMainAndSecandImage(target);
    }
};
productpageImages === null || productpageImages === void 0 ? void 0 : productpageImages.addEventListener('click', onPoductImages);
exports["default"] = onMainProduct;
function openMainImg(target) {
    iamgePopup === null || iamgePopup === void 0 ? void 0 : iamgePopup.classList.remove('hidden');
    iamgePopupImage.src = `${target.src}`;
    iamgePopup === null || iamgePopup === void 0 ? void 0 : iamgePopup.addEventListener('click', (e) => {
        if (!(e.target instanceof HTMLElement)) {
            return;
        }
        const target = e.target;
        const popupimage = ['iamgePopup__image'].includes(target.className);
        if (popupimage) {
            return;
        }
        iamgePopup === null || iamgePopup === void 0 ? void 0 : iamgePopup.classList.add('hidden');
    });
}
function swopMainAndSecandImage(target) {
    const srcMainImage = mainImage.src;
    const secandImage = target.src;
    mainImage.src = secandImage;
    target.src = srcMainImage;
}


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

/***/ }),

/***/ "./src/assets/icons/card.png":
/*!***********************************!*\
  !*** ./src/assets/icons/card.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "card.png";

/***/ }),

/***/ "./src/assets/icons/mastercard.png":
/*!*****************************************!*\
  !*** ./src/assets/icons/mastercard.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mastercard.png";

/***/ }),

/***/ "./src/assets/icons/mir.png":
/*!**********************************!*\
  !*** ./src/assets/icons/mir.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mir.png";

/***/ }),

/***/ "./src/assets/icons/rs_school_js.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/rs_school_js.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "rs_school_js.svg";

/***/ }),

/***/ "./src/assets/icons/visa.png":
/*!***********************************!*\
  !*** ./src/assets/icons/visa.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "visa.png";

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

var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./assets/icons/basket.svg */ "./src/assets/icons/basket.svg");
__webpack_require__(/*! ./assets/styles/index.scss */ "./src/assets/styles/index.scss");
__webpack_require__(/*! ./assets/icons/card.png */ "./src/assets/icons/card.png");
__webpack_require__(/*! ./assets/icons/visa.png */ "./src/assets/icons/visa.png");
__webpack_require__(/*! ./assets/icons/mir.png */ "./src/assets/icons/mir.png");
__webpack_require__(/*! ./assets/icons/mastercard.png */ "./src/assets/icons/mastercard.png");
__webpack_require__(/*! ./assets/icons/rs_school_js.svg */ "./src/assets/icons/rs_school_js.svg");
const product_page_1 = __webpack_require__(/*! ./assets/components/product-page */ "./src/assets/components/product-page.ts");
const basketInit_1 = __webpack_require__(/*! ./assets/components/basket/basketInit */ "./src/assets/components/basket/basketInit.ts");
const impBasicInit_1 = __webpack_require__(/*! ./assets/components/impBasicInit */ "./src/assets/components/impBasicInit.ts");
const basketLoader_1 = __webpack_require__(/*! ./assets/components/basket/basketLoader */ "./src/assets/components/basket/basketLoader.ts");
const showMain_1 = __webpack_require__(/*! ./assets/components/main/showMain */ "./src/assets/components/main/showMain.ts");
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
const logo = document.querySelector('logo');
const basicCopy = [];
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
    (0, product_page_1.default)(block, obj);
    mainProduct === null || mainProduct === void 0 ? void 0 : mainProduct.appendChild(block);
}
const arrayWithOrder = [];
function getRandomOrder() {
    const globalArray = [];
    if (arrayWithOrder.length > 0) {
        arrayWithOrder.forEach(i => {
            if (basicCopy[i]) {
                globalArray.push(basicCopy[i]);
            }
        });
        return globalArray;
    }
    for (let i = 0; i < basicCopy.length;) {
        let random = Math.floor(Math.random() * (basicCopy.length - 1 + 1)) + 0;
        if (!globalArray.includes(basicCopy[random])) {
            globalArray.push(basicCopy[random]);
            arrayWithOrder.push(random);
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
        if (Number(a.cost) < Number(b.cost))
            return 1;
        if (Number(a.cost) == Number(b.cost))
            return 0;
        if (Number(a.cost) > Number(b.cost))
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
    let arrey = [];
    if ((sortBlock === null || sortBlock === void 0 ? void 0 : sortBlock.value) == 'sort-title') {
        arrey = getRandomOrder();
    }
    ;
    if ((sortBlock === null || sortBlock === void 0 ? void 0 : sortBlock.value) == 'price-ASC') {
        arrey = getSortByPriceASC();
    }
    ;
    if ((sortBlock === null || sortBlock === void 0 ? void 0 : sortBlock.value) == 'price-DESC') {
        arrey = getSortByPriceDESC();
    }
    ;
    if ((sortBlock === null || sortBlock === void 0 ? void 0 : sortBlock.value) == 'ASC') {
        arrey = getSortByABC();
    }
    ;
    if ((sortBlock === null || sortBlock === void 0 ? void 0 : sortBlock.value) == 'DESC') {
        arrey = getSortByDESC();
    }
    ;
    sortWishRangeline(arrey).forEach(element => {
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
    setQuery('search=', searchBar === null || searchBar === void 0 ? void 0 : searchBar.value);
}
;
searchProduct();
searchBar === null || searchBar === void 0 ? void 0 : searchBar.addEventListener('input', searchProduct);
(_a = document.querySelector('.header__basket_icon')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', basketLoader_1.default);
(_b = document.querySelector('.logo')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', showMain_1.default);
function getMaxPriseOnRange() {
    const maxPrice = Number(getSortByPriceASC()[0].cost);
    return maxPrice;
}
searchProduct();
const maxPrice = getMaxPriseOnRange();
function setInputTextValue() {
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
    setQuery('range=', `${firstInputRange},${secondInputRange}`);
}
(_c = inputRange[0]) === null || _c === void 0 ? void 0 : _c.addEventListener('input', setInputTextValue);
(_d = inputRange[1]) === null || _d === void 0 ? void 0 : _d.addEventListener('input', setInputTextValue);
function setInputRangeValue() {
    inputRange[0].value = `${Number(inputCostMin === null || inputCostMin === void 0 ? void 0 : inputCostMin.value) / getMaxPriseOnRange() * 100}`;
    inputRange[1].value = `${Number(inputCostMax === null || inputCostMax === void 0 ? void 0 : inputCostMax.value) / getMaxPriseOnRange() * 100}`;
    showBlocks();
    setQuery('range=', `${Number(inputCostMax === null || inputCostMax === void 0 ? void 0 : inputCostMax.value)},${Number(inputCostMax === null || inputCostMax === void 0 ? void 0 : inputCostMax.value)}`);
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
function setPercentEncoding(parameter) {
    let arr = [];
    parameter.forEach(element => {
        if (element == ',') {
            arr.push('%2C');
        }
        else if (element == '.') {
            arr.push('%3A');
        }
        else {
            arr.push(element);
        }
        // console.log(element);
    });
    return arr.join('');
}
function setQuery(nameObj, ...parameters) {
    const percentEncoding = setPercentEncoding(parameters.join('').split(''));
    const linkWebsite = document.location.href.split('/')[3];
    const arrayWithlink = linkWebsite.split('&');
    // console.log(arrayWithlink);
    const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname +
        `${nameObj}${percentEncoding}`;
    if (window.history.state == null) {
        if (percentEncoding.toString().length == 0) {
            return;
        }
        window.history.pushState('', '', newurl);
        return;
    }
    if (String(arrayWithlink).includes(nameObj)) {
        if (percentEncoding.toString().length == 0) {
            return;
        }
        let index;
        // console.log(arrayWithlink);
        arrayWithlink.forEach((element, i) => {
            if (element.split('=')[0] + '=' == nameObj) {
                index = i;
            }
        });
        arrayWithlink.splice(index, 1);
        if (percentEncoding.toString().length != 0) {
            arrayWithlink.push(`${nameObj}${percentEncoding}`);
        }
        window.history.replaceState({}, '', `${arrayWithlink.join('&')}`);
        return;
    }
    if (!String(arrayWithlink).includes(nameObj)) {
        window.history.replaceState({}, '', `${arrayWithlink.join('&')}&${nameObj}${percentEncoding}`);
    }
}
function loadQ() {
    const linkWebsite = name(document.location.href.split('/')[3]);
    const arrayWithlink = linkWebsite.split('&');
    let obj = {};
    // console.log({arrayWithlink});
    function toObject(arrayWithlink) {
        for (let i = 0; i < arrayWithlink.length; ++i) {
            let key = arrayWithlink[i].split('=')[0];
            let value = arrayWithlink[i].split('=')[1];
            obj[key] = value;
            // console.log(value);
        }
    }
    toObject(arrayWithlink);
    for (var key in obj) {
        if (key == 'sort') {
            sortBlock.value = obj[key];
            // showBlocks()
            // console.log(obj[key]);
        }
        if (key == 'range') {
            // console.log(obj[key]);
        }
    }
    inputCostMax.value = `${getMaxPriseOnRange()}`;
}
// loadQ()
function name(linkWebsite) {
    const arr = [];
    for (let i = 0; i < linkWebsite.length; i++) {
        if (linkWebsite[i] == '%' && linkWebsite[i + 1] == '2' && linkWebsite[i + 2] == 'C') {
            arr.push(', ');
            i += 2;
        }
        else if (linkWebsite[i] == '%' && linkWebsite[i + 1] == '3' && linkWebsite[i + 2] == 'A') {
            arr.push('.');
            i += 2;
        }
        else if (linkWebsite[i] == '%' && linkWebsite[i + 1] == '5' && linkWebsite[i + 2] == 'B') {
            arr.push('[');
            i += 2;
        }
        else if (linkWebsite[i] == '%' && linkWebsite[i + 1] == '5' && linkWebsite[i + 2] == 'D') {
            arr.push(']');
            i += 2;
        }
        else {
            arr.push(linkWebsite[i]);
        }
    }
    return arr.join('');
}

})();

/******/ })()
;
//# sourceMappingURL=main.0b61d7703d87d8172cf8.js.map