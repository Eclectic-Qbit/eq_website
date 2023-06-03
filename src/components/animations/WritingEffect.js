"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Similar to console effect, but different usage / trigger (always working with specific timings and sets of phrases)

export default function WritingEffect({
  defaultPhrase,
  phrases,
  duration,
  timeoutBetween,
  additionalChar,
  stop,
}) {
  const data = useRef({
    interval: null,
    direction: "compose",
    word: additionalChar,
  });
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState(additionalChar);
  const task = useCallback(() => {
    const currentPhrase = defaultPhrase + phrases[index];
    if (data.current.direction === "compose") {
      if (data.current.word.length === currentPhrase.length && !stop) {
        data.current.direction = "decompose";
      }
      const newWord =
        data.current.word.replace(additionalChar, "") +
        currentPhrase.charAt(data.current.word.length - 1) +
        additionalChar;
      data.current.word = newWord;
      setWord(newWord);
    } else {
      if (data.current.word.length === 1) {
        setIndex((index + 1) % phrases.length);
        data.current.direction = "compose";
      }
      const newWord =
        data.current.word
          .replace(additionalChar, "")
          .substring(0, data.current.word.length - 2) + additionalChar;
      setWord(newWord);
      setWord(newWord);
    }
  }, [additionalChar, defaultPhrase, index, phrases, stop]);
  useEffect(() => {
    let timeout = 0;
    if (data.current.interval) {
      timeout = timeoutBetween;
      clearInterval(data.current.interval);
      setWord(additionalChar);
      data.current.word = additionalChar;
      data.current.direction = "compose";
    }
    setTimeout(() => {
      data.current.interval = setInterval(
        task,
        duration / phrases[index].length
      );
    }, timeout);
  }, [phrases, index, duration, additionalChar, timeoutBetween, task]);
  return (
    <div className="relative">
      <div className="invisible w-full h-full flex flex-col">
        {phrases[index].split("\n").map((el, i) => {
          return (
            <span key={i}>
              {el}
              {i === phrases[index].split("\n").length - 1 ? (
                additionalChar
              ) : (
                <br />
              )}
            </span>
          );
        })}
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col">
        {word.split("\n").map((el, i) => {
          return (
            <span key={i}>
              {el} {i !== word.split("\n").length - 1 ? <br /> : ""}
            </span>
          );
        })}
      </div>
    </div>
  );
}
