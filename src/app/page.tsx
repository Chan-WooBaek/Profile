import React from "react";
import Container from "@/app/_components/container";
import { Intro } from "./_components/intro";
import { FloatingNav } from "./_components/ui/floating-navbar";

export default function Index() {
  return (
    <main>
      <FloatingNav navItems={[{name: 'Home', link: ''}]}/>
      {/* <div className="flex flex-col pt-12 pr-32"> 
        <div className="flex border border-black self-end rounded-lg py-1 px-4">
          <a href={''} target="__blank">
            <p className=" font-sans">Contact</p>
          </a>
        </div>
      </div> */}
      <Intro/>
      <Container>
      </Container>
    </main>
  );
}
