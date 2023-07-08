"use strict";
exports.id = 796;
exports.ids = [796];
exports.modules = {

/***/ 1796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ConsoleEffect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _text_Paragraphs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6716);
/* harmony import */ var _frontendSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2222);
/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1348);
/* harmony import */ var _commonFrontend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2315);
/* harmony import */ var _contexts_ScrollContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2920);
/* __next_internal_client_entry_do_not_use__ default auto */ 






function ConsoleEffect({ onHover, forceActive, delta, style, className, content, additionalChar, placeholderChar, spanStyling, children, delay }) {
    /* Fix the ghost cancellation - first noticed after lang translation */ const { lang, setLang } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    const [parsedChar, setParsedChar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(additionalChar ? additionalChar : "");
    const parsedPlaceholderChar = placeholderChar ? placeholderChar : "";
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(parsedPlaceholderChar);
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(forceActive);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const lastTimeout = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const parsedDelta = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(delta ? delta : 20);
    const { scroll } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ScrollContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
    const parsedContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        clearTimeout(lastTimeout.current);
        setValue(parsedPlaceholderChar);
        if (content.type === "raw") {
            return content.content;
        }
        let translation = (0,_commonFrontend__WEBPACK_IMPORTED_MODULE_5__/* .translateText */ .O9)(content.content, lang);
        translation = typeof translation === "string" ? translation : translation.props.children;
        if (typeof translation !== "string") {
            translation = translation.filter((el)=>typeof el === "string");
            translation = translation.join("\n");
        }
        return translation;
    }, [
        lang,
        parsedPlaceholderChar,
        content.content,
        content.type
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (window.innerWidth < _frontendSettings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.mobileView) {
            setParsedChar("");
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setActive(forceActive);
    }, [
        forceActive
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (window.innerWidth < _frontendSettings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.mobileView) {
            if (ref.current.getBoundingClientRect().y < window.innerHeight - window.innerHeight * 0.1) {
                setActive(forceActive !== undefined ? forceActive : true);
            }
        }
    }, [
        forceActive,
        scroll
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timeoutDelay = value.length === 0 ? delay ? delay : 0 : 0;
        setTimeout(()=>{
            if (active) {
                if (value.length < parsedContent.length + parsedChar.length + parsedPlaceholderChar.length) {
                    // Remove spacing char if exists
                    const parsedValue = parsedChar ? value.replace(parsedChar, parsedContent.charAt(value.indexOf(additionalChar) - parsedPlaceholderChar.length)) : value;
                    // Add a new char
                    const newChar = parsedContent.charAt(value.length - parsedPlaceholderChar.length);
                    const newStr = parsedValue + newChar + parsedChar;
                    lastTimeout.current && clearTimeout(lastTimeout.current);
                    lastTimeout.current = null;
                    lastTimeout.current = setTimeout(()=>{
                        setValue(newStr);
                    }, parsedDelta.current);
                } else if (parsedChar) {
                    const newStr = value.charAt(value.length - 1) === parsedChar ? value.slice(0, -1) + "|" : value.slice(0, -1) + parsedChar;
                    lastTimeout.current && clearTimeout(lastTimeout.current);
                    lastTimeout.current = null;
                    lastTimeout.current = setTimeout(()=>{
                        setValue(newStr);
                    }, 500);
                }
            } else {
                if (value.length > parsedPlaceholderChar.length) {
                    const newStr = value.substring(0, value.length - 1);
                    lastTimeout.current && clearTimeout(lastTimeout.current);
                    lastTimeout.current = null;
                    lastTimeout.current = setTimeout(()=>{
                        setValue(newStr);
                    }, parsedDelta.current / 2);
                }
            }
        }, timeoutDelay);
    }, [
        value,
        active,
        parsedContent,
        parsedChar,
        additionalChar,
        parsedPlaceholderChar.length,
        delay
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: ref,
        className: `relative ${className}`,
        onMouseEnter: ()=>onHover && (0,_commonFrontend__WEBPACK_IMPORTED_MODULE_5__/* .isDesktop */ .nI)(innerWidth) && setActive(true),
        onMouseLeave: ()=>onHover && (0,_commonFrontend__WEBPACK_IMPORTED_MODULE_5__/* .isDesktop */ .nI)(innerWidth) && !forceActive && setActive(false),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_text_Paragraphs__WEBPACK_IMPORTED_MODULE_2__.P4, {
                        className: "invisible relative w-full",
                        style: style,
                        children: parsedContent.split("\n").map((el, i)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                style: spanStyling,
                                children: [
                                    parsedPlaceholderChar + el,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                ]
                            }, i);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_text_Paragraphs__WEBPACK_IMPORTED_MODULE_2__.P4, {
                        className: "absolute top-0 left-0 w-full",
                        style: style,
                        children: value.split("\n").map((el, i)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                style: spanStyling,
                                children: [
                                    el,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                ]
                            }, i);
                        })
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;