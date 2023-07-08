exports.id = 88;
exports.ids = [88];
exports.modules = {

/***/ 3259:
/***/ (() => {



/***/ }),

/***/ 6905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LastTestingCanvas)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commonFrontend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2315);
/* harmony import */ var _contexts_MouseContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6986);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



/*
  This canvas is used for generating a texture for the background and the associated pixels array
*/ function LastTestingCanvas({ mouseListenerRef }) {
    const { position, setPosition, samplingDelta } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_MouseContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null); // Canvas ref
    const items = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)([]); // Stars rendered
    const timeouts = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)([]); // Stars timeouts
    const lastResizeTimeout = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null); // Need for sampling of the resize
    const context = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null); // Canvas 2d context
    const lastWidth = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(0); // Need for checking if the resize event made the screen larger or smaller
    const FRACTION = 15; // Block of pixels where to instance a drawLayer
    const CIRCLE = 30; // Radius of the circle around the mouse
    const YSPACING = 7; // Distance between two stars in vertical
    const DENSITY = 1 / 8500; // Density of stars per row - modified by a costant in the for loops
    const colors = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)([
        "#CCFF00",
        "#FF6600",
        "#00BFFF",
        "#00FF00",
        "#FF007F",
        "#9500E9"
    ]); // Random stars colors to choose
    // Draw a circle given some specs
    const drawCircle = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((x, y, r, fill, blur, w, color, shadow)=>{
        context.current.beginPath();
        context.current.filter = `blur(${blur}px)`;
        shadow && shadow.blur && (context.current.shadowBlur = shadow.blur);
        shadow && shadow.color && (context.current.shadowColor = shadow.color);
        context.current.lineWidth = w;
        fill === 1 ? context.current.fillStyle = color : context.current.strokeStyle = color;
        context.current.arc(x, y, r, 0, 2 * Math.PI);
        fill === 1 ? context.current.fill() : context.current.stroke();
        context.current.filter = "none";
    }, []);
    const createTimeout = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((i, w, creationDate)=>{
        const newTimeout = setTimeout(()=>{
            drawCircle(items.current[i][0], items.current[i][1], w + 1, 1, 1, 0, "black");
            drawCircle(items.current[i][0], items.current[i][1], w, 1, 1, 0, "white");
            timeouts.current = timeouts.current.filter((el)=>{
                if (el.params[0] !== i || el.params[1 !== w]) {
                    return el;
                }
            });
        }, 5 * samplingDelta + Date.now() - creationDate);
        return newTimeout;
    }, [
        drawCircle,
        samplingDelta
    ]);
    // Posticipate the draw-to-white stars timeout
    const posticipateTimeouts = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        const newTimeouts = [];
        timeouts.current.map((el, i)=>{
            clearTimeout(el.timeout);
            newTimeouts.push({
                timeout: createTimeout(el.params[0], el.params[1], el.params[2], el.params[3]),
                params: [
                    el.params[0],
                    el.params[1],
                    el.params[2],
                    el.params[3]
                ]
            });
        });
        timeouts.current = newTimeouts;
    }, [
        createTimeout
    ]);
    const generateLayer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((fromY, toY, fromX, toX, ySpacing, density, w)=>{
        for(let i = fromY + ySpacing; i < toY - ySpacing; i += ySpacing){
            // If the number of pixels is lower than zero, draw pixels outside the canvas. This won't change the final density of pixels
            let nStars = density * (toX - fromX);
            let coeff = 1;
            while(nStars < 1){
                nStars *= 10;
                coeff *= 10;
            }
            nStars = Math.floor(nStars);
            for(let j = 0; j < nStars; j++){
                const randomX = Math.floor(Math.random() * ((toX - fromX) * coeff - ySpacing + 1) + fromX);
                if (randomX < canvasRef.current.width) {
                    drawCircle(randomX, i, w, 1, 1, 0, "white");
                    items.current.push([
                        randomX,
                        i,
                        w,
                        0
                    ]);
                }
            }
        }
    }, [
        drawCircle
    ]);
    const callGenerateLayer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((callback)=>{
        const currentW = canvasRef.current.parentNode.clientWidth;
        // Loop for height
        for(let w = 1; w <= 3; w++){
            let counterHeight = YSPACING;
            // Loop for the delta width
            for(let i = 1; i * FRACTION <= canvasRef.current.height; i++){
                setTimeout(()=>{
                    generateLayer(counterHeight, counterHeight + FRACTION, lastWidth.current, currentW, YSPACING, DENSITY * (10 - w * w), w);
                    counterHeight += FRACTION;
                    if (w === 3 && (i + 1) * FRACTION >= canvasRef.current.height) {
                        callback();
                        const canvasData = context.current.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
                        // Saving the data
                        const parsedObj = {
                            height: canvasData.height,
                            width: canvasData.width,
                            colorSpace: canvasData.colorSpace,
                            data: canvasData.data
                        };
                        const json = JSON.stringify(parsedObj);
                        const blob = new Blob([
                            json
                        ], {
                            type: "application/json"
                        });
                        (0,_commonFrontend__WEBPACK_IMPORTED_MODULE_1__/* .downloadFile */ .Sv)(blob);
                        (0,_commonFrontend__WEBPACK_IMPORTED_MODULE_1__/* .downloadFile */ .Sv)(new Blob([
                            JSON.stringify(items.current)
                        ], {
                            type: "application/json"
                        }));
                    }
                }, 1 * i * w);
            }
        }
    }, [
        DENSITY,
        generateLayer
    ]);
    const handleResize = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        const currentW = canvasRef.current.parentNode.clientWidth;
        // Proceed with the resizing only when it's the last resize event fired
        if (lastResizeTimeout.current) {
            clearTimeout(lastResizeTimeout.current);
        }
        // If the screen was resized more than before
        if (lastWidth.current < currentW) {
            lastResizeTimeout.current = setTimeout(()=>{
                const w = canvasRef.current.width;
                const h = canvasRef.current.height;
                // Save and set again the current stars
                const canvasData = context.current.getImageData(0, 0, w, h);
                canvasRef.current.width = currentW;
                context.current.putImageData(canvasData, 0, 0);
                callGenerateLayer(()=>{
                    lastWidth.current = currentW;
                });
            }, 500);
        }
    }, [
        callGenerateLayer
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        // Set canvas dimensions to default
        canvasRef.current.width = canvasRef.current.parentNode.clientWidth;
        canvasRef.current.height = canvasRef.current.parentNode.clientHeight;
        context.current = canvasRef.current.getContext("2d", {
            willReadFrequently: false
        }); // Do not set willReadFrequently to true. It will make everything slower
        const startingDate = Date.now();
        callGenerateLayer(()=>{
            lastWidth.current = canvasRef.current.width;
        });
    }, [
        DENSITY,
        callGenerateLayer,
        drawCircle,
        generateLayer
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const date = Date.now();
        posticipateTimeouts();
        const x = position.clientX;
        const y = position.clientY;
        // Check which star is in range
        for(let i = 0; i < items.current.length; i++){
            // If it wasn't updated in the recent past
            if (date - items.current[i][3] > 2 * samplingDelta) {
                // If it is in range
                if (items.current[i][0] + CIRCLE > x && items.current[i][0] - CIRCLE < x) {
                    if (items.current[i][1] + CIRCLE > y && items.current[i][1] - CIRCLE < y) {
                        // Draw back and paint again on it
                        const w = items.current[i][2];
                        drawCircle(items.current[i][0], items.current[i][1], w + 1, 1, 1, 0, "black");
                        const number = Math.floor(Math.random() * (5 - 0 + 1) + 0);
                        const color = colors.current[number];
                        drawCircle(items.current[i][0], items.current[i][1], w, 1, 1, 0, color);
                        timeouts.current.push({
                            timeout: createTimeout(i, w, 0),
                            params: [
                                i,
                                w,
                                date
                            ]
                        });
                    }
                }
            }
        }
    }, [
        createTimeout,
        drawCircle,
        position,
        posticipateTimeouts,
        samplingDelta
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        // Resize handler. Draws the stars only in the new part of the screen
        window.addEventListener("resize", handleResize);
    }, [
        handleResize
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "realtive w-full h-full",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute top-0 left-0 w-full max-w-screen h-full overflow-hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
                    ref: canvasRef,
                    className: "rounded-xl"
                })
            })
        })
    });
}


/***/ }),

/***/ 4589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-black",
        children: children
    });
}


/***/ })

};
;