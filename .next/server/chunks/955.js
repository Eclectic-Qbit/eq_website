"use strict";
exports.id = 955;
exports.ids = [955];
exports.modules = {

/***/ 3955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MemoryGame)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/whiteLogo.png
/* harmony default export */ const whiteLogo = ({"src":"/_next/static/media/whiteLogo.d17bd8d1.png","height":768,"width":750,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXHvv8v31tr//Pj67/b//vnoxPX68PXWUHDww9SqAAB/AMyeDNOiGtf/9fDxkX3mtt3jgJjVfMbraFbmm7bz5PzwzuXfhaaWdQD3AAAAGHRSTlMAaUVHWT5oNmlOAwpkdGhwkZWNgWlrWXP/VwIVAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAO0lEQVR4nDXLyQGAIAwAwQUSknih4NF/p350/gMzn/WSuy6A6d6lAiObpQJonPlQINJTNgE8rLn/deIFNTMBakzbrQgAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./src/components/text/Headers.js
var Headers = __webpack_require__(9411);
// EXTERNAL MODULE: ./src/components/text/Paragraphs.js
var Paragraphs = __webpack_require__(6716);
// EXTERNAL MODULE: ./src/commonFrontend.js + 8 modules
var commonFrontend = __webpack_require__(2315);
;// CONCATENATED MODULE: ./src/components/gamification/MemoryGame.js
/* __next_internal_client_entry_do_not_use__ default auto */ 






function FinalWin({ json, newGame }) {
    console.log(json);
    if (json.username) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "absolute top-0 left-0 z-10 flex gap-5 items-center justify-center flex-col w-full h-full bg-[rgba(0,0,0,0.75)] text-center font-extrabold",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Paragraphs.P1, {
                    className: "uppercase",
                    translationPath: "memory/title"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Paragraphs.P2, {
                            translationPath: "memory/time",
                            replace: [
                                {
                                    placeholder: "%TIME%",
                                    val: json.duration
                                }
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex gap-5 justify-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Paragraphs.P2, {
                                    translationPath: "memory/points/gain",
                                    replace: [
                                        {
                                            placeholder: "%GAINED_POINTS%",
                                            val: "+" + json.pointsGained
                                        }
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Paragraphs.P2, {
                                    children: "=>"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Paragraphs.P2, {
                                    translationPath: "memory/points/current",
                                    replace: [
                                        {
                                            placeholder: "%CURRENT_POINTS%",
                                            val: json.totalPoints
                                        }
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "cursor-none hover:underline text-center",
                            onClick: newGame,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Paragraphs.P2, {
                                translationPath: "memory/newGame"
                            })
                        })
                    ]
                })
            ]
        });
    } else {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "absolute top-0 left-0 z-10 flex gap-5 items-center justify-center flex-col w-full h-full bg-[rgba(0,0,0,0.75)] text-center font-extrabold",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Paragraphs.P1, {
                    className: "uppercase",
                    translationPath: "memory/title"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Paragraphs.P2, {
                            translationPath: "memory/time",
                            replace: [
                                {
                                    placeholder: "%TIME%",
                                    val: json.duration
                                }
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flax-col gap-5 justify-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Paragraphs.P2, {
                                    children: "Seems like you're not logged in!"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Paragraphs.P2, {
                                    children: "Please, log-in to collect points and earn rewards!"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "cursor-none hover:underline text-center",
                            onClick: newGame,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Paragraphs.P2, {
                                translationPath: "memory/newGame"
                            })
                        })
                    ]
                })
            ]
        });
    }
}
function Card({ pos, img, active, onClick, won, reset }) {
    const [state, setState] = (0,react_.useState)(!won ? "hidden" : "visible");
    const changeState = (0,react_.useCallback)(()=>{
        if (state === "hidden") {
            setState("visible");
        } else {
            setState("hidden");
        }
    }, [
        state
    ]);
    (0,react_.useEffect)(()=>{
        if (reset) {
            setState("hidden");
        }
    }, [
        reset
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "sm-hover:scale-[95%] transition-scale duration-150 ease-in",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            onClick: ()=>{
                if (active && !won) {
                    changeState();
                    onClick(pos);
                }
            },
            className: `relative w-[4.5rem] sm:w-[7rem] lg:w-[11.5rem] aspect-square border-[0.1rem] sm:border-[0.2rem] border-solid border-white transition-all duration-[500ms] ease-in`,
            style: {
                transformStyle: "preserve-3d",
                transformOrigin: "center",
                transform: `${state === "visible" ? "rotateY(-180deg)" : ""}`
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "absolute top-0 left-0 w-full h-full text-center bg-black flex items-center justify-center",
                    style: {
                        backfaceVisibility: "hidden"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative w-28 aspect-square",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            sizes: "100%",
                            src: whiteLogo,
                            alt: "Logo",
                            fill: true
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `absolute top-0 left-0 w-full h-full text-center  ${won ? "bg-green" : "bg-red-500"} transition-all duration-150 ease-in`,
                    style: {
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        sizes: "100%",
                        src: img,
                        alt: "",
                        fill: true
                    })
                })
            ]
        })
    });
}
function MemoryGame() {
    const CARDS_ARR = (0,react_.useRef)((0,commonFrontend/* getTeamImages */.a7)()); // Array of card immages
    const started = (0,react_.useRef)(0); // Starting date - from first click
    const duration = (0,react_.useRef)(0); // Duration of the game rounded to second digit
    const [cards, setCards] = (0,react_.useState)([]); // Array containing the random cards
    const [activated, setActivated] = (0,react_.useState)([]); // Current selected card(s)
    const [won, setWon] = (0,react_.useState)([]); // What cards were chosen correctly by the user
    const [reset, setReset] = (0,react_.useState)([]); // What cards were chosen wrongly by the user
    const [wait, setWait] = (0,react_.useState)(false); // Wait before next interaction
    const [finalWin, setFinalWin] = (0,react_.useState)(false); // True if player has won, false otherwise
    const [winContent, setWinContent] = (0,react_.useState)(null); // Content displayed when a player wins. Otherwise null
    const [gameToken, setGameToken] = (0,react_.useState)(null); // Token requested to backend, necessary to start the game
    const [userOk, setUserOk] = (0,react_.useState)(false); // True when user clicks on play. Cannot start the game when false
    const generateCards = (0,react_.useCallback)(()=>{
        const arr = [];
        for(let i = 0; i < CARDS_ARR.current.length; i++){
            arr.push({
                val: i,
                img: CARDS_ARR.current[i]
            });
            arr.push({
                val: i,
                img: CARDS_ARR.current[i]
            });
        }
        const finalArr = [];
        while(arr.length > 0){
            const rand = Math.floor(Math.random() * arr.length);
            finalArr.push(arr[rand]);
            arr.splice(rand, 1);
        }
        return finalArr;
    }, [
        CARDS_ARR
    ]);
    const newGame = (0,react_.useCallback)(async ()=>{
        // Reset old the state of the game
        started.current = 0;
        setActivated([]);
        setWon([]);
        setReset([]);
        setWait(false);
        setFinalWin(false);
        setCards([]);
        setUserOk(true);
        setGameToken(null);
        // Get token from backend
        fetch(`${"http://localhost:3500/"}games/`, {
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res)=>{
            if (res.status === 200) {
                res.json().then((json)=>setGameToken(json.token));
                // Generate new cards
                const newCards = generateCards();
                setCards(newCards);
            } else {
                console.error("Something went wrong. Cannot start the game");
            }
        });
    }, [
        generateCards
    ]);
    function containsValue(el) {
        for(let i = 0; i < won.length; i++){
            if (won[i].val === el.val) {
                return true;
            }
        }
        return false;
    }
    function handleClick(pos) {
        if (started.current === 0) {
            started.current = Date.now();
        }
        setWait(true);
        setTimeout(()=>{
            if (activated.length === 0) {
                setReset([]);
                const newArr = [
                    ...activated
                ];
                newArr.push(pos);
                setActivated(newArr);
            } else if (activated.length === 1) {
                if (activated[0] !== pos) {
                    if (cards[activated[0]].val === cards[pos].val) {
                        const newArr = [
                            ...won
                        ];
                        newArr.push(cards[activated[0]]);
                        setWon(newArr);
                        if (newArr.length === cards.length / 2) {
                            duration.current = Math.round((Date.now() - started.current) / 10 + Number.EPSILON) / 100;
                            setFinalWin(true);
                        }
                    } else {
                        const newArr = [
                            activated[0],
                            pos
                        ];
                        setReset(newArr);
                    }
                }
                setActivated([]);
            } else {
                console.error("Game Error!");
            }
            setWait(false);
        }, 500);
    }
    (0,react_.useEffect)(()=>{
        const newCards = generateCards();
        setCards(newCards);
    }, [
        generateCards
    ]);
    (0,react_.useEffect)(()=>{
        if (finalWin) {
            setUserOk(false);
            fetch(`${"http://localhost:3500/"}games/`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    gameToken: gameToken,
                    gameType: "memory",
                    gameDuration: duration.current
                })
            }).then((res)=>{
                if (res.status === 200) {
                    res.json().then((json)=>setWinContent(/*#__PURE__*/ jsx_runtime_.jsx(FinalWin, {
                            json: json,
                            newGame: newGame
                        })));
                } else {
                    console.error("Something went wrong", res);
                }
            });
        }
    }, [
        finalWin,
        gameToken,
        newGame
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative bg-black",
        children: [
            (!gameToken || !userOk) && !finalWin && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute z-10 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.8)] flex justify-center items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: newGame,
                    className: "w-max h-max py-4 px-8 border-2 border-solid border-white rounded-xl bg-black hover:underline cursor-none",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Paragraphs.P1, {
                        children: "START"
                    })
                })
            }),
            finalWin && winContent,
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full h-full flex items-center justify-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `flex gap-1 flex-wrap max-w-[19rem]  sm:max-w-[29rem] lg:max-w-[47rem] justify-center items-center`,
                        children: cards.map((el, i)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(Card, {
                                val: el.val,
                                img: el.img,
                                pos: i,
                                won: containsValue(el),
                                reset: reset.includes(i) ? true : false,
                                active: activated.length < 2 && !wait ? true : false,
                                onClick: gameToken ? handleClick : ()=>{
                                    console.log("Not Game Token Found");
                                }
                            }, i);
                        })
                    })
                })
            })
        ]
    });
}


/***/ })

};
;