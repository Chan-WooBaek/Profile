import { MotionValue, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useEffect, useState } from "react";

export const InitialNavbar: any = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
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
      className="flex w-screen absolute justify-end pt-10 pr-16 z-10"
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
      <div className="relative">
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => console.log('press')}
      >
        Hello
      </motion.button>
      </div>
      
    </motion.div>
  )
}