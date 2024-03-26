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

export default function Index() {
  const pageRef = useRef(null);
  const introductionRef = useRef(null);
  const aboutMeRef = useRef(null);
  const techStackRef = useRef(null);
  const projectsRef = useRef(null);
  let currentRef = useRef(null);
  let nextRef: any = useRef(null);
  const screens = ['Introduction', 'About me', 'Tech Stack', 'Projects'];
  const { scrollYProgress } = useScroll({
    container: pageRef
  });


  function getRef(title: string): any {
    switch(title) {
      case 'Introduction':
        return { current: introductionRef, next: aboutMeRef }
      case 'About me':
        return { current: aboutMeRef, next: techStackRef }
      case 'Tech Stack':
        return { current: techStackRef, next: projectsRef }
      case 'Projects':
        return { current: projectsRef, next: introductionRef }
      default:
        return { current: introductionRef, next: aboutMeRef }
    }
  }

  function Section({ title, key }: { title: string, key: number }) {
    const refs = getRef(title);
    const isInView = useInView(refs.current, { once: true });
    const controls = useAnimation();

    useEffect(() => {
      if(isInView) {
        controls.start('visible');
        currentRef = refs.current;
        nextRef = refs.next;
      }
    }, [isInView])

    let pageContents = (<>Should not appear</>)

    if (title === 'Introduction') {
      pageContents = (<Intro controls={controls}/>)
    } else if (title === 'About me') {
      pageContents = (<AboutMe controls={controls}/>)
    } else if (title === 'Tech Stack') {
      pageContents = (<TechStack controls={controls}/>)
    } else if (title === 'Projects') {
      pageContents = (<>
        Projects
      </>)
    } else {
      pageContents = (<>
        Should not appear
      </>)
    }
    return (
      <motion.div className={`flex relative snap-center justify-center items-center h-screen ${key !== screens.length - 1 && 'mb-1'} py-1`} ref={refs.current} key={key}>
        {pageContents}
      </motion.div>
    )
  }

  const [arrowVisible, setArrowVisible] = useState(true);
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if(current > 0.99) setArrowVisible(false);
  })
  
  return (
    <motion.div className="h-screen overflow-scroll snap-y snap-mandatory justify-center" ref={pageRef}>
      <InitialNavbar scrollYProgress={scrollYProgress} />
      <ProgressBar scrollYProgress={scrollYProgress} />
      {screens.map((title, key) => Section({ title, key }))}
      {arrowVisible && <div className="fixed bottom-5 left-1/2 translate-x-[30%]">
        <button onClick={() => nextRef.current.scrollIntoView({ behavior: 'smooth' })}>
          <FontAwesomeIcon icon={faArrowDown} size={"3x"} opacity={0.1}/>
        </button>
      </div>}
    </motion.div>
  );
}
