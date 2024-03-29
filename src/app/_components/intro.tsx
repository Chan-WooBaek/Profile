import { motion } from "framer-motion";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Boxes } from "./ui/background-boxes";

export const Intro = ({ controls }: { controls?: any}) => {
  return(
    <>
    <Boxes/>
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
      initial='hidden'
      animate={controls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="flex flex-col justify-items-center justify-center z-10"
    >
      <TypewriterEffect words={first_sentence} />
      <TypewriterEffect words={second_sentence} delay={3000} lastLine={true}/>
    </motion.div>
    </>
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
