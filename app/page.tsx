import ExploreSection from "./components/home_Page/ExploreSection";
import GetCertified from "./components/home_Page/GetCertified";
import GetStarted from "./components/home_Page/GetStarted";
import HeroSection from "./components/home_Page/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <GetStarted />
      <ExploreSection />
      <GetCertified />
    </div>
  );
}
