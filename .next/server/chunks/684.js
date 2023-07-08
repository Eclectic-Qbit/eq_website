exports.id = 684;
exports.ids = [684];
exports.modules = {

/***/ 7862:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5793));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3676));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8013));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3820));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8576));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2595))

/***/ }),

/***/ 7478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LoadingAnimation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_MouseContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6986);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function LoadingAnimation({ className, style, delay, fadeDuration, elements, coeffs, onFade, stopFade }) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const mouseEntered = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const parsedCoeffs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(coeffs ? coeffs : elements.map(()=>{
        return 1;
    }));
    const currentTimeouts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    const viewTimeout = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [pp, setPp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        x: 0,
        y: 0
    });
    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [hide, setHide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        temp: false,
        perma: false
    });
    const [offset, setOffset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(elements.map(()=>{
        return {
            x: -10000,
            y: 10000
        };
    }));
    const settedOffsets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const { position } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_MouseContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    const movedInViewport = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    // Fade
    const fade = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!stopFade) {
            setHide({
                temp: true,
                perma: false
            });
            setTimeout(()=>{
                setHide({
                    temp: true,
                    perma: true
                });
                onFade && onFade();
            }, [
                fadeDuration
            ]);
        }
    }, [
        fadeDuration,
        onFade,
        stopFade
    ]);
    // Cancel Existing Timeouts
    const cancelTimeouts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        viewTimeout.current && clearTimeout(viewTimeout.current);
        for(let i = 0; i < currentTimeouts.current.length; i++){
            clearTimeout(currentTimeouts.current[i]);
        }
    }, []);
    // Start to move items istantly
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!hide.perma && !hide.temp) {
            viewTimeout.current = setTimeout(()=>{
                setView(true);
            }, 100);
        }
    }, [
        hide.perma,
        hide.temp
    ]);
    // Elements position
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!hide.perma && !hide.temp && !settedOffsets.current) {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const px = width > ref.current.offsetWidth ? width * -1 : ref.current.offsetWidth * -1;
            const interval = height / elements.length;
            let newArr = [];
            newArr = elements.map((el, i)=>{
                return {
                    x: px,
                    y: Math.floor(interval * i - height / 2 + interval / 2)
                };
            });
            setOffset(newArr);
            settedOffsets.current = true;
        }
    }, [
        elements,
        hide.perma,
        hide.temp
    ]);
    // Start moving when view is updated
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!hide.perma && !hide.temp && view) {
            cancelTimeouts();
            const newArr = [
                ...offset
            ];
            if (newArr.length > movedInViewport.current) {
                const timeout = setTimeout(()=>{
                    if (offset[movedInViewport.current].x !== 0 || offset[movedInViewport.current].y !== 0) {
                        const updatedOffset = [
                            ...offset
                        ];
                        updatedOffset[movedInViewport.current] = {
                            x: 0,
                            y: 0
                        };
                        setOffset(updatedOffset);
                    }
                    movedInViewport.current++;
                }, delay / newArr.length);
                currentTimeouts.current.push(timeout);
            }
        }
    }, [
        view,
        delay,
        offset,
        hide.perma,
        hide.temp,
        cancelTimeouts
    ]);
    // Mouse position
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!hide.perma && !hide.temp) {
            if (mouseEntered.current) {
                setPp({
                    x: (position.clientX - window.innerWidth / 2) * 0.1,
                    y: (position.clientY - window.innerHeight / 2) * 0.1
                });
            }
        }
    }, [
        hide.perma,
        hide.temp,
        position
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !hide.perma && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            onClick: fade,
            className: `${hide.temp ? "opacity-0" : "opacity-1"} ${className}`,
            style: {
                transition: `opacity ${fadeDuration}ms ease-in`
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col gap-0 w-full",
                style: style ? style : {},
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: ref,
                    onMouseEnter: ()=>mouseEntered.current = true,
                    children: elements.map((el, i)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                transform: `translate3d(${pp.x * parsedCoeffs.current[i]}px, ${pp.y * parsedCoeffs.current[i]}px, 0)`
                            },
                            children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(el, {
                                style: {
                                    transform: `translate3d(${offset[i].x}px, ${offset[i].y}px,0px)`
                                },
                                className: `${el.props.className ? el.props.className : ""} relative text-8xl w-full uppercase py-2 font-extrabold`
                            })
                        }, i);
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 3676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomepageCursor: () => (/* binding */ HomepageCursor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_MouseContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6986);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _text_Paragraphs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6716);
/* harmony import */ var _frontendSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2222);
/* harmony import */ var _contexts_ResizeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1108);
/* __next_internal_client_entry_do_not_use__ HomepageCursor auto */ 





function HomepageCursor() {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [side, setSide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [resized, setResized] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { position } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_MouseContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    const { winSize } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_ResizeContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setSide(ref.current.offsetWidth);
        if (!resized && window.innerWidth > _frontendSettings__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.mobileView) {
            setResized(true);
        }
    }, [
        resized,
        winSize
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `fixed ${!resized && "invisible"} sm:visible ${position.clientY !== 0 || position.clientX !== 0 ? "opacity-1" : "opacity-0"} z-50 transition-none pointer-events-none transition-all duration-150 ease-in`,
        ref: ref,
        style: {
            top: position.clientY - side / 2,
            left: position.clientX - side / 2
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_text_Paragraphs__WEBPACK_IMPORTED_MODULE_3__.P4, {
            children: "\uD83D\uDC7E"
        })
    });
}


/***/ }),

/***/ 8576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CookiesPrompt)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _text_Headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9411);
/* harmony import */ var _text_Paragraphs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6716);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6088);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1211);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_5__);
/* __next_internal_client_entry_do_not_use__ default auto */ 





function CookiesPrompt() {
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    function acceptCookie(val) {
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.setCookie)("cookies", JSON.stringify({
            accepted: val,
            date: Date.now()
        }), {
            maxAge: 60 * 60 * 24 * 365
        });
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const cookie = (0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.getCookie)("cookies");
        if (cookie !== undefined) {
            setShow(false);
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: show && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "fixed z-10 bottom-0 left-0 w-full h-max flex justify-center items-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "sm:max-w-[90%] bg-white h-max text-black sm:rounded-t-2xl py-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                        className: "cursor-none",
                        href: "/privacy",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " flex-col sm:flex-row flex gap-2 text-center p-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_text_Headers__WEBPACK_IMPORTED_MODULE_2__.H9, {
                                    className: "flex items-center justify-center",
                                    children: "\uD83C\uDF6A"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_text_Paragraphs__WEBPACK_IMPORTED_MODULE_3__.P3, {
                                    className: "lowercase",
                                    translationPath: "privacy/cookies"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex justify-center items-center gap-[2.5%] p-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>{
                                    acceptCookie(true);
                                    setShow(false);
                                },
                                className: "border-2 border-solid border-black rounded-full py-1 px-3 hover:bg-[rgba(0,0,0,0.1)] transition-all duration-150 ease-in",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_text_Paragraphs__WEBPACK_IMPORTED_MODULE_3__.P2, {
                                    translationPath: "general/accept"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>{
                                    acceptCookie(false);
                                    setShow(false);
                                },
                                className: "border-2 border-solid border-black rounded-full py-1 px-3 hover:bg-[rgba(0,0,0,0.1)] transition-all duration-150 ease-in",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_text_Paragraphs__WEBPACK_IMPORTED_MODULE_3__.P2, {
                                    translationPath: "general/refuse"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 7526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CustomLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_CurrentPageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6941);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6088);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function CustomLink({ className, children, href, blank, noUnderline, defaultUnderline }) {
    const { page, setPage } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_CurrentPageContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: href ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `relative group`,
            onClick: ()=>setPage(href),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    className: `${className ? className : ""} cursor-none ${defaultUnderline && "hover:underline"}`,
                    href: href,
                    target: blank ? "_blank" : "_self",
                    children: children
                }),
                !noUnderline && !defaultUnderline && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute bottom-0 left-0 w-0 h-[0.125rem] bg-black sm:bg-white group-hover:w-full transition-all duration-150 ease-in"
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative group",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${defaultUnderline && "hover:underline"}`,
                    children: children
                }),
                !noUnderline && !defaultUnderline && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute bottom-0 left-0 w-0 h-[0.125rem] bg-black sm:bg-white group-hover:w-full transition-all duration-150 ease-in"
                })
            ]
        })
    });
}


/***/ }),

/***/ 3820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commonFrontend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2315);
/* harmony import */ var _logos_BorderLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1848);
/* harmony import */ var _logos_FullLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4257);
/* harmony import */ var _text_Paragraphs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6716);
/* harmony import */ var _CustomLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7526);
/* harmony import */ var _LogoLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(889);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1348);
/* __next_internal_client_entry_do_not_use__ default auto */ 








function Footer() {
    const { lang } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z);
    const MAIL = "squad@eclecticqbit.art";
    const MAIL_SUBJ = "gm";
    const MAIL_BODY = lang === "es" ? "re\xfane tu valent\xeda y presiona ese bot\xf3n de enviar! preg\xfantanos lo que desees, estamos aqu\xed para co-crear!" : "summon your courage and hit that send button! ask us anything, we are here to co-create!";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "border-t-2 border-solid border-white py-10",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-wrap w-full h-full gap-3 justify-around items-center text-center",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-center items-center gap-2 scale-[0.8]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LogoLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            href: "https://zealy.io/c/eclecticqbit/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logos_FullLogo__WEBPACK_IMPORTED_MODULE_3__/* .ZealyLogo */ .S6, {
                                width: "100%",
                                height: "100%"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LogoLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            href: "https://discord.gg/8J3SXwUn7C",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logos_FullLogo__WEBPACK_IMPORTED_MODULE_3__/* .DiscordLogo */ .$4, {
                                fill: "black",
                                width: "100%",
                                height: "100%"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LogoLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            href: "https://twitter.com/EclecticQbit",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logos_BorderLogo__WEBPACK_IMPORTED_MODULE_2__/* .TwitterLogo */ .u, {
                                fill: "black",
                                width: "100%",
                                height: "100%"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LogoLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            href: "https://www.reddit.com/user/Eclecticqbit/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logos_FullLogo__WEBPACK_IMPORTED_MODULE_3__/* .RedditLogo */ .at, {
                                fill: "black",
                                width: "100%",
                                height: "100%"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LogoLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            href: "https://www.instagram.com/Eclecticqbit.art/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logos_BorderLogo__WEBPACK_IMPORTED_MODULE_2__/* .InstagramLogo */ .C, {
                                fill: "black",
                                width: "100%",
                                height: "100%"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LogoLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            href: "https://t.me/eclecticqbit",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logos_FullLogo__WEBPACK_IMPORTED_MODULE_3__/* .TelegramLogo */ .ht, {
                                fill: "black",
                                width: "100%",
                                height: "100%"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col justify-end items-center gap-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-min lowercase",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                href: "/privacy",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_text_Paragraphs__WEBPACK_IMPORTED_MODULE_4__.P3, {
                                    children: "Privacy"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-max lowercase",
                            onClick: ()=>(0,_commonFrontend__WEBPACK_IMPORTED_MODULE_1__/* .downloadFile */ .Sv)("/mediaKit.pdf", "url"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_text_Paragraphs__WEBPACK_IMPORTED_MODULE_4__.P3, {
                                    children: "Media Kit"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-max lowercase",
                            onClick: ()=>(0,_commonFrontend__WEBPACK_IMPORTED_MODULE_1__/* .downloadFile */ .Sv)("/paintAndEarn.pdf", "url"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_text_Paragraphs__WEBPACK_IMPORTED_MODULE_4__.P3, {
                                    children: "Paint&Earn"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center grid gap-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: ()=>{
                                window.location.href = `mailto:${MAIL}?subject=${encodeURIComponent(MAIL_SUBJ)}&body=${encodeURIComponent(MAIL_BODY)}`;
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_text_Paragraphs__WEBPACK_IMPORTED_MODULE_4__.P3, {
                                    children: MAIL
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_text_Paragraphs__WEBPACK_IMPORTED_MODULE_4__.P3, {
                            children: "IT01751460088"
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 8013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoadingScreen)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _animations_LoadingAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7478);
/* harmony import */ var _text_Headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9411);
/* harmony import */ var _contexts_CurrentPageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6941);
/* harmony import */ var _commonFrontend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2315);
/* harmony import */ var _text_Paragraphs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6716);
/* __next_internal_client_entry_do_not_use__ default auto */ 






function LoadingScreen() {
    // On page change
    const { page } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_CurrentPageContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    // Other vars
    const ANIM_DURATION = 900;
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [desktop, setDesktop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [alreadyAnimated, setAlreadyAnimated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const bool = (0,_commonFrontend__WEBPACK_IMPORTED_MODULE_5__/* .isDesktop */ .nI)(window.innerWidth);
        if (bool !== desktop) {
            setDesktop(bool);
        }
    }, [
        desktop
    ]);
    function onFade() {
        sessionStorage.setItem("loaded", true);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const cookie = JSON.parse(sessionStorage.getItem("loaded"));
        const bool = !cookie;
        setShow(bool);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, [
        handleResize
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!alreadyAnimated) {
            setTimeout(()=>{
                setAlreadyAnimated(true);
            }, ANIM_DURATION);
        }
    }, [
        alreadyAnimated
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setAlreadyAnimated(false);
    }, [
        page
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative max-w-screen max-h-screen w-full h-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "text-center w-full h-full",
            children: show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animations_LoadingAnimation__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                elements: desktop ? [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_text_Headers__WEBPACK_IMPORTED_MODULE_3__.H4, {
                        children: "Interdependence"
                    }, 0),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_text_Headers__WEBPACK_IMPORTED_MODULE_3__.H3, {
                        children: "Is the new"
                    }, 1),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_text_Headers__WEBPACK_IMPORTED_MODULE_3__.H4, {
                        children: "Independence"
                    }, 2)
                ] : [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_text_Paragraphs__WEBPACK_IMPORTED_MODULE_6__.P2, {
                        children: "Interdependence"
                    }, 0),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_text_Paragraphs__WEBPACK_IMPORTED_MODULE_6__.P1, {
                        children: "Is the new"
                    }, 1),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_text_Paragraphs__WEBPACK_IMPORTED_MODULE_6__.P2, {
                        children: "Independence"
                    }, 2)
                ],
                coeffs: [
                    1,
                    1.5,
                    2.25
                ],
                delay: 3000,
                className: "z-30 fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center text-white",
                onFade: onFade,
                fadeDuration: 750
            }) : !alreadyAnimated && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `z-30 fixed top-0 left-0 w-full h-full bg-black animate-fade-out`
            })
        })
    });
}


/***/ }),

/***/ 889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LogoLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6088);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


function LogoLink({ children, href }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        target: "_blank",
        className: "bg-white rounded-full w-8 p-2 scale-100 hover:scale-125 transition cursor-none",
        children: children
    });
}


/***/ }),

/***/ 5793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Menu)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./src/components/global/CustomLink.js
var CustomLink = __webpack_require__(7526);
// EXTERNAL MODULE: ./src/components/text/Paragraphs.js
var Paragraphs = __webpack_require__(6716);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/fullIcon_white.png
/* harmony default export */ const fullIcon_white = ({"src":"/_next/static/media/fullIcon_white.63dba017.png","height":768,"width":2353,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEX////////////vvc3rtNT////35vf///vqjpP////ZpO/TbcE8AAAAC3RSTlMCFBpnOC0PRDIoMO4CVX8AAAAJcEhZcwAALiMAAC4jAXilP3YAAAAhSURBVHicBcGHAQAwCMMwJ6yW/w9GIrfVFkTUlA35/AUcBPoAUpUmduAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
// EXTERNAL MODULE: ./src/contexts/ScrollContext.js
var ScrollContext = __webpack_require__(2920);
// EXTERNAL MODULE: ./src/contexts/LanguageContext.js
var LanguageContext = __webpack_require__(1348);
// EXTERNAL MODULE: ./src/frontendSettings.js
var frontendSettings = __webpack_require__(2222);
// EXTERNAL MODULE: ./src/components/animations/LoadingAnimation.js
var LoadingAnimation = __webpack_require__(7478);
// EXTERNAL MODULE: ./src/components/text/Headers.js
var Headers = __webpack_require__(9411);
// EXTERNAL MODULE: ./src/translations.js
var translations = __webpack_require__(9406);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(6088);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/contexts/CurrentPageContext.js
var CurrentPageContext = __webpack_require__(6941);
// EXTERNAL MODULE: ./src/components/logos/FullLogo.js
var FullLogo = __webpack_require__(4257);
// EXTERNAL MODULE: ./src/contexts/AuthContext.js
var AuthContext = __webpack_require__(8379);
// EXTERNAL MODULE: ./src/commonFrontend.js + 8 modules
var commonFrontend = __webpack_require__(2315);
;// CONCATENATED MODULE: ./src/components/global/Menu.js
/* __next_internal_client_entry_do_not_use__ default auto */ 
















function LoginHandle() {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: commonFrontend/* discordLink */.T4,
        className: "flex justify-center gap-2 bg-purple p-2 cursor-none border-solid border-white border-0 md:hover:border-2 transition-all duration-150 ease-in relative hover:translate-x-[2px]",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "h-[1rem] xl:h-[1.25rem] md:h-[1.125rem]",
            children: /*#__PURE__*/ jsx_runtime_.jsx(FullLogo/* DiscordLogo */.$4, {
                height: "100%",
                width: "100%",
                fill: "white"
            })
        })
    });
}
function UserSection({ userInfo }) {
    const img = userInfo.avatar.type === "discord" ? `https://cdn.discordapp.com/avatars/${userInfo.id}/${userInfo.avatar.value}.png` : (0,commonFrontend/* getImageFromIndex */.No)(userInfo.avatar.value);
    return /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
        className: "cursor-none",
        href: "/troopa",
        noUnderline: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "relative h-[2rem] xl:h-[2.5rem] md:h-[2.25rem] aspect-square border-solid border-white border-0 md:hover:border-2 transition-all duration-150 ease-in relative overflow-hidden",
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                sizes: "100%",
                className: "",
                src: img,
                alt: "PFP",
                fill: true,
                quality: 25
            })
        })
    });
}
function Menu() {
    const [show, setShow] = (0,react_.useState)(true);
    const [openLang, setOpenLang] = (0,react_.useState)(false);
    const [errorMsg, setErrorMsg] = (0,react_.useState)(null);
    const [dotStyle, setDotStyle] = (0,react_.useState)({
        top: 0,
        right: 0
    });
    const { scroll } = (0,react_.useContext)(ScrollContext/* default */.Z);
    const { lang, setLang } = (0,react_.useContext)(LanguageContext/* default */.Z);
    const { page } = (0,react_.useContext)(CurrentPageContext/* default */.Z);
    const lastScroll = (0,react_.useRef)(0);
    const languages = (0,react_.useRef)({
        en: "\uD83C\uDF54",
        es: "\uD83C\uDF2E",
        it: "\uD83C\uDF5D",
        fr: "\uD83E\uDD50"
    });
    const ref = (0,react_.useRef)(null);
    const { userInfo } = (0,react_.useContext)(AuthContext/* default */.Z);
    /*
  useEffect(() => {
    const newStyle = {};
    const dir = Math.floor(Math.random() * 2);
    dir === 0 ? (newStyle.left = 0) : (newStyle.right = 0);
    const height = Math.floor(
      Math.random() * (ref.current.clientHeight - dotRef.current.clientHeight)
    );
    newStyle.top = height;
    setDotStyle(newStyle);
  }, [page]);
  */ (0,react_.useEffect)(()=>{
        if (scroll > lastScroll.current) {
            setShow(false);
            setOpenLang(false);
        } else {
            setShow(true);
        }
        lastScroll.current = scroll;
    }, [
        scroll
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            errorMsg && errorMsg,
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: ref,
                className: `fixed h-[10vh] bg-black z-20 top-0 left-0 flex items-center gap-2 w-full h-max text-3xl ${!show && "-translate-y-full"} transition ease-out duration-300 border-b-2 border-solid border-white cursor-none`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex w-full px-[2%]",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex items-center justify-start w-full",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                                noUnderline: true,
                                href: "/story",
                                className: "relative cursor-none flex items-center h-[5vh] sm:h-[7.5vh] aspect-[35/12] transition-all duration-150 ease-in",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    sizes: "100%",
                                    src: fullIcon_white,
                                    alt: "Logo",
                                    fill: true,
                                    quality: 25
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex items-center justify-center w-full",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "uppercase md:flex md:gap-4 text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Paragraphs.P3, {
                                            translationPath: "menu/home"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                                        href: "/paint&earn",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Paragraphs.P3, {
                                            translationPath: "menu/paintEarn"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                                        href: "/squad",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Paragraphs.P3, {
                                            translationPath: "menu/squad"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                                        href: "/games",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Paragraphs.P3, {
                                            children: "\uD83D\uDD79️"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-end gap-2 items-center w-full",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "grid gap-1 md:flex md:gap-4 text-right",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `relative flex flex-row sm:flex-col flex-wrap`,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Paragraphs.P3, {
                                            className: `flex flex-wrap justify-center items-center transition-all duration-150 gap-1`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "sm:hover:scale-[1.15] text-center",
                                                    onClick: ()=>setOpenLang(!openLang),
                                                    children: languages.current[lang]
                                                }),
                                                openLang && Object.keys(languages.current).map((e, i)=>{
                                                    if (e !== lang) {
                                                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "sm:hover:scale-[1.15] transition-all duration-150",
                                                            onClick: ()=>{
                                                                if (frontendSettings/* default */.Z.languages.ready.includes(e)) {
                                                                    setLang(e);
                                                                    localStorage.setItem("lang", e);
                                                                } else {
                                                                    if (window.innerWidth > frontendSettings/* default */.Z.mobileView && openLang) {
                                                                        setErrorMsg(/*#__PURE__*/ jsx_runtime_.jsx(LoadingAnimation/* default */.Z, {
                                                                            elements: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(Headers.H4, {
                                                                                    children: translations/* default */.Z.notFound[e]
                                                                                }, 0)
                                                                            ],
                                                                            coeffs: [
                                                                                1
                                                                            ],
                                                                            delay: 1000,
                                                                            className: "fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-30 text-center",
                                                                            fadeDuration: 750,
                                                                            onFade: ()=>setErrorMsg(null)
                                                                        }));
                                                                    }
                                                                }
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Paragraphs.P3, {
                                                                children: languages.current[e]
                                                            })
                                                        }, i);
                                                    }
                                                })
                                            ]
                                        })
                                    })
                                }),
                                userInfo ? /*#__PURE__*/ jsx_runtime_.jsx(UserSection, {
                                    userInfo: userInfo
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(LoginHandle, {})
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 1848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ InstagramLogo),
/* harmony export */   u: () => (/* binding */ TwitterLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function InstagramLogo({ className, width, height, fill }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: className ? className : "",
        xmlns: "http://www.w3.org/2000/svg",
        width: width ? width : 800,
        height: height ? height : 800,
        fill: fill ? fill : "black",
        version: "1.1",
        viewBox: "0 0 20 20",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
            fillRule: "evenodd",
            stroke: "none",
            strokeWidth: "1",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                transform: "translate(-340 -7439)",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    transform: "translate(56 160)",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M289.87 7279.123c-1.628.073-3.04.471-4.179 1.606-1.143 1.14-1.536 2.557-1.61 4.168-.045 1.005-.313 8.601.463 10.593a5.04 5.04 0 002.91 2.903c.634.246 1.356.412 2.416.461 8.86.401 12.145.183 13.53-3.364.246-.631.415-1.353.462-2.41.405-8.883-.066-10.809-1.61-12.351-1.225-1.222-2.666-2.054-12.382-1.606m.081 17.944c-.97-.043-1.496-.205-1.848-.341a3.255 3.255 0 01-1.888-1.883c-.591-1.514-.395-8.703-.342-9.866.051-1.14.282-2.18 1.086-2.985.995-.992 2.28-1.479 11.034-1.084 1.142.052 2.186.282 2.992 1.084.995.993 1.489 2.288 1.087 11.008-.044.968-.206 1.493-.342 1.843-.901 2.308-2.973 2.628-11.779 2.224m8.139-13.377c0 .657.534 1.19 1.194 1.19.66 0 1.195-.533 1.195-1.19a1.194 1.194 0 00-2.39 0m-9.226 5.298a5.103 5.103 0 005.11 5.097 5.103 5.103 0 005.109-5.097 5.102 5.102 0 00-5.11-5.096 5.102 5.102 0 00-5.11 5.096m1.794 0a3.313 3.313 0 013.316-3.308 3.313 3.313 0 013.317 3.308 3.313 3.313 0 01-3.317 3.31 3.313 3.313 0 01-3.316-3.31"
                    })
                })
            })
        })
    });
}
function TwitterLogo({ className, width, height, fill }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: className ? className : "",
        xmlns: "http://www.w3.org/2000/svg",
        width: width ? width : 800,
        height: height ? height : 800,
        fill: fill ? fill : "black",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 31.812 26",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M20.877 2c1.642 0 3.505.652 4.549 1.738a11.639 11.639 0 003.624-1.352 5.615 5.615 0 01-2.51 3.083 11.668 11.668 0 003.28-.879 11.493 11.493 0 01-2.849 2.887c.01.238.016.478.016.718C26.987 15.562 21.445 24 10.939 24c-3.224 0-6.432-.867-8.957-2.449.446.054.901.08 1.361.08 2.676 0 5.139-.891 7.096-2.389-2.502-.043-4.612-1.656-5.336-3.869.347.064.707.1 1.075.1.518 0 1.025-.067 1.503-.196C5.068 14.768 3.1 12.514 3.1 9.813V9.74c.771.418 1.65.67 2.587.7-1.533-1.003-2.54-2.706-2.54-4.641 0-1.022.281-1.981.772-2.801 2.816 3.369 7.026 5.59 11.774 5.824a5.407 5.407 0 01-.15-1.269c0-3.08 2.178-5.553 5.334-5.553m8.943 2.59h.005M20.877 0c-3.844 0-6.817 2.753-7.263 6.552-3.189-.647-6.09-2.348-8.174-4.841a1.982 1.982 0 00-3.224.255A7.472 7.472 0 001.625 8.4a2.006 2.006 0 00-.512 1.34v.073c0 1.959.769 3.776 2.047 5.139-.073.342-.057.703.055 1.046a7.54 7.54 0 002.284 3.398 9.884 9.884 0 01-3.277.169 1.988 1.988 0 00-2.114 1.321c-.31.884.032 1.867.824 2.363C3.764 25.023 7.318 26 10.939 26c6.839 0 11.086-3.157 13.444-5.805 2.86-3.211 4.524-7.477 4.589-11.74a13.45 13.45 0 002.438-2.663c.251-.334.4-.751.4-1.202 0-.681-.337-1.282-.852-1.644a2.01 2.01 0 00-.655-2.113 1.982 1.982 0 00-2.247-.179 9.529 9.529 0 01-2.125.908C24.555.592 22.688 0 20.877 0z"
        })
    });
}


/***/ }),

/***/ 4257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $4: () => (/* binding */ DiscordLogo),
/* harmony export */   $G: () => (/* binding */ MediumLogo),
/* harmony export */   S6: () => (/* binding */ ZealyLogo),
/* harmony export */   So: () => (/* binding */ LinkedinLogo),
/* harmony export */   at: () => (/* binding */ RedditLogo),
/* harmony export */   ht: () => (/* binding */ TelegramLogo)
/* harmony export */ });
/* unused harmony exports TikTokLogo, FacebookLogo */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function DiscordLogo({ className, width, height, fill }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: className ? className : "",
        xmlns: "http://www.w3.org/2000/svg",
        width: width ? width : 800,
        height: height ? height : 800,
        viewBox: "2 2 20 20",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fill: fill,
            d: "M18.59 5.89c-1.23-.57-2.54-.99-3.92-1.23-.17.3-.37.71-.5 1.04-1.46-.22-2.91-.22-4.34 0-.14-.33-.34-.74-.51-1.04-1.38.24-2.69.66-3.92 1.23-2.48 3.74-3.15 7.39-2.82 10.98 1.65 1.23 3.24 1.97 4.81 2.46.39-.53.73-1.1 1.03-1.69-.57-.21-1.11-.48-1.62-.79.14-.1.27-.21.4-.31 3.13 1.46 6.52 1.46 9.61 0 .13.11.26.21.4.31-.51.31-1.06.57-1.62.79.3.59.64 1.16 1.03 1.69 1.57-.49 3.17-1.23 4.81-2.46.39-4.17-.67-7.78-2.82-10.98h-.02zm-9.75 8.78c-.94 0-1.71-.87-1.71-1.94 0-1.07.75-1.94 1.71-1.94s1.72.87 1.71 1.94c0 1.06-.75 1.94-1.71 1.94zm6.31 0c-.94 0-1.71-.87-1.71-1.94 0-1.07.75-1.94 1.71-1.94s1.72.87 1.71 1.94c0 1.06-.75 1.94-1.71 1.94z"
        })
    });
}
function RedditLogo({ className, width, height, fill }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: className ? className : "",
        xmlns: "http://www.w3.org/2000/svg",
        width: width ? width : 800,
        height: height ? height : 800,
        fill: fill ? fill : "black",
        viewBox: "0 0 19 19",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
            fillRule: "evenodd",
            stroke: "none",
            strokeWidth: "1",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                transform: "translate(-100 -7561)",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    transform: "translate(56 160)",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M57.029 7412.247a1.407 1.407 0 01-1.401-1.397c0-.773.639-1.419 1.401-1.419.761 0 1.378.646 1.378 1.419 0 .772-.616 1.397-1.378 1.397m.194 2.583c-.673.681-1.728 1.013-3.224 1.013-1.497 0-2.551-.332-3.223-1.013a.383.383 0 010-.537.37.37 0 01.528 0c.525.533 1.406.792 2.695.792 1.288 0 2.17-.26 2.696-.792a.37.37 0 01.528 0 .383.383 0 010 .537m-7.631-3.98c0-.772.638-1.419 1.399-1.419s1.378.647 1.378 1.419-.617 1.397-1.378 1.397a1.406 1.406 0 01-1.399-1.397M64 7409.313c0-1.266-1.016-2.297-2.265-2.297-.576 0-1.119.218-1.535.609-1.495-.987-3.497-1.625-5.714-1.712l1.223-3.786 3.212.767c.001 1.042.837 1.889 1.865 1.889s1.865-.849 1.865-1.892c0-1.042-.837-1.891-1.865-1.891-.77 0-1.431.475-1.716 1.151l-3.858-.922-1.51 4.676c-2.301.043-4.386.678-5.937 1.688a2.239 2.239 0 00-1.501-.577c-1.248 0-2.264 1.03-2.264 2.297 0 .805.414 1.542 1.076 1.956-.603 3.612 3.594 6.731 8.882 6.731 5.266 0 9.449-3.091 8.891-6.686a2.287 2.287 0 001.151-2"
                    })
                })
            })
        })
    });
}
function TelegramLogo({ className, width, height, fill, hoverColor }) {
    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        onMouseEnter: ()=>setHover(true),
        onMouseLeave: ()=>setHover(false),
        xmlns: "http://www.w3.org/2000/svg",
        fill: hoverColor && hover ? hoverColor : fill ? fill : "black",
        width: width ? width : 800,
        height: height ? height : 800,
        viewBox: "0 0 32 24",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z"
        })
    });
}
function TikTokLogo({ className, width, height, fill }) {
    return /*#__PURE__*/ _jsx("svg", {
        className: className ? className : "",
        xmlns: "http://www.w3.org/2000/svg",
        width: width ? width : 800,
        height: height ? height : 800,
        fill: fill ? fill : "black",
        version: "1.1",
        viewBox: "0 0 32 32",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M16.656 1.029c1.637-.025 3.262-.012 4.886-.025a7.762 7.762 0 002.189 5.213l-.002-.002A8.77 8.77 0 0029 8.45l.028.002v5.036a13.327 13.327 0 01-5.331-1.247l.082.034a15.385 15.385 0 01-2.077-1.196l.052.034c-.012 3.649.012 7.298-.025 10.934a9.513 9.513 0 01-1.707 4.954l.02-.031c-1.652 2.366-4.328 3.919-7.371 4.011h-.014a9.071 9.071 0 01-5.139-1.31l.04.023C5.05 28.185 3.32 25.603 3 22.6l-.004-.041a23.163 23.163 0 01-.012-1.862c.49-4.779 4.494-8.476 9.361-8.476.547 0 1.083.047 1.604.136l-.056-.008c.025 1.849-.05 3.699-.05 5.548a4.29 4.29 0 00-5.465 2.619l-.009.03c-.133.427-.21.918-.21 1.426 0 .206.013.41.037.61l-.002-.024a4.26 4.26 0 004.382 3.586h-.009a4.198 4.198 0 003.451-1.994l.01-.018c.267-.372.45-.822.511-1.311l.001-.014c.125-2.237.075-4.461.087-6.698.012-5.036-.012-10.06.025-15.083z"
        })
    });
}
function FacebookLogo({ className, width, height, fill }) {
    return /*#__PURE__*/ _jsx("svg", {
        className: className ? className : "",
        xmlns: "http://www.w3.org/2000/svg",
        width: width ? width : 800,
        height: height ? height : 800,
        fill: fill ? fill : "black",
        version: "1.1",
        viewBox: "-5 0 20 20",
        children: /*#__PURE__*/ _jsx("g", {
            fill: "none",
            fillRule: "evenodd",
            stroke: "none",
            strokeWidth: "1",
            children: /*#__PURE__*/ _jsx("g", {
                fill: "#000",
                transform: "translate(-385 -7399)",
                children: /*#__PURE__*/ _jsx("g", {
                    transform: "translate(56 160)",
                    children: /*#__PURE__*/ _jsx("path", {
                        d: "M335.821 7259v-9h2.733l.446-4h-3.179v-1.948c0-1.03.027-2.052 1.466-2.052h1.458v-2.86c0-.043-1.253-.14-2.52-.14-2.645 0-4.302 1.657-4.302 4.7v2.3H329v4h2.923v9h3.898z"
                    })
                })
            })
        })
    });
}
function MediumLogo({ width, height, fill }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        fill: fill ? fill : "black",
        width: width ? width : 800,
        height: height ? height : 800,
        viewBox: "0 0 256 256",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M136,128c0,37.49512-28.71,68-64,68S8,165.49514,8,128,36.71,60,72,60,136,90.5049,136,128ZM240,64a8.00039,8.00039,0,0,0-8,8V184a8,8,0,0,0,16,0V72A8.00039,8.00039,0,0,0,240,64Zm-56,0c-5.68262,0-16.39941,2.76074-24.32373,21.251C154.72607,96.8008,152,111.98342,152,128s2.72607,31.19922,7.67627,42.749C167.60059,189.23928,178.31738,192,184,192s16.39941-2.76074,24.32373-21.251C213.27393,159.19924,216,144.01662,216,128s-2.72607-31.19922-7.67627-42.749C200.39941,66.76076,189.68262,64,184,64Z"
        })
    });
}
function LinkedinLogo({ width, height, fill, hoverColor }) {
    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        onMouseEnter: ()=>setHover(true),
        onMouseLeave: ()=>setHover(false),
        xmlns: "http://www.w3.org/2000/svg",
        width: width ? width : 800,
        height: height ? height : 800,
        viewBox: "0 -2 44 44",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                transform: "translate(-702.000000, -265.000000)",
                fill: hoverColor && hover ? hoverColor : fill ? fill : "#007EBB",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
                })
            })
        })
    });
}
function ZealyLogo({ width, height, fill }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: width ? width : 84,
        height: height ? height : 84,
        viewBox: "0 0 84 84",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.37693 9.24204L2.21093 9.07439L2.19659 12.2718L2.19499 12.9383C2.19404 13.4575 2.19278 14.3538 2.19152 15.8639C2.189 18.8839 2.18648 24.3606 2.18648 34.1883V35.4507L5.93775 39.234C4.45243 40.1765 2.96008 41.1081 1.46088 42.0289L0.0117395 42.919L0 63.9962L17.303 81.4581L18.4389 81.533C39.6703 82.9317 61.5054 81.3798 81.9636 74.2615L84 73.553V48.2255L79.5741 43.7618C80.3282 43.011 81.0806 42.2538 81.8275 41.492L82.7005 40.6015V39.3491C82.7005 38.4847 82.7031 33.9577 82.7056 29.6449L82.7114 19.974L64.8894 2L63.1155 2.59932C44.6964 8.82238 24.941 10.278 5.37693 9.24204ZM64.0755 5.48918L79.6887 21.2356C79.6887 21.2356 79.6786 37.6178 79.6786 39.3491C78.9365 40.1061 78.1881 40.8592 77.4372 41.6067C76.7181 42.3225 75.9966 43.0331 75.2759 43.737L80.9781 49.4879V71.3804C61.0119 78.3276 39.6051 79.8732 18.6359 78.4917L3.02263 62.7351L3.03271 44.6319C4.74009 43.5832 6.43886 42.5206 8.12874 41.4436C9.00082 40.8879 9.87053 40.3283 10.7378 39.7649L5.2084 34.1883C5.2084 23.7569 5.21124 18.2286 5.21391 15.3372C5.21627 12.7806 5.21849 12.2855 5.21849 12.2855C6.22478 12.3388 7.23201 12.3856 8.23997 12.4256C27.065 13.1728 46.1422 11.5481 64.0755 5.48918Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.21844 12.2855C25.0188 13.334 45.1819 11.8725 64.0754 5.48917L79.6887 21.2356C79.6887 21.2356 79.6786 37.6178 79.6786 39.3491C78.2256 40.8311 76.749 42.2981 75.2759 43.737L80.978 49.4879V71.3804C61.0119 78.3275 39.605 79.8732 18.6358 78.4917L3.02258 62.7351L3.03267 44.6319C5.62116 43.042 8.18985 41.4201 10.7378 39.7649L5.20836 34.1883C5.20836 14.5337 5.21844 12.2855 5.21844 12.2855Z",
                fill: "#0D0D0D"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M73.6348 29.2004V37.9777C63.8941 47.3443 54.1534 55.5121 44.4229 62.7961C54.5967 62.1155 64.7603 60.4799 74.9442 57.5135C74.9442 60.7542 74.9442 63.9848 74.9442 67.2255C60.9023 71.3297 46.8706 72.8841 32.8388 72.8841C30.1191 72.8841 27.3994 72.8231 24.6797 72.7113V63.9339C34.4203 57.6861 44.161 50.7882 53.8916 42.8947C46.8908 43.7988 39.8899 44.1849 32.8891 44.1849C30.8745 44.1849 28.87 44.1544 26.8554 44.0934C26.8554 40.8527 26.8554 37.6221 26.8554 34.3814C28.8498 34.4424 30.8343 34.4728 32.8288 34.4728C46.4274 34.4728 60.026 33.0201 73.6247 29.1902L73.6348 29.2004Z",
                fill: "white"
            })
        ]
    });
}


/***/ }),

/***/ 2595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FadePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_CurrentPageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6941);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function FadePage({ children }) {
    const { page } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_CurrentPageContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    const [style, setStyle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setStyle({
            opacity: 1
        });
        setTimeout(()=>{
            setStyle({
                opacity: 0
            });
            setTimeout(()=>{
                setStyle({
                    display: "none"
                });
            }, 350);
        }, 0);
    }, [
        page
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed z-30 top-0 left-0 w-full h-full bg-black opacity-1 transition-all duration-300 ease-in",
                style: style
            })
        ]
    });
}


/***/ }),

/***/ 8213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_global_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7091);
/* harmony import */ var _components_cursors_Cursors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1539);
/* harmony import */ var _components_global_LoadingScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9193);
/* harmony import */ var _components_global_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2862);
/* harmony import */ var _components_global_CookiesPrompt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8440);
/* harmony import */ var _components_specific_homeLayout_FadePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1990);







function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full h-full cursor-none overflow-hidden",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_specific_homeLayout_FadePage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cursors_Cursors__WEBPACK_IMPORTED_MODULE_2__/* .HomepageCursor */ .c, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_global_LoadingScreen__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_global_Menu__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: children
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_global_CookiesPrompt__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_global_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {})
            ]
        })
    });
}


/***/ }),

/***/ 1539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Enryp\Desktop\Tabata\EQ\website\src\components\cursors\Cursors.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["HomepageCursor"];


/***/ }),

/***/ 8440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Enryp\Desktop\Tabata\EQ\website\src\components\global\CookiesPrompt.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 2862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Enryp\Desktop\Tabata\EQ\website\src\components\global\Footer.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 9193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Enryp\Desktop\Tabata\EQ\website\src\components\global\LoadingScreen.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 7091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Enryp\Desktop\Tabata\EQ\website\src\components\global\Menu.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 1990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Enryp\Desktop\Tabata\EQ\website\src\components\specific\homeLayout\FadePage.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;