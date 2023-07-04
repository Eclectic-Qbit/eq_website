"use client";
import Image from "next/image";
import ImgWhiteLogo from "../../../public/images/whiteLogo.png";
import { useCallback, useEffect, useRef, useState } from "react";
import { H1, H5 } from "../text/Headers";
import { P1, P2 } from "../text/Paragraphs";
import { getTeamImages } from "@/commonFrontend";

function Card({ pos, img, active, onClick, won, reset }) {
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
    <div className="sm-hover:scale-[95%] transition-scale duration-150 ease-in">
      <div
        onClick={() => {
          if (active && !won) {
            changeState();
            onClick(pos);
          }
        }}
        className={`relative w-[4.5rem] sm:w-[7rem] lg:w-[11.5rem] aspect-square border-[0.1rem] sm:border-[0.2rem] border-solid border-white transition-all duration-[500ms] ease-in`}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center",
          transform: `${state === "visible" ? "rotateY(-180deg)" : ""}`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full text-center bg-black flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative w-28 aspect-square">
            <Image sizes="100%" src={ImgWhiteLogo} alt="Logo" fill />
          </div>
        </div>
        <div
          className={`absolute top-0 left-0 w-full h-full text-center  ${
            won ? "bg-green" : "bg-red-500"
          } transition-all duration-150 ease-in`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <Image sizes="100%" src={img} alt="" fill />
        </div>
      </div>
    </div>
  );
}
export default function MemoryGame() {
  const CARDS_ARR = useRef(getTeamImages()); // Array of card immages
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
    for (let i = 0; i < CARDS_ARR.current.length; i++) {
      arr.push({ val: i, img: CARDS_ARR.current[i] });
      arr.push({ val: i, img: CARDS_ARR.current[i] });
    }
    const finalArr = [];
    while (arr.length > 0) {
      const rand = Math.floor(Math.random() * arr.length);
      finalArr.push(arr[rand]);
      arr.splice(rand, 1);
    }
    return finalArr;
  }, [CARDS_ARR]);
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
        <div className="absolute top-0 left-0 z-10 flex gap-5 items-center justify-center flex-col w-full h-full bg-[rgba(0,0,0,0.75)] text-center font-extrabold">
          <P1 className="uppercase" translationPath="memory/title" />
          <div className="flex flex-col gap-2">
            <P2
              translationPath="memory/time"
              replace={[{ placeholder: "%TIME%", val: duration.current }]}
            />
            <P2
              translationPath="memory/streak"
              replace={[{ placeholder: "%STREAK%", val: streak.current }]}
            />
            <div className="flex gap-5 justify-center">
              <P2
                translationPath="memory/points/gain"
                replace={[{ placeholder: "%GAINED_POINTS%", val: "+1" }]}
              />
              <P2
                translationPath="memory/points/current"
                replace={[{ placeholder: "%CURRENT_POINTS%", val: "n" }]}
              />
            </div>
            <button
              className="cursor-none hover:underline text-center"
              onClick={newGame}
            >
              <P2 translationPath="memory/newGame" />
            </button>
          </div>
        </div>
      )}
      <div>
        <div className="w-full h-full flex items-center justify-center">
          <div
            className={`flex gap-1 flex-wrap max-w-[19rem]  sm:max-w-[29rem] lg:max-w-[47rem] justify-center items-center`}
          >
            {cards.map((el, i) => {
              return (
                <Card
                  key={i}
                  val={el.val}
                  img={el.img}
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
