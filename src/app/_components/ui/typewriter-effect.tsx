"use client";

import { cn } from "../../utils/cn";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const wordLength = words.length
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
          height: "fit-content",
        },
        {
          duration: 0.2,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="flex">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="flex h-auto">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `dark:text-white text-black opacity-0 hidden w-0`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              {idx != wordLength - 1 && <motion.span
                  initial={{}}
                  className={cn(
                    `dark:text-white text-black opacity-0 hidden w-0`,
                    word.className
                  )}
                >
                  <div className=" w-[1vw]"></div>
                </motion.span>}
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "flex text-base text-[60px] font-bold text-center justify-center",
        className
      )}
    >
      {renderWords()}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "flex rounded-sm w-[0.5vw] bg-blue-500",
          cursorClassName
        )}
      ></motion.div>
    </div>
  );
};

