"use client";

import { MotionValue, motion, useScroll, useSpring } from "framer-motion";

export const ProgressBar = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  return (
    <motion.div style={{ scaleX }} className="fixed h-2 w-full bg-black origin-left" />
  )
}