import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import React from "react";
import { CardContainer } from "./_components/ui/3d-card";
import { ThreeDCard } from "./_components/cards";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <ThreeDCard title={"Test"} description={"This is a test"} imgSrc={""}/>
      </Container>
    </main>
  );
}
