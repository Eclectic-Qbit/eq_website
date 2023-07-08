"use strict";
exports.id = 488;
exports.ids = [488];
exports.modules = {

/***/ 1488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  US: () => (/* binding */ DanteCard),
  Ni: () => (/* binding */ IndexCard),
  ZP: () => (/* binding */ SquadCard)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(6088);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/text/Paragraphs.js
var Paragraphs = __webpack_require__(6716);
// EXTERNAL MODULE: ./src/components/logos/BorderLogo.js
var BorderLogo = __webpack_require__(1848);
// EXTERNAL MODULE: ./src/components/logos/FullLogo.js
var FullLogo = __webpack_require__(4257);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./src/commonFrontend.js + 8 modules
var commonFrontend = __webpack_require__(2315);
;// CONCATENATED MODULE: ./public/images/collabs/malpegadosWhite.png
/* harmony default export */ const malpegadosWhite = ({"src":"/_next/static/media/malpegadosWhite.8b6631a2.png","height":72,"width":356,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEXw8PTv7+zw8PDy8vL28Fvy8vc03y8uAAAABnRSTlNkP1iSUzCZ0xBiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgYWVkZGJlYmRgYWBmYGBgZgIAAXMAIpq8+fYAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/components/global/Cards.js
/* __next_internal_client_entry_do_not_use__ default,IndexCard,DanteCard auto */ 








// Cards for squad section
function SquadCard({ img, name, langs, social }) {
    const [rotate, setRotate] = (0,react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        onMouseEnter: ()=>setRotate(true),
        onMouseLeave: ()=>setRotate(false),
        onClick: ()=>{
            if (!(0,commonFrontend/* isDesktop */.nI)(window.innerWidth)) {
                setRotate(!rotate);
            }
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `relative w-[14rem] h-[17rem] sm:w-[20rem] sm:h-[24rem] border-2 border-solid border-white rounded-xl transition-all duration-[500ms] ease-in`,
            style: {
                transformStyle: "preserve-3d",
                transformOrigin: "center",
                transform: `${rotate ? "rotateY(-180deg)" : ""}`
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "absolute top-0 left-0 w-full h-full text-center bg-white rounded-xl overflow-hidden",
                    style: {
                        backfaceVisibility: "hidden"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "relative w-full aspect-square rounded-xl",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                sizes: "100%",
                                priority: true,
                                src: img,
                                alt: name,
                                fill: true
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-black font-bold w-full h-[3rem] sm:h-[4rem] flex items-center justify-center border-[0.25rem] border-solid border-black rounded-b-xl",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Paragraphs.P1, {
                                className: "uppercase",
                                children: name
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `absolute flex items-center justify-center p-4 top-0 left-0 w-full h-full text-center bg-[rgba(255,255,255,0.075)] transition-all duration-150 ease-in rounded-xl overflow-hidden`,
                    style: {
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Paragraphs.P1SP, {
                            className: "uppercase font-bold",
                            translationPath: `squad/${name.toLowerCase()}`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute bottom-2 left-2 flex gap-2",
                            children: social && social.map((el, i)=>{
                                if (el.social === "instagram") {
                                    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "cursor-none",
                                        target: "_blank",
                                        href: el.link,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "relative w-[1.5rem] sm:w-[2rem] aspect-square",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(BorderLogo/* InstagramLogo */.C, {
                                                fill: "white",
                                                width: "100%",
                                                height: "100%"
                                            })
                                        })
                                    }, i);
                                } else if (el.social === "linkedin") {
                                    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "cursor-none",
                                        target: "_blank",
                                        href: el.link,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "relative w-[1.5rem] sm:w-[2rem] aspect-square",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(FullLogo/* LinkedinLogo */.So, {
                                                hoverColor: "#007EBB",
                                                fill: "white",
                                                width: "100%",
                                                height: "100%"
                                            })
                                        }, i)
                                    }, i);
                                } else if (el.social === "twitter") {
                                    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "cursor-none",
                                        target: "_blank",
                                        href: el.link,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "relative w-[1.5rem] sm:w-[2rem] aspect-square",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(BorderLogo/* TwitterLogo */.u, {
                                                fill: "white",
                                                width: "100%",
                                                height: "100%"
                                            })
                                        }, i)
                                    }, i);
                                } else if (el.social === "telegram") {
                                    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "cursor-none",
                                        target: "_blank",
                                        href: el.link,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "relative w-[1.5rem] sm:w-[2rem] aspect-square",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(FullLogo/* TelegramLogo */.ht, {
                                                hoverColor: "#007EBB",
                                                fill: "white",
                                                width: "100%",
                                                height: "100%"
                                            })
                                        }, i)
                                    }, i);
                                }
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute max flex justify-center items-center bottom-0 right-2 flex",
                            children: langs && langs.map((el, i)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative w-[2rem] h-[2rem]",
                                    children: el
                                }, i);
                            })
                        })
                    ]
                })
            ]
        })
    });
}
// Cards in the index page (What we do, How we do it)
function IndexCard({ front, retro, form, color, pass, frontBg, retroBg, className, order }) {
    const [rotate, setRotate] = (0,react_.useState)(false);
    const passFront = pass && pass.front;
    const passRetro = pass && pass.retro;
    const [parsedFront, setParsedFront] = (0,react_.useState)(front);
    const [parsedRetro, setParsedRetro] = (0,react_.useState)(retro);
    (0,react_.useEffect)(()=>{
        if (passRetro) {
            const retroObj = {
                forceActive: passRetro && passRetro.includes("forceActiveWhenRotate") && rotate
            };
            setParsedRetro(/*#__PURE__*/ (0,react_.cloneElement)(retro, retroObj));
        }
    }, [
        passRetro,
        retro,
        rotate
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        onMouseEnter: ()=>setRotate(true),
        onMouseLeave: ()=>setRotate(false),
        onClick: ()=>{
            if (!(0,commonFrontend/* isDesktop */.nI)(window.innerWidth)) {
                setRotate(!rotate);
            }
        },
        className: `${className ? className : ""}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `relative z-10 ${form === "square" ? "w-[15rem] min-h-[12.5rem] sm:w-[20rem] sm:min-h-[12.5rem]" : `w-[17rem] sm:w-[37.5rem] lg:w-[42.5rem] sm:min-h-[15rem] ${rotate ? "min-h-[21.5rem]" : "min-h-[12.5rem]"} sm:min-h-[18rem]`} bg-[rgba(0,0,0,1)] h-max border-2 border-solid border-white rounded-xl p-4 transition-all duration-[500ms] ease-in`,
            style: {
                transformStyle: "preserve-3d",
                transformOrigin: "center",
                transform: `${rotate ? "rotateY(-180deg)" : ""}`
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "absolute top-0 left-0 w-full h-full flex items-center justify-center text-center px-2 sm:px-4 rounded-xl ",
                    style: {
                        backfaceVisibility: "hidden"
                    },
                    children: parsedFront
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "absolute top-0 left-0 w-full h-full flex items-center justify-center text-center px-2 sm:px-4 rounded-xl",
                    style: {
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        background: retroBg
                    },
                    children: parsedRetro
                })
            ]
        })
    });
}
function DanteCard({ children }) {
    const [rotate, setRotate] = (0,react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        onClick: ()=>{
            setRotate(!rotate);
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative w-[14rem] xl:w-[20rem] aspect-[3/4] transition-all duration-[500ms] ease-in bg-[rgba(0,0,0,1)] border-2 border-solid border-white rounded-xl",
            style: {
                transformStyle: "preserve-3d",
                transformOrigin: "center",
                transform: `${rotate ? "rotateY(-180deg)" : ""}`
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "absolute top-0 left-0 w-full h-full",
                    style: {
                        backfaceVisibility: "hidden"
                    },
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "absolute top-0 left-0 w-full h-full flex justify-center items-center",
                    style: {
                        backfaceVisibility: "hidden",
                        transform: "rotateY(-180deg)"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative w-full aspect-[5/1] m-2 sm:m-8 hover:m-2 transition-all duration-150 ease-in",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "absolute w-full h-full cursor-none",
                            href: "https://malpegados.jimdosite.com/",
                            target: "_blank",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                sizes: "100%",
                                src: malpegadosWhite,
                                alt: "Malpegados",
                                fill: true
                            })
                        })
                    })
                })
            ]
        })
    });
}


/***/ })

};
;