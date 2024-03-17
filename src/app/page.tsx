import React from "react";
import Container from "@/app/_components/container";
import { ThreeDCard } from "./_components/card";
import { Intro } from "./_components/intro";

export default function Index() {
  return (
    <main>
      <Intro/>
      <Container>
        <ThreeDCard title={"Test"} description={"This is a test"} imgSrc={""}/>
      </Container>
    </main>
  );
}
