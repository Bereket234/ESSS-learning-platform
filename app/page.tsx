import ExploreSection from "./components/homePage/ExploreSection";
import GetStarted from "./components/homePage/GetStarted";
import HeroSection from "./components/homePage/HeroSection";
import { Poppins } from "next/font/google";


const poppins = Poppins({ 
  weight: '400',
  subsets: ['latin'],
 })


export default function Home() {
  return (
    <div className={poppins.className}>
      <HeroSection />
      <GetStarted />
      <ExploreSection />

    </div>
  )
}
