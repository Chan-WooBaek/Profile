import { motion } from "framer-motion";
import { TypewriterEffect } from "./ui/typewriter-effect";

export const Intro = ({ controls }: { controls?: any}) => {
  return(
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
      initial='hidden'
      animate={controls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="flex flex-col justify-items-center justify-center"
    >
      <TypewriterEffect words={first_sentence} />
      <TypewriterEffect words={second_sentence} delay={3000} lastLine={true}/>
    </motion.div>
  )
};

const first_sentence = [
  {
    text: "Hi!",
  },
  {
    text: "My",
  },
  {
    text: "name",
  },
  {
    text: "is",
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
    text: "I",
  },
  {
    text: "am",
  },
  {
    text: "a",
  },
  {
    text: "full",
  },
  {
    text: "stack",
  },
  {
    text: "developer.",
  },
];
