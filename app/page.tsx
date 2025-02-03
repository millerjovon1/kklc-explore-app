import Banner from "@/components/Banner";
import "@/styles/globals.css";
import AboutSection from "@/components/AboutSection";
import MonthlyFeaturesGrid from "@/components/MonthlyFeatureGrid";
import MainGrid from "@/components/MainGrid";
import Footer  from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Banner />
      <div className="main-container" >
        <AboutSection />
        <MainGrid/>
        <MonthlyFeaturesGrid />
      </div>
      <Footer />
    </main>
  );
}
