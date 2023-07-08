"use strict";
exports.id = 231;
exports.ids = [231];
exports.modules = {

/***/ 1419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ MouseMoveGradient)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_MouseContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6986);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ MouseMoveGradient auto */ 


function MouseMoveGradient({ children, from, to, className }) {
    const { position, setPosition } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_MouseContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    const [angle, setAngle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    let currentTimeout = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const x = position.clientX - window.innerWidth / 2;
        const y = position.clientY - window.innerHeight / 2;
        const rawAngle = Math.atan(y / x) * (180 / Math.PI);
        let finalAngle = Math.abs(rawAngle);
        if (x < 0 && y > 0) {
            finalAngle = 180 + rawAngle;
        } else if (x < 0 && y < 0) {
            finalAngle = 180 + rawAngle;
        } else if (x > 0 && y < 0) {
            finalAngle = 360 + rawAngle;
        }
        if (currentTimeout.current) {
            clearTimeout(currentTimeout.current);
            currentTimeout.current = null;
        }
        setAngle(finalAngle);
    }, [
        position
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${className} font-mono text-transparent bg-clip-text transition-all duration-150 ease-linear`,
        style: {
            backgroundImage: `linear-gradient(${angle}deg, ${from}, ${to})`
        },
        children: children
    });
}


/***/ })

};
;