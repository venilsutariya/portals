import Cards from '@/components/customUi/Cards'
import Client from '@/components/customUi/Client'
import HeadMain from '@/components/customUi/HeadMain'
import Plans from '@/components/customUi/Plans'
import Project from '@/components/customUi/Project'
import ScrollSlider from '@/components/customUi/ScrollSlider'
import Technologies from '@/components/customUi/Technologies'
import WhatYouGet from '@/components/customUi/WhatYouGet'
import WhyChoose from '@/components/customUi/WhyChoose'

export default function Home() {
  return (
    <div>
        <HeadMain />
        <Client />
        <ScrollSlider />
        <Project />
        <WhatYouGet />
        <Cards />
        <Technologies />
        <WhyChoose />
        {/* <Plans /> */}
    </div>
  )
}
