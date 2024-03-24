import { motion } from "framer-motion";

export const AboutMe = ({ controls }: { controls: any}) => {
  return(
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
      initial='hidden'
      animate={controls}
      transition={{ duration: 0.5, delay: 1 }}
    >
      About Me
    </motion.div>
  )
};
