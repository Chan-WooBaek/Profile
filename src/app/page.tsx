"use client"
import React, { useEffect, useRef } from "react";
import { FloatingNav } from "./_components/ui/floating-navbar";
import { motion, useAnimation, useInView, useScroll } from "framer-motion";
import { ProgressBar } from "./_components/progress-bar";
import { InitialNavbar } from "./_components/initial-navbar";
import { Intro } from "./_components/intro";
import { AboutMe } from "./_components/about-me";
import { TechStack } from "./_components/teck-stack";

export default function Index() {
  const pageRef = useRef(null);
  const screens = ['Introduction', 'About me', 'Tech Stack', 'Projects'];
  const { scrollYProgress } = useScroll({
    container: pageRef
  });
  function Section({ title, key }: { title: string, key: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
      if(isInView) {
        controls.start('visible');
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
      <section ref={ref} key={key}>
        <motion.div className=" flex snap-center justify-center items-center h-screen mb-1 py-1">
          {pageContents}
        </motion.div>
      </section>
    )
  }

  return (
    <motion.div className="h-screen overflow-y-auto overscroll-y-contain snap-y snap-mandatory" ref={pageRef}>
      <InitialNavbar scrollYProgress={scrollYProgress} />
      <ProgressBar scrollYProgress={scrollYProgress} />
      <FloatingNav navItems={[{ name: 'Home', link: '' }]} sectionRef={pageRef} />
      {screens.map((title, key) => Section({ title, key }))}
    </motion.div>
  );
}
