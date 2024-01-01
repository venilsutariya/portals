import Cards from '@/components/customUi/Cards'
import Client from '@/components/customUi/Client'
import FAQ from '@/components/customUi/FAQ'
import Footer from '@/components/customUi/Footer'
import FormComp from '@/components/customUi/FormComp'
import HeadMain from '@/components/customUi/HeadMain'
import CursorFollower from '@/components/customUi/MouseShadow'
import Plans from '@/components/customUi/Plans'
import Project from '@/components/customUi/Project'
import ScrollSlider from '@/components/customUi/ScrollSlider'
import Technologies from '@/components/customUi/Technologies'
import WhatYouGet from '@/components/customUi/WhatYouGet'
import WhyChoose from '@/components/customUi/WhyChoose'
import 'animate.css/animate.min.css';

export default function Home() {

  return (
    <>
      <CursorFollower />
      <HeadMain />
      <Client />
      <div id='howitworks'><ScrollSlider /></div>
      <div><Project /></div>
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
