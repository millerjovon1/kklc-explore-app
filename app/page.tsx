import Banner from "@/components/Banner";
import AboutSection from "@/components/AboutSection";
import MonthlyFeatures from "@/components/MonthlyFeatures";
import Footer  from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Banner />
      <AboutSection />
      <MonthlyFeatures />
      <Footer />
    </main>
  );
}
