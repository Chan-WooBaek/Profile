import { MotionValue, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useEffect, useState } from "react";

export const InitialNavbar = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() == 1) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  
  return(
    <motion.div
        className="flex flex-col pt-12 pr-32 absolute top-0 right-0"
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <div className="flex border border-black self-end rounded-lg py-1 px-4">
          <a href={''} target="__blank">
            <p className=" font-sans">Contact</p>
          </a>
        </div>
      </motion.div>
  )
}