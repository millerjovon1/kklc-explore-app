import React from "react";
import SeoMeta from "@/components/SeoMeta";
import { Business } from "@/data/businessesData";
import ContactSection from "@/components/PlusLandingPage/ContactSection";
import MenuSection from "@/components/PlusLandingPage/MenuSection";
import PromotionsSection from "@/components/PlusLandingPage/PromotionsSection";
import StoreInfoSection from "@/components/PlusLandingPage/StoreInfoSection";
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
    <div className={`${styles.plusLanding} main-container`}>
      <SeoMeta
        pageKey="plusBusinessDetails"
        customMeta={{
          title: `${business.name} - Plus Member - KKLC Explore`,
          description: business.description,
        }}
      />

      {/* Plus Badge */}
      <div className={`w-full text-center my-4 ${styles.badgeContainer}`}>
        <PlusMembershipBadge isPlusAccount={business.membershipLevel === "plus"} />
      </div>

      {/* Custom Banner Section */}
      {business.customBanner && (
        <div className={styles.bannerContainer}>
          <CustomBanner
            imageUrl={business.customBanner.imageUrl}
            title={business.customBanner.title || business.name}
            subtitle={business.customBanner.subtitle}
          />
        </div>
      )}

      {/* About Section */}
      <div className={styles.sectionWrapper}>
        <AboutSection
          name={business.name}
          description={business.description}
          aboutText={business.aboutText}
          aboutSectionImage={business.aboutSectionImage}
        />
      </div>

      {/* Store Info Section */}
      <div className={styles.sectionWrapper}>
        <StoreInfoSection
          phone={business.phone}
          email={business.email}
          hours={business.hours}
        />
      </div>

      {/* Menu Section */}
      {business.menuItems && (
        <div className={styles.sectionWrapper}>
          <MenuSection
            menuItems={business.menuItems}
            menuSectionImage={business.menuSectionImage}
            logoImage={business.logoImage}
          />
        </div>
      )}

      {/* Promotions Section */}
      {business.promotions && (
        <div className={styles.sectionWrapper}>
          <PromotionsSection promotions={business.promotions} />
        </div>
      )}

      {/* Store Amenities Section */}
      {business.storeAmenities && (
        <div className={styles.sectionWrapper}>
          <AmenitiesSection amenities={business.storeAmenities} />
        </div>
      )}

      {/* Contact Section */}
      {business.googleMap && (
        <div className={styles.sectionWrapper}>
          <ContactSection
            phone={business.phone}
            email={business.email}
            website={business.website}
            name={business.name}
            socials={business.socials}
            mapEmbedUrl={business.googleMap?.embedUrl}
            placeName={business.googleMap?.placeName}
          />
        </div>
      )}
    </div>
  );
};

export default PlusLandingPage;
