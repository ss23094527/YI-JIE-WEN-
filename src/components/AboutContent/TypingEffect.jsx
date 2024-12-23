import React, { useState, useEffect } from "react";

export default function TypingEffect({title}) {
  const words = title;
  const [wordIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  // typeWriter
  useEffect(() => {
    if (wordIndex === words.length) {
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + 1);
    }, 200);

    return () => clearTimeout(timeout);
  }, [wordIndex]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      <h1>
        {`${words.substring(0, wordIndex)}${blink ? "|" : " "}`}
      </h1>
    </>
  );
}