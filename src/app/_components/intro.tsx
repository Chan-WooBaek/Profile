import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { useRef } from "react";
import { Macbook } from "./macbook";
export const Intro = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.5, 1.2]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.5, 0.6]
  );
  const translate = useTransform(scrollYProgress, [1, 0], [1000, 0]);
  const rotate = useTransform(scrollYProgress, [0.3, 0.12, 0.1], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0.3, 0], [100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0], [0, 1]);
  return(
    // <div
    //   ref={ref}
    //   className="min-h-[200vh] flex flex-col items-center py-0 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100  scale-[0.35] sm:scale-50"
    // >
    // <motion.div
    //   style={{
    //     scaleX: scaleX,
    //     scaleY: scaleY,
    //     rotateX: rotate,
    //     translateY: translate,
    //     transformStyle: "preserve-3d",
    //     transformOrigin: "top",
    //   }}
    //   className="h-96 w-[32rem] inset-0 bg-[#010101] rounded-2xl p-2"
    // >
    //   <div className="absolute inset-0 bg-[#272729] rounded-lg" />
    // </motion.div>
    
    // </div>
    <Macbook
      textComponent={<div 
        className="object-cover object-left-top absolute rounded-lg inset-0 h-full w-full z-10"
      >
        <TypewriterEffect words={first_sentence}/>
        <TypewriterEffect words={second_sentence} delay={3000} lastLine={true} textSize="50px"/>
      </div>}/>
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
