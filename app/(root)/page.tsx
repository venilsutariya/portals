import Cards from '@/components/customUi/Cards'
import Client from '@/components/customUi/Client'
import FAQ from '@/components/customUi/FAQ'
import Footer from '@/components/customUi/Footer'
import FormComp from '@/components/customUi/FormComp'
import HeadMain from '@/components/customUi/HeadMain'
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
        <HeadMain />
        <Client />
        <ScrollSlider />
        <Project />
        <WhatYouGet />
        <Cards />
        <Technologies />
        <WhyChoose />
        <Plans />
        <FormComp />
        <FAQ />
        <Footer />
    </>
  )
}
