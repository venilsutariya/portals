import Client from '@/components/customUi/Client'
import HeadMain from '@/components/customUi/HeadMain'
import Project from '@/components/customUi/Project'
import ScrollSlider from '@/components/customUi/ScrollSlider'
import WhatYouGet from '@/components/customUi/WhatYouGet'

export default function Home() {
  return (
    <div>
        <HeadMain />
        <Client />
        <ScrollSlider />
        <Project />
        <WhatYouGet />
    </div>
  )
}
