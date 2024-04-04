import { motion, useAnimate, useInView, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { useEffect, useRef } from "react";
import { Macbook } from "./macbook";
export const Intro = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
}
  async function delayFunction(delay: number) {
    await timeout(delay);
    console.log('f')
    animate(
      "span",
      {
        display: "inline-block",
        opacity: 1,
        width: "fit-content",
        height: "fit-content",
      }
    );
  }
  useEffect(() => {
    if (isInView) {
      delayFunction(3000);
    }
  }, [isInView]);
  const textSize = 'text-[30px]'
  return(
    <Macbook
      textComponent={
        <div 
          className="flex flex-col object-cover object-left-top absolute rounded-lg inset-0 h-full w-full z-10 pl-[1%] pt-[2.5%] gap-[4%]"
        >
          <div
            className="flex gap-[2%]"
          >
            <div className={`flex ${textSize} text-[#6d7673]`}>
              1
            </div>
            <TypewriterEffect words={first_sentence} textSize={textSize}/>
          </div>
          <div
            className="flex gap-[2%]"
          >
            <motion.div className={`flex ${textSize} text-[#6d7673]`} ref={scope}>
              <motion.span className="hidden">2</motion.span>
            </motion.div>
            <TypewriterEffect words={second_sentence} delay={3000} lastLine={true} textSize={textSize}/>
          </div>          
        </div>
      }
    />
  )
};

const first_sentence = [
  {
    text: "Hello,",
  },
  {
    text: "I'm",
  },
  {
    text: "Chan",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "Woo",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "Baek.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const second_sentence = [
  {
    text: "I'm",
  },
  {
    text: "a",
  },
  {
    text: "full-stack",
  },
  {
    text: "developer.",
  },
];
