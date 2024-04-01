"use client"
import React, { useEffect, useRef, useState } from "react";
import { FloatingNav } from "./_components/ui/floating-navbar";
import { motion, useAnimation, useInView, useMotionValueEvent, useScroll } from "framer-motion";
import { ProgressBar } from "./_components/progress-bar";
import { InitialNavbar } from "./_components/initial-navbar";
import { Intro } from "./_components/intro";
import { AboutMe } from "./_components/about-me";
import { TechStack } from "./_components/teck-stack";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Macbook } from "./_components/macbook";

export default function Index() {
  const pageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: pageRef
  });

  return (
    <motion.div className="overflow-scroll" ref={pageRef}>
      {/* <InitialNavbar scrollYProgress={scrollYProgress} />
      <ProgressBar scrollYProgress={scrollYProgress} /> */}
      <Intro/>
    </motion.div>
  );
}
