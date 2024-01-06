"use client";

import Cards from '@/components/customUi/Cards'
import FAQ from '@/components/customUi/FAQ'
import Footer from '@/components/customUi/Footer'
import FormComp from '@/components/customUi/FormComp'
import HeadMain from '@/components/customUi/HeadMain'
import MarqueeComp from '@/components/customUi/Marquee';
import CursorFollower from '@/components/customUi/MouseShadow'
import Plans from '@/components/customUi/Plans'
import Project from '@/components/customUi/Project'
import Technologies from '@/components/customUi/Technologies'
import WhatYouGet from '@/components/customUi/WhatYouGet'
import WhyChoose from '@/components/customUi/WhyChoose'
import 'animate.css/animate.min.css';
import { useState } from 'react';

export default function Home() {

  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringMain, setIsHoveringMain] = useState(false);

  return (
    <>
      {/* @ts-ignore */}
      <CursorFollower isHovering={isHovering} isHoveringMain={isHoveringMain} />
      {/* @ts-ignore */}
      <div className=''><HeadMain setIsHoveringMain={setIsHoveringMain} /></div>
      <MarqueeComp />
      {/* @ts-ignore */}
      <div><Project isHovering={isHovering} setIsHovering={setIsHovering} /></div>
      <div id='howitworks'><WhatYouGet /></div>
      <div><Cards /></div>
      <div id='usecases'><Technologies /></div>
      <WhyChoose />
      <div id='plans'><Plans /></div>
      <div id='contact'><FormComp /></div>
      <FAQ />
      <Footer />
    </>
  )
}