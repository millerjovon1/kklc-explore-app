"use client";

import React from "react";
import SeoMeta from "@/components/SeoMeta";
import { Business } from "@/data/businessesData";
import styles from "@/styles/components/PlusLandingPage.module.css";

interface PlusLandingPageProps {
  business: Business;
}

const PlusLandingPage: React.FC<PlusLandingPageProps> = ({ business }) => {
  return (
    <div className={styles.plusLanding}>
      {/* SEO Metadata */}
      <SeoMeta
        pageKey="plusBusinessDetails"
        customMeta={{
          title: `${business.name} - Plus Member - KKLC Explore`,
          description: business.description,
        }}
      />

      {/* Custom Banner */}
      {business.customBanner && (
        <div
          className={styles.banner}
          style={{ backgroundImage: `url(${business.customBanner.imageUrl})` }}
        >
          <h1>{business.customBanner.title || business.name}</h1>
          <p>{business.customBanner.subtitle || "Welcome to our Plus Member page!"}</p>
        </div>
      )}

      {/* Main Info Section */}
      <section className={styles["main-info"]}>
        <h2>About {business.name}</h2>
        <p>{business.description}</p>

        <div className={styles.contact}>
          <p><strong>Phone:</strong> {business.phone}</p>
          <p><strong>Email:</strong> {business.email || "Not available"}</p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={business.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Visit {business.name}
            </a>
          </p>
        </div>
      </section>

      {/* Store Amenities */}
      {business.storeAmenities && (
        <section className={styles.amenities}>
          <h2>Store Amenities</h2>
          <ul>
            {business.storeAmenities.wifiAvailable && <li>Wi-Fi Available</li>}
            {business.storeAmenities.reservationsAccepted && <li>Reservations Accepted</li>}
            {business.storeAmenities.parkingAvailable && <li>Parking Available</li>}
            {business.storeAmenities.deliveryAvailable && <li>Delivery Available</li>}
            {business.storeAmenities.petFriendly && <li>Pet Friendly</li>}
            {business.storeAmenities.paymentOptions && (
              <li>Payment Options: {business.storeAmenities.paymentOptions.join(", ")}</li>
            )}
          </ul>
        </section>
      )}

      {/* Menu Section */}
      {business.menuItems && business.menuItems.length > 0 && (
        <section className={styles.menu}>
          <h2>Menu</h2>
          <ul>
            {business.menuItems.map((item, index) => (
              <li key={index}>
                <strong>{item.name}:</strong> {item.price}
                {item.description && <p>{item.description}</p>}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Promotions Section */}
      {business.promotions && business.promotions.length > 0 && (
        <section className={styles.promotions}>
          <h2>Current Promotions</h2>
          <ul>
            {business.promotions.map((promo, index) => (
              <li key={index}>
                <strong>{promo.title}:</strong> {promo.description}
                {promo.link && (
                  <p>
                    <a
                      href={promo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Learn More
                    </a>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Google Maps Embed */}
      {business.googleMap && (
        <section className={styles["map-section"]}>
          <h2>Find Us</h2>
          <iframe
            src={business.googleMap.embedUrl}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
          {business.googleMap.placeName && <p>{business.googleMap.placeName}</p>}
        </section>
      )}

      {/* Footer */}
      <footer className={styles.footer}>
        <p>{business.customFooter?.text || "Thank you for visiting our Plus Member page!"}</p>
        {business.customFooter?.contactEmail && (
          <p>
            <strong>Contact Us:</strong> {business.customFooter.contactEmail}
          </p>
        )}
        {business.customFooter?.sponsor && <p>Sponsor: {business.customFooter.sponsor}</p>}
      </footer>
    </div>
  );
};

export default PlusLandingPage;
