import React from "react";
import SeoMeta from "@/components/SeoMeta";
import { Business } from "@/data/businessesData";
import ContactSection from "@/components/PlusLandingPage/ContactSection";
import MenuSection from "@/components/PlusLandingPage/MenuSection";
import PromotionsSection from "@/components/PlusLandingPage/PromotionsSection";
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

      {/* Plus Badge */}
      <div className={styles.header}>
        <PlusMembershipBadge isPlusAccount={business.membershipLevel === "plus"} />
      </div>

      {/* Custom Banner Section */}
      {business.customBanner && (
        <CustomBanner
          imageUrl={business.customBanner.imageUrl}
          title={business.customBanner.title || business.name}
          subtitle={business.customBanner.subtitle}
        />
      )}

      <div className={styles.mainContainer}>
        {/* About Section */}
        <AboutSection
          name={business.name}
          description={business.description}
          aboutText={business.aboutText}
          aboutSectionImage={business.aboutSectionImage}
        />

        {/* Menu Section */}
        {business.menuItems && (
          <MenuSection
            menuItems={business.menuItems}
            menuSectionImage={business.menuSectionImage}
            logoImage={business.logoImage}
          />
        )}

        {/* Promotions Section */}
        {business.promotions && <PromotionsSection promotions={business.promotions} />}

        {/* Store Amenities Section */}
        {business.storeAmenities && <AmenitiesSection amenities={business.storeAmenities} />}

        {/* Contact Section (with integrated MapSection) */}
        {business.googleMap && (
          <ContactSection
            phone={business.phone}
            email={business.email}
            website={business.website}
            name={business.name}
            socials={business.socials}
            mapEmbedUrl={business.googleMap?.embedUrl}
            placeName={business.googleMap?.placeName}
          />
        )}
      </div>
    </div>
  );
};

export default PlusLandingPage;
