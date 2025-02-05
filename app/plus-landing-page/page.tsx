import React from "react";
import SeoMeta from "@/components/SeoMeta";
import { Business } from "@/data/businessesData";
import ContactSection from "@/components/PlusLandingPage/ContactSection";
import MenuSection from "@/components/PlusLandingPage/MenuSection";
import PromotionsSection from "@/components/PlusLandingPage/PromotionsSection";
import MapSection from "@/components/PlusLandingPage/MapSection";
import styles from "@/styles/components/PlusLandingPage.module.css";
import AboutSection from "@/components/PlusLandingPage/AboutSection";
import AmenitiesSection from "@/components/PlusLandingPage/AmenetiesSection";

interface PlusLandingPageProps {
  business: Business;
}

const PlusLandingPage: React.FC<PlusLandingPageProps> = ({ business }) => {
  return (
    <div className={styles.plusLanding}>
      <SeoMeta
        pageKey="plusBusinessDetails"
        customMeta={{
          title: `${business.name} - Plus Member - KKLC Explore`,
          description: business.description,
        }}
      />
      {business.customBanner && (
        <div
          className={styles.banner}
          style={{
            backgroundImage: `linear-gradient(to bottom,rgb(158 135 45 / 68%), rgb(0 0 0 / 82%)),
            url(${business.customBanner.imageUrl})`,
            opacity: 0.8,
          }}
        >
          <h1>{business.customBanner.title || business.name}</h1>
          <p>{business.customBanner.subtitle}</p>
        </div>
      )}
      <div className={styles.mainContainer}>
        <AboutSection name={business.name} description={business.description} />
        <ContactSection phone={business.phone} email={business.email} website={business.website} name={business.name} />
        {business.storeAmenities && <AmenitiesSection amenities={business.storeAmenities} />}
        {business.menuItems && <MenuSection menuItems={business.menuItems} />}
        {business.promotions && <PromotionsSection promotions={business.promotions} />}
        {business.googleMap && <MapSection embedUrl={business.googleMap.embedUrl} placeName={business.googleMap.placeName} />}
      </div>
    </div>
  );
};

export default PlusLandingPage;
