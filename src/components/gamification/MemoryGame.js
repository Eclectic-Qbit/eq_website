"use client";
import { finalMediaLink, translateText } from "@/commonFrontend";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { H1, H5 } from "../text/Headers";
import { P1 } from "../text/Paragraphs";

/*
    MISSING:
    - Backend
    - Discord integration
    - Translations
*/

function Card({ pos, val, active, onClick, won, reset }) {
  const [state, setState] = useState(!won ? "hidden" : "visible");
  const changeState = useCallback(() => {
    if (state === "hidden") {
      setState("visible");
    } else {
      setState("hidden");
    }
  }, [state]);
  useEffect(() => {
    if (reset) {
      setState("hidden");
    }
  }, [reset]);
  return (
    <div
      onClick={() => {
        if (active && !won) {
          changeState();
          onClick(pos);
        }
      }}
      className={`relative w-[12rem] aspect-square border-2 border-solid border-black transition-all duration-[500ms] ease-in`}
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "center",
        transform: `${state === "visible" ? "rotateY(-180deg)" : ""}`,
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full text-center bg-white backface-hidden"
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className="relative w-32 aspect-square">
          <Image src={finalMediaLink("images/whiteLogo.png")} alt="Logo" fill />
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full text-center  ${
          won ? "bg-green" : "bg-red-500"
        } transition-all duration-150 ease-in`}
        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
      >
        <Image
          src={finalMediaLink(
            val.type === "base" ? `images/team/${val.val}.png` : val.val
          )}
          alt=""
          fill
        />
      </div>
    </div>
  );
}
export default function MemoryGame() {
  const N_CARDS = 9; // Number of (single) memory cards
  const SPEC_CARDS = useRef(["/images/squaredDante.jpg"]); // Special images
  const streak = useRef(0); // Current user streak
  const started = useRef(0); // Starting date - from first click
  const duration = useRef(0); // Duration of the game rounded to second digit
  const [cards, setCards] = useState([]); // Array containing the random cards
  const [activated, setActivated] = useState([]); // Current selected card(s)
  const [won, setWon] = useState([]); // What cards were chosen correctly by the user
  const [reset, setReset] = useState([]); // What cards were chosen wrongly by the user
  const [wait, setWait] = useState(false); // Wait before next interaction
  const [finalWin, setFinalWin] = useState(false); // True when the user will have won the game
  const generateCards = useCallback(() => {
    const arr = [];
    for (let i = 1; i <= N_CARDS; i++) {
      arr.push(i);
      arr.push(i);
    }
    const finalArr = [];
    while (arr.length > 0) {
      const rand = Math.floor(Math.random() * arr.length);
      finalArr.push({ type: "base", val: arr[rand] });
      arr.splice(rand, 1);
    }
    for (let i = 0; i < SPEC_CARDS.current.length; i++) {
      finalArr.splice(Math.floor(Math.random() * finalArr.length), 0, {
        type: "specific",
        val: SPEC_CARDS.current[i],
      });
      finalArr.splice(Math.floor(Math.random() * finalArr.length), 0, {
        type: "specific",
        val: SPEC_CARDS.current[i],
      });
    }
    return finalArr;
  }, []);
  const newGame = useCallback(() => {
    // Reset old the state of the game
    started.current = 0;
    setActivated([]);
    setWon([]);
    setReset([]);
    setWait(false);
    setFinalWin(false);
    setCards([]);
    setTimeout(() => {
      const newCards = generateCards();
      setCards(newCards);
    }, 100);
  }, [generateCards]);
  function containsValue(el) {
    for (let i = 0; i < won.length; i++) {
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
    setTimeout(() => {
      if (activated.length === 0) {
        setReset([]);
        const newArr = [...activated];
        newArr.push(pos);
        setActivated(newArr);
      } else if (activated.length === 1) {
        if (activated[0] !== pos) {
          if (cards[activated[0]].val === cards[pos].val) {
            const newArr = [...won];
            newArr.push(cards[activated[0]]);
            setWon(newArr);
            if (newArr.length === cards.length / 2) {
              setFinalWin(true);
              duration.current =
                Math.round(
                  (Date.now() - started.current) / 10 + Number.EPSILON
                ) / 100;
              streak.current += 1;
            }
          } else {
            const newArr = [activated[0], pos];
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
  useEffect(() => {
    newGame();
  }, [newGame]);
  return (
    <div className="relative bg-black">
      {finalWin && (
        <div className="absolute top-0 left-0 z-10 flex items-center justify-center flex-col w-full h-full bg-[rgba(0,0,0,0.75)] text-center font-extrabold">
          <H5>GG!</H5>
          <P1>
            you&apos;ve completed the memory in {duration.current + " "}
            seconds <br />
            You&apos;re in a +{streak.current} streak!
            <br />
            check your position into the rankings link-by score link-by games
          </P1>
          <P1>
            You got if less than 70 you&apos;ve got some points too!!! - obv
            this message will be better than this xD
          </P1>
          <button onClick={newGame}>
            <P1 className={"hover:underline"}>Wanna start a new game?</P1>
          </button>
        </div>
      )}
      <div>
        <H1>memory</H1>
        <div className="w-full h-full flex items-center justify-center">
          <div
            className={`flex flex-wrap max-w-[60rem] justify-center items-center`}
          >
            {cards.map((el, i) => {
              return (
                <Card
                  key={i}
                  val={el}
                  pos={i}
                  won={containsValue(el)}
                  reset={reset.includes(i) ? true : false}
                  active={activated.length < 2 && !wait ? true : false}
                  onClick={handleClick}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
