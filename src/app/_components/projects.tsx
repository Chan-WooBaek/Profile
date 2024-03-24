"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

function importAll(r: any) {
  let images: any = {};
  r.keys().map((item: any) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../public/assets/intro', false, /\.(png|jpe?g|svg)$/));

export function Projects() {
  return (
    <div>
    <HeroParallax products={products}/>
    </div>)
}
export const products = [
  {
    title: "GitHub",
    link: "https://github.com/chan-woobaek?tab=repositories",
    thumbnail: images['github-thumbnail.png'],
  },
  {
    title: "LinkedIn",
    link: "https://linkedin.com/in/chan-woo-baek-2b2340202",
    thumbnail:images['linkedIn-thumbnail.png'],
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  
  // {
  //   title: "Editorially",
  //   link: "https://editorially.org",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  // },
  // {
  //   title: "Editrix AI",
  //   link: "https://editrix.ai",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  // },
  // {
  //   title: "Pixel Perfect",
  //   link: "https://app.pixelperfect.quest",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  // },
  // {
  //   title: "Algochurn",
  //   link: "https://algochurn.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  // },
  // {
  //   title: "Renderwork Studio",
  //   link: "https://renderwork.studio",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  // },
  // {
  //   title: "Creme Digital",
  //   link: "https://cremedigital.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  // },
  // {
  //   title: "Golden Bells Academy",
  //   link: "https://goldenbellsacademy.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  // },
  // {
  //   title: "Invoker Labs",
  //   link: "https://invoker.lol",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  // },
  // {
  //   title: "E Free Invoice",
  //   link: "https://efreeinvoice.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  // },
];
