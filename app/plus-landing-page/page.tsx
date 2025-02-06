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
import CustomBanner from "@/components/PlusLandingPage/CustomBanner";
import PlusMembershipBadge from "@/components/PlusLandingPage/PlusMembershipBadge";

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

      {/* Replaced inline banner with imported component */}
      <PlusMembershipBadge isPlusAccount={business.membershipLevel === "plus"} />

      {business.customBanner && (
        <CustomBanner
          imageUrl={business.customBanner.imageUrl}
          title={business.customBanner.title || business.name}
          subtitle={business.customBanner.subtitle}
        />
      )}

      <div className={styles.mainContainer}>
        <AboutSection
          name={business.name}
          description={business.description}
          aboutSectionImage={business.aboutSectionImage}
        />
        <ContactSection phone={business.phone} email={business.email} website={business.website} name={business.name} />
        {business.storeAmenities && <AmenitiesSection amenities={business.storeAmenities} />}
        {business.menuItems && (
          <MenuSection menuItems={business.menuItems} menuSectionImage={business.menuSectionImage} />
        )}
        {business.promotions && <PromotionsSection promotions={business.promotions} />}
        {business.googleMap && (
          <MapSection embedUrl={business.googleMap.embedUrl} placeName={business.googleMap.placeName} />
        )}
      </div>
    </div>
  );
};

export default PlusLandingPage;
