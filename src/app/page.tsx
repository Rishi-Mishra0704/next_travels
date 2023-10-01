import Hero from "@/components/Hero"
import ImageSlider from "@/components/ImageSlider"
import Offers from "@/components/Offers"
import Plan from "@/components/Plan"
import Rooms from "@/components/Rooms"
export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Offers/>
      <Plan/>
      <Rooms/>
      <ImageSlider/>
    </main>
  )
}
