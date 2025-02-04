import Banner from "@/components/Banner";
import "@/styles/globals.css";
import AboutSection from "@/components/AboutSection";
import MonthlyFeaturesGrid from "@/components/MonthlyFeatureGrid";
import MainGrid from "@/components/MainGrid";
import EventsSlideshow from "@/components/EventsSlideshow";


export default function Home() {
  return (
    <main>
      <Banner />
      <div className="main-container" >
        <AboutSection />
        <MainGrid/>
        <MonthlyFeaturesGrid />
        <EventsSlideshow/>
      </div>
    </main>
  );
}
