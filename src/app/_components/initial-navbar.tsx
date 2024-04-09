import { MotionValue, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useEffect, useState } from "react";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
      className="flex w-screen fixed justify-end pt-10 pr-16 z-10"
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
      <div className="flex gap-10">
        <motion.div
          className="flex rounded-full"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <a
            href={'https://linkedin.com/in/chan-woo-baek'}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
            />
          </a>
        </motion.div>
        <motion.div
          className="flex rounded-full"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <a
            href={'https://github.com/chan-woobaek'}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size={'2x'}
            />
          </a>
        </motion.div>
      
      </div>
      
    </motion.div>
  )
}