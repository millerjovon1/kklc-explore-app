import React from "react";
import { StoreAmenities } from "@/data/businessesData";
import styles from "@/styles/components/PlusLandingPage.module.css";

interface AmenitiesSectionProps {
  amenities: StoreAmenities;
}

const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ amenities }) => {
  return (
    <section className={styles.amenitiesSection}>
      <h2>Store Amenities</h2>
      <ul>
        {amenities.wifiAvailable && <li>Wi-Fi Available</li>}
        {amenities.reservationsAccepted && <li>Reservations Accepted</li>}
        {amenities.parkingAvailable && <li>Parking Available</li>}
        {amenities.deliveryAvailable && <li>Delivery Available</li>}
        {amenities.petFriendly && <li>Pet Friendly</li>}
        {amenities.paymentOptions && (
          <li>Payment Options: {amenities.paymentOptions.join(", ")}</li>
        )}
      </ul>
    </section>
  );
};

export default AmenitiesSection;
