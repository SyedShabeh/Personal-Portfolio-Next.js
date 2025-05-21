"use client";

import React, { useEffect, useState } from "react";

const words = ["DESIGNER", "DEVELOPER"];

const Typewriter = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 150;
  const erasingSpeed = 100;
  const delayBetweenWords = 1500;

  const getCommonPrefixLength = (a:string, b:string) => {
    let i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) {
      i++;
    }
    return i;
  };

  useEffect(() => {
    const currentWord = words[wordIndex];
    const nextWord = words[(wordIndex + 1) % words.length];
    const commonPrefixLength = getCommonPrefixLength(currentWord, nextWord);

    let timeout: ReturnType<typeof setTimeout>

    if (isDeleting) {
      timeout = setTimeout(() => {
        if (charIndex > commonPrefixLength) {
          setText(currentWord.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, erasingSpeed);
    } else {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return <span className="main-font">{text}</span>;
};

export default Typewriter;

